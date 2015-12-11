export declare function noop(): void;
/**
 * Given a min and max, restrict the given number
 * to the range.
 * @param min the minimum
 * @param n the value
 * @param max the maximum
 */
export declare function clamp(min: any, n: any, max: any): number;
/**
 * Extend the destination with an arbitrary number of other objects.
 * @param dst the destination
 * @param ... the param objects
 */
export declare function extend(dst: any): any;
/**
 * Do a deep extend (merge).
 * @param dst the destination
 * @param ... the param objects
 */
export declare function merge(dst: any): any;
export declare function debounce(func: any, wait: any, immediate: any): () => any;
/**
 * Apply default arguments if they don't exist in
 * the first object.
 * @param the destination to apply defaults to.
 */
export declare function defaults(dest: any): any;
export declare const isBoolean: (val: any) => boolean;
export declare const isString: (val: any) => boolean;
export declare const isNumber: (val: any) => boolean;
export declare const isFunction: (val: any) => boolean;
export declare const isDefined: (val: any) => boolean;
export declare const isUndefined: (val: any) => boolean;
export declare const isBlank: (val: any) => boolean;
export declare const isObject: (val: any) => boolean;
export declare const isArray: (arg: any) => arg is any[];
export declare const isTrueProperty: (val: any) => boolean;
/**
 * Convert a string in the format thisIsAString to a slug format this-is-a-string
 */
export declare function pascalCaseToDashCase(str?: string): string;
export declare function nextUid(): number;
export declare const array: {
    find(arr: any, cb: any): any;
    remove(arr: any, itemOrIndex: any): boolean;
};
/**
 * Grab the query string param value for the given key.
 * @param key the key to look for
 */
export declare function getQuerystring(url: any, key: any): any;
/**
 * Throttle the given fun, only allowing it to be
 * called at most every `wait` ms.
 */
export declare function throttle(func: any, wait: any, options: any): () => any;
