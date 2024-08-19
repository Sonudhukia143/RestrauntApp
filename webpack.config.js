const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { watchFile } = require("fs");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,"dist"),
        clean: true,
    },
    devtool: "eval-source-map",
    module: {
        rules:[
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader'],
            },
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            {
                test: /\.(png|jpe?g|gif|jpeg)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
            filename: "index.html",
        }),
    ],
    devServer: {
        static:{
            directory: path.join(__dirname,'dist'),
        },
        compress: true,
        port: 3000,
        open: true,
        hot: true,
    }
};