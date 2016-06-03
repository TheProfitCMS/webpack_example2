window.log = function() {
  try {
    return console.log.apply(console, arguments);
  } catch (_error) {}
}
