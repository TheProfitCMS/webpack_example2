'use strict';

const webpack = require('webpack');

let webPackConfig = {
  context: __dirname + '/__SRC/assets',

  entry: {
    'assets/css/reset.css': './css/reset.css'
  },

  // https://github.com/webpack/docs/wiki/configuration#output
  output: {
    path: `${ __dirname }/public`,
    publicPath: '/public',

    chunkFilename: "[chunkhash]-[name]",
    filename: "[name]"
  }
}

webPackConfig.module = {
  loaders: [
    { test: /\.css$/, loader: 'style-loader!css-loader' }
  ]
}

webPackConfig.watchOptions = {
  aggregateTimeout: 100
}

module.exports = webPackConfig;
