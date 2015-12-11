function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./config/bootstrap'));
__export(require('./config/config'));
__export(require('./config/decorators'));
__export(require('./config/directives'));
__export(require('./components'));
__export(require('./platform/platform'));
__export(require('./platform/storage'));
__export(require('./util/click-block'));
__export(require('./util/events'));
__export(require('./util/keyboard'));
__export(require('./animations/animation'));
__export(require('./translation/translate'));
__export(require('./translation/translate_pipe'));
// these modules don't export anything
require('./config/modes');
require('./platform/registry');
require('./animations/builtins');
require('./animations/ios-transition');
require('./animations/md-transition');