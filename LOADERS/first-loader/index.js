module.exports = function(content) {
  log("\n********************************")
  log('FIRST', content.slice(0, 20))
  log('\n********************************')
  debugger
  this.cacheable();
  return content
}
