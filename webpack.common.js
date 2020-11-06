const path = require("path");
//var glob = require('glob');

module.exports = {
    entry: {
        main: "./src/js/scripts.js",
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
            }
        ]
    }
};