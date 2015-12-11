var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var slide_gesture_1 = require('./slide-gesture');
var util_1 = require('../util/util');
var dom_1 = require('../util/dom');
var SlideEdgeGesture = (function (_super) {
    __extends(SlideEdgeGesture, _super);
    function SlideEdgeGesture(element, opts) {
        if (opts === void 0) { opts = {}; }
        util_1.defaults(opts, {
            edge: 'left',
            threshold: 50
        });
        _super.call(this, element, opts);
        // Can check corners through use of eg 'left top'
        this.edges = opts.edge.split(' ');
        this.threshold = opts.threshold;
    }
    SlideEdgeGesture.prototype.canStart = function (ev) {
        var _this = this;
        this._d = this.getContainerDimensions();
        return this.edges.every(function (edge) { return _this._checkEdge(edge, ev.center); });
    };
    SlideEdgeGesture.prototype.getContainerDimensions = function () {
        return {
            left: 0,
            top: 0,
            width: dom_1.windowDimensions().width,
            height: dom_1.windowDimensions().height
        };
    };
    SlideEdgeGesture.prototype._checkEdge = function (edge, pos) {
        switch (edge) {
            case 'left': return pos.x <= this._d.left + this.threshold;
            case 'right': return pos.x >= this._d.width - this.threshold;
            case 'top': return pos.y <= this._d.top + this.threshold;
            case 'bottom': return pos.y >= this._d.height - this.threshold;
        }
    };
    return SlideEdgeGesture;
})(slide_gesture_1.SlideGesture);
exports.SlideEdgeGesture = SlideEdgeGesture;