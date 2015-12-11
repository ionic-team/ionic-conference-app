var nativeRaf = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame;
var nativeCancelRaf = window.cancelAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    window.webkitCancelRequestAnimationFrame;
function raf(callback) {
    //console.log('raf', callback.toString().replace(/\s/g, '').replace('function', '').substring(0, 50));
    //console.log('raf, isRootZone()', zone.isRootZone(), '$id', zone.$id);
    _raf(callback);
}
exports.raf = raf;
var _raf = nativeRaf || function (callback) {
    var timeCurrent = (new Date()).getTime(), timeDelta;
    /* Dynamically set delay on a per-tick basis to match 60fps. */
    /* Technique by Erik Moller. MIT license: https://gist.github.com/paulirish/1579671 */
    timeDelta = Math.max(0, 16 - (timeCurrent - timeLast));
    timeLast = timeCurrent + timeDelta;
    return setTimeout(function () { callback(timeCurrent + timeDelta); }, timeDelta);
};
exports.rafCancel = nativeRaf ? nativeCancelRaf : function (id) {
    return window.cancelTimeout(id);
};
function rafFrames(framesToWait, callback) {
    framesToWait = Math.ceil(framesToWait);
    if (framesToWait < 2) {
        raf(callback);
    }
    else {
        setTimeout(function () {
            raf(callback);
        }, (framesToWait - 1) * 17);
    }
}
exports.rafFrames = rafFrames;
exports.CSS = {};
(function () {
    // transform
    var i, keys = ['webkitTransform', 'transform', '-webkit-transform', 'webkit-transform',
        '-moz-transform', 'moz-transform', 'MozTransform', 'mozTransform', 'msTransform'];
    for (i = 0; i < keys.length; i++) {
        if (document.documentElement.style[keys[i]] !== undefined) {
            exports.CSS.transform = keys[i];
            break;
        }
    }
    // transition
    keys = ['webkitTransition', 'mozTransition', 'msTransition', 'transition'];
    for (i = 0; i < keys.length; i++) {
        if (document.documentElement.style[keys[i]] !== undefined) {
            exports.CSS.transition = keys[i];
            break;
        }
    }
    // The only prefix we care about is webkit for transitions.
    var isWebkit = exports.CSS.transition.indexOf('webkit') > -1;
    exports.CSS.prefix = isWebkit ? '-webkit-' : '';
    // transition duration
    exports.CSS.transitionDuration = (isWebkit ? '-webkit-' : '') + 'transition-duration';
    // To be sure transitionend works everywhere, include *both* the webkit and non-webkit events
    exports.CSS.transitionEnd = (isWebkit ? 'webkitTransitionEnd ' : '') + 'transitionend';
})();
if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
    exports.CSS.animation = 'WebkitAnimation';
    exports.CSS.animationStart = 'webkitAnimationStart animationstart';
    exports.CSS.animationEnd = 'webkitAnimationEnd animationend';
}
else {
    exports.CSS.animation = 'animation';
    exports.CSS.animationStart = 'animationstart';
    exports.CSS.animationEnd = 'animationend';
}
function transitionEnd(el) {
    return cssPromise(el, exports.CSS.transitionEnd);
}
exports.transitionEnd = transitionEnd;
function animationStart(el, animationName) {
    return cssPromise(el, exports.CSS.animationStart, animationName);
}
exports.animationStart = animationStart;
function animationEnd(el, animationName) {
    return cssPromise(el, exports.CSS.animationEnd, animationName);
}
exports.animationEnd = animationEnd;
function cssPromise(el, eventNames, animationName) {
    return new Promise(function (resolve) {
        eventNames.split(' ').forEach(function (eventName) {
            el.addEventListener(eventName, onEvent);
        });
        function onEvent(ev) {
            if (ev.animationName && animationName) {
                // do not resolve if a bubbled up ev.animationName
                // is not the same as the passed in animationName arg
                if (ev.animationName !== animationName) {
                    return;
                }
            }
            else if (ev.target !== el) {
                // do not resolve if the event's target element is not
                // the same as the element the listener was added to
                return;
            }
            ev.stopPropagation();
            eventNames.split(' ').forEach(function (eventName) {
                el.removeEventListener(eventName, onEvent);
            });
            resolve(ev);
        }
    });
}
function ready(callback) {
    var promise = null;
    if (!callback) {
        // a callback wasn't provided, so let's return a promise instead
        promise = new Promise(function (resolve) { callback = resolve; });
    }
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        callback();
    }
    else {
        function completed() {
            document.removeEventListener('DOMContentLoaded', completed, false);
            window.removeEventListener('load', completed, false);
            callback();
        }
        document.addEventListener('DOMContentLoaded', completed, false);
        window.addEventListener('load', completed, false);
    }
    return promise;
}
exports.ready = ready;
function windowLoad(callback) {
    var promise = null;
    if (!callback) {
        // a callback wasn't provided, so let's return a promise instead
        promise = new Promise(function (resolve) { callback = resolve; });
    }
    if (document.readyState === 'complete') {
        callback();
    }
    else {
        function completed() {
            window.removeEventListener('load', completed, false);
            callback();
        }
        window.addEventListener('load', completed, false);
    }
    return promise;
}
exports.windowLoad = windowLoad;
function pointerCoord(ev) {
    // get coordinates for either a mouse click
    // or a touch depending on the given event
    var c = { x: 0, y: 0 };
    if (ev) {
        var touches = ev.touches && ev.touches.length ? ev.touches : [ev];
        var e = (ev.changedTouches && ev.changedTouches[0]) || touches[0];
        if (e) {
            c.x = e.clientX || e.pageX || 0;
            c.y = e.clientY || e.pageY || 0;
        }
    }
    return c;
}
exports.pointerCoord = pointerCoord;
function hasPointerMoved(threshold, startCoord, endCoord) {
    return startCoord && endCoord &&
        (Math.abs(startCoord.x - endCoord.x) > threshold || Math.abs(startCoord.y - endCoord.y) > threshold);
}
exports.hasPointerMoved = hasPointerMoved;
function isActive(ele) {
    return !!(ele && (document.activeElement === ele));
}
exports.isActive = isActive;
function hasFocus(ele) {
    return isActive(ele) && (ele.parentElement.querySelector(':focus') === ele);
}
exports.hasFocus = hasFocus;
function isTextInput(ele) {
    return !!ele &&
        (ele.tagName == 'TEXTAREA' ||
            ele.contentEditable === 'true' ||
            (ele.tagName == 'INPUT' && !(/^(radio|checkbox|range|file|submit|reset|color|image|button)$/i).test(ele.type)));
}
exports.isTextInput = isTextInput;
function hasFocusedTextInput() {
    var ele = document.activeElement;
    if (isTextInput(ele)) {
        return (ele.parentElement.querySelector(':focus') === ele);
    }
    return false;
}
exports.hasFocusedTextInput = hasFocusedTextInput;
var matchesFn;
['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector'].some(function (fn) {
    if (typeof document.documentElement[fn] == 'function') {
        matchesFn = fn;
    }
});
function closest(ele, selector, checkSelf) {
    if (ele && matchesFn) {
        // traverse parents
        ele = (checkSelf ? ele : ele.parentElement);
        while (ele !== null) {
            if (ele[matchesFn](selector)) {
                return ele;
            }
            ele = ele.parentElement;
        }
    }
    return null;
}
exports.closest = closest;
function removeElement(ele) {
    ele && ele.parentNode && ele.parentNode.removeChild(ele);
}
exports.removeElement = removeElement;
/**
 * Get the element offsetWidth and offsetHeight. Values are cached
 * to reduce DOM reads. Cache is cleared on a window resize.
 * @param {TODO} ele  TODO
 */
