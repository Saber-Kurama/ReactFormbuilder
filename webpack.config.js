import {
    srcRoot, distRoot
}
from './constants'
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
        }]
    }
}
module.exports = config;
