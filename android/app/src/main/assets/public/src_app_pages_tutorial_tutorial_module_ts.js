"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tutorial_tutorial_module_ts"],{

/***/ 3325:
/*!***********************************************************!*\
  !*** ./src/app/pages/tutorial/tutorial-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TutorialPageRoutingModule": () => (/* binding */ TutorialPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _tutorial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutorial */ 2455);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);




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

/***/ 140:
/*!***************************************************!*\
  !*** ./src/app/pages/tutorial/tutorial.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TutorialModule": () => (/* binding */ TutorialModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4615);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 5992);
/* harmony import */ var _tutorial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tutorial */ 2455);
/* harmony import */ var _tutorial_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tutorial-routing.module */ 3325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);





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

/***/ 2455:
/*!********************************************!*\
  !*** ./src/app/pages/tutorial/tutorial.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TutorialPage": () => (/* binding */ TutorialPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 5992);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage-angular */ 5950);







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
  decls: 41,
  vars: 1,
  consts: [[1, "ion-no-border"], ["slot", "end"], ["color", "primary", 3, "hidden", "click"], ["fullscreen", "true"], [1, "slide-container"], [1, "slide"], ["src", "assets/img/ica-slidebox-img-1.png", 1, "slide-image"], [1, "slide-title"], ["src", "assets/img/ica-slidebox-img-2.png", 1, "slide-image"], ["src", "assets/img/ica-slidebox-img-3.png", 1, "slide-image"], ["src", "assets/img/ica-slidebox-img-4.png", 1, "slide-image"], ["fill", "clear", 3, "click"], ["slot", "end", "name", "arrow-forward"]],
  template: function TutorialPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1)(3, "ion-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TutorialPage_Template_ion_button_click_3_listener() {
        return ctx.startApp();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Skip");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-content", 3)(6, "div", 4)(7, "section", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Welcome to ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ICA");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " The ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "ionic conference app");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " is a practical preview of the ionic framework in action, and a demonstration of proper code use. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "What is Ionic?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p")(23, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Ionic Framework");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "section", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h2", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "What is Ionic Appflow?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p")(31, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Ionic Appflow");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " is a powerful set of services and features built on top of Ionic Framework that brings a totally new level of app development agility to mobile dev teams. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "section", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h2", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Ready to Play?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ion-button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TutorialPage_Template_ion_button_click_38_listener() {
        return ctx.startApp();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Continue ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "ion-icon", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.showSkip);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonToolbar],
  styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --overflow: hidden;\n}\n\n.slide-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 100%);\n  grid-template-rows: 1fr;\n  height: 100%;\n  overflow: scroll;\n  scroll-snap-type: x mandatory;\n}\n\n.slide[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  text-align: center;\n  scroll-snap-align: center;\n  scroll-snap-stop: always;\n}\n\n.slide-title[_ngcontent-%COMP%] {\n  margin-top: 2.8rem;\n}\n\n.slide-image[_ngcontent-%COMP%] {\n  max-width: 80%;\n  max-height: 50%;\n  margin: -5vh 0 0;\n  pointer-events: none;\n}\n\nb[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\np[_ngcontent-%COMP%] {\n  padding: 0 40px;\n  color: var(--ion-color-step-600, #60646b);\n  font-size: 14px;\n  line-height: 1.5;\n}\np[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--ion-text-color, #000000);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdHV0b3JpYWwvdHV0b3JpYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsdUJBQUE7RUFFQSxZQUFBO0VBRUEsZ0JBQUE7RUFDQSw2QkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUVBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUVBLFdBQUE7RUFFQSxrQkFBQTtFQUVBLHlCQUFBO0VBQ0Esd0JBQUE7QUFMRjs7QUFRQTtFQUNFLGtCQUFBO0FBTEY7O0FBUUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBQ0Esb0JBQUE7QUFORjs7QUFTQTtFQUNFLGdCQUFBO0FBTkY7O0FBU0E7RUFDRSxlQUFBO0VBRUEseUNBQUE7RUFFQSxlQUFBO0VBRUEsZ0JBQUE7QUFURjtBQVdFO0VBQ0UscUNBQUE7QUFUSiIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zbGlkZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxMDAlKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG5cbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xufVxuXG4uc2xpZGUge1xuICBkaXNwbGF5OiBmbGV4O1xuXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIHdpZHRoOiAxMDAlO1xuXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBzY3JvbGwtc25hcC1hbGlnbjogY2VudGVyO1xuICBzY3JvbGwtc25hcC1zdG9wOiBhbHdheXM7XG59XG5cbi5zbGlkZS10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDIuOHJlbTtcbn1cblxuLnNsaWRlLWltYWdlIHtcbiAgbWF4LXdpZHRoOiA4MCU7XG4gIG1heC1oZWlnaHQ6IDUwJTtcblxuICBtYXJnaW46IC01dmggMCAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuYiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbnAge1xuICBwYWRkaW5nOiAwIDQwcHg7XG5cbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwgIzYwNjQ2Yik7XG5cbiAgZm9udC1zaXplOiAxNHB4O1xuXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG5cbiAgYiB7XG4gICAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwMDAwKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF9wYWdlc190dXRvcmlhbF90dXRvcmlhbF9tb2R1bGVfdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUN1RDtBQUViOzs7QUFFMUMsTUFBTUUsTUFBTSxHQUFXLENBQ3JCO0VBQ0VDLElBQUksRUFBRSxFQUFFO0VBQ1JDLFNBQVMsRUFBRUgsbURBQVlBO0NBQ3hCLENBQ0Y7QUFFRCxNQUlhSSx5QkFBeUI7QUFBekJBLHlCQUF5QjttQkFBekJBLHlCQUF5QjtBQUFBO0FBQXpCQSx5QkFBeUI7UUFBekJBO0FBQXlCO0FBQXpCQSx5QkFBeUI7WUFIMUJMLGtFQUFxQixDQUFDRSxNQUFNLENBQUMsRUFDN0JGLHlEQUFZO0FBQUE7QUFFYzs7c0hBQXpCSyx5QkFBeUI7SUFBQUUsT0FBQSxHQUFBQyx5REFBQTtJQUFBQyxPQUFBLEdBRjFCVCx5REFBWTtFQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNidUI7QUFDRjtBQUVIO0FBQzRCOztBQUV0RSxNQVFhWSxjQUFjO0FBQWRBLGNBQWM7bUJBQWRBLGNBQWM7QUFBQTtBQUFkQSxjQUFjO1FBQWRBO0FBQWM7QUFBZEEsY0FBYztZQU5uQkYseURBQVksRUFDWkMsdURBQVcsRUFDWE4sK0VBQXlCO0FBQUE7QUFJTjs7c0hBQWRPLGNBQWM7SUFBQUMsWUFBQSxHQUZSWixtREFBWTtJQUFBTSxPQUFBLEdBSnZCRyx5REFBWSxFQUNaQyx1REFBVyxFQUNYTiwrRUFBeUI7RUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWUTtBQUVPO0FBRUM7Ozs7O0FBRWpELE1BS2FKLFlBQVk7RUFHdkJnQixZQUNTQyxJQUFvQixFQUNwQkMsTUFBYyxFQUNkQyxPQUFnQjtJQUZoQixLQUFBRixJQUFJLEdBQUpBLElBQUk7SUFDSixLQUFBQyxNQUFNLEdBQU5BLE1BQU07SUFDTixLQUFBQyxPQUFPLEdBQVBBLE9BQU87SUFMaEIsS0FBQUMsUUFBUSxHQUFHLElBQUk7RUFNWjtFQUVIQyxRQUFRQSxDQUFB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OlsiLi9zcmMvYXBwL3BhZ2VzL3R1dG9yaWFsL3R1dG9yaWFsLXJvdXRpbmcubW9kdWxlLnRzIiwiLi9zcmMvYXBwL3BhZ2VzL3R1dG9yaWFsL3R1dG9yaWFsLm1vZHVsZS50cyIsIi4vc3JjL2FwcC9wYWdlcy90dXRvcmlhbC90dXRvcmlhbC50cyIsIi4vc3JjL2FwcC9wYWdlcy90dXRvcmlhbC90dXRvcmlhbC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFR1dG9yaWFsUGFnZSB9IGZyb20gJy4vdHV0b3JpYWwnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIGNvbXBvbmVudDogVHV0b3JpYWxQYWdlXG4gIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIFR1dG9yaWFsUGFnZVJvdXRpbmdNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5pbXBvcnQgeyBUdXRvcmlhbFBhZ2UgfSBmcm9tICcuL3R1dG9yaWFsJztcbmltcG9ydCB7IFR1dG9yaWFsUGFnZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL3R1dG9yaWFsLXJvdXRpbmcubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgSW9uaWNNb2R1bGUsXG4gICAgICAgIFR1dG9yaWFsUGFnZVJvdXRpbmdNb2R1bGUsXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtUdXRvcmlhbFBhZ2VdXG59KVxuZXhwb3J0IGNsYXNzIFR1dG9yaWFsTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IE1lbnVDb250cm9sbGVyIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UtYW5ndWxhcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtdHV0b3JpYWwnLFxuICB0ZW1wbGF0ZVVybDogJ3R1dG9yaWFsLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90dXRvcmlhbC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFR1dG9yaWFsUGFnZSB7XG4gIHNob3dTa2lwID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbWVudTogTWVudUNvbnRyb2xsZXIsXG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxuICAgIHB1YmxpYyBzdG9yYWdlOiBTdG9yYWdlLFxuICApIHt9XG5cbiAgc3RhcnRBcHAoKSB7XG4gICAgdGhpcy5yb3V0ZXJcbiAgICAgIC5uYXZpZ2F0ZUJ5VXJsKCcvYXBwL3RhYnMvc2NoZWR1bGUnLCB7IHJlcGxhY2VVcmw6IHRydWUgfSlcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuc3RvcmFnZS5zZXQoJ2lvbl9kaWRfdHV0b3JpYWwnLCB0cnVlKSk7XG4gIH1cblxuICBpb25WaWV3V2lsbEVudGVyKCkge1xuICAgIHRoaXMuc3RvcmFnZS5nZXQoJ2lvbl9kaWRfdHV0b3JpYWwnKS50aGVuKHJlcyA9PiB7XG4gICAgICBpZiAocmVzID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy9hcHAvdGFicy9zY2hlZHVsZScsIHsgcmVwbGFjZVVybDogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMubWVudS5lbmFibGUoZmFsc2UpO1xuICB9XG5cbiAgaW9uVmlld0RpZExlYXZlKCkge1xuICAgIC8vIGVuYWJsZSB0aGUgcm9vdCBsZWZ0IG1lbnUgd2hlbiBsZWF2aW5nIHRoZSB0dXRvcmlhbCBwYWdlXG4gICAgdGhpcy5tZW51LmVuYWJsZSh0cnVlKTtcbiAgfVxufVxuIiwiPGlvbi1oZWFkZXIgY2xhc3M9XCJpb24tbm8tYm9yZGVyXCI+XG4gIDxpb24tdG9vbGJhcj5cbiAgICA8aW9uLWJ1dHRvbnMgc2xvdD1cImVuZFwiPlxuICAgICAgPGlvbi1idXR0b24gY29sb3I9J3ByaW1hcnknIChjbGljayk9XCJzdGFydEFwcCgpXCIgW2hpZGRlbl09XCIhc2hvd1NraXBcIj5Ta2lwPC9pb24tYnV0dG9uPlxuICAgIDwvaW9uLWJ1dHRvbnM+XG4gIDwvaW9uLXRvb2xiYXI+XG48L2lvbi1oZWFkZXI+XG5cbjxpb24tY29udGVudCBmdWxsc2NyZWVuPVwidHJ1ZVwiPlxuICA8ZGl2IGNsYXNzPVwic2xpZGUtY29udGFpbmVyXCI+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJzbGlkZVwiPlxuICAgICAgPGltZyBzcmM9XCJhc3NldHMvaW1nL2ljYS1zbGlkZWJveC1pbWctMS5wbmdcIiBjbGFzcz1cInNsaWRlLWltYWdlXCIgLz5cbiAgICAgIDxoMiBjbGFzcz1cInNsaWRlLXRpdGxlXCI+XG4gICAgICAgIFdlbGNvbWUgdG9cbiAgICAgICAgPGI+SUNBPC9iPlxuICAgICAgPC9oMj5cbiAgICAgIDxwPlxuICAgICAgICBUaGUgPGI+aW9uaWMgY29uZmVyZW5jZSBhcHA8L2I+IGlzIGEgcHJhY3RpY2FsIHByZXZpZXcgb2YgdGhlIGlvbmljIGZyYW1ld29yayBpbiBhY3Rpb24sIGFuZCBhIGRlbW9uc3RyYXRpb24gb2YgcHJvcGVyIGNvZGUgdXNlLlxuICAgICAgPC9wPlxuICAgIDwvc2VjdGlvbj5cblxuICAgIDxzZWN0aW9uIGNsYXNzPVwic2xpZGVcIj5cbiAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltZy9pY2Etc2xpZGVib3gtaW1nLTIucG5nXCIgY2xhc3M9XCJzbGlkZS1pbWFnZVwiIC8+XG4gICAgICA8aDIgY2xhc3M9XCJzbGlkZS10aXRsZVwiPldoYXQgaXMgSW9uaWM/PC9oMj5cbiAgICAgIDxwPlxuICAgICAgICA8Yj5Jb25pYyBGcmFtZXdvcms8L2I+IGlzIGFuIG9wZW4gc291cmNlIFNESyB0aGF0IGVuYWJsZXMgZGV2ZWxvcGVycyB0byBidWlsZCBoaWdoIHF1YWxpdHkgbW9iaWxlIGFwcHMgd2l0aCB3ZWIgdGVjaG5vbG9naWVzIGxpa2UgSFRNTCwgQ1NTLCBhbmQgSmF2YVNjcmlwdC5cbiAgICAgIDwvcD5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICA8c2VjdGlvbiBjbGFzcz1cInNsaWRlXCI+XG4gICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWcvaWNhLXNsaWRlYm94LWltZy0zLnBuZ1wiIGNsYXNzPVwic2xpZGUtaW1hZ2VcIiAvPlxuICAgICAgPGgyIGNsYXNzPVwic2xpZGUtdGl0bGVcIj5XaGF0IGlzIElvbmljIEFwcGZsb3c/PC9oMj5cbiAgICAgIDxwPlxuICAgICAgICA8Yj5Jb25pYyBBcHBmbG93PC9iPiBpcyBhIHBvd2VyZnVsIHNldCBvZiBzZXJ2aWNlcyBhbmQgZmVhdHVyZXMgYnVpbHQgb24gdG9wIG9mIElvbmljIEZyYW1ld29yayB0aGF0IGJyaW5ncyBhIHRvdGFsbHkgbmV3IGxldmVsIG9mIGFwcCBkZXZlbG9wbWVudCBhZ2lsaXR5IHRvIG1vYmlsZSBkZXYgdGVhbXMuXG4gICAgICA8L3A+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJzbGlkZVwiPlxuICAgICAgPGltZyBzcmM9XCJhc3NldHMvaW1nL2ljYS1zbGlkZWJveC1pbWctNC5wbmdcIiBjbGFzcz1cInNsaWRlLWltYWdlXCIgLz5cbiAgICAgIDxoMiBjbGFzcz1cInNsaWRlLXRpdGxlXCI+UmVhZHkgdG8gUGxheT88L2gyPlxuICAgICAgPGlvbi1idXR0b24gZmlsbD1cImNsZWFyXCIgKGNsaWNrKT1cInN0YXJ0QXBwKClcIj5cbiAgICAgICAgQ29udGludWVcbiAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJlbmRcIiBuYW1lPVwiYXJyb3ctZm9yd2FyZFwiPjwvaW9uLWljb24+XG4gICAgICA8L2lvbi1idXR0b24+XG4gICAgPC9zZWN0aW9uPlxuICA8L2Rpdj5cbjwvaW9uLWNvbnRlbnQ+XG4iXSwibmFtZXMiOlsiUm91dGVyTW9kdWxlIiwiVHV0b3JpYWxQYWdlIiwicm91dGVzIiwicGF0aCIsImNvbXBvbmVudCIsIlR1dG9yaWFsUGFnZVJvdXRpbmdNb2R1bGUiLCJmb3JDaGlsZCIsImltcG9ydHMiLCJpMSIsImV4cG9ydHMiLCJDb21tb25Nb2R1bGUiLCJJb25pY01vZHVsZSIsIlR1dG9yaWFsTW9kdWxlIiwiZGVjbGFyYXRpb25zIiwiUm91dGVyIiwiTWVudUNvbnRyb2xsZXIiLCJTdG9yYWdlIiwiY29uc3RydWN0b3IiLCJtZW51Iiwicm91dGVyIiwic3RvcmFnZSIsInNob3dTa2lwIiwic3RhcnRBcHAiLCJuYXZpZ2F0ZUJ5VXJsIiwicmVwbGFjZVVybCIsInRoZW4iLCJzZXQiLCJpb25WaWV3V2lsbEVudGVyIiwiZ2V0IiwicmVzIiwiZW5hYmxlIiwiaW9uVmlld0RpZExlYXZlIiwiaTAiLCLJtcm1ZGlyZWN0aXZlSW5qZWN0IiwiaTIiLCJpMyIsInNlbGVjdG9ycyIsImRlY2xzIiwidmFycyIsImNvbnN0cyIsInRlbXBsYXRlIiwiVHV0b3JpYWxQYWdlX1RlbXBsYXRlIiwicmYiLCJjdHgiLCLJtcm1ZWxlbWVudFN0YXJ0IiwiybXJtWxpc3RlbmVyIiwiVHV0b3JpYWxQYWdlX1RlbXBsYXRlX2lvbl9idXR0b25fY2xpY2tfM19saXN0ZW5lciIsIsm1ybV0ZXh0IiwiybXJtWVsZW1lbnRFbmQiLCLJtcm1ZWxlbWVudCIsIlR1dG9yaWFsUGFnZV9UZW1wbGF0ZV9pb25fYnV0dG9uX2NsaWNrXzM4X2xpc3RlbmVyIiwiybXJtWFkdmFuY2UiLCLJtcm1cHJvcGVydHkiXSwic291cmNlUm9vdCI6IndlYnBhY2s6Ly8vIiwieF9nb29nbGVfaWdub3JlTGlzdCI6W119