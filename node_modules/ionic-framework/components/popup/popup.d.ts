import { OverlayController } from '../overlay/overlay-controller';
import { Config } from '../../config/config';
/**
 * The Ionic Popup service allows the creation of popup windows that require the user to respond in order to continue.
 *
 * The popup service has support for more flexible versions of the built in `alert()`, `prompt()`, and `confirm()` functions that users are used to, in addition to allowing popups with completely custom content and look.
 *
 * @usage
 * ```ts
 * class myApp {
 *
 *   constructor(popup: Popup) {
 *     this.popup = popup;
 *   }
 *
 *   doAlert() {
 *     this.popup.alert({
 *       title: "New Friend!",
 *       template: "Your friend, Obi wan Kenobi, just accepted your friend request!",
 *       cssClass: 'my-alert'
 *     }).then(() => {
 *       console.log('Alert closed');
 *     });
 *   }
 *
 *   doPrompt() {
 *     this.popup.prompt({
 *       title: "New Album",
 *       template: "Enter a name for this new album you're so keen on adding",
 *       inputPlaceholder: "Title",
 *       okText: "Save",
 *       okType: "secondary"
 *     }).then((name) => {
 *       console.log('Name entered:', name);
 *     }, () => {
 *       console.error('Prompt closed');
 *     });
 *   }
 *
 *   doConfirm() {
 *     this.popup.confirm({
 *       title: "Use this lightsaber?",
 *       subTitle: "You can't exchange lightsabers",
 *       template: "Do you agree to use this lightsaber to do good across the intergalactic galaxy?",
 *       cancelText: "Disagree",
 *       okText: "Agree"
 *     }).then((result, ev) => {
 *       console.log('Confirmed!', result);
 *     }, () => {
 *       console.error('Not confirmed!');
 *     });
 *   }
 * }
 * ```
 * @demo /docs/v2/demos/popup/
 * @see {@link /docs/v2/components#popups Popup Component Docs}
 */
export declare class Popup {
    constructor(ctrl: OverlayController, config: Config);
    /**
     * TODO
     * @param {TODO} opts  TODO
     * @returns {object} A promise
     */
    open(opts: any): Promise<{}>;
    /**
     * Show a simple alert popup with a message and one button
     * that the user can tap to close the popup.
     *
     * @param {object} opts The options for showing the alert, of the form:
     *
     * ```
     * {
     *   title: '', // String. The title of the popup.
     *   cssClass: '', // String (optional). The custom CSS class name.
     *   subTitle: '', // String (optional). The sub-title of the popup.
     *   template: '', // String (optional). The html template to place in the popup body.
     *   okText: '', // String (default: 'OK'). The text of the OK button.
     *   okType: '', // String (default: ''). The type of the OK button.
     * }
     * ```
     *
     * @returns {object} A promise which is resolved when the popup is closed.
     */
    alert(opts?: {}): Promise<{}>;
    /**
     * Show a simple confirm popup with a message, Cancel and OK button.
     *
     * Resolves the promise with true if the user presses the OK button, and false if the user presses the Cancel button.
     *
     * @param {object} opts The options for showing the confirm, of the form:
     *
     * ```
     * {
     *   title: '', // String. The title of the popup.
     *   cssClass: '', // String (optional). The custom CSS class name.
     *   subTitle: '', // String (optional). The sub-title of the popup.
     *   template: '', // String (optional). The html template to place in the popup body.
     *   cancelText: '', // String (default: 'Cancel'). The text of the Cancel button.
     *   cancelType: '', // String (default: ''). The type of the Cancel button.
     *   okText: '', // String (default: 'OK'). The text of the OK button.
     *   okType: '', // String (default: ''). The type of the OK button.
     * }
     * ```
     *
     * @returns {object} A promise which is resolved when the popup is closed.
     */
    confirm(opts?: {}): Promise<{}>;
    /**
     * Show a simple prompt popup with a message, input, Cancel and OK button.
     *
     * Resolves the promise with the value of the input if the user presses OK, and with undefined if the user presses Cancel.
     *
     * @param {object} opts The options for showing the prompt, of the form:
     *
     * ```
     * {
     *   title: '', // String. The title of the popup.
     *   cssClass: '', // String (optional). The custom CSS class name.
     *   subTitle: '', // String (optional). The sub-title of the popup.
     *   template: '', // String (optional). The html template to place in the popup body.
     *   inputType: // String (default: 'text'). The type of input to use.
     *   inputPlaceholder: // String (default: ''). A placeholder to use for the input.
     *   cancelText: '', // String (default: 'Cancel'). The text of the Cancel button.
     *   cancelType: '', // String (default: ''). The type of the Cancel button.
     *   okText: '', // String (default: 'OK'). The text of the OK button.
     *   okType: '', // String (default: ''). The type of the OK button.
     * }
     * ```
     *
     * @returns {object} A promise which is resolved when the popup is closed.
     */
    prompt(opts?: {}): Promise<{}>;
    /**
     * TODO
     * @param {TODO} handle  TODO
     * @returns {TODO} TODO
     */
    get(handle: any): any;
}
