const path = require('path');
var webpack = require("webpack");
const projectPath = path.resolve(__dirname, "../");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'js/[name].min.js'
    },
    resolve: {
        modules: ['src', path.resolve("./node_modules")],
        extensions: [
            ".js",
            ".jsx",
            ".json",
            ".ts",
            ".tsx",
            "png",
            "jpg",
            "svg",
            "scss",
            "css",
        ],
    },
    entry: path.join(__dirname, '/src/index.tsx'),

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: './index.html', //relative to root of the application
            hash: true,
        }),
    ],
    devServer:{
        historyApiFallback: true,
        port: 3000,
        disableHostCheck: true,
        open: true,
        inline: true,
    }
};
