'use strict';

const webpack = require('webpack');

let webPackConfig = {
  context: __dirname + '/__SRC/assets',

  entry: {
    'assets/js/app.js': './js/app.js'
  },

  // https://github.com/webpack/docs/wiki/configuration#output
  output: {
    path: `${ __dirname }/public`,
    publicPath: '/public',

    chunkFilename: "[chunkhash]-[name]",
    filename: "[name]"
  }
}

webPackConfig.resolve = {
  alias: {
    css_path: __dirname + "/__SRC/assets/css/",
    js_path:  __dirname + "/__SRC/assets/js/"
  }
}

webPackConfig.module = {
  loaders: [
    {
      test:   /\.js/,
      loader: 'babel',
      exclude: /(node_modules|bower_components)/,
      query: {
        presets: ['es2015']
      }
    },

    {
      test:    /\.css$/,
      loader: 'style-loader!css-loader'
    }
  ]
}

webPackConfig.watchOptions = {
  aggregateTimeout: 100
}

module.exports = webPackConfig;
