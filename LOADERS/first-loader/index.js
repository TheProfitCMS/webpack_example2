module.exports = function(content) {
  log("\n********************************")
  log('FIRST', content.slice(0, 20))
  log('\n********************************')
  this.cacheable();
  return content
}
