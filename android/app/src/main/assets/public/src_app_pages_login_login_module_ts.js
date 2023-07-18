"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 96906:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPageRoutingModule: () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login */ 53866);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '',
  component: _login__WEBPACK_IMPORTED_MODULE_0__.LoginPage
}];
class LoginPageRoutingModule {}
LoginPageRoutingModule.ɵfac = function LoginPageRoutingModule_Factory(t) {
  return new (t || LoginPageRoutingModule)();
};
LoginPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: LoginPageRoutingModule
});
LoginPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 8364:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginModule: () => (/* binding */ LoginModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 64210);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login */ 53866);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-routing.module */ 96906);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);






class LoginModule {}
LoginModule.ɵfac = function LoginModule_Factory(t) {
  return new (t || LoginModule)();
};
LoginModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: LoginModule
});
LoginModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_1__.LoginPageRoutingModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoginModule, {
    declarations: [_login__WEBPACK_IMPORTED_MODULE_0__.LoginPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_1__.LoginPageRoutingModule]
  });
})();

/***/ }),

/***/ 53866:
/*!**************************************!*\
  !*** ./src/app/pages/login/login.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPage: () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var C_Users_Blessing_Kunaka_Desktop_mining_expo_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/user-data */ 8176);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 32333);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 64210);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);













