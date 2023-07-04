"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_account_account_module_ts"],{

/***/ 7173:
/*!*********************************************************!*\
  !*** ./src/app/pages/account/account-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPageRoutingModule": () => (/* binding */ AccountPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account */ 5459);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);




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

/***/ 6868:
/*!*************************************************!*\
  !*** ./src/app/pages/account/account.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountModule": () => (/* binding */ AccountModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4615);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 5992);
/* harmony import */ var _account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account */ 5459);
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-routing.module */ 7173);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);





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

/***/ 5459:
/*!******************************************!*\
  !*** ./src/app/pages/account/account.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountPage": () => (/* binding */ AccountPage)
/* harmony export */ });
/* harmony import */ var _Users_ohrionmartin_dev_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/user-data */ 6401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 5992);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4615);









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
    return (0,_Users_ohrionmartin_dev_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
  styles: ["img[_ngcontent-%COMP%] {\n  max-width: 140px;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYWNjb3VudC9hY2NvdW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUVBLGtCQUFBO0FBQUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICBtYXgtd2lkdGg6IDE0MHB4O1xuXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF9wYWdlc19hY2NvdW50X2FjY291bnRfbW9kdWxlX3RzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDdUQ7QUFFZjs7O0FBRXhDLE1BQU1FLE1BQU0sR0FBVyxDQUNyQjtFQUNFQyxJQUFJLEVBQUUsRUFBRTtFQUNSQyxTQUFTLEVBQUVILGlEQUFXQTtDQUN2QixDQUNGO0FBRUQsTUFJYUksd0JBQXdCO0FBQXhCQSx3QkFBd0I7bUJBQXhCQSx3QkFBd0I7QUFBQTtBQUF4QkEsd0JBQXdCO1FBQXhCQTtBQUF3QjtBQUF4QkEsd0JBQXdCO1lBSHpCTCxrRUFBcUIsQ0FBQ0UsTUFBTSxDQUFDLEVBQzdCRix5REFBWTtBQUFBO0FBRWE7O3NIQUF4Qkssd0JBQXdCO0lBQUFFLE9BQUEsR0FBQUMseURBQUE7SUFBQUMsT0FBQSxHQUZ6QlQseURBQVk7RUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYnVCO0FBQ0Y7QUFFTDtBQUM0Qjs7QUFFcEUsTUFVYVksYUFBYTtBQUFiQSxhQUFhO21CQUFiQSxhQUFhO0FBQUE7QUFBYkEsYUFBYTtRQUFiQTtBQUFhO0FBQWJBLGFBQWE7WUFSdEJGLHlEQUFZLEVBQ1pDLHVEQUFXLEVBQ1hOLDZFQUF3QjtBQUFBO0FBTUY7O3NIQUFiTyxhQUFhO0lBQUFDLFlBQUEsR0FIdEJaLGlEQUFXO0lBQUFNLE9BQUEsR0FMWEcseURBQVksRUFDWkMsdURBQVcsRUFDWE4sNkVBQXdCO0VBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVmE7QUFFUTtBQUVJOzs7Ozs7Ozs7SUNLbkRZLDREQUFBLGFBQThEO0lBQzVEQSx1REFBQSxhQUFtRTtJQUNuRUEsNERBQUEsU0FBSTtJQUFBQSxvREFBQSxHQUFZO0lBQUFBLDBEQUFBLEVBQUs7SUFFckJBLDREQUFBLGtCQUFnQjtJQUNKQSx3REFBQSxtQkFBQU0scURBQUE7TUFBQU4sMkRBQUEsQ0FBQVEsR0FBQTtNQUFBLE1BQUFDLE1BQUEsR0FBQVQsMkRBQUE7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LENBQUMsQ0FBQztFQUNKO0VBRUFWLGNBQWNBLENBQUE7SUFDWmlCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDRCQUE0QixDQUFDO0VBQzNDO0VBRUFaLE1BQU1BLENBQUE7SUFDSixJQUFJLENBQUNRLFFBQVEsQ0FBQ1IsTUFBTSxFQUFFO0lBQ3RCLElBQUksQ0FBQ08sTUFBTSxDQUFDdUIsYUFBYSxDQUFDLFFBQVEsQ0FBQztFQUNyQztFQUVBakMsT0FBT0EsQ0FBQTtJQUNMLElBQUksQ0FBQ1UsTUFBTSxDQUFDdUIsYUFBYSxDQUFDLFVBQVUsQ0FBQztFQUN2Qzs7QUE5RFd0RSxXQUFXO21CQUFYQSxXQUFXLEVBQUFnQiwrREFBQSxDQUFBVCwyREFBQSxHQUFBUywrREFBQSxDQUFBd0QsbURBQUEsR0FBQXhELCtEQUFBLENBQUF5RCwwREFBQTtBQUFBO0FBQVh6RSxXQUFXO1FBQVhBLFdBQVc7RUFBQTBFLFNBQUE7RUFBQUMsS0FBQTtFQUFBQyxJQUFBO0VBQUFDLE1BQUE7RUFBQUMsUUFBQSxXQUFBQyxxQkFBQUMsRUFBQSxFQUFBQyxHQUFBO0lBQUEsSUFBQUQsRUFBQTtNQ2J4QmhFLDREQUFBLGlCQUFZO01BR05BLHVEQUFBLHNCQUFtQztNQUNyQ0EsMERBQUEsRUFBYztNQUNkQSw0REFBQSxnQkFBVztNQUFBQSxvREFBQSxjQUFPO01BQUFBLDBEQUFBLEVBQVk7TUFJbENBLDREQUFBLGtCQUFhO01BQ1hBLHdEQUFBLElBQUFtRSwwQkFBQSxrQkFXTTtNQUNSbkUsMERBQUEsRUFBYzs7O01BWk5BLHVEQUFBLEdBQWM7TUFBZEEsd0RBQUEsU0FBQWlFLEdBQUEsQ0FBQXJDLFFBQUEsQ0FBYyIsInNvdXJjZXMiOlsiLi9zcmMvYXBwL3BhZ2VzL2FjY291bnQvYWNjb3VudC1yb3V0aW5nLm1vZHVsZS50cyIsIi4vc3JjL2FwcC9wYWdlcy9hY2NvdW50L2FjY291bnQubW9kdWxlLnRzIiwiLi9zcmMvYXBwL3BhZ2VzL2FjY291bnQvYWNjb3VudC50cyIsIi4vc3JjL2FwcC9wYWdlcy9hY2NvdW50L2FjY291bnQuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBY2NvdW50UGFnZSB9IGZyb20gJy4vYWNjb3VudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJycsXG4gICAgY29tcG9uZW50OiBBY2NvdW50UGFnZVxuICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBY2NvdW50UGFnZVJvdXRpbmdNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5pbXBvcnQgeyBBY2NvdW50UGFnZSB9IGZyb20gJy4vYWNjb3VudCc7XG5pbXBvcnQgeyBBY2NvdW50UGFnZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FjY291bnQtcm91dGluZy5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIElvbmljTW9kdWxlLFxuICAgIEFjY291bnRQYWdlUm91dGluZ01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBY2NvdW50UGFnZSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBY2NvdW50TW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBbGVydENvbnRyb2xsZXIgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5cbmltcG9ydCB7IFVzZXJEYXRhIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL3VzZXItZGF0YSc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1hY2NvdW50JyxcbiAgdGVtcGxhdGVVcmw6ICdhY2NvdW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hY2NvdW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQWNjb3VudFBhZ2UgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgdXNlcm5hbWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgYWxlcnRDdHJsOiBBbGVydENvbnRyb2xsZXIsXG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxuICAgIHB1YmxpYyB1c2VyRGF0YTogVXNlckRhdGFcbiAgKSB7IH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5nZXRVc2VybmFtZSgpO1xuICB9XG5cbiAgdXBkYXRlUGljdHVyZSgpIHtcbiAgICBjb25zb2xlLmxvZygnQ2xpY2tlZCB0byB1cGRhdGUgcGljdHVyZScpO1xuICB9XG5cbiAgLy8gUHJlc2VudCBhbiBhbGVydCB3aXRoIHRoZSBjdXJyZW50IHVzZXJuYW1lIHBvcHVsYXRlZFxuICAvLyBjbGlja2luZyBPSyB3aWxsIHVwZGF0ZSB0aGUgdXNlcm5hbWUgYW5kIGRpc3BsYXkgaXRcbiAgLy8gY2xpY2tpbmcgQ2FuY2VsIHdpbGwgY2xvc2UgdGhlIGFsZXJ0IGFuZCBkbyBub3RoaW5nXG4gIGFzeW5jIGNoYW5nZVVzZXJuYW1lKCkge1xuICAgIGNvbnN0IGFsZXJ0ID0gYXdhaXQgdGhpcy5hbGVydEN0cmwuY3JlYXRlKHtcbiAgICAgIGhlYWRlcjogJ0NoYW5nZSBVc2VybmFtZScsXG4gICAgICBidXR0b25zOiBbXG4gICAgICAgICdDYW5jZWwnLFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ09rJyxcbiAgICAgICAgICBoYW5kbGVyOiAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVzZXJEYXRhLnNldFVzZXJuYW1lKGRhdGEudXNlcm5hbWUpO1xuICAgICAgICAgICAgdGhpcy5nZXRVc2VybmFtZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIGlucHV0czogW1xuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgIG5hbWU6ICd1c2VybmFtZScsXG4gICAgICAgICAgdmFsdWU6IHRoaXMudXNlcm5hbWUsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6ICd1c2VybmFtZSdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pO1xuICAgIGF3YWl0IGFsZXJ0LnByZXNlbnQoKTtcbiAgfVxuXG4gIGdldFVzZXJuYW1lKCkge1xuICAgIHRoaXMudXNlckRhdGEuZ2V0VXNlcm5hbWUoKS50aGVuKCh1c2VybmFtZSkgPT4ge1xuICAgICAgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xuICAgIH0pO1xuICB9XG5cbiAgY2hhbmdlUGFzc3dvcmQoKSB7XG4gICAgY29uc29sZS5sb2coJ0NsaWNrZWQgdG8gY2hhbmdlIHBhc3N3b3JkJyk7XG4gIH1cblxuICBsb2dvdXQoKSB7XG4gICAgdGhpcy51c2VyRGF0YS5sb2dvdXQoKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvbG9naW4nKTtcbiAgfVxuXG4gIHN1cHBvcnQoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL3N1cHBvcnQnKTtcbiAgfVxufVxuIiwiPGlvbi1oZWFkZXI+XG4gIDxpb24tdG9vbGJhcj5cbiAgICA8aW9uLWJ1dHRvbnMgc2xvdD1cInN0YXJ0XCI+XG4gICAgICA8aW9uLW1lbnUtYnV0dG9uPjwvaW9uLW1lbnUtYnV0dG9uPlxuICAgIDwvaW9uLWJ1dHRvbnM+XG4gICAgPGlvbi10aXRsZT5BY2NvdW50PC9pb24tdGl0bGU+XG4gIDwvaW9uLXRvb2xiYXI+XG48L2lvbi1oZWFkZXI+XG5cbjxpb24tY29udGVudD5cbiAgPGRpdiAqbmdJZj1cInVzZXJuYW1lXCIgY2xhc3M9XCJpb24tcGFkZGluZy10b3AgaW9uLXRleHQtY2VudGVyXCI+XG4gICAgPGltZyBzcmM9XCJodHRwczovL3d3dy5ncmF2YXRhci5jb20vYXZhdGFyP2Q9bW0mcz0xNDBcIiBhbHQ9XCJhdmF0YXJcIj5cbiAgICA8aDI+e3t1c2VybmFtZX19PC9oMj5cblxuICAgIDxpb24tbGlzdCBpbnNldD5cbiAgICAgIDxpb24taXRlbSAoY2xpY2spPVwidXBkYXRlUGljdHVyZSgpXCI+VXBkYXRlIFBpY3R1cmU8L2lvbi1pdGVtPlxuICAgICAgPGlvbi1pdGVtIChjbGljayk9XCJjaGFuZ2VVc2VybmFtZSgpXCI+Q2hhbmdlIFVzZXJuYW1lPC9pb24taXRlbT5cbiAgICAgIDxpb24taXRlbSAoY2xpY2spPVwiY2hhbmdlUGFzc3dvcmQoKVwiPkNoYW5nZSBQYXNzd29yZDwvaW9uLWl0ZW0+XG4gICAgICA8aW9uLWl0ZW0gKGNsaWNrKT1cInN1cHBvcnQoKVwiPlN1cHBvcnQ8L2lvbi1pdGVtPlxuICAgICAgPGlvbi1pdGVtIChjbGljayk9XCJsb2dvdXQoKVwiPkxvZ291dDwvaW9uLWl0ZW0+XG4gICAgPC9pb24tbGlzdD5cbiAgPC9kaXY+XG48L2lvbi1jb250ZW50PlxuIl0sIm5hbWVzIjpbIlJvdXRlck1vZHVsZSIsIkFjY291bnRQYWdlIiwicm91dGVzIiwicGF0aCIsImNvbXBvbmVudCIsIkFjY291bnRQYWdlUm91dGluZ01vZHVsZSIsImZvckNoaWxkIiwiaW1wb3J0cyIsImkxIiwiZXhwb3J0cyIsIkNvbW1vbk1vZHVsZSIsIklvbmljTW9kdWxlIiwiQWNjb3VudE1vZHVsZSIsImRlY2xhcmF0aW9ucyIsIlJvdXRlciIsIkFsZXJ0Q29udHJvbGxlciIsIlVzZXJEYXRhIiwiaTAiLCLJtcm1ZWxlbWVudFN0YXJ0IiwiybXJtWVsZW1lbnQiLCLJtcm1dGV4dCIsIsm1ybVlbGVtZW50RW5kIiwiybXJtWxpc3RlbmVyIiwiQWNjb3VudFBhZ2VfZGl2XzdfVGVtcGxhdGVfaW9uX2l0ZW1fY2xpY2tfNV9saXN0ZW5lciIsIsm1ybVyZXN0b3JlVmlldyIsIl9yMiIsImN0eF9yMSIsIsm1ybVuZXh0Q29udGV4dCIsIsm1ybVyZXNldFZpZXciLCJ1cGRhdGVQaWN0dXJlIiwiQWNjb3VudFBhZ2VfZGl2XzdfVGVtcGxhdGVfaW9uX2l0ZW1fY2xpY2tfN19saXN0ZW5lciIsImN0eF9yMyIsImNoYW5nZVVzZXJuYW1lIiwiQWNjb3VudFBhZ2VfZGl2XzdfVGVtcGxhdGVfaW9uX2l0ZW1fY2xpY2tfOV9saXN0ZW5lciIsImN0eF9yNCIsImNoYW5nZVBhc3N3b3JkIiwiQWNjb3VudFBhZ2VfZGl2XzdfVGVtcGxhdGVfaW9uX2l0ZW1fY2xpY2tfMTFfbGlzdGVuZXIiLCJjdHhfcjUiLCJzdXBwb3J0IiwiQWNjb3VudFBhZ2VfZGl2XzdfVGVtcGxhdGVfaW9uX2l0ZW1fY2xpY2tfMTNfbGlzdGVuZXIiLCJjdHhfcjYiLCJsb2dvdXQiLCLJtcm1YWR2YW5jZSIsIsm1ybV0ZXh0SW50ZXJwb2xhdGUiLCJjdHhfcjAiLCJ1c2VybmFtZSIsImNvbnN0cnVjdG9yIiwiYWxlcnRDdHJsIiwicm91dGVyIiwidXNlckRhdGEiLCJuZ0FmdGVyVmlld0luaXQiLCJnZXRVc2VybmFtZSIsImNvbnNvbGUiLCJsb2ciLCJfdGhpcyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYWxlcnQiLCJjcmVhdGUiLCJoZWFkZXIiLCJidXR0b25zIiwidGV4dCIsImhhbmRsZXIiLCJkYXRhIiwic2V0VXNlcm5hbWUiLCJpbnB1dHMiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJwcmVzZW50IiwidGhlbiIsIm5hdmlnYXRlQnlVcmwiLCLJtcm1ZGlyZWN0aXZlSW5qZWN0IiwiaTIiLCJpMyIsInNlbGVjdG9ycyIsImRlY2xzIiwidmFycyIsImNvbnN0cyIsInRlbXBsYXRlIiwiQWNjb3VudFBhZ2VfVGVtcGxhdGUiLCJyZiIsImN0eCIsIsm1ybV0ZW1wbGF0ZSIsIkFjY291bnRQYWdlX2Rpdl83X1RlbXBsYXRlIiwiybXJtXByb3BlcnR5Il0sInNvdXJjZVJvb3QiOiJ3ZWJwYWNrOi8vLyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOltdfQ==