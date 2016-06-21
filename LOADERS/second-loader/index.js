var loaderUtils = require("loader-utils");

module.exports = function(content) {
  log("\n********************************")
  log('SECOND', content.slice(0, 200))
  log("\n********************************")

  // entry
  debugger

  this.cacheable();
  return content
}

// this._compilation.entries[0].resource
// this._compilation.entries[0].rawRequest
// this._compilation.compiler.outputPath
// this._compilation.compiler.options.output.path

// for(var i in this){ log(i) }
// =>
// this.data
// this.options
// this.query
// this.resourcePath

// this.inputValue
// this.async
// this.callback
// this.version
// this.context
// this.loaders
// this.loaderIndex
// this.resource
// this.resourcePath
// this.resourceQuery
// this.emitWarning
// this.emitError
// this.exec
// this.resolve
// this.resolveSync
// this.cacheable
// this.dependency
// this.addDependency
// this.addContextDependency
// this.clearDependencies
// this.value
//
// this.debug
// this.webpack
// this.sourceMap
// this.emitFile
// this._module
// this._compilation
// this._compiler
// this.fs
// this.target
// this.loadModule
