(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 23966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _providers_check_tutorial_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./providers/check-tutorial.guard */ 10406);
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth-guard */ 24166);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);





const redirectUnauthorizedToLogin = () => (0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__.redirectUnauthorizedTo)(['']);
const redirectLoggedInToSchedule = () => (0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__.redirectLoggedInTo)(['schedule']);
const routes = [{
  path: '',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 8364)).then(m => m.LoginModule),
  pathMatch: 'full',
  ...(0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__.canActivate)(redirectLoggedInToSchedule)
}, {
  path: 'schedule',
  loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_pages_schedule_schedule_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/schedule/schedule.module */ 83436)).then(m => m.ScheduleModule),
  ...(0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__.canActivate)(redirectUnauthorizedToLogin)
}, {
  path: 'account',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_account_account_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/account/account.module */ 14041)).then(m => m.AccountModule)
}, {
  path: 'support',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_support_support_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/support/support.module */ 86527)).then(m => m.SupportModule)
}, {
  path: 'login',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 8364)).then(m => m.LoginModule),
  ...(0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__.canActivate)(redirectLoggedInToSchedule)
}, {
  path: 'signup',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_signup_signup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/signup/signup.module */ 94025)).then(m => m.SignUpModule)
}, {
  path: 'app',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_schedule_schedule_module_ts"), __webpack_require__.e("src_app_pages_tabs-page_tabs-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tabs-page/tabs-page.module */ 95595)).then(m => m.TabsModule)
}, {
  path: 'tutorial',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tutorial_tutorial_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tutorial/tutorial.module */ 78309)).then(m => m.TutorialModule),
  canMatch: [_providers_check_tutorial_guard__WEBPACK_IMPORTED_MODULE_0__.checkTutorialGuard]
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 66401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Blessing_Kunaka_Desktop_mining_expo_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/status-bar */ 38406);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/splash-screen */ 58259);
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./providers/user-data */ 8176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 64210);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ 25029);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/service-worker */ 51509);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 28849);
















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
      title: 'Scan',
      url: '/app/tabs/scanner',
      icon: 'scan'
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
    return (0,C_Users_Blessing_Kunaka_Desktop_mining_expo_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.storage.create();
      _this.checkLoginStatus();
      _this.listenForLoginEvents();
      _this.swUpdate.available.subscribe( /*#__PURE__*/function () {
        var _ref = (0,C_Users_Blessing_Kunaka_Desktop_mining_expo_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
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
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Welcome Page ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "ion-menu-toggle", 4)(14, "ion-item", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_Template_ion_item_click_14_listener() {
        return ctx.openTutorial();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "ion-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Welcome");
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
  styles: ["ion-menu ion-content {\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n  --background: var(--ion-item-background, var(--ion-background-color, #ffffff));\n}\n\n/* Remove background transitions for switching themes */\nion-menu ion-item {\n  --transition: none;\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n/*\n * Material Design Menu\n*/\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-list-header {\n  padding-right: 18px;\n  padding-left: 18px;\n  font-weight: 450;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n\nion-menu.md ion-item {\n  --padding-start: 18px;\n  margin-right: 10px;\n  border-radius: 0 50px 50px 0;\n  font-weight: 500;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgb(var(--ion-color-primary-rgb) 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-item ion-icon {\n  color: var(--ion-color-step-650, #5f6368);\n}\n\nion-menu.md ion-list:not(:last-of-type) {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\n/*\n * iOS Menu\n*/\nion-menu.ios ion-list-header {\n  margin-bottom: 8px;\n  padding-right: 16px;\n  padding-left: 16px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item ion-icon {\n  color: #73849a;\n  font-size: 24px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vQmxlc3NpbmclMjBLdW5ha2EvRGVza3RvcC9taW5pbmdfZXhwby9taW5pbmctZXhwby9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSw4RUFBQTtBQ0NGOztBREVBLHVEQUFBO0FBQ0E7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUNBQUE7QUNDRjs7QURFQTs7Q0FBQTtBQUdBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLGdCQUFBO0VBRUEscUJBQUE7RUFFQSx5QkFBQTtBQ0ZGOztBREtBO0VBQ0UscUJBQUE7RUFFQSxrQkFBQTtFQUVBLDRCQUFBO0VBRUEsZ0JBQUE7QUNMRjs7QURRQTtFQUNFLG9EQUFBO0FDTEY7O0FEUUE7RUFDRSwrQkFBQTtBQ0xGOztBRFFBOztFQUVFLHlDQUFBO0FDTEY7O0FEUUE7RUFDRSwyREFBQTtBQ0xGOztBRFNBOztDQUFBO0FBR0E7RUFDRSxrQkFBQTtFQUVBLG1CQUFBO0VBQ0Esa0JBQUE7QUNQRjs7QURVQTtFQUNFLGlCQUFBO0FDUEY7O0FEVUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FDUEY7O0FEVUE7RUFDRSxjQUFBO0VBRUEsZUFBQTtBQ1JGOztBRFdBO0VBQ0UsK0JBQUE7QUNSRiIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51IGlvbi1jb250ZW50IHtcclxuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZmZmZikpO1xyXG59XHJcblxyXG4vKiBSZW1vdmUgYmFja2dyb3VuZCB0cmFuc2l0aW9ucyBmb3Igc3dpdGNoaW5nIHRoZW1lcyAqL1xyXG5pb24tbWVudSBpb24taXRlbSB7XHJcbiAgLS10cmFuc2l0aW9uOiBub25lO1xyXG59XHJcblxyXG5pb24taXRlbS5zZWxlY3RlZCB7XHJcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG4vKlxyXG4gKiBNYXRlcmlhbCBEZXNpZ24gTWVudVxyXG4qL1xyXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE4cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG5cclxuICBmb250LXdlaWdodDogNDUwO1xyXG5cclxuICBsZXR0ZXItc3BhY2luZzogLjFlbTtcclxuXHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMThweDtcclxuXHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cclxuICBib3JkZXItcmFkaXVzOiAwIDUwcHggNTBweCAwO1xyXG5cclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2IodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSAwLjE0KTtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlcixcclxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02NTAsICM1ZjYzNjgpO1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdDpub3QoOmxhc3Qtb2YtdHlwZSkge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xyXG59XHJcblxyXG5cclxuLypcclxuICogaU9TIE1lbnVcclxuKi9cclxuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG5cclxuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTZweDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcclxuICBwYWRkaW5nOiAyMHB4IDAgMDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XHJcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xyXG4gIGNvbG9yOiAjNzM4NDlhO1xyXG5cclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG4iLCJpb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmZmZmYpKTtcbn1cblxuLyogUmVtb3ZlIGJhY2tncm91bmQgdHJhbnNpdGlvbnMgZm9yIHN3aXRjaGluZyB0aGVtZXMgKi9cbmlvbi1tZW51IGlvbi1pdGVtIHtcbiAgLS10cmFuc2l0aW9uOiBub25lO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLypcbiAqIE1hdGVyaWFsIERlc2lnbiBNZW51XG4qL1xuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlciB7XG4gIHBhZGRpbmctcmlnaHQ6IDE4cHg7XG4gIHBhZGRpbmctbGVmdDogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQ1MDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMThweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAwIDUwcHggNTBweCAwO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYikgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtNjUwLCAjNWY2MzY4KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3Q6bm90KDpsYXN0LW9mLXR5cGUpIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XG59XG5cbi8qXG4gKiBpT1MgTWVudVxuKi9cbmlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwIDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzczODQ5YTtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
  encapsulation: 2
});


/***/ }),

/***/ 78629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 68418);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 64210);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage-angular */ 5772);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 23966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 66401);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/service-worker */ 51509);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ 20553);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_fire_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/app */ 16140);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/auth */ 4404);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/firestore */ 93285);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/storage */ 30980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);






















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
  }), (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_11__.provideFirebaseApp)(() => (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_11__.initializeApp)(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.firebase)), (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__.provideAuth)(() => (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__.getAuth)()), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__.provideFirestore)(() => (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__.getFirestore)()), (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_14__.provideStorage)(() => (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_14__.getStorage)())]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_9__.IonicStorageModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__.ServiceWorkerModule, _angular_fire_app__WEBPACK_IMPORTED_MODULE_11__.FirebaseAppModule, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__.AuthModule, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__.FirestoreModule, _angular_fire_storage__WEBPACK_IMPORTED_MODULE_14__.StorageModule]
  });
})();

/***/ }),

/***/ 10406:
/*!***************************************************!*\
  !*** ./src/app/providers/check-tutorial.guard.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkTutorialGuard: () => (/* binding */ checkTutorialGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage-angular */ 25029);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 56231);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 13738);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 79736);




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

/***/ 8176:
/*!****************************************!*\
  !*** ./src/app/providers/user-data.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserData: () => (/* binding */ UserData)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage-angular */ 25029);



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

/***/ 20553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
  firebase: {
    projectId: 'mining-expo-bc804',
    appId: '1:62716428182:web:25c49a91cf0b6be8aa67b7',
    storageBucket: 'mining-expo-bc804.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyA4ieOO-HEl7GyhdDR1aj8_7yRjI5IRinM',
    authDomain: 'mining-expo-bc804.firebaseapp.com',
    messagingSenderId: '62716428182',
    measurementId: 'G-J6Q77G3MC4'
  },
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

/***/ 14913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _angular_compiler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/compiler */ 27178);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 78629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 20553);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule).catch(err => console.log(err));

/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		87512,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		56470,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		85690,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		68508,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		3438,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		19119,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		52319,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		44848,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		94752,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		9870,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		85892,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		9118,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9538,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		24969,
		"default-node_modules_ionic_core_dist_esm_data-1af84f31_js-node_modules_ionic_core_dist_esm_th-b55f4c",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		21835,
		"default-node_modules_ionic_core_dist_esm_data-1af84f31_js-node_modules_ionic_core_dist_esm_th-b55f4c",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		76719,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		3121,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		3025,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		33914,
		"default-node_modules_ionic_core_dist_esm_form-controller-6cd7ebd1_js-node_modules_ionic_core_-6eb319",
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		13761,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		86138,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		12063,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		84950,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		69707,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		60234,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		37209,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		93068,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		99215,
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		35635,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		1497,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		15922,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		16199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		53549,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		45966,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		93187,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		59092,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		17600,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		49870,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-spinner.entry.js": [
		81657,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		88394,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		44574,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		33514,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		7502,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		97832,
		"default-node_modules_ionic_core_dist_esm_form-controller-6cd7ebd1_js-node_modules_ionic_core_-6eb319",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		9805,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		57393,
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
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyIuL3NyYy9hcHAvYXBwLXJvdXRpbmcubW9kdWxlLnRzIiwiLi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCIuL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5odG1sIiwiLi9zcmMvYXBwL2FwcC5tb2R1bGUudHMiLCIuL3NyYy9hcHAvcHJvdmlkZXJzL2NoZWNrLXR1dG9yaWFsLmd1YXJkLnRzIiwiLi9zcmMvYXBwL3Byb3ZpZGVycy91c2VyLWRhdGEudHMiLCIuL3NyYy9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQudHMiLCIuL3NyYy9tYWluLnRzIiwiLi9ub2RlX21vZHVsZXMvQGlvbmljL2NvcmUvZGlzdC9lc20vIGxhenkgXlxcLlxcLy4qXFwuZW50cnlcXC5qcyQgaW5jbHVkZTogXFwuZW50cnlcXC5qcyQgZXhjbHVkZTogXFwuc3lzdGVtXFwuZW50cnlcXC5qcyQgbmFtZXNwYWNlIG9iamVjdCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IGNoZWNrVHV0b3JpYWxHdWFyZCB9IGZyb20gJy4vcHJvdmlkZXJzL2NoZWNrLXR1dG9yaWFsLmd1YXJkJztcclxuaW1wb3J0IHtcclxuICByZWRpcmVjdFVuYXV0aG9yaXplZFRvLFxyXG4gIHJlZGlyZWN0TG9nZ2VkSW5UbyxcclxuICBjYW5BY3RpdmF0ZVxyXG59IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvYXV0aC1ndWFyZCc7XHJcblxyXG5jb25zdCByZWRpcmVjdFVuYXV0aG9yaXplZFRvTG9naW4gPSAoKSA9PiByZWRpcmVjdFVuYXV0aG9yaXplZFRvKFsnJ10pO1xyXG5jb25zdCByZWRpcmVjdExvZ2dlZEluVG9TY2hlZHVsZSA9ICgpID0+IHJlZGlyZWN0TG9nZ2VkSW5UbyhbJ3NjaGVkdWxlJ10pO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAge1xyXG4gICAgcGF0aDogJycsXHJcbiAgICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi9wYWdlcy9sb2dpbi9sb2dpbi5tb2R1bGUnKS50aGVuKG0gPT4gbS5Mb2dpbk1vZHVsZSksXHJcbiAgICBwYXRoTWF0Y2g6ICdmdWxsJyxcclxuICAgIC4uLmNhbkFjdGl2YXRlKHJlZGlyZWN0TG9nZ2VkSW5Ub1NjaGVkdWxlKVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ3NjaGVkdWxlJyxcclxuICAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuL3BhZ2VzL3NjaGVkdWxlL3NjaGVkdWxlLm1vZHVsZScpLnRoZW4obSA9PiBtLlNjaGVkdWxlTW9kdWxlKSxcclxuICAgIC4uLmNhbkFjdGl2YXRlKHJlZGlyZWN0VW5hdXRob3JpemVkVG9Mb2dpbilcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICdhY2NvdW50JyxcclxuICAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuL3BhZ2VzL2FjY291bnQvYWNjb3VudC5tb2R1bGUnKS50aGVuKG0gPT4gbS5BY2NvdW50TW9kdWxlKVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ3N1cHBvcnQnLFxyXG4gICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4vcGFnZXMvc3VwcG9ydC9zdXBwb3J0Lm1vZHVsZScpLnRoZW4obSA9PiBtLlN1cHBvcnRNb2R1bGUpXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnbG9naW4nLFxyXG4gICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4vcGFnZXMvbG9naW4vbG9naW4ubW9kdWxlJykudGhlbihtID0+IG0uTG9naW5Nb2R1bGUpLFxyXG4gICAgLi4uY2FuQWN0aXZhdGUocmVkaXJlY3RMb2dnZWRJblRvU2NoZWR1bGUpXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnc2lnbnVwJyxcclxuICAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuL3BhZ2VzL3NpZ251cC9zaWdudXAubW9kdWxlJykudGhlbihtID0+IG0uU2lnblVwTW9kdWxlKVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ2FwcCcsXHJcbiAgICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi9wYWdlcy90YWJzLXBhZ2UvdGFicy1wYWdlLm1vZHVsZScpLnRoZW4obSA9PiBtLlRhYnNNb2R1bGUpXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAndHV0b3JpYWwnLFxyXG4gICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4vcGFnZXMvdHV0b3JpYWwvdHV0b3JpYWwubW9kdWxlJykudGhlbihtID0+IG0uVHV0b3JpYWxNb2R1bGUpLFxyXG4gICAgY2FuTWF0Y2g6IFtjaGVja1R1dG9yaWFsR3VhcmRdXHJcbiAgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTd1VwZGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3NlcnZpY2Utd29ya2VyJztcclxuXHJcbmltcG9ydCB7IE1lbnVDb250cm9sbGVyLCBQbGF0Zm9ybSwgVG9hc3RDb250cm9sbGVyIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xyXG5cclxuaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAnQGNhcGFjaXRvci9zdGF0dXMtYmFyJztcclxuaW1wb3J0IHsgU3BsYXNoU2NyZWVuIH0gZnJvbSAnQGNhcGFjaXRvci9zcGxhc2gtc2NyZWVuJztcclxuXHJcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAaW9uaWMvc3RvcmFnZS1hbmd1bGFyJztcclxuXHJcbmltcG9ydCB7IFVzZXJEYXRhIH0gZnJvbSAnLi9wcm92aWRlcnMvdXNlci1kYXRhJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1yb290JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hcHAuY29tcG9uZW50LnNjc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGFwcFBhZ2VzID0gW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ1NjaGVkdWxlJyxcclxuICAgICAgdXJsOiAnL2FwcC90YWJzL3NjaGVkdWxlJyxcclxuICAgICAgaWNvbjogJ2NhbGVuZGFyJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdTcGVha2VycycsXHJcbiAgICAgIHVybDogJy9hcHAvdGFicy9zcGVha2VycycsXHJcbiAgICAgIGljb246ICdwZW9wbGUnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ1NjYW4nLFxyXG4gICAgICB1cmw6ICcvYXBwL3RhYnMvc2Nhbm5lcicsXHJcbiAgICAgIGljb246ICdzY2FuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdNYXAnLFxyXG4gICAgICB1cmw6ICcvYXBwL3RhYnMvbWFwJyxcclxuICAgICAgaWNvbjogJ21hcCdcclxuICAgIH0sICAgIFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ0Fib3V0JyxcclxuICAgICAgdXJsOiAnL2FwcC90YWJzL2Fib3V0JyxcclxuICAgICAgaWNvbjogJ2luZm9ybWF0aW9uLWNpcmNsZSdcclxuICAgIH1cclxuICBdO1xyXG4gIGxvZ2dlZEluID0gZmFsc2U7XHJcbiAgZGFyayA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbWVudTogTWVudUNvbnRyb2xsZXIsXHJcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2UsXHJcbiAgICBwcml2YXRlIHVzZXJEYXRhOiBVc2VyRGF0YSxcclxuICAgIHByaXZhdGUgc3dVcGRhdGU6IFN3VXBkYXRlLFxyXG4gICAgcHJpdmF0ZSB0b2FzdEN0cmw6IFRvYXN0Q29udHJvbGxlcixcclxuICApIHtcclxuICAgIHRoaXMuaW5pdGlhbGl6ZUFwcCgpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgbmdPbkluaXQoKSB7XHJcbiAgICBhd2FpdCB0aGlzLnN0b3JhZ2UuY3JlYXRlKCk7XHJcbiAgICB0aGlzLmNoZWNrTG9naW5TdGF0dXMoKTtcclxuICAgIHRoaXMubGlzdGVuRm9yTG9naW5FdmVudHMoKTtcclxuXHJcbiAgICB0aGlzLnN3VXBkYXRlLmF2YWlsYWJsZS5zdWJzY3JpYmUoYXN5bmMgcmVzID0+IHtcclxuICAgICAgY29uc3QgdG9hc3QgPSBhd2FpdCB0aGlzLnRvYXN0Q3RybC5jcmVhdGUoe1xyXG4gICAgICAgIG1lc3NhZ2U6ICdVcGRhdGUgYXZhaWxhYmxlIScsXHJcbiAgICAgICAgcG9zaXRpb246ICdib3R0b20nLFxyXG4gICAgICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcm9sZTogJ2NhbmNlbCcsXHJcbiAgICAgICAgICAgIHRleHQ6ICdSZWxvYWQnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGF3YWl0IHRvYXN0LnByZXNlbnQoKTtcclxuXHJcbiAgICAgIHRvYXN0XHJcbiAgICAgICAgLm9uRGlkRGlzbWlzcygpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5zd1VwZGF0ZS5hY3RpdmF0ZVVwZGF0ZSgpKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpemVBcHAoKSB7XHJcbiAgICB0aGlzLnBsYXRmb3JtLnJlYWR5KCkudGhlbigoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzKCdoeWJyaWQnKSkge1xyXG4gICAgICAgIFN0YXR1c0Jhci5oaWRlKCk7XHJcbiAgICAgICAgU3BsYXNoU2NyZWVuLmhpZGUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjaGVja0xvZ2luU3RhdHVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudXNlckRhdGEuaXNMb2dnZWRJbigpLnRoZW4obG9nZ2VkSW4gPT4ge1xyXG4gICAgICByZXR1cm4gdGhpcy51cGRhdGVMb2dnZWRJblN0YXR1cyhsb2dnZWRJbik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUxvZ2dlZEluU3RhdHVzKGxvZ2dlZEluOiBib29sZWFuKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5sb2dnZWRJbiA9IGxvZ2dlZEluO1xyXG4gICAgfSwgMzAwKTtcclxuICB9XHJcblxyXG4gIGxpc3RlbkZvckxvZ2luRXZlbnRzKCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3VzZXI6bG9naW4nLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMudXBkYXRlTG9nZ2VkSW5TdGF0dXModHJ1ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndXNlcjpzaWdudXAnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMudXBkYXRlTG9nZ2VkSW5TdGF0dXModHJ1ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndXNlcjpsb2dvdXQnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMudXBkYXRlTG9nZ2VkSW5TdGF0dXMoZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsb2dvdXQoKSB7XHJcbiAgICB0aGlzLnVzZXJEYXRhLmxvZ291dCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL2FwcC90YWJzL3NjaGVkdWxlJyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9wZW5UdXRvcmlhbCgpIHtcclxuICAgIHRoaXMubWVudS5lbmFibGUoZmFsc2UpO1xyXG4gICAgdGhpcy5zdG9yYWdlLnNldCgnaW9uX2RpZF90dXRvcmlhbCcsIGZhbHNlKTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy90dXRvcmlhbCcpO1xyXG4gIH1cclxufVxyXG4iLCI8aW9uLWFwcCBbY2xhc3MuZGFyay10aGVtZV09XCJkYXJrXCI+XHJcbiAgPGlvbi1zcGxpdC1wYW5lIGNvbnRlbnRJZD1cIm1haW4tY29udGVudFwiPlxyXG5cclxuICAgIDxpb24tbWVudSBjb250ZW50SWQ9XCJtYWluLWNvbnRlbnRcIj5cclxuICAgICAgPGlvbi1jb250ZW50PlxyXG4gICAgICAgIDxpb24tbGlzdCBsaW5lcz1cIm5vbmVcIj5cclxuICAgICAgICAgIDxpb24tbGlzdC1oZWFkZXI+XHJcbiAgICAgICAgICAgIENvbmZlcmVuY2VcclxuICAgICAgICAgIDwvaW9uLWxpc3QtaGVhZGVyPlxyXG4gICAgICAgICAgPGlvbi1tZW51LXRvZ2dsZSBhdXRvSGlkZT1cImZhbHNlXCIgKm5nRm9yPVwibGV0IHAgb2YgYXBwUGFnZXM7IGxldCBpID0gaW5kZXhcIj5cclxuICAgICAgICAgICAgPGlvbi1pdGVtIFtyb3V0ZXJMaW5rXT1cInAudXJsXCIgcm91dGVyTGlua0FjdGl2ZT1cInNlbGVjdGVkXCIgcm91dGVyRGlyZWN0aW9uPVwicm9vdFwiIGRldGFpbD1cImZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJzdGFydFwiIFtuYW1lXT1cInAuaWNvbiArICctb3V0bGluZSdcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICAgIDxpb24tbGFiZWw+XHJcbiAgICAgICAgICAgICAgICB7e3AudGl0bGV9fVxyXG4gICAgICAgICAgICAgIDwvaW9uLWxhYmVsPlxyXG4gICAgICAgICAgICA8L2lvbi1pdGVtPlxyXG5cclxuICAgICAgICAgIDwvaW9uLW1lbnUtdG9nZ2xlPlxyXG4gICAgICAgIDwvaW9uLWxpc3Q+XHJcblxyXG4gICAgICAgIDxpb24tbGlzdCAqbmdJZj1cImxvZ2dlZEluXCIgbGluZXM9XCJub25lXCI+XHJcbiAgICAgICAgICA8aW9uLWxpc3QtaGVhZGVyPlxyXG4gICAgICAgICAgICBBY2NvdW50XHJcbiAgICAgICAgICA8L2lvbi1saXN0LWhlYWRlcj5cclxuXHJcbiAgICAgICAgICA8aW9uLW1lbnUtdG9nZ2xlIGF1dG9IaWRlPVwiZmFsc2VcIj5cclxuICAgICAgICAgICAgPGlvbi1pdGVtIHJvdXRlckxpbms9XCIvYWNjb3VudFwiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIiByb3V0ZXJEaXJlY3Rpb249XCJyb290XCIgZGV0YWlsPVwiZmFsc2VcIj5cclxuICAgICAgICAgICAgICA8aW9uLWljb24gc2xvdD1cInN0YXJ0XCIgbmFtZT1cInBlcnNvblwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgICAgPGlvbi1sYWJlbD5cclxuICAgICAgICAgICAgICAgIEFjY291bnRcclxuICAgICAgICAgICAgICA8L2lvbi1sYWJlbD5cclxuICAgICAgICAgICAgPC9pb24taXRlbT5cclxuICAgICAgICAgIDwvaW9uLW1lbnUtdG9nZ2xlPlxyXG5cclxuICAgICAgICAgIDxpb24tbWVudS10b2dnbGUgYXV0b0hpZGU9XCJmYWxzZVwiPlxyXG4gICAgICAgICAgICA8aW9uLWl0ZW0gcm91dGVyTGluaz1cIi9zdXBwb3J0XCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiIHJvdXRlckRpcmVjdGlvbj1cInJvb3RcIiBkZXRhaWw9XCJmYWxzZVwiPlxyXG4gICAgICAgICAgICAgIDxpb24taWNvbiBzbG90PVwic3RhcnRcIiBuYW1lPVwiaGVscFwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgICAgPGlvbi1sYWJlbD5cclxuICAgICAgICAgICAgICAgIFN1cHBvcnRcclxuICAgICAgICAgICAgICA8L2lvbi1sYWJlbD5cclxuICAgICAgICAgICAgPC9pb24taXRlbT5cclxuICAgICAgICAgIDwvaW9uLW1lbnUtdG9nZ2xlPlxyXG5cclxuICAgICAgICAgIDxpb24tbWVudS10b2dnbGUgYXV0b0hpZGU9XCJmYWxzZVwiPlxyXG4gICAgICAgICAgICA8aW9uLWl0ZW0gYnV0dG9uIChjbGljayk9XCJsb2dvdXQoKVwiIGRldGFpbD1cImZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJsb2ctb3V0XCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICA8aW9uLWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgTG9nb3V0XHJcbiAgICAgICAgICAgICAgPC9pb24tbGFiZWw+XHJcbiAgICAgICAgICAgIDwvaW9uLWl0ZW0+XHJcbiAgICAgICAgICA8L2lvbi1tZW51LXRvZ2dsZT5cclxuXHJcbiAgICAgICAgPC9pb24tbGlzdD5cclxuXHJcbiAgICAgICAgPGlvbi1saXN0ICpuZ0lmPVwiIWxvZ2dlZEluXCIgbGluZXM9XCJub25lXCI+XHJcbiAgICAgICAgICA8aW9uLWxpc3QtaGVhZGVyPlxyXG4gICAgICAgICAgICBBY2NvdW50XHJcbiAgICAgICAgICA8L2lvbi1saXN0LWhlYWRlcj5cclxuXHJcbiAgICAgICAgICA8aW9uLW1lbnUtdG9nZ2xlIGF1dG9IaWRlPVwiZmFsc2VcIj5cclxuICAgICAgICAgICAgPGlvbi1pdGVtIHJvdXRlckxpbms9XCIvbG9naW5cIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCIgcm91dGVyRGlyZWN0aW9uPVwicm9vdFwiIGRldGFpbD1cImZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJsb2ctaW5cIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICAgIDxpb24tbGFiZWw+XHJcbiAgICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICAgIDwvaW9uLWxhYmVsPlxyXG4gICAgICAgICAgICA8L2lvbi1pdGVtPlxyXG4gICAgICAgICAgPC9pb24tbWVudS10b2dnbGU+XHJcblxyXG4gICAgICAgICAgPGlvbi1tZW51LXRvZ2dsZSBhdXRvSGlkZT1cImZhbHNlXCI+XHJcbiAgICAgICAgICAgIDxpb24taXRlbSByb3V0ZXJMaW5rPVwiL3N1cHBvcnRcIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCIgcm91dGVyRGlyZWN0aW9uPVwicm9vdFwiIGRldGFpbD1cImZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJoZWxwXCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICA8aW9uLWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgU3VwcG9ydFxyXG4gICAgICAgICAgICAgIDwvaW9uLWxhYmVsPlxyXG4gICAgICAgICAgICA8L2lvbi1pdGVtPlxyXG4gICAgICAgICAgPC9pb24tbWVudS10b2dnbGU+XHJcblxyXG4gICAgICAgICAgPGlvbi1tZW51LXRvZ2dsZSBhdXRvSGlkZT1cImZhbHNlXCI+XHJcbiAgICAgICAgICAgIDxpb24taXRlbSByb3V0ZXJMaW5rPVwiL3NpZ251cFwiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIiByb3V0ZXJEaXJlY3Rpb249XCJyb290XCIgZGV0YWlsPVwiZmFsc2VcIj5cclxuICAgICAgICAgICAgICA8aW9uLWljb24gc2xvdD1cInN0YXJ0XCIgbmFtZT1cInBlcnNvbi1hZGRcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICAgIDxpb24tbGFiZWw+XHJcbiAgICAgICAgICAgICAgICBTaWdudXBcclxuICAgICAgICAgICAgICA8L2lvbi1sYWJlbD5cclxuICAgICAgICAgICAgPC9pb24taXRlbT5cclxuICAgICAgICAgIDwvaW9uLW1lbnUtdG9nZ2xlPlxyXG5cclxuICAgICAgICAgIDxpb24taXRlbT5cclxuICAgICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJzdGFydFwiIG5hbWU9XCJtb29uLW91dGxpbmVcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICA8aW9uLXRvZ2dsZSBbKG5nTW9kZWwpXT1cImRhcmtcIj5cclxuICAgICAgICAgICAgICBEYXJrIE1vZGVcclxuICAgICAgICAgICAgPC9pb24tdG9nZ2xlPlxyXG4gICAgICAgICAgPC9pb24taXRlbT5cclxuICAgICAgICA8L2lvbi1saXN0PlxyXG5cclxuICAgICAgICA8aW9uLWxpc3QgbGluZXM9XCJub25lXCI+XHJcbiAgICAgICAgICA8aW9uLWxpc3QtaGVhZGVyPlxyXG4gICAgICAgICAgICBXZWxjb21lIFBhZ2VcclxuICAgICAgICAgIDwvaW9uLWxpc3QtaGVhZGVyPlxyXG4gICAgICAgICAgPGlvbi1tZW51LXRvZ2dsZSBhdXRvSGlkZT1cImZhbHNlXCI+XHJcbiAgICAgICAgICAgIDxpb24taXRlbSBidXR0b24gKGNsaWNrKT1cIm9wZW5UdXRvcmlhbCgpXCIgZGV0YWlsPVwiZmFsc2VcIj5cclxuICAgICAgICAgICAgICA8aW9uLWljb24gc2xvdD1cInN0YXJ0XCIgbmFtZT1cImhhbW1lclwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgICAgPGlvbi1sYWJlbD5XZWxjb21lPC9pb24tbGFiZWw+XHJcbiAgICAgICAgICAgIDwvaW9uLWl0ZW0+XHJcbiAgICAgICAgICA8L2lvbi1tZW51LXRvZ2dsZT5cclxuICAgICAgICA8L2lvbi1saXN0PlxyXG4gICAgICA8L2lvbi1jb250ZW50PlxyXG4gICAgPC9pb24tbWVudT5cclxuXHJcbiAgICA8aW9uLXJvdXRlci1vdXRsZXQgaWQ9XCJtYWluLWNvbnRlbnRcIj48L2lvbi1yb3V0ZXItb3V0bGV0PlxyXG5cclxuICA8L2lvbi1zcGxpdC1wYW5lPlxyXG5cclxuPC9pb24tYXBwPlxyXG4iLCJpbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IEluQXBwQnJvd3NlciB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9pbi1hcHAtYnJvd3Nlci9uZ3gnO1xyXG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcclxuaW1wb3J0IHsgSW9uaWNTdG9yYWdlTW9kdWxlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UtYW5ndWxhcic7XHJcblxyXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAtcm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZXJ2aWNlV29ya2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvc2VydmljZS13b3JrZXInO1xyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwLHByb3ZpZGVGaXJlYmFzZUFwcCB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvYXBwJztcclxuaW1wb3J0IHsgcHJvdmlkZUF1dGgsZ2V0QXV0aCB9IGZyb20gJ0Bhbmd1bGFyL2ZpcmUvYXV0aCc7XHJcbmltcG9ydCB7IHByb3ZpZGVGaXJlc3RvcmUsZ2V0RmlyZXN0b3JlIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9maXJlc3RvcmUnO1xyXG5pbXBvcnQgeyBwcm92aWRlU3RvcmFnZSxnZXRTdG9yYWdlIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9zdG9yYWdlJztcclxuaW1wb3J0IHsgQmFyY29kZVNjYW5uZXIgfSBmcm9tICdAY2FwYWNpdG9yLWNvbW11bml0eS9iYXJjb2RlLXNjYW5uZXInO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgQXBwUm91dGluZ01vZHVsZSxcclxuICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIElvbmljTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIElvbmljU3RvcmFnZU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBTZXJ2aWNlV29ya2VyTW9kdWxlLnJlZ2lzdGVyKCduZ3N3LXdvcmtlci5qcycsIHtcclxuICAgICAgZW5hYmxlZDogZW52aXJvbm1lbnQucHJvZHVjdGlvblxyXG4gICAgfSksXHJcbiAgICBwcm92aWRlRmlyZWJhc2VBcHAoKCkgPT4gaW5pdGlhbGl6ZUFwcChlbnZpcm9ubWVudC5maXJlYmFzZSkpLFxyXG4gICAgcHJvdmlkZUF1dGgoKCkgPT4gZ2V0QXV0aCgpKSxcclxuICAgIHByb3ZpZGVGaXJlc3RvcmUoKCkgPT4gZ2V0RmlyZXN0b3JlKCkpLFxyXG4gICAgcHJvdmlkZVN0b3JhZ2UoKCkgPT4gZ2V0U3RvcmFnZSgpKVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbQXBwQ29tcG9uZW50XSxcclxuICBwcm92aWRlcnM6IFtJbkFwcEJyb3dzZXJdLFxyXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxyXG4iLCJpbXBvcnQgeyBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlLWFuZ3VsYXInO1xyXG5pbXBvcnQgeyBmcm9tLCBtYXAsIHRhcCB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoZWNrVHV0b3JpYWxHdWFyZCA9ICgpID0+IHtcclxuICBjb25zdCBzdG9yYWdlID0gaW5qZWN0KFN0b3JhZ2UpO1xyXG4gIGNvbnN0IHJvdXRlciA9IGluamVjdChSb3V0ZXIpO1xyXG5cclxuICByZXR1cm4gZnJvbShzdG9yYWdlLmdldCgnaW9uX2RpZF90dXRvcmlhbCcpKVxyXG4gICAgLnBpcGUoXHJcbiAgICAgIHRhcChkaWRUdXRvcmlhbCA9PiB7XHJcbiAgICAgICAgaWYgKGRpZFR1dG9yaWFsID09PSB0cnVlKSB7XHJcbiAgICAgICAgICByb3V0ZXIubmF2aWdhdGUoWycvYXBwJywgJ3RhYnMnLCAnc2NoZWR1bGUnXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KSxcclxuICAgICAgbWFwKGRpZFR1dG9yaWFsID0+ICFkaWRUdXRvcmlhbClcclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UtYW5ndWxhcic7XHJcblxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVXNlckRhdGEge1xyXG4gIGZhdm9yaXRlczogc3RyaW5nW10gPSBbXTtcclxuICBIQVNfTE9HR0VEX0lOID0gJ2hhc0xvZ2dlZEluJztcclxuICBIQVNfU0VFTl9UVVRPUklBTCA9ICdoYXNTZWVuVHV0b3JpYWwnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBzdG9yYWdlOiBTdG9yYWdlXHJcbiAgKSB7IH1cclxuXHJcbiAgaGFzRmF2b3JpdGUoc2Vzc2lvbk5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICh0aGlzLmZhdm9yaXRlcy5pbmRleE9mKHNlc3Npb25OYW1lKSA+IC0xKTtcclxuICB9XHJcblxyXG4gIGFkZEZhdm9yaXRlKHNlc3Npb25OYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuZmF2b3JpdGVzLnB1c2goc2Vzc2lvbk5hbWUpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlRmF2b3JpdGUoc2Vzc2lvbk5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmZhdm9yaXRlcy5pbmRleE9mKHNlc3Npb25OYW1lKTtcclxuICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgIHRoaXMuZmF2b3JpdGVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsb2dpbih1c2VybmFtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLnN0b3JhZ2Uuc2V0KHRoaXMuSEFTX0xPR0dFRF9JTiwgdHJ1ZSkudGhlbigoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0VXNlcm5hbWUodXNlcm5hbWUpO1xyXG4gICAgICByZXR1cm4gd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCd1c2VyOmxvZ2luJykpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzaWdudXAodXNlcm5hbWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlLnNldCh0aGlzLkhBU19MT0dHRURfSU4sIHRydWUpLnRoZW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFVzZXJuYW1lKHVzZXJuYW1lKTtcclxuICAgICAgcmV0dXJuIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgndXNlcjpzaWdudXAnKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvZ291dCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5yZW1vdmUodGhpcy5IQVNfTE9HR0VEX0lOKS50aGVuKCgpID0+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5yZW1vdmUoJ3VzZXJuYW1lJyk7XHJcbiAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCd1c2VyOmxvZ291dCcpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0VXNlcm5hbWUodXNlcm5hbWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlLnNldCgndXNlcm5hbWUnLCB1c2VybmFtZSk7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VybmFtZSgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5nZXQoJ3VzZXJuYW1lJykudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpc0xvZ2dlZEluKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5nZXQodGhpcy5IQVNfTE9HR0VEX0lOKS50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgICByZXR1cm4gdmFsdWUgPT09IHRydWU7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNoZWNrSGFzU2VlblR1dG9yaWFsKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlLmdldCh0aGlzLkhBU19TRUVOX1RVVE9SSUFMKS50aGVuKCh2YWx1ZSkgPT4ge1xyXG4gICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIGZpbGUgY29udGVudHMgZm9yIHRoZSBjdXJyZW50IGVudmlyb25tZW50IHdpbGwgb3ZlcndyaXRlIHRoZXNlIGR1cmluZyBidWlsZC5cclxuLy8gVGhlIGJ1aWxkIHN5c3RlbSBkZWZhdWx0cyB0byB0aGUgZGV2IGVudmlyb25tZW50IHdoaWNoIHVzZXMgYGVudmlyb25tZW50LnRzYCwgYnV0IGlmIHlvdSBkb1xyXG4vLyBgbmcgYnVpbGQgLS1lbnY9cHJvZGAgdGhlbiBgZW52aXJvbm1lbnQucHJvZC50c2Agd2lsbCBiZSB1c2VkIGluc3RlYWQuXHJcbi8vIFRoZSBsaXN0IG9mIHdoaWNoIGVudiBtYXBzIHRvIHdoaWNoIGZpbGUgY2FuIGJlIGZvdW5kIGluIGAuYW5ndWxhci1jbGkuanNvbmAuXHJcbmV4cG9ydCBjb25zdCBlbnZpcm9ubWVudCA9IHtcclxuICBmaXJlYmFzZToge1xyXG4gICAgcHJvamVjdElkOiAnbWluaW5nLWV4cG8tYmM4MDQnLFxyXG4gICAgYXBwSWQ6ICcxOjYyNzE2NDI4MTgyOndlYjoyNWM0OWE5MWNmMGI2YmU4YWE2N2I3JyxcclxuICAgIHN0b3JhZ2VCdWNrZXQ6ICdtaW5pbmctZXhwby1iYzgwNC5hcHBzcG90LmNvbScsXHJcbiAgICBsb2NhdGlvbklkOiAndXMtY2VudHJhbCcsXHJcbiAgICBhcGlLZXk6ICdBSXphU3lBNGllT08tSEVsN0d5aGREUjFhajhfN3lSakk1SVJpbk0nLFxyXG4gICAgYXV0aERvbWFpbjogJ21pbmluZy1leHBvLWJjODA0LmZpcmViYXNlYXBwLmNvbScsXHJcbiAgICBtZXNzYWdpbmdTZW5kZXJJZDogJzYyNzE2NDI4MTgyJyxcclxuICAgIG1lYXN1cmVtZW50SWQ6ICdHLUo2UTc3RzNNQzQnLFxyXG4gIH0sXHJcbiAgcHJvZHVjdGlvbjogZmFsc2VcclxufTtcclxuXHJcbi8qXHJcbiAqIEluIGRldmVsb3BtZW50IG1vZGUsIHRvIGlnbm9yZSB6b25lIHJlbGF0ZWQgZXJyb3Igc3RhY2sgZnJhbWVzIHN1Y2ggYXNcclxuICogYHpvbmUucnVuYCwgYHpvbmVEZWxlZ2F0ZS5pbnZva2VUYXNrYCBmb3IgZWFzaWVyIGRlYnVnZ2luZywgeW91IGNhblxyXG4gKiBpbXBvcnQgdGhlIGZvbGxvd2luZyBmaWxlLCBidXQgcGxlYXNlIGNvbW1lbnQgaXQgb3V0IGluIHByb2R1Y3Rpb24gbW9kZVxyXG4gKiBiZWNhdXNlIGl0IHdpbGwgaGF2ZSBwZXJmb3JtYW5jZSBpbXBhY3Qgd2hlbiB0aHJvdyBlcnJvclxyXG4gKi9cclxuLy8gaW1wb3J0ICd6b25lLmpzL3BsdWdpbnMvem9uZS1lcnJvcic7ICAvLyBJbmNsdWRlZCB3aXRoIEFuZ3VsYXIgQ0xJLlxyXG4iLCJpbXBvcnQgJ0Bhbmd1bGFyL2NvbXBpbGVyJztcclxuXHJcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xyXG5cclxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XHJcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xyXG5cclxuaWYgKGVudmlyb25tZW50LnByb2R1Y3Rpb24pIHtcclxuICBlbmFibGVQcm9kTW9kZSgpO1xyXG59XHJcblxyXG5wbGF0Zm9ybUJyb3dzZXJEeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSlcclxuICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vaW9uLWFjY29yZGlvbl8yLmVudHJ5LmpzXCI6IFtcblx0XHQ4NzUxMixcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWFjY29yZGlvbl8yX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1hY3Rpb24tc2hlZXQuZW50cnkuanNcIjogW1xuXHRcdDU2NDcwLFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tYWN0aW9uLXNoZWV0X2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1hbGVydC5lbnRyeS5qc1wiOiBbXG5cdFx0ODU2OTAsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1hbGVydF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tYXBwXzguZW50cnkuanNcIjogW1xuXHRcdDY4NTA4LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tYXBwXzhfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWF2YXRhcl8zLmVudHJ5LmpzXCI6IFtcblx0XHQzNDM4LFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWF2YXRhcl8zX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1iYWNrLWJ1dHRvbi5lbnRyeS5qc1wiOiBbXG5cdFx0MTkxMTksXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1iYWNrLWJ1dHRvbl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tYmFja2Ryb3AuZW50cnkuanNcIjogW1xuXHRcdDUyMzE5LFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWJhY2tkcm9wX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1icmVhZGNydW1iXzIuZW50cnkuanNcIjogW1xuXHRcdDQ0ODQ4LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tYnJlYWRjcnVtYl8yX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1idXR0b25fMi5lbnRyeS5qc1wiOiBbXG5cdFx0OTQ3NTIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tYnV0dG9uXzJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWNhcmRfNS5lbnRyeS5qc1wiOiBbXG5cdFx0OTg3MCxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1jYXJkXzVfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWNoZWNrYm94LmVudHJ5LmpzXCI6IFtcblx0XHQ4NTg5Mixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1jaGVja2JveF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tY2hpcC5lbnRyeS5qc1wiOiBbXG5cdFx0OTExOCxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1jaGlwX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1jb2xfMy5lbnRyeS5qc1wiOiBbXG5cdFx0OTUzOCxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1jb2xfM19lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tZGF0ZXRpbWUtYnV0dG9uLmVudHJ5LmpzXCI6IFtcblx0XHQyNDk2OSxcblx0XHRcImRlZmF1bHQtbm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21fZGF0YS0xYWY4NGYzMV9qcy1ub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV90aC1iNTVmNGNcIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1kYXRldGltZS1idXR0b25fZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWRhdGV0aW1lXzMuZW50cnkuanNcIjogW1xuXHRcdDIxODM1LFxuXHRcdFwiZGVmYXVsdC1ub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9kYXRhLTFhZjg0ZjMxX2pzLW5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX3RoLWI1NWY0Y1wiLFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tZGF0ZXRpbWVfM19lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tZmFiXzMuZW50cnkuanNcIjogW1xuXHRcdDc2NzE5LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tZmFiXzNfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWltZy5lbnRyeS5qc1wiOiBbXG5cdFx0MzEyMSxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1pbWdfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWluZmluaXRlLXNjcm9sbF8yLmVudHJ5LmpzXCI6IFtcblx0XHQzMDI1LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24taW5maW5pdGUtc2Nyb2xsXzJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWlucHV0LmVudHJ5LmpzXCI6IFtcblx0XHQzMzkxNCxcblx0XHRcImRlZmF1bHQtbm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21fZm9ybS1jb250cm9sbGVyLTZjZDdlYmQxX2pzLW5vZGVfbW9kdWxlc19pb25pY19jb3JlXy02ZWIzMTlcIixcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWlucHV0X2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1pdGVtLW9wdGlvbl8zLmVudHJ5LmpzXCI6IFtcblx0XHQxMzc2MSxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWl0ZW0tb3B0aW9uXzNfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWl0ZW1fOC5lbnRyeS5qc1wiOiBbXG5cdFx0ODYxMzgsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1pdGVtXzhfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLWxvYWRpbmcuZW50cnkuanNcIjogW1xuXHRcdDEyMDYzLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLWxvYWRpbmdfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLW1lbnVfMy5lbnRyeS5qc1wiOiBbXG5cdFx0ODQ5NTAsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1tZW51XzNfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLW1vZGFsLmVudHJ5LmpzXCI6IFtcblx0XHQ2OTcwNyxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLW1vZGFsX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1uYXZfMi5lbnRyeS5qc1wiOiBbXG5cdFx0NjAyMzQsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tbmF2XzJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXBpY2tlci1jb2x1bW4taW50ZXJuYWwuZW50cnkuanNcIjogW1xuXHRcdDM3MjA5LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tcGlja2VyLWNvbHVtbi1pbnRlcm5hbF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tcGlja2VyLWludGVybmFsLmVudHJ5LmpzXCI6IFtcblx0XHQ5MzA2OCxcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1waWNrZXItaW50ZXJuYWxfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXBvcG92ZXIuZW50cnkuanNcIjogW1xuXHRcdDk5MjE1LFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXBvcG92ZXJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXByb2dyZXNzLWJhci5lbnRyeS5qc1wiOiBbXG5cdFx0MzU2MzUsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tcHJvZ3Jlc3MtYmFyX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1yYWRpb18yLmVudHJ5LmpzXCI6IFtcblx0XHQxNDk3LFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXJhZGlvXzJfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXJhbmdlLmVudHJ5LmpzXCI6IFtcblx0XHQxNTkyMixcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXJhbmdlX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi1yZWZyZXNoZXJfMi5lbnRyeS5qc1wiOiBbXG5cdFx0MTYxOTksXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi1yZWZyZXNoZXJfMl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tcmVvcmRlcl8yLmVudHJ5LmpzXCI6IFtcblx0XHQ1MzU0OSxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXJlb3JkZXJfMl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tcmlwcGxlLWVmZmVjdC5lbnRyeS5qc1wiOiBbXG5cdFx0NDU5NjYsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tcmlwcGxlLWVmZmVjdF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tcm91dGVfNC5lbnRyeS5qc1wiOiBbXG5cdFx0OTMxODcsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tcm91dGVfNF9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tc2VhcmNoYmFyLmVudHJ5LmpzXCI6IFtcblx0XHQ1OTA5Mixcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXNlYXJjaGJhcl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tc2VnbWVudF8yLmVudHJ5LmpzXCI6IFtcblx0XHQxNzYwMCxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXNlZ21lbnRfMl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tc2VsZWN0XzMuZW50cnkuanNcIjogW1xuXHRcdDQ5ODcwLFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tc2VsZWN0XzNfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXNwaW5uZXIuZW50cnkuanNcIjogW1xuXHRcdDgxNjU3LFxuXHRcdFwiY29tbW9uXCIsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tc3Bpbm5lcl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tc3BsaXQtcGFuZS5lbnRyeS5qc1wiOiBbXG5cdFx0ODgzOTQsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tc3BsaXQtcGFuZV9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tdGFiLWJhcl8yLmVudHJ5LmpzXCI6IFtcblx0XHQ0NDU3NCxcblx0XHRcImNvbW1vblwiLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXRhYi1iYXJfMl9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tdGFiXzIuZW50cnkuanNcIjogW1xuXHRcdDMzNTE0LFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXRhYl8yX2VudHJ5X2pzXCJcblx0XSxcblx0XCIuL2lvbi10ZXh0LmVudHJ5LmpzXCI6IFtcblx0XHQ3NTAyLFxuXHRcdFwibm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21faW9uLXRleHRfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXRleHRhcmVhLmVudHJ5LmpzXCI6IFtcblx0XHQ5NzgzMixcblx0XHRcImRlZmF1bHQtbm9kZV9tb2R1bGVzX2lvbmljX2NvcmVfZGlzdF9lc21fZm9ybS1jb250cm9sbGVyLTZjZDdlYmQxX2pzLW5vZGVfbW9kdWxlc19pb25pY19jb3JlXy02ZWIzMTlcIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi10ZXh0YXJlYV9lbnRyeV9qc1wiXG5cdF0sXG5cdFwiLi9pb24tdG9hc3QuZW50cnkuanNcIjogW1xuXHRcdDk4MDUsXG5cdFx0XCJub2RlX21vZHVsZXNfaW9uaWNfY29yZV9kaXN0X2VzbV9pb24tdG9hc3RfZW50cnlfanNcIlxuXHRdLFxuXHRcIi4vaW9uLXRvZ2dsZS5lbnRyeS5qc1wiOiBbXG5cdFx0NTczOTMsXG5cdFx0XCJjb21tb25cIixcblx0XHRcIm5vZGVfbW9kdWxlc19pb25pY19jb3JlX2Rpc3RfZXNtX2lvbi10b2dnbGVfZW50cnlfanNcIlxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH0pO1xuXHR9XG5cblx0dmFyIGlkcyA9IG1hcFtyZXFdLCBpZCA9IGlkc1swXTtcblx0cmV0dXJuIFByb21pc2UuYWxsKGlkcy5zbGljZSgxKS5tYXAoX193ZWJwYWNrX3JlcXVpcmVfXy5lKSkudGhlbigoKSA9PiB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xuXHR9KTtcbn1cbndlYnBhY2tBc3luY0NvbnRleHQua2V5cyA9ICgpID0+IChPYmplY3Qua2V5cyhtYXApKTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSA1MDg2Mztcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0FzeW5jQ29udGV4dDsiXSwibmFtZXMiOlsiUm91dGVyTW9kdWxlIiwiY2hlY2tUdXRvcmlhbEd1YXJkIiwicmVkaXJlY3RVbmF1dGhvcml6ZWRUbyIsInJlZGlyZWN0TG9nZ2VkSW5UbyIsImNhbkFjdGl2YXRlIiwicmVkaXJlY3RVbmF1dGhvcml6ZWRUb0xvZ2luIiwicmVkaXJlY3RMb2dnZWRJblRvU2NoZWR1bGUiLCJyb3V0ZXMiLCJwYXRoIiwibG9hZENoaWxkcmVuIiwidGhlbiIsIm0iLCJMb2dpbk1vZHVsZSIsInBhdGhNYXRjaCIsIlNjaGVkdWxlTW9kdWxlIiwiQWNjb3VudE1vZHVsZSIsIlN1cHBvcnRNb2R1bGUiLCJTaWduVXBNb2R1bGUiLCJUYWJzTW9kdWxlIiwiVHV0b3JpYWxNb2R1bGUiLCJjYW5NYXRjaCIsIkFwcFJvdXRpbmdNb2R1bGUiLCJmb3JSb290IiwiaW1wb3J0cyIsImkxIiwiZXhwb3J0cyIsIlJvdXRlciIsIlN3VXBkYXRlIiwiTWVudUNvbnRyb2xsZXIiLCJQbGF0Zm9ybSIsIlRvYXN0Q29udHJvbGxlciIsIlN0YXR1c0JhciIsIlNwbGFzaFNjcmVlbiIsIlN0b3JhZ2UiLCJVc2VyRGF0YSIsImkwIiwiybXJtWVsZW1lbnRTdGFydCIsIsm1ybVlbGVtZW50IiwiybXJtXRleHQiLCLJtcm1ZWxlbWVudEVuZCIsIsm1ybVhZHZhbmNlIiwiybXJtXByb3BlcnR5IiwicF9yMyIsInVybCIsImljb24iLCLJtcm1dGV4dEludGVycG9sYXRlMSIsInRpdGxlIiwiybXJtWxpc3RlbmVyIiwiQXBwQ29tcG9uZW50X2lvbl9saXN0XzhfVGVtcGxhdGVfaW9uX2l0ZW1fY2xpY2tfMTRfbGlzdGVuZXIiLCLJtcm1cmVzdG9yZVZpZXciLCJfcjYiLCJjdHhfcjUiLCLJtcm1bmV4dENvbnRleHQiLCLJtcm1cmVzZXRWaWV3IiwibG9nb3V0IiwiQXBwQ29tcG9uZW50X2lvbl9saXN0XzlfVGVtcGxhdGVfaW9uX3RvZ2dsZV9uZ01vZGVsQ2hhbmdlXzIwX2xpc3RlbmVyIiwiJGV2ZW50IiwiX3I4IiwiY3R4X3I3IiwiZGFyayIsImN0eF9yMiIsIkFwcENvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwibWVudSIsInBsYXRmb3JtIiwicm91dGVyIiwic3RvcmFnZSIsInVzZXJEYXRhIiwic3dVcGRhdGUiLCJ0b2FzdEN0cmwiLCJhcHBQYWdlcyIsImxvZ2dlZEluIiwiaW5pdGlhbGl6ZUFwcCIsIm5nT25Jbml0IiwiX3RoaXMiLCJfYXN5bmNUb0dlbmVyYXRvciIsImNyZWF0ZSIsImNoZWNrTG9naW5TdGF0dXMiLCJsaXN0ZW5Gb3JMb2dpbkV2ZW50cyIsImF2YWlsYWJsZSIsInN1YnNjcmliZSIsIl9yZWYiLCJyZXMiLCJ0b2FzdCIsIm1lc3NhZ2UiLCJwb3NpdGlvbiIsImJ1dHRvbnMiLCJyb2xlIiwidGV4dCIsInByZXNlbnQiLCJvbkRpZERpc21pc3MiLCJhY3RpdmF0ZVVwZGF0ZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiX3giLCJhcHBseSIsImFyZ3VtZW50cyIsInJlYWR5IiwiaXMiLCJoaWRlIiwiaXNMb2dnZWRJbiIsInVwZGF0ZUxvZ2dlZEluU3RhdHVzIiwic2V0VGltZW91dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJuYXZpZ2F0ZUJ5VXJsIiwib3BlblR1dG9yaWFsIiwiZW5hYmxlIiwic2V0IiwiybXJtWRpcmVjdGl2ZUluamVjdCIsImkyIiwiaTMiLCJpNCIsImk1Iiwic2VsZWN0b3JzIiwiZGVjbHMiLCJ2YXJzIiwiY29uc3RzIiwidGVtcGxhdGUiLCJBcHBDb21wb25lbnRfVGVtcGxhdGUiLCJyZiIsImN0eCIsIsm1ybV0ZW1wbGF0ZSIsIkFwcENvbXBvbmVudF9pb25fbWVudV90b2dnbGVfN19UZW1wbGF0ZSIsIkFwcENvbXBvbmVudF9pb25fbGlzdF84X1RlbXBsYXRlIiwiQXBwQ29tcG9uZW50X2lvbl9saXN0XzlfVGVtcGxhdGUiLCJBcHBDb21wb25lbnRfVGVtcGxhdGVfaW9uX2l0ZW1fY2xpY2tfMTRfbGlzdGVuZXIiLCLJtcm1Y2xhc3NQcm9wIiwiSHR0cENsaWVudE1vZHVsZSIsIkJyb3dzZXJNb2R1bGUiLCJJbkFwcEJyb3dzZXIiLCJJb25pY01vZHVsZSIsIklvbmljU3RvcmFnZU1vZHVsZSIsIlNlcnZpY2VXb3JrZXJNb2R1bGUiLCJlbnZpcm9ubWVudCIsIkZvcm1zTW9kdWxlIiwicHJvdmlkZUZpcmViYXNlQXBwIiwicHJvdmlkZUF1dGgiLCJnZXRBdXRoIiwicHJvdmlkZUZpcmVzdG9yZSIsImdldEZpcmVzdG9yZSIsInByb3ZpZGVTdG9yYWdlIiwiZ2V0U3RvcmFnZSIsIkFwcE1vZHVsZSIsImJvb3RzdHJhcCIsInJlZ2lzdGVyIiwiZW5hYmxlZCIsInByb2R1Y3Rpb24iLCJmaXJlYmFzZSIsImRlY2xhcmF0aW9ucyIsIkZpcmViYXNlQXBwTW9kdWxlIiwiQXV0aE1vZHVsZSIsImk2IiwiRmlyZXN0b3JlTW9kdWxlIiwiaTciLCJTdG9yYWdlTW9kdWxlIiwiaW5qZWN0IiwiZnJvbSIsIm1hcCIsInRhcCIsImdldCIsInBpcGUiLCJkaWRUdXRvcmlhbCIsIm5hdmlnYXRlIiwiZmF2b3JpdGVzIiwiSEFTX0xPR0dFRF9JTiIsIkhBU19TRUVOX1RVVE9SSUFMIiwiaGFzRmF2b3JpdGUiLCJzZXNzaW9uTmFtZSIsImluZGV4T2YiLCJhZGRGYXZvcml0ZSIsInB1c2giLCJyZW1vdmVGYXZvcml0ZSIsImluZGV4Iiwic3BsaWNlIiwibG9naW4iLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50Iiwic2lnbnVwIiwicmVtb3ZlIiwiZ2V0VXNlcm5hbWUiLCJ2YWx1ZSIsImNoZWNrSGFzU2VlblR1dG9yaWFsIiwiybXJtWluamVjdCIsImZhY3RvcnkiLCLJtWZhYyIsInByb3ZpZGVkSW4iLCJwcm9qZWN0SWQiLCJhcHBJZCIsInN0b3JhZ2VCdWNrZXQiLCJsb2NhdGlvbklkIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsIm1lc3NhZ2luZ1NlbmRlcklkIiwibWVhc3VyZW1lbnRJZCIsImVuYWJsZVByb2RNb2RlIiwiX19OZ0NsaV9ib290c3RyYXBfMSIsInBsYXRmb3JtQnJvd3NlciIsImJvb3RzdHJhcE1vZHVsZSIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290Ijoid2VicGFjazovLy8iLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbOF19