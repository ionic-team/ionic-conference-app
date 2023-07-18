(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs-page_tabs-page_module_ts"],{

/***/ 82509:
/*!******************************************************!*\
  !*** ./src/app/pages/about-popover/about-popover.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PopoverPage: () => (/* binding */ PopoverPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 64210);



class PopoverPage {
  constructor(popoverCtrl) {
    this.popoverCtrl = popoverCtrl;
  }
  support() {
    // this.app.getRootNavs()[0].push('/support');
    this.popoverCtrl.dismiss();
  }
  close(url) {
    window.open(url, '_blank');
    this.popoverCtrl.dismiss();
  }
}
PopoverPage.ɵfac = function PopoverPage_Factory(t) {
  return new (t || PopoverPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.PopoverController));
};
PopoverPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PopoverPage,
  selectors: [["ng-component"]],
  decls: 16,
  vars: 0,
  consts: [["button", "", 3, "click"]],
  template: function PopoverPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-list")(1, "ion-item", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverPage_Template_ion_item_click_1_listener() {
        return ctx.close("https://ionicframework.com/getting-started");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Learn Ionic");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-item", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverPage_Template_ion_item_click_4_listener() {
        return ctx.close("https://ionicframework.com/docs/");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Documentation");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-item", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverPage_Template_ion_item_click_7_listener() {
        return ctx.close("https://showcase.ionicframework.com");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Showcase");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-item", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverPage_Template_ion_item_click_10_listener() {
        return ctx.close("https://github.com/ionic-team/ionic");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "GitHub Repo");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-item", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverPage_Template_ion_item_click_13_listener() {
        return ctx.support();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Support");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonList],
  encapsulation: 2
});


/***/ }),

/***/ 62013:
/*!*****************************************************!*\
  !*** ./src/app/pages/about/about-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutPageRoutingModule: () => (/* binding */ AboutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ 35775);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '',
  component: _about__WEBPACK_IMPORTED_MODULE_0__.AboutPage
}];
class AboutPageRoutingModule {}
AboutPageRoutingModule.ɵfac = function AboutPageRoutingModule_Factory(t) {
  return new (t || AboutPageRoutingModule)();
};
AboutPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: AboutPageRoutingModule
});
AboutPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AboutPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 33542:
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutModule: () => (/* binding */ AboutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 64210);
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ 35775);
/* harmony import */ var _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../about-popover/about-popover */ 82509);
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-routing.module */ 62013);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);







class AboutModule {}
AboutModule.ɵfac = function AboutModule_Factory(t) {
  return new (t || AboutModule)();
};
AboutModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AboutModule,
  bootstrap: [_about__WEBPACK_IMPORTED_MODULE_0__.AboutPage]
});
AboutModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _about_routing_module__WEBPACK_IMPORTED_MODULE_2__.AboutPageRoutingModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AboutModule, {
    declarations: [_about__WEBPACK_IMPORTED_MODULE_0__.AboutPage, _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_1__.PopoverPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _about_routing_module__WEBPACK_IMPORTED_MODULE_2__.AboutPageRoutingModule]
  });
})();

/***/ }),

/***/ 35775:
/*!**************************************!*\
  !*** ./src/app/pages/about/about.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutPage: () => (/* binding */ AboutPage)
/* harmony export */ });
/* harmony import */ var C_Users_Blessing_Kunaka_Desktop_mining_expo_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../about-popover/about-popover */ 82509);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 64210);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);







function AboutPage_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-datetime", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AboutPage_ng_template_38_Template_ion_datetime_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.conferenceDate = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.conferenceDate);
  }
}
const _c0 = function () {
  return {
    "opacity": "1"
  };
};
class AboutPage {
  constructor(popoverCtrl) {
    this.popoverCtrl = popoverCtrl;
    this.location = 'windhoek';
    this.conferenceDate = '2023-08-31';
    this.selectOptions = {
      header: 'Select a Location'
    };
  }
  presentPopover(event) {
    var _this = this;
    return (0,C_Users_Blessing_Kunaka_Desktop_mining_expo_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const popover = yield _this.popoverCtrl.create({
        component: _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_1__.PopoverPage,
        event
      });
      yield popover.present();
    })();
  }
}
AboutPage.ɵfac = function AboutPage_Factory(t) {
  return new (t || AboutPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.PopoverController));
};
AboutPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AboutPage,
  selectors: [["page-about"]],
  decls: 53,
  vars: 19,
  consts: [[1, "ion-no-border"], ["slot", "start"], ["slot", "end"], [3, "click"], ["slot", "icon-only", "ios", "ellipsis-horizontal", "md", "ellipsis-vertical"], [1, "about-header"], [1, "about-image", "madison", 3, "ngStyle"], [1, "about-image", "austin", 3, "ngStyle"], [1, "about-image", "chicago", 3, "ngStyle"], [1, "about-image", "seattle", 3, "ngStyle"], [1, "about-info"], [1, "ion-padding-top", "ion-padding-start"], [1, "ion-padding-start", "ion-padding-end"], ["lines", "none"], ["label", "Location", 3, "ngModel", "interfaceOptions", "ngModelChange"], ["value", "madison"], ["value", "austin"], ["value", "chicago"], ["value", "seattle"], ["button", "true", "id", "open-date-input"], ["id", "date-input-popover", "trigger", "open-date-input", "side", "top", "alignment", "end", 3, "showBackdrop"], [1, "ion-text-end"], ["max", "2056", "presentation", "date", 3, "ngModel", "ngModelChange"]],
  template: function AboutPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-content")(1, "ion-header", 0)(2, "ion-toolbar")(3, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ion-menu-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-buttons", 2)(6, "ion-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AboutPage_Template_ion_button_click_6_listener($event) {
        return ctx.presentPopover($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "ion-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10)(14, "h3", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "About");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Mining Expo and Conference promises to be a dynamic event bringing together industry leaders, experts, and stakeholders in the mining sector. This year's expo centers around the theme of \"Embracing Innovation for Sustainable Mining,\" reflecting the growing emphasis on responsible practices and cutting-edge technologies in the mining industry. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "h3", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "ion-list", 13)(21, "ion-item")(22, "ion-select", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AboutPage_Template_ion_select_ngModelChange_22_listener($event) {
        return ctx.location = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ion-select-option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Windhoek Showgrounds");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "ion-select-option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Aussanplatz");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "ion-select-option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Windhoek");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "ion-select-option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Namibia");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "ion-item", 19)(32, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " Date ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "ion-text", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](36, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "ion-popover", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, AboutPage_ng_template_38_Template, 1, 1, "ng-template");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "h3", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Internet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "ion-list", 13)(42, "ion-item")(43, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " Wifi network ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "ion-label", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](47, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "ion-item")(49, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, " Password ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "ion-label", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, " miningexpo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.location === "madison" && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](15, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.location === "austin" && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](16, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.location === "chicago" && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](17, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.location === "seattle" && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](18, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.location)("interfaceOptions", ctx.selectOptions);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](36, 9, ctx.conferenceDate, "mediumDate"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showBackdrop", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" miningexpo", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](47, 12, ctx.conferenceDate, "y"), " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonDatetime, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonPopover, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.SelectValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
  styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  --background: transparent;\n  --color: white;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n}\n\nion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]   ion-back-button[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]   ion-menu-button[_ngcontent-%COMP%] {\n  --color: white;\n}\n\n.about-header[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 30%;\n}\n\n.about-header[_ngcontent-%COMP%]   .about-image[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  transition: opacity 500ms ease-in-out;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  opacity: 0;\n}\n\n.about-header[_ngcontent-%COMP%]   .madison[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/img/about/madison.jpg\");\n}\n\n.about-header[_ngcontent-%COMP%]   .austin[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/img/about/austin.jpg\");\n}\n\n.about-header[_ngcontent-%COMP%]   .chicago[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/img/about/chicago.jpg\");\n}\n\n.about-header[_ngcontent-%COMP%]   .seattle[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/img/about/seattle.jpg\");\n}\n\n.about-info[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-top: -10px;\n  border-radius: 10px;\n  background: var(--ion-background-color, #ffffff);\n}\n\n.about-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\n.about-info[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  padding-top: 0;\n}\n\n.about-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--ion-color-dark);\n  line-height: 130%;\n}\n\n.about-info[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  -webkit-margin-end: 32px;\n          margin-inline-end: 32px;\n}\n\n#date-input-popover[_ngcontent-%COMP%] {\n  --offset-y: -var(--ion-safe-area-bottom);\n  --max-width: 90%;\n  --width: 336px;\n}\n\n\n\n\n\n.ios[_ngcontent-%COMP%]   .about-info[_ngcontent-%COMP%] {\n  --ion-padding: 19px;\n}\n\n.ios[_ngcontent-%COMP%]   .about-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uL0JsZXNzaW5nJTIwS3VuYWthL0Rlc2t0b3AvbWluaW5nX2V4cG8vbWluaW5nLWV4cG8vc3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFFQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7QUNBRjs7QURHQTs7O0VBR0UsY0FBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFFQSxXQUFBO0VBQ0EsV0FBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7RUFFQSxRQUFBO0VBRUEscUNBQUE7RUFFQSw0QkFBQTtFQUVBLDJCQUFBO0VBQ0Esc0JBQUE7RUFFQSxVQUFBO0FDTkY7O0FEU0E7RUFDRSxzREFBQTtBQ05GOztBRFNBO0VBQ0UscURBQUE7QUNORjs7QURTQTtFQUNFLHNEQUFBO0FDTkY7O0FEU0E7RUFDRSxzREFBQTtBQ05GOztBRFNBO0VBQ0Usa0JBQUE7RUFFQSxpQkFBQTtFQUVBLG1CQUFBO0VBRUEsZ0RBQUE7QUNURjs7QURZQTtFQUNFLGFBQUE7QUNURjs7QURZQTtFQUNFLGNBQUE7QUNURjs7QURZQTtFQUNFLDRCQUFBO0VBRUEsaUJBQUE7QUNWRjs7QURhQTtFQUNFLHdCQUFBO1VBQUEsdUJBQUE7QUNWRjs7QURhQTtFQUNFLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDVkY7O0FEYUE7O0VBQUE7QUFJQTtFQUNFLG1CQUFBO0FDWEY7O0FEY0E7RUFDRSxnQkFBQTtBQ1hGIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgLS1jb2xvcjogd2hpdGU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbixcclxuaW9uLXRvb2xiYXIgaW9uLWJhY2stYnV0dG9uLFxyXG5pb24tdG9vbGJhciBpb24tbWVudS1idXR0b24ge1xyXG4gIC0tY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYWJvdXQtaGVhZGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzAlO1xyXG59XHJcblxyXG4uYWJvdXQtaGVhZGVyIC5hYm91dC1pbWFnZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICBpbnNldDogMDtcclxuXHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcyBlYXNlLWluLW91dDtcclxuXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblxyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5hYm91dC1oZWFkZXIgLm1hZGlzb24ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2Fib3V0L21hZGlzb24uanBnXCIpO1xyXG59XHJcblxyXG4uYWJvdXQtaGVhZGVyIC5hdXN0aW4ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2Fib3V0L2F1c3Rpbi5qcGdcIik7XHJcbn1cclxuXHJcbi5hYm91dC1oZWFkZXIgLmNoaWNhZ28ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2Fib3V0L2NoaWNhZ28uanBnXCIpO1xyXG59XHJcblxyXG4uYWJvdXQtaGVhZGVyIC5zZWF0dGxlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9hYm91dC9zZWF0dGxlLmpwZ1wiKTtcclxufVxyXG5cclxuLmFib3V0LWluZm8ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgbWFyZ2luLXRvcDogLTEwcHg7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmZmZmKTtcclxufVxyXG5cclxuLmFib3V0LWluZm8gaDMge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbi5hYm91dC1pbmZvIGlvbi1saXN0IHtcclxuICBwYWRkaW5nLXRvcDogMDtcclxufVxyXG5cclxuLmFib3V0LWluZm8gcCB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuXHJcbiAgbGluZS1oZWlnaHQ6IDEzMCU7XHJcbn1cclxuXHJcbi5hYm91dC1pbmZvIGlvbi1pY29uIHtcclxuICBtYXJnaW4taW5saW5lLWVuZDogMzJweDtcclxufVxyXG5cclxuI2RhdGUtaW5wdXQtcG9wb3ZlciB7XHJcbiAgLS1vZmZzZXQteTogLXZhcigtLWlvbi1zYWZlLWFyZWEtYm90dG9tKTtcclxuICAtLW1heC13aWR0aDogOTAlO1xyXG4gIC0td2lkdGg6IDMzNnB4O1xyXG59XHJcblxyXG4vKlxyXG4gKiBpT1MgT25seVxyXG4gKi9cclxuXHJcbi5pb3MgLmFib3V0LWluZm8ge1xyXG4gIC0taW9uLXBhZGRpbmc6IDE5cHg7XHJcbn1cclxuXHJcbi5pb3MgLmFib3V0LWluZm8gaDMge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuIiwiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xufVxuXG5pb24tdG9vbGJhciBpb24tYnV0dG9uLFxuaW9uLXRvb2xiYXIgaW9uLWJhY2stYnV0dG9uLFxuaW9uLXRvb2xiYXIgaW9uLW1lbnUtYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbi5hYm91dC1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwJTtcbn1cblxuLmFib3V0LWhlYWRlciAuYWJvdXQtaW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zIGVhc2UtaW4tb3V0O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5hYm91dC1oZWFkZXIgLm1hZGlzb24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9hYm91dC9tYWRpc29uLmpwZ1wiKTtcbn1cblxuLmFib3V0LWhlYWRlciAuYXVzdGluIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvYWJvdXQvYXVzdGluLmpwZ1wiKTtcbn1cblxuLmFib3V0LWhlYWRlciAuY2hpY2FnbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2Fib3V0L2NoaWNhZ28uanBnXCIpO1xufVxuXG4uYWJvdXQtaGVhZGVyIC5zZWF0dGxlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvYWJvdXQvc2VhdHRsZS5qcGdcIik7XG59XG5cbi5hYm91dC1pbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmZmZmYpO1xufVxuXG4uYWJvdXQtaW5mbyBoMyB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5hYm91dC1pbmZvIGlvbi1saXN0IHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5hYm91dC1pbmZvIHAge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICBsaW5lLWhlaWdodDogMTMwJTtcbn1cblxuLmFib3V0LWluZm8gaW9uLWljb24ge1xuICBtYXJnaW4taW5saW5lLWVuZDogMzJweDtcbn1cblxuI2RhdGUtaW5wdXQtcG9wb3ZlciB7XG4gIC0tb2Zmc2V0LXk6IC12YXIoLS1pb24tc2FmZS1hcmVhLWJvdHRvbSk7XG4gIC0tbWF4LXdpZHRoOiA5MCU7XG4gIC0td2lkdGg6IDMzNnB4O1xufVxuXG4vKlxuICogaU9TIE9ubHlcbiAqL1xuLmlvcyAuYWJvdXQtaW5mbyB7XG4gIC0taW9uLXBhZGRpbmc6IDE5cHg7XG59XG5cbi5pb3MgLmFib3V0LWluZm8gaDMge1xuICBmb250LXdlaWdodDogNzAwO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 77046:
/*!*************************************************!*\
  !*** ./src/app/pages/map/map-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapPageRoutingModule: () => (/* binding */ MapPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ 72214);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '',
  component: _map__WEBPACK_IMPORTED_MODULE_0__.MapPage
}];
class MapPageRoutingModule {}
MapPageRoutingModule.ɵfac = function MapPageRoutingModule_Factory(t) {
  return new (t || MapPageRoutingModule)();
};
MapPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: MapPageRoutingModule
});
MapPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MapPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 61307:
/*!*****************************************!*\
  !*** ./src/app/pages/map/map.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapModule: () => (/* binding */ MapModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 64210);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ 72214);
/* harmony import */ var _map_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map-routing.module */ 77046);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);





class MapModule {}
MapModule.ɵfac = function MapModule_Factory(t) {
  return new (t || MapModule)();
};
MapModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: MapModule
});
MapModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _map_routing_module__WEBPACK_IMPORTED_MODULE_1__.MapPageRoutingModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MapModule, {
    declarations: [_map__WEBPACK_IMPORTED_MODULE_0__.MapPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _map_routing_module__WEBPACK_IMPORTED_MODULE_1__.MapPageRoutingModule]
  });
})();

/***/ }),

/***/ 72214:
/*!**********************************!*\
  !*** ./src/app/pages/map/map.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MapPage: () => (/* binding */ MapPage)
/* harmony export */ });
/* harmony import */ var C_Users_Blessing_Kunaka_Desktop_mining_expo_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/conference-data */ 27440);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _map_dark_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map-dark-style */ 10708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 64210);









const _c0 = ["mapCanvas"];
class MapPage {
  constructor(doc, confData, platform) {
    this.doc = doc;
    this.confData = confData;
    this.platform = platform;
  }
  ngAfterViewInit() {
    var _this = this;
    return (0,C_Users_Blessing_Kunaka_Desktop_mining_expo_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const appEl = _this.doc.querySelector('ion-app');
      let isDark = false;
      let style = [];
      if (appEl.classList.contains('dark-theme')) {
        style = _map_dark_style__WEBPACK_IMPORTED_MODULE_2__.darkStyle;
      }
      const googleMaps = yield getGoogleMaps('YOUR_API_KEY_HERE');
      let map;
      _this.confData.getMap().subscribe(mapData => {
        const mapEle = _this.mapElement.nativeElement;
        map = new googleMaps.Map(mapEle, {
          center: mapData.find(d => d.center),
          zoom: 16,
          styles: style
        });
        mapData.forEach(markerData => {
          const infoWindow = new googleMaps.InfoWindow({
            content: `<h5>${markerData.name}</h5>`
          });
          const marker = new googleMaps.Marker({
            position: markerData,
            map,
            title: markerData.name
          });
          marker.addListener('click', () => {
            infoWindow.open(map, marker);
          });
        });
        googleMaps.event.addListenerOnce(map, 'idle', () => {
          mapEle.classList.add('show-map');
        });
      });
      const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          if (mutation.attributeName === 'class') {
            const el = mutation.target;
            isDark = el.classList.contains('dark-theme');
            if (map && isDark) {
              map.setOptions({
                styles: _map_dark_style__WEBPACK_IMPORTED_MODULE_2__.darkStyle
              });
            } else if (map) {
              map.setOptions({
                styles: []
              });
            }
          }
        });
      });
      observer.observe(appEl, {
        attributes: true
      });
    })();
  }
}
MapPage.ɵfac = function MapPage_Factory(t) {
  return new (t || MapPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_providers_conference_data__WEBPACK_IMPORTED_MODULE_1__.ConferenceData), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform));
};
MapPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: MapPage,
  selectors: [["page-map"]],
  viewQuery: function MapPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.mapElement = _t.first);
    }
  },
  decls: 9,
  vars: 0,
  consts: [["slot", "start"], [1, "map-canvas"], ["mapCanvas", ""]],
  template: function MapPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-menu-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Map");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "div", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar],
  styles: [".map-canvas[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transition: opacity 150ms ease-in;\n  background-color: transparent;\n  opacity: 0;\n}\n\n.show-map[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbWFwL21hcC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vQmxlc3NpbmclMjBLdW5ha2EvRGVza3RvcC9taW5pbmdfZXhwby9taW5pbmctZXhwby9zcmMvYXBwL3BhZ2VzL21hcC9tYXAuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsV0FBQTtFQUVBLFlBQUE7RUFFQSxpQ0FBQTtFQUVBLDZCQUFBO0VBRUEsVUFBQTtBQ0pGOztBRE9BO0VBQ0UsVUFBQTtBQ0pGIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcC1jYW52YXMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLWluO1xyXG5cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLnNob3ctbWFwIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbiIsIi5tYXAtY2FudmFzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGVhc2UtaW47XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBvcGFjaXR5OiAwO1xufVxuXG4uc2hvdy1tYXAge1xuICBvcGFjaXR5OiAxO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

function getGoogleMaps(apiKey) {
  const win = window;
  const googleModule = win.google;
  if (googleModule && googleModule.maps) {
    return Promise.resolve(googleModule.maps);
  }
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.31`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    script.onload = () => {
      const googleModule2 = win.google;
      if (googleModule2 && googleModule2.maps) {
        resolve(googleModule2.maps);
      } else {
        reject('google maps not available');
      }
    };
  });
}

/***/ }),

/***/ 55235:
/*!*********************************************************!*\
  !*** ./src/app/pages/scanner/scanner-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScannerPageRoutingModule: () => (/* binding */ ScannerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _scanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scanner */ 51123);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '',
  component: _scanner__WEBPACK_IMPORTED_MODULE_0__.ScannerPage
}];
class ScannerPageRoutingModule {}
ScannerPageRoutingModule.ɵfac = function ScannerPageRoutingModule_Factory(t) {
  return new (t || ScannerPageRoutingModule)();
};
ScannerPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ScannerPageRoutingModule
});
ScannerPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ScannerPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 9191:
/*!*************************************************!*\
  !*** ./src/app/pages/scanner/scanner.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScannerModule: () => (/* binding */ ScannerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 64210);
/* harmony import */ var _scanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scanner */ 51123);
/* harmony import */ var _scanner_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scanner-routing.module */ 55235);
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularx-qrcode */ 73725);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);






class ScannerModule {}
ScannerModule.ɵfac = function ScannerModule_Factory(t) {
  return new (t || ScannerModule)();
};
ScannerModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ScannerModule
});
ScannerModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _scanner_routing_module__WEBPACK_IMPORTED_MODULE_1__.ScannerPageRoutingModule, angularx_qrcode__WEBPACK_IMPORTED_MODULE_5__.QRCodeModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ScannerModule, {
    declarations: [_scanner__WEBPACK_IMPORTED_MODULE_0__.ScannerPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _scanner_routing_module__WEBPACK_IMPORTED_MODULE_1__.ScannerPageRoutingModule, angularx_qrcode__WEBPACK_IMPORTED_MODULE_5__.QRCodeModule]
  });
})();

/***/ }),

/***/ 51123:
/*!******************************************!*\
  !*** ./src/app/pages/scanner/scanner.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScannerPage: () => (/* binding */ ScannerPage)
/* harmony export */ });
/* harmony import */ var C_Users_Blessing_Kunaka_Desktop_mining_expo_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor-community/barcode-scanner */ 13610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 64210);
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularx-qrcode */ 73725);






function ScannerPage_ion_item_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item")(1, "ion-label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Scanned Result: ", ctx_r0.scannedResult, "");
  }
}
class ScannerPage {
  constructor() {
    this.qrCodeString = 'This is the code for the mining expo';
    this.content_visibility = '';
  }
  checkPermission() {
    return (0,C_Users_Blessing_Kunaka_Desktop_mining_expo_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const status = yield _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_1__.BarcodeScanner.checkPermission({
          force: true
        });
        if (status.granted) {
          return true;
        }
        return false;
      } catch (e) {
        console.log(e);
      }
    })();
  }
  startScan() {
    var _this = this;
    return (0,C_Users_Blessing_Kunaka_Desktop_mining_expo_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const permission = yield _this.checkPermission(); // Check camera permission    
        if (!permission) {
          return true;
        }
        yield _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_1__.BarcodeScanner.hideBackground();
        document.querySelector('body').classList.add('scanner-active');
        _this.content_visibility = 'hidden';
        const result = yield _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_1__.BarcodeScanner.startScan(); // start scanning and wait for a result 
        console.log(result);
        _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_1__.BarcodeScanner.showBackground();
        document.querySelector('body').classList.remove('scanner-active');
        _this.content_visibility = '';
        // if the result has content
        if (result !== null && result !== void 0 && result.hasContent) {
          _this.scannedResult = result.content;
          console.log(_this.scannedResult); // log the raw scanned content
        }
      } catch (e) {
        console.log(e);
        _this.stopScan();
      }
    })();
  }
  stopScan() {
    _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_1__.BarcodeScanner.showBackground();
    _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_1__.BarcodeScanner.stopScan();
    document.querySelector('body').classList.remove('scanner-active');
    this.content_visibility = '';
  }
  ngOnDestroy() {
    this.stopScan();
  }
}
ScannerPage.ɵfac = function ScannerPage_Factory(t) {
  return new (t || ScannerPage)();
};
ScannerPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ScannerPage,
  selectors: [["page-scanner"]],
  decls: 17,
  vars: 8,
  consts: [["color", "secondary"], ["slot", "start"], [3, "qrdata", "width", "errorCorrectionLevel"], ["expand", "block", 3, "click"], ["name", "scan", "slot", "start"], [4, "ngIf"], [1, "scanner-buttons"], [1, "ion-no-padding"], ["expand", "full", 3, "click"], [1, "ion-text-wrap"]],
  template: function ScannerPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-menu-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "QR Scan");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-content")(7, "ion-card-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "qrcode", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ScannerPage_Template_ion_button_click_9_listener() {
        return ctx.startScan();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "ion-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Scan QR Code\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ScannerPage_ion_item_12_Template, 3, 1, "ion-item", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-row", 6)(14, "ion-col", 7)(15, "ion-button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ScannerPage_Template_ion_button_click_15_listener() {
        return ctx.stopScan();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Create");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("visibility", ctx.content_visibility);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("visibility", ctx.content_visibility);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("qrdata", ctx.qrCodeString)("width", 356)("errorCorrectionLevel", "M");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.scannedResult);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, angularx_qrcode__WEBPACK_IMPORTED_MODULE_5__.QRCodeComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 47286:
/*!***********************************************************************!*\
  !*** ./src/app/pages/session-detail/session-detail-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SessionDetailPageRoutingModule: () => (/* binding */ SessionDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _session_detail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./session-detail */ 5439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '',
  component: _session_detail__WEBPACK_IMPORTED_MODULE_0__.SessionDetailPage
}];
class SessionDetailPageRoutingModule {}
SessionDetailPageRoutingModule.ɵfac = function SessionDetailPageRoutingModule_Factory(t) {
  return new (t || SessionDetailPageRoutingModule)();
};
SessionDetailPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: SessionDetailPageRoutingModule
});
SessionDetailPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SessionDetailPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 48554:
/*!***************************************************************!*\
  !*** ./src/app/pages/session-detail/session-detail.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SessionDetailModule: () => (/* binding */ SessionDetailModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _session_detail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./session-detail */ 5439);
/* harmony import */ var _session_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session-detail-routing.module */ 47286);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 64210);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);





class SessionDetailModule {}
SessionDetailModule.ɵfac = function SessionDetailModule_Factory(t) {
  return new (t || SessionDetailModule)();
};
SessionDetailModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: SessionDetailModule
});
SessionDetailModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _session_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__.SessionDetailPageRoutingModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SessionDetailModule, {
    declarations: [_session_detail__WEBPACK_IMPORTED_MODULE_0__.SessionDetailPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _session_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__.SessionDetailPageRoutingModule]
  });
})();

/***/ }),

/***/ 5439:
/*!********************************************************!*\
  !*** ./src/app/pages/session-detail/session-detail.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SessionDetailPage: () => (/* binding */ SessionDetailPage)
/* harmony export */ });
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../providers/conference-data */ 27440);
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/user-data */ 8176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 64210);









function SessionDetailPage_ion_icon_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ion-icon", 11);
  }
}
function SessionDetailPage_ion_icon_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ion-icon", 12);
  }
}
function SessionDetailPage_div_11_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const track_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("session-track-" + track_r4.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](track_r4);
  }
}
function SessionDetailPage_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SessionDetailPage_div_11_span_3_Template, 2, 3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-text", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.session.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.session == null ? null : ctx_r2.session.tracks);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.session.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r2.session.timeStart, " \u2013 ", ctx_r2.session.timeEnd, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.session.location, " ");
  }
}
class SessionDetailPage {
  constructor(dataProvider, userProvider, route) {
    this.dataProvider = dataProvider;
    this.userProvider = userProvider;
    this.route = route;
    this.isFavorite = false;
    this.defaultHref = '';
  }
  ionViewWillEnter() {
    this.dataProvider.load().subscribe(data => {
      if (data && data.schedule && data.schedule[0] && data.schedule[0].groups) {
        const sessionId = this.route.snapshot.paramMap.get('sessionId');
        for (const group of data.schedule[0].groups) {
          if (group && group.sessions) {
            for (const session of group.sessions) {
              if (session && session.id === sessionId) {
                this.session = session;
                this.isFavorite = this.userProvider.hasFavorite(this.session.name);
                break;
              }
            }
          }
        }
      }
    });
  }
  ionViewDidEnter() {
    this.defaultHref = `/app/tabs/schedule`;
  }
  sessionClick(item) {
    console.log('Clicked', item);
  }
  toggleFavorite() {
    if (this.userProvider.hasFavorite(this.session.name)) {
      this.userProvider.removeFavorite(this.session.name);
      this.isFavorite = false;
    } else {
      this.userProvider.addFavorite(this.session.name);
      this.isFavorite = true;
    }
  }
  shareSession() {
    console.log('Clicked share session');
  }
}
SessionDetailPage.ɵfac = function SessionDetailPage_Factory(t) {
  return new (t || SessionDetailPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_providers_conference_data__WEBPACK_IMPORTED_MODULE_0__.ConferenceData), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_providers_user_data__WEBPACK_IMPORTED_MODULE_1__.UserData), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
};
SessionDetailPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: SessionDetailPage,
  selectors: [["page-session-detail"]],
  decls: 29,
  vars: 4,
  consts: [["slot", "start"], [3, "defaultHref"], ["slot", "end"], [3, "click"], ["slot", "icon-only", "name", "star-outline", 4, "ngIf"], ["slot", "icon-only", "name", "star", 4, "ngIf"], ["slot", "icon-only", "name", "share"], ["class", "ion-padding", 4, "ngIf"], ["button", "", 3, "click"], ["color", "primary"], ["slot", "end", "color", "primary", "size", "small", "name", "cloud-download"], ["slot", "icon-only", "name", "star-outline"], ["slot", "icon-only", "name", "star"], [1, "ion-padding"], [3, "class", 4, "ngFor", "ngForOf"], ["color", "medium"]],
  template: function SessionDetailPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-back-button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-buttons", 2)(5, "ion-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SessionDetailPage_Template_ion_button_click_5_listener() {
        return ctx.toggleFavorite();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SessionDetailPage_ion_icon_6_Template, 1, 0, "ion-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, SessionDetailPage_ion_icon_7_Template, 1, 0, "ion-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SessionDetailPage_Template_ion_button_click_8_listener() {
        return ctx.shareSession();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "ion-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, SessionDetailPage_div_11_Template, 10, 6, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-list")(13, "ion-item", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SessionDetailPage_Template_ion_item_click_13_listener() {
        return ctx.sessionClick("watch");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Watch");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ion-item", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SessionDetailPage_Template_ion_item_click_16_listener() {
        return ctx.sessionClick("add to calendar");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ion-label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Add to Calendar");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-item", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SessionDetailPage_Template_ion_item_click_19_listener() {
        return ctx.sessionClick("mark as unwatched");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "ion-label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Mark as Unwatched");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "ion-item", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SessionDetailPage_Template_ion_item_click_22_listener() {
        return ctx.sessionClick("download video");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ion-label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Download Video");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "ion-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "ion-item", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SessionDetailPage_Template_ion_item_click_26_listener() {
        return ctx.sessionClick("leave feedback");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "ion-label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Leave Feedback");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("defaultHref", ctx.defaultHref);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isFavorite);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isFavorite);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.session);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBackButtonDelegate],
  styles: [".session-track-ionic[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n\n.session-track-angular[_ngcontent-%COMP%] {\n  color: var(--ion-color-angular);\n}\n\n.session-track-communication[_ngcontent-%COMP%] {\n  color: var(--ion-color-communication);\n}\n\n.session-track-tooling[_ngcontent-%COMP%] {\n  color: var(--ion-color-tooling);\n}\n\n.session-track-services[_ngcontent-%COMP%] {\n  color: var(--ion-color-services);\n}\n\n.session-track-design[_ngcontent-%COMP%] {\n  color: var(--ion-color-design);\n}\n\n.session-track-workshop[_ngcontent-%COMP%] {\n  color: var(--ion-color-workshop);\n}\n\n.session-track-food[_ngcontent-%COMP%] {\n  color: var(--ion-color-food);\n}\n\n.session-track-documentation[_ngcontent-%COMP%] {\n  color: var(--ion-color-documentation);\n}\n\n.session-track-navigation[_ngcontent-%COMP%] {\n  color: var(--ion-color-navigation);\n}\n\n\n\n\n\n.show-favorite[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.icon-heart-empty[_ngcontent-%COMP%], .icon-heart[_ngcontent-%COMP%] {\n  --border-radius: 50%;\n  --padding-start: 0;\n  --padding-end: 0;\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  width: 48px;\n  height: 48px;\n  transition: transform 300ms ease;\n  font-size: 16px;\n}\n\n.icon-heart-empty[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n\n.icon-heart[_ngcontent-%COMP%] {\n  transform: scale(0);\n}\n\n.show-favorite[_ngcontent-%COMP%]   .icon-heart[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n\n.show-favorite[_ngcontent-%COMP%]   .icon-heart-empty[_ngcontent-%COMP%] {\n  transform: scale(0);\n}\n\nh1[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2Vzc2lvbi1kZXRhaWwvc2Vzc2lvbi1kZXRhaWwuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uL0JsZXNzaW5nJTIwS3VuYWthL0Rlc2t0b3AvbWluaW5nX2V4cG8vbWluaW5nLWV4cG8vc3JjL2FwcC9wYWdlcy9zZXNzaW9uLWRldGFpbC9zZXNzaW9uLWRldGFpbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7QUNDRjs7QURFQTtFQUNFLCtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQ0FBQTtBQ0NGOztBREVBO0VBQ0UsK0JBQUE7QUNDRjs7QURFQTtFQUNFLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQ0FBQTtBQ0NGOztBREVBO0VBQ0Usa0NBQUE7QUNDRjs7QURFQTs7RUFBQTtBQUlBO0VBQ0Usa0JBQUE7QUNBRjs7QURHQTs7RUFFRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQkFBQTtFQUVBLFFBQUE7RUFDQSxVQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSxnQ0FBQTtFQUVBLGVBQUE7QUNMRjs7QURRQTtFQUNFLG1CQUFBO0FDTEY7O0FEUUE7RUFDRSxtQkFBQTtBQ0xGOztBRFFBO0VBQ0UsbUJBQUE7QUNMRjs7QURRQTtFQUNFLG1CQUFBO0FDTEY7O0FEUUE7RUFDRSxTQUFBO0FDTEYiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Vzc2lvbi10cmFjay1pb25pYyB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuLnNlc3Npb24tdHJhY2stYW5ndWxhciB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1hbmd1bGFyKTtcclxufVxyXG5cclxuLnNlc3Npb24tdHJhY2stY29tbXVuaWNhdGlvbiB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb21tdW5pY2F0aW9uKTtcclxufVxyXG5cclxuLnNlc3Npb24tdHJhY2stdG9vbGluZyB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10b29saW5nKTtcclxufVxyXG5cclxuLnNlc3Npb24tdHJhY2stc2VydmljZXMge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2VydmljZXMpO1xyXG59XHJcblxyXG4uc2Vzc2lvbi10cmFjay1kZXNpZ24ge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGVzaWduKTtcclxufVxyXG5cclxuLnNlc3Npb24tdHJhY2std29ya3Nob3Age1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd29ya3Nob3ApO1xyXG59XHJcblxyXG4uc2Vzc2lvbi10cmFjay1mb29kIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWZvb2QpO1xyXG59XHJcblxyXG4uc2Vzc2lvbi10cmFjay1kb2N1bWVudGF0aW9uIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRvY3VtZW50YXRpb24pO1xyXG59XHJcblxyXG4uc2Vzc2lvbi10cmFjay1uYXZpZ2F0aW9uIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW5hdmlnYXRpb24pO1xyXG59XHJcblxyXG4vKiBGYXZvcml0ZSBJY29uXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG5cclxuLnNob3ctZmF2b3JpdGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmljb24taGVhcnQtZW1wdHksXHJcbi5pY29uLWhlYXJ0IHtcclxuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgLS1wYWRkaW5nLWVuZDogMDtcclxuXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICB0b3A6IDVweDtcclxuICByaWdodDogNXB4O1xyXG5cclxuICB3aWR0aDogNDhweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcblxyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlO1xyXG5cclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5pY29uLWhlYXJ0LWVtcHR5IHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG59XHJcblxyXG4uaWNvbi1oZWFydCB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxufVxyXG5cclxuLnNob3ctZmF2b3JpdGUgLmljb24taGVhcnQge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbn1cclxuXHJcbi5zaG93LWZhdm9yaXRlIC5pY29uLWhlYXJ0LWVtcHR5IHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgbWFyZ2luOiAwO1xyXG59IiwiLnNlc3Npb24tdHJhY2staW9uaWMge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uc2Vzc2lvbi10cmFjay1hbmd1bGFyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1hbmd1bGFyKTtcbn1cblxuLnNlc3Npb24tdHJhY2stY29tbXVuaWNhdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29tbXVuaWNhdGlvbik7XG59XG5cbi5zZXNzaW9uLXRyYWNrLXRvb2xpbmcge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRvb2xpbmcpO1xufVxuXG4uc2Vzc2lvbi10cmFjay1zZXJ2aWNlcyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2VydmljZXMpO1xufVxuXG4uc2Vzc2lvbi10cmFjay1kZXNpZ24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRlc2lnbik7XG59XG5cbi5zZXNzaW9uLXRyYWNrLXdvcmtzaG9wIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13b3Jrc2hvcCk7XG59XG5cbi5zZXNzaW9uLXRyYWNrLWZvb2Qge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWZvb2QpO1xufVxuXG4uc2Vzc2lvbi10cmFjay1kb2N1bWVudGF0aW9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kb2N1bWVudGF0aW9uKTtcbn1cblxuLnNlc3Npb24tdHJhY2stbmF2aWdhdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbmF2aWdhdGlvbik7XG59XG5cbi8qIEZhdm9yaXRlIEljb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbi5zaG93LWZhdm9yaXRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaWNvbi1oZWFydC1lbXB0eSxcbi5pY29uLWhlYXJ0IHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDVweDtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2U7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmljb24taGVhcnQtZW1wdHkge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4uaWNvbi1oZWFydCB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG5cbi5zaG93LWZhdm9yaXRlIC5pY29uLWhlYXJ0IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLnNob3ctZmF2b3JpdGUgLmljb24taGVhcnQtZW1wdHkge1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuXG5oMSB7XG4gIG1hcmdpbjogMDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 40394:
/*!***********************************************************************!*\
  !*** ./src/app/pages/speaker-detail/speaker-detail-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpeakerDetailPageRoutingModule: () => (/* binding */ SpeakerDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _speaker_detail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speaker-detail */ 31711);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '',
  component: _speaker_detail__WEBPACK_IMPORTED_MODULE_0__.SpeakerDetailPage
}];
class SpeakerDetailPageRoutingModule {}
SpeakerDetailPageRoutingModule.ɵfac = function SpeakerDetailPageRoutingModule_Factory(t) {
  return new (t || SpeakerDetailPageRoutingModule)();
};
SpeakerDetailPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: SpeakerDetailPageRoutingModule
});
SpeakerDetailPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SpeakerDetailPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 58569:
/*!***************************************************************!*\
  !*** ./src/app/pages/speaker-detail/speaker-detail.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpeakerDetailModule: () => (/* binding */ SpeakerDetailModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _speaker_detail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speaker-detail */ 31711);
/* harmony import */ var _speaker_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./speaker-detail-routing.module */ 40394);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 64210);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);





class SpeakerDetailModule {}
SpeakerDetailModule.ɵfac = function SpeakerDetailModule_Factory(t) {
  return new (t || SpeakerDetailModule)();
};
SpeakerDetailModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: SpeakerDetailModule
});
SpeakerDetailModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _speaker_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__.SpeakerDetailPageRoutingModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SpeakerDetailModule, {
    declarations: [_speaker_detail__WEBPACK_IMPORTED_MODULE_0__.SpeakerDetailPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _speaker_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__.SpeakerDetailPageRoutingModule]
  });
})();

/***/ }),

/***/ 31711:
/*!********************************************************!*\
  !*** ./src/app/pages/speaker-detail/speaker-detail.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpeakerDetailPage: () => (/* binding */ SpeakerDetailPage)
/* harmony export */ });
/* harmony import */ var C_Users_Blessing_Kunaka_Desktop_mining_expo_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/conference-data */ 27440);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 68418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 64210);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);











function SpeakerDetailPage_ion_buttons_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-buttons", 14)(1, "ion-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SpeakerDetailPage_ion_buttons_5_Template_ion_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.openContact(ctx_r1.speaker));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SpeakerDetailPage_ion_buttons_5_Template_ion_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.openSpeakerShare(ctx_r3.speaker));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ion-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
class SpeakerDetailPage {
  constructor(dataProvider, route, actionSheetCtrl, confData, inAppBrowser) {
    this.dataProvider = dataProvider;
    this.route = route;
    this.actionSheetCtrl = actionSheetCtrl;
    this.confData = confData;
    this.inAppBrowser = inAppBrowser;
  }
  ionViewWillEnter() {
    this.dataProvider.load().subscribe(data => {
      const speakerId = this.route.snapshot.paramMap.get('speakerId');
      if (data && data.speakers) {
        for (const speaker of data.speakers) {
          if (speaker && speaker.id === speakerId) {
            this.speaker = speaker;
            break;
          }
        }
      }
    });
  }
  openExternalUrl(url) {
    this.inAppBrowser.create(url, '_blank');
  }
  openSpeakerShare(speaker) {
    var _this = this;
    return (0,C_Users_Blessing_Kunaka_Desktop_mining_expo_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this.actionSheetCtrl.create({
        header: 'Share ' + speaker.name,
        buttons: [{
          text: 'Copy Link',
          handler: () => {
            console.log('Copy link clicked on https://twitter.com/' + speaker.twitter);
            if (window.cordova && window.cordova.plugins.clipboard) {
              window.cordova.plugins.clipboard.copy('https://twitter.com/' + speaker.twitter);
            }
          }
        }, {
          text: 'Share via ...'
        }, {
          text: 'Cancel',
          role: 'cancel'
        }]
      });
      yield actionSheet.present();
    })();
  }
  openContact(speaker) {
    var _this2 = this;
    return (0,C_Users_Blessing_Kunaka_Desktop_mining_expo_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const mode = 'ios'; // this.config.get('mode');
      const actionSheet = yield _this2.actionSheetCtrl.create({
        header: 'Contact ' + speaker.name,
        buttons: [{
          text: `Email ( ${speaker.email} )`,
          icon: mode !== 'ios' ? 'mail' : null,
          handler: () => {
            window.open('mailto:' + speaker.email);
          }
        }, {
          text: `Call ( ${speaker.phone} )`,
          icon: mode !== 'ios' ? 'call' : null,
          handler: () => {
            window.open('tel:' + speaker.phone);
          }
        }, {
          text: 'Cancel',
          role: 'cancel'
        }]
      });
      yield actionSheet.present();
    })();
  }
}
SpeakerDetailPage.ɵfac = function SpeakerDetailPage_Factory(t) {
  return new (t || SpeakerDetailPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_providers_conference_data__WEBPACK_IMPORTED_MODULE_1__.ConferenceData), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ActionSheetController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_providers_conference_data__WEBPACK_IMPORTED_MODULE_1__.ConferenceData), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__.InAppBrowser));
};
SpeakerDetailPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: SpeakerDetailPage,
  selectors: [["page-speaker-detail"]],
  decls: 26,
  vars: 5,
  consts: [[1, "speaker-detail"], [1, "ion-no-border"], ["slot", "start"], ["defaultHref", "/app/tabs/speakers"], ["slot", "end", 4, "ngIf"], [1, "speaker-background"], [3, "src", "alt"], [1, "ion-padding", "speaker-detail"], ["color", "twitter", "button", "", 3, "click"], ["name", "logo-twitter"], ["color", "dark", "button", "", 3, "click"], ["name", "logo-github"], ["color", "instagram", "button", "", 3, "click"], ["name", "logo-instagram"], ["slot", "end"], [3, "click"], ["slot", "icon-only", "ios", "call-outline", "md", "call-sharp"], ["slot", "icon-only", "ios", "share-outline", "md", "share-sharp"]],
  template: function SpeakerDetailPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-content", 0)(1, "ion-header", 1)(2, "ion-toolbar")(3, "ion-buttons", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ion-back-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SpeakerDetailPage_ion_buttons_5_Template, 5, 0, "ion-buttons", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7)(11, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ion-chip", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SpeakerDetailPage_Template_ion_chip_click_14_listener() {
        return ctx.openExternalUrl("https://twitter.com/" + ctx.speaker.twitter);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "ion-icon", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Twitter");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "ion-chip", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SpeakerDetailPage_Template_ion_chip_click_18_listener() {
        return ctx.openExternalUrl("https://github.com/ionic-team/ionic");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "ion-icon", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "GitHub");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "ion-chip", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SpeakerDetailPage_Template_ion_chip_click_22_listener() {
        return ctx.openExternalUrl("https://instagram.com/ionicframework");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "ion-icon", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Instagram");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.speaker);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.speaker == null ? null : ctx.speaker.profilePic, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", ctx.speaker == null ? null : ctx.speaker.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.speaker == null ? null : ctx.speaker.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.speaker == null ? null : ctx.speaker.about, " Say hello on social media!");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonChip, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBackButtonDelegate],
  styles: ["\n\n\n\nion-toolbar[_ngcontent-%COMP%] {\n  --background: transparent;\n  --color: white;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n}\n\nion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]   ion-back-button[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]   ion-menu-button[_ngcontent-%COMP%] {\n  --color: white;\n}\n\n.speaker-background[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: calc(250px + var(--ion-safe-area-top));\n  padding-top: var(--ion-safe-area-top);\n  background: center/cover url(\"/assets/img/speaker-background.png\") no-repeat;\n}\n\n.speaker-background[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70px;\n  margin-top: calc(-1 * var(--ion-safe-area-top));\n  border-radius: 50%;\n}\n\n.speaker-background[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  color: white;\n}\n\n.md[_ngcontent-%COMP%]   .speaker-background[_ngcontent-%COMP%] {\n  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 1px -2px, rgba(0, 0, 0, 0.14) 0 2px 2px 0, rgba(0, 0, 0, 0.12) 0 1px 5px 0;\n}\n\n.ios[_ngcontent-%COMP%]   .speaker-background[_ngcontent-%COMP%] {\n  box-shadow: rgba(0, 0, 0, 0.12) 0 4px 16px;\n}\n\n\n\n\n\n.speaker-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-right: 6px;\n  margin-left: 6px;\n}\n\n.speaker-detail[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  background: var(--ion-color-step-150, #d7d8da);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc3BlYWtlci1kZXRhaWwvc3BlYWtlci1kZXRhaWwuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uL0JsZXNzaW5nJTIwS3VuYWthL0Rlc2t0b3AvbWluaW5nX2V4cG8vbWluaW5nLWV4cG8vc3JjL2FwcC9wYWdlcy9zcGVha2VyLWRldGFpbC9zcGVha2VyLWRldGFpbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUFBO0FBSUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFFQSxrQkFBQTtFQUVBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtBQ0ZGOztBREtBOzs7RUFHRSxjQUFBO0FDRkY7O0FES0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFFQSxzQkFBQTtFQUVBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSw4Q0FBQTtFQUVBLHFDQUFBO0VBRUEsNEVBQUE7QUNQRjs7QURVQTtFQUNFLFdBQUE7RUFFQSwrQ0FBQTtFQUVBLGtCQUFBO0FDVEY7O0FEWUE7RUFDRSxrQkFBQTtFQUVBLFlBQUE7RUFFQSxZQUFBO0FDWEY7O0FEY0E7RUFDRSwrR0FBQTtBQ1hGOztBRGNBO0VBQ0UsMENBQUE7QUNYRjs7QURjQTs7RUFBQTtBQUlBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQ1pGOztBRGVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUVBLDhDQUFBO0FDYkYiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBTcGVha2VyIEJhY2tncm91bmRcclxuICovXHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAtLWNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbixcclxuaW9uLXRvb2xiYXIgaW9uLWJhY2stYnV0dG9uLFxyXG5pb24tdG9vbGJhciBpb24tbWVudS1idXR0b24ge1xyXG4gIC0tY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc3BlYWtlci1iYWNrZ3JvdW5kIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgaGVpZ2h0OiBjYWxjKDI1MHB4ICsgdmFyKC0taW9uLXNhZmUtYXJlYS10b3ApKTtcclxuXHJcbiAgcGFkZGluZy10b3A6IHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wKTtcclxuXHJcbiAgYmFja2dyb3VuZDogY2VudGVyIC8gY292ZXIgdXJsKFwiL2Fzc2V0cy9pbWcvc3BlYWtlci1iYWNrZ3JvdW5kLnBuZ1wiKSBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5zcGVha2VyLWJhY2tncm91bmQgaW1nIHtcclxuICB3aWR0aDogNzBweDtcclxuXHJcbiAgbWFyZ2luLXRvcDogY2FsYygtMSAqIHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wKSk7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLnNwZWFrZXItYmFja2dyb3VuZCBoMiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICBib3R0b206IDEwcHg7XHJcblxyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1kIC5zcGVha2VyLWJhY2tncm91bmQge1xyXG4gIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDIwJSkgMCAzcHggMXB4IC0ycHgsIHJnYigwIDAgMCAvIDE0JSkgMCAycHggMnB4IDAsIHJnYigwIDAgMCAvIDEyJSkgMCAxcHggNXB4IDA7XHJcbn1cclxuXHJcbi5pb3MgLnNwZWFrZXItYmFja2dyb3VuZCB7XHJcbiAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMTIlKSAwIDRweCAxNnB4O1xyXG59XHJcblxyXG4vKlxyXG4gKiBTcGVha2VyIERldGFpbHNcclxuICovXHJcblxyXG4uc3BlYWtlci1kZXRhaWwgcCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDZweDtcclxufVxyXG5cclxuLnNwZWFrZXItZGV0YWlsIGhyIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XHJcbn1cclxuIiwiLypcbiAqIFNwZWFrZXIgQmFja2dyb3VuZFxuICovXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbmlvbi10b29sYmFyIGlvbi1idXR0b24sXG5pb24tdG9vbGJhciBpb24tYmFjay1idXR0b24sXG5pb24tdG9vbGJhciBpb24tbWVudS1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnNwZWFrZXItYmFja2dyb3VuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogY2FsYygyNTBweCArIHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wKSk7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1pb24tc2FmZS1hcmVhLXRvcCk7XG4gIGJhY2tncm91bmQ6IGNlbnRlci9jb3ZlciB1cmwoXCIvYXNzZXRzL2ltZy9zcGVha2VyLWJhY2tncm91bmQucG5nXCIpIG5vLXJlcGVhdDtcbn1cblxuLnNwZWFrZXItYmFja2dyb3VuZCBpbWcge1xuICB3aWR0aDogNzBweDtcbiAgbWFyZ2luLXRvcDogY2FsYygtMSAqIHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wKSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnNwZWFrZXItYmFja2dyb3VuZCBoMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tZCAuc3BlYWtlci1iYWNrZ3JvdW5kIHtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDAgM3B4IDFweCAtMnB4LCByZ2JhKDAsIDAsIDAsIDAuMTQpIDAgMnB4IDJweCAwLCByZ2JhKDAsIDAsIDAsIDAuMTIpIDAgMXB4IDVweCAwO1xufVxuXG4uaW9zIC5zcGVha2VyLWJhY2tncm91bmQge1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTIpIDAgNHB4IDE2cHg7XG59XG5cbi8qXG4gKiBTcGVha2VyIERldGFpbHNcbiAqL1xuLnNwZWFrZXItZGV0YWlsIHAge1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbn1cblxuLnNwZWFrZXItZGV0YWlsIGhyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 68331:
/*!*******************************************************************!*\
  !*** ./src/app/pages/speaker-list/speaker-list-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpeakerListPageRoutingModule: () => (/* binding */ SpeakerListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _speaker_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speaker-list */ 59112);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '',
  component: _speaker_list__WEBPACK_IMPORTED_MODULE_0__.SpeakerListPage
}];
class SpeakerListPageRoutingModule {}
SpeakerListPageRoutingModule.ɵfac = function SpeakerListPageRoutingModule_Factory(t) {
  return new (t || SpeakerListPageRoutingModule)();
};
SpeakerListPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: SpeakerListPageRoutingModule
});
SpeakerListPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SpeakerListPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 21797:
/*!***********************************************************!*\
  !*** ./src/app/pages/speaker-list/speaker-list.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpeakerListModule: () => (/* binding */ SpeakerListModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 64210);
/* harmony import */ var _speaker_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speaker-list */ 59112);
/* harmony import */ var _speaker_list_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./speaker-list-routing.module */ 68331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);





class SpeakerListModule {}
SpeakerListModule.ɵfac = function SpeakerListModule_Factory(t) {
  return new (t || SpeakerListModule)();
};
SpeakerListModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: SpeakerListModule
});
SpeakerListModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _speaker_list_routing_module__WEBPACK_IMPORTED_MODULE_1__.SpeakerListPageRoutingModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SpeakerListModule, {
    declarations: [_speaker_list__WEBPACK_IMPORTED_MODULE_0__.SpeakerListPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _speaker_list_routing_module__WEBPACK_IMPORTED_MODULE_1__.SpeakerListPageRoutingModule]
  });
})();

/***/ }),

/***/ 59112:
/*!****************************************************!*\
  !*** ./src/app/pages/speaker-list/speaker-list.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpeakerListPage: () => (/* binding */ SpeakerListPage)
/* harmony export */ });
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../providers/conference-data */ 27440);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 64210);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);






function SpeakerListPage_ion_col_13_ion_item_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 12)(1, "ion-label")(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const session_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/app/tabs/speakers/session/", session_r3.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](session_r3.name);
  }
}
function SpeakerListPage_ion_col_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 6)(1, "ion-card", 7)(2, "ion-card-header")(3, "ion-item", 8)(4, "ion-avatar", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-label")(7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-card-content")(12, "ion-list", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SpeakerListPage_ion_col_13_ion_item_13_Template, 4, 2, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-item", 12)(15, "ion-label")(16, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const speaker_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/app/tabs/speakers/speaker-details/", speaker_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", speaker_r1.profilePic, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", speaker_r1.name + " profile picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](speaker_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](speaker_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", speaker_r1.sessions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/app/tabs/speakers/speaker-details/", speaker_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("About ", speaker_r1.name, "");
  }
}
class SpeakerListPage {
  constructor(confData) {
    this.confData = confData;
    this.speakers = [];
  }
  ionViewDidEnter() {
    this.confData.getSpeakers().subscribe(speakers => {
      this.speakers = speakers;
    });
  }
}
SpeakerListPage.ɵfac = function SpeakerListPage_Factory(t) {
  return new (t || SpeakerListPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_conference_data__WEBPACK_IMPORTED_MODULE_0__.ConferenceData));
};
SpeakerListPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SpeakerListPage,
  selectors: [["page-speaker-list"]],
  decls: 14,
  vars: 1,
  consts: [["slot", "start"], ["fullscreen", "true"], ["collapse", "condense"], ["size", "large"], ["fixed", ""], ["size", "12", "size-md", "6", 4, "ngFor", "ngForOf"], ["size", "12", "size-md", "6"], [1, "speaker-card"], ["detail", "false", "lines", "none", 1, "speaker-item", 3, "routerLink"], [3, "src", "alt"], ["lines", "none"], ["detail", "false", 3, "routerLink", 4, "ngFor", "ngForOf"], ["detail", "false", 3, "routerLink"]],
  template: function SpeakerListPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-menu-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Speakers");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content", 1)(7, "ion-header", 2)(8, "ion-toolbar")(9, "ion-title", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Speakers");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-grid", 4)(12, "ion-row");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SpeakerListPage_ion_col_13_Template, 18, 8, "ion-col", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.speakers);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
  styles: [".speaker-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n\n\n\n\nion-col[_ngcontent-%COMP%]:not(:last-of-type)   .speaker-card[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.speaker-card[_ngcontent-%COMP%]   .speaker-item[_ngcontent-%COMP%] {\n  --min-height: 85px;\n}\n\n.speaker-card[_ngcontent-%COMP%]   .speaker-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  letter-spacing: 0.02em;\n}\n\n.speaker-card[_ngcontent-%COMP%]   .speaker-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  letter-spacing: 0.02em;\n}\n\n.speaker-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.speaker-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  padding: 0;\n}\n\n.ios[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.md[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  padding: 0;\n  border-top: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc3BlYWtlci1saXN0L3NwZWFrZXItbGlzdC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vQmxlc3NpbmclMjBLdW5ha2EvRGVza3RvcC9taW5pbmdfZXhwby9taW5pbmctZXhwby9zcmMvYXBwL3BhZ2VzL3NwZWFrZXItbGlzdC9zcGVha2VyLWxpc3Quc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFFQSxzQkFBQTtBQ0FGOztBREdBOztFQUFBO0FBR0E7RUFDRSxnQkFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLHNCQUFBO0FDREY7O0FESUE7RUFDRSxlQUFBO0VBRUEsc0JBQUE7QUNGRjs7QURLQTtFQUNFLFVBQUE7QUNGRjs7QURLQTtFQUNFLGNBQUE7RUFFQSxVQUFBO0FDSEY7O0FETUE7RUFDRSxtQkFBQTtBQ0hGOztBRE1BO0VBQ0UsVUFBQTtFQUVBLHdEQUFBO0FDSkYiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BlYWtlci1jYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4vKiBEdWUgdG8gdGhlIGZhY3QgdGhlIGNhcmRzIGFyZSBpbnNpZGUgb2YgY29sdW1ucyB0aGUgbWFyZ2lucyBkb24ndCBvdmVybGFwXHJcbiAqIHByb3Blcmx5IHNvIHdlIHdhbnQgdG8gcmVtb3ZlIHRoZSBleHRyYSBtYXJnaW4gYmV0d2VlbiBjYXJkc1xyXG4gKi9cclxuaW9uLWNvbDpub3QoOmxhc3Qtb2YtdHlwZSkgLnNwZWFrZXItY2FyZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLnNwZWFrZXItY2FyZCAuc3BlYWtlci1pdGVtIHtcclxuICAtLW1pbi1oZWlnaHQ6IDg1cHg7XHJcbn1cclxuXHJcbi5zcGVha2VyLWNhcmQgLnNwZWFrZXItaXRlbSBoMiB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcblxyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbn1cclxuXHJcbi5zcGVha2VyLWNhcmQgLnNwZWFrZXItaXRlbSBwIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcblxyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbn1cclxuXHJcbi5zcGVha2VyLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uc3BlYWtlci1jYXJkIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG5cclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uaW9zIGlvbi1saXN0IHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ubWQgaW9uLWxpc3Qge1xyXG4gIHBhZGRpbmc6IDA7XHJcblxyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xyXG59IiwiLnNwZWFrZXItY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi8qIER1ZSB0byB0aGUgZmFjdCB0aGUgY2FyZHMgYXJlIGluc2lkZSBvZiBjb2x1bW5zIHRoZSBtYXJnaW5zIGRvbid0IG92ZXJsYXBcbiAqIHByb3Blcmx5IHNvIHdlIHdhbnQgdG8gcmVtb3ZlIHRoZSBleHRyYSBtYXJnaW4gYmV0d2VlbiBjYXJkc1xuICovXG5pb24tY29sOm5vdCg6bGFzdC1vZi10eXBlKSAuc3BlYWtlci1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnNwZWFrZXItY2FyZCAuc3BlYWtlci1pdGVtIHtcbiAgLS1taW4taGVpZ2h0OiA4NXB4O1xufVxuXG4uc3BlYWtlci1jYXJkIC5zcGVha2VyLWl0ZW0gaDIge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG59XG5cbi5zcGVha2VyLWNhcmQgLnNwZWFrZXItaXRlbSBwIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xufVxuXG4uc3BlYWtlci1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5zcGVha2VyLWNhcmQgaW9uLWNhcmQtY29udGVudCB7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uaW9zIGlvbi1saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm1kIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 21375:
/*!*************************************************************!*\
  !*** ./src/app/pages/tabs-page/tabs-page-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsPageRoutingModule: () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-page */ 16025);
/* harmony import */ var _schedule_schedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../schedule/schedule */ 51832);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);





const routes = [{
  path: 'tabs',
  component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
  children: [{
    path: 'schedule',
    children: [{
      path: '',
      component: _schedule_schedule__WEBPACK_IMPORTED_MODULE_1__.SchedulePage
    }, {
      path: 'session/:sessionId',
      loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../session-detail/session-detail.module */ 48554)).then(m => m.SessionDetailModule)
    }]
  }, {
    path: 'speakers',
    children: [{
      path: '',
      loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../speaker-list/speaker-list.module */ 21797)).then(m => m.SpeakerListModule)
    }, {
      path: 'session/:sessionId',
      loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../session-detail/session-detail.module */ 48554)).then(m => m.SessionDetailModule)
    }, {
      path: 'speaker-details/:speakerId',
      loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../speaker-detail/speaker-detail.module */ 58569)).then(m => m.SpeakerDetailModule)
    }]
  }, {
    path: 'map',
    children: [{
      path: '',
      loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../map/map.module */ 61307)).then(m => m.MapModule)
    }]
  }, {
    path: 'scanner',
    children: [{
      path: '',
      loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../scanner/scanner.module */ 9191)).then(m => m.ScannerModule)
    }]
  }, {
    path: 'about',
    children: [{
      path: '',
      loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../about/about.module */ 33542)).then(m => m.AboutModule)
    }]
  }, {
    path: '',
    redirectTo: '/app/tabs/schedule',
    pathMatch: 'full'
  }]
}];
class TabsPageRoutingModule {}
TabsPageRoutingModule.ɵfac = function TabsPageRoutingModule_Factory(t) {
  return new (t || TabsPageRoutingModule)();
};
TabsPageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: TabsPageRoutingModule
});
TabsPageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TabsPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 95595:
/*!*****************************************************!*\
  !*** ./src/app/pages/tabs-page/tabs-page.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsModule: () => (/* binding */ TabsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 64210);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-page */ 16025);
/* harmony import */ var _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs-page-routing.module */ 21375);
/* harmony import */ var _about_about_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../about/about.module */ 33542);
/* harmony import */ var _map_map_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../map/map.module */ 61307);
/* harmony import */ var _scanner_scanner_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scanner/scanner.module */ 9191);
/* harmony import */ var _schedule_schedule_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../schedule/schedule.module */ 83436);
/* harmony import */ var _session_detail_session_detail_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../session-detail/session-detail.module */ 48554);
/* harmony import */ var _speaker_detail_speaker_detail_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../speaker-detail/speaker-detail.module */ 58569);
/* harmony import */ var _speaker_list_speaker_list_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../speaker-list/speaker-list.module */ 21797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 61699);












class TabsModule {}
TabsModule.ɵfac = function TabsModule_Factory(t) {
  return new (t || TabsModule)();
};
TabsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: TabsModule
});
TabsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  imports: [_about_about_module__WEBPACK_IMPORTED_MODULE_2__.AboutModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule, _map_map_module__WEBPACK_IMPORTED_MODULE_3__.MapModule, _scanner_scanner_module__WEBPACK_IMPORTED_MODULE_4__.ScannerModule, _schedule_schedule_module__WEBPACK_IMPORTED_MODULE_5__.ScheduleModule, _session_detail_session_detail_module__WEBPACK_IMPORTED_MODULE_6__.SessionDetailModule, _speaker_detail_speaker_detail_module__WEBPACK_IMPORTED_MODULE_7__.SpeakerDetailModule, _speaker_list_speaker_list_module__WEBPACK_IMPORTED_MODULE_8__.SpeakerListModule, _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_1__.TabsPageRoutingModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](TabsModule, {
    declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage],
    imports: [_about_about_module__WEBPACK_IMPORTED_MODULE_2__.AboutModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule, _map_map_module__WEBPACK_IMPORTED_MODULE_3__.MapModule, _scanner_scanner_module__WEBPACK_IMPORTED_MODULE_4__.ScannerModule, _schedule_schedule_module__WEBPACK_IMPORTED_MODULE_5__.ScheduleModule, _session_detail_session_detail_module__WEBPACK_IMPORTED_MODULE_6__.SessionDetailModule, _speaker_detail_speaker_detail_module__WEBPACK_IMPORTED_MODULE_7__.SpeakerDetailModule, _speaker_list_speaker_list_module__WEBPACK_IMPORTED_MODULE_8__.SpeakerListModule, _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_1__.TabsPageRoutingModule]
  });
})();

/***/ }),

/***/ 16025:
/*!**********************************************!*\
  !*** ./src/app/pages/tabs-page/tabs-page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsPage: () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 64210);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);



class TabsPage {}
TabsPage.ɵfac = function TabsPage_Factory(t) {
  return new (t || TabsPage)();
};
TabsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TabsPage,
  selectors: [["app-tabs"]],
  decls: 23,
  vars: 0,
  consts: [["vertical", "bottom", "horizontal", "center", "translucent", "true"], ["routerLink", "/app/tabs/scanner"], ["name", "barcode-outline"], ["slot", "bottom"], ["tab", "schedule"], ["name", "calendar-number"], ["label", ""], ["tab", "speakers", 1, "speakers"], ["name", "people-circle"], ["height", "50", "viewBox", "0 0 100 50", "width", "100", "xmlns", "http://www.w3.org/2000/svg", 2, "border", "none"], ["d", "M100 0v50H0V0c.543 27.153 22.72 49 50 49S99.457 27.153 99.99 0h.01z", "fill", "red", "fill-rule", "evenodd"], ["tab", "map", 1, "map"], ["name", "compass"], ["tab", "about"], ["name", "information-circle"]],
  template: function TabsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-tabs")(1, "ion-fab", 0)(2, "ion-fab-button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-tab-bar", 3)(5, "ion-tab-button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ion-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Schedule");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-tab-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ion-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Speakers");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "svg", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-tab-button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "ion-icon", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Map");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-tab-button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "ion-icon", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "About");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonTabBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonTabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonTabs, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: ["ion-tabs[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  --background: white;\n  border-radius: 20px 20px 0 0;\n  --border: 0;\n}\nion-tabs[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%] {\n  --background: var(--ion-color-white);\n  --color: var(--ion-color-medium);\n  --color-selected: var(--ion-color-white);\n  font-size: 0.7rem;\n}\nion-tabs[_ngcontent-%COMP%]   ion-tab-bar[_ngcontent-%COMP%]   ion-tab-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\nion-tabs[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 78px;\n  margin-top: 16px;\n}\nion-tabs[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: transparent;\n}\nion-tabs[_ngcontent-%COMP%]   ion-tab-button.speakers[_ngcontent-%COMP%] {\n  margin-right: -1px;\n  margin-left: -2px;\n  border-top-right-radius: 20px;\n}\nion-tabs[_ngcontent-%COMP%]   ion-tab-button.map[_ngcontent-%COMP%] {\n  margin-left: -1px;\n  margin-right: -2px;\n  border-top-left-radius: 20px;\n}\nion-tabs[_ngcontent-%COMP%]   ion-fab[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%] {\n  --background: linear-gradient(to bottom, #fac644, #fac644, #fac644, #fac644, #fac644, #fac644, #fac644);\n}\nion-tabs[_ngcontent-%COMP%]   ion-fab[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdGFicy1wYWdlL3RhYnMtcGFnZS5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vQmxlc3NpbmclMjBLdW5ha2EvRGVza3RvcC9taW5pbmdfZXhwby9taW5pbmctZXhwby9zcmMvYXBwL3BhZ2VzL3RhYnMtcGFnZS90YWJzLXBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtBQ0ZSO0FER1E7RUFDSSxvQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtBQ0RaO0FERVk7RUFDSSxlQUFBO0FDQWhCO0FESUk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNGUjtBREdRO0VBQ0ksaUJBQUE7QUNEWjtBREtJO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FDSFI7QURLSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtBQ0hSO0FET1E7RUFDSSx1R0FBQTtBQ0xaO0FETVk7RUFDSSxlQUFBO0FDSmhCIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRhYnMge1xyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tQ3VzdG9tIFNlbWkgVHJhbnNwYXJlbnQgJiBSb3VuZGVkIFRhYnMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBpb24tdGFiLWJhciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTsgICAgICAgIFxyXG4gICAgICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcclxuICAgICAgICAtLWJvcmRlcjogMDtcclxuICAgICAgICBpb24tdGFiLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICAgICAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgICAgIC0tY29sb3Itc2VsZWN0ZWQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdmcge1xyXG4gICAgICAgIHdpZHRoOiA3OHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICAgICAgcGF0aCB7XHJcbiAgICAgICAgICAgIGZpbGw6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIGlvbi10YWItYnV0dG9uLnNwZWFrZXJzIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0ycHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgICB9XHJcbiAgICBpb24tdGFiLWJ1dHRvbi5tYXAge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogLTJweDtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpb24tZmFiIHtcclxuICAgICAgICBpb24tZmFiLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZhYzY0NCwgI2ZhYzY0NCwgI2ZhYzY0NCwgI2ZhYzY0NCwgI2ZhYzY0NCwgI2ZhYzY0NCwgI2ZhYzY0NCk7XHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9IiwiaW9uLXRhYnMgaW9uLXRhYi1iYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XG4gIC0tYm9yZGVyOiAwO1xufVxuaW9uLXRhYnMgaW9uLXRhYi1iYXIgaW9uLXRhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAtLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICBmb250LXNpemU6IDAuN3JlbTtcbn1cbmlvbi10YWJzIGlvbi10YWItYmFyIGlvbi10YWItYnV0dG9uIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuaW9uLXRhYnMgc3ZnIHtcbiAgd2lkdGg6IDc4cHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5pb24tdGFicyBzdmcgcGF0aCB7XG4gIGZpbGw6IHRyYW5zcGFyZW50O1xufVxuaW9uLXRhYnMgaW9uLXRhYi1idXR0b24uc3BlYWtlcnMge1xuICBtYXJnaW4tcmlnaHQ6IC0xcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMnB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbn1cbmlvbi10YWJzIGlvbi10YWItYnV0dG9uLm1hcCB7XG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICBtYXJnaW4tcmlnaHQ6IC0ycHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG59XG5pb24tdGFicyBpb24tZmFiIGlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmFjNjQ0LCAjZmFjNjQ0LCAjZmFjNjQ0LCAjZmFjNjQ0LCAjZmFjNjQ0LCAjZmFjNjQ0LCAjZmFjNjQ0KTtcbn1cbmlvbi10YWJzIGlvbi1mYWIgaW9uLWZhYi1idXR0b24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDJyZW07XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 38529:
/*!***********************************************************************************!*\
  !*** ./node_modules/@capacitor-community/barcode-scanner/dist/esm/definitions.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CameraDirection: () => (/* binding */ CameraDirection),
/* harmony export */   SupportedFormat: () => (/* binding */ SupportedFormat)
/* harmony export */ });
const _SupportedFormat = {
  // BEGIN 1D Product
  /**
   * Android only, UPC_A is part of EAN_13 according to Apple docs
   */
  UPC_A: 'UPC_A',
  UPC_E: 'UPC_E',
  /**
   * Android only
   */
  UPC_EAN_EXTENSION: 'UPC_EAN_EXTENSION',
  EAN_8: 'EAN_8',
  EAN_13: 'EAN_13',
  // END 1D Product
  // BEGIN 1D Industrial
  CODE_39: 'CODE_39',
  /**
   * iOS only
   */
  CODE_39_MOD_43: 'CODE_39_MOD_43',
  CODE_93: 'CODE_93',
  CODE_128: 'CODE_128',
  /**
   * Android only
   */
  CODABAR: 'CODABAR',
  ITF: 'ITF',
  /**
   * iOS only
   */
  ITF_14: 'ITF_14',
  // END 1D Industrial
  // BEGIN 2D
  AZTEC: 'AZTEC',
  DATA_MATRIX: 'DATA_MATRIX',
  /**
   * Android only
   */
  MAXICODE: 'MAXICODE',
  PDF_417: 'PDF_417',
  QR_CODE: 'QR_CODE',
  /**
   * Android only
   */
  RSS_14: 'RSS_14',
  /**
   * Android only
   */
  RSS_EXPANDED: 'RSS_EXPANDED'
  // END 2D
};

const SupportedFormat = _SupportedFormat;
const CameraDirection = {
  FRONT: 'front',
  BACK: 'back'
};

/***/ }),

/***/ 13610:
/*!*****************************************************************************!*\
  !*** ./node_modules/@capacitor-community/barcode-scanner/dist/esm/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BarcodeScanner: () => (/* binding */ BarcodeScanner),
/* harmony export */   CameraDirection: () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraDirection),
/* harmony export */   SupportedFormat: () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.SupportedFormat)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 78626);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 38529);

const BarcodeScanner = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('BarcodeScanner', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor-community_barcode-scanner_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 62665)).then(m => new m.BarcodeScannerWeb())
});



/***/ }),

/***/ 39078:
/*!*********************************************!*\
  !*** ./node_modules/dijkstrajs/dijkstra.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


/******************************************************************************
 * Created 2008-08-19.
 *
 * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
 *
 * Copyright (C) 2008
 *   Wyatt Baldwin <self@wyattbaldwin.com>
 *   All rights reserved
 *
 * Licensed under the MIT license.
 *
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *****************************************************************************/
var dijkstra = {
  single_source_shortest_paths: function (graph, s, d) {
    // Predecessor map for each node that has been encountered.
    // node ID => predecessor node ID
    var predecessors = {};

    // Costs of shortest paths from s to all nodes encountered.
    // node ID => cost
    var costs = {};
    costs[s] = 0;

    // Costs of shortest paths from s to all nodes encountered; differs from
    // `costs` in that it provides easy access to the node that currently has
    // the known shortest path from s.
    // XXX: Do we actually need both `costs` and `open`?
    var open = dijkstra.PriorityQueue.make();
    open.push(s, 0);
    var closest, u, v, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;
    while (!open.empty()) {
      // In the nodes remaining in graph that have a known cost from s,
      // find the node, u, that currently has the shortest path from s.
      closest = open.pop();
      u = closest.value;
      cost_of_s_to_u = closest.cost;

      // Get nodes adjacent to u...
      adjacent_nodes = graph[u] || {};

      // ...and explore the edges that connect u to those nodes, updating
      // the cost of the shortest paths to any or all of those nodes as
      // necessary. v is the node across the current edge from u.
      for (v in adjacent_nodes) {
        if (adjacent_nodes.hasOwnProperty(v)) {
          // Get the cost of the edge running from u to v.
          cost_of_e = adjacent_nodes[v];

          // Cost of s to u plus the cost of u to v across e--this is *a*
          // cost from s to v that may or may not be less than the current
          // known cost to v.
          cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;

          // If we haven't visited v yet OR if the current known cost from s to
          // v is greater than the new cost we just found (cost of s to u plus
          // cost of u to v across e), update v's cost in the cost list and
          // update v's predecessor in the predecessor list (it's now u).
          cost_of_s_to_v = costs[v];
          first_visit = typeof costs[v] === 'undefined';
          if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
            costs[v] = cost_of_s_to_u_plus_cost_of_e;
            open.push(v, cost_of_s_to_u_plus_cost_of_e);
            predecessors[v] = u;
          }
        }
      }
    }
    if (typeof d !== 'undefined' && typeof costs[d] === 'undefined') {
      var msg = ['Could not find a path from ', s, ' to ', d, '.'].join('');
      throw new Error(msg);
    }
    return predecessors;
  },
  extract_shortest_path_from_predecessor_list: function (predecessors, d) {
    var nodes = [];
    var u = d;
    var predecessor;
    while (u) {
      nodes.push(u);
      predecessor = predecessors[u];
      u = predecessors[u];
    }
    nodes.reverse();
    return nodes;
  },
  find_path: function (graph, s, d) {
    var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
    return dijkstra.extract_shortest_path_from_predecessor_list(predecessors, d);
  },
  /**
   * A very naive priority queue implementation.
   */
  PriorityQueue: {
    make: function (opts) {
      var T = dijkstra.PriorityQueue,
        t = {},
        key;
      opts = opts || {};
      for (key in T) {
        if (T.hasOwnProperty(key)) {
          t[key] = T[key];
        }
      }
      t.queue = [];
      t.sorter = opts.sorter || T.default_sorter;
      return t;
    },
    default_sorter: function (a, b) {
      return a.cost - b.cost;
    },
    /**
     * Add a new item to the queue and ensure the highest priority element
     * is at the front of the queue.
     */
    push: function (value, cost) {
      var item = {
        value: value,
        cost: cost
      };
      this.queue.push(item);
      this.queue.sort(this.sorter);
    },
    /**
     * Return the highest priority element in the queue.
     */
    pop: function () {
      return this.queue.shift();
    },
    empty: function () {
      return this.queue.length === 0;
    }
  }
};

// node.js module exports
if (true) {
  module.exports = dijkstra;
}

/***/ }),

/***/ 59007:
/*!*******************************************!*\
  !*** ./node_modules/encode-utf8/index.js ***!
  \*******************************************/
/***/ ((module) => {

"use strict";


module.exports = function encodeUtf8(input) {
  var result = [];
  var size = input.length;
  for (var index = 0; index < size; index++) {
    var point = input.charCodeAt(index);
    if (point >= 0xD800 && point <= 0xDBFF && size > index + 1) {
      var second = input.charCodeAt(index + 1);
      if (second >= 0xDC00 && second <= 0xDFFF) {
        // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        point = (point - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
        index += 1;
      }
    }

    // US-ASCII
    if (point < 0x80) {
      result.push(point);
      continue;
    }

    // 2-byte UTF-8
    if (point < 0x800) {
      result.push(point >> 6 | 192);
      result.push(point & 63 | 128);
      continue;
    }

    // 3-byte UTF-8
    if (point < 0xD800 || point >= 0xE000 && point < 0x10000) {
      result.push(point >> 12 | 224);
      result.push(point >> 6 & 63 | 128);
      result.push(point & 63 | 128);
      continue;
    }

    // 4-byte UTF-8
    if (point >= 0x10000 && point <= 0x10FFFF) {
      result.push(point >> 18 | 240);
      result.push(point >> 12 & 63 | 128);
      result.push(point >> 6 & 63 | 128);
      result.push(point & 63 | 128);
      continue;
    }

    // Invalid character
    result.push(0xEF, 0xBF, 0xBD);
  }
  return new Uint8Array(result).buffer;
};

/***/ }),

/***/ 6920:
/*!********************************************!*\
  !*** ./node_modules/qrcode/lib/browser.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const canPromise = __webpack_require__(/*! ./can-promise */ 80694);
const QRCode = __webpack_require__(/*! ./core/qrcode */ 8288);
const CanvasRenderer = __webpack_require__(/*! ./renderer/canvas */ 73754);
const SvgRenderer = __webpack_require__(/*! ./renderer/svg-tag.js */ 25441);
function renderCanvas(renderFunc, canvas, text, opts, cb) {
  const args = [].slice.call(arguments, 1);
  const argsNum = args.length;
  const isLastArgCb = typeof args[argsNum - 1] === 'function';
  if (!isLastArgCb && !canPromise()) {
    throw new Error('Callback required as last argument');
  }
  if (isLastArgCb) {
    if (argsNum < 2) {
      throw new Error('Too few arguments provided');
    }
    if (argsNum === 2) {
      cb = text;
      text = canvas;
      canvas = opts = undefined;
    } else if (argsNum === 3) {
      if (canvas.getContext && typeof cb === 'undefined') {
        cb = opts;
        opts = undefined;
      } else {
        cb = opts;
        opts = text;
        text = canvas;
        canvas = undefined;
      }
    }
  } else {
    if (argsNum < 1) {
      throw new Error('Too few arguments provided');
    }
    if (argsNum === 1) {
      text = canvas;
      canvas = opts = undefined;
    } else if (argsNum === 2 && !canvas.getContext) {
      opts = text;
      text = canvas;
      canvas = undefined;
    }
    return new Promise(function (resolve, reject) {
      try {
        const data = QRCode.create(text, opts);
        resolve(renderFunc(data, canvas, opts));
      } catch (e) {
        reject(e);
      }
    });
  }
  try {
    const data = QRCode.create(text, opts);
    cb(null, renderFunc(data, canvas, opts));
  } catch (e) {
    cb(e);
  }
}
exports.create = QRCode.create;
exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);

// only svg for now.
exports.toString = renderCanvas.bind(null, function (data, _, opts) {
  return SvgRenderer.render(data, opts);
});

/***/ }),

/***/ 80694:
/*!************************************************!*\
  !*** ./node_modules/qrcode/lib/can-promise.js ***!
  \************************************************/
/***/ ((module) => {

// can-promise has a crash in some versions of react native that dont have
// standard global objects
// https://github.com/soldair/node-qrcode/issues/157

module.exports = function () {
  return typeof Promise === 'function' && Promise.prototype && Promise.prototype.then;
};

/***/ }),

/***/ 72870:
/*!***********************************************************!*\
  !*** ./node_modules/qrcode/lib/core/alignment-pattern.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * Alignment pattern are fixed reference pattern in defined positions
 * in a matrix symbology, which enables the decode software to re-synchronise
 * the coordinate mapping of the image modules in the event of moderate amounts
 * of distortion of the image.
 *
 * Alignment patterns are present only in QR Code symbols of version 2 or larger
 * and their number depends on the symbol version.
 */

const getSymbolSize = (__webpack_require__(/*! ./utils */ 57508).getSymbolSize);

/**
 * Calculate the row/column coordinates of the center module of each alignment pattern
 * for the specified QR Code version.
 *
 * The alignment patterns are positioned symmetrically on either side of the diagonal
 * running from the top left corner of the symbol to the bottom right corner.
 *
 * Since positions are simmetrical only half of the coordinates are returned.
 * Each item of the array will represent in turn the x and y coordinate.
 * @see {@link getPositions}
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinate
 */
exports.getRowColCoords = function getRowColCoords(version) {
  if (version === 1) return [];
  const posCount = Math.floor(version / 7) + 2;
  const size = getSymbolSize(version);
  const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
  const positions = [size - 7]; // Last coord is always (size - 7)

  for (let i = 1; i < posCount - 1; i++) {
    positions[i] = positions[i - 1] - intervals;
  }
  positions.push(6); // First coord is always 6

  return positions.reverse();
};

/**
 * Returns an array containing the positions of each alignment pattern.
 * Each array's element represent the center point of the pattern as (x, y) coordinates
 *
 * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
 * and filtering out the items that overlaps with finder pattern
 *
 * @example
 * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
 * The alignment patterns, therefore, are to be centered on (row, column)
 * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
 * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
 * and are not therefore used for alignment patterns.
 *
 * let pos = getPositions(7)
 * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
exports.getPositions = function getPositions(version) {
  const coords = [];
  const pos = exports.getRowColCoords(version);
  const posLength = pos.length;
  for (let i = 0; i < posLength; i++) {
    for (let j = 0; j < posLength; j++) {
      // Skip if position is occupied by finder patterns
      if (i === 0 && j === 0 ||
      // top-left
      i === 0 && j === posLength - 1 ||
      // bottom-left
      i === posLength - 1 && j === 0) {
        // top-right
        continue;
      }
      coords.push([pos[i], pos[j]]);
    }
  }
  return coords;
};

/***/ }),

/***/ 74036:
/*!***********************************************************!*\
  !*** ./node_modules/qrcode/lib/core/alphanumeric-data.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Mode = __webpack_require__(/*! ./mode */ 21353);

/**
 * Array of characters available in alphanumeric mode
 *
 * As per QR Code specification, to each character
 * is assigned a value from 0 to 44 which in this case coincides
 * with the array index
 *
 * @type {Array}
 */
const ALPHA_NUM_CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' ', '$', '%', '*', '+', '-', '.', '/', ':'];
function AlphanumericData(data) {
  this.mode = Mode.ALPHANUMERIC;
  this.data = data;
}
AlphanumericData.getBitsLength = function getBitsLength(length) {
  return 11 * Math.floor(length / 2) + 6 * (length % 2);
};
AlphanumericData.prototype.getLength = function getLength() {
  return this.data.length;
};
AlphanumericData.prototype.getBitsLength = function getBitsLength() {
  return AlphanumericData.getBitsLength(this.data.length);
};
AlphanumericData.prototype.write = function write(bitBuffer) {
  let i;

  // Input data characters are divided into groups of two characters
  // and encoded as 11-bit binary codes.
  for (i = 0; i + 2 <= this.data.length; i += 2) {
    // The character value of the first character is multiplied by 45
    let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45;

    // The character value of the second digit is added to the product
    value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]);

    // The sum is then stored as 11-bit binary number
    bitBuffer.put(value, 11);
  }

  // If the number of input data characters is not a multiple of two,
  // the character value of the final character is encoded as a 6-bit binary number.
  if (this.data.length % 2) {
    bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
  }
};
module.exports = AlphanumericData;

/***/ }),

/***/ 5166:
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/bit-buffer.js ***!
  \****************************************************/
/***/ ((module) => {

function BitBuffer() {
  this.buffer = [];
  this.length = 0;
}
BitBuffer.prototype = {
  get: function (index) {
    const bufIndex = Math.floor(index / 8);
    return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
  },
  put: function (num, length) {
    for (let i = 0; i < length; i++) {
      this.putBit((num >>> length - i - 1 & 1) === 1);
    }
  },
  getLengthInBits: function () {
    return this.length;
  },
  putBit: function (bit) {
    const bufIndex = Math.floor(this.length / 8);
    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0);
    }
    if (bit) {
      this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
    }
    this.length++;
  }
};
module.exports = BitBuffer;

/***/ }),

/***/ 69674:
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/bit-matrix.js ***!
  \****************************************************/
/***/ ((module) => {

/**
 * Helper class to handle QR Code symbol modules
 *
 * @param {Number} size Symbol size
 */
function BitMatrix(size) {
  if (!size || size < 1) {
    throw new Error('BitMatrix size must be defined and greater than 0');
  }
  this.size = size;
  this.data = new Uint8Array(size * size);
  this.reservedBit = new Uint8Array(size * size);
}

/**
 * Set bit value at specified location
 * If reserved flag is set, this bit will be ignored during masking process
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 * @param {Boolean} reserved
 */
BitMatrix.prototype.set = function (row, col, value, reserved) {
  const index = row * this.size + col;
  this.data[index] = value;
  if (reserved) this.reservedBit[index] = true;
};

/**
 * Returns bit value at specified location
 *
 * @param  {Number}  row
 * @param  {Number}  col
 * @return {Boolean}
 */
BitMatrix.prototype.get = function (row, col) {
  return this.data[row * this.size + col];
};

/**
 * Applies xor operator at specified location
 * (used during masking process)
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 */
BitMatrix.prototype.xor = function (row, col, value) {
  this.data[row * this.size + col] ^= value;
};

/**
 * Check if bit at specified location is reserved
 *
 * @param {Number}   row
 * @param {Number}   col
 * @return {Boolean}
 */
BitMatrix.prototype.isReserved = function (row, col) {
  return this.reservedBit[row * this.size + col];
};
module.exports = BitMatrix;

/***/ }),

/***/ 98618:
/*!***************************************************!*\
  !*** ./node_modules/qrcode/lib/core/byte-data.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const encodeUtf8 = __webpack_require__(/*! encode-utf8 */ 59007);
const Mode = __webpack_require__(/*! ./mode */ 21353);
function ByteData(data) {
  this.mode = Mode.BYTE;
  if (typeof data === 'string') {
    data = encodeUtf8(data);
  }
  this.data = new Uint8Array(data);
}
ByteData.getBitsLength = function getBitsLength(length) {
  return length * 8;
};
ByteData.prototype.getLength = function getLength() {
  return this.data.length;
};
ByteData.prototype.getBitsLength = function getBitsLength() {
  return ByteData.getBitsLength(this.data.length);
};
ByteData.prototype.write = function (bitBuffer) {
  for (let i = 0, l = this.data.length; i < l; i++) {
    bitBuffer.put(this.data[i], 8);
  }
};
module.exports = ByteData;

/***/ }),

/***/ 76172:
/*!***************************************************************!*\
  !*** ./node_modules/qrcode/lib/core/error-correction-code.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const ECLevel = __webpack_require__(/*! ./error-correction-level */ 59159);
const EC_BLOCKS_TABLE = [
// L  M  Q  H
1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81];
const EC_CODEWORDS_TABLE = [
// L  M  Q  H
7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];

/**
 * Returns the number of error correction block that the QR Code should contain
 * for the specified version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction blocks
 */
exports.getBlocksCount = function getBlocksCount(version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel.L:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 0];
    case ECLevel.M:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 1];
    case ECLevel.Q:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 2];
    case ECLevel.H:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 3];
    default:
      return undefined;
  }
};

/**
 * Returns the number of error correction codewords to use for the specified
 * version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction codewords
 */
exports.getTotalCodewordsCount = function getTotalCodewordsCount(version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel.L:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0];
    case ECLevel.M:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1];
    case ECLevel.Q:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2];
    case ECLevel.H:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3];
    default:
      return undefined;
  }
};

/***/ }),

/***/ 59159:
/*!****************************************************************!*\
  !*** ./node_modules/qrcode/lib/core/error-correction-level.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.L = {
  bit: 1
};
exports.M = {
  bit: 0
};
exports.Q = {
  bit: 3
};
exports.H = {
  bit: 2
};
function fromString(string) {
  if (typeof string !== 'string') {
    throw new Error('Param is not a string');
  }
  const lcStr = string.toLowerCase();
  switch (lcStr) {
    case 'l':
    case 'low':
      return exports.L;
    case 'm':
    case 'medium':
      return exports.M;
    case 'q':
    case 'quartile':
      return exports.Q;
    case 'h':
    case 'high':
      return exports.H;
    default:
      throw new Error('Unknown EC Level: ' + string);
  }
}
exports.isValid = function isValid(level) {
  return level && typeof level.bit !== 'undefined' && level.bit >= 0 && level.bit < 4;
};
exports.from = function from(value, defaultValue) {
  if (exports.isValid(value)) {
    return value;
  }
  try {
    return fromString(value);
  } catch (e) {
    return defaultValue;
  }
};

/***/ }),

/***/ 18980:
/*!********************************************************!*\
  !*** ./node_modules/qrcode/lib/core/finder-pattern.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const getSymbolSize = (__webpack_require__(/*! ./utils */ 57508).getSymbolSize);
const FINDER_PATTERN_SIZE = 7;

/**
 * Returns an array containing the positions of each finder pattern.
 * Each array's element represent the top-left point of the pattern as (x, y) coordinates
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
exports.getPositions = function getPositions(version) {
  const size = getSymbolSize(version);
  return [
  // top-left
  [0, 0],
  // top-right
  [size - FINDER_PATTERN_SIZE, 0],
  // bottom-left
  [0, size - FINDER_PATTERN_SIZE]];
};

/***/ }),

/***/ 96680:
/*!*****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/format-info.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(/*! ./utils */ 57508);
const G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
const G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
const G15_BCH = Utils.getBCHDigit(G15);

/**
 * Returns format information with relative error correction bits
 *
 * The format information is a 15-bit sequence containing 5 data bits,
 * with 10 error correction bits calculated using the (15, 5) BCH code.
 *
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Number} mask                 Mask pattern
 * @return {Number}                      Encoded format information bits
 */
exports.getEncodedBits = function getEncodedBits(errorCorrectionLevel, mask) {
  const data = errorCorrectionLevel.bit << 3 | mask;
  let d = data << 10;
  while (Utils.getBCHDigit(d) - G15_BCH >= 0) {
    d ^= G15 << Utils.getBCHDigit(d) - G15_BCH;
  }

  // xor final data with mask pattern in order to ensure that
  // no combination of Error Correction Level and data mask pattern
  // will result in an all-zero data string
  return (data << 10 | d) ^ G15_MASK;
};

/***/ }),

/***/ 19148:
/*!******************************************************!*\
  !*** ./node_modules/qrcode/lib/core/galois-field.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

const EXP_TABLE = new Uint8Array(512);
const LOG_TABLE = new Uint8Array(256)
/**
 * Precompute the log and anti-log tables for faster computation later
 *
 * For each possible value in the galois field 2^8, we will pre-compute
 * the logarithm and anti-logarithm (exponential) of this value
 *
 * ref {@link https://en.wikiversity.org/wiki/Reed%E2%80%93Solomon_codes_for_coders#Introduction_to_mathematical_fields}
 */;
(function initTables() {
  let x = 1;
  for (let i = 0; i < 255; i++) {
    EXP_TABLE[i] = x;
    LOG_TABLE[x] = i;
    x <<= 1; // multiply by 2

    // The QR code specification says to use byte-wise modulo 100011101 arithmetic.
    // This means that when a number is 256 or larger, it should be XORed with 0x11D.
    if (x & 0x100) {
      // similar to x >= 256, but a lot faster (because 0x100 == 256)
      x ^= 0x11D;
    }
  }

  // Optimization: double the size of the anti-log table so that we don't need to mod 255 to
  // stay inside the bounds (because we will mainly use this table for the multiplication of
  // two GF numbers, no more).
  // @see {@link mul}
  for (let i = 255; i < 512; i++) {
    EXP_TABLE[i] = EXP_TABLE[i - 255];
  }
})();

/**
 * Returns log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
exports.log = function log(n) {
  if (n < 1) throw new Error('log(' + n + ')');
  return LOG_TABLE[n];
};

/**
 * Returns anti-log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
exports.exp = function exp(n) {
  return EXP_TABLE[n];
};

/**
 * Multiplies two number inside Galois Field
 *
 * @param  {Number} x
 * @param  {Number} y
 * @return {Number}
 */
exports.mul = function mul(x, y) {
  if (x === 0 || y === 0) return 0;

  // should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized
  // @see {@link initTables}
  return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]];
};

/***/ }),

/***/ 11429:
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/kanji-data.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Mode = __webpack_require__(/*! ./mode */ 21353);
const Utils = __webpack_require__(/*! ./utils */ 57508);
function KanjiData(data) {
  this.mode = Mode.KANJI;
  this.data = data;
}
KanjiData.getBitsLength = function getBitsLength(length) {
  return length * 13;
};
KanjiData.prototype.getLength = function getLength() {
  return this.data.length;
};
KanjiData.prototype.getBitsLength = function getBitsLength() {
  return KanjiData.getBitsLength(this.data.length);
};
KanjiData.prototype.write = function (bitBuffer) {
  let i;

  // In the Shift JIS system, Kanji characters are represented by a two byte combination.
  // These byte values are shifted from the JIS X 0208 values.
  // JIS X 0208 gives details of the shift coded representation.
  for (i = 0; i < this.data.length; i++) {
    let value = Utils.toSJIS(this.data[i]);

    // For characters with Shift JIS values from 0x8140 to 0x9FFC:
    if (value >= 0x8140 && value <= 0x9FFC) {
      // Subtract 0x8140 from Shift JIS value
      value -= 0x8140;

      // For characters with Shift JIS values from 0xE040 to 0xEBBF
    } else if (value >= 0xE040 && value <= 0xEBBF) {
      // Subtract 0xC140 from Shift JIS value
      value -= 0xC140;
    } else {
      throw new Error('Invalid SJIS character: ' + this.data[i] + '\n' + 'Make sure your charset is UTF-8');
    }

    // Multiply most significant byte of result by 0xC0
    // and add least significant byte to product
    value = (value >>> 8 & 0xff) * 0xC0 + (value & 0xff);

    // Convert result to a 13-bit binary string
    bitBuffer.put(value, 13);
  }
};
module.exports = KanjiData;

/***/ }),

/***/ 2103:
/*!******************************************************!*\
  !*** ./node_modules/qrcode/lib/core/mask-pattern.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

/**
 * Data mask pattern reference
 * @type {Object}
 */
exports.Patterns = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7
};

/**
 * Weighted penalty scores for the undesirable features
 * @type {Object}
 */
const PenaltyScores = {
  N1: 3,
  N2: 3,
  N3: 40,
  N4: 10
};

/**
 * Check if mask pattern value is valid
 *
 * @param  {Number}  mask    Mask pattern
 * @return {Boolean}         true if valid, false otherwise
 */
exports.isValid = function isValid(mask) {
  return mask != null && mask !== '' && !isNaN(mask) && mask >= 0 && mask <= 7;
};

/**
 * Returns mask pattern from a value.
 * If value is not valid, returns undefined
 *
 * @param  {Number|String} value        Mask pattern value
 * @return {Number}                     Valid mask pattern or undefined
 */
exports.from = function from(value) {
  return exports.isValid(value) ? parseInt(value, 10) : undefined;
};

/**
* Find adjacent modules in row/column with the same color
* and assign a penalty value.
*
* Points: N1 + i
* i is the amount by which the number of adjacent modules of the same color exceeds 5
*/
exports.getPenaltyN1 = function getPenaltyN1(data) {
  const size = data.size;
  let points = 0;
  let sameCountCol = 0;
  let sameCountRow = 0;
  let lastCol = null;
  let lastRow = null;
  for (let row = 0; row < size; row++) {
    sameCountCol = sameCountRow = 0;
    lastCol = lastRow = null;
    for (let col = 0; col < size; col++) {
      let module = data.get(row, col);
      if (module === lastCol) {
        sameCountCol++;
      } else {
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
        lastCol = module;
        sameCountCol = 1;
      }
      module = data.get(col, row);
      if (module === lastRow) {
        sameCountRow++;
      } else {
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
        lastRow = module;
        sameCountRow = 1;
      }
    }
    if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
    if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
  }
  return points;
};

/**
 * Find 2x2 blocks with the same color and assign a penalty value
 *
 * Points: N2 * (m - 1) * (n - 1)
 */
exports.getPenaltyN2 = function getPenaltyN2(data) {
  const size = data.size;
  let points = 0;
  for (let row = 0; row < size - 1; row++) {
    for (let col = 0; col < size - 1; col++) {
      const last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
      if (last === 4 || last === 0) points++;
    }
  }
  return points * PenaltyScores.N2;
};

/**
 * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
 * preceded or followed by light area 4 modules wide
 *
 * Points: N3 * number of pattern found
 */
exports.getPenaltyN3 = function getPenaltyN3(data) {
  const size = data.size;
  let points = 0;
  let bitsCol = 0;
  let bitsRow = 0;
  for (let row = 0; row < size; row++) {
    bitsCol = bitsRow = 0;
    for (let col = 0; col < size; col++) {
      bitsCol = bitsCol << 1 & 0x7FF | data.get(row, col);
      if (col >= 10 && (bitsCol === 0x5D0 || bitsCol === 0x05D)) points++;
      bitsRow = bitsRow << 1 & 0x7FF | data.get(col, row);
      if (col >= 10 && (bitsRow === 0x5D0 || bitsRow === 0x05D)) points++;
    }
  }
  return points * PenaltyScores.N3;
};

/**
 * Calculate proportion of dark modules in entire symbol
 *
 * Points: N4 * k
 *
 * k is the rating of the deviation of the proportion of dark modules
 * in the symbol from 50% in steps of 5%
 */
exports.getPenaltyN4 = function getPenaltyN4(data) {
  let darkCount = 0;
  const modulesCount = data.data.length;
  for (let i = 0; i < modulesCount; i++) darkCount += data.data[i];
  const k = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
  return k * PenaltyScores.N4;
};

/**
 * Return mask value at given position
 *
 * @param  {Number} maskPattern Pattern reference value
 * @param  {Number} i           Row
 * @param  {Number} j           Column
 * @return {Boolean}            Mask value
 */
function getMaskAt(maskPattern, i, j) {
  switch (maskPattern) {
    case exports.Patterns.PATTERN000:
      return (i + j) % 2 === 0;
    case exports.Patterns.PATTERN001:
      return i % 2 === 0;
    case exports.Patterns.PATTERN010:
      return j % 3 === 0;
    case exports.Patterns.PATTERN011:
      return (i + j) % 3 === 0;
    case exports.Patterns.PATTERN100:
      return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;
    case exports.Patterns.PATTERN101:
      return i * j % 2 + i * j % 3 === 0;
    case exports.Patterns.PATTERN110:
      return (i * j % 2 + i * j % 3) % 2 === 0;
    case exports.Patterns.PATTERN111:
      return (i * j % 3 + (i + j) % 2) % 2 === 0;
    default:
      throw new Error('bad maskPattern:' + maskPattern);
  }
}

/**
 * Apply a mask pattern to a BitMatrix
 *
 * @param  {Number}    pattern Pattern reference number
 * @param  {BitMatrix} data    BitMatrix data
 */
exports.applyMask = function applyMask(pattern, data) {
  const size = data.size;
  for (let col = 0; col < size; col++) {
    for (let row = 0; row < size; row++) {
      if (data.isReserved(row, col)) continue;
      data.xor(row, col, getMaskAt(pattern, row, col));
    }
  }
};

/**
 * Returns the best mask pattern for data
 *
 * @param  {BitMatrix} data
 * @return {Number} Mask pattern reference number
 */
exports.getBestMask = function getBestMask(data, setupFormatFunc) {
  const numPatterns = Object.keys(exports.Patterns).length;
  let bestPattern = 0;
  let lowerPenalty = Infinity;
  for (let p = 0; p < numPatterns; p++) {
    setupFormatFunc(p);
    exports.applyMask(p, data);

    // Calculate penalty
    const penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data);

    // Undo previously applied mask
    exports.applyMask(p, data);
    if (penalty < lowerPenalty) {
      lowerPenalty = penalty;
      bestPattern = p;
    }
  }
  return bestPattern;
};

/***/ }),

/***/ 21353:
/*!**********************************************!*\
  !*** ./node_modules/qrcode/lib/core/mode.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const VersionCheck = __webpack_require__(/*! ./version-check */ 49674);
const Regex = __webpack_require__(/*! ./regex */ 63455);

/**
 * Numeric mode encodes data from the decimal digit set (0 - 9)
 * (byte values 30HEX to 39HEX).
 * Normally, 3 data characters are represented by 10 bits.
 *
 * @type {Object}
 */
exports.NUMERIC = {
  id: 'Numeric',
  bit: 1 << 0,
  ccBits: [10, 12, 14]
};

/**
 * Alphanumeric mode encodes data from a set of 45 characters,
 * i.e. 10 numeric digits (0 - 9),
 *      26 alphabetic characters (A - Z),
 *   and 9 symbols (SP, $, %, *, +, -, ., /, :).
 * Normally, two input characters are represented by 11 bits.
 *
 * @type {Object}
 */
exports.ALPHANUMERIC = {
  id: 'Alphanumeric',
  bit: 1 << 1,
  ccBits: [9, 11, 13]
};

/**
 * In byte mode, data is encoded at 8 bits per character.
 *
 * @type {Object}
 */
exports.BYTE = {
  id: 'Byte',
  bit: 1 << 2,
  ccBits: [8, 16, 16]
};

/**
 * The Kanji mode efficiently encodes Kanji characters in accordance with
 * the Shift JIS system based on JIS X 0208.
 * The Shift JIS values are shifted from the JIS X 0208 values.
 * JIS X 0208 gives details of the shift coded representation.
 * Each two-byte character value is compacted to a 13-bit binary codeword.
 *
 * @type {Object}
 */
exports.KANJI = {
  id: 'Kanji',
  bit: 1 << 3,
  ccBits: [8, 10, 12]
};

/**
 * Mixed mode will contain a sequences of data in a combination of any of
 * the modes described above
 *
 * @type {Object}
 */
exports.MIXED = {
  bit: -1
};

/**
 * Returns the number of bits needed to store the data length
 * according to QR Code specifications.
 *
 * @param  {Mode}   mode    Data mode
 * @param  {Number} version QR Code version
 * @return {Number}         Number of bits
 */
exports.getCharCountIndicator = function getCharCountIndicator(mode, version) {
  if (!mode.ccBits) throw new Error('Invalid mode: ' + mode);
  if (!VersionCheck.isValid(version)) {
    throw new Error('Invalid version: ' + version);
  }
  if (version >= 1 && version < 10) return mode.ccBits[0];else if (version < 27) return mode.ccBits[1];
  return mode.ccBits[2];
};

/**
 * Returns the most efficient mode to store the specified data
 *
 * @param  {String} dataStr Input data string
 * @return {Mode}           Best mode
 */
exports.getBestModeForData = function getBestModeForData(dataStr) {
  if (Regex.testNumeric(dataStr)) return exports.NUMERIC;else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC;else if (Regex.testKanji(dataStr)) return exports.KANJI;else return exports.BYTE;
};

/**
 * Return mode name as string
 *
 * @param {Mode} mode Mode object
 * @returns {String}  Mode name
 */
exports.toString = function toString(mode) {
  if (mode && mode.id) return mode.id;
  throw new Error('Invalid mode');
};

/**
 * Check if input param is a valid mode object
 *
 * @param   {Mode}    mode Mode object
 * @returns {Boolean} True if valid mode, false otherwise
 */
exports.isValid = function isValid(mode) {
  return mode && mode.bit && mode.ccBits;
};

/**
 * Get mode object from its name
 *
 * @param   {String} string Mode name
 * @returns {Mode}          Mode object
 */
function fromString(string) {
  if (typeof string !== 'string') {
    throw new Error('Param is not a string');
  }
  const lcStr = string.toLowerCase();
  switch (lcStr) {
    case 'numeric':
      return exports.NUMERIC;
    case 'alphanumeric':
      return exports.ALPHANUMERIC;
    case 'kanji':
      return exports.KANJI;
    case 'byte':
      return exports.BYTE;
    default:
      throw new Error('Unknown mode: ' + string);
  }
}

/**
 * Returns mode from a value.
 * If value is not a valid mode, returns defaultValue
 *
 * @param  {Mode|String} value        Encoding mode
 * @param  {Mode}        defaultValue Fallback value
 * @return {Mode}                     Encoding mode
 */
exports.from = function from(value, defaultValue) {
  if (exports.isValid(value)) {
    return value;
  }
  try {
    return fromString(value);
  } catch (e) {
    return defaultValue;
  }
};

/***/ }),

/***/ 89723:
/*!******************************************************!*\
  !*** ./node_modules/qrcode/lib/core/numeric-data.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Mode = __webpack_require__(/*! ./mode */ 21353);
function NumericData(data) {
  this.mode = Mode.NUMERIC;
  this.data = data.toString();
}
NumericData.getBitsLength = function getBitsLength(length) {
  return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
};
NumericData.prototype.getLength = function getLength() {
  return this.data.length;
};
NumericData.prototype.getBitsLength = function getBitsLength() {
  return NumericData.getBitsLength(this.data.length);
};
NumericData.prototype.write = function write(bitBuffer) {
  let i, group, value;

  // The input data string is divided into groups of three digits,
  // and each group is converted to its 10-bit binary equivalent.
  for (i = 0; i + 3 <= this.data.length; i += 3) {
    group = this.data.substr(i, 3);
    value = parseInt(group, 10);
    bitBuffer.put(value, 10);
  }

  // If the number of input digits is not an exact multiple of three,
  // the final one or two digits are converted to 4 or 7 bits respectively.
  const remainingNum = this.data.length - i;
  if (remainingNum > 0) {
    group = this.data.substr(i);
    value = parseInt(group, 10);
    bitBuffer.put(value, remainingNum * 3 + 1);
  }
};
module.exports = NumericData;

/***/ }),

/***/ 30606:
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/polynomial.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const GF = __webpack_require__(/*! ./galois-field */ 19148);

/**
 * Multiplies two polynomials inside Galois Field
 *
 * @param  {Uint8Array} p1 Polynomial
 * @param  {Uint8Array} p2 Polynomial
 * @return {Uint8Array}    Product of p1 and p2
 */
exports.mul = function mul(p1, p2) {
  const coeff = new Uint8Array(p1.length + p2.length - 1);
  for (let i = 0; i < p1.length; i++) {
    for (let j = 0; j < p2.length; j++) {
      coeff[i + j] ^= GF.mul(p1[i], p2[j]);
    }
  }
  return coeff;
};

/**
 * Calculate the remainder of polynomials division
 *
 * @param  {Uint8Array} divident Polynomial
 * @param  {Uint8Array} divisor  Polynomial
 * @return {Uint8Array}          Remainder
 */
exports.mod = function mod(divident, divisor) {
  let result = new Uint8Array(divident);
  while (result.length - divisor.length >= 0) {
    const coeff = result[0];
    for (let i = 0; i < divisor.length; i++) {
      result[i] ^= GF.mul(divisor[i], coeff);
    }

    // remove all zeros from buffer head
    let offset = 0;
    while (offset < result.length && result[offset] === 0) offset++;
    result = result.slice(offset);
  }
  return result;
};

/**
 * Generate an irreducible generator polynomial of specified degree
 * (used by Reed-Solomon encoder)
 *
 * @param  {Number} degree Degree of the generator polynomial
 * @return {Uint8Array}    Buffer containing polynomial coefficients
 */
exports.generateECPolynomial = function generateECPolynomial(degree) {
  let poly = new Uint8Array([1]);
  for (let i = 0; i < degree; i++) {
    poly = exports.mul(poly, new Uint8Array([1, GF.exp(i)]));
  }
  return poly;
};

/***/ }),

/***/ 8288:
/*!************************************************!*\
  !*** ./node_modules/qrcode/lib/core/qrcode.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(/*! ./utils */ 57508);
const ECLevel = __webpack_require__(/*! ./error-correction-level */ 59159);
const BitBuffer = __webpack_require__(/*! ./bit-buffer */ 5166);
const BitMatrix = __webpack_require__(/*! ./bit-matrix */ 69674);
const AlignmentPattern = __webpack_require__(/*! ./alignment-pattern */ 72870);
const FinderPattern = __webpack_require__(/*! ./finder-pattern */ 18980);
const MaskPattern = __webpack_require__(/*! ./mask-pattern */ 2103);
const ECCode = __webpack_require__(/*! ./error-correction-code */ 76172);
const ReedSolomonEncoder = __webpack_require__(/*! ./reed-solomon-encoder */ 61659);
const Version = __webpack_require__(/*! ./version */ 15809);
const FormatInfo = __webpack_require__(/*! ./format-info */ 96680);
const Mode = __webpack_require__(/*! ./mode */ 21353);
const Segments = __webpack_require__(/*! ./segments */ 33062);

/**
 * QRCode for JavaScript
 *
 * modified by Ryan Day for nodejs support
 * Copyright (c) 2011 Ryan Day
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
*/

/**
 * Add finder patterns bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupFinderPattern(matrix, version) {
  const size = matrix.size;
  const pos = FinderPattern.getPositions(version);
  for (let i = 0; i < pos.length; i++) {
    const row = pos[i][0];
    const col = pos[i][1];
    for (let r = -1; r <= 7; r++) {
      if (row + r <= -1 || size <= row + r) continue;
      for (let c = -1; c <= 7; c++) {
        if (col + c <= -1 || size <= col + c) continue;
        if (r >= 0 && r <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && c >= 2 && c <= 4) {
          matrix.set(row + r, col + c, true, true);
        } else {
          matrix.set(row + r, col + c, false, true);
        }
      }
    }
  }
}

/**
 * Add timing pattern bits to matrix
 *
 * Note: this function must be called before {@link setupAlignmentPattern}
 *
 * @param  {BitMatrix} matrix Modules matrix
 */
function setupTimingPattern(matrix) {
  const size = matrix.size;
  for (let r = 8; r < size - 8; r++) {
    const value = r % 2 === 0;
    matrix.set(r, 6, value, true);
    matrix.set(6, r, value, true);
  }
}

/**
 * Add alignment patterns bits to matrix
 *
 * Note: this function must be called after {@link setupTimingPattern}
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupAlignmentPattern(matrix, version) {
  const pos = AlignmentPattern.getPositions(version);
  for (let i = 0; i < pos.length; i++) {
    const row = pos[i][0];
    const col = pos[i][1];
    for (let r = -2; r <= 2; r++) {
      for (let c = -2; c <= 2; c++) {
        if (r === -2 || r === 2 || c === -2 || c === 2 || r === 0 && c === 0) {
          matrix.set(row + r, col + c, true, true);
        } else {
          matrix.set(row + r, col + c, false, true);
        }
      }
    }
  }
}

/**
 * Add version info bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupVersionInfo(matrix, version) {
  const size = matrix.size;
  const bits = Version.getEncodedBits(version);
  let row, col, mod;
  for (let i = 0; i < 18; i++) {
    row = Math.floor(i / 3);
    col = i % 3 + size - 8 - 3;
    mod = (bits >> i & 1) === 1;
    matrix.set(row, col, mod, true);
    matrix.set(col, row, mod, true);
  }
}

/**
 * Add format info bits to matrix
 *
 * @param  {BitMatrix} matrix               Modules matrix
 * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
 * @param  {Number}    maskPattern          Mask pattern reference value
 */
function setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
  const size = matrix.size;
  const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
  let i, mod;
  for (i = 0; i < 15; i++) {
    mod = (bits >> i & 1) === 1;

    // vertical
    if (i < 6) {
      matrix.set(i, 8, mod, true);
    } else if (i < 8) {
      matrix.set(i + 1, 8, mod, true);
    } else {
      matrix.set(size - 15 + i, 8, mod, true);
    }

    // horizontal
    if (i < 8) {
      matrix.set(8, size - i - 1, mod, true);
    } else if (i < 9) {
      matrix.set(8, 15 - i - 1 + 1, mod, true);
    } else {
      matrix.set(8, 15 - i - 1, mod, true);
    }
  }

  // fixed module
  matrix.set(size - 8, 8, 1, true);
}

/**
 * Add encoded data bits to matrix
 *
 * @param  {BitMatrix}  matrix Modules matrix
 * @param  {Uint8Array} data   Data codewords
 */
function setupData(matrix, data) {
  const size = matrix.size;
  let inc = -1;
  let row = size - 1;
  let bitIndex = 7;
  let byteIndex = 0;
  for (let col = size - 1; col > 0; col -= 2) {
    if (col === 6) col--;
    while (true) {
      for (let c = 0; c < 2; c++) {
        if (!matrix.isReserved(row, col - c)) {
          let dark = false;
          if (byteIndex < data.length) {
            dark = (data[byteIndex] >>> bitIndex & 1) === 1;
          }
          matrix.set(row, col - c, dark);
          bitIndex--;
          if (bitIndex === -1) {
            byteIndex++;
            bitIndex = 7;
          }
        }
      }
      row += inc;
      if (row < 0 || size <= row) {
        row -= inc;
        inc = -inc;
        break;
      }
    }
  }
}

/**
 * Create encoded codewords from data input
 *
 * @param  {Number}   version              QR Code version
 * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
 * @param  {ByteData} data                 Data input
 * @return {Uint8Array}                    Buffer containing encoded codewords
 */
function createData(version, errorCorrectionLevel, segments) {
  // Prepare data buffer
  const buffer = new BitBuffer();
  segments.forEach(function (data) {
    // prefix data with mode indicator (4 bits)
    buffer.put(data.mode.bit, 4);

    // Prefix data with character count indicator.
    // The character count indicator is a string of bits that represents the
    // number of characters that are being encoded.
    // The character count indicator must be placed after the mode indicator
    // and must be a certain number of bits long, depending on the QR version
    // and data mode
    // @see {@link Mode.getCharCountIndicator}.
    buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version));

    // add binary data sequence to buffer
    data.write(buffer);
  });

  // Calculate required number of bits
  const totalCodewords = Utils.getSymbolTotalCodewords(version);
  const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
  const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;

  // Add a terminator.
  // If the bit string is shorter than the total number of required bits,
  // a terminator of up to four 0s must be added to the right side of the string.
  // If the bit string is more than four bits shorter than the required number of bits,
  // add four 0s to the end.
  if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
    buffer.put(0, 4);
  }

  // If the bit string is fewer than four bits shorter, add only the number of 0s that
  // are needed to reach the required number of bits.

  // After adding the terminator, if the number of bits in the string is not a multiple of 8,
  // pad the string on the right with 0s to make the string's length a multiple of 8.
  while (buffer.getLengthInBits() % 8 !== 0) {
    buffer.putBit(0);
  }

  // Add pad bytes if the string is still shorter than the total number of required bits.
  // Extend the buffer to fill the data capacity of the symbol corresponding to
  // the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)
  // and 00010001 (0x11) alternately.
  const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
  for (let i = 0; i < remainingByte; i++) {
    buffer.put(i % 2 ? 0x11 : 0xEC, 8);
  }
  return createCodewords(buffer, version, errorCorrectionLevel);
}

/**
 * Encode input data with Reed-Solomon and return codewords with
 * relative error correction bits
 *
 * @param  {BitBuffer} bitBuffer            Data to encode
 * @param  {Number}    version              QR Code version
 * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
 * @return {Uint8Array}                     Buffer containing encoded codewords
 */
function createCodewords(bitBuffer, version, errorCorrectionLevel) {
  // Total codewords for this QR code version (Data + Error correction)
  const totalCodewords = Utils.getSymbolTotalCodewords(version);

  // Total number of error correction codewords
  const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);

  // Total number of data codewords
  const dataTotalCodewords = totalCodewords - ecTotalCodewords;

  // Total number of blocks
  const ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel);

  // Calculate how many blocks each group should contain
  const blocksInGroup2 = totalCodewords % ecTotalBlocks;
  const blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
  const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
  const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
  const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;

  // Number of EC codewords is the same for both groups
  const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;

  // Initialize a Reed-Solomon encoder with a generator polynomial of degree ecCount
  const rs = new ReedSolomonEncoder(ecCount);
  let offset = 0;
  const dcData = new Array(ecTotalBlocks);
  const ecData = new Array(ecTotalBlocks);
  let maxDataSize = 0;
  const buffer = new Uint8Array(bitBuffer.buffer);

  // Divide the buffer into the required number of blocks
  for (let b = 0; b < ecTotalBlocks; b++) {
    const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;

    // extract a block of data from buffer
    dcData[b] = buffer.slice(offset, offset + dataSize);

    // Calculate EC codewords for this data block
    ecData[b] = rs.encode(dcData[b]);
    offset += dataSize;
    maxDataSize = Math.max(maxDataSize, dataSize);
  }

  // Create final data
  // Interleave the data and error correction codewords from each block
  const data = new Uint8Array(totalCodewords);
  let index = 0;
  let i, r;

  // Add data codewords
  for (i = 0; i < maxDataSize; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      if (i < dcData[r].length) {
        data[index++] = dcData[r][i];
      }
    }
  }

  // Apped EC codewords
  for (i = 0; i < ecCount; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      data[index++] = ecData[r][i];
    }
  }
  return data;
}

/**
 * Build QR Code symbol
 *
 * @param  {String} data                 Input string
 * @param  {Number} version              QR Code version
 * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
 * @param  {MaskPattern} maskPattern     Mask pattern
 * @return {Object}                      Object containing symbol data
 */
function createSymbol(data, version, errorCorrectionLevel, maskPattern) {
  let segments;
  if (Array.isArray(data)) {
    segments = Segments.fromArray(data);
  } else if (typeof data === 'string') {
    let estimatedVersion = version;
    if (!estimatedVersion) {
      const rawSegments = Segments.rawSplit(data);

      // Estimate best version that can contain raw splitted segments
      estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel);
    }

    // Build optimized segments
    // If estimated version is undefined, try with the highest version
    segments = Segments.fromString(data, estimatedVersion || 40);
  } else {
    throw new Error('Invalid data');
  }

  // Get the min version that can contain data
  const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel);

  // If no version is found, data cannot be stored
  if (!bestVersion) {
    throw new Error('The amount of data is too big to be stored in a QR Code');
  }

  // If not specified, use min version as default
  if (!version) {
    version = bestVersion;

    // Check if the specified version can contain the data
  } else if (version < bestVersion) {
    throw new Error('\n' + 'The chosen QR Code version cannot contain this amount of data.\n' + 'Minimum version required to store current data is: ' + bestVersion + '.\n');
  }
  const dataBits = createData(version, errorCorrectionLevel, segments);

  // Allocate matrix buffer
  const moduleCount = Utils.getSymbolSize(version);
  const modules = new BitMatrix(moduleCount);

  // Add function modules
  setupFinderPattern(modules, version);
  setupTimingPattern(modules);
  setupAlignmentPattern(modules, version);

  // Add temporary dummy bits for format info just to set them as reserved.
  // This is needed to prevent these bits from being masked by {@link MaskPattern.applyMask}
  // since the masking operation must be performed only on the encoding region.
  // These blocks will be replaced with correct values later in code.
  setupFormatInfo(modules, errorCorrectionLevel, 0);
  if (version >= 7) {
    setupVersionInfo(modules, version);
  }

  // Add data codewords
  setupData(modules, dataBits);
  if (isNaN(maskPattern)) {
    // Find best mask pattern
    maskPattern = MaskPattern.getBestMask(modules, setupFormatInfo.bind(null, modules, errorCorrectionLevel));
  }

  // Apply mask pattern
  MaskPattern.applyMask(maskPattern, modules);

  // Replace format info bits with correct values
  setupFormatInfo(modules, errorCorrectionLevel, maskPattern);
  return {
    modules: modules,
    version: version,
    errorCorrectionLevel: errorCorrectionLevel,
    maskPattern: maskPattern,
    segments: segments
  };
}

/**
 * QR Code
 *
 * @param {String | Array} data                 Input data
 * @param {Object} options                      Optional configurations
 * @param {Number} options.version              QR Code version
 * @param {String} options.errorCorrectionLevel Error correction level
 * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
 */
exports.create = function create(data, options) {
  if (typeof data === 'undefined' || data === '') {
    throw new Error('No input text');
  }
  let errorCorrectionLevel = ECLevel.M;
  let version;
  let mask;
  if (typeof options !== 'undefined') {
    // Use higher error correction level as default
    errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
    version = Version.from(options.version);
    mask = MaskPattern.from(options.maskPattern);
    if (options.toSJISFunc) {
      Utils.setToSJISFunction(options.toSJISFunc);
    }
  }
  return createSymbol(data, version, errorCorrectionLevel, mask);
};

/***/ }),

/***/ 61659:
/*!**************************************************************!*\
  !*** ./node_modules/qrcode/lib/core/reed-solomon-encoder.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Polynomial = __webpack_require__(/*! ./polynomial */ 30606);
function ReedSolomonEncoder(degree) {
  this.genPoly = undefined;
  this.degree = degree;
  if (this.degree) this.initialize(this.degree);
}

/**
 * Initialize the encoder.
 * The input param should correspond to the number of error correction codewords.
 *
 * @param  {Number} degree
 */
ReedSolomonEncoder.prototype.initialize = function initialize(degree) {
  // create an irreducible generator polynomial
  this.degree = degree;
  this.genPoly = Polynomial.generateECPolynomial(this.degree);
};

/**
 * Encodes a chunk of data
 *
 * @param  {Uint8Array} data Buffer containing input data
 * @return {Uint8Array}      Buffer containing encoded data
 */
ReedSolomonEncoder.prototype.encode = function encode(data) {
  if (!this.genPoly) {
    throw new Error('Encoder not initialized');
  }

  // Calculate EC for this data block
  // extends data size to data+genPoly size
  const paddedData = new Uint8Array(data.length + this.degree);
  paddedData.set(data);

  // The error correction codewords are the remainder after dividing the data codewords
  // by a generator polynomial
  const remainder = Polynomial.mod(paddedData, this.genPoly);

  // return EC data blocks (last n byte, where n is the degree of genPoly)
  // If coefficients number in remainder are less than genPoly degree,
  // pad with 0s to the left to reach the needed number of coefficients
  const start = this.degree - remainder.length;
  if (start > 0) {
    const buff = new Uint8Array(this.degree);
    buff.set(remainder, start);
    return buff;
  }
  return remainder;
};
module.exports = ReedSolomonEncoder;

/***/ }),

/***/ 63455:
/*!***********************************************!*\
  !*** ./node_modules/qrcode/lib/core/regex.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

const numeric = '[0-9]+';
const alphanumeric = '[A-Z $%*+\\-./:]+';
let kanji = '(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|' + '[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|' + '[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|' + '[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+';
kanji = kanji.replace(/u/g, '\\u');
const byte = '(?:(?![A-Z0-9 $%*+\\-./:]|' + kanji + ')(?:.|[\r\n]))+';
exports.KANJI = new RegExp(kanji, 'g');
exports.BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g');
exports.BYTE = new RegExp(byte, 'g');
exports.NUMERIC = new RegExp(numeric, 'g');
exports.ALPHANUMERIC = new RegExp(alphanumeric, 'g');
const TEST_KANJI = new RegExp('^' + kanji + '$');
const TEST_NUMERIC = new RegExp('^' + numeric + '$');
const TEST_ALPHANUMERIC = new RegExp('^[A-Z0-9 $%*+\\-./:]+$');
exports.testKanji = function testKanji(str) {
  return TEST_KANJI.test(str);
};
exports.testNumeric = function testNumeric(str) {
  return TEST_NUMERIC.test(str);
};
exports.testAlphanumeric = function testAlphanumeric(str) {
  return TEST_ALPHANUMERIC.test(str);
};

/***/ }),

/***/ 33062:
/*!**************************************************!*\
  !*** ./node_modules/qrcode/lib/core/segments.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Mode = __webpack_require__(/*! ./mode */ 21353);
const NumericData = __webpack_require__(/*! ./numeric-data */ 89723);
const AlphanumericData = __webpack_require__(/*! ./alphanumeric-data */ 74036);
const ByteData = __webpack_require__(/*! ./byte-data */ 98618);
const KanjiData = __webpack_require__(/*! ./kanji-data */ 11429);
const Regex = __webpack_require__(/*! ./regex */ 63455);
const Utils = __webpack_require__(/*! ./utils */ 57508);
const dijkstra = __webpack_require__(/*! dijkstrajs */ 39078);

/**
 * Returns UTF8 byte length
 *
 * @param  {String} str Input string
 * @return {Number}     Number of byte
 */
function getStringByteLength(str) {
  return unescape(encodeURIComponent(str)).length;
}

/**
 * Get a list of segments of the specified mode
 * from a string
 *
 * @param  {Mode}   mode Segment mode
 * @param  {String} str  String to process
 * @return {Array}       Array of object with segments data
 */
function getSegments(regex, mode, str) {
  const segments = [];
  let result;
  while ((result = regex.exec(str)) !== null) {
    segments.push({
      data: result[0],
      index: result.index,
      mode: mode,
      length: result[0].length
    });
  }
  return segments;
}

/**
 * Extracts a series of segments with the appropriate
 * modes from a string
 *
 * @param  {String} dataStr Input string
 * @return {Array}          Array of object with segments data
 */
function getSegmentsFromString(dataStr) {
  const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr);
  const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr);
  let byteSegs;
  let kanjiSegs;
  if (Utils.isKanjiModeEnabled()) {
    byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr);
    kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr);
  } else {
    byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr);
    kanjiSegs = [];
  }
  const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
  return segs.sort(function (s1, s2) {
    return s1.index - s2.index;
  }).map(function (obj) {
    return {
      data: obj.data,
      mode: obj.mode,
      length: obj.length
    };
  });
}

/**
 * Returns how many bits are needed to encode a string of
 * specified length with the specified mode
 *
 * @param  {Number} length String length
 * @param  {Mode} mode     Segment mode
 * @return {Number}        Bit length
 */
function getSegmentBitsLength(length, mode) {
  switch (mode) {
    case Mode.NUMERIC:
      return NumericData.getBitsLength(length);
    case Mode.ALPHANUMERIC:
      return AlphanumericData.getBitsLength(length);
    case Mode.KANJI:
      return KanjiData.getBitsLength(length);
    case Mode.BYTE:
      return ByteData.getBitsLength(length);
  }
}

/**
 * Merges adjacent segments which have the same mode
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */
function mergeSegments(segs) {
  return segs.reduce(function (acc, curr) {
    const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
    if (prevSeg && prevSeg.mode === curr.mode) {
      acc[acc.length - 1].data += curr.data;
      return acc;
    }
    acc.push(curr);
    return acc;
  }, []);
}

/**
 * Generates a list of all possible nodes combination which
 * will be used to build a segments graph.
 *
 * Nodes are divided by groups. Each group will contain a list of all the modes
 * in which is possible to encode the given text.
 *
 * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
 * The group for '12345' will contain then 3 objects, one for each
 * possible encoding mode.
 *
 * Each node represents a possible segment.
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */
function buildNodes(segs) {
  const nodes = [];
  for (let i = 0; i < segs.length; i++) {
    const seg = segs[i];
    switch (seg.mode) {
      case Mode.NUMERIC:
        nodes.push([seg, {
          data: seg.data,
          mode: Mode.ALPHANUMERIC,
          length: seg.length
        }, {
          data: seg.data,
          mode: Mode.BYTE,
          length: seg.length
        }]);
        break;
      case Mode.ALPHANUMERIC:
        nodes.push([seg, {
          data: seg.data,
          mode: Mode.BYTE,
          length: seg.length
        }]);
        break;
      case Mode.KANJI:
        nodes.push([seg, {
          data: seg.data,
          mode: Mode.BYTE,
          length: getStringByteLength(seg.data)
        }]);
        break;
      case Mode.BYTE:
        nodes.push([{
          data: seg.data,
          mode: Mode.BYTE,
          length: getStringByteLength(seg.data)
        }]);
    }
  }
  return nodes;
}

/**
 * Builds a graph from a list of nodes.
 * All segments in each node group will be connected with all the segments of
 * the next group and so on.
 *
 * At each connection will be assigned a weight depending on the
 * segment's byte length.
 *
 * @param  {Array} nodes    Array of object with segments data
 * @param  {Number} version QR Code version
 * @return {Object}         Graph of all possible segments
 */
function buildGraph(nodes, version) {
  const table = {};
  const graph = {
    start: {}
  };
  let prevNodeIds = ['start'];
  for (let i = 0; i < nodes.length; i++) {
    const nodeGroup = nodes[i];
    const currentNodeIds = [];
    for (let j = 0; j < nodeGroup.length; j++) {
      const node = nodeGroup[j];
      const key = '' + i + j;
      currentNodeIds.push(key);
      table[key] = {
        node: node,
        lastCount: 0
      };
      graph[key] = {};
      for (let n = 0; n < prevNodeIds.length; n++) {
        const prevNodeId = prevNodeIds[n];
        if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
          graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
          table[prevNodeId].lastCount += node.length;
        } else {
          if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;
          graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode.getCharCountIndicator(node.mode, version); // switch cost
        }
      }
    }

    prevNodeIds = currentNodeIds;
  }
  for (let n = 0; n < prevNodeIds.length; n++) {
    graph[prevNodeIds[n]].end = 0;
  }
  return {
    map: graph,
    table: table
  };
}

/**
 * Builds a segment from a specified data and mode.
 * If a mode is not specified, the more suitable will be used.
 *
 * @param  {String} data             Input data
 * @param  {Mode | String} modesHint Data mode
 * @return {Segment}                 Segment
 */
function buildSingleSegment(data, modesHint) {
  let mode;
  const bestMode = Mode.getBestModeForData(data);
  mode = Mode.from(modesHint, bestMode);

  // Make sure data can be encoded
  if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
    throw new Error('"' + data + '"' + ' cannot be encoded with mode ' + Mode.toString(mode) + '.\n Suggested mode is: ' + Mode.toString(bestMode));
  }

  // Use Mode.BYTE if Kanji support is disabled
  if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
    mode = Mode.BYTE;
  }
  switch (mode) {
    case Mode.NUMERIC:
      return new NumericData(data);
    case Mode.ALPHANUMERIC:
      return new AlphanumericData(data);
    case Mode.KANJI:
      return new KanjiData(data);
    case Mode.BYTE:
      return new ByteData(data);
  }
}

/**
 * Builds a list of segments from an array.
 * Array can contain Strings or Objects with segment's info.
 *
 * For each item which is a string, will be generated a segment with the given
 * string and the more appropriate encoding mode.
 *
 * For each item which is an object, will be generated a segment with the given
 * data and mode.
 * Objects must contain at least the property "data".
 * If property "mode" is not present, the more suitable mode will be used.
 *
 * @param  {Array} array Array of objects with segments data
 * @return {Array}       Array of Segments
 */
exports.fromArray = function fromArray(array) {
  return array.reduce(function (acc, seg) {
    if (typeof seg === 'string') {
      acc.push(buildSingleSegment(seg, null));
    } else if (seg.data) {
      acc.push(buildSingleSegment(seg.data, seg.mode));
    }
    return acc;
  }, []);
};

/**
 * Builds an optimized sequence of segments from a string,
 * which will produce the shortest possible bitstream.
 *
 * @param  {String} data    Input string
 * @param  {Number} version QR Code version
 * @return {Array}          Array of segments
 */
exports.fromString = function fromString(data, version) {
  const segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled());
  const nodes = buildNodes(segs);
  const graph = buildGraph(nodes, version);
  const path = dijkstra.find_path(graph.map, 'start', 'end');
  const optimizedSegs = [];
  for (let i = 1; i < path.length - 1; i++) {
    optimizedSegs.push(graph.table[path[i]].node);
  }
  return exports.fromArray(mergeSegments(optimizedSegs));
};

/**
 * Splits a string in various segments with the modes which
 * best represent their content.
 * The produced segments are far from being optimized.
 * The output of this function is only used to estimate a QR Code version
 * which may contain the data.
 *
 * @param  {string} data Input string
 * @return {Array}       Array of segments
 */
exports.rawSplit = function rawSplit(data) {
  return exports.fromArray(getSegmentsFromString(data, Utils.isKanjiModeEnabled()));
};

/***/ }),

/***/ 57508:
/*!***********************************************!*\
  !*** ./node_modules/qrcode/lib/core/utils.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

let toSJISFunction;
const CODEWORDS_COUNT = [0,
// Not used
26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];

/**
 * Returns the QR Code size for the specified version
 *
 * @param  {Number} version QR Code version
 * @return {Number}         size of QR code
 */
exports.getSymbolSize = function getSymbolSize(version) {
  if (!version) throw new Error('"version" cannot be null or undefined');
  if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40');
  return version * 4 + 17;
};

/**
 * Returns the total number of codewords used to store data and EC information.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Data length in bits
 */
exports.getSymbolTotalCodewords = function getSymbolTotalCodewords(version) {
  return CODEWORDS_COUNT[version];
};

/**
 * Encode data with Bose-Chaudhuri-Hocquenghem
 *
 * @param  {Number} data Value to encode
 * @return {Number}      Encoded value
 */
exports.getBCHDigit = function (data) {
  let digit = 0;
  while (data !== 0) {
    digit++;
    data >>>= 1;
  }
  return digit;
};
exports.setToSJISFunction = function setToSJISFunction(f) {
  if (typeof f !== 'function') {
    throw new Error('"toSJISFunc" is not a valid function.');
  }
  toSJISFunction = f;
};
exports.isKanjiModeEnabled = function () {
  return typeof toSJISFunction !== 'undefined';
};
exports.toSJIS = function toSJIS(kanji) {
  return toSJISFunction(kanji);
};

/***/ }),

/***/ 49674:
/*!*******************************************************!*\
  !*** ./node_modules/qrcode/lib/core/version-check.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

/**
 * Check if QR Code version is valid
 *
 * @param  {Number}  version QR Code version
 * @return {Boolean}         true if valid version, false otherwise
 */
exports.isValid = function isValid(version) {
  return !isNaN(version) && version >= 1 && version <= 40;
};

/***/ }),

/***/ 15809:
/*!*************************************************!*\
  !*** ./node_modules/qrcode/lib/core/version.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(/*! ./utils */ 57508);
const ECCode = __webpack_require__(/*! ./error-correction-code */ 76172);
const ECLevel = __webpack_require__(/*! ./error-correction-level */ 59159);
const Mode = __webpack_require__(/*! ./mode */ 21353);
const VersionCheck = __webpack_require__(/*! ./version-check */ 49674);

// Generator polynomial used to encode version information
const G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
const G18_BCH = Utils.getBCHDigit(G18);
function getBestVersionForDataLength(mode, length, errorCorrectionLevel) {
  for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
      return currentVersion;
    }
  }
  return undefined;
}
function getReservedBitsCount(mode, version) {
  // Character count indicator + mode indicator bits
  return Mode.getCharCountIndicator(mode, version) + 4;
}
function getTotalBitsFromDataArray(segments, version) {
  let totalBits = 0;
  segments.forEach(function (data) {
    const reservedBits = getReservedBitsCount(data.mode, version);
    totalBits += reservedBits + data.getBitsLength();
  });
  return totalBits;
}
function getBestVersionForMixedData(segments, errorCorrectionLevel) {
  for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
    const length = getTotalBitsFromDataArray(segments, currentVersion);
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
      return currentVersion;
    }
  }
  return undefined;
}

/**
 * Returns version number from a value.
 * If value is not a valid version, returns defaultValue
 *
 * @param  {Number|String} value        QR Code version
 * @param  {Number}        defaultValue Fallback value
 * @return {Number}                     QR Code version number
 */
exports.from = function from(value, defaultValue) {
  if (VersionCheck.isValid(value)) {
    return parseInt(value, 10);
  }
  return defaultValue;
};

/**
 * Returns how much data can be stored with the specified QR code version
 * and error correction level
 *
 * @param  {Number} version              QR Code version (1-40)
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Mode}   mode                 Data mode
 * @return {Number}                      Quantity of storable data
 */
exports.getCapacity = function getCapacity(version, errorCorrectionLevel, mode) {
  if (!VersionCheck.isValid(version)) {
    throw new Error('Invalid QR Code version');
  }

  // Use Byte mode as default
  if (typeof mode === 'undefined') mode = Mode.BYTE;

  // Total codewords for this QR code version (Data + Error correction)
  const totalCodewords = Utils.getSymbolTotalCodewords(version);

  // Total number of error correction codewords
  const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);

  // Total number of data codewords
  const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
  if (mode === Mode.MIXED) return dataTotalCodewordsBits;
  const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version);

  // Return max number of storable codewords
  switch (mode) {
    case Mode.NUMERIC:
      return Math.floor(usableBits / 10 * 3);
    case Mode.ALPHANUMERIC:
      return Math.floor(usableBits / 11 * 2);
    case Mode.KANJI:
      return Math.floor(usableBits / 13);
    case Mode.BYTE:
    default:
      return Math.floor(usableBits / 8);
  }
};

/**
 * Returns the minimum version needed to contain the amount of data
 *
 * @param  {Segment} data                    Segment of data
 * @param  {Number} [errorCorrectionLevel=H] Error correction level
 * @param  {Mode} mode                       Data mode
 * @return {Number}                          QR Code version
 */
exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel) {
  let seg;
  const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M);
  if (Array.isArray(data)) {
    if (data.length > 1) {
      return getBestVersionForMixedData(data, ecl);
    }
    if (data.length === 0) {
      return 1;
    }
    seg = data[0];
  } else {
    seg = data;
  }
  return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
};

/**
 * Returns version information with relative error correction bits
 *
 * The version information is included in QR Code symbols of version 7 or larger.
 * It consists of an 18-bit sequence containing 6 data bits,
 * with 12 error correction bits calculated using the (18, 6) Golay code.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Encoded version info bits
 */
exports.getEncodedBits = function getEncodedBits(version) {
  if (!VersionCheck.isValid(version) || version < 7) {
    throw new Error('Invalid QR Code version');
  }
  let d = version << 12;
  while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
    d ^= G18 << Utils.getBCHDigit(d) - G18_BCH;
  }
  return version << 12 | d;
};

/***/ }),

/***/ 73754:
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/renderer/canvas.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(/*! ./utils */ 94431);
function clearCanvas(ctx, canvas, size) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (!canvas.style) canvas.style = {};
  canvas.height = size;
  canvas.width = size;
  canvas.style.height = size + 'px';
  canvas.style.width = size + 'px';
}
function getCanvasElement() {
  try {
    return document.createElement('canvas');
  } catch (e) {
    throw new Error('You need to specify a canvas element');
  }
}
exports.render = function render(qrData, canvas, options) {
  let opts = options;
  let canvasEl = canvas;
  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
    opts = canvas;
    canvas = undefined;
  }
  if (!canvas) {
    canvasEl = getCanvasElement();
  }
  opts = Utils.getOptions(opts);
  const size = Utils.getImageWidth(qrData.modules.size, opts);
  const ctx = canvasEl.getContext('2d');
  const image = ctx.createImageData(size, size);
  Utils.qrToImageData(image.data, qrData, opts);
  clearCanvas(ctx, canvasEl, size);
  ctx.putImageData(image, 0, 0);
  return canvasEl;
};
exports.renderToDataURL = function renderToDataURL(qrData, canvas, options) {
  let opts = options;
  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
    opts = canvas;
    canvas = undefined;
  }
  if (!opts) opts = {};
  const canvasEl = exports.render(qrData, canvas, opts);
  const type = opts.type || 'image/png';
  const rendererOpts = opts.rendererOpts || {};
  return canvasEl.toDataURL(type, rendererOpts.quality);
};

/***/ }),

/***/ 25441:
/*!*****************************************************!*\
  !*** ./node_modules/qrcode/lib/renderer/svg-tag.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(/*! ./utils */ 94431);
function getColorAttrib(color, attrib) {
  const alpha = color.a / 255;
  const str = attrib + '="' + color.hex + '"';
  return alpha < 1 ? str + ' ' + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
}
function svgCmd(cmd, x, y) {
  let str = cmd + x;
  if (typeof y !== 'undefined') str += ' ' + y;
  return str;
}
function qrToPath(data, size, margin) {
  let path = '';
  let moveBy = 0;
  let newRow = false;
  let lineLength = 0;
  for (let i = 0; i < data.length; i++) {
    const col = Math.floor(i % size);
    const row = Math.floor(i / size);
    if (!col && !newRow) newRow = true;
    if (data[i]) {
      lineLength++;
      if (!(i > 0 && col > 0 && data[i - 1])) {
        path += newRow ? svgCmd('M', col + margin, 0.5 + row + margin) : svgCmd('m', moveBy, 0);
        moveBy = 0;
        newRow = false;
      }
      if (!(col + 1 < size && data[i + 1])) {
        path += svgCmd('h', lineLength);
        lineLength = 0;
      }
    } else {
      moveBy++;
    }
  }
  return path;
}
exports.render = function render(qrData, options, cb) {
  const opts = Utils.getOptions(options);
  const size = qrData.modules.size;
  const data = qrData.modules.data;
  const qrcodesize = size + opts.margin * 2;
  const bg = !opts.color.light.a ? '' : '<path ' + getColorAttrib(opts.color.light, 'fill') + ' d="M0 0h' + qrcodesize + 'v' + qrcodesize + 'H0z"/>';
  const path = '<path ' + getColorAttrib(opts.color.dark, 'stroke') + ' d="' + qrToPath(data, size, opts.margin) + '"/>';
  const viewBox = 'viewBox="' + '0 0 ' + qrcodesize + ' ' + qrcodesize + '"';
  const width = !opts.width ? '' : 'width="' + opts.width + '" height="' + opts.width + '" ';
  const svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + '</svg>\n';
  if (typeof cb === 'function') {
    cb(null, svgTag);
  }
  return svgTag;
};

/***/ }),

/***/ 94431:
/*!***************************************************!*\
  !*** ./node_modules/qrcode/lib/renderer/utils.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

function hex2rgba(hex) {
  if (typeof hex === 'number') {
    hex = hex.toString();
  }
  if (typeof hex !== 'string') {
    throw new Error('Color should be defined as hex string');
  }
  let hexCode = hex.slice().replace('#', '').split('');
  if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
    throw new Error('Invalid hex color: ' + hex);
  }

  // Convert from short to long form (fff -> ffffff)
  if (hexCode.length === 3 || hexCode.length === 4) {
    hexCode = Array.prototype.concat.apply([], hexCode.map(function (c) {
      return [c, c];
    }));
  }

  // Add default alpha value
  if (hexCode.length === 6) hexCode.push('F', 'F');
  const hexValue = parseInt(hexCode.join(''), 16);
  return {
    r: hexValue >> 24 & 255,
    g: hexValue >> 16 & 255,
    b: hexValue >> 8 & 255,
    a: hexValue & 255,
    hex: '#' + hexCode.slice(0, 6).join('')
  };
}
exports.getOptions = function getOptions(options) {
  if (!options) options = {};
  if (!options.color) options.color = {};
  const margin = typeof options.margin === 'undefined' || options.margin === null || options.margin < 0 ? 4 : options.margin;
  const width = options.width && options.width >= 21 ? options.width : undefined;
  const scale = options.scale || 4;
  return {
    width: width,
    scale: width ? 4 : scale,
    margin: margin,
    color: {
      dark: hex2rgba(options.color.dark || '#000000ff'),
      light: hex2rgba(options.color.light || '#ffffffff')
    },
    type: options.type,
    rendererOpts: options.rendererOpts || {}
  };
};
exports.getScale = function getScale(qrSize, opts) {
  return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
};
exports.getImageWidth = function getImageWidth(qrSize, opts) {
  const scale = exports.getScale(qrSize, opts);
  return Math.floor((qrSize + opts.margin * 2) * scale);
};
exports.qrToImageData = function qrToImageData(imgData, qr, opts) {
  const size = qr.modules.size;
  const data = qr.modules.data;
  const scale = exports.getScale(size, opts);
  const symbolSize = Math.floor((size + opts.margin * 2) * scale);
  const scaledMargin = opts.margin * scale;
  const palette = [opts.color.light, opts.color.dark];
  for (let i = 0; i < symbolSize; i++) {
    for (let j = 0; j < symbolSize; j++) {
      let posDst = (i * symbolSize + j) * 4;
      let pxColor = opts.color.light;
      if (i >= scaledMargin && j >= scaledMargin && i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
        const iSrc = Math.floor((i - scaledMargin) / scale);
        const jSrc = Math.floor((j - scaledMargin) / scale);
        pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
      }
      imgData[posDst++] = pxColor.r;
      imgData[posDst++] = pxColor.g;
      imgData[posDst++] = pxColor.b;
      imgData[posDst] = pxColor.a;
    }
  }
};

/***/ }),

/***/ 10708:
/*!*********************************************!*\
  !*** ./src/app/pages/map/map-dark-style.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   darkStyle: () => (/* binding */ darkStyle)
/* harmony export */ });
const darkStyle = [{
  "elementType": "geometry",
  "stylers": [{
    "color": "#242f3e"
  }]
}, {
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#746855"
  }]
}, {
  "elementType": "labels.text.stroke",
  "stylers": [{
    "color": "#242f3e"
  }]
}, {
  "featureType": "administrative.locality",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#d59563"
  }]
}, {
  "featureType": "poi",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#d59563"
  }]
}, {
  "featureType": "poi.park",
  "elementType": "geometry",
  "stylers": [{
    "color": "#263c3f"
  }]
}, {
  "featureType": "poi.park",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#6b9a76"
  }]
}, {
  "featureType": "road",
  "elementType": "geometry",
  "stylers": [{
    "color": "#38414e"
  }]
}, {
  "featureType": "road",
  "elementType": "geometry.stroke",
  "stylers": [{
    "color": "#212a37"
  }]
}, {
  "featureType": "road",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#9ca5b3"
  }]
}, {
  "featureType": "road.highway",
  "elementType": "geometry",
  "stylers": [{
    "color": "#746855"
  }]
}, {
  "featureType": "road.highway",
  "elementType": "geometry.stroke",
  "stylers": [{
    "color": "#1f2835"
  }]
}, {
  "featureType": "road.highway",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#f3d19c"
  }]
}, {
  "featureType": "transit",
  "elementType": "geometry",
  "stylers": [{
    "color": "#2f3948"
  }]
}, {
  "featureType": "transit.station",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#d59563"
  }]
}, {
  "featureType": "water",
  "elementType": "geometry",
  "stylers": [{
    "color": "#17263c"
  }]
}, {
  "featureType": "water",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#515c6d"
  }]
}, {
  "featureType": "water",
  "elementType": "labels.text.stroke",
  "stylers": [{
    "color": "#17263c"
  }]
}];

/***/ }),

/***/ 73725:
/*!*******************************************************************!*\
  !*** ./node_modules/angularx-qrcode/fesm2022/angularx-qrcode.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QRCodeComponent: () => (/* binding */ QRCodeComponent),
/* harmony export */   QRCodeModule: () => (/* binding */ QRCodeModule)
/* harmony export */ });
/* harmony import */ var C_Users_Blessing_Kunaka_Desktop_mining_expo_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qrcode */ 6920);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 36480);





const _c0 = ["qrcElement"];
class QRCodeComponent {
  constructor(renderer, sanitizer) {
    this.renderer = renderer;
    this.sanitizer = sanitizer;
    this.allowEmptyString = false;
    this.colorDark = "#000000ff";
    this.colorLight = "#ffffffff";
    this.cssClass = "qrcode";
    this.elementType = "canvas";
    this.errorCorrectionLevel = "M";
    this.margin = 4;
    this.qrdata = "";
    this.scale = 4;
    this.width = 10;
    this.qrCodeURL = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.context = null;
  }
  ngOnChanges() {
    var _this = this;
    return (0,C_Users_Blessing_Kunaka_Desktop_mining_expo_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.createQRCode();
    })();
  }
  isValidQrCodeText(data) {
    if (this.allowEmptyString === false) {
      return !(typeof data === "undefined" || data === "" || data === "null" || data === null);
    }
    return !(typeof data === "undefined");
  }
  toDataURL(qrCodeConfig) {
    return new Promise((resolve, reject) => {
      (0,qrcode__WEBPACK_IMPORTED_MODULE_1__.toDataURL)(this.qrdata, qrCodeConfig, (err, url) => {
        if (err) {
          reject(err);
        } else {
          resolve(url);
        }
      });
    });
  }
  toCanvas(canvas, qrCodeConfig) {
    return new Promise((resolve, reject) => {
      (0,qrcode__WEBPACK_IMPORTED_MODULE_1__.toCanvas)(canvas, this.qrdata, qrCodeConfig, error => {
        if (error) {
          reject(error);
        } else {
          resolve("success");
        }
      });
    });
  }
  toSVG(qrCodeConfig) {
    return new Promise((resolve, reject) => {
      (0,qrcode__WEBPACK_IMPORTED_MODULE_1__.toString)(this.qrdata, qrCodeConfig, (err, url) => {
        if (err) {
          reject(err);
        } else {
          resolve(url);
        }
      });
    });
  }
  renderElement(element) {
    for (const node of this.qrcElement.nativeElement.childNodes) {
      this.renderer.removeChild(this.qrcElement.nativeElement, node);
    }
    this.renderer.appendChild(this.qrcElement.nativeElement, element);
  }
  createQRCode() {
    var _this2 = this;
    return (0,C_Users_Blessing_Kunaka_Desktop_mining_expo_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.version && _this2.version > 40) {
        console.warn("[angularx-qrcode] max value for `version` is 40");
        _this2.version = 40;
      } else if (_this2.version && _this2.version < 1) {
        console.warn("[angularx-qrcode]`min value for `version` is 1");
        _this2.version = 1;
      } else if (_this2.version !== undefined && isNaN(_this2.version)) {
        console.warn("[angularx-qrcode] version should be a number, defaulting to auto.");
        _this2.version = undefined;
      }
      try {
        if (!_this2.isValidQrCodeText(_this2.qrdata)) {
          throw new Error("[angularx-qrcode] Field `qrdata` is empty, set 'allowEmptyString=\"true\"' to overwrite this behaviour.");
        }
        if (_this2.isValidQrCodeText(_this2.qrdata) && _this2.qrdata === "") {
          _this2.qrdata = " ";
        }
        const config = {
          color: {
            dark: _this2.colorDark,
            light: _this2.colorLight
          },
          errorCorrectionLevel: _this2.errorCorrectionLevel,
          margin: _this2.margin,
          scale: _this2.scale,
          version: _this2.version,
          width: _this2.width
        };
        const centerImageSrc = _this2.imageSrc;
        const centerImageHeight = _this2.imageHeight || 40;
        const centerImageWidth = _this2.imageWidth || 40;
        switch (_this2.elementType) {
          case "canvas":
            {
              const canvasElement = _this2.renderer.createElement("canvas");
              _this2.context = canvasElement.getContext("2d");
              _this2.toCanvas(canvasElement, config).then(() => {
                if (_this2.ariaLabel) {
                  _this2.renderer.setAttribute(canvasElement, "aria-label", `${_this2.ariaLabel}`);
                }
                if (_this2.title) {
                  _this2.renderer.setAttribute(canvasElement, "title", `${_this2.title}`);
                }
                if (centerImageSrc && _this2.context) {
                  _this2.centerImage = new Image(centerImageWidth, centerImageHeight);
                  if (centerImageSrc !== _this2.centerImage.src) {
                    _this2.centerImage.src = centerImageSrc;
                  }
                  if (centerImageHeight !== _this2.centerImage.height) {
                    _this2.centerImage.height = centerImageHeight;
                  }
                  if (centerImageWidth !== _this2.centerImage.width) {
                    _this2.centerImage.width = centerImageWidth;
                  }
                  const centerImage = _this2.centerImage;
                  if (centerImage) {
                    centerImage.onload = () => {
                      var _this2$context;
                      (_this2$context = _this2.context) === null || _this2$context === void 0 ? void 0 : _this2$context.drawImage(centerImage, canvasElement.width / 2 - centerImageWidth / 2, canvasElement.height / 2 - centerImageHeight / 2, centerImageWidth, centerImageHeight);
                    };
                  }
                }
                _this2.renderElement(canvasElement);
                _this2.emitQRCodeURL(canvasElement);
              }).catch(e => {
                console.error("[angularx-qrcode] canvas error:", e);
              });
              break;
            }
          case "svg":
            {
              const svgParentElement = _this2.renderer.createElement("div");
              _this2.toSVG(config).then(svgString => {
                _this2.renderer.setProperty(svgParentElement, "innerHTML", svgString);
                const svgElement = svgParentElement.firstChild;
                _this2.renderer.setAttribute(svgElement, "height", `${_this2.width}`);
                _this2.renderer.setAttribute(svgElement, "width", `${_this2.width}`);
                _this2.renderElement(svgElement);
                _this2.emitQRCodeURL(svgElement);
              }).catch(e => {
                console.error("[angularx-qrcode] svg error:", e);
              });
              break;
            }
          case "url":
          case "img":
          default:
            {
              const imgElement = _this2.renderer.createElement("img");
              _this2.toDataURL(config).then(dataUrl => {
                if (_this2.alt) {
                  imgElement.setAttribute("alt", _this2.alt);
                }
                if (_this2.ariaLabel) {
                  imgElement.setAttribute("aria-label", _this2.ariaLabel);
                }
                imgElement.setAttribute("src", dataUrl);
                if (_this2.title) {
                  imgElement.setAttribute("title", _this2.title);
                }
                _this2.renderElement(imgElement);
                _this2.emitQRCodeURL(imgElement);
              }).catch(e => {
                console.error("[angularx-qrcode] img/url error:", e);
              });
            }
        }
      } catch (e) {
        console.error("[angularx-qrcode] Error generating QR Code:", e.message);
      }
    })();
  }
  emitQRCodeURL(element) {
    const className = element.constructor.name;
    if (className === SVGSVGElement.name) {
      const svgHTML = element.outerHTML;
      const blob = new Blob([svgHTML], {
        type: "image/svg+xml"
      });
      const urlSvg = URL.createObjectURL(blob);
      const urlSanitized = this.sanitizer.bypassSecurityTrustUrl(urlSvg);
      this.qrCodeURL.emit(urlSanitized);
      return;
    }
    let urlImage = "";
    if (className === HTMLCanvasElement.name) {
      urlImage = element.toDataURL("image/png");
    }
    if (className === HTMLImageElement.name) {
      urlImage = element.src;
    }
    fetch(urlImage).then(urlResponse => urlResponse.blob()).then(blob => URL.createObjectURL(blob)).then(url => this.sanitizer.bypassSecurityTrustUrl(url)).then(urlSanitized => {
      this.qrCodeURL.emit(urlSanitized);
    }).catch(error => {
      console.error("[angularx-qrcode] Error when fetching image/png URL: " + error);
    });
  }
}
QRCodeComponent.ɵfac = function QRCodeComponent_Factory(t) {
  return new (t || QRCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer));
};
QRCodeComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: QRCodeComponent,
  selectors: [["qrcode"]],
  viewQuery: function QRCodeComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.qrcElement = _t.first);
    }
  },
  inputs: {
    allowEmptyString: "allowEmptyString",
    colorDark: "colorDark",
    colorLight: "colorLight",
    cssClass: "cssClass",
    elementType: "elementType",
    errorCorrectionLevel: "errorCorrectionLevel",
    imageSrc: "imageSrc",
    imageHeight: "imageHeight",
    imageWidth: "imageWidth",
    margin: "margin",
    qrdata: "qrdata",
    scale: "scale",
    version: "version",
    width: "width",
    alt: "alt",
    ariaLabel: "ariaLabel",
    title: "title"
  },
  outputs: {
    qrCodeURL: "qrCodeURL"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
  decls: 2,
  vars: 2,
  consts: [["qrcElement", ""]],
  template: function QRCodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", null, 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.cssClass);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](QRCodeComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: "qrcode",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
      template: `<div #qrcElement [class]="cssClass"></div>`
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer
    }];
  }, {
    allowEmptyString: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    colorDark: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    colorLight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    cssClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    elementType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    errorCorrectionLevel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    imageSrc: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    imageHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    imageWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    margin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    qrdata: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    scale: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    version: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    alt: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    qrCodeURL: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    qrcElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
      args: ["qrcElement", {
        static: true
      }]
    }]
  });
})();
class QRCodeModule {}
QRCodeModule.ɵfac = function QRCodeModule_Factory(t) {
  return new (t || QRCodeModule)();
};
QRCodeModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: QRCodeModule
});
QRCodeModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](QRCodeModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
    args: [{
      providers: [],
      declarations: [QRCodeComponent],
      exports: [QRCodeComponent]
    }]
  }], null, null);
})();


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF9wYWdlc190YWJzLXBhZ2VfdGFicy1wYWdlX21vZHVsZV90cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFbUQ7OztBQUVuRCxNQXFCYUMsV0FBVztFQUN0QkMsWUFBbUJDLFdBQThCO0lBQTlCLEtBQUFBLFdBQVcsR0FBWEEsV0FBVztFQUFzQjtFQUVwREMsT0FBT0EsQ0FBQTtJQUNMO0lBQ0EsSUFBSSxDQUFDRCxXQUFXLENBQUNFLE9BQU8sRUFBRTtFQUM1QjtFQUVBQyxLQUFLQSxDQUFDQyxHQUFXO0lBQ2ZDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDRixHQUFHLEVBQUUsUUFBUSxDQUFDO0lBQzFCLElBQUksQ0FBQ0osV0FBVyxDQUFDRSxPQUFPLEVBQUU7RUFDNUI7O0FBWFdKLFdBQVc7bUJBQVhBLFdBQVcsRUFBQVMsK0RBQUEsQ0FBQUUsNkRBQUE7QUFBQTtBQUFYWCxXQUFXO1FBQVhBLFdBQVc7RUFBQVksU0FBQTtFQUFBQyxLQUFBO0VBQUFDLElBQUE7RUFBQUMsTUFBQTtFQUFBQyxRQUFBLFdBQUFDLHFCQUFBQyxFQUFBLEVBQUFDLEdBQUE7SUFBQSxJQUFBRCxFQUFBO01BbkJwQlQsNERBQUEsZUFBVTtNQUNTQSx3REFBQSxtQkFBQWEsK0NBQUE7UUFBQSxPQUFTSCxHQUFBLENBQUFkLEtBQUEsQ0FBTSw0Q0FBNEMsQ0FBQztNQUFBLEVBQUM7TUFDNUVJLDREQUFBLGdCQUFXO01BQUFBLG9EQUFBLGtCQUFXO01BQUFBLDBEQUFBLEVBQVk7TUFFcENBLDREQUFBLGtCQUFxRTtNQUFwREEsd0RBQUEsbUJBQUFnQiwrQ0FBQTtRQUFBLE9BQVNOLEdBQUEsQ0FBQWQsS0FBQSxDQUFNLGtDQUFrQyxDQUFDO01BQUEsRUFBQztNQUNsRUksNERBQUEsZ0JBQVc7TUFBQUEsb0RBQUEsb0JBQWE7TUFBQUEsMERBQUEsRUFBWTtNQUV0Q0EsNERBQUEsa0JBQXdFO01BQXZEQSx3REFBQSxtQkFBQWlCLCtDQUFBO1FBQUEsT0FBU1AsR0FB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QUUsQ0FBQyxFQUFFLENBQUMsRUFDVixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQ1gsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUNaLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFDWixDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQ1osQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUNiLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFDYixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQ2IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUNiLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFDYixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQ2IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUNiLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFDYixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQ2IsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUNkLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFDZCxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQ2QsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUNkLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFDZCxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQ2QsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUNkLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFDZCxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQ2QsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUNkLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFDZCxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQ2QsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUNkLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFDZCxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQ2QsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUNkLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FDZjtBQUVELE1BQU1DLGtCQUFrQixHQUFHO0FBQzNCO0FBQ0UsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUNiLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFDZCxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQ2QsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUNkLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFDZCxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQ2YsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUNoQixFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQ2hCLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFDakIsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUNqQixFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQ2pCLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFDakIsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUNsQixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQ2xCLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFDbEIsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUNsQixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQ2xCLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFDbEIsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUNsQixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQ2xCLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFDbEIsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUNsQixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQ2xCLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFDbEIsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUNuQixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQ25CLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFDcEIsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUNwQixHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQ3BCLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFDcEIsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUNwQixHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQ3BCLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFDcEIsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUNyQixHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQ3JCLEdBQUcsRUFBRSxJQUFJ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QUM7TUFDL0Jyc0IsT0FBTyxFQUFFLENBQUNxc0IsZUFBZTtJQUM3QixDQUFDO0VBQ1QsQ0FBQyxDQUFDO0FBQUEiLCJzb3VyY2VzIjpbIi4vc3JjL2FwcC9wYWdlcy9hYm91dC1wb3BvdmVyL2Fib3V0LXBvcG92ZXIudHMiLCIuL3NyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQtcm91dGluZy5tb2R1bGUudHMiLCIuL3NyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQubW9kdWxlLnRzIiwiLi9zcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LnRzIiwiLi9zcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0Lmh0bWwiLCIuL3NyYy9hcHAvcGFnZXMvbWFwL21hcC1yb3V0aW5nLm1vZHVsZS50cyIsIi4vc3JjL2FwcC9wYWdlcy9tYXAvbWFwLm1vZHVsZS50cyIsIi4vc3JjL2FwcC9wYWdlcy9tYXAvbWFwLnRzIiwiLi9zcmMvYXBwL3BhZ2VzL21hcC9tYXAuaHRtbCIsIi4vc3JjL2FwcC9wYWdlcy9zY2FubmVyL3NjYW5uZXItcm91dGluZy5tb2R1bGUudHMiLCIuL3NyYy9hcHAvcGFnZXMvc2Nhbm5lci9zY2FubmVyLm1vZHVsZS50cyIsIi4vc3JjL2FwcC9wYWdlcy9zY2FubmVyL3NjYW5uZXIudHMiLCIuL3NyYy9hcHAvcGFnZXMvc2Nhbm5lci9zY2FubmVyLmh0bWwiLCIuL3NyYy9hcHAvcGFnZXMvc2Vzc2lvbi1kZXRhaWwvc2Vzc2lvbi1kZXRhaWwtcm91dGluZy5tb2R1bGUudHMiLCIuL3NyYy9hcHAvcGFnZXMvc2Vzc2lvbi1kZXRhaWwvc2Vzc2lvbi1kZXRhaWwubW9kdWxlLnRzIiwiLi9zcmMvYXBwL3BhZ2VzL3Nlc3Npb24tZGV0YWlsL3Nlc3Npb24tZGV0YWlsLnRzIiwiLi9zcmMvYXBwL3BhZ2VzL3Nlc3Npb24tZGV0YWlsL3Nlc3Npb24tZGV0YWlsLmh0bWwiLCIuL3NyYy9hcHAvcGFnZXMvc3BlYWtlci1kZXRhaWwvc3BlYWtlci1kZXRhaWwtcm91dGluZy5tb2R1bGUudHMiLCIuL3NyYy9hcHAvcGFnZXMvc3BlYWtlci1kZXRhaWwvc3BlYWtlci1kZXRhaWwubW9kdWxlLnRzIiwiLi9zcmMvYXBwL3BhZ2VzL3NwZWFrZXItZGV0YWlsL3NwZWFrZXItZGV0YWlsLnRzIiwiLi9zcmMvYXBwL3BhZ2VzL3NwZWFrZXItZGV0YWlsL3NwZWFrZXItZGV0YWlsLmh0bWwiLCIuL3NyYy9hcHAvcGFnZXMvc3BlYWtlci1saXN0L3NwZWFrZXItbGlzdC1yb3V0aW5nLm1vZHVsZS50cyIsIi4vc3JjL2FwcC9wYWdlcy9zcGVha2VyLWxpc3Qvc3BlYWtlci1saXN0Lm1vZHVsZS50cyIsIi4vc3JjL2FwcC9wYWdlcy9zcGVha2VyLWxpc3Qvc3BlYWtlci1saXN0LnRzIiwiLi9zcmMvYXBwL3BhZ2VzL3NwZWFrZXItbGlzdC9zcGVha2VyLWxpc3QuaHRtbCIsIi4vc3JjL2FwcC9wYWdlcy90YWJzLXBhZ2UvdGFicy1wYWdlLXJvdXRpbmcubW9kdWxlLnRzIiwiLi9zcmMvYXBwL3BhZ2VzL3RhYnMtcGFnZS90YWJzLXBhZ2UubW9kdWxlLnRzIiwiLi9zcmMvYXBwL3BhZ2VzL3RhYnMtcGFnZS90YWJzLXBhZ2UudHMiLCIuL3NyYy9hcHAvcGFnZXMvdGFicy1wYWdlL3RhYnMtcGFnZS5odG1sIiwiLi9ub2RlX21vZHVsZXMvQGNhcGFjaXRvci1jb21tdW5pdHkvYmFyY29kZS1zY2FubmVyL2Rpc3QvZXNtL2RlZmluaXRpb25zLmpzIiwiLi9ub2RlX21vZHVsZXMvQGNhcGFjaXRvci1jb21tdW5pdHkvYmFyY29kZS1zY2FubmVyL2Rpc3QvZXNtL2luZGV4LmpzIiwiLi9ub2RlX21vZHVsZXMvZGlqa3N0cmFqcy9kaWprc3RyYS5qcyIsIi4vbm9kZV9tb2R1bGVzL2VuY29kZS11dGY4L2luZGV4LmpzIiwiLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9icm93c2VyLmpzIiwiLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jYW4tcHJvbWlzZS5qcyIsIi4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS9hbGlnbm1lbnQtcGF0dGVybi5qcyIsIi4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS9hbHBoYW51bWVyaWMtZGF0YS5qcyIsIi4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS9iaXQtYnVmZmVyLmpzIiwiLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL2JpdC1tYXRyaXguanMiLCIuL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL2NvcmUvYnl0ZS1kYXRhLmpzIiwiLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL2Vycm9yLWNvcnJlY3Rpb24tY29kZS5qcyIsIi4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS9lcnJvci1jb3JyZWN0aW9uLWxldmVsLmpzIiwiLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL2ZpbmRlci1wYXR0ZXJuLmpzIiwiLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL2Zvcm1hdC1pbmZvLmpzIiwiLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL2dhbG9pcy1maWVsZC5qcyIsIi4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS9rYW5qaS1kYXRhLmpzIiwiLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL21hc2stcGF0dGVybi5qcyIsIi4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS9tb2RlLmpzIiwiLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL251bWVyaWMtZGF0YS5qcyIsIi4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS9wb2x5bm9taWFsLmpzIiwiLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL3FyY29kZS5qcyIsIi4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS9yZWVkLXNvbG9tb24tZW5jb2Rlci5qcyIsIi4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS9yZWdleC5qcyIsIi4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS9zZWdtZW50cy5qcyIsIi4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS91dGlscy5qcyIsIi4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvY29yZS92ZXJzaW9uLWNoZWNrLmpzIiwiLi9ub2RlX21vZHVsZXMvcXJjb2RlL2xpYi9jb3JlL3ZlcnNpb24uanMiLCIuL25vZGVfbW9kdWxlcy9xcmNvZGUvbGliL3JlbmRlcmVyL2NhbnZhcy5qcyIsIi4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvcmVuZGVyZXIvc3ZnLXRhZy5qcyIsIi4vbm9kZV9tb2R1bGVzL3FyY29kZS9saWIvcmVuZGVyZXIvdXRpbHMuanMiLCIuL3NyYy9hcHAvcGFnZXMvbWFwL21hcC1kYXJrLXN0eWxlLmpzIiwiLi9ub2RlX21vZHVsZXMvYW5ndWxhcngtcXJjb2RlL2Zlc20yMDIyL2FuZ3VsYXJ4LXFyY29kZS5tanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb3BvdmVyQ29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8aW9uLWxpc3Q+XHJcbiAgICAgIDxpb24taXRlbSBidXR0b24gKGNsaWNrKT1cImNsb3NlKCdodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9nZXR0aW5nLXN0YXJ0ZWQnKVwiPlxyXG4gICAgICAgIDxpb24tbGFiZWw+TGVhcm4gSW9uaWM8L2lvbi1sYWJlbD5cclxuICAgICAgPC9pb24taXRlbT5cclxuICAgICAgPGlvbi1pdGVtIGJ1dHRvbiAoY2xpY2spPVwiY2xvc2UoJ2h0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvJylcIj5cclxuICAgICAgICA8aW9uLWxhYmVsPkRvY3VtZW50YXRpb248L2lvbi1sYWJlbD5cclxuICAgICAgPC9pb24taXRlbT5cclxuICAgICAgPGlvbi1pdGVtIGJ1dHRvbiAoY2xpY2spPVwiY2xvc2UoJ2h0dHBzOi8vc2hvd2Nhc2UuaW9uaWNmcmFtZXdvcmsuY29tJylcIj5cclxuICAgICAgICA8aW9uLWxhYmVsPlNob3djYXNlPC9pb24tbGFiZWw+XHJcbiAgICAgIDwvaW9uLWl0ZW0+XHJcbiAgICAgIDxpb24taXRlbSBidXR0b24gKGNsaWNrKT1cImNsb3NlKCdodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYycpXCI+XHJcbiAgICAgICAgPGlvbi1sYWJlbD5HaXRIdWIgUmVwbzwvaW9uLWxhYmVsPlxyXG4gICAgICA8L2lvbi1pdGVtPlxyXG4gICAgICA8aW9uLWl0ZW0gYnV0dG9uIChjbGljayk9XCJzdXBwb3J0KClcIj5cclxuICAgICAgICA8aW9uLWxhYmVsPlN1cHBvcnQ8L2lvbi1sYWJlbD5cclxuICAgICAgPC9pb24taXRlbT5cclxuICAgIDwvaW9uLWxpc3Q+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9wb3ZlclBhZ2Uge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwb3BvdmVyQ3RybDogUG9wb3ZlckNvbnRyb2xsZXIpIHt9XHJcblxyXG4gIHN1cHBvcnQoKSB7XHJcbiAgICAvLyB0aGlzLmFwcC5nZXRSb290TmF2cygpWzBdLnB1c2goJy9zdXBwb3J0Jyk7XHJcbiAgICB0aGlzLnBvcG92ZXJDdHJsLmRpc21pc3MoKTtcclxuICB9XHJcblxyXG4gIGNsb3NlKHVybDogc3RyaW5nKSB7XHJcbiAgICB3aW5kb3cub3Blbih1cmwsICdfYmxhbmsnKTtcclxuICAgIHRoaXMucG9wb3ZlckN0cmwuZGlzbWlzcygpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBBYm91dFBhZ2UgfSBmcm9tICcuL2Fib3V0JztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gIHtcclxuICAgIHBhdGg6ICcnLFxyXG4gICAgY29tcG9uZW50OiBBYm91dFBhZ2VcclxuICB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFib3V0UGFnZVJvdXRpbmdNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcclxuXHJcbmltcG9ydCB7IEFib3V0UGFnZSB9IGZyb20gJy4vYWJvdXQnO1xyXG5pbXBvcnQgeyBQb3BvdmVyUGFnZSB9IGZyb20gJy4uL2Fib3V0LXBvcG92ZXIvYWJvdXQtcG9wb3Zlcic7XHJcbmltcG9ydCB7IEFib3V0UGFnZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2Fib3V0LXJvdXRpbmcubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIElvbmljTW9kdWxlLFxyXG4gICAgICAgIEFib3V0UGFnZVJvdXRpbmdNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtBYm91dFBhZ2UsIFBvcG92ZXJQYWdlXSxcclxuICAgIGJvb3RzdHJhcDogW0Fib3V0UGFnZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFib3V0TW9kdWxlIHt9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9wb3ZlckNvbnRyb2xsZXIgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XHJcblxyXG5pbXBvcnQgeyBQb3BvdmVyUGFnZSB9IGZyb20gJy4uL2Fib3V0LXBvcG92ZXIvYWJvdXQtcG9wb3Zlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BhZ2UtYWJvdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnYWJvdXQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYWJvdXQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWJvdXRQYWdlIHtcclxuICBsb2NhdGlvbiA9ICd3aW5kaG9layc7XHJcbiAgY29uZmVyZW5jZURhdGUgPSAnMjAyMy0wOC0zMSc7XHJcblxyXG4gIHNlbGVjdE9wdGlvbnMgPSB7XHJcbiAgICBoZWFkZXI6ICdTZWxlY3QgYSBMb2NhdGlvbidcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcG9wb3ZlckN0cmw6IFBvcG92ZXJDb250cm9sbGVyKSB7IH1cclxuXHJcbiAgYXN5bmMgcHJlc2VudFBvcG92ZXIoZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBjb25zdCBwb3BvdmVyID0gYXdhaXQgdGhpcy5wb3BvdmVyQ3RybC5jcmVhdGUoe1xyXG4gICAgICBjb21wb25lbnQ6IFBvcG92ZXJQYWdlLFxyXG4gICAgICBldmVudFxyXG4gICAgfSk7XHJcbiAgICBhd2FpdCBwb3BvdmVyLnByZXNlbnQoKTtcclxuICB9XHJcbn1cclxuIiwiPGlvbi1jb250ZW50PlxyXG4gIDxpb24taGVhZGVyIGNsYXNzPVwiaW9uLW5vLWJvcmRlclwiPlxyXG4gICAgPGlvbi10b29sYmFyPlxyXG4gICAgICA8aW9uLWJ1dHRvbnMgc2xvdD1cInN0YXJ0XCI+XHJcbiAgICAgICAgPGlvbi1tZW51LWJ1dHRvbj48L2lvbi1tZW51LWJ1dHRvbj5cclxuICAgICAgPC9pb24tYnV0dG9ucz5cclxuICAgICAgPGlvbi1idXR0b25zIHNsb3Q9XCJlbmRcIj5cclxuICAgICAgICA8aW9uLWJ1dHRvbiAoY2xpY2spPVwicHJlc2VudFBvcG92ZXIoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJpY29uLW9ubHlcIiBpb3M9XCJlbGxpcHNpcy1ob3Jpem9udGFsXCIgbWQ9XCJlbGxpcHNpcy12ZXJ0aWNhbFwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgPC9pb24tYnV0dG9uPlxyXG4gICAgICA8L2lvbi1idXR0b25zPlxyXG4gICAgPC9pb24tdG9vbGJhcj5cclxuICA8L2lvbi1oZWFkZXI+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJhYm91dC1oZWFkZXJcIj5cclxuICAgIDwhLS0gSW5zdGVhZCBvZiBsb2FkaW5nIGFuIGltYWdlIGVhY2ggdGltZSB0aGUgc2VsZWN0IGNoYW5nZXMsIHVzZSBvcGFjaXR5IHRvIHRyYW5zaXRpb24gdGhlbSAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJhYm91dC1pbWFnZSBtYWRpc29uXCIgW25nU3R5bGVdPVwibG9jYXRpb24gPT09ICdtYWRpc29uJyAmJiB7J29wYWNpdHknOiAnMSd9XCI+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYWJvdXQtaW1hZ2UgYXVzdGluXCIgW25nU3R5bGVdPVwibG9jYXRpb24gPT09ICdhdXN0aW4nICYmIHsnb3BhY2l0eSc6ICcxJ31cIj48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJhYm91dC1pbWFnZSBjaGljYWdvXCIgW25nU3R5bGVdPVwibG9jYXRpb24gPT09ICdjaGljYWdvJyAmJiB7J29wYWNpdHknOiAnMSd9XCI+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYWJvdXQtaW1hZ2Ugc2VhdHRsZVwiIFtuZ1N0eWxlXT1cImxvY2F0aW9uID09PSAnc2VhdHRsZScgJiYgeydvcGFjaXR5JzogJzEnfVwiPjwvZGl2PlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2IGNsYXNzPVwiYWJvdXQtaW5mb1wiPlxyXG4gICAgPGgzIGNsYXNzPVwiaW9uLXBhZGRpbmctdG9wIGlvbi1wYWRkaW5nLXN0YXJ0XCI+QWJvdXQ8L2gzPlxyXG5cclxuICAgIDxwIGNsYXNzPVwiaW9uLXBhZGRpbmctc3RhcnQgaW9uLXBhZGRpbmctZW5kXCI+XHJcbiAgICAgIE1pbmluZyBFeHBvIGFuZCBDb25mZXJlbmNlIHByb21pc2VzIHRvIGJlIGEgZHluYW1pYyBldmVudCBicmluZ2luZyB0b2dldGhlciBpbmR1c3RyeSBsZWFkZXJzLCBleHBlcnRzLCBhbmQgc3Rha2Vob2xkZXJzIGluIHRoZSBtaW5pbmcgc2VjdG9yLiBUaGlzIHllYXIncyBleHBvIGNlbnRlcnMgYXJvdW5kIHRoZSB0aGVtZSBvZiBcIkVtYnJhY2luZyBJbm5vdmF0aW9uIGZvciBTdXN0YWluYWJsZSBNaW5pbmcsXCIgcmVmbGVjdGluZyB0aGUgZ3Jvd2luZyBlbXBoYXNpcyBvbiByZXNwb25zaWJsZSBwcmFjdGljZXMgYW5kIGN1dHRpbmctZWRnZSB0ZWNobm9sb2dpZXMgaW4gdGhlIG1pbmluZyBpbmR1c3RyeS4gIFxyXG4gICAgPC9wPlxyXG5cclxuICAgIDxoMyBjbGFzcz1cImlvbi1wYWRkaW5nLXRvcCBpb24tcGFkZGluZy1zdGFydFwiPkRldGFpbHM8L2gzPlxyXG5cclxuICAgIDxpb24tbGlzdCBsaW5lcz1cIm5vbmVcIj5cclxuICAgICAgPGlvbi1pdGVtPlxyXG4gICAgICAgIDxpb24tc2VsZWN0IGxhYmVsPVwiTG9jYXRpb25cIiBbKG5nTW9kZWwpXT1cImxvY2F0aW9uXCIgW2ludGVyZmFjZU9wdGlvbnNdPVwic2VsZWN0T3B0aW9uc1wiPlxyXG4gICAgICAgICAgPGlvbi1zZWxlY3Qtb3B0aW9uIHZhbHVlPVwibWFkaXNvblwiPldpbmRob2VrIFNob3dncm91bmRzPC9pb24tc2VsZWN0LW9wdGlvbj5cclxuICAgICAgICAgIDxpb24tc2VsZWN0LW9wdGlvbiB2YWx1ZT1cImF1c3RpblwiPkF1c3NhbnBsYXR6PC9pb24tc2VsZWN0LW9wdGlvbj5cclxuICAgICAgICAgIDxpb24tc2VsZWN0LW9wdGlvbiB2YWx1ZT1cImNoaWNhZ29cIj5XaW5kaG9lazwvaW9uLXNlbGVjdC1vcHRpb24+XHJcbiAgICAgICAgICA8aW9uLXNlbGVjdC1vcHRpb24gdmFsdWU9XCJzZWF0dGxlXCI+TmFtaWJpYTwvaW9uLXNlbGVjdC1vcHRpb24+XHJcbiAgICAgICAgPC9pb24tc2VsZWN0PlxyXG4gICAgICA8L2lvbi1pdGVtPlxyXG4gICAgICA8aW9uLWl0ZW0gYnV0dG9uPVwidHJ1ZVwiIGlkPVwib3Blbi1kYXRlLWlucHV0XCI+XHJcbiAgICAgICAgPGlvbi1sYWJlbD5cclxuICAgICAgICAgIERhdGVcclxuICAgICAgICA8L2lvbi1sYWJlbD5cclxuICAgICAgICA8aW9uLXRleHQgc2xvdD1cImVuZFwiPnt7IGNvbmZlcmVuY2VEYXRlIHwgZGF0ZTogJ21lZGl1bURhdGUnIH19PC9pb24tdGV4dD5cclxuICAgICAgICA8aW9uLXBvcG92ZXIgaWQ9XCJkYXRlLWlucHV0LXBvcG92ZXJcIiB0cmlnZ2VyPVwib3Blbi1kYXRlLWlucHV0XCIgW3Nob3dCYWNrZHJvcF09XCJmYWxzZVwiIHNpZGU9XCJ0b3BcIiBhbGlnbm1lbnQ9XCJlbmRcIj5cclxuICAgICAgICAgIDxuZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPGlvbi1kYXRldGltZSBtYXg9XCIyMDU2XCIgWyhuZ01vZGVsKV09XCJjb25mZXJlbmNlRGF0ZVwiIHByZXNlbnRhdGlvbj1cImRhdGVcIj48L2lvbi1kYXRldGltZT5cclxuICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgPC9pb24tcG9wb3Zlcj5cclxuICAgICAgPC9pb24taXRlbT5cclxuICAgIDwvaW9uLWxpc3Q+XHJcblxyXG4gICAgPGgzIGNsYXNzPVwiaW9uLXBhZGRpbmctdG9wIGlvbi1wYWRkaW5nLXN0YXJ0XCI+SW50ZXJuZXQ8L2gzPlxyXG5cclxuICAgIDxpb24tbGlzdCBsaW5lcz1cIm5vbmVcIj5cclxuICAgICAgPGlvbi1pdGVtPlxyXG4gICAgICAgIDxpb24tbGFiZWw+XHJcbiAgICAgICAgICBXaWZpIG5ldHdvcmtcclxuICAgICAgICA8L2lvbi1sYWJlbD5cclxuICAgICAgICA8aW9uLWxhYmVsIGNsYXNzPVwiaW9uLXRleHQtZW5kXCI+XHJcbiAgICAgICAgICBtaW5pbmdleHBve3tjb25mZXJlbmNlRGF0ZSB8IGRhdGU6ICd5J319XHJcbiAgICAgICAgPC9pb24tbGFiZWw+XHJcbiAgICAgIDwvaW9uLWl0ZW0+XHJcbiAgICAgIDxpb24taXRlbT5cclxuICAgICAgICA8aW9uLWxhYmVsPlxyXG4gICAgICAgICAgUGFzc3dvcmRcclxuICAgICAgICA8L2lvbi1sYWJlbD5cclxuICAgICAgICA8aW9uLWxhYmVsIGNsYXNzPVwiaW9uLXRleHQtZW5kXCI+XHJcbiAgICAgICAgICBtaW5pbmdleHBvXHJcbiAgICAgICAgPC9pb24tbGFiZWw+XHJcbiAgICAgIDwvaW9uLWl0ZW0+XHJcbiAgICA8L2lvbi1saXN0PlxyXG4gIDwvZGl2PlxyXG48L2lvbi1jb250ZW50PlxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBNYXBQYWdlIH0gZnJvbSAnLi9tYXAnO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAge1xyXG4gICAgcGF0aDogJycsXHJcbiAgICBjb21wb25lbnQ6IE1hcFBhZ2VcclxuICB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hcFBhZ2VSb3V0aW5nTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcclxuXHJcbmltcG9ydCB7IE1hcFBhZ2UgfSBmcm9tICcuL21hcCc7XHJcbmltcG9ydCB7IE1hcFBhZ2VSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9tYXAtcm91dGluZy5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBJb25pY01vZHVsZSxcclxuICAgIE1hcFBhZ2VSb3V0aW5nTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE1hcFBhZ2UsXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFwTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEluamVjdCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbmZlcmVuY2VEYXRhIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2NvbmZlcmVuY2UtZGF0YSc7XHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IGRhcmtTdHlsZSB9IGZyb20gJy4vbWFwLWRhcmstc3R5bGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwYWdlLW1hcCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdtYXAuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbWFwLnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFwUGFnZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIEBWaWV3Q2hpbGQoJ21hcENhbnZhcycsIHsgc3RhdGljOiB0cnVlIH0pIG1hcEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IERvY3VtZW50LFxyXG4gICAgcHVibGljIGNvbmZEYXRhOiBDb25mZXJlbmNlRGF0YSxcclxuICAgIHB1YmxpYyBwbGF0Zm9ybTogUGxhdGZvcm0pIHt9XHJcblxyXG4gIGFzeW5jIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIGNvbnN0IGFwcEVsID0gdGhpcy5kb2MucXVlcnlTZWxlY3RvcignaW9uLWFwcCcpO1xyXG4gICAgbGV0IGlzRGFyayA9IGZhbHNlO1xyXG4gICAgbGV0IHN0eWxlID0gW107XHJcbiAgICBpZiAoYXBwRWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXJrLXRoZW1lJykpIHtcclxuICAgICAgc3R5bGUgPSBkYXJrU3R5bGU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ29vZ2xlTWFwcyA9IGF3YWl0IGdldEdvb2dsZU1hcHMoXHJcbiAgICAgICdZT1VSX0FQSV9LRVlfSEVSRSdcclxuICAgICk7XHJcblxyXG4gICAgbGV0IG1hcDtcclxuXHJcbiAgICB0aGlzLmNvbmZEYXRhLmdldE1hcCgpLnN1YnNjcmliZSgobWFwRGF0YTogYW55KSA9PiB7XHJcbiAgICAgIGNvbnN0IG1hcEVsZSA9IHRoaXMubWFwRWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAgICAgbWFwID0gbmV3IGdvb2dsZU1hcHMuTWFwKG1hcEVsZSwge1xyXG4gICAgICAgIGNlbnRlcjogbWFwRGF0YS5maW5kKChkOiBhbnkpID0+IGQuY2VudGVyKSxcclxuICAgICAgICB6b29tOiAxNixcclxuICAgICAgICBzdHlsZXM6IHN0eWxlXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbWFwRGF0YS5mb3JFYWNoKChtYXJrZXJEYXRhOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBpbmZvV2luZG93ID0gbmV3IGdvb2dsZU1hcHMuSW5mb1dpbmRvdyh7XHJcbiAgICAgICAgICBjb250ZW50OiBgPGg1PiR7bWFya2VyRGF0YS5uYW1lfTwvaDU+YFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBtYXJrZXIgPSBuZXcgZ29vZ2xlTWFwcy5NYXJrZXIoe1xyXG4gICAgICAgICAgcG9zaXRpb246IG1hcmtlckRhdGEsXHJcbiAgICAgICAgICBtYXAsXHJcbiAgICAgICAgICB0aXRsZTogbWFya2VyRGF0YS5uYW1lXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG1hcmtlci5hZGRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICBpbmZvV2luZG93Lm9wZW4obWFwLCBtYXJrZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGdvb2dsZU1hcHMuZXZlbnQuYWRkTGlzdGVuZXJPbmNlKG1hcCwgJ2lkbGUnLCAoKSA9PiB7XHJcbiAgICAgICAgbWFwRWxlLmNsYXNzTGlzdC5hZGQoJ3Nob3ctbWFwJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XHJcbiAgICAgIG11dGF0aW9ucy5mb3JFYWNoKChtdXRhdGlvbikgPT4ge1xyXG4gICAgICAgIGlmIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnY2xhc3MnKSB7XHJcbiAgICAgICAgICBjb25zdCBlbCA9IG11dGF0aW9uLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgIGlzRGFyayA9IGVsLmNsYXNzTGlzdC5jb250YWlucygnZGFyay10aGVtZScpO1xyXG4gICAgICAgICAgaWYgKG1hcCAmJiBpc0RhcmspIHtcclxuICAgICAgICAgICAgbWFwLnNldE9wdGlvbnMoe3N0eWxlczogZGFya1N0eWxlfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKG1hcCkge1xyXG4gICAgICAgICAgICBtYXAuc2V0T3B0aW9ucyh7c3R5bGVzOiBbXX0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIG9ic2VydmVyLm9ic2VydmUoYXBwRWwsIHtcclxuICAgICAgYXR0cmlidXRlczogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRHb29nbGVNYXBzKGFwaUtleTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICBjb25zdCB3aW4gPSB3aW5kb3cgYXMgYW55O1xyXG4gIGNvbnN0IGdvb2dsZU1vZHVsZSA9IHdpbi5nb29nbGU7XHJcbiAgaWYgKGdvb2dsZU1vZHVsZSAmJiBnb29nbGVNb2R1bGUubWFwcykge1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShnb29nbGVNb2R1bGUubWFwcyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICBzY3JpcHQuc3JjID0gYGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz9rZXk9JHthcGlLZXl9JnY9My4zMWA7XHJcbiAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xyXG4gICAgc2NyaXB0LmRlZmVyID0gdHJ1ZTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGdvb2dsZU1vZHVsZTIgPSB3aW4uZ29vZ2xlO1xyXG4gICAgICBpZiAoZ29vZ2xlTW9kdWxlMiAmJiBnb29nbGVNb2R1bGUyLm1hcHMpIHtcclxuICAgICAgICByZXNvbHZlKGdvb2dsZU1vZHVsZTIubWFwcyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVqZWN0KCdnb29nbGUgbWFwcyBub3QgYXZhaWxhYmxlJyk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfSk7XHJcbn1cclxuXHJcbiIsIjxpb24taGVhZGVyPlxyXG4gIDxpb24tdG9vbGJhcj5cclxuICAgIDxpb24tYnV0dG9ucyBzbG90PVwic3RhcnRcIj5cclxuICAgICAgPGlvbi1tZW51LWJ1dHRvbj48L2lvbi1tZW51LWJ1dHRvbj5cclxuICAgIDwvaW9uLWJ1dHRvbnM+XHJcbiAgICA8aW9uLXRpdGxlPk1hcDwvaW9uLXRpdGxlPlxyXG4gIDwvaW9uLXRvb2xiYXI+XHJcbjwvaW9uLWhlYWRlcj5cclxuXHJcbjxpb24tY29udGVudD5cclxuICA8ZGl2ICNtYXBDYW52YXMgY2xhc3M9XCJtYXAtY2FudmFzXCI+PC9kaXY+XHJcbjwvaW9uLWNvbnRlbnQ+XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU2Nhbm5lclBhZ2UgfSBmcm9tICcuL3NjYW5uZXInO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAge1xyXG4gICAgcGF0aDogJycsXHJcbiAgICBjb21wb25lbnQ6IFNjYW5uZXJQYWdlXHJcbiAgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxyXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTY2FubmVyUGFnZVJvdXRpbmdNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBTY2FubmVyUGFnZSB9IGZyb20gJy4vc2Nhbm5lcic7XHJcbmltcG9ydCB7IFNjYW5uZXJQYWdlUm91dGluZ01vZHVsZSB9IGZyb20gJy4vc2Nhbm5lci1yb3V0aW5nLm1vZHVsZSc7XHJcbmltcG9ydCB7IFFSQ29kZU1vZHVsZSB9IGZyb20gJ2FuZ3VsYXJ4LXFyY29kZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIElvbmljTW9kdWxlLFxyXG4gICAgU2Nhbm5lclBhZ2VSb3V0aW5nTW9kdWxlLFxyXG4gICAgUVJDb2RlTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFNjYW5uZXJQYWdlLFxyXG4gICAgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2Nhbm5lck1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbmplY3QsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbmZlcmVuY2VEYXRhIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2NvbmZlcmVuY2UtZGF0YSc7XHJcbmltcG9ydCB7IFBsYXRmb3JtLCBBbGVydENvbnRyb2xsZXIgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XHJcbmltcG9ydCB7IERPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBkYXJrU3R5bGUgfSBmcm9tICcuL3NjYW5uZXItZGFyay1zdHlsZSc7XHJcbmltcG9ydCB7IEJhcmNvZGVTY2FubmVyIH0gZnJvbSAnQGNhcGFjaXRvci1jb21tdW5pdHkvYmFyY29kZS1zY2FubmVyJztcclxuaW1wb3J0IHsgYW55LCByZWplY3QsIHJlc29sdmUgfSBmcm9tICdjeXByZXNzL3R5cGVzL2JsdWViaXJkJztcclxuaW1wb3J0IHsgYXN5bmMgfSBmcm9tICdyeGpzL2ludGVybmFsL3NjaGVkdWxlci9hc3luYyc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwYWdlLXNjYW5uZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnc2Nhbm5lci5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zY2FubmVyLnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2Nhbm5lclBhZ2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIHFyQ29kZVN0cmluZyA9ICdUaGlzIGlzIHRoZSBjb2RlIGZvciB0aGUgbWluaW5nIGV4cG8nO1xyXG4gIHNjYW5uZWRSZXN1bHQ6IGFueTtcclxuICBjb250ZW50X3Zpc2liaWxpdHkgPSAnJztcclxuXHJcbiAgIGNvbnN0cnVjdG9yICgpIHt9XHJcbiAgICAgICBcclxuICAgIGFzeW5jIGNoZWNrUGVybWlzc2lvbigpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHN0YXR1cyA9IGF3YWl0IEJhcmNvZGVTY2FubmVyLmNoZWNrUGVybWlzc2lvbih7IGZvcmNlOnRydWUgfSk7XHJcbiAgICAgIGlmIChzdGF0dXMuZ3JhbnRlZCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgYXN5bmMgc3RhcnRTY2FuKCkgeyAgICBcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHBlcm1pc3Npb24gPSBhd2FpdCB0aGlzLmNoZWNrUGVybWlzc2lvbigpOyAgLy8gQ2hlY2sgY2FtZXJhIHBlcm1pc3Npb24gICAgXHJcbiAgICAgIGlmKCFwZXJtaXNzaW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgICBhd2FpdCBCYXJjb2RlU2Nhbm5lci5oaWRlQmFja2dyb3VuZCgpO1xyXG4gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKCdzY2FubmVyLWFjdGl2ZScpO1xyXG4gICAgIHRoaXMuY29udGVudF92aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgQmFyY29kZVNjYW5uZXIuc3RhcnRTY2FuKCk7IC8vIHN0YXJ0IHNjYW5uaW5nIGFuZCB3YWl0IGZvciBhIHJlc3VsdCBcclxuICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgQmFyY29kZVNjYW5uZXIuc2hvd0JhY2tncm91bmQoKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ3NjYW5uZXItYWN0aXZlJyk7XHJcbiAgICAgIHRoaXMuY29udGVudF92aXNpYmlsaXR5ID0gJyc7XHJcbiAgICAgIC8vIGlmIHRoZSByZXN1bHQgaGFzIGNvbnRlbnRcclxuICAgICAgaWYocmVzdWx0Py5oYXNDb250ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zY2FubmVkUmVzdWx0ID0gcmVzdWx0LmNvbnRlbnQ7ICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2Nhbm5lZFJlc3VsdCk7IC8vIGxvZyB0aGUgcmF3IHNjYW5uZWQgY29udGVudFxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB0aGlzLnN0b3BTY2FuKCk7XHJcbiAgICAgIH0gICBcclxuICAgfVxyXG4gICBcclxuICAgc3RvcFNjYW4oKSB7XHJcbiAgICBCYXJjb2RlU2Nhbm5lci5zaG93QmFja2dyb3VuZCgpO1xyXG4gICAgQmFyY29kZVNjYW5uZXIuc3RvcFNjYW4oKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QucmVtb3ZlKCdzY2FubmVyLWFjdGl2ZScpO1xyXG4gICAgdGhpcy5jb250ZW50X3Zpc2liaWxpdHkgPSAnJzsgXHJcbiAgfVxyXG5cclxuXHJcbiAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zdG9wU2NhbigpO1xyXG4gIH0gIFxyXG59XHJcblxyXG4gIFxyXG5cclxuXHJcblxyXG4gIFxyXG5cclxuIiwiPGlvbi1oZWFkZXIgW3N0eWxlLnZpc2liaWxpdHldPVwiY29udGVudF92aXNpYmlsaXR5XCI+XHJcbiAgPGlvbi10b29sYmFyIGNvbG9yPVwic2Vjb25kYXJ5XCI+XHJcbiAgICA8aW9uLWJ1dHRvbnMgc2xvdD1cInN0YXJ0XCI+XHJcbiAgICAgIDxpb24tbWVudS1idXR0b24+PC9pb24tbWVudS1idXR0b24+XHJcbiAgICA8L2lvbi1idXR0b25zPlxyXG4gICAgPGlvbi10aXRsZT5RUiBTY2FuPC9pb24tdGl0bGU+XHJcbiAgPC9pb24tdG9vbGJhcj5cclxuPC9pb24taGVhZGVyPlxyXG5cclxuPGlvbi1jb250ZW50IFtzdHlsZS52aXNpYmlsaXR5XT1cImNvbnRlbnRfdmlzaWJpbGl0eVwiPlxyXG4gICA8aW9uLWNhcmQtY29udGVudD5cclxuICAgPHFyY29kZSBcclxuICAgW3FyZGF0YV09XCJxckNvZGVTdHJpbmdcIlxyXG4gICBbd2lkdGhdPVwiMzU2XCIgXHJcbiAgIFtlcnJvckNvcnJlY3Rpb25MZXZlbF09XCInTSdcIj48L3FyY29kZT4gICAgXHJcbiAgPC9pb24tY2FyZC1jb250ZW50PlxyXG4gIDxpb24tYnV0dG9uIGV4cGFuZD1cImJsb2NrXCIgKGNsaWNrKT1cInN0YXJ0U2NhbigpXCI+XHJcbiAgPGlvbi1pY29uIG5hbWU9XCJzY2FuXCIgc2xvdD1cInN0YXJ0XCI+PC9pb24taWNvbj5cclxuICBTY2FuIFFSIENvZGVcclxuPC9pb24tYnV0dG9uPlxyXG5cclxuPGlvbi1pdGVtICpuZ0lmPVwic2Nhbm5lZFJlc3VsdFwiPlxyXG4gIDxpb24tbGFiZWwgY2xhc3M9XCJpb24tdGV4dC13cmFwXCI+U2Nhbm5lZCBSZXN1bHQ6IHt7c2Nhbm5lZFJlc3VsdH19PC9pb24tbGFiZWw+XHJcbjwvaW9uLWl0ZW0+XHJcblxyXG48aW9uLXJvdyBjbGFzcz1cInNjYW5uZXItYnV0dG9uc1wiPlxyXG4gIDxpb24tY29sIGNsYXNzPVwiaW9uLW5vLXBhZGRpbmdcIj5cclxuICAgIDxpb24tYnV0dG9uIGV4cGFuZD1cImZ1bGxcIiAoY2xpY2spPVwic3RvcFNjYW4oKVwiPkNyZWF0ZTwvaW9uLWJ1dHRvbj5cclxuICA8L2lvbi1jb2w+XHJcbjwvaW9uLXJvdz5cclxuPC9pb24tY29udGVudD5cclxuXHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFNlc3Npb25EZXRhaWxQYWdlIH0gZnJvbSAnLi9zZXNzaW9uLWRldGFpbCc7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAnJyxcclxuICAgIGNvbXBvbmVudDogU2Vzc2lvbkRldGFpbFBhZ2VcclxuICB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlc3Npb25EZXRhaWxQYWdlUm91dGluZ01vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IFNlc3Npb25EZXRhaWxQYWdlIH0gZnJvbSAnLi9zZXNzaW9uLWRldGFpbCc7XHJcbmltcG9ydCB7IFNlc3Npb25EZXRhaWxQYWdlUm91dGluZ01vZHVsZSB9IGZyb20gJy4vc2Vzc2lvbi1kZXRhaWwtcm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgSW9uaWNNb2R1bGUsXHJcbiAgICBTZXNzaW9uRGV0YWlsUGFnZVJvdXRpbmdNb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgU2Vzc2lvbkRldGFpbFBhZ2UsXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2Vzc2lvbkRldGFpbE1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDb25mZXJlbmNlRGF0YSB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9jb25mZXJlbmNlLWRhdGEnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFVzZXJEYXRhIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL3VzZXItZGF0YSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BhZ2Utc2Vzc2lvbi1kZXRhaWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3Nlc3Npb24tZGV0YWlsLnNjc3MnXSxcclxuICB0ZW1wbGF0ZVVybDogJ3Nlc3Npb24tZGV0YWlsLmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZXNzaW9uRGV0YWlsUGFnZSB7XHJcbiAgc2Vzc2lvbjogYW55O1xyXG4gIGlzRmF2b3JpdGUgPSBmYWxzZTtcclxuICBkZWZhdWx0SHJlZiA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZGF0YVByb3ZpZGVyOiBDb25mZXJlbmNlRGF0YSxcclxuICAgIHByaXZhdGUgdXNlclByb3ZpZGVyOiBVc2VyRGF0YSxcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXHJcbiAgKSB7IH1cclxuXHJcbiAgaW9uVmlld1dpbGxFbnRlcigpIHtcclxuICAgIHRoaXMuZGF0YVByb3ZpZGVyLmxvYWQoKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICBpZiAoZGF0YSAmJiBkYXRhLnNjaGVkdWxlICYmIGRhdGEuc2NoZWR1bGVbMF0gJiYgZGF0YS5zY2hlZHVsZVswXS5ncm91cHMpIHtcclxuICAgICAgICBjb25zdCBzZXNzaW9uSWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgnc2Vzc2lvbklkJyk7XHJcbiAgICAgICAgZm9yIChjb25zdCBncm91cCBvZiBkYXRhLnNjaGVkdWxlWzBdLmdyb3Vwcykge1xyXG4gICAgICAgICAgaWYgKGdyb3VwICYmIGdyb3VwLnNlc3Npb25zKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc2Vzc2lvbiBvZiBncm91cC5zZXNzaW9ucykge1xyXG4gICAgICAgICAgICAgIGlmIChzZXNzaW9uICYmIHNlc3Npb24uaWQgPT09IHNlc3Npb25JZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uID0gc2Vzc2lvbjtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmF2b3JpdGUgPSB0aGlzLnVzZXJQcm92aWRlci5oYXNGYXZvcml0ZShcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uLm5hbWVcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlvblZpZXdEaWRFbnRlcigpIHtcclxuICAgIHRoaXMuZGVmYXVsdEhyZWYgPSBgL2FwcC90YWJzL3NjaGVkdWxlYDtcclxuICB9XHJcblxyXG4gIHNlc3Npb25DbGljayhpdGVtOiBzdHJpbmcpIHtcclxuICAgIGNvbnNvbGUubG9nKCdDbGlja2VkJywgaXRlbSk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVGYXZvcml0ZSgpIHtcclxuICAgIGlmICh0aGlzLnVzZXJQcm92aWRlci5oYXNGYXZvcml0ZSh0aGlzLnNlc3Npb24ubmFtZSkpIHtcclxuICAgICAgdGhpcy51c2VyUHJvdmlkZXIucmVtb3ZlRmF2b3JpdGUodGhpcy5zZXNzaW9uLm5hbWUpO1xyXG4gICAgICB0aGlzLmlzRmF2b3JpdGUgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudXNlclByb3ZpZGVyLmFkZEZhdm9yaXRlKHRoaXMuc2Vzc2lvbi5uYW1lKTtcclxuICAgICAgdGhpcy5pc0Zhdm9yaXRlID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNoYXJlU2Vzc2lvbigpIHtcclxuICAgIGNvbnNvbGUubG9nKCdDbGlja2VkIHNoYXJlIHNlc3Npb24nKTtcclxuICB9XHJcbn1cclxuIiwiPGlvbi1oZWFkZXI+XHJcbiAgPGlvbi10b29sYmFyPlxyXG4gICAgPGlvbi1idXR0b25zIHNsb3Q9XCJzdGFydFwiPlxyXG4gICAgICA8aW9uLWJhY2stYnV0dG9uIFtkZWZhdWx0SHJlZl09XCJkZWZhdWx0SHJlZlwiPjwvaW9uLWJhY2stYnV0dG9uPlxyXG4gICAgPC9pb24tYnV0dG9ucz5cclxuICAgIDxpb24tYnV0dG9ucyBzbG90PVwiZW5kXCI+XHJcbiAgICAgIDxpb24tYnV0dG9uIChjbGljayk9XCJ0b2dnbGVGYXZvcml0ZSgpXCI+XHJcbiAgICAgICAgPGlvbi1pY29uICpuZ0lmPVwiIWlzRmF2b3JpdGVcIiBzbG90PVwiaWNvbi1vbmx5XCIgbmFtZT1cInN0YXItb3V0bGluZVwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgPGlvbi1pY29uICpuZ0lmPVwiaXNGYXZvcml0ZVwiIHNsb3Q9XCJpY29uLW9ubHlcIiBuYW1lPVwic3RhclwiPjwvaW9uLWljb24+XHJcbiAgICAgIDwvaW9uLWJ1dHRvbj5cclxuICAgICAgPGlvbi1idXR0b24gKGNsaWNrKT1cInNoYXJlU2Vzc2lvbigpXCI+XHJcbiAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJpY29uLW9ubHlcIiBuYW1lPVwic2hhcmVcIj48L2lvbi1pY29uPlxyXG4gICAgICA8L2lvbi1idXR0b24+XHJcbiAgICA8L2lvbi1idXR0b25zPlxyXG4gIDwvaW9uLXRvb2xiYXI+XHJcbjwvaW9uLWhlYWRlcj5cclxuXHJcbjxpb24tY29udGVudD5cclxuICA8ZGl2ICpuZ0lmPVwic2Vzc2lvblwiIGNsYXNzPVwiaW9uLXBhZGRpbmdcIj5cclxuICAgIDxoMT57e3Nlc3Npb24ubmFtZX19PC9oMT5cclxuICAgIDxzcGFuICpuZ0Zvcj1cImxldCB0cmFjayBvZiBzZXNzaW9uPy50cmFja3NcIiBbY2xhc3NdPVwiJ3Nlc3Npb24tdHJhY2stJyt0cmFjay50b0xvd2VyQ2FzZSgpXCI+e3t0cmFja319PC9zcGFuPlxyXG4gICAgPHA+e3tzZXNzaW9uLmRlc2NyaXB0aW9ufX08L3A+XHJcbiAgICA8aW9uLXRleHQgY29sb3I9XCJtZWRpdW1cIj5cclxuICAgICAge3tzZXNzaW9uLnRpbWVTdGFydH19ICZuZGFzaDsge3tzZXNzaW9uLnRpbWVFbmR9fVxyXG4gICAgICA8YnIgLz4ge3tzZXNzaW9uLmxvY2F0aW9ufX1cclxuICAgIDwvaW9uLXRleHQ+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxpb24tbGlzdD5cclxuICAgIDxpb24taXRlbSAoY2xpY2spPVwic2Vzc2lvbkNsaWNrKCd3YXRjaCcpXCIgYnV0dG9uPlxyXG4gICAgICA8aW9uLWxhYmVsIGNvbG9yPVwicHJpbWFyeVwiPldhdGNoPC9pb24tbGFiZWw+XHJcbiAgICA8L2lvbi1pdGVtPlxyXG4gICAgPGlvbi1pdGVtIChjbGljayk9XCJzZXNzaW9uQ2xpY2soJ2FkZCB0byBjYWxlbmRhcicpXCIgYnV0dG9uPlxyXG4gICAgICA8aW9uLWxhYmVsIGNvbG9yPVwicHJpbWFyeVwiPkFkZCB0byBDYWxlbmRhcjwvaW9uLWxhYmVsPlxyXG4gICAgPC9pb24taXRlbT5cclxuICAgIDxpb24taXRlbSAoY2xpY2spPVwic2Vzc2lvbkNsaWNrKCdtYXJrIGFzIHVud2F0Y2hlZCcpXCIgYnV0dG9uPlxyXG4gICAgICA8aW9uLWxhYmVsIGNvbG9yPVwicHJpbWFyeVwiPk1hcmsgYXMgVW53YXRjaGVkPC9pb24tbGFiZWw+XHJcbiAgICA8L2lvbi1pdGVtPlxyXG4gICAgPGlvbi1pdGVtIChjbGljayk9XCJzZXNzaW9uQ2xpY2soJ2Rvd25sb2FkIHZpZGVvJylcIiBidXR0b24+XHJcbiAgICAgIDxpb24tbGFiZWwgY29sb3I9XCJwcmltYXJ5XCI+RG93bmxvYWQgVmlkZW88L2lvbi1sYWJlbD5cclxuICAgICAgPGlvbi1pY29uIHNsb3Q9XCJlbmRcIiBjb2xvcj1cInByaW1hcnlcIiBzaXplPVwic21hbGxcIiBuYW1lPVwiY2xvdWQtZG93bmxvYWRcIj48L2lvbi1pY29uPlxyXG4gICAgPC9pb24taXRlbT5cclxuICAgIDxpb24taXRlbSAoY2xpY2spPVwic2Vzc2lvbkNsaWNrKCdsZWF2ZSBmZWVkYmFjaycpXCIgYnV0dG9uPlxyXG4gICAgICA8aW9uLWxhYmVsIGNvbG9yPVwicHJpbWFyeVwiPkxlYXZlIEZlZWRiYWNrPC9pb24tbGFiZWw+XHJcbiAgICA8L2lvbi1pdGVtPlxyXG4gIDwvaW9uLWxpc3Q+XHJcbjwvaW9uLWNvbnRlbnQ+XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFNwZWFrZXJEZXRhaWxQYWdlIH0gZnJvbSAnLi9zcGVha2VyLWRldGFpbCc7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAnJyxcclxuICAgIGNvbXBvbmVudDogU3BlYWtlckRldGFpbFBhZ2VcclxuICB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNwZWFrZXJEZXRhaWxQYWdlUm91dGluZ01vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IFNwZWFrZXJEZXRhaWxQYWdlIH0gZnJvbSAnLi9zcGVha2VyLWRldGFpbCc7XHJcbmltcG9ydCB7IFNwZWFrZXJEZXRhaWxQYWdlUm91dGluZ01vZHVsZSB9IGZyb20gJy4vc3BlYWtlci1kZXRhaWwtcm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgSW9uaWNNb2R1bGUsXHJcbiAgICBTcGVha2VyRGV0YWlsUGFnZVJvdXRpbmdNb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgU3BlYWtlckRldGFpbFBhZ2UsXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3BlYWtlckRldGFpbE1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ29uZmVyZW5jZURhdGEgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvY29uZmVyZW5jZS1kYXRhJztcclxuaW1wb3J0IHsgQWN0aW9uU2hlZXRDb250cm9sbGVyIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBJbkFwcEJyb3dzZXIgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvaW4tYXBwLWJyb3dzZXIvbmd4JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGFnZS1zcGVha2VyLWRldGFpbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdzcGVha2VyLWRldGFpbC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zcGVha2VyLWRldGFpbC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTcGVha2VyRGV0YWlsUGFnZSB7XHJcbiAgc3BlYWtlcjogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZGF0YVByb3ZpZGVyOiBDb25mZXJlbmNlRGF0YSxcclxuICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHVibGljIGFjdGlvblNoZWV0Q3RybDogQWN0aW9uU2hlZXRDb250cm9sbGVyLFxyXG4gICAgcHVibGljIGNvbmZEYXRhOiBDb25mZXJlbmNlRGF0YSxcclxuICAgIHB1YmxpYyBpbkFwcEJyb3dzZXI6IEluQXBwQnJvd3NlcixcclxuICApIHt9XHJcblxyXG4gIGlvblZpZXdXaWxsRW50ZXIoKSB7XHJcbiAgICB0aGlzLmRhdGFQcm92aWRlci5sb2FkKCkuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgY29uc3Qgc3BlYWtlcklkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ3NwZWFrZXJJZCcpO1xyXG4gICAgICBpZiAoZGF0YSAmJiBkYXRhLnNwZWFrZXJzKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBzcGVha2VyIG9mIGRhdGEuc3BlYWtlcnMpIHtcclxuICAgICAgICAgIGlmIChzcGVha2VyICYmIHNwZWFrZXIuaWQgPT09IHNwZWFrZXJJZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNwZWFrZXIgPSBzcGVha2VyO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb3BlbkV4dGVybmFsVXJsKHVybDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmluQXBwQnJvd3Nlci5jcmVhdGUoXHJcbiAgICAgIHVybCxcclxuICAgICAgJ19ibGFuaydcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBvcGVuU3BlYWtlclNoYXJlKHNwZWFrZXI6IGFueSkge1xyXG4gICAgY29uc3QgYWN0aW9uU2hlZXQgPSBhd2FpdCB0aGlzLmFjdGlvblNoZWV0Q3RybC5jcmVhdGUoe1xyXG4gICAgICBoZWFkZXI6ICdTaGFyZSAnICsgc3BlYWtlci5uYW1lLFxyXG4gICAgICBidXR0b25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ0NvcHkgTGluaycsXHJcbiAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICdDb3B5IGxpbmsgY2xpY2tlZCBvbiBodHRwczovL3R3aXR0ZXIuY29tLycgKyBzcGVha2VyLnR3aXR0ZXJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICh3aW5kb3cgYXMgYW55KS5jb3Jkb3ZhICYmXHJcbiAgICAgICAgICAgICAgKHdpbmRvdyBhcyBhbnkpLmNvcmRvdmEucGx1Z2lucy5jbGlwYm9hcmRcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgKHdpbmRvdyBhcyBhbnkpLmNvcmRvdmEucGx1Z2lucy5jbGlwYm9hcmQuY29weShcclxuICAgICAgICAgICAgICAgICdodHRwczovL3R3aXR0ZXIuY29tLycgKyBzcGVha2VyLnR3aXR0ZXJcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnU2hhcmUgdmlhIC4uLidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdDYW5jZWwnLFxyXG4gICAgICAgICAgcm9sZTogJ2NhbmNlbCdcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0pO1xyXG5cclxuICAgIGF3YWl0IGFjdGlvblNoZWV0LnByZXNlbnQoKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIG9wZW5Db250YWN0KHNwZWFrZXI6IGFueSkge1xyXG4gICAgY29uc3QgbW9kZSA9ICdpb3MnOyAvLyB0aGlzLmNvbmZpZy5nZXQoJ21vZGUnKTtcclxuXHJcbiAgICBjb25zdCBhY3Rpb25TaGVldCA9IGF3YWl0IHRoaXMuYWN0aW9uU2hlZXRDdHJsLmNyZWF0ZSh7XHJcbiAgICAgIGhlYWRlcjogJ0NvbnRhY3QgJyArIHNwZWFrZXIubmFtZSxcclxuICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6IGBFbWFpbCAoICR7c3BlYWtlci5lbWFpbH0gKWAsXHJcbiAgICAgICAgICBpY29uOiBtb2RlICE9PSAnaW9zJyA/ICdtYWlsJyA6IG51bGwsXHJcbiAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKCdtYWlsdG86JyArIHNwZWFrZXIuZW1haWwpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogYENhbGwgKCAke3NwZWFrZXIucGhvbmV9IClgLFxyXG4gICAgICAgICAgaWNvbjogbW9kZSAhPT0gJ2lvcycgPyAnY2FsbCcgOiBudWxsLFxyXG4gICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cub3BlbigndGVsOicgKyBzcGVha2VyLnBob25lKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdDYW5jZWwnLFxyXG4gICAgICAgICAgcm9sZTogJ2NhbmNlbCdcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0pO1xyXG5cclxuICAgIGF3YWl0IGFjdGlvblNoZWV0LnByZXNlbnQoKTtcclxuICB9XHJcbn1cclxuIiwiPGlvbi1jb250ZW50IGNsYXNzPVwic3BlYWtlci1kZXRhaWxcIj5cclxuICA8aW9uLWhlYWRlciBjbGFzcz1cImlvbi1uby1ib3JkZXJcIj5cclxuICAgIDxpb24tdG9vbGJhcj5cclxuICAgICAgPGlvbi1idXR0b25zIHNsb3Q9XCJzdGFydFwiPlxyXG4gICAgICAgIDxpb24tYmFjay1idXR0b24gZGVmYXVsdEhyZWY9XCIvYXBwL3RhYnMvc3BlYWtlcnNcIj48L2lvbi1iYWNrLWJ1dHRvbj5cclxuICAgICAgPC9pb24tYnV0dG9ucz5cclxuICAgICAgPGlvbi1idXR0b25zICpuZ0lmPVwic3BlYWtlclwiIHNsb3Q9XCJlbmRcIj5cclxuICAgICAgICA8aW9uLWJ1dHRvbiAoY2xpY2spPVwib3BlbkNvbnRhY3Qoc3BlYWtlcilcIj5cclxuICAgICAgICAgIDxpb24taWNvbiBzbG90PVwiaWNvbi1vbmx5XCIgaW9zPVwiY2FsbC1vdXRsaW5lXCIgbWQ9XCJjYWxsLXNoYXJwXCI+PC9pb24taWNvbj5cclxuICAgICAgICA8L2lvbi1idXR0b24+XHJcbiAgICAgICAgPGlvbi1idXR0b24gKGNsaWNrKT1cIm9wZW5TcGVha2VyU2hhcmUoc3BlYWtlcilcIj5cclxuICAgICAgICAgIDxpb24taWNvbiBzbG90PVwiaWNvbi1vbmx5XCIgaW9zPVwic2hhcmUtb3V0bGluZVwiIG1kPVwic2hhcmUtc2hhcnBcIj48L2lvbi1pY29uPlxyXG4gICAgICAgIDwvaW9uLWJ1dHRvbj5cclxuICAgICAgPC9pb24tYnV0dG9ucz5cclxuICAgIDwvaW9uLXRvb2xiYXI+XHJcbiAgPC9pb24taGVhZGVyPlxyXG5cclxuICA8ZGl2IGNsYXNzPVwic3BlYWtlci1iYWNrZ3JvdW5kXCI+XHJcbiAgICA8aW1nIFtzcmNdPVwic3BlYWtlcj8ucHJvZmlsZVBpY1wiIFthbHRdPVwic3BlYWtlcj8ubmFtZVwiPlxyXG4gICAgPGgyPnt7c3BlYWtlcj8ubmFtZX19PC9oMj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cImlvbi1wYWRkaW5nIHNwZWFrZXItZGV0YWlsXCI+XHJcbiAgICA8cD57e3NwZWFrZXI/LmFib3V0fX0gU2F5IGhlbGxvIG9uIHNvY2lhbCBtZWRpYSE8L3A+XHJcblxyXG4gICAgPGhyPlxyXG5cclxuICAgIDxpb24tY2hpcCBjb2xvcj1cInR3aXR0ZXJcIiBidXR0b24gKGNsaWNrKT1cIm9wZW5FeHRlcm5hbFVybCgnaHR0cHM6Ly90d2l0dGVyLmNvbS8nICsgc3BlYWtlci50d2l0dGVyKVwiPlxyXG4gICAgICA8aW9uLWljb24gbmFtZT1cImxvZ28tdHdpdHRlclwiPjwvaW9uLWljb24+XHJcbiAgICAgIDxpb24tbGFiZWw+VHdpdHRlcjwvaW9uLWxhYmVsPlxyXG4gICAgPC9pb24tY2hpcD5cclxuXHJcbiAgICA8aW9uLWNoaXAgY29sb3I9XCJkYXJrXCIgYnV0dG9uIChjbGljayk9XCJvcGVuRXh0ZXJuYWxVcmwoJ2h0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljJylcIj5cclxuICAgICAgPGlvbi1pY29uIG5hbWU9XCJsb2dvLWdpdGh1YlwiPjwvaW9uLWljb24+XHJcbiAgICAgIDxpb24tbGFiZWw+R2l0SHViPC9pb24tbGFiZWw+XHJcbiAgICA8L2lvbi1jaGlwPlxyXG5cclxuICAgIDxpb24tY2hpcCBjb2xvcj1cImluc3RhZ3JhbVwiIGJ1dHRvbiAoY2xpY2spPVwib3BlbkV4dGVybmFsVXJsKCdodHRwczovL2luc3RhZ3JhbS5jb20vaW9uaWNmcmFtZXdvcmsnKVwiPlxyXG4gICAgICA8aW9uLWljb24gbmFtZT1cImxvZ28taW5zdGFncmFtXCI+PC9pb24taWNvbj5cclxuICAgICAgPGlvbi1sYWJlbD5JbnN0YWdyYW08L2lvbi1sYWJlbD5cclxuICAgIDwvaW9uLWNoaXA+XHJcbiAgPC9kaXY+XHJcbjwvaW9uLWNvbnRlbnQ+XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFNwZWFrZXJMaXN0UGFnZSB9IGZyb20gJy4vc3BlYWtlci1saXN0JztcclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAge1xyXG4gICAgcGF0aDogJycsXHJcbiAgICBjb21wb25lbnQ6IFNwZWFrZXJMaXN0UGFnZVxyXG4gIH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3BlYWtlckxpc3RQYWdlUm91dGluZ01vZHVsZSB7fVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcclxuXHJcbmltcG9ydCB7IFNwZWFrZXJMaXN0UGFnZSB9IGZyb20gJy4vc3BlYWtlci1saXN0JztcclxuaW1wb3J0IHsgU3BlYWtlckxpc3RQYWdlUm91dGluZ01vZHVsZSB9IGZyb20gJy4vc3BlYWtlci1saXN0LXJvdXRpbmcubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgSW9uaWNNb2R1bGUsXHJcbiAgICBTcGVha2VyTGlzdFBhZ2VSb3V0aW5nTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtTcGVha2VyTGlzdFBhZ2VdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3BlYWtlckxpc3RNb2R1bGUge31cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbmZlcmVuY2VEYXRhIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2NvbmZlcmVuY2UtZGF0YSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BhZ2Utc3BlYWtlci1saXN0JyxcclxuICB0ZW1wbGF0ZVVybDogJ3NwZWFrZXItbGlzdC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zcGVha2VyLWxpc3Quc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3BlYWtlckxpc3RQYWdlIHtcclxuICBzcGVha2VyczogYW55W10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGNvbmZEYXRhOiBDb25mZXJlbmNlRGF0YSkge31cclxuXHJcbiAgaW9uVmlld0RpZEVudGVyKCkge1xyXG4gICAgdGhpcy5jb25mRGF0YS5nZXRTcGVha2VycygpLnN1YnNjcmliZSgoc3BlYWtlcnM6IGFueVtdKSA9PiB7XHJcbiAgICAgIHRoaXMuc3BlYWtlcnMgPSBzcGVha2VycztcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCI8aW9uLWhlYWRlcj5cclxuICA8aW9uLXRvb2xiYXI+XHJcbiAgICA8aW9uLWJ1dHRvbnMgc2xvdD1cInN0YXJ0XCI+XHJcbiAgICAgIDxpb24tbWVudS1idXR0b24+PC9pb24tbWVudS1idXR0b24+XHJcbiAgICA8L2lvbi1idXR0b25zPlxyXG4gICAgPGlvbi10aXRsZT5TcGVha2VyczwvaW9uLXRpdGxlPlxyXG4gIDwvaW9uLXRvb2xiYXI+XHJcbjwvaW9uLWhlYWRlcj5cclxuXHJcbjxpb24tY29udGVudCBmdWxsc2NyZWVuPVwidHJ1ZVwiPlxyXG4gIDxpb24taGVhZGVyIGNvbGxhcHNlPVwiY29uZGVuc2VcIj5cclxuICAgIDxpb24tdG9vbGJhcj5cclxuICAgICAgPGlvbi10aXRsZSBzaXplPVwibGFyZ2VcIj5TcGVha2VyczwvaW9uLXRpdGxlPlxyXG4gICAgPC9pb24tdG9vbGJhcj5cclxuICA8L2lvbi1oZWFkZXI+XHJcblxyXG4gIDxpb24tZ3JpZCBmaXhlZD5cclxuICAgIDxpb24tcm93PlxyXG4gICAgICA8aW9uLWNvbCBzaXplPVwiMTJcIiBzaXplLW1kPVwiNlwiICpuZ0Zvcj1cImxldCBzcGVha2VyIG9mIHNwZWFrZXJzXCI+XHJcbiAgICAgICAgPGlvbi1jYXJkIGNsYXNzPVwic3BlYWtlci1jYXJkXCI+XHJcbiAgICAgICAgICA8aW9uLWNhcmQtaGVhZGVyPlxyXG4gICAgICAgICAgICA8aW9uLWl0ZW0gZGV0YWlsPVwiZmFsc2VcIiBsaW5lcz1cIm5vbmVcIiBjbGFzcz1cInNwZWFrZXItaXRlbVwiIHJvdXRlckxpbms9XCIvYXBwL3RhYnMvc3BlYWtlcnMvc3BlYWtlci1kZXRhaWxzL3t7c3BlYWtlci5pZH19XCI+XHJcbiAgICAgICAgICAgICAgPGlvbi1hdmF0YXIgc2xvdD1cInN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIFtzcmNdPVwic3BlYWtlci5wcm9maWxlUGljXCIgW2FsdF09XCJzcGVha2VyLm5hbWUgKyAnIHByb2ZpbGUgcGljdHVyZSdcIj5cclxuICAgICAgICAgICAgICA8L2lvbi1hdmF0YXI+XHJcbiAgICAgICAgICAgICAgPGlvbi1sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxoMj57e3NwZWFrZXIubmFtZX19PC9oMj5cclxuICAgICAgICAgICAgICAgIDxwPnt7c3BlYWtlci50aXRsZX19PC9wPlxyXG4gICAgICAgICAgICAgIDwvaW9uLWxhYmVsPlxyXG4gICAgICAgICAgICA8L2lvbi1pdGVtPlxyXG4gICAgICAgICAgPC9pb24tY2FyZC1oZWFkZXI+XHJcblxyXG4gICAgICAgICAgPGlvbi1jYXJkLWNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxpb24tbGlzdCBsaW5lcz1cIm5vbmVcIj5cclxuICAgICAgICAgICAgICA8aW9uLWl0ZW0gKm5nRm9yPVwibGV0IHNlc3Npb24gb2Ygc3BlYWtlci5zZXNzaW9uc1wiIGRldGFpbD1cImZhbHNlXCIgcm91dGVyTGluaz1cIi9hcHAvdGFicy9zcGVha2Vycy9zZXNzaW9uL3t7c2Vzc2lvbi5pZH19XCI+XHJcbiAgICAgICAgICAgICAgICA8aW9uLWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aDM+e3tzZXNzaW9uLm5hbWV9fTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2lvbi1sYWJlbD5cclxuICAgICAgICAgICAgICA8L2lvbi1pdGVtPlxyXG5cclxuICAgICAgICAgICAgICA8aW9uLWl0ZW0gZGV0YWlsPVwiZmFsc2VcIiByb3V0ZXJMaW5rPVwiL2FwcC90YWJzL3NwZWFrZXJzL3NwZWFrZXItZGV0YWlscy97e3NwZWFrZXIuaWR9fVwiPlxyXG4gICAgICAgICAgICAgICAgPGlvbi1sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGgzPkFib3V0IHt7c3BlYWtlci5uYW1lfX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9pb24tbGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9pb24taXRlbT5cclxuICAgICAgICAgICAgPC9pb24tbGlzdD5cclxuICAgICAgICAgIDwvaW9uLWNhcmQtY29udGVudD5cclxuICAgICAgICA8L2lvbi1jYXJkPlxyXG4gICAgICA8L2lvbi1jb2w+XHJcbiAgICA8L2lvbi1yb3c+XHJcbiAgPC9pb24tZ3JpZD5cclxuPC9pb24tY29udGVudD5cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBUYWJzUGFnZSB9IGZyb20gJy4vdGFicy1wYWdlJztcclxuaW1wb3J0IHsgU2NoZWR1bGVQYWdlIH0gZnJvbSAnLi4vc2NoZWR1bGUvc2NoZWR1bGUnO1xyXG5cclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gIHtcclxuICAgIHBhdGg6ICd0YWJzJyxcclxuICAgIGNvbXBvbmVudDogVGFic1BhZ2UsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ3NjaGVkdWxlJyxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBwYXRoOiAnJyxcclxuICAgICAgICAgICAgY29tcG9uZW50OiBTY2hlZHVsZVBhZ2UsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBwYXRoOiAnc2Vzc2lvbi86c2Vzc2lvbklkJyxcclxuICAgICAgICAgICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4uL3Nlc3Npb24tZGV0YWlsL3Nlc3Npb24tZGV0YWlsLm1vZHVsZScpLnRoZW4obSA9PiBtLlNlc3Npb25EZXRhaWxNb2R1bGUpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnc3BlYWtlcnMnLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6ICcnLFxyXG4gICAgICAgICAgICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi4vc3BlYWtlci1saXN0L3NwZWFrZXItbGlzdC5tb2R1bGUnKS50aGVuKG0gPT4gbS5TcGVha2VyTGlzdE1vZHVsZSlcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6ICdzZXNzaW9uLzpzZXNzaW9uSWQnLFxyXG4gICAgICAgICAgICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi4vc2Vzc2lvbi1kZXRhaWwvc2Vzc2lvbi1kZXRhaWwubW9kdWxlJykudGhlbihtID0+IG0uU2Vzc2lvbkRldGFpbE1vZHVsZSlcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6ICdzcGVha2VyLWRldGFpbHMvOnNwZWFrZXJJZCcsXHJcbiAgICAgICAgICAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuLi9zcGVha2VyLWRldGFpbC9zcGVha2VyLWRldGFpbC5tb2R1bGUnKS50aGVuKG0gPT4gbS5TcGVha2VyRGV0YWlsTW9kdWxlKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdtYXAnLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6ICcnLFxyXG4gICAgICAgICAgICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi4vbWFwL21hcC5tb2R1bGUnKS50aGVuKG0gPT4gbS5NYXBNb2R1bGUpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ3NjYW5uZXInLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6ICcnLFxyXG4gICAgICAgICAgICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi4vc2Nhbm5lci9zY2FubmVyLm1vZHVsZScpLnRoZW4obSA9PiBtLlNjYW5uZXJNb2R1bGUpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2Fib3V0JyxcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBwYXRoOiAnJyxcclxuICAgICAgICAgICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4uL2Fib3V0L2Fib3V0Lm1vZHVsZScpLnRoZW4obSA9PiBtLkFib3V0TW9kdWxlKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgICAgICAgICAgXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnJyxcclxuICAgICAgICByZWRpcmVjdFRvOiAnL2FwcC90YWJzL3NjaGVkdWxlJyxcclxuICAgICAgICBwYXRoTWF0Y2g6ICdmdWxsJ1xyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxyXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJzUGFnZVJvdXRpbmdNb2R1bGUgeyB9XHJcblxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcclxuXHJcbmltcG9ydCB7IFRhYnNQYWdlIH0gZnJvbSAnLi90YWJzLXBhZ2UnO1xyXG5pbXBvcnQgeyBUYWJzUGFnZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL3RhYnMtcGFnZS1yb3V0aW5nLm1vZHVsZSc7XHJcblxyXG5pbXBvcnQgeyBBYm91dE1vZHVsZSB9IGZyb20gJy4uL2Fib3V0L2Fib3V0Lm1vZHVsZSc7XHJcbmltcG9ydCB7IE1hcE1vZHVsZSB9IGZyb20gJy4uL21hcC9tYXAubW9kdWxlJztcclxuaW1wb3J0IHsgU2Nhbm5lck1vZHVsZSB9IGZyb20gJy4uL3NjYW5uZXIvc2Nhbm5lci5tb2R1bGUnO1xyXG5pbXBvcnQgeyBTY2hlZHVsZU1vZHVsZSB9IGZyb20gJy4uL3NjaGVkdWxlL3NjaGVkdWxlLm1vZHVsZSc7XHJcbmltcG9ydCB7IFNlc3Npb25EZXRhaWxNb2R1bGUgfSBmcm9tICcuLi9zZXNzaW9uLWRldGFpbC9zZXNzaW9uLWRldGFpbC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBTcGVha2VyRGV0YWlsTW9kdWxlIH0gZnJvbSAnLi4vc3BlYWtlci1kZXRhaWwvc3BlYWtlci1kZXRhaWwubW9kdWxlJztcclxuaW1wb3J0IHsgU3BlYWtlckxpc3RNb2R1bGUgfSBmcm9tICcuLi9zcGVha2VyLWxpc3Qvc3BlYWtlci1saXN0Lm1vZHVsZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIEFib3V0TW9kdWxlLFxyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgSW9uaWNNb2R1bGUsXHJcbiAgICBNYXBNb2R1bGUsXHJcbiAgICBTY2FubmVyTW9kdWxlLFxyXG4gICAgU2NoZWR1bGVNb2R1bGUsXHJcbiAgICBTZXNzaW9uRGV0YWlsTW9kdWxlLFxyXG4gICAgU3BlYWtlckRldGFpbE1vZHVsZSxcclxuICAgIFNwZWFrZXJMaXN0TW9kdWxlLFxyXG4gICAgVGFic1BhZ2VSb3V0aW5nTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFRhYnNQYWdlLFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYnNNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtdGFicycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYnMtcGFnZS5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90YWJzLXBhZ2Uuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFic1BhZ2Uge31cclxuIiwiPGlvbi10YWJzPlxyXG4gIDxpb24tZmFiIHZlcnRpY2FsPVwiYm90dG9tXCIgaG9yaXpvbnRhbD1cImNlbnRlclwiIHRyYW5zbHVjZW50PVwidHJ1ZVwiPlxyXG4gICAgPGlvbi1mYWItYnV0dG9uIHJvdXRlckxpbms9XCIvYXBwL3RhYnMvc2Nhbm5lclwiPlxyXG4gICAgICA8aW9uLWljb24gbmFtZT1cImJhcmNvZGUtb3V0bGluZVwiPjwvaW9uLWljb24+XHJcbiAgICA8L2lvbi1mYWItYnV0dG9uPlxyXG4gICAgPC9pb24tZmFiPlxyXG5cclxuICA8aW9uLXRhYi1iYXIgc2xvdD1cImJvdHRvbVwiPlxyXG4gICAgPGlvbi10YWItYnV0dG9uIHRhYj1cInNjaGVkdWxlXCI+XHJcbiAgICAgIDxpb24taWNvbiBuYW1lPVwiY2FsZW5kYXItbnVtYmVyXCI+PC9pb24taWNvbj5cclxuICAgICAgPGlvbi1sYWJlbCBsYWJlbD5TY2hlZHVsZTwvaW9uLWxhYmVsPlxyXG4gICAgPC9pb24tdGFiLWJ1dHRvbj5cclxuXHJcbiAgICA8aW9uLXRhYi1idXR0b24gdGFiPVwic3BlYWtlcnNcIiBjbGFzcz1cInNwZWFrZXJzXCI+XHJcbiAgICAgIDxpb24taWNvbiBuYW1lPVwicGVvcGxlLWNpcmNsZVwiPjwvaW9uLWljb24+XHJcbiAgICAgIDxpb24tbGFiZWwgbGFiZWw+U3BlYWtlcnM8L2lvbi1sYWJlbD5cclxuICAgIDwvaW9uLXRhYi1idXR0b24+XHJcbjwhLS0gXHJcbiAgICA8aW9uLXRhYi1idXR0b24gdGFiPVwic2Nhbm5lclwiPlxyXG4gICAgICA8aW9uLWljb24gbmFtZT1cImFwZXJ0dXJlLW91dGxpbmVcIj48L2lvbi1pY29uPlxyXG4gICAgICA8aW9uLWxhYmVsPlNjYW4gUVIgY29kZTwvaW9uLWxhYmVsPlxyXG4gICAgPC9pb24tdGFiLWJ1dHRvbj4gLS0+XHJcbiAgICA8c3ZnIGhlaWdodD1cIjUwXCIgdmlld0JveD1cIjAgMCAxMDAgNTBcIiB3aWR0aD1cIjEwMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBzdHlsZT1cImJvcmRlcjogbm9uZTtcIj5cclxuICAgICAgPHBhdGggZD1cIk0xMDAgMHY1MEgwVjBjLjU0MyAyNy4xNTMgMjIuNzIgNDkgNTAgNDlTOTkuNDU3IDI3LjE1MyA5OS45OSAwaC4wMXpcIiBmaWxsPVwicmVkXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPjwvcGF0aD5cclxuICAgIDwvc3ZnPlxyXG4gICAgXHJcbiAgICA8aW9uLXRhYi1idXR0b24gdGFiPVwibWFwXCIgY2xhc3M9XCJtYXBcIj5cclxuICAgICAgPGlvbi1pY29uIG5hbWU9XCJjb21wYXNzXCI+PC9pb24taWNvbj5cclxuICAgICAgPGlvbi1sYWJlbD5NYXA8L2lvbi1sYWJlbD5cclxuICAgIDwvaW9uLXRhYi1idXR0b24+XHJcblxyXG4gICAgPGlvbi10YWItYnV0dG9uIHRhYj1cImFib3V0XCI+XHJcbiAgICAgIDxpb24taWNvbiBuYW1lPVwiaW5mb3JtYXRpb24tY2lyY2xlXCI+PC9pb24taWNvbj5cclxuICAgICAgPGlvbi1sYWJlbD5BYm91dDwvaW9uLWxhYmVsPlxyXG4gICAgPC9pb24tdGFiLWJ1dHRvbj5cclxuICA8L2lvbi10YWItYmFyPlxyXG5cclxuPC9pb24tdGFicz5cclxuIiwiY29uc3QgX1N1cHBvcnRlZEZvcm1hdCA9IHtcbiAgICAvLyBCRUdJTiAxRCBQcm9kdWN0XG4gICAgLyoqXG4gICAgICogQW5kcm9pZCBvbmx5LCBVUENfQSBpcyBwYXJ0IG9mIEVBTl8xMyBhY2NvcmRpbmcgdG8gQXBwbGUgZG9jc1xuICAgICAqL1xuICAgIFVQQ19BOiAnVVBDX0EnLFxuICAgIFVQQ19FOiAnVVBDX0UnLFxuICAgIC8qKlxuICAgICAqIEFuZHJvaWQgb25seVxuICAgICAqL1xuICAgIFVQQ19FQU5fRVhURU5TSU9OOiAnVVBDX0VBTl9FWFRFTlNJT04nLFxuICAgIEVBTl84OiAnRUFOXzgnLFxuICAgIEVBTl8xMzogJ0VBTl8xMycsXG4gICAgLy8gRU5EIDFEIFByb2R1Y3RcbiAgICAvLyBCRUdJTiAxRCBJbmR1c3RyaWFsXG4gICAgQ09ERV8zOTogJ0NPREVfMzknLFxuICAgIC8qKlxuICAgICAqIGlPUyBvbmx5XG4gICAgICovXG4gICAgQ09ERV8zOV9NT0RfNDM6ICdDT0RFXzM5X01PRF80MycsXG4gICAgQ09ERV85MzogJ0NPREVfOTMnLFxuICAgIENPREVfMTI4OiAnQ09ERV8xMjgnLFxuICAgIC8qKlxuICAgICAqIEFuZHJvaWQgb25seVxuICAgICAqL1xuICAgIENPREFCQVI6ICdDT0RBQkFSJyxcbiAgICBJVEY6ICdJVEYnLFxuICAgIC8qKlxuICAgICAqIGlPUyBvbmx5XG4gICAgICovXG4gICAgSVRGXzE0OiAnSVRGXzE0JyxcbiAgICAvLyBFTkQgMUQgSW5kdXN0cmlhbFxuICAgIC8vIEJFR0lOIDJEXG4gICAgQVpURUM6ICdBWlRFQycsXG4gICAgREFUQV9NQVRSSVg6ICdEQVRBX01BVFJJWCcsXG4gICAgLyoqXG4gICAgICogQW5kcm9pZCBvbmx5XG4gICAgICovXG4gICAgTUFYSUNPREU6ICdNQVhJQ09ERScsXG4gICAgUERGXzQxNzogJ1BERl80MTcnLFxuICAgIFFSX0NPREU6ICdRUl9DT0RFJyxcbiAgICAvKipcbiAgICAgKiBBbmRyb2lkIG9ubHlcbiAgICAgKi9cbiAgICBSU1NfMTQ6ICdSU1NfMTQnLFxuICAgIC8qKlxuICAgICAqIEFuZHJvaWQgb25seVxuICAgICAqL1xuICAgIFJTU19FWFBBTkRFRDogJ1JTU19FWFBBTkRFRCcsXG4gICAgLy8gRU5EIDJEXG59O1xuZXhwb3J0IGNvbnN0IFN1cHBvcnRlZEZvcm1hdCA9IF9TdXBwb3J0ZWRGb3JtYXQ7XG5leHBvcnQgY29uc3QgQ2FtZXJhRGlyZWN0aW9uID0ge1xuICAgIEZST05UOiAnZnJvbnQnLFxuICAgIEJBQ0s6ICdiYWNrJyxcbn07XG4iLCJpbXBvcnQgeyByZWdpc3RlclBsdWdpbiB9IGZyb20gJ0BjYXBhY2l0b3IvY29yZSc7XG5jb25zdCBCYXJjb2RlU2Nhbm5lciA9IHJlZ2lzdGVyUGx1Z2luKCdCYXJjb2RlU2Nhbm5lcicsIHtcbiAgICB3ZWI6ICgpID0+IGltcG9ydCgnLi93ZWInKS50aGVuKG0gPT4gbmV3IG0uQmFyY29kZVNjYW5uZXJXZWIoKSksXG59KTtcbmV4cG9ydCAqIGZyb20gJy4vZGVmaW5pdGlvbnMnO1xuZXhwb3J0IHsgQmFyY29kZVNjYW5uZXIgfTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogQ3JlYXRlZCAyMDA4LTA4LTE5LlxuICpcbiAqIERpamtzdHJhIHBhdGgtZmluZGluZyBmdW5jdGlvbnMuIEFkYXB0ZWQgZnJvbSB0aGUgRGlqa3N0YXIgUHl0aG9uIHByb2plY3QuXG4gKlxuICogQ29weXJpZ2h0IChDKSAyMDA4XG4gKiAgIFd5YXR0IEJhbGR3aW4gPHNlbGZAd3lhdHRiYWxkd2luLmNvbT5cbiAqICAgQWxsIHJpZ2h0cyByZXNlcnZlZFxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqXG4gKiAgIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG52YXIgZGlqa3N0cmEgPSB7XG4gIHNpbmdsZV9zb3VyY2Vfc2hvcnRlc3RfcGF0aHM6IGZ1bmN0aW9uKGdyYXBoLCBzLCBkKSB7XG4gICAgLy8gUHJlZGVjZXNzb3IgbWFwIGZvciBlYWNoIG5vZGUgdGhhdCBoYXMgYmVlbiBlbmNvdW50ZXJlZC5cbiAgICAvLyBub2RlIElEID0+IHByZWRlY2Vzc29yIG5vZGUgSURcbiAgICB2YXIgcHJlZGVjZXNzb3JzID0ge307XG5cbiAgICAvLyBDb3N0cyBvZiBzaG9ydGVzdCBwYXRocyBmcm9tIHMgdG8gYWxsIG5vZGVzIGVuY291bnRlcmVkLlxuICAgIC8vIG5vZGUgSUQgPT4gY29zdFxuICAgIHZhciBjb3N0cyA9IHt9O1xuICAgIGNvc3RzW3NdID0gMDtcblxuICAgIC8vIENvc3RzIG9mIHNob3J0ZXN0IHBhdGhzIGZyb20gcyB0byBhbGwgbm9kZXMgZW5jb3VudGVyZWQ7IGRpZmZlcnMgZnJvbVxuICAgIC8vIGBjb3N0c2AgaW4gdGhhdCBpdCBwcm92aWRlcyBlYXN5IGFjY2VzcyB0byB0aGUgbm9kZSB0aGF0IGN1cnJlbnRseSBoYXNcbiAgICAvLyB0aGUga25vd24gc2hvcnRlc3QgcGF0aCBmcm9tIHMuXG4gICAgLy8gWFhYOiBEbyB3ZSBhY3R1YWxseSBuZWVkIGJvdGggYGNvc3RzYCBhbmQgYG9wZW5gP1xuICAgIHZhciBvcGVuID0gZGlqa3N0cmEuUHJpb3JpdHlRdWV1ZS5tYWtlKCk7XG4gICAgb3Blbi5wdXNoKHMsIDApO1xuXG4gICAgdmFyIGNsb3Nlc3QsXG4gICAgICAgIHUsIHYsXG4gICAgICAgIGNvc3Rfb2Zfc190b191LFxuICAgICAgICBhZGphY2VudF9ub2RlcyxcbiAgICAgICAgY29zdF9vZl9lLFxuICAgICAgICBjb3N0X29mX3NfdG9fdV9wbHVzX2Nvc3Rfb2ZfZSxcbiAgICAgICAgY29zdF9vZl9zX3RvX3YsXG4gICAgICAgIGZpcnN0X3Zpc2l0O1xuICAgIHdoaWxlICghb3Blbi5lbXB0eSgpKSB7XG4gICAgICAvLyBJbiB0aGUgbm9kZXMgcmVtYWluaW5nIGluIGdyYXBoIHRoYXQgaGF2ZSBhIGtub3duIGNvc3QgZnJvbSBzLFxuICAgICAgLy8gZmluZCB0aGUgbm9kZSwgdSwgdGhhdCBjdXJyZW50bHkgaGFzIHRoZSBzaG9ydGVzdCBwYXRoIGZyb20gcy5cbiAgICAgIGNsb3Nlc3QgPSBvcGVuLnBvcCgpO1xuICAgICAgdSA9IGNsb3Nlc3QudmFsdWU7XG4gICAgICBjb3N0X29mX3NfdG9fdSA9IGNsb3Nlc3QuY29zdDtcblxuICAgICAgLy8gR2V0IG5vZGVzIGFkamFjZW50IHRvIHUuLi5cbiAgICAgIGFkamFjZW50X25vZGVzID0gZ3JhcGhbdV0gfHwge307XG5cbiAgICAgIC8vIC4uLmFuZCBleHBsb3JlIHRoZSBlZGdlcyB0aGF0IGNvbm5lY3QgdSB0byB0aG9zZSBub2RlcywgdXBkYXRpbmdcbiAgICAgIC8vIHRoZSBjb3N0IG9mIHRoZSBzaG9ydGVzdCBwYXRocyB0byBhbnkgb3IgYWxsIG9mIHRob3NlIG5vZGVzIGFzXG4gICAgICAvLyBuZWNlc3NhcnkuIHYgaXMgdGhlIG5vZGUgYWNyb3NzIHRoZSBjdXJyZW50IGVkZ2UgZnJvbSB1LlxuICAgICAgZm9yICh2IGluIGFkamFjZW50X25vZGVzKSB7XG4gICAgICAgIGlmIChhZGphY2VudF9ub2Rlcy5oYXNPd25Qcm9wZXJ0eSh2KSkge1xuICAgICAgICAgIC8vIEdldCB0aGUgY29zdCBvZiB0aGUgZWRnZSBydW5uaW5nIGZyb20gdSB0byB2LlxuICAgICAgICAgIGNvc3Rfb2ZfZSA9IGFkamFjZW50X25vZGVzW3ZdO1xuXG4gICAgICAgICAgLy8gQ29zdCBvZiBzIHRvIHUgcGx1cyB0aGUgY29zdCBvZiB1IHRvIHYgYWNyb3NzIGUtLXRoaXMgaXMgKmEqXG4gICAgICAgICAgLy8gY29zdCBmcm9tIHMgdG8gdiB0aGF0IG1heSBvciBtYXkgbm90IGJlIGxlc3MgdGhhbiB0aGUgY3VycmVudFxuICAgICAgICAgIC8vIGtub3duIGNvc3QgdG8gdi5cbiAgICAgICAgICBjb3N0X29mX3NfdG9fdV9wbHVzX2Nvc3Rfb2ZfZSA9IGNvc3Rfb2Zfc190b191ICsgY29zdF9vZl9lO1xuXG4gICAgICAgICAgLy8gSWYgd2UgaGF2ZW4ndCB2aXNpdGVkIHYgeWV0IE9SIGlmIHRoZSBjdXJyZW50IGtub3duIGNvc3QgZnJvbSBzIHRvXG4gICAgICAgICAgLy8gdiBpcyBncmVhdGVyIHRoYW4gdGhlIG5ldyBjb3N0IHdlIGp1c3QgZm91bmQgKGNvc3Qgb2YgcyB0byB1IHBsdXNcbiAgICAgICAgICAvLyBjb3N0IG9mIHUgdG8gdiBhY3Jvc3MgZSksIHVwZGF0ZSB2J3MgY29zdCBpbiB0aGUgY29zdCBsaXN0IGFuZFxuICAgICAgICAgIC8vIHVwZGF0ZSB2J3MgcHJlZGVjZXNzb3IgaW4gdGhlIHByZWRlY2Vzc29yIGxpc3QgKGl0J3Mgbm93IHUpLlxuICAgICAgICAgIGNvc3Rfb2Zfc190b192ID0gY29zdHNbdl07XG4gICAgICAgICAgZmlyc3RfdmlzaXQgPSAodHlwZW9mIGNvc3RzW3ZdID09PSAndW5kZWZpbmVkJyk7XG4gICAgICAgICAgaWYgKGZpcnN0X3Zpc2l0IHx8IGNvc3Rfb2Zfc190b192ID4gY29zdF9vZl9zX3RvX3VfcGx1c19jb3N0X29mX2UpIHtcbiAgICAgICAgICAgIGNvc3RzW3ZdID0gY29zdF9vZl9zX3RvX3VfcGx1c19jb3N0X29mX2U7XG4gICAgICAgICAgICBvcGVuLnB1c2godiwgY29zdF9vZl9zX3RvX3VfcGx1c19jb3N0X29mX2UpO1xuICAgICAgICAgICAgcHJlZGVjZXNzb3JzW3ZdID0gdTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb3N0c1tkXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBtc2cgPSBbJ0NvdWxkIG5vdCBmaW5kIGEgcGF0aCBmcm9tICcsIHMsICcgdG8gJywgZCwgJy4nXS5qb2luKCcnKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgIH1cblxuICAgIHJldHVybiBwcmVkZWNlc3NvcnM7XG4gIH0sXG5cbiAgZXh0cmFjdF9zaG9ydGVzdF9wYXRoX2Zyb21fcHJlZGVjZXNzb3JfbGlzdDogZnVuY3Rpb24ocHJlZGVjZXNzb3JzLCBkKSB7XG4gICAgdmFyIG5vZGVzID0gW107XG4gICAgdmFyIHUgPSBkO1xuICAgIHZhciBwcmVkZWNlc3NvcjtcbiAgICB3aGlsZSAodSkge1xuICAgICAgbm9kZXMucHVzaCh1KTtcbiAgICAgIHByZWRlY2Vzc29yID0gcHJlZGVjZXNzb3JzW3VdO1xuICAgICAgdSA9IHByZWRlY2Vzc29yc1t1XTtcbiAgICB9XG4gICAgbm9kZXMucmV2ZXJzZSgpO1xuICAgIHJldHVybiBub2RlcztcbiAgfSxcblxuICBmaW5kX3BhdGg6IGZ1bmN0aW9uKGdyYXBoLCBzLCBkKSB7XG4gICAgdmFyIHByZWRlY2Vzc29ycyA9IGRpamtzdHJhLnNpbmdsZV9zb3VyY2Vfc2hvcnRlc3RfcGF0aHMoZ3JhcGgsIHMsIGQpO1xuICAgIHJldHVybiBkaWprc3RyYS5leHRyYWN0X3Nob3J0ZXN0X3BhdGhfZnJvbV9wcmVkZWNlc3Nvcl9saXN0KFxuICAgICAgcHJlZGVjZXNzb3JzLCBkKTtcbiAgfSxcblxuICAvKipcbiAgICogQSB2ZXJ5IG5haXZlIHByaW9yaXR5IHF1ZXVlIGltcGxlbWVudGF0aW9uLlxuICAgKi9cbiAgUHJpb3JpdHlRdWV1ZToge1xuICAgIG1ha2U6IGZ1bmN0aW9uIChvcHRzKSB7XG4gICAgICB2YXIgVCA9IGRpamtzdHJhLlByaW9yaXR5UXVldWUsXG4gICAgICAgICAgdCA9IHt9LFxuICAgICAgICAgIGtleTtcbiAgICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAgICAgZm9yIChrZXkgaW4gVCkge1xuICAgICAgICBpZiAoVC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgdFtrZXldID0gVFtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0LnF1ZXVlID0gW107XG4gICAgICB0LnNvcnRlciA9IG9wdHMuc29ydGVyIHx8IFQuZGVmYXVsdF9zb3J0ZXI7XG4gICAgICByZXR1cm4gdDtcbiAgICB9LFxuXG4gICAgZGVmYXVsdF9zb3J0ZXI6IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gYS5jb3N0IC0gYi5jb3N0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBuZXcgaXRlbSB0byB0aGUgcXVldWUgYW5kIGVuc3VyZSB0aGUgaGlnaGVzdCBwcmlvcml0eSBlbGVtZW50XG4gICAgICogaXMgYXQgdGhlIGZyb250IG9mIHRoZSBxdWV1ZS5cbiAgICAgKi9cbiAgICBwdXNoOiBmdW5jdGlvbiAodmFsdWUsIGNvc3QpIHtcbiAgICAgIHZhciBpdGVtID0ge3ZhbHVlOiB2YWx1ZSwgY29zdDogY29zdH07XG4gICAgICB0aGlzLnF1ZXVlLnB1c2goaXRlbSk7XG4gICAgICB0aGlzLnF1ZXVlLnNvcnQodGhpcy5zb3J0ZXIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIGhpZ2hlc3QgcHJpb3JpdHkgZWxlbWVudCBpbiB0aGUgcXVldWUuXG4gICAgICovXG4gICAgcG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5xdWV1ZS5zaGlmdCgpO1xuICAgIH0sXG5cbiAgICBlbXB0eTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMucXVldWUubGVuZ3RoID09PSAwO1xuICAgIH1cbiAgfVxufTtcblxuXG4vLyBub2RlLmpzIG1vZHVsZSBleHBvcnRzXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBkaWprc3RyYTtcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuY29kZVV0ZjggKGlucHV0KSB7XG4gIHZhciByZXN1bHQgPSBbXVxuICB2YXIgc2l6ZSA9IGlucHV0Lmxlbmd0aFxuXG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBzaXplOyBpbmRleCsrKSB7XG4gICAgdmFyIHBvaW50ID0gaW5wdXQuY2hhckNvZGVBdChpbmRleClcblxuICAgIGlmIChwb2ludCA+PSAweEQ4MDAgJiYgcG9pbnQgPD0gMHhEQkZGICYmIHNpemUgPiBpbmRleCArIDEpIHtcbiAgICAgIHZhciBzZWNvbmQgPSBpbnB1dC5jaGFyQ29kZUF0KGluZGV4ICsgMSlcblxuICAgICAgaWYgKHNlY29uZCA+PSAweERDMDAgJiYgc2Vjb25kIDw9IDB4REZGRikge1xuICAgICAgICAvLyBodHRwczovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvamF2YXNjcmlwdC1lbmNvZGluZyNzdXJyb2dhdGUtZm9ybXVsYWVcbiAgICAgICAgcG9pbnQgPSAocG9pbnQgLSAweEQ4MDApICogMHg0MDAgKyBzZWNvbmQgLSAweERDMDAgKyAweDEwMDAwXG4gICAgICAgIGluZGV4ICs9IDFcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBVUy1BU0NJSVxuICAgIGlmIChwb2ludCA8IDB4ODApIHtcbiAgICAgIHJlc3VsdC5wdXNoKHBvaW50KVxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICAvLyAyLWJ5dGUgVVRGLThcbiAgICBpZiAocG9pbnQgPCAweDgwMCkge1xuICAgICAgcmVzdWx0LnB1c2goKHBvaW50ID4+IDYpIHwgMTkyKVxuICAgICAgcmVzdWx0LnB1c2goKHBvaW50ICYgNjMpIHwgMTI4KVxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICAvLyAzLWJ5dGUgVVRGLThcbiAgICBpZiAocG9pbnQgPCAweEQ4MDAgfHwgKHBvaW50ID49IDB4RTAwMCAmJiBwb2ludCA8IDB4MTAwMDApKSB7XG4gICAgICByZXN1bHQucHVzaCgocG9pbnQgPj4gMTIpIHwgMjI0KVxuICAgICAgcmVzdWx0LnB1c2goKChwb2ludCA+PiA2KSAmIDYzKSB8IDEyOClcbiAgICAgIHJlc3VsdC5wdXNoKChwb2ludCAmIDYzKSB8IDEyOClcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgLy8gNC1ieXRlIFVURi04XG4gICAgaWYgKHBvaW50ID49IDB4MTAwMDAgJiYgcG9pbnQgPD0gMHgxMEZGRkYpIHtcbiAgICAgIHJlc3VsdC5wdXNoKChwb2ludCA+PiAxOCkgfCAyNDApXG4gICAgICByZXN1bHQucHVzaCgoKHBvaW50ID4+IDEyKSAmIDYzKSB8IDEyOClcbiAgICAgIHJlc3VsdC5wdXNoKCgocG9pbnQgPj4gNikgJiA2MykgfCAxMjgpXG4gICAgICByZXN1bHQucHVzaCgocG9pbnQgJiA2MykgfCAxMjgpXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIC8vIEludmFsaWQgY2hhcmFjdGVyXG4gICAgcmVzdWx0LnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgfVxuXG4gIHJldHVybiBuZXcgVWludDhBcnJheShyZXN1bHQpLmJ1ZmZlclxufVxuIiwiXG5jb25zdCBjYW5Qcm9taXNlID0gcmVxdWlyZSgnLi9jYW4tcHJvbWlzZScpXG5cbmNvbnN0IFFSQ29kZSA9IHJlcXVpcmUoJy4vY29yZS9xcmNvZGUnKVxuY29uc3QgQ2FudmFzUmVuZGVyZXIgPSByZXF1aXJlKCcuL3JlbmRlcmVyL2NhbnZhcycpXG5jb25zdCBTdmdSZW5kZXJlciA9IHJlcXVpcmUoJy4vcmVuZGVyZXIvc3ZnLXRhZy5qcycpXG5cbmZ1bmN0aW9uIHJlbmRlckNhbnZhcyAocmVuZGVyRnVuYywgY2FudmFzLCB0ZXh0LCBvcHRzLCBjYikge1xuICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG4gIGNvbnN0IGFyZ3NOdW0gPSBhcmdzLmxlbmd0aFxuICBjb25zdCBpc0xhc3RBcmdDYiA9IHR5cGVvZiBhcmdzW2FyZ3NOdW0gLSAxXSA9PT0gJ2Z1bmN0aW9uJ1xuXG4gIGlmICghaXNMYXN0QXJnQ2IgJiYgIWNhblByb21pc2UoKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2FsbGJhY2sgcmVxdWlyZWQgYXMgbGFzdCBhcmd1bWVudCcpXG4gIH1cblxuICBpZiAoaXNMYXN0QXJnQ2IpIHtcbiAgICBpZiAoYXJnc051bSA8IDIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVG9vIGZldyBhcmd1bWVudHMgcHJvdmlkZWQnKVxuICAgIH1cblxuICAgIGlmIChhcmdzTnVtID09PSAyKSB7XG4gICAgICBjYiA9IHRleHRcbiAgICAgIHRleHQgPSBjYW52YXNcbiAgICAgIGNhbnZhcyA9IG9wdHMgPSB1bmRlZmluZWRcbiAgICB9IGVsc2UgaWYgKGFyZ3NOdW0gPT09IDMpIHtcbiAgICAgIGlmIChjYW52YXMuZ2V0Q29udGV4dCAmJiB0eXBlb2YgY2IgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNiID0gb3B0c1xuICAgICAgICBvcHRzID0gdW5kZWZpbmVkXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYiA9IG9wdHNcbiAgICAgICAgb3B0cyA9IHRleHRcbiAgICAgICAgdGV4dCA9IGNhbnZhc1xuICAgICAgICBjYW52YXMgPSB1bmRlZmluZWRcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGFyZ3NOdW0gPCAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RvbyBmZXcgYXJndW1lbnRzIHByb3ZpZGVkJylcbiAgICB9XG5cbiAgICBpZiAoYXJnc051bSA9PT0gMSkge1xuICAgICAgdGV4dCA9IGNhbnZhc1xuICAgICAgY2FudmFzID0gb3B0cyA9IHVuZGVmaW5lZFxuICAgIH0gZWxzZSBpZiAoYXJnc051bSA9PT0gMiAmJiAhY2FudmFzLmdldENvbnRleHQpIHtcbiAgICAgIG9wdHMgPSB0ZXh0XG4gICAgICB0ZXh0ID0gY2FudmFzXG4gICAgICBjYW52YXMgPSB1bmRlZmluZWRcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IFFSQ29kZS5jcmVhdGUodGV4dCwgb3B0cylcbiAgICAgICAgcmVzb2x2ZShyZW5kZXJGdW5jKGRhdGEsIGNhbnZhcywgb3B0cykpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlamVjdChlKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBRUkNvZGUuY3JlYXRlKHRleHQsIG9wdHMpXG4gICAgY2IobnVsbCwgcmVuZGVyRnVuYyhkYXRhLCBjYW52YXMsIG9wdHMpKVxuICB9IGNhdGNoIChlKSB7XG4gICAgY2IoZSlcbiAgfVxufVxuXG5leHBvcnRzLmNyZWF0ZSA9IFFSQ29kZS5jcmVhdGVcbmV4cG9ydHMudG9DYW52YXMgPSByZW5kZXJDYW52YXMuYmluZChudWxsLCBDYW52YXNSZW5kZXJlci5yZW5kZXIpXG5leHBvcnRzLnRvRGF0YVVSTCA9IHJlbmRlckNhbnZhcy5iaW5kKG51bGwsIENhbnZhc1JlbmRlcmVyLnJlbmRlclRvRGF0YVVSTClcblxuLy8gb25seSBzdmcgZm9yIG5vdy5cbmV4cG9ydHMudG9TdHJpbmcgPSByZW5kZXJDYW52YXMuYmluZChudWxsLCBmdW5jdGlvbiAoZGF0YSwgXywgb3B0cykge1xuICByZXR1cm4gU3ZnUmVuZGVyZXIucmVuZGVyKGRhdGEsIG9wdHMpXG59KVxuIiwiLy8gY2FuLXByb21pc2UgaGFzIGEgY3Jhc2ggaW4gc29tZSB2ZXJzaW9ucyBvZiByZWFjdCBuYXRpdmUgdGhhdCBkb250IGhhdmVcbi8vIHN0YW5kYXJkIGdsb2JhbCBvYmplY3RzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vc29sZGFpci9ub2RlLXFyY29kZS9pc3N1ZXMvMTU3XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHlwZW9mIFByb21pc2UgPT09ICdmdW5jdGlvbicgJiYgUHJvbWlzZS5wcm90b3R5cGUgJiYgUHJvbWlzZS5wcm90b3R5cGUudGhlblxufVxuIiwiLyoqXG4gKiBBbGlnbm1lbnQgcGF0dGVybiBhcmUgZml4ZWQgcmVmZXJlbmNlIHBhdHRlcm4gaW4gZGVmaW5lZCBwb3NpdGlvbnNcbiAqIGluIGEgbWF0cml4IHN5bWJvbG9neSwgd2hpY2ggZW5hYmxlcyB0aGUgZGVjb2RlIHNvZnR3YXJlIHRvIHJlLXN5bmNocm9uaXNlXG4gKiB0aGUgY29vcmRpbmF0ZSBtYXBwaW5nIG9mIHRoZSBpbWFnZSBtb2R1bGVzIGluIHRoZSBldmVudCBvZiBtb2RlcmF0ZSBhbW91bnRzXG4gKiBvZiBkaXN0b3J0aW9uIG9mIHRoZSBpbWFnZS5cbiAqXG4gKiBBbGlnbm1lbnQgcGF0dGVybnMgYXJlIHByZXNlbnQgb25seSBpbiBRUiBDb2RlIHN5bWJvbHMgb2YgdmVyc2lvbiAyIG9yIGxhcmdlclxuICogYW5kIHRoZWlyIG51bWJlciBkZXBlbmRzIG9uIHRoZSBzeW1ib2wgdmVyc2lvbi5cbiAqL1xuXG5jb25zdCBnZXRTeW1ib2xTaXplID0gcmVxdWlyZSgnLi91dGlscycpLmdldFN5bWJvbFNpemVcblxuLyoqXG4gKiBDYWxjdWxhdGUgdGhlIHJvdy9jb2x1bW4gY29vcmRpbmF0ZXMgb2YgdGhlIGNlbnRlciBtb2R1bGUgb2YgZWFjaCBhbGlnbm1lbnQgcGF0dGVyblxuICogZm9yIHRoZSBzcGVjaWZpZWQgUVIgQ29kZSB2ZXJzaW9uLlxuICpcbiAqIFRoZSBhbGlnbm1lbnQgcGF0dGVybnMgYXJlIHBvc2l0aW9uZWQgc3ltbWV0cmljYWxseSBvbiBlaXRoZXIgc2lkZSBvZiB0aGUgZGlhZ29uYWxcbiAqIHJ1bm5pbmcgZnJvbSB0aGUgdG9wIGxlZnQgY29ybmVyIG9mIHRoZSBzeW1ib2wgdG8gdGhlIGJvdHRvbSByaWdodCBjb3JuZXIuXG4gKlxuICogU2luY2UgcG9zaXRpb25zIGFyZSBzaW1tZXRyaWNhbCBvbmx5IGhhbGYgb2YgdGhlIGNvb3JkaW5hdGVzIGFyZSByZXR1cm5lZC5cbiAqIEVhY2ggaXRlbSBvZiB0aGUgYXJyYXkgd2lsbCByZXByZXNlbnQgaW4gdHVybiB0aGUgeCBhbmQgeSBjb29yZGluYXRlLlxuICogQHNlZSB7QGxpbmsgZ2V0UG9zaXRpb25zfVxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gdmVyc2lvbiBRUiBDb2RlIHZlcnNpb25cbiAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgICBBcnJheSBvZiBjb29yZGluYXRlXG4gKi9cbmV4cG9ydHMuZ2V0Um93Q29sQ29vcmRzID0gZnVuY3Rpb24gZ2V0Um93Q29sQ29vcmRzICh2ZXJzaW9uKSB7XG4gIGlmICh2ZXJzaW9uID09PSAxKSByZXR1cm4gW11cblxuICBjb25zdCBwb3NDb3VudCA9IE1hdGguZmxvb3IodmVyc2lvbiAvIDcpICsgMlxuICBjb25zdCBzaXplID0gZ2V0U3ltYm9sU2l6ZSh2ZXJzaW9uKVxuICBjb25zdCBpbnRlcnZhbHMgPSBzaXplID09PSAxNDUgPyAyNiA6IE1hdGguY2VpbCgoc2l6ZSAtIDEzKSAvICgyICogcG9zQ291bnQgLSAyKSkgKiAyXG4gIGNvbnN0IHBvc2l0aW9ucyA9IFtzaXplIC0gN10gLy8gTGFzdCBjb29yZCBpcyBhbHdheXMgKHNpemUgLSA3KVxuXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcG9zQ291bnQgLSAxOyBpKyspIHtcbiAgICBwb3NpdGlvbnNbaV0gPSBwb3NpdGlvbnNbaSAtIDFdIC0gaW50ZXJ2YWxzXG4gIH1cblxuICBwb3NpdGlvbnMucHVzaCg2KSAvLyBGaXJzdCBjb29yZCBpcyBhbHdheXMgNlxuXG4gIHJldHVybiBwb3NpdGlvbnMucmV2ZXJzZSgpXG59XG5cbi8qKlxuICogUmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIHRoZSBwb3NpdGlvbnMgb2YgZWFjaCBhbGlnbm1lbnQgcGF0dGVybi5cbiAqIEVhY2ggYXJyYXkncyBlbGVtZW50IHJlcHJlc2VudCB0aGUgY2VudGVyIHBvaW50IG9mIHRoZSBwYXR0ZXJuIGFzICh4LCB5KSBjb29yZGluYXRlc1xuICpcbiAqIENvb3JkaW5hdGVzIGFyZSBjYWxjdWxhdGVkIGV4cGFuZGluZyB0aGUgcm93L2NvbHVtbiBjb29yZGluYXRlcyByZXR1cm5lZCBieSB7QGxpbmsgZ2V0Um93Q29sQ29vcmRzfVxuICogYW5kIGZpbHRlcmluZyBvdXQgdGhlIGl0ZW1zIHRoYXQgb3ZlcmxhcHMgd2l0aCBmaW5kZXIgcGF0dGVyblxuICpcbiAqIEBleGFtcGxlXG4gKiBGb3IgYSBWZXJzaW9uIDcgc3ltYm9sIHtAbGluayBnZXRSb3dDb2xDb29yZHN9IHJldHVybnMgdmFsdWVzIDYsIDIyIGFuZCAzOC5cbiAqIFRoZSBhbGlnbm1lbnQgcGF0dGVybnMsIHRoZXJlZm9yZSwgYXJlIHRvIGJlIGNlbnRlcmVkIG9uIChyb3csIGNvbHVtbilcbiAqIHBvc2l0aW9ucyAoNiwyMiksICgyMiw2KSwgKDIyLDIyKSwgKDIyLDM4KSwgKDM4LDIyKSwgKDM4LDM4KS5cbiAqIE5vdGUgdGhhdCB0aGUgY29vcmRpbmF0ZXMgKDYsNiksICg2LDM4KSwgKDM4LDYpIGFyZSBvY2N1cGllZCBieSBmaW5kZXIgcGF0dGVybnNcbiAqIGFuZCBhcmUgbm90IHRoZXJlZm9yZSB1c2VkIGZvciBhbGlnbm1lbnQgcGF0dGVybnMuXG4gKlxuICogbGV0IHBvcyA9IGdldFBvc2l0aW9ucyg3KVxuICogLy8gW1s2LDIyXSwgWzIyLDZdLCBbMjIsMjJdLCBbMjIsMzhdLCBbMzgsMjJdLCBbMzgsMzhdXVxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gdmVyc2lvbiBRUiBDb2RlIHZlcnNpb25cbiAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgICBBcnJheSBvZiBjb29yZGluYXRlc1xuICovXG5leHBvcnRzLmdldFBvc2l0aW9ucyA9IGZ1bmN0aW9uIGdldFBvc2l0aW9ucyAodmVyc2lvbikge1xuICBjb25zdCBjb29yZHMgPSBbXVxuICBjb25zdCBwb3MgPSBleHBvcnRzLmdldFJvd0NvbENvb3Jkcyh2ZXJzaW9uKVxuICBjb25zdCBwb3NMZW5ndGggPSBwb3MubGVuZ3RoXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NMZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcG9zTGVuZ3RoOyBqKyspIHtcbiAgICAgIC8vIFNraXAgaWYgcG9zaXRpb24gaXMgb2NjdXBpZWQgYnkgZmluZGVyIHBhdHRlcm5zXG4gICAgICBpZiAoKGkgPT09IDAgJiYgaiA9PT0gMCkgfHwgLy8gdG9wLWxlZnRcbiAgICAgICAgICAoaSA9PT0gMCAmJiBqID09PSBwb3NMZW5ndGggLSAxKSB8fCAvLyBib3R0b20tbGVmdFxuICAgICAgICAgIChpID09PSBwb3NMZW5ndGggLSAxICYmIGogPT09IDApKSB7IC8vIHRvcC1yaWdodFxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBjb29yZHMucHVzaChbcG9zW2ldLCBwb3Nbal1dKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb29yZHNcbn1cbiIsImNvbnN0IE1vZGUgPSByZXF1aXJlKCcuL21vZGUnKVxuXG4vKipcbiAqIEFycmF5IG9mIGNoYXJhY3RlcnMgYXZhaWxhYmxlIGluIGFscGhhbnVtZXJpYyBtb2RlXG4gKlxuICogQXMgcGVyIFFSIENvZGUgc3BlY2lmaWNhdGlvbiwgdG8gZWFjaCBjaGFyYWN0ZXJcbiAqIGlzIGFzc2lnbmVkIGEgdmFsdWUgZnJvbSAwIHRvIDQ0IHdoaWNoIGluIHRoaXMgY2FzZSBjb2luY2lkZXNcbiAqIHdpdGggdGhlIGFycmF5IGluZGV4XG4gKlxuICogQHR5cGUge0FycmF5fVxuICovXG5jb25zdCBBTFBIQV9OVU1fQ0hBUlMgPSBbXG4gICcwJywgJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JyxcbiAgJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onLCAnSycsICdMJywgJ00nLFxuICAnTicsICdPJywgJ1AnLCAnUScsICdSJywgJ1MnLCAnVCcsICdVJywgJ1YnLCAnVycsICdYJywgJ1knLCAnWicsXG4gICcgJywgJyQnLCAnJScsICcqJywgJysnLCAnLScsICcuJywgJy8nLCAnOidcbl1cblxuZnVuY3Rpb24gQWxwaGFudW1lcmljRGF0YSAoZGF0YSkge1xuICB0aGlzLm1vZGUgPSBNb2RlLkFMUEhBTlVNRVJJQ1xuICB0aGlzLmRhdGEgPSBkYXRhXG59XG5cbkFscGhhbnVtZXJpY0RhdGEuZ2V0Qml0c0xlbmd0aCA9IGZ1bmN0aW9uIGdldEJpdHNMZW5ndGggKGxlbmd0aCkge1xuICByZXR1cm4gMTEgKiBNYXRoLmZsb29yKGxlbmd0aCAvIDIpICsgNiAqIChsZW5ndGggJSAyKVxufVxuXG5BbHBoYW51bWVyaWNEYXRhLnByb3RvdHlwZS5nZXRMZW5ndGggPSBmdW5jdGlvbiBnZXRMZW5ndGggKCkge1xuICByZXR1cm4gdGhpcy5kYXRhLmxlbmd0aFxufVxuXG5BbHBoYW51bWVyaWNEYXRhLnByb3RvdHlwZS5nZXRCaXRzTGVuZ3RoID0gZnVuY3Rpb24gZ2V0Qml0c0xlbmd0aCAoKSB7XG4gIHJldHVybiBBbHBoYW51bWVyaWNEYXRhLmdldEJpdHNMZW5ndGgodGhpcy5kYXRhLmxlbmd0aClcbn1cblxuQWxwaGFudW1lcmljRGF0YS5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiB3cml0ZSAoYml0QnVmZmVyKSB7XG4gIGxldCBpXG5cbiAgLy8gSW5wdXQgZGF0YSBjaGFyYWN0ZXJzIGFyZSBkaXZpZGVkIGludG8gZ3JvdXBzIG9mIHR3byBjaGFyYWN0ZXJzXG4gIC8vIGFuZCBlbmNvZGVkIGFzIDExLWJpdCBiaW5hcnkgY29kZXMuXG4gIGZvciAoaSA9IDA7IGkgKyAyIDw9IHRoaXMuZGF0YS5sZW5ndGg7IGkgKz0gMikge1xuICAgIC8vIFRoZSBjaGFyYWN0ZXIgdmFsdWUgb2YgdGhlIGZpcnN0IGNoYXJhY3RlciBpcyBtdWx0aXBsaWVkIGJ5IDQ1XG4gICAgbGV0IHZhbHVlID0gQUxQSEFfTlVNX0NIQVJTLmluZGV4T2YodGhpcy5kYXRhW2ldKSAqIDQ1XG5cbiAgICAvLyBUaGUgY2hhcmFjdGVyIHZhbHVlIG9mIHRoZSBzZWNvbmQgZGlnaXQgaXMgYWRkZWQgdG8gdGhlIHByb2R1Y3RcbiAgICB2YWx1ZSArPSBBTFBIQV9OVU1fQ0hBUlMuaW5kZXhPZih0aGlzLmRhdGFbaSArIDFdKVxuXG4gICAgLy8gVGhlIHN1bSBpcyB0aGVuIHN0b3JlZCBhcyAxMS1iaXQgYmluYXJ5IG51bWJlclxuICAgIGJpdEJ1ZmZlci5wdXQodmFsdWUsIDExKVxuICB9XG5cbiAgLy8gSWYgdGhlIG51bWJlciBvZiBpbnB1dCBkYXRhIGNoYXJhY3RlcnMgaXMgbm90IGEgbXVsdGlwbGUgb2YgdHdvLFxuICAvLyB0aGUgY2hhcmFjdGVyIHZhbHVlIG9mIHRoZSBmaW5hbCBjaGFyYWN0ZXIgaXMgZW5jb2RlZCBhcyBhIDYtYml0IGJpbmFyeSBudW1iZXIuXG4gIGlmICh0aGlzLmRhdGEubGVuZ3RoICUgMikge1xuICAgIGJpdEJ1ZmZlci5wdXQoQUxQSEFfTlVNX0NIQVJTLmluZGV4T2YodGhpcy5kYXRhW2ldKSwgNilcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFscGhhbnVtZXJpY0RhdGFcbiIsImZ1bmN0aW9uIEJpdEJ1ZmZlciAoKSB7XG4gIHRoaXMuYnVmZmVyID0gW11cbiAgdGhpcy5sZW5ndGggPSAwXG59XG5cbkJpdEJ1ZmZlci5wcm90b3R5cGUgPSB7XG5cbiAgZ2V0OiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICBjb25zdCBidWZJbmRleCA9IE1hdGguZmxvb3IoaW5kZXggLyA4KVxuICAgIHJldHVybiAoKHRoaXMuYnVmZmVyW2J1ZkluZGV4XSA+Pj4gKDcgLSBpbmRleCAlIDgpKSAmIDEpID09PSAxXG4gIH0sXG5cbiAgcHV0OiBmdW5jdGlvbiAobnVtLCBsZW5ndGgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnB1dEJpdCgoKG51bSA+Pj4gKGxlbmd0aCAtIGkgLSAxKSkgJiAxKSA9PT0gMSlcbiAgICB9XG4gIH0sXG5cbiAgZ2V0TGVuZ3RoSW5CaXRzOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoXG4gIH0sXG5cbiAgcHV0Qml0OiBmdW5jdGlvbiAoYml0KSB7XG4gICAgY29uc3QgYnVmSW5kZXggPSBNYXRoLmZsb29yKHRoaXMubGVuZ3RoIC8gOClcbiAgICBpZiAodGhpcy5idWZmZXIubGVuZ3RoIDw9IGJ1ZkluZGV4KSB7XG4gICAgICB0aGlzLmJ1ZmZlci5wdXNoKDApXG4gICAgfVxuXG4gICAgaWYgKGJpdCkge1xuICAgICAgdGhpcy5idWZmZXJbYnVmSW5kZXhdIHw9ICgweDgwID4+PiAodGhpcy5sZW5ndGggJSA4KSlcbiAgICB9XG5cbiAgICB0aGlzLmxlbmd0aCsrXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCaXRCdWZmZXJcbiIsIi8qKlxuICogSGVscGVyIGNsYXNzIHRvIGhhbmRsZSBRUiBDb2RlIHN5bWJvbCBtb2R1bGVzXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHNpemUgU3ltYm9sIHNpemVcbiAqL1xuZnVuY3Rpb24gQml0TWF0cml4IChzaXplKSB7XG4gIGlmICghc2l6ZSB8fCBzaXplIDwgMSkge1xuICAgIHRocm93IG5ldyBFcnJvcignQml0TWF0cml4IHNpemUgbXVzdCBiZSBkZWZpbmVkIGFuZCBncmVhdGVyIHRoYW4gMCcpXG4gIH1cblxuICB0aGlzLnNpemUgPSBzaXplXG4gIHRoaXMuZGF0YSA9IG5ldyBVaW50OEFycmF5KHNpemUgKiBzaXplKVxuICB0aGlzLnJlc2VydmVkQml0ID0gbmV3IFVpbnQ4QXJyYXkoc2l6ZSAqIHNpemUpXG59XG5cbi8qKlxuICogU2V0IGJpdCB2YWx1ZSBhdCBzcGVjaWZpZWQgbG9jYXRpb25cbiAqIElmIHJlc2VydmVkIGZsYWcgaXMgc2V0LCB0aGlzIGJpdCB3aWxsIGJlIGlnbm9yZWQgZHVyaW5nIG1hc2tpbmcgcHJvY2Vzc1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSAgcm93XG4gKiBAcGFyYW0ge051bWJlcn0gIGNvbFxuICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICogQHBhcmFtIHtCb29sZWFufSByZXNlcnZlZFxuICovXG5CaXRNYXRyaXgucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChyb3csIGNvbCwgdmFsdWUsIHJlc2VydmVkKSB7XG4gIGNvbnN0IGluZGV4ID0gcm93ICogdGhpcy5zaXplICsgY29sXG4gIHRoaXMuZGF0YVtpbmRleF0gPSB2YWx1ZVxuICBpZiAocmVzZXJ2ZWQpIHRoaXMucmVzZXJ2ZWRCaXRbaW5kZXhdID0gdHJ1ZVxufVxuXG4vKipcbiAqIFJldHVybnMgYml0IHZhbHVlIGF0IHNwZWNpZmllZCBsb2NhdGlvblxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gIHJvd1xuICogQHBhcmFtICB7TnVtYmVyfSAgY29sXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5CaXRNYXRyaXgucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChyb3csIGNvbCkge1xuICByZXR1cm4gdGhpcy5kYXRhW3JvdyAqIHRoaXMuc2l6ZSArIGNvbF1cbn1cblxuLyoqXG4gKiBBcHBsaWVzIHhvciBvcGVyYXRvciBhdCBzcGVjaWZpZWQgbG9jYXRpb25cbiAqICh1c2VkIGR1cmluZyBtYXNraW5nIHByb2Nlc3MpXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9ICByb3dcbiAqIEBwYXJhbSB7TnVtYmVyfSAgY29sXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gKi9cbkJpdE1hdHJpeC5wcm90b3R5cGUueG9yID0gZnVuY3Rpb24gKHJvdywgY29sLCB2YWx1ZSkge1xuICB0aGlzLmRhdGFbcm93ICogdGhpcy5zaXplICsgY29sXSBePSB2YWx1ZVxufVxuXG4vKipcbiAqIENoZWNrIGlmIGJpdCBhdCBzcGVjaWZpZWQgbG9jYXRpb24gaXMgcmVzZXJ2ZWRcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gICByb3dcbiAqIEBwYXJhbSB7TnVtYmVyfSAgIGNvbFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuQml0TWF0cml4LnByb3RvdHlwZS5pc1Jlc2VydmVkID0gZnVuY3Rpb24gKHJvdywgY29sKSB7XG4gIHJldHVybiB0aGlzLnJlc2VydmVkQml0W3JvdyAqIHRoaXMuc2l6ZSArIGNvbF1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCaXRNYXRyaXhcbiIsImNvbnN0IGVuY29kZVV0ZjggPSByZXF1aXJlKCdlbmNvZGUtdXRmOCcpXG5jb25zdCBNb2RlID0gcmVxdWlyZSgnLi9tb2RlJylcblxuZnVuY3Rpb24gQnl0ZURhdGEgKGRhdGEpIHtcbiAgdGhpcy5tb2RlID0gTW9kZS5CWVRFXG4gIGlmICh0eXBlb2YgKGRhdGEpID09PSAnc3RyaW5nJykge1xuICAgIGRhdGEgPSBlbmNvZGVVdGY4KGRhdGEpXG4gIH1cbiAgdGhpcy5kYXRhID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSlcbn1cblxuQnl0ZURhdGEuZ2V0Qml0c0xlbmd0aCA9IGZ1bmN0aW9uIGdldEJpdHNMZW5ndGggKGxlbmd0aCkge1xuICByZXR1cm4gbGVuZ3RoICogOFxufVxuXG5CeXRlRGF0YS5wcm90b3R5cGUuZ2V0TGVuZ3RoID0gZnVuY3Rpb24gZ2V0TGVuZ3RoICgpIHtcbiAgcmV0dXJuIHRoaXMuZGF0YS5sZW5ndGhcbn1cblxuQnl0ZURhdGEucHJvdG90eXBlLmdldEJpdHNMZW5ndGggPSBmdW5jdGlvbiBnZXRCaXRzTGVuZ3RoICgpIHtcbiAgcmV0dXJuIEJ5dGVEYXRhLmdldEJpdHNMZW5ndGgodGhpcy5kYXRhLmxlbmd0aClcbn1cblxuQnl0ZURhdGEucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKGJpdEJ1ZmZlcikge1xuICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMuZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBiaXRCdWZmZXIucHV0KHRoaXMuZGF0YVtpXSwgOClcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJ5dGVEYXRhXG4iLCJjb25zdCBFQ0xldmVsID0gcmVxdWlyZSgnLi9lcnJvci1jb3JyZWN0aW9uLWxldmVsJylcclxuXHJcbmNvbnN0IEVDX0JMT0NLU19UQUJMRSA9IFtcclxuLy8gTCAgTSAgUSAgSFxyXG4gIDEsIDEsIDEsIDEsXHJcbiAgMSwgMSwgMSwgMSxcclxuICAxLCAxLCAyLCAyLFxyXG4gIDEsIDIsIDIsIDQsXHJcbiAgMSwgMiwgNCwgNCxcclxuICAyLCA0LCA0LCA0LFxyXG4gIDIsIDQsIDYsIDUsXHJcbiAgMiwgNCwgNiwgNixcclxuICAyLCA1LCA4LCA4LFxyXG4gIDQsIDUsIDgsIDgsXHJcbiAgNCwgNSwgOCwgMTEsXHJcbiAgNCwgOCwgMTAsIDExLFxyXG4gIDQsIDksIDEyLCAxNixcclxuICA0LCA5LCAxNiwgMTYsXHJcbiAgNiwgMTAsIDEyLCAxOCxcclxuICA2LCAxMCwgMTcsIDE2LFxyXG4gIDYsIDExLCAxNiwgMTksXHJcbiAgNiwgMTMsIDE4LCAyMSxcclxuICA3LCAxNCwgMjEsIDI1LFxyXG4gIDgsIDE2LCAyMCwgMjUsXHJcbiAgOCwgMTcsIDIzLCAyNSxcclxuICA5LCAxNywgMjMsIDM0LFxyXG4gIDksIDE4LCAyNSwgMzAsXHJcbiAgMTAsIDIwLCAyNywgMzIsXHJcbiAgMTIsIDIxLCAyOSwgMzUsXHJcbiAgMTIsIDIzLCAzNCwgMzcsXHJcbiAgMTIsIDI1LCAzNCwgNDAsXHJcbiAgMTMsIDI2LCAzNSwgNDIsXHJcbiAgMTQsIDI4LCAzOCwgNDUsXHJcbiAgMTUsIDI5LCA0MCwgNDgsXHJcbiAgMTYsIDMxLCA0MywgNTEsXHJcbiAgMTcsIDMzLCA0NSwgNTQsXHJcbiAgMTgsIDM1LCA0OCwgNTcsXHJcbiAgMTksIDM3LCA1MSwgNjAsXHJcbiAgMTksIDM4LCA1MywgNjMsXHJcbiAgMjAsIDQwLCA1NiwgNjYsXHJcbiAgMjEsIDQzLCA1OSwgNzAsXHJcbiAgMjIsIDQ1LCA2MiwgNzQsXHJcbiAgMjQsIDQ3LCA2NSwgNzcsXHJcbiAgMjUsIDQ5LCA2OCwgODFcclxuXVxyXG5cclxuY29uc3QgRUNfQ09ERVdPUkRTX1RBQkxFID0gW1xyXG4vLyBMICBNICBRICBIXHJcbiAgNywgMTAsIDEzLCAxNyxcclxuICAxMCwgMTYsIDIyLCAyOCxcclxuICAxNSwgMjYsIDM2LCA0NCxcclxuICAyMCwgMzYsIDUyLCA2NCxcclxuICAyNiwgNDgsIDcyLCA4OCxcclxuICAzNiwgNjQsIDk2LCAxMTIsXHJcbiAgNDAsIDcyLCAxMDgsIDEzMCxcclxuICA0OCwgODgsIDEzMiwgMTU2LFxyXG4gIDYwLCAxMTAsIDE2MCwgMTkyLFxyXG4gIDcyLCAxMzAsIDE5MiwgMjI0LFxyXG4gIDgwLCAxNTAsIDIyNCwgMjY0LFxyXG4gIDk2LCAxNzYsIDI2MCwgMzA4LFxyXG4gIDEwNCwgMTk4LCAyODgsIDM1MixcclxuICAxMjAsIDIxNiwgMzIwLCAzODQsXHJcbiAgMTMyLCAyNDAsIDM2MCwgNDMyLFxyXG4gIDE0NCwgMjgwLCA0MDgsIDQ4MCxcclxuICAxNjgsIDMwOCwgNDQ4LCA1MzIsXHJcbiAgMTgwLCAzMzgsIDUwNCwgNTg4LFxyXG4gIDE5NiwgMzY0LCA1NDYsIDY1MCxcclxuICAyMjQsIDQxNiwgNjAwLCA3MDAsXHJcbiAgMjI0LCA0NDIsIDY0NCwgNzUwLFxyXG4gIDI1MiwgNDc2LCA2OTAsIDgxNixcclxuICAyNzAsIDUwNCwgNzUwLCA5MDAsXHJcbiAgMzAwLCA1NjAsIDgxMCwgOTYwLFxyXG4gIDMxMiwgNTg4LCA4NzAsIDEwNTAsXHJcbiAgMzM2LCA2NDQsIDk1MiwgMTExMCxcclxuICAzNjAsIDcwMCwgMTAyMCwgMTIwMCxcclxuICAzOTAsIDcyOCwgMTA1MCwgMTI2MCxcclxuICA0MjAsIDc4NCwgMTE0MCwgMTM1MCxcclxuICA0NTAsIDgxMiwgMTIwMCwgMTQ0MCxcclxuICA0ODAsIDg2OCwgMTI5MCwgMTUzMCxcclxuICA1MTAsIDkyNCwgMTM1MCwgMTYyMCxcclxuICA1NDAsIDk4MCwgMTQ0MCwgMTcxMCxcclxuICA1NzAsIDEwMzYsIDE1MzAsIDE4MDAsXHJcbiAgNTcwLCAxMDY0LCAxNTkwLCAxODkwLFxyXG4gIDYwMCwgMTEyMCwgMTY4MCwgMTk4MCxcclxuICA2MzAsIDEyMDQsIDE3NzAsIDIxMDAsXHJcbiAgNjYwLCAxMjYwLCAxODYwLCAyMjIwLFxyXG4gIDcyMCwgMTMxNiwgMTk1MCwgMjMxMCxcclxuICA3NTAsIDEzNzIsIDIwNDAsIDI0MzBcclxuXVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIG51bWJlciBvZiBlcnJvciBjb3JyZWN0aW9uIGJsb2NrIHRoYXQgdGhlIFFSIENvZGUgc2hvdWxkIGNvbnRhaW5cclxuICogZm9yIHRoZSBzcGVjaWZpZWQgdmVyc2lvbiBhbmQgZXJyb3IgY29ycmVjdGlvbiBsZXZlbC5cclxuICpcclxuICogQHBhcmFtICB7TnVtYmVyfSB2ZXJzaW9uICAgICAgICAgICAgICBRUiBDb2RlIHZlcnNpb25cclxuICogQHBhcmFtICB7TnVtYmVyfSBlcnJvckNvcnJlY3Rpb25MZXZlbCBFcnJvciBjb3JyZWN0aW9uIGxldmVsXHJcbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgICAgICAgICAgICAgTnVtYmVyIG9mIGVycm9yIGNvcnJlY3Rpb24gYmxvY2tzXHJcbiAqL1xyXG5leHBvcnRzLmdldEJsb2Nrc0NvdW50ID0gZnVuY3Rpb24gZ2V0QmxvY2tzQ291bnQgKHZlcnNpb24sIGVycm9yQ29ycmVjdGlvbkxldmVsKSB7XHJcbiAgc3dpdGNoIChlcnJvckNvcnJlY3Rpb25MZXZlbCkge1xyXG4gICAgY2FzZSBFQ0xldmVsLkw6XHJcbiAgICAgIHJldHVybiBFQ19CTE9DS1NfVEFCTEVbKHZlcnNpb24gLSAxKSAqIDQgKyAwXVxyXG4gICAgY2FzZSBFQ0xldmVsLk06XHJcbiAgICAgIHJldHVybiBFQ19CTE9DS1NfVEFCTEVbKHZlcnNpb24gLSAxKSAqIDQgKyAxXVxyXG4gICAgY2FzZSBFQ0xldmVsLlE6XHJcbiAgICAgIHJldHVybiBFQ19CTE9DS1NfVEFCTEVbKHZlcnNpb24gLSAxKSAqIDQgKyAyXVxyXG4gICAgY2FzZSBFQ0xldmVsLkg6XHJcbiAgICAgIHJldHVybiBFQ19CTE9DS1NfVEFCTEVbKHZlcnNpb24gLSAxKSAqIDQgKyAzXVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIG51bWJlciBvZiBlcnJvciBjb3JyZWN0aW9uIGNvZGV3b3JkcyB0byB1c2UgZm9yIHRoZSBzcGVjaWZpZWRcclxuICogdmVyc2lvbiBhbmQgZXJyb3IgY29ycmVjdGlvbiBsZXZlbC5cclxuICpcclxuICogQHBhcmFtICB7TnVtYmVyfSB2ZXJzaW9uICAgICAgICAgICAgICBRUiBDb2RlIHZlcnNpb25cclxuICogQHBhcmFtICB7TnVtYmVyfSBlcnJvckNvcnJlY3Rpb25MZXZlbCBFcnJvciBjb3JyZWN0aW9uIGxldmVsXHJcbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgICAgICAgICAgICAgTnVtYmVyIG9mIGVycm9yIGNvcnJlY3Rpb24gY29kZXdvcmRzXHJcbiAqL1xyXG5leHBvcnRzLmdldFRvdGFsQ29kZXdvcmRzQ291bnQgPSBmdW5jdGlvbiBnZXRUb3RhbENvZGV3b3Jkc0NvdW50ICh2ZXJzaW9uLCBlcnJvckNvcnJlY3Rpb25MZXZlbCkge1xyXG4gIHN3aXRjaCAoZXJyb3JDb3JyZWN0aW9uTGV2ZWwpIHtcclxuICAgIGNhc2UgRUNMZXZlbC5MOlxyXG4gICAgICByZXR1cm4gRUNfQ09ERVdPUkRTX1RBQkxFWyh2ZXJzaW9uIC0gMSkgKiA0ICsgMF1cclxuICAgIGNhc2UgRUNMZXZlbC5NOlxyXG4gICAgICByZXR1cm4gRUNfQ09ERVdPUkRTX1RBQkxFWyh2ZXJzaW9uIC0gMSkgKiA0ICsgMV1cclxuICAgIGNhc2UgRUNMZXZlbC5ROlxyXG4gICAgICByZXR1cm4gRUNfQ09ERVdPUkRTX1RBQkxFWyh2ZXJzaW9uIC0gMSkgKiA0ICsgMl1cclxuICAgIGNhc2UgRUNMZXZlbC5IOlxyXG4gICAgICByZXR1cm4gRUNfQ09ERVdPUkRTX1RBQkxFWyh2ZXJzaW9uIC0gMSkgKiA0ICsgM11cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWRcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0cy5MID0geyBiaXQ6IDEgfVxuZXhwb3J0cy5NID0geyBiaXQ6IDAgfVxuZXhwb3J0cy5RID0geyBiaXQ6IDMgfVxuZXhwb3J0cy5IID0geyBiaXQ6IDIgfVxuXG5mdW5jdGlvbiBmcm9tU3RyaW5nIChzdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdQYXJhbSBpcyBub3QgYSBzdHJpbmcnKVxuICB9XG5cbiAgY29uc3QgbGNTdHIgPSBzdHJpbmcudG9Mb3dlckNhc2UoKVxuXG4gIHN3aXRjaCAobGNTdHIpIHtcbiAgICBjYXNlICdsJzpcbiAgICBjYXNlICdsb3cnOlxuICAgICAgcmV0dXJuIGV4cG9ydHMuTFxuXG4gICAgY2FzZSAnbSc6XG4gICAgY2FzZSAnbWVkaXVtJzpcbiAgICAgIHJldHVybiBleHBvcnRzLk1cblxuICAgIGNhc2UgJ3EnOlxuICAgIGNhc2UgJ3F1YXJ0aWxlJzpcbiAgICAgIHJldHVybiBleHBvcnRzLlFcblxuICAgIGNhc2UgJ2gnOlxuICAgIGNhc2UgJ2hpZ2gnOlxuICAgICAgcmV0dXJuIGV4cG9ydHMuSFxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBFQyBMZXZlbDogJyArIHN0cmluZylcbiAgfVxufVxuXG5leHBvcnRzLmlzVmFsaWQgPSBmdW5jdGlvbiBpc1ZhbGlkIChsZXZlbCkge1xuICByZXR1cm4gbGV2ZWwgJiYgdHlwZW9mIGxldmVsLmJpdCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBsZXZlbC5iaXQgPj0gMCAmJiBsZXZlbC5iaXQgPCA0XG59XG5cbmV4cG9ydHMuZnJvbSA9IGZ1bmN0aW9uIGZyb20gKHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcbiAgaWYgKGV4cG9ydHMuaXNWYWxpZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIHRyeSB7XG4gICAgcmV0dXJuIGZyb21TdHJpbmcodmFsdWUpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZGVmYXVsdFZhbHVlXG4gIH1cbn1cbiIsImNvbnN0IGdldFN5bWJvbFNpemUgPSByZXF1aXJlKCcuL3V0aWxzJykuZ2V0U3ltYm9sU2l6ZVxuY29uc3QgRklOREVSX1BBVFRFUk5fU0laRSA9IDdcblxuLyoqXG4gKiBSZXR1cm5zIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIHBvc2l0aW9ucyBvZiBlYWNoIGZpbmRlciBwYXR0ZXJuLlxuICogRWFjaCBhcnJheSdzIGVsZW1lbnQgcmVwcmVzZW50IHRoZSB0b3AtbGVmdCBwb2ludCBvZiB0aGUgcGF0dGVybiBhcyAoeCwgeSkgY29vcmRpbmF0ZXNcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZlcnNpb24gUVIgQ29kZSB2ZXJzaW9uXG4gKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICAgQXJyYXkgb2YgY29vcmRpbmF0ZXNcbiAqL1xuZXhwb3J0cy5nZXRQb3NpdGlvbnMgPSBmdW5jdGlvbiBnZXRQb3NpdGlvbnMgKHZlcnNpb24pIHtcbiAgY29uc3Qgc2l6ZSA9IGdldFN5bWJvbFNpemUodmVyc2lvbilcblxuICByZXR1cm4gW1xuICAgIC8vIHRvcC1sZWZ0XG4gICAgWzAsIDBdLFxuICAgIC8vIHRvcC1yaWdodFxuICAgIFtzaXplIC0gRklOREVSX1BBVFRFUk5fU0laRSwgMF0sXG4gICAgLy8gYm90dG9tLWxlZnRcbiAgICBbMCwgc2l6ZSAtIEZJTkRFUl9QQVRURVJOX1NJWkVdXG4gIF1cbn1cbiIsImNvbnN0IFV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpXG5cbmNvbnN0IEcxNSA9ICgxIDw8IDEwKSB8ICgxIDw8IDgpIHwgKDEgPDwgNSkgfCAoMSA8PCA0KSB8ICgxIDw8IDIpIHwgKDEgPDwgMSkgfCAoMSA8PCAwKVxuY29uc3QgRzE1X01BU0sgPSAoMSA8PCAxNCkgfCAoMSA8PCAxMikgfCAoMSA8PCAxMCkgfCAoMSA8PCA0KSB8ICgxIDw8IDEpXG5jb25zdCBHMTVfQkNIID0gVXRpbHMuZ2V0QkNIRGlnaXQoRzE1KVxuXG4vKipcbiAqIFJldHVybnMgZm9ybWF0IGluZm9ybWF0aW9uIHdpdGggcmVsYXRpdmUgZXJyb3IgY29ycmVjdGlvbiBiaXRzXG4gKlxuICogVGhlIGZvcm1hdCBpbmZvcm1hdGlvbiBpcyBhIDE1LWJpdCBzZXF1ZW5jZSBjb250YWluaW5nIDUgZGF0YSBiaXRzLFxuICogd2l0aCAxMCBlcnJvciBjb3JyZWN0aW9uIGJpdHMgY2FsY3VsYXRlZCB1c2luZyB0aGUgKDE1LCA1KSBCQ0ggY29kZS5cbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGVycm9yQ29ycmVjdGlvbkxldmVsIEVycm9yIGNvcnJlY3Rpb24gbGV2ZWxcbiAqIEBwYXJhbSAge051bWJlcn0gbWFzayAgICAgICAgICAgICAgICAgTWFzayBwYXR0ZXJuXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgICAgICAgICAgICAgIEVuY29kZWQgZm9ybWF0IGluZm9ybWF0aW9uIGJpdHNcbiAqL1xuZXhwb3J0cy5nZXRFbmNvZGVkQml0cyA9IGZ1bmN0aW9uIGdldEVuY29kZWRCaXRzIChlcnJvckNvcnJlY3Rpb25MZXZlbCwgbWFzaykge1xuICBjb25zdCBkYXRhID0gKChlcnJvckNvcnJlY3Rpb25MZXZlbC5iaXQgPDwgMykgfCBtYXNrKVxuICBsZXQgZCA9IGRhdGEgPDwgMTBcblxuICB3aGlsZSAoVXRpbHMuZ2V0QkNIRGlnaXQoZCkgLSBHMTVfQkNIID49IDApIHtcbiAgICBkIF49IChHMTUgPDwgKFV0aWxzLmdldEJDSERpZ2l0KGQpIC0gRzE1X0JDSCkpXG4gIH1cblxuICAvLyB4b3IgZmluYWwgZGF0YSB3aXRoIG1hc2sgcGF0dGVybiBpbiBvcmRlciB0byBlbnN1cmUgdGhhdFxuICAvLyBubyBjb21iaW5hdGlvbiBvZiBFcnJvciBDb3JyZWN0aW9uIExldmVsIGFuZCBkYXRhIG1hc2sgcGF0dGVyblxuICAvLyB3aWxsIHJlc3VsdCBpbiBhbiBhbGwtemVybyBkYXRhIHN0cmluZ1xuICByZXR1cm4gKChkYXRhIDw8IDEwKSB8IGQpIF4gRzE1X01BU0tcbn1cbiIsImNvbnN0IEVYUF9UQUJMRSA9IG5ldyBVaW50OEFycmF5KDUxMilcbmNvbnN0IExPR19UQUJMRSA9IG5ldyBVaW50OEFycmF5KDI1Nilcbi8qKlxuICogUHJlY29tcHV0ZSB0aGUgbG9nIGFuZCBhbnRpLWxvZyB0YWJsZXMgZm9yIGZhc3RlciBjb21wdXRhdGlvbiBsYXRlclxuICpcbiAqIEZvciBlYWNoIHBvc3NpYmxlIHZhbHVlIGluIHRoZSBnYWxvaXMgZmllbGQgMl44LCB3ZSB3aWxsIHByZS1jb21wdXRlXG4gKiB0aGUgbG9nYXJpdGhtIGFuZCBhbnRpLWxvZ2FyaXRobSAoZXhwb25lbnRpYWwpIG9mIHRoaXMgdmFsdWVcbiAqXG4gKiByZWYge0BsaW5rIGh0dHBzOi8vZW4ud2lraXZlcnNpdHkub3JnL3dpa2kvUmVlZCVFMiU4MCU5M1NvbG9tb25fY29kZXNfZm9yX2NvZGVycyNJbnRyb2R1Y3Rpb25fdG9fbWF0aGVtYXRpY2FsX2ZpZWxkc31cbiAqL1xuOyhmdW5jdGlvbiBpbml0VGFibGVzICgpIHtcbiAgbGV0IHggPSAxXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMjU1OyBpKyspIHtcbiAgICBFWFBfVEFCTEVbaV0gPSB4XG4gICAgTE9HX1RBQkxFW3hdID0gaVxuXG4gICAgeCA8PD0gMSAvLyBtdWx0aXBseSBieSAyXG5cbiAgICAvLyBUaGUgUVIgY29kZSBzcGVjaWZpY2F0aW9uIHNheXMgdG8gdXNlIGJ5dGUtd2lzZSBtb2R1bG8gMTAwMDExMTAxIGFyaXRobWV0aWMuXG4gICAgLy8gVGhpcyBtZWFucyB0aGF0IHdoZW4gYSBudW1iZXIgaXMgMjU2IG9yIGxhcmdlciwgaXQgc2hvdWxkIGJlIFhPUmVkIHdpdGggMHgxMUQuXG4gICAgaWYgKHggJiAweDEwMCkgeyAvLyBzaW1pbGFyIHRvIHggPj0gMjU2LCBidXQgYSBsb3QgZmFzdGVyIChiZWNhdXNlIDB4MTAwID09IDI1NilcbiAgICAgIHggXj0gMHgxMURcbiAgICB9XG4gIH1cblxuICAvLyBPcHRpbWl6YXRpb246IGRvdWJsZSB0aGUgc2l6ZSBvZiB0aGUgYW50aS1sb2cgdGFibGUgc28gdGhhdCB3ZSBkb24ndCBuZWVkIHRvIG1vZCAyNTUgdG9cbiAgLy8gc3RheSBpbnNpZGUgdGhlIGJvdW5kcyAoYmVjYXVzZSB3ZSB3aWxsIG1haW5seSB1c2UgdGhpcyB0YWJsZSBmb3IgdGhlIG11bHRpcGxpY2F0aW9uIG9mXG4gIC8vIHR3byBHRiBudW1iZXJzLCBubyBtb3JlKS5cbiAgLy8gQHNlZSB7QGxpbmsgbXVsfVxuICBmb3IgKGxldCBpID0gMjU1OyBpIDwgNTEyOyBpKyspIHtcbiAgICBFWFBfVEFCTEVbaV0gPSBFWFBfVEFCTEVbaSAtIDI1NV1cbiAgfVxufSgpKVxuXG4vKipcbiAqIFJldHVybnMgbG9nIHZhbHVlIG9mIG4gaW5zaWRlIEdhbG9pcyBGaWVsZFxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gblxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5leHBvcnRzLmxvZyA9IGZ1bmN0aW9uIGxvZyAobikge1xuICBpZiAobiA8IDEpIHRocm93IG5ldyBFcnJvcignbG9nKCcgKyBuICsgJyknKVxuICByZXR1cm4gTE9HX1RBQkxFW25dXG59XG5cbi8qKlxuICogUmV0dXJucyBhbnRpLWxvZyB2YWx1ZSBvZiBuIGluc2lkZSBHYWxvaXMgRmllbGRcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG5cbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuZXhwb3J0cy5leHAgPSBmdW5jdGlvbiBleHAgKG4pIHtcbiAgcmV0dXJuIEVYUF9UQUJMRVtuXVxufVxuXG4vKipcbiAqIE11bHRpcGxpZXMgdHdvIG51bWJlciBpbnNpZGUgR2Fsb2lzIEZpZWxkXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSB4XG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHlcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuZXhwb3J0cy5tdWwgPSBmdW5jdGlvbiBtdWwgKHgsIHkpIHtcbiAgaWYgKHggPT09IDAgfHwgeSA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBzaG91bGQgYmUgRVhQX1RBQkxFWyhMT0dfVEFCTEVbeF0gKyBMT0dfVEFCTEVbeV0pICUgMjU1XSBpZiBFWFBfVEFCTEUgd2Fzbid0IG92ZXJzaXplZFxuICAvLyBAc2VlIHtAbGluayBpbml0VGFibGVzfVxuICByZXR1cm4gRVhQX1RBQkxFW0xPR19UQUJMRVt4XSArIExPR19UQUJMRVt5XV1cbn1cbiIsImNvbnN0IE1vZGUgPSByZXF1aXJlKCcuL21vZGUnKVxuY29uc3QgVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJylcblxuZnVuY3Rpb24gS2FuamlEYXRhIChkYXRhKSB7XG4gIHRoaXMubW9kZSA9IE1vZGUuS0FOSklcbiAgdGhpcy5kYXRhID0gZGF0YVxufVxuXG5LYW5qaURhdGEuZ2V0Qml0c0xlbmd0aCA9IGZ1bmN0aW9uIGdldEJpdHNMZW5ndGggKGxlbmd0aCkge1xuICByZXR1cm4gbGVuZ3RoICogMTNcbn1cblxuS2FuamlEYXRhLnByb3RvdHlwZS5nZXRMZW5ndGggPSBmdW5jdGlvbiBnZXRMZW5ndGggKCkge1xuICByZXR1cm4gdGhpcy5kYXRhLmxlbmd0aFxufVxuXG5LYW5qaURhdGEucHJvdG90eXBlLmdldEJpdHNMZW5ndGggPSBmdW5jdGlvbiBnZXRCaXRzTGVuZ3RoICgpIHtcbiAgcmV0dXJuIEthbmppRGF0YS5nZXRCaXRzTGVuZ3RoKHRoaXMuZGF0YS5sZW5ndGgpXG59XG5cbkthbmppRGF0YS5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAoYml0QnVmZmVyKSB7XG4gIGxldCBpXG5cbiAgLy8gSW4gdGhlIFNoaWZ0IEpJUyBzeXN0ZW0sIEthbmppIGNoYXJhY3RlcnMgYXJlIHJlcHJlc2VudGVkIGJ5IGEgdHdvIGJ5dGUgY29tYmluYXRpb24uXG4gIC8vIFRoZXNlIGJ5dGUgdmFsdWVzIGFyZSBzaGlmdGVkIGZyb20gdGhlIEpJUyBYIDAyMDggdmFsdWVzLlxuICAvLyBKSVMgWCAwMjA4IGdpdmVzIGRldGFpbHMgb2YgdGhlIHNoaWZ0IGNvZGVkIHJlcHJlc2VudGF0aW9uLlxuICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHZhbHVlID0gVXRpbHMudG9TSklTKHRoaXMuZGF0YVtpXSlcblxuICAgIC8vIEZvciBjaGFyYWN0ZXJzIHdpdGggU2hpZnQgSklTIHZhbHVlcyBmcm9tIDB4ODE0MCB0byAweDlGRkM6XG4gICAgaWYgKHZhbHVlID49IDB4ODE0MCAmJiB2YWx1ZSA8PSAweDlGRkMpIHtcbiAgICAgIC8vIFN1YnRyYWN0IDB4ODE0MCBmcm9tIFNoaWZ0IEpJUyB2YWx1ZVxuICAgICAgdmFsdWUgLT0gMHg4MTQwXG5cbiAgICAvLyBGb3IgY2hhcmFjdGVycyB3aXRoIFNoaWZ0IEpJUyB2YWx1ZXMgZnJvbSAweEUwNDAgdG8gMHhFQkJGXG4gICAgfSBlbHNlIGlmICh2YWx1ZSA+PSAweEUwNDAgJiYgdmFsdWUgPD0gMHhFQkJGKSB7XG4gICAgICAvLyBTdWJ0cmFjdCAweEMxNDAgZnJvbSBTaGlmdCBKSVMgdmFsdWVcbiAgICAgIHZhbHVlIC09IDB4QzE0MFxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdJbnZhbGlkIFNKSVMgY2hhcmFjdGVyOiAnICsgdGhpcy5kYXRhW2ldICsgJ1xcbicgK1xuICAgICAgICAnTWFrZSBzdXJlIHlvdXIgY2hhcnNldCBpcyBVVEYtOCcpXG4gICAgfVxuXG4gICAgLy8gTXVsdGlwbHkgbW9zdCBzaWduaWZpY2FudCBieXRlIG9mIHJlc3VsdCBieSAweEMwXG4gICAgLy8gYW5kIGFkZCBsZWFzdCBzaWduaWZpY2FudCBieXRlIHRvIHByb2R1Y3RcbiAgICB2YWx1ZSA9ICgoKHZhbHVlID4+PiA4KSAmIDB4ZmYpICogMHhDMCkgKyAodmFsdWUgJiAweGZmKVxuXG4gICAgLy8gQ29udmVydCByZXN1bHQgdG8gYSAxMy1iaXQgYmluYXJ5IHN0cmluZ1xuICAgIGJpdEJ1ZmZlci5wdXQodmFsdWUsIDEzKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gS2FuamlEYXRhXG4iLCIvKipcbiAqIERhdGEgbWFzayBwYXR0ZXJuIHJlZmVyZW5jZVxuICogQHR5cGUge09iamVjdH1cbiAqL1xuZXhwb3J0cy5QYXR0ZXJucyA9IHtcbiAgUEFUVEVSTjAwMDogMCxcbiAgUEFUVEVSTjAwMTogMSxcbiAgUEFUVEVSTjAxMDogMixcbiAgUEFUVEVSTjAxMTogMyxcbiAgUEFUVEVSTjEwMDogNCxcbiAgUEFUVEVSTjEwMTogNSxcbiAgUEFUVEVSTjExMDogNixcbiAgUEFUVEVSTjExMTogN1xufVxuXG4vKipcbiAqIFdlaWdodGVkIHBlbmFsdHkgc2NvcmVzIGZvciB0aGUgdW5kZXNpcmFibGUgZmVhdHVyZXNcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbmNvbnN0IFBlbmFsdHlTY29yZXMgPSB7XG4gIE4xOiAzLFxuICBOMjogMyxcbiAgTjM6IDQwLFxuICBONDogMTBcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBtYXNrIHBhdHRlcm4gdmFsdWUgaXMgdmFsaWRcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICBtYXNrICAgIE1hc2sgcGF0dGVyblxuICogQHJldHVybiB7Qm9vbGVhbn0gICAgICAgICB0cnVlIGlmIHZhbGlkLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuZXhwb3J0cy5pc1ZhbGlkID0gZnVuY3Rpb24gaXNWYWxpZCAobWFzaykge1xuICByZXR1cm4gbWFzayAhPSBudWxsICYmIG1hc2sgIT09ICcnICYmICFpc05hTihtYXNrKSAmJiBtYXNrID49IDAgJiYgbWFzayA8PSA3XG59XG5cbi8qKlxuICogUmV0dXJucyBtYXNrIHBhdHRlcm4gZnJvbSBhIHZhbHVlLlxuICogSWYgdmFsdWUgaXMgbm90IHZhbGlkLCByZXR1cm5zIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSAge051bWJlcnxTdHJpbmd9IHZhbHVlICAgICAgICBNYXNrIHBhdHRlcm4gdmFsdWVcbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgICAgICAgICAgICBWYWxpZCBtYXNrIHBhdHRlcm4gb3IgdW5kZWZpbmVkXG4gKi9cbmV4cG9ydHMuZnJvbSA9IGZ1bmN0aW9uIGZyb20gKHZhbHVlKSB7XG4gIHJldHVybiBleHBvcnRzLmlzVmFsaWQodmFsdWUpID8gcGFyc2VJbnQodmFsdWUsIDEwKSA6IHVuZGVmaW5lZFxufVxuXG4vKipcbiogRmluZCBhZGphY2VudCBtb2R1bGVzIGluIHJvdy9jb2x1bW4gd2l0aCB0aGUgc2FtZSBjb2xvclxuKiBhbmQgYXNzaWduIGEgcGVuYWx0eSB2YWx1ZS5cbipcbiogUG9pbnRzOiBOMSArIGlcbiogaSBpcyB0aGUgYW1vdW50IGJ5IHdoaWNoIHRoZSBudW1iZXIgb2YgYWRqYWNlbnQgbW9kdWxlcyBvZiB0aGUgc2FtZSBjb2xvciBleGNlZWRzIDVcbiovXG5leHBvcnRzLmdldFBlbmFsdHlOMSA9IGZ1bmN0aW9uIGdldFBlbmFsdHlOMSAoZGF0YSkge1xuICBjb25zdCBzaXplID0gZGF0YS5zaXplXG4gIGxldCBwb2ludHMgPSAwXG4gIGxldCBzYW1lQ291bnRDb2wgPSAwXG4gIGxldCBzYW1lQ291bnRSb3cgPSAwXG4gIGxldCBsYXN0Q29sID0gbnVsbFxuICBsZXQgbGFzdFJvdyA9IG51bGxcblxuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBzaXplOyByb3crKykge1xuICAgIHNhbWVDb3VudENvbCA9IHNhbWVDb3VudFJvdyA9IDBcbiAgICBsYXN0Q29sID0gbGFzdFJvdyA9IG51bGxcblxuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHNpemU7IGNvbCsrKSB7XG4gICAgICBsZXQgbW9kdWxlID0gZGF0YS5nZXQocm93LCBjb2wpXG4gICAgICBpZiAobW9kdWxlID09PSBsYXN0Q29sKSB7XG4gICAgICAgIHNhbWVDb3VudENvbCsrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc2FtZUNvdW50Q29sID49IDUpIHBvaW50cyArPSBQZW5hbHR5U2NvcmVzLk4xICsgKHNhbWVDb3VudENvbCAtIDUpXG4gICAgICAgIGxhc3RDb2wgPSBtb2R1bGVcbiAgICAgICAgc2FtZUNvdW50Q29sID0gMVxuICAgICAgfVxuXG4gICAgICBtb2R1bGUgPSBkYXRhLmdldChjb2wsIHJvdylcbiAgICAgIGlmIChtb2R1bGUgPT09IGxhc3RSb3cpIHtcbiAgICAgICAgc2FtZUNvdW50Um93KytcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzYW1lQ291bnRSb3cgPj0gNSkgcG9pbnRzICs9IFBlbmFsdHlTY29yZXMuTjEgKyAoc2FtZUNvdW50Um93IC0gNSlcbiAgICAgICAgbGFzdFJvdyA9IG1vZHVsZVxuICAgICAgICBzYW1lQ291bnRSb3cgPSAxXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNhbWVDb3VudENvbCA+PSA1KSBwb2ludHMgKz0gUGVuYWx0eVNjb3Jlcy5OMSArIChzYW1lQ291bnRDb2wgLSA1KVxuICAgIGlmIChzYW1lQ291bnRSb3cgPj0gNSkgcG9pbnRzICs9IFBlbmFsdHlTY29yZXMuTjEgKyAoc2FtZUNvdW50Um93IC0gNSlcbiAgfVxuXG4gIHJldHVybiBwb2ludHNcbn1cblxuLyoqXG4gKiBGaW5kIDJ4MiBibG9ja3Mgd2l0aCB0aGUgc2FtZSBjb2xvciBhbmQgYXNzaWduIGEgcGVuYWx0eSB2YWx1ZVxuICpcbiAqIFBvaW50czogTjIgKiAobSAtIDEpICogKG4gLSAxKVxuICovXG5leHBvcnRzLmdldFBlbmFsdHlOMiA9IGZ1bmN0aW9uIGdldFBlbmFsdHlOMiAoZGF0YSkge1xuICBjb25zdCBzaXplID0gZGF0YS5zaXplXG4gIGxldCBwb2ludHMgPSAwXG5cbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgc2l6ZSAtIDE7IHJvdysrKSB7XG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgc2l6ZSAtIDE7IGNvbCsrKSB7XG4gICAgICBjb25zdCBsYXN0ID0gZGF0YS5nZXQocm93LCBjb2wpICtcbiAgICAgICAgZGF0YS5nZXQocm93LCBjb2wgKyAxKSArXG4gICAgICAgIGRhdGEuZ2V0KHJvdyArIDEsIGNvbCkgK1xuICAgICAgICBkYXRhLmdldChyb3cgKyAxLCBjb2wgKyAxKVxuXG4gICAgICBpZiAobGFzdCA9PT0gNCB8fCBsYXN0ID09PSAwKSBwb2ludHMrK1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwb2ludHMgKiBQZW5hbHR5U2NvcmVzLk4yXG59XG5cbi8qKlxuICogRmluZCAxOjE6MzoxOjEgcmF0aW8gKGRhcms6bGlnaHQ6ZGFyazpsaWdodDpkYXJrKSBwYXR0ZXJuIGluIHJvdy9jb2x1bW4sXG4gKiBwcmVjZWRlZCBvciBmb2xsb3dlZCBieSBsaWdodCBhcmVhIDQgbW9kdWxlcyB3aWRlXG4gKlxuICogUG9pbnRzOiBOMyAqIG51bWJlciBvZiBwYXR0ZXJuIGZvdW5kXG4gKi9cbmV4cG9ydHMuZ2V0UGVuYWx0eU4zID0gZnVuY3Rpb24gZ2V0UGVuYWx0eU4zIChkYXRhKSB7XG4gIGNvbnN0IHNpemUgPSBkYXRhLnNpemVcbiAgbGV0IHBvaW50cyA9IDBcbiAgbGV0IGJpdHNDb2wgPSAwXG4gIGxldCBiaXRzUm93ID0gMFxuXG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHNpemU7IHJvdysrKSB7XG4gICAgYml0c0NvbCA9IGJpdHNSb3cgPSAwXG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgc2l6ZTsgY29sKyspIHtcbiAgICAgIGJpdHNDb2wgPSAoKGJpdHNDb2wgPDwgMSkgJiAweDdGRikgfCBkYXRhLmdldChyb3csIGNvbClcbiAgICAgIGlmIChjb2wgPj0gMTAgJiYgKGJpdHNDb2wgPT09IDB4NUQwIHx8IGJpdHNDb2wgPT09IDB4MDVEKSkgcG9pbnRzKytcblxuICAgICAgYml0c1JvdyA9ICgoYml0c1JvdyA8PCAxKSAmIDB4N0ZGKSB8IGRhdGEuZ2V0KGNvbCwgcm93KVxuICAgICAgaWYgKGNvbCA+PSAxMCAmJiAoYml0c1JvdyA9PT0gMHg1RDAgfHwgYml0c1JvdyA9PT0gMHgwNUQpKSBwb2ludHMrK1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwb2ludHMgKiBQZW5hbHR5U2NvcmVzLk4zXG59XG5cbi8qKlxuICogQ2FsY3VsYXRlIHByb3BvcnRpb24gb2YgZGFyayBtb2R1bGVzIGluIGVudGlyZSBzeW1ib2xcbiAqXG4gKiBQb2ludHM6IE40ICoga1xuICpcbiAqIGsgaXMgdGhlIHJhdGluZyBvZiB0aGUgZGV2aWF0aW9uIG9mIHRoZSBwcm9wb3J0aW9uIG9mIGRhcmsgbW9kdWxlc1xuICogaW4gdGhlIHN5bWJvbCBmcm9tIDUwJSBpbiBzdGVwcyBvZiA1JVxuICovXG5leHBvcnRzLmdldFBlbmFsdHlONCA9IGZ1bmN0aW9uIGdldFBlbmFsdHlONCAoZGF0YSkge1xuICBsZXQgZGFya0NvdW50ID0gMFxuICBjb25zdCBtb2R1bGVzQ291bnQgPSBkYXRhLmRhdGEubGVuZ3RoXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb2R1bGVzQ291bnQ7IGkrKykgZGFya0NvdW50ICs9IGRhdGEuZGF0YVtpXVxuXG4gIGNvbnN0IGsgPSBNYXRoLmFicyhNYXRoLmNlaWwoKGRhcmtDb3VudCAqIDEwMCAvIG1vZHVsZXNDb3VudCkgLyA1KSAtIDEwKVxuXG4gIHJldHVybiBrICogUGVuYWx0eVNjb3Jlcy5ONFxufVxuXG4vKipcbiAqIFJldHVybiBtYXNrIHZhbHVlIGF0IGdpdmVuIHBvc2l0aW9uXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSBtYXNrUGF0dGVybiBQYXR0ZXJuIHJlZmVyZW5jZSB2YWx1ZVxuICogQHBhcmFtICB7TnVtYmVyfSBpICAgICAgICAgICBSb3dcbiAqIEBwYXJhbSAge051bWJlcn0gaiAgICAgICAgICAgQ29sdW1uXG4gKiBAcmV0dXJuIHtCb29sZWFufSAgICAgICAgICAgIE1hc2sgdmFsdWVcbiAqL1xuZnVuY3Rpb24gZ2V0TWFza0F0IChtYXNrUGF0dGVybiwgaSwgaikge1xuICBzd2l0Y2ggKG1hc2tQYXR0ZXJuKSB7XG4gICAgY2FzZSBleHBvcnRzLlBhdHRlcm5zLlBBVFRFUk4wMDA6IHJldHVybiAoaSArIGopICUgMiA9PT0gMFxuICAgIGNhc2UgZXhwb3J0cy5QYXR0ZXJucy5QQVRURVJOMDAxOiByZXR1cm4gaSAlIDIgPT09IDBcbiAgICBjYXNlIGV4cG9ydHMuUGF0dGVybnMuUEFUVEVSTjAxMDogcmV0dXJuIGogJSAzID09PSAwXG4gICAgY2FzZSBleHBvcnRzLlBhdHRlcm5zLlBBVFRFUk4wMTE6IHJldHVybiAoaSArIGopICUgMyA9PT0gMFxuICAgIGNhc2UgZXhwb3J0cy5QYXR0ZXJucy5QQVRURVJOMTAwOiByZXR1cm4gKE1hdGguZmxvb3IoaSAvIDIpICsgTWF0aC5mbG9vcihqIC8gMykpICUgMiA9PT0gMFxuICAgIGNhc2UgZXhwb3J0cy5QYXR0ZXJucy5QQVRURVJOMTAxOiByZXR1cm4gKGkgKiBqKSAlIDIgKyAoaSAqIGopICUgMyA9PT0gMFxuICAgIGNhc2UgZXhwb3J0cy5QYXR0ZXJucy5QQVRURVJOMTEwOiByZXR1cm4gKChpICogaikgJSAyICsgKGkgKiBqKSAlIDMpICUgMiA9PT0gMFxuICAgIGNhc2UgZXhwb3J0cy5QYXR0ZXJucy5QQVRURVJOMTExOiByZXR1cm4gKChpICogaikgJSAzICsgKGkgKyBqKSAlIDIpICUgMiA9PT0gMFxuXG4gICAgZGVmYXVsdDogdGhyb3cgbmV3IEVycm9yKCdiYWQgbWFza1BhdHRlcm46JyArIG1hc2tQYXR0ZXJuKVxuICB9XG59XG5cbi8qKlxuICogQXBwbHkgYSBtYXNrIHBhdHRlcm4gdG8gYSBCaXRNYXRyaXhcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgIHBhdHRlcm4gUGF0dGVybiByZWZlcmVuY2UgbnVtYmVyXG4gKiBAcGFyYW0gIHtCaXRNYXRyaXh9IGRhdGEgICAgQml0TWF0cml4IGRhdGFcbiAqL1xuZXhwb3J0cy5hcHBseU1hc2sgPSBmdW5jdGlvbiBhcHBseU1hc2sgKHBhdHRlcm4sIGRhdGEpIHtcbiAgY29uc3Qgc2l6ZSA9IGRhdGEuc2l6ZVxuXG4gIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHNpemU7IGNvbCsrKSB7XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgc2l6ZTsgcm93KyspIHtcbiAgICAgIGlmIChkYXRhLmlzUmVzZXJ2ZWQocm93LCBjb2wpKSBjb250aW51ZVxuICAgICAgZGF0YS54b3Iocm93LCBjb2wsIGdldE1hc2tBdChwYXR0ZXJuLCByb3csIGNvbCkpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgYmVzdCBtYXNrIHBhdHRlcm4gZm9yIGRhdGFcbiAqXG4gKiBAcGFyYW0gIHtCaXRNYXRyaXh9IGRhdGFcbiAqIEByZXR1cm4ge051bWJlcn0gTWFzayBwYXR0ZXJuIHJlZmVyZW5jZSBudW1iZXJcbiAqL1xuZXhwb3J0cy5nZXRCZXN0TWFzayA9IGZ1bmN0aW9uIGdldEJlc3RNYXNrIChkYXRhLCBzZXR1cEZvcm1hdEZ1bmMpIHtcbiAgY29uc3QgbnVtUGF0dGVybnMgPSBPYmplY3Qua2V5cyhleHBvcnRzLlBhdHRlcm5zKS5sZW5ndGhcbiAgbGV0IGJlc3RQYXR0ZXJuID0gMFxuICBsZXQgbG93ZXJQZW5hbHR5ID0gSW5maW5pdHlcblxuICBmb3IgKGxldCBwID0gMDsgcCA8IG51bVBhdHRlcm5zOyBwKyspIHtcbiAgICBzZXR1cEZvcm1hdEZ1bmMocClcbiAgICBleHBvcnRzLmFwcGx5TWFzayhwLCBkYXRhKVxuXG4gICAgLy8gQ2FsY3VsYXRlIHBlbmFsdHlcbiAgICBjb25zdCBwZW5hbHR5ID1cbiAgICAgIGV4cG9ydHMuZ2V0UGVuYWx0eU4xKGRhdGEpICtcbiAgICAgIGV4cG9ydHMuZ2V0UGVuYWx0eU4yKGRhdGEpICtcbiAgICAgIGV4cG9ydHMuZ2V0UGVuYWx0eU4zKGRhdGEpICtcbiAgICAgIGV4cG9ydHMuZ2V0UGVuYWx0eU40KGRhdGEpXG5cbiAgICAvLyBVbmRvIHByZXZpb3VzbHkgYXBwbGllZCBtYXNrXG4gICAgZXhwb3J0cy5hcHBseU1hc2socCwgZGF0YSlcblxuICAgIGlmIChwZW5hbHR5IDwgbG93ZXJQZW5hbHR5KSB7XG4gICAgICBsb3dlclBlbmFsdHkgPSBwZW5hbHR5XG4gICAgICBiZXN0UGF0dGVybiA9IHBcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYmVzdFBhdHRlcm5cbn1cbiIsImNvbnN0IFZlcnNpb25DaGVjayA9IHJlcXVpcmUoJy4vdmVyc2lvbi1jaGVjaycpXG5jb25zdCBSZWdleCA9IHJlcXVpcmUoJy4vcmVnZXgnKVxuXG4vKipcbiAqIE51bWVyaWMgbW9kZSBlbmNvZGVzIGRhdGEgZnJvbSB0aGUgZGVjaW1hbCBkaWdpdCBzZXQgKDAgLSA5KVxuICogKGJ5dGUgdmFsdWVzIDMwSEVYIHRvIDM5SEVYKS5cbiAqIE5vcm1hbGx5LCAzIGRhdGEgY2hhcmFjdGVycyBhcmUgcmVwcmVzZW50ZWQgYnkgMTAgYml0cy5cbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5leHBvcnRzLk5VTUVSSUMgPSB7XG4gIGlkOiAnTnVtZXJpYycsXG4gIGJpdDogMSA8PCAwLFxuICBjY0JpdHM6IFsxMCwgMTIsIDE0XVxufVxuXG4vKipcbiAqIEFscGhhbnVtZXJpYyBtb2RlIGVuY29kZXMgZGF0YSBmcm9tIGEgc2V0IG9mIDQ1IGNoYXJhY3RlcnMsXG4gKiBpLmUuIDEwIG51bWVyaWMgZGlnaXRzICgwIC0gOSksXG4gKiAgICAgIDI2IGFscGhhYmV0aWMgY2hhcmFjdGVycyAoQSAtIFopLFxuICogICBhbmQgOSBzeW1ib2xzIChTUCwgJCwgJSwgKiwgKywgLSwgLiwgLywgOikuXG4gKiBOb3JtYWxseSwgdHdvIGlucHV0IGNoYXJhY3RlcnMgYXJlIHJlcHJlc2VudGVkIGJ5IDExIGJpdHMuXG4gKlxuICogQHR5cGUge09iamVjdH1cbiAqL1xuZXhwb3J0cy5BTFBIQU5VTUVSSUMgPSB7XG4gIGlkOiAnQWxwaGFudW1lcmljJyxcbiAgYml0OiAxIDw8IDEsXG4gIGNjQml0czogWzksIDExLCAxM11cbn1cblxuLyoqXG4gKiBJbiBieXRlIG1vZGUsIGRhdGEgaXMgZW5jb2RlZCBhdCA4IGJpdHMgcGVyIGNoYXJhY3Rlci5cbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5leHBvcnRzLkJZVEUgPSB7XG4gIGlkOiAnQnl0ZScsXG4gIGJpdDogMSA8PCAyLFxuICBjY0JpdHM6IFs4LCAxNiwgMTZdXG59XG5cbi8qKlxuICogVGhlIEthbmppIG1vZGUgZWZmaWNpZW50bHkgZW5jb2RlcyBLYW5qaSBjaGFyYWN0ZXJzIGluIGFjY29yZGFuY2Ugd2l0aFxuICogdGhlIFNoaWZ0IEpJUyBzeXN0ZW0gYmFzZWQgb24gSklTIFggMDIwOC5cbiAqIFRoZSBTaGlmdCBKSVMgdmFsdWVzIGFyZSBzaGlmdGVkIGZyb20gdGhlIEpJUyBYIDAyMDggdmFsdWVzLlxuICogSklTIFggMDIwOCBnaXZlcyBkZXRhaWxzIG9mIHRoZSBzaGlmdCBjb2RlZCByZXByZXNlbnRhdGlvbi5cbiAqIEVhY2ggdHdvLWJ5dGUgY2hhcmFjdGVyIHZhbHVlIGlzIGNvbXBhY3RlZCB0byBhIDEzLWJpdCBiaW5hcnkgY29kZXdvcmQuXG4gKlxuICogQHR5cGUge09iamVjdH1cbiAqL1xuZXhwb3J0cy5LQU5KSSA9IHtcbiAgaWQ6ICdLYW5qaScsXG4gIGJpdDogMSA8PCAzLFxuICBjY0JpdHM6IFs4LCAxMCwgMTJdXG59XG5cbi8qKlxuICogTWl4ZWQgbW9kZSB3aWxsIGNvbnRhaW4gYSBzZXF1ZW5jZXMgb2YgZGF0YSBpbiBhIGNvbWJpbmF0aW9uIG9mIGFueSBvZlxuICogdGhlIG1vZGVzIGRlc2NyaWJlZCBhYm92ZVxuICpcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbmV4cG9ydHMuTUlYRUQgPSB7XG4gIGJpdDogLTFcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgYml0cyBuZWVkZWQgdG8gc3RvcmUgdGhlIGRhdGEgbGVuZ3RoXG4gKiBhY2NvcmRpbmcgdG8gUVIgQ29kZSBzcGVjaWZpY2F0aW9ucy5cbiAqXG4gKiBAcGFyYW0gIHtNb2RlfSAgIG1vZGUgICAgRGF0YSBtb2RlXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZlcnNpb24gUVIgQ29kZSB2ZXJzaW9uXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgTnVtYmVyIG9mIGJpdHNcbiAqL1xuZXhwb3J0cy5nZXRDaGFyQ291bnRJbmRpY2F0b3IgPSBmdW5jdGlvbiBnZXRDaGFyQ291bnRJbmRpY2F0b3IgKG1vZGUsIHZlcnNpb24pIHtcbiAgaWYgKCFtb2RlLmNjQml0cykgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIG1vZGU6ICcgKyBtb2RlKVxuXG4gIGlmICghVmVyc2lvbkNoZWNrLmlzVmFsaWQodmVyc2lvbikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgdmVyc2lvbjogJyArIHZlcnNpb24pXG4gIH1cblxuICBpZiAodmVyc2lvbiA+PSAxICYmIHZlcnNpb24gPCAxMCkgcmV0dXJuIG1vZGUuY2NCaXRzWzBdXG4gIGVsc2UgaWYgKHZlcnNpb24gPCAyNykgcmV0dXJuIG1vZGUuY2NCaXRzWzFdXG4gIHJldHVybiBtb2RlLmNjQml0c1syXVxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG1vc3QgZWZmaWNpZW50IG1vZGUgdG8gc3RvcmUgdGhlIHNwZWNpZmllZCBkYXRhXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBkYXRhU3RyIElucHV0IGRhdGEgc3RyaW5nXG4gKiBAcmV0dXJuIHtNb2RlfSAgICAgICAgICAgQmVzdCBtb2RlXG4gKi9cbmV4cG9ydHMuZ2V0QmVzdE1vZGVGb3JEYXRhID0gZnVuY3Rpb24gZ2V0QmVzdE1vZGVGb3JEYXRhIChkYXRhU3RyKSB7XG4gIGlmIChSZWdleC50ZXN0TnVtZXJpYyhkYXRhU3RyKSkgcmV0dXJuIGV4cG9ydHMuTlVNRVJJQ1xuICBlbHNlIGlmIChSZWdleC50ZXN0QWxwaGFudW1lcmljKGRhdGFTdHIpKSByZXR1cm4gZXhwb3J0cy5BTFBIQU5VTUVSSUNcbiAgZWxzZSBpZiAoUmVnZXgudGVzdEthbmppKGRhdGFTdHIpKSByZXR1cm4gZXhwb3J0cy5LQU5KSVxuICBlbHNlIHJldHVybiBleHBvcnRzLkJZVEVcbn1cblxuLyoqXG4gKiBSZXR1cm4gbW9kZSBuYW1lIGFzIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7TW9kZX0gbW9kZSBNb2RlIG9iamVjdFxuICogQHJldHVybnMge1N0cmluZ30gIE1vZGUgbmFtZVxuICovXG5leHBvcnRzLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKG1vZGUpIHtcbiAgaWYgKG1vZGUgJiYgbW9kZS5pZCkgcmV0dXJuIG1vZGUuaWRcbiAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIG1vZGUnKVxufVxuXG4vKipcbiAqIENoZWNrIGlmIGlucHV0IHBhcmFtIGlzIGEgdmFsaWQgbW9kZSBvYmplY3RcbiAqXG4gKiBAcGFyYW0gICB7TW9kZX0gICAgbW9kZSBNb2RlIG9iamVjdFxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdmFsaWQgbW9kZSwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbmV4cG9ydHMuaXNWYWxpZCA9IGZ1bmN0aW9uIGlzVmFsaWQgKG1vZGUpIHtcbiAgcmV0dXJuIG1vZGUgJiYgbW9kZS5iaXQgJiYgbW9kZS5jY0JpdHNcbn1cblxuLyoqXG4gKiBHZXQgbW9kZSBvYmplY3QgZnJvbSBpdHMgbmFtZVxuICpcbiAqIEBwYXJhbSAgIHtTdHJpbmd9IHN0cmluZyBNb2RlIG5hbWVcbiAqIEByZXR1cm5zIHtNb2RlfSAgICAgICAgICBNb2RlIG9iamVjdFxuICovXG5mdW5jdGlvbiBmcm9tU3RyaW5nIChzdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdQYXJhbSBpcyBub3QgYSBzdHJpbmcnKVxuICB9XG5cbiAgY29uc3QgbGNTdHIgPSBzdHJpbmcudG9Mb3dlckNhc2UoKVxuXG4gIHN3aXRjaCAobGNTdHIpIHtcbiAgICBjYXNlICdudW1lcmljJzpcbiAgICAgIHJldHVybiBleHBvcnRzLk5VTUVSSUNcbiAgICBjYXNlICdhbHBoYW51bWVyaWMnOlxuICAgICAgcmV0dXJuIGV4cG9ydHMuQUxQSEFOVU1FUklDXG4gICAgY2FzZSAna2FuamknOlxuICAgICAgcmV0dXJuIGV4cG9ydHMuS0FOSklcbiAgICBjYXNlICdieXRlJzpcbiAgICAgIHJldHVybiBleHBvcnRzLkJZVEVcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIG1vZGU6ICcgKyBzdHJpbmcpXG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIG1vZGUgZnJvbSBhIHZhbHVlLlxuICogSWYgdmFsdWUgaXMgbm90IGEgdmFsaWQgbW9kZSwgcmV0dXJucyBkZWZhdWx0VmFsdWVcbiAqXG4gKiBAcGFyYW0gIHtNb2RlfFN0cmluZ30gdmFsdWUgICAgICAgIEVuY29kaW5nIG1vZGVcbiAqIEBwYXJhbSAge01vZGV9ICAgICAgICBkZWZhdWx0VmFsdWUgRmFsbGJhY2sgdmFsdWVcbiAqIEByZXR1cm4ge01vZGV9ICAgICAgICAgICAgICAgICAgICAgRW5jb2RpbmcgbW9kZVxuICovXG5leHBvcnRzLmZyb20gPSBmdW5jdGlvbiBmcm9tICh2YWx1ZSwgZGVmYXVsdFZhbHVlKSB7XG4gIGlmIChleHBvcnRzLmlzVmFsaWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICB0cnkge1xuICAgIHJldHVybiBmcm9tU3RyaW5nKHZhbHVlKVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZVxuICB9XG59XG4iLCJjb25zdCBNb2RlID0gcmVxdWlyZSgnLi9tb2RlJylcblxuZnVuY3Rpb24gTnVtZXJpY0RhdGEgKGRhdGEpIHtcbiAgdGhpcy5tb2RlID0gTW9kZS5OVU1FUklDXG4gIHRoaXMuZGF0YSA9IGRhdGEudG9TdHJpbmcoKVxufVxuXG5OdW1lcmljRGF0YS5nZXRCaXRzTGVuZ3RoID0gZnVuY3Rpb24gZ2V0Qml0c0xlbmd0aCAobGVuZ3RoKSB7XG4gIHJldHVybiAxMCAqIE1hdGguZmxvb3IobGVuZ3RoIC8gMykgKyAoKGxlbmd0aCAlIDMpID8gKChsZW5ndGggJSAzKSAqIDMgKyAxKSA6IDApXG59XG5cbk51bWVyaWNEYXRhLnByb3RvdHlwZS5nZXRMZW5ndGggPSBmdW5jdGlvbiBnZXRMZW5ndGggKCkge1xuICByZXR1cm4gdGhpcy5kYXRhLmxlbmd0aFxufVxuXG5OdW1lcmljRGF0YS5wcm90b3R5cGUuZ2V0Qml0c0xlbmd0aCA9IGZ1bmN0aW9uIGdldEJpdHNMZW5ndGggKCkge1xuICByZXR1cm4gTnVtZXJpY0RhdGEuZ2V0Qml0c0xlbmd0aCh0aGlzLmRhdGEubGVuZ3RoKVxufVxuXG5OdW1lcmljRGF0YS5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiB3cml0ZSAoYml0QnVmZmVyKSB7XG4gIGxldCBpLCBncm91cCwgdmFsdWVcblxuICAvLyBUaGUgaW5wdXQgZGF0YSBzdHJpbmcgaXMgZGl2aWRlZCBpbnRvIGdyb3VwcyBvZiB0aHJlZSBkaWdpdHMsXG4gIC8vIGFuZCBlYWNoIGdyb3VwIGlzIGNvbnZlcnRlZCB0byBpdHMgMTAtYml0IGJpbmFyeSBlcXVpdmFsZW50LlxuICBmb3IgKGkgPSAwOyBpICsgMyA8PSB0aGlzLmRhdGEubGVuZ3RoOyBpICs9IDMpIHtcbiAgICBncm91cCA9IHRoaXMuZGF0YS5zdWJzdHIoaSwgMylcbiAgICB2YWx1ZSA9IHBhcnNlSW50KGdyb3VwLCAxMClcblxuICAgIGJpdEJ1ZmZlci5wdXQodmFsdWUsIDEwKVxuICB9XG5cbiAgLy8gSWYgdGhlIG51bWJlciBvZiBpbnB1dCBkaWdpdHMgaXMgbm90IGFuIGV4YWN0IG11bHRpcGxlIG9mIHRocmVlLFxuICAvLyB0aGUgZmluYWwgb25lIG9yIHR3byBkaWdpdHMgYXJlIGNvbnZlcnRlZCB0byA0IG9yIDcgYml0cyByZXNwZWN0aXZlbHkuXG4gIGNvbnN0IHJlbWFpbmluZ051bSA9IHRoaXMuZGF0YS5sZW5ndGggLSBpXG4gIGlmIChyZW1haW5pbmdOdW0gPiAwKSB7XG4gICAgZ3JvdXAgPSB0aGlzLmRhdGEuc3Vic3RyKGkpXG4gICAgdmFsdWUgPSBwYXJzZUludChncm91cCwgMTApXG5cbiAgICBiaXRCdWZmZXIucHV0KHZhbHVlLCByZW1haW5pbmdOdW0gKiAzICsgMSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE51bWVyaWNEYXRhXG4iLCJjb25zdCBHRiA9IHJlcXVpcmUoJy4vZ2Fsb2lzLWZpZWxkJylcblxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byBwb2x5bm9taWFscyBpbnNpZGUgR2Fsb2lzIEZpZWxkXG4gKlxuICogQHBhcmFtICB7VWludDhBcnJheX0gcDEgUG9seW5vbWlhbFxuICogQHBhcmFtICB7VWludDhBcnJheX0gcDIgUG9seW5vbWlhbFxuICogQHJldHVybiB7VWludDhBcnJheX0gICAgUHJvZHVjdCBvZiBwMSBhbmQgcDJcbiAqL1xuZXhwb3J0cy5tdWwgPSBmdW5jdGlvbiBtdWwgKHAxLCBwMikge1xuICBjb25zdCBjb2VmZiA9IG5ldyBVaW50OEFycmF5KHAxLmxlbmd0aCArIHAyLmxlbmd0aCAtIDEpXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwMS5sZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcDIubGVuZ3RoOyBqKyspIHtcbiAgICAgIGNvZWZmW2kgKyBqXSBePSBHRi5tdWwocDFbaV0sIHAyW2pdKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb2VmZlxufVxuXG4vKipcbiAqIENhbGN1bGF0ZSB0aGUgcmVtYWluZGVyIG9mIHBvbHlub21pYWxzIGRpdmlzaW9uXG4gKlxuICogQHBhcmFtICB7VWludDhBcnJheX0gZGl2aWRlbnQgUG9seW5vbWlhbFxuICogQHBhcmFtICB7VWludDhBcnJheX0gZGl2aXNvciAgUG9seW5vbWlhbFxuICogQHJldHVybiB7VWludDhBcnJheX0gICAgICAgICAgUmVtYWluZGVyXG4gKi9cbmV4cG9ydHMubW9kID0gZnVuY3Rpb24gbW9kIChkaXZpZGVudCwgZGl2aXNvcikge1xuICBsZXQgcmVzdWx0ID0gbmV3IFVpbnQ4QXJyYXkoZGl2aWRlbnQpXG5cbiAgd2hpbGUgKChyZXN1bHQubGVuZ3RoIC0gZGl2aXNvci5sZW5ndGgpID49IDApIHtcbiAgICBjb25zdCBjb2VmZiA9IHJlc3VsdFswXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXZpc29yLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXN1bHRbaV0gXj0gR0YubXVsKGRpdmlzb3JbaV0sIGNvZWZmKVxuICAgIH1cblxuICAgIC8vIHJlbW92ZSBhbGwgemVyb3MgZnJvbSBidWZmZXIgaGVhZFxuICAgIGxldCBvZmZzZXQgPSAwXG4gICAgd2hpbGUgKG9mZnNldCA8IHJlc3VsdC5sZW5ndGggJiYgcmVzdWx0W29mZnNldF0gPT09IDApIG9mZnNldCsrXG4gICAgcmVzdWx0ID0gcmVzdWx0LnNsaWNlKG9mZnNldClcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZSBhbiBpcnJlZHVjaWJsZSBnZW5lcmF0b3IgcG9seW5vbWlhbCBvZiBzcGVjaWZpZWQgZGVncmVlXG4gKiAodXNlZCBieSBSZWVkLVNvbG9tb24gZW5jb2RlcilcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGRlZ3JlZSBEZWdyZWUgb2YgdGhlIGdlbmVyYXRvciBwb2x5bm9taWFsXG4gKiBAcmV0dXJuIHtVaW50OEFycmF5fSAgICBCdWZmZXIgY29udGFpbmluZyBwb2x5bm9taWFsIGNvZWZmaWNpZW50c1xuICovXG5leHBvcnRzLmdlbmVyYXRlRUNQb2x5bm9taWFsID0gZnVuY3Rpb24gZ2VuZXJhdGVFQ1BvbHlub21pYWwgKGRlZ3JlZSkge1xuICBsZXQgcG9seSA9IG5ldyBVaW50OEFycmF5KFsxXSlcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWdyZWU7IGkrKykge1xuICAgIHBvbHkgPSBleHBvcnRzLm11bChwb2x5LCBuZXcgVWludDhBcnJheShbMSwgR0YuZXhwKGkpXSkpXG4gIH1cblxuICByZXR1cm4gcG9seVxufVxuIiwiY29uc3QgVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJylcbmNvbnN0IEVDTGV2ZWwgPSByZXF1aXJlKCcuL2Vycm9yLWNvcnJlY3Rpb24tbGV2ZWwnKVxuY29uc3QgQml0QnVmZmVyID0gcmVxdWlyZSgnLi9iaXQtYnVmZmVyJylcbmNvbnN0IEJpdE1hdHJpeCA9IHJlcXVpcmUoJy4vYml0LW1hdHJpeCcpXG5jb25zdCBBbGlnbm1lbnRQYXR0ZXJuID0gcmVxdWlyZSgnLi9hbGlnbm1lbnQtcGF0dGVybicpXG5jb25zdCBGaW5kZXJQYXR0ZXJuID0gcmVxdWlyZSgnLi9maW5kZXItcGF0dGVybicpXG5jb25zdCBNYXNrUGF0dGVybiA9IHJlcXVpcmUoJy4vbWFzay1wYXR0ZXJuJylcbmNvbnN0IEVDQ29kZSA9IHJlcXVpcmUoJy4vZXJyb3ItY29ycmVjdGlvbi1jb2RlJylcbmNvbnN0IFJlZWRTb2xvbW9uRW5jb2RlciA9IHJlcXVpcmUoJy4vcmVlZC1zb2xvbW9uLWVuY29kZXInKVxuY29uc3QgVmVyc2lvbiA9IHJlcXVpcmUoJy4vdmVyc2lvbicpXG5jb25zdCBGb3JtYXRJbmZvID0gcmVxdWlyZSgnLi9mb3JtYXQtaW5mbycpXG5jb25zdCBNb2RlID0gcmVxdWlyZSgnLi9tb2RlJylcbmNvbnN0IFNlZ21lbnRzID0gcmVxdWlyZSgnLi9zZWdtZW50cycpXG5cbi8qKlxuICogUVJDb2RlIGZvciBKYXZhU2NyaXB0XG4gKlxuICogbW9kaWZpZWQgYnkgUnlhbiBEYXkgZm9yIG5vZGVqcyBzdXBwb3J0XG4gKiBDb3B5cmlnaHQgKGMpIDIwMTEgUnlhbiBEYXlcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2U6XG4gKiAgIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gKlxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFFSQ29kZSBmb3IgSmF2YVNjcmlwdFxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAwOSBLYXp1aGlrbyBBcmFzZVxuLy9cbi8vIFVSTDogaHR0cDovL3d3dy5kLXByb2plY3QuY29tL1xuLy9cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbi8vICAgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbi8vXG4vLyBUaGUgd29yZCBcIlFSIENvZGVcIiBpcyByZWdpc3RlcmVkIHRyYWRlbWFyayBvZlxuLy8gREVOU08gV0FWRSBJTkNPUlBPUkFURURcbi8vICAgaHR0cDovL3d3dy5kZW5zby13YXZlLmNvbS9xcmNvZGUvZmFxcGF0ZW50LWUuaHRtbFxuLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuXG4vKipcbiAqIEFkZCBmaW5kZXIgcGF0dGVybnMgYml0cyB0byBtYXRyaXhcbiAqXG4gKiBAcGFyYW0gIHtCaXRNYXRyaXh9IG1hdHJpeCAgTW9kdWxlcyBtYXRyaXhcbiAqIEBwYXJhbSAge051bWJlcn0gICAgdmVyc2lvbiBRUiBDb2RlIHZlcnNpb25cbiAqL1xuZnVuY3Rpb24gc2V0dXBGaW5kZXJQYXR0ZXJuIChtYXRyaXgsIHZlcnNpb24pIHtcbiAgY29uc3Qgc2l6ZSA9IG1hdHJpeC5zaXplXG4gIGNvbnN0IHBvcyA9IEZpbmRlclBhdHRlcm4uZ2V0UG9zaXRpb25zKHZlcnNpb24pXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCByb3cgPSBwb3NbaV1bMF1cbiAgICBjb25zdCBjb2wgPSBwb3NbaV1bMV1cblxuICAgIGZvciAobGV0IHIgPSAtMTsgciA8PSA3OyByKyspIHtcbiAgICAgIGlmIChyb3cgKyByIDw9IC0xIHx8IHNpemUgPD0gcm93ICsgcikgY29udGludWVcblxuICAgICAgZm9yIChsZXQgYyA9IC0xOyBjIDw9IDc7IGMrKykge1xuICAgICAgICBpZiAoY29sICsgYyA8PSAtMSB8fCBzaXplIDw9IGNvbCArIGMpIGNvbnRpbnVlXG5cbiAgICAgICAgaWYgKChyID49IDAgJiYgciA8PSA2ICYmIChjID09PSAwIHx8IGMgPT09IDYpKSB8fFxuICAgICAgICAgIChjID49IDAgJiYgYyA8PSA2ICYmIChyID09PSAwIHx8IHIgPT09IDYpKSB8fFxuICAgICAgICAgIChyID49IDIgJiYgciA8PSA0ICYmIGMgPj0gMiAmJiBjIDw9IDQpKSB7XG4gICAgICAgICAgbWF0cml4LnNldChyb3cgKyByLCBjb2wgKyBjLCB0cnVlLCB0cnVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1hdHJpeC5zZXQocm93ICsgciwgY29sICsgYywgZmFsc2UsIHRydWUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBZGQgdGltaW5nIHBhdHRlcm4gYml0cyB0byBtYXRyaXhcbiAqXG4gKiBOb3RlOiB0aGlzIGZ1bmN0aW9uIG11c3QgYmUgY2FsbGVkIGJlZm9yZSB7QGxpbmsgc2V0dXBBbGlnbm1lbnRQYXR0ZXJufVxuICpcbiAqIEBwYXJhbSAge0JpdE1hdHJpeH0gbWF0cml4IE1vZHVsZXMgbWF0cml4XG4gKi9cbmZ1bmN0aW9uIHNldHVwVGltaW5nUGF0dGVybiAobWF0cml4KSB7XG4gIGNvbnN0IHNpemUgPSBtYXRyaXguc2l6ZVxuXG4gIGZvciAobGV0IHIgPSA4OyByIDwgc2l6ZSAtIDg7IHIrKykge1xuICAgIGNvbnN0IHZhbHVlID0gciAlIDIgPT09IDBcbiAgICBtYXRyaXguc2V0KHIsIDYsIHZhbHVlLCB0cnVlKVxuICAgIG1hdHJpeC5zZXQoNiwgciwgdmFsdWUsIHRydWUpXG4gIH1cbn1cblxuLyoqXG4gKiBBZGQgYWxpZ25tZW50IHBhdHRlcm5zIGJpdHMgdG8gbWF0cml4XG4gKlxuICogTm90ZTogdGhpcyBmdW5jdGlvbiBtdXN0IGJlIGNhbGxlZCBhZnRlciB7QGxpbmsgc2V0dXBUaW1pbmdQYXR0ZXJufVxuICpcbiAqIEBwYXJhbSAge0JpdE1hdHJpeH0gbWF0cml4ICBNb2R1bGVzIG1hdHJpeFxuICogQHBhcmFtICB7TnVtYmVyfSAgICB2ZXJzaW9uIFFSIENvZGUgdmVyc2lvblxuICovXG5mdW5jdGlvbiBzZXR1cEFsaWdubWVudFBhdHRlcm4gKG1hdHJpeCwgdmVyc2lvbikge1xuICBjb25zdCBwb3MgPSBBbGlnbm1lbnRQYXR0ZXJuLmdldFBvc2l0aW9ucyh2ZXJzaW9uKVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgcm93ID0gcG9zW2ldWzBdXG4gICAgY29uc3QgY29sID0gcG9zW2ldWzFdXG5cbiAgICBmb3IgKGxldCByID0gLTI7IHIgPD0gMjsgcisrKSB7XG4gICAgICBmb3IgKGxldCBjID0gLTI7IGMgPD0gMjsgYysrKSB7XG4gICAgICAgIGlmIChyID09PSAtMiB8fCByID09PSAyIHx8IGMgPT09IC0yIHx8IGMgPT09IDIgfHxcbiAgICAgICAgICAociA9PT0gMCAmJiBjID09PSAwKSkge1xuICAgICAgICAgIG1hdHJpeC5zZXQocm93ICsgciwgY29sICsgYywgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtYXRyaXguc2V0KHJvdyArIHIsIGNvbCArIGMsIGZhbHNlLCB0cnVlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWRkIHZlcnNpb24gaW5mbyBiaXRzIHRvIG1hdHJpeFxuICpcbiAqIEBwYXJhbSAge0JpdE1hdHJpeH0gbWF0cml4ICBNb2R1bGVzIG1hdHJpeFxuICogQHBhcmFtICB7TnVtYmVyfSAgICB2ZXJzaW9uIFFSIENvZGUgdmVyc2lvblxuICovXG5mdW5jdGlvbiBzZXR1cFZlcnNpb25JbmZvIChtYXRyaXgsIHZlcnNpb24pIHtcbiAgY29uc3Qgc2l6ZSA9IG1hdHJpeC5zaXplXG4gIGNvbnN0IGJpdHMgPSBWZXJzaW9uLmdldEVuY29kZWRCaXRzKHZlcnNpb24pXG4gIGxldCByb3csIGNvbCwgbW9kXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxODsgaSsrKSB7XG4gICAgcm93ID0gTWF0aC5mbG9vcihpIC8gMylcbiAgICBjb2wgPSBpICUgMyArIHNpemUgLSA4IC0gM1xuICAgIG1vZCA9ICgoYml0cyA+PiBpKSAmIDEpID09PSAxXG5cbiAgICBtYXRyaXguc2V0KHJvdywgY29sLCBtb2QsIHRydWUpXG4gICAgbWF0cml4LnNldChjb2wsIHJvdywgbW9kLCB0cnVlKVxuICB9XG59XG5cbi8qKlxuICogQWRkIGZvcm1hdCBpbmZvIGJpdHMgdG8gbWF0cml4XG4gKlxuICogQHBhcmFtICB7Qml0TWF0cml4fSBtYXRyaXggICAgICAgICAgICAgICBNb2R1bGVzIG1hdHJpeFxuICogQHBhcmFtICB7RXJyb3JDb3JyZWN0aW9uTGV2ZWx9ICAgIGVycm9yQ29ycmVjdGlvbkxldmVsIEVycm9yIGNvcnJlY3Rpb24gbGV2ZWxcbiAqIEBwYXJhbSAge051bWJlcn0gICAgbWFza1BhdHRlcm4gICAgICAgICAgTWFzayBwYXR0ZXJuIHJlZmVyZW5jZSB2YWx1ZVxuICovXG5mdW5jdGlvbiBzZXR1cEZvcm1hdEluZm8gKG1hdHJpeCwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwsIG1hc2tQYXR0ZXJuKSB7XG4gIGNvbnN0IHNpemUgPSBtYXRyaXguc2l6ZVxuICBjb25zdCBiaXRzID0gRm9ybWF0SW5mby5nZXRFbmNvZGVkQml0cyhlcnJvckNvcnJlY3Rpb25MZXZlbCwgbWFza1BhdHRlcm4pXG4gIGxldCBpLCBtb2RcblxuICBmb3IgKGkgPSAwOyBpIDwgMTU7IGkrKykge1xuICAgIG1vZCA9ICgoYml0cyA+PiBpKSAmIDEpID09PSAxXG5cbiAgICAvLyB2ZXJ0aWNhbFxuICAgIGlmIChpIDwgNikge1xuICAgICAgbWF0cml4LnNldChpLCA4LCBtb2QsIHRydWUpXG4gICAgfSBlbHNlIGlmIChpIDwgOCkge1xuICAgICAgbWF0cml4LnNldChpICsgMSwgOCwgbW9kLCB0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBtYXRyaXguc2V0KHNpemUgLSAxNSArIGksIDgsIG1vZCwgdHJ1ZSlcbiAgICB9XG5cbiAgICAvLyBob3Jpem9udGFsXG4gICAgaWYgKGkgPCA4KSB7XG4gICAgICBtYXRyaXguc2V0KDgsIHNpemUgLSBpIC0gMSwgbW9kLCB0cnVlKVxuICAgIH0gZWxzZSBpZiAoaSA8IDkpIHtcbiAgICAgIG1hdHJpeC5zZXQoOCwgMTUgLSBpIC0gMSArIDEsIG1vZCwgdHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgbWF0cml4LnNldCg4LCAxNSAtIGkgLSAxLCBtb2QsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgLy8gZml4ZWQgbW9kdWxlXG4gIG1hdHJpeC5zZXQoc2l6ZSAtIDgsIDgsIDEsIHRydWUpXG59XG5cbi8qKlxuICogQWRkIGVuY29kZWQgZGF0YSBiaXRzIHRvIG1hdHJpeFxuICpcbiAqIEBwYXJhbSAge0JpdE1hdHJpeH0gIG1hdHJpeCBNb2R1bGVzIG1hdHJpeFxuICogQHBhcmFtICB7VWludDhBcnJheX0gZGF0YSAgIERhdGEgY29kZXdvcmRzXG4gKi9cbmZ1bmN0aW9uIHNldHVwRGF0YSAobWF0cml4LCBkYXRhKSB7XG4gIGNvbnN0IHNpemUgPSBtYXRyaXguc2l6ZVxuICBsZXQgaW5jID0gLTFcbiAgbGV0IHJvdyA9IHNpemUgLSAxXG4gIGxldCBiaXRJbmRleCA9IDdcbiAgbGV0IGJ5dGVJbmRleCA9IDBcblxuICBmb3IgKGxldCBjb2wgPSBzaXplIC0gMTsgY29sID4gMDsgY29sIC09IDIpIHtcbiAgICBpZiAoY29sID09PSA2KSBjb2wtLVxuXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgMjsgYysrKSB7XG4gICAgICAgIGlmICghbWF0cml4LmlzUmVzZXJ2ZWQocm93LCBjb2wgLSBjKSkge1xuICAgICAgICAgIGxldCBkYXJrID0gZmFsc2VcblxuICAgICAgICAgIGlmIChieXRlSW5kZXggPCBkYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgZGFyayA9ICgoKGRhdGFbYnl0ZUluZGV4XSA+Pj4gYml0SW5kZXgpICYgMSkgPT09IDEpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbWF0cml4LnNldChyb3csIGNvbCAtIGMsIGRhcmspXG4gICAgICAgICAgYml0SW5kZXgtLVxuXG4gICAgICAgICAgaWYgKGJpdEluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgYnl0ZUluZGV4KytcbiAgICAgICAgICAgIGJpdEluZGV4ID0gN1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByb3cgKz0gaW5jXG5cbiAgICAgIGlmIChyb3cgPCAwIHx8IHNpemUgPD0gcm93KSB7XG4gICAgICAgIHJvdyAtPSBpbmNcbiAgICAgICAgaW5jID0gLWluY1xuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZSBlbmNvZGVkIGNvZGV3b3JkcyBmcm9tIGRhdGEgaW5wdXRcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgdmVyc2lvbiAgICAgICAgICAgICAgUVIgQ29kZSB2ZXJzaW9uXG4gKiBAcGFyYW0gIHtFcnJvckNvcnJlY3Rpb25MZXZlbH0gICBlcnJvckNvcnJlY3Rpb25MZXZlbCBFcnJvciBjb3JyZWN0aW9uIGxldmVsXG4gKiBAcGFyYW0gIHtCeXRlRGF0YX0gZGF0YSAgICAgICAgICAgICAgICAgRGF0YSBpbnB1dFxuICogQHJldHVybiB7VWludDhBcnJheX0gICAgICAgICAgICAgICAgICAgIEJ1ZmZlciBjb250YWluaW5nIGVuY29kZWQgY29kZXdvcmRzXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZURhdGEgKHZlcnNpb24sIGVycm9yQ29ycmVjdGlvbkxldmVsLCBzZWdtZW50cykge1xuICAvLyBQcmVwYXJlIGRhdGEgYnVmZmVyXG4gIGNvbnN0IGJ1ZmZlciA9IG5ldyBCaXRCdWZmZXIoKVxuXG4gIHNlZ21lbnRzLmZvckVhY2goZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAvLyBwcmVmaXggZGF0YSB3aXRoIG1vZGUgaW5kaWNhdG9yICg0IGJpdHMpXG4gICAgYnVmZmVyLnB1dChkYXRhLm1vZGUuYml0LCA0KVxuXG4gICAgLy8gUHJlZml4IGRhdGEgd2l0aCBjaGFyYWN0ZXIgY291bnQgaW5kaWNhdG9yLlxuICAgIC8vIFRoZSBjaGFyYWN0ZXIgY291bnQgaW5kaWNhdG9yIGlzIGEgc3RyaW5nIG9mIGJpdHMgdGhhdCByZXByZXNlbnRzIHRoZVxuICAgIC8vIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRoYXQgYXJlIGJlaW5nIGVuY29kZWQuXG4gICAgLy8gVGhlIGNoYXJhY3RlciBjb3VudCBpbmRpY2F0b3IgbXVzdCBiZSBwbGFjZWQgYWZ0ZXIgdGhlIG1vZGUgaW5kaWNhdG9yXG4gICAgLy8gYW5kIG11c3QgYmUgYSBjZXJ0YWluIG51bWJlciBvZiBiaXRzIGxvbmcsIGRlcGVuZGluZyBvbiB0aGUgUVIgdmVyc2lvblxuICAgIC8vIGFuZCBkYXRhIG1vZGVcbiAgICAvLyBAc2VlIHtAbGluayBNb2RlLmdldENoYXJDb3VudEluZGljYXRvcn0uXG4gICAgYnVmZmVyLnB1dChkYXRhLmdldExlbmd0aCgpLCBNb2RlLmdldENoYXJDb3VudEluZGljYXRvcihkYXRhLm1vZGUsIHZlcnNpb24pKVxuXG4gICAgLy8gYWRkIGJpbmFyeSBkYXRhIHNlcXVlbmNlIHRvIGJ1ZmZlclxuICAgIGRhdGEud3JpdGUoYnVmZmVyKVxuICB9KVxuXG4gIC8vIENhbGN1bGF0ZSByZXF1aXJlZCBudW1iZXIgb2YgYml0c1xuICBjb25zdCB0b3RhbENvZGV3b3JkcyA9IFV0aWxzLmdldFN5bWJvbFRvdGFsQ29kZXdvcmRzKHZlcnNpb24pXG4gIGNvbnN0IGVjVG90YWxDb2Rld29yZHMgPSBFQ0NvZGUuZ2V0VG90YWxDb2Rld29yZHNDb3VudCh2ZXJzaW9uLCBlcnJvckNvcnJlY3Rpb25MZXZlbClcbiAgY29uc3QgZGF0YVRvdGFsQ29kZXdvcmRzQml0cyA9ICh0b3RhbENvZGV3b3JkcyAtIGVjVG90YWxDb2Rld29yZHMpICogOFxuXG4gIC8vIEFkZCBhIHRlcm1pbmF0b3IuXG4gIC8vIElmIHRoZSBiaXQgc3RyaW5nIGlzIHNob3J0ZXIgdGhhbiB0aGUgdG90YWwgbnVtYmVyIG9mIHJlcXVpcmVkIGJpdHMsXG4gIC8vIGEgdGVybWluYXRvciBvZiB1cCB0byBmb3VyIDBzIG11c3QgYmUgYWRkZWQgdG8gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIHN0cmluZy5cbiAgLy8gSWYgdGhlIGJpdCBzdHJpbmcgaXMgbW9yZSB0aGFuIGZvdXIgYml0cyBzaG9ydGVyIHRoYW4gdGhlIHJlcXVpcmVkIG51bWJlciBvZiBiaXRzLFxuICAvLyBhZGQgZm91ciAwcyB0byB0aGUgZW5kLlxuICBpZiAoYnVmZmVyLmdldExlbmd0aEluQml0cygpICsgNCA8PSBkYXRhVG90YWxDb2Rld29yZHNCaXRzKSB7XG4gICAgYnVmZmVyLnB1dCgwLCA0KVxuICB9XG5cbiAgLy8gSWYgdGhlIGJpdCBzdHJpbmcgaXMgZmV3ZXIgdGhhbiBmb3VyIGJpdHMgc2hvcnRlciwgYWRkIG9ubHkgdGhlIG51bWJlciBvZiAwcyB0aGF0XG4gIC8vIGFyZSBuZWVkZWQgdG8gcmVhY2ggdGhlIHJlcXVpcmVkIG51bWJlciBvZiBiaXRzLlxuXG4gIC8vIEFmdGVyIGFkZGluZyB0aGUgdGVybWluYXRvciwgaWYgdGhlIG51bWJlciBvZiBiaXRzIGluIHRoZSBzdHJpbmcgaXMgbm90IGEgbXVsdGlwbGUgb2YgOCxcbiAgLy8gcGFkIHRoZSBzdHJpbmcgb24gdGhlIHJpZ2h0IHdpdGggMHMgdG8gbWFrZSB0aGUgc3RyaW5nJ3MgbGVuZ3RoIGEgbXVsdGlwbGUgb2YgOC5cbiAgd2hpbGUgKGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKSAlIDggIT09IDApIHtcbiAgICBidWZmZXIucHV0Qml0KDApXG4gIH1cblxuICAvLyBBZGQgcGFkIGJ5dGVzIGlmIHRoZSBzdHJpbmcgaXMgc3RpbGwgc2hvcnRlciB0aGFuIHRoZSB0b3RhbCBudW1iZXIgb2YgcmVxdWlyZWQgYml0cy5cbiAgLy8gRXh0ZW5kIHRoZSBidWZmZXIgdG8gZmlsbCB0aGUgZGF0YSBjYXBhY2l0eSBvZiB0aGUgc3ltYm9sIGNvcnJlc3BvbmRpbmcgdG9cbiAgLy8gdGhlIFZlcnNpb24gYW5kIEVycm9yIENvcnJlY3Rpb24gTGV2ZWwgYnkgYWRkaW5nIHRoZSBQYWQgQ29kZXdvcmRzIDExMTAxMTAwICgweEVDKVxuICAvLyBhbmQgMDAwMTAwMDEgKDB4MTEpIGFsdGVybmF0ZWx5LlxuICBjb25zdCByZW1haW5pbmdCeXRlID0gKGRhdGFUb3RhbENvZGV3b3Jkc0JpdHMgLSBidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCkpIC8gOFxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJlbWFpbmluZ0J5dGU7IGkrKykge1xuICAgIGJ1ZmZlci5wdXQoaSAlIDIgPyAweDExIDogMHhFQywgOClcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVDb2Rld29yZHMoYnVmZmVyLCB2ZXJzaW9uLCBlcnJvckNvcnJlY3Rpb25MZXZlbClcbn1cblxuLyoqXG4gKiBFbmNvZGUgaW5wdXQgZGF0YSB3aXRoIFJlZWQtU29sb21vbiBhbmQgcmV0dXJuIGNvZGV3b3JkcyB3aXRoXG4gKiByZWxhdGl2ZSBlcnJvciBjb3JyZWN0aW9uIGJpdHNcbiAqXG4gKiBAcGFyYW0gIHtCaXRCdWZmZXJ9IGJpdEJ1ZmZlciAgICAgICAgICAgIERhdGEgdG8gZW5jb2RlXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgIHZlcnNpb24gICAgICAgICAgICAgIFFSIENvZGUgdmVyc2lvblxuICogQHBhcmFtICB7RXJyb3JDb3JyZWN0aW9uTGV2ZWx9IGVycm9yQ29ycmVjdGlvbkxldmVsIEVycm9yIGNvcnJlY3Rpb24gbGV2ZWxcbiAqIEByZXR1cm4ge1VpbnQ4QXJyYXl9ICAgICAgICAgICAgICAgICAgICAgQnVmZmVyIGNvbnRhaW5pbmcgZW5jb2RlZCBjb2Rld29yZHNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ29kZXdvcmRzIChiaXRCdWZmZXIsIHZlcnNpb24sIGVycm9yQ29ycmVjdGlvbkxldmVsKSB7XG4gIC8vIFRvdGFsIGNvZGV3b3JkcyBmb3IgdGhpcyBRUiBjb2RlIHZlcnNpb24gKERhdGEgKyBFcnJvciBjb3JyZWN0aW9uKVxuICBjb25zdCB0b3RhbENvZGV3b3JkcyA9IFV0aWxzLmdldFN5bWJvbFRvdGFsQ29kZXdvcmRzKHZlcnNpb24pXG5cbiAgLy8gVG90YWwgbnVtYmVyIG9mIGVycm9yIGNvcnJlY3Rpb24gY29kZXdvcmRzXG4gIGNvbnN0IGVjVG90YWxDb2Rld29yZHMgPSBFQ0NvZGUuZ2V0VG90YWxDb2Rld29yZHNDb3VudCh2ZXJzaW9uLCBlcnJvckNvcnJlY3Rpb25MZXZlbClcblxuICAvLyBUb3RhbCBudW1iZXIgb2YgZGF0YSBjb2Rld29yZHNcbiAgY29uc3QgZGF0YVRvdGFsQ29kZXdvcmRzID0gdG90YWxDb2Rld29yZHMgLSBlY1RvdGFsQ29kZXdvcmRzXG5cbiAgLy8gVG90YWwgbnVtYmVyIG9mIGJsb2Nrc1xuICBjb25zdCBlY1RvdGFsQmxvY2tzID0gRUNDb2RlLmdldEJsb2Nrc0NvdW50KHZlcnNpb24sIGVycm9yQ29ycmVjdGlvbkxldmVsKVxuXG4gIC8vIENhbGN1bGF0ZSBob3cgbWFueSBibG9ja3MgZWFjaCBncm91cCBzaG91bGQgY29udGFpblxuICBjb25zdCBibG9ja3NJbkdyb3VwMiA9IHRvdGFsQ29kZXdvcmRzICUgZWNUb3RhbEJsb2Nrc1xuICBjb25zdCBibG9ja3NJbkdyb3VwMSA9IGVjVG90YWxCbG9ja3MgLSBibG9ja3NJbkdyb3VwMlxuXG4gIGNvbnN0IHRvdGFsQ29kZXdvcmRzSW5Hcm91cDEgPSBNYXRoLmZsb29yKHRvdGFsQ29kZXdvcmRzIC8gZWNUb3RhbEJsb2NrcylcblxuICBjb25zdCBkYXRhQ29kZXdvcmRzSW5Hcm91cDEgPSBNYXRoLmZsb29yKGRhdGFUb3RhbENvZGV3b3JkcyAvIGVjVG90YWxCbG9ja3MpXG4gIGNvbnN0IGRhdGFDb2Rld29yZHNJbkdyb3VwMiA9IGRhdGFDb2Rld29yZHNJbkdyb3VwMSArIDFcblxuICAvLyBOdW1iZXIgb2YgRUMgY29kZXdvcmRzIGlzIHRoZSBzYW1lIGZvciBib3RoIGdyb3Vwc1xuICBjb25zdCBlY0NvdW50ID0gdG90YWxDb2Rld29yZHNJbkdyb3VwMSAtIGRhdGFDb2Rld29yZHNJbkdyb3VwMVxuXG4gIC8vIEluaXRpYWxpemUgYSBSZWVkLVNvbG9tb24gZW5jb2RlciB3aXRoIGEgZ2VuZXJhdG9yIHBvbHlub21pYWwgb2YgZGVncmVlIGVjQ291bnRcbiAgY29uc3QgcnMgPSBuZXcgUmVlZFNvbG9tb25FbmNvZGVyKGVjQ291bnQpXG5cbiAgbGV0IG9mZnNldCA9IDBcbiAgY29uc3QgZGNEYXRhID0gbmV3IEFycmF5KGVjVG90YWxCbG9ja3MpXG4gIGNvbnN0IGVjRGF0YSA9IG5ldyBBcnJheShlY1RvdGFsQmxvY2tzKVxuICBsZXQgbWF4RGF0YVNpemUgPSAwXG4gIGNvbnN0IGJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KGJpdEJ1ZmZlci5idWZmZXIpXG5cbiAgLy8gRGl2aWRlIHRoZSBidWZmZXIgaW50byB0aGUgcmVxdWlyZWQgbnVtYmVyIG9mIGJsb2Nrc1xuICBmb3IgKGxldCBiID0gMDsgYiA8IGVjVG90YWxCbG9ja3M7IGIrKykge1xuICAgIGNvbnN0IGRhdGFTaXplID0gYiA8IGJsb2Nrc0luR3JvdXAxID8gZGF0YUNvZGV3b3Jkc0luR3JvdXAxIDogZGF0YUNvZGV3b3Jkc0luR3JvdXAyXG5cbiAgICAvLyBleHRyYWN0IGEgYmxvY2sgb2YgZGF0YSBmcm9tIGJ1ZmZlclxuICAgIGRjRGF0YVtiXSA9IGJ1ZmZlci5zbGljZShvZmZzZXQsIG9mZnNldCArIGRhdGFTaXplKVxuXG4gICAgLy8gQ2FsY3VsYXRlIEVDIGNvZGV3b3JkcyBmb3IgdGhpcyBkYXRhIGJsb2NrXG4gICAgZWNEYXRhW2JdID0gcnMuZW5jb2RlKGRjRGF0YVtiXSlcblxuICAgIG9mZnNldCArPSBkYXRhU2l6ZVxuICAgIG1heERhdGFTaXplID0gTWF0aC5tYXgobWF4RGF0YVNpemUsIGRhdGFTaXplKVxuICB9XG5cbiAgLy8gQ3JlYXRlIGZpbmFsIGRhdGFcbiAgLy8gSW50ZXJsZWF2ZSB0aGUgZGF0YSBhbmQgZXJyb3IgY29ycmVjdGlvbiBjb2Rld29yZHMgZnJvbSBlYWNoIGJsb2NrXG4gIGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheSh0b3RhbENvZGV3b3JkcylcbiAgbGV0IGluZGV4ID0gMFxuICBsZXQgaSwgclxuXG4gIC8vIEFkZCBkYXRhIGNvZGV3b3Jkc1xuICBmb3IgKGkgPSAwOyBpIDwgbWF4RGF0YVNpemU7IGkrKykge1xuICAgIGZvciAociA9IDA7IHIgPCBlY1RvdGFsQmxvY2tzOyByKyspIHtcbiAgICAgIGlmIChpIDwgZGNEYXRhW3JdLmxlbmd0aCkge1xuICAgICAgICBkYXRhW2luZGV4KytdID0gZGNEYXRhW3JdW2ldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQXBwZWQgRUMgY29kZXdvcmRzXG4gIGZvciAoaSA9IDA7IGkgPCBlY0NvdW50OyBpKyspIHtcbiAgICBmb3IgKHIgPSAwOyByIDwgZWNUb3RhbEJsb2NrczsgcisrKSB7XG4gICAgICBkYXRhW2luZGV4KytdID0gZWNEYXRhW3JdW2ldXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRhdGFcbn1cblxuLyoqXG4gKiBCdWlsZCBRUiBDb2RlIHN5bWJvbFxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gZGF0YSAgICAgICAgICAgICAgICAgSW5wdXQgc3RyaW5nXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZlcnNpb24gICAgICAgICAgICAgIFFSIENvZGUgdmVyc2lvblxuICogQHBhcmFtICB7RXJyb3JDb3JyZXRpb25MZXZlbH0gZXJyb3JDb3JyZWN0aW9uTGV2ZWwgRXJyb3IgbGV2ZWxcbiAqIEBwYXJhbSAge01hc2tQYXR0ZXJufSBtYXNrUGF0dGVybiAgICAgTWFzayBwYXR0ZXJuXG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgICAgICAgICAgIE9iamVjdCBjb250YWluaW5nIHN5bWJvbCBkYXRhXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVN5bWJvbCAoZGF0YSwgdmVyc2lvbiwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwsIG1hc2tQYXR0ZXJuKSB7XG4gIGxldCBzZWdtZW50c1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgc2VnbWVudHMgPSBTZWdtZW50cy5mcm9tQXJyYXkoZGF0YSlcbiAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICBsZXQgZXN0aW1hdGVkVmVyc2lvbiA9IHZlcnNpb25cblxuICAgIGlmICghZXN0aW1hdGVkVmVyc2lvbikge1xuICAgICAgY29uc3QgcmF3U2VnbWVudHMgPSBTZWdtZW50cy5yYXdTcGxpdChkYXRhKVxuXG4gICAgICAvLyBFc3RpbWF0ZSBiZXN0IHZlcnNpb24gdGhhdCBjYW4gY29udGFpbiByYXcgc3BsaXR0ZWQgc2VnbWVudHNcbiAgICAgIGVzdGltYXRlZFZlcnNpb24gPSBWZXJzaW9uLmdldEJlc3RWZXJzaW9uRm9yRGF0YShyYXdTZWdtZW50cywgZXJyb3JDb3JyZWN0aW9uTGV2ZWwpXG4gICAgfVxuXG4gICAgLy8gQnVpbGQgb3B0aW1pemVkIHNlZ21lbnRzXG4gICAgLy8gSWYgZXN0aW1hdGVkIHZlcnNpb24gaXMgdW5kZWZpbmVkLCB0cnkgd2l0aCB0aGUgaGlnaGVzdCB2ZXJzaW9uXG4gICAgc2VnbWVudHMgPSBTZWdtZW50cy5mcm9tU3RyaW5nKGRhdGEsIGVzdGltYXRlZFZlcnNpb24gfHwgNDApXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGRhdGEnKVxuICB9XG5cbiAgLy8gR2V0IHRoZSBtaW4gdmVyc2lvbiB0aGF0IGNhbiBjb250YWluIGRhdGFcbiAgY29uc3QgYmVzdFZlcnNpb24gPSBWZXJzaW9uLmdldEJlc3RWZXJzaW9uRm9yRGF0YShzZWdtZW50cywgZXJyb3JDb3JyZWN0aW9uTGV2ZWwpXG5cbiAgLy8gSWYgbm8gdmVyc2lvbiBpcyBmb3VuZCwgZGF0YSBjYW5ub3QgYmUgc3RvcmVkXG4gIGlmICghYmVzdFZlcnNpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBhbW91bnQgb2YgZGF0YSBpcyB0b28gYmlnIHRvIGJlIHN0b3JlZCBpbiBhIFFSIENvZGUnKVxuICB9XG5cbiAgLy8gSWYgbm90IHNwZWNpZmllZCwgdXNlIG1pbiB2ZXJzaW9uIGFzIGRlZmF1bHRcbiAgaWYgKCF2ZXJzaW9uKSB7XG4gICAgdmVyc2lvbiA9IGJlc3RWZXJzaW9uXG5cbiAgLy8gQ2hlY2sgaWYgdGhlIHNwZWNpZmllZCB2ZXJzaW9uIGNhbiBjb250YWluIHRoZSBkYXRhXG4gIH0gZWxzZSBpZiAodmVyc2lvbiA8IGJlc3RWZXJzaW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdcXG4nICtcbiAgICAgICdUaGUgY2hvc2VuIFFSIENvZGUgdmVyc2lvbiBjYW5ub3QgY29udGFpbiB0aGlzIGFtb3VudCBvZiBkYXRhLlxcbicgK1xuICAgICAgJ01pbmltdW0gdmVyc2lvbiByZXF1aXJlZCB0byBzdG9yZSBjdXJyZW50IGRhdGEgaXM6ICcgKyBiZXN0VmVyc2lvbiArICcuXFxuJ1xuICAgIClcbiAgfVxuXG4gIGNvbnN0IGRhdGFCaXRzID0gY3JlYXRlRGF0YSh2ZXJzaW9uLCBlcnJvckNvcnJlY3Rpb25MZXZlbCwgc2VnbWVudHMpXG5cbiAgLy8gQWxsb2NhdGUgbWF0cml4IGJ1ZmZlclxuICBjb25zdCBtb2R1bGVDb3VudCA9IFV0aWxzLmdldFN5bWJvbFNpemUodmVyc2lvbilcbiAgY29uc3QgbW9kdWxlcyA9IG5ldyBCaXRNYXRyaXgobW9kdWxlQ291bnQpXG5cbiAgLy8gQWRkIGZ1bmN0aW9uIG1vZHVsZXNcbiAgc2V0dXBGaW5kZXJQYXR0ZXJuKG1vZHVsZXMsIHZlcnNpb24pXG4gIHNldHVwVGltaW5nUGF0dGVybihtb2R1bGVzKVxuICBzZXR1cEFsaWdubWVudFBhdHRlcm4obW9kdWxlcywgdmVyc2lvbilcblxuICAvLyBBZGQgdGVtcG9yYXJ5IGR1bW15IGJpdHMgZm9yIGZvcm1hdCBpbmZvIGp1c3QgdG8gc2V0IHRoZW0gYXMgcmVzZXJ2ZWQuXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIHByZXZlbnQgdGhlc2UgYml0cyBmcm9tIGJlaW5nIG1hc2tlZCBieSB7QGxpbmsgTWFza1BhdHRlcm4uYXBwbHlNYXNrfVxuICAvLyBzaW5jZSB0aGUgbWFza2luZyBvcGVyYXRpb24gbXVzdCBiZSBwZXJmb3JtZWQgb25seSBvbiB0aGUgZW5jb2RpbmcgcmVnaW9uLlxuICAvLyBUaGVzZSBibG9ja3Mgd2lsbCBiZSByZXBsYWNlZCB3aXRoIGNvcnJlY3QgdmFsdWVzIGxhdGVyIGluIGNvZGUuXG4gIHNldHVwRm9ybWF0SW5mbyhtb2R1bGVzLCBlcnJvckNvcnJlY3Rpb25MZXZlbCwgMClcblxuICBpZiAodmVyc2lvbiA+PSA3KSB7XG4gICAgc2V0dXBWZXJzaW9uSW5mbyhtb2R1bGVzLCB2ZXJzaW9uKVxuICB9XG5cbiAgLy8gQWRkIGRhdGEgY29kZXdvcmRzXG4gIHNldHVwRGF0YShtb2R1bGVzLCBkYXRhQml0cylcblxuICBpZiAoaXNOYU4obWFza1BhdHRlcm4pKSB7XG4gICAgLy8gRmluZCBiZXN0IG1hc2sgcGF0dGVyblxuICAgIG1hc2tQYXR0ZXJuID0gTWFza1BhdHRlcm4uZ2V0QmVzdE1hc2sobW9kdWxlcyxcbiAgICAgIHNldHVwRm9ybWF0SW5mby5iaW5kKG51bGwsIG1vZHVsZXMsIGVycm9yQ29ycmVjdGlvbkxldmVsKSlcbiAgfVxuXG4gIC8vIEFwcGx5IG1hc2sgcGF0dGVyblxuICBNYXNrUGF0dGVybi5hcHBseU1hc2sobWFza1BhdHRlcm4sIG1vZHVsZXMpXG5cbiAgLy8gUmVwbGFjZSBmb3JtYXQgaW5mbyBiaXRzIHdpdGggY29ycmVjdCB2YWx1ZXNcbiAgc2V0dXBGb3JtYXRJbmZvKG1vZHVsZXMsIGVycm9yQ29ycmVjdGlvbkxldmVsLCBtYXNrUGF0dGVybilcblxuICByZXR1cm4ge1xuICAgIG1vZHVsZXM6IG1vZHVsZXMsXG4gICAgdmVyc2lvbjogdmVyc2lvbixcbiAgICBlcnJvckNvcnJlY3Rpb25MZXZlbDogZXJyb3JDb3JyZWN0aW9uTGV2ZWwsXG4gICAgbWFza1BhdHRlcm46IG1hc2tQYXR0ZXJuLFxuICAgIHNlZ21lbnRzOiBzZWdtZW50c1xuICB9XG59XG5cbi8qKlxuICogUVIgQ29kZVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nIHwgQXJyYXl9IGRhdGEgICAgICAgICAgICAgICAgIElucHV0IGRhdGFcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zICAgICAgICAgICAgICAgICAgICAgIE9wdGlvbmFsIGNvbmZpZ3VyYXRpb25zXG4gKiBAcGFyYW0ge051bWJlcn0gb3B0aW9ucy52ZXJzaW9uICAgICAgICAgICAgICBRUiBDb2RlIHZlcnNpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBvcHRpb25zLmVycm9yQ29ycmVjdGlvbkxldmVsIEVycm9yIGNvcnJlY3Rpb24gbGV2ZWxcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9wdGlvbnMudG9TSklTRnVuYyAgICAgICAgIEhlbHBlciBmdW5jIHRvIGNvbnZlcnQgdXRmOCB0byBzamlzXG4gKi9cbmV4cG9ydHMuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlIChkYXRhLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3VuZGVmaW5lZCcgfHwgZGF0YSA9PT0gJycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGlucHV0IHRleHQnKVxuICB9XG5cbiAgbGV0IGVycm9yQ29ycmVjdGlvbkxldmVsID0gRUNMZXZlbC5NXG4gIGxldCB2ZXJzaW9uXG4gIGxldCBtYXNrXG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIFVzZSBoaWdoZXIgZXJyb3IgY29ycmVjdGlvbiBsZXZlbCBhcyBkZWZhdWx0XG4gICAgZXJyb3JDb3JyZWN0aW9uTGV2ZWwgPSBFQ0xldmVsLmZyb20ob3B0aW9ucy5lcnJvckNvcnJlY3Rpb25MZXZlbCwgRUNMZXZlbC5NKVxuICAgIHZlcnNpb24gPSBWZXJzaW9uLmZyb20ob3B0aW9ucy52ZXJzaW9uKVxuICAgIG1hc2sgPSBNYXNrUGF0dGVybi5mcm9tKG9wdGlvbnMubWFza1BhdHRlcm4pXG5cbiAgICBpZiAob3B0aW9ucy50b1NKSVNGdW5jKSB7XG4gICAgICBVdGlscy5zZXRUb1NKSVNGdW5jdGlvbihvcHRpb25zLnRvU0pJU0Z1bmMpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZVN5bWJvbChkYXRhLCB2ZXJzaW9uLCBlcnJvckNvcnJlY3Rpb25MZXZlbCwgbWFzaylcbn1cbiIsImNvbnN0IFBvbHlub21pYWwgPSByZXF1aXJlKCcuL3BvbHlub21pYWwnKVxuXG5mdW5jdGlvbiBSZWVkU29sb21vbkVuY29kZXIgKGRlZ3JlZSkge1xuICB0aGlzLmdlblBvbHkgPSB1bmRlZmluZWRcbiAgdGhpcy5kZWdyZWUgPSBkZWdyZWVcblxuICBpZiAodGhpcy5kZWdyZWUpIHRoaXMuaW5pdGlhbGl6ZSh0aGlzLmRlZ3JlZSlcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBlbmNvZGVyLlxuICogVGhlIGlucHV0IHBhcmFtIHNob3VsZCBjb3JyZXNwb25kIHRvIHRoZSBudW1iZXIgb2YgZXJyb3IgY29ycmVjdGlvbiBjb2Rld29yZHMuXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSBkZWdyZWVcbiAqL1xuUmVlZFNvbG9tb25FbmNvZGVyLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gaW5pdGlhbGl6ZSAoZGVncmVlKSB7XG4gIC8vIGNyZWF0ZSBhbiBpcnJlZHVjaWJsZSBnZW5lcmF0b3IgcG9seW5vbWlhbFxuICB0aGlzLmRlZ3JlZSA9IGRlZ3JlZVxuICB0aGlzLmdlblBvbHkgPSBQb2x5bm9taWFsLmdlbmVyYXRlRUNQb2x5bm9taWFsKHRoaXMuZGVncmVlKVxufVxuXG4vKipcbiAqIEVuY29kZXMgYSBjaHVuayBvZiBkYXRhXG4gKlxuICogQHBhcmFtICB7VWludDhBcnJheX0gZGF0YSBCdWZmZXIgY29udGFpbmluZyBpbnB1dCBkYXRhXG4gKiBAcmV0dXJuIHtVaW50OEFycmF5fSAgICAgIEJ1ZmZlciBjb250YWluaW5nIGVuY29kZWQgZGF0YVxuICovXG5SZWVkU29sb21vbkVuY29kZXIucHJvdG90eXBlLmVuY29kZSA9IGZ1bmN0aW9uIGVuY29kZSAoZGF0YSkge1xuICBpZiAoIXRoaXMuZ2VuUG9seSkge1xuICAgIHRocm93IG5ldyBFcnJvcignRW5jb2RlciBub3QgaW5pdGlhbGl6ZWQnKVxuICB9XG5cbiAgLy8gQ2FsY3VsYXRlIEVDIGZvciB0aGlzIGRhdGEgYmxvY2tcbiAgLy8gZXh0ZW5kcyBkYXRhIHNpemUgdG8gZGF0YStnZW5Qb2x5IHNpemVcbiAgY29uc3QgcGFkZGVkRGF0YSA9IG5ldyBVaW50OEFycmF5KGRhdGEubGVuZ3RoICsgdGhpcy5kZWdyZWUpXG4gIHBhZGRlZERhdGEuc2V0KGRhdGEpXG5cbiAgLy8gVGhlIGVycm9yIGNvcnJlY3Rpb24gY29kZXdvcmRzIGFyZSB0aGUgcmVtYWluZGVyIGFmdGVyIGRpdmlkaW5nIHRoZSBkYXRhIGNvZGV3b3Jkc1xuICAvLyBieSBhIGdlbmVyYXRvciBwb2x5bm9taWFsXG4gIGNvbnN0IHJlbWFpbmRlciA9IFBvbHlub21pYWwubW9kKHBhZGRlZERhdGEsIHRoaXMuZ2VuUG9seSlcblxuICAvLyByZXR1cm4gRUMgZGF0YSBibG9ja3MgKGxhc3QgbiBieXRlLCB3aGVyZSBuIGlzIHRoZSBkZWdyZWUgb2YgZ2VuUG9seSlcbiAgLy8gSWYgY29lZmZpY2llbnRzIG51bWJlciBpbiByZW1haW5kZXIgYXJlIGxlc3MgdGhhbiBnZW5Qb2x5IGRlZ3JlZSxcbiAgLy8gcGFkIHdpdGggMHMgdG8gdGhlIGxlZnQgdG8gcmVhY2ggdGhlIG5lZWRlZCBudW1iZXIgb2YgY29lZmZpY2llbnRzXG4gIGNvbnN0IHN0YXJ0ID0gdGhpcy5kZWdyZWUgLSByZW1haW5kZXIubGVuZ3RoXG4gIGlmIChzdGFydCA+IDApIHtcbiAgICBjb25zdCBidWZmID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5kZWdyZWUpXG4gICAgYnVmZi5zZXQocmVtYWluZGVyLCBzdGFydClcblxuICAgIHJldHVybiBidWZmXG4gIH1cblxuICByZXR1cm4gcmVtYWluZGVyXG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVlZFNvbG9tb25FbmNvZGVyXG4iLCJjb25zdCBudW1lcmljID0gJ1swLTldKydcbmNvbnN0IGFscGhhbnVtZXJpYyA9ICdbQS1aICQlKitcXFxcLS4vOl0rJ1xubGV0IGthbmppID0gJyg/Olt1MzAwMC11MzAzRl18W3UzMDQwLXUzMDlGXXxbdTMwQTAtdTMwRkZdfCcgK1xuICAnW3VGRjAwLXVGRkVGXXxbdTRFMDAtdTlGQUZdfFt1MjYwNS11MjYwNl18W3UyMTkwLXUyMTk1XXx1MjAzQnwnICtcbiAgJ1t1MjAxMHUyMDE1dTIwMTh1MjAxOXUyMDI1dTIwMjZ1MjAxQ3UyMDFEdTIyMjV1MjI2MF18JyArXG4gICdbdTAzOTEtdTA0NTFdfFt1MDBBN3UwMEE4dTAwQjF1MDBCNHUwMEQ3dTAwRjddKSsnXG5rYW5qaSA9IGthbmppLnJlcGxhY2UoL3UvZywgJ1xcXFx1JylcblxuY29uc3QgYnl0ZSA9ICcoPzooPyFbQS1aMC05ICQlKitcXFxcLS4vOl18JyArIGthbmppICsgJykoPzoufFtcXHJcXG5dKSkrJ1xuXG5leHBvcnRzLktBTkpJID0gbmV3IFJlZ0V4cChrYW5qaSwgJ2cnKVxuZXhwb3J0cy5CWVRFX0tBTkpJID0gbmV3IFJlZ0V4cCgnW15BLVowLTkgJCUqK1xcXFwtLi86XSsnLCAnZycpXG5leHBvcnRzLkJZVEUgPSBuZXcgUmVnRXhwKGJ5dGUsICdnJylcbmV4cG9ydHMuTlVNRVJJQyA9IG5ldyBSZWdFeHAobnVtZXJpYywgJ2cnKVxuZXhwb3J0cy5BTFBIQU5VTUVSSUMgPSBuZXcgUmVnRXhwKGFscGhhbnVtZXJpYywgJ2cnKVxuXG5jb25zdCBURVNUX0tBTkpJID0gbmV3IFJlZ0V4cCgnXicgKyBrYW5qaSArICckJylcbmNvbnN0IFRFU1RfTlVNRVJJQyA9IG5ldyBSZWdFeHAoJ14nICsgbnVtZXJpYyArICckJylcbmNvbnN0IFRFU1RfQUxQSEFOVU1FUklDID0gbmV3IFJlZ0V4cCgnXltBLVowLTkgJCUqK1xcXFwtLi86XSskJylcblxuZXhwb3J0cy50ZXN0S2FuamkgPSBmdW5jdGlvbiB0ZXN0S2FuamkgKHN0cikge1xuICByZXR1cm4gVEVTVF9LQU5KSS50ZXN0KHN0cilcbn1cblxuZXhwb3J0cy50ZXN0TnVtZXJpYyA9IGZ1bmN0aW9uIHRlc3ROdW1lcmljIChzdHIpIHtcbiAgcmV0dXJuIFRFU1RfTlVNRVJJQy50ZXN0KHN0cilcbn1cblxuZXhwb3J0cy50ZXN0QWxwaGFudW1lcmljID0gZnVuY3Rpb24gdGVzdEFscGhhbnVtZXJpYyAoc3RyKSB7XG4gIHJldHVybiBURVNUX0FMUEhBTlVNRVJJQy50ZXN0KHN0cilcbn1cbiIsImNvbnN0IE1vZGUgPSByZXF1aXJlKCcuL21vZGUnKVxuY29uc3QgTnVtZXJpY0RhdGEgPSByZXF1aXJlKCcuL251bWVyaWMtZGF0YScpXG5jb25zdCBBbHBoYW51bWVyaWNEYXRhID0gcmVxdWlyZSgnLi9hbHBoYW51bWVyaWMtZGF0YScpXG5jb25zdCBCeXRlRGF0YSA9IHJlcXVpcmUoJy4vYnl0ZS1kYXRhJylcbmNvbnN0IEthbmppRGF0YSA9IHJlcXVpcmUoJy4va2FuamktZGF0YScpXG5jb25zdCBSZWdleCA9IHJlcXVpcmUoJy4vcmVnZXgnKVxuY29uc3QgVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJylcbmNvbnN0IGRpamtzdHJhID0gcmVxdWlyZSgnZGlqa3N0cmFqcycpXG5cbi8qKlxuICogUmV0dXJucyBVVEY4IGJ5dGUgbGVuZ3RoXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBzdHIgSW5wdXQgc3RyaW5nXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICBOdW1iZXIgb2YgYnl0ZVxuICovXG5mdW5jdGlvbiBnZXRTdHJpbmdCeXRlTGVuZ3RoIChzdHIpIHtcbiAgcmV0dXJuIHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChzdHIpKS5sZW5ndGhcbn1cblxuLyoqXG4gKiBHZXQgYSBsaXN0IG9mIHNlZ21lbnRzIG9mIHRoZSBzcGVjaWZpZWQgbW9kZVxuICogZnJvbSBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSAge01vZGV9ICAgbW9kZSBTZWdtZW50IG1vZGVcbiAqIEBwYXJhbSAge1N0cmluZ30gc3RyICBTdHJpbmcgdG8gcHJvY2Vzc1xuICogQHJldHVybiB7QXJyYXl9ICAgICAgIEFycmF5IG9mIG9iamVjdCB3aXRoIHNlZ21lbnRzIGRhdGFcbiAqL1xuZnVuY3Rpb24gZ2V0U2VnbWVudHMgKHJlZ2V4LCBtb2RlLCBzdHIpIHtcbiAgY29uc3Qgc2VnbWVudHMgPSBbXVxuICBsZXQgcmVzdWx0XG5cbiAgd2hpbGUgKChyZXN1bHQgPSByZWdleC5leGVjKHN0cikpICE9PSBudWxsKSB7XG4gICAgc2VnbWVudHMucHVzaCh7XG4gICAgICBkYXRhOiByZXN1bHRbMF0sXG4gICAgICBpbmRleDogcmVzdWx0LmluZGV4LFxuICAgICAgbW9kZTogbW9kZSxcbiAgICAgIGxlbmd0aDogcmVzdWx0WzBdLmxlbmd0aFxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gc2VnbWVudHNcbn1cblxuLyoqXG4gKiBFeHRyYWN0cyBhIHNlcmllcyBvZiBzZWdtZW50cyB3aXRoIHRoZSBhcHByb3ByaWF0ZVxuICogbW9kZXMgZnJvbSBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gZGF0YVN0ciBJbnB1dCBzdHJpbmdcbiAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgICBBcnJheSBvZiBvYmplY3Qgd2l0aCBzZWdtZW50cyBkYXRhXG4gKi9cbmZ1bmN0aW9uIGdldFNlZ21lbnRzRnJvbVN0cmluZyAoZGF0YVN0cikge1xuICBjb25zdCBudW1TZWdzID0gZ2V0U2VnbWVudHMoUmVnZXguTlVNRVJJQywgTW9kZS5OVU1FUklDLCBkYXRhU3RyKVxuICBjb25zdCBhbHBoYU51bVNlZ3MgPSBnZXRTZWdtZW50cyhSZWdleC5BTFBIQU5VTUVSSUMsIE1vZGUuQUxQSEFOVU1FUklDLCBkYXRhU3RyKVxuICBsZXQgYnl0ZVNlZ3NcbiAgbGV0IGthbmppU2Vnc1xuXG4gIGlmIChVdGlscy5pc0thbmppTW9kZUVuYWJsZWQoKSkge1xuICAgIGJ5dGVTZWdzID0gZ2V0U2VnbWVudHMoUmVnZXguQllURSwgTW9kZS5CWVRFLCBkYXRhU3RyKVxuICAgIGthbmppU2VncyA9IGdldFNlZ21lbnRzKFJlZ2V4LktBTkpJLCBNb2RlLktBTkpJLCBkYXRhU3RyKVxuICB9IGVsc2Uge1xuICAgIGJ5dGVTZWdzID0gZ2V0U2VnbWVudHMoUmVnZXguQllURV9LQU5KSSwgTW9kZS5CWVRFLCBkYXRhU3RyKVxuICAgIGthbmppU2VncyA9IFtdXG4gIH1cblxuICBjb25zdCBzZWdzID0gbnVtU2Vncy5jb25jYXQoYWxwaGFOdW1TZWdzLCBieXRlU2Vncywga2FuamlTZWdzKVxuXG4gIHJldHVybiBzZWdzXG4gICAgLnNvcnQoZnVuY3Rpb24gKHMxLCBzMikge1xuICAgICAgcmV0dXJuIHMxLmluZGV4IC0gczIuaW5kZXhcbiAgICB9KVxuICAgIC5tYXAoZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF0YTogb2JqLmRhdGEsXG4gICAgICAgIG1vZGU6IG9iai5tb2RlLFxuICAgICAgICBsZW5ndGg6IG9iai5sZW5ndGhcbiAgICAgIH1cbiAgICB9KVxufVxuXG4vKipcbiAqIFJldHVybnMgaG93IG1hbnkgYml0cyBhcmUgbmVlZGVkIHRvIGVuY29kZSBhIHN0cmluZyBvZlxuICogc3BlY2lmaWVkIGxlbmd0aCB3aXRoIHRoZSBzcGVjaWZpZWQgbW9kZVxuICpcbiAqIEBwYXJhbSAge051bWJlcn0gbGVuZ3RoIFN0cmluZyBsZW5ndGhcbiAqIEBwYXJhbSAge01vZGV9IG1vZGUgICAgIFNlZ21lbnQgbW9kZVxuICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgQml0IGxlbmd0aFxuICovXG5mdW5jdGlvbiBnZXRTZWdtZW50Qml0c0xlbmd0aCAobGVuZ3RoLCBtb2RlKSB7XG4gIHN3aXRjaCAobW9kZSkge1xuICAgIGNhc2UgTW9kZS5OVU1FUklDOlxuICAgICAgcmV0dXJuIE51bWVyaWNEYXRhLmdldEJpdHNMZW5ndGgobGVuZ3RoKVxuICAgIGNhc2UgTW9kZS5BTFBIQU5VTUVSSUM6XG4gICAgICByZXR1cm4gQWxwaGFudW1lcmljRGF0YS5nZXRCaXRzTGVuZ3RoKGxlbmd0aClcbiAgICBjYXNlIE1vZGUuS0FOSkk6XG4gICAgICByZXR1cm4gS2FuamlEYXRhLmdldEJpdHNMZW5ndGgobGVuZ3RoKVxuICAgIGNhc2UgTW9kZS5CWVRFOlxuICAgICAgcmV0dXJuIEJ5dGVEYXRhLmdldEJpdHNMZW5ndGgobGVuZ3RoKVxuICB9XG59XG5cbi8qKlxuICogTWVyZ2VzIGFkamFjZW50IHNlZ21lbnRzIHdoaWNoIGhhdmUgdGhlIHNhbWUgbW9kZVxuICpcbiAqIEBwYXJhbSAge0FycmF5fSBzZWdzIEFycmF5IG9mIG9iamVjdCB3aXRoIHNlZ21lbnRzIGRhdGFcbiAqIEByZXR1cm4ge0FycmF5fSAgICAgIEFycmF5IG9mIG9iamVjdCB3aXRoIHNlZ21lbnRzIGRhdGFcbiAqL1xuZnVuY3Rpb24gbWVyZ2VTZWdtZW50cyAoc2Vncykge1xuICByZXR1cm4gc2Vncy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY3Vycikge1xuICAgIGNvbnN0IHByZXZTZWcgPSBhY2MubGVuZ3RoIC0gMSA+PSAwID8gYWNjW2FjYy5sZW5ndGggLSAxXSA6IG51bGxcbiAgICBpZiAocHJldlNlZyAmJiBwcmV2U2VnLm1vZGUgPT09IGN1cnIubW9kZSkge1xuICAgICAgYWNjW2FjYy5sZW5ndGggLSAxXS5kYXRhICs9IGN1cnIuZGF0YVxuICAgICAgcmV0dXJuIGFjY1xuICAgIH1cblxuICAgIGFjYy5wdXNoKGN1cnIpXG4gICAgcmV0dXJuIGFjY1xuICB9LCBbXSlcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBsaXN0IG9mIGFsbCBwb3NzaWJsZSBub2RlcyBjb21iaW5hdGlvbiB3aGljaFxuICogd2lsbCBiZSB1c2VkIHRvIGJ1aWxkIGEgc2VnbWVudHMgZ3JhcGguXG4gKlxuICogTm9kZXMgYXJlIGRpdmlkZWQgYnkgZ3JvdXBzLiBFYWNoIGdyb3VwIHdpbGwgY29udGFpbiBhIGxpc3Qgb2YgYWxsIHRoZSBtb2Rlc1xuICogaW4gd2hpY2ggaXMgcG9zc2libGUgdG8gZW5jb2RlIHRoZSBnaXZlbiB0ZXh0LlxuICpcbiAqIEZvciBleGFtcGxlIHRoZSB0ZXh0ICcxMjM0NScgY2FuIGJlIGVuY29kZWQgYXMgTnVtZXJpYywgQWxwaGFudW1lcmljIG9yIEJ5dGUuXG4gKiBUaGUgZ3JvdXAgZm9yICcxMjM0NScgd2lsbCBjb250YWluIHRoZW4gMyBvYmplY3RzLCBvbmUgZm9yIGVhY2hcbiAqIHBvc3NpYmxlIGVuY29kaW5nIG1vZGUuXG4gKlxuICogRWFjaCBub2RlIHJlcHJlc2VudHMgYSBwb3NzaWJsZSBzZWdtZW50LlxuICpcbiAqIEBwYXJhbSAge0FycmF5fSBzZWdzIEFycmF5IG9mIG9iamVjdCB3aXRoIHNlZ21lbnRzIGRhdGFcbiAqIEByZXR1cm4ge0FycmF5fSAgICAgIEFycmF5IG9mIG9iamVjdCB3aXRoIHNlZ21lbnRzIGRhdGFcbiAqL1xuZnVuY3Rpb24gYnVpbGROb2RlcyAoc2Vncykge1xuICBjb25zdCBub2RlcyA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2Vncy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHNlZyA9IHNlZ3NbaV1cblxuICAgIHN3aXRjaCAoc2VnLm1vZGUpIHtcbiAgICAgIGNhc2UgTW9kZS5OVU1FUklDOlxuICAgICAgICBub2Rlcy5wdXNoKFtzZWcsXG4gICAgICAgICAgeyBkYXRhOiBzZWcuZGF0YSwgbW9kZTogTW9kZS5BTFBIQU5VTUVSSUMsIGxlbmd0aDogc2VnLmxlbmd0aCB9LFxuICAgICAgICAgIHsgZGF0YTogc2VnLmRhdGEsIG1vZGU6IE1vZGUuQllURSwgbGVuZ3RoOiBzZWcubGVuZ3RoIH1cbiAgICAgICAgXSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgTW9kZS5BTFBIQU5VTUVSSUM6XG4gICAgICAgIG5vZGVzLnB1c2goW3NlZyxcbiAgICAgICAgICB7IGRhdGE6IHNlZy5kYXRhLCBtb2RlOiBNb2RlLkJZVEUsIGxlbmd0aDogc2VnLmxlbmd0aCB9XG4gICAgICAgIF0pXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIE1vZGUuS0FOSkk6XG4gICAgICAgIG5vZGVzLnB1c2goW3NlZyxcbiAgICAgICAgICB7IGRhdGE6IHNlZy5kYXRhLCBtb2RlOiBNb2RlLkJZVEUsIGxlbmd0aDogZ2V0U3RyaW5nQnl0ZUxlbmd0aChzZWcuZGF0YSkgfVxuICAgICAgICBdKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBNb2RlLkJZVEU6XG4gICAgICAgIG5vZGVzLnB1c2goW1xuICAgICAgICAgIHsgZGF0YTogc2VnLmRhdGEsIG1vZGU6IE1vZGUuQllURSwgbGVuZ3RoOiBnZXRTdHJpbmdCeXRlTGVuZ3RoKHNlZy5kYXRhKSB9XG4gICAgICAgIF0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vZGVzXG59XG5cbi8qKlxuICogQnVpbGRzIGEgZ3JhcGggZnJvbSBhIGxpc3Qgb2Ygbm9kZXMuXG4gKiBBbGwgc2VnbWVudHMgaW4gZWFjaCBub2RlIGdyb3VwIHdpbGwgYmUgY29ubmVjdGVkIHdpdGggYWxsIHRoZSBzZWdtZW50cyBvZlxuICogdGhlIG5leHQgZ3JvdXAgYW5kIHNvIG9uLlxuICpcbiAqIEF0IGVhY2ggY29ubmVjdGlvbiB3aWxsIGJlIGFzc2lnbmVkIGEgd2VpZ2h0IGRlcGVuZGluZyBvbiB0aGVcbiAqIHNlZ21lbnQncyBieXRlIGxlbmd0aC5cbiAqXG4gKiBAcGFyYW0gIHtBcnJheX0gbm9kZXMgICAgQXJyYXkgb2Ygb2JqZWN0IHdpdGggc2VnbWVudHMgZGF0YVxuICogQHBhcmFtICB7TnVtYmVyfSB2ZXJzaW9uIFFSIENvZGUgdmVyc2lvblxuICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgIEdyYXBoIG9mIGFsbCBwb3NzaWJsZSBzZWdtZW50c1xuICovXG5mdW5jdGlvbiBidWlsZEdyYXBoIChub2RlcywgdmVyc2lvbikge1xuICBjb25zdCB0YWJsZSA9IHt9XG4gIGNvbnN0IGdyYXBoID0geyBzdGFydDoge30gfVxuICBsZXQgcHJldk5vZGVJZHMgPSBbJ3N0YXJ0J11cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgbm9kZUdyb3VwID0gbm9kZXNbaV1cbiAgICBjb25zdCBjdXJyZW50Tm9kZUlkcyA9IFtdXG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5vZGVHcm91cC5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3Qgbm9kZSA9IG5vZGVHcm91cFtqXVxuICAgICAgY29uc3Qga2V5ID0gJycgKyBpICsgalxuXG4gICAgICBjdXJyZW50Tm9kZUlkcy5wdXNoKGtleSlcbiAgICAgIHRhYmxlW2tleV0gPSB7IG5vZGU6IG5vZGUsIGxhc3RDb3VudDogMCB9XG4gICAgICBncmFwaFtrZXldID0ge31cblxuICAgICAgZm9yIChsZXQgbiA9IDA7IG4gPCBwcmV2Tm9kZUlkcy5sZW5ndGg7IG4rKykge1xuICAgICAgICBjb25zdCBwcmV2Tm9kZUlkID0gcHJldk5vZGVJZHNbbl1cblxuICAgICAgICBpZiAodGFibGVbcHJldk5vZGVJZF0gJiYgdGFibGVbcHJldk5vZGVJZF0ubm9kZS5tb2RlID09PSBub2RlLm1vZGUpIHtcbiAgICAgICAgICBncmFwaFtwcmV2Tm9kZUlkXVtrZXldID1cbiAgICAgICAgICAgIGdldFNlZ21lbnRCaXRzTGVuZ3RoKHRhYmxlW3ByZXZOb2RlSWRdLmxhc3RDb3VudCArIG5vZGUubGVuZ3RoLCBub2RlLm1vZGUpIC1cbiAgICAgICAgICAgIGdldFNlZ21lbnRCaXRzTGVuZ3RoKHRhYmxlW3ByZXZOb2RlSWRdLmxhc3RDb3VudCwgbm9kZS5tb2RlKVxuXG4gICAgICAgICAgdGFibGVbcHJldk5vZGVJZF0ubGFzdENvdW50ICs9IG5vZGUubGVuZ3RoXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRhYmxlW3ByZXZOb2RlSWRdKSB0YWJsZVtwcmV2Tm9kZUlkXS5sYXN0Q291bnQgPSBub2RlLmxlbmd0aFxuXG4gICAgICAgICAgZ3JhcGhbcHJldk5vZGVJZF1ba2V5XSA9IGdldFNlZ21lbnRCaXRzTGVuZ3RoKG5vZGUubGVuZ3RoLCBub2RlLm1vZGUpICtcbiAgICAgICAgICAgIDQgKyBNb2RlLmdldENoYXJDb3VudEluZGljYXRvcihub2RlLm1vZGUsIHZlcnNpb24pIC8vIHN3aXRjaCBjb3N0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcmV2Tm9kZUlkcyA9IGN1cnJlbnROb2RlSWRzXG4gIH1cblxuICBmb3IgKGxldCBuID0gMDsgbiA8IHByZXZOb2RlSWRzLmxlbmd0aDsgbisrKSB7XG4gICAgZ3JhcGhbcHJldk5vZGVJZHNbbl1dLmVuZCA9IDBcbiAgfVxuXG4gIHJldHVybiB7IG1hcDogZ3JhcGgsIHRhYmxlOiB0YWJsZSB9XG59XG5cbi8qKlxuICogQnVpbGRzIGEgc2VnbWVudCBmcm9tIGEgc3BlY2lmaWVkIGRhdGEgYW5kIG1vZGUuXG4gKiBJZiBhIG1vZGUgaXMgbm90IHNwZWNpZmllZCwgdGhlIG1vcmUgc3VpdGFibGUgd2lsbCBiZSB1c2VkLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gZGF0YSAgICAgICAgICAgICBJbnB1dCBkYXRhXG4gKiBAcGFyYW0gIHtNb2RlIHwgU3RyaW5nfSBtb2Rlc0hpbnQgRGF0YSBtb2RlXG4gKiBAcmV0dXJuIHtTZWdtZW50fSAgICAgICAgICAgICAgICAgU2VnbWVudFxuICovXG5mdW5jdGlvbiBidWlsZFNpbmdsZVNlZ21lbnQgKGRhdGEsIG1vZGVzSGludCkge1xuICBsZXQgbW9kZVxuICBjb25zdCBiZXN0TW9kZSA9IE1vZGUuZ2V0QmVzdE1vZGVGb3JEYXRhKGRhdGEpXG5cbiAgbW9kZSA9IE1vZGUuZnJvbShtb2Rlc0hpbnQsIGJlc3RNb2RlKVxuXG4gIC8vIE1ha2Ugc3VyZSBkYXRhIGNhbiBiZSBlbmNvZGVkXG4gIGlmIChtb2RlICE9PSBNb2RlLkJZVEUgJiYgbW9kZS5iaXQgPCBiZXN0TW9kZS5iaXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1wiJyArIGRhdGEgKyAnXCInICtcbiAgICAgICcgY2Fubm90IGJlIGVuY29kZWQgd2l0aCBtb2RlICcgKyBNb2RlLnRvU3RyaW5nKG1vZGUpICtcbiAgICAgICcuXFxuIFN1Z2dlc3RlZCBtb2RlIGlzOiAnICsgTW9kZS50b1N0cmluZyhiZXN0TW9kZSkpXG4gIH1cblxuICAvLyBVc2UgTW9kZS5CWVRFIGlmIEthbmppIHN1cHBvcnQgaXMgZGlzYWJsZWRcbiAgaWYgKG1vZGUgPT09IE1vZGUuS0FOSkkgJiYgIVV0aWxzLmlzS2FuamlNb2RlRW5hYmxlZCgpKSB7XG4gICAgbW9kZSA9IE1vZGUuQllURVxuICB9XG5cbiAgc3dpdGNoIChtb2RlKSB7XG4gICAgY2FzZSBNb2RlLk5VTUVSSUM6XG4gICAgICByZXR1cm4gbmV3IE51bWVyaWNEYXRhKGRhdGEpXG5cbiAgICBjYXNlIE1vZGUuQUxQSEFOVU1FUklDOlxuICAgICAgcmV0dXJuIG5ldyBBbHBoYW51bWVyaWNEYXRhKGRhdGEpXG5cbiAgICBjYXNlIE1vZGUuS0FOSkk6XG4gICAgICByZXR1cm4gbmV3IEthbmppRGF0YShkYXRhKVxuXG4gICAgY2FzZSBNb2RlLkJZVEU6XG4gICAgICByZXR1cm4gbmV3IEJ5dGVEYXRhKGRhdGEpXG4gIH1cbn1cblxuLyoqXG4gKiBCdWlsZHMgYSBsaXN0IG9mIHNlZ21lbnRzIGZyb20gYW4gYXJyYXkuXG4gKiBBcnJheSBjYW4gY29udGFpbiBTdHJpbmdzIG9yIE9iamVjdHMgd2l0aCBzZWdtZW50J3MgaW5mby5cbiAqXG4gKiBGb3IgZWFjaCBpdGVtIHdoaWNoIGlzIGEgc3RyaW5nLCB3aWxsIGJlIGdlbmVyYXRlZCBhIHNlZ21lbnQgd2l0aCB0aGUgZ2l2ZW5cbiAqIHN0cmluZyBhbmQgdGhlIG1vcmUgYXBwcm9wcmlhdGUgZW5jb2RpbmcgbW9kZS5cbiAqXG4gKiBGb3IgZWFjaCBpdGVtIHdoaWNoIGlzIGFuIG9iamVjdCwgd2lsbCBiZSBnZW5lcmF0ZWQgYSBzZWdtZW50IHdpdGggdGhlIGdpdmVuXG4gKiBkYXRhIGFuZCBtb2RlLlxuICogT2JqZWN0cyBtdXN0IGNvbnRhaW4gYXQgbGVhc3QgdGhlIHByb3BlcnR5IFwiZGF0YVwiLlxuICogSWYgcHJvcGVydHkgXCJtb2RlXCIgaXMgbm90IHByZXNlbnQsIHRoZSBtb3JlIHN1aXRhYmxlIG1vZGUgd2lsbCBiZSB1c2VkLlxuICpcbiAqIEBwYXJhbSAge0FycmF5fSBhcnJheSBBcnJheSBvZiBvYmplY3RzIHdpdGggc2VnbWVudHMgZGF0YVxuICogQHJldHVybiB7QXJyYXl9ICAgICAgIEFycmF5IG9mIFNlZ21lbnRzXG4gKi9cbmV4cG9ydHMuZnJvbUFycmF5ID0gZnVuY3Rpb24gZnJvbUFycmF5IChhcnJheSkge1xuICByZXR1cm4gYXJyYXkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHNlZykge1xuICAgIGlmICh0eXBlb2Ygc2VnID09PSAnc3RyaW5nJykge1xuICAgICAgYWNjLnB1c2goYnVpbGRTaW5nbGVTZWdtZW50KHNlZywgbnVsbCkpXG4gICAgfSBlbHNlIGlmIChzZWcuZGF0YSkge1xuICAgICAgYWNjLnB1c2goYnVpbGRTaW5nbGVTZWdtZW50KHNlZy5kYXRhLCBzZWcubW9kZSkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGFjY1xuICB9LCBbXSlcbn1cblxuLyoqXG4gKiBCdWlsZHMgYW4gb3B0aW1pemVkIHNlcXVlbmNlIG9mIHNlZ21lbnRzIGZyb20gYSBzdHJpbmcsXG4gKiB3aGljaCB3aWxsIHByb2R1Y2UgdGhlIHNob3J0ZXN0IHBvc3NpYmxlIGJpdHN0cmVhbS5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGRhdGEgICAgSW5wdXQgc3RyaW5nXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZlcnNpb24gUVIgQ29kZSB2ZXJzaW9uXG4gKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICAgQXJyYXkgb2Ygc2VnbWVudHNcbiAqL1xuZXhwb3J0cy5mcm9tU3RyaW5nID0gZnVuY3Rpb24gZnJvbVN0cmluZyAoZGF0YSwgdmVyc2lvbikge1xuICBjb25zdCBzZWdzID0gZ2V0U2VnbWVudHNGcm9tU3RyaW5nKGRhdGEsIFV0aWxzLmlzS2FuamlNb2RlRW5hYmxlZCgpKVxuXG4gIGNvbnN0IG5vZGVzID0gYnVpbGROb2RlcyhzZWdzKVxuICBjb25zdCBncmFwaCA9IGJ1aWxkR3JhcGgobm9kZXMsIHZlcnNpb24pXG4gIGNvbnN0IHBhdGggPSBkaWprc3RyYS5maW5kX3BhdGgoZ3JhcGgubWFwLCAnc3RhcnQnLCAnZW5kJylcblxuICBjb25zdCBvcHRpbWl6ZWRTZWdzID0gW11cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwYXRoLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIG9wdGltaXplZFNlZ3MucHVzaChncmFwaC50YWJsZVtwYXRoW2ldXS5ub2RlKVxuICB9XG5cbiAgcmV0dXJuIGV4cG9ydHMuZnJvbUFycmF5KG1lcmdlU2VnbWVudHMob3B0aW1pemVkU2VncykpXG59XG5cbi8qKlxuICogU3BsaXRzIGEgc3RyaW5nIGluIHZhcmlvdXMgc2VnbWVudHMgd2l0aCB0aGUgbW9kZXMgd2hpY2hcbiAqIGJlc3QgcmVwcmVzZW50IHRoZWlyIGNvbnRlbnQuXG4gKiBUaGUgcHJvZHVjZWQgc2VnbWVudHMgYXJlIGZhciBmcm9tIGJlaW5nIG9wdGltaXplZC5cbiAqIFRoZSBvdXRwdXQgb2YgdGhpcyBmdW5jdGlvbiBpcyBvbmx5IHVzZWQgdG8gZXN0aW1hdGUgYSBRUiBDb2RlIHZlcnNpb25cbiAqIHdoaWNoIG1heSBjb250YWluIHRoZSBkYXRhLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gZGF0YSBJbnB1dCBzdHJpbmdcbiAqIEByZXR1cm4ge0FycmF5fSAgICAgICBBcnJheSBvZiBzZWdtZW50c1xuICovXG5leHBvcnRzLnJhd1NwbGl0ID0gZnVuY3Rpb24gcmF3U3BsaXQgKGRhdGEpIHtcbiAgcmV0dXJuIGV4cG9ydHMuZnJvbUFycmF5KFxuICAgIGdldFNlZ21lbnRzRnJvbVN0cmluZyhkYXRhLCBVdGlscy5pc0thbmppTW9kZUVuYWJsZWQoKSlcbiAgKVxufVxuIiwibGV0IHRvU0pJU0Z1bmN0aW9uXG5jb25zdCBDT0RFV09SRFNfQ09VTlQgPSBbXG4gIDAsIC8vIE5vdCB1c2VkXG4gIDI2LCA0NCwgNzAsIDEwMCwgMTM0LCAxNzIsIDE5NiwgMjQyLCAyOTIsIDM0NixcbiAgNDA0LCA0NjYsIDUzMiwgNTgxLCA2NTUsIDczMywgODE1LCA5MDEsIDk5MSwgMTA4NSxcbiAgMTE1NiwgMTI1OCwgMTM2NCwgMTQ3NCwgMTU4OCwgMTcwNiwgMTgyOCwgMTkyMSwgMjA1MSwgMjE4NSxcbiAgMjMyMywgMjQ2NSwgMjYxMSwgMjc2MSwgMjg3NiwgMzAzNCwgMzE5NiwgMzM2MiwgMzUzMiwgMzcwNlxuXVxuXG4vKipcbiAqIFJldHVybnMgdGhlIFFSIENvZGUgc2l6ZSBmb3IgdGhlIHNwZWNpZmllZCB2ZXJzaW9uXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSB2ZXJzaW9uIFFSIENvZGUgdmVyc2lvblxuICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgIHNpemUgb2YgUVIgY29kZVxuICovXG5leHBvcnRzLmdldFN5bWJvbFNpemUgPSBmdW5jdGlvbiBnZXRTeW1ib2xTaXplICh2ZXJzaW9uKSB7XG4gIGlmICghdmVyc2lvbikgdGhyb3cgbmV3IEVycm9yKCdcInZlcnNpb25cIiBjYW5ub3QgYmUgbnVsbCBvciB1bmRlZmluZWQnKVxuICBpZiAodmVyc2lvbiA8IDEgfHwgdmVyc2lvbiA+IDQwKSB0aHJvdyBuZXcgRXJyb3IoJ1widmVyc2lvblwiIHNob3VsZCBiZSBpbiByYW5nZSBmcm9tIDEgdG8gNDAnKVxuICByZXR1cm4gdmVyc2lvbiAqIDQgKyAxN1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHRvdGFsIG51bWJlciBvZiBjb2Rld29yZHMgdXNlZCB0byBzdG9yZSBkYXRhIGFuZCBFQyBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZlcnNpb24gUVIgQ29kZSB2ZXJzaW9uXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgRGF0YSBsZW5ndGggaW4gYml0c1xuICovXG5leHBvcnRzLmdldFN5bWJvbFRvdGFsQ29kZXdvcmRzID0gZnVuY3Rpb24gZ2V0U3ltYm9sVG90YWxDb2Rld29yZHMgKHZlcnNpb24pIHtcbiAgcmV0dXJuIENPREVXT1JEU19DT1VOVFt2ZXJzaW9uXVxufVxuXG4vKipcbiAqIEVuY29kZSBkYXRhIHdpdGggQm9zZS1DaGF1ZGh1cmktSG9jcXVlbmdoZW1cbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGRhdGEgVmFsdWUgdG8gZW5jb2RlXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgRW5jb2RlZCB2YWx1ZVxuICovXG5leHBvcnRzLmdldEJDSERpZ2l0ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgbGV0IGRpZ2l0ID0gMFxuXG4gIHdoaWxlIChkYXRhICE9PSAwKSB7XG4gICAgZGlnaXQrK1xuICAgIGRhdGEgPj4+PSAxXG4gIH1cblxuICByZXR1cm4gZGlnaXRcbn1cblxuZXhwb3J0cy5zZXRUb1NKSVNGdW5jdGlvbiA9IGZ1bmN0aW9uIHNldFRvU0pJU0Z1bmN0aW9uIChmKSB7XG4gIGlmICh0eXBlb2YgZiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignXCJ0b1NKSVNGdW5jXCIgaXMgbm90IGEgdmFsaWQgZnVuY3Rpb24uJylcbiAgfVxuXG4gIHRvU0pJU0Z1bmN0aW9uID0gZlxufVxuXG5leHBvcnRzLmlzS2FuamlNb2RlRW5hYmxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHR5cGVvZiB0b1NKSVNGdW5jdGlvbiAhPT0gJ3VuZGVmaW5lZCdcbn1cblxuZXhwb3J0cy50b1NKSVMgPSBmdW5jdGlvbiB0b1NKSVMgKGthbmppKSB7XG4gIHJldHVybiB0b1NKSVNGdW5jdGlvbihrYW5qaSlcbn1cbiIsIi8qKlxuICogQ2hlY2sgaWYgUVIgQ29kZSB2ZXJzaW9uIGlzIHZhbGlkXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSAgdmVyc2lvbiBRUiBDb2RlIHZlcnNpb25cbiAqIEByZXR1cm4ge0Jvb2xlYW59ICAgICAgICAgdHJ1ZSBpZiB2YWxpZCB2ZXJzaW9uLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuZXhwb3J0cy5pc1ZhbGlkID0gZnVuY3Rpb24gaXNWYWxpZCAodmVyc2lvbikge1xuICByZXR1cm4gIWlzTmFOKHZlcnNpb24pICYmIHZlcnNpb24gPj0gMSAmJiB2ZXJzaW9uIDw9IDQwXG59XG4iLCJjb25zdCBVdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKVxuY29uc3QgRUNDb2RlID0gcmVxdWlyZSgnLi9lcnJvci1jb3JyZWN0aW9uLWNvZGUnKVxuY29uc3QgRUNMZXZlbCA9IHJlcXVpcmUoJy4vZXJyb3ItY29ycmVjdGlvbi1sZXZlbCcpXG5jb25zdCBNb2RlID0gcmVxdWlyZSgnLi9tb2RlJylcbmNvbnN0IFZlcnNpb25DaGVjayA9IHJlcXVpcmUoJy4vdmVyc2lvbi1jaGVjaycpXG5cbi8vIEdlbmVyYXRvciBwb2x5bm9taWFsIHVzZWQgdG8gZW5jb2RlIHZlcnNpb24gaW5mb3JtYXRpb25cbmNvbnN0IEcxOCA9ICgxIDw8IDEyKSB8ICgxIDw8IDExKSB8ICgxIDw8IDEwKSB8ICgxIDw8IDkpIHwgKDEgPDwgOCkgfCAoMSA8PCA1KSB8ICgxIDw8IDIpIHwgKDEgPDwgMClcbmNvbnN0IEcxOF9CQ0ggPSBVdGlscy5nZXRCQ0hEaWdpdChHMTgpXG5cbmZ1bmN0aW9uIGdldEJlc3RWZXJzaW9uRm9yRGF0YUxlbmd0aCAobW9kZSwgbGVuZ3RoLCBlcnJvckNvcnJlY3Rpb25MZXZlbCkge1xuICBmb3IgKGxldCBjdXJyZW50VmVyc2lvbiA9IDE7IGN1cnJlbnRWZXJzaW9uIDw9IDQwOyBjdXJyZW50VmVyc2lvbisrKSB7XG4gICAgaWYgKGxlbmd0aCA8PSBleHBvcnRzLmdldENhcGFjaXR5KGN1cnJlbnRWZXJzaW9uLCBlcnJvckNvcnJlY3Rpb25MZXZlbCwgbW9kZSkpIHtcbiAgICAgIHJldHVybiBjdXJyZW50VmVyc2lvblxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gZ2V0UmVzZXJ2ZWRCaXRzQ291bnQgKG1vZGUsIHZlcnNpb24pIHtcbiAgLy8gQ2hhcmFjdGVyIGNvdW50IGluZGljYXRvciArIG1vZGUgaW5kaWNhdG9yIGJpdHNcbiAgcmV0dXJuIE1vZGUuZ2V0Q2hhckNvdW50SW5kaWNhdG9yKG1vZGUsIHZlcnNpb24pICsgNFxufVxuXG5mdW5jdGlvbiBnZXRUb3RhbEJpdHNGcm9tRGF0YUFycmF5IChzZWdtZW50cywgdmVyc2lvbikge1xuICBsZXQgdG90YWxCaXRzID0gMFxuXG4gIHNlZ21lbnRzLmZvckVhY2goZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBjb25zdCByZXNlcnZlZEJpdHMgPSBnZXRSZXNlcnZlZEJpdHNDb3VudChkYXRhLm1vZGUsIHZlcnNpb24pXG4gICAgdG90YWxCaXRzICs9IHJlc2VydmVkQml0cyArIGRhdGEuZ2V0Qml0c0xlbmd0aCgpXG4gIH0pXG5cbiAgcmV0dXJuIHRvdGFsQml0c1xufVxuXG5mdW5jdGlvbiBnZXRCZXN0VmVyc2lvbkZvck1peGVkRGF0YSAoc2VnbWVudHMsIGVycm9yQ29ycmVjdGlvbkxldmVsKSB7XG4gIGZvciAobGV0IGN1cnJlbnRWZXJzaW9uID0gMTsgY3VycmVudFZlcnNpb24gPD0gNDA7IGN1cnJlbnRWZXJzaW9uKyspIHtcbiAgICBjb25zdCBsZW5ndGggPSBnZXRUb3RhbEJpdHNGcm9tRGF0YUFycmF5KHNlZ21lbnRzLCBjdXJyZW50VmVyc2lvbilcbiAgICBpZiAobGVuZ3RoIDw9IGV4cG9ydHMuZ2V0Q2FwYWNpdHkoY3VycmVudFZlcnNpb24sIGVycm9yQ29ycmVjdGlvbkxldmVsLCBNb2RlLk1JWEVEKSkge1xuICAgICAgcmV0dXJuIGN1cnJlbnRWZXJzaW9uXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG4vKipcbiAqIFJldHVybnMgdmVyc2lvbiBudW1iZXIgZnJvbSBhIHZhbHVlLlxuICogSWYgdmFsdWUgaXMgbm90IGEgdmFsaWQgdmVyc2lvbiwgcmV0dXJucyBkZWZhdWx0VmFsdWVcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ8U3RyaW5nfSB2YWx1ZSAgICAgICAgUVIgQ29kZSB2ZXJzaW9uXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgICAgICBkZWZhdWx0VmFsdWUgRmFsbGJhY2sgdmFsdWVcbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgICAgICAgICAgICBRUiBDb2RlIHZlcnNpb24gbnVtYmVyXG4gKi9cbmV4cG9ydHMuZnJvbSA9IGZ1bmN0aW9uIGZyb20gKHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcbiAgaWYgKFZlcnNpb25DaGVjay5pc1ZhbGlkKHZhbHVlKSkge1xuICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApXG4gIH1cblxuICByZXR1cm4gZGVmYXVsdFZhbHVlXG59XG5cbi8qKlxuICogUmV0dXJucyBob3cgbXVjaCBkYXRhIGNhbiBiZSBzdG9yZWQgd2l0aCB0aGUgc3BlY2lmaWVkIFFSIGNvZGUgdmVyc2lvblxuICogYW5kIGVycm9yIGNvcnJlY3Rpb24gbGV2ZWxcbiAqXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZlcnNpb24gICAgICAgICAgICAgIFFSIENvZGUgdmVyc2lvbiAoMS00MClcbiAqIEBwYXJhbSAge051bWJlcn0gZXJyb3JDb3JyZWN0aW9uTGV2ZWwgRXJyb3IgY29ycmVjdGlvbiBsZXZlbFxuICogQHBhcmFtICB7TW9kZX0gICBtb2RlICAgICAgICAgICAgICAgICBEYXRhIG1vZGVcbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgICAgICAgICAgICAgUXVhbnRpdHkgb2Ygc3RvcmFibGUgZGF0YVxuICovXG5leHBvcnRzLmdldENhcGFjaXR5ID0gZnVuY3Rpb24gZ2V0Q2FwYWNpdHkgKHZlcnNpb24sIGVycm9yQ29ycmVjdGlvbkxldmVsLCBtb2RlKSB7XG4gIGlmICghVmVyc2lvbkNoZWNrLmlzVmFsaWQodmVyc2lvbikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgUVIgQ29kZSB2ZXJzaW9uJylcbiAgfVxuXG4gIC8vIFVzZSBCeXRlIG1vZGUgYXMgZGVmYXVsdFxuICBpZiAodHlwZW9mIG1vZGUgPT09ICd1bmRlZmluZWQnKSBtb2RlID0gTW9kZS5CWVRFXG5cbiAgLy8gVG90YWwgY29kZXdvcmRzIGZvciB0aGlzIFFSIGNvZGUgdmVyc2lvbiAoRGF0YSArIEVycm9yIGNvcnJlY3Rpb24pXG4gIGNvbnN0IHRvdGFsQ29kZXdvcmRzID0gVXRpbHMuZ2V0U3ltYm9sVG90YWxDb2Rld29yZHModmVyc2lvbilcblxuICAvLyBUb3RhbCBudW1iZXIgb2YgZXJyb3IgY29ycmVjdGlvbiBjb2Rld29yZHNcbiAgY29uc3QgZWNUb3RhbENvZGV3b3JkcyA9IEVDQ29kZS5nZXRUb3RhbENvZGV3b3Jkc0NvdW50KHZlcnNpb24sIGVycm9yQ29ycmVjdGlvbkxldmVsKVxuXG4gIC8vIFRvdGFsIG51bWJlciBvZiBkYXRhIGNvZGV3b3Jkc1xuICBjb25zdCBkYXRhVG90YWxDb2Rld29yZHNCaXRzID0gKHRvdGFsQ29kZXdvcmRzIC0gZWNUb3RhbENvZGV3b3JkcykgKiA4XG5cbiAgaWYgKG1vZGUgPT09IE1vZGUuTUlYRUQpIHJldHVybiBkYXRhVG90YWxDb2Rld29yZHNCaXRzXG5cbiAgY29uc3QgdXNhYmxlQml0cyA9IGRhdGFUb3RhbENvZGV3b3Jkc0JpdHMgLSBnZXRSZXNlcnZlZEJpdHNDb3VudChtb2RlLCB2ZXJzaW9uKVxuXG4gIC8vIFJldHVybiBtYXggbnVtYmVyIG9mIHN0b3JhYmxlIGNvZGV3b3Jkc1xuICBzd2l0Y2ggKG1vZGUpIHtcbiAgICBjYXNlIE1vZGUuTlVNRVJJQzpcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKCh1c2FibGVCaXRzIC8gMTApICogMylcblxuICAgIGNhc2UgTW9kZS5BTFBIQU5VTUVSSUM6XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcigodXNhYmxlQml0cyAvIDExKSAqIDIpXG5cbiAgICBjYXNlIE1vZGUuS0FOSkk6XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcih1c2FibGVCaXRzIC8gMTMpXG5cbiAgICBjYXNlIE1vZGUuQllURTpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIE1hdGguZmxvb3IodXNhYmxlQml0cyAvIDgpXG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtaW5pbXVtIHZlcnNpb24gbmVlZGVkIHRvIGNvbnRhaW4gdGhlIGFtb3VudCBvZiBkYXRhXG4gKlxuICogQHBhcmFtICB7U2VnbWVudH0gZGF0YSAgICAgICAgICAgICAgICAgICAgU2VnbWVudCBvZiBkYXRhXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IFtlcnJvckNvcnJlY3Rpb25MZXZlbD1IXSBFcnJvciBjb3JyZWN0aW9uIGxldmVsXG4gKiBAcGFyYW0gIHtNb2RlfSBtb2RlICAgICAgICAgICAgICAgICAgICAgICBEYXRhIG1vZGVcbiAqIEByZXR1cm4ge051bWJlcn0gICAgICAgICAgICAgICAgICAgICAgICAgIFFSIENvZGUgdmVyc2lvblxuICovXG5leHBvcnRzLmdldEJlc3RWZXJzaW9uRm9yRGF0YSA9IGZ1bmN0aW9uIGdldEJlc3RWZXJzaW9uRm9yRGF0YSAoZGF0YSwgZXJyb3JDb3JyZWN0aW9uTGV2ZWwpIHtcbiAgbGV0IHNlZ1xuXG4gIGNvbnN0IGVjbCA9IEVDTGV2ZWwuZnJvbShlcnJvckNvcnJlY3Rpb25MZXZlbCwgRUNMZXZlbC5NKVxuXG4gIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgaWYgKGRhdGEubGVuZ3RoID4gMSkge1xuICAgICAgcmV0dXJuIGdldEJlc3RWZXJzaW9uRm9yTWl4ZWREYXRhKGRhdGEsIGVjbClcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAxXG4gICAgfVxuXG4gICAgc2VnID0gZGF0YVswXVxuICB9IGVsc2Uge1xuICAgIHNlZyA9IGRhdGFcbiAgfVxuXG4gIHJldHVybiBnZXRCZXN0VmVyc2lvbkZvckRhdGFMZW5ndGgoc2VnLm1vZGUsIHNlZy5nZXRMZW5ndGgoKSwgZWNsKVxufVxuXG4vKipcbiAqIFJldHVybnMgdmVyc2lvbiBpbmZvcm1hdGlvbiB3aXRoIHJlbGF0aXZlIGVycm9yIGNvcnJlY3Rpb24gYml0c1xuICpcbiAqIFRoZSB2ZXJzaW9uIGluZm9ybWF0aW9uIGlzIGluY2x1ZGVkIGluIFFSIENvZGUgc3ltYm9scyBvZiB2ZXJzaW9uIDcgb3IgbGFyZ2VyLlxuICogSXQgY29uc2lzdHMgb2YgYW4gMTgtYml0IHNlcXVlbmNlIGNvbnRhaW5pbmcgNiBkYXRhIGJpdHMsXG4gKiB3aXRoIDEyIGVycm9yIGNvcnJlY3Rpb24gYml0cyBjYWxjdWxhdGVkIHVzaW5nIHRoZSAoMTgsIDYpIEdvbGF5IGNvZGUuXG4gKlxuICogQHBhcmFtICB7TnVtYmVyfSB2ZXJzaW9uIFFSIENvZGUgdmVyc2lvblxuICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgIEVuY29kZWQgdmVyc2lvbiBpbmZvIGJpdHNcbiAqL1xuZXhwb3J0cy5nZXRFbmNvZGVkQml0cyA9IGZ1bmN0aW9uIGdldEVuY29kZWRCaXRzICh2ZXJzaW9uKSB7XG4gIGlmICghVmVyc2lvbkNoZWNrLmlzVmFsaWQodmVyc2lvbikgfHwgdmVyc2lvbiA8IDcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgUVIgQ29kZSB2ZXJzaW9uJylcbiAgfVxuXG4gIGxldCBkID0gdmVyc2lvbiA8PCAxMlxuXG4gIHdoaWxlIChVdGlscy5nZXRCQ0hEaWdpdChkKSAtIEcxOF9CQ0ggPj0gMCkge1xuICAgIGQgXj0gKEcxOCA8PCAoVXRpbHMuZ2V0QkNIRGlnaXQoZCkgLSBHMThfQkNIKSlcbiAgfVxuXG4gIHJldHVybiAodmVyc2lvbiA8PCAxMikgfCBkXG59XG4iLCJjb25zdCBVdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKVxuXG5mdW5jdGlvbiBjbGVhckNhbnZhcyAoY3R4LCBjYW52YXMsIHNpemUpIHtcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXG5cbiAgaWYgKCFjYW52YXMuc3R5bGUpIGNhbnZhcy5zdHlsZSA9IHt9XG4gIGNhbnZhcy5oZWlnaHQgPSBzaXplXG4gIGNhbnZhcy53aWR0aCA9IHNpemVcbiAgY2FudmFzLnN0eWxlLmhlaWdodCA9IHNpemUgKyAncHgnXG4gIGNhbnZhcy5zdHlsZS53aWR0aCA9IHNpemUgKyAncHgnXG59XG5cbmZ1bmN0aW9uIGdldENhbnZhc0VsZW1lbnQgKCkge1xuICB0cnkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbmVlZCB0byBzcGVjaWZ5IGEgY2FudmFzIGVsZW1lbnQnKVxuICB9XG59XG5cbmV4cG9ydHMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyIChxckRhdGEsIGNhbnZhcywgb3B0aW9ucykge1xuICBsZXQgb3B0cyA9IG9wdGlvbnNcbiAgbGV0IGNhbnZhc0VsID0gY2FudmFzXG5cbiAgaWYgKHR5cGVvZiBvcHRzID09PSAndW5kZWZpbmVkJyAmJiAoIWNhbnZhcyB8fCAhY2FudmFzLmdldENvbnRleHQpKSB7XG4gICAgb3B0cyA9IGNhbnZhc1xuICAgIGNhbnZhcyA9IHVuZGVmaW5lZFxuICB9XG5cbiAgaWYgKCFjYW52YXMpIHtcbiAgICBjYW52YXNFbCA9IGdldENhbnZhc0VsZW1lbnQoKVxuICB9XG5cbiAgb3B0cyA9IFV0aWxzLmdldE9wdGlvbnMob3B0cylcbiAgY29uc3Qgc2l6ZSA9IFV0aWxzLmdldEltYWdlV2lkdGgocXJEYXRhLm1vZHVsZXMuc2l6ZSwgb3B0cylcblxuICBjb25zdCBjdHggPSBjYW52YXNFbC5nZXRDb250ZXh0KCcyZCcpXG4gIGNvbnN0IGltYWdlID0gY3R4LmNyZWF0ZUltYWdlRGF0YShzaXplLCBzaXplKVxuICBVdGlscy5xclRvSW1hZ2VEYXRhKGltYWdlLmRhdGEsIHFyRGF0YSwgb3B0cylcblxuICBjbGVhckNhbnZhcyhjdHgsIGNhbnZhc0VsLCBzaXplKVxuICBjdHgucHV0SW1hZ2VEYXRhKGltYWdlLCAwLCAwKVxuXG4gIHJldHVybiBjYW52YXNFbFxufVxuXG5leHBvcnRzLnJlbmRlclRvRGF0YVVSTCA9IGZ1bmN0aW9uIHJlbmRlclRvRGF0YVVSTCAocXJEYXRhLCBjYW52YXMsIG9wdGlvbnMpIHtcbiAgbGV0IG9wdHMgPSBvcHRpb25zXG5cbiAgaWYgKHR5cGVvZiBvcHRzID09PSAndW5kZWZpbmVkJyAmJiAoIWNhbnZhcyB8fCAhY2FudmFzLmdldENvbnRleHQpKSB7XG4gICAgb3B0cyA9IGNhbnZhc1xuICAgIGNhbnZhcyA9IHVuZGVmaW5lZFxuICB9XG5cbiAgaWYgKCFvcHRzKSBvcHRzID0ge31cblxuICBjb25zdCBjYW52YXNFbCA9IGV4cG9ydHMucmVuZGVyKHFyRGF0YSwgY2FudmFzLCBvcHRzKVxuXG4gIGNvbnN0IHR5cGUgPSBvcHRzLnR5cGUgfHwgJ2ltYWdlL3BuZydcbiAgY29uc3QgcmVuZGVyZXJPcHRzID0gb3B0cy5yZW5kZXJlck9wdHMgfHwge31cblxuICByZXR1cm4gY2FudmFzRWwudG9EYXRhVVJMKHR5cGUsIHJlbmRlcmVyT3B0cy5xdWFsaXR5KVxufVxuIiwiY29uc3QgVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJylcblxuZnVuY3Rpb24gZ2V0Q29sb3JBdHRyaWIgKGNvbG9yLCBhdHRyaWIpIHtcbiAgY29uc3QgYWxwaGEgPSBjb2xvci5hIC8gMjU1XG4gIGNvbnN0IHN0ciA9IGF0dHJpYiArICc9XCInICsgY29sb3IuaGV4ICsgJ1wiJ1xuXG4gIHJldHVybiBhbHBoYSA8IDFcbiAgICA/IHN0ciArICcgJyArIGF0dHJpYiArICctb3BhY2l0eT1cIicgKyBhbHBoYS50b0ZpeGVkKDIpLnNsaWNlKDEpICsgJ1wiJ1xuICAgIDogc3RyXG59XG5cbmZ1bmN0aW9uIHN2Z0NtZCAoY21kLCB4LCB5KSB7XG4gIGxldCBzdHIgPSBjbWQgKyB4XG4gIGlmICh0eXBlb2YgeSAhPT0gJ3VuZGVmaW5lZCcpIHN0ciArPSAnICcgKyB5XG5cbiAgcmV0dXJuIHN0clxufVxuXG5mdW5jdGlvbiBxclRvUGF0aCAoZGF0YSwgc2l6ZSwgbWFyZ2luKSB7XG4gIGxldCBwYXRoID0gJydcbiAgbGV0IG1vdmVCeSA9IDBcbiAgbGV0IG5ld1JvdyA9IGZhbHNlXG4gIGxldCBsaW5lTGVuZ3RoID0gMFxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGNvbCA9IE1hdGguZmxvb3IoaSAlIHNpemUpXG4gICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihpIC8gc2l6ZSlcblxuICAgIGlmICghY29sICYmICFuZXdSb3cpIG5ld1JvdyA9IHRydWVcblxuICAgIGlmIChkYXRhW2ldKSB7XG4gICAgICBsaW5lTGVuZ3RoKytcblxuICAgICAgaWYgKCEoaSA+IDAgJiYgY29sID4gMCAmJiBkYXRhW2kgLSAxXSkpIHtcbiAgICAgICAgcGF0aCArPSBuZXdSb3dcbiAgICAgICAgICA/IHN2Z0NtZCgnTScsIGNvbCArIG1hcmdpbiwgMC41ICsgcm93ICsgbWFyZ2luKVxuICAgICAgICAgIDogc3ZnQ21kKCdtJywgbW92ZUJ5LCAwKVxuXG4gICAgICAgIG1vdmVCeSA9IDBcbiAgICAgICAgbmV3Um93ID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKCEoY29sICsgMSA8IHNpemUgJiYgZGF0YVtpICsgMV0pKSB7XG4gICAgICAgIHBhdGggKz0gc3ZnQ21kKCdoJywgbGluZUxlbmd0aClcbiAgICAgICAgbGluZUxlbmd0aCA9IDBcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbW92ZUJ5KytcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnRzLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlciAocXJEYXRhLCBvcHRpb25zLCBjYikge1xuICBjb25zdCBvcHRzID0gVXRpbHMuZ2V0T3B0aW9ucyhvcHRpb25zKVxuICBjb25zdCBzaXplID0gcXJEYXRhLm1vZHVsZXMuc2l6ZVxuICBjb25zdCBkYXRhID0gcXJEYXRhLm1vZHVsZXMuZGF0YVxuICBjb25zdCBxcmNvZGVzaXplID0gc2l6ZSArIG9wdHMubWFyZ2luICogMlxuXG4gIGNvbnN0IGJnID0gIW9wdHMuY29sb3IubGlnaHQuYVxuICAgID8gJydcbiAgICA6ICc8cGF0aCAnICsgZ2V0Q29sb3JBdHRyaWIob3B0cy5jb2xvci5saWdodCwgJ2ZpbGwnKSArXG4gICAgICAnIGQ9XCJNMCAwaCcgKyBxcmNvZGVzaXplICsgJ3YnICsgcXJjb2Rlc2l6ZSArICdIMHpcIi8+J1xuXG4gIGNvbnN0IHBhdGggPVxuICAgICc8cGF0aCAnICsgZ2V0Q29sb3JBdHRyaWIob3B0cy5jb2xvci5kYXJrLCAnc3Ryb2tlJykgK1xuICAgICcgZD1cIicgKyBxclRvUGF0aChkYXRhLCBzaXplLCBvcHRzLm1hcmdpbikgKyAnXCIvPidcblxuICBjb25zdCB2aWV3Qm94ID0gJ3ZpZXdCb3g9XCInICsgJzAgMCAnICsgcXJjb2Rlc2l6ZSArICcgJyArIHFyY29kZXNpemUgKyAnXCInXG5cbiAgY29uc3Qgd2lkdGggPSAhb3B0cy53aWR0aCA/ICcnIDogJ3dpZHRoPVwiJyArIG9wdHMud2lkdGggKyAnXCIgaGVpZ2h0PVwiJyArIG9wdHMud2lkdGggKyAnXCIgJ1xuXG4gIGNvbnN0IHN2Z1RhZyA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiAnICsgd2lkdGggKyB2aWV3Qm94ICsgJyBzaGFwZS1yZW5kZXJpbmc9XCJjcmlzcEVkZ2VzXCI+JyArIGJnICsgcGF0aCArICc8L3N2Zz5cXG4nXG5cbiAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNiKG51bGwsIHN2Z1RhZylcbiAgfVxuXG4gIHJldHVybiBzdmdUYWdcbn1cbiIsImZ1bmN0aW9uIGhleDJyZ2JhIChoZXgpIHtcbiAgaWYgKHR5cGVvZiBoZXggPT09ICdudW1iZXInKSB7XG4gICAgaGV4ID0gaGV4LnRvU3RyaW5nKClcbiAgfVxuXG4gIGlmICh0eXBlb2YgaGV4ICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcignQ29sb3Igc2hvdWxkIGJlIGRlZmluZWQgYXMgaGV4IHN0cmluZycpXG4gIH1cblxuICBsZXQgaGV4Q29kZSA9IGhleC5zbGljZSgpLnJlcGxhY2UoJyMnLCAnJykuc3BsaXQoJycpXG4gIGlmIChoZXhDb2RlLmxlbmd0aCA8IDMgfHwgaGV4Q29kZS5sZW5ndGggPT09IDUgfHwgaGV4Q29kZS5sZW5ndGggPiA4KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGhleCBjb2xvcjogJyArIGhleClcbiAgfVxuXG4gIC8vIENvbnZlcnQgZnJvbSBzaG9ydCB0byBsb25nIGZvcm0gKGZmZiAtPiBmZmZmZmYpXG4gIGlmIChoZXhDb2RlLmxlbmd0aCA9PT0gMyB8fCBoZXhDb2RlLmxlbmd0aCA9PT0gNCkge1xuICAgIGhleENvZGUgPSBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCBoZXhDb2RlLm1hcChmdW5jdGlvbiAoYykge1xuICAgICAgcmV0dXJuIFtjLCBjXVxuICAgIH0pKVxuICB9XG5cbiAgLy8gQWRkIGRlZmF1bHQgYWxwaGEgdmFsdWVcbiAgaWYgKGhleENvZGUubGVuZ3RoID09PSA2KSBoZXhDb2RlLnB1c2goJ0YnLCAnRicpXG5cbiAgY29uc3QgaGV4VmFsdWUgPSBwYXJzZUludChoZXhDb2RlLmpvaW4oJycpLCAxNilcblxuICByZXR1cm4ge1xuICAgIHI6IChoZXhWYWx1ZSA+PiAyNCkgJiAyNTUsXG4gICAgZzogKGhleFZhbHVlID4+IDE2KSAmIDI1NSxcbiAgICBiOiAoaGV4VmFsdWUgPj4gOCkgJiAyNTUsXG4gICAgYTogaGV4VmFsdWUgJiAyNTUsXG4gICAgaGV4OiAnIycgKyBoZXhDb2RlLnNsaWNlKDAsIDYpLmpvaW4oJycpXG4gIH1cbn1cblxuZXhwb3J0cy5nZXRPcHRpb25zID0gZnVuY3Rpb24gZ2V0T3B0aW9ucyAob3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fVxuICBpZiAoIW9wdGlvbnMuY29sb3IpIG9wdGlvbnMuY29sb3IgPSB7fVxuXG4gIGNvbnN0IG1hcmdpbiA9IHR5cGVvZiBvcHRpb25zLm1hcmdpbiA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICBvcHRpb25zLm1hcmdpbiA9PT0gbnVsbCB8fFxuICAgIG9wdGlvbnMubWFyZ2luIDwgMFxuICAgID8gNFxuICAgIDogb3B0aW9ucy5tYXJnaW5cblxuICBjb25zdCB3aWR0aCA9IG9wdGlvbnMud2lkdGggJiYgb3B0aW9ucy53aWR0aCA+PSAyMSA/IG9wdGlvbnMud2lkdGggOiB1bmRlZmluZWRcbiAgY29uc3Qgc2NhbGUgPSBvcHRpb25zLnNjYWxlIHx8IDRcblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBzY2FsZTogd2lkdGggPyA0IDogc2NhbGUsXG4gICAgbWFyZ2luOiBtYXJnaW4sXG4gICAgY29sb3I6IHtcbiAgICAgIGRhcms6IGhleDJyZ2JhKG9wdGlvbnMuY29sb3IuZGFyayB8fCAnIzAwMDAwMGZmJyksXG4gICAgICBsaWdodDogaGV4MnJnYmEob3B0aW9ucy5jb2xvci5saWdodCB8fCAnI2ZmZmZmZmZmJylcbiAgICB9LFxuICAgIHR5cGU6IG9wdGlvbnMudHlwZSxcbiAgICByZW5kZXJlck9wdHM6IG9wdGlvbnMucmVuZGVyZXJPcHRzIHx8IHt9XG4gIH1cbn1cblxuZXhwb3J0cy5nZXRTY2FsZSA9IGZ1bmN0aW9uIGdldFNjYWxlIChxclNpemUsIG9wdHMpIHtcbiAgcmV0dXJuIG9wdHMud2lkdGggJiYgb3B0cy53aWR0aCA+PSBxclNpemUgKyBvcHRzLm1hcmdpbiAqIDJcbiAgICA/IG9wdHMud2lkdGggLyAocXJTaXplICsgb3B0cy5tYXJnaW4gKiAyKVxuICAgIDogb3B0cy5zY2FsZVxufVxuXG5leHBvcnRzLmdldEltYWdlV2lkdGggPSBmdW5jdGlvbiBnZXRJbWFnZVdpZHRoIChxclNpemUsIG9wdHMpIHtcbiAgY29uc3Qgc2NhbGUgPSBleHBvcnRzLmdldFNjYWxlKHFyU2l6ZSwgb3B0cylcbiAgcmV0dXJuIE1hdGguZmxvb3IoKHFyU2l6ZSArIG9wdHMubWFyZ2luICogMikgKiBzY2FsZSlcbn1cblxuZXhwb3J0cy5xclRvSW1hZ2VEYXRhID0gZnVuY3Rpb24gcXJUb0ltYWdlRGF0YSAoaW1nRGF0YSwgcXIsIG9wdHMpIHtcbiAgY29uc3Qgc2l6ZSA9IHFyLm1vZHVsZXMuc2l6ZVxuICBjb25zdCBkYXRhID0gcXIubW9kdWxlcy5kYXRhXG4gIGNvbnN0IHNjYWxlID0gZXhwb3J0cy5nZXRTY2FsZShzaXplLCBvcHRzKVxuICBjb25zdCBzeW1ib2xTaXplID0gTWF0aC5mbG9vcigoc2l6ZSArIG9wdHMubWFyZ2luICogMikgKiBzY2FsZSlcbiAgY29uc3Qgc2NhbGVkTWFyZ2luID0gb3B0cy5tYXJnaW4gKiBzY2FsZVxuICBjb25zdCBwYWxldHRlID0gW29wdHMuY29sb3IubGlnaHQsIG9wdHMuY29sb3IuZGFya11cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN5bWJvbFNpemU7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc3ltYm9sU2l6ZTsgaisrKSB7XG4gICAgICBsZXQgcG9zRHN0ID0gKGkgKiBzeW1ib2xTaXplICsgaikgKiA0XG4gICAgICBsZXQgcHhDb2xvciA9IG9wdHMuY29sb3IubGlnaHRcblxuICAgICAgaWYgKGkgPj0gc2NhbGVkTWFyZ2luICYmIGogPj0gc2NhbGVkTWFyZ2luICYmXG4gICAgICAgIGkgPCBzeW1ib2xTaXplIC0gc2NhbGVkTWFyZ2luICYmIGogPCBzeW1ib2xTaXplIC0gc2NhbGVkTWFyZ2luKSB7XG4gICAgICAgIGNvbnN0IGlTcmMgPSBNYXRoLmZsb29yKChpIC0gc2NhbGVkTWFyZ2luKSAvIHNjYWxlKVxuICAgICAgICBjb25zdCBqU3JjID0gTWF0aC5mbG9vcigoaiAtIHNjYWxlZE1hcmdpbikgLyBzY2FsZSlcbiAgICAgICAgcHhDb2xvciA9IHBhbGV0dGVbZGF0YVtpU3JjICogc2l6ZSArIGpTcmNdID8gMSA6IDBdXG4gICAgICB9XG5cbiAgICAgIGltZ0RhdGFbcG9zRHN0KytdID0gcHhDb2xvci5yXG4gICAgICBpbWdEYXRhW3Bvc0RzdCsrXSA9IHB4Q29sb3IuZ1xuICAgICAgaW1nRGF0YVtwb3NEc3QrK10gPSBweENvbG9yLmJcbiAgICAgIGltZ0RhdGFbcG9zRHN0XSA9IHB4Q29sb3IuYVxuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IGRhcmtTdHlsZSA9IFtcclxuICB7XHJcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcclxuICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBcImNvbG9yXCI6IFwiIzI0MmYzZVwiXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgXCJjb2xvclwiOiBcIiM3NDY4NTVcIlxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuc3Ryb2tlXCIsXHJcbiAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgXCJjb2xvclwiOiBcIiMyNDJmM2VcIlxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmUubG9jYWxpdHlcIixcclxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgXCJjb2xvclwiOiBcIiNkNTk1NjNcIlxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pXCIsXHJcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAge1xyXG4gICAgICAgIFwiY29sb3JcIjogXCIjZDU5NTYzXCJcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaS5wYXJrXCIsXHJcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcclxuICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBcImNvbG9yXCI6IFwiIzI2M2MzZlwiXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2kucGFya1wiLFxyXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcclxuICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBcImNvbG9yXCI6IFwiIzZiOWE3NlwiXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkXCIsXHJcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcclxuICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBcImNvbG9yXCI6IFwiIzM4NDE0ZVwiXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkXCIsXHJcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuc3Ryb2tlXCIsXHJcbiAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgXCJjb2xvclwiOiBcIiMyMTJhMzdcIlxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLFxyXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcclxuICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBcImNvbG9yXCI6IFwiIzljYTViM1wiXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXlcIixcclxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxyXG4gICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAge1xyXG4gICAgICAgIFwiY29sb3JcIjogXCIjNzQ2ODU1XCJcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxyXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LnN0cm9rZVwiLFxyXG4gICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAge1xyXG4gICAgICAgIFwiY29sb3JcIjogXCIjMWYyODM1XCJcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxyXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcclxuICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBcImNvbG9yXCI6IFwiI2YzZDE5Y1wiXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ0cmFuc2l0XCIsXHJcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcclxuICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBcImNvbG9yXCI6IFwiIzJmMzk0OFwiXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ0cmFuc2l0LnN0YXRpb25cIixcclxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgXCJjb2xvclwiOiBcIiNkNTk1NjNcIlxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwid2F0ZXJcIixcclxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxyXG4gICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAge1xyXG4gICAgICAgIFwiY29sb3JcIjogXCIjMTcyNjNjXCJcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsXHJcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAge1xyXG4gICAgICAgIFwiY29sb3JcIjogXCIjNTE1YzZkXCJcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsXHJcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuc3Ryb2tlXCIsXHJcbiAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgXCJjb2xvclwiOiBcIiMxNzI2M2NcIlxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfVxyXG5dIiwiaW1wb3J0ICogYXMgaTAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIsIENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRvRGF0YVVSTCwgdG9DYW52YXMsIHRvU3RyaW5nIH0gZnJvbSAncXJjb2RlJztcbmltcG9ydCAqIGFzIGkxIGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5jbGFzcyBRUkNvZGVDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHJlbmRlcmVyLCBzYW5pdGl6ZXIpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgICAgICB0aGlzLnNhbml0aXplciA9IHNhbml0aXplcjtcbiAgICAgICAgdGhpcy5hbGxvd0VtcHR5U3RyaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29sb3JEYXJrID0gXCIjMDAwMDAwZmZcIjtcbiAgICAgICAgdGhpcy5jb2xvckxpZ2h0ID0gXCIjZmZmZmZmZmZcIjtcbiAgICAgICAgdGhpcy5jc3NDbGFzcyA9IFwicXJjb2RlXCI7XG4gICAgICAgIHRoaXMuZWxlbWVudFR5cGUgPSBcImNhbnZhc1wiO1xuICAgICAgICB0aGlzLmVycm9yQ29ycmVjdGlvbkxldmVsID0gXCJNXCI7XG4gICAgICAgIHRoaXMubWFyZ2luID0gNDtcbiAgICAgICAgdGhpcy5xcmRhdGEgPSBcIlwiO1xuICAgICAgICB0aGlzLnNjYWxlID0gNDtcbiAgICAgICAgdGhpcy53aWR0aCA9IDEwO1xuICAgICAgICB0aGlzLnFyQ29kZVVSTCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gbnVsbDtcbiAgICB9XG4gICAgYXN5bmMgbmdPbkNoYW5nZXMoKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuY3JlYXRlUVJDb2RlKCk7XG4gICAgfVxuICAgIGlzVmFsaWRRckNvZGVUZXh0KGRhdGEpIHtcbiAgICAgICAgaWYgKHRoaXMuYWxsb3dFbXB0eVN0cmluZyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiAhKHR5cGVvZiBkYXRhID09PSBcInVuZGVmaW5lZFwiIHx8XG4gICAgICAgICAgICAgICAgZGF0YSA9PT0gXCJcIiB8fFxuICAgICAgICAgICAgICAgIGRhdGEgPT09IFwibnVsbFwiIHx8XG4gICAgICAgICAgICAgICAgZGF0YSA9PT0gbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICEodHlwZW9mIGRhdGEgPT09IFwidW5kZWZpbmVkXCIpO1xuICAgIH1cbiAgICB0b0RhdGFVUkwocXJDb2RlQ29uZmlnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0b0RhdGFVUkwodGhpcy5xcmRhdGEsIHFyQ29kZUNvbmZpZywgKGVyciwgdXJsKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodXJsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHRvQ2FudmFzKGNhbnZhcywgcXJDb2RlQ29uZmlnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0b0NhbnZhcyhjYW52YXMsIHRoaXMucXJkYXRhLCBxckNvZGVDb25maWcsIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShcInN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB0b1NWRyhxckNvZGVDb25maWcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRvU3RyaW5nKHRoaXMucXJkYXRhLCBxckNvZGVDb25maWcsIChlcnIsIHVybCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHVybCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW5kZXJFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIHRoaXMucXJjRWxlbWVudC5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXMpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5xcmNFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIG5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5xcmNFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGVsZW1lbnQpO1xuICAgIH1cbiAgICBhc3luYyBjcmVhdGVRUkNvZGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnZlcnNpb24gJiYgdGhpcy52ZXJzaW9uID4gNDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlthbmd1bGFyeC1xcmNvZGVdIG1heCB2YWx1ZSBmb3IgYHZlcnNpb25gIGlzIDQwXCIpO1xuICAgICAgICAgICAgdGhpcy52ZXJzaW9uID0gNDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy52ZXJzaW9uICYmIHRoaXMudmVyc2lvbiA8IDEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlthbmd1bGFyeC1xcmNvZGVdYG1pbiB2YWx1ZSBmb3IgYHZlcnNpb25gIGlzIDFcIik7XG4gICAgICAgICAgICB0aGlzLnZlcnNpb24gPSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMudmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIGlzTmFOKHRoaXMudmVyc2lvbikpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlthbmd1bGFyeC1xcmNvZGVdIHZlcnNpb24gc2hvdWxkIGJlIGEgbnVtYmVyLCBkZWZhdWx0aW5nIHRvIGF1dG8uXCIpO1xuICAgICAgICAgICAgdGhpcy52ZXJzaW9uID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZFFyQ29kZVRleHQodGhpcy5xcmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiW2FuZ3VsYXJ4LXFyY29kZV0gRmllbGQgYHFyZGF0YWAgaXMgZW1wdHksIHNldCAnYWxsb3dFbXB0eVN0cmluZz1cXFwidHJ1ZVxcXCInIHRvIG92ZXJ3cml0ZSB0aGlzIGJlaGF2aW91ci5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkUXJDb2RlVGV4dCh0aGlzLnFyZGF0YSkgJiYgdGhpcy5xcmRhdGEgPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnFyZGF0YSA9IFwiIFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgICAgIGRhcms6IHRoaXMuY29sb3JEYXJrLFxuICAgICAgICAgICAgICAgICAgICBsaWdodDogdGhpcy5jb2xvckxpZ2h0LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JDb3JyZWN0aW9uTGV2ZWw6IHRoaXMuZXJyb3JDb3JyZWN0aW9uTGV2ZWwsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiB0aGlzLm1hcmdpbixcbiAgICAgICAgICAgICAgICBzY2FsZTogdGhpcy5zY2FsZSxcbiAgICAgICAgICAgICAgICB2ZXJzaW9uOiB0aGlzLnZlcnNpb24sXG4gICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgY2VudGVySW1hZ2VTcmMgPSB0aGlzLmltYWdlU3JjO1xuICAgICAgICAgICAgY29uc3QgY2VudGVySW1hZ2VIZWlnaHQgPSB0aGlzLmltYWdlSGVpZ2h0IHx8IDQwO1xuICAgICAgICAgICAgY29uc3QgY2VudGVySW1hZ2VXaWR0aCA9IHRoaXMuaW1hZ2VXaWR0aCB8fCA0MDtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5lbGVtZW50VHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJjYW52YXNcIjoge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYW52YXNFbGVtZW50ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQgPSBjYW52YXNFbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b0NhbnZhcyhjYW52YXNFbGVtZW50LCBjb25maWcpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hcmlhTGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShjYW52YXNFbGVtZW50LCBcImFyaWEtbGFiZWxcIiwgYCR7dGhpcy5hcmlhTGFiZWx9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50aXRsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGNhbnZhc0VsZW1lbnQsIFwidGl0bGVcIiwgYCR7dGhpcy50aXRsZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjZW50ZXJJbWFnZVNyYyAmJiB0aGlzLmNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNlbnRlckltYWdlID0gbmV3IEltYWdlKGNlbnRlckltYWdlV2lkdGgsIGNlbnRlckltYWdlSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2VudGVySW1hZ2VTcmMgIT09IHRoaXMuY2VudGVySW1hZ2Uuc3JjKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2VudGVySW1hZ2Uuc3JjID0gY2VudGVySW1hZ2VTcmM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjZW50ZXJJbWFnZUhlaWdodCAhPT0gdGhpcy5jZW50ZXJJbWFnZS5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jZW50ZXJJbWFnZS5oZWlnaHQgPSBjZW50ZXJJbWFnZUhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNlbnRlckltYWdlV2lkdGggIT09IHRoaXMuY2VudGVySW1hZ2Uud2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jZW50ZXJJbWFnZS53aWR0aCA9IGNlbnRlckltYWdlV2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlbnRlckltYWdlID0gdGhpcy5jZW50ZXJJbWFnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2VudGVySW1hZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVySW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0Py5kcmF3SW1hZ2UoY2VudGVySW1hZ2UsIGNhbnZhc0VsZW1lbnQud2lkdGggLyAyIC0gY2VudGVySW1hZ2VXaWR0aCAvIDIsIGNhbnZhc0VsZW1lbnQuaGVpZ2h0IC8gMiAtIGNlbnRlckltYWdlSGVpZ2h0IC8gMiwgY2VudGVySW1hZ2VXaWR0aCwgY2VudGVySW1hZ2VIZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyRWxlbWVudChjYW52YXNFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdFFSQ29kZVVSTChjYW52YXNFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlthbmd1bGFyeC1xcmNvZGVdIGNhbnZhcyBlcnJvcjpcIiwgZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBcInN2Z1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN2Z1BhcmVudEVsZW1lbnQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9TVkcoY29uZmlnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHN2Z1N0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eShzdmdQYXJlbnRFbGVtZW50LCBcImlubmVySFRNTFwiLCBzdmdTdHJpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3ZnRWxlbWVudCA9IHN2Z1BhcmVudEVsZW1lbnQuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHN2Z0VsZW1lbnQsIFwiaGVpZ2h0XCIsIGAke3RoaXMud2lkdGh9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmdFbGVtZW50LCBcIndpZHRoXCIsIGAke3RoaXMud2lkdGh9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckVsZW1lbnQoc3ZnRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRRUkNvZGVVUkwoc3ZnRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbYW5ndWxhcngtcXJjb2RlXSBzdmcgZXJyb3I6XCIsIGUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgXCJ1cmxcIjpcbiAgICAgICAgICAgICAgICBjYXNlIFwiaW1nXCI6XG4gICAgICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWdFbGVtZW50ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvRGF0YVVSTChjb25maWcpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoZGF0YVVybCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgdGhpcy5hbHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYXJpYUxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIHRoaXMuYXJpYUxhYmVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ0VsZW1lbnQuc2V0QXR0cmlidXRlKFwic3JjXCIsIGRhdGFVcmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdFbGVtZW50LnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIHRoaXMudGl0bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJFbGVtZW50KGltZ0VsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0UVJDb2RlVVJMKGltZ0VsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiW2FuZ3VsYXJ4LXFyY29kZV0gaW1nL3VybCBlcnJvcjpcIiwgZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlthbmd1bGFyeC1xcmNvZGVdIEVycm9yIGdlbmVyYXRpbmcgUVIgQ29kZTpcIiwgZS5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbWl0UVJDb2RlVVJMKGVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gZWxlbWVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgICAgICBpZiAoY2xhc3NOYW1lID09PSBTVkdTVkdFbGVtZW50Lm5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHN2Z0hUTUwgPSBlbGVtZW50Lm91dGVySFRNTDtcbiAgICAgICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbc3ZnSFRNTF0sIHsgdHlwZTogXCJpbWFnZS9zdmcreG1sXCIgfSk7XG4gICAgICAgICAgICBjb25zdCB1cmxTdmcgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICAgICAgY29uc3QgdXJsU2FuaXRpemVkID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFVybCh1cmxTdmcpO1xuICAgICAgICAgICAgdGhpcy5xckNvZGVVUkwuZW1pdCh1cmxTYW5pdGl6ZWQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCB1cmxJbWFnZSA9IFwiXCI7XG4gICAgICAgIGlmIChjbGFzc05hbWUgPT09IEhUTUxDYW52YXNFbGVtZW50Lm5hbWUpIHtcbiAgICAgICAgICAgIHVybEltYWdlID0gZWxlbWVudC50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNsYXNzTmFtZSA9PT0gSFRNTEltYWdlRWxlbWVudC5uYW1lKSB7XG4gICAgICAgICAgICB1cmxJbWFnZSA9IGVsZW1lbnQuc3JjO1xuICAgICAgICB9XG4gICAgICAgIGZldGNoKHVybEltYWdlKVxuICAgICAgICAgICAgLnRoZW4oKHVybFJlc3BvbnNlKSA9PiB1cmxSZXNwb25zZS5ibG9iKCkpXG4gICAgICAgICAgICAudGhlbigoYmxvYikgPT4gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSlcbiAgICAgICAgICAgIC50aGVuKCh1cmwpID0+IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RVcmwodXJsKSlcbiAgICAgICAgICAgIC50aGVuKCh1cmxTYW5pdGl6ZWQpID0+IHtcbiAgICAgICAgICAgIHRoaXMucXJDb2RlVVJMLmVtaXQodXJsU2FuaXRpemVkKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbYW5ndWxhcngtcXJjb2RlXSBFcnJvciB3aGVuIGZldGNoaW5nIGltYWdlL3BuZyBVUkw6IFwiICsgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIHsgdGhpcy7JtWZhYyA9IGkwLsm1ybVuZ0RlY2xhcmVGYWN0b3J5KHsgbWluVmVyc2lvbjogXCIxMi4wLjBcIiwgdmVyc2lvbjogXCIxNi4wLjBcIiwgbmdJbXBvcnQ6IGkwLCB0eXBlOiBRUkNvZGVDb21wb25lbnQsIGRlcHM6IFt7IHRva2VuOiBpMC5SZW5kZXJlcjIgfSwgeyB0b2tlbjogaTEuRG9tU2FuaXRpemVyIH1dLCB0YXJnZXQ6IGkwLsm1ybVGYWN0b3J5VGFyZ2V0LkNvbXBvbmVudCB9KTsgfVxuICAgIHN0YXRpYyB7IHRoaXMuybVjbXAgPSBpMC7Jtcm1bmdEZWNsYXJlQ29tcG9uZW50KHsgbWluVmVyc2lvbjogXCIxNC4wLjBcIiwgdmVyc2lvbjogXCIxNi4wLjBcIiwgdHlwZTogUVJDb2RlQ29tcG9uZW50LCBzZWxlY3RvcjogXCJxcmNvZGVcIiwgaW5wdXRzOiB7IGFsbG93RW1wdHlTdHJpbmc6IFwiYWxsb3dFbXB0eVN0cmluZ1wiLCBjb2xvckRhcms6IFwiY29sb3JEYXJrXCIsIGNvbG9yTGlnaHQ6IFwiY29sb3JMaWdodFwiLCBjc3NDbGFzczogXCJjc3NDbGFzc1wiLCBlbGVtZW50VHlwZTogXCJlbGVtZW50VHlwZVwiLCBlcnJvckNvcnJlY3Rpb25MZXZlbDogXCJlcnJvckNvcnJlY3Rpb25MZXZlbFwiLCBpbWFnZVNyYzogXCJpbWFnZVNyY1wiLCBpbWFnZUhlaWdodDogXCJpbWFnZUhlaWdodFwiLCBpbWFnZVdpZHRoOiBcImltYWdlV2lkdGhcIiwgbWFyZ2luOiBcIm1hcmdpblwiLCBxcmRhdGE6IFwicXJkYXRhXCIsIHNjYWxlOiBcInNjYWxlXCIsIHZlcnNpb246IFwidmVyc2lvblwiLCB3aWR0aDogXCJ3aWR0aFwiLCBhbHQ6IFwiYWx0XCIsIGFyaWFMYWJlbDogXCJhcmlhTGFiZWxcIiwgdGl0bGU6IFwidGl0bGVcIiB9LCBvdXRwdXRzOiB7IHFyQ29kZVVSTDogXCJxckNvZGVVUkxcIiB9LCB2aWV3UXVlcmllczogW3sgcHJvcGVydHlOYW1lOiBcInFyY0VsZW1lbnRcIiwgZmlyc3Q6IHRydWUsIHByZWRpY2F0ZTogW1wicXJjRWxlbWVudFwiXSwgZGVzY2VuZGFudHM6IHRydWUsIHN0YXRpYzogdHJ1ZSB9XSwgdXNlc09uQ2hhbmdlczogdHJ1ZSwgbmdJbXBvcnQ6IGkwLCB0ZW1wbGF0ZTogYDxkaXYgI3FyY0VsZW1lbnQgW2NsYXNzXT1cImNzc0NsYXNzXCI+PC9kaXY+YCwgaXNJbmxpbmU6IHRydWUsIGNoYW5nZURldGVjdGlvbjogaTAuQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoIH0pOyB9XG59XG5pMC7Jtcm1bmdEZWNsYXJlQ2xhc3NNZXRhZGF0YSh7IG1pblZlcnNpb246IFwiMTIuMC4wXCIsIHZlcnNpb246IFwiMTYuMC4wXCIsIG5nSW1wb3J0OiBpMCwgdHlwZTogUVJDb2RlQ29tcG9uZW50LCBkZWNvcmF0b3JzOiBbe1xuICAgICAgICAgICAgdHlwZTogQ29tcG9uZW50LFxuICAgICAgICAgICAgYXJnczogW3tcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IFwicXJjb2RlXCIsXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogYDxkaXYgI3FyY0VsZW1lbnQgW2NsYXNzXT1cImNzc0NsYXNzXCI+PC9kaXY+YCxcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICB9XSwgY3RvclBhcmFtZXRlcnM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFt7IHR5cGU6IGkwLlJlbmRlcmVyMiB9LCB7IHR5cGU6IGkxLkRvbVNhbml0aXplciB9XTsgfSwgcHJvcERlY29yYXRvcnM6IHsgYWxsb3dFbXB0eVN0cmluZzogW3tcbiAgICAgICAgICAgICAgICB0eXBlOiBJbnB1dFxuICAgICAgICAgICAgfV0sIGNvbG9yRGFyazogW3tcbiAgICAgICAgICAgICAgICB0eXBlOiBJbnB1dFxuICAgICAgICAgICAgfV0sIGNvbG9yTGlnaHQ6IFt7XG4gICAgICAgICAgICAgICAgdHlwZTogSW5wdXRcbiAgICAgICAgICAgIH1dLCBjc3NDbGFzczogW3tcbiAgICAgICAgICAgICAgICB0eXBlOiBJbnB1dFxuICAgICAgICAgICAgfV0sIGVsZW1lbnRUeXBlOiBbe1xuICAgICAgICAgICAgICAgIHR5cGU6IElucHV0XG4gICAgICAgICAgICB9XSwgZXJyb3JDb3JyZWN0aW9uTGV2ZWw6IFt7XG4gICAgICAgICAgICAgICAgdHlwZTogSW5wdXRcbiAgICAgICAgICAgIH1dLCBpbWFnZVNyYzogW3tcbiAgICAgICAgICAgICAgICB0eXBlOiBJbnB1dFxuICAgICAgICAgICAgfV0sIGltYWdlSGVpZ2h0OiBbe1xuICAgICAgICAgICAgICAgIHR5cGU6IElucHV0XG4gICAgICAgICAgICB9XSwgaW1hZ2VXaWR0aDogW3tcbiAgICAgICAgICAgICAgICB0eXBlOiBJbnB1dFxuICAgICAgICAgICAgfV0sIG1hcmdpbjogW3tcbiAgICAgICAgICAgICAgICB0eXBlOiBJbnB1dFxuICAgICAgICAgICAgfV0sIHFyZGF0YTogW3tcbiAgICAgICAgICAgICAgICB0eXBlOiBJbnB1dFxuICAgICAgICAgICAgfV0sIHNjYWxlOiBbe1xuICAgICAgICAgICAgICAgIHR5cGU6IElucHV0XG4gICAgICAgICAgICB9XSwgdmVyc2lvbjogW3tcbiAgICAgICAgICAgICAgICB0eXBlOiBJbnB1dFxuICAgICAgICAgICAgfV0sIHdpZHRoOiBbe1xuICAgICAgICAgICAgICAgIHR5cGU6IElucHV0XG4gICAgICAgICAgICB9XSwgYWx0OiBbe1xuICAgICAgICAgICAgICAgIHR5cGU6IElucHV0XG4gICAgICAgICAgICB9XSwgYXJpYUxhYmVsOiBbe1xuICAgICAgICAgICAgICAgIHR5cGU6IElucHV0XG4gICAgICAgICAgICB9XSwgdGl0bGU6IFt7XG4gICAgICAgICAgICAgICAgdHlwZTogSW5wdXRcbiAgICAgICAgICAgIH1dLCBxckNvZGVVUkw6IFt7XG4gICAgICAgICAgICAgICAgdHlwZTogT3V0cHV0XG4gICAgICAgICAgICB9XSwgcXJjRWxlbWVudDogW3tcbiAgICAgICAgICAgICAgICB0eXBlOiBWaWV3Q2hpbGQsXG4gICAgICAgICAgICAgICAgYXJnczogW1wicXJjRWxlbWVudFwiLCB7IHN0YXRpYzogdHJ1ZSB9XVxuICAgICAgICAgICAgfV0gfSB9KTtcblxuY2xhc3MgUVJDb2RlTW9kdWxlIHtcbiAgICBzdGF0aWMgeyB0aGlzLsm1ZmFjID0gaTAuybXJtW5nRGVjbGFyZUZhY3RvcnkoeyBtaW5WZXJzaW9uOiBcIjEyLjAuMFwiLCB2ZXJzaW9uOiBcIjE2LjAuMFwiLCBuZ0ltcG9ydDogaTAsIHR5cGU6IFFSQ29kZU1vZHVsZSwgZGVwczogW10sIHRhcmdldDogaTAuybXJtUZhY3RvcnlUYXJnZXQuTmdNb2R1bGUgfSk7IH1cbiAgICBzdGF0aWMgeyB0aGlzLsm1bW9kID0gaTAuybXJtW5nRGVjbGFyZU5nTW9kdWxlKHsgbWluVmVyc2lvbjogXCIxNC4wLjBcIiwgdmVyc2lvbjogXCIxNi4wLjBcIiwgbmdJbXBvcnQ6IGkwLCB0eXBlOiBRUkNvZGVNb2R1bGUsIGRlY2xhcmF0aW9uczogW1FSQ29kZUNvbXBvbmVudF0sIGV4cG9ydHM6IFtRUkNvZGVDb21wb25lbnRdIH0pOyB9XG4gICAgc3RhdGljIHsgdGhpcy7JtWluaiA9IGkwLsm1ybVuZ0RlY2xhcmVJbmplY3Rvcih7IG1pblZlcnNpb246IFwiMTIuMC4wXCIsIHZlcnNpb246IFwiMTYuMC4wXCIsIG5nSW1wb3J0OiBpMCwgdHlwZTogUVJDb2RlTW9kdWxlIH0pOyB9XG59XG5pMC7Jtcm1bmdEZWNsYXJlQ2xhc3NNZXRhZGF0YSh7IG1pblZlcnNpb246IFwiMTIuMC4wXCIsIHZlcnNpb246IFwiMTYuMC4wXCIsIG5nSW1wb3J0OiBpMCwgdHlwZTogUVJDb2RlTW9kdWxlLCBkZWNvcmF0b3JzOiBbe1xuICAgICAgICAgICAgdHlwZTogTmdNb2R1bGUsXG4gICAgICAgICAgICBhcmdzOiBbe1xuICAgICAgICAgICAgICAgICAgICBwcm92aWRlcnM6IFtdLFxuICAgICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnM6IFtRUkNvZGVDb21wb25lbnRdLFxuICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiBbUVJDb2RlQ29tcG9uZW50XSxcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICB9XSB9KTtcblxuZXhwb3J0IHsgUVJDb2RlQ29tcG9uZW50LCBRUkNvZGVNb2R1bGUgfTtcbiJdLCJuYW1lcyI6WyJQb3BvdmVyQ29udHJvbGxlciIsIlBvcG92ZXJQYWdlIiwiY29uc3RydWN0b3IiLCJwb3BvdmVyQ3RybCIsInN1cHBvcnQiLCJkaXNtaXNzIiwiY2xvc2UiLCJ1cmwiLCJ3aW5kb3ciLCJvcGVuIiwiaTAiLCLJtcm1ZGlyZWN0aXZlSW5qZWN0IiwiaTEiLCJzZWxlY3RvcnMiLCJkZWNscyIsInZhcnMiLCJjb25zdHMiLCJ0ZW1wbGF0ZSIsIlBvcG92ZXJQYWdlX1RlbXBsYXRlIiwicmYiLCJjdHgiLCLJtcm1ZWxlbWVudFN0YXJ0IiwiybXJtWxpc3RlbmVyIiwiUG9wb3ZlclBhZ2VfVGVtcGxhdGVfaW9uX2l0ZW1fY2xpY2tfMV9saXN0ZW5lciIsIsm1ybV0ZXh0IiwiybXJtWVsZW1lbnRFbmQiLCJQb3BvdmVyUGFnZV9UZW1wbGF0ZV9pb25faXRlbV9jbGlja180X2xpc3RlbmVyIiwiUG9wb3ZlclBhZ2VfVGVtcGxhdGVfaW9uX2l0ZW1fY2xpY2tfN19saXN0ZW5lciIsIlBvcG92ZXJQYWdlX1RlbXBsYXRlX2lvbl9pdGVtX2NsaWNrXzEwX2xpc3RlbmVyIiwiUG9wb3ZlclBhZ2VfVGVtcGxhdGVfaW9uX2l0ZW1fY2xpY2tfMTNfbGlzdGVuZXIiLCJSb3V0ZXJNb2R1bGUiLCJBYm91dFBhZ2UiLCJyb3V0ZXMiLCJwYXRoIiwiY29tcG9uZW50IiwiQWJvdXRQYWdlUm91dGluZ01vZHVsZSIsImZvckNoaWxkIiwiaW1wb3J0cyIsImV4cG9ydHMiLCJDb21tb25Nb2R1bGUiLCJGb3Jtc01vZHVsZSIsIklvbmljTW9kdWxlIiwiQWJvdXRNb2R1bGUiLCJib290c3RyYXAiLCJkZWNsYXJhdGlvbnMiLCJBYm91dFBhZ2VfbmdfdGVtcGxhdGVfMzhfVGVtcGxhdGVfaW9uX2RhdGV0aW1lX25nTW9kZWxDaGFuZ2VfMF9saXN0ZW5lciIsIiRldmVudCIsIsm1ybVyZXN0b3JlVmlldyIsIl9yMiIsImN0eF9yMSIsIsm1ybVuZXh0Q29udGV4dCIsIsm1ybVyZXNldFZpZXciLCJjb25mZXJlbmNlRGF0ZSIsIsm1ybVwcm9wZXJ0eSIsImN0eF9yMCIsImxvY2F0aW9uIiwic2VsZWN0T3B0aW9ucyIsImhlYWRlciIsInByZXNlbnRQb3BvdmVyIiwiZXZlbnQiLCJfdGhpcyIsIl9hc3luY1RvR2VuZXJhdG9yIiwicG9wb3ZlciIsImNyZWF0ZSIsInByZXNlbnQiLCJBYm91dFBhZ2VfVGVtcGxhdGUiLCLJtcm1ZWxlbWVudCIsIkFib3V0UGFnZV9UZW1wbGF0ZV9pb25fYnV0dG9uX2NsaWNrXzZfbGlzdGVuZXIiLCJBYm91dFBhZ2VfVGVtcGxhdGVfaW9uX3NlbGVjdF9uZ01vZGVsQ2hhbmdlXzIyX2xpc3RlbmVyIiwiybXJtXRlbXBsYXRlIiwiQWJvdXRQYWdlX25nX3RlbXBsYXRlXzM4X1RlbXBsYXRlIiwiybXJtWFkdmFuY2UiLCLJtcm1cHVyZUZ1bmN0aW9uMCIsIl9jMCIsIsm1ybV0ZXh0SW50ZXJwb2xhdGUiLCLJtcm1cGlwZUJpbmQyIiwiybXJtXRleHRJbnRlcnBvbGF0ZTEiLCJNYXBQYWdlIiwiTWFwUGFnZVJvdXRpbmdNb2R1bGUiLCJNYXBNb2R1bGUiLCJFbGVtZW50UmVmIiwiQ29uZmVyZW5jZURhdGEiLCJQbGF0Zm9ybSIsIkRPQ1VNRU5UIiwiZGFya1N0eWxlIiwiZG9jIiwiY29uZkRhdGEiLCJwbGF0Zm9ybSIsIm5nQWZ0ZXJWaWV3SW5pdCIsImFwcEVsIiwicXVlcnlTZWxlY3RvciIsImlzRGFyayIsInN0eWxlIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJnb29nbGVNYXBzIiwiZ2V0R29vZ2xlTWFwcyIsIm1hcCIsImdldE1hcCIsInN1YnNjcmliZSIsIm1hcERhdGEiLCJtYXBFbGUiLCJtYXBFbGVtZW50IiwibmF0aXZlRWxlbWVudCIsIk1hcCIsImNlbnRlciIsImZpbmQiLCJkIiwiem9vbSIsInN0eWxlcyIsImZvckVhY2giLCJtYXJrZXJEYXRhIiwiaW5mb1dpbmRvdyIsIkluZm9XaW5kb3ciLCJjb250ZW50IiwibmFtZSIsIm1hcmtlciIsIk1hcmtlciIsInBvc2l0aW9uIiwidGl0bGUiLCJhZGRMaXN0ZW5lciIsImFkZExpc3RlbmVyT25jZSIsImFkZCIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsIm11dGF0aW9uIiwiYXR0cmlidXRlTmFtZSIsImVsIiwidGFyZ2V0Iiwic2V0T3B0aW9ucyIsIm9ic2VydmUiLCJhdHRyaWJ1dGVzIiwiaTIiLCJ2aWV3UXVlcnkiLCJNYXBQYWdlX1F1ZXJ5IiwiYXBpS2V5Iiwid2luIiwiZ29vZ2xlTW9kdWxlIiwiZ29vZ2xlIiwibWFwcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2NyaXB0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiYXN5bmMiLCJkZWZlciIsImJvZHkiLCJhcHBlbmRDaGlsZCIsIm9ubG9hZCIsImdvb2dsZU1vZHVsZTIiLCJTY2FubmVyUGFnZSIsIlNjYW5uZXJQYWdlUm91dGluZ01vZHVsZSIsIlFSQ29kZU1vZHVsZSIsIlNjYW5uZXJNb2R1bGUiLCJCYXJjb2RlU2Nhbm5lciIsInNjYW5uZWRSZXN1bHQiLCJxckNvZGVTdHJpbmciLCJjb250ZW50X3Zpc2liaWxpdHkiLCJjaGVja1Blcm1pc3Npb24iLCJzdGF0dXMiLCJmb3JjZSIsImdyYW50ZWQiLCJlIiwiY29uc29sZSIsImxvZyIsInN0YXJ0U2NhbiIsInBlcm1pc3Npb24iLCJoaWRlQmFja2dyb3VuZCIsInJlc3VsdCIsInNob3dCYWNrZ3JvdW5kIiwicmVtb3ZlIiwiaGFzQ29udGVudCIsInN0b3BTY2FuIiwibmdPbkRlc3Ryb3kiLCJTY2FubmVyUGFnZV9UZW1wbGF0ZSIsIlNjYW5uZXJQYWdlX1RlbXBsYXRlX2lvbl9idXR0b25fY2xpY2tfOV9saXN0ZW5lciIsIlNjYW5uZXJQYWdlX2lvbl9pdGVtXzEyX1RlbXBsYXRlIiwiU2Nhbm5lclBhZ2VfVGVtcGxhdGVfaW9uX2J1dHRvbl9jbGlja18xNV9saXN0ZW5lciIsIsm1ybVzdHlsZVByb3AiLCJTZXNzaW9uRGV0YWlsUGFnZSIsIlNlc3Npb25EZXRhaWxQYWdlUm91dGluZ01vZHVsZSIsIlNlc3Npb25EZXRhaWxNb2R1bGUiLCJBY3RpdmF0ZWRSb3V0ZSIsIlVzZXJEYXRhIiwiybXJtWNsYXNzTWFwIiwidHJhY2tfcjQiLCJ0b0xvd2VyQ2FzZSIsIlNlc3Npb25EZXRhaWxQYWdlX2Rpdl8xMV9zcGFuXzNfVGVtcGxhdGUiLCJjdHhfcjIiLCJzZXNzaW9uIiwidHJhY2tzIiwiZGVzY3JpcHRpb24iLCLJtcm1dGV4dEludGVycG9sYXRlMiIsInRpbWVTdGFydCIsInRpbWVFbmQiLCJkYXRhUHJvdmlkZXIiLCJ1c2VyUHJvdmlkZXIiLCJyb3V0ZSIsImlzRmF2b3JpdGUiLCJkZWZhdWx0SHJlZiIsImlvblZpZXdXaWxsRW50ZXIiLCJsb2FkIiwiZGF0YSIsInNjaGVkdWxlIiwiZ3JvdXBzIiwic2Vzc2lvbklkIiwic25hcHNob3QiLCJwYXJhbU1hcCIsImdldCIsImdyb3VwIiwic2Vzc2lvbnMiLCJpZCIsImhhc0Zhdm9yaXRlIiwiaW9uVmlld0RpZEVudGVyIiwic2Vzc2lvbkNsaWNrIiwiaXRlbSIsInRvZ2dsZUZhdm9yaXRlIiwicmVtb3ZlRmF2b3JpdGUiLCJhZGRGYXZvcml0ZSIsInNoYXJlU2Vzc2lvbiIsImkzIiwiU2Vzc2lvbkRldGFpbFBhZ2VfVGVtcGxhdGUiLCJTZXNzaW9uRGV0YWlsUGFnZV9UZW1wbGF0ZV9pb25fYnV0dG9uX2NsaWNrXzVfbGlzdGVuZXIiLCJTZXNzaW9uRGV0YWlsUGFnZV9pb25faWNvbl82X1RlbXBsYXRlIiwiU2Vzc2lvbkRldGFpbFBhZ2VfaW9uX2ljb25fN19UZW1wbGF0ZSIsIlNlc3Npb25EZXRhaWxQYWdlX1RlbXBsYXRlX2lvbl9idXR0b25fY2xpY2tfOF9saXN0ZW5lciIsIlNlc3Npb25EZXRhaWxQYWdlX2Rpdl8xMV9UZW1wbGF0ZSIsIlNlc3Npb25EZXRhaWxQYWdlX1RlbXBsYXRlX2lvbl9pdGVtX2NsaWNrXzEzX2xpc3RlbmVyIiwiU2Vzc2lvbkRldGFpbFBhZ2VfVGVtcGxhdGVfaW9uX2l0ZW1fY2xpY2tfMTZfbGlzdGVuZXIiLCJTZXNzaW9uRGV0YWlsUGFnZV9UZW1wbGF0ZV9pb25faXRlbV9jbGlja18xOV9saXN0ZW5lciIsIlNlc3Npb25EZXRhaWxQYWdlX1RlbXBsYXRlX2lvbl9pdGVtX2NsaWNrXzIyX2xpc3RlbmVyIiwiU2Vzc2lvbkRldGFpbFBhZ2VfVGVtcGxhdGVfaW9uX2l0ZW1fY2xpY2tfMjZfbGlzdGVuZXIiLCJTcGVha2VyRGV0YWlsUGFnZSIsIlNwZWFrZXJEZXRhaWxQYWdlUm91dGluZ01vZHVsZSIsIlNwZWFrZXJEZXRhaWxNb2R1bGUiLCJBY3Rpb25TaGVldENvbnRyb2xsZXIiLCJJbkFwcEJyb3dzZXIiLCJTcGVha2VyRGV0YWlsUGFnZV9pb25fYnV0dG9uc181X1RlbXBsYXRlX2lvbl9idXR0b25fY2xpY2tfMV9saXN0ZW5lciIsIm9wZW5Db250YWN0Iiwic3BlYWtlciIsIlNwZWFrZXJEZXRhaWxQYWdlX2lvbl9idXR0b25zXzVfVGVtcGxhdGVfaW9uX2J1dHRvbl9jbGlja18zX2xpc3RlbmVyIiwiY3R4X3IzIiwib3BlblNwZWFrZXJTaGFyZSIsImFjdGlvblNoZWV0Q3RybCIsImluQXBwQnJvd3NlciIsInNwZWFrZXJJZCIsInNwZWFrZXJzIiwib3BlbkV4dGVybmFsVXJsIiwiYWN0aW9uU2hlZXQiLCJidXR0b25zIiwidGV4dCIsImhhbmRsZXIiLCJ0d2l0dGVyIiwiY29yZG92YSIsInBsdWdpbnMiLCJjbGlwYm9hcmQiLCJjb3B5Iiwicm9sZSIsIl90aGlzMiIsIm1vZGUiLCJlbWFpbCIsImljb24iLCJwaG9uZSIsImk0IiwiU3BlYWtlckRldGFpbFBhZ2VfVGVtcGxhdGUiLCJTcGVha2VyRGV0YWlsUGFnZV9pb25fYnV0dG9uc181X1RlbXBsYXRlIiwiU3BlYWtlckRldGFpbFBhZ2VfVGVtcGxhdGVfaW9uX2NoaXBfY2xpY2tfMTRfbGlzdGVuZXIiLCJTcGVha2VyRGV0YWlsUGFnZV9UZW1wbGF0ZV9pb25fY2hpcF9jbGlja18xOF9saXN0ZW5lciIsIlNwZWFrZXJEZXRhaWxQYWdlX1RlbXBsYXRlX2lvbl9jaGlwX2NsaWNrXzIyX2xpc3RlbmVyIiwicHJvZmlsZVBpYyIsIsm1ybVzYW5pdGl6ZVVybCIsImFib3V0IiwiU3BlYWtlckxpc3RQYWdlIiwiU3BlYWtlckxpc3RQYWdlUm91dGluZ01vZHVsZSIsIlNwZWFrZXJMaXN0TW9kdWxlIiwiybXJtXByb3BlcnR5SW50ZXJwb2xhdGUxIiwic2Vzc2lvbl9yMyIsIlNwZWFrZXJMaXN0UGFnZV9pb25fY29sXzEzX2lvbl9pdGVtXzEzX1RlbXBsYXRlIiwic3BlYWtlcl9yMSIsImdldFNwZWFrZXJzIiwiU3BlYWtlckxpc3RQYWdlX1RlbXBsYXRlIiwiU3BlYWtlckxpc3RQYWdlX2lvbl9jb2xfMTNfVGVtcGxhdGUiLCJUYWJzUGFnZSIsIlNjaGVkdWxlUGFnZSIsImNoaWxkcmVuIiwibG9hZENoaWxkcmVuIiwidGhlbiIsIm0iLCJyZWRpcmVjdFRvIiwicGF0aE1hdGNoIiwiVGFic1BhZ2VSb3V0aW5nTW9kdWxlIiwiU2NoZWR1bGVNb2R1bGUiLCJUYWJzTW9kdWxlIiwiVGFic1BhZ2VfVGVtcGxhdGUiLCLJtcm1bmFtZXNwYWNlU1ZHIiwiybXJtW5hbWVzcGFjZUhUTUwiLCJfU3VwcG9ydGVkRm9ybWF0IiwiVVBDX0EiLCJVUENfRSIsIlVQQ19FQU5fRVhURU5TSU9OIiwiRUFOXzgiLCJFQU5fMTMiLCJDT0RFXzM5IiwiQ09ERV8zOV9NT0RfNDMiLCJDT0RFXzkzIiwiQ09ERV8xMjgiLCJDT0RBQkFSIiwiSVRGIiwiSVRGXzE0IiwiQVpURUMiLCJEQVRBX01BVFJJWCIsIk1BWElDT0RFIiwiUERGXzQxNyIsIlFSX0NPREUiLCJSU1NfMTQiLCJSU1NfRVhQQU5ERUQiLCJTdXBwb3J0ZWRGb3JtYXQiLCJDYW1lcmFEaXJlY3Rpb24iLCJGUk9OVCIsIkJBQ0siLCJyZWdpc3RlclBsdWdpbiIsIndlYiIsIkJhcmNvZGVTY2FubmVyV2ViIiwiZGlqa3N0cmEiLCJzaW5nbGVfc291cmNlX3Nob3J0ZXN0X3BhdGhzIiwiZ3JhcGgiLCJzIiwicHJlZGVjZXNzb3JzIiwiY29zdHMiLCJQcmlvcml0eVF1ZXVlIiwibWFrZSIsInB1c2giLCJjbG9zZXN0IiwidSIsInYiLCJjb3N0X29mX3NfdG9fdSIsImFkamFjZW50X25vZGVzIiwiY29zdF9vZl9lIiwiY29zdF9vZl9zX3RvX3VfcGx1c19jb3N0X29mX2UiLCJjb3N0X29mX3NfdG9fdiIsImZpcnN0X3Zpc2l0IiwiZW1wdHkiLCJwb3AiLCJ2YWx1ZSIsImNvc3QiLCJoYXNPd25Qcm9wZXJ0eSIsIm1zZyIsImpvaW4iLCJFcnJvciIsImV4dHJhY3Rfc2hvcnRlc3RfcGF0aF9mcm9tX3ByZWRlY2Vzc29yX2xpc3QiLCJub2RlcyIsInByZWRlY2Vzc29yIiwicmV2ZXJzZSIsImZpbmRfcGF0aCIsIm9wdHMiLCJUIiwidCIsImtleSIsInF1ZXVlIiwic29ydGVyIiwiZGVmYXVsdF9zb3J0ZXIiLCJhIiwiYiIsInNvcnQiLCJzaGlmdCIsImxlbmd0aCIsIm1vZHVsZSIsImVuY29kZVV0ZjgiLCJpbnB1dCIsInNpemUiLCJpbmRleCIsInBvaW50IiwiY2hhckNvZGVBdCIsInNlY29uZCIsIlVpbnQ4QXJyYXkiLCJidWZmZXIiLCJjYW5Qcm9taXNlIiwicmVxdWlyZSIsIlFSQ29kZSIsIkNhbnZhc1JlbmRlcmVyIiwiU3ZnUmVuZGVyZXIiLCJyZW5kZXJDYW52YXMiLCJyZW5kZXJGdW5jIiwiY2FudmFzIiwiY2IiLCJhcmdzIiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwiYXJnc051bSIsImlzTGFzdEFyZ0NiIiwidW5kZWZpbmVkIiwiZ2V0Q29udGV4dCIsInRvQ2FudmFzIiwiYmluZCIsInJlbmRlciIsInRvRGF0YVVSTCIsInJlbmRlclRvRGF0YVVSTCIsInRvU3RyaW5nIiwiXyIsInByb3RvdHlwZSIsImdldFN5bWJvbFNpemUiLCJnZXRSb3dDb2xDb29yZHMiLCJ2ZXJzaW9uIiwicG9zQ291bnQiLCJNYXRoIiwiZmxvb3IiLCJpbnRlcnZhbHMiLCJjZWlsIiwicG9zaXRpb25zIiwiaSIsImdldFBvc2l0aW9ucyIsImNvb3JkcyIsInBvcyIsInBvc0xlbmd0aCIsImoiLCJNb2RlIiwiQUxQSEFfTlVNX0NIQVJTIiwiQWxwaGFudW1lcmljRGF0YSIsIkFMUEhBTlVNRVJJQyIsImdldEJpdHNMZW5ndGgiLCJnZXRMZW5ndGgiLCJ3cml0ZSIsImJpdEJ1ZmZlciIsImluZGV4T2YiLCJwdXQiLCJCaXRCdWZmZXIiLCJidWZJbmRleCIsIm51bSIsInB1dEJpdCIsImdldExlbmd0aEluQml0cyIsImJpdCIsIkJpdE1hdHJpeCIsInJlc2VydmVkQml0Iiwic2V0Iiwicm93IiwiY29sIiwicmVzZXJ2ZWQiLCJ4b3IiLCJpc1Jlc2VydmVkIiwiQnl0ZURhdGEiLCJCWVRFIiwibCIsIkVDTGV2ZWwiLCJFQ19CTE9DS1NfVEFCTEUiLCJFQ19DT0RFV09SRFNfVEFCTEUiLCJnZXRCbG9ja3NDb3VudCIsImVycm9yQ29ycmVjdGlvbkxldmVsIiwiTCIsIk0iLCJRIiwiSCIsImdldFRvdGFsQ29kZXdvcmRzQ291bnQiLCJmcm9tU3RyaW5nIiwic3RyaW5nIiwibGNTdHIiLCJpc1ZhbGlkIiwibGV2ZWwiLCJmcm9tIiwiZGVmYXVsdFZhbHVlIiwiRklOREVSX1BBVFRFUk5fU0laRSIsIlV0aWxzIiwiRzE1IiwiRzE1X01BU0siLCJHMTVfQkNIIiwiZ2V0QkNIRGlnaXQiLCJnZXRFbmNvZGVkQml0cyIsIm1hc2siLCJFWFBfVEFCTEUiLCJMT0dfVEFCTEUiLCJpbml0VGFibGVzIiwieCIsIm4iLCJleHAiLCJtdWwiLCJ5IiwiS2FuamlEYXRhIiwiS0FOSkkiLCJ0b1NKSVMiLCJQYXR0ZXJucyIsIlBBVFRFUk4wMDAiLCJQQVRURVJOMDAxIiwiUEFUVEVSTjAxMCIsIlBBVFRFUk4wMTEiLCJQQVRURVJOMTAwIiwiUEFUVEVSTjEwMSIsIlBBVFRFUk4xMTAiLCJQQVRURVJOMTExIiwiUGVuYWx0eVNjb3JlcyIsIk4xIiwiTjIiLCJOMyIsIk40IiwiaXNOYU4iLCJwYXJzZUludCIsImdldFBlbmFsdHlOMSIsInBvaW50cyIsInNhbWVDb3VudENvbCIsInNhbWVDb3VudFJvdyIsImxhc3RDb2wiLCJsYXN0Um93IiwiZ2V0UGVuYWx0eU4yIiwibGFzdCIsImdldFBlbmFsdHlOMyIsImJpdHNDb2wiLCJiaXRzUm93IiwiZ2V0UGVuYWx0eU40IiwiZGFya0NvdW50IiwibW9kdWxlc0NvdW50IiwiayIsImFicyIsImdldE1hc2tBdCIsIm1hc2tQYXR0ZXJuIiwiYXBwbHlNYXNrIiwicGF0dGVybiIsImdldEJlc3RNYXNrIiwic2V0dXBGb3JtYXRGdW5jIiwibnVtUGF0dGVybnMiLCJPYmplY3QiLCJrZXlzIiwiYmVzdFBhdHRlcm4iLCJsb3dlclBlbmFsdHkiLCJJbmZpbml0eSIsInAiLCJwZW5hbHR5IiwiVmVyc2lvbkNoZWNrIiwiUmVnZXgiLCJOVU1FUklDIiwiY2NCaXRzIiwiTUlYRUQiLCJnZXRDaGFyQ291bnRJbmRpY2F0b3IiLCJnZXRCZXN0TW9kZUZvckRhdGEiLCJkYXRhU3RyIiwidGVzdE51bWVyaWMiLCJ0ZXN0QWxwaGFudW1lcmljIiwidGVzdEthbmppIiwiTnVtZXJpY0RhdGEiLCJzdWJzdHIiLCJyZW1haW5pbmdOdW0iLCJHRiIsInAxIiwicDIiLCJjb2VmZiIsIm1vZCIsImRpdmlkZW50IiwiZGl2aXNvciIsIm9mZnNldCIsImdlbmVyYXRlRUNQb2x5bm9taWFsIiwiZGVncmVlIiwicG9seSIsIkFsaWdubWVudFBhdHRlcm4iLCJGaW5kZXJQYXR0ZXJuIiwiTWFza1BhdHRlcm4iLCJFQ0NvZGUiLCJSZWVkU29sb21vbkVuY29kZXIiLCJWZXJzaW9uIiwiRm9ybWF0SW5mbyIsIlNlZ21lbnRzIiwic2V0dXBGaW5kZXJQYXR0ZXJuIiwibWF0cml4IiwiciIsImMiLCJzZXR1cFRpbWluZ1BhdHRlcm4iLCJzZXR1cEFsaWdubWVudFBhdHRlcm4iLCJzZXR1cFZlcnNpb25JbmZvIiwiYml0cyIsInNldHVwRm9ybWF0SW5mbyIsInNldHVwRGF0YSIsImluYyIsImJpdEluZGV4IiwiYnl0ZUluZGV4IiwiZGFyayIsImNyZWF0ZURhdGEiLCJzZWdtZW50cyIsInRvdGFsQ29kZXdvcmRzIiwiZ2V0U3ltYm9sVG90YWxDb2Rld29yZHMiLCJlY1RvdGFsQ29kZXdvcmRzIiwiZGF0YVRvdGFsQ29kZXdvcmRzQml0cyIsInJlbWFpbmluZ0J5dGUiLCJjcmVhdGVDb2Rld29yZHMiLCJkYXRhVG90YWxDb2Rld29yZHMiLCJlY1RvdGFsQmxvY2tzIiwiYmxvY2tzSW5Hcm91cDIiLCJibG9ja3NJbkdyb3VwMSIsInRvdGFsQ29kZXdvcmRzSW5Hcm91cDEiLCJkYXRhQ29kZXdvcmRzSW5Hcm91cDEiLCJkYXRhQ29kZXdvcmRzSW5Hcm91cDIiLCJlY0NvdW50IiwicnMiLCJkY0RhdGEiLCJBcnJheSIsImVjRGF0YSIsIm1heERhdGFTaXplIiwiZGF0YVNpemUiLCJlbmNvZGUiLCJtYXgiLCJjcmVhdGVTeW1ib2wiLCJpc0FycmF5IiwiZnJvbUFycmF5IiwiZXN0aW1hdGVkVmVyc2lvbiIsInJhd1NlZ21lbnRzIiwicmF3U3BsaXQiLCJnZXRCZXN0VmVyc2lvbkZvckRhdGEiLCJiZXN0VmVyc2lvbiIsImRhdGFCaXRzIiwibW9kdWxlQ291bnQiLCJtb2R1bGVzIiwib3B0aW9ucyIsInRvU0pJU0Z1bmMiLCJzZXRUb1NKSVNGdW5jdGlvbiIsIlBvbHlub21pYWwiLCJnZW5Qb2x5IiwiaW5pdGlhbGl6ZSIsInBhZGRlZERhdGEiLCJyZW1haW5kZXIiLCJzdGFydCIsImJ1ZmYiLCJudW1lcmljIiwiYWxwaGFudW1lcmljIiwia2FuamkiLCJyZXBsYWNlIiwiYnl0ZSIsIlJlZ0V4cCIsIkJZVEVfS0FOSkkiLCJURVNUX0tBTkpJIiwiVEVTVF9OVU1FUklDIiwiVEVTVF9BTFBIQU5VTUVSSUMiLCJzdHIiLCJ0ZXN0IiwiZ2V0U3RyaW5nQnl0ZUxlbmd0aCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZ2V0U2VnbWVudHMiLCJyZWdleCIsImV4ZWMiLCJnZXRTZWdtZW50c0Zyb21TdHJpbmciLCJudW1TZWdzIiwiYWxwaGFOdW1TZWdzIiwiYnl0ZVNlZ3MiLCJrYW5qaVNlZ3MiLCJpc0thbmppTW9kZUVuYWJsZWQiLCJzZWdzIiwiY29uY2F0IiwiczEiLCJzMiIsIm9iaiIsImdldFNlZ21lbnRCaXRzTGVuZ3RoIiwibWVyZ2VTZWdtZW50cyIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJwcmV2U2VnIiwiYnVpbGROb2RlcyIsInNlZyIsImJ1aWxkR3JhcGgiLCJ0YWJsZSIsInByZXZOb2RlSWRzIiwibm9kZUdyb3VwIiwiY3VycmVudE5vZGVJZHMiLCJub2RlIiwibGFzdENvdW50IiwicHJldk5vZGVJZCIsImVuZCIsImJ1aWxkU2luZ2xlU2VnbWVudCIsIm1vZGVzSGludCIsImJlc3RNb2RlIiwiYXJyYXkiLCJvcHRpbWl6ZWRTZWdzIiwidG9TSklTRnVuY3Rpb24iLCJDT0RFV09SRFNfQ09VTlQiLCJkaWdpdCIsImYiLCJHMTgiLCJHMThfQkNIIiwiZ2V0QmVzdFZlcnNpb25Gb3JEYXRhTGVuZ3RoIiwiY3VycmVudFZlcnNpb24iLCJnZXRDYXBhY2l0eSIsImdldFJlc2VydmVkQml0c0NvdW50IiwiZ2V0VG90YWxCaXRzRnJvbURhdGFBcnJheSIsInRvdGFsQml0cyIsInJlc2VydmVkQml0cyIsImdldEJlc3RWZXJzaW9uRm9yTWl4ZWREYXRhIiwidXNhYmxlQml0cyIsImVjbCIsImNsZWFyQ2FudmFzIiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJnZXRDYW52YXNFbGVtZW50IiwicXJEYXRhIiwiY2FudmFzRWwiLCJnZXRPcHRpb25zIiwiZ2V0SW1hZ2VXaWR0aCIsImltYWdlIiwiY3JlYXRlSW1hZ2VEYXRhIiwicXJUb0ltYWdlRGF0YSIsInB1dEltYWdlRGF0YSIsInR5cGUiLCJyZW5kZXJlck9wdHMiLCJxdWFsaXR5IiwiZ2V0Q29sb3JBdHRyaWIiLCJjb2xvciIsImF0dHJpYiIsImFscGhhIiwiaGV4IiwidG9GaXhlZCIsInN2Z0NtZCIsImNtZCIsInFyVG9QYXRoIiwibWFyZ2luIiwibW92ZUJ5IiwibmV3Um93IiwibGluZUxlbmd0aCIsInFyY29kZXNpemUiLCJiZyIsImxpZ2h0Iiwidmlld0JveCIsInN2Z1RhZyIsImhleDJyZ2JhIiwiaGV4Q29kZSIsInNwbGl0IiwiYXBwbHkiLCJoZXhWYWx1ZSIsImciLCJzY2FsZSIsImdldFNjYWxlIiwicXJTaXplIiwiaW1nRGF0YSIsInFyIiwic3ltYm9sU2l6ZSIsInNjYWxlZE1hcmdpbiIsInBhbGV0dGUiLCJwb3NEc3QiLCJweENvbG9yIiwiaVNyYyIsImpTcmMiLCJFdmVudEVtaXR0ZXIiLCJDb21wb25lbnQiLCJDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSIsIklucHV0IiwiT3V0cHV0IiwiVmlld0NoaWxkIiwiTmdNb2R1bGUiLCJRUkNvZGVDb21wb25lbnQiLCJyZW5kZXJlciIsInNhbml0aXplciIsImFsbG93RW1wdHlTdHJpbmciLCJjb2xvckRhcmsiLCJjb2xvckxpZ2h0IiwiY3NzQ2xhc3MiLCJlbGVtZW50VHlwZSIsInFyZGF0YSIsInFyQ29kZVVSTCIsImNvbnRleHQiLCJuZ09uQ2hhbmdlcyIsImNyZWF0ZVFSQ29kZSIsImlzVmFsaWRRckNvZGVUZXh0IiwicXJDb2RlQ29uZmlnIiwiZXJyIiwiZXJyb3IiLCJ0b1NWRyIsInJlbmRlckVsZW1lbnQiLCJlbGVtZW50IiwicXJjRWxlbWVudCIsImNoaWxkTm9kZXMiLCJyZW1vdmVDaGlsZCIsIndhcm4iLCJjb25maWciLCJjZW50ZXJJbWFnZVNyYyIsImltYWdlU3JjIiwiY2VudGVySW1hZ2VIZWlnaHQiLCJpbWFnZUhlaWdodCIsImNlbnRlckltYWdlV2lkdGgiLCJpbWFnZVdpZHRoIiwiY2FudmFzRWxlbWVudCIsImFyaWFMYWJlbCIsInNldEF0dHJpYnV0ZSIsImNlbnRlckltYWdlIiwiSW1hZ2UiLCJfdGhpczIkY29udGV4dCIsImRyYXdJbWFnZSIsImVtaXRRUkNvZGVVUkwiLCJjYXRjaCIsInN2Z1BhcmVudEVsZW1lbnQiLCJzdmdTdHJpbmciLCJzZXRQcm9wZXJ0eSIsInN2Z0VsZW1lbnQiLCJmaXJzdENoaWxkIiwiaW1nRWxlbWVudCIsImRhdGFVcmwiLCJhbHQiLCJtZXNzYWdlIiwiY2xhc3NOYW1lIiwiU1ZHU1ZHRWxlbWVudCIsInN2Z0hUTUwiLCJvdXRlckhUTUwiLCJibG9iIiwiQmxvYiIsInVybFN2ZyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInVybFNhbml0aXplZCIsImJ5cGFzc1NlY3VyaXR5VHJ1c3RVcmwiLCJlbWl0IiwidXJsSW1hZ2UiLCJIVE1MQ2FudmFzRWxlbWVudCIsIkhUTUxJbWFnZUVsZW1lbnQiLCJmZXRjaCIsInVybFJlc3BvbnNlIiwiybVmYWMiLCJRUkNvZGVDb21wb25lbnRfRmFjdG9yeSIsIlJlbmRlcmVyMiIsIkRvbVNhbml0aXplciIsIsm1Y21wIiwiybXJtWRlZmluZUNvbXBvbmVudCIsIlFSQ29kZUNvbXBvbmVudF9RdWVyeSIsIsm1ybV2aWV3UXVlcnkiLCJfdCIsIsm1ybVxdWVyeVJlZnJlc2giLCLJtcm1bG9hZFF1ZXJ5IiwiZmlyc3QiLCJpbnB1dHMiLCJvdXRwdXRzIiwiZmVhdHVyZXMiLCLJtcm1TmdPbkNoYW5nZXNGZWF0dXJlIiwiUVJDb2RlQ29tcG9uZW50X1RlbXBsYXRlIiwiZW5jYXBzdWxhdGlvbiIsImNoYW5nZURldGVjdGlvbiIsIm5nRGV2TW9kZSIsIsm1c2V0Q2xhc3NNZXRhZGF0YSIsInNlbGVjdG9yIiwiT25QdXNoIiwic3RhdGljIiwiUVJDb2RlTW9kdWxlX0ZhY3RvcnkiLCLJtW1vZCIsIsm1ybVkZWZpbmVOZ01vZHVsZSIsIsm1aW5qIiwiybXJtWRlZmluZUluamVjdG9yIiwicHJvdmlkZXJzIl0sInNvdXJjZVJvb3QiOiJ3ZWJwYWNrOi8vLyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlsyOSwzMCwzMSwzMiwzMywzNCwzNSwzNiwzNywzOCwzOSw0MCw0MSw0Miw0Myw0NCw0NSw0Niw0Nyw0OCw0OSw1MCw1MSw1Miw1Myw1NCw1NSw1Niw1Nyw1OCw1OSw2MV19