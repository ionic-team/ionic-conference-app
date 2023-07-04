"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_support_support_module_ts"],{

/***/ 7544:
/*!*********************************************************!*\
  !*** ./src/app/pages/support/support-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportPageRoutingModule": () => (/* binding */ SupportPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _support__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./support */ 8003);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);




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

/***/ 2602:
/*!*************************************************!*\
  !*** ./src/app/pages/support/support.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportModule": () => (/* binding */ SupportModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4615);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5992);
/* harmony import */ var _support__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./support */ 8003);
/* harmony import */ var _support_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./support-routing.module */ 7544);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);






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

/***/ 8003:
/*!******************************************!*\
  !*** ./src/app/pages/support/support.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportPage": () => (/* binding */ SupportPage)
/* harmony export */ });
/* harmony import */ var _Users_ohrionmartin_dev_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 5992);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 9542);





class SupportPage {
  constructor(alertCtrl, toastCtrl) {
    this.alertCtrl = alertCtrl;
    this.toastCtrl = toastCtrl;
    this.submitted = false;
  }
  ionViewDidEnter() {
    var _this = this;
    return (0,_Users_ohrionmartin_dev_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastCtrl.create({
        message: 'This does not actually send a support request.',
        duration: 3000
      });
      yield toast.present();
    })();
  }
  submit(form) {
    var _this2 = this;
    return (0,_Users_ohrionmartin_dev_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
  styles: [".support-logo[_ngcontent-%COMP%] {\n  min-height: 200px;\n  padding: 20px 0;\n  text-align: center;\n}\n\n.support-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 150px;\n}\n\n.list[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.support-form[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc3VwcG9ydC9zdXBwb3J0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUVBLGVBQUE7RUFFQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0FBREYiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VwcG9ydC1sb2dvIHtcbiAgbWluLWhlaWdodDogMjAwcHg7XG5cbiAgcGFkZGluZzogMjBweCAwO1xuXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnN1cHBvcnQtbG9nbyBpbWcge1xuICBtYXgtd2lkdGg6IDE1MHB4O1xufVxuXG4ubGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5zdXBwb3J0LWZvcm0ge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF9wYWdlc19zdXBwb3J0X3N1cHBvcnRfbW9kdWxlX3RzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDdUQ7QUFFZjs7O0FBRXhDLE1BQU1FLE1BQU0sR0FBVyxDQUNyQjtFQUNFQyxJQUFJLEVBQUUsRUFBRTtFQUNSQyxTQUFTLEVBQUVILGlEQUFXQTtDQUN2QixDQUNGO0FBRUQsTUFJYUksd0JBQXdCO0FBQXhCQSx3QkFBd0I7bUJBQXhCQSx3QkFBd0I7QUFBQTtBQUF4QkEsd0JBQXdCO1FBQXhCQTtBQUF3QjtBQUF4QkEsd0JBQXdCO1lBSHpCTCxrRUFBcUIsQ0FBQ0UsTUFBTSxDQUFDLEVBQzdCRix5REFBWTtBQUFBO0FBRWE7O3NIQUF4Qkssd0JBQXdCO0lBQUFFLE9BQUEsR0FBQUMseURBQUE7SUFBQUMsT0FBQSxHQUZ6QlQseURBQVk7RUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2J1QjtBQUNGO0FBQ0E7QUFDTDtBQUM0Qjs7QUFFcEUsTUFXYWEsYUFBYTtBQUFiQSxhQUFhO21CQUFiQSxhQUFhO0FBQUE7QUFBYkEsYUFBYTtRQUFiQTtBQUFhO0FBQWJBLGFBQWE7WUFUdEJILHlEQUFZLEVBQ1pDLHVEQUFXLEVBQ1hDLHVEQUFXLEVBQ1hQLDZFQUF3QjtBQUFBO0FBTUY7O3NIQUFiUSxhQUFhO0lBQUFDLFlBQUEsR0FIdEJiLGlEQUFXO0lBQUFNLE9BQUEsR0FOWEcseURBQVksRUFDWkMsdURBQVcsRUFDWEMsdURBQVcsRUFDWFAsNkVBQXdCO0VBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RzQzs7OztBQUdsRSxNQUthSixXQUFXO0VBSXRCZ0IsWUFDU0MsU0FBMEIsRUFDMUJDLFNBQTBCO0lBRDFCLEtBQUFELFNBQVMsR0FBVEEsU0FBUztJQUNULEtBQUFDLFNBQVMsR0FBVEEsU0FBUztJQUxsQixLQUFBQyxTQUFTLEdBQUcsS0FBSztFQU1iO0VBRUVDLGVBQWVBLENBQUE7SUFBQSxJQUFBQyxLQUFBO0lBQUEsT0FBQUMsMElBQUE7TUFDbkIsTUFBTUMsS0FBSyxTQUFTRixLQUFJLENBQUNILFNBQVMsQ0FBQ00sTUFBTSxDQUFDO1FBQ3hDQyxPQUFPLEVBQUUsZ0RBQWdEO1FBQ3pEQyxRQUFRLEVBQUU7T0FDWCxDQUFDO01BQ0YsTUFBTUgsS0FBSyxDQUFDSSxPQUFPLEVBQUU7SUFBQztFQUN4QjtFQUVNQyxNQUFNQSxDQUFDQyxJQUFZO0lBQUEsSUFBQUMsTUFBQTtJQUFBLE9BQUFSLDBJQUFBO01BQ3ZCUSxNQUFJLENBQUNYLFNBQVMsR0FBRyxJQUFJO01BRXJCLElBQUlVLElBQUksQ0FBQ0UsS0FBSyxFQUFFO1FBQ2RELE1BQUksQ0FBQ0UsY0FBYyxHQUFHLEVBQUU7UUFDeEJGLE1BQUksQ0FBQ1gsU0FBUyxHQUFHLEtBQUs7UUFFdEIsTUFBTUksS0FBSyxTQUFTTyxNQUFJLENBQUNaLFNBQVMsQ0FBQ00sTUFBTSxDQUFDO1VBQ3hDQyxPQUFPLEVBQUUscUNBQXFDO1VBQzlDQyxRQUFRLEVBQUU7U0FDWCxDQUFDO1FBQ0YsTUFBTUgsS0FBSyxDQUFDSSxPQUFPLEVBQUU7O0lBQ3RCO0VBQ0g7O0FBOUJXM0IsV0FBVzttQkFBWEEsV0FBVyxFQUFBaUMsK0RBQUEsQ0FBQTFCLDJEQUFBLEdBQUEwQiwrREFBQSxDQUFBMUIsMkRBQUE7QUFBQTtBQUFYUCxXQUFXO1FBQVhBLFdBQVc7RUFBQW1DLFNBQUE7RUFBQUMsS0FBQTtFQUFBQyxJQUFBO0VBQUFDLE1BQUE7RUFBQUMsUUFBQSxXQUFBQyxxQkFBQUMsRUFBQSxFQUFBQyxHQUFBO0lBQUEsSUFBQUQsRUFBQTs7TUNYeEJSLDREQUFBLGlCQUFZO01BR05BLHVEQUFBLHNCQUFtQztNQUNyQ0EsMERBQUEsRUFBYztNQUNkQSw0REFBQSxnQkFBVztNQUFBQSxvREFBQSxjQUFPO01BQUFBLDBEQUFBLEVBQVk7TUFLbENBLDREQUFBLGtCQUFhO01BRVRBLHVEQUFBLGFBQW1EO01BQ3JEQSwwREFBQSxFQUFNO01BRU5BLDREQUFBLGFBQTBCO01BQ2NBLHdEQUFBLHNCQUFBZSwrQ0FBQTtRQUFBZiwyREFBQSxDQUFBaUIsR0FBQTtRQUFBLE1BQUFDLEdBQUEsR0FBQWxCLHlEQUFBO1FBQUEsT0FBWUEseURBQUEsQ0FBQVMsR0FBQSxDQUFBZCxNQUFBLENBQUF1QixHQUFBLENBQWtCO01BQUEsRUFBQztNQUNuRWxCLDREQUFBLDBCQVNXO01BTFRBLHdEQUFBLDJCQUFBcUIsNERBQUFDLE1BQUE7UUFBQSxPQUFBYixHQUFBLENBQUFWLGNBQUEsR0FBQXVCLE1BQUE7TUFBQSxFQUE0QjtNQU05QnRCLDBEQUFBLEVBQWU7TUFFZkEsNERBQUEsY0FBeUI7TUFDa0JBLG9EQUFBLGNBQU07TUFBQUEsMERBQUEsRUFBYTs7O01BVDVEQSx1REFBQSxJQUE0QjtNQUE1QkEsd0RBQUEsWUFBQVMsR0FBQSxDQUFBVixjQUFBLENBQTRCIiwic291cmNlcyI6WyIuL3NyYy9hcHAvcGFnZXMvc3VwcG9ydC9zdXBwb3J0LXJvdXRpbmcubW9kdWxlLnRzIiwiLi9zcmMvYXBwL3BhZ2VzL3N1cHBvcnQvc3VwcG9ydC5tb2R1bGUudHMiLCIuL3NyYy9hcHAvcGFnZXMvc3VwcG9ydC9zdXBwb3J0LnRzIiwiLi9zcmMvYXBwL3BhZ2VzL3N1cHBvcnQvc3VwcG9ydC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFN1cHBvcnRQYWdlIH0gZnJvbSAnLi9zdXBwb3J0JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICBjb21wb25lbnQ6IFN1cHBvcnRQYWdlXG4gIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIFN1cHBvcnRQYWdlUm91dGluZ01vZHVsZSB7IH1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IFN1cHBvcnRQYWdlIH0gZnJvbSAnLi9zdXBwb3J0JztcbmltcG9ydCB7IFN1cHBvcnRQYWdlUm91dGluZ01vZHVsZSB9IGZyb20gJy4vc3VwcG9ydC1yb3V0aW5nLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgSW9uaWNNb2R1bGUsXG4gICAgU3VwcG9ydFBhZ2VSb3V0aW5nTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFN1cHBvcnRQYWdlLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFN1cHBvcnRNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nRm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQWxlcnRDb250cm9sbGVyLCBUb2FzdENvbnRyb2xsZXIgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1zdXBwb3J0JyxcbiAgdGVtcGxhdGVVcmw6ICdzdXBwb3J0Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdXBwb3J0LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU3VwcG9ydFBhZ2Uge1xuICBzdWJtaXR0ZWQgPSBmYWxzZTtcbiAgc3VwcG9ydE1lc3NhZ2U6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgYWxlcnRDdHJsOiBBbGVydENvbnRyb2xsZXIsXG4gICAgcHVibGljIHRvYXN0Q3RybDogVG9hc3RDb250cm9sbGVyXG4gICkgeyB9XG5cbiAgYXN5bmMgaW9uVmlld0RpZEVudGVyKCkge1xuICAgIGNvbnN0IHRvYXN0ID0gYXdhaXQgdGhpcy50b2FzdEN0cmwuY3JlYXRlKHtcbiAgICAgIG1lc3NhZ2U6ICdUaGlzIGRvZXMgbm90IGFjdHVhbGx5IHNlbmQgYSBzdXBwb3J0IHJlcXVlc3QuJyxcbiAgICAgIGR1cmF0aW9uOiAzMDAwXG4gICAgfSk7XG4gICAgYXdhaXQgdG9hc3QucHJlc2VudCgpO1xuICB9XG5cbiAgYXN5bmMgc3VibWl0KGZvcm06IE5nRm9ybSkge1xuICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcblxuICAgIGlmIChmb3JtLnZhbGlkKSB7XG4gICAgICB0aGlzLnN1cHBvcnRNZXNzYWdlID0gJyc7XG4gICAgICB0aGlzLnN1Ym1pdHRlZCA9IGZhbHNlO1xuXG4gICAgICBjb25zdCB0b2FzdCA9IGF3YWl0IHRoaXMudG9hc3RDdHJsLmNyZWF0ZSh7XG4gICAgICAgIG1lc3NhZ2U6ICdZb3VyIHN1cHBvcnQgcmVxdWVzdCBoYXMgYmVlbiBzZW50LicsXG4gICAgICAgIGR1cmF0aW9uOiAzMDAwXG4gICAgICB9KTtcbiAgICAgIGF3YWl0IHRvYXN0LnByZXNlbnQoKTtcbiAgICB9XG4gIH1cblxuICAvLyBJZiB0aGUgdXNlciBlbnRlcnMgdGV4dCBpbiB0aGUgc3VwcG9ydCBxdWVzdGlvbiBhbmQgdGhlbiBuYXZpZ2F0ZXNcbiAgLy8gd2l0aG91dCBzdWJtaXR0aW5nIGZpcnN0LCBhc2sgaWYgdGhleSBtZWFudCB0byBsZWF2ZSB0aGUgcGFnZVxuICAvLyBhc3luYyBpb25WaWV3Q2FuTGVhdmUoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIC8vICAgLy8gSWYgdGhlIHN1cHBvcnQgbWVzc2FnZSBpcyBlbXB0eSB3ZSBzaG91bGQganVzdCBuYXZpZ2F0ZVxuICAvLyAgIGlmICghdGhpcy5zdXBwb3J0TWVzc2FnZSB8fCB0aGlzLnN1cHBvcnRNZXNzYWdlLnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgLy8gICAgIHJldHVybiB0cnVlO1xuICAvLyAgIH1cblxuICAvLyAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZTogYW55LCByZWplY3Q6IGFueSkgPT4ge1xuICAvLyAgICAgY29uc3QgYWxlcnQgPSBhd2FpdCB0aGlzLmFsZXJ0Q3RybC5jcmVhdGUoe1xuICAvLyAgICAgICB0aXRsZTogJ0xlYXZlIHRoaXMgcGFnZT8nLFxuICAvLyAgICAgICBtZXNzYWdlOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGxlYXZlIHRoaXMgcGFnZT8gWW91ciBzdXBwb3J0IG1lc3NhZ2Ugd2lsbCBub3QgYmUgc3VibWl0dGVkLicsXG4gIC8vICAgICAgIGJ1dHRvbnM6IFtcbiAgLy8gICAgICAgICB7IHRleHQ6ICdTdGF5JywgaGFuZGxlcjogcmVqZWN0IH0sXG4gIC8vICAgICAgICAgeyB0ZXh0OiAnTGVhdmUnLCByb2xlOiAnY2FuY2VsJywgaGFuZGxlcjogcmVzb2x2ZSB9XG4gIC8vICAgICAgIF1cbiAgLy8gICAgIH0pO1xuXG4gIC8vICAgICBhd2FpdCBhbGVydC5wcmVzZW50KCk7XG4gIC8vICAgfSk7XG4gIC8vIH1cbn1cbiIsIjxpb24taGVhZGVyPlxuICA8aW9uLXRvb2xiYXI+XG4gICAgPGlvbi1idXR0b25zIHNsb3Q9XCJzdGFydFwiPlxuICAgICAgPGlvbi1tZW51LWJ1dHRvbj48L2lvbi1tZW51LWJ1dHRvbj5cbiAgICA8L2lvbi1idXR0b25zPlxuICAgIDxpb24tdGl0bGU+U3VwcG9ydDwvaW9uLXRpdGxlPlxuICA8L2lvbi10b29sYmFyPlxuXG48L2lvbi1oZWFkZXI+XG5cbjxpb24tY29udGVudD5cbiAgPGRpdiBjbGFzcz1cInN1cHBvcnQtbG9nb1wiPlxuICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltZy9hcHBpY29uLnN2Z1wiIGFsdD1cIklvbmljIExvZ29cIj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cInN1cHBvcnQtZm9ybVwiPlxuICAgIDxmb3JtICNzdWJtaXRGb3JtPVwibmdGb3JtXCIgbm92YWxpZGF0ZSAobmdTdWJtaXQpPVwic3VibWl0KHN1Ym1pdEZvcm0pXCI+XG4gICAgICA8aW9uLXRleHRhcmVhXG4gICAgICAgIGxhYmVsPVwiRW50ZXIgeW91ciBzdXBwb3J0IG1lc3NhZ2UgYmVsb3dcIlxuICAgICAgICBsYWJlbFBsYWNlbWVudD1cInN0YWNrZWRcIlxuICAgICAgICBmaWxsPVwic29saWRcIlxuICAgICAgICBbKG5nTW9kZWwpXT1cInN1cHBvcnRNZXNzYWdlXCJcbiAgICAgICAgbmFtZT1cInN1cHBvcnRRdWVzdGlvblwiXG4gICAgICAgICNzdXBwb3J0UXVlc3Rpb249XCJuZ01vZGVsXCJcbiAgICAgICAgcm93cz1cIjZcIlxuICAgICAgICBlcnJvclRleHQ9XCJTdXBwb3J0IG1lc3NhZ2UgaXMgcmVxdWlyZWRcIlxuICAgICAgICByZXF1aXJlZD5cbiAgICAgIDwvaW9uLXRleHRhcmVhPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiaW9uLXBhZGRpbmdcIj5cbiAgICAgICAgPGlvbi1idXR0b24gZXhwYW5kPVwiYmxvY2tcIiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9pb24tYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICA8L2Rpdj5cbjwvaW9uLWNvbnRlbnQ+XG4iXSwibmFtZXMiOlsiUm91dGVyTW9kdWxlIiwiU3VwcG9ydFBhZ2UiLCJyb3V0ZXMiLCJwYXRoIiwiY29tcG9uZW50IiwiU3VwcG9ydFBhZ2VSb3V0aW5nTW9kdWxlIiwiZm9yQ2hpbGQiLCJpbXBvcnRzIiwiaTEiLCJleHBvcnRzIiwiQ29tbW9uTW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJJb25pY01vZHVsZSIsIlN1cHBvcnRNb2R1bGUiLCJkZWNsYXJhdGlvbnMiLCJBbGVydENvbnRyb2xsZXIiLCJUb2FzdENvbnRyb2xsZXIiLCJjb25zdHJ1Y3RvciIsImFsZXJ0Q3RybCIsInRvYXN0Q3RybCIsInN1Ym1pdHRlZCIsImlvblZpZXdEaWRFbnRlciIsIl90aGlzIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJ0b2FzdCIsImNyZWF0ZSIsIm1lc3NhZ2UiLCJkdXJhdGlvbiIsInByZXNlbnQiLCJzdWJtaXQiLCJmb3JtIiwiX3RoaXMyIiwidmFsaWQiLCJzdXBwb3J0TWVzc2FnZSIsImkwIiwiybXJtWRpcmVjdGl2ZUluamVjdCIsInNlbGVjdG9ycyIsImRlY2xzIiwidmFycyIsImNvbnN0cyIsInRlbXBsYXRlIiwiU3VwcG9ydFBhZ2VfVGVtcGxhdGUiLCJyZiIsImN0eCIsIsm1ybVlbGVtZW50U3RhcnQiLCLJtcm1ZWxlbWVudCIsIsm1ybVlbGVtZW50RW5kIiwiybXJtXRleHQiLCLJtcm1bGlzdGVuZXIiLCJTdXBwb3J0UGFnZV9UZW1wbGF0ZV9mb3JtX25nU3VibWl0XzEwX2xpc3RlbmVyIiwiybXJtXJlc3RvcmVWaWV3IiwiX3IyIiwiX3IwIiwiybXJtXJlZmVyZW5jZSIsIsm1ybVyZXNldFZpZXciLCJTdXBwb3J0UGFnZV9UZW1wbGF0ZV9pb25fdGV4dGFyZWFfbmdNb2RlbENoYW5nZV8xMl9saXN0ZW5lciIsIiRldmVudCIsIsm1ybVhZHZhbmNlIiwiybXJtXByb3BlcnR5Il0sInNvdXJjZVJvb3QiOiJ3ZWJwYWNrOi8vLyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOltdfQ==