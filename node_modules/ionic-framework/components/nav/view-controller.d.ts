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
export declare class ViewController {
    constructor(navCtrl: any, componentType: any, params?: {});
    /**
     * Check to see if you can go back in the navigation stack
     * @param {boolean} Check whether or not you can go back from this page
     * @returns {boolean} Returns if it's possible to go back from this Page.
     */
    enableBack(): boolean;
    /**
     * @private
     */
    setInstance(instance: any): void;
    /**
     * @private
     */
    name: any;
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
    index: any;
    /**
     * @returns {boolean} Returns if this Page is the root page of the NavController.
     */
    isRoot(): boolean;
    /**
     * @private
     */
    addDestroy(destroyFn: any): void;
    /**
     * @private
     */
    destroy(): void;
    /**
     * @private
     */
    setNavbarTemplateRef(templateRef: any): void;
    /**
     * @private
     */
    getNavbarTemplateRef(): any;
    /**
     * @private
     */
    getNavbarViewRef(): any;
    /**
     * @private
     */
    setNavbarViewRef(viewContainerRef: any): void;
    /**
     * @private
     */
    setPageRef(elementRef: any): void;
    /**
     * @private
     * @returns {ElementRef} Returns the Page's ElementRef
     */
    pageRef(): any;
    /**
     * @private
     */
    setContentRef(elementRef: any): void;
    /**
     * @private
     * @returns {ElementRef} Returns the Page's Content ElementRef
     */
    contentRef(): any;
    /**
     * @private
     */
    setContent(directive: any): void;
    /**
     * @private
     * @returns {Component} Returns the Page's Content component reference.
     */
    getContent(): any;
    /**
     * @private
     */
    setNavbar(directive: any): void;
    /**
     * @private
     */
    getNavbar(): any;
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
    hasNavbar(): boolean;
    /**
     * @private
     */
    navbarRef(): any;
    /**
     * @private
     */
    titleRef(): any;
    /**
     * @private
     */
    navbarItemRefs(): any;
    /**
     * @private
     */
    backBtnRef(): any;
    /**
     * @private
     */
    backBtnTextRef(): any;
    /**
     * @private
     */
    navbarBgRef(): any;
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
    setBackButtonText(val: any): void;
    /**
     * Set if the back button for the current view is visible or not. Be sure to wrap this in `onPageWillEnter` to make sure the has been compleltly rendered.
     * @param {boolean} Set if this Page's back button should show or not.
     */
    showBackButton(shouldShow: any): void;
    /**
     * @private
     */
    isLoaded(): any;
    /**
     * @private
     * The view has loaded. This event only happens once per view being
     * created. If a view leaves but is cached, then this will not
     * fire again on a subsequent viewing. This method is a good place
     * to put your setup code for the view; however, it is not the
     * recommended method to use when a view becomes active.
     */
    loaded(): void;
    /**
     * @private
     * The view is about to enter and become the active view.
     */
    willEnter(): void;
    /**
     * @private
     * The view has fully entered and is now the active view. This
     * will fire, whether it was the first load or loaded from the cache.
     */
    didEnter(): void;
    /**
     * @private
     * The view has is about to leave and no longer be the active view.
     */
    willLeave(): void;
    /**
     * @private
     * The view has finished leaving and is no longer the active view. This
     * will fire, whether it is cached or unloaded.
     */
    didLeave(): void;
    /**
     * @private
     * The view is about to be destroyed and have its elements removed.
     */
    willUnload(): void;
    /**
     * @private
     * The view has been destroyed and its elements have been removed.
     */
    didUnload(): void;
}