function LoginPage_ion_note_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-note", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function LoginPage_ion_note_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-note", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Password needs to be 6 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class LoginPage {
  constructor(fb, alertController, loadingController, authService, userData, router) {
    this.fb = fb;
    this.alertController = alertController;
    this.loadingController = loadingController;
    this.authService = authService;
    this.userData = userData;
    this.router = router;
  }
  //Easy access for form fields
  get email() {
    return this.credentials.get('email');
  }
  get password() {
    return this.credentials.get('password');
  }
  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6)]]
    });
  }
  register() {
    var _this = this;
    return (0,C_Users_Blessing_Kunaka_Desktop_mining_expo_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this.loadingController.create();
      yield loading.present();
      const user = yield _this.authService.register(_this.credentials.value);
      yield loading.dismiss();
      if (user) {
        _this.router.navigateByUrl('/signup', {
          replaceUrl: true
        });
      } else {
        _this.showAlert('Registration failed', 'Please try again!');
      }
    })();
  }
  login() {
    var _this2 = this;
    return (0,C_Users_Blessing_Kunaka_Desktop_mining_expo_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this2.loadingController.create();
      yield loading.present();
      const user = yield _this2.authService.login(_this2.credentials.value);
      yield loading.dismiss();
      if (user) {
        _this2.router.navigateByUrl('/app/tabs/schedule', {
          replaceUrl: true
        });
      } else {
        _this2.showAlert('Login failed', 'Please try again!');
      }
    })();
  }
  showAlert(header, message) {
    var _this3 = this;
    return (0,C_Users_Blessing_Kunaka_Desktop_mining_expo_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
        header,
        message,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }
}
LoginPage.ɵfac = function LoginPage_Factory(t) {
  return new (t || LoginPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_providers_user_data__WEBPACK_IMPORTED_MODULE_1__.UserData), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
};
LoginPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: LoginPage,
  selectors: [["page-login"]],
  decls: 43,
  vars: 4,
  consts: [[1, "heading"], [1, "social-login"], [1, "links"], ["routerLink", "/app/tabs/schedule", 1, "google"], ["name", "logo-google"], ["routerLink", "/app/tabs/schedule", 1, "facebook"], ["name", "logo-facebook"], [3, "formGroup", "ngSubmit"], [1, "email-login"], [1, "formfield"], ["type", "email", "formControlName", "email", "name", "email", "id", "email"], ["for", "email", "placeholder", "Email"], ["slot", "error", 4, "ngIf"], ["type", "password", "formControlName", "password", "name", "password", "id", "password"], ["for", "password", "placeholder", "Password"], [1, "other-links"], [1, "remember-me"], [1, "forgot"], [1, "login-button"], ["type", "submit", 1, "login", 3, "disabled"], ["routerLink", "/signup"], ["slot", "error"]],
  template: function LoginPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-content")(1, "div", 0)(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Please login to continue.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 1)(7, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Enter through social networks");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 2)(10, "ion-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "ion-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ion-button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "ion-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "form", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LoginPage_Template_form_ngSubmit_14_listener() {
        return ctx.login();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 8)(16, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Or login with email");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, LoginPage_ion_note_22_Template, 2, 0, "ion-note", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, LoginPage_ion_note_27_Template, 2, 0, "ion-note", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 15)(29, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "ion-checkbox");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Remember Me");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "p", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Forgot Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 18)(36, "ion-button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Don't have an account?");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, " Signup");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.credentials);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.email.dirty || ctx.email.touched) && ctx.email.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.password.dirty || ctx.password.touched) && ctx.password.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.credentials.valid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonNote, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink],
  styles: [".heading[_ngcontent-%COMP%] {\n  margin-top: 10vh;\n  text-align: center;\n}\n.heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 1000;\n}\n.heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #838383;\n}\n\n.social-login[_ngcontent-%COMP%] {\n  margin-top: 45px;\n  text-align: center;\n}\n.social-login[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #838383;\n}\n.social-login[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  width: 25%;\n  height: 50px;\n}\n.social-login[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n.social-login[_ngcontent-%COMP%]   .google[_ngcontent-%COMP%] {\n  --background: #00acee;\n  margin-right: 20px;\n}\n.social-login[_ngcontent-%COMP%]   .facebook[_ngcontent-%COMP%] {\n  --background: #4267b2;\n  margin-left: 20px;\n}\n\n.email-login[_ngcontent-%COMP%] {\n  margin-top: 45px;\n  text-align: center;\n}\n.email-login[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #838383;\n}\n\n.formfield[_ngcontent-%COMP%] {\n  position: relative;\n  margin: auto;\n  padding: 0px;\n  border: 0px;\n  font-size: 1rem;\n  margin-bottom: 10px;\n}\n\n.formfield[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%], .formfield[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  padding: 1.4em;\n  margin: 0.5em;\n  width: 87%;\n}\n\n.formfield[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  outline: none;\n}\n\n.formfield[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  text-align: start;\n  color: #ccc;\n  padding-left: 40px;\n}\n\ninput[_ngcontent-%COMP%]:focus    + label[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:valid    + label[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: auto;\n  height: 1.3em;\n  padding: 0px 0.5em 0px 0.5em;\n  margin: 0px;\n  background: #ffffff;\n  transition: 0.2s ease-in-out;\n  top: 0em;\n  left: 2em;\n}\n\n.other-links[_ngcontent-%COMP%] {\n  margin-left: 7%;\n  display: flex;\n  justify-content: space-between;\n}\n.other-links[_ngcontent-%COMP%]   .remember-me[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.other-links[_ngcontent-%COMP%]   .remember-me[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-left: 10px !important;\n}\n.other-links[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%] {\n  margin-right: 7%;\n}\n\n.login-button[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 25px;\n}\n.login-button[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%] {\n  --background: linear-gradient(to bottom, #fac644, #fac644, #fac644, #fac644, #fac644, #fac644, #fac644);\n  width: 43%;\n  height: 20x;\n  text-transform: none;\n  font-size: 1.3rem;\n}\n.login-button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #838383;\n}\n.login-button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #3880ff;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uL0JsZXNzaW5nJTIwS3VuYWthL0Rlc2t0b3AvbWluaW5nX2V4cG8vbWluaW5nLWV4cG8vc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQUU7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FDRUo7QURDRTtFQUNFLGNBQUE7QUNDSjs7QURHQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNBRjtBRENFO0VBQ0UsY0FBQTtBQ0NKO0FEQ0U7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQUk7RUFDRSxpQkFBQTtBQ0VOO0FEQ0U7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FDQ0o7QURDRTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNDRjtBRENFO0VBQ0UsY0FBQTtBQ0NKOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURDQTs7RUFFRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUNFRjs7QURBQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtBQ0dGOztBRERBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0lGOztBREZBOztFQUVFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQ0tGOztBREZBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQ0tGO0FESkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNNSjtBRExJO0VBQ0UsNEJBQUE7QUNPTjtBREpFO0VBQ0UsZ0JBQUE7QUNNSjs7QURGQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNLRjtBREpFO0VBQ0UsdUdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUNNSjtBREpFO0VBQ0UsY0FBQTtBQ01KO0FETEk7RUFDRSxjQUFBO0FDT04iLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGluZ3tcclxuICBtYXJnaW4tdG9wOiAxMHZoO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoMXtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDA7XHJcblxyXG4gIH1cclxuICBwe1xyXG4gICAgY29sb3I6ICM4MzgzODM7XHJcblxyXG4gIH1cclxufVxyXG4uc29jaWFsLWxvZ2lue1xyXG4gIG1hcmdpbi10b3A6IDQ1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHB7XHJcbiAgICBjb2xvcjogIzgzODM4MztcclxuICB9XHJcbiAgaW9uLWJ1dHRvbntcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBpb24taWNvbntcclxuICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5nb29nbGUge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDBhY2VlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICAuZmFjZWJvb2t7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM0MjY3YjI7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweFxyXG4gIH1cclxufVxyXG4uZW1haWwtbG9naW57XHJcbiAgbWFyZ2luLXRvcDogNDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIHB7XHJcbiAgICBjb2xvcjogIzgzODM4M1xyXG4gIH1cclxufVxyXG4uZm9ybWZpZWxkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBib3JkZXI6IDBweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uZm9ybWZpZWxkID4gaW5wdXQsXHJcbi5mb3JtZmllbGQgPiBsYWJlbCB7XHJcbiAgcGFkZGluZzogMS40ZW07XHJcbiAgbWFyZ2luOiAwLjVlbTtcclxuICB3aWR0aDogODclO1xyXG59XHJcbi5mb3JtZmllbGQgPiBpbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5mb3JtZmllbGQgPiBsYWJlbCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICBjb2xvcjogI2NjYztcclxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbn1cclxuaW5wdXQ6Zm9jdXMgKyBsYWJlbCxcclxuaW5wdXQ6dmFsaWQgKyBsYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogMS4zZW07XHJcbiAgcGFkZGluZzogMHB4IDAuNWVtIDBweCAwLjVlbTtcclxuICBtYXJnaW46IDBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgdG9wOiAwZW07XHJcbiAgbGVmdDogMmVtO1xyXG59XHJcblxyXG4ub3RoZXItbGlua3Mge1xyXG4gIG1hcmdpbi1sZWZ0OiA3JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAucmVtZW1iZXItbWUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwe1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuICAuZm9yZ290e1xyXG4gICAgbWFyZ2luLXJpZ2h0OjclO1xyXG4gIH1cclxufVxyXG5cclxuLmxvZ2luLWJ1dHRvbnsgIFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIC5sb2dpbntcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZhYzY0NCwgI2ZhYzY0NCwgI2ZhYzY0NCwgI2ZhYzY0NCwgI2ZhYzY0NCwgI2ZhYzY0NCwgI2ZhYzY0NCk7XHJcbiAgICB3aWR0aDogNDMlO1xyXG4gICAgaGVpZ2h0OiAyMHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIH1cclxuICBwe1xyXG4gICAgY29sb3I6ICM4MzgzODM7XHJcbiAgICBzcGFue1xyXG4gICAgICBjb2xvcjogIzM4ODBmZjtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iLCIuaGVhZGluZyB7XG4gIG1hcmdpbi10b3A6IDEwdmg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5oZWFkaW5nIGgxIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiAxMDAwO1xufVxuLmhlYWRpbmcgcCB7XG4gIGNvbG9yOiAjODM4MzgzO1xufVxuXG4uc29jaWFsLWxvZ2luIHtcbiAgbWFyZ2luLXRvcDogNDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNvY2lhbC1sb2dpbiBwIHtcbiAgY29sb3I6ICM4MzgzODM7XG59XG4uc29jaWFsLWxvZ2luIGlvbi1idXR0b24ge1xuICB3aWR0aDogMjUlO1xuICBoZWlnaHQ6IDUwcHg7XG59XG4uc29jaWFsLWxvZ2luIGlvbi1idXR0b24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDEuNnJlbTtcbn1cbi5zb2NpYWwtbG9naW4gLmdvb2dsZSB7XG4gIC0tYmFja2dyb3VuZDogIzAwYWNlZTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLnNvY2lhbC1sb2dpbiAuZmFjZWJvb2sge1xuICAtLWJhY2tncm91bmQ6ICM0MjY3YjI7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uZW1haWwtbG9naW4ge1xuICBtYXJnaW4tdG9wOiA0NXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZW1haWwtbG9naW4gcCB7XG4gIGNvbG9yOiAjODM4MzgzO1xufVxuXG4uZm9ybWZpZWxkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDBweDtcbiAgYm9yZGVyOiAwcHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmZvcm1maWVsZCA+IGlucHV0LFxuLmZvcm1maWVsZCA+IGxhYmVsIHtcbiAgcGFkZGluZzogMS40ZW07XG4gIG1hcmdpbjogMC41ZW07XG4gIHdpZHRoOiA4NyU7XG59XG5cbi5mb3JtZmllbGQgPiBpbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5mb3JtZmllbGQgPiBsYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBjb2xvcjogI2NjYztcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xufVxuXG5pbnB1dDpmb2N1cyArIGxhYmVsLFxuaW5wdXQ6dmFsaWQgKyBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMS4zZW07XG4gIHBhZGRpbmc6IDBweCAwLjVlbSAwcHggMC41ZW07XG4gIG1hcmdpbjogMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xuICB0b3A6IDBlbTtcbiAgbGVmdDogMmVtO1xufVxuXG4ub3RoZXItbGlua3Mge1xuICBtYXJnaW4tbGVmdDogNyU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5vdGhlci1saW5rcyAucmVtZW1iZXItbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm90aGVyLWxpbmtzIC5yZW1lbWJlci1tZSBwIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbn1cbi5vdGhlci1saW5rcyAuZm9yZ290IHtcbiAgbWFyZ2luLXJpZ2h0OiA3JTtcbn1cblxuLmxvZ2luLWJ1dHRvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cbi5sb2dpbi1idXR0b24gLmxvZ2luIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmFjNjQ0LCAjZmFjNjQ0LCAjZmFjNjQ0LCAjZmFjNjQ0LCAjZmFjNjQ0LCAjZmFjNjQ0LCAjZmFjNjQ0KTtcbiAgd2lkdGg6IDQzJTtcbiAgaGVpZ2h0OiAyMHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cbi5sb2dpbi1idXR0b24gcCB7XG4gIGNvbG9yOiAjODM4MzgzO1xufVxuLmxvZ2luLWJ1dHRvbiBwIHNwYW4ge1xuICBjb2xvcjogIzM4ODBmZjtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 32333:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var C_Users_Blessing_Kunaka_Desktop_mining_expo_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ 4404);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);




class AuthService {
  constructor(auth) {
    this.auth = auth;
  }
  register({
    email,
    password
  }) {
    var _this = this;
    return (0,C_Users_Blessing_Kunaka_Desktop_mining_expo_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const user = yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__.createUserWithEmailAndPassword)(_this.auth, email, password);
        return user;
      } catch (e) {
        return null;
      }
    })();
  }
  login({
    email,
    password
  }) {
    var _this2 = this;
    return (0,C_Users_Blessing_Kunaka_Desktop_mining_expo_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const user = yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(_this2.auth, email, password);
        return user;
      } catch (e) {
        return null;
      }
    })();
  }
  logout() {
    return (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(this.auth);
  }
}
AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__.Auth));
};
AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac,
  providedIn: 'root'
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF9wYWdlc19sb2dpbl9sb2dpbl9tb2R1bGVfdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUN1RDtBQUVuQjs7O0FBRXBDLE1BQU1FLE1BQU0sR0FBVyxDQUNyQjtFQUNFQyxJQUFJLEVBQUUsRUFBRTtFQUNSQyxTQUFTLEVBQUVILDZDQUFTQTtDQUNyQixDQUNGO0FBRUQsTUFJYUksc0JBQXNCO0FBQXRCQSxzQkFBc0I7bUJBQXRCQSxzQkFBc0I7QUFBQTtBQUF0QkEsc0JBQXNCO1FBQXRCQTtBQUFzQjtBQUF0QkEsc0JBQXNCO1lBSHZCTCx5REFBWSxDQUFDTSxRQUFRLENBQUNKLE1BQU0sQ0FBQyxFQUM3QkYseURBQVk7QUFBQTtBQUVXOztzSEFBdEJLLHNCQUFzQjtJQUFBRSxPQUFBLEdBQUFDLHlEQUFBO0lBQUFDLE9BQUEsR0FGdkJULHlEQUFZO0VBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNidUI7QUFDbUI7QUFDckI7QUFFVDtBQUM0Qjs7QUFFaEUsTUFZYWMsV0FBVztBQUFYQSxXQUFXO21CQUFYQSxXQUFXO0FBQUE7QUFBWEEsV0FBVztRQUFYQTtBQUFXO0FBQVhBLFdBQVc7WUFWcEJKLHlEQUFZLEVBQ1pDLHVEQUFXLEVBQ1hDLCtEQUFtQixFQUNuQkMsdURBQVcsRUFDWFIseUVBQXNCO0FBQUE7QUFNRjs7c0hBQVhTLFdBQVc7SUFBQUMsWUFBQSxHQUhwQmQsNkNBQVM7SUFBQU0sT0FBQSxHQVBURyx5REFBWSxFQUNaQyx1REFBVyxFQUNYQywrREFBbUIsRUFDbkJDLHVEQUFXLEVBQ1hSLHlFQUFzQjtFQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYmtEO0FBQ25DO0FBRVk7QUFHZTtBQUNWOzs7Ozs7Ozs7O0lDZ0JwRG1CLDREQUFBLG1CQUNDO0lBQUFBLG9EQUFBLHVCQUFnQjtJQUFBQSwwREFBQSxFQUFXOzs7OztJQUs1QkEsNERBQUEsbUJBQ0M7SUFBQUEsb0RBQUEsd0NBQWlDO0lBQUFB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QUEsQ0FBQWtELEtBQUEsQ0FBK0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDb0M7OztBQUUvRyxNQUdhL0QsV0FBVztFQUV0QkssWUFBb0IrRCxJQUFTO0lBQVQsS0FBQUEsSUFBSSxHQUFKQSxJQUFJO0VBQVM7RUFFM0JoRCxRQUFRQSxDQUFDO0lBQUVSLEtBQUs7SUFBRUc7RUFBUSxDQUFFO0lBQUEsSUFBQU0sS0FBQTtJQUFBLE9BQUFDLDhKQUFBO01BQ2hDLElBQUk7UUFDRixNQUFNSSxJQUFJLFNBQVN1QyxrRkFBOEIsQ0FDL0M1QyxLQUFJLENBQUMrQyxJQUFJLEVBQ1R4RCxLQUFLLEVBQ0xHLFFBQVEsQ0FDUDtRQUNELE9BQU9XLElBQUk7T0FDZCxDQUFDLE9BQU8yQyxDQUFDLEVBQUU7UUFDVixPQUFPLElBQUk7O0lBQ1o7RUFDSDtFQUVNckMsS0FBS0EsQ0FBQztJQUFFcEIsS0FBSztJQUFFRztFQUFRLENBQUU7SUFBQSxJQUFBa0IsTUFBQTtJQUFBLE9BQUFYLDhKQUFBO01BQzdCLElBQUk7UUFDRixNQUFNSSxJQUFJLFNBQVN3Qyw4RUFBMEIsQ0FDM0NqQyxNQUFJLENBQUNtQyxJQUFJLEVBQ1R4RCxLQUFLLEVBQ0xHLFFBQVEsQ0FDUDtRQUNELE9BQU9XLElBQUk7T0FDZCxDQUFDLE9BQU8yQyxDQUFDLEVBQUU7UUFDVixPQUFPLElBQUk7O0lBQ1o7RUFDSDtFQUNBQyxNQUFNQSxDQUFBO0lBQ0osT0FBT0gsMkRBQU8sQ0FBQyxJQUFJLENBQUNDLElBQUksQ0FBQztFQUMzQjs7QUEvQldwRSxXQUFXO21CQUFYQSxXQUFXLEVBQUFDLHNEQUFBLENBQUFoQixvREFBQTtBQUFBO0FBQVhlLFdBQVc7U0FBWEEsV0FBVztFQUFBd0UsT0FBQSxFQUFYeEUsV0FBVyxDQUFBeUUsSUFBQTtFQUFBQyxVQUFBLEVBRlY7QUFBTSIsInNvdXJjZXMiOlsiLi9zcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLXJvdXRpbmcubW9kdWxlLnRzIiwiLi9zcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLm1vZHVsZS50cyIsIi4vc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi50cyIsIi4vc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5odG1sIiwiLi9zcmMvYXBwL3NlcnZpY2VzL2F1dGguc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBMb2dpblBhZ2UgfSBmcm9tICcuL2xvZ2luJztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gIHtcclxuICAgIHBhdGg6ICcnLFxyXG4gICAgY29tcG9uZW50OiBMb2dpblBhZ2VcclxuICB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luUGFnZVJvdXRpbmdNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcclxuXHJcbmltcG9ydCB7IExvZ2luUGFnZSB9IGZyb20gJy4vbG9naW4nO1xyXG5pbXBvcnQgeyBMb2dpblBhZ2VSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9sb2dpbi1yb3V0aW5nLm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIElvbmljTW9kdWxlLFxyXG4gICAgTG9naW5QYWdlUm91dGluZ01vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBMb2dpblBhZ2UsXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Nb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIE5nRm9ybSwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFVzZXJEYXRhIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL3VzZXItZGF0YSc7XHJcblxyXG5pbXBvcnQgeyBVc2VyT3B0aW9ucyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvdXNlci1vcHRpb25zJztcclxuaW1wb3J0IHsgQWxlcnRDb250cm9sbGVyLCBMb2FkaW5nQ29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BhZ2UtbG9naW4nLFxyXG4gIHRlbXBsYXRlVXJsOiAnbG9naW4uaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbG9naW4uc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5QYWdlIGltcGxlbWVudHMgT25Jbml0e1xyXG4gIC8vbG9naW46IFVzZXJPcHRpb25zID0geyB1c2VybmFtZTogJycsIHBhc3N3b3JkOiAnJyB9O1xyXG4gIC8vc3VibWl0dGVkID0gZmFsc2U7XHJcblxyXG4gIGNyZWRlbnRpYWxzOiBGb3JtR3JvdXA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICBwcml2YXRlIGFsZXJ0Q29udHJvbGxlcjogQWxlcnRDb250cm9sbGVyLFxyXG5cdFx0cHJpdmF0ZSBsb2FkaW5nQ29udHJvbGxlcjogTG9hZGluZ0NvbnRyb2xsZXIsXHJcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcclxuICAgIHB1YmxpYyB1c2VyRGF0YTogVXNlckRhdGEsXHJcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXJcclxuICApIHsgfVxyXG5cclxuICAvL0Vhc3kgYWNjZXNzIGZvciBmb3JtIGZpZWxkc1xyXG4gIGdldCBlbWFpbCgpe1xyXG4gICAgcmV0dXJuIHRoaXMuY3JlZGVudGlhbHMuZ2V0KCdlbWFpbCcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBhc3N3b3JkKCl7XHJcbiAgICByZXR1cm4gdGhpcy5jcmVkZW50aWFscy5nZXQoJ3Bhc3N3b3JkJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpe1xyXG4gICAgdGhpcy5jcmVkZW50aWFscyA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICBlbWFpbDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5lbWFpbF1dLFxyXG4gICAgICBwYXNzd29yZDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNildXVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyByZWdpc3RlcigpIHtcclxuXHRcdGNvbnN0IGxvYWRpbmcgPSBhd2FpdCB0aGlzLmxvYWRpbmdDb250cm9sbGVyLmNyZWF0ZSgpO1xyXG5cdFx0YXdhaXQgbG9hZGluZy5wcmVzZW50KCk7XHJcblxyXG5cdFx0Y29uc3QgdXNlciA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UucmVnaXN0ZXIodGhpcy5jcmVkZW50aWFscy52YWx1ZSk7XHJcblx0XHRhd2FpdCBsb2FkaW5nLmRpc21pc3MoKTtcclxuXHJcblx0XHRpZiAodXNlcikge1xyXG5cdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvc2lnbnVwJywgeyByZXBsYWNlVXJsOiB0cnVlIH0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5zaG93QWxlcnQoJ1JlZ2lzdHJhdGlvbiBmYWlsZWQnLCAnUGxlYXNlIHRyeSBhZ2FpbiEnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGFzeW5jIGxvZ2luKCkge1xyXG5cdFx0Y29uc3QgbG9hZGluZyA9IGF3YWl0IHRoaXMubG9hZGluZ0NvbnRyb2xsZXIuY3JlYXRlKCk7XHJcblx0XHRhd2FpdCBsb2FkaW5nLnByZXNlbnQoKTtcclxuXHJcblx0XHRjb25zdCB1c2VyID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5sb2dpbih0aGlzLmNyZWRlbnRpYWxzLnZhbHVlKTtcclxuXHRcdGF3YWl0IGxvYWRpbmcuZGlzbWlzcygpO1xyXG5cclxuXHRcdGlmICh1c2VyKSB7XHJcblx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy9hcHAvdGFicy9zY2hlZHVsZScsIHsgcmVwbGFjZVVybDogdHJ1ZSB9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuc2hvd0FsZXJ0KCdMb2dpbiBmYWlsZWQnLCAnUGxlYXNlIHRyeSBhZ2FpbiEnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG4gIGFzeW5jIHNob3dBbGVydChoZWFkZXIsIG1lc3NhZ2UpIHtcclxuICAgIGNvbnN0IGFsZXJ0ID0gYXdhaXQgdGhpcy5hbGVydENvbnRyb2xsZXIuY3JlYXRlKHtcclxuICAgICAgaGVhZGVyLFxyXG4gICAgICBtZXNzYWdlLFxyXG4gICAgICBidXR0b25zOiBbJ09LJ10sXHJcbiAgICB9KTtcclxuICAgIGF3YWl0IGFsZXJ0LnByZXNlbnQoKTtcclxuICB9XHJcblxyXG4gIC8vIG9uTG9naW4oZm9ybTogTmdGb3JtKSB7XHJcbiAgICAvLyB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XHJcblxyXG4gICAgLy8gaWYgKGZvcm0udmFsaWQpIHtcclxuICAgICAgLy8gdGhpcy51c2VyRGF0YS5sb2dpbih0aGlzLmxvZ2luLnVzZXJuYW1lKTtcclxuICAgICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL2FwcC90YWJzL3NjaGVkdWxlJyk7XHJcbiAgICAvLyB9XHJcbiAgLy8gfVxyXG5cclxuICAvLyBvblNpZ251cCgpIHtcclxuICAgIC8vIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy9zaWdudXAnKTtcclxuICAvLyB9XHJcbn1cclxuIiwiPGlvbi1jb250ZW50PlxyXG4gIDxkaXYgY2xhc3M9XCJoZWFkaW5nXCI+XHJcbiAgICA8aDE+TG9naW48L2gxPlxyXG4gICAgPHA+UGxlYXNlIGxvZ2luIHRvIGNvbnRpbnVlLjwvcD5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwic29jaWFsLWxvZ2luXCI+XHJcbiAgICA8cD5FbnRlciB0aHJvdWdoIHNvY2lhbCBuZXR3b3JrczwvcD5cclxuICAgIDxkaXYgY2xhc3M9XCJsaW5rc1wiPlxyXG4gICAgICA8aW9uLWJ1dHRvbiBjbGFzcz1cImdvb2dsZVwiIHJvdXRlckxpbms9XCIvYXBwL3RhYnMvc2NoZWR1bGVcIj5cclxuICAgICAgICA8aW9uLWljb24gbmFtZT1cImxvZ28tZ29vZ2xlXCI+PC9pb24taWNvbj5cclxuICAgICAgPC9pb24tYnV0dG9uPlxyXG4gICAgICA8aW9uLWJ1dHRvbiBjbGFzcz1cImZhY2Vib29rXCIgcm91dGVyTGluaz1cIi9hcHAvdGFicy9zY2hlZHVsZVwiPlxyXG4gICAgICAgIDxpb24taWNvbiBuYW1lPVwibG9nby1mYWNlYm9va1wiPjwvaW9uLWljb24+XHJcbiAgICAgIDwvaW9uLWJ1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5cclxuXHJcbiAgPGZvcm0gKG5nU3VibWl0KT1cImxvZ2luKClcIiBbZm9ybUdyb3VwXT1cImNyZWRlbnRpYWxzXCI+XHJcbiAgPGRpdiBjbGFzcz1cImVtYWlsLWxvZ2luXCI+XHJcbiAgICA8cD5PciBsb2dpbiB3aXRoIGVtYWlsPC9wPlxyXG4gICAgPGRpdiBjbGFzcz1cImZvcm1maWVsZFwiPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgZm9ybUNvbnRyb2xOYW1lPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBpZD1cImVtYWlsXCI+XHJcbiAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIj5FbWFpbDwvbGFiZWw+XHJcbiAgICAgIDxpb24tbm90ZSBzbG90PVwiZXJyb3JcIiAqbmdJZj1cIihlbWFpbC5kaXJ0eSB8fCBlbWFpbC50b3VjaGVkKSAmJiBlbWFpbC5lcnJvcnNcIlxyXG4gICAgICA+RW1haWwgaXMgaW52YWxpZDwvaW9uLW5vdGU+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJmb3JtZmllbGRcIj5cclxuICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGZvcm1Db250cm9sTmFtZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiPlxyXG4gICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICA8aW9uLW5vdGUgc2xvdD1cImVycm9yXCIgKm5nSWY9XCIocGFzc3dvcmQuZGlydHkgfHwgcGFzc3dvcmQudG91Y2hlZCkgJiYgcGFzc3dvcmQuZXJyb3JzXCJcclxuICAgICAgPlBhc3N3b3JkIG5lZWRzIHRvIGJlIDYgY2hhcmFjdGVyczwvaW9uLW5vdGU+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJvdGhlci1saW5rc1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicmVtZW1iZXItbWVcIj5cclxuICAgICAgICA8aW9uLWNoZWNrYm94PjwvaW9uLWNoZWNrYm94PlxyXG4gICAgICAgIDxwPlJlbWVtYmVyIE1lPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHAgY2xhc3M9XCJmb3Jnb3RcIj5Gb3Jnb3QgUGFzc3dvcmQ8L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwibG9naW4tYnV0dG9uXCI+XHJcbiAgICA8aW9uLWJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJsb2dpblwiIFtkaXNhYmxlZF09XCIhY3JlZGVudGlhbHMudmFsaWRcIj5Mb2dpbjwvaW9uLWJ1dHRvbj5cclxuICAgIDxwPkRvbid0IGhhdmUgYW4gYWNjb3VudD88c3BhbiByb3V0ZXJMaW5rPVwiL3NpZ251cFwiPiAgU2lnbnVwPC9zcGFuPjxwPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9mb3JtPlxyXG48L2lvbi1jb250ZW50PlxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEF1dGgsIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCwgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQsIHNpZ25PdXQgfSBmcm9tICdAYW5ndWxhci9maXJlL2F1dGgnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGg6QXV0aCkgeyB9XHJcblxyXG4gIGFzeW5jIHJlZ2lzdGVyKHsgZW1haWwsIHBhc3N3b3JkIH0pe1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChcclxuICAgICAgICB0aGlzLmF1dGgsXHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmRcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGxvZ2luKHsgZW1haWwsIHBhc3N3b3JkIH0pe1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKFxyXG4gICAgICAgIHRoaXMuYXV0aCxcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICBwYXNzd29yZFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuICBsb2dvdXQoKSB7XHJcbiAgICByZXR1cm4gc2lnbk91dCh0aGlzLmF1dGgpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiUm91dGVyTW9kdWxlIiwiTG9naW5QYWdlIiwicm91dGVzIiwicGF0aCIsImNvbXBvbmVudCIsIkxvZ2luUGFnZVJvdXRpbmdNb2R1bGUiLCJmb3JDaGlsZCIsImltcG9ydHMiLCJpMSIsImV4cG9ydHMiLCJDb21tb25Nb2R1bGUiLCJGb3Jtc01vZHVsZSIsIlJlYWN0aXZlRm9ybXNNb2R1bGUiLCJJb25pY01vZHVsZSIsIkxvZ2luTW9kdWxlIiwiZGVjbGFyYXRpb25zIiwiRm9ybUJ1aWxkZXIiLCJGb3JtR3JvdXAiLCJWYWxpZGF0b3JzIiwiUm91dGVyIiwiVXNlckRhdGEiLCJBbGVydENvbnRyb2xsZXIiLCJMb2FkaW5nQ29udHJvbGxlciIsIkF1dGhTZXJ2aWNlIiwiaTAiLCLJtcm1ZWxlbWVudFN0YXJ0IiwiybXJtXRleHQiLCLJtcm1ZWxlbWVudEVuZCIsImNvbnN0cnVjdG9yIiwiZmIiLCJhbGVydENvbnRyb2xsZXIiLCJsb2FkaW5nQ29udHJvbGxlciIsImF1dGhTZXJ2aWNlIiwidXNlckRhdGEiLCJyb3V0ZXIiLCJlbWFpbCIsImNyZWRlbnRpYWxzIiwiZ2V0IiwicGFzc3dvcmQiLCJuZ09uSW5pdCIsImdyb3VwIiwicmVxdWlyZWQiLCJtaW5MZW5ndGgiLCJyZWdpc3RlciIsIl90aGlzIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJsb2FkaW5nIiwiY3JlYXRlIiwicHJlc2VudCIsInVzZXIiLCJ2YWx1ZSIsImRpc21pc3MiLCJuYXZpZ2F0ZUJ5VXJsIiwicmVwbGFjZVVybCIsInNob3dBbGVydCIsImxvZ2luIiwiX3RoaXMyIiwiaGVhZGVyIiwibWVzc2FnZSIsIl90aGlzMyIsImFsZXJ0IiwiYnV0dG9ucyIsIsm1ybVkaXJlY3RpdmVJbmplY3QiLCJpMiIsImkzIiwiaTQiLCJpNSIsInNlbGVjdG9ycyIsImRlY2xzIiwidmFycyIsImNvbnN0cyIsInRlbXBsYXRlIiwiTG9naW5QYWdlX1RlbXBsYXRlIiwicmYiLCJjdHgiLCLJtcm1ZWxlbWVudCIsIsm1ybVsaXN0ZW5lciIsIkxvZ2luUGFnZV9UZW1wbGF0ZV9mb3JtX25nU3VibWl0XzE0X2xpc3RlbmVyIiwiybXJtXRlbXBsYXRlIiwiTG9naW5QYWdlX2lvbl9ub3RlXzIyX1RlbXBsYXRlIiwiTG9naW5QYWdlX2lvbl9ub3RlXzI3X1RlbXBsYXRlIiwiybXJtWFkdmFuY2UiLCLJtcm1cHJvcGVydHkiLCJkaXJ0eSIsInRvdWNoZWQiLCJlcnJvcnMiLCJ2YWxpZCIsIkF1dGgiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25PdXQiLCJhdXRoIiwiZSIsImxvZ291dCIsIsm1ybVpbmplY3QiLCJmYWN0b3J5IiwiybVmYWMiLCJwcm92aWRlZEluIl0sInNvdXJjZVJvb3QiOiJ3ZWJwYWNrOi8vLyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOltdfQ==