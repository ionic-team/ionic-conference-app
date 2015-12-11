export declare function raf(callback: any): void;
export declare const rafCancel: any;
export declare function rafFrames(framesToWait: any, callback: any): void;
export declare let CSS: {};
export declare function transitionEnd(el: Element): any;
export declare function animationStart(el: Element, animationName: any): Promise<{}>;
export declare function animationEnd(el: Element, animationName: any): Promise<{}>;
export declare function ready(callback: any): any;
export declare function windowLoad(callback: any): any;
export declare function pointerCoord(ev: any): {
    x: number;
    y: number;
};
export declare function hasPointerMoved(threshold: any, startCoord: any, endCoord: any): boolean;
export declare function isActive(ele: any): boolean;
export declare function hasFocus(ele: any): boolean;
export declare function isTextInput(ele: any): boolean;
export declare function hasFocusedTextInput(): boolean;
export declare function closest(ele: any, selector: any, checkSelf: any): any;
export declare function removeElement(ele: any): void;
/**
 * Get the element offsetWidth and offsetHeight. Values are cached
 * to reduce DOM reads. Cache is cleared on a window resize.
 * @param {TODO} ele  TODO
 */
export declare function getDimensions(ion: any, ele: any): any;
export declare function windowDimensions(): any;
export declare function flushDimensionCache(): void;
/**
 * returns the closest, non-statically positioned parentOffset of a given element
 * @param element
 */
export declare function parentOffsetEl(element: any): any;
/**
 * Get the current coordinates of the element, relative to the offset parent.
 * Read-only equivalent of [jQuery's position function](http://api.jquery.com/position/).
 * @param {element} element The element to get the position of.
 * @returns {object} Returns an object containing the properties top, left, width and height.
 */
export declare function position(element: any): {
    width: any;
    height: any;
    top: number;
    left: number;
};
/**
* Get the current coordinates of the element, relative to the document.
* Read-only equivalent of [jQuery's offset function](http://api.jquery.com/offset/).
* @param {element} element The element to get the offset of.
* @returns {object} Returns an object containing the properties top, left, width and height.
*/
export declare function offset(element: any): {
    width: any;
    height: any;
    top: any;
    left: any;
};
