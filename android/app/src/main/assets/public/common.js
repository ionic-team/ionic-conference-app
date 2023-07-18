"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["common"],{

/***/ 37434:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-2fcba83d.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createButtonActiveGesture)
/* harmony export */ });
/* harmony import */ var _index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-36a5fd75.js */ 78705);
/* harmony import */ var _haptic_029a46f6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-029a46f6.js */ 28229);
/* harmony import */ var _index_422b6e83_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-422b6e83.js */ 10037);
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
    (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_36a5fd75_js__WEBPACK_IMPORTED_MODULE_0__.w)(() => buttonToModify.classList.remove('ion-activated'));
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

/***/ 65094:
/*!***********************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/dir-e8b767a8.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ isRTL)
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

/***/ 20753:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/focus-visible-10ad4867.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startFocusVisible: () => (/* binding */ startFocusVisible)
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
  ref.addEventListener('touchstart', pointerDown, {
    passive: true
  });
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

/***/ 28229:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-029a46f6.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ hapticSelectionStart),
/* harmony export */   b: () => (/* binding */ hapticSelectionChanged),
/* harmony export */   c: () => (/* binding */ hapticSelection),
/* harmony export */   d: () => (/* binding */ hapticImpact),
/* harmony export */   h: () => (/* binding */ hapticSelectionEnd)
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

/***/ 7654:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-393bc14a.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ arrowBackSharp),
/* harmony export */   b: () => (/* binding */ closeCircle),
/* harmony export */   c: () => (/* binding */ chevronBack),
/* harmony export */   d: () => (/* binding */ closeSharp),
/* harmony export */   e: () => (/* binding */ searchSharp),
/* harmony export */   f: () => (/* binding */ checkmarkOutline),
/* harmony export */   g: () => (/* binding */ ellipseOutline),
/* harmony export */   h: () => (/* binding */ caretBackSharp),
/* harmony export */   i: () => (/* binding */ arrowDown),
/* harmony export */   j: () => (/* binding */ reorderThreeOutline),
/* harmony export */   k: () => (/* binding */ reorderTwoSharp),
/* harmony export */   l: () => (/* binding */ chevronDown),
/* harmony export */   m: () => (/* binding */ chevronForwardOutline),
/* harmony export */   n: () => (/* binding */ ellipsisHorizontal),
/* harmony export */   o: () => (/* binding */ chevronForward),
/* harmony export */   p: () => (/* binding */ caretUpSharp),
/* harmony export */   q: () => (/* binding */ caretDownSharp),
/* harmony export */   r: () => (/* binding */ removeOutline),
/* harmony export */   s: () => (/* binding */ searchOutline),
/* harmony export */   t: () => (/* binding */ close),
/* harmony export */   u: () => (/* binding */ menuOutline),
/* harmony export */   v: () => (/* binding */ menuSharp),
/* harmony export */   w: () => (/* binding */ chevronExpand)
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

/***/ 68873:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-7373924f.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ ION_CONTENT_CLASS_SELECTOR),
/* harmony export */   a: () => (/* binding */ findIonContent),
/* harmony export */   b: () => (/* binding */ ION_CONTENT_ELEMENT_SELECTOR),
/* harmony export */   c: () => (/* binding */ scrollByPoint),
/* harmony export */   d: () => (/* binding */ disableContentScrollY),
/* harmony export */   f: () => (/* binding */ findClosestIonContent),
/* harmony export */   g: () => (/* binding */ getScrollElement),
/* harmony export */   i: () => (/* binding */ isIonContent),
/* harmony export */   p: () => (/* binding */ printIonContentErrorMsg),
/* harmony export */   r: () => (/* binding */ resetContentScrollY),
/* harmony export */   s: () => (/* binding */ scrollToTop)
/* harmony export */ });
/* harmony import */ var C_Users_Blessing_Kunaka_Desktop_mining_expo_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _helpers_f586db1c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-f586db1c.js */ 75272);
/* harmony import */ var _index_e86f0117_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-e86f0117.js */ 50123);

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
  var _ref = (0,C_Users_Blessing_Kunaka_Desktop_mining_expo_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (el) {
    if (isIonContent(el)) {
      yield new Promise(resolve => (0,_helpers_f586db1c_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
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

/***/ 66527:
/*!****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/keyboard-856bc929.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ Keyboard),
/* harmony export */   a: () => (/* binding */ KeyboardResize)
/* harmony export */ });
/* harmony import */ var _index_b32cad98_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-b32cad98.js */ 38815);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */

var KeyboardResize;
(function (KeyboardResize) {
  KeyboardResize["Body"] = "body";
  KeyboardResize["Ionic"] = "ionic";
  KeyboardResize["Native"] = "native";
  KeyboardResize["None"] = "none";
})(KeyboardResize || (KeyboardResize = {}));
const Keyboard = {
  getEngine() {
    var _a;
    return ((_a = _index_b32cad98_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_b32cad98_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_b32cad98_js__WEBPACK_IMPORTED_MODULE_0__.w.Capacitor) === null || _a === void 0 ? void 0 : _a.isPluginAvailable('Keyboard')) && (_index_b32cad98_js__WEBPACK_IMPORTED_MODULE_0__.w === null || _index_b32cad98_js__WEBPACK_IMPORTED_MODULE_0__.w === void 0 ? void 0 : _index_b32cad98_js__WEBPACK_IMPORTED_MODULE_0__.w.Capacitor.Plugins.Keyboard);
  },
  getResizeMode() {
    const engine = this.getEngine();
    if (!(engine === null || engine === void 0 ? void 0 : engine.getResizeMode)) {
      return Promise.resolve(undefined);
    }
    return engine.getResizeMode().catch(e => {
      if (e.code === 'UNIMPLEMENTED') {
        // If the native implementation is not available
        // we treat it the same as if the plugin is not available.
        return undefined;
      }
      throw e;
    });
  }
};


/***/ }),

/***/ 71168:
/*!****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/keyboard-9ad61616.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KEYBOARD_DID_CLOSE: () => (/* binding */ KEYBOARD_DID_CLOSE),
/* harmony export */   KEYBOARD_DID_OPEN: () => (/* binding */ KEYBOARD_DID_OPEN),
/* harmony export */   copyVisualViewport: () => (/* binding */ copyVisualViewport),
/* harmony export */   keyboardDidClose: () => (/* binding */ keyboardDidClose),
/* harmony export */   keyboardDidOpen: () => (/* binding */ keyboardDidOpen),
/* harmony export */   keyboardDidResize: () => (/* binding */ keyboardDidResize),
/* harmony export */   resetKeyboardAssist: () => (/* binding */ resetKeyboardAssist),
/* harmony export */   setKeyboardClose: () => (/* binding */ setKeyboardClose),
/* harmony export */   setKeyboardOpen: () => (/* binding */ setKeyboardOpen),
/* harmony export */   startKeyboardAssist: () => (/* binding */ startKeyboardAssist),
/* harmony export */   trackViewportChanges: () => (/* binding */ trackViewportChanges)
/* harmony export */ });
/* harmony import */ var _keyboard_856bc929_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboard-856bc929.js */ 66527);
/* harmony import */ var _index_b32cad98_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-b32cad98.js */ 38815);
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
  const nativeEngine = _keyboard_856bc929_js__WEBPACK_IMPORTED_MODULE_0__.K.getEngine();
  /**
   * If the native keyboard plugin is available
   * then we are running in a native environment. As a result
   * we should only listen on the native events instead of
   * using the Visual Viewport as the Ionic webview manipulates
   * how it resizes such that the Visual Viewport API is not
   * reliable here.
   */
  if (nativeEngine) {
    startNativeListeners(win);
  } else {
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
  }
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

/***/ 53667:
/*!***************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/keyboard-controller-2487310f.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createKeyboardController)
/* harmony export */ });
/* harmony import */ var C_Users_Blessing_Kunaka_Desktop_mining_expo_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _index_b32cad98_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-b32cad98.js */ 38815);
/* harmony import */ var _keyboard_856bc929_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keyboard-856bc929.js */ 66527);

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */



/**
 * The element that resizes when the keyboard opens
 * is going to depend on the resize mode
 * which is why we check that here.
 */
const getResizeContainer = resizeMode => {
  /**
   * If doc is undefined then we are
   * in an SSR environment, so the keyboard
   * adjustment does not apply.
   * If the webview does not resize then there
   * is no container to resize.
   */
  if (_index_b32cad98_js__WEBPACK_IMPORTED_MODULE_1__.d === undefined || resizeMode === _keyboard_856bc929_js__WEBPACK_IMPORTED_MODULE_2__.a.None || resizeMode === undefined) {
    return null;
  }
  /**
   * The three remaining resize modes: Native, Ionic, and Body
   * all cause `ion-app` to resize, so we can listen for changes
   * on that. In the event `ion-app` is not available then
   * we can fall back to `body`.
   */
  const ionApp = _index_b32cad98_js__WEBPACK_IMPORTED_MODULE_1__.d.querySelector('ion-app');
  return ionApp !== null && ionApp !== void 0 ? ionApp : _index_b32cad98_js__WEBPACK_IMPORTED_MODULE_1__.d.body;
};
/**
 * Get the height of ion-app or body.
 * This is used for determining if the webview
 * has resized before the keyboard closed.
 * */
const getResizeContainerHeight = resizeMode => {
  const containerElement = getResizeContainer(resizeMode);
  return containerElement === null ? 0 : containerElement.clientHeight;
};
/**
 * Creates a controller that tracks and reacts to opening or closing the keyboard.
 *
 * @internal
 * @param keyboardChangeCallback A function to call when the keyboard opens or closes.
 */
const createKeyboardController = /*#__PURE__*/function () {
  var _ref = (0,C_Users_Blessing_Kunaka_Desktop_mining_expo_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (keyboardChangeCallback) {
    let keyboardWillShowHandler;
    let keyboardWillHideHandler;
    let keyboardVisible;
    /**
     * This lets us determine if the webview content
     * has resized as a result of the keyboard.
     */
    let initialResizeContainerHeight;
    const init = /*#__PURE__*/function () {
      var _ref2 = (0,C_Users_Blessing_Kunaka_Desktop_mining_expo_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const resizeOptions = yield _keyboard_856bc929_js__WEBPACK_IMPORTED_MODULE_2__.K.getResizeMode();
        const resizeMode = resizeOptions === undefined ? undefined : resizeOptions.mode;
        keyboardWillShowHandler = () => {
          /**
           * We need to compute initialResizeContainerHeight right before
           * the keyboard opens to guarantee the resize container is visible.
           * The resize container may not be visible if we compute this
           * as soon as the keyboard controller is created.
           * We should only need to do this once to avoid additional clientHeight
           * computations.
           */
          if (initialResizeContainerHeight === undefined) {
            initialResizeContainerHeight = getResizeContainerHeight(resizeMode);
          }
          keyboardVisible = true;
          fireChangeCallback(keyboardVisible, resizeMode);
        };
        keyboardWillHideHandler = () => {
          keyboardVisible = false;
          fireChangeCallback(keyboardVisible, resizeMode);
        };
        _index_b32cad98_js__WEBPACK_IMPORTED_MODULE_1__.w === null || _index_b32cad98_js__WEBPACK_IMPORTED_MODULE_1__.w === void 0 ? void 0 : _index_b32cad98_js__WEBPACK_IMPORTED_MODULE_1__.w.addEventListener('keyboardWillShow', keyboardWillShowHandler);
        _index_b32cad98_js__WEBPACK_IMPORTED_MODULE_1__.w === null || _index_b32cad98_js__WEBPACK_IMPORTED_MODULE_1__.w === void 0 ? void 0 : _index_b32cad98_js__WEBPACK_IMPORTED_MODULE_1__.w.addEventListener('keyboardWillHide', keyboardWillHideHandler);
      });
      return function init() {
        return _ref2.apply(this, arguments);
      };
    }();
    const fireChangeCallback = (state, resizeMode) => {
      if (keyboardChangeCallback) {
        keyboardChangeCallback(state, createResizePromiseIfNeeded(resizeMode));
      }
    };
    /**
     * Code responding to keyboard lifecycles may need
     * to show/hide content once the webview has
     * resized as a result of the keyboard showing/hiding.
     * createResizePromiseIfNeeded provides a way for code to wait for the
     * resize event that was triggered as a result of the keyboard.
     */
    const createResizePromiseIfNeeded = resizeMode => {
      if (
      /**
       * If we are in an SSR environment then there is
       * no window to resize. Additionally, if there
       * is no resize mode or the resize mode is "None"
       * then initialResizeContainerHeight will be 0
       */
      initialResizeContainerHeight === 0 ||
      /**
       * If the keyboard is closed before the webview resizes initially
       * then the webview will never resize.
       */
      initialResizeContainerHeight === getResizeContainerHeight(resizeMode)) {
        return;
      }
      /**
       * Get the resize container so we can
       * attach the ResizeObserver below to
       * the correct element.
       */
      const containerElement = getResizeContainer(resizeMode);
      if (containerElement === null) {
        return;
      }
      /**
       * Some part of the web content should resize,
       * and we need to listen for a resize.
       */
      return new Promise(resolve => {
        const callback = () => {
          /**
           * As per the spec, the ResizeObserver
           * will fire when observation starts if
           * the observed element is rendered and does not
           * have a size of 0 x 0. However, the watched element
           * may or may not have resized by the time this first
           * callback is fired. As a result, we need to check
           * the dimensions of the element.
           *
           * https://www.w3.org/TR/resize-observer/#intro
           */
          if (containerElement.clientHeight === initialResizeContainerHeight) {
            /**
             * The resize happened, so stop listening
             * for resize on this element.
             */
            ro.disconnect();
            resolve();
          }
        };
        /**
         * In Capacitor there can be delay between when the window
         * resizes and when the container element resizes, so we cannot
         * rely on a 'resize' event listener on the window.
         * Instead, we need to determine when the container
         * element resizes using a ResizeObserver.
         */
        const ro = new ResizeObserver(callback);
        ro.observe(containerElement);
      });
    };
    const destroy = () => {
      _index_b32cad98_js__WEBPACK_IMPORTED_MODULE_1__.w === null || _index_b32cad98_js__WEBPACK_IMPORTED_MODULE_1__.w === void 0 ? void 0 : _index_b32cad98_js__WEBPACK_IMPORTED_MODULE_1__.w.removeEventListener('keyboardWillShow', keyboardWillShowHandler);
      _index_b32cad98_js__WEBPACK_IMPORTED_MODULE_1__.w === null || _index_b32cad98_js__WEBPACK_IMPORTED_MODULE_1__.w === void 0 ? void 0 : _index_b32cad98_js__WEBPACK_IMPORTED_MODULE_1__.w.removeEventListener('keyboardWillHide', keyboardWillHideHandler);
      keyboardWillShowHandler = keyboardWillHideHandler = undefined;
    };
    const isKeyboardVisible = () => keyboardVisible;
    yield init();
    return {
      init,
      destroy,
      isKeyboardVisible
    };
  });
  return function createKeyboardController(_x) {
    return _ref.apply(this, arguments);
  };
}();


/***/ }),

/***/ 22756:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-40ada8cd.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ SPINNERS)
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
          top: `${32 * Math.sin(angle)}%`,
          left: `${32 * Math.cos(angle)}%`,
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
          top: `${32 * Math.sin(angle)}%`,
          left: `${32 * Math.cos(angle)}%`,
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
          left: `${32 - 32 * index}%`,
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

/***/ 72338:
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/swipe-back-1bb66ed2.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSwipeBackGesture: () => (/* binding */ createSwipeBackGesture)
/* harmony export */ });
/* harmony import */ var _helpers_f586db1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-f586db1c.js */ 75272);
/* harmony import */ var _dir_e8b767a8_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dir-e8b767a8.js */ 65094);
/* harmony import */ var _index_422b6e83_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-422b6e83.js */ 10037);
/* harmony import */ var _gesture_controller_17060b7c_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gesture-controller-17060b7c.js */ 31247);
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
    onEndHandler(shouldComplete, stepValue <= 0 ? 0.01 : (0,_helpers_f586db1c_js__WEBPACK_IMPORTED_MODULE_0__.l)(0, stepValue, 0.9999), realDur);
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


/***/ }),

