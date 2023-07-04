"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_signup_signup_module_ts"],{

/***/ 392:
/*!*******************************************************!*\
  !*** ./src/app/pages/signup/signup-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageRoutingModule": () => (/* binding */ SignupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _signup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup */ 7165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);




const routes = [{
  path: '',
  component: _signup__WEBPACK_IMPORTED_MODULE_0__.SignupPage
}];
class SignupPageRoutingModule {}
SignupPageRoutingModule.ɵfac = function SignupPageRoutingModule_Factory(t) {
  return new (t || SignupPageRoutingModule)();
};
SignupPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: SignupPageRoutingModule
});
SignupPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SignupPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 7110:
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpModule": () => (/* binding */ SignUpModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4615);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5992);
/* harmony import */ var _signup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup */ 7165);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup-routing.module */ 392);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);






class SignUpModule {}
SignUpModule.ɵfac = function SignUpModule_Factory(t) {
  return new (t || SignUpModule)();
};
SignUpModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: SignUpModule
});
SignUpModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _signup_routing_module__WEBPACK_IMPORTED_MODULE_1__.SignupPageRoutingModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SignUpModule, {
    declarations: [_signup__WEBPACK_IMPORTED_MODULE_0__.SignupPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _signup_routing_module__WEBPACK_IMPORTED_MODULE_1__.SignupPageRoutingModule]
  });
})();

/***/ }),

/***/ 7165:
/*!****************************************!*\
  !*** ./src/app/pages/signup/signup.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": () => (/* binding */ SignupPage)
/* harmony export */ });
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../providers/user-data */ 6401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 5992);







