"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_support_support_module_ts"],{

/***/ 75262:
/*!*********************************************************!*\
  !*** ./src/app/pages/support/support-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SupportPageRoutingModule: () => (/* binding */ SupportPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _support__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./support */ 38097);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '',
  component: _support__WEBPACK_IMPORTED_MODULE_0__.SupportPage
}];
class SupportPageRoutingModule {}
SupportPageRoutingModule.ɵfac = function SupportPageRoutingModule_Factory(t) {
  return new (t || SupportPageRoutingModule)();
};
SupportPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: SupportPageRoutingModule
});
SupportPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SupportPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 86527:
/*!*************************************************!*\
  !*** ./src/app/pages/support/support.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SupportModule: () => (/* binding */ SupportModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 64210);
/* harmony import */ var _support__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./support */ 38097);
/* harmony import */ var _support_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./support-routing.module */ 75262);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);






class SupportModule {}
SupportModule.ɵfac = function SupportModule_Factory(t) {
  return new (t || SupportModule)();
};
SupportModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: SupportModule
});
SupportModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _support_routing_module__WEBPACK_IMPORTED_MODULE_1__.SupportPageRoutingModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SupportModule, {
    declarations: [_support__WEBPACK_IMPORTED_MODULE_0__.SupportPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _support_routing_module__WEBPACK_IMPORTED_MODULE_1__.SupportPageRoutingModule]
  });
})();

/***/ }),

/***/ 38097:
/*!******************************************!*\
  !*** ./src/app/pages/support/support.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SupportPage: () => (/* binding */ SupportPage)
/* harmony export */ });
/* harmony import */ var C_Users_Blessing_Kunaka_Desktop_mining_expo_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 64210);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 28849);





class SupportPage {
  constructor(alertCtrl, toastCtrl) {
    this.alertCtrl = alertCtrl;
    this.toastCtrl = toastCtrl;
    this.submitted = false;
  }
  ionViewDidEnter() {
    var _this = this;
    return (0,C_Users_Blessing_Kunaka_Desktop_mining_expo_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastCtrl.create({
        message: 'This does not actually send a support request.',
        duration: 3000
      });
      yield toast.present();
    })();
  }
  submit(form) {
    var _this2 = this;
    return (0,C_Users_Blessing_Kunaka_Desktop_mining_expo_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.submitted = true;
      if (form.valid) {
        _this2.supportMessage = '';
        _this2.submitted = false;
        const toast = yield _this2.toastCtrl.create({
          message: 'Your support request has been sent.',
          duration: 3000
        });
        yield toast.present();
      }
    })();
  }
}
SupportPage.ɵfac = function SupportPage_Factory(t) {
  return new (t || SupportPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController));
};
SupportPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SupportPage,
  selectors: [["page-support"]],
  decls: 17,
  vars: 1,
  consts: [["slot", "start"], [1, "support-logo"], ["src", "assets/img/appicon.svg", "alt", "Ionic Logo"], [1, "support-form"], ["novalidate", "", 3, "ngSubmit"], ["submitForm", "ngForm"], ["label", "Enter your support message below", "labelPlacement", "stacked", "fill", "solid", "name", "supportQuestion", "rows", "6", "errorText", "Support message is required", "required", "", 3, "ngModel", "ngModelChange"], ["supportQuestion", "ngModel"], [1, "ion-padding"], ["expand", "block", "type", "submit"]],
  template: function SupportPage_Template(rf, ctx) {
    if (rf & 1) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-menu-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Support");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content")(7, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3)(10, "form", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SupportPage_Template_form_ngSubmit_10_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.submit(_r0));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-textarea", 6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SupportPage_Template_ion_textarea_ngModelChange_12_listener($event) {
        return ctx.supportMessage = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8)(15, "ion-button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.supportMessage);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonTextarea, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.TextValueAccessor],
  styles: [".support-logo[_ngcontent-%COMP%] {\n  min-height: 200px;\n  padding: 20px 0;\n  text-align: center;\n}\n\n.support-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 150px;\n}\n\n.list[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.support-form[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc3VwcG9ydC9zdXBwb3J0LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi8uLi9CbGVzc2luZyUyMEt1bmFrYS9EZXNrdG9wL21pbmluZ19leHBvL21pbmluZy1leHBvL3NyYy9hcHAvcGFnZXMvc3VwcG9ydC9zdXBwb3J0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUVBLGVBQUE7RUFFQSxrQkFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7QUNERjs7QURJQTtFQUNFLGdCQUFBO0FDREY7O0FESUE7RUFDRSxhQUFBO0FDREYiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VwcG9ydC1sb2dvIHtcclxuICBtaW4taGVpZ2h0OiAyMDBweDtcclxuXHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG5cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdXBwb3J0LWxvZ28gaW1nIHtcclxuICBtYXgtd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLnN1cHBvcnQtZm9ybSB7XHJcbiAgcGFkZGluZzogMTZweDtcclxufVxyXG4iLCIuc3VwcG9ydC1sb2dvIHtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3VwcG9ydC1sb2dvIGltZyB7XG4gIG1heC13aWR0aDogMTUwcHg7XG59XG5cbi5saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnN1cHBvcnQtZm9ybSB7XG4gIHBhZGRpbmc6IDE2cHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ })

}]);
//# sourceMappingURL=src_app_pages_support_support_module_ts.js.map