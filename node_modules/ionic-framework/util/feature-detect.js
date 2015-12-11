var FeatureDetect = (function () {
    function FeatureDetect() {
    }
    FeatureDetect.prototype.run = function (window, document) {
        this._results = {};
        for (var name in featureDetects) {
            this._results[name] = featureDetects[name](window, document, document.body);
        }
    };
    FeatureDetect.prototype.has = function (featureName) {
        return !!this._results[featureName];
    };
    FeatureDetect.add = function (name, fn) {
        featureDetects[name] = fn;
    };
    return FeatureDetect;
})();
exports.FeatureDetect = FeatureDetect;
var featureDetects = {};
// FeatureDetect.add('sticky', function(window, document) {
//   // css position sticky
//   let ele = document.createElement('div');
//   ele.style.cssText = 'position:-webkit-sticky;position:sticky';
//   return ele.style.position.indexOf('sticky') > -1;
// });
FeatureDetect.add('hairlines', function (window, document, body) {
    /**
    * Hairline Shim
    * Add the "hairline" CSS class name to the body tag
    * if the browser supports subpixels.
    */
    var canDo = false;
    if (window.devicePixelRatio >= 2) {
        var hairlineEle = document.createElement('div');
        hairlineEle.style.border = '.5px solid transparent';
        body.appendChild(hairlineEle);
        if (hairlineEle.offsetHeight === 1) {
            body.classList.add('hairlines');
            canDo = true;
        }
        body.removeChild(hairlineEle);
    }
    return canDo;
});