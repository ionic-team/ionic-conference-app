var dom_1 = require('../../util/dom');
var Activator = (function () {
    function Activator(app, config, zone) {
        this.app = app;
        this.zone = zone;
        this.queue = [];
        this.active = [];
        this.clearStateDefers = 5;
        this.clearAttempt = 0;
        this.activatedClass = config.get('activatedClass') || 'activated';
        this.x = 0;
        this.y = 0;
    }
    Activator.prototype.downAction = function (ev, activatableEle, pointerX, pointerY, callback) {
        // the user just pressed down
        var self = this;
        if (self.disableActivated(ev))
            return false;
        // remember where they pressed
        self.x = pointerX;
        self.y = pointerY;
        // queue to have this element activated
        self.queue.push(activatableEle);
        function activateCss() {
            var activatableEle;
            for (var i = 0; i < self.queue.length; i++) {
                activatableEle = self.queue[i];
                if (activatableEle && activatableEle.parentNode) {
                    self.active.push(activatableEle);
                    activatableEle.classList.add(self.activatedClass);
                }
            }
            self.queue = [];
        }
        this.zone.runOutsideAngular(function () {
            dom_1.rafFrames(2, activateCss);
        });
        return true;
    };
    Activator.prototype.upAction = function () {
        // the user was pressing down, then just let up
        var self = this;
        function activateUp() {
            self.clearState();
        }
        this.zone.runOutsideAngular(function () {
            dom_1.rafFrames(self.clearStateDefers, activateUp);
        });
    };
    Activator.prototype.clearState = function () {
        // all states should return to normal
        var _this = this;
        if (!this.app.isEnabled()) {
            // the app is actively disabled, so don't bother deactivating anything.
            // this makes it easier on the GPU so it doesn't have to redraw any
            // buttons during a transition. This will retry in XX milliseconds.
            setTimeout(function () {
                _this.clearState();
            }, 600);
        }
        else {
            // not actively transitioning, good to deactivate any elements
            this.deactivate();
        }
    };
    Activator.prototype.deactivate = function () {
        // remove the active class from all active elements
        var self = this;
        self.queue = [];
        function deactivate() {
            for (var i = 0; i < self.active.length; i++) {
                self.active[i].classList.remove(self.activatedClass);
            }
            self.active = [];
        }
        dom_1.rafFrames(2, deactivate);
    };
    Activator.prototype.disableActivated = function (ev) {
        if (ev.defaultPrevented)
            return true;
        var targetEle = ev.target;
        for (var x = 0; x < 4; x++) {
            if (!targetEle)
                break;
            if (targetEle.hasAttribute('disable-activated'))
                return true;
            targetEle = targetEle.parentElement;
        }
        return false;
    };
    return Activator;
})();
exports.Activator = Activator;