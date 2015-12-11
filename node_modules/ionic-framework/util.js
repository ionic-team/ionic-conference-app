function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var domUtil = require('./util/dom');
exports.dom = domUtil;
__export(require('./util/util'));