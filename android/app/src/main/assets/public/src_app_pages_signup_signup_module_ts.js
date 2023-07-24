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
  styles: [".heading[_ngcontent-%COMP%] {\n  margin-top: 10vh;\n  text-align: center;\n}\n.heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 1000;\n}\n.heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #838383;\n}\n\n.social-login[_ngcontent-%COMP%] {\n  margin-top: 45px;\n  text-align: center;\n}\n.social-login[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #838383;\n}\n.social-login[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  width: 25%;\n  height: 50px;\n}\n.social-login[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n.social-login[_ngcontent-%COMP%]   .google[_ngcontent-%COMP%] {\n  --background: #00acee;\n  margin-right: 20px;\n}\n.social-login[_ngcontent-%COMP%]   .facebook[_ngcontent-%COMP%] {\n  --background: #4267b2;\n  margin-left: 20px;\n}\n\n.email-login[_ngcontent-%COMP%] {\n  margin-top: 45px;\n  text-align: center;\n}\n.email-login[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #838383;\n}\n\n.formfield[_ngcontent-%COMP%] {\n  position: relative;\n  margin: auto;\n  padding: 0px;\n  border: 0px;\n  font-size: 1rem;\n  margin-bottom: 10px;\n}\n\n.formfield[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%], .formfield[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  padding: 1.4em;\n  margin: 0.5em;\n  width: 87%;\n}\n\n.formfield[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  outline: none;\n}\n\n.formfield[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  text-align: start;\n  color: #ccc;\n  padding-left: 40px;\n}\n\ninput[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:valid    + label[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: auto;\n  height: 1.3em;\n  padding: 0px 0.5em 0px 0.5em;\n  margin: 0px;\n  background: #ffffff;\n  transition: 0.2s ease-in-out;\n  top: 0em;\n  left: 2em;\n}\n\n.other-links[_ngcontent-%COMP%] {\n  margin-left: 7%;\n  display: flex;\n  justify-content: space-between;\n}\n.other-links[_ngcontent-%COMP%]   .remember-me[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.other-links[_ngcontent-%COMP%]   .remember-me[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-left: 10px !important;\n}\n.other-links[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%] {\n  margin-right: 7%;\n}\n\n.login-button[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 25px;\n}\n.login-button[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%] {\n  --background: linear-gradient(to bottom, #fac644, #fac644, #fac644, #fac644, #fac644, #fac644, #fac644);\n  width: 43%;\n  height: 20x;\n  text-transform: none;\n  font-size: 1.3rem;\n}\n.login-button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #838383;\n}\n.login-button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #3880ff;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQUU7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBRUo7QUFDRTtFQUNFLGNBQUE7QUFDSjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFBRjtBQUNFO0VBQ0UsY0FBQTtBQUNKO0FBQ0U7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQUk7RUFDRSxpQkFBQTtBQUVOO0FBQ0U7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFDRTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNFO0VBQ0UsY0FBQTtBQUNKOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDQTs7RUFFRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUFFRjs7QUFBQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtBQUdGOztBQURBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUlGOztBQUZBOztFQUVFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUtGOztBQUZBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUtGO0FBSkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFNSjtBQUxJO0VBQ0UsNEJBQUE7QUFPTjtBQUpFO0VBQ0UsZ0JBQUE7QUFNSjs7QUFGQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFLRjtBQUpFO0VBQ0UsdUdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFNSjtBQUpFO0VBQ0UsY0FBQTtBQU1KO0FBTEk7RUFDRSxjQUFBO0FBT04iLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGluZ3tcbiAgbWFyZ2luLXRvcDogMTB2aDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoMXtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICBmb250LXdlaWdodDogMTAwMDtcblxuICB9XG4gIHB7XG4gICAgY29sb3I6ICM4MzgzODM7XG5cbiAgfVxufVxuLnNvY2lhbC1sb2dpbntcbiAgbWFyZ2luLXRvcDogNDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwe1xuICAgIGNvbG9yOiAjODM4MzgzO1xuICB9XG4gIGlvbi1idXR0b257XG4gICAgd2lkdGg6IDI1JTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgaW9uLWljb257XG4gICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICB9XG4gIH1cbiAgLmdvb2dsZSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMDBhY2VlO1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgfVxuICAuZmFjZWJvb2t7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNDI2N2IyO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4XG4gIH1cbn1cbi5lbWFpbC1sb2dpbntcbiAgbWFyZ2luLXRvcDogNDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIHB7XG4gICAgY29sb3I6ICM4MzgzODNcbiAgfVxufVxuLmZvcm1maWVsZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAwcHg7XG4gIGJvcmRlcjogMHB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uZm9ybWZpZWxkID4gaW5wdXQsXG4uZm9ybWZpZWxkID4gbGFiZWwge1xuICBwYWRkaW5nOiAxLjRlbTtcbiAgbWFyZ2luOiAwLjVlbTtcbiAgd2lkdGg6IDg3JTtcbn1cbi5mb3JtZmllbGQgPiBpbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uZm9ybWZpZWxkID4gbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgY29sb3I6ICNjY2M7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbn1cbmlucHV0OmZvY3VzICsgbGFiZWwsXG5pbnB1dDp2YWxpZCArIGxhYmVsIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAxLjNlbTtcbiAgcGFkZGluZzogMHB4IDAuNWVtIDBweCAwLjVlbTtcbiAgbWFyZ2luOiAwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHRvcDogMGVtO1xuICBsZWZ0OiAyZW07XG59XG5cbi5vdGhlci1saW5rcyB7XG4gIG1hcmdpbi1sZWZ0OiA3JTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAucmVtZW1iZXItbWUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwe1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgLmZvcmdvdHtcbiAgICBtYXJnaW4tcmlnaHQ6NyU7XG4gIH1cbn1cblxuLmxvZ2luLWJ1dHRvbnsgIFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIC5sb2dpbntcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmYWM2NDQsICNmYWM2NDQsICNmYWM2NDQsICNmYWM2NDQsICNmYWM2NDQsICNmYWM2NDQsICNmYWM2NDQpO1xuICAgIHdpZHRoOiA0MyU7XG4gICAgaGVpZ2h0OiAyMHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gIH1cbiAgcHtcbiAgICBjb2xvcjogIzgzODM4MztcbiAgICBzcGFue1xuICAgICAgY29sb3I6ICMzODgwZmY7XG4gICAgfVxuICB9XG5cbn1cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ })

}]);
//# sourceMappingURL=src_app_pages_signup_signup_module_ts.js.map