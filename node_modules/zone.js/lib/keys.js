/**
 * Creates keys for `private` properties on exposed objects to minimize interactions with other codebases.
 * The key will be a Symbol if the host supports it; otherwise a prefixed string.
 */
if (typeof Symbol !== 'undefined') {
  function create(name) {
    return Symbol(name);
  } 
} else {
  function create(name) {
    return '_zone$' + name;
  }
}

var commonKeys = {
  addEventListener: create('addEventListener'),
  removeEventListener: create('removeEventListener')
};

module.exports = {
  create: create,
  common: commonKeys
};