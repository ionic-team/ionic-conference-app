"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_account_account_module_ts"],{

/***/ 34291:
/*!*********************************************************!*\
  !*** ./src/app/pages/account/account-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountPageRoutingModule: () => (/* binding */ AccountPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account */ 88777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '',
  component: _account__WEBPACK_IMPORTED_MODULE_0__.AccountPage
}];
class AccountPageRoutingModule {}
AccountPageRoutingModule.ɵfac = function AccountPageRoutingModule_Factory(t) {
  return new (t || AccountPageRoutingModule)();
};
AccountPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: AccountPageRoutingModule
});
AccountPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AccountPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 14041:
/*!*************************************************!*\
  !*** ./src/app/pages/account/account.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountModule: () => (/* binding */ AccountModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 64210);
/* harmony import */ var _account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account */ 88777);
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-routing.module */ 34291);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);





class AccountModule {}
AccountModule.ɵfac = function AccountModule_Factory(t) {
  return new (t || AccountModule)();
};
AccountModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AccountModule
});
AccountModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _account_routing_module__WEBPACK_IMPORTED_MODULE_1__.AccountPageRoutingModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AccountModule, {
    declarations: [_account__WEBPACK_IMPORTED_MODULE_0__.AccountPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _account_routing_module__WEBPACK_IMPORTED_MODULE_1__.AccountPageRoutingModule]
  });
})();

/***/ }),

/***/ 88777:
/*!******************************************!*\
  !*** ./src/app/pages/account/account.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountPage: () => (/* binding */ AccountPage)
/* harmony export */ });
/* harmony import */ var C_Users_Blessing_Kunaka_Desktop_mining_expo_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/user-data */ 8176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 64210);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);









