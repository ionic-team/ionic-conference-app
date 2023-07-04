"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["common"],{

/***/ 523:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-90964ef8.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createButtonActiveGesture)
/* harmony export */ });
/* harmony import */ var _index_be218d70_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-be218d70.js */ 9866);
/* harmony import */ var _haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-029a46f6.js */ 2815);
/* harmony import */ var _index_422b6e83_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-422b6e83.js */ 8759);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */



const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_be218d70_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_be218d70_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return (0,_index_422b6e83_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};


/***/ }),

/***/ 7481:
/*!***********************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/dir-e8b767a8.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ isRTL)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/**
 * Returns `true` if the document or host element
 * has a `dir` set to `rtl`. The host value will always
 * take priority over the root document value.
 */
const isRTL = hostEl => {
  if (hostEl) {
    if (hostEl.dir !== '') {
      return hostEl.dir.toLowerCase() === 'rtl';
    }
  }
  return (document === null || document === void 0 ? void 0 : document.dir.toLowerCase()) === 'rtl';
};


/***/ }),

/***/ 9118:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/focus-visible-bd02518b.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startFocusVisible": () => (/* binding */ startFocusVisible)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const ION_FOCUSED = 'ion-focused';
const ION_FOCUSABLE = 'ion-focusable';
const FOCUS_KEYS = ['Tab', 'ArrowDown', 'Space', 'Escape', ' ', 'Shift', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'Home', 'End'];
const startFocusVisible = rootEl => {
  let currentFocus = [];
  let keyboardMode = true;
  const ref = rootEl ? rootEl.shadowRoot : document;
  const root = rootEl ? rootEl : document.body;
  const setFocus = elements => {
    currentFocus.forEach(el => el.classList.remove(ION_FOCUSED));
    elements.forEach(el => el.classList.add(ION_FOCUSED));
    currentFocus = elements;
  };
  const pointerDown = () => {
    keyboardMode = false;
    setFocus([]);
  };
  const onKeydown = ev => {
    keyboardMode = FOCUS_KEYS.includes(ev.key);
    if (!keyboardMode) {
      setFocus([]);
    }
  };
  const onFocusin = ev => {
    if (keyboardMode && ev.composedPath !== undefined) {
      const toFocus = ev.composedPath().filter(el => {
        // TODO(FW-2832): type
        if (el.classList) {
          return el.classList.contains(ION_FOCUSABLE);
        }
        return false;
      });
      setFocus(toFocus);
    }
  };
  const onFocusout = () => {
    if (ref.activeElement === root) {
      setFocus([]);
    }
  };
  ref.addEventListener('keydown', onKeydown);
  ref.addEventListener('focusin', onFocusin);
  ref.addEventListener('focusout', onFocusout);
  ref.addEventListener('touchstart', pointerDown);
  ref.addEventListener('mousedown', pointerDown);
  const destroy = () => {
    ref.removeEventListener('keydown', onKeydown);
    ref.removeEventListener('focusin', onFocusin);
    ref.removeEventListener('focusout', onFocusout);
    ref.removeEventListener('touchstart', pointerDown);
    ref.removeEventListener('mousedown', pointerDown);
  };
  return {
    destroy,
    setFocus
  };
};


/***/ }),

/***/ 7705:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/form-controller-35672fb0.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createLegacyFormController)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/**
 * Creates a controller that tracks whether a form control is using the legacy or modern syntax. This should be removed when the legacy form control syntax is removed.
 *
 * @internal
 * @prop el: The Ionic form component to reference
 */
const createLegacyFormController = el => {
  const controlEl = el;
  let legacyControl;
  const hasLegacyControl = () => {
    if (legacyControl === undefined) {
      /**
       * Detect if developers are using the legacy form control syntax
       * so a deprecation warning is logged. This warning can be disabled
       * by either using the new `label` property or setting `aria-label`
       * on the control.
       * Alternatively, components that use a slot for the label
       * can check to see if the component has slotted text
       * in the light DOM.
       */
      const hasLabelProp = controlEl.label !== undefined || hasLabelSlot(controlEl);
      const hasAriaLabelAttribute = controlEl.hasAttribute('aria-label') ||
      // Shadow DOM form controls cannot use aria-labelledby
      controlEl.hasAttribute('aria-labelledby') && controlEl.shadowRoot === null;
      /**
       * Developers can manually opt-out of the modern form markup
       * by setting `legacy="true"` on components.
       */
      legacyControl = controlEl.legacy === true || !hasLabelProp && !hasAriaLabelAttribute;
    }
    return legacyControl;
  };
  return {
    hasLegacyControl
  };
};
const hasLabelSlot = controlEl => {
  const root = controlEl.shadowRoot;
  if (root === null) {
    return false;
  }
  /**
   * Components that have a named label slot
   * also have other slots, so we need to query for
   * anything that is explicitly passed to slot="label"
   */
  if (NAMED_LABEL_SLOT_COMPONENTS.includes(controlEl.tagName) && controlEl.querySelector('[slot="label"]') !== null) {
    return true;
  }
  /**
   * Components that have an unnamed slot for the label
   * have no other slots, so we can check the textContent
   * of the element.
   */
  if (UNNAMED_LABEL_SLOT_COMPONENTS.includes(controlEl.tagName) && controlEl.textContent !== '') {
    return true;
  }
  return false;
};
const NAMED_LABEL_SLOT_COMPONENTS = ['ION-RANGE'];
const UNNAMED_LABEL_SLOT_COMPONENTS = ['ION-TOGGLE', 'ION-CHECKBOX', 'ION-RADIO'];


/***/ }),

/***/ 2815:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-029a46f6.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ hapticSelectionStart),
/* harmony export */   "b": () => (/* binding */ hapticSelectionChanged),
/* harmony export */   "c": () => (/* binding */ hapticSelection),
/* harmony export */   "d": () => (/* binding */ hapticImpact),
/* harmony export */   "h": () => (/* binding */ hapticSelectionEnd)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const HapticEngine = {
  getEngine() {
    var _a;
    const win = window;
    return win.TapticEngine || ((_a = win.Capacitor) === null || _a === void 0 ? void 0 : _a.isPluginAvailable('Haptics')) && win.Capacitor.Plugins.Haptics;
  },
  available() {
    var _a;
    const win = window;
    const engine = this.getEngine();
    if (!engine) {
      return false;
    }
    /**
     * Developers can manually import the
     * Haptics plugin in their app which will cause
     * getEngine to return the Haptics engine. However,
     * the Haptics engine will throw an error if
     * used in a web browser that does not support
     * the Vibrate API. This check avoids that error
     * if the browser does not support the Vibrate API.
     */
    if (((_a = win.Capacitor) === null || _a === void 0 ? void 0 : _a.getPlatform()) === 'web') {
      return typeof navigator !== 'undefined' && navigator.vibrate !== undefined;
    }
    return true;
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({
      style
    });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({
      style
    });
  },
  selection() {
    this.impact({
      style: 'light'
    });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    } else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    } else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    } else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
const hapticAvailable = () => {
  return HapticEngine.available();
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  hapticAvailable() && HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  hapticAvailable() && HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  hapticAvailable() && HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  hapticAvailable() && HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = options => {
  hapticAvailable() && HapticEngine.impact(options);
};


/***/ }),

/***/ 8697:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-393bc14a.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ arrowBackSharp),
/* harmony export */   "b": () => (/* binding */ closeCircle),
/* harmony export */   "c": () => (/* binding */ chevronBack),
/* harmony export */   "d": () => (/* binding */ closeSharp),
/* harmony export */   "e": () => (/* binding */ searchSharp),
/* harmony export */   "f": () => (/* binding */ checkmarkOutline),
/* harmony export */   "g": () => (/* binding */ ellipseOutline),
/* harmony export */   "h": () => (/* binding */ caretBackSharp),
/* harmony export */   "i": () => (/* binding */ arrowDown),
/* harmony export */   "j": () => (/* binding */ reorderThreeOutline),
/* harmony export */   "k": () => (/* binding */ reorderTwoSharp),
/* harmony export */   "l": () => (/* binding */ chevronDown),
/* harmony export */   "m": () => (/* binding */ chevronForwardOutline),
/* harmony export */   "n": () => (/* binding */ ellipsisHorizontal),
/* harmony export */   "o": () => (/* binding */ chevronForward),
/* harmony export */   "p": () => (/* binding */ caretUpSharp),
/* harmony export */   "q": () => (/* binding */ caretDownSharp),
/* harmony export */   "r": () => (/* binding */ removeOutline),
/* harmony export */   "s": () => (/* binding */ searchOutline),
/* harmony export */   "t": () => (/* binding */ close),
/* harmony export */   "u": () => (/* binding */ menuOutline),
/* harmony export */   "v": () => (/* binding */ menuSharp),
/* harmony export */   "w": () => (/* binding */ chevronExpand)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/* Ionicons v7.1.0, ES Modules */
const arrowBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>";
const arrowDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>";
const caretBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>";
const caretDownSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>";
const caretUpSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>";
const checkmarkOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const chevronBack = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>";
const chevronDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>";
const chevronExpand = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>";
const chevronForward = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const chevronForwardOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const close = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>";
const closeCircle = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>";
const closeSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>";
const ellipseOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const ellipsisHorizontal = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>";
const menuOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const menuSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>";
const removeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const reorderThreeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const reorderTwoSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>";
const searchOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const searchSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>";


/***/ }),

/***/ 5707:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-455f6202.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ ION_CONTENT_ELEMENT_SELECTOR),
/* harmony export */   "a": () => (/* binding */ findIonContent),
/* harmony export */   "b": () => (/* binding */ ION_CONTENT_CLASS_SELECTOR),
/* harmony export */   "c": () => (/* binding */ scrollByPoint),
/* harmony export */   "d": () => (/* binding */ disableContentScrollY),
/* harmony export */   "f": () => (/* binding */ findClosestIonContent),
/* harmony export */   "g": () => (/* binding */ getScrollElement),
/* harmony export */   "i": () => (/* binding */ isIonContent),
/* harmony export */   "p": () => (/* binding */ printIonContentErrorMsg),
/* harmony export */   "r": () => (/* binding */ resetContentScrollY),
/* harmony export */   "s": () => (/* binding */ scrollToTop)
/* harmony export */ });
/* harmony import */ var _Users_ohrionmartin_dev_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _helpers_5eb6364d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-5eb6364d.js */ 9364);
/* harmony import */ var _index_e86f0117_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-e86f0117.js */ 7584);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


const ION_CONTENT_TAG_NAME = 'ION-CONTENT';
const ION_CONTENT_ELEMENT_SELECTOR = 'ion-content';
const ION_CONTENT_CLASS_SELECTOR = '.ion-content-scroll-host';
/**
 * Selector used for implementations reliant on `<ion-content>` for scroll event changes.
 *
 * Developers should use the `.ion-content-scroll-host` selector to target the element emitting
 * scroll events. With virtual scroll implementations this will be the host element for
 * the scroll viewport.
 */
const ION_CONTENT_SELECTOR = `${ION_CONTENT_ELEMENT_SELECTOR}, ${ION_CONTENT_CLASS_SELECTOR}`;
const isIonContent = el => el.tagName === ION_CONTENT_TAG_NAME;
/**
 * Waits for the element host fully initialize before
 * returning the inner scroll element.
 *
 * For `ion-content` the scroll target will be the result
 * of the `getScrollElement` function.
 *
 * For custom implementations it will be the element host
 * or a selector within the host, if supplied through `scrollTarget`.
 */
const getScrollElement = /*#__PURE__*/function () {
  var _ref = (0,_Users_ohrionmartin_dev_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (el) {
    if (isIonContent(el)) {
      yield new Promise(resolve => (0,_helpers_5eb6364d_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
      return el.getScrollElement();
    }
    return el;
  });
  return function getScrollElement(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Queries the element matching the selector for IonContent.
 * See ION_CONTENT_SELECTOR for the selector used.
 */
const findIonContent = el => {
  /**
   * First we try to query the custom scroll host selector in cases where
   * the implementation is using an outer `ion-content` with an inner custom
   * scroll container.
   */
  const customContentHost = el.querySelector(ION_CONTENT_CLASS_SELECTOR);
  if (customContentHost) {
    return customContentHost;
  }
  return el.querySelector(ION_CONTENT_SELECTOR);
};
/**
 * Queries the closest element matching the selector for IonContent.
 */
const findClosestIonContent = el => {
  return el.closest(ION_CONTENT_SELECTOR);
};
/**
 * Scrolls to the top of the element. If an `ion-content` is found, it will scroll
 * using the public API `scrollToTop` with a duration.
 */
// TODO(FW-2832): type
const scrollToTop = (el, durationMs) => {
  if (isIonContent(el)) {
    const content = el;
    return content.scrollToTop(durationMs);
  }
  return Promise.resolve(el.scrollTo({
    top: 0,
    left: 0,
    behavior: durationMs > 0 ? 'smooth' : 'auto'
  }));
};
/**
 * Scrolls by a specified X/Y distance in the component. If an `ion-content` is found, it will scroll
 * using the public API `scrollByPoint` with a duration.
 */
const scrollByPoint = (el, x, y, durationMs) => {
  if (isIonContent(el)) {
    const content = el;
    return content.scrollByPoint(x, y, durationMs);
  }
  return Promise.resolve(el.scrollBy({
    top: y,
    left: x,
    behavior: durationMs > 0 ? 'smooth' : 'auto'
  }));
};
/**
 * Prints an error informing developers that an implementation requires an element to be used
 * within either the `ion-content` selector or the `.ion-content-scroll-host` class.
 */
const printIonContentErrorMsg = el => {
  return (0,_index_e86f0117_js__WEBPACK_IMPORTED_MODULE_2__.b)(el, ION_CONTENT_ELEMENT_SELECTOR);
};
/**
 * Several components in Ionic need to prevent scrolling
 * during a gesture (card modal, range, item sliding, etc).
 * Use this utility to account for ion-content and custom content hosts.
 */
const disableContentScrollY = contentEl => {
  if (isIonContent(contentEl)) {
    const ionContent = contentEl;
    const initialScrollY = ionContent.scrollY;
    ionContent.scrollY = false;
    /**
     * This should be passed into resetContentScrollY
     * so that we can revert ion-content's scrollY to the
     * correct state. For example, if scrollY = false
     * initially, we do not want to enable scrolling
     * when we call resetContentScrollY.
     */
    return initialScrollY;
  } else {
    contentEl.style.setProperty('overflow', 'hidden');
    return true;
  }
};
const resetContentScrollY = (contentEl, initialScrollY) => {
  if (isIonContent(contentEl)) {
    contentEl.scrollY = initialScrollY;
  } else {
    contentEl.style.removeProperty('overflow');
  }
};


/***/ }),

/***/ 763:
/*!*******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/input.utils-b929bc66.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ getCounterText)
/* harmony export */ });
/* harmony import */ var _index_e86f0117_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-e86f0117.js */ 7584);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

const getCounterText = (value, maxLength, counterFormatter) => {
  const valueLength = value == null ? 0 : value.toString().length;
  const defaultCounterText = defaultCounterFormatter(valueLength, maxLength);
  /**
   * If developers did not pass a custom formatter,
   * use the default one.
   */
  if (counterFormatter === undefined) {
    return defaultCounterText;
  }
  /**
   * Otherwise, try to use the custom formatter
   * and fallback to the default formatter if
   * there was an error.
   */
  try {
    return counterFormatter(valueLength, maxLength);
  } catch (e) {
    (0,_index_e86f0117_js__WEBPACK_IMPORTED_MODULE_0__.a)('Exception in provided `counterFormatter`.', e);
    return defaultCounterText;
  }
};
const defaultCounterFormatter = (length, maxlength) => {
  return `${length} / ${maxlength}`;
};


/***/ }),

