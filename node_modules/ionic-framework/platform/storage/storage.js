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
var Storage = (function () {
    function Storage(strategyCls, options) {
        this._strategy = new strategyCls(options);
    }
    Storage.prototype.get = function (key) {
        return this._strategy.get(key);
    };
    Storage.prototype.getJson = function (key) {
        try {
            return JSON.parse(this._strategy.get(key));
        }
        catch (e) {
            console.warn('Storage getJson(): unable to parse value for key', key, ' as JSON');
            return null;
        }
    };
    Storage.prototype.set = function (key, value) {
        return this._strategy.set(key, value);
    };
    Storage.prototype.remove = function (key) {
        return this._strategy.remove(key);
    };
    Storage.prototype.query = function (query, params) {
        return this._strategy.query(query, params);
    };
    return Storage;
})();
exports.Storage = Storage;
/**
 * @private
*/
var StorageEngine = (function () {
    function StorageEngine() {
    }
    StorageEngine.prototype.get = function (key, value) {
        throw Error("get() not implemented for this storage engine");
    };
    StorageEngine.prototype.set = function (key, value) {
        throw Error("set() not implemented for this storage engine");
    };
    StorageEngine.prototype.remove = function (key) {
        throw Error("remove() not implemented for this storage engine");
    };
    StorageEngine.prototype.query = function (query, params) {
        throw Error("query() not implemented for this storage engine");
    };
    return StorageEngine;
})();
exports.StorageEngine = StorageEngine;