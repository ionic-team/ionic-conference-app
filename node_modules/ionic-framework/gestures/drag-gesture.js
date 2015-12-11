var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var gesture_1 = require('./gesture');
var util = require('../util');
var DragGesture = (function (_super) {
    __extends(DragGesture, _super);
    function DragGesture(element, opts) {
        if (opts === void 0) { opts = {}; }
        util.defaults(opts, {});
        _super.call(this, element, opts);
    }
    DragGesture.prototype.listen = function () {
        var _this = this;
        _super.prototype.listen.call(this);
        this.on('panstart', function (ev) {
            if (_this.onDragStart(ev) !== false) {
                _this.dragging = true;
            }
        });
        this.on('panmove', function (ev) {
            if (!_this.dragging)
                return;
            if (_this.onDrag(ev) === false) {
                _this.dragging = false;
            }
        });
        this.on('panend', function (ev) {
            if (!_this.dragging)
                return;
            _this.onDragEnd(ev);
            _this.dragging = false;
        });
        this.hammertime.get('pan').set(this._options);
    };
    DragGesture.prototype.onDrag = function () { };
    DragGesture.prototype.onDragStart = function () { };
    DragGesture.prototype.onDragEnd = function () { };
    return DragGesture;
})(gesture_1.Gesture);
exports.DragGesture = DragGesture;