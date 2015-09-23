var webpack = require("webpack");
var path = require('path');

var config = {
    entry: path.resolve(__dirname, 'static/js/src/entry.js'),
    output: {
        path: path.resolve(__dirname, 'static/js/build'),
        filename: 'bundle.min.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true
        })
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
            exclude: /node_modules/,  // excluding external libraries from your loader test.
            loader: 'babel' // The module to load. "babel" is short for "babel-loader"
        }]
    }
};

module.exports = config;