(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _providers_check_tutorial_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./providers/check-tutorial.guard */ 4947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);




const routes = [{
  path: '',
  redirectTo: '/tutorial',
  pathMatch: 'full'
}, {
  path: 'account',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_account_account_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/account/account.module */ 6868)).then(m => m.AccountModule)
}, {
  path: 'support',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_support_support_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/support/support.module */ 2602)).then(m => m.SupportModule)
}, {
  path: 'login',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 1053)).then(m => m.LoginModule)
}, {
  path: 'signup',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_signup_signup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/signup/signup.module */ 7110)).then(m => m.SignUpModule)
}, {
  path: 'app',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tabs-page_tabs-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tabs-page/tabs-page.module */ 78)).then(m => m.TabsModule)
}, {
  path: 'tutorial',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tutorial_tutorial_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tutorial/tutorial.module */ 140)).then(m => m.TutorialModule),
  canMatch: [_providers_check_tutorial_guard__WEBPACK_IMPORTED_MODULE_0__.checkTutorialGuard]
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _Users_ohrionmartin_dev_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/status-bar */ 9326);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/splash-screen */ 2239);
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./providers/user-data */ 6401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5992);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ 5950);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/service-worker */ 4413);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4615);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 9542);
















function AppComponent_ion_menu_toggle_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-menu-toggle", 4)(1, "ion-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", p_r3.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("name", p_r3.icon + "-outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", p_r3.title, " ");
  }
}
function AppComponent_ion_list_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-list", 1)(1, "ion-list-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-menu-toggle", 4)(4, "ion-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-menu-toggle", 4)(9, "ion-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "ion-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Support ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "ion-menu-toggle", 4)(14, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_ion_list_8_Template_ion_item_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "ion-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
}
function AppComponent_ion_list_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-list", 1)(1, "ion-list-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-menu-toggle", 4)(4, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-menu-toggle", 4)(9, "ion-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "ion-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Support ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "ion-menu-toggle", 4)(14, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Signup ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "ion-toggle", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AppComponent_ion_list_9_Template_ion_toggle_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.dark = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " Dark Mode ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r2.dark);
  }
}
class AppComponent {
  constructor(menu, platform, router, storage, userData, swUpdate, toastCtrl) {
    this.menu = menu;
    this.platform = platform;
    this.router = router;
    this.storage = storage;
    this.userData = userData;
    this.swUpdate = swUpdate;
    this.toastCtrl = toastCtrl;
    this.appPages = [{
      title: 'Schedule',
      url: '/app/tabs/schedule',
      icon: 'calendar'
    }, {
      title: 'Speakers',
      url: '/app/tabs/speakers',
      icon: 'people'
    }, {
      title: 'Map',
      url: '/app/tabs/map',
      icon: 'map'
    }, {
      title: 'About',
      url: '/app/tabs/about',
      icon: 'information-circle'
    }];
    this.loggedIn = false;
    this.dark = false;
    this.initializeApp();
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_ohrionmartin_dev_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.storage.create();
      _this.checkLoginStatus();
      _this.listenForLoginEvents();
      _this.swUpdate.available.subscribe( /*#__PURE__*/function () {
        var _ref = (0,_Users_ohrionmartin_dev_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          const toast = yield _this.toastCtrl.create({
            message: 'Update available!',
            position: 'bottom',
            buttons: [{
              role: 'cancel',
              text: 'Reload'
            }]
          });
          yield toast.present();
          toast.onDidDismiss().then(() => _this.swUpdate.activateUpdate()).then(() => window.location.reload());
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      if (this.platform.is('hybrid')) {
        _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_1__.StatusBar.hide();
        _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_2__.SplashScreen.hide();
      }
    });
  }
  checkLoginStatus() {
    return this.userData.isLoggedIn().then(loggedIn => {
      return this.updateLoggedInStatus(loggedIn);
    });
  }
  updateLoggedInStatus(loggedIn) {
    setTimeout(() => {
      this.loggedIn = loggedIn;
    }, 300);
  }
  listenForLoginEvents() {
    window.addEventListener('user:login', () => {
      this.updateLoggedInStatus(true);
    });
    window.addEventListener('user:signup', () => {
      this.updateLoggedInStatus(true);
    });
    window.addEventListener('user:logout', () => {
      this.updateLoggedInStatus(false);
    });
  }
  logout() {
    this.userData.logout().then(() => {
      return this.router.navigateByUrl('/app/tabs/schedule');
    });
  }
  openTutorial() {
    this.menu.enable(false);
    this.storage.set('ion_did_tutorial', false);
    this.router.navigateByUrl('/tutorial');
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__.Storage), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_providers_user_data__WEBPACK_IMPORTED_MODULE_3__.UserData), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_8__.SwUpdate), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 19,
  vars: 5,
  consts: [["contentId", "main-content"], ["lines", "none"], ["autoHide", "false", 4, "ngFor", "ngForOf"], ["lines", "none", 4, "ngIf"], ["autoHide", "false"], ["button", "", "detail", "false", 3, "click"], ["slot", "start", "name", "hammer"], ["id", "main-content"], ["routerLinkActive", "selected", "routerDirection", "root", "detail", "false", 3, "routerLink"], ["slot", "start", 3, "name"], ["routerLink", "/account", "routerLinkActive", "active", "routerDirection", "root", "detail", "false"], ["slot", "start", "name", "person"], ["routerLink", "/support", "routerLinkActive", "active", "routerDirection", "root", "detail", "false"], ["slot", "start", "name", "help"], ["slot", "start", "name", "log-out"], ["routerLink", "/login", "routerLinkActive", "active", "routerDirection", "root", "detail", "false"], ["slot", "start", "name", "log-in"], ["routerLink", "/signup", "routerLinkActive", "active", "routerDirection", "root", "detail", "false"], ["slot", "start", "name", "person-add"], ["slot", "start", "name", "moon-outline"], [3, "ngModel", "ngModelChange"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-app")(1, "ion-split-pane", 0)(2, "ion-menu", 0)(3, "ion-content")(4, "ion-list", 1)(5, "ion-list-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Conference ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, AppComponent_ion_menu_toggle_7_Template, 5, 3, "ion-menu-toggle", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, AppComponent_ion_list_8_Template, 18, 0, "ion-list", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, AppComponent_ion_list_9_Template, 22, 1, "ion-list", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ion-list", 1)(11, "ion-list-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Tutorial ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "ion-menu-toggle", 4)(14, "ion-item", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_Template_ion_item_click_14_listener() {
        return ctx.openTutorial();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "ion-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Show Tutorial");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "ion-router-outlet", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("dark-theme", ctx.dark);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.appPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loggedIn);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loggedIn);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkActive, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonApp, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonMenu, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonMenuToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSplitPane, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRouterOutlet, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.RouterLinkDelegate],
  styles: ["ion-menu ion-content {\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n  --background: var(--ion-item-background, var(--ion-background-color, #ffffff));\n}\n\n/* Remove background transitions for switching themes */\nion-menu ion-item {\n  --transition: none;\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n/*\n * Material Design Menu\n*/\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-list-header {\n  padding-right: 18px;\n  padding-left: 18px;\n  font-weight: 450;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n\nion-menu.md ion-item {\n  --padding-start: 18px;\n  margin-right: 10px;\n  border-radius: 0 50px 50px 0;\n  font-weight: 500;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgb(var(--ion-color-primary-rgb) 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-item ion-icon {\n  color: var(--ion-color-step-650, #5f6368);\n}\n\nion-menu.md ion-list:not(:last-of-type) {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\n/*\n * iOS Menu\n*/\nion-menu.ios ion-list-header {\n  margin-bottom: 8px;\n  padding-right: 16px;\n  padding-left: 16px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item ion-icon {\n  color: #73849a;\n  font-size: 24px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDhFQUFBO0FBQ0Y7O0FBRUEsdURBQUE7QUFDQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtBQUNGOztBQUVBOztDQUFBO0FBR0E7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBRUEsZ0JBQUE7RUFFQSxxQkFBQTtFQUVBLHlCQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtFQUVBLGtCQUFBO0VBRUEsNEJBQUE7RUFFQSxnQkFBQTtBQUxGOztBQVFBO0VBQ0Usb0RBQUE7QUFMRjs7QUFRQTtFQUNFLCtCQUFBO0FBTEY7O0FBUUE7O0VBRUUseUNBQUE7QUFMRjs7QUFRQTtFQUNFLDJEQUFBO0FBTEY7O0FBU0E7O0NBQUE7QUFHQTtFQUNFLGtCQUFBO0VBRUEsbUJBQUE7RUFDQSxrQkFBQTtBQVBGOztBQVVBO0VBQ0UsaUJBQUE7QUFQRjs7QUFVQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUFQRjs7QUFVQTtFQUNFLGNBQUE7RUFFQSxlQUFBO0FBUkY7O0FBV0E7RUFDRSwrQkFBQTtBQVJGIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmZmZmKSk7XG59XG5cbi8qIFJlbW92ZSBiYWNrZ3JvdW5kIHRyYW5zaXRpb25zIGZvciBzd2l0Y2hpbmcgdGhlbWVzICovXG5pb24tbWVudSBpb24taXRlbSB7XG4gIC0tdHJhbnNpdGlvbjogbm9uZTtcbn1cblxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi8qXG4gKiBNYXRlcmlhbCBEZXNpZ24gTWVudVxuKi9cbmlvbi1tZW51Lm1kIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAxOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE4cHg7XG5cbiAgZm9udC13ZWlnaHQ6IDQ1MDtcblxuICBsZXR0ZXItc3BhY2luZzogLjFlbTtcblxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMThweDtcblxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cbiAgYm9yZGVyLXJhZGl1czogMCA1MHB4IDUwcHggMDtcblxuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYikgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjUwLCAjNWY2MzY4KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3Q6bm90KDpsYXN0LW9mLXR5cGUpIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XG59XG5cblxuLypcbiAqIGlPUyBNZW51XG4qL1xuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcblxuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMCAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tbWluLWhlaWdodDogNTBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgY29sb3I6ICM3Mzg0OWE7XG5cbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  encapsulation: 2
});


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 3765);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 7122);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 5992);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage-angular */ 7478);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/service-worker */ 4413);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6839);














