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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF9wYWdlc19zdXBwb3J0X3N1cHBvcnRfbW9kdWxlX3RzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDdUQ7QUFFZjs7O0FBRXhDLE1BQU1FLE1BQU0sR0FBVyxDQUNyQjtFQUNFQyxJQUFJLEVBQUUsRUFBRTtFQUNSQyxTQUFTLEVBQUVILGlEQUFXQTtDQUN2QixDQUNGO0FBRUQsTUFJYUksd0JBQXdCO0FBQXhCQSx3QkFBd0I7bUJBQXhCQSx3QkFBd0I7QUFBQTtBQUF4QkEsd0JBQXdCO1FBQXhCQTtBQUF3QjtBQUF4QkEsd0JBQXdCO1lBSHpCTCx5REFBWSxDQUFDTSxRQUFRLENBQUNKLE1BQU0sQ0FBQyxFQUM3QkYseURBQVk7QUFBQTtBQUVhOztzSEFBeEJLLHdCQUF3QjtJQUFBRSxPQUFBLEdBQUFDLHlEQUFBO0lBQUFDLE9BQUEsR0FGekJULHlEQUFZO0VBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNidUI7QUFDRjtBQUNBO0FBQ0w7QUFDNEI7O0FBRXBFLE1BV2FhLGFBQWE7QUFBYkEsYUFBYTttQkFBYkEsYUFBYTtBQUFBO0FBQWJBLGFBQWE7UUFBYkE7QUFBYTtBQUFiQSxhQUFhO1lBVHRCSCx5REFBWSxFQUNaQyx1REFBVyxFQUNYQyx1REFBVyxFQUNYUCw2RUFBd0I7QUFBQTtBQU1GOztzSEFBYlEsYUFBYTtJQUFBQyxZQUFBLEdBSHRCYixpREFBVztJQUFBTSxPQUFBLEdBTlhHLHlEQUFZLEVBQ1pDLHVEQUFXLEVBQ1hDLHVEQUFXLEVBQ1hQLDZFQUF3QjtFQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUc0M7Ozs7QUFHbEUsTUFLYUosV0FBVztFQUl0QmdCLFlBQ1NDLFNBQTBCLEVBQzFCQyxTQUEwQjtJQUQxQixLQUFBRCxTQUFTLEdBQVRBLFNBQVM7SUFDVCxLQUFBQyxTQUFTLEdBQVRBLFNBQVM7SUFMbEIsS0FBQUMsU0FBUyxHQUFHLEtBQUs7RUFNYjtFQUVFQyxlQUFlQSxDQUFBO0lBQUEsSUFBQUMsS0FBQTtJQUFBLE9BQUFDLDhKQUFBO01BQ25CLE1BQU1DLEtBQUssU0FBU0YsS0FBSSxDQUFDSCxTQUFTLENBQUNNLE1BQU0sQ0FBQztRQUN4Q0MsT0FBTyxFQUFFLGdEQUFnRDtRQUN6REMsUUFBUSxFQUFFO09BQ1gsQ0FBQztNQUNGLE1BQU1ILEtBQUssQ0FBQ0ksT0FBTyxFQUFFO0lBQUM7RUFDeEI7RUFFTUMsTUFBTUEsQ0FBQ0MsSUFBWTtJQUFBLElBQUFDLE1BQUE7SUFBQSxPQUFBUiw4SkFBQTtNQUN2QlEsTUFBSSxDQUFDWCxTQUFTLEdBQUcsSUFBSTtNQUVyQixJQUFJVSxJQUFJLENBQUNFLEtBQUssRUFBRTtRQUNkRCxNQUFJLENBQUNFLGNBQWMsR0FBRyxFQUFFO1FBQ3hCRixNQUFJLENBQUNYLFNBQVMsR0FBRyxLQUFLO1FBRXRCLE1BQU1JLEtBQUssU0FBU08sTUFBSSxDQUFDWixTQUFTLENBQUNNLE1BQU0sQ0FBQztVQUN4Q0MsT0FBTyxFQUFFLHFDQUFxQztVQUM5Q0MsUUFBUSxFQUFFO1NBQ1gsQ0FBQztRQUNGLE1BQU1ILEtBQUssQ0FBQ0ksT0FBTyxFQUFFOztJQUN0QjtFQUNIOztBQTlCVzNCLFdBQVc7bUJBQVhBLFdBQVcsRUFBQWlDLCtEQUFBLENBQUExQiwyREFBQSxHQUFBMEIsK0RBQUEsQ0FBQTFCLDJEQUFBO0FBQUE7QUFBWFAsV0FBVztRQUFYQSxXQUFXO0VBQUFtQyxTQUFBO0VBQUFDLEtBQUE7RUFBQUMsSUFBQTtFQUFBQyxNQUFBO0VBQUFDLFFBQUEsV0FBQUMscUJBQUFDLEVBQUEsRUFBQUMsR0FBQTtJQUFBLElBQUFELEVBQUE7O01DWHhCUiw0REFBQSxpQkFBWTtNQUdOQSx1REFBQSxzQkFBbUM7TUFDckNBLDBEQUFBLEVBQWM7TUFDZEEsNERBQUEsZ0JBQVc7TUFBQUEsb0RBQUEsY0FBTztNQUFBQSwwREFBQSxFQUFZO01BS2xDQSw0REFBQSxrQkFBYTtNQUVUQSx1REFBQSxhQUFtRDtNQUNyREEsMERBQUEsRUFBTTtNQUVOQSw0REFBQSxhQUEwQjtNQUNjQSx3REFBQSxzQkFBQWUsK0NBQUE7UUFBQWYsMkRBQUEsQ0FBQWlCLEdBQUE7UUFBQSxNQUFBQyxHQUFBLEdBQUFsQix5REFBQTtRQUFBLE9BQVlBLHlEQUFBLENBQUFTLEdBQUEsQ0FBQWQsTUFBQSxDQUFBdUIsR0FBQSxDQUFrQjtNQUFBLEVBQUM7TUFDbkVsQiw0REFBQSwwQkFTVztNQUxUQSx3REFBQSwyQkFBQXFCLDREQUFBQyxNQUFBO1FBQUEsT0FBQWIsR0FBQSxDQUFBVixjQUFBLEdBQUF1QixNQUFBO01BQUEsRUFBNEI7TUFNOUJ0QiwwREFBQSxFQUFlO01BRWZBLDREQUFBLGNBQXlCO01BQ2tCQSxvREFBQSxjQUFNO01BQUFBLDBEQUFBLEVBQWE7OztNQVQ1REEsdURBQUEsSUFBNEI7TUFBNUJBLHdEQUFBLFlBQUFTLEdBQUEsQ0FBQVYsY0FBQSxDQUE0QiIsInNvdXJjZXMiOlsiLi9zcmMvYXBwL3BhZ2VzL3N1cHBvcnQvc3VwcG9ydC1yb3V0aW5nLm1vZHVsZS50cyIsIi4vc3JjL2FwcC9wYWdlcy9zdXBwb3J0L3N1cHBvcnQubW9kdWxlLnRzIiwiLi9zcmMvYXBwL3BhZ2VzL3N1cHBvcnQvc3VwcG9ydC50cyIsIi4vc3JjL2FwcC9wYWdlcy9zdXBwb3J0L3N1cHBvcnQuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBTdXBwb3J0UGFnZSB9IGZyb20gJy4vc3VwcG9ydCc7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAnJyxcclxuICAgIGNvbXBvbmVudDogU3VwcG9ydFBhZ2VcclxuICB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFN1cHBvcnRQYWdlUm91dGluZ01vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBTdXBwb3J0UGFnZSB9IGZyb20gJy4vc3VwcG9ydCc7XHJcbmltcG9ydCB7IFN1cHBvcnRQYWdlUm91dGluZ01vZHVsZSB9IGZyb20gJy4vc3VwcG9ydC1yb3V0aW5nLm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgSW9uaWNNb2R1bGUsXHJcbiAgICBTdXBwb3J0UGFnZVJvdXRpbmdNb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgU3VwcG9ydFBhZ2UsXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VwcG9ydE1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nRm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IEFsZXJ0Q29udHJvbGxlciwgVG9hc3RDb250cm9sbGVyIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGFnZS1zdXBwb3J0JyxcclxuICB0ZW1wbGF0ZVVybDogJ3N1cHBvcnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3VwcG9ydC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdXBwb3J0UGFnZSB7XHJcbiAgc3VibWl0dGVkID0gZmFsc2U7XHJcbiAgc3VwcG9ydE1lc3NhZ2U6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgYWxlcnRDdHJsOiBBbGVydENvbnRyb2xsZXIsXHJcbiAgICBwdWJsaWMgdG9hc3RDdHJsOiBUb2FzdENvbnRyb2xsZXJcclxuICApIHsgfVxyXG5cclxuICBhc3luYyBpb25WaWV3RGlkRW50ZXIoKSB7XHJcbiAgICBjb25zdCB0b2FzdCA9IGF3YWl0IHRoaXMudG9hc3RDdHJsLmNyZWF0ZSh7XHJcbiAgICAgIG1lc3NhZ2U6ICdUaGlzIGRvZXMgbm90IGFjdHVhbGx5IHNlbmQgYSBzdXBwb3J0IHJlcXVlc3QuJyxcclxuICAgICAgZHVyYXRpb246IDMwMDBcclxuICAgIH0pO1xyXG4gICAgYXdhaXQgdG9hc3QucHJlc2VudCgpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgc3VibWl0KGZvcm06IE5nRm9ybSkge1xyXG4gICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xyXG5cclxuICAgIGlmIChmb3JtLnZhbGlkKSB7XHJcbiAgICAgIHRoaXMuc3VwcG9ydE1lc3NhZ2UgPSAnJztcclxuICAgICAgdGhpcy5zdWJtaXR0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgIGNvbnN0IHRvYXN0ID0gYXdhaXQgdGhpcy50b2FzdEN0cmwuY3JlYXRlKHtcclxuICAgICAgICBtZXNzYWdlOiAnWW91ciBzdXBwb3J0IHJlcXVlc3QgaGFzIGJlZW4gc2VudC4nLFxyXG4gICAgICAgIGR1cmF0aW9uOiAzMDAwXHJcbiAgICAgIH0pO1xyXG4gICAgICBhd2FpdCB0b2FzdC5wcmVzZW50KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBJZiB0aGUgdXNlciBlbnRlcnMgdGV4dCBpbiB0aGUgc3VwcG9ydCBxdWVzdGlvbiBhbmQgdGhlbiBuYXZpZ2F0ZXNcclxuICAvLyB3aXRob3V0IHN1Ym1pdHRpbmcgZmlyc3QsIGFzayBpZiB0aGV5IG1lYW50IHRvIGxlYXZlIHRoZSBwYWdlXHJcbiAgLy8gYXN5bmMgaW9uVmlld0NhbkxlYXZlKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gIC8vICAgLy8gSWYgdGhlIHN1cHBvcnQgbWVzc2FnZSBpcyBlbXB0eSB3ZSBzaG91bGQganVzdCBuYXZpZ2F0ZVxyXG4gIC8vICAgaWYgKCF0aGlzLnN1cHBvcnRNZXNzYWdlIHx8IHRoaXMuc3VwcG9ydE1lc3NhZ2UudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xyXG4gIC8vICAgICByZXR1cm4gdHJ1ZTtcclxuICAvLyAgIH1cclxuXHJcbiAgLy8gICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6IGFueSwgcmVqZWN0OiBhbnkpID0+IHtcclxuICAvLyAgICAgY29uc3QgYWxlcnQgPSBhd2FpdCB0aGlzLmFsZXJ0Q3RybC5jcmVhdGUoe1xyXG4gIC8vICAgICAgIHRpdGxlOiAnTGVhdmUgdGhpcyBwYWdlPycsXHJcbiAgLy8gICAgICAgbWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBsZWF2ZSB0aGlzIHBhZ2U/IFlvdXIgc3VwcG9ydCBtZXNzYWdlIHdpbGwgbm90IGJlIHN1Ym1pdHRlZC4nLFxyXG4gIC8vICAgICAgIGJ1dHRvbnM6IFtcclxuICAvLyAgICAgICAgIHsgdGV4dDogJ1N0YXknLCBoYW5kbGVyOiByZWplY3QgfSxcclxuICAvLyAgICAgICAgIHsgdGV4dDogJ0xlYXZlJywgcm9sZTogJ2NhbmNlbCcsIGhhbmRsZXI6IHJlc29sdmUgfVxyXG4gIC8vICAgICAgIF1cclxuICAvLyAgICAgfSk7XHJcblxyXG4gIC8vICAgICBhd2FpdCBhbGVydC5wcmVzZW50KCk7XHJcbiAgLy8gICB9KTtcclxuICAvLyB9XHJcbn1cclxuIiwiPGlvbi1oZWFkZXI+XHJcbiAgPGlvbi10b29sYmFyPlxyXG4gICAgPGlvbi1idXR0b25zIHNsb3Q9XCJzdGFydFwiPlxyXG4gICAgICA8aW9uLW1lbnUtYnV0dG9uPjwvaW9uLW1lbnUtYnV0dG9uPlxyXG4gICAgPC9pb24tYnV0dG9ucz5cclxuICAgIDxpb24tdGl0bGU+U3VwcG9ydDwvaW9uLXRpdGxlPlxyXG4gIDwvaW9uLXRvb2xiYXI+XHJcblxyXG48L2lvbi1oZWFkZXI+XHJcblxyXG48aW9uLWNvbnRlbnQ+XHJcbiAgPGRpdiBjbGFzcz1cInN1cHBvcnQtbG9nb1wiPlxyXG4gICAgPGltZyBzcmM9XCJhc3NldHMvaW1nL2FwcGljb24uc3ZnXCIgYWx0PVwiSW9uaWMgTG9nb1wiPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2IGNsYXNzPVwic3VwcG9ydC1mb3JtXCI+XHJcbiAgICA8Zm9ybSAjc3VibWl0Rm9ybT1cIm5nRm9ybVwiIG5vdmFsaWRhdGUgKG5nU3VibWl0KT1cInN1Ym1pdChzdWJtaXRGb3JtKVwiPlxyXG4gICAgICA8aW9uLXRleHRhcmVhXHJcbiAgICAgICAgbGFiZWw9XCJFbnRlciB5b3VyIHN1cHBvcnQgbWVzc2FnZSBiZWxvd1wiXHJcbiAgICAgICAgbGFiZWxQbGFjZW1lbnQ9XCJzdGFja2VkXCJcclxuICAgICAgICBmaWxsPVwic29saWRcIlxyXG4gICAgICAgIFsobmdNb2RlbCldPVwic3VwcG9ydE1lc3NhZ2VcIlxyXG4gICAgICAgIG5hbWU9XCJzdXBwb3J0UXVlc3Rpb25cIlxyXG4gICAgICAgICNzdXBwb3J0UXVlc3Rpb249XCJuZ01vZGVsXCJcclxuICAgICAgICByb3dzPVwiNlwiXHJcbiAgICAgICAgZXJyb3JUZXh0PVwiU3VwcG9ydCBtZXNzYWdlIGlzIHJlcXVpcmVkXCJcclxuICAgICAgICByZXF1aXJlZD5cclxuICAgICAgPC9pb24tdGV4dGFyZWE+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaW9uLXBhZGRpbmdcIj5cclxuICAgICAgICA8aW9uLWJ1dHRvbiBleHBhbmQ9XCJibG9ja1wiIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2lvbi1idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG4gIDwvZGl2PlxyXG48L2lvbi1jb250ZW50PlxyXG4iXSwibmFtZXMiOlsiUm91dGVyTW9kdWxlIiwiU3VwcG9ydFBhZ2UiLCJyb3V0ZXMiLCJwYXRoIiwiY29tcG9uZW50IiwiU3VwcG9ydFBhZ2VSb3V0aW5nTW9kdWxlIiwiZm9yQ2hpbGQiLCJpbXBvcnRzIiwiaTEiLCJleHBvcnRzIiwiQ29tbW9uTW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJJb25pY01vZHVsZSIsIlN1cHBvcnRNb2R1bGUiLCJkZWNsYXJhdGlvbnMiLCJBbGVydENvbnRyb2xsZXIiLCJUb2FzdENvbnRyb2xsZXIiLCJjb25zdHJ1Y3RvciIsImFsZXJ0Q3RybCIsInRvYXN0Q3RybCIsInN1Ym1pdHRlZCIsImlvblZpZXdEaWRFbnRlciIsIl90aGlzIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJ0b2FzdCIsImNyZWF0ZSIsIm1lc3NhZ2UiLCJkdXJhdGlvbiIsInByZXNlbnQiLCJzdWJtaXQiLCJmb3JtIiwiX3RoaXMyIiwidmFsaWQiLCJzdXBwb3J0TWVzc2FnZSIsImkwIiwiybXJtWRpcmVjdGl2ZUluamVjdCIsInNlbGVjdG9ycyIsImRlY2xzIiwidmFycyIsImNvbnN0cyIsInRlbXBsYXRlIiwiU3VwcG9ydFBhZ2VfVGVtcGxhdGUiLCJyZiIsImN0eCIsIsm1ybVlbGVtZW50U3RhcnQiLCLJtcm1ZWxlbWVudCIsIsm1ybVlbGVtZW50RW5kIiwiybXJtXRleHQiLCLJtcm1bGlzdGVuZXIiLCJTdXBwb3J0UGFnZV9UZW1wbGF0ZV9mb3JtX25nU3VibWl0XzEwX2xpc3RlbmVyIiwiybXJtXJlc3RvcmVWaWV3IiwiX3IyIiwiX3IwIiwiybXJtXJlZmVyZW5jZSIsIsm1ybVyZXNldFZpZXciLCJTdXBwb3J0UGFnZV9UZW1wbGF0ZV9pb25fdGV4dGFyZWFfbmdNb2RlbENoYW5nZV8xMl9saXN0ZW5lciIsIiRldmVudCIsIsm1ybVhZHZhbmNlIiwiybXJtXByb3BlcnR5Il0sInNvdXJjZVJvb3QiOiJ3ZWJwYWNrOi8vLyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOltdfQ==