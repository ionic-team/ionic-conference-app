var util_1 = require('../../util');
/**
 * @private
 */
var OverlayController = (function () {
    function OverlayController() {
    }
    OverlayController.prototype.open = function (componentType, params, opts) {
        var _this = this;
        if (params === void 0) { params = {}; }
        if (opts === void 0) { opts = {}; }
        if (!this.nav) {
            console.error('<ion-overlay></ion-overlay> required in root template (app.html) to use: ' + overlayType);
            return Promise.reject();
        }
        var resolve, reject;
        var promise = new Promise(function (res, rej) { resolve = res; reject = rej; });
        opts.animation = opts.enterAnimation;
        opts.animateFirst = true;
        this.nav.push(componentType, params, opts).then(function (viewCtrl) {
            if (viewCtrl && viewCtrl.instance) {
                var self = _this;
                function escape(ev) {
                    if (ev.keyCode == 27 && self.nav.last() === viewCtrl) {
                        viewCtrl.instance.close();
                    }
                }
                viewCtrl.instance.close = function (data, closeOpts) {
                    if (closeOpts === void 0) { closeOpts = {}; }
                    util_1.extend(opts, closeOpts);
                    opts.animation = opts.leaveAnimation;
                    viewCtrl.instance.onClose && viewCtrl.instance.onClose(data);
                    _this.nav.pop(opts);
                    document.removeEventListener('keyup', escape, true);
                };
                document.addEventListener('keyup', escape, true);
                resolve(viewCtrl.instance);
            }
            else {
                reject();
            }
        }, function (rejectReason) {
            console.error(rejectReason);
        });
        return promise;
    };
    OverlayController.prototype.getByType = function (overlayType) {
        var overlay = this.nav.getByType(overlayType);
        return overlay && overlay.instance;
    };
    OverlayController.prototype.getByHandle = function (handle, overlayType) {
        var overlay = this.nav.getByHandle(handle);
        return overlay && overlay.instance;
    };
    return OverlayController;
})();
exports.OverlayController = OverlayController;