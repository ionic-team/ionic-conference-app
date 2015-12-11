var dom = require('../util/dom');
/**
 * Base class for all Ionic components. Exposes some common functionality
 * that all Ionic components need, such as accessing underlying native elements and
 * sending/receiving app-level events.
 */
var Ion = (function () {
    function Ion(elementRef, config) {
        this.elementRef = elementRef;
        this.config = config;
    }
    Ion.prototype.ngOnInit = function () {
        var cls = this.constructor;
        if (cls.defaultInputs && this.config) {
            for (var prop in cls.defaultInputs) {
                // Priority:
                // ---------
                // 1) Value set from within constructor
                // 2) Value set from the host element's attribute
                // 3) Value set by the users global config
                // 4) Value set by the default mode/platform config
                // 5) Value set from the component's default
                if (this[prop]) {
                    // this property has already been set on the instance
                    // could be from the user setting the element's attribute
                    // or from the user setting it within the constructor
                    continue;
                }
                // get the property values from a global user/platform config
                var configVal = this.config.get(prop);
                if (configVal) {
                    this[prop] = configVal;
                    continue;
                }
                // wasn't set yet, so go with property's default value
                this[prop] = cls.defaultInputs[prop];
            }
        }
    };
    Ion.prototype.getElementRef = function () {
        return this.elementRef;
    };
    Ion.prototype.getNativeElement = function () {
        return this.elementRef.nativeElement;
    };
    Ion.prototype.getDimensions = function () {
        return dom.getDimensions(this);
    };
    Ion.prototype.width = function () {
        return dom.getDimensions(this).width;
    };
    Ion.prototype.height = function () {
        return dom.getDimensions(this).height;
    };
    return Ion;
})();
exports.Ion = Ion;