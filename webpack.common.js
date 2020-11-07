const path = require("path");
//var glob = require('glob');

module.exports = {
    entry: {
        main: "./src/js/scripts.js"
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            }, {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[contentHash].[ext]",
                        outputPath: "assets"
                    }
                }
            }, {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env', {
                                'plugins': ['@babel/plugin-proposal-class-properties']
                            }
                        ]
                    }
                }
            }
        ]
    }
};