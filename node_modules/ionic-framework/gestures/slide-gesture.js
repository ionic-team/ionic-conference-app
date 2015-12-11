var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var drag_gesture_1 = require('./drag-gesture');
var util = require('../util');
var SlideGesture = (function (_super) {
    __extends(SlideGesture, _super);
    function SlideGesture(element, opts) {
        if (opts === void 0) { opts = {}; }
        _super.call(this, element, opts);
        this.element = element;
    }
    /*
     * Get the min and max for the slide. pageX/pageY.
     * Only called on dragstart.
     */
    SlideGesture.prototype.getSlideBoundaries = function (slide, ev) {
        return {
            min: 0,
            max: this.element.offsetWidth
        };
    };
    /*
     * Get the element's pos when the drag starts.
     * For example, an open side menu starts at 100% and a closed
     * sidemenu starts at 0%.
     */
    SlideGesture.prototype.getElementStartPos = function (slide, ev) {
        return 0;
    };
    SlideGesture.prototype.canStart = function () {
        return true;
    };
    SlideGesture.prototype.onDragStart = function (ev) {
        var _this = this;
        if (!this.canStart(ev))
            return false;
        this.slide = {};
        var promise = this.onSlideBeforeStart(this.slide, ev) || Promise.resolve();
        promise.then(function () {
            var _a = _this.getSlideBoundaries(_this.slide, ev), min = _a.min, max = _a.max;
            _this.slide.min = min;
            _this.slide.max = max;
            _this.slide.elementStartPos = _this.getElementStartPos(_this.slide, ev);
            _this.slide.pointerStartPos = ev.center[_this.direction];
            _this.slide.started = true;
            _this.onSlideStart(_this.slide, ev);
        }).catch(function () {
            _this.slide = null;
        });
    };
    SlideGesture.prototype.onDrag = function (ev) {
        if (!this.slide || !this.slide.started)
            return;
        this.slide.pos = ev.center[this.direction];
        this.slide.distance = util.clamp(this.slide.min, this.slide.pos - this.slide.pointerStartPos + this.slide.elementStartPos, this.slide.max);
        this.slide.delta = this.slide.pos - this.slide.pointerStartPos;
        this.onSlide(this.slide, ev);
    };
    SlideGesture.prototype.onDragEnd = function (ev) {
        if (!this.slide || !this.slide.started)
            return;
        this.onSlideEnd(this.slide, ev);
        this.slide = null;
    };
    SlideGesture.prototype.onSlideBeforeStart = function () { };
    SlideGesture.prototype.onSlideStart = function () { };
    SlideGesture.prototype.onSlide = function () { };
    SlideGesture.prototype.onSlideEnd = function () { };
    return SlideGesture;
})(drag_gesture_1.DragGesture);
exports.SlideGesture = SlideGesture;