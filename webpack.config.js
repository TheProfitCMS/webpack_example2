'use strict';

const webpack = require('webpack')
let webPackConfig = {}

webPackConfig.plugins = []
webPackConfig.devtool = 'source-map'
webPackConfig.context = __dirname + '/__SRC/assets';

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

webPackConfig.resolve = webPackConfig.resolve || {}
webPackConfig.resolve.alias = {
  css_path: __dirname + "/__SRC/assets/css/",
  js_path:  __dirname + "/__SRC/assets/js/"
}

webPackConfig.resolveLoader = webPackConfig.resolveLoader || {}
webPackConfig.resolveLoader.modulesDirectories = [
  '.', 'node_modules', 'web_loaders', 'web_modules', 'node_loaders'
]

webPackConfig.module = webPackConfig.module || {}
webPackConfig.module.loaders = [
  {
    test:   /\.js/,
    loader: 'babel',
    exclude: /(node_modules|bower_components)/,
    query: { presets: ['es2015'] }
  },

  {
    test:   /\.css$/,
    loaders: ['first-loader', 'style', 'css?sourceMap']
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
