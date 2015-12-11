var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var activator_1 = require('./activator');
var animation_1 = require('../../animations/animation');
var dom_1 = require('../../util/dom');
var RippleActivator = (function (_super) {
    __extends(RippleActivator, _super);
    function RippleActivator(app, config, zone) {
        _super.call(this, app, config, zone);
        this.expands = {};
        this.fades = {};
        this.expandSpeed = null;
    }
    RippleActivator.prototype.downAction = function (ev, activatableEle, pointerX, pointerY) {
        var _this = this;
        if (_super.prototype.downAction.call(this, ev, activatableEle, pointerX, pointerY)) {
            // create a new ripple element
            this.expandSpeed = EXPAND_DOWN_PLAYBACK_RATE;
            this.zone.runOutsideAngular(function () {
                dom_1.raf(function () {
                    var clientRect = activatableEle.getBoundingClientRect();
                    dom_1.raf(function () {
                        _this.createRipple(activatableEle, pointerX, pointerY, clientRect);
                    });
                });
            });
        }
    };
    RippleActivator.prototype.createRipple = function (activatableEle, pointerX, pointerY, clientRect) {
        var _this = this;
        var clientPointerX = (pointerX - clientRect.left);
        var clientPointerY = (pointerY - clientRect.top);
        var x = Math.max(Math.abs(clientRect.width - clientPointerX), clientPointerX) * 2;
        var y = Math.max(Math.abs(clientRect.height - clientPointerY), clientPointerY) * 2;
        var diameter = Math.max(Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)), 64);
        var radius = Math.sqrt(clientRect.width + clientRect.height);
        var duration = (1000 * Math.sqrt(radius / TOUCH_DOWN_ACCEL) + 0.5);
        var rippleEle = document.createElement('md-ripple');
        var rippleId = Date.now();
        var eleStyle = rippleEle.style;
        eleStyle.width = eleStyle.height = diameter + 'px';
        eleStyle.marginTop = eleStyle.marginLeft = -(diameter / 2) + 'px';
        eleStyle.left = clientPointerX + 'px';
        eleStyle.top = clientPointerY + 'px';
        activatableEle.appendChild(rippleEle);
        // create the animation for the fade out, but don't start it yet
        this.fades[rippleId] = new animation_1.Animation(rippleEle, { renderDelay: 0 });
        this.fades[rippleId]
            .fadeOut()
            .duration(FADE_OUT_DURATION)
            .playbackRate(1)
            .onFinish(function () {
            dom_1.raf(function () {
                _this.fades[rippleId].dispose(true);
                delete _this.fades[rippleId];
            });
        });
        // expand the circle from the users starting point
        // start slow, and when they let up, then speed up the animation
        this.expands[rippleId] = new animation_1.Animation(rippleEle, { renderDelay: 0 });
        this.expands[rippleId]
            .fromTo('scale', '0.001', '1')
            .duration(duration)
            .playbackRate(this.expandSpeed)
            .onFinish(function () {
            _this.expands[rippleId].dispose();
            delete _this.expands[rippleId];
            _this.next();
        })
            .play();
    };
    RippleActivator.prototype.upAction = function () {
        var _this = this;
        this.deactivate();
        this.expandSpeed = 1;
        this.zone.runOutsideAngular(function () {
            dom_1.rafFrames(4, function () {
                _this.next();
            });
        });
    };
    RippleActivator.prototype.next = function () {
        var now = Date.now();
        var rippleId;
        for (rippleId in this.expands) {
            if (parseInt(rippleId, 10) + 4000 < now) {
                this.expands[rippleId].dispose(true);
                delete this.expands[rippleId];
            }
            else if (this.expands[rippleId].playbackRate() === EXPAND_DOWN_PLAYBACK_RATE) {
                this.expands[rippleId].playbackRate(EXPAND_OUT_PLAYBACK_RATE);
            }
        }
        for (rippleId in this.fades) {
            if (parseInt(rippleId, 10) + 4000 < now) {
                this.fades[rippleId].dispose(true);
                delete this.fades[rippleId];
            }
            else if (!this.fades[rippleId].isPlaying) {
                this.fades[rippleId].isPlaying = true;
                this.fades[rippleId].play();
            }
        }
    };
    RippleActivator.prototype.clearState = function () {
        this.deactivate();
        this.next();
    };
    return RippleActivator;
})(activator_1.Activator);
exports.RippleActivator = RippleActivator;
var TOUCH_DOWN_ACCEL = 512;
var EXPAND_DOWN_PLAYBACK_RATE = 0.35;
var EXPAND_OUT_PLAYBACK_RATE = 3;
var FADE_OUT_DURATION = 700;