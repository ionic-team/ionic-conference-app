var util = require('../util');
var hammer_1 = require('./hammer');
/**
 * A gesture recognizer class.
 *
 * TODO(mlynch): Re-enable the DOM event simulation that was causing issues (or verify hammer does this already, it might);
 */
var Gesture = (function () {
    function Gesture(element, opts) {
        if (opts === void 0) { opts = {}; }
        util.defaults(opts, {
            domEvents: true
        });
        this.element = element;
        // Map 'x' or 'y' string to hammerjs opts
        this.direction = opts.direction || 'x';
        opts.direction = this.direction === 'x' ?
            hammer_1.Hammer.DIRECTION_HORIZONTAL :
            hammer_1.Hammer.DIRECTION_VERTICAL;
        this._options = opts;
        this._callbacks = {};
    }
    Gesture.prototype.options = function (opts) {
        if (opts === void 0) { opts = {}; }
        util.extend(this._options, opts);
    };
    Gesture.prototype.on = function (type, cb) {
        if (type == 'pinch' || type == 'rotate') {
            this.hammertime.get('pinch').set({ enable: true });
        }
        this.hammertime.on(type, cb);
        (this._callbacks[type] || (this._callbacks[type] = [])).push(cb);
    };
    Gesture.prototype.off = function (type, cb) {
        this.hammertime.off(type, this._callbacks[type] ? cb : null);
    };
    Gesture.prototype.listen = function () {
        this.hammertime = hammer_1.Hammer(this.element, this._options);
    };
    Gesture.prototype.unlisten = function () {
        if (this.hammertime) {
            for (var type in this._callbacks) {
                for (var i = 0; i < this._callbacks[type].length; i++) {
                    this.hammertime.off(type, this._callbacks[type]);
                }
            }
            this.hammertime.destroy();
            this.hammertime = null;
            this._callbacks = {};
        }
    };
    Gesture.prototype.destroy = function () {
        this.unlisten();
    };
    return Gesture;
})();
exports.Gesture = Gesture;