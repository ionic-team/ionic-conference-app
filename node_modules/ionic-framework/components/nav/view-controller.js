var nav_controller_1 = require('./nav-controller');
/**
 * @name ViewController
 * @description
 * Access various features and information about the current view
 * @usage
 *  ```ts
 *  import {Page, ViewController} from 'ionic/ionic';
 *  @Page....
 *  export class MyPage{
 *   constructor(viewCtrl: ViewController){
 *     this.viewCtrl = viewCtrl;
 *   }
 *  }
 *  ```
 */
var ViewController = (function () {
    function ViewController(navCtrl, componentType, params) {
        if (params === void 0) { params = {}; }
        this.navCtrl = navCtrl;
        this.componentType = componentType;
        this.params = new nav_controller_1.NavParams(params);
        this.instance = {};
        this.state = 0;
        this._destroys = [];
        this._loaded = false;
    }
    /**
     * Check to see if you can go back in the navigation stack
     * @param {boolean} Check whether or not you can go back from this page
     * @returns {boolean} Returns if it's possible to go back from this Page.
     */
    ViewController.prototype.enableBack = function () {
        // update if it's possible to go back from this nav item
        if (this.navCtrl) {
            var previousItem = this.navCtrl.getPrevious(this);
            // the previous view may exist, but if it's about to be destroyed
            // it shouldn't be able to go back to
            return !!(previousItem && !previousItem.shouldDestroy);
        }
        return false;
    };
    /**
     * @private
     */
    ViewController.prototype.setInstance = function (instance) {
        this.instance = instance;
    };
    Object.defineProperty(ViewController.prototype, "name", {
        /**
         * @private
         */
        get: function () {
            return this.componentType ? this.componentType.name : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewController.prototype, "index", {
        /**
         * You can find out the index of the current view is in the current navigation stack
         *
         * ```typescript
         *  export class Page1 {
         *    constructor(view: ViewController){
         *      this.view = view;
         *      // Just log out the index
         *      console.log(this.view.index);
         *    }
         *  }
         * ```
         *
         * @returns {Number} Returns the index of this page within its NavController.
         */
        get: function () {
            return (this.navCtrl ? this.navCtrl.indexOf(this) : -1);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @returns {boolean} Returns if this Page is the root page of the NavController.
     */
    ViewController.prototype.isRoot = function () {
        return (this.index === 0);
    };
    /**
     * @private
     */
    ViewController.prototype.addDestroy = function (destroyFn) {
        this._destroys.push(destroyFn);
    };
    /**
     * @private
     */
    ViewController.prototype.destroy = function () {
        for (var i = 0; i < this._destroys.length; i++) {
            this._destroys[i]();
        }
        this._destroys = [];
    };
    /**
     * @private
     */
    ViewController.prototype.setNavbarTemplateRef = function (templateRef) {
        this._nbTmpRef = templateRef;
    };
    /**
     * @private
     */
    ViewController.prototype.getNavbarTemplateRef = function () {
        return this._nbTmpRef;
    };
    /**
     * @private
     */
    ViewController.prototype.getNavbarViewRef = function () {
        return this._nbVwRef;
    };
    /**
     * @private
     */
    ViewController.prototype.setNavbarViewRef = function (viewContainerRef) {
        this._nbVwRef = viewContainerRef;
    };
    /**
     * @private
     */
    ViewController.prototype.setPageRef = function (elementRef) {
        this._pgRef = elementRef;
    };
    /**
     * @private
     * @returns {ElementRef} Returns the Page's ElementRef
     */
    ViewController.prototype.pageRef = function () {
        return this._pgRef;
    };
    /**
     * @private
     */
    ViewController.prototype.setContentRef = function (elementRef) {
        this._cntRef = elementRef;
    };
    /**
     * @private
     * @returns {ElementRef} Returns the Page's Content ElementRef
     */
    ViewController.prototype.contentRef = function () {
        return this._cntRef;
    };
    /**
     * @private
     */
    ViewController.prototype.setContent = function (directive) {
        this._cntDir = directive;
    };
    /**
     * @private
     * @returns {Component} Returns the Page's Content component reference.
     */
    ViewController.prototype.getContent = function () {
        return this._cntDir;
    };
    /**
     * @private
     */
    ViewController.prototype.setNavbar = function (directive) {
        this._nbDir = directive;
    };
    /**
     * @private
     */
    ViewController.prototype.getNavbar = function () {
        return this._nbDir;
    };
    /**
     * You can find out of the current view has a Navbar or not. Be sure to wrap this in an `onPageWillEnter` method in order to make sure the view has rendered fully.
     *
     * ```typescript
     * export class Page1 {
     *  constructor(view: ViewController) {
     *    this.view = view
     *  }
     *  onPageWillEnter(){
     *    console.log('Do we have a Navbar?', this.view.hasNavbar());
     *  }
     *}
     * ```
     *
     * @returns {boolean} Returns a boolean if this Page has a navbar or not.
     */
    ViewController.prototype.hasNavbar = function () {
        return !!this.getNavbar();
    };
    /**
     * @private
     */
    ViewController.prototype.navbarRef = function () {
        var navbar = this.getNavbar();
        return navbar && navbar.getElementRef();
    };
    /**
     * @private
     */
    ViewController.prototype.titleRef = function () {
        var navbar = this.getNavbar();
        return navbar && navbar.getTitleRef();
    };
    /**
     * @private
     */
    ViewController.prototype.navbarItemRefs = function () {
        var navbar = this.getNavbar();
        return navbar && navbar.getItemRefs();
    };
    /**
     * @private
     */
    ViewController.prototype.backBtnRef = function () {
        var navbar = this.getNavbar();
        return navbar && navbar.getBackButtonRef();
    };
    /**
     * @private
     */
    ViewController.prototype.backBtnTextRef = function () {
        var navbar = this.getNavbar();
        return navbar && navbar.getBackButtonTextRef();
    };
    /**
     * @private
     */
    ViewController.prototype.navbarBgRef = function () {
        var navbar = this.getNavbar();
        return navbar && navbar.getBackgroundRef();
    };
    /**
     * You can change the text of the back button on a view-by-view basis.
     *
     * ```ts
     * export class MyClass{
     *  constructor(viewCtrl: ViewController){
     *    this.viewCtrl = viewCtrl
     *  }
     *  onPageWillEnter() {
     *    this.viewCtrl.setBackButtonText('Previous');
     *  }
     * }
     * ```
     * Make sure you use the view events when calling this method, otherwise the back-button will not have been created
     *
     * @param {string} backButtonText Set the back button text.
     */
    ViewController.prototype.setBackButtonText = function (val) {
        var navbar = this.getNavbar();
        if (navbar) {
            navbar.bbText = val;
        }
    };
    /**
     * Set if the back button for the current view is visible or not. Be sure to wrap this in `onPageWillEnter` to make sure the has been compleltly rendered.
     * @param {boolean} Set if this Page's back button should show or not.
     */
    ViewController.prototype.showBackButton = function (shouldShow) {
        var navbar = this.getNavbar();
        if (navbar) {
            navbar.hideBackButton = !shouldShow;
        }
    };
    /**
     * @private
     */
    ViewController.prototype.isLoaded = function () {
        return this._loaded;
    };
    /**
     * @private
     * The view has loaded. This event only happens once per view being
     * created. If a view leaves but is cached, then this will not
     * fire again on a subsequent viewing. This method is a good place
     * to put your setup code for the view; however, it is not the
     * recommended method to use when a view becomes active.
     */
    ViewController.prototype.loaded = function () {
        this._loaded = true;
        if (!this.shouldDestroy) {
            ctrlFn(this, 'onPageLoaded');
        }
    };
    /**
     * @private
     * The view is about to enter and become the active view.
     */
    ViewController.prototype.willEnter = function () {
        if (!this.shouldDestroy) {
            ctrlFn(this, 'onPageWillEnter');
        }
    };
    /**
     * @private
     * The view has fully entered and is now the active view. This
     * will fire, whether it was the first load or loaded from the cache.
     */
    ViewController.prototype.didEnter = function () {
        var navbar = this.getNavbar();
        navbar && navbar.didEnter();
        ctrlFn(this, 'onPageDidEnter');
    };
    /**
     * @private
     * The view has is about to leave and no longer be the active view.
     */
    ViewController.prototype.willLeave = function () {
        ctrlFn(this, 'onPageWillLeave');
    };
    /**
     * @private
     * The view has finished leaving and is no longer the active view. This
     * will fire, whether it is cached or unloaded.
     */
    ViewController.prototype.didLeave = function () {
        ctrlFn(this, 'onPageDidLeave');
    };
    /**
     * @private
     * The view is about to be destroyed and have its elements removed.
     */
    ViewController.prototype.willUnload = function () {
        ctrlFn(this, 'onPageWillUnload');
    };
    /**
     * @private
     * The view has been destroyed and its elements have been removed.
     */
    ViewController.prototype.didUnload = function () {
        ctrlFn(this, 'onPageDidUnload');
    };
    return ViewController;
})();
exports.ViewController = ViewController;
function ctrlFn(viewCtrl, fnName) {
    if (viewCtrl.instance && viewCtrl.instance[fnName]) {
        try {
            viewCtrl.instance[fnName]();
        }
        catch (e) {
            console.error(fnName + ': ' + e.message);
        }
    }
}