/***/ 512:
/*!****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/keyboard-282b81b8.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KEYBOARD_DID_CLOSE": () => (/* binding */ KEYBOARD_DID_CLOSE),
/* harmony export */   "KEYBOARD_DID_OPEN": () => (/* binding */ KEYBOARD_DID_OPEN),
/* harmony export */   "copyVisualViewport": () => (/* binding */ copyVisualViewport),
/* harmony export */   "keyboardDidClose": () => (/* binding */ keyboardDidClose),
/* harmony export */   "keyboardDidOpen": () => (/* binding */ keyboardDidOpen),
/* harmony export */   "keyboardDidResize": () => (/* binding */ keyboardDidResize),
/* harmony export */   "resetKeyboardAssist": () => (/* binding */ resetKeyboardAssist),
/* harmony export */   "setKeyboardClose": () => (/* binding */ setKeyboardClose),
/* harmony export */   "setKeyboardOpen": () => (/* binding */ setKeyboardOpen),
/* harmony export */   "startKeyboardAssist": () => (/* binding */ startKeyboardAssist),
/* harmony export */   "trackViewportChanges": () => (/* binding */ trackViewportChanges)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const KEYBOARD_DID_OPEN = 'ionKeyboardDidShow';
const KEYBOARD_DID_CLOSE = 'ionKeyboardDidHide';
const KEYBOARD_THRESHOLD = 150;
// TODO(FW-2832): types
let previousVisualViewport = {};
let currentVisualViewport = {};
let keyboardOpen = false;
/**
 * This is only used for tests
 */
const resetKeyboardAssist = () => {
  previousVisualViewport = {};
  currentVisualViewport = {};
  keyboardOpen = false;
};
const startKeyboardAssist = win => {
  startNativeListeners(win);
  if (!win.visualViewport) {
    return;
  }
  currentVisualViewport = copyVisualViewport(win.visualViewport);
  win.visualViewport.onresize = () => {
    trackViewportChanges(win);
    if (keyboardDidOpen() || keyboardDidResize(win)) {
      setKeyboardOpen(win);
    } else if (keyboardDidClose(win)) {
      setKeyboardClose(win);
    }
  };
};
/**
 * Listen for events fired by native keyboard plugin
 * in Capacitor/Cordova so devs only need to listen
 * in one place.
 */
const startNativeListeners = win => {
  win.addEventListener('keyboardDidShow', ev => setKeyboardOpen(win, ev));
  win.addEventListener('keyboardDidHide', () => setKeyboardClose(win));
};
const setKeyboardOpen = (win, ev) => {
  fireKeyboardOpenEvent(win, ev);
  keyboardOpen = true;
};
const setKeyboardClose = win => {
  fireKeyboardCloseEvent(win);
  keyboardOpen = false;
};
/**
 * Returns `true` if the `keyboardOpen` flag is not
 * set, the previous visual viewport width equal the current
 * visual viewport width, and if the scaled difference
 * of the previous visual viewport height minus the current
 * visual viewport height is greater than KEYBOARD_THRESHOLD
 *
 * We need to be able to accommodate users who have zooming
 * enabled in their browser (or have zoomed in manually) which
 * is why we take into account the current visual viewport's
 * scale value.
 */
const keyboardDidOpen = () => {
  const scaledHeightDifference = (previousVisualViewport.height - currentVisualViewport.height) * currentVisualViewport.scale;
  return !keyboardOpen && previousVisualViewport.width === currentVisualViewport.width && scaledHeightDifference > KEYBOARD_THRESHOLD;
};
/**
 * Returns `true` if the keyboard is open,
 * but the keyboard did not close
 */
const keyboardDidResize = win => {
  return keyboardOpen && !keyboardDidClose(win);
};
/**
 * Determine if the keyboard was closed
 * Returns `true` if the `keyboardOpen` flag is set and
 * the current visual viewport height equals the
 * layout viewport height.
 */
const keyboardDidClose = win => {
  return keyboardOpen && currentVisualViewport.height === win.innerHeight;
};
/**
 * Dispatch a keyboard open event
 */
const fireKeyboardOpenEvent = (win, nativeEv) => {
  const keyboardHeight = nativeEv ? nativeEv.keyboardHeight : win.innerHeight - currentVisualViewport.height;
  const ev = new CustomEvent(KEYBOARD_DID_OPEN, {
    detail: {
      keyboardHeight
    }
  });
  win.dispatchEvent(ev);
};
/**
 * Dispatch a keyboard close event
 */
const fireKeyboardCloseEvent = win => {
  const ev = new CustomEvent(KEYBOARD_DID_CLOSE);
  win.dispatchEvent(ev);
};
/**
 * Given a window object, create a copy of
 * the current visual and layout viewport states
 * while also preserving the previous visual and
 * layout viewport states
 */
const trackViewportChanges = win => {
  previousVisualViewport = Object.assign({}, currentVisualViewport);
  currentVisualViewport = copyVisualViewport(win.visualViewport);
};
/**
 * Creates a deep copy of the visual viewport
 * at a given state
 */
const copyVisualViewport = visualViewport => {
  return {
    width: Math.round(visualViewport.width),
    height: Math.round(visualViewport.height),
    offsetTop: visualViewport.offsetTop,
    offsetLeft: visualViewport.offsetLeft,
    pageTop: visualViewport.pageTop,
    pageLeft: visualViewport.pageLeft,
    scale: visualViewport.scale
  };
};


/***/ }),

/***/ 3963:
/*!***************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/keyboard-controller-73af62b2.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createKeyboardController)
/* harmony export */ });
/* harmony import */ var _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-33ffec25.js */ 2286);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


/**
 * Creates a controller that tracks and reacts to opening or closing the keyboard.
 *
 * @internal
 * @param keyboardChangeCallback A function to call when the keyboard opens or closes.
 */
const createKeyboardController = keyboardChangeCallback => {
  let keyboardWillShowHandler;
  let keyboardWillHideHandler;
  let keyboardVisible;
  const init = () => {
    keyboardWillShowHandler = () => {
      keyboardVisible = true;
      if (keyboardChangeCallback) keyboardChangeCallback(true);
    };
    keyboardWillHideHandler = () => {
      keyboardVisible = false;
      if (keyboardChangeCallback) keyboardChangeCallback(false);
    };
    _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w.addEventListener('keyboardWillShow', keyboardWillShowHandler);
    _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w.addEventListener('keyboardWillHide', keyboardWillHideHandler);
  };
  const destroy = () => {
    _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w.removeEventListener('keyboardWillShow', keyboardWillShowHandler);
    _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_33ffec25_js__WEBPACK_IMPORTED_MODULE_0__.w.removeEventListener('keyboardWillHide', keyboardWillHideHandler);
    keyboardWillShowHandler = keyboardWillHideHandler = undefined;
  };
  const isKeyboardVisible = () => keyboardVisible;
  init();
  return {
    init,
    destroy,
    isKeyboardVisible
  };
};


/***/ }),

/***/ 3844:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-5d6b6fe7.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SPINNERS)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const spinners = {
  bubbles: {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${dur * index / total - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          top: `${9 * Math.sin(angle)}px`,
          left: `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay
        }
      };
    }
  },
  circles: {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${dur * step - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          top: `${9 * Math.sin(angle)}px`,
          left: `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay
        }
      };
    }
  },
  circular: {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  crescent: {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  dots: {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          left: `${9 - 9 * index}px`,
          'animation-delay': animationDelay
        }
      };
    }
  },
  lines: {
    dur: 1000,
    lines: 8,
    fn: (dur, index, total) => {
      const transform = `rotate(${360 / total * index + (index < total / 2 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 14,
        y2: 26,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 8,
    fn: (dur, index, total) => {
      const transform = `rotate(${360 / total * index + (index < total / 2 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-sharp': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-sharp-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${dur * index / total - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          transform: transform,
          'animation-delay': animationDelay
        }
      };
    }
  }
};
const SPINNERS = spinners;


/***/ }),

/***/ 8271:
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/swipe-back-23e95969.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSwipeBackGesture": () => (/* binding */ createSwipeBackGesture)
/* harmony export */ });
/* harmony import */ var _helpers_5eb6364d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-5eb6364d.js */ 9364);
/* harmony import */ var _dir_e8b767a8_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dir-e8b767a8.js */ 7481);
/* harmony import */ var _index_422b6e83_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-422b6e83.js */ 8759);
/* harmony import */ var _gesture_controller_17060b7c_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gesture-controller-17060b7c.js */ 6379);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */




const createSwipeBackGesture = (el, canStartHandler, onStartHandler, onMoveHandler, onEndHandler) => {
  const win = el.ownerDocument.defaultView;
  let rtl = (0,_dir_e8b767a8_js__WEBPACK_IMPORTED_MODULE_1__.i)(el);
  /**
   * Determine if a gesture is near the edge
   * of the screen. If true, then the swipe
   * to go back gesture should proceed.
   */
  const isAtEdge = detail => {
    const threshold = 50;
    const {
      startX
    } = detail;
    if (rtl) {
      return startX >= win.innerWidth - threshold;
    }
    return startX <= threshold;
  };
  const getDeltaX = detail => {
    return rtl ? -detail.deltaX : detail.deltaX;
  };
  const getVelocityX = detail => {
    return rtl ? -detail.velocityX : detail.velocityX;
  };
  const canStart = detail => {
    /**
     * The user's locale can change mid-session,
     * so we need to check text direction at
     * the beginning of every gesture.
     */
    rtl = (0,_dir_e8b767a8_js__WEBPACK_IMPORTED_MODULE_1__.i)(el);
    return isAtEdge(detail) && canStartHandler();
  };
  const onMove = detail => {
    // set the transition animation's progress
    const delta = getDeltaX(detail);
    const stepValue = delta / win.innerWidth;
    onMoveHandler(stepValue);
  };
  const onEnd = detail => {
    // the swipe back gesture has ended
    const delta = getDeltaX(detail);
    const width = win.innerWidth;
    const stepValue = delta / width;
    const velocity = getVelocityX(detail);
    const z = width / 2.0;
    const shouldComplete = velocity >= 0 && (velocity > 0.2 || delta > z);
    const missing = shouldComplete ? 1 - stepValue : stepValue;
    const missingDistance = missing * width;
    let realDur = 0;
    if (missingDistance > 5) {
      const dur = missingDistance / Math.abs(velocity);
      realDur = Math.min(dur, 540);
    }
    onEndHandler(shouldComplete, stepValue <= 0 ? 0.01 : (0,_helpers_5eb6364d_js__WEBPACK_IMPORTED_MODULE_0__.l)(0, stepValue, 0.9999), realDur);
  };
  return (0,_index_422b6e83_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'goback-swipe',
    gesturePriority: 40,
    threshold: 10,
    canStart,
    onStart: onStartHandler,
    onMove,
    onEnd
  });
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNOQztFQUNGLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzIjpbIi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2J1dHRvbi1hY3RpdmUtOTA5NjRlZjguanMiLCIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9kaXItZThiNzY3YTguanMiLCIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9mb2N1cy12aXNpYmxlLWJkMDI1MThiLmpzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vZm9ybS1jb250cm9sbGVyLTM1NjcyZmIwLmpzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaGFwdGljLTAyOWE0NmY2LmpzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vaW5kZXgtMzkzYmMxNGEuanMiLCIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pbmRleC00NTVmNjIwMi5qcyIsIi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2lucHV0LnV0aWxzLWI5MjliYzY2LmpzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20va2V5Ym9hcmQtMjgyYjgxYjguanMiLCIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9rZXlib2FyZC1jb250cm9sbGVyLTczYWY2MmIyLmpzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vc3Bpbm5lci1jb25maWdzLTVkNmI2ZmU3LmpzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vc3dpcGUtYmFjay0yM2U5NTk2OS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgdyBhcyB3cml0ZVRhc2sgfSBmcm9tICcuL2luZGV4LWJlMjE4ZDcwLmpzJztcbmltcG9ydCB7IGggYXMgaGFwdGljU2VsZWN0aW9uRW5kLCBhIGFzIGhhcHRpY1NlbGVjdGlvblN0YXJ0LCBiIGFzIGhhcHRpY1NlbGVjdGlvbkNoYW5nZWQgfSBmcm9tICcuL2hhcHRpYy0wMjlhNDZmNi5qcyc7XG5pbXBvcnQgeyBjcmVhdGVHZXN0dXJlIH0gZnJvbSAnLi9pbmRleC00MjJiNmU4My5qcyc7XG5cbmNvbnN0IGNyZWF0ZUJ1dHRvbkFjdGl2ZUdlc3R1cmUgPSAoZWwsIGlzQnV0dG9uKSA9PiB7XG4gIGxldCBjdXJyZW50VG91Y2hlZEJ1dHRvbjtcbiAgbGV0IGluaXRpYWxUb3VjaGVkQnV0dG9uO1xuICBjb25zdCBhY3RpdmF0ZUJ1dHRvbkF0UG9pbnQgPSAoeCwgeSwgaGFwdGljRmVlZGJhY2tGbikgPT4ge1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoeCwgeSk7XG4gICAgaWYgKCF0YXJnZXQgfHwgIWlzQnV0dG9uKHRhcmdldCkpIHtcbiAgICAgIGNsZWFyQWN0aXZlQnV0dG9uKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0YXJnZXQgIT09IGN1cnJlbnRUb3VjaGVkQnV0dG9uKSB7XG4gICAgICBjbGVhckFjdGl2ZUJ1dHRvbigpO1xuICAgICAgc2V0QWN0aXZlQnV0dG9uKHRhcmdldCwgaGFwdGljRmVlZGJhY2tGbik7XG4gICAgfVxuICB9O1xuICBjb25zdCBzZXRBY3RpdmVCdXR0b24gPSAoYnV0dG9uLCBoYXB0aWNGZWVkYmFja0ZuKSA9PiB7XG4gICAgY3VycmVudFRvdWNoZWRCdXR0b24gPSBidXR0b247XG4gICAgaWYgKCFpbml0aWFsVG91Y2hlZEJ1dHRvbikge1xuICAgICAgaW5pdGlhbFRvdWNoZWRCdXR0b24gPSBjdXJyZW50VG91Y2hlZEJ1dHRvbjtcbiAgICB9XG4gICAgY29uc3QgYnV0dG9uVG9Nb2RpZnkgPSBjdXJyZW50VG91Y2hlZEJ1dHRvbjtcbiAgICB3cml0ZVRhc2soKCkgPT4gYnV0dG9uVG9Nb2RpZnkuY2xhc3NMaXN0LmFkZCgnaW9uLWFjdGl2YXRlZCcpKTtcbiAgICBoYXB0aWNGZWVkYmFja0ZuKCk7XG4gIH07XG4gIGNvbnN0IGNsZWFyQWN0aXZlQnV0dG9uID0gKGRpc3BhdGNoQ2xpY2sgPSBmYWxzZSkgPT4ge1xuICAgIGlmICghY3VycmVudFRvdWNoZWRCdXR0b24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgYnV0dG9uVG9Nb2RpZnkgPSBjdXJyZW50VG91Y2hlZEJ1dHRvbjtcbiAgICB3cml0ZVRhc2soKCkgPT4gYnV0dG9uVG9Nb2RpZnkuY2xhc3NMaXN0LnJlbW92ZSgnaW9uLWFjdGl2YXRlZCcpKTtcbiAgICAvKipcbiAgICAgKiBDbGlja2luZyBvbiBvbmUgYnV0dG9uLCBidXQgcmVsZWFzaW5nIG9uIGFub3RoZXIgYnV0dG9uXG4gICAgICogZG9lcyBub3QgZGlzcGF0Y2ggYSBjbGljayBldmVudCBpbiBicm93c2Vycywgc28gd2VcbiAgICAgKiBuZWVkIHRvIGRvIGl0IG1hbnVhbGx5IGhlcmUuIFNvbWUgYnJvd3NlcnMgd2lsbFxuICAgICAqIGRpc3BhdGNoIGEgY2xpY2sgaWYgY2xpY2tpbmcgb24gb25lIGJ1dHRvbiwgZHJhZ2dpbmcgb3ZlclxuICAgICAqIGFub3RoZXIgYnV0dG9uLCBhbmQgcmVsZWFzaW5nIG9uIHRoZSBvcmlnaW5hbCBidXR0b24uIEluIHRoYXRcbiAgICAgKiBjYXNlLCB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB3ZSBkbyBub3QgY2F1c2UgYSBkb3VibGUgY2xpY2sgdGhlcmUuXG4gICAgICovXG4gICAgaWYgKGRpc3BhdGNoQ2xpY2sgJiYgaW5pdGlhbFRvdWNoZWRCdXR0b24gIT09IGN1cnJlbnRUb3VjaGVkQnV0dG9uKSB7XG4gICAgICBjdXJyZW50VG91Y2hlZEJ1dHRvbi5jbGljaygpO1xuICAgIH1cbiAgICBjdXJyZW50VG91Y2hlZEJ1dHRvbiA9IHVuZGVmaW5lZDtcbiAgfTtcbiAgcmV0dXJuIGNyZWF0ZUdlc3R1cmUoe1xuICAgIGVsLFxuICAgIGdlc3R1cmVOYW1lOiAnYnV0dG9uQWN0aXZlRHJhZycsXG4gICAgdGhyZXNob2xkOiAwLFxuICAgIG9uU3RhcnQ6IChldikgPT4gYWN0aXZhdGVCdXR0b25BdFBvaW50KGV2LmN1cnJlbnRYLCBldi5jdXJyZW50WSwgaGFwdGljU2VsZWN0aW9uU3RhcnQpLFxuICAgIG9uTW92ZTogKGV2KSA9PiBhY3RpdmF0ZUJ1dHRvbkF0UG9pbnQoZXYuY3VycmVudFgsIGV2LmN1cnJlbnRZLCBoYXB0aWNTZWxlY3Rpb25DaGFuZ2VkKSxcbiAgICBvbkVuZDogKCkgPT4ge1xuICAgICAgY2xlYXJBY3RpdmVCdXR0b24odHJ1ZSk7XG4gICAgICBoYXB0aWNTZWxlY3Rpb25FbmQoKTtcbiAgICAgIGluaXRpYWxUb3VjaGVkQnV0dG9uID0gdW5kZWZpbmVkO1xuICAgIH0sXG4gIH0pO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlQnV0dG9uQWN0aXZlR2VzdHVyZSBhcyBjIH07XG4iLCIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZG9jdW1lbnQgb3IgaG9zdCBlbGVtZW50XG4gKiBoYXMgYSBgZGlyYCBzZXQgdG8gYHJ0bGAuIFRoZSBob3N0IHZhbHVlIHdpbGwgYWx3YXlzXG4gKiB0YWtlIHByaW9yaXR5IG92ZXIgdGhlIHJvb3QgZG9jdW1lbnQgdmFsdWUuXG4gKi9cbmNvbnN0IGlzUlRMID0gKGhvc3RFbCkgPT4ge1xuICBpZiAoaG9zdEVsKSB7XG4gICAgaWYgKGhvc3RFbC5kaXIgIT09ICcnKSB7XG4gICAgICByZXR1cm4gaG9zdEVsLmRpci50b0xvd2VyQ2FzZSgpID09PSAncnRsJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChkb2N1bWVudCA9PT0gbnVsbCB8fCBkb2N1bWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZG9jdW1lbnQuZGlyLnRvTG93ZXJDYXNlKCkpID09PSAncnRsJztcbn07XG5cbmV4cG9ydCB7IGlzUlRMIGFzIGkgfTtcbiIsIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5jb25zdCBJT05fRk9DVVNFRCA9ICdpb24tZm9jdXNlZCc7XG5jb25zdCBJT05fRk9DVVNBQkxFID0gJ2lvbi1mb2N1c2FibGUnO1xuY29uc3QgRk9DVVNfS0VZUyA9IFtcbiAgJ1RhYicsXG4gICdBcnJvd0Rvd24nLFxuICAnU3BhY2UnLFxuICAnRXNjYXBlJyxcbiAgJyAnLFxuICAnU2hpZnQnLFxuICAnRW50ZXInLFxuICAnQXJyb3dMZWZ0JyxcbiAgJ0Fycm93UmlnaHQnLFxuICAnQXJyb3dVcCcsXG4gICdIb21lJyxcbiAgJ0VuZCcsXG5dO1xuY29uc3Qgc3RhcnRGb2N1c1Zpc2libGUgPSAocm9vdEVsKSA9PiB7XG4gIGxldCBjdXJyZW50Rm9jdXMgPSBbXTtcbiAgbGV0IGtleWJvYXJkTW9kZSA9IHRydWU7XG4gIGNvbnN0IHJlZiA9IHJvb3RFbCA/IHJvb3RFbC5zaGFkb3dSb290IDogZG9jdW1lbnQ7XG4gIGNvbnN0IHJvb3QgPSByb290RWwgPyByb290RWwgOiBkb2N1bWVudC5ib2R5O1xuICBjb25zdCBzZXRGb2N1cyA9IChlbGVtZW50cykgPT4ge1xuICAgIGN1cnJlbnRGb2N1cy5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZShJT05fRk9DVVNFRCkpO1xuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QuYWRkKElPTl9GT0NVU0VEKSk7XG4gICAgY3VycmVudEZvY3VzID0gZWxlbWVudHM7XG4gIH07XG4gIGNvbnN0IHBvaW50ZXJEb3duID0gKCkgPT4ge1xuICAgIGtleWJvYXJkTW9kZSA9IGZhbHNlO1xuICAgIHNldEZvY3VzKFtdKTtcbiAgfTtcbiAgY29uc3Qgb25LZXlkb3duID0gKGV2KSA9PiB7XG4gICAga2V5Ym9hcmRNb2RlID0gRk9DVVNfS0VZUy5pbmNsdWRlcyhldi5rZXkpO1xuICAgIGlmICgha2V5Ym9hcmRNb2RlKSB7XG4gICAgICBzZXRGb2N1cyhbXSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBvbkZvY3VzaW4gPSAoZXYpID0+IHtcbiAgICBpZiAoa2V5Ym9hcmRNb2RlICYmIGV2LmNvbXBvc2VkUGF0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCB0b0ZvY3VzID0gZXYuY29tcG9zZWRQYXRoKCkuZmlsdGVyKChlbCkgPT4ge1xuICAgICAgICAvLyBUT0RPKEZXLTI4MzIpOiB0eXBlXG4gICAgICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgICAgICByZXR1cm4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKElPTl9GT0NVU0FCTEUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgc2V0Rm9jdXModG9Gb2N1cyk7XG4gICAgfVxuICB9O1xuICBjb25zdCBvbkZvY3Vzb3V0ID0gKCkgPT4ge1xuICAgIGlmIChyZWYuYWN0aXZlRWxlbWVudCA9PT0gcm9vdCkge1xuICAgICAgc2V0Rm9jdXMoW10pO1xuICAgIH1cbiAgfTtcbiAgcmVmLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleWRvd24pO1xuICByZWYuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIG9uRm9jdXNpbik7XG4gIHJlZi5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIG9uRm9jdXNvdXQpO1xuICByZWYuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHBvaW50ZXJEb3duKTtcbiAgcmVmLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHBvaW50ZXJEb3duKTtcbiAgY29uc3QgZGVzdHJveSA9ICgpID0+IHtcbiAgICByZWYucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5ZG93bik7XG4gICAgcmVmLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBvbkZvY3VzaW4pO1xuICAgIHJlZi5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIG9uRm9jdXNvdXQpO1xuICAgIHJlZi5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgcG9pbnRlckRvd24pO1xuICAgIHJlZi5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBwb2ludGVyRG93bik7XG4gIH07XG4gIHJldHVybiB7XG4gICAgZGVzdHJveSxcbiAgICBzZXRGb2N1cyxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IHN0YXJ0Rm9jdXNWaXNpYmxlIH07XG4iLCIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuLyoqXG4gKiBDcmVhdGVzIGEgY29udHJvbGxlciB0aGF0IHRyYWNrcyB3aGV0aGVyIGEgZm9ybSBjb250cm9sIGlzIHVzaW5nIHRoZSBsZWdhY3kgb3IgbW9kZXJuIHN5bnRheC4gVGhpcyBzaG91bGQgYmUgcmVtb3ZlZCB3aGVuIHRoZSBsZWdhY3kgZm9ybSBjb250cm9sIHN5bnRheCBpcyByZW1vdmVkLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHByb3AgZWw6IFRoZSBJb25pYyBmb3JtIGNvbXBvbmVudCB0byByZWZlcmVuY2VcbiAqL1xuY29uc3QgY3JlYXRlTGVnYWN5Rm9ybUNvbnRyb2xsZXIgPSAoZWwpID0+IHtcbiAgY29uc3QgY29udHJvbEVsID0gZWw7XG4gIGxldCBsZWdhY3lDb250cm9sO1xuICBjb25zdCBoYXNMZWdhY3lDb250cm9sID0gKCkgPT4ge1xuICAgIGlmIChsZWdhY3lDb250cm9sID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8qKlxuICAgICAgICogRGV0ZWN0IGlmIGRldmVsb3BlcnMgYXJlIHVzaW5nIHRoZSBsZWdhY3kgZm9ybSBjb250cm9sIHN5bnRheFxuICAgICAgICogc28gYSBkZXByZWNhdGlvbiB3YXJuaW5nIGlzIGxvZ2dlZC4gVGhpcyB3YXJuaW5nIGNhbiBiZSBkaXNhYmxlZFxuICAgICAgICogYnkgZWl0aGVyIHVzaW5nIHRoZSBuZXcgYGxhYmVsYCBwcm9wZXJ0eSBvciBzZXR0aW5nIGBhcmlhLWxhYmVsYFxuICAgICAgICogb24gdGhlIGNvbnRyb2wuXG4gICAgICAgKiBBbHRlcm5hdGl2ZWx5LCBjb21wb25lbnRzIHRoYXQgdXNlIGEgc2xvdCBmb3IgdGhlIGxhYmVsXG4gICAgICAgKiBjYW4gY2hlY2sgdG8gc2VlIGlmIHRoZSBjb21wb25lbnQgaGFzIHNsb3R0ZWQgdGV4dFxuICAgICAgICogaW4gdGhlIGxpZ2h0IERPTS5cbiAgICAgICAqL1xuICAgICAgY29uc3QgaGFzTGFiZWxQcm9wID0gY29udHJvbEVsLmxhYmVsICE9PSB1bmRlZmluZWQgfHwgaGFzTGFiZWxTbG90KGNvbnRyb2xFbCk7XG4gICAgICBjb25zdCBoYXNBcmlhTGFiZWxBdHRyaWJ1dGUgPSBjb250cm9sRWwuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykgfHxcbiAgICAgICAgLy8gU2hhZG93IERPTSBmb3JtIGNvbnRyb2xzIGNhbm5vdCB1c2UgYXJpYS1sYWJlbGxlZGJ5XG4gICAgICAgIChjb250cm9sRWwuaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknKSAmJiBjb250cm9sRWwuc2hhZG93Um9vdCA9PT0gbnVsbCk7XG4gICAgICAvKipcbiAgICAgICAqIERldmVsb3BlcnMgY2FuIG1hbnVhbGx5IG9wdC1vdXQgb2YgdGhlIG1vZGVybiBmb3JtIG1hcmt1cFxuICAgICAgICogYnkgc2V0dGluZyBgbGVnYWN5PVwidHJ1ZVwiYCBvbiBjb21wb25lbnRzLlxuICAgICAgICovXG4gICAgICBsZWdhY3lDb250cm9sID0gY29udHJvbEVsLmxlZ2FjeSA9PT0gdHJ1ZSB8fCAoIWhhc0xhYmVsUHJvcCAmJiAhaGFzQXJpYUxhYmVsQXR0cmlidXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIGxlZ2FjeUNvbnRyb2w7XG4gIH07XG4gIHJldHVybiB7IGhhc0xlZ2FjeUNvbnRyb2wgfTtcbn07XG5jb25zdCBoYXNMYWJlbFNsb3QgPSAoY29udHJvbEVsKSA9PiB7XG4gIGNvbnN0IHJvb3QgPSBjb250cm9sRWwuc2hhZG93Um9vdDtcbiAgaWYgKHJvb3QgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLyoqXG4gICAqIENvbXBvbmVudHMgdGhhdCBoYXZlIGEgbmFtZWQgbGFiZWwgc2xvdFxuICAgKiBhbHNvIGhhdmUgb3RoZXIgc2xvdHMsIHNvIHdlIG5lZWQgdG8gcXVlcnkgZm9yXG4gICAqIGFueXRoaW5nIHRoYXQgaXMgZXhwbGljaXRseSBwYXNzZWQgdG8gc2xvdD1cImxhYmVsXCJcbiAgICovXG4gIGlmIChOQU1FRF9MQUJFTF9TTE9UX0NPTVBPTkVOVFMuaW5jbHVkZXMoY29udHJvbEVsLnRhZ05hbWUpICYmIGNvbnRyb2xFbC5xdWVyeVNlbGVjdG9yKCdbc2xvdD1cImxhYmVsXCJdJykgIT09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICogQ29tcG9uZW50cyB0aGF0IGhhdmUgYW4gdW5uYW1lZCBzbG90IGZvciB0aGUgbGFiZWxcbiAgICogaGF2ZSBubyBvdGhlciBzbG90cywgc28gd2UgY2FuIGNoZWNrIHRoZSB0ZXh0Q29udGVudFxuICAgKiBvZiB0aGUgZWxlbWVudC5cbiAgICovXG4gIGlmIChVTk5BTUVEX0xBQkVMX1NMT1RfQ09NUE9ORU5UUy5pbmNsdWRlcyhjb250cm9sRWwudGFnTmFtZSkgJiYgY29udHJvbEVsLnRleHRDb250ZW50ICE9PSAnJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5jb25zdCBOQU1FRF9MQUJFTF9TTE9UX0NPTVBPTkVOVFMgPSBbJ0lPTi1SQU5HRSddO1xuY29uc3QgVU5OQU1FRF9MQUJFTF9TTE9UX0NPTVBPTkVOVFMgPSBbJ0lPTi1UT0dHTEUnLCAnSU9OLUNIRUNLQk9YJywgJ0lPTi1SQURJTyddO1xuXG5leHBvcnQgeyBjcmVhdGVMZWdhY3lGb3JtQ29udHJvbGxlciBhcyBjIH07XG4iLCIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuY29uc3QgSGFwdGljRW5naW5lID0ge1xuICBnZXRFbmdpbmUoKSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IHdpbiA9IHdpbmRvdztcbiAgICByZXR1cm4gd2luLlRhcHRpY0VuZ2luZSB8fCAoKChfYSA9IHdpbi5DYXBhY2l0b3IpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pc1BsdWdpbkF2YWlsYWJsZSgnSGFwdGljcycpKSAmJiB3aW4uQ2FwYWNpdG9yLlBsdWdpbnMuSGFwdGljcyk7XG4gIH0sXG4gIGF2YWlsYWJsZSgpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3Qgd2luID0gd2luZG93O1xuICAgIGNvbnN0IGVuZ2luZSA9IHRoaXMuZ2V0RW5naW5lKCk7XG4gICAgaWYgKCFlbmdpbmUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGV2ZWxvcGVycyBjYW4gbWFudWFsbHkgaW1wb3J0IHRoZVxuICAgICAqIEhhcHRpY3MgcGx1Z2luIGluIHRoZWlyIGFwcCB3aGljaCB3aWxsIGNhdXNlXG4gICAgICogZ2V0RW5naW5lIHRvIHJldHVybiB0aGUgSGFwdGljcyBlbmdpbmUuIEhvd2V2ZXIsXG4gICAgICogdGhlIEhhcHRpY3MgZW5naW5lIHdpbGwgdGhyb3cgYW4gZXJyb3IgaWZcbiAgICAgKiB1c2VkIGluIGEgd2ViIGJyb3dzZXIgdGhhdCBkb2VzIG5vdCBzdXBwb3J0XG4gICAgICogdGhlIFZpYnJhdGUgQVBJLiBUaGlzIGNoZWNrIGF2b2lkcyB0aGF0IGVycm9yXG4gICAgICogaWYgdGhlIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgVmlicmF0ZSBBUEkuXG4gICAgICovXG4gICAgaWYgKCgoX2EgPSB3aW4uQ2FwYWNpdG9yKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0UGxhdGZvcm0oKSkgPT09ICd3ZWInKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnZpYnJhdGUgIT09IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIGlzQ29yZG92YSgpIHtcbiAgICByZXR1cm4gISF3aW5kb3cuVGFwdGljRW5naW5lO1xuICB9LFxuICBpc0NhcGFjaXRvcigpIHtcbiAgICBjb25zdCB3aW4gPSB3aW5kb3c7XG4gICAgcmV0dXJuICEhd2luLkNhcGFjaXRvcjtcbiAgfSxcbiAgaW1wYWN0KG9wdGlvbnMpIHtcbiAgICBjb25zdCBlbmdpbmUgPSB0aGlzLmdldEVuZ2luZSgpO1xuICAgIGlmICghZW5naW5lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHN0eWxlID0gdGhpcy5pc0NhcGFjaXRvcigpID8gb3B0aW9ucy5zdHlsZS50b1VwcGVyQ2FzZSgpIDogb3B0aW9ucy5zdHlsZTtcbiAgICBlbmdpbmUuaW1wYWN0KHsgc3R5bGUgfSk7XG4gIH0sXG4gIG5vdGlmaWNhdGlvbihvcHRpb25zKSB7XG4gICAgY29uc3QgZW5naW5lID0gdGhpcy5nZXRFbmdpbmUoKTtcbiAgICBpZiAoIWVuZ2luZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzdHlsZSA9IHRoaXMuaXNDYXBhY2l0b3IoKSA/IG9wdGlvbnMuc3R5bGUudG9VcHBlckNhc2UoKSA6IG9wdGlvbnMuc3R5bGU7XG4gICAgZW5naW5lLm5vdGlmaWNhdGlvbih7IHN0eWxlIH0pO1xuICB9LFxuICBzZWxlY3Rpb24oKSB7XG4gICAgdGhpcy5pbXBhY3QoeyBzdHlsZTogJ2xpZ2h0JyB9KTtcbiAgfSxcbiAgc2VsZWN0aW9uU3RhcnQoKSB7XG4gICAgY29uc3QgZW5naW5lID0gdGhpcy5nZXRFbmdpbmUoKTtcbiAgICBpZiAoIWVuZ2luZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc0NhcGFjaXRvcigpKSB7XG4gICAgICBlbmdpbmUuc2VsZWN0aW9uU3RhcnQoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBlbmdpbmUuZ2VzdHVyZVNlbGVjdGlvblN0YXJ0KCk7XG4gICAgfVxuICB9LFxuICBzZWxlY3Rpb25DaGFuZ2VkKCkge1xuICAgIGNvbnN0IGVuZ2luZSA9IHRoaXMuZ2V0RW5naW5lKCk7XG4gICAgaWYgKCFlbmdpbmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNDYXBhY2l0b3IoKSkge1xuICAgICAgZW5naW5lLnNlbGVjdGlvbkNoYW5nZWQoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBlbmdpbmUuZ2VzdHVyZVNlbGVjdGlvbkNoYW5nZWQoKTtcbiAgICB9XG4gIH0sXG4gIHNlbGVjdGlvbkVuZCgpIHtcbiAgICBjb25zdCBlbmdpbmUgPSB0aGlzLmdldEVuZ2luZSgpO1xuICAgIGlmICghZW5naW5lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmlzQ2FwYWNpdG9yKCkpIHtcbiAgICAgIGVuZ2luZS5zZWxlY3Rpb25FbmQoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBlbmdpbmUuZ2VzdHVyZVNlbGVjdGlvbkVuZCgpO1xuICAgIH1cbiAgfSxcbn07XG4vKipcbiAqIENoZWNrIHRvIHNlZSBpZiB0aGUgSGFwdGljIFBsdWdpbiBpcyBhdmFpbGFibGVcbiAqIEByZXR1cm4gUmV0dXJucyBgdHJ1ZWAgb3IgZmFsc2UgaWYgdGhlIHBsdWdpbiBpcyBhdmFpbGFibGVcbiAqL1xuY29uc3QgaGFwdGljQXZhaWxhYmxlID0gKCkgPT4ge1xuICByZXR1cm4gSGFwdGljRW5naW5lLmF2YWlsYWJsZSgpO1xufTtcbi8qKlxuICogVHJpZ2dlciBhIHNlbGVjdGlvbiBjaGFuZ2VkIGhhcHRpYyBldmVudC4gR29vZCBmb3Igb25lLXRpbWUgZXZlbnRzXG4gKiAobm90IGZvciBnZXN0dXJlcylcbiAqL1xuY29uc3QgaGFwdGljU2VsZWN0aW9uID0gKCkgPT4ge1xuICBoYXB0aWNBdmFpbGFibGUoKSAmJiBIYXB0aWNFbmdpbmUuc2VsZWN0aW9uKCk7XG59O1xuLyoqXG4gKiBUZWxsIHRoZSBoYXB0aWMgZW5naW5lIHRoYXQgYSBnZXN0dXJlIGZvciBhIHNlbGVjdGlvbiBjaGFuZ2UgaXMgc3RhcnRpbmcuXG4gKi9cbmNvbnN0IGhhcHRpY1NlbGVjdGlvblN0YXJ0ID0gKCkgPT4ge1xuICBoYXB0aWNBdmFpbGFibGUoKSAmJiBIYXB0aWNFbmdpbmUuc2VsZWN0aW9uU3RhcnQoKTtcbn07XG4vKipcbiAqIFRlbGwgdGhlIGhhcHRpYyBlbmdpbmUgdGhhdCBhIHNlbGVjdGlvbiBjaGFuZ2VkIGR1cmluZyBhIGdlc3R1cmUuXG4gKi9cbmNvbnN0IGhhcHRpY1NlbGVjdGlvbkNoYW5nZWQgPSAoKSA9PiB7XG4gIGhhcHRpY0F2YWlsYWJsZSgpICYmIEhhcHRpY0VuZ2luZS5zZWxlY3Rpb25DaGFuZ2VkKCk7XG59O1xuLyoqXG4gKiBUZWxsIHRoZSBoYXB0aWMgZW5naW5lIHdlIGFyZSBkb25lIHdpdGggYSBnZXN0dXJlLiBUaGlzIG5lZWRzIHRvIGJlXG4gKiBjYWxsZWQgbGVzdCByZXNvdXJjZXMgYXJlIG5vdCBwcm9wZXJseSByZWN5Y2xlZC5cbiAqL1xuY29uc3QgaGFwdGljU2VsZWN0aW9uRW5kID0gKCkgPT4ge1xuICBoYXB0aWNBdmFpbGFibGUoKSAmJiBIYXB0aWNFbmdpbmUuc2VsZWN0aW9uRW5kKCk7XG59O1xuLyoqXG4gKiBVc2UgdGhpcyB0byBpbmRpY2F0ZSBzdWNjZXNzL2ZhaWx1cmUvd2FybmluZyB0byB0aGUgdXNlci5cbiAqIG9wdGlvbnMgc2hvdWxkIGJlIG9mIHRoZSB0eXBlIGB7IHN0eWxlOiAnbGlnaHQnIH1gIChvciBgbWVkaXVtYC9gaGVhdnlgKVxuICovXG5jb25zdCBoYXB0aWNJbXBhY3QgPSAob3B0aW9ucykgPT4ge1xuICBoYXB0aWNBdmFpbGFibGUoKSAmJiBIYXB0aWNFbmdpbmUuaW1wYWN0KG9wdGlvbnMpO1xufTtcblxuZXhwb3J0IHsgaGFwdGljU2VsZWN0aW9uU3RhcnQgYXMgYSwgaGFwdGljU2VsZWN0aW9uQ2hhbmdlZCBhcyBiLCBoYXB0aWNTZWxlY3Rpb24gYXMgYywgaGFwdGljSW1wYWN0IGFzIGQsIGhhcHRpY1NlbGVjdGlvbkVuZCBhcyBoIH07XG4iLCIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuLyogSW9uaWNvbnMgdjcuMS4wLCBFUyBNb2R1bGVzICovXG5jb25zdCBhcnJvd0JhY2tTaGFycCA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHBhdGggc3Ryb2tlLWxpbmVjYXA9J3NxdWFyZScgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBzdHJva2Utd2lkdGg9JzQ4JyBkPSdNMjQ0IDQwMEwxMDAgMjU2bDE0NC0xNDRNMTIwIDI1NmgyOTInIGNsYXNzPSdpb25pY29uLWZpbGwtbm9uZScvPjwvc3ZnPlwiO1xuY29uc3QgYXJyb3dEb3duID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48cGF0aCBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nNDgnIGQ9J00xMTIgMjY4bDE0NCAxNDQgMTQ0LTE0NE0yNTYgMzkyVjEwMCcgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lJy8+PC9zdmc+XCI7XG5jb25zdCBjYXJldEJhY2tTaGFycCA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHBhdGggZD0nTTM2OCA2NEwxNDQgMjU2bDIyNCAxOTJWNjR6Jy8+PC9zdmc+XCI7XG5jb25zdCBjYXJldERvd25TaGFycCA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHBhdGggZD0nTTY0IDE0NGwxOTIgMjI0IDE5Mi0yMjRINjR6Jy8+PC9zdmc+XCI7XG5jb25zdCBjYXJldFVwU2hhcnAgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjxwYXRoIGQ9J000NDggMzY4TDI1NiAxNDQgNjQgMzY4aDM4NHonLz48L3N2Zz5cIjtcbmNvbnN0IGNoZWNrbWFya091dGxpbmUgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjxwYXRoIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgZD0nTTQxNiAxMjhMMTkyIDM4NGwtOTYtOTYnIGNsYXNzPSdpb25pY29uLWZpbGwtbm9uZSBpb25pY29uLXN0cm9rZS13aWR0aCcvPjwvc3ZnPlwiO1xuY29uc3QgY2hldnJvbkJhY2sgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjxwYXRoIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLXdpZHRoPSc0OCcgZD0nTTMyOCAxMTJMMTg0IDI1NmwxNDQgMTQ0JyBjbGFzcz0naW9uaWNvbi1maWxsLW5vbmUnLz48L3N2Zz5cIjtcbmNvbnN0IGNoZXZyb25Eb3duID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48cGF0aCBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nNDgnIGQ9J00xMTIgMTg0bDE0NCAxNDQgMTQ0LTE0NCcgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lJy8+PC9zdmc+XCI7XG5jb25zdCBjaGV2cm9uRXhwYW5kID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48cGF0aCBkPSdNMTM2IDIwOGwxMjAtMTA0IDEyMCAxMDRNMTM2IDMwNGwxMjAgMTA0IDEyMC0xMDQnIHN0cm9rZS13aWR0aD0nNDgnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lJy8+PC9zdmc+XCI7XG5jb25zdCBjaGV2cm9uRm9yd2FyZCA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHBhdGggc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utd2lkdGg9JzQ4JyBkPSdNMTg0IDExMmwxNDQgMTQ0LTE0NCAxNDQnIGNsYXNzPSdpb25pY29uLWZpbGwtbm9uZScvPjwvc3ZnPlwiO1xuY29uc3QgY2hldnJvbkZvcndhcmRPdXRsaW5lID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48cGF0aCBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nNDgnIGQ9J00xODQgMTEybDE0NCAxNDQtMTQ0IDE0NCcgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lJy8+PC9zdmc+XCI7XG5jb25zdCBjbG9zZSA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHBhdGggZD0nTTI4OS45NCAyNTZsOTUtOTVBMjQgMjQgMCAwMDM1MSAxMjdsLTk1IDk1LTk1LTk1YTI0IDI0IDAgMDAtMzQgMzRsOTUgOTUtOTUgOTVhMjQgMjQgMCAxMDM0IDM0bDk1LTk1IDk1IDk1YTI0IDI0IDAgMDAzNC0zNHonLz48L3N2Zz5cIjtcbmNvbnN0IGNsb3NlQ2lyY2xlID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48cGF0aCBkPSdNMjU2IDQ4QzE0MS4zMSA0OCA0OCAxNDEuMzEgNDggMjU2czkzLjMxIDIwOCAyMDggMjA4IDIwOC05My4zMSAyMDgtMjA4UzM3MC42OSA0OCAyNTYgNDh6bTc1LjMxIDI2MC42OWExNiAxNiAwIDExLTIyLjYyIDIyLjYyTDI1NiAyNzguNjNsLTUyLjY5IDUyLjY4YTE2IDE2IDAgMDEtMjIuNjItMjIuNjJMMjMzLjM3IDI1NmwtNTIuNjgtNTIuNjlhMTYgMTYgMCAwMTIyLjYyLTIyLjYyTDI1NiAyMzMuMzdsNTIuNjktNTIuNjhhMTYgMTYgMCAwMTIyLjYyIDIyLjYyTDI3OC42MyAyNTZ6Jy8+PC9zdmc+XCI7XG5jb25zdCBjbG9zZVNoYXJwID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48cGF0aCBkPSdNNDAwIDE0NS40OUwzNjYuNTEgMTEyIDI1NiAyMjIuNTEgMTQ1LjQ5IDExMiAxMTIgMTQ1LjQ5IDIyMi41MSAyNTYgMTEyIDM2Ni41MSAxNDUuNDkgNDAwIDI1NiAyODkuNDkgMzY2LjUxIDQwMCA0MDAgMzY2LjUxIDI4OS40OSAyNTYgNDAwIDE0NS40OXonLz48L3N2Zz5cIjtcbmNvbnN0IGVsbGlwc2VPdXRsaW5lID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48Y2lyY2xlIGN4PScyNTYnIGN5PScyNTYnIHI9JzE5Micgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0naW9uaWNvbi1maWxsLW5vbmUgaW9uaWNvbi1zdHJva2Utd2lkdGgnLz48L3N2Zz5cIjtcbmNvbnN0IGVsbGlwc2lzSG9yaXpvbnRhbCA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PGNpcmNsZSBjeD0nMjU2JyBjeT0nMjU2JyByPSc0OCcvPjxjaXJjbGUgY3g9JzQxNicgY3k9JzI1Nicgcj0nNDgnLz48Y2lyY2xlIGN4PSc5NicgY3k9JzI1Nicgcj0nNDgnLz48L3N2Zz5cIjtcbmNvbnN0IG1lbnVPdXRsaW5lID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48cGF0aCBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgZD0nTTgwIDE2MGgzNTJNODAgMjU2aDM1Mk04MCAzNTJoMzUyJyBjbGFzcz0naW9uaWNvbi1maWxsLW5vbmUgaW9uaWNvbi1zdHJva2Utd2lkdGgnLz48L3N2Zz5cIjtcbmNvbnN0IG1lbnVTaGFycCA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHBhdGggZD0nTTY0IDM4NGgzODR2LTQyLjY3SDY0em0wLTEwNi42N2gzODR2LTQyLjY2SDY0ek02NCAxMjh2NDIuNjdoMzg0VjEyOHonLz48L3N2Zz5cIjtcbmNvbnN0IHJlbW92ZU91dGxpbmUgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjxwYXRoIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgZD0nTTQwMCAyNTZIMTEyJyBjbGFzcz0naW9uaWNvbi1maWxsLW5vbmUgaW9uaWNvbi1zdHJva2Utd2lkdGgnLz48L3N2Zz5cIjtcbmNvbnN0IHJlb3JkZXJUaHJlZU91dGxpbmUgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjxwYXRoIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgZD0nTTk2IDI1NmgzMjBNOTYgMTc2aDMyME05NiAzMzZoMzIwJyBjbGFzcz0naW9uaWNvbi1maWxsLW5vbmUgaW9uaWNvbi1zdHJva2Utd2lkdGgnLz48L3N2Zz5cIjtcbmNvbnN0IHJlb3JkZXJUd29TaGFycCA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHBhdGggc3Ryb2tlLWxpbmVjYXA9J3NxdWFyZScgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLXdpZHRoPSc0NCcgZD0nTTExOCAzMDRoMjc2TTExOCAyMDhoMjc2JyBjbGFzcz0naW9uaWNvbi1maWxsLW5vbmUnLz48L3N2Zz5cIjtcbmNvbnN0IHNlYXJjaE91dGxpbmUgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjxwYXRoIGQ9J00yMjEuMDkgNjRhMTU3LjA5IDE1Ny4wOSAwIDEwMTU3LjA5IDE1Ny4wOUExNTcuMSAxNTcuMSAwIDAwMjIxLjA5IDY0eicgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBjbGFzcz0naW9uaWNvbi1maWxsLW5vbmUgaW9uaWNvbi1zdHJva2Utd2lkdGgnLz48cGF0aCBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgZD0nTTMzOC4yOSAzMzguMjlMNDQ4IDQ0OCcgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lIGlvbmljb24tc3Ryb2tlLXdpZHRoJy8+PC9zdmc+XCI7XG5jb25zdCBzZWFyY2hTaGFycCA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHBhdGggZD0nTTQ2NCA0MjhMMzM5LjkyIDMwMy45YTE2MC40OCAxNjAuNDggMCAwMDMwLjcyLTk0LjU4QzM3MC42NCAxMjAuMzcgMjk4LjI3IDQ4IDIwOS4zMiA0OFM0OCAxMjAuMzcgNDggMjA5LjMyczcyLjM3IDE2MS4zMiAxNjEuMzIgMTYxLjMyYTE2MC40OCAxNjAuNDggMCAwMDk0LjU4LTMwLjcyTDQyOCA0NjR6TTIwOS4zMiAzMTkuNjlhMTEwLjM4IDExMC4zOCAwIDExMTEwLjM3LTExMC4zNyAxMTAuNSAxMTAuNSAwIDAxLTExMC4zNyAxMTAuMzd6Jy8+PC9zdmc+XCI7XG5cbmV4cG9ydCB7IGFycm93QmFja1NoYXJwIGFzIGEsIGNsb3NlQ2lyY2xlIGFzIGIsIGNoZXZyb25CYWNrIGFzIGMsIGNsb3NlU2hhcnAgYXMgZCwgc2VhcmNoU2hhcnAgYXMgZSwgY2hlY2ttYXJrT3V0bGluZSBhcyBmLCBlbGxpcHNlT3V0bGluZSBhcyBnLCBjYXJldEJhY2tTaGFycCBhcyBoLCBhcnJvd0Rvd24gYXMgaSwgcmVvcmRlclRocmVlT3V0bGluZSBhcyBqLCByZW9yZGVyVHdvU2hhcnAgYXMgaywgY2hldnJvbkRvd24gYXMgbCwgY2hldnJvbkZvcndhcmRPdXRsaW5lIGFzIG0sIGVsbGlwc2lzSG9yaXpvbnRhbCBhcyBuLCBjaGV2cm9uRm9yd2FyZCBhcyBvLCBjYXJldFVwU2hhcnAgYXMgcCwgY2FyZXREb3duU2hhcnAgYXMgcSwgcmVtb3ZlT3V0bGluZSBhcyByLCBzZWFyY2hPdXRsaW5lIGFzIHMsIGNsb3NlIGFzIHQsIG1lbnVPdXRsaW5lIGFzIHUsIG1lbnVTaGFycCBhcyB2LCBjaGV2cm9uRXhwYW5kIGFzIHcgfTtcbiIsIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyBjIGFzIGNvbXBvbmVudE9uUmVhZHkgfSBmcm9tICcuL2hlbHBlcnMtNWViNjM2NGQuanMnO1xuaW1wb3J0IHsgYiBhcyBwcmludFJlcXVpcmVkRWxlbWVudEVycm9yIH0gZnJvbSAnLi9pbmRleC1lODZmMDExNy5qcyc7XG5cbmNvbnN0IElPTl9DT05URU5UX1RBR19OQU1FID0gJ0lPTi1DT05URU5UJztcbmNvbnN0IElPTl9DT05URU5UX0VMRU1FTlRfU0VMRUNUT1IgPSAnaW9uLWNvbnRlbnQnO1xuY29uc3QgSU9OX0NPTlRFTlRfQ0xBU1NfU0VMRUNUT1IgPSAnLmlvbi1jb250ZW50LXNjcm9sbC1ob3N0Jztcbi8qKlxuICogU2VsZWN0b3IgdXNlZCBmb3IgaW1wbGVtZW50YXRpb25zIHJlbGlhbnQgb24gYDxpb24tY29udGVudD5gIGZvciBzY3JvbGwgZXZlbnQgY2hhbmdlcy5cbiAqXG4gKiBEZXZlbG9wZXJzIHNob3VsZCB1c2UgdGhlIGAuaW9uLWNvbnRlbnQtc2Nyb2xsLWhvc3RgIHNlbGVjdG9yIHRvIHRhcmdldCB0aGUgZWxlbWVudCBlbWl0dGluZ1xuICogc2Nyb2xsIGV2ZW50cy4gV2l0aCB2aXJ0dWFsIHNjcm9sbCBpbXBsZW1lbnRhdGlvbnMgdGhpcyB3aWxsIGJlIHRoZSBob3N0IGVsZW1lbnQgZm9yXG4gKiB0aGUgc2Nyb2xsIHZpZXdwb3J0LlxuICovXG5jb25zdCBJT05fQ09OVEVOVF9TRUxFQ1RPUiA9IGAke0lPTl9DT05URU5UX0VMRU1FTlRfU0VMRUNUT1J9LCAke0lPTl9DT05URU5UX0NMQVNTX1NFTEVDVE9SfWA7XG5jb25zdCBpc0lvbkNvbnRlbnQgPSAoZWwpID0+IGVsLnRhZ05hbWUgPT09IElPTl9DT05URU5UX1RBR19OQU1FO1xuLyoqXG4gKiBXYWl0cyBmb3IgdGhlIGVsZW1lbnQgaG9zdCBmdWxseSBpbml0aWFsaXplIGJlZm9yZVxuICogcmV0dXJuaW5nIHRoZSBpbm5lciBzY3JvbGwgZWxlbWVudC5cbiAqXG4gKiBGb3IgYGlvbi1jb250ZW50YCB0aGUgc2Nyb2xsIHRhcmdldCB3aWxsIGJlIHRoZSByZXN1bHRcbiAqIG9mIHRoZSBgZ2V0U2Nyb2xsRWxlbWVudGAgZnVuY3Rpb24uXG4gKlxuICogRm9yIGN1c3RvbSBpbXBsZW1lbnRhdGlvbnMgaXQgd2lsbCBiZSB0aGUgZWxlbWVudCBob3N0XG4gKiBvciBhIHNlbGVjdG9yIHdpdGhpbiB0aGUgaG9zdCwgaWYgc3VwcGxpZWQgdGhyb3VnaCBgc2Nyb2xsVGFyZ2V0YC5cbiAqL1xuY29uc3QgZ2V0U2Nyb2xsRWxlbWVudCA9IGFzeW5jIChlbCkgPT4ge1xuICBpZiAoaXNJb25Db250ZW50KGVsKSkge1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBjb21wb25lbnRPblJlYWR5KGVsLCByZXNvbHZlKSk7XG4gICAgcmV0dXJuIGVsLmdldFNjcm9sbEVsZW1lbnQoKTtcbiAgfVxuICByZXR1cm4gZWw7XG59O1xuLyoqXG4gKiBRdWVyaWVzIHRoZSBlbGVtZW50IG1hdGNoaW5nIHRoZSBzZWxlY3RvciBmb3IgSW9uQ29udGVudC5cbiAqIFNlZSBJT05fQ09OVEVOVF9TRUxFQ1RPUiBmb3IgdGhlIHNlbGVjdG9yIHVzZWQuXG4gKi9cbmNvbnN0IGZpbmRJb25Db250ZW50ID0gKGVsKSA9PiB7XG4gIC8qKlxuICAgKiBGaXJzdCB3ZSB0cnkgdG8gcXVlcnkgdGhlIGN1c3RvbSBzY3JvbGwgaG9zdCBzZWxlY3RvciBpbiBjYXNlcyB3aGVyZVxuICAgKiB0aGUgaW1wbGVtZW50YXRpb24gaXMgdXNpbmcgYW4gb3V0ZXIgYGlvbi1jb250ZW50YCB3aXRoIGFuIGlubmVyIGN1c3RvbVxuICAgKiBzY3JvbGwgY29udGFpbmVyLlxuICAgKi9cbiAgY29uc3QgY3VzdG9tQ29udGVudEhvc3QgPSBlbC5xdWVyeVNlbGVjdG9yKElPTl9DT05URU5UX0NMQVNTX1NFTEVDVE9SKTtcbiAgaWYgKGN1c3RvbUNvbnRlbnRIb3N0KSB7XG4gICAgcmV0dXJuIGN1c3RvbUNvbnRlbnRIb3N0O1xuICB9XG4gIHJldHVybiBlbC5xdWVyeVNlbGVjdG9yKElPTl9DT05URU5UX1NFTEVDVE9SKTtcbn07XG4vKipcbiAqIFF1ZXJpZXMgdGhlIGNsb3Nlc3QgZWxlbWVudCBtYXRjaGluZyB0aGUgc2VsZWN0b3IgZm9yIElvbkNvbnRlbnQuXG4gKi9cbmNvbnN0IGZpbmRDbG9zZXN0SW9uQ29udGVudCA9IChlbCkgPT4ge1xuICByZXR1cm4gZWwuY2xvc2VzdChJT05fQ09OVEVOVF9TRUxFQ1RPUik7XG59O1xuLyoqXG4gKiBTY3JvbGxzIHRvIHRoZSB0b3Agb2YgdGhlIGVsZW1lbnQuIElmIGFuIGBpb24tY29udGVudGAgaXMgZm91bmQsIGl0IHdpbGwgc2Nyb2xsXG4gKiB1c2luZyB0aGUgcHVibGljIEFQSSBgc2Nyb2xsVG9Ub3BgIHdpdGggYSBkdXJhdGlvbi5cbiAqL1xuLy8gVE9ETyhGVy0yODMyKTogdHlwZVxuY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoZWwsIGR1cmF0aW9uTXMpID0+IHtcbiAgaWYgKGlzSW9uQ29udGVudChlbCkpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZWw7XG4gICAgcmV0dXJuIGNvbnRlbnQuc2Nyb2xsVG9Ub3AoZHVyYXRpb25Ncyk7XG4gIH1cbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbC5zY3JvbGxUbyh7XG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgYmVoYXZpb3I6IGR1cmF0aW9uTXMgPiAwID8gJ3Ntb290aCcgOiAnYXV0bycsXG4gIH0pKTtcbn07XG4vKipcbiAqIFNjcm9sbHMgYnkgYSBzcGVjaWZpZWQgWC9ZIGRpc3RhbmNlIGluIHRoZSBjb21wb25lbnQuIElmIGFuIGBpb24tY29udGVudGAgaXMgZm91bmQsIGl0IHdpbGwgc2Nyb2xsXG4gKiB1c2luZyB0aGUgcHVibGljIEFQSSBgc2Nyb2xsQnlQb2ludGAgd2l0aCBhIGR1cmF0aW9uLlxuICovXG5jb25zdCBzY3JvbGxCeVBvaW50ID0gKGVsLCB4LCB5LCBkdXJhdGlvbk1zKSA9PiB7XG4gIGlmIChpc0lvbkNvbnRlbnQoZWwpKSB7XG4gICAgY29uc3QgY29udGVudCA9IGVsO1xuICAgIHJldHVybiBjb250ZW50LnNjcm9sbEJ5UG9pbnQoeCwgeSwgZHVyYXRpb25Ncyk7XG4gIH1cbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbC5zY3JvbGxCeSh7XG4gICAgdG9wOiB5LFxuICAgIGxlZnQ6IHgsXG4gICAgYmVoYXZpb3I6IGR1cmF0aW9uTXMgPiAwID8gJ3Ntb290aCcgOiAnYXV0bycsXG4gIH0pKTtcbn07XG4vKipcbiAqIFByaW50cyBhbiBlcnJvciBpbmZvcm1pbmcgZGV2ZWxvcGVycyB0aGF0IGFuIGltcGxlbWVudGF0aW9uIHJlcXVpcmVzIGFuIGVsZW1lbnQgdG8gYmUgdXNlZFxuICogd2l0aGluIGVpdGhlciB0aGUgYGlvbi1jb250ZW50YCBzZWxlY3RvciBvciB0aGUgYC5pb24tY29udGVudC1zY3JvbGwtaG9zdGAgY2xhc3MuXG4gKi9cbmNvbnN0IHByaW50SW9uQ29udGVudEVycm9yTXNnID0gKGVsKSA9PiB7XG4gIHJldHVybiBwcmludFJlcXVpcmVkRWxlbWVudEVycm9yKGVsLCBJT05fQ09OVEVOVF9FTEVNRU5UX1NFTEVDVE9SKTtcbn07XG4vKipcbiAqIFNldmVyYWwgY29tcG9uZW50cyBpbiBJb25pYyBuZWVkIHRvIHByZXZlbnQgc2Nyb2xsaW5nXG4gKiBkdXJpbmcgYSBnZXN0dXJlIChjYXJkIG1vZGFsLCByYW5nZSwgaXRlbSBzbGlkaW5nLCBldGMpLlxuICogVXNlIHRoaXMgdXRpbGl0eSB0byBhY2NvdW50IGZvciBpb24tY29udGVudCBhbmQgY3VzdG9tIGNvbnRlbnQgaG9zdHMuXG4gKi9cbmNvbnN0IGRpc2FibGVDb250ZW50U2Nyb2xsWSA9IChjb250ZW50RWwpID0+IHtcbiAgaWYgKGlzSW9uQ29udGVudChjb250ZW50RWwpKSB7XG4gICAgY29uc3QgaW9uQ29udGVudCA9IGNvbnRlbnRFbDtcbiAgICBjb25zdCBpbml0aWFsU2Nyb2xsWSA9IGlvbkNvbnRlbnQuc2Nyb2xsWTtcbiAgICBpb25Db250ZW50LnNjcm9sbFkgPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBUaGlzIHNob3VsZCBiZSBwYXNzZWQgaW50byByZXNldENvbnRlbnRTY3JvbGxZXG4gICAgICogc28gdGhhdCB3ZSBjYW4gcmV2ZXJ0IGlvbi1jb250ZW50J3Mgc2Nyb2xsWSB0byB0aGVcbiAgICAgKiBjb3JyZWN0IHN0YXRlLiBGb3IgZXhhbXBsZSwgaWYgc2Nyb2xsWSA9IGZhbHNlXG4gICAgICogaW5pdGlhbGx5LCB3ZSBkbyBub3Qgd2FudCB0byBlbmFibGUgc2Nyb2xsaW5nXG4gICAgICogd2hlbiB3ZSBjYWxsIHJlc2V0Q29udGVudFNjcm9sbFkuXG4gICAgICovXG4gICAgcmV0dXJuIGluaXRpYWxTY3JvbGxZO1xuICB9XG4gIGVsc2Uge1xuICAgIGNvbnRlbnRFbC5zdHlsZS5zZXRQcm9wZXJ0eSgnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5jb25zdCByZXNldENvbnRlbnRTY3JvbGxZID0gKGNvbnRlbnRFbCwgaW5pdGlhbFNjcm9sbFkpID0+IHtcbiAgaWYgKGlzSW9uQ29udGVudChjb250ZW50RWwpKSB7XG4gICAgY29udGVudEVsLnNjcm9sbFkgPSBpbml0aWFsU2Nyb2xsWTtcbiAgfVxuICBlbHNlIHtcbiAgICBjb250ZW50RWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93Jyk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IElPTl9DT05URU5UX0VMRU1FTlRfU0VMRUNUT1IgYXMgSSwgZmluZElvbkNvbnRlbnQgYXMgYSwgSU9OX0NPTlRFTlRfQ0xBU1NfU0VMRUNUT1IgYXMgYiwgc2Nyb2xsQnlQb2ludCBhcyBjLCBkaXNhYmxlQ29udGVudFNjcm9sbFkgYXMgZCwgZmluZENsb3Nlc3RJb25Db250ZW50IGFzIGYsIGdldFNjcm9sbEVsZW1lbnQgYXMgZywgaXNJb25Db250ZW50IGFzIGksIHByaW50SW9uQ29udGVudEVycm9yTXNnIGFzIHAsIHJlc2V0Q29udGVudFNjcm9sbFkgYXMgciwgc2Nyb2xsVG9Ub3AgYXMgcyB9O1xuIiwiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IGEgYXMgcHJpbnRJb25FcnJvciB9IGZyb20gJy4vaW5kZXgtZTg2ZjAxMTcuanMnO1xuXG5jb25zdCBnZXRDb3VudGVyVGV4dCA9ICh2YWx1ZSwgbWF4TGVuZ3RoLCBjb3VudGVyRm9ybWF0dGVyKSA9PiB7XG4gIGNvbnN0IHZhbHVlTGVuZ3RoID0gdmFsdWUgPT0gbnVsbCA/IDAgOiB2YWx1ZS50b1N0cmluZygpLmxlbmd0aDtcbiAgY29uc3QgZGVmYXVsdENvdW50ZXJUZXh0ID0gZGVmYXVsdENvdW50ZXJGb3JtYXR0ZXIodmFsdWVMZW5ndGgsIG1heExlbmd0aCk7XG4gIC8qKlxuICAgKiBJZiBkZXZlbG9wZXJzIGRpZCBub3QgcGFzcyBhIGN1c3RvbSBmb3JtYXR0ZXIsXG4gICAqIHVzZSB0aGUgZGVmYXVsdCBvbmUuXG4gICAqL1xuICBpZiAoY291bnRlckZvcm1hdHRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRDb3VudGVyVGV4dDtcbiAgfVxuICAvKipcbiAgICogT3RoZXJ3aXNlLCB0cnkgdG8gdXNlIHRoZSBjdXN0b20gZm9ybWF0dGVyXG4gICAqIGFuZCBmYWxsYmFjayB0byB0aGUgZGVmYXVsdCBmb3JtYXR0ZXIgaWZcbiAgICogdGhlcmUgd2FzIGFuIGVycm9yLlxuICAgKi9cbiAgdHJ5IHtcbiAgICByZXR1cm4gY291bnRlckZvcm1hdHRlcih2YWx1ZUxlbmd0aCwgbWF4TGVuZ3RoKTtcbiAgfVxuICBjYXRjaCAoZSkge1xuICAgIHByaW50SW9uRXJyb3IoJ0V4Y2VwdGlvbiBpbiBwcm92aWRlZCBgY291bnRlckZvcm1hdHRlcmAuJywgZSk7XG4gICAgcmV0dXJuIGRlZmF1bHRDb3VudGVyVGV4dDtcbiAgfVxufTtcbmNvbnN0IGRlZmF1bHRDb3VudGVyRm9ybWF0dGVyID0gKGxlbmd0aCwgbWF4bGVuZ3RoKSA9PiB7XG4gIHJldHVybiBgJHtsZW5ndGh9IC8gJHttYXhsZW5ndGh9YDtcbn07XG5cbmV4cG9ydCB7IGdldENvdW50ZXJUZXh0IGFzIGcgfTtcbiIsIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5jb25zdCBLRVlCT0FSRF9ESURfT1BFTiA9ICdpb25LZXlib2FyZERpZFNob3cnO1xuY29uc3QgS0VZQk9BUkRfRElEX0NMT1NFID0gJ2lvbktleWJvYXJkRGlkSGlkZSc7XG5jb25zdCBLRVlCT0FSRF9USFJFU0hPTEQgPSAxNTA7XG4vLyBUT0RPKEZXLTI4MzIpOiB0eXBlc1xubGV0IHByZXZpb3VzVmlzdWFsVmlld3BvcnQgPSB7fTtcbmxldCBjdXJyZW50VmlzdWFsVmlld3BvcnQgPSB7fTtcbmxldCBrZXlib2FyZE9wZW4gPSBmYWxzZTtcbi8qKlxuICogVGhpcyBpcyBvbmx5IHVzZWQgZm9yIHRlc3RzXG4gKi9cbmNvbnN0IHJlc2V0S2V5Ym9hcmRBc3Npc3QgPSAoKSA9PiB7XG4gIHByZXZpb3VzVmlzdWFsVmlld3BvcnQgPSB7fTtcbiAgY3VycmVudFZpc3VhbFZpZXdwb3J0ID0ge307XG4gIGtleWJvYXJkT3BlbiA9IGZhbHNlO1xufTtcbmNvbnN0IHN0YXJ0S2V5Ym9hcmRBc3Npc3QgPSAod2luKSA9PiB7XG4gIHN0YXJ0TmF0aXZlTGlzdGVuZXJzKHdpbik7XG4gIGlmICghd2luLnZpc3VhbFZpZXdwb3J0KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGN1cnJlbnRWaXN1YWxWaWV3cG9ydCA9IGNvcHlWaXN1YWxWaWV3cG9ydCh3aW4udmlzdWFsVmlld3BvcnQpO1xuICB3aW4udmlzdWFsVmlld3BvcnQub25yZXNpemUgPSAoKSA9PiB7XG4gICAgdHJhY2tWaWV3cG9ydENoYW5nZXMod2luKTtcbiAgICBpZiAoa2V5Ym9hcmREaWRPcGVuKCkgfHwga2V5Ym9hcmREaWRSZXNpemUod2luKSkge1xuICAgICAgc2V0S2V5Ym9hcmRPcGVuKHdpbik7XG4gICAgfVxuICAgIGVsc2UgaWYgKGtleWJvYXJkRGlkQ2xvc2Uod2luKSkge1xuICAgICAgc2V0S2V5Ym9hcmRDbG9zZSh3aW4pO1xuICAgIH1cbiAgfTtcbn07XG4vKipcbiAqIExpc3RlbiBmb3IgZXZlbnRzIGZpcmVkIGJ5IG5hdGl2ZSBrZXlib2FyZCBwbHVnaW5cbiAqIGluIENhcGFjaXRvci9Db3Jkb3ZhIHNvIGRldnMgb25seSBuZWVkIHRvIGxpc3RlblxuICogaW4gb25lIHBsYWNlLlxuICovXG5jb25zdCBzdGFydE5hdGl2ZUxpc3RlbmVycyA9ICh3aW4pID0+IHtcbiAgd2luLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWJvYXJkRGlkU2hvdycsIChldikgPT4gc2V0S2V5Ym9hcmRPcGVuKHdpbiwgZXYpKTtcbiAgd2luLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWJvYXJkRGlkSGlkZScsICgpID0+IHNldEtleWJvYXJkQ2xvc2Uod2luKSk7XG59O1xuY29uc3Qgc2V0S2V5Ym9hcmRPcGVuID0gKHdpbiwgZXYpID0+IHtcbiAgZmlyZUtleWJvYXJkT3BlbkV2ZW50KHdpbiwgZXYpO1xuICBrZXlib2FyZE9wZW4gPSB0cnVlO1xufTtcbmNvbnN0IHNldEtleWJvYXJkQ2xvc2UgPSAod2luKSA9PiB7XG4gIGZpcmVLZXlib2FyZENsb3NlRXZlbnQod2luKTtcbiAga2V5Ym9hcmRPcGVuID0gZmFsc2U7XG59O1xuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYGtleWJvYXJkT3BlbmAgZmxhZyBpcyBub3RcbiAqIHNldCwgdGhlIHByZXZpb3VzIHZpc3VhbCB2aWV3cG9ydCB3aWR0aCBlcXVhbCB0aGUgY3VycmVudFxuICogdmlzdWFsIHZpZXdwb3J0IHdpZHRoLCBhbmQgaWYgdGhlIHNjYWxlZCBkaWZmZXJlbmNlXG4gKiBvZiB0aGUgcHJldmlvdXMgdmlzdWFsIHZpZXdwb3J0IGhlaWdodCBtaW51cyB0aGUgY3VycmVudFxuICogdmlzdWFsIHZpZXdwb3J0IGhlaWdodCBpcyBncmVhdGVyIHRoYW4gS0VZQk9BUkRfVEhSRVNIT0xEXG4gKlxuICogV2UgbmVlZCB0byBiZSBhYmxlIHRvIGFjY29tbW9kYXRlIHVzZXJzIHdobyBoYXZlIHpvb21pbmdcbiAqIGVuYWJsZWQgaW4gdGhlaXIgYnJvd3NlciAob3IgaGF2ZSB6b29tZWQgaW4gbWFudWFsbHkpIHdoaWNoXG4gKiBpcyB3aHkgd2UgdGFrZSBpbnRvIGFjY291bnQgdGhlIGN1cnJlbnQgdmlzdWFsIHZpZXdwb3J0J3NcbiAqIHNjYWxlIHZhbHVlLlxuICovXG5jb25zdCBrZXlib2FyZERpZE9wZW4gPSAoKSA9PiB7XG4gIGNvbnN0IHNjYWxlZEhlaWdodERpZmZlcmVuY2UgPSAocHJldmlvdXNWaXN1YWxWaWV3cG9ydC5oZWlnaHQgLSBjdXJyZW50VmlzdWFsVmlld3BvcnQuaGVpZ2h0KSAqIGN1cnJlbnRWaXN1YWxWaWV3cG9ydC5zY2FsZTtcbiAgcmV0dXJuICgha2V5Ym9hcmRPcGVuICYmXG4gICAgcHJldmlvdXNWaXN1YWxWaWV3cG9ydC53aWR0aCA9PT0gY3VycmVudFZpc3VhbFZpZXdwb3J0LndpZHRoICYmXG4gICAgc2NhbGVkSGVpZ2h0RGlmZmVyZW5jZSA+IEtFWUJPQVJEX1RIUkVTSE9MRCk7XG59O1xuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUga2V5Ym9hcmQgaXMgb3BlbixcbiAqIGJ1dCB0aGUga2V5Ym9hcmQgZGlkIG5vdCBjbG9zZVxuICovXG5jb25zdCBrZXlib2FyZERpZFJlc2l6ZSA9ICh3aW4pID0+IHtcbiAgcmV0dXJuIGtleWJvYXJkT3BlbiAmJiAha2V5Ym9hcmREaWRDbG9zZSh3aW4pO1xufTtcbi8qKlxuICogRGV0ZXJtaW5lIGlmIHRoZSBrZXlib2FyZCB3YXMgY2xvc2VkXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYGtleWJvYXJkT3BlbmAgZmxhZyBpcyBzZXQgYW5kXG4gKiB0aGUgY3VycmVudCB2aXN1YWwgdmlld3BvcnQgaGVpZ2h0IGVxdWFscyB0aGVcbiAqIGxheW91dCB2aWV3cG9ydCBoZWlnaHQuXG4gKi9cbmNvbnN0IGtleWJvYXJkRGlkQ2xvc2UgPSAod2luKSA9PiB7XG4gIHJldHVybiBrZXlib2FyZE9wZW4gJiYgY3VycmVudFZpc3VhbFZpZXdwb3J0LmhlaWdodCA9PT0gd2luLmlubmVySGVpZ2h0O1xufTtcbi8qKlxuICogRGlzcGF0Y2ggYSBrZXlib2FyZCBvcGVuIGV2ZW50XG4gKi9cbmNvbnN0IGZpcmVLZXlib2FyZE9wZW5FdmVudCA9ICh3aW4sIG5hdGl2ZUV2KSA9PiB7XG4gIGNvbnN0IGtleWJvYXJkSGVpZ2h0ID0gbmF0aXZlRXYgPyBuYXRpdmVFdi5rZXlib2FyZEhlaWdodCA6IHdpbi5pbm5lckhlaWdodCAtIGN1cnJlbnRWaXN1YWxWaWV3cG9ydC5oZWlnaHQ7XG4gIGNvbnN0IGV2ID0gbmV3IEN1c3RvbUV2ZW50KEtFWUJPQVJEX0RJRF9PUEVOLCB7XG4gICAgZGV0YWlsOiB7IGtleWJvYXJkSGVpZ2h0IH0sXG4gIH0pO1xuICB3aW4uZGlzcGF0Y2hFdmVudChldik7XG59O1xuLyoqXG4gKiBEaXNwYXRjaCBhIGtleWJvYXJkIGNsb3NlIGV2ZW50XG4gKi9cbmNvbnN0IGZpcmVLZXlib2FyZENsb3NlRXZlbnQgPSAod2luKSA9PiB7XG4gIGNvbnN0IGV2ID0gbmV3IEN1c3RvbUV2ZW50KEtFWUJPQVJEX0RJRF9DTE9TRSk7XG4gIHdpbi5kaXNwYXRjaEV2ZW50KGV2KTtcbn07XG4vKipcbiAqIEdpdmVuIGEgd2luZG93IG9iamVjdCwgY3JlYXRlIGEgY29weSBvZlxuICogdGhlIGN1cnJlbnQgdmlzdWFsIGFuZCBsYXlvdXQgdmlld3BvcnQgc3RhdGVzXG4gKiB3aGlsZSBhbHNvIHByZXNlcnZpbmcgdGhlIHByZXZpb3VzIHZpc3VhbCBhbmRcbiAqIGxheW91dCB2aWV3cG9ydCBzdGF0ZXNcbiAqL1xuY29uc3QgdHJhY2tWaWV3cG9ydENoYW5nZXMgPSAod2luKSA9PiB7XG4gIHByZXZpb3VzVmlzdWFsVmlld3BvcnQgPSBPYmplY3QuYXNzaWduKHt9LCBjdXJyZW50VmlzdWFsVmlld3BvcnQpO1xuICBjdXJyZW50VmlzdWFsVmlld3BvcnQgPSBjb3B5VmlzdWFsVmlld3BvcnQod2luLnZpc3VhbFZpZXdwb3J0KTtcbn07XG4vKipcbiAqIENyZWF0ZXMgYSBkZWVwIGNvcHkgb2YgdGhlIHZpc3VhbCB2aWV3cG9ydFxuICogYXQgYSBnaXZlbiBzdGF0ZVxuICovXG5jb25zdCBjb3B5VmlzdWFsVmlld3BvcnQgPSAodmlzdWFsVmlld3BvcnQpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogTWF0aC5yb3VuZCh2aXN1YWxWaWV3cG9ydC53aWR0aCksXG4gICAgaGVpZ2h0OiBNYXRoLnJvdW5kKHZpc3VhbFZpZXdwb3J0LmhlaWdodCksXG4gICAgb2Zmc2V0VG9wOiB2aXN1YWxWaWV3cG9ydC5vZmZzZXRUb3AsXG4gICAgb2Zmc2V0TGVmdDogdmlzdWFsVmlld3BvcnQub2Zmc2V0TGVmdCxcbiAgICBwYWdlVG9wOiB2aXN1YWxWaWV3cG9ydC5wYWdlVG9wLFxuICAgIHBhZ2VMZWZ0OiB2aXN1YWxWaWV3cG9ydC5wYWdlTGVmdCxcbiAgICBzY2FsZTogdmlzdWFsVmlld3BvcnQuc2NhbGUsXG4gIH07XG59O1xuXG5leHBvcnQgeyBLRVlCT0FSRF9ESURfQ0xPU0UsIEtFWUJPQVJEX0RJRF9PUEVOLCBjb3B5VmlzdWFsVmlld3BvcnQsIGtleWJvYXJkRGlkQ2xvc2UsIGtleWJvYXJkRGlkT3Blbiwga2V5Ym9hcmREaWRSZXNpemUsIHJlc2V0S2V5Ym9hcmRBc3Npc3QsIHNldEtleWJvYXJkQ2xvc2UsIHNldEtleWJvYXJkT3Blbiwgc3RhcnRLZXlib2FyZEFzc2lzdCwgdHJhY2tWaWV3cG9ydENoYW5nZXMgfTtcbiIsIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyB3IGFzIHdpbiB9IGZyb20gJy4vaW5kZXgtMzNmZmVjMjUuanMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjb250cm9sbGVyIHRoYXQgdHJhY2tzIGFuZCByZWFjdHMgdG8gb3BlbmluZyBvciBjbG9zaW5nIHRoZSBrZXlib2FyZC5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSBrZXlib2FyZENoYW5nZUNhbGxiYWNrIEEgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBrZXlib2FyZCBvcGVucyBvciBjbG9zZXMuXG4gKi9cbmNvbnN0IGNyZWF0ZUtleWJvYXJkQ29udHJvbGxlciA9IChrZXlib2FyZENoYW5nZUNhbGxiYWNrKSA9PiB7XG4gIGxldCBrZXlib2FyZFdpbGxTaG93SGFuZGxlcjtcbiAgbGV0IGtleWJvYXJkV2lsbEhpZGVIYW5kbGVyO1xuICBsZXQga2V5Ym9hcmRWaXNpYmxlO1xuICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIGtleWJvYXJkV2lsbFNob3dIYW5kbGVyID0gKCkgPT4ge1xuICAgICAga2V5Ym9hcmRWaXNpYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChrZXlib2FyZENoYW5nZUNhbGxiYWNrKVxuICAgICAgICBrZXlib2FyZENoYW5nZUNhbGxiYWNrKHRydWUpO1xuICAgIH07XG4gICAga2V5Ym9hcmRXaWxsSGlkZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICBrZXlib2FyZFZpc2libGUgPSBmYWxzZTtcbiAgICAgIGlmIChrZXlib2FyZENoYW5nZUNhbGxiYWNrKVxuICAgICAgICBrZXlib2FyZENoYW5nZUNhbGxiYWNrKGZhbHNlKTtcbiAgICB9O1xuICAgIHdpbiA9PT0gbnVsbCB8fCB3aW4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHdpbi5hZGRFdmVudExpc3RlbmVyKCdrZXlib2FyZFdpbGxTaG93Jywga2V5Ym9hcmRXaWxsU2hvd0hhbmRsZXIpO1xuICAgIHdpbiA9PT0gbnVsbCB8fCB3aW4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHdpbi5hZGRFdmVudExpc3RlbmVyKCdrZXlib2FyZFdpbGxIaWRlJywga2V5Ym9hcmRXaWxsSGlkZUhhbmRsZXIpO1xuICB9O1xuICBjb25zdCBkZXN0cm95ID0gKCkgPT4ge1xuICAgIHdpbiA9PT0gbnVsbCB8fCB3aW4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHdpbi5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlib2FyZFdpbGxTaG93Jywga2V5Ym9hcmRXaWxsU2hvd0hhbmRsZXIpO1xuICAgIHdpbiA9PT0gbnVsbCB8fCB3aW4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHdpbi5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlib2FyZFdpbGxIaWRlJywga2V5Ym9hcmRXaWxsSGlkZUhhbmRsZXIpO1xuICAgIGtleWJvYXJkV2lsbFNob3dIYW5kbGVyID0ga2V5Ym9hcmRXaWxsSGlkZUhhbmRsZXIgPSB1bmRlZmluZWQ7XG4gIH07XG4gIGNvbnN0IGlzS2V5Ym9hcmRWaXNpYmxlID0gKCkgPT4ga2V5Ym9hcmRWaXNpYmxlO1xuICBpbml0KCk7XG4gIHJldHVybiB7IGluaXQsIGRlc3Ryb3ksIGlzS2V5Ym9hcmRWaXNpYmxlIH07XG59O1xuXG5leHBvcnQgeyBjcmVhdGVLZXlib2FyZENvbnRyb2xsZXIgYXMgYyB9O1xuIiwiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmNvbnN0IHNwaW5uZXJzID0ge1xuICBidWJibGVzOiB7XG4gICAgZHVyOiAxMDAwLFxuICAgIGNpcmNsZXM6IDksXG4gICAgZm46IChkdXIsIGluZGV4LCB0b3RhbCkgPT4ge1xuICAgICAgY29uc3QgYW5pbWF0aW9uRGVsYXkgPSBgJHsoZHVyICogaW5kZXgpIC8gdG90YWwgLSBkdXJ9bXNgO1xuICAgICAgY29uc3QgYW5nbGUgPSAoMiAqIE1hdGguUEkgKiBpbmRleCkgLyB0b3RhbDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHI6IDUsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgdG9wOiBgJHs5ICogTWF0aC5zaW4oYW5nbGUpfXB4YCxcbiAgICAgICAgICBsZWZ0OiBgJHs5ICogTWF0aC5jb3MoYW5nbGUpfXB4YCxcbiAgICAgICAgICAnYW5pbWF0aW9uLWRlbGF5JzogYW5pbWF0aW9uRGVsYXksXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0sXG4gIH0sXG4gIGNpcmNsZXM6IHtcbiAgICBkdXI6IDEwMDAsXG4gICAgY2lyY2xlczogOCxcbiAgICBmbjogKGR1ciwgaW5kZXgsIHRvdGFsKSA9PiB7XG4gICAgICBjb25zdCBzdGVwID0gaW5kZXggLyB0b3RhbDtcbiAgICAgIGNvbnN0IGFuaW1hdGlvbkRlbGF5ID0gYCR7ZHVyICogc3RlcCAtIGR1cn1tc2A7XG4gICAgICBjb25zdCBhbmdsZSA9IDIgKiBNYXRoLlBJICogc3RlcDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHI6IDUsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgdG9wOiBgJHs5ICogTWF0aC5zaW4oYW5nbGUpfXB4YCxcbiAgICAgICAgICBsZWZ0OiBgJHs5ICogTWF0aC5jb3MoYW5nbGUpfXB4YCxcbiAgICAgICAgICAnYW5pbWF0aW9uLWRlbGF5JzogYW5pbWF0aW9uRGVsYXksXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0sXG4gIH0sXG4gIGNpcmN1bGFyOiB7XG4gICAgZHVyOiAxNDAwLFxuICAgIGVsbUR1cmF0aW9uOiB0cnVlLFxuICAgIGNpcmNsZXM6IDEsXG4gICAgZm46ICgpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHI6IDIwLFxuICAgICAgICBjeDogNDgsXG4gICAgICAgIGN5OiA0OCxcbiAgICAgICAgZmlsbDogJ25vbmUnLFxuICAgICAgICB2aWV3Qm94OiAnMjQgMjQgNDggNDgnLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMCwwKScsXG4gICAgICAgIHN0eWxlOiB7fSxcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbiAgY3Jlc2NlbnQ6IHtcbiAgICBkdXI6IDc1MCxcbiAgICBjaXJjbGVzOiAxLFxuICAgIGZuOiAoKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByOiAyNixcbiAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgfTtcbiAgICB9LFxuICB9LFxuICBkb3RzOiB7XG4gICAgZHVyOiA3NTAsXG4gICAgY2lyY2xlczogMyxcbiAgICBmbjogKF8sIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBhbmltYXRpb25EZWxheSA9IC0oMTEwICogaW5kZXgpICsgJ21zJztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHI6IDYsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgbGVmdDogYCR7OSAtIDkgKiBpbmRleH1weGAsXG4gICAgICAgICAgJ2FuaW1hdGlvbi1kZWxheSc6IGFuaW1hdGlvbkRlbGF5LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9LFxuICB9LFxuICBsaW5lczoge1xuICAgIGR1cjogMTAwMCxcbiAgICBsaW5lczogOCxcbiAgICBmbjogKGR1ciwgaW5kZXgsIHRvdGFsKSA9PiB7XG4gICAgICBjb25zdCB0cmFuc2Zvcm0gPSBgcm90YXRlKCR7KDM2MCAvIHRvdGFsKSAqIGluZGV4ICsgKGluZGV4IDwgdG90YWwgLyAyID8gMTgwIDogLTE4MCl9ZGVnKWA7XG4gICAgICBjb25zdCBhbmltYXRpb25EZWxheSA9IGAkeyhkdXIgKiBpbmRleCkgLyB0b3RhbCAtIGR1cn1tc2A7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB5MTogMTQsXG4gICAgICAgIHkyOiAyNixcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgICAgICAnYW5pbWF0aW9uLWRlbGF5JzogYW5pbWF0aW9uRGVsYXksXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0sXG4gIH0sXG4gICdsaW5lcy1zbWFsbCc6IHtcbiAgICBkdXI6IDEwMDAsXG4gICAgbGluZXM6IDgsXG4gICAgZm46IChkdXIsIGluZGV4LCB0b3RhbCkgPT4ge1xuICAgICAgY29uc3QgdHJhbnNmb3JtID0gYHJvdGF0ZSgkeygzNjAgLyB0b3RhbCkgKiBpbmRleCArIChpbmRleCA8IHRvdGFsIC8gMiA/IDE4MCA6IC0xODApfWRlZylgO1xuICAgICAgY29uc3QgYW5pbWF0aW9uRGVsYXkgPSBgJHsoZHVyICogaW5kZXgpIC8gdG90YWwgLSBkdXJ9bXNgO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeTE6IDEyLFxuICAgICAgICB5MjogMjAsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgICAgICAgJ2FuaW1hdGlvbi1kZWxheSc6IGFuaW1hdGlvbkRlbGF5LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9LFxuICB9LFxuICAnbGluZXMtc2hhcnAnOiB7XG4gICAgZHVyOiAxMDAwLFxuICAgIGxpbmVzOiAxMixcbiAgICBmbjogKGR1ciwgaW5kZXgsIHRvdGFsKSA9PiB7XG4gICAgICBjb25zdCB0cmFuc2Zvcm0gPSBgcm90YXRlKCR7MzAgKiBpbmRleCArIChpbmRleCA8IDYgPyAxODAgOiAtMTgwKX1kZWcpYDtcbiAgICAgIGNvbnN0IGFuaW1hdGlvbkRlbGF5ID0gYCR7KGR1ciAqIGluZGV4KSAvIHRvdGFsIC0gZHVyfW1zYDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHkxOiAxNyxcbiAgICAgICAgeTI6IDI5LFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgICAgICAgICdhbmltYXRpb24tZGVsYXknOiBhbmltYXRpb25EZWxheSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbiAgJ2xpbmVzLXNoYXJwLXNtYWxsJzoge1xuICAgIGR1cjogMTAwMCxcbiAgICBsaW5lczogMTIsXG4gICAgZm46IChkdXIsIGluZGV4LCB0b3RhbCkgPT4ge1xuICAgICAgY29uc3QgdHJhbnNmb3JtID0gYHJvdGF0ZSgkezMwICogaW5kZXggKyAoaW5kZXggPCA2ID8gMTgwIDogLTE4MCl9ZGVnKWA7XG4gICAgICBjb25zdCBhbmltYXRpb25EZWxheSA9IGAkeyhkdXIgKiBpbmRleCkgLyB0b3RhbCAtIGR1cn1tc2A7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB5MTogMTIsXG4gICAgICAgIHkyOiAyMCxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgICAgICAnYW5pbWF0aW9uLWRlbGF5JzogYW5pbWF0aW9uRGVsYXksXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0sXG4gIH0sXG59O1xuY29uc3QgU1BJTk5FUlMgPSBzcGlubmVycztcblxuZXhwb3J0IHsgU1BJTk5FUlMgYXMgUyB9O1xuIiwiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IGwgYXMgY2xhbXAgfSBmcm9tICcuL2hlbHBlcnMtNWViNjM2NGQuanMnO1xuaW1wb3J0IHsgaSBhcyBpc1JUTCB9IGZyb20gJy4vZGlyLWU4Yjc2N2E4LmpzJztcbmltcG9ydCB7IGNyZWF0ZUdlc3R1cmUgfSBmcm9tICcuL2luZGV4LTQyMmI2ZTgzLmpzJztcbmltcG9ydCAnLi9nZXN0dXJlLWNvbnRyb2xsZXItMTcwNjBiN2MuanMnO1xuXG5jb25zdCBjcmVhdGVTd2lwZUJhY2tHZXN0dXJlID0gKGVsLCBjYW5TdGFydEhhbmRsZXIsIG9uU3RhcnRIYW5kbGVyLCBvbk1vdmVIYW5kbGVyLCBvbkVuZEhhbmRsZXIpID0+IHtcbiAgY29uc3Qgd2luID0gZWwub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcbiAgbGV0IHJ0bCA9IGlzUlRMKGVsKTtcbiAgLyoqXG4gICAqIERldGVybWluZSBpZiBhIGdlc3R1cmUgaXMgbmVhciB0aGUgZWRnZVxuICAgKiBvZiB0aGUgc2NyZWVuLiBJZiB0cnVlLCB0aGVuIHRoZSBzd2lwZVxuICAgKiB0byBnbyBiYWNrIGdlc3R1cmUgc2hvdWxkIHByb2NlZWQuXG4gICAqL1xuICBjb25zdCBpc0F0RWRnZSA9IChkZXRhaWwpID0+IHtcbiAgICBjb25zdCB0aHJlc2hvbGQgPSA1MDtcbiAgICBjb25zdCB7IHN0YXJ0WCB9ID0gZGV0YWlsO1xuICAgIGlmIChydGwpIHtcbiAgICAgIHJldHVybiBzdGFydFggPj0gd2luLmlubmVyV2lkdGggLSB0aHJlc2hvbGQ7XG4gICAgfVxuICAgIHJldHVybiBzdGFydFggPD0gdGhyZXNob2xkO1xuICB9O1xuICBjb25zdCBnZXREZWx0YVggPSAoZGV0YWlsKSA9PiB7XG4gICAgcmV0dXJuIHJ0bCA/IC1kZXRhaWwuZGVsdGFYIDogZGV0YWlsLmRlbHRhWDtcbiAgfTtcbiAgY29uc3QgZ2V0VmVsb2NpdHlYID0gKGRldGFpbCkgPT4ge1xuICAgIHJldHVybiBydGwgPyAtZGV0YWlsLnZlbG9jaXR5WCA6IGRldGFpbC52ZWxvY2l0eVg7XG4gIH07XG4gIGNvbnN0IGNhblN0YXJ0ID0gKGRldGFpbCkgPT4ge1xuICAgIC8qKlxuICAgICAqIFRoZSB1c2VyJ3MgbG9jYWxlIGNhbiBjaGFuZ2UgbWlkLXNlc3Npb24sXG4gICAgICogc28gd2UgbmVlZCB0byBjaGVjayB0ZXh0IGRpcmVjdGlvbiBhdFxuICAgICAqIHRoZSBiZWdpbm5pbmcgb2YgZXZlcnkgZ2VzdHVyZS5cbiAgICAgKi9cbiAgICBydGwgPSBpc1JUTChlbCk7XG4gICAgcmV0dXJuIGlzQXRFZGdlKGRldGFpbCkgJiYgY2FuU3RhcnRIYW5kbGVyKCk7XG4gIH07XG4gIGNvbnN0IG9uTW92ZSA9IChkZXRhaWwpID0+IHtcbiAgICAvLyBzZXQgdGhlIHRyYW5zaXRpb24gYW5pbWF0aW9uJ3MgcHJvZ3Jlc3NcbiAgICBjb25zdCBkZWx0YSA9IGdldERlbHRhWChkZXRhaWwpO1xuICAgIGNvbnN0IHN0ZXBWYWx1ZSA9IGRlbHRhIC8gd2luLmlubmVyV2lkdGg7XG4gICAgb25Nb3ZlSGFuZGxlcihzdGVwVmFsdWUpO1xuICB9O1xuICBjb25zdCBvbkVuZCA9IChkZXRhaWwpID0+IHtcbiAgICAvLyB0aGUgc3dpcGUgYmFjayBnZXN0dXJlIGhhcyBlbmRlZFxuICAgIGNvbnN0IGRlbHRhID0gZ2V0RGVsdGFYKGRldGFpbCk7XG4gICAgY29uc3Qgd2lkdGggPSB3aW4uaW5uZXJXaWR0aDtcbiAgICBjb25zdCBzdGVwVmFsdWUgPSBkZWx0YSAvIHdpZHRoO1xuICAgIGNvbnN0IHZlbG9jaXR5ID0gZ2V0VmVsb2NpdHlYKGRldGFpbCk7XG4gICAgY29uc3QgeiA9IHdpZHRoIC8gMi4wO1xuICAgIGNvbnN0IHNob3VsZENvbXBsZXRlID0gdmVsb2NpdHkgPj0gMCAmJiAodmVsb2NpdHkgPiAwLjIgfHwgZGVsdGEgPiB6KTtcbiAgICBjb25zdCBtaXNzaW5nID0gc2hvdWxkQ29tcGxldGUgPyAxIC0gc3RlcFZhbHVlIDogc3RlcFZhbHVlO1xuICAgIGNvbnN0IG1pc3NpbmdEaXN0YW5jZSA9IG1pc3NpbmcgKiB3aWR0aDtcbiAgICBsZXQgcmVhbER1ciA9IDA7XG4gICAgaWYgKG1pc3NpbmdEaXN0YW5jZSA+IDUpIHtcbiAgICAgIGNvbnN0IGR1ciA9IG1pc3NpbmdEaXN0YW5jZSAvIE1hdGguYWJzKHZlbG9jaXR5KTtcbiAgICAgIHJlYWxEdXIgPSBNYXRoLm1pbihkdXIsIDU0MCk7XG4gICAgfVxuICAgIG9uRW5kSGFuZGxlcihzaG91bGRDb21wbGV0ZSwgc3RlcFZhbHVlIDw9IDAgPyAwLjAxIDogY2xhbXAoMCwgc3RlcFZhbHVlLCAwLjk5OTkpLCByZWFsRHVyKTtcbiAgfTtcbiAgcmV0dXJuIGNyZWF0ZUdlc3R1cmUoe1xuICAgIGVsLFxuICAgIGdlc3R1cmVOYW1lOiAnZ29iYWNrLXN3aXBlJyxcbiAgICBnZXN0dXJlUHJpb3JpdHk6IDQwLFxuICAgIHRocmVzaG9sZDogMTAsXG4gICAgY2FuU3RhcnQsXG4gICAgb25TdGFydDogb25TdGFydEhhbmRsZXIsXG4gICAgb25Nb3ZlLFxuICAgIG9uRW5kLFxuICB9KTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZVN3aXBlQmFja0dlc3R1cmUgfTtcbiJdLCJuYW1lcyI6WyJ3Iiwid3JpdGVUYXNrIiwiaCIsImhhcHRpY1NlbGVjdGlvbkVuZCIsImEiLCJoYXB0aWNTZWxlY3Rpb25TdGFydCIsImIiLCJoYXB0aWNTZWxlY3Rpb25DaGFuZ2VkIiwiY3JlYXRlR2VzdHVyZSIsImNyZWF0ZUJ1dHRvbkFjdGl2ZUdlc3R1cmUiLCJlbCIsImlzQnV0dG9uIiwiY3VycmVudFRvdWNoZWRCdXR0b24iLCJpbml0aWFsVG91Y2hlZEJ1dHRvbiIsImFjdGl2YXRlQnV0dG9uQXRQb2ludCIsIngiLCJ5IiwiaGFwdGljRmVlZGJhY2tGbiIsImRvY3VtZW50IiwidGFyZ2V0IiwiZWxlbWVudEZyb21Qb2ludCIsImNsZWFyQWN0aXZlQnV0dG9uIiwic2V0QWN0aXZlQnV0dG9uIiwiYnV0dG9uIiwiYnV0dG9uVG9Nb2RpZnkiLCJjbGFzc0xpc3QiLCJhZGQiLCJkaXNwYXRjaENsaWNrIiwicmVtb3ZlIiwiY2xpY2siLCJ1bmRlZmluZWQiLCJnZXN0dXJlTmFtZSIsInRocmVzaG9sZCIsIm9uU3RhcnQiLCJldiIsImN1cnJlbnRYIiwiY3VycmVudFkiLCJvbk1vdmUiLCJvbkVuZCIsImMiLCJpc1JUTCIsImhvc3RFbCIsImRpciIsInRvTG93ZXJDYXNlIiwiaSIsIklPTl9GT0NVU0VEIiwiSU9OX0ZPQ1VTQUJMRSIsIkZPQ1VTX0tFWVMiLCJzdGFydEZvY3VzVmlzaWJsZSIsInJvb3RFbCIsImN1cnJlbnRGb2N1cyIsImtleWJvYXJkTW9kZSIsInJlZiIsInNoYWRvd1Jvb3QiLCJyb290IiwiYm9keSIsInNldEZvY3VzIiwiZWxlbWVudHMiLCJmb3JFYWNoIiwicG9pbnRlckRvd24iLCJvbktleWRvd24iLCJpbmNsdWRlcyIsImtleSIsIm9uRm9jdXNpbiIsImNvbXBvc2VkUGF0aCIsInRvRm9jdXMiLCJmaWx0ZXIiLCJjb250YWlucyIsIm9uRm9jdXNvdXQiLCJhY3RpdmVFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRlc3Ryb3kiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY3JlYXRlTGVnYWN5Rm9ybUNvbnRyb2xsZXIiLCJjb250cm9sRWwiLCJsZWdhY3lDb250cm9sIiwiaGFzTGVnYWN5Q29udHJvbCIsImhhc0xhYmVsUHJvcCIsImxhYmVsIiwiaGFzTGFiZWxTbG90IiwiaGFzQXJpYUxhYmVsQXR0cmlidXRlIiwiaGFzQXR0cmlidXRlIiwibGVnYWN5IiwiTkFNRURfTEFCRUxfU0xPVF9DT01QT05FTlRTIiwidGFnTmFtZSIsInF1ZXJ5U2VsZWN0b3IiLCJVTk5BTUVEX0xBQkVMX1NMT1RfQ09NUE9ORU5UUyIsInRleHRDb250ZW50IiwiSGFwdGljRW5naW5lIiwiZ2V0RW5naW5lIiwiX2EiLCJ3aW4iLCJ3aW5kb3ciLCJUYXB0aWNFbmdpbmUiLCJDYXBhY2l0b3IiLCJpc1BsdWdpbkF2YWlsYWJsZSIsIlBsdWdpbnMiLCJIYXB0aWNzIiwiYXZhaWxhYmxlIiwiZW5naW5lIiwiZ2V0UGxhdGZvcm0iLCJuYXZpZ2F0b3IiLCJ2aWJyYXRlIiwiaXNDb3Jkb3ZhIiwiaXNDYXBhY2l0b3IiLCJpbXBhY3QiLCJvcHRpb25zIiwic3R5bGUiLCJ0b1VwcGVyQ2FzZSIsIm5vdGlmaWNhdGlvbiIsInNlbGVjdGlvbiIsInNlbGVjdGlvblN0YXJ0IiwiZ2VzdHVyZVNlbGVjdGlvblN0YXJ0Iiwic2VsZWN0aW9uQ2hhbmdlZCIsImdlc3R1cmVTZWxlY3Rpb25DaGFuZ2VkIiwic2VsZWN0aW9uRW5kIiwiZ2VzdHVyZVNlbGVjdGlvbkVuZCIsImhhcHRpY0F2YWlsYWJsZSIsImhhcHRpY1NlbGVjdGlvbiIsImhhcHRpY0ltcGFjdCIsImQiLCJhcnJvd0JhY2tTaGFycCIsImFycm93RG93biIsImNhcmV0QmFja1NoYXJwIiwiY2FyZXREb3duU2hhcnAiLCJjYXJldFVwU2hhcnAiLCJjaGVja21hcmtPdXRsaW5lIiwiY2hldnJvbkJhY2siLCJjaGV2cm9uRG93biIsImNoZXZyb25FeHBhbmQiLCJjaGV2cm9uRm9yd2FyZCIsImNoZXZyb25Gb3J3YXJkT3V0bGluZSIsImNsb3NlIiwiY2xvc2VDaXJjbGUiLCJjbG9zZVNoYXJwIiwiZWxsaXBzZU91dGxpbmUiLCJlbGxpcHNpc0hvcml6b250YWwiLCJtZW51T3V0bGluZSIsIm1lbnVTaGFycCIsInJlbW92ZU91dGxpbmUiLCJyZW9yZGVyVGhyZWVPdXRsaW5lIiwicmVvcmRlclR3b1NoYXJwIiwic2VhcmNoT3V0bGluZSIsInNlYXJjaFNoYXJwIiwiZSIsImYiLCJnIiwiaiIsImsiLCJsIiwibSIsIm4iLCJvIiwicCIsInEiLCJyIiwicyIsInQiLCJ1IiwidiIsImNvbXBvbmVudE9uUmVhZHkiLCJwcmludFJlcXVpcmVkRWxlbWVudEVycm9yIiwiSU9OX0NPTlRFTlRfVEFHX05BTUUiLCJJT05fQ09OVEVOVF9FTEVNRU5UX1NFTEVDVE9SIiwiSU9OX0NPTlRFTlRfQ0xBU1NfU0VMRUNUT1IiLCJJT05fQ09OVEVOVF9TRUxFQ1RPUiIsImlzSW9uQ29udGVudCIsImdldFNjcm9sbEVsZW1lbnQiLCJfcmVmIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJQcm9taXNlIiwicmVzb2x2ZSIsIl94IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJmaW5kSW9uQ29udGVudCIsImN1c3RvbUNvbnRlbnRIb3N0IiwiZmluZENsb3Nlc3RJb25Db250ZW50IiwiY2xvc2VzdCIsInNjcm9sbFRvVG9wIiwiZHVyYXRpb25NcyIsImNvbnRlbnQiLCJzY3JvbGxUbyIsInRvcCIsImxlZnQiLCJiZWhhdmlvciIsInNjcm9sbEJ5UG9pbnQiLCJzY3JvbGxCeSIsInByaW50SW9uQ29udGVudEVycm9yTXNnIiwiZGlzYWJsZUNvbnRlbnRTY3JvbGxZIiwiY29udGVudEVsIiwiaW9uQ29udGVudCIsImluaXRpYWxTY3JvbGxZIiwic2Nyb2xsWSIsInNldFByb3BlcnR5IiwicmVzZXRDb250ZW50U2Nyb2xsWSIsInJlbW92ZVByb3BlcnR5IiwiSSIsInByaW50SW9uRXJyb3IiLCJnZXRDb3VudGVyVGV4dCIsInZhbHVlIiwibWF4TGVuZ3RoIiwiY291bnRlckZvcm1hdHRlciIsInZhbHVlTGVuZ3RoIiwidG9TdHJpbmciLCJsZW5ndGgiLCJkZWZhdWx0Q291bnRlclRleHQiLCJkZWZhdWx0Q291bnRlckZvcm1hdHRlciIsIm1heGxlbmd0aCIsIktFWUJPQVJEX0RJRF9PUEVOIiwiS0VZQk9BUkRfRElEX0NMT1NFIiwiS0VZQk9BUkRfVEhSRVNIT0xEIiwicHJldmlvdXNWaXN1YWxWaWV3cG9ydCIsImN1cnJlbnRWaXN1YWxWaWV3cG9ydCIsImtleWJvYXJkT3BlbiIsInJlc2V0S2V5Ym9hcmRBc3Npc3QiLCJzdGFydEtleWJvYXJkQXNzaXN0Iiwic3RhcnROYXRpdmVMaXN0ZW5lcnMiLCJ2aXN1YWxWaWV3cG9ydCIsImNvcHlWaXN1YWxWaWV3cG9ydCIsIm9ucmVzaXplIiwidHJhY2tWaWV3cG9ydENoYW5nZXMiLCJrZXlib2FyZERpZE9wZW4iLCJrZXlib2FyZERpZFJlc2l6ZSIsInNldEtleWJvYXJkT3BlbiIsImtleWJvYXJkRGlkQ2xvc2UiLCJzZXRLZXlib2FyZENsb3NlIiwiZmlyZUtleWJvYXJkT3BlbkV2ZW50IiwiZmlyZUtleWJvYXJkQ2xvc2VFdmVudCIsInNjYWxlZEhlaWdodERpZmZlcmVuY2UiLCJoZWlnaHQiLCJzY2FsZSIsIndpZHRoIiwiaW5uZXJIZWlnaHQiLCJuYXRpdmVFdiIsImtleWJvYXJkSGVpZ2h0IiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJkaXNwYXRjaEV2ZW50IiwiT2JqZWN0IiwiYXNzaWduIiwiTWF0aCIsInJvdW5kIiwib2Zmc2V0VG9wIiwib2Zmc2V0TGVmdCIsInBhZ2VUb3AiLCJwYWdlTGVmdCIsImNyZWF0ZUtleWJvYXJkQ29udHJvbGxlciIsImtleWJvYXJkQ2hhbmdlQ2FsbGJhY2siLCJrZXlib2FyZFdpbGxTaG93SGFuZGxlciIsImtleWJvYXJkV2lsbEhpZGVIYW5kbGVyIiwia2V5Ym9hcmRWaXNpYmxlIiwiaW5pdCIsImlzS2V5Ym9hcmRWaXNpYmxlIiwic3Bpbm5lcnMiLCJidWJibGVzIiwiZHVyIiwiY2lyY2xlcyIsImZuIiwiaW5kZXgiLCJ0b3RhbCIsImFuaW1hdGlvbkRlbGF5IiwiYW5nbGUiLCJQSSIsInNpbiIsImNvcyIsInN0ZXAiLCJjaXJjdWxhciIsImVsbUR1cmF0aW9uIiwiY3giLCJjeSIsImZpbGwiLCJ2aWV3Qm94IiwidHJhbnNmb3JtIiwiY3Jlc2NlbnQiLCJkb3RzIiwiXyIsImxpbmVzIiwieTEiLCJ5MiIsIlNQSU5ORVJTIiwiUyIsImNsYW1wIiwiY3JlYXRlU3dpcGVCYWNrR2VzdHVyZSIsImNhblN0YXJ0SGFuZGxlciIsIm9uU3RhcnRIYW5kbGVyIiwib25Nb3ZlSGFuZGxlciIsIm9uRW5kSGFuZGxlciIsIm93bmVyRG9jdW1lbnQiLCJkZWZhdWx0VmlldyIsInJ0bCIsImlzQXRFZGdlIiwic3RhcnRYIiwiaW5uZXJXaWR0aCIsImdldERlbHRhWCIsImRlbHRhWCIsImdldFZlbG9jaXR5WCIsInZlbG9jaXR5WCIsImNhblN0YXJ0IiwiZGVsdGEiLCJzdGVwVmFsdWUiLCJ2ZWxvY2l0eSIsInoiLCJzaG91bGRDb21wbGV0ZSIsIm1pc3NpbmciLCJtaXNzaW5nRGlzdGFuY2UiLCJyZWFsRHVyIiwiYWJzIiwibWluIiwiZ2VzdHVyZVByaW9yaXR5Il0sInNvdXJjZVJvb3QiOiJ3ZWJwYWNrOi8vLyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswLDEsMiwzLDQsNSw2LDcsOCw5LDEwLDExXX0=