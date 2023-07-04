"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login */ 4514);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);




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

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModule": () => (/* binding */ LoginModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4615);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5992);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login */ 4514);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);






class LoginModule {}
LoginModule.ɵfac = function LoginModule_Factory(t) {
  return new (t || LoginModule)();
};
LoginModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: LoginModule
});
LoginModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_1__.LoginPageRoutingModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoginModule, {
    declarations: [_login__WEBPACK_IMPORTED_MODULE_0__.LoginPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_1__.LoginPageRoutingModule]
  });
})();

/***/ }),

/***/ 4514:
/*!**************************************!*\
  !*** ./src/app/pages/login/login.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../providers/user-data */ 6401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 5992);







class LoginPage {
  constructor(userData, router) {
    this.userData = userData;
    this.router = router;
    this.login = {
      username: '',
      password: ''
    };
    this.submitted = false;
  }
  onLogin(form) {
    this.submitted = true;
    if (form.valid) {
      this.userData.login(this.login.username);
      this.router.navigateByUrl('/app/tabs/schedule');
    }
  }
  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
LoginPage.ɵfac = function LoginPage_Factory(t) {
  return new (t || LoginPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_user_data__WEBPACK_IMPORTED_MODULE_0__.UserData), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
LoginPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: LoginPage,
  selectors: [["page-login"]],
  decls: 25,
  vars: 2,
  consts: [["slot", "start"], [1, "login-logo"], ["src", "assets/img/largeminingexpologo.jpg", "alt", "Mining Expo logo"], [1, "login-form"], ["novalidate", ""], ["loginForm", "ngForm"], ["label", "Username", "labelPlacement", "stacked", "fill", "solid", "name", "username", "type", "text", "spellcheck", "false", "autocapitalize", "off", "errorText", "Username is required", "required", "", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], ["label", "Password", "labelPlacement", "stacked", "fill", "solid", "name", "password", "type", "password", "errorText", "Password is required", "required", "", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["type", "submit", "expand", "block", 3, "click"], ["color", "light", "expand", "block", 3, "click"], ["src", "assets/img/rmbLogo.png", "alt", "RMB logo"]],
  template: function LoginPage_Template(rf, ctx) {
    if (rf & 1) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-menu-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content")(7, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3)(10, "form", 4, 5)(12, "ion-input", 6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginPage_Template_ion_input_ngModelChange_12_listener($event) {
        return ctx.login.username = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-input", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginPage_Template_ion_input_ngModelChange_14_listener($event) {
        return ctx.login.password = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-row")(17, "ion-col")(18, "ion-button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginPage_Template_ion_button_click_18_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onLogin(_r0));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-col")(21, "ion-button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginPage_Template_ion_button_click_21_listener() {
        return ctx.onSignup();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Signup");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.login.username);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.login.password);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.TextValueAccessor],
  styles: ["ion[_ngcontent-%COMP%]   content[_ngcontent-%COMP%] {\n  --ion-background-color:#4c8bf7 !important;\n}\n\nion-header[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  --ion-background-color:transparent;\n  --opacity:0;\n}\n\n.login-logo[_ngcontent-%COMP%] {\n  min-height: 200px;\n  padding: 20px 0;\n  text-align: center;\n}\n\n.login-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 250px;\n}\n\n.login-form[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\nion-input[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.login-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 250px;\n  padding: 20px 0;\n  text-align: bottom;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtBQUVGOztBQUNBO0VBQ0Msa0NBQUE7RUFDQSxXQUFBO0FBRUQ7O0FBQUE7RUFDRSxpQkFBQTtFQUVBLGVBQUE7RUFFQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUVGIiwic291cmNlc0NvbnRlbnQiOlsiaW9uIGNvbnRlbnR7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzRjOGJmNyAhaW1wb3J0YW50O1xufVxuaW9uLWhlYWRlcntcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIFxufVxuaW9uLXRvb2xiYXJ7XG4gLS1pb24tYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcbiAtLW9wYWNpdHk6MDtcbn1cbi5sb2dpbi1sb2dvIHtcbiAgbWluLWhlaWdodDogMjAwcHg7XG5cbiAgcGFkZGluZzogMjBweCAwO1xuXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luLWxvZ28gaW1nIHtcbiAgbWF4LXdpZHRoOiAyNTBweDtcbn1cblxuLmxvZ2luLWZvcm0ge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG5pb24taW5wdXQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmxvZ2luLWxvZ28gaW1nIHtcbiAgbWF4LXdpZHRoOiAyNTBweDtcbiAgcGFkZGluZzogMjBweCAwO1xuICB0ZXh0LWFsaWduOiBib3R0b207XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF9wYWdlc19sb2dpbl9sb2dpbl9tb2R1bGVfdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUN1RDtBQUVuQjs7O0FBRXBDLE1BQU1FLE1BQU0sR0FBVyxDQUNyQjtFQUNFQyxJQUFJLEVBQUUsRUFBRTtFQUNSQyxTQUFTLEVBQUVILDZDQUFTQTtDQUNyQixDQUNGO0FBRUQsTUFJYUksc0JBQXNCO0FBQXRCQSxzQkFBc0I7bUJBQXRCQSxzQkFBc0I7QUFBQTtBQUF0QkEsc0JBQXNCO1FBQXRCQTtBQUFzQjtBQUF0QkEsc0JBQXNCO1lBSHZCTCxrRUFBcUIsQ0FBQ0UsTUFBTSxDQUFDLEVBQzdCRix5REFBWTtBQUFBO0FBRVc7O3NIQUF0Qkssc0JBQXNCO0lBQUFFLE9BQUEsR0FBQUMseURBQUE7SUFBQUMsT0FBQSxHQUZ2QlQseURBQVk7RUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2J1QjtBQUNGO0FBQ0E7QUFFVDtBQUM0Qjs7QUFFaEUsTUFXYWEsV0FBVztBQUFYQSxXQUFXO21CQUFYQSxXQUFXO0FBQUE7QUFBWEEsV0FBVztRQUFYQTtBQUFXO0FBQVhBLFdBQVc7WUFUcEJILHlEQUFZLEVBQ1pDLHVEQUFXLEVBQ1hDLHVEQUFXLEVBQ1hQLHlFQUFzQjtBQUFBO0FBTUY7O3NIQUFYUSxXQUFXO0lBQUFDLFlBQUEsR0FIcEJiLDZDQUFTO0lBQUFNLE9BQUEsR0FOVEcseURBQVksRUFDWkMsdURBQVcsRUFDWEMsdURBQVcsRUFDWFAseUVBQXNCO0VBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hlO0FBRVk7Ozs7OztBQU1yRCxNQUthSixTQUFTO0VBSXBCZ0IsWUFDU0MsUUFBa0IsRUFDbEJDLE1BQWM7SUFEZCxLQUFBRCxRQUFRLEdBQVJBLFFBQVE7SUFDUixLQUFBQyxNQUFNLEdBQU5BLE1BQU07SUFMZixLQUFBQyxLQUFLLEdBQWdCO01BQUVDLFFBQVEsRUFBRSxFQUFFO01BQUVDLFFBQVEsRUFBRTtJQUFFLENBQUU7SUFDbkQsS0FBQUMsU0FBUyxHQUFHLEtBQUs7RUFLYjtFQUVKQyxPQUFPQSxDQUFDQyxJQUFZO0lBQ2xCLElBQUksQ0FBQ0YsU0FBUyxHQUFHLElBQUk7SUFFckIsSUFBSUUsSUFBSSxDQUFDQyxLQUFLLEVBQUU7TUFDZCxJQUFJLENBQUNSLFFBQVEsQ0FBQ0UsS0FBSyxDQUFDLElBQUksQ0FBQ0EsS0FBSyxDQUFDQyxRQUFRLENBQUM7TUFDeEMsSUFBSSxDQUFDRixNQUFNLENBQUNRLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQzs7RUFFbkQ7RUFFQUMsUUFBUUEsQ0FBQTtJQUNOLElBQUksQ0FBQ1QsTUFBTSxDQUFDUSxhQUFhLENBQUMsU0FBUyxDQUFDO0VBQ3RDOztBQXBCVzFCLFNBQVM7bUJBQVRBLFNBQVMsRUFBQTRCLCtEQUFBLENBQUFyQiwwREFBQSxHQUFBcUIsK0RBQUEsQ0FBQUUsbURBQUE7QUFBQTtBQUFUOUIsU0FBUztRQUFUQSxTQUFTO0VBQUErQixTQUFBO0VBQUFDLEtBQUE7RUFBQUMsSUFBQTtFQUFBQyxNQUFBO0VBQUFDLFFBQUEsV0FBQUMsbUJBQUFDLEVBQUEsRUFBQUMsR0FBQTtJQUFBLElBQUFELEVBQUE7O01DZnRCVCw0REFBQSxpQkFBYTtNQUdQQSx1REFBQSxzQkFBbUM7TUFDckNBLDBEQUFBLEVBQWM7TUFFZEEsNERBQUEsZ0JBQVc7TUFBQUEsb0RBQUEsWUFBSztNQUFBQSwwREFBQSxFQUFZO01BSWhDQSw0REFBQSxrQkFBYTtNQUVUQSx1REFBQSxhQUFxRTtNQUN2RUEsMERBQUEsRUFBTTtNQUVOQSw0REFBQSxhQUF3QjtNQU1sQkEsd0RBQUEsMkJBQUFnQix1REFBQUMsTUFBQTtRQUFBLE9BQUFQLEdBQUEsQ0FBQW5CLEtBQUEsQ0FBQUMsUUFBQSxHQUFBeUIsTUFBQTtNQUFBLEVBQTRCO01BUTlCakIsMERBQUEsRUFBWTtNQUVaQSw0REFBQSx1QkFTVztNQUxUQSx3REFBQSwyQkFBQWtCLHVEQUFBRCxNQUFBO1FBQUEsT0FBQVAsR0FBQSxDQUFBbkIsS0FBQSxDQUFBRSxRQUFBLEdBQUF3QixNQUFBO01BQUEsRUFBNEI7TUFNOUJqQiwwREFBQSxFQUFZO01BRVpBLDREQUFBLGVBQVM7TUFFT0Esd0RBQUEsbUJBQUFtQixnREFBQTtRQUFBbkIsMkRBQUEsQ0FBQXFCLEdBQUE7UUFBQSxNQUFBQyxHQUFBLEdBQUF0Qix5REFBQTtRQUFBLE9BQVNBLHlEQUFBLENBQUFVLEdBQUEsQ0FBQWYsT0FBQSxDQUFBMkIsR0FBQSxDQUFrQjtNQUFBLEVBQUM7TUFBOEJ0QixvREFBQSxhQUFLO01BQUFBLDBEQUFBLEVBQWE7TUFFMUZBLDREQUFBLGVBQVM7TUFDS0Esd0RBQUEsbUJBQUF5QixnREFBQTtRQUFBLE9BQVNmLEdBQUEsQ0FBQVgsUUFBQSxFQUFVO01BQUEsRUFBQztNQUE4QkMsb0RBQUEsY0FBTTtNQUFBQSwwREFBQSxFQUFhO01BS3pGQSw0REFBQSxjQUF3QjtNQUN0QkEsdURBQUEsZUFBaUQ7TUFDbkRBLDBEQUFBLEVBQU07OztNQWxDQUEsdURBQUEsSUFBNEI7TUFBNUJBLHdEQUFBLFlBQUFVLEdBQUEsQ0FBQW5CLEtBQUEsQ0FBQUMsUUFBQSxDQUE0QjtNQWM1QlEsdURBQUEsR0FBNEI7TUFBNUJBLHdEQUFBLFlBQUFVLEdBQUEsQ0FBQW5CLEtBQUEsQ0FBQUUsUUFBQSxDQUE0QiIsInNvdXJjZXMiOlsiLi9zcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLXJvdXRpbmcubW9kdWxlLnRzIiwiLi9zcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLm1vZHVsZS50cyIsIi4vc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi50cyIsIi4vc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IExvZ2luUGFnZSB9IGZyb20gJy4vbG9naW4nO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIGNvbXBvbmVudDogTG9naW5QYWdlXG4gIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luUGFnZVJvdXRpbmdNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5cbmltcG9ydCB7IExvZ2luUGFnZSB9IGZyb20gJy4vbG9naW4nO1xuaW1wb3J0IHsgTG9naW5QYWdlUm91dGluZ01vZHVsZSB9IGZyb20gJy4vbG9naW4tcm91dGluZy5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIElvbmljTW9kdWxlLFxuICAgIExvZ2luUGFnZVJvdXRpbmdNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTG9naW5QYWdlLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBVc2VyRGF0YSB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy91c2VyLWRhdGEnO1xuXG5pbXBvcnQgeyBVc2VyT3B0aW9ucyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvdXNlci1vcHRpb25zJztcblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJ2xvZ2luLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2dpbi5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luUGFnZSB7XG4gIGxvZ2luOiBVc2VyT3B0aW9ucyA9IHsgdXNlcm5hbWU6ICcnLCBwYXNzd29yZDogJycgfTtcbiAgc3VibWl0dGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHVzZXJEYXRhOiBVc2VyRGF0YSxcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXJcbiAgKSB7IH1cblxuICBvbkxvZ2luKGZvcm06IE5nRm9ybSkge1xuICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcblxuICAgIGlmIChmb3JtLnZhbGlkKSB7XG4gICAgICB0aGlzLnVzZXJEYXRhLmxvZ2luKHRoaXMubG9naW4udXNlcm5hbWUpO1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL2FwcC90YWJzL3NjaGVkdWxlJyk7XG4gICAgfVxuICB9XG5cbiAgb25TaWdudXAoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL3NpZ251cCcpO1xuICB9XG59XG4iLCI8aW9uLWhlYWRlciA+XG4gIDxpb24tdG9vbGJhcj5cbiAgICA8aW9uLWJ1dHRvbnMgc2xvdD1cInN0YXJ0XCI+XG4gICAgICA8aW9uLW1lbnUtYnV0dG9uPjwvaW9uLW1lbnUtYnV0dG9uPlxuICAgIDwvaW9uLWJ1dHRvbnM+XG5cbiAgICA8aW9uLXRpdGxlPkxvZ2luPC9pb24tdGl0bGU+XG4gIDwvaW9uLXRvb2xiYXI+XG48L2lvbi1oZWFkZXI+XG5cbjxpb24tY29udGVudD5cbiAgPGRpdiBjbGFzcz1cImxvZ2luLWxvZ29cIj5cbiAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWcvbGFyZ2VtaW5pbmdleHBvbG9nby5qcGdcIiBhbHQ9XCJNaW5pbmcgRXhwbyBsb2dvXCI+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJsb2dpbi1mb3JtXCI+XG4gICAgPGZvcm0gI2xvZ2luRm9ybT1cIm5nRm9ybVwiIG5vdmFsaWRhdGU+XG4gICAgICA8aW9uLWlucHV0XG4gICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIlxuICAgICAgICBsYWJlbFBsYWNlbWVudD1cInN0YWNrZWRcIlxuICAgICAgICBmaWxsPVwic29saWRcIlxuICAgICAgICBbKG5nTW9kZWwpXT1cImxvZ2luLnVzZXJuYW1lXCJcbiAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAjdXNlcm5hbWU9XCJuZ01vZGVsXCJcbiAgICAgICAgc3BlbGxjaGVjaz1cImZhbHNlXCJcbiAgICAgICAgYXV0b2NhcGl0YWxpemU9XCJvZmZcIlxuICAgICAgICBlcnJvclRleHQ9XCJVc2VybmFtZSBpcyByZXF1aXJlZFwiXG4gICAgICAgIHJlcXVpcmVkPlxuICAgICAgPC9pb24taW5wdXQ+XG5cbiAgICAgIDxpb24taW5wdXRcbiAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgIGxhYmVsUGxhY2VtZW50PVwic3RhY2tlZFwiXG4gICAgICAgIGZpbGw9XCJzb2xpZFwiXG4gICAgICAgIFsobmdNb2RlbCldPVwibG9naW4ucGFzc3dvcmRcIlxuICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAjcGFzc3dvcmQ9XCJuZ01vZGVsXCJcbiAgICAgICAgZXJyb3JUZXh0PVwiUGFzc3dvcmQgaXMgcmVxdWlyZWRcIlxuICAgICAgICByZXF1aXJlZD5cbiAgICAgIDwvaW9uLWlucHV0PlxuXG4gICAgICA8aW9uLXJvdz5cbiAgICAgICAgPGlvbi1jb2w+XG4gICAgICAgICAgPGlvbi1idXR0b24gKGNsaWNrKT1cIm9uTG9naW4obG9naW5Gb3JtKVwiIHR5cGU9XCJzdWJtaXRcIiBleHBhbmQ9XCJibG9ja1wiPkxvZ2luPC9pb24tYnV0dG9uPlxuICAgICAgICA8L2lvbi1jb2w+XG4gICAgICAgIDxpb24tY29sPlxuICAgICAgICAgIDxpb24tYnV0dG9uIChjbGljayk9XCJvblNpZ251cCgpXCIgY29sb3I9XCJsaWdodFwiIGV4cGFuZD1cImJsb2NrXCI+U2lnbnVwPC9pb24tYnV0dG9uPlxuICAgICAgICA8L2lvbi1jb2w+XG4gICAgICA8L2lvbi1yb3c+XG4gICAgPC9mb3JtPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImxvZ2luLWxvZ29cIj5cbiAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWcvcm1iTG9nby5wbmdcIiBhbHQ9XCJSTUIgbG9nb1wiPlxuICA8L2Rpdj5cblxuPC9pb24tY29udGVudD5cbiJdLCJuYW1lcyI6WyJSb3V0ZXJNb2R1bGUiLCJMb2dpblBhZ2UiLCJyb3V0ZXMiLCJwYXRoIiwiY29tcG9uZW50IiwiTG9naW5QYWdlUm91dGluZ01vZHVsZSIsImZvckNoaWxkIiwiaW1wb3J0cyIsImkxIiwiZXhwb3J0cyIsIkNvbW1vbk1vZHVsZSIsIkZvcm1zTW9kdWxlIiwiSW9uaWNNb2R1bGUiLCJMb2dpbk1vZHVsZSIsImRlY2xhcmF0aW9ucyIsIlJvdXRlciIsIlVzZXJEYXRhIiwiY29uc3RydWN0b3IiLCJ1c2VyRGF0YSIsInJvdXRlciIsImxvZ2luIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInN1Ym1pdHRlZCIsIm9uTG9naW4iLCJmb3JtIiwidmFsaWQiLCJuYXZpZ2F0ZUJ5VXJsIiwib25TaWdudXAiLCJpMCIsIsm1ybVkaXJlY3RpdmVJbmplY3QiLCJpMiIsInNlbGVjdG9ycyIsImRlY2xzIiwidmFycyIsImNvbnN0cyIsInRlbXBsYXRlIiwiTG9naW5QYWdlX1RlbXBsYXRlIiwicmYiLCJjdHgiLCLJtcm1ZWxlbWVudFN0YXJ0IiwiybXJtWVsZW1lbnQiLCLJtcm1ZWxlbWVudEVuZCIsIsm1ybV0ZXh0IiwiybXJtWxpc3RlbmVyIiwiTG9naW5QYWdlX1RlbXBsYXRlX2lvbl9pbnB1dF9uZ01vZGVsQ2hhbmdlXzEyX2xpc3RlbmVyIiwiJGV2ZW50IiwiTG9naW5QYWdlX1RlbXBsYXRlX2lvbl9pbnB1dF9uZ01vZGVsQ2hhbmdlXzE0X2xpc3RlbmVyIiwiTG9naW5QYWdlX1RlbXBsYXRlX2lvbl9idXR0b25fY2xpY2tfMThfbGlzdGVuZXIiLCLJtcm1cmVzdG9yZVZpZXciLCJfcjMiLCJfcjAiLCLJtcm1cmVmZXJlbmNlIiwiybXJtXJlc2V0VmlldyIsIkxvZ2luUGFnZV9UZW1wbGF0ZV9pb25fYnV0dG9uX2NsaWNrXzIxX2xpc3RlbmVyIiwiybXJtWFkdmFuY2UiLCLJtcm1cHJvcGVydHkiXSwic291cmNlUm9vdCI6IndlYnBhY2s6Ly8vIiwieF9nb29nbGVfaWdub3JlTGlzdCI6W119