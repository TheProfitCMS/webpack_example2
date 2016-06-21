require('./log')

let ExtractTextPlugin = require('./LOADERS/extract-text-webpack-plugin');
let extractCSS = new ExtractTextPlugin('assets/css/main.css');

'use strict';

let webpack = require('webpack')

let webPackConfig = {
  plugins: [],
  module:  {},
  resolve: {},
  resolveLoader: {},
  devtool: 'source-map',
  context: `${ __dirname }/__SRC/assets`
}

webPackConfig.entry = {
  'assets/js/app.js': './js/app',
  'assets/js/vendors.js': './js/vendors'
}

// https://github.com/webpack/docs/wiki/configuration#output
webPackConfig.output = {
  path: `${ __dirname }/public`,
  publicPath: '/public',

  chunkFilename: "[chunkhash]-[name]",
  filename: "[name]"
}

webPackConfig.plugins = [
  extractCSS
]

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
    loader: extractCSS.extract(['second-loader', 'css?sourceMap', 'first-loader'])
  },

  {
    test: /\.sass$/,
    loader: extractCSS.extract(['css?sourceMap', 'sass?sourceMap&indentedSyntax'])
  },

  {
    test: /\.scss$/,
    loader: extractCSS.extract(['css?sourceMap', 'sass?sourceMap'])
  }
]

webPackConfig.watchOptions = {
  aggregateTimeout: 100
}

module.exports = webPackConfig;