function getDimensions(ion, ele) {
    if (!ion._dimId) {
        ion._dimId = ++dimensionIds;
        if (ion._dimId % 1000 === 0) {
            // periodically flush dimensions
            flushDimensionCache();
        }
    }
    var dimensions = dimensionCache[ion._dimId];
    if (!dimensions) {
        var ele_1 = ion.getNativeElement();
        // make sure we got good values before caching
        if (ele_1.offsetWidth && ele_1.offsetHeight) {
            dimensions = dimensionCache[ion._dimId] = {
                width: ele_1.offsetWidth,
                height: ele_1.offsetHeight,
                left: ele_1.offsetLeft,
                top: ele_1.offsetTop
            };
        }
        else {
            // do not cache bad values
            return { width: 0, height: 0, left: 0, top: 0 };
        }
    }
    return dimensions;
}
exports.getDimensions = getDimensions;
function windowDimensions() {
    if (!dimensionCache.win) {
        // make sure we got good values before caching
        if (window.innerWidth && window.innerHeight) {
            dimensionCache.win = {
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
        else {
            // do not cache bad values
            return { width: 0, height: 0 };
        }
    }
    return dimensionCache.win;
}
exports.windowDimensions = windowDimensions;
function flushDimensionCache() {
    dimensionCache = {};
}
exports.flushDimensionCache = flushDimensionCache;
var dimensionCache = {};
var dimensionIds = 0;
function isStaticPositioned(element) {
    return (element.style.position || 'static') === 'static';
}
/**
 * returns the closest, non-statically positioned parentOffset of a given element
 * @param element
 */
function parentOffsetEl(element) {
    var offsetParent = element.offsetParent || document;
    while (offsetParent && offsetParent !== document && isStaticPositioned(offsetParent)) {
        offsetParent = offsetParent.offsetParent;
    }
    return offsetParent || document;
}
exports.parentOffsetEl = parentOffsetEl;
;
/**
 * Get the current coordinates of the element, relative to the offset parent.
 * Read-only equivalent of [jQuery's position function](http://api.jquery.com/position/).
 * @param {element} element The element to get the position of.
 * @returns {object} Returns an object containing the properties top, left, width and height.
 */
function position(element) {
    var elBCR = offset(element);
    var offsetParentBCR = { top: 0, left: 0 };
    var offsetParentEl = parentOffsetEl(element);
    if (offsetParentEl != document) {
        offsetParentBCR = offset(offsetParentEl);
        offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
        offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
    }
    var boundingClientRect = element.getBoundingClientRect();
    return {
        width: boundingClientRect.width || element.offsetWidth,
        height: boundingClientRect.height || element.offsetHeight,
        top: elBCR.top - offsetParentBCR.top,
        left: elBCR.left - offsetParentBCR.left
    };
}
exports.position = position;
/**
* Get the current coordinates of the element, relative to the document.
* Read-only equivalent of [jQuery's offset function](http://api.jquery.com/offset/).
* @param {element} element The element to get the offset of.
* @returns {object} Returns an object containing the properties top, left, width and height.
*/
function offset(element) {
    var boundingClientRect = element.getBoundingClientRect();
    return {
        width: boundingClientRect.width || element.offsetWidth,
        height: boundingClientRect.height || element.offsetHeight,
        top: boundingClientRect.top + (window.pageYOffset || document.documentElement.scrollTop),
        left: boundingClientRect.left + (window.pageXOffset || document.documentElement.scrollLeft)
    };
}
exports.offset = offset;