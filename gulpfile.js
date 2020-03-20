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

const config = {
  src: 'src/',
  scssin: 'src/scss/**/*.scss',
  scssout: 'src/css/',
  sassin: 'src/scss/**/*.sass',
};

gulp.task('reload', function() {
  browserSync.reload();
});

// Gulp task to minify CSS files
gulp.task('styles', function () {
  return gulp.src('./src/css/index.css')
    .pipe(csso())
    .pipe(gulp.dest('./dist/css'))
});

// Gulp task to minify JavaScript files
gulp.task('scripts', function() {
  return gulp.src('./src/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
});

// Gulp task to minify HTML files
gulp.task('pages', function() {
  return gulp.src(['./src/**/*.html'])
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('./dist'));
});

// Gulp task to minify images

gulp.task('img', function(){
  return gulp.src('./src/img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('./dist/img'));
})

gulp.task('scss', function(){
  return gulp.src(config.scssin)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsersList: ['last 3 versions']
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.scssout))
    .pipe(browserSync.stream());
});

gulp.task('sass', function(){
  return gulp.src(config.sassin)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsersList: ['last 3 versions']
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.scssout))
    .pipe(browserSync.stream());
});

gulp.task('serve', gulp.series('sass', 'scss', function() {
  browserSync({
    server: config.src
  });

  gulp.watch(config.scssin, gulp.series('scss'));
  gulp.watch(config.sassin, gulp.series('sass'))
}));

gulp.task('default', gulp.series('serve'));