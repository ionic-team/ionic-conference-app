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
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map