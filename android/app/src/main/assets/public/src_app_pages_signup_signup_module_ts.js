"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_signup_signup_module_ts"],{

/***/ 41080:
/*!*******************************************************!*\
  !*** ./src/app/pages/signup/signup-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignupPageRoutingModule: () => (/* binding */ SignupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _signup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup */ 95039);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




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

/***/ 94025:
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignUpModule: () => (/* binding */ SignUpModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 64210);
/* harmony import */ var _signup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup */ 95039);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup-routing.module */ 41080);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);






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

/***/ 95039:
/*!****************************************!*\
  !*** ./src/app/pages/signup/signup.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignupPage: () => (/* binding */ SignupPage)
/* harmony export */ });
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../providers/user-data */ 8176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 64210);






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
  decls: 38,
  vars: 0,
  consts: [[1, "heading"], [1, "social-login"], [1, "links"], ["routerLink", "/app/tabs/schedule", 1, "google"], ["name", "logo-google"], ["routerLink", "/app/tabs/schedule", 1, "facebook"], ["name", "logo-facebook"], [1, "email-login"], [1, "formfield"], ["type", "text", "name", "email", "id", "email"], ["for", "email", "placeholder", "Email"], ["type", "password", "name", "password", "id", "password"], ["for", "password", "placeholder", "Password"], [1, "other-links"], [1, "remember-me"], [1, "login-button"], ["routerLink", "/app/tabs/schedule", 1, "login"], ["routerLink", "/login"]],
  template: function SignupPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content")(1, "div", 0)(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Sign Up");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Please Sign Up to continue.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 1)(7, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Enter through social networks");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 2)(10, "ion-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "ion-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "ion-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7)(15, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Or signup with email");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13)(26, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "ion-checkbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "I agree with privacy policy");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 15)(31, "ion-button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Sign Up");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Already have an account?");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: [".heading[_ngcontent-%COMP%] {\n  margin-top: 10vh;\n  text-align: center;\n}\n.heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 1000;\n}\n.heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #838383;\n}\n\n.social-login[_ngcontent-%COMP%] {\n  margin-top: 45px;\n  text-align: center;\n}\n.social-login[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #838383;\n}\n.social-login[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  width: 25%;\n  height: 50px;\n}\n.social-login[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n.social-login[_ngcontent-%COMP%]   .google[_ngcontent-%COMP%] {\n  --background: #00acee;\n  margin-right: 20px;\n}\n.social-login[_ngcontent-%COMP%]   .facebook[_ngcontent-%COMP%] {\n  --background: #4267b2;\n  margin-left: 20px;\n}\n\n.email-login[_ngcontent-%COMP%] {\n  margin-top: 45px;\n  text-align: center;\n}\n.email-login[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #838383;\n}\n\n.formfield[_ngcontent-%COMP%] {\n  position: relative;\n  margin: auto;\n  padding: 0px;\n  border: 0px;\n  font-size: 1rem;\n  margin-bottom: 10px;\n}\n\n.formfield[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%], .formfield[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  padding: 1.4em;\n  margin: 0.5em;\n  width: 87%;\n}\n\n.formfield[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  outline: none;\n}\n\n.formfield[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  text-align: start;\n  color: #ccc;\n  padding-left: 40px;\n}\n\ninput[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:valid    + label[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: auto;\n  height: 1.3em;\n  padding: 0px 0.5em 0px 0.5em;\n  margin: 0px;\n  background: #ffffff;\n  transition: 0.2s ease-in-out;\n  top: 0em;\n  left: 2em;\n}\n\n.other-links[_ngcontent-%COMP%] {\n  margin-left: 7%;\n  display: flex;\n  justify-content: space-between;\n}\n.other-links[_ngcontent-%COMP%]   .remember-me[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.other-links[_ngcontent-%COMP%]   .remember-me[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-left: 10px !important;\n}\n.other-links[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%] {\n  margin-right: 7%;\n}\n\n.login-button[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 25px;\n}\n.login-button[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%] {\n  --background: linear-gradient(to bottom, #fac644, #fac644, #fac644, #fac644, #fac644, #fac644, #fac644);\n  width: 43%;\n  height: 20x;\n  text-transform: none;\n  font-size: 1.3rem;\n}\n.login-button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #838383;\n}\n.login-button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #3880ff;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vQmxlc3NpbmclMjBLdW5ha2EvRGVza3RvcC9taW5pbmdfZXhwby9taW5pbmctZXhwby9zcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNDRjtBREFFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQ0VKO0FEQ0U7RUFDRSxjQUFBO0FDQ0o7O0FER0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDQUY7QURDRTtFQUNFLGNBQUE7QUNDSjtBRENFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUNDSjtBREFJO0VBQ0UsaUJBQUE7QUNFTjtBRENFO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQ0U7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURDRTtFQUNFLGNBQUE7QUNDSjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQ0E7O0VBRUUsY0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FDRUY7O0FEQUE7RUFDRSxzQkFBQTtFQUNBLGFBQUE7QUNHRjs7QUREQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNJRjs7QURGQTs7RUFFRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNLRjs7QURGQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUNLRjtBREpFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDTUo7QURMSTtFQUNFLDRCQUFBO0FDT047QURKRTtFQUNFLGdCQUFBO0FDTUo7O0FERkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDS0Y7QURKRTtFQUNFLHVHQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FDTUo7QURKRTtFQUNFLGNBQUE7QUNNSjtBRExJO0VBQ0UsY0FBQTtBQ09OIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRpbmd7XHJcbiAgbWFyZ2luLXRvcDogMTB2aDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaDF7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xyXG5cclxuICB9XHJcbiAgcHtcclxuICAgIGNvbG9yOiAjODM4MzgzO1xyXG5cclxuICB9XHJcbn1cclxuLnNvY2lhbC1sb2dpbntcclxuICBtYXJnaW4tdG9wOiA0NXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwe1xyXG4gICAgY29sb3I6ICM4MzgzODM7XHJcbiAgfVxyXG4gIGlvbi1idXR0b257XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgaW9uLWljb257XHJcbiAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICAuZ29vZ2xlIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzAwYWNlZTtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICB9XHJcbiAgLmZhY2Vib29re1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNDI2N2IyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHhcclxuICB9XHJcbn1cclxuLmVtYWlsLWxvZ2lue1xyXG4gIG1hcmdpbi10b3A6IDQ1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBwe1xyXG4gICAgY29sb3I6ICM4MzgzODNcclxuICB9XHJcbn1cclxuLmZvcm1maWVsZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmZvcm1maWVsZCA+IGlucHV0LFxyXG4uZm9ybWZpZWxkID4gbGFiZWwge1xyXG4gIHBhZGRpbmc6IDEuNGVtO1xyXG4gIG1hcmdpbjogMC41ZW07XHJcbiAgd2lkdGg6IDg3JTtcclxufVxyXG4uZm9ybWZpZWxkID4gaW5wdXQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uZm9ybWZpZWxkID4gbGFiZWwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgY29sb3I6ICNjY2M7XHJcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG59XHJcbmlucHV0OmZvY3VzICsgbGFiZWwsXHJcbmlucHV0OnZhbGlkICsgbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IDEuM2VtO1xyXG4gIHBhZGRpbmc6IDBweCAwLjVlbSAwcHggMC41ZW07XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIHRvcDogMGVtO1xyXG4gIGxlZnQ6IDJlbTtcclxufVxyXG5cclxuLm90aGVyLWxpbmtzIHtcclxuICBtYXJnaW4tbGVmdDogNyU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgLnJlbWVtYmVyLW1lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgLmZvcmdvdHtcclxuICAgIG1hcmdpbi1yaWdodDo3JTtcclxuICB9XHJcbn1cclxuXHJcbi5sb2dpbi1idXR0b257ICBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxuICAubG9naW57XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmYWM2NDQsICNmYWM2NDQsICNmYWM2NDQsICNmYWM2NDQsICNmYWM2NDQsICNmYWM2NDQsICNmYWM2NDQpO1xyXG4gICAgd2lkdGg6IDQzJTtcclxuICAgIGhlaWdodDogMjB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICB9XHJcbiAgcHtcclxuICAgIGNvbG9yOiAjODM4MzgzO1xyXG4gICAgc3BhbntcclxuICAgICAgY29sb3I6ICMzODgwZmY7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwiLmhlYWRpbmcge1xuICBtYXJnaW4tdG9wOiAxMHZoO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaGVhZGluZyBoMSB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBmb250LXdlaWdodDogMTAwMDtcbn1cbi5oZWFkaW5nIHAge1xuICBjb2xvcjogIzgzODM4Mztcbn1cblxuLnNvY2lhbC1sb2dpbiB7XG4gIG1hcmdpbi10b3A6IDQ1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zb2NpYWwtbG9naW4gcCB7XG4gIGNvbG9yOiAjODM4MzgzO1xufVxuLnNvY2lhbC1sb2dpbiBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDI1JTtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuLnNvY2lhbC1sb2dpbiBpb24tYnV0dG9uIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG59XG4uc29jaWFsLWxvZ2luIC5nb29nbGUge1xuICAtLWJhY2tncm91bmQ6ICMwMGFjZWU7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi5zb2NpYWwtbG9naW4gLmZhY2Vib29rIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNDI2N2IyO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmVtYWlsLWxvZ2luIHtcbiAgbWFyZ2luLXRvcDogNDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmVtYWlsLWxvZ2luIHAge1xuICBjb2xvcjogIzgzODM4Mztcbn1cblxuLmZvcm1maWVsZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAwcHg7XG4gIGJvcmRlcjogMHB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5mb3JtZmllbGQgPiBpbnB1dCxcbi5mb3JtZmllbGQgPiBsYWJlbCB7XG4gIHBhZGRpbmc6IDEuNGVtO1xuICBtYXJnaW46IDAuNWVtO1xuICB3aWR0aDogODclO1xufVxuXG4uZm9ybWZpZWxkID4gaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uZm9ybWZpZWxkID4gbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgY29sb3I6ICNjY2M7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbn1cblxuaW5wdXQ6Zm9jdXMgKyBsYWJlbCxcbmlucHV0OnZhbGlkICsgbGFiZWwge1xuICBmb250LXNpemU6IDFyZW07XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDEuM2VtO1xuICBwYWRkaW5nOiAwcHggMC41ZW0gMHB4IDAuNWVtO1xuICBtYXJnaW46IDBweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbiAgdG9wOiAwZW07XG4gIGxlZnQ6IDJlbTtcbn1cblxuLm90aGVyLWxpbmtzIHtcbiAgbWFyZ2luLWxlZnQ6IDclO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ub3RoZXItbGlua3MgLnJlbWVtYmVyLW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5vdGhlci1saW5rcyAucmVtZW1iZXItbWUgcCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4ub3RoZXItbGlua3MgLmZvcmdvdCB7XG4gIG1hcmdpbi1yaWdodDogNyU7XG59XG5cbi5sb2dpbi1idXR0b24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG4ubG9naW4tYnV0dG9uIC5sb2dpbiB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZhYzY0NCwgI2ZhYzY0NCwgI2ZhYzY0NCwgI2ZhYzY0NCwgI2ZhYzY0NCwgI2ZhYzY0NCwgI2ZhYzY0NCk7XG4gIHdpZHRoOiA0MyU7XG4gIGhlaWdodDogMjB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG4ubG9naW4tYnV0dG9uIHAge1xuICBjb2xvcjogIzgzODM4Mztcbn1cbi5sb2dpbi1idXR0b24gcCBzcGFuIHtcbiAgY29sb3I6ICMzODgwZmY7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF9wYWdlc19zaWdudXBfc2lnbnVwX21vZHVsZV90cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ3VEO0FBRWpCOzs7QUFFdEMsTUFBTUUsTUFBTSxHQUFXLENBQ3JCO0VBQ0VDLElBQUksRUFBRSxFQUFFO0VBQ1JDLFNBQVMsRUFBRUgsK0NBQVVBO0NBQ3RCLENBQ0Y7QUFFRCxNQUlhSSx1QkFBdUI7QUFBdkJBLHVCQUF1QjttQkFBdkJBLHVCQUF1QjtBQUFBO0FBQXZCQSx1QkFBdUI7UUFBdkJBO0FBQXVCO0FBQXZCQSx1QkFBdUI7WUFIeEJMLHlEQUFZLENBQUNNLFFBQVEsQ0FBQ0osTUFBTSxDQUFDLEVBQzdCRix5REFBWTtBQUFBO0FBRVk7O3NIQUF2QkssdUJBQXVCO0lBQUFFLE9BQUEsR0FBQUMseURBQUE7SUFBQUMsT0FBQSxHQUZ4QlQseURBQVk7RUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2J1QjtBQUNGO0FBQ0E7QUFFUDtBQUM0Qjs7QUFFbEUsTUFXYWEsWUFBWTtBQUFaQSxZQUFZO21CQUFaQSxZQUFZO0FBQUE7QUFBWkEsWUFBWTtRQUFaQTtBQUFZO0FBQVpBLFlBQVk7WUFUckJILHlEQUFZLEVBQ1pDLHVEQUFXLEVBQ1hDLHVEQUFXLEVBQ1hQLDJFQUF1QjtBQUFBO0FBTUY7O3NIQUFaUSxZQUFZO0lBQUFDLFlBQUEsR0FIckJiLCtDQUFVO0lBQUFNLE9BQUEsR0FOVkcseURBQVksRUFDWkMsdURBQVcsRUFDWEMsdURBQVcsRUFDWFAsMkVBQXVCO0VBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWGM7QUFFWTs7Ozs7QUFNckQsTUFLYUosVUFBVTtFQUlyQmdCLFlBQ1NDLE1BQWMsRUFDZEMsUUFBa0I7SUFEbEIsS0FBQUQsTUFBTSxHQUFOQSxNQUFNO0lBQ04sS0FBQUMsUUFBUSxHQUFSQSxRQUFRO0lBTGpCLEtBQUFDLE1BQU0sR0FBZ0I7TUFBRUMsUUFBUSxFQUFFLEVBQUU7TUFBRUMsUUFBUSxFQUFFO0lBQUUsQ0FBRTtJQUNwRCxLQUFBQyxTQUFTLEdBQUcsS0FBSztFQUtkO0VBRUhDLFFBQVFBLENBQUNDLElBQVk7SUFDbkIsSUFBSSxDQUFDRixTQUFTLEdBQUcsSUFBSTtJQUVyQixJQUFJRSxJQUFJLENBQUNDLEtBQUssRUFBRTtNQUNkLElBQUksQ0FBQ1AsUUFBUSxDQUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDQSxNQUFNLENBQUNDLFFBQVEsQ0FBQztNQUMxQyxJQUFJLENBQUNILE1BQU0sQ0FBQ1MsYUFBYSxDQUFDLG9CQUFvQixDQUFDOztFQUVuRDs7QUFoQlcxQixVQUFVO21CQUFWQSxVQUFVLEVBQUEyQiwrREFBQSxDQUFBcEIsbURBQUEsR0FBQW9CLCtEQUFBLENBQUFFLDBEQUFBO0FBQUE7QUFBVjdCLFVBQVU7UUFBVkEsVUFBVTtFQUFBOEIsU0FBQTtFQUFBQyxLQUFBO0VBQUFDLElBQUE7RUFBQUMsTUFBQTtFQUFBQyxRQUFBLFdBQUFDLG9CQUFBQyxFQUFBLEVBQUFDLEdBQUE7SUFBQSxJQUFBRCxFQUFBO01DZnZCVCw0REFBQSxrQkFBYTtNQUVMQSxvREFBQSxjQUFPO01BQUFBLDBEQUFBLEVBQUs7TUFDaEJBLDREQUFBLFFBQUc7TUFBQUEsb0RBQUEsa0NBQTJCO01BQUFBLDBEQUFBLEVBQUk7TUFFcENBLDREQUFBLGFBQTBCO01BQ3JCQSxvREFBQSxvQ0FBNkI7TUFBQUEsMERBQUEsRUFBSTtNQUNwQ0EsNERBQUEsYUFBbUI7TUFFZkEsdURBQUEsbUJBQXdDO01BQzFDQSwwREFBQSxFQUFhO01BQ2JBLDREQUFBLHFCQUE2RDtNQUMzREEsdURBQUEsbUJBQTBDO01BQzVDQSwwREFBQSxFQUFhO01BR2pCQSw0REFBQSxjQUF5QjtNQUNwQkEsb0RBQUEsNEJBQW9CO01BQUFBLDBEQUFBLEVBQUk7TUFDM0JBLDREQUFBLGNBQXVCO01BQ3JCQSx1REFBQSxnQkFBMkM7TUFDM0NBLDREQUFBLGlCQUF1QztNQUFBQSxvREFBQSxhQUFLO01BQUFBLDBEQUFBLEVBQVE7TUFFdERBLDREQUFBLGNBQXVCO01BQ3JCQSx1REFBQSxpQkFBcUQ7TUFDckRBLDREQUFBLGlCQUE2QztNQUFBQSxvREFBQSxnQkFBUTtNQUFBQSwwREFBQSxFQUFRO01BRS9EQSw0REFBQSxlQUF5QjtNQUVyQkEsdURBQUEsb0JBQTZCO01BQzdCQSw0REFBQSxTQUFHO01BQUFBLG9EQUFBLG1DQUEyQjtNQUFBQSwwREFBQSxFQUFJO01BSXhDQSw0REFBQSxlQUEwQjtNQUNrQ0Esb0RBQUEsZUFBTztNQUFBQSwwREFBQSxFQUFhO01BQzlFQSw0REFBQSxTQUFHO01BQUFBLG9EQUFBLGdDQUF3QjtNQUFBQSw0REFBQSxnQkFBMEI7TUFBQ0Esb0RBQUEsY0FBSztNQUFBQSwwREFBQSxFQUFPO01BQUFBLHVEQUFBLFNBQUc7TUFDckVBLDBEQUFBLEVBQU0iLCJzb3VyY2VzIjpbIi4vc3JjL2FwcC9wYWdlcy9zaWdudXAvc2lnbnVwLXJvdXRpbmcubW9kdWxlLnRzIiwiLi9zcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAubW9kdWxlLnRzIiwiLi9zcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAudHMiLCIuL3NyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFNpZ251cFBhZ2UgfSBmcm9tICcuL3NpZ251cCc7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAnJyxcclxuICAgIGNvbXBvbmVudDogU2lnbnVwUGFnZVxyXG4gIH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lnbnVwUGFnZVJvdXRpbmdNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcclxuXHJcbmltcG9ydCB7IFNpZ251cFBhZ2UgfSBmcm9tICcuL3NpZ251cCc7XHJcbmltcG9ydCB7IFNpZ251cFBhZ2VSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9zaWdudXAtcm91dGluZy5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIElvbmljTW9kdWxlLFxyXG4gICAgU2lnbnVwUGFnZVJvdXRpbmdNb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgU2lnbnVwUGFnZSxcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWduVXBNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBVc2VyRGF0YSB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy91c2VyLWRhdGEnO1xyXG5cclxuaW1wb3J0IHsgVXNlck9wdGlvbnMgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3VzZXItb3B0aW9ucyc7XHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGFnZS1zaWdudXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnc2lnbnVwLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NpZ251cC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWdudXBQYWdlIHtcclxuICBzaWdudXA6IFVzZXJPcHRpb25zID0geyB1c2VybmFtZTogJycsIHBhc3N3b3JkOiAnJyB9O1xyXG4gIHN1Ym1pdHRlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcclxuICAgIHB1YmxpYyB1c2VyRGF0YTogVXNlckRhdGFcclxuICApIHt9XHJcblxyXG4gIG9uU2lnbnVwKGZvcm06IE5nRm9ybSkge1xyXG4gICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xyXG5cclxuICAgIGlmIChmb3JtLnZhbGlkKSB7XHJcbiAgICAgIHRoaXMudXNlckRhdGEuc2lnbnVwKHRoaXMuc2lnbnVwLnVzZXJuYW1lKTtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL2FwcC90YWJzL3NjaGVkdWxlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxpb24tY29udGVudD5cclxuICA8ZGl2IGNsYXNzPVwiaGVhZGluZ1wiPlxyXG4gICAgPGgxPlNpZ24gVXA8L2gxPlxyXG4gICAgPHA+UGxlYXNlIFNpZ24gVXAgdG8gY29udGludWUuPC9wPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJzb2NpYWwtbG9naW5cIj5cclxuICAgIDxwPkVudGVyIHRocm91Z2ggc29jaWFsIG5ldHdvcmtzPC9wPlxyXG4gICAgPGRpdiBjbGFzcz1cImxpbmtzXCI+XHJcbiAgICAgIDxpb24tYnV0dG9uIGNsYXNzPVwiZ29vZ2xlXCIgcm91dGVyTGluaz1cIi9hcHAvdGFicy9zY2hlZHVsZVwiPlxyXG4gICAgICAgIDxpb24taWNvbiBuYW1lPVwibG9nby1nb29nbGVcIj48L2lvbi1pY29uPlxyXG4gICAgICA8L2lvbi1idXR0b24+XHJcbiAgICAgIDxpb24tYnV0dG9uIGNsYXNzPVwiZmFjZWJvb2tcIiByb3V0ZXJMaW5rPVwiL2FwcC90YWJzL3NjaGVkdWxlXCI+XHJcbiAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJsb2dvLWZhY2Vib29rXCI+PC9pb24taWNvbj5cclxuICAgICAgPC9pb24tYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImVtYWlsLWxvZ2luXCI+XHJcbiAgICA8cD5PciBzaWdudXAgd2l0aCBlbWFpbDwvcD5cclxuICAgIDxkaXYgY2xhc3M9XCJmb3JtZmllbGRcIj5cclxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiPlxyXG4gICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZm9ybWZpZWxkXCI+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCI+XHJcbiAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJvdGhlci1saW5rc1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicmVtZW1iZXItbWVcIj5cclxuICAgICAgICA8aW9uLWNoZWNrYm94PjwvaW9uLWNoZWNrYm94PlxyXG4gICAgICAgIDxwPkkgYWdyZWUgd2l0aCBwcml2YWN5IHBvbGljeTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwibG9naW4tYnV0dG9uXCI+XHJcbiAgICA8aW9uLWJ1dHRvbiBjbGFzcz1cImxvZ2luXCIgcm91dGVyTGluaz1cIi9hcHAvdGFicy9zY2hlZHVsZVwiPlNpZ24gVXA8L2lvbi1idXR0b24+XHJcbiAgICA8cD5BbHJlYWR5IGhhdmUgYW4gYWNjb3VudD88c3BhbiByb3V0ZXJMaW5rPVwiL2xvZ2luXCI+IExvZ2luPC9zcGFuPjxwPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9pb24tY29udGVudD4iXSwibmFtZXMiOlsiUm91dGVyTW9kdWxlIiwiU2lnbnVwUGFnZSIsInJvdXRlcyIsInBhdGgiLCJjb21wb25lbnQiLCJTaWdudXBQYWdlUm91dGluZ01vZHVsZSIsImZvckNoaWxkIiwiaW1wb3J0cyIsImkxIiwiZXhwb3J0cyIsIkNvbW1vbk1vZHVsZSIsIkZvcm1zTW9kdWxlIiwiSW9uaWNNb2R1bGUiLCJTaWduVXBNb2R1bGUiLCJkZWNsYXJhdGlvbnMiLCJSb3V0ZXIiLCJVc2VyRGF0YSIsImNvbnN0cnVjdG9yIiwicm91dGVyIiwidXNlckRhdGEiLCJzaWdudXAiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwic3VibWl0dGVkIiwib25TaWdudXAiLCJmb3JtIiwidmFsaWQiLCJuYXZpZ2F0ZUJ5VXJsIiwiaTAiLCLJtcm1ZGlyZWN0aXZlSW5qZWN0IiwiaTIiLCJzZWxlY3RvcnMiLCJkZWNscyIsInZhcnMiLCJjb25zdHMiLCJ0ZW1wbGF0ZSIsIlNpZ251cFBhZ2VfVGVtcGxhdGUiLCJyZiIsImN0eCIsIsm1ybVlbGVtZW50U3RhcnQiLCLJtcm1dGV4dCIsIsm1ybVlbGVtZW50RW5kIiwiybXJtWVsZW1lbnQiXSwic291cmNlUm9vdCI6IndlYnBhY2s6Ly8vIiwieF9nb29nbGVfaWdub3JlTGlzdCI6W119