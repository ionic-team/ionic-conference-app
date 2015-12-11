/**
 * @private
 * Map of possible pages that can be navigated to using an Ionic NavController
 */
var NavRegistry = (function () {
    function NavRegistry(pages) {
        if (pages === void 0) { pages = []; }
        this._pages = new Map(pages.map(function (page) { return [page.name, page]; }));
    }
    NavRegistry.prototype.get = function (pageName) {
        return this._pages.get(pageName);
    };
    NavRegistry.prototype.set = function (page) {
        this._pages.set(page.name, page);
    };
    return NavRegistry;
})();
exports.NavRegistry = NavRegistry;