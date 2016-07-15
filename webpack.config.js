'use strict';

const webpack = require('webpack');

module.exports = {
    entry: __dirname + '/frontend/client.js',
    output: {
        path: __dirname + '/public',
        publicPath: '/',
        filename: 'build.js'
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
            },
            {
                test: /\.css$/,
                loader:'style!css'
            },
            {
                test: /\.less$/,
                loader:'style!css!less'
            },
            {
                test: /\.(woff|woff2)$/,
                loader: "url?limit=10000"
            },
            {
                test: /\.(jpg|png|ttf|eot|svg)$/,
                loader: 'file'
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