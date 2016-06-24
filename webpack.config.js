'use strict';

module.exports = {
    entry: './client.js',
    output: {
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
            }
        ]
    },

    eslint: {
        failOnWarning: false,
        failOnError: true
    }
};