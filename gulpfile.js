  
const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const htmlmin = require('gulp-htmlmin');
const runSequence = require('run-sequence');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const merge = require('merge-stream');

const config = {
  src: 'src/',
  dist: 'dist/',
  cssin: './src/css/style.css',
  cssout: './dist/css',
  sassin: 'src/scss/**/*.sass',
  sassout: 'src/css/',
  jsin: './src/js/**/*.js',
  jsout: './dist/js',
  htmlin: './src/**/*.html',
  htmlout: './dist',
  imgin: [
    './src/img/*', 
    './src/img/*/*'
  ],
  imgout: './dist/img/'
};

gulp.task('reload', function() {
  browserSync.reload();
});

// Gulp task to minify CSS files
gulp.task('styles', function () {
  return gulp.src(config.cssin)
    .pipe(csso())
    .pipe(gulp.dest(config.cssout))
});

// Gulp task to minify JavaScript files
gulp.task('scripts', function() {
  return gulp.src(config.jsin)
    .pipe(uglify())
    .pipe(gulp.dest(config.jsout))
});

// Gulp task to minify HTML files
gulp.task('pages', function() {
  return gulp.src([config.htmlin])
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest(config.htmlout));
});

// Gulp task to minify images
gulp.task('img', function() {
  let images = config.imgin.map((dir) => {
    return gulp.src(dir)
    .pipe(imagemin())
    .pipe(gulp.dest(config.imgout));
  });
  
  return merge(images);
});

gulp.task('sass', function(){
  return gulp.src(config.sassin)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsersList: ['last 3 versions']
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.sassout))
    .pipe(browserSync.stream());
});

gulp.task('serve', gulp.series('sass', function() {
  browserSync({
    server: config.src
  });

  gulp.watch(config.sassin, gulp.series('sass'))
}));

gulp.task('build', gulp.series('styles', 'scripts', 'pages', 'img'))

gulp.task('beta', function() {
  browserSync({
    server: config.dist
  })
})

gulp.task('default', gulp.series('serve'));