module.exports = function(content) {
  log("\n********************************")
  log('SECOND', content.slice(0, 200))
  log('\n********************************')
  this.cacheable();
  return content
}