class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  providers: [_awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_0__.InAppBrowser],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule.forRoot(), _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_9__.IonicStorageModule.forRoot(), _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__.ServiceWorkerModule.register('ngsw-worker.js', {
    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.production
  })]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_9__.IonicStorageModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__.ServiceWorkerModule]
  });
})();

/***/ }),

/***/ 4947:
/*!***************************************************!*\
  !*** ./src/app/providers/check-tutorial.guard.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkTutorialGuard": () => (/* binding */ checkTutorialGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage-angular */ 5950);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9346);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 635);




const checkTutorialGuard = () => {
  const storage = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__.Storage);
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(storage.get('ion_did_tutorial')).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(didTutorial => {
    if (didTutorial === true) {
      router.navigate(['/app', 'tabs', 'schedule']);
    }
  }), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(didTutorial => !didTutorial));
};

/***/ }),

/***/ 6401:
/*!****************************************!*\
  !*** ./src/app/providers/user-data.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserData": () => (/* binding */ UserData)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage-angular */ 5950);



class UserData {
  constructor(storage) {
    this.storage = storage;
    this.favorites = [];
    this.HAS_LOGGED_IN = 'hasLoggedIn';
    this.HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
  }
  hasFavorite(sessionName) {
    return this.favorites.indexOf(sessionName) > -1;
  }
  addFavorite(sessionName) {
    this.favorites.push(sessionName);
  }
  removeFavorite(sessionName) {
    const index = this.favorites.indexOf(sessionName);
    if (index > -1) {
      this.favorites.splice(index, 1);
    }
  }
  login(username) {
    return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
      this.setUsername(username);
      return window.dispatchEvent(new CustomEvent('user:login'));
    });
  }
  signup(username) {
    return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
      this.setUsername(username);
      return window.dispatchEvent(new CustomEvent('user:signup'));
    });
  }
  logout() {
    return this.storage.remove(this.HAS_LOGGED_IN).then(() => {
      return this.storage.remove('username');
    }).then(() => {
      window.dispatchEvent(new CustomEvent('user:logout'));
    });
  }
  setUsername(username) {
    return this.storage.set('username', username);
  }
  getUsername() {
    return this.storage.get('username').then(value => {
      return value;
    });
  }
  isLoggedIn() {
    return this.storage.get(this.HAS_LOGGED_IN).then(value => {
      return value === true;
    });
  }
  checkHasSeenTutorial() {
    return this.storage.get(this.HAS_SEEN_TUTORIAL).then(value => {
      return value;
    });
  }
}
UserData.ɵfac = function UserData_Factory(t) {
  return new (t || UserData)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__.Storage));
};
UserData.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: UserData,
  factory: UserData.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
  production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _angular_compiler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/compiler */ 743);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 2340);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule).catch(err => console.log(err));

