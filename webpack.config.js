'use strict';

const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

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

/*
  EXTRACT SPECIFIC CSS FILES FROM ENTRY POINTS
*/

let extractSpecificCSSFiles = {
  css: {
    'main.css': 'assets/css/MAIN.css'
  },
  sass: {
    'first-entry.sass': 'assets/css/FIRST.css'
  },
  scss: {
    'second-entry.scss': 'assets/css/SECOND.css'
  }
}

function extractCSSFilesExclude(extractSpecificCSSFiles, css_type){
  if(!css_type) return null
  var patterns = []

  for(var filename_pattern in extractSpecificCSSFiles[css_type]){
    var regexp = new RegExp(filename_pattern)
    if(patterns.indexOf(filename_pattern) == -1) patterns.push(regexp)
  }

  if(patterns.length == 0) return null;
  return patterns
}

/*
  ~ EXTRACT SPECIFIC CSS FILES FROM ENTRY POINTS
*/

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
    loaders: ['style', 'css?sourceMap'],
    exclude: extractCSSFilesExclude(extractSpecificCSSFiles, 'css')
  },

  {
    test: /\.sass$/,
    loaders: ['style', 'css?sourceMap', 'sass?sourceMap&indentedSyntax'],
    exclude: extractCSSFilesExclude(extractSpecificCSSFiles, 'sass')
  },

  {
    test: /\.scss$/,
    loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
    exclude: extractCSSFilesExclude(extractSpecificCSSFiles, 'scss')
  }
]

/*
  EXTRACT SPECIFIC CSS FILES FROM ENTRY POINTS
*/
for(var css_type in extractSpecificCSSFiles){
  for(var filename_pattern in extractSpecificCSSFiles[css_type]) {
    var dist_filename = extractSpecificCSSFiles[css_type][filename_pattern];

    if(css_type == 'css'){
      console.log("CSS", filename_pattern, dist_filename)

      let css_extract = new ExtractTextPlugin(filename_pattern, dist_filename)
      webPackConfig.plugins.push(css_extract)

      webPackConfig.module.loaders.push({
        test:    extractCSSFilesExclude(extractSpecificCSSFiles, 'css'),
        loader:  css_extract.extract(['css?sourceMap'])
      })
    }

    if(css_type == 'sass') {
      console.log("SASS", filename_pattern, dist_filename)

      let sass_extract = new ExtractTextPlugin(filename_pattern, dist_filename)
      webPackConfig.plugins.push(sass_extract)

      webPackConfig.module.loaders.push({
        test:    extractCSSFilesExclude(extractSpecificCSSFiles, 'sass'),
        loader: sass_extract.extract(['css?sourceMap', 'sass?sourceMap&indentedSyntax'])
      })
    }

    if(css_type == 'scss') {
      console.log("SCSS", filename_pattern, dist_filename)

      let scss_extract = new ExtractTextPlugin(filename_pattern, dist_filename)
      webPackConfig.plugins.push(scss_extract)

      webPackConfig.module.loaders.push({
        test:    extractCSSFilesExclude(extractSpecificCSSFiles, 'scss'),
        loader: scss_extract.extract(['css?sourceMap', 'sass?sourceMap'])
      })
    }
  }
}

/*
  ~ EXTRACT SPECIFIC CSS FILES FROM ENTRY POINTS
*/

webPackConfig.watchOptions = {
  aggregateTimeout: 100
}

module.exports = webPackConfig;
