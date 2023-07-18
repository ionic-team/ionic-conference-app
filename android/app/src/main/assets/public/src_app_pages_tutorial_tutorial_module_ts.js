"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tutorial_tutorial_module_ts"],{

/***/ 35067:
/*!***********************************************************!*\
  !*** ./src/app/pages/tutorial/tutorial-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TutorialPageRoutingModule: () => (/* binding */ TutorialPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _tutorial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutorial */ 81887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '',
  component: _tutorial__WEBPACK_IMPORTED_MODULE_0__.TutorialPage
}];
class TutorialPageRoutingModule {}
TutorialPageRoutingModule.ɵfac = function TutorialPageRoutingModule_Factory(t) {
  return new (t || TutorialPageRoutingModule)();
};
TutorialPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: TutorialPageRoutingModule
});
TutorialPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TutorialPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 78309:
/*!***************************************************!*\
  !*** ./src/app/pages/tutorial/tutorial.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TutorialModule: () => (/* binding */ TutorialModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 64210);
/* harmony import */ var _tutorial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutorial */ 81887);
/* harmony import */ var _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tutorial-routing.module */ 35067);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);





class TutorialModule {}
TutorialModule.ɵfac = function TutorialModule_Factory(t) {
  return new (t || TutorialModule)();
};
TutorialModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: TutorialModule
});
TutorialModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_1__.TutorialPageRoutingModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TutorialModule, {
    declarations: [_tutorial__WEBPACK_IMPORTED_MODULE_0__.TutorialPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_1__.TutorialPageRoutingModule]
  });
})();

/***/ }),

/***/ 81887:
/*!********************************************!*\
  !*** ./src/app/pages/tutorial/tutorial.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TutorialPage: () => (/* binding */ TutorialPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 64210);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage-angular */ 25029);