/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_data-a6fc218f_js-node_modules_ionic_core_dist_esm_th-74fb06",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_data-a6fc218f_js-node_modules_ionic_core_dist_esm_th-74fb06",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		8404,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		8555,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIi4vc3JjL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudHMiLCIuL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIi4vc3JjL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCIuL3NyYy9hcHAvYXBwLm1vZHVsZS50cyIsIi4vc3JjL2FwcC9wcm92aWRlcnMvY2hlY2stdHV0b3JpYWwuZ3VhcmQudHMiLCIuL3NyYy9hcHAvcHJvdmlkZXJzL3VzZXItZGF0YS50cyIsIi4vc3JjL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudC50cyIsIi4vc3JjL21haW4udHMiLCIuL25vZGVfbW9kdWxlcy9AaW9uaWMvY29yZS9kaXN0L2VzbS8gbGF6eSBeXFwuXFwvLipcXC5lbnRyeVxcLmpzJCBpbmNsdWRlOiBcXC5lbnRyeVxcLmpzJCBleGNsdWRlOiBcXC5zeXN0ZW1cXC5lbnRyeVxcLmpzJCBuYW1lc3BhY2Ugb2JqZWN0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBjaGVja1R1dG9yaWFsR3VhcmQgfSBmcm9tICcuL3Byb3ZpZGVycy9jaGVjay10dXRvcmlhbC5ndWFyZCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJycsXG4gICAgcmVkaXJlY3RUbzogJy90dXRvcmlhbCcsXG4gICAgcGF0aE1hdGNoOiAnZnVsbCdcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdhY2NvdW50JyxcbiAgICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi9wYWdlcy9hY2NvdW50L2FjY291bnQubW9kdWxlJykudGhlbihtID0+IG0uQWNjb3VudE1vZHVsZSlcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdzdXBwb3J0JyxcbiAgICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi9wYWdlcy9zdXBwb3J0L3N1cHBvcnQubW9kdWxlJykudGhlbihtID0+IG0uU3VwcG9ydE1vZHVsZSlcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdsb2dpbicsXG4gICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4vcGFnZXMvbG9naW4vbG9naW4ubW9kdWxlJykudGhlbihtID0+IG0uTG9naW5Nb2R1bGUpXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnc2lnbnVwJyxcbiAgICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi9wYWdlcy9zaWdudXAvc2lnbnVwLm1vZHVsZScpLnRoZW4obSA9PiBtLlNpZ25VcE1vZHVsZSlcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdhcHAnLFxuICAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuL3BhZ2VzL3RhYnMtcGFnZS90YWJzLXBhZ2UubW9kdWxlJykudGhlbihtID0+IG0uVGFic01vZHVsZSlcbiAgfSxcbiAge1xuICAgIHBhdGg6ICd0dXRvcmlhbCcsXG4gICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4vcGFnZXMvdHV0b3JpYWwvdHV0b3JpYWwubW9kdWxlJykudGhlbihtID0+IG0uVHV0b3JpYWxNb2R1bGUpLFxuICAgIGNhbk1hdGNoOiBbY2hlY2tUdXRvcmlhbEd1YXJkXVxuICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTd1VwZGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3NlcnZpY2Utd29ya2VyJztcblxuaW1wb3J0IHsgTWVudUNvbnRyb2xsZXIsIFBsYXRmb3JtLCBUb2FzdENvbnRyb2xsZXIgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5cbmltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gJ0BjYXBhY2l0b3Ivc3RhdHVzLWJhcic7XG5pbXBvcnQgeyBTcGxhc2hTY3JlZW4gfSBmcm9tICdAY2FwYWNpdG9yL3NwbGFzaC1zY3JlZW4nO1xuXG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UtYW5ndWxhcic7XG5cbmltcG9ydCB7IFVzZXJEYXRhIH0gZnJvbSAnLi9wcm92aWRlcnMvdXNlci1kYXRhJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXJvb3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXBwLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgYXBwUGFnZXMgPSBbXG4gICAge1xuICAgICAgdGl0bGU6ICdTY2hlZHVsZScsXG4gICAgICB1cmw6ICcvYXBwL3RhYnMvc2NoZWR1bGUnLFxuICAgICAgaWNvbjogJ2NhbGVuZGFyJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdTcGVha2VycycsXG4gICAgICB1cmw6ICcvYXBwL3RhYnMvc3BlYWtlcnMnLFxuICAgICAgaWNvbjogJ3Blb3BsZSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnTWFwJyxcbiAgICAgIHVybDogJy9hcHAvdGFicy9tYXAnLFxuICAgICAgaWNvbjogJ21hcCdcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnQWJvdXQnLFxuICAgICAgdXJsOiAnL2FwcC90YWJzL2Fib3V0JyxcbiAgICAgIGljb246ICdpbmZvcm1hdGlvbi1jaXJjbGUnXG4gICAgfVxuICBdO1xuICBsb2dnZWRJbiA9IGZhbHNlO1xuICBkYXJrID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtZW51OiBNZW51Q29udHJvbGxlcixcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZSxcbiAgICBwcml2YXRlIHVzZXJEYXRhOiBVc2VyRGF0YSxcbiAgICBwcml2YXRlIHN3VXBkYXRlOiBTd1VwZGF0ZSxcbiAgICBwcml2YXRlIHRvYXN0Q3RybDogVG9hc3RDb250cm9sbGVyLFxuICApIHtcbiAgICB0aGlzLmluaXRpYWxpemVBcHAoKTtcbiAgfVxuXG4gIGFzeW5jIG5nT25Jbml0KCkge1xuICAgIGF3YWl0IHRoaXMuc3RvcmFnZS5jcmVhdGUoKTtcbiAgICB0aGlzLmNoZWNrTG9naW5TdGF0dXMoKTtcbiAgICB0aGlzLmxpc3RlbkZvckxvZ2luRXZlbnRzKCk7XG5cbiAgICB0aGlzLnN3VXBkYXRlLmF2YWlsYWJsZS5zdWJzY3JpYmUoYXN5bmMgcmVzID0+IHtcbiAgICAgIGNvbnN0IHRvYXN0ID0gYXdhaXQgdGhpcy50b2FzdEN0cmwuY3JlYXRlKHtcbiAgICAgICAgbWVzc2FnZTogJ1VwZGF0ZSBhdmFpbGFibGUhJyxcbiAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgICAgICBidXR0b25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcm9sZTogJ2NhbmNlbCcsXG4gICAgICAgICAgICB0ZXh0OiAnUmVsb2FkJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSk7XG5cbiAgICAgIGF3YWl0IHRvYXN0LnByZXNlbnQoKTtcblxuICAgICAgdG9hc3RcbiAgICAgICAgLm9uRGlkRGlzbWlzcygpXG4gICAgICAgIC50aGVuKCgpID0+IHRoaXMuc3dVcGRhdGUuYWN0aXZhdGVVcGRhdGUoKSlcbiAgICAgICAgLnRoZW4oKCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpemVBcHAoKSB7XG4gICAgdGhpcy5wbGF0Zm9ybS5yZWFkeSgpLnRoZW4oKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucGxhdGZvcm0uaXMoJ2h5YnJpZCcpKSB7XG4gICAgICAgIFN0YXR1c0Jhci5oaWRlKCk7XG4gICAgICAgIFNwbGFzaFNjcmVlbi5oaWRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjaGVja0xvZ2luU3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLnVzZXJEYXRhLmlzTG9nZ2VkSW4oKS50aGVuKGxvZ2dlZEluID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnVwZGF0ZUxvZ2dlZEluU3RhdHVzKGxvZ2dlZEluKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUxvZ2dlZEluU3RhdHVzKGxvZ2dlZEluOiBib29sZWFuKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmxvZ2dlZEluID0gbG9nZ2VkSW47XG4gICAgfSwgMzAwKTtcbiAgfVxuXG4gIGxpc3RlbkZvckxvZ2luRXZlbnRzKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd1c2VyOmxvZ2luJywgKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVMb2dnZWRJblN0YXR1cyh0cnVlKTtcbiAgICB9KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd1c2VyOnNpZ251cCcsICgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlTG9nZ2VkSW5TdGF0dXModHJ1ZSk7XG4gICAgfSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndXNlcjpsb2dvdXQnLCAoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZUxvZ2dlZEluU3RhdHVzKGZhbHNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxvZ291dCgpIHtcbiAgICB0aGlzLnVzZXJEYXRhLmxvZ291dCgpLnRoZW4oKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy9hcHAvdGFicy9zY2hlZHVsZScpO1xuICAgIH0pO1xuICB9XG5cbiAgb3BlblR1dG9yaWFsKCkge1xuICAgIHRoaXMubWVudS5lbmFibGUoZmFsc2UpO1xuICAgIHRoaXMuc3RvcmFnZS5zZXQoJ2lvbl9kaWRfdHV0b3JpYWwnLCBmYWxzZSk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL3R1dG9yaWFsJyk7XG4gIH1cbn1cbiIsIjxpb24tYXBwIFtjbGFzcy5kYXJrLXRoZW1lXT1cImRhcmtcIj5cbiAgPGlvbi1zcGxpdC1wYW5lIGNvbnRlbnRJZD1cIm1haW4tY29udGVudFwiPlxuXG4gICAgPGlvbi1tZW51IGNvbnRlbnRJZD1cIm1haW4tY29udGVudFwiPlxuICAgICAgPGlvbi1jb250ZW50PlxuICAgICAgICA8aW9uLWxpc3QgbGluZXM9XCJub25lXCI+XG4gICAgICAgICAgPGlvbi1saXN0LWhlYWRlcj5cbiAgICAgICAgICAgIENvbmZlcmVuY2VcbiAgICAgICAgICA8L2lvbi1saXN0LWhlYWRlcj5cbiAgICAgICAgICA8aW9uLW1lbnUtdG9nZ2xlIGF1dG9IaWRlPVwiZmFsc2VcIiAqbmdGb3I9XCJsZXQgcCBvZiBhcHBQYWdlczsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgICAgICAgPGlvbi1pdGVtIFtyb3V0ZXJMaW5rXT1cInAudXJsXCIgcm91dGVyTGlua0FjdGl2ZT1cInNlbGVjdGVkXCIgcm91dGVyRGlyZWN0aW9uPVwicm9vdFwiIGRldGFpbD1cImZhbHNlXCI+XG4gICAgICAgICAgICAgIDxpb24taWNvbiBzbG90PVwic3RhcnRcIiBbbmFtZV09XCJwLmljb24gKyAnLW91dGxpbmUnXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgICAgPGlvbi1sYWJlbD5cbiAgICAgICAgICAgICAgICB7e3AudGl0bGV9fVxuICAgICAgICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgICAgICAgIDwvaW9uLWl0ZW0+XG5cbiAgICAgICAgICA8L2lvbi1tZW51LXRvZ2dsZT5cbiAgICAgICAgPC9pb24tbGlzdD5cblxuICAgICAgICA8aW9uLWxpc3QgKm5nSWY9XCJsb2dnZWRJblwiIGxpbmVzPVwibm9uZVwiPlxuICAgICAgICAgIDxpb24tbGlzdC1oZWFkZXI+XG4gICAgICAgICAgICBBY2NvdW50XG4gICAgICAgICAgPC9pb24tbGlzdC1oZWFkZXI+XG5cbiAgICAgICAgICA8aW9uLW1lbnUtdG9nZ2xlIGF1dG9IaWRlPVwiZmFsc2VcIj5cbiAgICAgICAgICAgIDxpb24taXRlbSByb3V0ZXJMaW5rPVwiL2FjY291bnRcIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCIgcm91dGVyRGlyZWN0aW9uPVwicm9vdFwiIGRldGFpbD1cImZhbHNlXCI+XG4gICAgICAgICAgICAgIDxpb24taWNvbiBzbG90PVwic3RhcnRcIiBuYW1lPVwicGVyc29uXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgICAgPGlvbi1sYWJlbD5cbiAgICAgICAgICAgICAgICBBY2NvdW50XG4gICAgICAgICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgICA8L2lvbi1tZW51LXRvZ2dsZT5cblxuICAgICAgICAgIDxpb24tbWVudS10b2dnbGUgYXV0b0hpZGU9XCJmYWxzZVwiPlxuICAgICAgICAgICAgPGlvbi1pdGVtIHJvdXRlckxpbms9XCIvc3VwcG9ydFwiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIiByb3V0ZXJEaXJlY3Rpb249XCJyb290XCIgZGV0YWlsPVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJoZWxwXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgICAgPGlvbi1sYWJlbD5cbiAgICAgICAgICAgICAgICBTdXBwb3J0XG4gICAgICAgICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgICA8L2lvbi1tZW51LXRvZ2dsZT5cblxuICAgICAgICAgIDxpb24tbWVudS10b2dnbGUgYXV0b0hpZGU9XCJmYWxzZVwiPlxuICAgICAgICAgICAgPGlvbi1pdGVtIGJ1dHRvbiAoY2xpY2spPVwibG9nb3V0KClcIiBkZXRhaWw9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICA8aW9uLWljb24gc2xvdD1cInN0YXJ0XCIgbmFtZT1cImxvZy1vdXRcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICA8aW9uLWxhYmVsPlxuICAgICAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgICAgPC9pb24tbWVudS10b2dnbGU+XG5cbiAgICAgICAgPC9pb24tbGlzdD5cblxuICAgICAgICA8aW9uLWxpc3QgKm5nSWY9XCIhbG9nZ2VkSW5cIiBsaW5lcz1cIm5vbmVcIj5cbiAgICAgICAgICA8aW9uLWxpc3QtaGVhZGVyPlxuICAgICAgICAgICAgQWNjb3VudFxuICAgICAgICAgIDwvaW9uLWxpc3QtaGVhZGVyPlxuXG4gICAgICAgICAgPGlvbi1tZW51LXRvZ2dsZSBhdXRvSGlkZT1cImZhbHNlXCI+XG4gICAgICAgICAgICA8aW9uLWl0ZW0gcm91dGVyTGluaz1cIi9sb2dpblwiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIiByb3V0ZXJEaXJlY3Rpb249XCJyb290XCIgZGV0YWlsPVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJsb2ctaW5cIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICA8aW9uLWxhYmVsPlxuICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgICA8L2lvbi1tZW51LXRvZ2dsZT5cblxuICAgICAgICAgIDxpb24tbWVudS10b2dnbGUgYXV0b0hpZGU9XCJmYWxzZVwiPlxuICAgICAgICAgICAgPGlvbi1pdGVtIHJvdXRlckxpbms9XCIvc3VwcG9ydFwiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIiByb3V0ZXJEaXJlY3Rpb249XCJyb290XCIgZGV0YWlsPVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJoZWxwXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgICAgPGlvbi1sYWJlbD5cbiAgICAgICAgICAgICAgICBTdXBwb3J0XG4gICAgICAgICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgICA8L2lvbi1tZW51LXRvZ2dsZT5cblxuICAgICAgICAgIDxpb24tbWVudS10b2dnbGUgYXV0b0hpZGU9XCJmYWxzZVwiPlxuICAgICAgICAgICAgPGlvbi1pdGVtIHJvdXRlckxpbms9XCIvc2lnbnVwXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiIHJvdXRlckRpcmVjdGlvbj1cInJvb3RcIiBkZXRhaWw9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICA8aW9uLWljb24gc2xvdD1cInN0YXJ0XCIgbmFtZT1cInBlcnNvbi1hZGRcIj48L2lvbi1pY29uPlxuICAgICAgICAgICAgICA8aW9uLWxhYmVsPlxuICAgICAgICAgICAgICAgIFNpZ251cFxuICAgICAgICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgICAgPC9pb24tbWVudS10b2dnbGU+XG5cbiAgICAgICAgICA8aW9uLWl0ZW0+XG4gICAgICAgICAgICA8aW9uLWljb24gc2xvdD1cInN0YXJ0XCIgbmFtZT1cIm1vb24tb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgICAgICA8aW9uLXRvZ2dsZSBbKG5nTW9kZWwpXT1cImRhcmtcIj5cbiAgICAgICAgICAgICAgRGFyayBNb2RlXG4gICAgICAgICAgICA8L2lvbi10b2dnbGU+XG4gICAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgPC9pb24tbGlzdD5cblxuICAgICAgICA8aW9uLWxpc3QgbGluZXM9XCJub25lXCI+XG4gICAgICAgICAgPGlvbi1saXN0LWhlYWRlcj5cbiAgICAgICAgICAgIFR1dG9yaWFsXG4gICAgICAgICAgPC9pb24tbGlzdC1oZWFkZXI+XG4gICAgICAgICAgPGlvbi1tZW51LXRvZ2dsZSBhdXRvSGlkZT1cImZhbHNlXCI+XG4gICAgICAgICAgICA8aW9uLWl0ZW0gYnV0dG9uIChjbGljayk9XCJvcGVuVHV0b3JpYWwoKVwiIGRldGFpbD1cImZhbHNlXCI+XG4gICAgICAgICAgICAgIDxpb24taWNvbiBzbG90PVwic3RhcnRcIiBuYW1lPVwiaGFtbWVyXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgICAgPGlvbi1sYWJlbD5TaG93IFR1dG9yaWFsPC9pb24tbGFiZWw+XG4gICAgICAgICAgICA8L2lvbi1pdGVtPlxuICAgICAgICAgIDwvaW9uLW1lbnUtdG9nZ2xlPlxuICAgICAgICA8L2lvbi1saXN0PlxuICAgICAgPC9pb24tY29udGVudD5cbiAgICA8L2lvbi1tZW51PlxuXG4gICAgPGlvbi1yb3V0ZXItb3V0bGV0IGlkPVwibWFpbi1jb250ZW50XCI+PC9pb24tcm91dGVyLW91dGxldD5cblxuICA8L2lvbi1zcGxpdC1wYW5lPlxuXG48L2lvbi1hcHA+XG4iLCJpbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEluQXBwQnJvd3NlciB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9pbi1hcHAtYnJvd3Nlci9uZ3gnO1xuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBJb25pY1N0b3JhZ2VNb2R1bGUgfSBmcm9tICdAaW9uaWMvc3RvcmFnZS1hbmd1bGFyJztcblxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gJy4vYXBwLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZXJ2aWNlV29ya2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvc2VydmljZS13b3JrZXInO1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBJb25pY01vZHVsZS5mb3JSb290KCksXG4gICAgSW9uaWNTdG9yYWdlTW9kdWxlLmZvclJvb3QoKSxcbiAgICBTZXJ2aWNlV29ya2VyTW9kdWxlLnJlZ2lzdGVyKCduZ3N3LXdvcmtlci5qcycsIHtcbiAgICAgIGVuYWJsZWQ6IGVudmlyb25tZW50LnByb2R1Y3Rpb25cbiAgICB9KVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtJbkFwcEJyb3dzZXJdLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlLWFuZ3VsYXInO1xuaW1wb3J0IHsgZnJvbSwgbWFwLCB0YXAgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGNvbnN0IGNoZWNrVHV0b3JpYWxHdWFyZCA9ICgpID0+IHtcbiAgY29uc3Qgc3RvcmFnZSA9IGluamVjdChTdG9yYWdlKTtcbiAgY29uc3Qgcm91dGVyID0gaW5qZWN0KFJvdXRlcik7XG5cbiAgcmV0dXJuIGZyb20oc3RvcmFnZS5nZXQoJ2lvbl9kaWRfdHV0b3JpYWwnKSlcbiAgICAucGlwZShcbiAgICAgIHRhcChkaWRUdXRvcmlhbCA9PiB7XG4gICAgICAgIGlmIChkaWRUdXRvcmlhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJvdXRlci5uYXZpZ2F0ZShbJy9hcHAnLCAndGFicycsICdzY2hlZHVsZSddKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBtYXAoZGlkVHV0b3JpYWwgPT4gIWRpZFR1dG9yaWFsKVxuICAgICk7XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UtYW5ndWxhcic7XG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVXNlckRhdGEge1xuICBmYXZvcml0ZXM6IHN0cmluZ1tdID0gW107XG4gIEhBU19MT0dHRURfSU4gPSAnaGFzTG9nZ2VkSW4nO1xuICBIQVNfU0VFTl9UVVRPUklBTCA9ICdoYXNTZWVuVHV0b3JpYWwnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzdG9yYWdlOiBTdG9yYWdlXG4gICkgeyB9XG5cbiAgaGFzRmF2b3JpdGUoc2Vzc2lvbk5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAodGhpcy5mYXZvcml0ZXMuaW5kZXhPZihzZXNzaW9uTmFtZSkgPiAtMSk7XG4gIH1cblxuICBhZGRGYXZvcml0ZShzZXNzaW9uTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5mYXZvcml0ZXMucHVzaChzZXNzaW9uTmFtZSk7XG4gIH1cblxuICByZW1vdmVGYXZvcml0ZShzZXNzaW9uTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmZhdm9yaXRlcy5pbmRleE9mKHNlc3Npb25OYW1lKTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5mYXZvcml0ZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cblxuICBsb2dpbih1c2VybmFtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlLnNldCh0aGlzLkhBU19MT0dHRURfSU4sIHRydWUpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5zZXRVc2VybmFtZSh1c2VybmFtZSk7XG4gICAgICByZXR1cm4gd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCd1c2VyOmxvZ2luJykpO1xuICAgIH0pO1xuICB9XG5cbiAgc2lnbnVwKHVzZXJuYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2Uuc2V0KHRoaXMuSEFTX0xPR0dFRF9JTiwgdHJ1ZSkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnNldFVzZXJuYW1lKHVzZXJuYW1lKTtcbiAgICAgIHJldHVybiB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3VzZXI6c2lnbnVwJykpO1xuICAgIH0pO1xuICB9XG5cbiAgbG9nb3V0KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5yZW1vdmUodGhpcy5IQVNfTE9HR0VEX0lOKS50aGVuKCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnN0b3JhZ2UucmVtb3ZlKCd1c2VybmFtZScpO1xuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCd1c2VyOmxvZ291dCcpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldFVzZXJuYW1lKHVzZXJuYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2Uuc2V0KCd1c2VybmFtZScsIHVzZXJuYW1lKTtcbiAgfVxuXG4gIGdldFVzZXJuYW1lKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5nZXQoJ3VzZXJuYW1lJykudGhlbigodmFsdWUpID0+IHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIGlzTG9nZ2VkSW4oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5nZXQodGhpcy5IQVNfTE9HR0VEX0lOKS50aGVuKCh2YWx1ZSkgPT4ge1xuICAgICAgcmV0dXJuIHZhbHVlID09PSB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgY2hlY2tIYXNTZWVuVHV0b3JpYWwoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlLmdldCh0aGlzLkhBU19TRUVOX1RVVE9SSUFMKS50aGVuKCh2YWx1ZSkgPT4ge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0pO1xuICB9XG59XG4iLCIvLyBUaGUgZmlsZSBjb250ZW50cyBmb3IgdGhlIGN1cnJlbnQgZW52aXJvbm1lbnQgd2lsbCBvdmVyd3JpdGUgdGhlc2UgZHVyaW5nIGJ1aWxkLlxuLy8gVGhlIGJ1aWxkIHN5c3RlbSBkZWZhdWx0cyB0byB0aGUgZGV2IGVudmlyb25tZW50IHdoaWNoIHVzZXMgYGVudmlyb25tZW50LnRzYCwgYnV0IGlmIHlvdSBkb1xuLy8gYG5nIGJ1aWxkIC0tZW52PXByb2RgIHRoZW4gYGVudmlyb25tZW50LnByb2QudHNgIHdpbGwgYmUgdXNlZCBpbnN0ZWFkLlxuLy8gVGhlIGxpc3Qgb2Ygd2hpY2ggZW52IG1hcHMgdG8gd2hpY2ggZmlsZSBjYW4gYmUgZm91bmQgaW4gYC5hbmd1bGFyLWNsaS5qc29uYC5cbmV4cG9ydCBjb25zdCBlbnZpcm9ubWVudCA9IHtcbiAgcHJvZHVjdGlvbjogZmFsc2Vcbn07XG5cbi8qXG4gKiBJbiBkZXZlbG9wbWVudCBtb2RlLCB0byBpZ25vcmUgem9uZSByZWxhdGVkIGVycm9yIHN0YWNrIGZyYW1lcyBzdWNoIGFzXG4gKiBgem9uZS5ydW5gLCBgem9uZURlbGVnYXRlLmludm9rZVRhc2tgIGZvciBlYXNpZXIgZGVidWdnaW5nLCB5b3UgY2FuXG4gKiBpbXBvcnQgdGhlIGZvbGxvd2luZyBmaWxlLCBidXQgcGxlYXNlIGNvbW1lbnQgaXQgb3V0IGluIHByb2R1Y3Rpb24gbW9kZVxuICogYmVjYXVzZSBpdCB3aWxsIGhhdmUgcGVyZm9ybWFuY2UgaW1wYWN0IHdoZW4gdGhyb3cgZXJyb3JcbiAqL1xuLy8gaW1wb3J0ICd6b25lLmpzL3BsdWdpbnMvem9uZS1lcnJvcic7ICAvLyBJbmNsdWRlZCB3aXRoIEFuZ3VsYXIgQ0xJLlxuIiwiaW1wb3J0ICdAYW5ndWxhci9jb21waWxlcic7XG5cbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcblxuaWYgKGVudmlyb25tZW50LnByb2R1Y3Rpb24pIHtcbiAgZW5hYmxlUHJvZE1vZGUoKTtcbn1cblxucGxhdGZvcm1Ccm93c2VyRHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpXG4gIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vaW9uLWFjY29yZGlvbl8yLmVudHJ5LmpzXCI6IFtcblx0XHQ3OSxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWFjY29yZGlvbl8yX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1hY3Rpb24tc2hlZXQuZW50cnkuanNcIjogW1xuXHRcdDU1OTMsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1hY3Rpb24tc2hlZXRfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWFsZXJ0LmVudHJ5LmpzXCI6IFtcblx0XHQzMjI1LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tYWxlcnRfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWFwcF84LmVudHJ5LmpzXCI6IFtcblx0XHQ0ODEyLFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tYXBwXzhfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWF2YXRhcl8zLmVudHJ5LmpzXCI6IFtcblx0XHQ2NjU1LFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWF2YXRhcl8zX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1iYWNrLWJ1dHRvbi5lbnRyeS5qc1wiOiBbXG5cdFx0NDg1Nixcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWJhY2stYnV0dG9uX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1iYWNrZHJvcC5lbnRyeS5qc1wiOiBbXG5cdFx0MzA1OSxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1iYWNrZHJvcF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tYnJlYWRjcnVtYl8yLmVudHJ5LmpzXCI6IFtcblx0XHQ4NjQ4LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tYnJlYWRjcnVtYl8yX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1idXR0b25fMi5lbnRyeS5qc1wiOiBbXG5cdFx0ODMwOCxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1idXR0b25fMl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tY2FyZF81LmVudHJ5LmpzXCI6IFtcblx0XHQ0NjkwLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWNhcmRfNV9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tY2hlY2tib3guZW50cnkuanNcIjogW1xuXHRcdDQwOTAsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1jaGVja2JveF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tY2hpcC5lbnRyeS5qc1wiOiBbXG5cdFx0NjIxNCxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1jaGlwX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1jb2xfMy5lbnRyeS5qc1wiOiBbXG5cdFx0OTQ0Nyxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1jb2xfM19lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tZGF0ZXRpbWUtYnV0dG9uLmVudHJ5LmpzXCI6IFtcblx0XHQ3OTUwLFxuXHRcdFwiZGVmYXVsdC1ub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9kYXRhLWE2ZmMyMThmX2pzLW5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX3RoLTc0ZmIwNlwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWRhdGV0aW1lLWJ1dHRvbl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tZGF0ZXRpbWVfMy5lbnRyeS5qc1wiOiBbXG5cdFx0OTY4OSxcblx0XHRcImRlZmF1bHQtbm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21fZGF0YS1hNmZjMjE4Zl9qcy1ub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV90aC03NGZiMDZcIixcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWRhdGV0aW1lXzNfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWZhYl8zLmVudHJ5LmpzXCI6IFtcblx0XHQ4ODQwLFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tZmFiXzNfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWltZy5lbnRyeS5qc1wiOiBbXG5cdFx0ODQwNCxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1pbWdfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWluZmluaXRlLXNjcm9sbF8yLmVudHJ5LmpzXCI6IFtcblx0XHQ5NjY3LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24taW5maW5pdGUtc2Nyb2xsXzJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWlucHV0LmVudHJ5LmpzXCI6IFtcblx0XHQzMjg4LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24taW5wdXRfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWl0ZW0tb3B0aW9uXzMuZW50cnkuanNcIjogW1xuXHRcdDU0NzMsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1pdGVtLW9wdGlvbl8zX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1pdGVtXzguZW50cnkuanNcIjogW1xuXHRcdDM2MzQsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1pdGVtXzhfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWxvYWRpbmcuZW50cnkuanNcIjogW1xuXHRcdDI4NTUsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tbG9hZGluZ19lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tbWVudV8zLmVudHJ5LmpzXCI6IFtcblx0XHQ0OTUsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1tZW51XzNfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLW1vZGFsLmVudHJ5LmpzXCI6IFtcblx0XHQ4NzM3LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tbW9kYWxfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLW5hdl8yLmVudHJ5LmpzXCI6IFtcblx0XHQ5NjMyLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLW5hdl8yX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1waWNrZXItY29sdW1uLWludGVybmFsLmVudHJ5LmpzXCI6IFtcblx0XHQ0NDQ2LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tcGlja2VyLWNvbHVtbi1pbnRlcm5hbF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tcGlja2VyLWludGVybmFsLmVudHJ5LmpzXCI6IFtcblx0XHQyMjc1LFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXBpY2tlci1pbnRlcm5hbF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tcG9wb3Zlci5lbnRyeS5qc1wiOiBbXG5cdFx0ODA1MCxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1wb3BvdmVyX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1wcm9ncmVzcy1iYXIuZW50cnkuanNcIjogW1xuXHRcdDg5OTQsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tcHJvZ3Jlc3MtYmFyX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1yYWRpb18yLmVudHJ5LmpzXCI6IFtcblx0XHQzNTkyLFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tcmFkaW9fMl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tcmFuZ2UuZW50cnkuanNcIjogW1xuXHRcdDU0NTQsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1yYW5nZV9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tcmVmcmVzaGVyXzIuZW50cnkuanNcIjogW1xuXHRcdDI5MCxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXJlZnJlc2hlcl8yX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1yZW9yZGVyXzIuZW50cnkuanNcIjogW1xuXHRcdDI2NjYsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1yZW9yZGVyXzJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXJpcHBsZS1lZmZlY3QuZW50cnkuanNcIjogW1xuXHRcdDQ4MTYsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tcmlwcGxlLWVmZmVjdF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tcm91dGVfNC5lbnRyeS5qc1wiOiBbXG5cdFx0NTUzNCxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1yb3V0ZV80X2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1zZWFyY2hiYXIuZW50cnkuanNcIjogW1xuXHRcdDQ5MDIsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1zZWFyY2hiYXJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXNlZ21lbnRfMi5lbnRyeS5qc1wiOiBbXG5cdFx0MTkzOCxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXNlZ21lbnRfMl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tc2VsZWN0XzMuZW50cnkuanNcIjogW1xuXHRcdDgxNzksXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1zZWxlY3RfM19lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tc3Bpbm5lci5lbnRyeS5qc1wiOiBbXG5cdFx0MTYyNCxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXNwaW5uZXJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXNwbGl0LXBhbmUuZW50cnkuanNcIjogW1xuXHRcdDg1NTUsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tc3BsaXQtcGFuZV9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tdGFiLWJhcl8yLmVudHJ5LmpzXCI6IFtcblx0XHQ4OTAyLFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tdGFiLWJhcl8yX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi10YWJfMi5lbnRyeS5qc1wiOiBbXG5cdFx0MTk5LFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXRhYl8yX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi10ZXh0LmVudHJ5LmpzXCI6IFtcblx0XHQ4Mzk1LFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXRleHRfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXRleHRhcmVhLmVudHJ5LmpzXCI6IFtcblx0XHQ2MzU3LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tdGV4dGFyZWFfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXRvYXN0LmVudHJ5LmpzXCI6IFtcblx0XHQ4MjY4LFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXRvYXN0X2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi10b2dnbGUuZW50cnkuanNcIjogW1xuXHRcdDUyNjksXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi10b2dnbGVfZW50cnlfanNcIlxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH0pO1xuXHR9XG5cblx0dmFyIGlkcyA9IG1hcFtyZXFdLCBpZCA9IGlkc1swXTtcblx0cmV0dXJuIFByb21pc2UuYWxsKGlkcy5zbGljZSgxKS5tYXAoX193ZWJwYWNrX3JlcXVpcmVfXy5lKSkudGhlbigoKSA9PiB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xuXHR9KTtcbn1cbndlYnBhY2tBc3luY0NvbnRleHQua2V5cyA9ICgpID0+IChPYmplY3Qua2V5cyhtYXApKTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSA4NjM7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tBc3luY0NvbnRleHQ7Il0sIm5hbWVzIjpbIlJvdXRlck1vZHVsZSIsImNoZWNrVHV0b3JpYWxHdWFyZCIsInJvdXRlcyIsInBhdGgiLCJyZWRpcmVjdFRvIiwicGF0aE1hdGNoIiwibG9hZENoaWxkcmVuIiwidGhlbiIsIm0iLCJBY2NvdW50TW9kdWxlIiwiU3VwcG9ydE1vZHVsZSIsIkxvZ2luTW9kdWxlIiwiU2lnblVwTW9kdWxlIiwiVGFic01vZHVsZSIsIlR1dG9yaWFsTW9kdWxlIiwiY2FuTWF0Y2giLCJBcHBSb3V0aW5nTW9kdWxlIiwiZm9yUm9vdCIsImltcG9ydHMiLCJpMSIsImV4cG9ydHMiLCJSb3V0ZXIiLCJTd1VwZGF0ZSIsIk1lbnVDb250cm9sbGVyIiwiUGxhdGZvcm0iLCJUb2FzdENvbnRyb2xsZXIiLCJTdGF0dXNCYXIiLCJTcGxhc2hTY3JlZW4iLCJTdG9yYWdlIiwiVXNlckRhdGEiLCJpMCIsIsm1ybVlbGVtZW50U3RhcnQiLCLJtcm1ZWxlbWVudCIsIsm1ybV0ZXh0IiwiybXJtWVsZW1lbnRFbmQiLCLJtcm1YWR2YW5jZSIsIsm1ybVwcm9wZXJ0eSIsInBfcjMiLCJ1cmwiLCJpY29uIiwiybXJtXRleHRJbnRlcnBvbGF0ZTEiLCJ0aXRsZSIsIsm1ybVsaXN0ZW5lciIsIkFwcENvbXBvbmVudF9pb25fbGlzdF84X1RlbXBsYXRlX2lvbl9pdGVtX2NsaWNrXzE0X2xpc3RlbmVyIiwiybXJtXJlc3RvcmVWaWV3IiwiX3I2IiwiY3R4X3I1IiwiybXJtW5leHRDb250ZXh0IiwiybXJtXJlc2V0VmlldyIsImxvZ291dCIsIkFwcENvbXBvbmVudF9pb25fbGlzdF85X1RlbXBsYXRlX2lvbl90b2dnbGVfbmdNb2RlbENoYW5nZV8yMF9saXN0ZW5lciIsIiRldmVudCIsIl9yOCIsImN0eF9yNyIsImRhcmsiLCJjdHhfcjIiLCJBcHBDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsIm1lbnUiLCJwbGF0Zm9ybSIsInJvdXRlciIsInN0b3JhZ2UiLCJ1c2VyRGF0YSIsInN3VXBkYXRlIiwidG9hc3RDdHJsIiwiYXBwUGFnZXMiLCJsb2dnZWRJbiIsImluaXRpYWxpemVBcHAiLCJuZ09uSW5pdCIsIl90aGlzIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJjcmVhdGUiLCJjaGVja0xvZ2luU3RhdHVzIiwibGlzdGVuRm9yTG9naW5FdmVudHMiLCJhdmFpbGFibGUiLCJzdWJzY3JpYmUiLCJfcmVmIiwicmVzIiwidG9hc3QiLCJtZXNzYWdlIiwicG9zaXRpb24iLCJidXR0b25zIiwicm9sZSIsInRleHQiLCJwcmVzZW50Iiwib25EaWREaXNtaXNzIiwiYWN0aXZhdGVVcGRhdGUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsIl94IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJyZWFkeSIsImlzIiwiaGlkZSIsImlzTG9nZ2VkSW4iLCJ1cGRhdGVMb2dnZWRJblN0YXR1cyIsInNldFRpbWVvdXQiLCJhZGRFdmVudExpc3RlbmVyIiwibmF2aWdhdGVCeVVybCIsIm9wZW5UdXRvcmlhbCIsImVuYWJsZSIsInNldCIsIsm1ybVkaXJlY3RpdmVJbmplY3QiLCJpMiIsImkzIiwiaTQiLCJpNSIsInNlbGVjdG9ycyIsImRlY2xzIiwidmFycyIsImNvbnN0cyIsInRlbXBsYXRlIiwiQXBwQ29tcG9uZW50X1RlbXBsYXRlIiwicmYiLCJjdHgiLCLJtcm1dGVtcGxhdGUiLCJBcHBDb21wb25lbnRfaW9uX21lbnVfdG9nZ2xlXzdfVGVtcGxhdGUiLCJBcHBDb21wb25lbnRfaW9uX2xpc3RfOF9UZW1wbGF0ZSIsIkFwcENvbXBvbmVudF9pb25fbGlzdF85X1RlbXBsYXRlIiwiQXBwQ29tcG9uZW50X1RlbXBsYXRlX2lvbl9pdGVtX2NsaWNrXzE0X2xpc3RlbmVyIiwiybXJtWNsYXNzUHJvcCIsIkh0dHBDbGllbnRNb2R1bGUiLCJCcm93c2VyTW9kdWxlIiwiSW5BcHBCcm93c2VyIiwiSW9uaWNNb2R1bGUiLCJJb25pY1N0b3JhZ2VNb2R1bGUiLCJTZXJ2aWNlV29ya2VyTW9kdWxlIiwiZW52aXJvbm1lbnQiLCJGb3Jtc01vZHVsZSIsIkFwcE1vZHVsZSIsImJvb3RzdHJhcCIsInJlZ2lzdGVyIiwiZW5hYmxlZCIsInByb2R1Y3Rpb24iLCJkZWNsYXJhdGlvbnMiLCJpbmplY3QiLCJmcm9tIiwibWFwIiwidGFwIiwiZ2V0IiwicGlwZSIsImRpZFR1dG9yaWFsIiwibmF2aWdhdGUiLCJmYXZvcml0ZXMiLCJIQVNfTE9HR0VEX0lOIiwiSEFTX1NFRU5fVFVUT1JJQUwiLCJoYXNGYXZvcml0ZSIsInNlc3Npb25OYW1lIiwiaW5kZXhPZiIsImFkZEZhdm9yaXRlIiwicHVzaCIsInJlbW92ZUZhdm9yaXRlIiwiaW5kZXgiLCJzcGxpY2UiLCJsb2dpbiIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJzaWdudXAiLCJyZW1vdmUiLCJnZXRVc2VybmFtZSIsInZhbHVlIiwiY2hlY2tIYXNTZWVuVHV0b3JpYWwiLCLJtcm1aW5qZWN0IiwiZmFjdG9yeSIsIsm1ZmFjIiwicHJvdmlkZWRJbiIsImVuYWJsZVByb2RNb2RlIiwiX19OZ0NsaV9ib290c3RyYXBfMSIsInBsYXRmb3JtQnJvd3NlciIsImJvb3RzdHJhcE1vZHVsZSIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290Ijoid2VicGFjazovLy8iLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbOF19