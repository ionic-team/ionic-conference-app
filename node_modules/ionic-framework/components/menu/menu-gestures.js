var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var slide_edge_gesture_1 = require('../../gestures/slide-edge-gesture');
var util = require('../../util');
var MenuContentGesture = (function (_super) {
    __extends(MenuContentGesture, _super);
    function MenuContentGesture(menu, targetEl, options) {
        if (options === void 0) { options = {}; }
        _super.call(this, targetEl, util.extend({
            direction: (menu.side === 'left' || menu.side === 'right') ? 'x' : 'y',
            edge: menu.side,
            threshold: 75
        }, options));
        this.menu = menu;
        this.listen();
    }
    MenuContentGesture.prototype.canStart = function (ev) {
        return this.menu.isOpen && this.menu.isEnabled ? true : _super.prototype.canStart.call(this, ev);
    };
    // Set CSS, then wait one frame for it to apply before sliding starts
    MenuContentGesture.prototype.onSlideBeforeStart = function (slide, ev) {
        this.menu.setProgressStart();
    };
    MenuContentGesture.prototype.onSlide = function (slide, ev) {
        this.menu.setProgess(slide.distance / slide.max);
    };
    MenuContentGesture.prototype.onSlideEnd = function (slide, ev) {
        var shouldComplete = (Math.abs(ev.velocityX) > 0.2 || Math.abs(slide.delta) > Math.abs(slide.max) * 0.5);
        this.menu.setProgressEnd(shouldComplete);
    };
    MenuContentGesture.prototype.getElementStartPos = function (slide, ev) {
        return this.menu.isOpen ? slide.max : slide.min;
    };
    MenuContentGesture.prototype.getSlideBoundaries = function () {
        return {
            min: 0,
            max: this.menu.width()
        };
    };
    return MenuContentGesture;
})(slide_edge_gesture_1.SlideEdgeGesture);
exports.MenuContentGesture = MenuContentGesture;
/**
 * Support dragging the target menu as well as the content.
 */
var TargetGesture = (function (_super) {
    __extends(TargetGesture, _super);
    function TargetGesture(menu) {
        _super.call(this, menu, menu.getNativeElement(), {
            threshold: 0
        });
    }
    return TargetGesture;
})(MenuContentGesture);
exports.TargetGesture = TargetGesture;
var LeftMenuGesture = (function (_super) {
    __extends(LeftMenuGesture, _super);
    function LeftMenuGesture(menu) {
        _super.call(this, menu, menu.getContentElement());
    }
    return LeftMenuGesture;
})(MenuContentGesture);
exports.LeftMenuGesture = LeftMenuGesture;
var RightMenuGesture = (function (_super) {
    __extends(RightMenuGesture, _super);
    function RightMenuGesture(menu) {
        _super.call(this, menu, menu.getContentElement());
    }
    RightMenuGesture.prototype.onSlide = function (slide, ev) {
        this.menu.setProgess(slide.distance / slide.min);
    };
    RightMenuGesture.prototype.getElementStartPos = function (slide, ev) {
        return this.menu.isOpen ? slide.min : slide.max;
    };
    RightMenuGesture.prototype.getSlideBoundaries = function () {
        return {
            min: -this.menu.width(),
            max: 0
        };
    };
    return RightMenuGesture;
})(MenuContentGesture);
exports.RightMenuGesture = RightMenuGesture;