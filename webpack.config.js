'use strict';

const webpack = require('webpack')
let webPackConfig = {
  plugins: [],
  module:  {},
  resolve: {},
  resolveLoader: {},
  devtool: 'source-map',
  context: `${ __dirname }/__SRC/assets`
}

webPackConfig.entry = {
  'assets/js/app.js': './js/app'
}

// https://github.com/webpack/docs/wiki/configuration#output
webPackConfig.output = {
  path: `${ __dirname }/public`,
  publicPath: '/public',

  chunkFilename: "[chunkhash]-[name]",
  filename: "[name]"
}

webPackConfig.resolve.alias = {
  css_path: __dirname + "/__SRC/assets/css/",
  js_path:  __dirname + "/__SRC/assets/js/"
}

// http://webpack.github.io/docs/configuration.html#resolveloader
webPackConfig.resolveLoader.modulesDirectories = [
  './LOADERS', 'node_modules', 'web_loaders', 'web_modules', 'node_loaders'
]

webPackConfig.module.loaders = [
  {
    test:   /\.js/,
    loader: 'babel',
    exclude: /(node_modules|bower_components)/,
    query: { presets: ['es2015'] }
  },

  {
    test:   /\.css$/,
    loaders: ['style', 'css?sourceMap', 'first-loader']
  },

  {
    test: /\.sass$/,
    loaders: ['style', 'css?sourceMap', 'sass?sourceMap&indentedSyntax']
  },

  {
    test: /\.scss$/,
    loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
  }
]

webPackConfig.watchOptions = {
  aggregateTimeout: 100
}

module.exports = webPackConfig;