/***/ 90370:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/watch-options-4d421847.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ watchForOptions)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
// TODO(FW-2832): types
const watchForOptions = (containerEl, tagName, onChange) => {
  if (typeof MutationObserver === 'undefined') {
    return;
  }
  const mutation = new MutationObserver(mutationList => {
    onChange(getSelectedOption(mutationList, tagName));
  });
  mutation.observe(containerEl, {
    childList: true,
    subtree: true
  });
  return mutation;
};
const getSelectedOption = (mutationList, tagName) => {
  let newOption;
  mutationList.forEach(mut => {
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < mut.addedNodes.length; i++) {
      newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;
    }
  });
  return newOption;
};
const findCheckedOption = (el, tagName) => {
  if (el.nodeType !== 1) {
    return undefined;
  }
  const options = el.tagName === tagName.toUpperCase() ? [el] : Array.from(el.querySelectorAll(tagName));
  return options.find(o => o.value === el.value);
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUNwRixFQUFFLENBQUMsR0FBRytULEtBQUssQ0FBQ0MsSUFBSSxDQUFDaFUsRUFBRSxDQUFDaVUsZ0JBQWdCLENBQUNsTCxPQUFPLENBQUMsQ0FBQztFQUN0RyxPQUFPN0QsT0FBTyxDQUFDZ1AsSUFBSSxDQUFFbE0sQ0FBQyxJQUFLQSxDQUFDLENBQUNtTSxLQUFLLEtBQUtuVSxFQUFFLENBQUNtVSxLQUFLLENBQUM7QUFDbEQsQ0FBQyIsInNvdXJjZXMiOlsiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vYnV0dG9uLWFjdGl2ZS0yZmNiYTgzZC5qcyIsIi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2Rpci1lOGI3NjdhOC5qcyIsIi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2ZvY3VzLXZpc2libGUtMTBhZDQ4NjcuanMiLCIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9oYXB0aWMtMDI5YTQ2ZjYuanMiLCIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9pbmRleC0zOTNiYzE0YS5qcyIsIi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2luZGV4LTczNzM5MjRmLmpzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20va2V5Ym9hcmQtODU2YmM5MjkuanMiLCIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9rZXlib2FyZC05YWQ2MTYxNi5qcyIsIi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtL2tleWJvYXJkLWNvbnRyb2xsZXItMjQ4NzMxMGYuanMiLCIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9zcGlubmVyLWNvbmZpZ3MtNDBhZGE4Y2QuanMiLCIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS9zd2lwZS1iYWNrLTFiYjY2ZWQyLmpzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vd2F0Y2gtb3B0aW9ucy00ZDQyMTg0Ny5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgdyBhcyB3cml0ZVRhc2sgfSBmcm9tICcuL2luZGV4LTM2YTVmZDc1LmpzJztcbmltcG9ydCB7IGggYXMgaGFwdGljU2VsZWN0aW9uRW5kLCBhIGFzIGhhcHRpY1NlbGVjdGlvblN0YXJ0LCBiIGFzIGhhcHRpY1NlbGVjdGlvbkNoYW5nZWQgfSBmcm9tICcuL2hhcHRpYy0wMjlhNDZmNi5qcyc7XG5pbXBvcnQgeyBjcmVhdGVHZXN0dXJlIH0gZnJvbSAnLi9pbmRleC00MjJiNmU4My5qcyc7XG5cbmNvbnN0IGNyZWF0ZUJ1dHRvbkFjdGl2ZUdlc3R1cmUgPSAoZWwsIGlzQnV0dG9uKSA9PiB7XG4gIGxldCBjdXJyZW50VG91Y2hlZEJ1dHRvbjtcbiAgbGV0IGluaXRpYWxUb3VjaGVkQnV0dG9uO1xuICBjb25zdCBhY3RpdmF0ZUJ1dHRvbkF0UG9pbnQgPSAoeCwgeSwgaGFwdGljRmVlZGJhY2tGbikgPT4ge1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoeCwgeSk7XG4gICAgaWYgKCF0YXJnZXQgfHwgIWlzQnV0dG9uKHRhcmdldCkpIHtcbiAgICAgIGNsZWFyQWN0aXZlQnV0dG9uKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0YXJnZXQgIT09IGN1cnJlbnRUb3VjaGVkQnV0dG9uKSB7XG4gICAgICBjbGVhckFjdGl2ZUJ1dHRvbigpO1xuICAgICAgc2V0QWN0aXZlQnV0dG9uKHRhcmdldCwgaGFwdGljRmVlZGJhY2tGbik7XG4gICAgfVxuICB9O1xuICBjb25zdCBzZXRBY3RpdmVCdXR0b24gPSAoYnV0dG9uLCBoYXB0aWNGZWVkYmFja0ZuKSA9PiB7XG4gICAgY3VycmVudFRvdWNoZWRCdXR0b24gPSBidXR0b247XG4gICAgaWYgKCFpbml0aWFsVG91Y2hlZEJ1dHRvbikge1xuICAgICAgaW5pdGlhbFRvdWNoZWRCdXR0b24gPSBjdXJyZW50VG91Y2hlZEJ1dHRvbjtcbiAgICB9XG4gICAgY29uc3QgYnV0dG9uVG9Nb2RpZnkgPSBjdXJyZW50VG91Y2hlZEJ1dHRvbjtcbiAgICB3cml0ZVRhc2soKCkgPT4gYnV0dG9uVG9Nb2RpZnkuY2xhc3NMaXN0LmFkZCgnaW9uLWFjdGl2YXRlZCcpKTtcbiAgICBoYXB0aWNGZWVkYmFja0ZuKCk7XG4gIH07XG4gIGNvbnN0IGNsZWFyQWN0aXZlQnV0dG9uID0gKGRpc3BhdGNoQ2xpY2sgPSBmYWxzZSkgPT4ge1xuICAgIGlmICghY3VycmVudFRvdWNoZWRCdXR0b24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgYnV0dG9uVG9Nb2RpZnkgPSBjdXJyZW50VG91Y2hlZEJ1dHRvbjtcbiAgICB3cml0ZVRhc2soKCkgPT4gYnV0dG9uVG9Nb2RpZnkuY2xhc3NMaXN0LnJlbW92ZSgnaW9uLWFjdGl2YXRlZCcpKTtcbiAgICAvKipcbiAgICAgKiBDbGlja2luZyBvbiBvbmUgYnV0dG9uLCBidXQgcmVsZWFzaW5nIG9uIGFub3RoZXIgYnV0dG9uXG4gICAgICogZG9lcyBub3QgZGlzcGF0Y2ggYSBjbGljayBldmVudCBpbiBicm93c2Vycywgc28gd2VcbiAgICAgKiBuZWVkIHRvIGRvIGl0IG1hbnVhbGx5IGhlcmUuIFNvbWUgYnJvd3NlcnMgd2lsbFxuICAgICAqIGRpc3BhdGNoIGEgY2xpY2sgaWYgY2xpY2tpbmcgb24gb25lIGJ1dHRvbiwgZHJhZ2dpbmcgb3ZlclxuICAgICAqIGFub3RoZXIgYnV0dG9uLCBhbmQgcmVsZWFzaW5nIG9uIHRoZSBvcmlnaW5hbCBidXR0b24uIEluIHRoYXRcbiAgICAgKiBjYXNlLCB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB3ZSBkbyBub3QgY2F1c2UgYSBkb3VibGUgY2xpY2sgdGhlcmUuXG4gICAgICovXG4gICAgaWYgKGRpc3BhdGNoQ2xpY2sgJiYgaW5pdGlhbFRvdWNoZWRCdXR0b24gIT09IGN1cnJlbnRUb3VjaGVkQnV0dG9uKSB7XG4gICAgICBjdXJyZW50VG91Y2hlZEJ1dHRvbi5jbGljaygpO1xuICAgIH1cbiAgICBjdXJyZW50VG91Y2hlZEJ1dHRvbiA9IHVuZGVmaW5lZDtcbiAgfTtcbiAgcmV0dXJuIGNyZWF0ZUdlc3R1cmUoe1xuICAgIGVsLFxuICAgIGdlc3R1cmVOYW1lOiAnYnV0dG9uQWN0aXZlRHJhZycsXG4gICAgdGhyZXNob2xkOiAwLFxuICAgIG9uU3RhcnQ6IChldikgPT4gYWN0aXZhdGVCdXR0b25BdFBvaW50KGV2LmN1cnJlbnRYLCBldi5jdXJyZW50WSwgaGFwdGljU2VsZWN0aW9uU3RhcnQpLFxuICAgIG9uTW92ZTogKGV2KSA9PiBhY3RpdmF0ZUJ1dHRvbkF0UG9pbnQoZXYuY3VycmVudFgsIGV2LmN1cnJlbnRZLCBoYXB0aWNTZWxlY3Rpb25DaGFuZ2VkKSxcbiAgICBvbkVuZDogKCkgPT4ge1xuICAgICAgY2xlYXJBY3RpdmVCdXR0b24odHJ1ZSk7XG4gICAgICBoYXB0aWNTZWxlY3Rpb25FbmQoKTtcbiAgICAgIGluaXRpYWxUb3VjaGVkQnV0dG9uID0gdW5kZWZpbmVkO1xuICAgIH0sXG4gIH0pO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlQnV0dG9uQWN0aXZlR2VzdHVyZSBhcyBjIH07XG4iLCIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZG9jdW1lbnQgb3IgaG9zdCBlbGVtZW50XG4gKiBoYXMgYSBgZGlyYCBzZXQgdG8gYHJ0bGAuIFRoZSBob3N0IHZhbHVlIHdpbGwgYWx3YXlzXG4gKiB0YWtlIHByaW9yaXR5IG92ZXIgdGhlIHJvb3QgZG9jdW1lbnQgdmFsdWUuXG4gKi9cbmNvbnN0IGlzUlRMID0gKGhvc3RFbCkgPT4ge1xuICBpZiAoaG9zdEVsKSB7XG4gICAgaWYgKGhvc3RFbC5kaXIgIT09ICcnKSB7XG4gICAgICByZXR1cm4gaG9zdEVsLmRpci50b0xvd2VyQ2FzZSgpID09PSAncnRsJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChkb2N1bWVudCA9PT0gbnVsbCB8fCBkb2N1bWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZG9jdW1lbnQuZGlyLnRvTG93ZXJDYXNlKCkpID09PSAncnRsJztcbn07XG5cbmV4cG9ydCB7IGlzUlRMIGFzIGkgfTtcbiIsIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5jb25zdCBJT05fRk9DVVNFRCA9ICdpb24tZm9jdXNlZCc7XG5jb25zdCBJT05fRk9DVVNBQkxFID0gJ2lvbi1mb2N1c2FibGUnO1xuY29uc3QgRk9DVVNfS0VZUyA9IFtcbiAgJ1RhYicsXG4gICdBcnJvd0Rvd24nLFxuICAnU3BhY2UnLFxuICAnRXNjYXBlJyxcbiAgJyAnLFxuICAnU2hpZnQnLFxuICAnRW50ZXInLFxuICAnQXJyb3dMZWZ0JyxcbiAgJ0Fycm93UmlnaHQnLFxuICAnQXJyb3dVcCcsXG4gICdIb21lJyxcbiAgJ0VuZCcsXG5dO1xuY29uc3Qgc3RhcnRGb2N1c1Zpc2libGUgPSAocm9vdEVsKSA9PiB7XG4gIGxldCBjdXJyZW50Rm9jdXMgPSBbXTtcbiAgbGV0IGtleWJvYXJkTW9kZSA9IHRydWU7XG4gIGNvbnN0IHJlZiA9IHJvb3RFbCA/IHJvb3RFbC5zaGFkb3dSb290IDogZG9jdW1lbnQ7XG4gIGNvbnN0IHJvb3QgPSByb290RWwgPyByb290RWwgOiBkb2N1bWVudC5ib2R5O1xuICBjb25zdCBzZXRGb2N1cyA9IChlbGVtZW50cykgPT4ge1xuICAgIGN1cnJlbnRGb2N1cy5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZShJT05fRk9DVVNFRCkpO1xuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QuYWRkKElPTl9GT0NVU0VEKSk7XG4gICAgY3VycmVudEZvY3VzID0gZWxlbWVudHM7XG4gIH07XG4gIGNvbnN0IHBvaW50ZXJEb3duID0gKCkgPT4ge1xuICAgIGtleWJvYXJkTW9kZSA9IGZhbHNlO1xuICAgIHNldEZvY3VzKFtdKTtcbiAgfTtcbiAgY29uc3Qgb25LZXlkb3duID0gKGV2KSA9PiB7XG4gICAga2V5Ym9hcmRNb2RlID0gRk9DVVNfS0VZUy5pbmNsdWRlcyhldi5rZXkpO1xuICAgIGlmICgha2V5Ym9hcmRNb2RlKSB7XG4gICAgICBzZXRGb2N1cyhbXSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBvbkZvY3VzaW4gPSAoZXYpID0+IHtcbiAgICBpZiAoa2V5Ym9hcmRNb2RlICYmIGV2LmNvbXBvc2VkUGF0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCB0b0ZvY3VzID0gZXYuY29tcG9zZWRQYXRoKCkuZmlsdGVyKChlbCkgPT4ge1xuICAgICAgICAvLyBUT0RPKEZXLTI4MzIpOiB0eXBlXG4gICAgICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgICAgICByZXR1cm4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKElPTl9GT0NVU0FCTEUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgc2V0Rm9jdXModG9Gb2N1cyk7XG4gICAgfVxuICB9O1xuICBjb25zdCBvbkZvY3Vzb3V0ID0gKCkgPT4ge1xuICAgIGlmIChyZWYuYWN0aXZlRWxlbWVudCA9PT0gcm9vdCkge1xuICAgICAgc2V0Rm9jdXMoW10pO1xuICAgIH1cbiAgfTtcbiAgcmVmLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleWRvd24pO1xuICByZWYuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIG9uRm9jdXNpbik7XG4gIHJlZi5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIG9uRm9jdXNvdXQpO1xuICByZWYuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHBvaW50ZXJEb3duLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gIHJlZi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBwb2ludGVyRG93bik7XG4gIGNvbnN0IGRlc3Ryb3kgPSAoKSA9PiB7XG4gICAgcmVmLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleWRvd24pO1xuICAgIHJlZi5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c2luJywgb25Gb2N1c2luKTtcbiAgICByZWYucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBvbkZvY3Vzb3V0KTtcbiAgICByZWYucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHBvaW50ZXJEb3duKTtcbiAgICByZWYucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgcG9pbnRlckRvd24pO1xuICB9O1xuICByZXR1cm4ge1xuICAgIGRlc3Ryb3ksXG4gICAgc2V0Rm9jdXMsXG4gIH07XG59O1xuXG5leHBvcnQgeyBzdGFydEZvY3VzVmlzaWJsZSB9O1xuIiwiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmNvbnN0IEhhcHRpY0VuZ2luZSA9IHtcbiAgZ2V0RW5naW5lKCkge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCB3aW4gPSB3aW5kb3c7XG4gICAgcmV0dXJuIHdpbi5UYXB0aWNFbmdpbmUgfHwgKCgoX2EgPSB3aW4uQ2FwYWNpdG9yKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaXNQbHVnaW5BdmFpbGFibGUoJ0hhcHRpY3MnKSkgJiYgd2luLkNhcGFjaXRvci5QbHVnaW5zLkhhcHRpY3MpO1xuICB9LFxuICBhdmFpbGFibGUoKSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IHdpbiA9IHdpbmRvdztcbiAgICBjb25zdCBlbmdpbmUgPSB0aGlzLmdldEVuZ2luZSgpO1xuICAgIGlmICghZW5naW5lKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERldmVsb3BlcnMgY2FuIG1hbnVhbGx5IGltcG9ydCB0aGVcbiAgICAgKiBIYXB0aWNzIHBsdWdpbiBpbiB0aGVpciBhcHAgd2hpY2ggd2lsbCBjYXVzZVxuICAgICAqIGdldEVuZ2luZSB0byByZXR1cm4gdGhlIEhhcHRpY3MgZW5naW5lLiBIb3dldmVyLFxuICAgICAqIHRoZSBIYXB0aWNzIGVuZ2luZSB3aWxsIHRocm93IGFuIGVycm9yIGlmXG4gICAgICogdXNlZCBpbiBhIHdlYiBicm93c2VyIHRoYXQgZG9lcyBub3Qgc3VwcG9ydFxuICAgICAqIHRoZSBWaWJyYXRlIEFQSS4gVGhpcyBjaGVjayBhdm9pZHMgdGhhdCBlcnJvclxuICAgICAqIGlmIHRoZSBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIFZpYnJhdGUgQVBJLlxuICAgICAqL1xuICAgIGlmICgoKF9hID0gd2luLkNhcGFjaXRvcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldFBsYXRmb3JtKCkpID09PSAnd2ViJykge1xuICAgICAgcmV0dXJuIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci52aWJyYXRlICE9PSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICBpc0NvcmRvdmEoKSB7XG4gICAgcmV0dXJuICEhd2luZG93LlRhcHRpY0VuZ2luZTtcbiAgfSxcbiAgaXNDYXBhY2l0b3IoKSB7XG4gICAgY29uc3Qgd2luID0gd2luZG93O1xuICAgIHJldHVybiAhIXdpbi5DYXBhY2l0b3I7XG4gIH0sXG4gIGltcGFjdChvcHRpb25zKSB7XG4gICAgY29uc3QgZW5naW5lID0gdGhpcy5nZXRFbmdpbmUoKTtcbiAgICBpZiAoIWVuZ2luZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzdHlsZSA9IHRoaXMuaXNDYXBhY2l0b3IoKSA/IG9wdGlvbnMuc3R5bGUudG9VcHBlckNhc2UoKSA6IG9wdGlvbnMuc3R5bGU7XG4gICAgZW5naW5lLmltcGFjdCh7IHN0eWxlIH0pO1xuICB9LFxuICBub3RpZmljYXRpb24ob3B0aW9ucykge1xuICAgIGNvbnN0IGVuZ2luZSA9IHRoaXMuZ2V0RW5naW5lKCk7XG4gICAgaWYgKCFlbmdpbmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc3R5bGUgPSB0aGlzLmlzQ2FwYWNpdG9yKCkgPyBvcHRpb25zLnN0eWxlLnRvVXBwZXJDYXNlKCkgOiBvcHRpb25zLnN0eWxlO1xuICAgIGVuZ2luZS5ub3RpZmljYXRpb24oeyBzdHlsZSB9KTtcbiAgfSxcbiAgc2VsZWN0aW9uKCkge1xuICAgIHRoaXMuaW1wYWN0KHsgc3R5bGU6ICdsaWdodCcgfSk7XG4gIH0sXG4gIHNlbGVjdGlvblN0YXJ0KCkge1xuICAgIGNvbnN0IGVuZ2luZSA9IHRoaXMuZ2V0RW5naW5lKCk7XG4gICAgaWYgKCFlbmdpbmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNDYXBhY2l0b3IoKSkge1xuICAgICAgZW5naW5lLnNlbGVjdGlvblN0YXJ0KCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZW5naW5lLmdlc3R1cmVTZWxlY3Rpb25TdGFydCgpO1xuICAgIH1cbiAgfSxcbiAgc2VsZWN0aW9uQ2hhbmdlZCgpIHtcbiAgICBjb25zdCBlbmdpbmUgPSB0aGlzLmdldEVuZ2luZSgpO1xuICAgIGlmICghZW5naW5lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmlzQ2FwYWNpdG9yKCkpIHtcbiAgICAgIGVuZ2luZS5zZWxlY3Rpb25DaGFuZ2VkKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZW5naW5lLmdlc3R1cmVTZWxlY3Rpb25DaGFuZ2VkKCk7XG4gICAgfVxuICB9LFxuICBzZWxlY3Rpb25FbmQoKSB7XG4gICAgY29uc3QgZW5naW5lID0gdGhpcy5nZXRFbmdpbmUoKTtcbiAgICBpZiAoIWVuZ2luZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc0NhcGFjaXRvcigpKSB7XG4gICAgICBlbmdpbmUuc2VsZWN0aW9uRW5kKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZW5naW5lLmdlc3R1cmVTZWxlY3Rpb25FbmQoKTtcbiAgICB9XG4gIH0sXG59O1xuLyoqXG4gKiBDaGVjayB0byBzZWUgaWYgdGhlIEhhcHRpYyBQbHVnaW4gaXMgYXZhaWxhYmxlXG4gKiBAcmV0dXJuIFJldHVybnMgYHRydWVgIG9yIGZhbHNlIGlmIHRoZSBwbHVnaW4gaXMgYXZhaWxhYmxlXG4gKi9cbmNvbnN0IGhhcHRpY0F2YWlsYWJsZSA9ICgpID0+IHtcbiAgcmV0dXJuIEhhcHRpY0VuZ2luZS5hdmFpbGFibGUoKTtcbn07XG4vKipcbiAqIFRyaWdnZXIgYSBzZWxlY3Rpb24gY2hhbmdlZCBoYXB0aWMgZXZlbnQuIEdvb2QgZm9yIG9uZS10aW1lIGV2ZW50c1xuICogKG5vdCBmb3IgZ2VzdHVyZXMpXG4gKi9cbmNvbnN0IGhhcHRpY1NlbGVjdGlvbiA9ICgpID0+IHtcbiAgaGFwdGljQXZhaWxhYmxlKCkgJiYgSGFwdGljRW5naW5lLnNlbGVjdGlvbigpO1xufTtcbi8qKlxuICogVGVsbCB0aGUgaGFwdGljIGVuZ2luZSB0aGF0IGEgZ2VzdHVyZSBmb3IgYSBzZWxlY3Rpb24gY2hhbmdlIGlzIHN0YXJ0aW5nLlxuICovXG5jb25zdCBoYXB0aWNTZWxlY3Rpb25TdGFydCA9ICgpID0+IHtcbiAgaGFwdGljQXZhaWxhYmxlKCkgJiYgSGFwdGljRW5naW5lLnNlbGVjdGlvblN0YXJ0KCk7XG59O1xuLyoqXG4gKiBUZWxsIHRoZSBoYXB0aWMgZW5naW5lIHRoYXQgYSBzZWxlY3Rpb24gY2hhbmdlZCBkdXJpbmcgYSBnZXN0dXJlLlxuICovXG5jb25zdCBoYXB0aWNTZWxlY3Rpb25DaGFuZ2VkID0gKCkgPT4ge1xuICBoYXB0aWNBdmFpbGFibGUoKSAmJiBIYXB0aWNFbmdpbmUuc2VsZWN0aW9uQ2hhbmdlZCgpO1xufTtcbi8qKlxuICogVGVsbCB0aGUgaGFwdGljIGVuZ2luZSB3ZSBhcmUgZG9uZSB3aXRoIGEgZ2VzdHVyZS4gVGhpcyBuZWVkcyB0byBiZVxuICogY2FsbGVkIGxlc3QgcmVzb3VyY2VzIGFyZSBub3QgcHJvcGVybHkgcmVjeWNsZWQuXG4gKi9cbmNvbnN0IGhhcHRpY1NlbGVjdGlvbkVuZCA9ICgpID0+IHtcbiAgaGFwdGljQXZhaWxhYmxlKCkgJiYgSGFwdGljRW5naW5lLnNlbGVjdGlvbkVuZCgpO1xufTtcbi8qKlxuICogVXNlIHRoaXMgdG8gaW5kaWNhdGUgc3VjY2Vzcy9mYWlsdXJlL3dhcm5pbmcgdG8gdGhlIHVzZXIuXG4gKiBvcHRpb25zIHNob3VsZCBiZSBvZiB0aGUgdHlwZSBgeyBzdHlsZTogJ2xpZ2h0JyB9YCAob3IgYG1lZGl1bWAvYGhlYXZ5YClcbiAqL1xuY29uc3QgaGFwdGljSW1wYWN0ID0gKG9wdGlvbnMpID0+IHtcbiAgaGFwdGljQXZhaWxhYmxlKCkgJiYgSGFwdGljRW5naW5lLmltcGFjdChvcHRpb25zKTtcbn07XG5cbmV4cG9ydCB7IGhhcHRpY1NlbGVjdGlvblN0YXJ0IGFzIGEsIGhhcHRpY1NlbGVjdGlvbkNoYW5nZWQgYXMgYiwgaGFwdGljU2VsZWN0aW9uIGFzIGMsIGhhcHRpY0ltcGFjdCBhcyBkLCBoYXB0aWNTZWxlY3Rpb25FbmQgYXMgaCB9O1xuIiwiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbi8qIElvbmljb25zIHY3LjEuMCwgRVMgTW9kdWxlcyAqL1xuY29uc3QgYXJyb3dCYWNrU2hhcnAgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjxwYXRoIHN0cm9rZS1saW5lY2FwPSdzcXVhcmUnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgc3Ryb2tlLXdpZHRoPSc0OCcgZD0nTTI0NCA0MDBMMTAwIDI1NmwxNDQtMTQ0TTEyMCAyNTZoMjkyJyBjbGFzcz0naW9uaWNvbi1maWxsLW5vbmUnLz48L3N2Zz5cIjtcbmNvbnN0IGFycm93RG93biA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHBhdGggc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utd2lkdGg9JzQ4JyBkPSdNMTEyIDI2OGwxNDQgMTQ0IDE0NC0xNDRNMjU2IDM5MlYxMDAnIGNsYXNzPSdpb25pY29uLWZpbGwtbm9uZScvPjwvc3ZnPlwiO1xuY29uc3QgY2FyZXRCYWNrU2hhcnAgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjxwYXRoIGQ9J00zNjggNjRMMTQ0IDI1NmwyMjQgMTkyVjY0eicvPjwvc3ZnPlwiO1xuY29uc3QgY2FyZXREb3duU2hhcnAgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjxwYXRoIGQ9J002NCAxNDRsMTkyIDIyNCAxOTItMjI0SDY0eicvPjwvc3ZnPlwiO1xuY29uc3QgY2FyZXRVcFNoYXJwID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48cGF0aCBkPSdNNDQ4IDM2OEwyNTYgMTQ0IDY0IDM2OGgzODR6Jy8+PC9zdmc+XCI7XG5jb25zdCBjaGVja21hcmtPdXRsaW5lID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48cGF0aCBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGQ9J000MTYgMTI4TDE5MiAzODRsLTk2LTk2JyBjbGFzcz0naW9uaWNvbi1maWxsLW5vbmUgaW9uaWNvbi1zdHJva2Utd2lkdGgnLz48L3N2Zz5cIjtcbmNvbnN0IGNoZXZyb25CYWNrID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48cGF0aCBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nNDgnIGQ9J00zMjggMTEyTDE4NCAyNTZsMTQ0IDE0NCcgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lJy8+PC9zdmc+XCI7XG5jb25zdCBjaGV2cm9uRG93biA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHBhdGggc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utd2lkdGg9JzQ4JyBkPSdNMTEyIDE4NGwxNDQgMTQ0IDE0NC0xNDQnIGNsYXNzPSdpb25pY29uLWZpbGwtbm9uZScvPjwvc3ZnPlwiO1xuY29uc3QgY2hldnJvbkV4cGFuZCA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHBhdGggZD0nTTEzNiAyMDhsMTIwLTEwNCAxMjAgMTA0TTEzNiAzMDRsMTIwIDEwNCAxMjAtMTA0JyBzdHJva2Utd2lkdGg9JzQ4JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdpb25pY29uLWZpbGwtbm9uZScvPjwvc3ZnPlwiO1xuY29uc3QgY2hldnJvbkZvcndhcmQgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjxwYXRoIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLXdpZHRoPSc0OCcgZD0nTTE4NCAxMTJsMTQ0IDE0NC0xNDQgMTQ0JyBjbGFzcz0naW9uaWNvbi1maWxsLW5vbmUnLz48L3N2Zz5cIjtcbmNvbnN0IGNoZXZyb25Gb3J3YXJkT3V0bGluZSA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHBhdGggc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utd2lkdGg9JzQ4JyBkPSdNMTg0IDExMmwxNDQgMTQ0LTE0NCAxNDQnIGNsYXNzPSdpb25pY29uLWZpbGwtbm9uZScvPjwvc3ZnPlwiO1xuY29uc3QgY2xvc2UgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjxwYXRoIGQ9J00yODkuOTQgMjU2bDk1LTk1QTI0IDI0IDAgMDAzNTEgMTI3bC05NSA5NS05NS05NWEyNCAyNCAwIDAwLTM0IDM0bDk1IDk1LTk1IDk1YTI0IDI0IDAgMTAzNCAzNGw5NS05NSA5NSA5NWEyNCAyNCAwIDAwMzQtMzR6Jy8+PC9zdmc+XCI7XG5jb25zdCBjbG9zZUNpcmNsZSA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHBhdGggZD0nTTI1NiA0OEMxNDEuMzEgNDggNDggMTQxLjMxIDQ4IDI1NnM5My4zMSAyMDggMjA4IDIwOCAyMDgtOTMuMzEgMjA4LTIwOFMzNzAuNjkgNDggMjU2IDQ4em03NS4zMSAyNjAuNjlhMTYgMTYgMCAxMS0yMi42MiAyMi42MkwyNTYgMjc4LjYzbC01Mi42OSA1Mi42OGExNiAxNiAwIDAxLTIyLjYyLTIyLjYyTDIzMy4zNyAyNTZsLTUyLjY4LTUyLjY5YTE2IDE2IDAgMDEyMi42Mi0yMi42MkwyNTYgMjMzLjM3bDUyLjY5LTUyLjY4YTE2IDE2IDAgMDEyMi42MiAyMi42MkwyNzguNjMgMjU2eicvPjwvc3ZnPlwiO1xuY29uc3QgY2xvc2VTaGFycCA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHBhdGggZD0nTTQwMCAxNDUuNDlMMzY2LjUxIDExMiAyNTYgMjIyLjUxIDE0NS40OSAxMTIgMTEyIDE0NS40OSAyMjIuNTEgMjU2IDExMiAzNjYuNTEgMTQ1LjQ5IDQwMCAyNTYgMjg5LjQ5IDM2Ni41MSA0MDAgNDAwIDM2Ni41MSAyODkuNDkgMjU2IDQwMCAxNDUuNDl6Jy8+PC9zdmc+XCI7XG5jb25zdCBlbGxpcHNlT3V0bGluZSA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PGNpcmNsZSBjeD0nMjU2JyBjeT0nMjU2JyByPScxOTInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lIGlvbmljb24tc3Ryb2tlLXdpZHRoJy8+PC9zdmc+XCI7XG5jb25zdCBlbGxpcHNpc0hvcml6b250YWwgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjxjaXJjbGUgY3g9JzI1NicgY3k9JzI1Nicgcj0nNDgnLz48Y2lyY2xlIGN4PSc0MTYnIGN5PScyNTYnIHI9JzQ4Jy8+PGNpcmNsZSBjeD0nOTYnIGN5PScyNTYnIHI9JzQ4Jy8+PC9zdmc+XCI7XG5jb25zdCBtZW51T3V0bGluZSA9IFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGNsYXNzPSdpb25pY29uJyB2aWV3Qm94PScwIDAgNTEyIDUxMic+PHBhdGggc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIGQ9J004MCAxNjBoMzUyTTgwIDI1NmgzNTJNODAgMzUyaDM1MicgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lIGlvbmljb24tc3Ryb2tlLXdpZHRoJy8+PC9zdmc+XCI7XG5jb25zdCBtZW51U2hhcnAgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjxwYXRoIGQ9J002NCAzODRoMzg0di00Mi42N0g2NHptMC0xMDYuNjdoMzg0di00Mi42Nkg2NHpNNjQgMTI4djQyLjY3aDM4NFYxMjh6Jy8+PC9zdmc+XCI7XG5jb25zdCByZW1vdmVPdXRsaW5lID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48cGF0aCBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGQ9J000MDAgMjU2SDExMicgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lIGlvbmljb24tc3Ryb2tlLXdpZHRoJy8+PC9zdmc+XCI7XG5jb25zdCByZW9yZGVyVGhyZWVPdXRsaW5lID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48cGF0aCBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGQ9J005NiAyNTZoMzIwTTk2IDE3NmgzMjBNOTYgMzM2aDMyMCcgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lIGlvbmljb24tc3Ryb2tlLXdpZHRoJy8+PC9zdmc+XCI7XG5jb25zdCByZW9yZGVyVHdvU2hhcnAgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjxwYXRoIHN0cm9rZS1saW5lY2FwPSdzcXVhcmUnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nNDQnIGQ9J00xMTggMzA0aDI3Nk0xMTggMjA4aDI3NicgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lJy8+PC9zdmc+XCI7XG5jb25zdCBzZWFyY2hPdXRsaW5lID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgY2xhc3M9J2lvbmljb24nIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48cGF0aCBkPSdNMjIxLjA5IDY0YTE1Ny4wOSAxNTcuMDkgMCAxMDE1Ny4wOSAxNTcuMDlBMTU3LjEgMTU3LjEgMCAwMDIyMS4wOSA2NHonIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgY2xhc3M9J2lvbmljb24tZmlsbC1ub25lIGlvbmljb24tc3Ryb2tlLXdpZHRoJy8+PHBhdGggc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIGQ9J00zMzguMjkgMzM4LjI5TDQ0OCA0NDgnIGNsYXNzPSdpb25pY29uLWZpbGwtbm9uZSBpb25pY29uLXN0cm9rZS13aWR0aCcvPjwvc3ZnPlwiO1xuY29uc3Qgc2VhcmNoU2hhcnAgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBjbGFzcz0naW9uaWNvbicgdmlld0JveD0nMCAwIDUxMiA1MTInPjxwYXRoIGQ9J000NjQgNDI4TDMzOS45MiAzMDMuOWExNjAuNDggMTYwLjQ4IDAgMDAzMC43Mi05NC41OEMzNzAuNjQgMTIwLjM3IDI5OC4yNyA0OCAyMDkuMzIgNDhTNDggMTIwLjM3IDQ4IDIwOS4zMnM3Mi4zNyAxNjEuMzIgMTYxLjMyIDE2MS4zMmExNjAuNDggMTYwLjQ4IDAgMDA5NC41OC0zMC43Mkw0MjggNDY0ek0yMDkuMzIgMzE5LjY5YTExMC4zOCAxMTAuMzggMCAxMTExMC4zNy0xMTAuMzcgMTEwLjUgMTEwLjUgMCAwMS0xMTAuMzcgMTEwLjM3eicvPjwvc3ZnPlwiO1xuXG5leHBvcnQgeyBhcnJvd0JhY2tTaGFycCBhcyBhLCBjbG9zZUNpcmNsZSBhcyBiLCBjaGV2cm9uQmFjayBhcyBjLCBjbG9zZVNoYXJwIGFzIGQsIHNlYXJjaFNoYXJwIGFzIGUsIGNoZWNrbWFya091dGxpbmUgYXMgZiwgZWxsaXBzZU91dGxpbmUgYXMgZywgY2FyZXRCYWNrU2hhcnAgYXMgaCwgYXJyb3dEb3duIGFzIGksIHJlb3JkZXJUaHJlZU91dGxpbmUgYXMgaiwgcmVvcmRlclR3b1NoYXJwIGFzIGssIGNoZXZyb25Eb3duIGFzIGwsIGNoZXZyb25Gb3J3YXJkT3V0bGluZSBhcyBtLCBlbGxpcHNpc0hvcml6b250YWwgYXMgbiwgY2hldnJvbkZvcndhcmQgYXMgbywgY2FyZXRVcFNoYXJwIGFzIHAsIGNhcmV0RG93blNoYXJwIGFzIHEsIHJlbW92ZU91dGxpbmUgYXMgciwgc2VhcmNoT3V0bGluZSBhcyBzLCBjbG9zZSBhcyB0LCBtZW51T3V0bGluZSBhcyB1LCBtZW51U2hhcnAgYXMgdiwgY2hldnJvbkV4cGFuZCBhcyB3IH07XG4iLCIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgYyBhcyBjb21wb25lbnRPblJlYWR5IH0gZnJvbSAnLi9oZWxwZXJzLWY1ODZkYjFjLmpzJztcbmltcG9ydCB7IGIgYXMgcHJpbnRSZXF1aXJlZEVsZW1lbnRFcnJvciB9IGZyb20gJy4vaW5kZXgtZTg2ZjAxMTcuanMnO1xuXG5jb25zdCBJT05fQ09OVEVOVF9UQUdfTkFNRSA9ICdJT04tQ09OVEVOVCc7XG5jb25zdCBJT05fQ09OVEVOVF9FTEVNRU5UX1NFTEVDVE9SID0gJ2lvbi1jb250ZW50JztcbmNvbnN0IElPTl9DT05URU5UX0NMQVNTX1NFTEVDVE9SID0gJy5pb24tY29udGVudC1zY3JvbGwtaG9zdCc7XG4vKipcbiAqIFNlbGVjdG9yIHVzZWQgZm9yIGltcGxlbWVudGF0aW9ucyByZWxpYW50IG9uIGA8aW9uLWNvbnRlbnQ+YCBmb3Igc2Nyb2xsIGV2ZW50IGNoYW5nZXMuXG4gKlxuICogRGV2ZWxvcGVycyBzaG91bGQgdXNlIHRoZSBgLmlvbi1jb250ZW50LXNjcm9sbC1ob3N0YCBzZWxlY3RvciB0byB0YXJnZXQgdGhlIGVsZW1lbnQgZW1pdHRpbmdcbiAqIHNjcm9sbCBldmVudHMuIFdpdGggdmlydHVhbCBzY3JvbGwgaW1wbGVtZW50YXRpb25zIHRoaXMgd2lsbCBiZSB0aGUgaG9zdCBlbGVtZW50IGZvclxuICogdGhlIHNjcm9sbCB2aWV3cG9ydC5cbiAqL1xuY29uc3QgSU9OX0NPTlRFTlRfU0VMRUNUT1IgPSBgJHtJT05fQ09OVEVOVF9FTEVNRU5UX1NFTEVDVE9SfSwgJHtJT05fQ09OVEVOVF9DTEFTU19TRUxFQ1RPUn1gO1xuY29uc3QgaXNJb25Db250ZW50ID0gKGVsKSA9PiBlbC50YWdOYW1lID09PSBJT05fQ09OVEVOVF9UQUdfTkFNRTtcbi8qKlxuICogV2FpdHMgZm9yIHRoZSBlbGVtZW50IGhvc3QgZnVsbHkgaW5pdGlhbGl6ZSBiZWZvcmVcbiAqIHJldHVybmluZyB0aGUgaW5uZXIgc2Nyb2xsIGVsZW1lbnQuXG4gKlxuICogRm9yIGBpb24tY29udGVudGAgdGhlIHNjcm9sbCB0YXJnZXQgd2lsbCBiZSB0aGUgcmVzdWx0XG4gKiBvZiB0aGUgYGdldFNjcm9sbEVsZW1lbnRgIGZ1bmN0aW9uLlxuICpcbiAqIEZvciBjdXN0b20gaW1wbGVtZW50YXRpb25zIGl0IHdpbGwgYmUgdGhlIGVsZW1lbnQgaG9zdFxuICogb3IgYSBzZWxlY3RvciB3aXRoaW4gdGhlIGhvc3QsIGlmIHN1cHBsaWVkIHRocm91Z2ggYHNjcm9sbFRhcmdldGAuXG4gKi9cbmNvbnN0IGdldFNjcm9sbEVsZW1lbnQgPSBhc3luYyAoZWwpID0+IHtcbiAgaWYgKGlzSW9uQ29udGVudChlbCkpIHtcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gY29tcG9uZW50T25SZWFkeShlbCwgcmVzb2x2ZSkpO1xuICAgIHJldHVybiBlbC5nZXRTY3JvbGxFbGVtZW50KCk7XG4gIH1cbiAgcmV0dXJuIGVsO1xufTtcbi8qKlxuICogUXVlcmllcyB0aGUgZWxlbWVudCBtYXRjaGluZyB0aGUgc2VsZWN0b3IgZm9yIElvbkNvbnRlbnQuXG4gKiBTZWUgSU9OX0NPTlRFTlRfU0VMRUNUT1IgZm9yIHRoZSBzZWxlY3RvciB1c2VkLlxuICovXG5jb25zdCBmaW5kSW9uQ29udGVudCA9IChlbCkgPT4ge1xuICAvKipcbiAgICogRmlyc3Qgd2UgdHJ5IHRvIHF1ZXJ5IHRoZSBjdXN0b20gc2Nyb2xsIGhvc3Qgc2VsZWN0b3IgaW4gY2FzZXMgd2hlcmVcbiAgICogdGhlIGltcGxlbWVudGF0aW9uIGlzIHVzaW5nIGFuIG91dGVyIGBpb24tY29udGVudGAgd2l0aCBhbiBpbm5lciBjdXN0b21cbiAgICogc2Nyb2xsIGNvbnRhaW5lci5cbiAgICovXG4gIGNvbnN0IGN1c3RvbUNvbnRlbnRIb3N0ID0gZWwucXVlcnlTZWxlY3RvcihJT05fQ09OVEVOVF9DTEFTU19TRUxFQ1RPUik7XG4gIGlmIChjdXN0b21Db250ZW50SG9zdCkge1xuICAgIHJldHVybiBjdXN0b21Db250ZW50SG9zdDtcbiAgfVxuICByZXR1cm4gZWwucXVlcnlTZWxlY3RvcihJT05fQ09OVEVOVF9TRUxFQ1RPUik7XG59O1xuLyoqXG4gKiBRdWVyaWVzIHRoZSBjbG9zZXN0IGVsZW1lbnQgbWF0Y2hpbmcgdGhlIHNlbGVjdG9yIGZvciBJb25Db250ZW50LlxuICovXG5jb25zdCBmaW5kQ2xvc2VzdElvbkNvbnRlbnQgPSAoZWwpID0+IHtcbiAgcmV0dXJuIGVsLmNsb3Nlc3QoSU9OX0NPTlRFTlRfU0VMRUNUT1IpO1xufTtcbi8qKlxuICogU2Nyb2xscyB0byB0aGUgdG9wIG9mIHRoZSBlbGVtZW50LiBJZiBhbiBgaW9uLWNvbnRlbnRgIGlzIGZvdW5kLCBpdCB3aWxsIHNjcm9sbFxuICogdXNpbmcgdGhlIHB1YmxpYyBBUEkgYHNjcm9sbFRvVG9wYCB3aXRoIGEgZHVyYXRpb24uXG4gKi9cbi8vIFRPRE8oRlctMjgzMik6IHR5cGVcbmNvbnN0IHNjcm9sbFRvVG9wID0gKGVsLCBkdXJhdGlvbk1zKSA9PiB7XG4gIGlmIChpc0lvbkNvbnRlbnQoZWwpKSB7XG4gICAgY29uc3QgY29udGVudCA9IGVsO1xuICAgIHJldHVybiBjb250ZW50LnNjcm9sbFRvVG9wKGR1cmF0aW9uTXMpO1xuICB9XG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUoZWwuc2Nyb2xsVG8oe1xuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGJlaGF2aW9yOiBkdXJhdGlvbk1zID4gMCA/ICdzbW9vdGgnIDogJ2F1dG8nLFxuICB9KSk7XG59O1xuLyoqXG4gKiBTY3JvbGxzIGJ5IGEgc3BlY2lmaWVkIFgvWSBkaXN0YW5jZSBpbiB0aGUgY29tcG9uZW50LiBJZiBhbiBgaW9uLWNvbnRlbnRgIGlzIGZvdW5kLCBpdCB3aWxsIHNjcm9sbFxuICogdXNpbmcgdGhlIHB1YmxpYyBBUEkgYHNjcm9sbEJ5UG9pbnRgIHdpdGggYSBkdXJhdGlvbi5cbiAqL1xuY29uc3Qgc2Nyb2xsQnlQb2ludCA9IChlbCwgeCwgeSwgZHVyYXRpb25NcykgPT4ge1xuICBpZiAoaXNJb25Db250ZW50KGVsKSkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBlbDtcbiAgICByZXR1cm4gY29udGVudC5zY3JvbGxCeVBvaW50KHgsIHksIGR1cmF0aW9uTXMpO1xuICB9XG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUoZWwuc2Nyb2xsQnkoe1xuICAgIHRvcDogeSxcbiAgICBsZWZ0OiB4LFxuICAgIGJlaGF2aW9yOiBkdXJhdGlvbk1zID4gMCA/ICdzbW9vdGgnIDogJ2F1dG8nLFxuICB9KSk7XG59O1xuLyoqXG4gKiBQcmludHMgYW4gZXJyb3IgaW5mb3JtaW5nIGRldmVsb3BlcnMgdGhhdCBhbiBpbXBsZW1lbnRhdGlvbiByZXF1aXJlcyBhbiBlbGVtZW50IHRvIGJlIHVzZWRcbiAqIHdpdGhpbiBlaXRoZXIgdGhlIGBpb24tY29udGVudGAgc2VsZWN0b3Igb3IgdGhlIGAuaW9uLWNvbnRlbnQtc2Nyb2xsLWhvc3RgIGNsYXNzLlxuICovXG5jb25zdCBwcmludElvbkNvbnRlbnRFcnJvck1zZyA9IChlbCkgPT4ge1xuICByZXR1cm4gcHJpbnRSZXF1aXJlZEVsZW1lbnRFcnJvcihlbCwgSU9OX0NPTlRFTlRfRUxFTUVOVF9TRUxFQ1RPUik7XG59O1xuLyoqXG4gKiBTZXZlcmFsIGNvbXBvbmVudHMgaW4gSW9uaWMgbmVlZCB0byBwcmV2ZW50IHNjcm9sbGluZ1xuICogZHVyaW5nIGEgZ2VzdHVyZSAoY2FyZCBtb2RhbCwgcmFuZ2UsIGl0ZW0gc2xpZGluZywgZXRjKS5cbiAqIFVzZSB0aGlzIHV0aWxpdHkgdG8gYWNjb3VudCBmb3IgaW9uLWNvbnRlbnQgYW5kIGN1c3RvbSBjb250ZW50IGhvc3RzLlxuICovXG5jb25zdCBkaXNhYmxlQ29udGVudFNjcm9sbFkgPSAoY29udGVudEVsKSA9PiB7XG4gIGlmIChpc0lvbkNvbnRlbnQoY29udGVudEVsKSkge1xuICAgIGNvbnN0IGlvbkNvbnRlbnQgPSBjb250ZW50RWw7XG4gICAgY29uc3QgaW5pdGlhbFNjcm9sbFkgPSBpb25Db250ZW50LnNjcm9sbFk7XG4gICAgaW9uQ29udGVudC5zY3JvbGxZID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogVGhpcyBzaG91bGQgYmUgcGFzc2VkIGludG8gcmVzZXRDb250ZW50U2Nyb2xsWVxuICAgICAqIHNvIHRoYXQgd2UgY2FuIHJldmVydCBpb24tY29udGVudCdzIHNjcm9sbFkgdG8gdGhlXG4gICAgICogY29ycmVjdCBzdGF0ZS4gRm9yIGV4YW1wbGUsIGlmIHNjcm9sbFkgPSBmYWxzZVxuICAgICAqIGluaXRpYWxseSwgd2UgZG8gbm90IHdhbnQgdG8gZW5hYmxlIHNjcm9sbGluZ1xuICAgICAqIHdoZW4gd2UgY2FsbCByZXNldENvbnRlbnRTY3JvbGxZLlxuICAgICAqL1xuICAgIHJldHVybiBpbml0aWFsU2Nyb2xsWTtcbiAgfVxuICBlbHNlIHtcbiAgICBjb250ZW50RWwuc3R5bGUuc2V0UHJvcGVydHkoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuY29uc3QgcmVzZXRDb250ZW50U2Nyb2xsWSA9IChjb250ZW50RWwsIGluaXRpYWxTY3JvbGxZKSA9PiB7XG4gIGlmIChpc0lvbkNvbnRlbnQoY29udGVudEVsKSkge1xuICAgIGNvbnRlbnRFbC5zY3JvbGxZID0gaW5pdGlhbFNjcm9sbFk7XG4gIH1cbiAgZWxzZSB7XG4gICAgY29udGVudEVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpO1xuICB9XG59O1xuXG5leHBvcnQgeyBJT05fQ09OVEVOVF9DTEFTU19TRUxFQ1RPUiBhcyBJLCBmaW5kSW9uQ29udGVudCBhcyBhLCBJT05fQ09OVEVOVF9FTEVNRU5UX1NFTEVDVE9SIGFzIGIsIHNjcm9sbEJ5UG9pbnQgYXMgYywgZGlzYWJsZUNvbnRlbnRTY3JvbGxZIGFzIGQsIGZpbmRDbG9zZXN0SW9uQ29udGVudCBhcyBmLCBnZXRTY3JvbGxFbGVtZW50IGFzIGcsIGlzSW9uQ29udGVudCBhcyBpLCBwcmludElvbkNvbnRlbnRFcnJvck1zZyBhcyBwLCByZXNldENvbnRlbnRTY3JvbGxZIGFzIHIsIHNjcm9sbFRvVG9wIGFzIHMgfTtcbiIsIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyB3IGFzIHdpbiB9IGZyb20gJy4vaW5kZXgtYjMyY2FkOTguanMnO1xuXG52YXIgS2V5Ym9hcmRSZXNpemU7XG4oZnVuY3Rpb24gKEtleWJvYXJkUmVzaXplKSB7XG4gIEtleWJvYXJkUmVzaXplW1wiQm9keVwiXSA9IFwiYm9keVwiO1xuICBLZXlib2FyZFJlc2l6ZVtcIklvbmljXCJdID0gXCJpb25pY1wiO1xuICBLZXlib2FyZFJlc2l6ZVtcIk5hdGl2ZVwiXSA9IFwibmF0aXZlXCI7XG4gIEtleWJvYXJkUmVzaXplW1wiTm9uZVwiXSA9IFwibm9uZVwiO1xufSkoS2V5Ym9hcmRSZXNpemUgfHwgKEtleWJvYXJkUmVzaXplID0ge30pKTtcbmNvbnN0IEtleWJvYXJkID0ge1xuICBnZXRFbmdpbmUoKSB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiAoKF9hID0gd2luID09PSBudWxsIHx8IHdpbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogd2luLkNhcGFjaXRvcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmlzUGx1Z2luQXZhaWxhYmxlKCdLZXlib2FyZCcpKSAmJiAod2luID09PSBudWxsIHx8IHdpbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogd2luLkNhcGFjaXRvci5QbHVnaW5zLktleWJvYXJkKTtcbiAgfSxcbiAgZ2V0UmVzaXplTW9kZSgpIHtcbiAgICBjb25zdCBlbmdpbmUgPSB0aGlzLmdldEVuZ2luZSgpO1xuICAgIGlmICghKGVuZ2luZSA9PT0gbnVsbCB8fCBlbmdpbmUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVuZ2luZS5nZXRSZXNpemVNb2RlKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgIH1cbiAgICByZXR1cm4gZW5naW5lLmdldFJlc2l6ZU1vZGUoKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgaWYgKGUuY29kZSA9PT0gJ1VOSU1QTEVNRU5URUQnKSB7XG4gICAgICAgIC8vIElmIHRoZSBuYXRpdmUgaW1wbGVtZW50YXRpb24gaXMgbm90IGF2YWlsYWJsZVxuICAgICAgICAvLyB3ZSB0cmVhdCBpdCB0aGUgc2FtZSBhcyBpZiB0aGUgcGx1Z2luIGlzIG5vdCBhdmFpbGFibGUuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICB0aHJvdyBlO1xuICAgIH0pO1xuICB9LFxufTtcblxuZXhwb3J0IHsgS2V5Ym9hcmQgYXMgSywgS2V5Ym9hcmRSZXNpemUgYXMgYSB9O1xuIiwiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbmltcG9ydCB7IEsgYXMgS2V5Ym9hcmQgfSBmcm9tICcuL2tleWJvYXJkLTg1NmJjOTI5LmpzJztcbmltcG9ydCAnLi9pbmRleC1iMzJjYWQ5OC5qcyc7XG5cbmNvbnN0IEtFWUJPQVJEX0RJRF9PUEVOID0gJ2lvbktleWJvYXJkRGlkU2hvdyc7XG5jb25zdCBLRVlCT0FSRF9ESURfQ0xPU0UgPSAnaW9uS2V5Ym9hcmREaWRIaWRlJztcbmNvbnN0IEtFWUJPQVJEX1RIUkVTSE9MRCA9IDE1MDtcbi8vIFRPRE8oRlctMjgzMik6IHR5cGVzXG5sZXQgcHJldmlvdXNWaXN1YWxWaWV3cG9ydCA9IHt9O1xubGV0IGN1cnJlbnRWaXN1YWxWaWV3cG9ydCA9IHt9O1xubGV0IGtleWJvYXJkT3BlbiA9IGZhbHNlO1xuLyoqXG4gKiBUaGlzIGlzIG9ubHkgdXNlZCBmb3IgdGVzdHNcbiAqL1xuY29uc3QgcmVzZXRLZXlib2FyZEFzc2lzdCA9ICgpID0+IHtcbiAgcHJldmlvdXNWaXN1YWxWaWV3cG9ydCA9IHt9O1xuICBjdXJyZW50VmlzdWFsVmlld3BvcnQgPSB7fTtcbiAga2V5Ym9hcmRPcGVuID0gZmFsc2U7XG59O1xuY29uc3Qgc3RhcnRLZXlib2FyZEFzc2lzdCA9ICh3aW4pID0+IHtcbiAgY29uc3QgbmF0aXZlRW5naW5lID0gS2V5Ym9hcmQuZ2V0RW5naW5lKCk7XG4gIC8qKlxuICAgKiBJZiB0aGUgbmF0aXZlIGtleWJvYXJkIHBsdWdpbiBpcyBhdmFpbGFibGVcbiAgICogdGhlbiB3ZSBhcmUgcnVubmluZyBpbiBhIG5hdGl2ZSBlbnZpcm9ubWVudC4gQXMgYSByZXN1bHRcbiAgICogd2Ugc2hvdWxkIG9ubHkgbGlzdGVuIG9uIHRoZSBuYXRpdmUgZXZlbnRzIGluc3RlYWQgb2ZcbiAgICogdXNpbmcgdGhlIFZpc3VhbCBWaWV3cG9ydCBhcyB0aGUgSW9uaWMgd2VidmlldyBtYW5pcHVsYXRlc1xuICAgKiBob3cgaXQgcmVzaXplcyBzdWNoIHRoYXQgdGhlIFZpc3VhbCBWaWV3cG9ydCBBUEkgaXMgbm90XG4gICAqIHJlbGlhYmxlIGhlcmUuXG4gICAqL1xuICBpZiAobmF0aXZlRW5naW5lKSB7XG4gICAgc3RhcnROYXRpdmVMaXN0ZW5lcnMod2luKTtcbiAgfVxuICBlbHNlIHtcbiAgICBpZiAoIXdpbi52aXN1YWxWaWV3cG9ydCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjdXJyZW50VmlzdWFsVmlld3BvcnQgPSBjb3B5VmlzdWFsVmlld3BvcnQod2luLnZpc3VhbFZpZXdwb3J0KTtcbiAgICB3aW4udmlzdWFsVmlld3BvcnQub25yZXNpemUgPSAoKSA9PiB7XG4gICAgICB0cmFja1ZpZXdwb3J0Q2hhbmdlcyh3aW4pO1xuICAgICAgaWYgKGtleWJvYXJkRGlkT3BlbigpIHx8IGtleWJvYXJkRGlkUmVzaXplKHdpbikpIHtcbiAgICAgICAgc2V0S2V5Ym9hcmRPcGVuKHdpbik7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChrZXlib2FyZERpZENsb3NlKHdpbikpIHtcbiAgICAgICAgc2V0S2V5Ym9hcmRDbG9zZSh3aW4pO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn07XG4vKipcbiAqIExpc3RlbiBmb3IgZXZlbnRzIGZpcmVkIGJ5IG5hdGl2ZSBrZXlib2FyZCBwbHVnaW5cbiAqIGluIENhcGFjaXRvci9Db3Jkb3ZhIHNvIGRldnMgb25seSBuZWVkIHRvIGxpc3RlblxuICogaW4gb25lIHBsYWNlLlxuICovXG5jb25zdCBzdGFydE5hdGl2ZUxpc3RlbmVycyA9ICh3aW4pID0+IHtcbiAgd2luLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWJvYXJkRGlkU2hvdycsIChldikgPT4gc2V0S2V5Ym9hcmRPcGVuKHdpbiwgZXYpKTtcbiAgd2luLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWJvYXJkRGlkSGlkZScsICgpID0+IHNldEtleWJvYXJkQ2xvc2Uod2luKSk7XG59O1xuY29uc3Qgc2V0S2V5Ym9hcmRPcGVuID0gKHdpbiwgZXYpID0+IHtcbiAgZmlyZUtleWJvYXJkT3BlbkV2ZW50KHdpbiwgZXYpO1xuICBrZXlib2FyZE9wZW4gPSB0cnVlO1xufTtcbmNvbnN0IHNldEtleWJvYXJkQ2xvc2UgPSAod2luKSA9PiB7XG4gIGZpcmVLZXlib2FyZENsb3NlRXZlbnQod2luKTtcbiAga2V5Ym9hcmRPcGVuID0gZmFsc2U7XG59O1xuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYGtleWJvYXJkT3BlbmAgZmxhZyBpcyBub3RcbiAqIHNldCwgdGhlIHByZXZpb3VzIHZpc3VhbCB2aWV3cG9ydCB3aWR0aCBlcXVhbCB0aGUgY3VycmVudFxuICogdmlzdWFsIHZpZXdwb3J0IHdpZHRoLCBhbmQgaWYgdGhlIHNjYWxlZCBkaWZmZXJlbmNlXG4gKiBvZiB0aGUgcHJldmlvdXMgdmlzdWFsIHZpZXdwb3J0IGhlaWdodCBtaW51cyB0aGUgY3VycmVudFxuICogdmlzdWFsIHZpZXdwb3J0IGhlaWdodCBpcyBncmVhdGVyIHRoYW4gS0VZQk9BUkRfVEhSRVNIT0xEXG4gKlxuICogV2UgbmVlZCB0byBiZSBhYmxlIHRvIGFjY29tbW9kYXRlIHVzZXJzIHdobyBoYXZlIHpvb21pbmdcbiAqIGVuYWJsZWQgaW4gdGhlaXIgYnJvd3NlciAob3IgaGF2ZSB6b29tZWQgaW4gbWFudWFsbHkpIHdoaWNoXG4gKiBpcyB3aHkgd2UgdGFrZSBpbnRvIGFjY291bnQgdGhlIGN1cnJlbnQgdmlzdWFsIHZpZXdwb3J0J3NcbiAqIHNjYWxlIHZhbHVlLlxuICovXG5jb25zdCBrZXlib2FyZERpZE9wZW4gPSAoKSA9PiB7XG4gIGNvbnN0IHNjYWxlZEhlaWdodERpZmZlcmVuY2UgPSAocHJldmlvdXNWaXN1YWxWaWV3cG9ydC5oZWlnaHQgLSBjdXJyZW50VmlzdWFsVmlld3BvcnQuaGVpZ2h0KSAqIGN1cnJlbnRWaXN1YWxWaWV3cG9ydC5zY2FsZTtcbiAgcmV0dXJuICgha2V5Ym9hcmRPcGVuICYmXG4gICAgcHJldmlvdXNWaXN1YWxWaWV3cG9ydC53aWR0aCA9PT0gY3VycmVudFZpc3VhbFZpZXdwb3J0LndpZHRoICYmXG4gICAgc2NhbGVkSGVpZ2h0RGlmZmVyZW5jZSA+IEtFWUJPQVJEX1RIUkVTSE9MRCk7XG59O1xuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUga2V5Ym9hcmQgaXMgb3BlbixcbiAqIGJ1dCB0aGUga2V5Ym9hcmQgZGlkIG5vdCBjbG9zZVxuICovXG5jb25zdCBrZXlib2FyZERpZFJlc2l6ZSA9ICh3aW4pID0+IHtcbiAgcmV0dXJuIGtleWJvYXJkT3BlbiAmJiAha2V5Ym9hcmREaWRDbG9zZSh3aW4pO1xufTtcbi8qKlxuICogRGV0ZXJtaW5lIGlmIHRoZSBrZXlib2FyZCB3YXMgY2xvc2VkXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYGtleWJvYXJkT3BlbmAgZmxhZyBpcyBzZXQgYW5kXG4gKiB0aGUgY3VycmVudCB2aXN1YWwgdmlld3BvcnQgaGVpZ2h0IGVxdWFscyB0aGVcbiAqIGxheW91dCB2aWV3cG9ydCBoZWlnaHQuXG4gKi9cbmNvbnN0IGtleWJvYXJkRGlkQ2xvc2UgPSAod2luKSA9PiB7XG4gIHJldHVybiBrZXlib2FyZE9wZW4gJiYgY3VycmVudFZpc3VhbFZpZXdwb3J0LmhlaWdodCA9PT0gd2luLmlubmVySGVpZ2h0O1xufTtcbi8qKlxuICogRGlzcGF0Y2ggYSBrZXlib2FyZCBvcGVuIGV2ZW50XG4gKi9cbmNvbnN0IGZpcmVLZXlib2FyZE9wZW5FdmVudCA9ICh3aW4sIG5hdGl2ZUV2KSA9PiB7XG4gIGNvbnN0IGtleWJvYXJkSGVpZ2h0ID0gbmF0aXZlRXYgPyBuYXRpdmVFdi5rZXlib2FyZEhlaWdodCA6IHdpbi5pbm5lckhlaWdodCAtIGN1cnJlbnRWaXN1YWxWaWV3cG9ydC5oZWlnaHQ7XG4gIGNvbnN0IGV2ID0gbmV3IEN1c3RvbUV2ZW50KEtFWUJPQVJEX0RJRF9PUEVOLCB7XG4gICAgZGV0YWlsOiB7IGtleWJvYXJkSGVpZ2h0IH0sXG4gIH0pO1xuICB3aW4uZGlzcGF0Y2hFdmVudChldik7XG59O1xuLyoqXG4gKiBEaXNwYXRjaCBhIGtleWJvYXJkIGNsb3NlIGV2ZW50XG4gKi9cbmNvbnN0IGZpcmVLZXlib2FyZENsb3NlRXZlbnQgPSAod2luKSA9PiB7XG4gIGNvbnN0IGV2ID0gbmV3IEN1c3RvbUV2ZW50KEtFWUJPQVJEX0RJRF9DTE9TRSk7XG4gIHdpbi5kaXNwYXRjaEV2ZW50KGV2KTtcbn07XG4vKipcbiAqIEdpdmVuIGEgd2luZG93IG9iamVjdCwgY3JlYXRlIGEgY29weSBvZlxuICogdGhlIGN1cnJlbnQgdmlzdWFsIGFuZCBsYXlvdXQgdmlld3BvcnQgc3RhdGVzXG4gKiB3aGlsZSBhbHNvIHByZXNlcnZpbmcgdGhlIHByZXZpb3VzIHZpc3VhbCBhbmRcbiAqIGxheW91dCB2aWV3cG9ydCBzdGF0ZXNcbiAqL1xuY29uc3QgdHJhY2tWaWV3cG9ydENoYW5nZXMgPSAod2luKSA9PiB7XG4gIHByZXZpb3VzVmlzdWFsVmlld3BvcnQgPSBPYmplY3QuYXNzaWduKHt9LCBjdXJyZW50VmlzdWFsVmlld3BvcnQpO1xuICBjdXJyZW50VmlzdWFsVmlld3BvcnQgPSBjb3B5VmlzdWFsVmlld3BvcnQod2luLnZpc3VhbFZpZXdwb3J0KTtcbn07XG4vKipcbiAqIENyZWF0ZXMgYSBkZWVwIGNvcHkgb2YgdGhlIHZpc3VhbCB2aWV3cG9ydFxuICogYXQgYSBnaXZlbiBzdGF0ZVxuICovXG5jb25zdCBjb3B5VmlzdWFsVmlld3BvcnQgPSAodmlzdWFsVmlld3BvcnQpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogTWF0aC5yb3VuZCh2aXN1YWxWaWV3cG9ydC53aWR0aCksXG4gICAgaGVpZ2h0OiBNYXRoLnJvdW5kKHZpc3VhbFZpZXdwb3J0LmhlaWdodCksXG4gICAgb2Zmc2V0VG9wOiB2aXN1YWxWaWV3cG9ydC5vZmZzZXRUb3AsXG4gICAgb2Zmc2V0TGVmdDogdmlzdWFsVmlld3BvcnQub2Zmc2V0TGVmdCxcbiAgICBwYWdlVG9wOiB2aXN1YWxWaWV3cG9ydC5wYWdlVG9wLFxuICAgIHBhZ2VMZWZ0OiB2aXN1YWxWaWV3cG9ydC5wYWdlTGVmdCxcbiAgICBzY2FsZTogdmlzdWFsVmlld3BvcnQuc2NhbGUsXG4gIH07XG59O1xuXG5leHBvcnQgeyBLRVlCT0FSRF9ESURfQ0xPU0UsIEtFWUJPQVJEX0RJRF9PUEVOLCBjb3B5VmlzdWFsVmlld3BvcnQsIGtleWJvYXJkRGlkQ2xvc2UsIGtleWJvYXJkRGlkT3Blbiwga2V5Ym9hcmREaWRSZXNpemUsIHJlc2V0S2V5Ym9hcmRBc3Npc3QsIHNldEtleWJvYXJkQ2xvc2UsIHNldEtleWJvYXJkT3Blbiwgc3RhcnRLZXlib2FyZEFzc2lzdCwgdHJhY2tWaWV3cG9ydENoYW5nZXMgfTtcbiIsIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5pbXBvcnQgeyB3IGFzIHdpbiwgZCBhcyBkb2MgfSBmcm9tICcuL2luZGV4LWIzMmNhZDk4LmpzJztcbmltcG9ydCB7IEsgYXMgS2V5Ym9hcmQsIGEgYXMgS2V5Ym9hcmRSZXNpemUgfSBmcm9tICcuL2tleWJvYXJkLTg1NmJjOTI5LmpzJztcblxuLyoqXG4gKiBUaGUgZWxlbWVudCB0aGF0IHJlc2l6ZXMgd2hlbiB0aGUga2V5Ym9hcmQgb3BlbnNcbiAqIGlzIGdvaW5nIHRvIGRlcGVuZCBvbiB0aGUgcmVzaXplIG1vZGVcbiAqIHdoaWNoIGlzIHdoeSB3ZSBjaGVjayB0aGF0IGhlcmUuXG4gKi9cbmNvbnN0IGdldFJlc2l6ZUNvbnRhaW5lciA9IChyZXNpemVNb2RlKSA9PiB7XG4gIC8qKlxuICAgKiBJZiBkb2MgaXMgdW5kZWZpbmVkIHRoZW4gd2UgYXJlXG4gICAqIGluIGFuIFNTUiBlbnZpcm9ubWVudCwgc28gdGhlIGtleWJvYXJkXG4gICAqIGFkanVzdG1lbnQgZG9lcyBub3QgYXBwbHkuXG4gICAqIElmIHRoZSB3ZWJ2aWV3IGRvZXMgbm90IHJlc2l6ZSB0aGVuIHRoZXJlXG4gICAqIGlzIG5vIGNvbnRhaW5lciB0byByZXNpemUuXG4gICAqL1xuICBpZiAoZG9jID09PSB1bmRlZmluZWQgfHwgcmVzaXplTW9kZSA9PT0gS2V5Ym9hcmRSZXNpemUuTm9uZSB8fCByZXNpemVNb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICAvKipcbiAgICogVGhlIHRocmVlIHJlbWFpbmluZyByZXNpemUgbW9kZXM6IE5hdGl2ZSwgSW9uaWMsIGFuZCBCb2R5XG4gICAqIGFsbCBjYXVzZSBgaW9uLWFwcGAgdG8gcmVzaXplLCBzbyB3ZSBjYW4gbGlzdGVuIGZvciBjaGFuZ2VzXG4gICAqIG9uIHRoYXQuIEluIHRoZSBldmVudCBgaW9uLWFwcGAgaXMgbm90IGF2YWlsYWJsZSB0aGVuXG4gICAqIHdlIGNhbiBmYWxsIGJhY2sgdG8gYGJvZHlgLlxuICAgKi9cbiAgY29uc3QgaW9uQXBwID0gZG9jLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1hcHAnKTtcbiAgcmV0dXJuIGlvbkFwcCAhPT0gbnVsbCAmJiBpb25BcHAgIT09IHZvaWQgMCA/IGlvbkFwcCA6IGRvYy5ib2R5O1xufTtcbi8qKlxuICogR2V0IHRoZSBoZWlnaHQgb2YgaW9uLWFwcCBvciBib2R5LlxuICogVGhpcyBpcyB1c2VkIGZvciBkZXRlcm1pbmluZyBpZiB0aGUgd2Vidmlld1xuICogaGFzIHJlc2l6ZWQgYmVmb3JlIHRoZSBrZXlib2FyZCBjbG9zZWQuXG4gKiAqL1xuY29uc3QgZ2V0UmVzaXplQ29udGFpbmVySGVpZ2h0ID0gKHJlc2l6ZU1vZGUpID0+IHtcbiAgY29uc3QgY29udGFpbmVyRWxlbWVudCA9IGdldFJlc2l6ZUNvbnRhaW5lcihyZXNpemVNb2RlKTtcbiAgcmV0dXJuIGNvbnRhaW5lckVsZW1lbnQgPT09IG51bGwgPyAwIDogY29udGFpbmVyRWxlbWVudC5jbGllbnRIZWlnaHQ7XG59O1xuLyoqXG4gKiBDcmVhdGVzIGEgY29udHJvbGxlciB0aGF0IHRyYWNrcyBhbmQgcmVhY3RzIHRvIG9wZW5pbmcgb3IgY2xvc2luZyB0aGUga2V5Ym9hcmQuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ga2V5Ym9hcmRDaGFuZ2VDYWxsYmFjayBBIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUga2V5Ym9hcmQgb3BlbnMgb3IgY2xvc2VzLlxuICovXG5jb25zdCBjcmVhdGVLZXlib2FyZENvbnRyb2xsZXIgPSBhc3luYyAoa2V5Ym9hcmRDaGFuZ2VDYWxsYmFjaykgPT4ge1xuICBsZXQga2V5Ym9hcmRXaWxsU2hvd0hhbmRsZXI7XG4gIGxldCBrZXlib2FyZFdpbGxIaWRlSGFuZGxlcjtcbiAgbGV0IGtleWJvYXJkVmlzaWJsZTtcbiAgLyoqXG4gICAqIFRoaXMgbGV0cyB1cyBkZXRlcm1pbmUgaWYgdGhlIHdlYnZpZXcgY29udGVudFxuICAgKiBoYXMgcmVzaXplZCBhcyBhIHJlc3VsdCBvZiB0aGUga2V5Ym9hcmQuXG4gICAqL1xuICBsZXQgaW5pdGlhbFJlc2l6ZUNvbnRhaW5lckhlaWdodDtcbiAgY29uc3QgaW5pdCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNpemVPcHRpb25zID0gYXdhaXQgS2V5Ym9hcmQuZ2V0UmVzaXplTW9kZSgpO1xuICAgIGNvbnN0IHJlc2l6ZU1vZGUgPSByZXNpemVPcHRpb25zID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiByZXNpemVPcHRpb25zLm1vZGU7XG4gICAga2V5Ym9hcmRXaWxsU2hvd0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgICAvKipcbiAgICAgICAqIFdlIG5lZWQgdG8gY29tcHV0ZSBpbml0aWFsUmVzaXplQ29udGFpbmVySGVpZ2h0IHJpZ2h0IGJlZm9yZVxuICAgICAgICogdGhlIGtleWJvYXJkIG9wZW5zIHRvIGd1YXJhbnRlZSB0aGUgcmVzaXplIGNvbnRhaW5lciBpcyB2aXNpYmxlLlxuICAgICAgICogVGhlIHJlc2l6ZSBjb250YWluZXIgbWF5IG5vdCBiZSB2aXNpYmxlIGlmIHdlIGNvbXB1dGUgdGhpc1xuICAgICAgICogYXMgc29vbiBhcyB0aGUga2V5Ym9hcmQgY29udHJvbGxlciBpcyBjcmVhdGVkLlxuICAgICAgICogV2Ugc2hvdWxkIG9ubHkgbmVlZCB0byBkbyB0aGlzIG9uY2UgdG8gYXZvaWQgYWRkaXRpb25hbCBjbGllbnRIZWlnaHRcbiAgICAgICAqIGNvbXB1dGF0aW9ucy5cbiAgICAgICAqL1xuICAgICAgaWYgKGluaXRpYWxSZXNpemVDb250YWluZXJIZWlnaHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpbml0aWFsUmVzaXplQ29udGFpbmVySGVpZ2h0ID0gZ2V0UmVzaXplQ29udGFpbmVySGVpZ2h0KHJlc2l6ZU1vZGUpO1xuICAgICAgfVxuICAgICAga2V5Ym9hcmRWaXNpYmxlID0gdHJ1ZTtcbiAgICAgIGZpcmVDaGFuZ2VDYWxsYmFjayhrZXlib2FyZFZpc2libGUsIHJlc2l6ZU1vZGUpO1xuICAgIH07XG4gICAga2V5Ym9hcmRXaWxsSGlkZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICBrZXlib2FyZFZpc2libGUgPSBmYWxzZTtcbiAgICAgIGZpcmVDaGFuZ2VDYWxsYmFjayhrZXlib2FyZFZpc2libGUsIHJlc2l6ZU1vZGUpO1xuICAgIH07XG4gICAgd2luID09PSBudWxsIHx8IHdpbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogd2luLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWJvYXJkV2lsbFNob3cnLCBrZXlib2FyZFdpbGxTaG93SGFuZGxlcik7XG4gICAgd2luID09PSBudWxsIHx8IHdpbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogd2luLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWJvYXJkV2lsbEhpZGUnLCBrZXlib2FyZFdpbGxIaWRlSGFuZGxlcik7XG4gIH07XG4gIGNvbnN0IGZpcmVDaGFuZ2VDYWxsYmFjayA9IChzdGF0ZSwgcmVzaXplTW9kZSkgPT4ge1xuICAgIGlmIChrZXlib2FyZENoYW5nZUNhbGxiYWNrKSB7XG4gICAgICBrZXlib2FyZENoYW5nZUNhbGxiYWNrKHN0YXRlLCBjcmVhdGVSZXNpemVQcm9taXNlSWZOZWVkZWQocmVzaXplTW9kZSkpO1xuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIENvZGUgcmVzcG9uZGluZyB0byBrZXlib2FyZCBsaWZlY3ljbGVzIG1heSBuZWVkXG4gICAqIHRvIHNob3cvaGlkZSBjb250ZW50IG9uY2UgdGhlIHdlYnZpZXcgaGFzXG4gICAqIHJlc2l6ZWQgYXMgYSByZXN1bHQgb2YgdGhlIGtleWJvYXJkIHNob3dpbmcvaGlkaW5nLlxuICAgKiBjcmVhdGVSZXNpemVQcm9taXNlSWZOZWVkZWQgcHJvdmlkZXMgYSB3YXkgZm9yIGNvZGUgdG8gd2FpdCBmb3IgdGhlXG4gICAqIHJlc2l6ZSBldmVudCB0aGF0IHdhcyB0cmlnZ2VyZWQgYXMgYSByZXN1bHQgb2YgdGhlIGtleWJvYXJkLlxuICAgKi9cbiAgY29uc3QgY3JlYXRlUmVzaXplUHJvbWlzZUlmTmVlZGVkID0gKHJlc2l6ZU1vZGUpID0+IHtcbiAgICBpZiAoXG4gICAgLyoqXG4gICAgICogSWYgd2UgYXJlIGluIGFuIFNTUiBlbnZpcm9ubWVudCB0aGVuIHRoZXJlIGlzXG4gICAgICogbm8gd2luZG93IHRvIHJlc2l6ZS4gQWRkaXRpb25hbGx5LCBpZiB0aGVyZVxuICAgICAqIGlzIG5vIHJlc2l6ZSBtb2RlIG9yIHRoZSByZXNpemUgbW9kZSBpcyBcIk5vbmVcIlxuICAgICAqIHRoZW4gaW5pdGlhbFJlc2l6ZUNvbnRhaW5lckhlaWdodCB3aWxsIGJlIDBcbiAgICAgKi9cbiAgICBpbml0aWFsUmVzaXplQ29udGFpbmVySGVpZ2h0ID09PSAwIHx8XG4gICAgICAvKipcbiAgICAgICAqIElmIHRoZSBrZXlib2FyZCBpcyBjbG9zZWQgYmVmb3JlIHRoZSB3ZWJ2aWV3IHJlc2l6ZXMgaW5pdGlhbGx5XG4gICAgICAgKiB0aGVuIHRoZSB3ZWJ2aWV3IHdpbGwgbmV2ZXIgcmVzaXplLlxuICAgICAgICovXG4gICAgICBpbml0aWFsUmVzaXplQ29udGFpbmVySGVpZ2h0ID09PSBnZXRSZXNpemVDb250YWluZXJIZWlnaHQocmVzaXplTW9kZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSByZXNpemUgY29udGFpbmVyIHNvIHdlIGNhblxuICAgICAqIGF0dGFjaCB0aGUgUmVzaXplT2JzZXJ2ZXIgYmVsb3cgdG9cbiAgICAgKiB0aGUgY29ycmVjdCBlbGVtZW50LlxuICAgICAqL1xuICAgIGNvbnN0IGNvbnRhaW5lckVsZW1lbnQgPSBnZXRSZXNpemVDb250YWluZXIocmVzaXplTW9kZSk7XG4gICAgaWYgKGNvbnRhaW5lckVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU29tZSBwYXJ0IG9mIHRoZSB3ZWIgY29udGVudCBzaG91bGQgcmVzaXplLFxuICAgICAqIGFuZCB3ZSBuZWVkIHRvIGxpc3RlbiBmb3IgYSByZXNpemUuXG4gICAgICovXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFzIHBlciB0aGUgc3BlYywgdGhlIFJlc2l6ZU9ic2VydmVyXG4gICAgICAgICAqIHdpbGwgZmlyZSB3aGVuIG9ic2VydmF0aW9uIHN0YXJ0cyBpZlxuICAgICAgICAgKiB0aGUgb2JzZXJ2ZWQgZWxlbWVudCBpcyByZW5kZXJlZCBhbmQgZG9lcyBub3RcbiAgICAgICAgICogaGF2ZSBhIHNpemUgb2YgMCB4IDAuIEhvd2V2ZXIsIHRoZSB3YXRjaGVkIGVsZW1lbnRcbiAgICAgICAgICogbWF5IG9yIG1heSBub3QgaGF2ZSByZXNpemVkIGJ5IHRoZSB0aW1lIHRoaXMgZmlyc3RcbiAgICAgICAgICogY2FsbGJhY2sgaXMgZmlyZWQuIEFzIGEgcmVzdWx0LCB3ZSBuZWVkIHRvIGNoZWNrXG4gICAgICAgICAqIHRoZSBkaW1lbnNpb25zIG9mIHRoZSBlbGVtZW50LlxuICAgICAgICAgKlxuICAgICAgICAgKiBodHRwczovL3d3dy53My5vcmcvVFIvcmVzaXplLW9ic2VydmVyLyNpbnRyb1xuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGNvbnRhaW5lckVsZW1lbnQuY2xpZW50SGVpZ2h0ID09PSBpbml0aWFsUmVzaXplQ29udGFpbmVySGVpZ2h0KSB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogVGhlIHJlc2l6ZSBoYXBwZW5lZCwgc28gc3RvcCBsaXN0ZW5pbmdcbiAgICAgICAgICAgKiBmb3IgcmVzaXplIG9uIHRoaXMgZWxlbWVudC5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICByby5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgLyoqXG4gICAgICAgKiBJbiBDYXBhY2l0b3IgdGhlcmUgY2FuIGJlIGRlbGF5IGJldHdlZW4gd2hlbiB0aGUgd2luZG93XG4gICAgICAgKiByZXNpemVzIGFuZCB3aGVuIHRoZSBjb250YWluZXIgZWxlbWVudCByZXNpemVzLCBzbyB3ZSBjYW5ub3RcbiAgICAgICAqIHJlbHkgb24gYSAncmVzaXplJyBldmVudCBsaXN0ZW5lciBvbiB0aGUgd2luZG93LlxuICAgICAgICogSW5zdGVhZCwgd2UgbmVlZCB0byBkZXRlcm1pbmUgd2hlbiB0aGUgY29udGFpbmVyXG4gICAgICAgKiBlbGVtZW50IHJlc2l6ZXMgdXNpbmcgYSBSZXNpemVPYnNlcnZlci5cbiAgICAgICAqL1xuICAgICAgY29uc3Qgcm8gPSBuZXcgUmVzaXplT2JzZXJ2ZXIoY2FsbGJhY2spO1xuICAgICAgcm8ub2JzZXJ2ZShjb250YWluZXJFbGVtZW50KTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgZGVzdHJveSA9ICgpID0+IHtcbiAgICB3aW4gPT09IG51bGwgfHwgd2luID09PSB2b2lkIDAgPyB2b2lkIDAgOiB3aW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5Ym9hcmRXaWxsU2hvdycsIGtleWJvYXJkV2lsbFNob3dIYW5kbGVyKTtcbiAgICB3aW4gPT09IG51bGwgfHwgd2luID09PSB2b2lkIDAgPyB2b2lkIDAgOiB3aW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5Ym9hcmRXaWxsSGlkZScsIGtleWJvYXJkV2lsbEhpZGVIYW5kbGVyKTtcbiAgICBrZXlib2FyZFdpbGxTaG93SGFuZGxlciA9IGtleWJvYXJkV2lsbEhpZGVIYW5kbGVyID0gdW5kZWZpbmVkO1xuICB9O1xuICBjb25zdCBpc0tleWJvYXJkVmlzaWJsZSA9ICgpID0+IGtleWJvYXJkVmlzaWJsZTtcbiAgYXdhaXQgaW5pdCgpO1xuICByZXR1cm4geyBpbml0LCBkZXN0cm95LCBpc0tleWJvYXJkVmlzaWJsZSB9O1xufTtcblxuZXhwb3J0IHsgY3JlYXRlS2V5Ym9hcmRDb250cm9sbGVyIGFzIGMgfTtcbiIsIi8qIVxuICogKEMpIElvbmljIGh0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20gLSBNSVQgTGljZW5zZVxuICovXG5jb25zdCBzcGlubmVycyA9IHtcbiAgYnViYmxlczoge1xuICAgIGR1cjogMTAwMCxcbiAgICBjaXJjbGVzOiA5LFxuICAgIGZuOiAoZHVyLCBpbmRleCwgdG90YWwpID0+IHtcbiAgICAgIGNvbnN0IGFuaW1hdGlvbkRlbGF5ID0gYCR7KGR1ciAqIGluZGV4KSAvIHRvdGFsIC0gZHVyfW1zYDtcbiAgICAgIGNvbnN0IGFuZ2xlID0gKDIgKiBNYXRoLlBJICogaW5kZXgpIC8gdG90YWw7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByOiA1LFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHRvcDogYCR7MzIgKiBNYXRoLnNpbihhbmdsZSl9JWAsXG4gICAgICAgICAgbGVmdDogYCR7MzIgKiBNYXRoLmNvcyhhbmdsZSl9JWAsXG4gICAgICAgICAgJ2FuaW1hdGlvbi1kZWxheSc6IGFuaW1hdGlvbkRlbGF5LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9LFxuICB9LFxuICBjaXJjbGVzOiB7XG4gICAgZHVyOiAxMDAwLFxuICAgIGNpcmNsZXM6IDgsXG4gICAgZm46IChkdXIsIGluZGV4LCB0b3RhbCkgPT4ge1xuICAgICAgY29uc3Qgc3RlcCA9IGluZGV4IC8gdG90YWw7XG4gICAgICBjb25zdCBhbmltYXRpb25EZWxheSA9IGAke2R1ciAqIHN0ZXAgLSBkdXJ9bXNgO1xuICAgICAgY29uc3QgYW5nbGUgPSAyICogTWF0aC5QSSAqIHN0ZXA7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByOiA1LFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHRvcDogYCR7MzIgKiBNYXRoLnNpbihhbmdsZSl9JWAsXG4gICAgICAgICAgbGVmdDogYCR7MzIgKiBNYXRoLmNvcyhhbmdsZSl9JWAsXG4gICAgICAgICAgJ2FuaW1hdGlvbi1kZWxheSc6IGFuaW1hdGlvbkRlbGF5LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9LFxuICB9LFxuICBjaXJjdWxhcjoge1xuICAgIGR1cjogMTQwMCxcbiAgICBlbG1EdXJhdGlvbjogdHJ1ZSxcbiAgICBjaXJjbGVzOiAxLFxuICAgIGZuOiAoKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByOiAyMCxcbiAgICAgICAgY3g6IDQ4LFxuICAgICAgICBjeTogNDgsXG4gICAgICAgIGZpbGw6ICdub25lJyxcbiAgICAgICAgdmlld0JveDogJzI0IDI0IDQ4IDQ4JyxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDAsMCknLFxuICAgICAgICBzdHlsZToge30sXG4gICAgICB9O1xuICAgIH0sXG4gIH0sXG4gIGNyZXNjZW50OiB7XG4gICAgZHVyOiA3NTAsXG4gICAgY2lyY2xlczogMSxcbiAgICBmbjogKCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcjogMjYsXG4gICAgICAgIHN0eWxlOiB7fSxcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbiAgZG90czoge1xuICAgIGR1cjogNzUwLFxuICAgIGNpcmNsZXM6IDMsXG4gICAgZm46IChfLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgYW5pbWF0aW9uRGVsYXkgPSAtKDExMCAqIGluZGV4KSArICdtcyc7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByOiA2LFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGxlZnQ6IGAkezMyIC0gMzIgKiBpbmRleH0lYCxcbiAgICAgICAgICAnYW5pbWF0aW9uLWRlbGF5JzogYW5pbWF0aW9uRGVsYXksXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0sXG4gIH0sXG4gIGxpbmVzOiB7XG4gICAgZHVyOiAxMDAwLFxuICAgIGxpbmVzOiA4LFxuICAgIGZuOiAoZHVyLCBpbmRleCwgdG90YWwpID0+IHtcbiAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IGByb3RhdGUoJHsoMzYwIC8gdG90YWwpICogaW5kZXggKyAoaW5kZXggPCB0b3RhbCAvIDIgPyAxODAgOiAtMTgwKX1kZWcpYDtcbiAgICAgIGNvbnN0IGFuaW1hdGlvbkRlbGF5ID0gYCR7KGR1ciAqIGluZGV4KSAvIHRvdGFsIC0gZHVyfW1zYDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHkxOiAxNCxcbiAgICAgICAgeTI6IDI2LFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgICAgICAgICdhbmltYXRpb24tZGVsYXknOiBhbmltYXRpb25EZWxheSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbiAgJ2xpbmVzLXNtYWxsJzoge1xuICAgIGR1cjogMTAwMCxcbiAgICBsaW5lczogOCxcbiAgICBmbjogKGR1ciwgaW5kZXgsIHRvdGFsKSA9PiB7XG4gICAgICBjb25zdCB0cmFuc2Zvcm0gPSBgcm90YXRlKCR7KDM2MCAvIHRvdGFsKSAqIGluZGV4ICsgKGluZGV4IDwgdG90YWwgLyAyID8gMTgwIDogLTE4MCl9ZGVnKWA7XG4gICAgICBjb25zdCBhbmltYXRpb25EZWxheSA9IGAkeyhkdXIgKiBpbmRleCkgLyB0b3RhbCAtIGR1cn1tc2A7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB5MTogMTIsXG4gICAgICAgIHkyOiAyMCxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgICAgICAnYW5pbWF0aW9uLWRlbGF5JzogYW5pbWF0aW9uRGVsYXksXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0sXG4gIH0sXG4gICdsaW5lcy1zaGFycCc6IHtcbiAgICBkdXI6IDEwMDAsXG4gICAgbGluZXM6IDEyLFxuICAgIGZuOiAoZHVyLCBpbmRleCwgdG90YWwpID0+IHtcbiAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IGByb3RhdGUoJHszMCAqIGluZGV4ICsgKGluZGV4IDwgNiA/IDE4MCA6IC0xODApfWRlZylgO1xuICAgICAgY29uc3QgYW5pbWF0aW9uRGVsYXkgPSBgJHsoZHVyICogaW5kZXgpIC8gdG90YWwgLSBkdXJ9bXNgO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgeTE6IDE3LFxuICAgICAgICB5MjogMjksXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgICAgICAgJ2FuaW1hdGlvbi1kZWxheSc6IGFuaW1hdGlvbkRlbGF5LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9LFxuICB9LFxuICAnbGluZXMtc2hhcnAtc21hbGwnOiB7XG4gICAgZHVyOiAxMDAwLFxuICAgIGxpbmVzOiAxMixcbiAgICBmbjogKGR1ciwgaW5kZXgsIHRvdGFsKSA9PiB7XG4gICAgICBjb25zdCB0cmFuc2Zvcm0gPSBgcm90YXRlKCR7MzAgKiBpbmRleCArIChpbmRleCA8IDYgPyAxODAgOiAtMTgwKX1kZWcpYDtcbiAgICAgIGNvbnN0IGFuaW1hdGlvbkRlbGF5ID0gYCR7KGR1ciAqIGluZGV4KSAvIHRvdGFsIC0gZHVyfW1zYDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHkxOiAxMixcbiAgICAgICAgeTI6IDIwLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgICAgICAgICdhbmltYXRpb24tZGVsYXknOiBhbmltYXRpb25EZWxheSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbn07XG5jb25zdCBTUElOTkVSUyA9IHNwaW5uZXJzO1xuXG5leHBvcnQgeyBTUElOTkVSUyBhcyBTIH07XG4iLCIvKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgbCBhcyBjbGFtcCB9IGZyb20gJy4vaGVscGVycy1mNTg2ZGIxYy5qcyc7XG5pbXBvcnQgeyBpIGFzIGlzUlRMIH0gZnJvbSAnLi9kaXItZThiNzY3YTguanMnO1xuaW1wb3J0IHsgY3JlYXRlR2VzdHVyZSB9IGZyb20gJy4vaW5kZXgtNDIyYjZlODMuanMnO1xuaW1wb3J0ICcuL2dlc3R1cmUtY29udHJvbGxlci0xNzA2MGI3Yy5qcyc7XG5cbmNvbnN0IGNyZWF0ZVN3aXBlQmFja0dlc3R1cmUgPSAoZWwsIGNhblN0YXJ0SGFuZGxlciwgb25TdGFydEhhbmRsZXIsIG9uTW92ZUhhbmRsZXIsIG9uRW5kSGFuZGxlcikgPT4ge1xuICBjb25zdCB3aW4gPSBlbC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICBsZXQgcnRsID0gaXNSVEwoZWwpO1xuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIGEgZ2VzdHVyZSBpcyBuZWFyIHRoZSBlZGdlXG4gICAqIG9mIHRoZSBzY3JlZW4uIElmIHRydWUsIHRoZW4gdGhlIHN3aXBlXG4gICAqIHRvIGdvIGJhY2sgZ2VzdHVyZSBzaG91bGQgcHJvY2VlZC5cbiAgICovXG4gIGNvbnN0IGlzQXRFZGdlID0gKGRldGFpbCkgPT4ge1xuICAgIGNvbnN0IHRocmVzaG9sZCA9IDUwO1xuICAgIGNvbnN0IHsgc3RhcnRYIH0gPSBkZXRhaWw7XG4gICAgaWYgKHJ0bCkge1xuICAgICAgcmV0dXJuIHN0YXJ0WCA+PSB3aW4uaW5uZXJXaWR0aCAtIHRocmVzaG9sZDtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXJ0WCA8PSB0aHJlc2hvbGQ7XG4gIH07XG4gIGNvbnN0IGdldERlbHRhWCA9IChkZXRhaWwpID0+IHtcbiAgICByZXR1cm4gcnRsID8gLWRldGFpbC5kZWx0YVggOiBkZXRhaWwuZGVsdGFYO1xuICB9O1xuICBjb25zdCBnZXRWZWxvY2l0eVggPSAoZGV0YWlsKSA9PiB7XG4gICAgcmV0dXJuIHJ0bCA/IC1kZXRhaWwudmVsb2NpdHlYIDogZGV0YWlsLnZlbG9jaXR5WDtcbiAgfTtcbiAgY29uc3QgY2FuU3RhcnQgPSAoZGV0YWlsKSA9PiB7XG4gICAgLyoqXG4gICAgICogVGhlIHVzZXIncyBsb2NhbGUgY2FuIGNoYW5nZSBtaWQtc2Vzc2lvbixcbiAgICAgKiBzbyB3ZSBuZWVkIHRvIGNoZWNrIHRleHQgZGlyZWN0aW9uIGF0XG4gICAgICogdGhlIGJlZ2lubmluZyBvZiBldmVyeSBnZXN0dXJlLlxuICAgICAqL1xuICAgIHJ0bCA9IGlzUlRMKGVsKTtcbiAgICByZXR1cm4gaXNBdEVkZ2UoZGV0YWlsKSAmJiBjYW5TdGFydEhhbmRsZXIoKTtcbiAgfTtcbiAgY29uc3Qgb25Nb3ZlID0gKGRldGFpbCkgPT4ge1xuICAgIC8vIHNldCB0aGUgdHJhbnNpdGlvbiBhbmltYXRpb24ncyBwcm9ncmVzc1xuICAgIGNvbnN0IGRlbHRhID0gZ2V0RGVsdGFYKGRldGFpbCk7XG4gICAgY29uc3Qgc3RlcFZhbHVlID0gZGVsdGEgLyB3aW4uaW5uZXJXaWR0aDtcbiAgICBvbk1vdmVIYW5kbGVyKHN0ZXBWYWx1ZSk7XG4gIH07XG4gIGNvbnN0IG9uRW5kID0gKGRldGFpbCkgPT4ge1xuICAgIC8vIHRoZSBzd2lwZSBiYWNrIGdlc3R1cmUgaGFzIGVuZGVkXG4gICAgY29uc3QgZGVsdGEgPSBnZXREZWx0YVgoZGV0YWlsKTtcbiAgICBjb25zdCB3aWR0aCA9IHdpbi5pbm5lcldpZHRoO1xuICAgIGNvbnN0IHN0ZXBWYWx1ZSA9IGRlbHRhIC8gd2lkdGg7XG4gICAgY29uc3QgdmVsb2NpdHkgPSBnZXRWZWxvY2l0eVgoZGV0YWlsKTtcbiAgICBjb25zdCB6ID0gd2lkdGggLyAyLjA7XG4gICAgY29uc3Qgc2hvdWxkQ29tcGxldGUgPSB2ZWxvY2l0eSA+PSAwICYmICh2ZWxvY2l0eSA+IDAuMiB8fCBkZWx0YSA+IHopO1xuICAgIGNvbnN0IG1pc3NpbmcgPSBzaG91bGRDb21wbGV0ZSA/IDEgLSBzdGVwVmFsdWUgOiBzdGVwVmFsdWU7XG4gICAgY29uc3QgbWlzc2luZ0Rpc3RhbmNlID0gbWlzc2luZyAqIHdpZHRoO1xuICAgIGxldCByZWFsRHVyID0gMDtcbiAgICBpZiAobWlzc2luZ0Rpc3RhbmNlID4gNSkge1xuICAgICAgY29uc3QgZHVyID0gbWlzc2luZ0Rpc3RhbmNlIC8gTWF0aC5hYnModmVsb2NpdHkpO1xuICAgICAgcmVhbER1ciA9IE1hdGgubWluKGR1ciwgNTQwKTtcbiAgICB9XG4gICAgb25FbmRIYW5kbGVyKHNob3VsZENvbXBsZXRlLCBzdGVwVmFsdWUgPD0gMCA/IDAuMDEgOiBjbGFtcCgwLCBzdGVwVmFsdWUsIDAuOTk5OSksIHJlYWxEdXIpO1xuICB9O1xuICByZXR1cm4gY3JlYXRlR2VzdHVyZSh7XG4gICAgZWwsXG4gICAgZ2VzdHVyZU5hbWU6ICdnb2JhY2stc3dpcGUnLFxuICAgIGdlc3R1cmVQcmlvcml0eTogNDAsXG4gICAgdGhyZXNob2xkOiAxMCxcbiAgICBjYW5TdGFydCxcbiAgICBvblN0YXJ0OiBvblN0YXJ0SGFuZGxlcixcbiAgICBvbk1vdmUsXG4gICAgb25FbmQsXG4gIH0pO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlU3dpcGVCYWNrR2VzdHVyZSB9O1xuIiwiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbi8vIFRPRE8oRlctMjgzMik6IHR5cGVzXG5jb25zdCB3YXRjaEZvck9wdGlvbnMgPSAoY29udGFpbmVyRWwsIHRhZ05hbWUsIG9uQ2hhbmdlKSA9PiB7XG4gIGlmICh0eXBlb2YgTXV0YXRpb25PYnNlcnZlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgbXV0YXRpb24gPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25MaXN0KSA9PiB7XG4gICAgb25DaGFuZ2UoZ2V0U2VsZWN0ZWRPcHRpb24obXV0YXRpb25MaXN0LCB0YWdOYW1lKSk7XG4gIH0pO1xuICBtdXRhdGlvbi5vYnNlcnZlKGNvbnRhaW5lckVsLCB7XG4gICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgIHN1YnRyZWU6IHRydWUsXG4gIH0pO1xuICByZXR1cm4gbXV0YXRpb247XG59O1xuY29uc3QgZ2V0U2VsZWN0ZWRPcHRpb24gPSAobXV0YXRpb25MaXN0LCB0YWdOYW1lKSA9PiB7XG4gIGxldCBuZXdPcHRpb247XG4gIG11dGF0aW9uTGlzdC5mb3JFYWNoKChtdXQpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3ByZWZlci1mb3Itb2ZcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG11dC5hZGRlZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBuZXdPcHRpb24gPSBmaW5kQ2hlY2tlZE9wdGlvbihtdXQuYWRkZWROb2Rlc1tpXSwgdGFnTmFtZSkgfHwgbmV3T3B0aW9uO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBuZXdPcHRpb247XG59O1xuY29uc3QgZmluZENoZWNrZWRPcHRpb24gPSAoZWwsIHRhZ05hbWUpID0+IHtcbiAgaWYgKGVsLm5vZGVUeXBlICE9PSAxKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBjb25zdCBvcHRpb25zID0gZWwudGFnTmFtZSA9PT0gdGFnTmFtZS50b1VwcGVyQ2FzZSgpID8gW2VsXSA6IEFycmF5LmZyb20oZWwucXVlcnlTZWxlY3RvckFsbCh0YWdOYW1lKSk7XG4gIHJldHVybiBvcHRpb25zLmZpbmQoKG8pID0+IG8udmFsdWUgPT09IGVsLnZhbHVlKTtcbn07XG5cbmV4cG9ydCB7IHdhdGNoRm9yT3B0aW9ucyBhcyB3IH07XG4iXSwibmFtZXMiOlsidyIsIndyaXRlVGFzayIsImgiLCJoYXB0aWNTZWxlY3Rpb25FbmQiLCJhIiwiaGFwdGljU2VsZWN0aW9uU3RhcnQiLCJiIiwiaGFwdGljU2VsZWN0aW9uQ2hhbmdlZCIsImNyZWF0ZUdlc3R1cmUiLCJjcmVhdGVCdXR0b25BY3RpdmVHZXN0dXJlIiwiZWwiLCJpc0J1dHRvbiIsImN1cnJlbnRUb3VjaGVkQnV0dG9uIiwiaW5pdGlhbFRvdWNoZWRCdXR0b24iLCJhY3RpdmF0ZUJ1dHRvbkF0UG9pbnQiLCJ4IiwieSIsImhhcHRpY0ZlZWRiYWNrRm4iLCJkb2N1bWVudCIsInRhcmdldCIsImVsZW1lbnRGcm9tUG9pbnQiLCJjbGVhckFjdGl2ZUJ1dHRvbiIsInNldEFjdGl2ZUJ1dHRvbiIsImJ1dHRvbiIsImJ1dHRvblRvTW9kaWZ5IiwiY2xhc3NMaXN0IiwiYWRkIiwiZGlzcGF0Y2hDbGljayIsInJlbW92ZSIsImNsaWNrIiwidW5kZWZpbmVkIiwiZ2VzdHVyZU5hbWUiLCJ0aHJlc2hvbGQiLCJvblN0YXJ0IiwiZXYiLCJjdXJyZW50WCIsImN1cnJlbnRZIiwib25Nb3ZlIiwib25FbmQiLCJjIiwiaXNSVEwiLCJob3N0RWwiLCJkaXIiLCJ0b0xvd2VyQ2FzZSIsImkiLCJJT05fRk9DVVNFRCIsIklPTl9GT0NVU0FCTEUiLCJGT0NVU19LRVlTIiwic3RhcnRGb2N1c1Zpc2libGUiLCJyb290RWwiLCJjdXJyZW50Rm9jdXMiLCJrZXlib2FyZE1vZGUiLCJyZWYiLCJzaGFkb3dSb290Iiwicm9vdCIsImJvZHkiLCJzZXRGb2N1cyIsImVsZW1lbnRzIiwiZm9yRWFjaCIsInBvaW50ZXJEb3duIiwib25LZXlkb3duIiwiaW5jbHVkZXMiLCJrZXkiLCJvbkZvY3VzaW4iLCJjb21wb3NlZFBhdGgiLCJ0b0ZvY3VzIiwiZmlsdGVyIiwiY29udGFpbnMiLCJvbkZvY3Vzb3V0IiwiYWN0aXZlRWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwiZGVzdHJveSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJIYXB0aWNFbmdpbmUiLCJnZXRFbmdpbmUiLCJfYSIsIndpbiIsIndpbmRvdyIsIlRhcHRpY0VuZ2luZSIsIkNhcGFjaXRvciIsImlzUGx1Z2luQXZhaWxhYmxlIiwiUGx1Z2lucyIsIkhhcHRpY3MiLCJhdmFpbGFibGUiLCJlbmdpbmUiLCJnZXRQbGF0Zm9ybSIsIm5hdmlnYXRvciIsInZpYnJhdGUiLCJpc0NvcmRvdmEiLCJpc0NhcGFjaXRvciIsImltcGFjdCIsIm9wdGlvbnMiLCJzdHlsZSIsInRvVXBwZXJDYXNlIiwibm90aWZpY2F0aW9uIiwic2VsZWN0aW9uIiwic2VsZWN0aW9uU3RhcnQiLCJnZXN0dXJlU2VsZWN0aW9uU3RhcnQiLCJzZWxlY3Rpb25DaGFuZ2VkIiwiZ2VzdHVyZVNlbGVjdGlvbkNoYW5nZWQiLCJzZWxlY3Rpb25FbmQiLCJnZXN0dXJlU2VsZWN0aW9uRW5kIiwiaGFwdGljQXZhaWxhYmxlIiwiaGFwdGljU2VsZWN0aW9uIiwiaGFwdGljSW1wYWN0IiwiZCIsImFycm93QmFja1NoYXJwIiwiYXJyb3dEb3duIiwiY2FyZXRCYWNrU2hhcnAiLCJjYXJldERvd25TaGFycCIsImNhcmV0VXBTaGFycCIsImNoZWNrbWFya091dGxpbmUiLCJjaGV2cm9uQmFjayIsImNoZXZyb25Eb3duIiwiY2hldnJvbkV4cGFuZCIsImNoZXZyb25Gb3J3YXJkIiwiY2hldnJvbkZvcndhcmRPdXRsaW5lIiwiY2xvc2UiLCJjbG9zZUNpcmNsZSIsImNsb3NlU2hhcnAiLCJlbGxpcHNlT3V0bGluZSIsImVsbGlwc2lzSG9yaXpvbnRhbCIsIm1lbnVPdXRsaW5lIiwibWVudVNoYXJwIiwicmVtb3ZlT3V0bGluZSIsInJlb3JkZXJUaHJlZU91dGxpbmUiLCJyZW9yZGVyVHdvU2hhcnAiLCJzZWFyY2hPdXRsaW5lIiwic2VhcmNoU2hhcnAiLCJlIiwiZiIsImciLCJqIiwiayIsImwiLCJtIiwibiIsIm8iLCJwIiwicSIsInIiLCJzIiwidCIsInUiLCJ2IiwiY29tcG9uZW50T25SZWFkeSIsInByaW50UmVxdWlyZWRFbGVtZW50RXJyb3IiLCJJT05fQ09OVEVOVF9UQUdfTkFNRSIsIklPTl9DT05URU5UX0VMRU1FTlRfU0VMRUNUT1IiLCJJT05fQ09OVEVOVF9DTEFTU19TRUxFQ1RPUiIsIklPTl9DT05URU5UX1NFTEVDVE9SIiwiaXNJb25Db250ZW50IiwidGFnTmFtZSIsImdldFNjcm9sbEVsZW1lbnQiLCJfcmVmIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJQcm9taXNlIiwicmVzb2x2ZSIsIl94IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJmaW5kSW9uQ29udGVudCIsImN1c3RvbUNvbnRlbnRIb3N0IiwicXVlcnlTZWxlY3RvciIsImZpbmRDbG9zZXN0SW9uQ29udGVudCIsImNsb3Nlc3QiLCJzY3JvbGxUb1RvcCIsImR1cmF0aW9uTXMiLCJjb250ZW50Iiwic2Nyb2xsVG8iLCJ0b3AiLCJsZWZ0IiwiYmVoYXZpb3IiLCJzY3JvbGxCeVBvaW50Iiwic2Nyb2xsQnkiLCJwcmludElvbkNvbnRlbnRFcnJvck1zZyIsImRpc2FibGVDb250ZW50U2Nyb2xsWSIsImNvbnRlbnRFbCIsImlvbkNvbnRlbnQiLCJpbml0aWFsU2Nyb2xsWSIsInNjcm9sbFkiLCJzZXRQcm9wZXJ0eSIsInJlc2V0Q29udGVudFNjcm9sbFkiLCJyZW1vdmVQcm9wZXJ0eSIsIkkiLCJLZXlib2FyZFJlc2l6ZSIsIktleWJvYXJkIiwiZ2V0UmVzaXplTW9kZSIsImNhdGNoIiwiY29kZSIsIksiLCJLRVlCT0FSRF9ESURfT1BFTiIsIktFWUJPQVJEX0RJRF9DTE9TRSIsIktFWUJPQVJEX1RIUkVTSE9MRCIsInByZXZpb3VzVmlzdWFsVmlld3BvcnQiLCJjdXJyZW50VmlzdWFsVmlld3BvcnQiLCJrZXlib2FyZE9wZW4iLCJyZXNldEtleWJvYXJkQXNzaXN0Iiwic3RhcnRLZXlib2FyZEFzc2lzdCIsIm5hdGl2ZUVuZ2luZSIsInN0YXJ0TmF0aXZlTGlzdGVuZXJzIiwidmlzdWFsVmlld3BvcnQiLCJjb3B5VmlzdWFsVmlld3BvcnQiLCJvbnJlc2l6ZSIsInRyYWNrVmlld3BvcnRDaGFuZ2VzIiwia2V5Ym9hcmREaWRPcGVuIiwia2V5Ym9hcmREaWRSZXNpemUiLCJzZXRLZXlib2FyZE9wZW4iLCJrZXlib2FyZERpZENsb3NlIiwic2V0S2V5Ym9hcmRDbG9zZSIsImZpcmVLZXlib2FyZE9wZW5FdmVudCIsImZpcmVLZXlib2FyZENsb3NlRXZlbnQiLCJzY2FsZWRIZWlnaHREaWZmZXJlbmNlIiwiaGVpZ2h0Iiwic2NhbGUiLCJ3aWR0aCIsImlubmVySGVpZ2h0IiwibmF0aXZlRXYiLCJrZXlib2FyZEhlaWdodCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiZGlzcGF0Y2hFdmVudCIsIk9iamVjdCIsImFzc2lnbiIsIk1hdGgiLCJyb3VuZCIsIm9mZnNldFRvcCIsIm9mZnNldExlZnQiLCJwYWdlVG9wIiwicGFnZUxlZnQiLCJkb2MiLCJnZXRSZXNpemVDb250YWluZXIiLCJyZXNpemVNb2RlIiwiTm9uZSIsImlvbkFwcCIsImdldFJlc2l6ZUNvbnRhaW5lckhlaWdodCIsImNvbnRhaW5lckVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJjcmVhdGVLZXlib2FyZENvbnRyb2xsZXIiLCJrZXlib2FyZENoYW5nZUNhbGxiYWNrIiwia2V5Ym9hcmRXaWxsU2hvd0hhbmRsZXIiLCJrZXlib2FyZFdpbGxIaWRlSGFuZGxlciIsImtleWJvYXJkVmlzaWJsZSIsImluaXRpYWxSZXNpemVDb250YWluZXJIZWlnaHQiLCJpbml0IiwiX3JlZjIiLCJyZXNpemVPcHRpb25zIiwibW9kZSIsImZpcmVDaGFuZ2VDYWxsYmFjayIsInN0YXRlIiwiY3JlYXRlUmVzaXplUHJvbWlzZUlmTmVlZGVkIiwiY2FsbGJhY2siLCJybyIsImRpc2Nvbm5lY3QiLCJSZXNpemVPYnNlcnZlciIsIm9ic2VydmUiLCJpc0tleWJvYXJkVmlzaWJsZSIsInNwaW5uZXJzIiwiYnViYmxlcyIsImR1ciIsImNpcmNsZXMiLCJmbiIsImluZGV4IiwidG90YWwiLCJhbmltYXRpb25EZWxheSIsImFuZ2xlIiwiUEkiLCJzaW4iLCJjb3MiLCJzdGVwIiwiY2lyY3VsYXIiLCJlbG1EdXJhdGlvbiIsImN4IiwiY3kiLCJmaWxsIiwidmlld0JveCIsInRyYW5zZm9ybSIsImNyZXNjZW50IiwiZG90cyIsIl8iLCJsaW5lcyIsInkxIiwieTIiLCJTUElOTkVSUyIsIlMiLCJjbGFtcCIsImNyZWF0ZVN3aXBlQmFja0dlc3R1cmUiLCJjYW5TdGFydEhhbmRsZXIiLCJvblN0YXJ0SGFuZGxlciIsIm9uTW92ZUhhbmRsZXIiLCJvbkVuZEhhbmRsZXIiLCJvd25lckRvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJydGwiLCJpc0F0RWRnZSIsInN0YXJ0WCIsImlubmVyV2lkdGgiLCJnZXREZWx0YVgiLCJkZWx0YVgiLCJnZXRWZWxvY2l0eVgiLCJ2ZWxvY2l0eVgiLCJjYW5TdGFydCIsImRlbHRhIiwic3RlcFZhbHVlIiwidmVsb2NpdHkiLCJ6Iiwic2hvdWxkQ29tcGxldGUiLCJtaXNzaW5nIiwibWlzc2luZ0Rpc3RhbmNlIiwicmVhbER1ciIsImFicyIsIm1pbiIsImdlc3R1cmVQcmlvcml0eSIsIndhdGNoRm9yT3B0aW9ucyIsImNvbnRhaW5lckVsIiwib25DaGFuZ2UiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb24iLCJtdXRhdGlvbkxpc3QiLCJnZXRTZWxlY3RlZE9wdGlvbiIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJuZXdPcHRpb24iLCJtdXQiLCJhZGRlZE5vZGVzIiwibGVuZ3RoIiwiZmluZENoZWNrZWRPcHRpb24iLCJub2RlVHlwZSIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmaW5kIiwidmFsdWUiXSwic291cmNlUm9vdCI6IndlYnBhY2s6Ly8vIiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzAsMSwyLDMsNCw1LDYsNyw4LDksMTAsMTFdfQ==