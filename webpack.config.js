import {
    srcRoot, distRoot
}
from './constants';
import ExtractTextPlugin from"extract-text-webpack-plugin";
const config = {
    devtool: 'inline-source-map',
    entry: {
        'app': './app/js/app.js'
    },
    output: {
        path: "./build/js/",
        filename: '[name].js'
    },

    module: {
        preLoaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'eslint-loader'
        }],
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },{ test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader','css-loader!less-loader') }]
    },
    plugins: [
        new ExtractTextPlugin("../css/[name].css")
    ]

}
module.exports = config;