class TutorialPage {
  constructor(menu, router, storage) {
    this.menu = menu;
    this.router = router;
    this.storage = storage;
    this.showSkip = true;
  }
  startApp() {
    this.router.navigateByUrl('/app/tabs/schedule', {
      replaceUrl: true
    }).then(() => this.storage.set('ion_did_tutorial', true));
  }
  ionViewWillEnter() {
    this.storage.get('ion_did_tutorial').then(res => {
      if (res === true) {
        this.router.navigateByUrl('/app/tabs/schedule', {
          replaceUrl: true
        });
      }
    });
    this.menu.enable(false);
  }
  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }
}
TutorialPage.ɵfac = function TutorialPage_Factory(t) {
  return new (t || TutorialPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.MenuController), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__.Storage));
};
TutorialPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TutorialPage,
  selectors: [["page-tutorial"]],
  decls: 24,
  vars: 0,
  consts: [[1, "heading"], [1, "image"], ["src", "/assets/img/miningexpologo.png", "alt", "welcome"], [1, "social-login"], [1, "links"], ["routerLink", "/app/tabs/schedule", 1, "google"], ["name", "logo-google"], ["routerLink", "/app/tabs/schedule", 1, "facebook"], ["name", "logo-facebook"], [1, "email-login"], ["routerLink", "/signup", 1, "signup"]],
  template: function TutorialPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content")(1, "div", 0)(2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Mining Expo & Conference");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0)(7, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Welcome");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Please Login or Signup.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3)(12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sign up through social networks");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4)(15, "ion-button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "ion-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "ion-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9)(20, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Or login with email");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ion-button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Signup");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: [".heading[_ngcontent-%COMP%] {\n  margin-top: 10vh;\n  text-align: center;\n}\n.heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 1000;\n}\n.heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #838383;\n}\n\n.log[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 45px;\n}\n\n.image[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 45px;\n}\n\n.social-login[_ngcontent-%COMP%] {\n  margin-top: 45px;\n  text-align: center;\n}\n.social-login[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #838383;\n}\n.social-login[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  width: 25%;\n  height: 50px;\n}\n.social-login[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n.social-login[_ngcontent-%COMP%]   .google[_ngcontent-%COMP%] {\n  --background: #00acee;\n  margin-right: 20px;\n}\n.social-login[_ngcontent-%COMP%]   .facebook[_ngcontent-%COMP%] {\n  --background: #4267b2;\n  margin-left: 20px;\n}\n\n.email-login[_ngcontent-%COMP%] {\n  margin-top: 45px;\n  text-align: center;\n}\n.email-login[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #838383;\n}\n\n.signup[_ngcontent-%COMP%] {\n  --background: linear-gradient(to bottom, #fac644, #fac644, #fac644, #fac644, #fac644, #fac644, #fac644);\n  width: 45%;\n  height: 50px;\n  text-transform: none;\n  font-size: 1.3rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdHV0b3JpYWwvdHV0b3JpYWwuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uL0JsZXNzaW5nJTIwS3VuYWthL0Rlc2t0b3AvbWluaW5nX2V4cG8vbWluaW5nLWV4cG8vc3JjL2FwcC9wYWdlcy90dXRvcmlhbC90dXRvcmlhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQUU7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FDRUo7QURDRTtFQUNFLGNBQUE7QUNDSjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNFRjtBRERFO0VBQ0UsY0FBQTtBQ0dKO0FEREU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQ0dKO0FERkk7RUFDRSxpQkFBQTtBQ0lOO0FEREU7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FDR0o7QURERTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7QUNHSjs7QURDQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNFRjtBRERFO0VBQ0UsY0FBQTtBQ0dKOztBREFFO0VBQ0UsdUdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUNHSiIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkaW5ne1xyXG4gIG1hcmdpbi10b3A6IDEwdmg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGgxe1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogMTAwMDtcclxuXHJcbiAgfVxyXG4gIHB7XHJcbiAgICBjb2xvcjogIzgzODM4MztcclxuXHJcbiAgfVxyXG59XHJcbi5sb2d7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDQ1cHg7XHJcbn1cclxuLmltYWdle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiA0NXB4O1xyXG59XHJcbi5zb2NpYWwtbG9naW57XHJcbiAgbWFyZ2luLXRvcDogNDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcHtcclxuICAgIGNvbG9yOiAjODM4MzgzO1xyXG4gIH1cclxuICBpb24tYnV0dG9ue1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGlvbi1pY29ue1xyXG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIH1cclxuICB9XHJcbiAgLmdvb2dsZSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMGFjZWU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gIC5mYWNlYm9va3tcclxuICAgIC0tYmFja2dyb3VuZDogIzQyNjdiMjtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4XHJcbiAgfVxyXG59XHJcblxyXG4uZW1haWwtbG9naW57XHJcbiAgbWFyZ2luLXRvcDogNDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcHtcclxuICAgIGNvbG9yOiAjODM4MzgzO1xyXG4gIH1cclxufVxyXG4gIC5zaWdudXB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmYWM2NDQsICNmYWM2NDQsICNmYWM2NDQsICNmYWM2NDQsICNmYWM2NDQsICNmYWM2NDQsICNmYWM2NDQpO1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBcclxuICB9XHJcblxyXG4iLCIuaGVhZGluZyB7XG4gIG1hcmdpbi10b3A6IDEwdmg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5oZWFkaW5nIGgxIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiAxMDAwO1xufVxuLmhlYWRpbmcgcCB7XG4gIGNvbG9yOiAjODM4MzgzO1xufVxuXG4ubG9nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA0NXB4O1xufVxuXG4uaW1hZ2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDQ1cHg7XG59XG5cbi5zb2NpYWwtbG9naW4ge1xuICBtYXJnaW4tdG9wOiA0NXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc29jaWFsLWxvZ2luIHAge1xuICBjb2xvcjogIzgzODM4Mztcbn1cbi5zb2NpYWwtbG9naW4gaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAyNSU7XG4gIGhlaWdodDogNTBweDtcbn1cbi5zb2NpYWwtbG9naW4gaW9uLWJ1dHRvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuLnNvY2lhbC1sb2dpbiAuZ29vZ2xlIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDBhY2VlO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4uc29jaWFsLWxvZ2luIC5mYWNlYm9vayB7XG4gIC0tYmFja2dyb3VuZDogIzQyNjdiMjtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5lbWFpbC1sb2dpbiB7XG4gIG1hcmdpbi10b3A6IDQ1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5lbWFpbC1sb2dpbiBwIHtcbiAgY29sb3I6ICM4MzgzODM7XG59XG5cbi5zaWdudXAge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmYWM2NDQsICNmYWM2NDQsICNmYWM2NDQsICNmYWM2NDQsICNmYWM2NDQsICNmYWM2NDQsICNmYWM2NDQpO1xuICB3aWR0aDogNDUlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LXNpemU6IDEuM3JlbTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ })

}]);
//# sourceMappingURL=src_app_pages_tutorial_tutorial_module_ts.js.map