function AccountPage_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-list", 4)(5, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AccountPage_div_7_Template_ion_item_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.updatePicture());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Update Picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AccountPage_div_7_Template_ion_item_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.changeUsername());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Change Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AccountPage_div_7_Template_ion_item_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.changePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Change Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AccountPage_div_7_Template_ion_item_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.support());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Support");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AccountPage_div_7_Template_ion_item_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.username);
  }
}
class AccountPage {
  constructor(alertCtrl, router, userData) {
    this.alertCtrl = alertCtrl;
    this.router = router;
    this.userData = userData;
  }
  ngAfterViewInit() {
    this.getUsername();
  }
  updatePicture() {
    console.log('Clicked to update picture');
  }
  // Present an alert with the current username populated
  // clicking OK will update the username and display it
  // clicking Cancel will close the alert and do nothing
  changeUsername() {
    var _this = this;
    return (0,C_Users_Blessing_Kunaka_Desktop_mining_expo_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertCtrl.create({
        header: 'Change Username',
        buttons: ['Cancel', {
          text: 'Ok',
          handler: data => {
            _this.userData.setUsername(data.username);
            _this.getUsername();
          }
        }],
        inputs: [{
          type: 'text',
          name: 'username',
          value: _this.username,
          placeholder: 'username'
        }]
      });
      yield alert.present();
    })();
  }
  getUsername() {
    this.userData.getUsername().then(username => {
      this.username = username;
    });
  }
  changePassword() {
    console.log('Clicked to change password');
  }
  logout() {
    this.userData.logout();
    this.router.navigateByUrl('/login');
  }
  support() {
    this.router.navigateByUrl('/support');
  }
}
AccountPage.ɵfac = function AccountPage_Factory(t) {
  return new (t || AccountPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_providers_user_data__WEBPACK_IMPORTED_MODULE_1__.UserData));
};
AccountPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AccountPage,
  selectors: [["page-account"]],
  decls: 8,
  vars: 1,
  consts: [["slot", "start"], ["class", "ion-padding-top ion-text-center", 4, "ngIf"], [1, "ion-padding-top", "ion-text-center"], ["src", "https://www.gravatar.com/avatar?d=mm&s=140", "alt", "avatar"], ["inset", ""], [3, "click"]],
  template: function AccountPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-menu-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AccountPage_div_7_Template, 15, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.username);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar],
  styles: ["img[_ngcontent-%COMP%] {\n  max-width: 140px;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYWNjb3VudC9hY2NvdW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi8uLi9CbGVzc2luZyUyMEt1bmFrYS9EZXNrdG9wL21pbmluZ19leHBvL21pbmluZy1leHBvL3NyYy9hcHAvcGFnZXMvYWNjb3VudC9hY2NvdW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUVBLGtCQUFBO0FDQUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gIG1heC13aWR0aDogMTQwcHg7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4iLCJpbWcge1xuICBtYXgtd2lkdGg6IDE0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF9wYWdlc19hY2NvdW50X2FjY291bnRfbW9kdWxlX3RzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDdUQ7QUFFZjs7O0FBRXhDLE1BQU1FLE1BQU0sR0FBVyxDQUNyQjtFQUNFQyxJQUFJLEVBQUUsRUFBRTtFQUNSQyxTQUFTLEVBQUVILGlEQUFXQTtDQUN2QixDQUNGO0FBRUQsTUFJYUksd0JBQXdCO0FBQXhCQSx3QkFBd0I7bUJBQXhCQSx3QkFBd0I7QUFBQTtBQUF4QkEsd0JBQXdCO1FBQXhCQTtBQUF3QjtBQUF4QkEsd0JBQXdCO1lBSHpCTCx5REFBWSxDQUFDTSxRQUFRLENBQUNKLE1BQU0sQ0FBQyxFQUM3QkYseURBQVk7QUFBQTtBQUVhOztzSEFBeEJLLHdCQUF3QjtJQUFBRSxPQUFBLEdBQUFDLHlEQUFBO0lBQUFDLE9BQUEsR0FGekJULHlEQUFZO0VBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2J1QjtBQUNGO0FBRUw7QUFDNEI7O0FBRXBFLE1BVWFZLGFBQWE7QUFBYkEsYUFBYTttQkFBYkEsYUFBYTtBQUFBO0FBQWJBLGFBQWE7UUFBYkE7QUFBYTtBQUFiQSxhQUFhO1lBUnRCRix5REFBWSxFQUNaQyx1REFBVyxFQUNYTiw2RUFBd0I7QUFBQTtBQU1GOztzSEFBYk8sYUFBYTtJQUFBQyxZQUFBLEdBSHRCWixpREFBVztJQUFBTSxPQUFBLEdBTFhHLHlEQUFZLEVBQ1pDLHVEQUFXLEVBQ1hOLDZFQUF3QjtFQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZhO0FBRVE7QUFFSTs7Ozs7Ozs7O0lDS25EWSw0REFBQSxhQUE4RDtJQUM1REEsdURBQUEsYUFBbUU7SUFDbkVBLDREQUFBLFNBQUk7SUFBQUEsb0RBQUEsR0FBWTtJQUFBQSwwREFBQSxFQUFLO0lBRXJCQSw0REFBQSxrQkFBZ0I7SUFDSkEsd0RBQUEsbUJBQUFNLHFEQUFBO01BQUFOLDJEQUFBLENBQUFRLEdBQUE7TUFBQSxNQUFBQyxNQUFBLEdB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UUFBUTtJQUMxQixDQUFDLENBQUM7RUFDSjtFQUVBVixjQUFjQSxDQUFBO0lBQ1ppQixPQUFPLENBQUNDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQztFQUMzQztFQUVBWixNQUFNQSxDQUFBO0lBQ0osSUFBSSxDQUFDUSxRQUFRLENBQUNSLE1BQU0sRUFBRTtJQUN0QixJQUFJLENBQUNPLE1BQU0sQ0FBQ3VCLGFBQWEsQ0FBQyxRQUFRLENBQUM7RUFDckM7RUFFQWpDLE9BQU9BLENBQUE7SUFDTCxJQUFJLENBQUNVLE1BQU0sQ0FBQ3VCLGFBQWEsQ0FBQyxVQUFVLENBQUM7RUFDdkM7O0FBOURXdEUsV0FBVzttQkFBWEEsV0FBVyxFQUFBZ0IsK0RBQUEsQ0FBQVQsMkRBQUEsR0FBQVMsK0RBQUEsQ0FBQXdELG1EQUFBLEdBQUF4RCwrREFBQSxDQUFBeUQsMERBQUE7QUFBQTtBQUFYekUsV0FBVztRQUFYQSxXQUFXO0VBQUEwRSxTQUFBO0VBQUFDLEtBQUE7RUFBQUMsSUFBQTtFQUFBQyxNQUFBO0VBQUFDLFFBQUEsV0FBQUMscUJBQUFDLEVBQUEsRUFBQUMsR0FBQTtJQUFBLElBQUFELEVBQUE7TUNieEJoRSw0REFBQSxpQkFBWTtNQUdOQSx1REFBQSxzQkFBbUM7TUFDckNBLDBEQUFBLEVBQWM7TUFDZEEsNERBQUEsZ0JBQVc7TUFBQUEsb0RBQUEsY0FBTztNQUFBQSwwREFBQSxFQUFZO01BSWxDQSw0REFBQSxrQkFBYTtNQUNYQSx3REFBQSxJQUFBbUUsMEJBQUEsa0JBV007TUFDUm5FLDBEQUFBLEVBQWM7OztNQVpOQSx1REFBQSxHQUFjO01BQWRBLHdEQUFBLFNBQUFpRSxHQUFBLENBQUFyQyxRQUFBLENBQWMiLCJzb3VyY2VzIjpbIi4vc3JjL2FwcC9wYWdlcy9hY2NvdW50L2FjY291bnQtcm91dGluZy5tb2R1bGUudHMiLCIuL3NyYy9hcHAvcGFnZXMvYWNjb3VudC9hY2NvdW50Lm1vZHVsZS50cyIsIi4vc3JjL2FwcC9wYWdlcy9hY2NvdW50L2FjY291bnQudHMiLCIuL3NyYy9hcHAvcGFnZXMvYWNjb3VudC9hY2NvdW50Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgQWNjb3VudFBhZ2UgfSBmcm9tICcuL2FjY291bnQnO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAge1xyXG4gICAgcGF0aDogJycsXHJcbiAgICBjb21wb25lbnQ6IEFjY291bnRQYWdlXHJcbiAgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxyXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBY2NvdW50UGFnZVJvdXRpbmdNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xyXG5cclxuaW1wb3J0IHsgQWNjb3VudFBhZ2UgfSBmcm9tICcuL2FjY291bnQnO1xyXG5pbXBvcnQgeyBBY2NvdW50UGFnZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FjY291bnQtcm91dGluZy5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBJb25pY01vZHVsZSxcclxuICAgIEFjY291bnRQYWdlUm91dGluZ01vZHVsZVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBBY2NvdW50UGFnZSxcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBY2NvdW50TW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IEFsZXJ0Q29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcclxuXHJcbmltcG9ydCB7IFVzZXJEYXRhIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL3VzZXItZGF0YSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwYWdlLWFjY291bnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnYWNjb3VudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hY2NvdW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFjY291bnRQYWdlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgdXNlcm5hbWU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgYWxlcnRDdHJsOiBBbGVydENvbnRyb2xsZXIsXHJcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwdWJsaWMgdXNlckRhdGE6IFVzZXJEYXRhXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5nZXRVc2VybmFtZSgpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUGljdHVyZSgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdDbGlja2VkIHRvIHVwZGF0ZSBwaWN0dXJlJyk7XHJcbiAgfVxyXG5cclxuICAvLyBQcmVzZW50IGFuIGFsZXJ0IHdpdGggdGhlIGN1cnJlbnQgdXNlcm5hbWUgcG9wdWxhdGVkXHJcbiAgLy8gY2xpY2tpbmcgT0sgd2lsbCB1cGRhdGUgdGhlIHVzZXJuYW1lIGFuZCBkaXNwbGF5IGl0XHJcbiAgLy8gY2xpY2tpbmcgQ2FuY2VsIHdpbGwgY2xvc2UgdGhlIGFsZXJ0IGFuZCBkbyBub3RoaW5nXHJcbiAgYXN5bmMgY2hhbmdlVXNlcm5hbWUoKSB7XHJcbiAgICBjb25zdCBhbGVydCA9IGF3YWl0IHRoaXMuYWxlcnRDdHJsLmNyZWF0ZSh7XHJcbiAgICAgIGhlYWRlcjogJ0NoYW5nZSBVc2VybmFtZScsXHJcbiAgICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAnQ2FuY2VsJyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnT2snLFxyXG4gICAgICAgICAgaGFuZGxlcjogKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJEYXRhLnNldFVzZXJuYW1lKGRhdGEudXNlcm5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLmdldFVzZXJuYW1lKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBpbnB1dHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICBuYW1lOiAndXNlcm5hbWUnLFxyXG4gICAgICAgICAgdmFsdWU6IHRoaXMudXNlcm5hbWUsXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ3VzZXJuYW1lJ1xyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSk7XHJcbiAgICBhd2FpdCBhbGVydC5wcmVzZW50KCk7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VybmFtZSgpIHtcclxuICAgIHRoaXMudXNlckRhdGEuZ2V0VXNlcm5hbWUoKS50aGVuKCh1c2VybmFtZSkgPT4ge1xyXG4gICAgICB0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNoYW5nZVBhc3N3b3JkKCkge1xyXG4gICAgY29uc29sZS5sb2coJ0NsaWNrZWQgdG8gY2hhbmdlIHBhc3N3b3JkJyk7XHJcbiAgfVxyXG5cclxuICBsb2dvdXQoKSB7XHJcbiAgICB0aGlzLnVzZXJEYXRhLmxvZ291dCgpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL2xvZ2luJyk7XHJcbiAgfVxyXG5cclxuICBzdXBwb3J0KCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL3N1cHBvcnQnKTtcclxuICB9XHJcbn1cclxuIiwiPGlvbi1oZWFkZXI+XHJcbiAgPGlvbi10b29sYmFyPlxyXG4gICAgPGlvbi1idXR0b25zIHNsb3Q9XCJzdGFydFwiPlxyXG4gICAgICA8aW9uLW1lbnUtYnV0dG9uPjwvaW9uLW1lbnUtYnV0dG9uPlxyXG4gICAgPC9pb24tYnV0dG9ucz5cclxuICAgIDxpb24tdGl0bGU+QWNjb3VudDwvaW9uLXRpdGxlPlxyXG4gIDwvaW9uLXRvb2xiYXI+XHJcbjwvaW9uLWhlYWRlcj5cclxuXHJcbjxpb24tY29udGVudD5cclxuICA8ZGl2ICpuZ0lmPVwidXNlcm5hbWVcIiBjbGFzcz1cImlvbi1wYWRkaW5nLXRvcCBpb24tdGV4dC1jZW50ZXJcIj5cclxuICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhcj9kPW1tJnM9MTQwXCIgYWx0PVwiYXZhdGFyXCI+XHJcbiAgICA8aDI+e3t1c2VybmFtZX19PC9oMj5cclxuXHJcbiAgICA8aW9uLWxpc3QgaW5zZXQ+XHJcbiAgICAgIDxpb24taXRlbSAoY2xpY2spPVwidXBkYXRlUGljdHVyZSgpXCI+VXBkYXRlIFBpY3R1cmU8L2lvbi1pdGVtPlxyXG4gICAgICA8aW9uLWl0ZW0gKGNsaWNrKT1cImNoYW5nZVVzZXJuYW1lKClcIj5DaGFuZ2UgVXNlcm5hbWU8L2lvbi1pdGVtPlxyXG4gICAgICA8aW9uLWl0ZW0gKGNsaWNrKT1cImNoYW5nZVBhc3N3b3JkKClcIj5DaGFuZ2UgUGFzc3dvcmQ8L2lvbi1pdGVtPlxyXG4gICAgICA8aW9uLWl0ZW0gKGNsaWNrKT1cInN1cHBvcnQoKVwiPlN1cHBvcnQ8L2lvbi1pdGVtPlxyXG4gICAgICA8aW9uLWl0ZW0gKGNsaWNrKT1cImxvZ291dCgpXCI+TG9nb3V0PC9pb24taXRlbT5cclxuICAgIDwvaW9uLWxpc3Q+XHJcbiAgPC9kaXY+XHJcbjwvaW9uLWNvbnRlbnQ+XHJcbiJdLCJuYW1lcyI6WyJSb3V0ZXJNb2R1bGUiLCJBY2NvdW50UGFnZSIsInJvdXRlcyIsInBhdGgiLCJjb21wb25lbnQiLCJBY2NvdW50UGFnZVJvdXRpbmdNb2R1bGUiLCJmb3JDaGlsZCIsImltcG9ydHMiLCJpMSIsImV4cG9ydHMiLCJDb21tb25Nb2R1bGUiLCJJb25pY01vZHVsZSIsIkFjY291bnRNb2R1bGUiLCJkZWNsYXJhdGlvbnMiLCJSb3V0ZXIiLCJBbGVydENvbnRyb2xsZXIiLCJVc2VyRGF0YSIsImkwIiwiybXJtWVsZW1lbnRTdGFydCIsIsm1ybVlbGVtZW50IiwiybXJtXRleHQiLCLJtcm1ZWxlbWVudEVuZCIsIsm1ybVsaXN0ZW5lciIsIkFjY291bnRQYWdlX2Rpdl83X1RlbXBsYXRlX2lvbl9pdGVtX2NsaWNrXzVfbGlzdGVuZXIiLCLJtcm1cmVzdG9yZVZpZXciLCJfcjIiLCJjdHhfcjEiLCLJtcm1bmV4dENvbnRleHQiLCLJtcm1cmVzZXRWaWV3IiwidXBkYXRlUGljdHVyZSIsIkFjY291bnRQYWdlX2Rpdl83X1RlbXBsYXRlX2lvbl9pdGVtX2NsaWNrXzdfbGlzdGVuZXIiLCJjdHhfcjMiLCJjaGFuZ2VVc2VybmFtZSIsIkFjY291bnRQYWdlX2Rpdl83X1RlbXBsYXRlX2lvbl9pdGVtX2NsaWNrXzlfbGlzdGVuZXIiLCJjdHhfcjQiLCJjaGFuZ2VQYXNzd29yZCIsIkFjY291bnRQYWdlX2Rpdl83X1RlbXBsYXRlX2lvbl9pdGVtX2NsaWNrXzExX2xpc3RlbmVyIiwiY3R4X3I1Iiwic3VwcG9ydCIsIkFjY291bnRQYWdlX2Rpdl83X1RlbXBsYXRlX2lvbl9pdGVtX2NsaWNrXzEzX2xpc3RlbmVyIiwiY3R4X3I2IiwibG9nb3V0IiwiybXJtWFkdmFuY2UiLCLJtcm1dGV4dEludGVycG9sYXRlIiwiY3R4X3IwIiwidXNlcm5hbWUiLCJjb25zdHJ1Y3RvciIsImFsZXJ0Q3RybCIsInJvdXRlciIsInVzZXJEYXRhIiwibmdBZnRlclZpZXdJbml0IiwiZ2V0VXNlcm5hbWUiLCJjb25zb2xlIiwibG9nIiwiX3RoaXMiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFsZXJ0IiwiY3JlYXRlIiwiaGVhZGVyIiwiYnV0dG9ucyIsInRleHQiLCJoYW5kbGVyIiwiZGF0YSIsInNldFVzZXJuYW1lIiwiaW5wdXRzIiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwicHJlc2VudCIsInRoZW4iLCJuYXZpZ2F0ZUJ5VXJsIiwiybXJtWRpcmVjdGl2ZUluamVjdCIsImkyIiwiaTMiLCJzZWxlY3RvcnMiLCJkZWNscyIsInZhcnMiLCJjb25zdHMiLCJ0ZW1wbGF0ZSIsIkFjY291bnRQYWdlX1RlbXBsYXRlIiwicmYiLCJjdHgiLCLJtcm1dGVtcGxhdGUiLCJBY2NvdW50UGFnZV9kaXZfN19UZW1wbGF0ZSIsIsm1ybVwcm9wZXJ0eSJdLCJzb3VyY2VSb290Ijoid2VicGFjazovLy8iLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbXX0=