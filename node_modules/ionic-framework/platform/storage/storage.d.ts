/**
 * Storage is an easy way to store key/value pairs and other complicated
 * data in a way that uses a variety of storage engines underneath.
 *
 * For most cases, we recommend the SqlStorage system as it will store
 * data in a file in the app's sandbox. LocalStorage should ONLY be used
 * for temporary data as it may be "cleaned up" by the operation system
 * during low disk space situations.
 */
/**
 * @private
*/
export declare class Storage {
    constructor(strategyCls: StorageEngine, options: any);
    get(key: any): any;
    getJson(key: any): any;
    set(key: any, value: any): any;
    remove(key: any): any;
    query(query: any, params: any): any;
}
/**
 * @private
*/
export declare class StorageEngine {
    get(key: any, value: any): void;
    set(key: any, value: any): void;
    remove(key: any): void;
    query(query: any, params: any): void;
}
