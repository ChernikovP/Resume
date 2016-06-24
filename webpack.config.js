'use strict';

module.exports = {
    entry: './client.js',
    output: {
        filename: 'build.js'
    },

    watch: true,

    watchOption: {
        aggregateTimeout: 100
    },

    devtool: 'source-map',

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    }
};