class SignupPage {
  constructor(router, userData) {
    this.router = router;
    this.userData = userData;
    this.signup = {
      username: '',
      password: ''
    };
    this.submitted = false;
  }
  onSignup(form) {
    this.submitted = true;
    if (form.valid) {
      this.userData.signup(this.signup.username);
      this.router.navigateByUrl('/app/tabs/schedule');
    }
  }
}
SignupPage.ɵfac = function SignupPage_Factory(t) {
  return new (t || SignupPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_user_data__WEBPACK_IMPORTED_MODULE_0__.UserData));
};
SignupPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SignupPage,
  selectors: [["page-signup"]],
  decls: 19,
  vars: 2,
  consts: [["slot", "start"], [1, "signup-logo"], ["src", "assets/img/appicon.svg", "alt", "Ionic Logo"], [1, "signup-form"], ["novalidate", ""], ["signupForm", "ngForm"], ["label", "Username", "labelPlacement", "stacked", "fill", "solid", "name", "username", "type", "text", "errorText", "Username is required", "required", "", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], ["label", "Password", "labelPlacement", "stacked", "fill", "solid", "name", "password", "type", "password", "errorText", "Password is required", "required", "", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "ion-padding"], ["type", "submit", "expand", "block", 3, "click"]],
  template: function SignupPage_Template(rf, ctx) {
    if (rf & 1) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-menu-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Signup");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content")(7, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3)(10, "form", 4, 5)(12, "ion-input", 6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupPage_Template_ion_input_ngModelChange_12_listener($event) {
        return ctx.signup.username = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-input", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupPage_Template_ion_input_ngModelChange_14_listener($event) {
        return ctx.signup.password = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10)(17, "ion-button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignupPage_Template_ion_button_click_17_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onSignup(_r0));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Create");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.signup.username);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.signup.password);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.TextValueAccessor],
  styles: [".signup-logo[_ngcontent-%COMP%] {\n  min-height: 200px;\n  padding: 20px 0;\n  text-align: center;\n}\n\n.signup-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 150px;\n}\n\n.signup-form[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\nion-input[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFFQSxlQUFBO0VBRUEsa0JBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtBQURGIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZ251cC1sb2dvIHtcbiAgbWluLWhlaWdodDogMjAwcHg7XG5cbiAgcGFkZGluZzogMjBweCAwO1xuXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNpZ251cC1sb2dvIGltZyB7XG4gIG1heC13aWR0aDogMTUwcHg7XG59XG5cbi5zaWdudXAtZm9ybSB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbmlvbi1pbnB1dCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF9wYWdlc19zaWdudXBfc2lnbnVwX21vZHVsZV90cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ3VEO0FBRWpCOzs7QUFFdEMsTUFBTUUsTUFBTSxHQUFXLENBQ3JCO0VBQ0VDLElBQUksRUFBRSxFQUFFO0VBQ1JDLFNBQVMsRUFBRUgsK0NBQVVBO0NBQ3RCLENBQ0Y7QUFFRCxNQUlhSSx1QkFBdUI7QUFBdkJBLHVCQUF1QjttQkFBdkJBLHVCQUF1QjtBQUFBO0FBQXZCQSx1QkFBdUI7UUFBdkJBO0FBQXVCO0FBQXZCQSx1QkFBdUI7WUFIeEJMLGtFQUFxQixDQUFDRSxNQUFNLENBQUMsRUFDN0JGLHlEQUFZO0FBQUE7QUFFWTs7c0hBQXZCSyx1QkFBdUI7SUFBQUUsT0FBQSxHQUFBQyx5REFBQTtJQUFBQyxPQUFBLEdBRnhCVCx5REFBWTtFQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYnVCO0FBQ0Y7QUFDQTtBQUVQO0FBQzRCOztBQUVsRSxNQVdhYSxZQUFZO0FBQVpBLFlBQVk7bUJBQVpBLFlBQVk7QUFBQTtBQUFaQSxZQUFZO1FBQVpBO0FBQVk7QUFBWkEsWUFBWTtZQVRyQkgseURBQVksRUFDWkMsdURBQVcsRUFDWEMsdURBQVcsRUFDWFAsMkVBQXVCO0FBQUE7QUFNRjs7c0hBQVpRLFlBQVk7SUFBQUMsWUFBQSxHQUhyQmIsK0NBQVU7SUFBQU0sT0FBQSxHQU5WRyx5REFBWSxFQUNaQyx1REFBVyxFQUNYQyx1REFBVyxFQUNYUCwyRUFBdUI7RUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWGM7QUFFWTs7Ozs7O0FBTXJELE1BS2FKLFVBQVU7RUFJckJnQixZQUNTQyxNQUFjLEVBQ2RDLFFBQWtCO0lBRGxCLEtBQUFELE1BQU0sR0FBTkEsTUFBTTtJQUNOLEtBQUFDLFFBQVEsR0FBUkEsUUFBUTtJQUxqQixLQUFBQyxNQUFNLEdBQWdCO01BQUVDLFFBQVEsRUFBRSxFQUFFO01BQUVDLFFBQVEsRUFBRTtJQUFFLENBQUU7SUFDcEQsS0FBQUMsU0FBUyxHQUFHLEtBQUs7RUFLZDtFQUVIQyxRQUFRQSxDQUFDQyxJQUFZO0lBQ25CLElBQUksQ0FBQ0YsU0FBUyxHQUFHLElBQUk7SUFFckIsSUFBSUUsSUFBSSxDQUFDQyxLQUFLLEVBQUU7TUFDZCxJQUFJLENBQUNQLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQ0EsTUFBTSxDQUFDQyxRQUFRLENBQUM7TUFDMUMsSUFBSSxDQUFDSCxNQUFNLENBQUNTLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQzs7RUFFbkQ7O0FBaEJXMUIsVUFBVTttQkFBVkEsVUFBVSxFQUFBMkIsK0RBQUEsQ0FBQXBCLG1EQUFBLEdBQUFvQiwrREFBQSxDQUFBRSwwREFBQTtBQUFBO0FBQVY3QixVQUFVO1FBQVZBLFVBQVU7RUFBQThCLFNBQUE7RUFBQUMsS0FBQTtFQUFBQyxJQUFBO0VBQUFDLE1BQUE7RUFBQUMsUUFBQSxXQUFBQyxvQkFBQUMsRUFBQSxFQUFBQyxHQUFBO0lBQUEsSUFBQUQsRUFBQTs7TUNmdkJULDREQUFBLGlCQUFZO01BR05BLHVEQUFBLHNCQUFtQztNQUNyQ0EsMERBQUEsRUFBYztNQUNkQSw0REFBQSxnQkFBVztNQUFBQSxvREFBQSxhQUFNO01BQUFBLDBEQUFBLEVBQVk7TUFJakNBLDREQUFBLGtCQUFhO01BR1RBLHVEQUFBLGFBQW1EO01BQ3JEQSwwREFBQSxFQUFNO01BRU5BLDREQUFBLGFBQXlCO01BTW5CQSx3REFBQSwyQkFBQWdCLHdEQUFBQyxNQUFBO1FBQUEsT0FBQVAsR0FBQSxDQUFBbEIsTUFBQSxDQUFBQyxRQUFBLEdBQUF3QixNQUFBO01BQUEsRUFBNkI7TUFNL0JqQiwwREFBQSxFQUFZO01BRVpBLDREQUFBLHVCQVNXO01BTFRBLHdEQUFBLDJCQUFBa0Isd0RBQUFELE1BQUE7UUFBQSxPQUFBUCxHQUFBLENBQUFsQixNQUFBLENBQUFFLFFBQUEsR0FBQXVCLE1BQUE7TUFBQSxFQUE2QjtNQU0vQmpCLDBEQUFBLEVBQVk7TUFFWkEsNERBQUEsZUFBeUI7TUFDWEEsd0RBQUEsbUJBQUFtQixpREFBQTtRQUFBbkIsMkRBQUEsQ0FBQXFCLEdBQUE7UUFBQSxNQUFBQyxHQUFBLEdBQUF0Qix5REFBQTtRQUFBLE9BQVNBLHlEQUFBLENBQUFVLEdBQUEsQ0FBQWQsUUFBQSxDQUFBMEIsR0FBQSxDQUFvQjtNQUFBLEVBQUM7TUFBOEJ0QixvREFBQSxjQUFNO01BQUFBLDBEQUFBLEVBQWE7OztNQXJCM0ZBLHVEQUFBLElBQTZCO01BQTdCQSx3REFBQSxZQUFBVSxHQUFBLENBQUFsQixNQUFBLENBQUFDLFFBQUEsQ0FBNkI7TUFZN0JPLHVEQUFBLEdBQTZCO01BQTdCQSx3REFBQSxZQUFBVSxHQUFBLENBQUFsQixNQUFBLENBQUFFLFFBQUEsQ0FBNkIiLCJzb3VyY2VzIjpbIi4vc3JjL2FwcC9wYWdlcy9zaWdudXAvc2lnbnVwLXJvdXRpbmcubW9kdWxlLnRzIiwiLi9zcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAubW9kdWxlLnRzIiwiLi9zcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAudHMiLCIuL3NyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFNpZ251cFBhZ2UgfSBmcm9tICcuL3NpZ251cCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJycsXG4gICAgY29tcG9uZW50OiBTaWdudXBQYWdlXG4gIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIFNpZ251cFBhZ2VSb3V0aW5nTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5pbXBvcnQgeyBTaWdudXBQYWdlIH0gZnJvbSAnLi9zaWdudXAnO1xuaW1wb3J0IHsgU2lnbnVwUGFnZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL3NpZ251cC1yb3V0aW5nLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgSW9uaWNNb2R1bGUsXG4gICAgU2lnbnVwUGFnZVJvdXRpbmdNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgU2lnbnVwUGFnZSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTaWduVXBNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nRm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFVzZXJEYXRhIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL3VzZXItZGF0YSc7XG5cbmltcG9ydCB7IFVzZXJPcHRpb25zIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy91c2VyLW9wdGlvbnMnO1xuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1zaWdudXAnLFxuICB0ZW1wbGF0ZVVybDogJ3NpZ251cC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2lnbnVwLnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2lnbnVwUGFnZSB7XG4gIHNpZ251cDogVXNlck9wdGlvbnMgPSB7IHVzZXJuYW1lOiAnJywgcGFzc3dvcmQ6ICcnIH07XG4gIHN1Ym1pdHRlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcbiAgICBwdWJsaWMgdXNlckRhdGE6IFVzZXJEYXRhXG4gICkge31cblxuICBvblNpZ251cChmb3JtOiBOZ0Zvcm0pIHtcbiAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XG5cbiAgICBpZiAoZm9ybS52YWxpZCkge1xuICAgICAgdGhpcy51c2VyRGF0YS5zaWdudXAodGhpcy5zaWdudXAudXNlcm5hbWUpO1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL2FwcC90YWJzL3NjaGVkdWxlJyk7XG4gICAgfVxuICB9XG59XG4iLCI8aW9uLWhlYWRlcj5cbiAgPGlvbi10b29sYmFyPlxuICAgIDxpb24tYnV0dG9ucyBzbG90PVwic3RhcnRcIj5cbiAgICAgIDxpb24tbWVudS1idXR0b24+PC9pb24tbWVudS1idXR0b24+XG4gICAgPC9pb24tYnV0dG9ucz5cbiAgICA8aW9uLXRpdGxlPlNpZ251cDwvaW9uLXRpdGxlPlxuICA8L2lvbi10b29sYmFyPlxuPC9pb24taGVhZGVyPlxuXG48aW9uLWNvbnRlbnQ+XG5cbiAgPGRpdiBjbGFzcz1cInNpZ251cC1sb2dvXCI+XG4gICAgPGltZyBzcmM9XCJhc3NldHMvaW1nL2FwcGljb24uc3ZnXCIgYWx0PVwiSW9uaWMgTG9nb1wiPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwic2lnbnVwLWZvcm1cIj5cbiAgICA8Zm9ybSAjc2lnbnVwRm9ybT1cIm5nRm9ybVwiIG5vdmFsaWRhdGU+XG4gICAgICA8aW9uLWlucHV0XG4gICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIlxuICAgICAgICBsYWJlbFBsYWNlbWVudD1cInN0YWNrZWRcIlxuICAgICAgICBmaWxsPVwic29saWRcIlxuICAgICAgICBbKG5nTW9kZWwpXT1cInNpZ251cC51c2VybmFtZVwiXG4gICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgI3VzZXJuYW1lPVwibmdNb2RlbFwiXG4gICAgICAgIGVycm9yVGV4dD1cIlVzZXJuYW1lIGlzIHJlcXVpcmVkXCJcbiAgICAgICAgcmVxdWlyZWQ+XG4gICAgICA8L2lvbi1pbnB1dD5cblxuICAgICAgPGlvbi1pbnB1dFxuICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgbGFiZWxQbGFjZW1lbnQ9XCJzdGFja2VkXCJcbiAgICAgICAgZmlsbD1cInNvbGlkXCJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJzaWdudXAucGFzc3dvcmRcIlxuICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAjcGFzc3dvcmQ9XCJuZ01vZGVsXCJcbiAgICAgICAgZXJyb3JUZXh0PVwiUGFzc3dvcmQgaXMgcmVxdWlyZWRcIlxuICAgICAgICByZXF1aXJlZD5cbiAgICAgIDwvaW9uLWlucHV0PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiaW9uLXBhZGRpbmdcIj5cbiAgICAgICAgPGlvbi1idXR0b24gKGNsaWNrKT1cIm9uU2lnbnVwKHNpZ251cEZvcm0pXCIgdHlwZT1cInN1Ym1pdFwiIGV4cGFuZD1cImJsb2NrXCI+Q3JlYXRlPC9pb24tYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICA8L2Rpdj5cblxuPC9pb24tY29udGVudD5cbiJdLCJuYW1lcyI6WyJSb3V0ZXJNb2R1bGUiLCJTaWdudXBQYWdlIiwicm91dGVzIiwicGF0aCIsImNvbXBvbmVudCIsIlNpZ251cFBhZ2VSb3V0aW5nTW9kdWxlIiwiZm9yQ2hpbGQiLCJpbXBvcnRzIiwiaTEiLCJleHBvcnRzIiwiQ29tbW9uTW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJJb25pY01vZHVsZSIsIlNpZ25VcE1vZHVsZSIsImRlY2xhcmF0aW9ucyIsIlJvdXRlciIsIlVzZXJEYXRhIiwiY29uc3RydWN0b3IiLCJyb3V0ZXIiLCJ1c2VyRGF0YSIsInNpZ251cCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJzdWJtaXR0ZWQiLCJvblNpZ251cCIsImZvcm0iLCJ2YWxpZCIsIm5hdmlnYXRlQnlVcmwiLCJpMCIsIsm1ybVkaXJlY3RpdmVJbmplY3QiLCJpMiIsInNlbGVjdG9ycyIsImRlY2xzIiwidmFycyIsImNvbnN0cyIsInRlbXBsYXRlIiwiU2lnbnVwUGFnZV9UZW1wbGF0ZSIsInJmIiwiY3R4IiwiybXJtWVsZW1lbnRTdGFydCIsIsm1ybVlbGVtZW50IiwiybXJtWVsZW1lbnRFbmQiLCLJtcm1dGV4dCIsIsm1ybVsaXN0ZW5lciIsIlNpZ251cFBhZ2VfVGVtcGxhdGVfaW9uX2lucHV0X25nTW9kZWxDaGFuZ2VfMTJfbGlzdGVuZXIiLCIkZXZlbnQiLCJTaWdudXBQYWdlX1RlbXBsYXRlX2lvbl9pbnB1dF9uZ01vZGVsQ2hhbmdlXzE0X2xpc3RlbmVyIiwiU2lnbnVwUGFnZV9UZW1wbGF0ZV9pb25fYnV0dG9uX2NsaWNrXzE3X2xpc3RlbmVyIiwiybXJtXJlc3RvcmVWaWV3IiwiX3IzIiwiX3IwIiwiybXJtXJlZmVyZW5jZSIsIsm1ybVyZXNldFZpZXciLCLJtcm1YWR2YW5jZSIsIsm1ybVwcm9wZXJ0eSJdLCJzb3VyY2VSb290Ijoid2VicGFjazovLy8iLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbXX0=