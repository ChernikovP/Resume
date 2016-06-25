'use strict';

const webpack = require('webpack');

module.exports = {
    entry: __dirname + '/frontend/client.js',
    output: {
        path: __dirname + '/public',
        publicPath: '/',
        filename: 'build.[hash].js'
    },

    devtool: 'source-map',

    module: {
        preLoaders: [
            {
                test: /\.js?$/,
                loader: 'eslint',
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    },

    eslint: {
        failOnWarning: false,
        failOnError: true
    },

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js']
    },

    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader'],
        extensions: ['', '.js']
    },

    plugins: [
        new webpack.NoErrorsPlugin()
    ]
};