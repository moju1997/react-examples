var webpack = require('webpack');

var config = {
  entry: __dirname + '/src/js/index.js',
  output: {
    path: __dirname + '/src',
    filename: 'index.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [ 'es2015', 'react']
        }
      }
    ]
  }
}

module.exports = config;
