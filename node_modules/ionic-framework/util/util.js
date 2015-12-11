// Simple noop function
function noop() { }
exports.noop = noop;
;
/**
 * Given a min and max, restrict the given number
 * to the range.
 * @param min the minimum
 * @param n the value
 * @param max the maximum
 */
function clamp(min, n, max) {
    return Math.max(min, Math.min(n, max));
}
exports.clamp = clamp;
/**
 * Extend the destination with an arbitrary number of other objects.
 * @param dst the destination
 * @param ... the param objects
 */
function extend(dst) {
    return _baseExtend(dst, [].slice.call(arguments, 1), false);
}
exports.extend = extend;
/**
 * Do a deep extend (merge).
 * @param dst the destination
 * @param ... the param objects
 */
function merge(dst) {
    return _baseExtend(dst, [].slice.call(arguments, 1), true);
}
exports.merge = merge;
function _baseExtend(dst, objs, deep) {
    for (var i = 0, ii = objs.length; i < ii; ++i) {
        var obj = objs[i];
        if (!obj || !exports.isObject(obj) && !exports.isFunction(obj))
            continue;
        var keys = Object.keys(obj);
        for (var j = 0, jj = keys.length; j < jj; j++) {
            var key = keys[j];
            var src = obj[key];
            if (deep && exports.isObject(src)) {
                if (!exports.isObject(dst[key]))
                    dst[key] = exports.isArray(src) ? [] : {};
                _baseExtend(dst[key], [src], true);
            }
            else {
                dst[key] = src;
            }
        }
    }
    return dst;
}
function debounce(func, wait, immediate) {
    var timeout, args, context, timestamp, result;
    return function () {
        context = this;
        args = arguments;
        timestamp = new Date();
        var later = function () {
            var last = (new Date()) - timestamp;
            if (last < wait) {
                timeout = setTimeout(later, wait - last);
            }
            else {
                timeout = null;
                if (!immediate)
                    result = func.apply(context, args);
            }
        };
        var callNow = immediate && !timeout;
        if (!timeout) {
            timeout = setTimeout(later, wait);
        }
        if (callNow)
            result = func.apply(context, args);
        return result;
    };
}
exports.debounce = debounce;
/**
 * Apply default arguments if they don't exist in
 * the first object.
 * @param the destination to apply defaults to.
 */
function defaults(dest) {
    for (var i = arguments.length - 1; i >= 1; i--) {
        var source = arguments[i] || {};
        for (var key in source) {
            if (source.hasOwnProperty(key) && !dest.hasOwnProperty(key)) {
                dest[key] = source[key];
            }
        }
    }
    return dest;
}
exports.defaults = defaults;
exports.isBoolean = function (val) { return typeof val === 'boolean'; };
exports.isString = function (val) { return typeof val === 'string'; };
exports.isNumber = function (val) { return typeof val === 'number'; };
exports.isFunction = function (val) { return typeof val === 'function'; };
exports.isDefined = function (val) { return typeof val !== 'undefined'; };
exports.isUndefined = function (val) { return typeof val === 'undefined'; };
exports.isBlank = function (val) { return val === undefined || val === null; };
exports.isObject = function (val) { return typeof val === 'object'; };
exports.isArray = Array.isArray;
exports.isTrueProperty = function (val) { return typeof val !== 'undefined' && val !== "false"; };
/**
 * Convert a string in the format thisIsAString to a slug format this-is-a-string
 */
function pascalCaseToDashCase(str) {
    if (str === void 0) { str = ''; }
    return str.charAt(0).toLowerCase() + str.substring(1).replace(/[A-Z]/g, function (match) {
        return '-' + match.toLowerCase();
    });
}
exports.pascalCaseToDashCase = pascalCaseToDashCase;
var uid = 0;
function nextUid() {
    return ++uid;
}
exports.nextUid = nextUid;
exports.array = {
    find: function (arr, cb) {
        for (var i = 0, ii = arr.length; i < ii; i++) {
            if (cb(arr[i], i))
                return arr[i];
        }
    },
    remove: function (arr, itemOrIndex) {
        var index = -1;
        if (exports.isNumber(itemOrIndex)) {
            index = itemOrIndex;
        }
        else {
            index = arr.indexOf(itemOrIndex);
        }
        if (index < 0) {
            return false;
        }
        arr.splice(index, 1);
        return true;
    }
};
/**
 * Grab the query string param value for the given key.
 * @param key the key to look for
 */
function getQuerystring(url, key) {
    var queryParams = {};
    if (url) {
        var startIndex = url.indexOf('?');
        if (startIndex !== -1) {
            var queries = url.slice(startIndex + 1).split('&');
            queries.forEach(function (param) {
                var split = param.split('=');
                queryParams[split[0].toLowerCase()] = split[1].split('#')[0];
            });
        }
        if (key) {
            return queryParams[key] || '';
        }
    }
    return queryParams;
}
exports.getQuerystring = getQuerystring;
/**
 * Throttle the given fun, only allowing it to be
 * called at most every `wait` ms.
 */
function throttle(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    options || (options = {});
    var later = function () {
        previous = options.leading === false ? 0 : Date.now();
        timeout = null;
        result = func.apply(context, args);
    };
    return function () {
        var now = Date.now();
        if (!previous && options.leading === false)
            previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0) {
            clearTimeout(timeout);
            timeout = null;
            previous = now;
            result = func.apply(context, args);
        }
        else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
}
exports.throttle = throttle;