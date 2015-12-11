function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./storage/storage'));
__export(require('./storage/local-storage'));
__export(require('./storage/sql'));