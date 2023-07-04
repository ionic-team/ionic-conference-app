"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs-page_tabs-page_module_ts"],{

/***/ 7193:
/*!******************************************************!*\
  !*** ./src/app/pages/about-popover/about-popover.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverPage": () => (/* binding */ PopoverPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 5992);



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

/***/ 3423:
/*!*****************************************************!*\
  !*** ./src/app/pages/about/about-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPageRoutingModule": () => (/* binding */ AboutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ 4015);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);




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

/***/ 8114:
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutModule": () => (/* binding */ AboutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4615);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5992);
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ 4015);
/* harmony import */ var _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../about-popover/about-popover */ 7193);
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-routing.module */ 3423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);







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

/***/ 4015:
/*!**************************************!*\
  !*** ./src/app/pages/about/about.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPage": () => (/* binding */ AboutPage)
/* harmony export */ });
/* harmony import */ var _Users_ohrionmartin_dev_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../about-popover/about-popover */ 7193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 5992);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4615);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 9542);







function AboutPage_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-datetime", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AboutPage_ng_template_39_Template_ion_datetime_ngModelChange_0_listener($event) {
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
    this.location = 'madison';
    this.conferenceDate = '2047-05-17';
    this.selectOptions = {
      header: 'Select a Location'
    };
  }
  presentPopover(event) {
    var _this = this;
    return (0,_Users_ohrionmartin_dev_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
  decls: 54,
  vars: 23,
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
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "h3", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "ion-list", 13)(22, "ion-item")(23, "ion-select", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AboutPage_Template_ion_select_ngModelChange_23_listener($event) {
        return ctx.location = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "ion-select-option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Madison, WI");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "ion-select-option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Austin, TX");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "ion-select-option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Chicago, IL");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "ion-select-option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Seattle, WA");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "ion-item", 19)(33, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " Date ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "ion-text", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](37, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "ion-popover", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, AboutPage_ng_template_39_Template, 1, 1, "ng-template");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "h3", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Internet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "ion-list", 13)(43, "ion-item")(44, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, " Wifi network ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "ion-label", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](48, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "ion-item")(50, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, " Password ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "ion-label", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, " makegoodthings ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.location === "madison" && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](19, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.location === "austin" && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](20, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.location === "chicago" && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](21, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.location === "seattle" && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](22, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" The Ionic Conference is a one-day conference on ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](18, 10, ctx.conferenceDate, "mediumDate"), " featuring talks from the Ionic team. It is focused on Ionic applications being built with Ionic Framework. This includes migrating apps to the latest version of the framework, Angular concepts, Webpack, Sass, and many other technologies used in Ionic 2. Tickets are completely sold out, and we\u2019re expecting more than 1000 developers \u2013 making this the largest Ionic conference ever! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.location)("interfaceOptions", ctx.selectOptions);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](37, 13, ctx.conferenceDate, "mediumDate"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showBackdrop", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ica", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](48, 16, ctx.conferenceDate, "y"), " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonDatetime, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonPopover, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.SelectValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
  styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  --background: transparent;\n  --color: white;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n}\n\nion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]   ion-back-button[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]   ion-menu-button[_ngcontent-%COMP%] {\n  --color: white;\n}\n\n.about-header[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 30%;\n}\n\n.about-header[_ngcontent-%COMP%]   .about-image[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  transition: opacity 500ms ease-in-out;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  opacity: 0;\n}\n\n.about-header[_ngcontent-%COMP%]   .madison[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/img/about/madison.jpg\");\n}\n\n.about-header[_ngcontent-%COMP%]   .austin[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/img/about/austin.jpg\");\n}\n\n.about-header[_ngcontent-%COMP%]   .chicago[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/img/about/chicago.jpg\");\n}\n\n.about-header[_ngcontent-%COMP%]   .seattle[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/img/about/seattle.jpg\");\n}\n\n.about-info[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-top: -10px;\n  border-radius: 10px;\n  background: var(--ion-background-color, #ffffff);\n}\n\n.about-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\n.about-info[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  padding-top: 0;\n}\n\n.about-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--ion-color-dark);\n  line-height: 130%;\n}\n\n.about-info[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  -webkit-margin-end: 32px;\n          margin-inline-end: 32px;\n}\n\n#date-input-popover[_ngcontent-%COMP%] {\n  --offset-y: -var(--ion-safe-area-bottom);\n  --max-width: 90%;\n  --width: 336px;\n}\n\n\n.ios[_ngcontent-%COMP%]   .about-info[_ngcontent-%COMP%] {\n  --ion-padding: 19px;\n}\n\n.ios[_ngcontent-%COMP%]   .about-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBRUEsTUFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0FBQUY7O0FBR0E7OztFQUdFLGNBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBRUEsV0FBQTtFQUNBLFdBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBRUEsUUFBQTtFQUVBLHFDQUFBO0VBRUEsNEJBQUE7RUFFQSwyQkFBQTtFQUNBLHNCQUFBO0VBRUEsVUFBQTtBQU5GOztBQVNBO0VBQ0Usc0RBQUE7QUFORjs7QUFTQTtFQUNFLHFEQUFBO0FBTkY7O0FBU0E7RUFDRSxzREFBQTtBQU5GOztBQVNBO0VBQ0Usc0RBQUE7QUFORjs7QUFTQTtFQUNFLGtCQUFBO0VBRUEsaUJBQUE7RUFFQSxtQkFBQTtFQUVBLGdEQUFBO0FBVEY7O0FBWUE7RUFDRSxhQUFBO0FBVEY7O0FBWUE7RUFDRSxjQUFBO0FBVEY7O0FBWUE7RUFDRSw0QkFBQTtFQUVBLGlCQUFBO0FBVkY7O0FBYUE7RUFDRSx3QkFBQTtVQUFBLHVCQUFBO0FBVkY7O0FBYUE7RUFDRSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQVZGOztBQWFBOztFQUFBO0FBSUE7RUFDRSxtQkFBQTtBQVhGOztBQWNBO0VBQ0UsZ0JBQUE7QUFYRiIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xufVxuXG5pb24tdG9vbGJhciBpb24tYnV0dG9uLFxuaW9uLXRvb2xiYXIgaW9uLWJhY2stYnV0dG9uLFxuaW9uLXRvb2xiYXIgaW9uLW1lbnUtYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbi5hYm91dC1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAlO1xufVxuXG4uYWJvdXQtaGVhZGVyIC5hYm91dC1pbWFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICBpbnNldDogMDtcblxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zIGVhc2UtaW4tb3V0O1xuXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG4gIG9wYWNpdHk6IDA7XG59XG5cbi5hYm91dC1oZWFkZXIgLm1hZGlzb24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9hYm91dC9tYWRpc29uLmpwZ1wiKTtcbn1cblxuLmFib3V0LWhlYWRlciAuYXVzdGluIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvYWJvdXQvYXVzdGluLmpwZ1wiKTtcbn1cblxuLmFib3V0LWhlYWRlciAuY2hpY2FnbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2Fib3V0L2NoaWNhZ28uanBnXCIpO1xufVxuXG4uYWJvdXQtaGVhZGVyIC5zZWF0dGxlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvYWJvdXQvc2VhdHRsZS5qcGdcIik7XG59XG5cbi5hYm91dC1pbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmZmZmYpO1xufVxuXG4uYWJvdXQtaW5mbyBoMyB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5hYm91dC1pbmZvIGlvbi1saXN0IHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5hYm91dC1pbmZvIHAge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuXG4gIGxpbmUtaGVpZ2h0OiAxMzAlO1xufVxuXG4uYWJvdXQtaW5mbyBpb24taWNvbiB7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAzMnB4O1xufVxuXG4jZGF0ZS1pbnB1dC1wb3BvdmVyIHtcbiAgLS1vZmZzZXQteTogLXZhcigtLWlvbi1zYWZlLWFyZWEtYm90dG9tKTtcbiAgLS1tYXgtd2lkdGg6IDkwJTtcbiAgLS13aWR0aDogMzM2cHg7XG59XG5cbi8qXG4gKiBpT1MgT25seVxuICovXG5cbi5pb3MgLmFib3V0LWluZm8ge1xuICAtLWlvbi1wYWRkaW5nOiAxOXB4O1xufVxuXG4uaW9zIC5hYm91dC1pbmZvIGgzIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 6770:
/*!*************************************************!*\
  !*** ./src/app/pages/map/map-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPageRoutingModule": () => (/* binding */ MapPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ 3032);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);




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

/***/ 6016:
/*!*****************************************!*\
  !*** ./src/app/pages/map/map.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapModule": () => (/* binding */ MapModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4615);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 5992);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ 3032);
/* harmony import */ var _map_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map-routing.module */ 6770);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);





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

/***/ 3032:
/*!**********************************!*\
  !*** ./src/app/pages/map/map.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPage": () => (/* binding */ MapPage)
/* harmony export */ });
/* harmony import */ var _Users_ohrionmartin_dev_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/conference-data */ 9616);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4615);
/* harmony import */ var _map_dark_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map-dark-style */ 2160);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5992);









const _c0 = ["mapCanvas"];
class MapPage {
  constructor(doc, confData, platform) {
    this.doc = doc;
    this.confData = confData;
    this.platform = platform;
  }
  ngAfterViewInit() {
    var _this = this;
    return (0,_Users_ohrionmartin_dev_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
  styles: [".map-canvas[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transition: opacity 150ms ease-in;\n  background-color: transparent;\n  opacity: 0;\n}\n\n.show-map[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbWFwL21hcC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxXQUFBO0VBRUEsWUFBQTtFQUVBLGlDQUFBO0VBRUEsNkJBQUE7RUFFQSxVQUFBO0FBSkY7O0FBT0E7RUFDRSxVQUFBO0FBSkYiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwLWNhbnZhcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICB3aWR0aDogMTAwJTtcblxuICBoZWlnaHQ6IDEwMCU7XG5cbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLWluO1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gIG9wYWNpdHk6IDA7XG59XG5cbi5zaG93LW1hcCB7XG4gIG9wYWNpdHk6IDE7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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

/***/ 4686:
/*!**********************************************************!*\
  !*** ./src/app/pages/schedule-filter/schedule-filter.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScheduleFilterPage": () => (/* binding */ ScheduleFilterPage)
/* harmony export */ });
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../providers/conference-data */ 9616);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 5992);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4615);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 9542);







function ScheduleFilterPage_ion_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScheduleFilterPage_ion_button_3_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.dismiss());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ScheduleFilterPage_ion_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScheduleFilterPage_ion_button_4_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.selectAll(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ScheduleFilterPage_ion_item_14_ion_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-icon", 11);
  }
  if (rf & 2) {
    const track_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", track_r8.icon);
  }
}
function ScheduleFilterPage_ion_item_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ScheduleFilterPage_ion_item_14_ion_icon_2_Template, 1, 1, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-checkbox", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ScheduleFilterPage_ion_item_14_Template_ion_checkbox_ngModelChange_3_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);
      const track_r8 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](track_r8.isChecked = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const track_r8 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("track", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 5, track_r8.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.ios);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", track_r8.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", track_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", track_r8.name, " ");
  }
}
function ScheduleFilterPage_ion_footer_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-footer", 0)(1, "ion-toolbar")(2, "ion-buttons", 1)(3, "ion-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScheduleFilterPage_ion_footer_15_Template_ion_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.selectAll(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Deselect All");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-buttons", 3)(6, "ion-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScheduleFilterPage_ion_footer_15_Template_ion_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.selectAll(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Select All");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
}
class ScheduleFilterPage {
  constructor(confData, config, modalCtrl, navParams) {
    this.confData = confData;
    this.config = config;
    this.modalCtrl = modalCtrl;
    this.navParams = navParams;
    this.tracks = [];
  }
  ionViewWillEnter() {
    this.ios = this.config.get('mode') === `ios`;
    // passed in array of track names that should be excluded (unchecked)
    const excludedTrackNames = this.navParams.get('excludedTracks');
    this.confData.getTracks().subscribe(tracks => {
      tracks.forEach(track => {
        this.tracks.push({
          name: track.name,
          icon: track.icon,
          isChecked: excludedTrackNames.indexOf(track.name) === -1
        });
      });
    });
  }
  selectAll(check) {
    // set all to checked or unchecked
    this.tracks.forEach(track => {
      track.isChecked = check;
    });
  }
  applyFilters() {
    // Pass back a new array of track names to exclude
    const excludedTrackNames = this.tracks.filter(c => !c.isChecked).map(c => c.name);
    this.dismiss(excludedTrackNames);
  }
  dismiss(data) {
    // using the injected ModalController this page
    // can "dismiss" itself and pass back data
    this.modalCtrl.dismiss(data);
  }
}
ScheduleFilterPage.ɵfac = function ScheduleFilterPage_Factory(t) {
  return new (t || ScheduleFilterPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_providers_conference_data__WEBPACK_IMPORTED_MODULE_0__.ConferenceData), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.Config), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavParams));
};
ScheduleFilterPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ScheduleFilterPage,
  selectors: [["page-schedule-filter"]],
  decls: 16,
  vars: 5,
  consts: [["translucent", "true"], ["slot", "start"], [3, "click", 4, "ngIf"], ["slot", "end"], ["strong", "", 3, "click"], [3, "lines"], [4, "ngFor", "ngForOf"], ["translucent", "true", 4, "ngIf"], [3, "click"], ["slot", "start", "color", "medium", 3, "name", 4, "ngIf"], [3, "ngModel", "ngModelChange"], ["slot", "start", "color", "medium", 3, "name"]],
  template: function ScheduleFilterPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ScheduleFilterPage_ion_button_3_Template, 2, 0, "ion-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ScheduleFilterPage_ion_button_4_Template, 2, 0, "ion-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Filter Sessions ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-buttons", 3)(8, "ion-button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScheduleFilterPage_Template_ion_button_click_8_listener() {
        return ctx.applyFilters();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Done");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-content")(11, "ion-list", 5)(12, "ion-list-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Tracks");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ScheduleFilterPage_ion_item_14_Template, 5, 7, "ion-item", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ScheduleFilterPage_ion_footer_15_Template, 8, 0, "ion-footer", 7);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ios);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.ios);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("lines", ctx.ios ? "inset" : "full");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tracks);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ios);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.BooleanValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_3__.LowerCasePipe],
  styles: [".md[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  letter-spacing: 0;\n  text-transform: capitalize;\n}\n\n.md[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%] {\n  --checkbox-background-checked: transparent;\n  --border-color: transparent;\n  --border-color-checked: transparent;\n  --checkmark-color: var(--ion-color-primary);\n}\n\n.md[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  background: inherit;\n}\n\n\n.ios[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.ios[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2NoZWR1bGUtZmlsdGVyL3NjaGVkdWxlLWZpbHRlci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUFBO0FBSUE7RUFDRSxpQkFBQTtFQUVBLDBCQUFBO0FBREY7O0FBSUE7RUFDRSwwQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQ0FBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7QUFERjs7QUFLQTs7RUFBQTtBQUlBO0VBQ0UsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEYiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogTWF0ZXJpYWwgRGVzaWduXG4gKi9cblxuLm1kIGlvbi10b29sYmFyIGlvbi1idXR0b24ge1xuICBsZXR0ZXItc3BhY2luZzogMDtcblxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLm1kIGlvbi1jaGVja2JveCB7XG4gIC0tY2hlY2tib3gtYmFja2dyb3VuZC1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgLS1jaGVja21hcmstY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLm1kIGlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuXG4vKlxuICogaU9TXG4gKi9cblxuLmlvcyBpb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uaW9zIGlvbi1jaGVja2JveCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 7198:
/*!***********************************************************!*\
  !*** ./src/app/pages/schedule/schedule-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchedulePageRoutingModule": () => (/* binding */ SchedulePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule */ 4447);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);




const routes = [{
  path: '',
  component: _schedule__WEBPACK_IMPORTED_MODULE_0__.SchedulePage
}];
class SchedulePageRoutingModule {}
SchedulePageRoutingModule.ɵfac = function SchedulePageRoutingModule_Factory(t) {
  return new (t || SchedulePageRoutingModule)();
};
SchedulePageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: SchedulePageRoutingModule
});
SchedulePageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SchedulePageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 1839:
/*!***************************************************!*\
  !*** ./src/app/pages/schedule/schedule.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScheduleModule": () => (/* binding */ ScheduleModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4615);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 5992);
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule */ 4447);
/* harmony import */ var _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../schedule-filter/schedule-filter */ 4686);
/* harmony import */ var _schedule_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule-routing.module */ 7198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);







class ScheduleModule {}
ScheduleModule.ɵfac = function ScheduleModule_Factory(t) {
  return new (t || ScheduleModule)();
};
ScheduleModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: ScheduleModule
});
ScheduleModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _schedule_routing_module__WEBPACK_IMPORTED_MODULE_2__.SchedulePageRoutingModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ScheduleModule, {
    declarations: [_schedule__WEBPACK_IMPORTED_MODULE_0__.SchedulePage, _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_1__.ScheduleFilterPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _schedule_routing_module__WEBPACK_IMPORTED_MODULE_2__.SchedulePageRoutingModule]
  });
})();

/***/ }),

/***/ 4447:
/*!********************************************!*\
  !*** ./src/app/pages/schedule/schedule.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchedulePage": () => (/* binding */ SchedulePage)
/* harmony export */ });
/* harmony import */ var _Users_ohrionmartin_dev_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../schedule-filter/schedule-filter */ 4686);
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/conference-data */ 9616);
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/user-data */ 6401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5992);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4615);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 9542);













const _c0 = ["scheduleList"];
function SchedulePage_ion_buttons_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-buttons", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-menu-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function SchedulePage_ion_segment_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-segment", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SchedulePage_ion_segment_3_Template_ion_segment_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.segment = $event);
    })("ionChange", function SchedulePage_ion_segment_3_Template_ion_segment_ionChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.updateSchedule());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-segment-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-segment-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Favorites ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.segment);
  }
}
function SchedulePage_ion_title_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function SchedulePage_ion_searchbar_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-searchbar", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SchedulePage_ion_searchbar_5_Template_ion_searchbar_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r13.queryText = $event);
    })("ionInput", function SchedulePage_ion_searchbar_5_Template_ion_searchbar_ionInput_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r15.updateSchedule());
    })("ionCancel", function SchedulePage_ion_searchbar_5_Template_ion_searchbar_ionCancel_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r16.showSearchbar = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r3.queryText);
  }
}
function SchedulePage_ion_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SchedulePage_ion_button_7_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r17.showSearchbar = true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function SchedulePage_ion_button_8_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function SchedulePage_ion_button_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function SchedulePage_ion_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SchedulePage_ion_button_8_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r21.presentFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SchedulePage_ion_button_8_span_1_Template, 2, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SchedulePage_ion_button_8_span_2_Template, 2, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.ios);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r5.ios);
  }
}
function SchedulePage_ion_toolbar_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-toolbar")(1, "ion-segment", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SchedulePage_ion_toolbar_9_Template_ion_segment_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r23.segment = $event);
    })("ionChange", function SchedulePage_ion_toolbar_9_Template_ion_segment_ionChange_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r25.updateSchedule());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-segment-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-segment-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Favorites ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r6.segment);
  }
}
function SchedulePage_ion_item_group_19_ion_item_sliding_4_ion_item_option_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-item-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SchedulePage_ion_item_group_19_ion_item_sliding_4_ion_item_option_10_Template_ion_item_option_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33);
      const session_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r32.addFavorite(_r29, session_r28));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Favorite ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function SchedulePage_ion_item_group_19_ion_item_sliding_4_ion_item_option_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-item-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SchedulePage_ion_item_group_19_ion_item_sliding_4_ion_item_option_11_Template_ion_item_option_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r36);
      const session_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r35.removeFavorite(_r29, session_r28, "Remove Favorite"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function SchedulePage_ion_item_group_19_ion_item_sliding_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-item-sliding", 11, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-item", 36)(4, "ion-label")(5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ion-item-options");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, SchedulePage_ion_item_group_19_ion_item_sliding_4_ion_item_option_10_Template, 2, 0, "ion-item-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, SchedulePage_ion_item_group_19_ion_item_sliding_4_ion_item_option_11_Template, 2, 0, "ion-item-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const session_r28 = ctx.$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", session_r28.hide);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("track", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 9, session_r28.tracks[0]));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("routerLink", "/app/tabs/schedule/session/", session_r28.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](session_r28.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"](" ", session_r28.timeStart, " \u2014 ", session_r28.timeEnd, ": ", session_r28.location, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r27.segment === "all");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r27.segment === "favorites");
  }
}
function SchedulePage_ion_item_group_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-item-group", 11)(1, "ion-item-divider", 34)(2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SchedulePage_ion_item_group_19_ion_item_sliding_4_Template, 12, 11, "ion-item-sliding", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const group_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", group_r26.hide);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", group_r26.time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", group_r26.sessions);
  }
}
class SchedulePage {
  constructor(alertCtrl, confData, loadingCtrl, modalCtrl, router, routerOutlet, toastCtrl, user, config) {
    this.alertCtrl = alertCtrl;
    this.confData = confData;
    this.loadingCtrl = loadingCtrl;
    this.modalCtrl = modalCtrl;
    this.router = router;
    this.routerOutlet = routerOutlet;
    this.toastCtrl = toastCtrl;
    this.user = user;
    this.config = config;
    this.dayIndex = 0;
    this.queryText = '';
    this.segment = 'all';
    this.excludeTracks = [];
    this.shownSessions = [];
    this.groups = [];
  }
  ngOnInit() {
    this.updateSchedule();
    this.ios = this.config.get('mode') === 'ios';
  }
  updateSchedule() {
    // Close any open sliding items when the schedule updates
    if (this.scheduleList) {
      this.scheduleList.closeSlidingItems();
    }
    this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe(data => {
      this.shownSessions = data.shownSessions;
      this.groups = data.groups;
    });
  }
  presentFilter() {
    var _this = this;
    return (0,_Users_ohrionmartin_dev_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalCtrl.create({
        component: _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_1__.ScheduleFilterPage,
        presentingElement: _this.routerOutlet.nativeEl,
        componentProps: {
          excludedTracks: _this.excludeTracks
        }
      });
      yield modal.present();
      const {
        data
      } = yield modal.onWillDismiss();
      if (data) {
        _this.excludeTracks = data;
        _this.updateSchedule();
      }
    })();
  }
  addFavorite(slidingItem, sessionData) {
    var _this2 = this;
    return (0,_Users_ohrionmartin_dev_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.user.hasFavorite(sessionData.name)) {
        // Prompt to remove favorite
        _this2.removeFavorite(slidingItem, sessionData, 'Favorite already added');
      } else {
        // Add as a favorite
        _this2.user.addFavorite(sessionData.name);
        // Close the open item
        slidingItem.close();
        // Create a toast
        const toast = yield _this2.toastCtrl.create({
          header: `${sessionData.name} was successfully added as a favorite.`,
          duration: 3000,
          buttons: [{
            text: 'Close',
            role: 'cancel'
          }]
        });
        // Present the toast at the bottom of the page
        yield toast.present();
      }
    })();
  }
  removeFavorite(slidingItem, sessionData, title) {
    var _this3 = this;
    return (0,_Users_ohrionmartin_dev_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertCtrl.create({
        header: title,
        message: 'Would you like to remove this session from your favorites?',
        buttons: [{
          text: 'Cancel',
          handler: () => {
            // they clicked the cancel button, do not remove the session
            // close the sliding item and hide the option buttons
            slidingItem.close();
          }
        }, {
          text: 'Remove',
          handler: () => {
            // they want to remove this session from their favorites
            _this3.user.removeFavorite(sessionData.name);
            _this3.updateSchedule();
            // close the sliding item and hide the option buttons
            slidingItem.close();
          }
        }]
      });
      // now present the alert on top of all other content
      yield alert.present();
    })();
  }
  openSocial(network, fab) {
    var _this4 = this;
    return (0,_Users_ohrionmartin_dev_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this4.loadingCtrl.create({
        message: `Posting to ${network}`,
        duration: Math.random() * 1000 + 500
      });
      yield loading.present();
      yield loading.onWillDismiss();
      fab.close();
    })();
  }
}
SchedulePage.ɵfac = function SchedulePage_Factory(t) {
  return new (t || SchedulePage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_providers_conference_data__WEBPACK_IMPORTED_MODULE_2__.ConferenceData), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRouterOutlet), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_providers_user_data__WEBPACK_IMPORTED_MODULE_3__.UserData), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Config));
};
SchedulePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: SchedulePage,
  selectors: [["page-schedule"]],
  viewQuery: function SchedulePage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.scheduleList = _t.first);
    }
  },
  decls: 35,
  vars: 11,
  consts: [["translucent", "true"], ["slot", "start", 4, "ngIf"], [3, "ngModel", "ngModelChange", "ionChange", 4, "ngIf"], [4, "ngIf"], ["showCancelButton", "always", "placeholder", "Search", 3, "ngModel", "ngModelChange", "ionInput", "ionCancel", 4, "ngIf"], ["slot", "end"], [3, "click", 4, "ngIf"], ["fullscreen", "true"], ["collapse", "condense"], ["size", "large"], ["placeholder", "Search", 3, "ngModel", "ngModelChange", "ionInput"], [3, "hidden"], ["scheduleList", ""], [3, "hidden", 4, "ngFor", "ngForOf"], ["slot", "fixed", "vertical", "bottom", "horizontal", "end"], ["fab", ""], ["name", "share-social"], ["side", "top"], ["color", "vimeo", 3, "click"], ["name", "logo-vimeo"], ["color", "instagram", 3, "click"], ["name", "logo-instagram"], ["color", "twitter", 3, "click"], ["name", "logo-twitter"], ["color", "facebook", 3, "click"], ["name", "logo-facebook"], ["slot", "start"], [3, "ngModel", "ngModelChange", "ionChange"], ["value", "all"], ["value", "favorites"], ["showCancelButton", "always", "placeholder", "Search", 3, "ngModel", "ngModelChange", "ionInput", "ionCancel"], [3, "click"], ["slot", "icon-only", "name", "search"], ["slot", "icon-only", "name", "options"], ["sticky", ""], ["slidingItem", ""], [3, "routerLink"], ["color", "favorite", 3, "click", 4, "ngIf"], ["color", "danger", 3, "click", 4, "ngIf"], ["color", "favorite", 3, "click"], ["color", "danger", 3, "click"]],
  template: function SchedulePage_Template(rf, ctx) {
    if (rf & 1) {
      const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SchedulePage_ion_buttons_2_Template, 2, 0, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SchedulePage_ion_segment_3_Template, 5, 1, "ion-segment", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SchedulePage_ion_title_4_Template, 2, 0, "ion-title", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SchedulePage_ion_searchbar_5_Template, 1, 1, "ion-searchbar", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-buttons", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, SchedulePage_ion_button_7_Template, 2, 0, "ion-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, SchedulePage_ion_button_8_Template, 3, 2, "ion-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, SchedulePage_ion_toolbar_9_Template, 6, 1, "ion-toolbar", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ion-content", 7)(11, "ion-header", 8)(12, "ion-toolbar")(13, "ion-title", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Schedule");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "ion-toolbar")(16, "ion-searchbar", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SchedulePage_Template_ion_searchbar_ngModelChange_16_listener($event) {
        return ctx.queryText = $event;
      })("ionInput", function SchedulePage_Template_ion_searchbar_ionInput_16_listener() {
        return ctx.updateSchedule();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "ion-list", 11, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, SchedulePage_ion_item_group_19_Template, 5, 3, "ion-item-group", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "ion-list-header", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " No Sessions Found ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "ion-fab", 14, 15)(24, "ion-fab-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "ion-icon", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "ion-fab-list", 17)(27, "ion-fab-button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SchedulePage_Template_ion_fab_button_click_27_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r38);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](23);
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.openSocial("Vimeo", _r9));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "ion-icon", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "ion-fab-button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SchedulePage_Template_ion_fab_button_click_29_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r38);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](23);
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.openSocial("Instagram", _r9));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "ion-icon", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "ion-fab-button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SchedulePage_Template_ion_fab_button_click_31_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r38);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](23);
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.openSocial("Twitter", _r9));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "ion-icon", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "ion-fab-button", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SchedulePage_Template_ion_fab_button_click_33_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r38);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](23);
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.openSocial("Facebook", _r9));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "ion-icon", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.showSearchbar);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.ios);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.ios && !ctx.showSearchbar);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showSearchbar);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.ios && !ctx.showSearchbar);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.showSearchbar);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.ios);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.queryText);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", ctx.shownSessions === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.groups);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", ctx.shownSessions > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonFabList, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItemDivider, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItemGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItemOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItemOptions, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItemSliding, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_7__.LowerCasePipe],
  styles: ["ion-fab-button[_ngcontent-%COMP%] {\n  --background: var(--ion-color-step-150, #ffffff);\n  --background-hover: var(--ion-color-step-200, #f2f2f2);\n  --background-focused: var(--ion-color-step-250, #d9d9d9);\n  --color: var(--ion-color-primary, #3880ff);\n}\n\n\n.ios[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%] {\n  --background-activated: var(--ion-color-step-250, #d9d9d9);\n}\n\nion-item-sliding[track=ionic][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  border-left: 2px solid var(--ion-color-primary);\n}\n\nion-item-sliding[track=angular][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  border-left: 2px solid #ac282b;\n}\n\nion-item-sliding[track=communication][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  border-left: 2px solid #8e8d93;\n}\n\nion-item-sliding[track=tooling][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  border-left: 2px solid #fe4c52;\n}\n\nion-item-sliding[track=services][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  border-left: 2px solid #fd8b2d;\n}\n\nion-item-sliding[track=design][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  border-left: 2px solid #fed035;\n}\n\nion-item-sliding[track=workshop][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  border-left: 2px solid #69bb7b;\n}\n\nion-item-sliding[track=food][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  border-left: 2px solid #3bc7c4;\n}\n\nion-item-sliding[track=documentation][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  border-left: 2px solid #b16be3;\n}\n\nion-item-sliding[track=navigation][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  border-left: 2px solid #6600cc;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2NoZWR1bGUvc2NoZWR1bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdEQUFBO0VBQ0Esc0RBQUE7RUFDQSx3REFBQTtFQUNBLDBDQUFBO0FBQ0Y7O0FBRUE7OztFQUFBO0FBSUE7RUFDRSwwREFBQTtBQUNGOztBQWdCRTtFQUNFLGtCQUFBO0VBRUEsK0NBQUE7QUFkSjs7QUFXRTtFQUNFLGtCQUFBO0VBRUEsOEJBQUE7QUFUSjs7QUFNRTtFQUNFLGtCQUFBO0VBRUEsOEJBQUE7QUFKSjs7QUFDRTtFQUNFLGtCQUFBO0VBRUEsOEJBQUE7QUFDSjs7QUFKRTtFQUNFLGtCQUFBO0VBRUEsOEJBQUE7QUFNSjs7QUFURTtFQUNFLGtCQUFBO0VBRUEsOEJBQUE7QUFXSjs7QUFkRTtFQUNFLGtCQUFBO0VBRUEsOEJBQUE7QUFnQko7O0FBbkJFO0VBQ0Usa0JBQUE7RUFFQSw4QkFBQTtBQXFCSjs7QUF4QkU7RUFDRSxrQkFBQTtFQUVBLDhCQUFBO0FBMEJKOztBQTdCRTtFQUNFLGtCQUFBO0VBRUEsOEJBQUE7QUErQkoiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZmZmZmZmKTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB2YXIoLS1pb24tY29sb3Itc3RlcC0yMDAsICNmMmYyZjIpO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwLCAjZDlkOWQ5KTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpO1xufVxuXG4vKlxuICogTWF0ZXJpYWwgRGVzaWduIHVzZXMgdGhlIHJpcHBsZSBmb3IgYWN0aXZhdGVkXG4gKiBzbyBvbmx5IHN0eWxlIHRoZSBpT1MgYWN0aXZhdGVkIGJhY2tncm91bmRcbiAqL1xuLmlvcyBpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCwgI2Q5ZDlkOSk7XG59XG5cbiRjYXRlZ29yaWVzOiAoXG4gIGlvbmljOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSksXG4gIGFuZ3VsYXI6ICNhYzI4MmIsXG4gIGNvbW11bmljYXRpb246ICM4ZThkOTMsXG4gIHRvb2xpbmc6ICNmZTRjNTIsXG4gIHNlcnZpY2VzOiAjZmQ4YjJkLFxuICBkZXNpZ246ICNmZWQwMzUsXG4gIHdvcmtzaG9wOiAjNjliYjdiLFxuICBmb29kOiAjM2JjN2M0LFxuICBkb2N1bWVudGF0aW9uOiAjYjE2YmUzLFxuICBuYXZpZ2F0aW9uOiAjNjYwMGNjXG4pO1xuXG5AZWFjaCAkdHJhY2ssICR2YWx1ZSBpbiBtYXAtcmVtb3ZlKCRjYXRlZ29yaWVzKSB7XG4gIGlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9JyN7JHRyYWNrfSddIGlvbi1sYWJlbCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAkdmFsdWU7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 2098:
/*!***********************************************************************!*\
  !*** ./src/app/pages/session-detail/session-detail-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionDetailPageRoutingModule": () => (/* binding */ SessionDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _session_detail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./session-detail */ 8976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);




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

/***/ 8302:
/*!***************************************************************!*\
  !*** ./src/app/pages/session-detail/session-detail.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionDetailModule": () => (/* binding */ SessionDetailModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4615);
/* harmony import */ var _session_detail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./session-detail */ 8976);
/* harmony import */ var _session_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session-detail-routing.module */ 2098);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 5992);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);





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

/***/ 8976:
/*!********************************************************!*\
  !*** ./src/app/pages/session-detail/session-detail.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionDetailPage": () => (/* binding */ SessionDetailPage)
/* harmony export */ });
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../providers/conference-data */ 9616);
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/user-data */ 6401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4615);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5992);









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
  styles: [".session-track-ionic[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n\n.session-track-angular[_ngcontent-%COMP%] {\n  color: var(--ion-color-angular);\n}\n\n.session-track-communication[_ngcontent-%COMP%] {\n  color: var(--ion-color-communication);\n}\n\n.session-track-tooling[_ngcontent-%COMP%] {\n  color: var(--ion-color-tooling);\n}\n\n.session-track-services[_ngcontent-%COMP%] {\n  color: var(--ion-color-services);\n}\n\n.session-track-design[_ngcontent-%COMP%] {\n  color: var(--ion-color-design);\n}\n\n.session-track-workshop[_ngcontent-%COMP%] {\n  color: var(--ion-color-workshop);\n}\n\n.session-track-food[_ngcontent-%COMP%] {\n  color: var(--ion-color-food);\n}\n\n.session-track-documentation[_ngcontent-%COMP%] {\n  color: var(--ion-color-documentation);\n}\n\n.session-track-navigation[_ngcontent-%COMP%] {\n  color: var(--ion-color-navigation);\n}\n\n\n.show-favorite[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.icon-heart-empty[_ngcontent-%COMP%], .icon-heart[_ngcontent-%COMP%] {\n  --border-radius: 50%;\n  --padding-start: 0;\n  --padding-end: 0;\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  width: 48px;\n  height: 48px;\n  transition: transform 300ms ease;\n  font-size: 16px;\n}\n\n.icon-heart-empty[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n\n.icon-heart[_ngcontent-%COMP%] {\n  transform: scale(0);\n}\n\n.show-favorite[_ngcontent-%COMP%]   .icon-heart[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n\n.show-favorite[_ngcontent-%COMP%]   .icon-heart-empty[_ngcontent-%COMP%] {\n  transform: scale(0);\n}\n\nh1[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2Vzc2lvbi1kZXRhaWwvc2Vzc2lvbi1kZXRhaWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwrQkFBQTtBQUNGOztBQUVBO0VBQ0UscUNBQUE7QUFDRjs7QUFFQTtFQUNFLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSw0QkFBQTtBQUNGOztBQUVBO0VBQ0UscUNBQUE7QUFDRjs7QUFFQTtFQUNFLGtDQUFBO0FBQ0Y7O0FBRUE7O0VBQUE7QUFJQTtFQUNFLGtCQUFBO0FBQUY7O0FBR0E7O0VBRUUsb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEsa0JBQUE7RUFFQSxRQUFBO0VBQ0EsVUFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBRUEsZ0NBQUE7RUFFQSxlQUFBO0FBTEY7O0FBUUE7RUFDRSxtQkFBQTtBQUxGOztBQVFBO0VBQ0UsbUJBQUE7QUFMRjs7QUFRQTtFQUNFLG1CQUFBO0FBTEY7O0FBUUE7RUFDRSxtQkFBQTtBQUxGOztBQVFBO0VBQ0UsU0FBQTtBQUxGIiwic291cmNlc0NvbnRlbnQiOlsiLnNlc3Npb24tdHJhY2staW9uaWMge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uc2Vzc2lvbi10cmFjay1hbmd1bGFyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1hbmd1bGFyKTtcbn1cblxuLnNlc3Npb24tdHJhY2stY29tbXVuaWNhdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29tbXVuaWNhdGlvbik7XG59XG5cbi5zZXNzaW9uLXRyYWNrLXRvb2xpbmcge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRvb2xpbmcpO1xufVxuXG4uc2Vzc2lvbi10cmFjay1zZXJ2aWNlcyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2VydmljZXMpO1xufVxuXG4uc2Vzc2lvbi10cmFjay1kZXNpZ24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRlc2lnbik7XG59XG5cbi5zZXNzaW9uLXRyYWNrLXdvcmtzaG9wIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13b3Jrc2hvcCk7XG59XG5cbi5zZXNzaW9uLXRyYWNrLWZvb2Qge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWZvb2QpO1xufVxuXG4uc2Vzc2lvbi10cmFjay1kb2N1bWVudGF0aW9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kb2N1bWVudGF0aW9uKTtcbn1cblxuLnNlc3Npb24tdHJhY2stbmF2aWdhdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbmF2aWdhdGlvbik7XG59XG5cbi8qIEZhdm9yaXRlIEljb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuLnNob3ctZmF2b3JpdGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pY29uLWhlYXJ0LWVtcHR5LFxuLmljb24taGVhcnQge1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctZW5kOiAwO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDVweDtcblxuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlO1xuXG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmljb24taGVhcnQtZW1wdHkge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4uaWNvbi1oZWFydCB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG5cbi5zaG93LWZhdm9yaXRlIC5pY29uLWhlYXJ0IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLnNob3ctZmF2b3JpdGUgLmljb24taGVhcnQtZW1wdHkge1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuXG5oMSB7XG4gIG1hcmdpbjogMDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 4052:
/*!***********************************************************************!*\
  !*** ./src/app/pages/speaker-detail/speaker-detail-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeakerDetailPageRoutingModule": () => (/* binding */ SpeakerDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _speaker_detail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speaker-detail */ 154);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);




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

/***/ 42:
/*!***************************************************************!*\
  !*** ./src/app/pages/speaker-detail/speaker-detail.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeakerDetailModule": () => (/* binding */ SpeakerDetailModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4615);
/* harmony import */ var _speaker_detail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speaker-detail */ 154);
/* harmony import */ var _speaker_detail_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./speaker-detail-routing.module */ 4052);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 5992);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);





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

/***/ 154:
/*!********************************************************!*\
  !*** ./src/app/pages/speaker-detail/speaker-detail.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeakerDetailPage": () => (/* binding */ SpeakerDetailPage)
/* harmony export */ });
/* harmony import */ var _Users_ohrionmartin_dev_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../providers/conference-data */ 9616);
/* harmony import */ var _awesome_cordova_plugins_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-browser/ngx */ 7122);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 5992);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4615);











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
    return (0,_Users_ohrionmartin_dev_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    return (0,_Users_ohrionmartin_dev_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
  styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  --background: transparent;\n  --color: white;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n}\n\nion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]   ion-back-button[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]   ion-menu-button[_ngcontent-%COMP%] {\n  --color: white;\n}\n\n.speaker-background[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: calc(250px + var(--ion-safe-area-top));\n  padding-top: var(--ion-safe-area-top);\n  background: center/cover url(\"/assets/img/speaker-background.png\") no-repeat;\n}\n\n.speaker-background[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70px;\n  margin-top: calc(-1 * var(--ion-safe-area-top));\n  border-radius: 50%;\n}\n\n.speaker-background[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  color: white;\n}\n\n.md[_ngcontent-%COMP%]   .speaker-background[_ngcontent-%COMP%] {\n  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 1px -2px, rgba(0, 0, 0, 0.14) 0 2px 2px 0, rgba(0, 0, 0, 0.12) 0 1px 5px 0;\n}\n\n.ios[_ngcontent-%COMP%]   .speaker-background[_ngcontent-%COMP%] {\n  box-shadow: rgba(0, 0, 0, 0.12) 0 4px 16px;\n}\n\n\n.speaker-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-right: 6px;\n  margin-left: 6px;\n}\n\n.speaker-detail[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  background: var(--ion-color-step-150, #d7d8da);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc3BlYWtlci1kZXRhaWwvc3BlYWtlci1kZXRhaWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFBQTtBQUlBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBRUEsa0JBQUE7RUFFQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7QUFGRjs7QUFLQTs7O0VBR0UsY0FBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBRUEsc0JBQUE7RUFFQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsOENBQUE7RUFFQSxxQ0FBQTtFQUVBLDRFQUFBO0FBUEY7O0FBVUE7RUFDRSxXQUFBO0VBRUEsK0NBQUE7RUFFQSxrQkFBQTtBQVRGOztBQVlBO0VBQ0Usa0JBQUE7RUFFQSxZQUFBO0VBRUEsWUFBQTtBQVhGOztBQWNBO0VBQ0UsK0dBQUE7QUFYRjs7QUFjQTtFQUNFLDBDQUFBO0FBWEY7O0FBY0E7O0VBQUE7QUFJQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFaRjs7QUFlQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFFQSw4Q0FBQTtBQWJGIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNwZWFrZXIgQmFja2dyb3VuZFxuICovXG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1jb2xvcjogd2hpdGU7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbmlvbi10b29sYmFyIGlvbi1idXR0b24sXG5pb24tdG9vbGJhciBpb24tYmFjay1idXR0b24sXG5pb24tdG9vbGJhciBpb24tbWVudS1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnNwZWFrZXItYmFja2dyb3VuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIGhlaWdodDogY2FsYygyNTBweCArIHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wKSk7XG5cbiAgcGFkZGluZy10b3A6IHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wKTtcblxuICBiYWNrZ3JvdW5kOiBjZW50ZXIgLyBjb3ZlciB1cmwoXCIvYXNzZXRzL2ltZy9zcGVha2VyLWJhY2tncm91bmQucG5nXCIpIG5vLXJlcGVhdDtcbn1cblxuLnNwZWFrZXItYmFja2dyb3VuZCBpbWcge1xuICB3aWR0aDogNzBweDtcblxuICBtYXJnaW4tdG9wOiBjYWxjKC0xICogdmFyKC0taW9uLXNhZmUtYXJlYS10b3ApKTtcblxuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5zcGVha2VyLWJhY2tncm91bmQgaDIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgYm90dG9tOiAxMHB4O1xuXG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1kIC5zcGVha2VyLWJhY2tncm91bmQge1xuICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAyMCUpIDAgM3B4IDFweCAtMnB4LCByZ2IoMCAwIDAgLyAxNCUpIDAgMnB4IDJweCAwLCByZ2IoMCAwIDAgLyAxMiUpIDAgMXB4IDVweCAwO1xufVxuXG4uaW9zIC5zcGVha2VyLWJhY2tncm91bmQge1xuICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAxMiUpIDAgNHB4IDE2cHg7XG59XG5cbi8qXG4gKiBTcGVha2VyIERldGFpbHNcbiAqL1xuXG4uc3BlYWtlci1kZXRhaWwgcCB7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xuICBtYXJnaW4tbGVmdDogNnB4O1xufVxuXG4uc3BlYWtlci1kZXRhaWwgaHIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 1721:
/*!*******************************************************************!*\
  !*** ./src/app/pages/speaker-list/speaker-list-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeakerListPageRoutingModule": () => (/* binding */ SpeakerListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _speaker_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speaker-list */ 2616);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);




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

/***/ 9467:
/*!***********************************************************!*\
  !*** ./src/app/pages/speaker-list/speaker-list.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeakerListModule": () => (/* binding */ SpeakerListModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4615);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 5992);
/* harmony import */ var _speaker_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speaker-list */ 2616);
/* harmony import */ var _speaker_list_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./speaker-list-routing.module */ 1721);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);





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

/***/ 2616:
/*!****************************************************!*\
  !*** ./src/app/pages/speaker-list/speaker-list.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeakerListPage": () => (/* binding */ SpeakerListPage)
/* harmony export */ });
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../providers/conference-data */ 9616);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4615);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 5992);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 6679);






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
  styles: [".speaker-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n\nion-col[_ngcontent-%COMP%]:not(:last-of-type)   .speaker-card[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.speaker-card[_ngcontent-%COMP%]   .speaker-item[_ngcontent-%COMP%] {\n  --min-height: 85px;\n}\n\n.speaker-card[_ngcontent-%COMP%]   .speaker-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  letter-spacing: 0.02em;\n}\n\n.speaker-card[_ngcontent-%COMP%]   .speaker-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  letter-spacing: 0.02em;\n}\n\n.speaker-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.speaker-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  padding: 0;\n}\n\n.ios[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.md[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  padding: 0;\n  border-top: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc3BlYWtlci1saXN0L3NwZWFrZXItbGlzdC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUVBLHNCQUFBO0FBQUY7O0FBR0E7O0VBQUE7QUFHQTtFQUNFLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsc0JBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7RUFFQSxzQkFBQTtBQUZGOztBQUtBO0VBQ0UsVUFBQTtBQUZGOztBQUtBO0VBQ0UsY0FBQTtFQUVBLFVBQUE7QUFIRjs7QUFNQTtFQUNFLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxVQUFBO0VBRUEsd0RBQUE7QUFKRiIsInNvdXJjZXNDb250ZW50IjpbIi5zcGVha2VyLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi8qIER1ZSB0byB0aGUgZmFjdCB0aGUgY2FyZHMgYXJlIGluc2lkZSBvZiBjb2x1bW5zIHRoZSBtYXJnaW5zIGRvbid0IG92ZXJsYXBcbiAqIHByb3Blcmx5IHNvIHdlIHdhbnQgdG8gcmVtb3ZlIHRoZSBleHRyYSBtYXJnaW4gYmV0d2VlbiBjYXJkc1xuICovXG5pb24tY29sOm5vdCg6bGFzdC1vZi10eXBlKSAuc3BlYWtlci1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnNwZWFrZXItY2FyZCAuc3BlYWtlci1pdGVtIHtcbiAgLS1taW4taGVpZ2h0OiA4NXB4O1xufVxuXG4uc3BlYWtlci1jYXJkIC5zcGVha2VyLWl0ZW0gaDIge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbn1cblxuLnNwZWFrZXItY2FyZCAuc3BlYWtlci1pdGVtIHAge1xuICBmb250LXNpemU6IDEzcHg7XG5cbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbn1cblxuLnNwZWFrZXItY2FyZCBpb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uc3BlYWtlci1jYXJkIGlvbi1jYXJkLWNvbnRlbnQge1xuICBmbGV4OiAxIDEgYXV0bztcblxuICBwYWRkaW5nOiAwO1xufVxuXG4uaW9zIGlvbi1saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm1kIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMDtcblxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 7134:
/*!*************************************************************!*\
  !*** ./src/app/pages/tabs-page/tabs-page-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-page */ 749);
/* harmony import */ var _schedule_schedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../schedule/schedule */ 4447);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);





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
      loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../session-detail/session-detail.module */ 8302)).then(m => m.SessionDetailModule)
    }]
  }, {
    path: 'speakers',
    children: [{
      path: '',
      loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../speaker-list/speaker-list.module */ 9467)).then(m => m.SpeakerListModule)
    }, {
      path: 'session/:sessionId',
      loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../session-detail/session-detail.module */ 8302)).then(m => m.SessionDetailModule)
    }, {
      path: 'speaker-details/:speakerId',
      loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../speaker-detail/speaker-detail.module */ 42)).then(m => m.SpeakerDetailModule)
    }]
  }, {
    path: 'map',
    children: [{
      path: '',
      loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../map/map.module */ 6016)).then(m => m.MapModule)
    }]
  }, {
    path: 'about',
    children: [{
      path: '',
      loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../about/about.module */ 8114)).then(m => m.AboutModule)
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

/***/ 78:
/*!*****************************************************!*\
  !*** ./src/app/pages/tabs-page/tabs-page.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsModule": () => (/* binding */ TabsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4615);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 5992);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-page */ 749);
/* harmony import */ var _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs-page-routing.module */ 7134);
/* harmony import */ var _about_about_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../about/about.module */ 8114);
/* harmony import */ var _map_map_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../map/map.module */ 6016);
/* harmony import */ var _schedule_schedule_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../schedule/schedule.module */ 1839);
/* harmony import */ var _session_detail_session_detail_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../session-detail/session-detail.module */ 8302);
/* harmony import */ var _speaker_detail_speaker_detail_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../speaker-detail/speaker-detail.module */ 42);
/* harmony import */ var _speaker_list_speaker_list_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../speaker-list/speaker-list.module */ 9467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 6839);











class TabsModule {}
TabsModule.ɵfac = function TabsModule_Factory(t) {
  return new (t || TabsModule)();
};
TabsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: TabsModule
});
TabsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [_about_about_module__WEBPACK_IMPORTED_MODULE_2__.AboutModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule, _map_map_module__WEBPACK_IMPORTED_MODULE_3__.MapModule, _schedule_schedule_module__WEBPACK_IMPORTED_MODULE_4__.ScheduleModule, _session_detail_session_detail_module__WEBPACK_IMPORTED_MODULE_5__.SessionDetailModule, _speaker_detail_speaker_detail_module__WEBPACK_IMPORTED_MODULE_6__.SpeakerDetailModule, _speaker_list_speaker_list_module__WEBPACK_IMPORTED_MODULE_7__.SpeakerListModule, _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_1__.TabsPageRoutingModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](TabsModule, {
    declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage],
    imports: [_about_about_module__WEBPACK_IMPORTED_MODULE_2__.AboutModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule, _map_map_module__WEBPACK_IMPORTED_MODULE_3__.MapModule, _schedule_schedule_module__WEBPACK_IMPORTED_MODULE_4__.ScheduleModule, _session_detail_session_detail_module__WEBPACK_IMPORTED_MODULE_5__.SessionDetailModule, _speaker_detail_speaker_detail_module__WEBPACK_IMPORTED_MODULE_6__.SpeakerDetailModule, _speaker_list_speaker_list_module__WEBPACK_IMPORTED_MODULE_7__.SpeakerListModule, _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_1__.TabsPageRoutingModule]
  });
})();

/***/ }),

/***/ 749:
/*!**********************************************!*\
  !*** ./src/app/pages/tabs-page/tabs-page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 5992);


class TabsPage {}
TabsPage.ɵfac = function TabsPage_Factory(t) {
  return new (t || TabsPage)();
};
TabsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TabsPage,
  selectors: [["ng-component"]],
  decls: 18,
  vars: 0,
  consts: [["slot", "bottom"], ["tab", "schedule"], ["name", "calendar"], ["tab", "speakers"], ["name", "people"], ["tab", "map"], ["name", "location"], ["tab", "about"], ["name", "information-circle"]],
  template: function TabsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-tabs")(1, "ion-tab-bar", 0)(2, "ion-tab-button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Schedule");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-tab-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ion-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Speakers");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-tab-button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "ion-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Map");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-tab-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "ion-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "About");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonTabBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonTabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonTabs],
  encapsulation: 2
});


/***/ }),

/***/ 9616:
/*!**********************************************!*\
  !*** ./src/app/providers/conference-data.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConferenceData": () => (/* binding */ ConferenceData)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _user_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-data */ 6401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 3765);







class ConferenceData {
  constructor(http, user) {
    this.http = http;
    this.user = user;
  }
  load() {
    if (this.data) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.data);
    } else {
      return this.http.get('assets/data/data.json').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(this.processData, this));
    }
  }
  processData(data) {
    // just some good 'ol JS fun with objects and arrays
    // build up the data by linking speakers to sessions
    this.data = data;
    // loop through each day in the schedule
    this.data.schedule.forEach(day => {
      // loop through each timeline group in the day
      day.groups.forEach(group => {
        // loop through each session in the timeline group
        group.sessions.forEach(session => {
          session.speakers = [];
          if (session.speakerNames) {
            session.speakerNames.forEach(speakerName => {
              const speaker = this.data.speakers.find(s => s.name === speakerName);
              if (speaker) {
                session.speakers.push(speaker);
                speaker.sessions = speaker.sessions || [];
                speaker.sessions.push(session);
              }
            });
          }
        });
      });
    });
    return this.data;
  }
  getTimeline(dayIndex, queryText = '', excludeTracks = [], segment = 'all') {
    return this.load().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(data => {
      const day = data.schedule[dayIndex];
      day.shownSessions = 0;
      queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
      const queryWords = queryText.split(' ').filter(w => !!w.trim().length);
      day.groups.forEach(group => {
        group.hide = true;
        group.sessions.forEach(session => {
          // check if this session should show or not
          this.filterSession(session, queryWords, excludeTracks, segment);
          if (!session.hide) {
            // if this session is not hidden then this group should show
            group.hide = false;
            day.shownSessions++;
          }
        });
      });
      return day;
    }));
  }
  filterSession(session, queryWords, excludeTracks, segment) {
    let matchesQueryText = false;
    if (queryWords.length) {
      // of any query word is in the session name than it passes the query test
      queryWords.forEach(queryWord => {
        if (session.name.toLowerCase().indexOf(queryWord) > -1) {
          matchesQueryText = true;
        }
      });
    } else {
      // if there are no query words then this session passes the query test
      matchesQueryText = true;
    }
    // if any of the sessions tracks are not in the
    // exclude tracks then this session passes the track test
    let matchesTracks = false;
    session.tracks.forEach(trackName => {
      if (excludeTracks.indexOf(trackName) === -1) {
        matchesTracks = true;
      }
    });
    // if the segment is 'favorites', but session is not a user favorite
    // then this session does not pass the segment test
    let matchesSegment = false;
    if (segment === 'favorites') {
      if (this.user.hasFavorite(session.name)) {
        matchesSegment = true;
      }
    } else {
      matchesSegment = true;
    }
    // all tests must be true if it should not be hidden
    session.hide = !(matchesQueryText && matchesTracks && matchesSegment);
  }
  getSpeakers() {
    return this.load().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(data => {
      return data.speakers.sort((a, b) => {
        const aName = a.name.split(' ').pop();
        const bName = b.name.split(' ').pop();
        return aName.localeCompare(bName);
      });
    }));
  }
  getTracks() {
    return this.load().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(data => {
      return data.tracks.sort();
    }));
  }
  getMap() {
    return this.load().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(data => {
      return data.map;
    }));
  }
}
ConferenceData.ɵfac = function ConferenceData_Factory(t) {
  return new (t || ConferenceData)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_user_data__WEBPACK_IMPORTED_MODULE_0__.UserData));
};
ConferenceData.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ConferenceData,
  factory: ConferenceData.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 2160:
/*!*********************************************!*\
  !*** ./src/app/pages/map/map-dark-style.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "darkStyle": () => (/* binding */ darkStyle)
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwcF9wYWdlc190YWJzLXBhZ2VfdGFicy1wYWdlX21vZHVsZV90cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFbUQ7OztBQUVuRCxNQXFCYUMsV0FBVztFQUN0QkMsWUFBbUJDLFdBQThCO0lBQTlCLEtBQUFBLFdBQVcsR0FBWEEsV0FBVztFQUFzQjtFQUVwREMsT0FBT0EsQ0FBQTtJQUNMO0lBQ0EsSUFBSSxDQUFDRCxXQUFXLENBQUNFLE9BQU8sRUFBRTtFQUM1QjtFQUVBQyxLQUFLQSxDQUFDQyxHQUFXO0lBQ2ZDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDRixHQUFHLEVBQUUsUUFBUSxDQUFDO0lBQzFCLElBQUksQ0FBQ0osV0FBVyxDQUFDRSxPQUFPLEVBQUU7RUFDNUI7O0FBWFdKLFdBQVc7bUJBQVhBLFdBQVcsRUFBQVMsK0RBQUEsQ0FBQUUsNkRBQUE7QUFBQTtBQUFYWCxXQUFXO1FBQVhBLFdBQVc7RUFBQVksU0FBQTtFQUFBQyxLQUFBO0VBQUFDLElBQUE7RUFBQUMsTUFBQTtFQUFBQyxRQUFBLFdBQUFDLHFCQUFBQyxFQUFBLEVBQUFDLEdBQUE7SUFBQSxJQUFBRCxFQUFBO01BbkJwQlQsNERBQUEsZUFBVTtNQUNTQSx3REFBQSxtQkFBQWEsK0NBQUE7UUFBQSxPQUFTSCxHQUFBLENBQUFkLEtBQUEsQ0FBTSw0Q0FBNEMsQ0FBQztNQUFBLEVBQUM7TUFDNUVJLDREQUFBLGdCQUFXO01BQUFBLG9EQUFBLGtCQUFXO01BQUFBLDBEQUFBLEVBQVk7TUFFcENBLDREQUFBLGtCQUFxRTtNQUFwREEsd0RBQUEsbUJBQUFnQiwrQ0FBQTtRQUFBLE9BQVNOLEdBQUEsQ0FBQWQsS0FBQSxDQUFNLGtDQUFrQyxDQUFDO01BQUEsRUFBQztNQUNsRUksNERBQUEsZ0JBQVc7TUFBQUEsb0RBQUEsb0JBQWE7TUFBQUEsMERBQUEsRUFBWTtNQUV0Q0EsNERBQUEsa0JBQXdFO01BQXZEQSx3REFBQSxtQkFBQWlCLCtDQUFBO1FBQUEsT0FBU1AsR0FB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QU8sRUFBRTtFQUNYLENBQUM7QUFFTCxDQUFDLEVBQ0Q7RUFDRSxhQUFhLEVBQUUsY0FBYztFQUM3QixhQUFhLEVBQUUsa0JBQWtCO0VBQ2pDLFNBQVMsRUFBRSxDQUNUO0lBQ0UsT0FBTyxFQUFFO0VBQ1gsQ0FBQztBQUVMLENBQUMsRUFDRDtFQUNFLGFBQWEsRUFBRSxTQUFTO0VBQ3hCLGFBQWEsRUFBRSxVQUFVO0VBQ3pCLFNBQVMsRUFBRSxDQUNUO0lBQ0UsT0FBTyxFQUFFO0VBQ1gsQ0FBQztBQUVMLENBQUMsRUFDRDtFQUNFLGFBQWEsRUFBRSxpQkFBaUI7RUFDaEMsYUFBYSxFQUFFLGtCQUFrQjtFQUNqQyxTQUFTLEVBQUUsQ0FDVDtJQUNFLE9BQU8sRUFBRTtFQUNYLENBQUM7QUFFTCxDQUFDLEVBQ0Q7RUFDRSxhQUFhLEVBQUUsT0FBTztFQUN0QixhQUFhLEVBQUUsVUFBVTtFQUN6QixTQUFTLEVBQUUsQ0FDVDtJQUNFLE9BQU8sRUFBRTtFQUNYLENBQUM7QUFFTCxDQUFDLEVBQ0Q7RUFDRSxhQUFhLEVBQUUsT0FBTztFQUN0QixhQUFhLEVBQUUsa0JBQWtCO0VBQ2pDLFNBQVMsRUFBRSxDQUNUO0lBQ0UsT0FBTyxFQUFFO0VBQ1gsQ0FBQztBQUVMLENBQUMsRUFDRDtFQUNFLGFBQWEsRUFBRSxPQUFPO0VBQ3RCLGFBQWEsRUFBRSxvQkFBb0I7RUFDbkMsU0FBUyxFQUFFLENBQ1Q7SUFDRSxPQUFPLEVBQUU7RUFDWCxDQUFDO0FBRUwsQ0FBQyxDQUNGIiwic291cmNlcyI6WyIuL3NyYy9hcHAvcGFnZXMvYWJvdXQtcG9wb3Zlci9hYm91dC1wb3BvdmVyLnRzIiwiLi9zcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LXJvdXRpbmcubW9kdWxlLnRzIiwiLi9zcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0Lm1vZHVsZS50cyIsIi4vc3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC50cyIsIi4vc3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC5odG1sIiwiLi9zcmMvYXBwL3BhZ2VzL21hcC9tYXAtcm91dGluZy5tb2R1bGUudHMiLCIuL3NyYy9hcHAvcGFnZXMvbWFwL21hcC5tb2R1bGUudHMiLCIuL3NyYy9hcHAvcGFnZXMvbWFwL21hcC50cyIsIi4vc3JjL2FwcC9wYWdlcy9tYXAvbWFwLmh0bWwiLCIuL3NyYy9hcHAvcGFnZXMvc2NoZWR1bGUtZmlsdGVyL3NjaGVkdWxlLWZpbHRlci50cyIsIi4vc3JjL2FwcC9wYWdlcy9zY2hlZHVsZS1maWx0ZXIvc2NoZWR1bGUtZmlsdGVyLmh0bWwiLCIuL3NyYy9hcHAvcGFnZXMvc2NoZWR1bGUvc2NoZWR1bGUtcm91dGluZy5tb2R1bGUudHMiLCIuL3NyYy9hcHAvcGFnZXMvc2NoZWR1bGUvc2NoZWR1bGUubW9kdWxlLnRzIiwiLi9zcmMvYXBwL3BhZ2VzL3NjaGVkdWxlL3NjaGVkdWxlLnRzIiwiLi9zcmMvYXBwL3BhZ2VzL3NjaGVkdWxlL3NjaGVkdWxlLmh0bWwiLCIuL3NyYy9hcHAvcGFnZXMvc2Vzc2lvbi1kZXRhaWwvc2Vzc2lvbi1kZXRhaWwtcm91dGluZy5tb2R1bGUudHMiLCIuL3NyYy9hcHAvcGFnZXMvc2Vzc2lvbi1kZXRhaWwvc2Vzc2lvbi1kZXRhaWwubW9kdWxlLnRzIiwiLi9zcmMvYXBwL3BhZ2VzL3Nlc3Npb24tZGV0YWlsL3Nlc3Npb24tZGV0YWlsLnRzIiwiLi9zcmMvYXBwL3BhZ2VzL3Nlc3Npb24tZGV0YWlsL3Nlc3Npb24tZGV0YWlsLmh0bWwiLCIuL3NyYy9hcHAvcGFnZXMvc3BlYWtlci1kZXRhaWwvc3BlYWtlci1kZXRhaWwtcm91dGluZy5tb2R1bGUudHMiLCIuL3NyYy9hcHAvcGFnZXMvc3BlYWtlci1kZXRhaWwvc3BlYWtlci1kZXRhaWwubW9kdWxlLnRzIiwiLi9zcmMvYXBwL3BhZ2VzL3NwZWFrZXItZGV0YWlsL3NwZWFrZXItZGV0YWlsLnRzIiwiLi9zcmMvYXBwL3BhZ2VzL3NwZWFrZXItZGV0YWlsL3NwZWFrZXItZGV0YWlsLmh0bWwiLCIuL3NyYy9hcHAvcGFnZXMvc3BlYWtlci1saXN0L3NwZWFrZXItbGlzdC1yb3V0aW5nLm1vZHVsZS50cyIsIi4vc3JjL2FwcC9wYWdlcy9zcGVha2VyLWxpc3Qvc3BlYWtlci1saXN0Lm1vZHVsZS50cyIsIi4vc3JjL2FwcC9wYWdlcy9zcGVha2VyLWxpc3Qvc3BlYWtlci1saXN0LnRzIiwiLi9zcmMvYXBwL3BhZ2VzL3NwZWFrZXItbGlzdC9zcGVha2VyLWxpc3QuaHRtbCIsIi4vc3JjL2FwcC9wYWdlcy90YWJzLXBhZ2UvdGFicy1wYWdlLXJvdXRpbmcubW9kdWxlLnRzIiwiLi9zcmMvYXBwL3BhZ2VzL3RhYnMtcGFnZS90YWJzLXBhZ2UubW9kdWxlLnRzIiwiLi9zcmMvYXBwL3BhZ2VzL3RhYnMtcGFnZS90YWJzLXBhZ2UudHMiLCIuL3NyYy9hcHAvcGFnZXMvdGFicy1wYWdlL3RhYnMtcGFnZS5odG1sIiwiLi9zcmMvYXBwL3Byb3ZpZGVycy9jb25mZXJlbmNlLWRhdGEudHMiLCIuL3NyYy9hcHAvcGFnZXMvbWFwL21hcC1kYXJrLXN0eWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQb3BvdmVyQ29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiBgXG4gICAgPGlvbi1saXN0PlxuICAgICAgPGlvbi1pdGVtIGJ1dHRvbiAoY2xpY2spPVwiY2xvc2UoJ2h0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2dldHRpbmctc3RhcnRlZCcpXCI+XG4gICAgICAgIDxpb24tbGFiZWw+TGVhcm4gSW9uaWM8L2lvbi1sYWJlbD5cbiAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICA8aW9uLWl0ZW0gYnV0dG9uIChjbGljayk9XCJjbG9zZSgnaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy8nKVwiPlxuICAgICAgICA8aW9uLWxhYmVsPkRvY3VtZW50YXRpb248L2lvbi1sYWJlbD5cbiAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICA8aW9uLWl0ZW0gYnV0dG9uIChjbGljayk9XCJjbG9zZSgnaHR0cHM6Ly9zaG93Y2FzZS5pb25pY2ZyYW1ld29yay5jb20nKVwiPlxuICAgICAgICA8aW9uLWxhYmVsPlNob3djYXNlPC9pb24tbGFiZWw+XG4gICAgICA8L2lvbi1pdGVtPlxuICAgICAgPGlvbi1pdGVtIGJ1dHRvbiAoY2xpY2spPVwiY2xvc2UoJ2h0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljJylcIj5cbiAgICAgICAgPGlvbi1sYWJlbD5HaXRIdWIgUmVwbzwvaW9uLWxhYmVsPlxuICAgICAgPC9pb24taXRlbT5cbiAgICAgIDxpb24taXRlbSBidXR0b24gKGNsaWNrKT1cInN1cHBvcnQoKVwiPlxuICAgICAgICA8aW9uLWxhYmVsPlN1cHBvcnQ8L2lvbi1sYWJlbD5cbiAgICAgIDwvaW9uLWl0ZW0+XG4gICAgPC9pb24tbGlzdD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBQb3BvdmVyUGFnZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwb3BvdmVyQ3RybDogUG9wb3ZlckNvbnRyb2xsZXIpIHt9XG5cbiAgc3VwcG9ydCgpIHtcbiAgICAvLyB0aGlzLmFwcC5nZXRSb290TmF2cygpWzBdLnB1c2goJy9zdXBwb3J0Jyk7XG4gICAgdGhpcy5wb3BvdmVyQ3RybC5kaXNtaXNzKCk7XG4gIH1cblxuICBjbG9zZSh1cmw6IHN0cmluZykge1xuICAgIHdpbmRvdy5vcGVuKHVybCwgJ19ibGFuaycpO1xuICAgIHRoaXMucG9wb3ZlckN0cmwuZGlzbWlzcygpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBYm91dFBhZ2UgfSBmcm9tICcuL2Fib3V0JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICBjb21wb25lbnQ6IEFib3V0UGFnZVxuICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBYm91dFBhZ2VSb3V0aW5nTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5pbXBvcnQgeyBBYm91dFBhZ2UgfSBmcm9tICcuL2Fib3V0JztcbmltcG9ydCB7IFBvcG92ZXJQYWdlIH0gZnJvbSAnLi4vYWJvdXQtcG9wb3Zlci9hYm91dC1wb3BvdmVyJztcbmltcG9ydCB7IEFib3V0UGFnZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2Fib3V0LXJvdXRpbmcubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIElvbmljTW9kdWxlLFxuICAgICAgICBBYm91dFBhZ2VSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtBYm91dFBhZ2UsIFBvcG92ZXJQYWdlXSxcbiAgICBib290c3RyYXA6IFtBYm91dFBhZ2VdXG59KVxuZXhwb3J0IGNsYXNzIEFib3V0TW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUG9wb3ZlckNvbnRyb2xsZXIgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5cbmltcG9ydCB7IFBvcG92ZXJQYWdlIH0gZnJvbSAnLi4vYWJvdXQtcG9wb3Zlci9hYm91dC1wb3BvdmVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1hYm91dCcsXG4gIHRlbXBsYXRlVXJsOiAnYWJvdXQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Fib3V0LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQWJvdXRQYWdlIHtcbiAgbG9jYXRpb24gPSAnbWFkaXNvbic7XG4gIGNvbmZlcmVuY2VEYXRlID0gJzIwNDctMDUtMTcnO1xuXG4gIHNlbGVjdE9wdGlvbnMgPSB7XG4gICAgaGVhZGVyOiAnU2VsZWN0IGEgTG9jYXRpb24nXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBvcG92ZXJDdHJsOiBQb3BvdmVyQ29udHJvbGxlcikgeyB9XG5cbiAgYXN5bmMgcHJlc2VudFBvcG92ZXIoZXZlbnQ6IEV2ZW50KSB7XG4gICAgY29uc3QgcG9wb3ZlciA9IGF3YWl0IHRoaXMucG9wb3ZlckN0cmwuY3JlYXRlKHtcbiAgICAgIGNvbXBvbmVudDogUG9wb3ZlclBhZ2UsXG4gICAgICBldmVudFxuICAgIH0pO1xuICAgIGF3YWl0IHBvcG92ZXIucHJlc2VudCgpO1xuICB9XG59XG4iLCI8aW9uLWNvbnRlbnQ+XG4gIDxpb24taGVhZGVyIGNsYXNzPVwiaW9uLW5vLWJvcmRlclwiPlxuICAgIDxpb24tdG9vbGJhcj5cbiAgICAgIDxpb24tYnV0dG9ucyBzbG90PVwic3RhcnRcIj5cbiAgICAgICAgPGlvbi1tZW51LWJ1dHRvbj48L2lvbi1tZW51LWJ1dHRvbj5cbiAgICAgIDwvaW9uLWJ1dHRvbnM+XG4gICAgICA8aW9uLWJ1dHRvbnMgc2xvdD1cImVuZFwiPlxuICAgICAgICA8aW9uLWJ1dHRvbiAoY2xpY2spPVwicHJlc2VudFBvcG92ZXIoJGV2ZW50KVwiPlxuICAgICAgICAgIDxpb24taWNvbiBzbG90PVwiaWNvbi1vbmx5XCIgaW9zPVwiZWxsaXBzaXMtaG9yaXpvbnRhbFwiIG1kPVwiZWxsaXBzaXMtdmVydGljYWxcIj48L2lvbi1pY29uPlxuICAgICAgICA8L2lvbi1idXR0b24+XG4gICAgICA8L2lvbi1idXR0b25zPlxuICAgIDwvaW9uLXRvb2xiYXI+XG4gIDwvaW9uLWhlYWRlcj5cblxuICA8ZGl2IGNsYXNzPVwiYWJvdXQtaGVhZGVyXCI+XG4gICAgPCEtLSBJbnN0ZWFkIG9mIGxvYWRpbmcgYW4gaW1hZ2UgZWFjaCB0aW1lIHRoZSBzZWxlY3QgY2hhbmdlcywgdXNlIG9wYWNpdHkgdG8gdHJhbnNpdGlvbiB0aGVtIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJhYm91dC1pbWFnZSBtYWRpc29uXCIgW25nU3R5bGVdPVwibG9jYXRpb24gPT09ICdtYWRpc29uJyAmJiB7J29wYWNpdHknOiAnMSd9XCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImFib3V0LWltYWdlIGF1c3RpblwiIFtuZ1N0eWxlXT1cImxvY2F0aW9uID09PSAnYXVzdGluJyAmJiB7J29wYWNpdHknOiAnMSd9XCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImFib3V0LWltYWdlIGNoaWNhZ29cIiBbbmdTdHlsZV09XCJsb2NhdGlvbiA9PT0gJ2NoaWNhZ28nICYmIHsnb3BhY2l0eSc6ICcxJ31cIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYWJvdXQtaW1hZ2Ugc2VhdHRsZVwiIFtuZ1N0eWxlXT1cImxvY2F0aW9uID09PSAnc2VhdHRsZScgJiYgeydvcGFjaXR5JzogJzEnfVwiPjwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiYWJvdXQtaW5mb1wiPlxuICAgIDxoMyBjbGFzcz1cImlvbi1wYWRkaW5nLXRvcCBpb24tcGFkZGluZy1zdGFydFwiPkFib3V0PC9oMz5cblxuICAgIDxwIGNsYXNzPVwiaW9uLXBhZGRpbmctc3RhcnQgaW9uLXBhZGRpbmctZW5kXCI+XG4gICAgICBUaGUgSW9uaWMgQ29uZmVyZW5jZSBpcyBhIG9uZS1kYXkgY29uZmVyZW5jZSBvbiB7eyBjb25mZXJlbmNlRGF0ZSB8IGRhdGU6ICdtZWRpdW1EYXRlJyB9fSBmZWF0dXJpbmcgdGFsa3MgZnJvbSB0aGUgSW9uaWMgdGVhbS4gSXQgaXMgZm9jdXNlZCBvbiBJb25pYyBhcHBsaWNhdGlvbnMgYmVpbmcgYnVpbHQgd2l0aCBJb25pYyBGcmFtZXdvcmsuIFRoaXMgaW5jbHVkZXMgbWlncmF0aW5nIGFwcHMgdG8gdGhlIGxhdGVzdCB2ZXJzaW9uIG9mIHRoZSBmcmFtZXdvcmssIEFuZ3VsYXIgY29uY2VwdHMsIFdlYnBhY2ssIFNhc3MsIGFuZCBtYW55IG90aGVyIHRlY2hub2xvZ2llcyB1c2VkIGluIElvbmljIDIuIFRpY2tldHMgYXJlIGNvbXBsZXRlbHkgc29sZCBvdXQsIGFuZCB3ZeKAmXJlIGV4cGVjdGluZyBtb3JlIHRoYW4gMTAwMCBkZXZlbG9wZXJzIOKAkyBtYWtpbmcgdGhpcyB0aGUgbGFyZ2VzdCBJb25pYyBjb25mZXJlbmNlIGV2ZXIhXG4gICAgPC9wPlxuXG4gICAgPGgzIGNsYXNzPVwiaW9uLXBhZGRpbmctdG9wIGlvbi1wYWRkaW5nLXN0YXJ0XCI+RGV0YWlsczwvaDM+XG5cbiAgICA8aW9uLWxpc3QgbGluZXM9XCJub25lXCI+XG4gICAgICA8aW9uLWl0ZW0+XG4gICAgICAgIDxpb24tc2VsZWN0IGxhYmVsPVwiTG9jYXRpb25cIiBbKG5nTW9kZWwpXT1cImxvY2F0aW9uXCIgW2ludGVyZmFjZU9wdGlvbnNdPVwic2VsZWN0T3B0aW9uc1wiPlxuICAgICAgICAgIDxpb24tc2VsZWN0LW9wdGlvbiB2YWx1ZT1cIm1hZGlzb25cIj5NYWRpc29uLCBXSTwvaW9uLXNlbGVjdC1vcHRpb24+XG4gICAgICAgICAgPGlvbi1zZWxlY3Qtb3B0aW9uIHZhbHVlPVwiYXVzdGluXCI+QXVzdGluLCBUWDwvaW9uLXNlbGVjdC1vcHRpb24+XG4gICAgICAgICAgPGlvbi1zZWxlY3Qtb3B0aW9uIHZhbHVlPVwiY2hpY2Fnb1wiPkNoaWNhZ28sIElMPC9pb24tc2VsZWN0LW9wdGlvbj5cbiAgICAgICAgICA8aW9uLXNlbGVjdC1vcHRpb24gdmFsdWU9XCJzZWF0dGxlXCI+U2VhdHRsZSwgV0E8L2lvbi1zZWxlY3Qtb3B0aW9uPlxuICAgICAgICA8L2lvbi1zZWxlY3Q+XG4gICAgICA8L2lvbi1pdGVtPlxuICAgICAgPGlvbi1pdGVtIGJ1dHRvbj1cInRydWVcIiBpZD1cIm9wZW4tZGF0ZS1pbnB1dFwiPlxuICAgICAgICA8aW9uLWxhYmVsPlxuICAgICAgICAgIERhdGVcbiAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICAgIDxpb24tdGV4dCBzbG90PVwiZW5kXCI+e3sgY29uZmVyZW5jZURhdGUgfCBkYXRlOiAnbWVkaXVtRGF0ZScgfX08L2lvbi10ZXh0PlxuICAgICAgICA8aW9uLXBvcG92ZXIgaWQ9XCJkYXRlLWlucHV0LXBvcG92ZXJcIiB0cmlnZ2VyPVwib3Blbi1kYXRlLWlucHV0XCIgW3Nob3dCYWNrZHJvcF09XCJmYWxzZVwiIHNpZGU9XCJ0b3BcIiBhbGlnbm1lbnQ9XCJlbmRcIj5cbiAgICAgICAgICA8bmctdGVtcGxhdGU+XG4gICAgICAgICAgICA8aW9uLWRhdGV0aW1lIG1heD1cIjIwNTZcIiBbKG5nTW9kZWwpXT1cImNvbmZlcmVuY2VEYXRlXCIgcHJlc2VudGF0aW9uPVwiZGF0ZVwiPjwvaW9uLWRhdGV0aW1lPlxuICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvaW9uLXBvcG92ZXI+XG4gICAgICA8L2lvbi1pdGVtPlxuICAgIDwvaW9uLWxpc3Q+XG5cbiAgICA8aDMgY2xhc3M9XCJpb24tcGFkZGluZy10b3AgaW9uLXBhZGRpbmctc3RhcnRcIj5JbnRlcm5ldDwvaDM+XG5cbiAgICA8aW9uLWxpc3QgbGluZXM9XCJub25lXCI+XG4gICAgICA8aW9uLWl0ZW0+XG4gICAgICAgIDxpb24tbGFiZWw+XG4gICAgICAgICAgV2lmaSBuZXR3b3JrXG4gICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICA8aW9uLWxhYmVsIGNsYXNzPVwiaW9uLXRleHQtZW5kXCI+XG4gICAgICAgICAgaWNhe3tjb25mZXJlbmNlRGF0ZSB8IGRhdGU6ICd5J319XG4gICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgPC9pb24taXRlbT5cbiAgICAgIDxpb24taXRlbT5cbiAgICAgICAgPGlvbi1sYWJlbD5cbiAgICAgICAgICBQYXNzd29yZFxuICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgICAgPGlvbi1sYWJlbCBjbGFzcz1cImlvbi10ZXh0LWVuZFwiPlxuICAgICAgICAgIG1ha2Vnb29kdGhpbmdzXG4gICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgPC9pb24taXRlbT5cbiAgICA8L2lvbi1saXN0PlxuICA8L2Rpdj5cbjwvaW9uLWNvbnRlbnQ+XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBNYXBQYWdlIH0gZnJvbSAnLi9tYXAnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIGNvbXBvbmVudDogTWFwUGFnZVxuICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBNYXBQYWdlUm91dGluZ01vZHVsZSB7IH1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5cbmltcG9ydCB7IE1hcFBhZ2UgfSBmcm9tICcuL21hcCc7XG5pbXBvcnQgeyBNYXBQYWdlUm91dGluZ01vZHVsZSB9IGZyb20gJy4vbWFwLXJvdXRpbmcubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBJb25pY01vZHVsZSxcbiAgICBNYXBQYWdlUm91dGluZ01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBNYXBQYWdlLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE1hcE1vZHVsZSB7IH1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5qZWN0LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZlcmVuY2VEYXRhIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2NvbmZlcmVuY2UtZGF0YSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IERPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBkYXJrU3R5bGUgfSBmcm9tICcuL21hcC1kYXJrLXN0eWxlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1tYXAnLFxuICB0ZW1wbGF0ZVVybDogJ21hcC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWFwLnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNYXBQYWdlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ21hcENhbnZhcycsIHsgc3RhdGljOiB0cnVlIH0pIG1hcEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IERvY3VtZW50LFxuICAgIHB1YmxpYyBjb25mRGF0YTogQ29uZmVyZW5jZURhdGEsXG4gICAgcHVibGljIHBsYXRmb3JtOiBQbGF0Zm9ybSkge31cblxuICBhc3luYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc3QgYXBwRWwgPSB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKCdpb24tYXBwJyk7XG4gICAgbGV0IGlzRGFyayA9IGZhbHNlO1xuICAgIGxldCBzdHlsZSA9IFtdO1xuICAgIGlmIChhcHBFbC5jbGFzc0xpc3QuY29udGFpbnMoJ2RhcmstdGhlbWUnKSkge1xuICAgICAgc3R5bGUgPSBkYXJrU3R5bGU7XG4gICAgfVxuXG4gICAgY29uc3QgZ29vZ2xlTWFwcyA9IGF3YWl0IGdldEdvb2dsZU1hcHMoXG4gICAgICAnWU9VUl9BUElfS0VZX0hFUkUnXG4gICAgKTtcblxuICAgIGxldCBtYXA7XG5cbiAgICB0aGlzLmNvbmZEYXRhLmdldE1hcCgpLnN1YnNjcmliZSgobWFwRGF0YTogYW55KSA9PiB7XG4gICAgICBjb25zdCBtYXBFbGUgPSB0aGlzLm1hcEVsZW1lbnQubmF0aXZlRWxlbWVudDtcblxuICAgICAgbWFwID0gbmV3IGdvb2dsZU1hcHMuTWFwKG1hcEVsZSwge1xuICAgICAgICBjZW50ZXI6IG1hcERhdGEuZmluZCgoZDogYW55KSA9PiBkLmNlbnRlciksXG4gICAgICAgIHpvb206IDE2LFxuICAgICAgICBzdHlsZXM6IHN0eWxlXG4gICAgICB9KTtcblxuICAgICAgbWFwRGF0YS5mb3JFYWNoKChtYXJrZXJEYXRhOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgaW5mb1dpbmRvdyA9IG5ldyBnb29nbGVNYXBzLkluZm9XaW5kb3coe1xuICAgICAgICAgIGNvbnRlbnQ6IGA8aDU+JHttYXJrZXJEYXRhLm5hbWV9PC9oNT5gXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IG1hcmtlciA9IG5ldyBnb29nbGVNYXBzLk1hcmtlcih7XG4gICAgICAgICAgcG9zaXRpb246IG1hcmtlckRhdGEsXG4gICAgICAgICAgbWFwLFxuICAgICAgICAgIHRpdGxlOiBtYXJrZXJEYXRhLm5hbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWFya2VyLmFkZExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBpbmZvV2luZG93Lm9wZW4obWFwLCBtYXJrZXIpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBnb29nbGVNYXBzLmV2ZW50LmFkZExpc3RlbmVyT25jZShtYXAsICdpZGxlJywgKCkgPT4ge1xuICAgICAgICBtYXBFbGUuY2xhc3NMaXN0LmFkZCgnc2hvdy1tYXAnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XG4gICAgICBtdXRhdGlvbnMuZm9yRWFjaCgobXV0YXRpb24pID0+IHtcbiAgICAgICAgaWYgKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdjbGFzcycpIHtcbiAgICAgICAgICBjb25zdCBlbCA9IG11dGF0aW9uLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICBpc0RhcmsgPSBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2RhcmstdGhlbWUnKTtcbiAgICAgICAgICBpZiAobWFwICYmIGlzRGFyaykge1xuICAgICAgICAgICAgbWFwLnNldE9wdGlvbnMoe3N0eWxlczogZGFya1N0eWxlfSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChtYXApIHtcbiAgICAgICAgICAgIG1hcC5zZXRPcHRpb25zKHtzdHlsZXM6IFtdfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGFwcEVsLCB7XG4gICAgICBhdHRyaWJ1dGVzOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0R29vZ2xlTWFwcyhhcGlLZXk6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gIGNvbnN0IHdpbiA9IHdpbmRvdyBhcyBhbnk7XG4gIGNvbnN0IGdvb2dsZU1vZHVsZSA9IHdpbi5nb29nbGU7XG4gIGlmIChnb29nbGVNb2R1bGUgJiYgZ29vZ2xlTW9kdWxlLm1hcHMpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGdvb2dsZU1vZHVsZS5tYXBzKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgc2NyaXB0LnNyYyA9IGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/a2V5PSR7YXBpS2V5fSZ2PTMuMzFgO1xuICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gICAgc2NyaXB0LmRlZmVyID0gdHJ1ZTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGdvb2dsZU1vZHVsZTIgPSB3aW4uZ29vZ2xlO1xuICAgICAgaWYgKGdvb2dsZU1vZHVsZTIgJiYgZ29vZ2xlTW9kdWxlMi5tYXBzKSB7XG4gICAgICAgIHJlc29sdmUoZ29vZ2xlTW9kdWxlMi5tYXBzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlamVjdCgnZ29vZ2xlIG1hcHMgbm90IGF2YWlsYWJsZScpO1xuICAgICAgfVxuICAgIH07XG4gIH0pO1xufVxuXG4iLCI8aW9uLWhlYWRlcj5cbiAgPGlvbi10b29sYmFyPlxuICAgIDxpb24tYnV0dG9ucyBzbG90PVwic3RhcnRcIj5cbiAgICAgIDxpb24tbWVudS1idXR0b24+PC9pb24tbWVudS1idXR0b24+XG4gICAgPC9pb24tYnV0dG9ucz5cbiAgICA8aW9uLXRpdGxlPk1hcDwvaW9uLXRpdGxlPlxuICA8L2lvbi10b29sYmFyPlxuPC9pb24taGVhZGVyPlxuXG48aW9uLWNvbnRlbnQ+XG4gIDxkaXYgI21hcENhbnZhcyBjbGFzcz1cIm1hcC1jYW52YXNcIj48L2Rpdj5cbjwvaW9uLWNvbnRlbnQ+XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZywgTW9kYWxDb250cm9sbGVyLCBOYXZQYXJhbXMgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5cbmltcG9ydCB7IENvbmZlcmVuY2VEYXRhIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2NvbmZlcmVuY2UtZGF0YSc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1zY2hlZHVsZS1maWx0ZXInLFxuICB0ZW1wbGF0ZVVybDogJ3NjaGVkdWxlLWZpbHRlci5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2NoZWR1bGUtZmlsdGVyLnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2NoZWR1bGVGaWx0ZXJQYWdlIHtcbiAgaW9zOiBib29sZWFuO1xuXG4gIHRyYWNrczoge25hbWU6IHN0cmluZywgaWNvbjogc3RyaW5nLCBpc0NoZWNrZWQ6IGJvb2xlYW59W10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY29uZkRhdGE6IENvbmZlcmVuY2VEYXRhLFxuICAgIHByaXZhdGUgY29uZmlnOiBDb25maWcsXG4gICAgcHVibGljIG1vZGFsQ3RybDogTW9kYWxDb250cm9sbGVyLFxuICAgIHB1YmxpYyBuYXZQYXJhbXM6IE5hdlBhcmFtc1xuICApIHsgfVxuXG4gIGlvblZpZXdXaWxsRW50ZXIoKSB7XG4gICAgdGhpcy5pb3MgPSB0aGlzLmNvbmZpZy5nZXQoJ21vZGUnKSA9PT0gYGlvc2A7XG5cbiAgICAvLyBwYXNzZWQgaW4gYXJyYXkgb2YgdHJhY2sgbmFtZXMgdGhhdCBzaG91bGQgYmUgZXhjbHVkZWQgKHVuY2hlY2tlZClcbiAgICBjb25zdCBleGNsdWRlZFRyYWNrTmFtZXMgPSB0aGlzLm5hdlBhcmFtcy5nZXQoJ2V4Y2x1ZGVkVHJhY2tzJyk7XG5cbiAgICB0aGlzLmNvbmZEYXRhLmdldFRyYWNrcygpLnN1YnNjcmliZSgodHJhY2tzOiBhbnlbXSkgPT4ge1xuICAgICAgdHJhY2tzLmZvckVhY2godHJhY2sgPT4ge1xuICAgICAgICB0aGlzLnRyYWNrcy5wdXNoKHtcbiAgICAgICAgICBuYW1lOiB0cmFjay5uYW1lLFxuICAgICAgICAgIGljb246IHRyYWNrLmljb24sXG4gICAgICAgICAgaXNDaGVja2VkOiAoZXhjbHVkZWRUcmFja05hbWVzLmluZGV4T2YodHJhY2submFtZSkgPT09IC0xKVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2VsZWN0QWxsKGNoZWNrOiBib29sZWFuKSB7XG4gICAgLy8gc2V0IGFsbCB0byBjaGVja2VkIG9yIHVuY2hlY2tlZFxuICAgIHRoaXMudHJhY2tzLmZvckVhY2godHJhY2sgPT4ge1xuICAgICAgdHJhY2suaXNDaGVja2VkID0gY2hlY2s7XG4gICAgfSk7XG4gIH1cblxuICBhcHBseUZpbHRlcnMoKSB7XG4gICAgLy8gUGFzcyBiYWNrIGEgbmV3IGFycmF5IG9mIHRyYWNrIG5hbWVzIHRvIGV4Y2x1ZGVcbiAgICBjb25zdCBleGNsdWRlZFRyYWNrTmFtZXMgPSB0aGlzLnRyYWNrcy5maWx0ZXIoYyA9PiAhYy5pc0NoZWNrZWQpLm1hcChjID0+IGMubmFtZSk7XG4gICAgdGhpcy5kaXNtaXNzKGV4Y2x1ZGVkVHJhY2tOYW1lcyk7XG4gIH1cblxuICBkaXNtaXNzKGRhdGE/OiBhbnkpIHtcbiAgICAvLyB1c2luZyB0aGUgaW5qZWN0ZWQgTW9kYWxDb250cm9sbGVyIHRoaXMgcGFnZVxuICAgIC8vIGNhbiBcImRpc21pc3NcIiBpdHNlbGYgYW5kIHBhc3MgYmFjayBkYXRhXG4gICAgdGhpcy5tb2RhbEN0cmwuZGlzbWlzcyhkYXRhKTtcbiAgfVxufVxuIiwiPGlvbi1oZWFkZXIgdHJhbnNsdWNlbnQ9XCJ0cnVlXCI+XG4gIDxpb24tdG9vbGJhcj5cbiAgICA8aW9uLWJ1dHRvbnMgc2xvdD1cInN0YXJ0XCI+XG4gICAgICA8aW9uLWJ1dHRvbiAqbmdJZj1cImlvc1wiIChjbGljayk9XCJkaXNtaXNzKClcIj5DYW5jZWw8L2lvbi1idXR0b24+XG4gICAgICA8aW9uLWJ1dHRvbiAqbmdJZj1cIiFpb3NcIiAoY2xpY2spPVwic2VsZWN0QWxsKGZhbHNlKVwiPlJlc2V0PC9pb24tYnV0dG9uPlxuICAgIDwvaW9uLWJ1dHRvbnM+XG5cbiAgICA8aW9uLXRpdGxlPlxuICAgICAgRmlsdGVyIFNlc3Npb25zXG4gICAgPC9pb24tdGl0bGU+XG5cbiAgICA8aW9uLWJ1dHRvbnMgc2xvdD1cImVuZFwiPlxuICAgICAgPGlvbi1idXR0b24gKGNsaWNrKT1cImFwcGx5RmlsdGVycygpXCIgc3Ryb25nPkRvbmU8L2lvbi1idXR0b24+XG4gICAgPC9pb24tYnV0dG9ucz5cbiAgPC9pb24tdG9vbGJhcj5cbjwvaW9uLWhlYWRlcj5cblxuPGlvbi1jb250ZW50PlxuICA8aW9uLWxpc3QgW2xpbmVzXT1cImlvcyA/ICdpbnNldCcgOiAnZnVsbCdcIj5cbiAgICA8aW9uLWxpc3QtaGVhZGVyPlRyYWNrczwvaW9uLWxpc3QtaGVhZGVyPlxuXG4gICAgPGlvbi1pdGVtICpuZ0Zvcj1cImxldCB0cmFjayBvZiB0cmFja3NcIiBbYXR0ci50cmFja109XCJ0cmFjay5uYW1lIHwgbG93ZXJjYXNlXCI+XG4gICAgICA8aW9uLWljb24gKm5nSWY9XCJpb3NcIiBzbG90PVwic3RhcnRcIiBbbmFtZV09XCJ0cmFjay5pY29uXCIgY29sb3I9XCJtZWRpdW1cIj48L2lvbi1pY29uPlxuXG4gICAgICA8IS0tIFRPRE8oRlctMzg5MSk6IHJlbW92ZSBhcmlhLWxhYmVsIG9uY2UgYnVnIGlzIHJlc29sdmVkIC0tPlxuICAgICAgPGlvbi1jaGVja2JveCBbKG5nTW9kZWwpXT1cInRyYWNrLmlzQ2hlY2tlZFwiIFthdHRyLmFyaWEtbGFiZWxdPVwidHJhY2submFtZVwiPlxuICAgICAgICB7e3RyYWNrLm5hbWV9fVxuICAgICAgPC9pb24tY2hlY2tib3g+XG4gICAgPC9pb24taXRlbT5cbiAgPC9pb24tbGlzdD5cblxuPC9pb24tY29udGVudD5cblxuPGlvbi1mb290ZXIgdHJhbnNsdWNlbnQ9XCJ0cnVlXCIgKm5nSWY9XCJpb3NcIj5cbiAgPGlvbi10b29sYmFyPlxuICAgIDxpb24tYnV0dG9ucyBzbG90PVwic3RhcnRcIj5cbiAgICAgIDxpb24tYnV0dG9uIChjbGljayk9XCJzZWxlY3RBbGwoZmFsc2UpXCI+RGVzZWxlY3QgQWxsPC9pb24tYnV0dG9uPlxuICAgIDwvaW9uLWJ1dHRvbnM+XG4gICAgPGlvbi1idXR0b25zIHNsb3Q9XCJlbmRcIj5cbiAgICAgIDxpb24tYnV0dG9uIChjbGljayk9XCJzZWxlY3RBbGwodHJ1ZSlcIj5TZWxlY3QgQWxsPC9pb24tYnV0dG9uPlxuICAgIDwvaW9uLWJ1dHRvbnM+XG4gIDwvaW9uLXRvb2xiYXI+XG48L2lvbi1mb290ZXI+XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBTY2hlZHVsZVBhZ2UgfSBmcm9tICcuL3NjaGVkdWxlJztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICBjb21wb25lbnQ6IFNjaGVkdWxlUGFnZVxuICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBTY2hlZHVsZVBhZ2VSb3V0aW5nTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5pbXBvcnQgeyBTY2hlZHVsZVBhZ2UgfSBmcm9tICcuL3NjaGVkdWxlJztcbmltcG9ydCB7IFNjaGVkdWxlRmlsdGVyUGFnZSB9IGZyb20gJy4uL3NjaGVkdWxlLWZpbHRlci9zY2hlZHVsZS1maWx0ZXInO1xuaW1wb3J0IHsgU2NoZWR1bGVQYWdlUm91dGluZ01vZHVsZSB9IGZyb20gJy4vc2NoZWR1bGUtcm91dGluZy5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgSW9uaWNNb2R1bGUsXG4gICAgICAgIFNjaGVkdWxlUGFnZVJvdXRpbmdNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTY2hlZHVsZVBhZ2UsXG4gICAgICAgIFNjaGVkdWxlRmlsdGVyUGFnZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgU2NoZWR1bGVNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQWxlcnRDb250cm9sbGVyLCBJb25MaXN0LCBJb25Sb3V0ZXJPdXRsZXQsIExvYWRpbmdDb250cm9sbGVyLCBNb2RhbENvbnRyb2xsZXIsIFRvYXN0Q29udHJvbGxlciwgQ29uZmlnIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5pbXBvcnQgeyBTY2hlZHVsZUZpbHRlclBhZ2UgfSBmcm9tICcuLi9zY2hlZHVsZS1maWx0ZXIvc2NoZWR1bGUtZmlsdGVyJztcbmltcG9ydCB7IENvbmZlcmVuY2VEYXRhIH0gZnJvbSAnLi4vLi4vcHJvdmlkZXJzL2NvbmZlcmVuY2UtZGF0YSc7XG5pbXBvcnQgeyBVc2VyRGF0YSB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy91c2VyLWRhdGEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLXNjaGVkdWxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzY2hlZHVsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2NoZWR1bGUuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTY2hlZHVsZVBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xuICAvLyBHZXRzIGEgcmVmZXJlbmNlIHRvIHRoZSBsaXN0IGVsZW1lbnRcbiAgQFZpZXdDaGlsZCgnc2NoZWR1bGVMaXN0JywgeyBzdGF0aWM6IHRydWUgfSkgc2NoZWR1bGVMaXN0OiBJb25MaXN0O1xuXG4gIGlvczogYm9vbGVhbjtcbiAgZGF5SW5kZXggPSAwO1xuICBxdWVyeVRleHQgPSAnJztcbiAgc2VnbWVudCA9ICdhbGwnO1xuICBleGNsdWRlVHJhY2tzOiBhbnkgPSBbXTtcbiAgc2hvd25TZXNzaW9uczogYW55ID0gW107XG4gIGdyb3VwczogYW55ID0gW107XG4gIGNvbmZEYXRlOiBzdHJpbmc7XG4gIHNob3dTZWFyY2hiYXI6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGFsZXJ0Q3RybDogQWxlcnRDb250cm9sbGVyLFxuICAgIHB1YmxpYyBjb25mRGF0YTogQ29uZmVyZW5jZURhdGEsXG4gICAgcHVibGljIGxvYWRpbmdDdHJsOiBMb2FkaW5nQ29udHJvbGxlcixcbiAgICBwdWJsaWMgbW9kYWxDdHJsOiBNb2RhbENvbnRyb2xsZXIsXG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxuICAgIHB1YmxpYyByb3V0ZXJPdXRsZXQ6IElvblJvdXRlck91dGxldCxcbiAgICBwdWJsaWMgdG9hc3RDdHJsOiBUb2FzdENvbnRyb2xsZXIsXG4gICAgcHVibGljIHVzZXI6IFVzZXJEYXRhLFxuICAgIHB1YmxpYyBjb25maWc6IENvbmZpZ1xuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudXBkYXRlU2NoZWR1bGUoKTtcblxuICAgIHRoaXMuaW9zID0gdGhpcy5jb25maWcuZ2V0KCdtb2RlJykgPT09ICdpb3MnO1xuICB9XG5cbiAgdXBkYXRlU2NoZWR1bGUoKSB7XG4gICAgLy8gQ2xvc2UgYW55IG9wZW4gc2xpZGluZyBpdGVtcyB3aGVuIHRoZSBzY2hlZHVsZSB1cGRhdGVzXG4gICAgaWYgKHRoaXMuc2NoZWR1bGVMaXN0KSB7XG4gICAgICB0aGlzLnNjaGVkdWxlTGlzdC5jbG9zZVNsaWRpbmdJdGVtcygpO1xuICAgIH1cblxuICAgIHRoaXMuY29uZkRhdGEuZ2V0VGltZWxpbmUodGhpcy5kYXlJbmRleCwgdGhpcy5xdWVyeVRleHQsIHRoaXMuZXhjbHVkZVRyYWNrcywgdGhpcy5zZWdtZW50KS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgdGhpcy5zaG93blNlc3Npb25zID0gZGF0YS5zaG93blNlc3Npb25zO1xuICAgICAgdGhpcy5ncm91cHMgPSBkYXRhLmdyb3VwcztcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIHByZXNlbnRGaWx0ZXIoKSB7XG4gICAgY29uc3QgbW9kYWwgPSBhd2FpdCB0aGlzLm1vZGFsQ3RybC5jcmVhdGUoe1xuICAgICAgY29tcG9uZW50OiBTY2hlZHVsZUZpbHRlclBhZ2UsXG4gICAgICBwcmVzZW50aW5nRWxlbWVudDogdGhpcy5yb3V0ZXJPdXRsZXQubmF0aXZlRWwsXG4gICAgICBjb21wb25lbnRQcm9wczogeyBleGNsdWRlZFRyYWNrczogdGhpcy5leGNsdWRlVHJhY2tzIH1cbiAgICB9KTtcbiAgICBhd2FpdCBtb2RhbC5wcmVzZW50KCk7XG5cbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IG1vZGFsLm9uV2lsbERpc21pc3MoKTtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgdGhpcy5leGNsdWRlVHJhY2tzID0gZGF0YTtcbiAgICAgIHRoaXMudXBkYXRlU2NoZWR1bGUoKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBhZGRGYXZvcml0ZShzbGlkaW5nSXRlbTogSFRNTElvbkl0ZW1TbGlkaW5nRWxlbWVudCwgc2Vzc2lvbkRhdGE6IGFueSkge1xuICAgIGlmICh0aGlzLnVzZXIuaGFzRmF2b3JpdGUoc2Vzc2lvbkRhdGEubmFtZSkpIHtcbiAgICAgIC8vIFByb21wdCB0byByZW1vdmUgZmF2b3JpdGVcbiAgICAgIHRoaXMucmVtb3ZlRmF2b3JpdGUoc2xpZGluZ0l0ZW0sIHNlc3Npb25EYXRhLCAnRmF2b3JpdGUgYWxyZWFkeSBhZGRlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBBZGQgYXMgYSBmYXZvcml0ZVxuICAgICAgdGhpcy51c2VyLmFkZEZhdm9yaXRlKHNlc3Npb25EYXRhLm5hbWUpO1xuXG4gICAgICAvLyBDbG9zZSB0aGUgb3BlbiBpdGVtXG4gICAgICBzbGlkaW5nSXRlbS5jbG9zZSgpO1xuXG4gICAgICAvLyBDcmVhdGUgYSB0b2FzdFxuICAgICAgY29uc3QgdG9hc3QgPSBhd2FpdCB0aGlzLnRvYXN0Q3RybC5jcmVhdGUoe1xuICAgICAgICBoZWFkZXI6IGAke3Nlc3Npb25EYXRhLm5hbWV9IHdhcyBzdWNjZXNzZnVsbHkgYWRkZWQgYXMgYSBmYXZvcml0ZS5gLFxuICAgICAgICBkdXJhdGlvbjogMzAwMCxcbiAgICAgICAgYnV0dG9uczogW3tcbiAgICAgICAgICB0ZXh0OiAnQ2xvc2UnLFxuICAgICAgICAgIHJvbGU6ICdjYW5jZWwnXG4gICAgICAgIH1dXG4gICAgICB9KTtcblxuICAgICAgLy8gUHJlc2VudCB0aGUgdG9hc3QgYXQgdGhlIGJvdHRvbSBvZiB0aGUgcGFnZVxuICAgICAgYXdhaXQgdG9hc3QucHJlc2VudCgpO1xuICAgIH1cblxuICB9XG5cbiAgYXN5bmMgcmVtb3ZlRmF2b3JpdGUoc2xpZGluZ0l0ZW06IEhUTUxJb25JdGVtU2xpZGluZ0VsZW1lbnQsIHNlc3Npb25EYXRhOiBhbnksIHRpdGxlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBhbGVydCA9IGF3YWl0IHRoaXMuYWxlcnRDdHJsLmNyZWF0ZSh7XG4gICAgICBoZWFkZXI6IHRpdGxlLFxuICAgICAgbWVzc2FnZTogJ1dvdWxkIHlvdSBsaWtlIHRvIHJlbW92ZSB0aGlzIHNlc3Npb24gZnJvbSB5b3VyIGZhdm9yaXRlcz8nLFxuICAgICAgYnV0dG9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0NhbmNlbCcsXG4gICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgICAgICAgLy8gdGhleSBjbGlja2VkIHRoZSBjYW5jZWwgYnV0dG9uLCBkbyBub3QgcmVtb3ZlIHRoZSBzZXNzaW9uXG4gICAgICAgICAgICAvLyBjbG9zZSB0aGUgc2xpZGluZyBpdGVtIGFuZCBoaWRlIHRoZSBvcHRpb24gYnV0dG9uc1xuICAgICAgICAgICAgc2xpZGluZ0l0ZW0uY2xvc2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnUmVtb3ZlJyxcbiAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgICAgICAgICAvLyB0aGV5IHdhbnQgdG8gcmVtb3ZlIHRoaXMgc2Vzc2lvbiBmcm9tIHRoZWlyIGZhdm9yaXRlc1xuICAgICAgICAgICAgdGhpcy51c2VyLnJlbW92ZUZhdm9yaXRlKHNlc3Npb25EYXRhLm5hbWUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTY2hlZHVsZSgpO1xuXG4gICAgICAgICAgICAvLyBjbG9zZSB0aGUgc2xpZGluZyBpdGVtIGFuZCBoaWRlIHRoZSBvcHRpb24gYnV0dG9uc1xuICAgICAgICAgICAgc2xpZGluZ0l0ZW0uY2xvc2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9KTtcbiAgICAvLyBub3cgcHJlc2VudCB0aGUgYWxlcnQgb24gdG9wIG9mIGFsbCBvdGhlciBjb250ZW50XG4gICAgYXdhaXQgYWxlcnQucHJlc2VudCgpO1xuICB9XG5cbiAgYXN5bmMgb3BlblNvY2lhbChuZXR3b3JrOiBzdHJpbmcsIGZhYjogSFRNTElvbkZhYkVsZW1lbnQpIHtcbiAgICBjb25zdCBsb2FkaW5nID0gYXdhaXQgdGhpcy5sb2FkaW5nQ3RybC5jcmVhdGUoe1xuICAgICAgbWVzc2FnZTogYFBvc3RpbmcgdG8gJHtuZXR3b3JrfWAsXG4gICAgICBkdXJhdGlvbjogKE1hdGgucmFuZG9tKCkgKiAxMDAwKSArIDUwMFxuICAgIH0pO1xuICAgIGF3YWl0IGxvYWRpbmcucHJlc2VudCgpO1xuICAgIGF3YWl0IGxvYWRpbmcub25XaWxsRGlzbWlzcygpO1xuICAgIGZhYi5jbG9zZSgpO1xuICB9XG59XG4iLCI8aW9uLWhlYWRlciB0cmFuc2x1Y2VudD1cInRydWVcIj5cbiAgPGlvbi10b29sYmFyPlxuICAgIDxpb24tYnV0dG9ucyAqbmdJZj1cIiFzaG93U2VhcmNoYmFyXCIgc2xvdD1cInN0YXJ0XCI+XG4gICAgICA8aW9uLW1lbnUtYnV0dG9uPjwvaW9uLW1lbnUtYnV0dG9uPlxuICAgIDwvaW9uLWJ1dHRvbnM+XG4gICAgPGlvbi1zZWdtZW50ICpuZ0lmPVwiaW9zXCIgWyhuZ01vZGVsKV09XCJzZWdtZW50XCIgKGlvbkNoYW5nZSk9XCJ1cGRhdGVTY2hlZHVsZSgpXCI+XG4gICAgICA8aW9uLXNlZ21lbnQtYnV0dG9uIHZhbHVlPVwiYWxsXCI+XG4gICAgICAgIEFsbFxuICAgICAgPC9pb24tc2VnbWVudC1idXR0b24+XG4gICAgICA8aW9uLXNlZ21lbnQtYnV0dG9uIHZhbHVlPVwiZmF2b3JpdGVzXCI+XG4gICAgICAgIEZhdm9yaXRlc1xuICAgICAgPC9pb24tc2VnbWVudC1idXR0b24+XG4gICAgPC9pb24tc2VnbWVudD5cbiAgICA8aW9uLXRpdGxlICpuZ0lmPVwiIWlvcyAmJiAhc2hvd1NlYXJjaGJhclwiPlNjaGVkdWxlPC9pb24tdGl0bGU+XG4gICAgPGlvbi1zZWFyY2hiYXIgKm5nSWY9XCJzaG93U2VhcmNoYmFyXCIgc2hvd0NhbmNlbEJ1dHRvbj1cImFsd2F5c1wiIFsobmdNb2RlbCldPVwicXVlcnlUZXh0XCIgKGlvbklucHV0KT1cInVwZGF0ZVNjaGVkdWxlKClcIiAoaW9uQ2FuY2VsKT1cInNob3dTZWFyY2hiYXIgPSBmYWxzZVwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCI+PC9pb24tc2VhcmNoYmFyPlxuICAgIDxpb24tYnV0dG9ucyBzbG90PVwiZW5kXCI+XG4gICAgICA8aW9uLWJ1dHRvbiAqbmdJZj1cIiFpb3MgJiYgIXNob3dTZWFyY2hiYXJcIiAoY2xpY2spPVwic2hvd1NlYXJjaGJhciA9IHRydWVcIj5cbiAgICAgICAgPGlvbi1pY29uIHNsb3Q9XCJpY29uLW9ubHlcIiBuYW1lPVwic2VhcmNoXCI+PC9pb24taWNvbj5cbiAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICAgIDxpb24tYnV0dG9uICpuZ0lmPVwiIXNob3dTZWFyY2hiYXJcIiAoY2xpY2spPVwicHJlc2VudEZpbHRlcigpXCI+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwiaW9zXCI+RmlsdGVyPC9zcGFuPlxuICAgICAgICA8c3BhbiAqbmdJZj1cIiFpb3NcIj5cbiAgICAgICAgICA8aW9uLWljb24gc2xvdD1cImljb24tb25seVwiIG5hbWU9XCJvcHRpb25zXCI+PC9pb24taWNvbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9pb24tYnV0dG9uPlxuICAgIDwvaW9uLWJ1dHRvbnM+XG4gIDwvaW9uLXRvb2xiYXI+XG4gIDxpb24tdG9vbGJhciAqbmdJZj1cIiFpb3NcIj5cbiAgICA8aW9uLXNlZ21lbnQgWyhuZ01vZGVsKV09XCJzZWdtZW50XCIgKGlvbkNoYW5nZSk9XCJ1cGRhdGVTY2hlZHVsZSgpXCI+XG4gICAgICA8aW9uLXNlZ21lbnQtYnV0dG9uIHZhbHVlPVwiYWxsXCI+XG4gICAgICAgIEFsbFxuICAgICAgPC9pb24tc2VnbWVudC1idXR0b24+XG4gICAgICA8aW9uLXNlZ21lbnQtYnV0dG9uIHZhbHVlPVwiZmF2b3JpdGVzXCI+XG4gICAgICAgIEZhdm9yaXRlc1xuICAgICAgPC9pb24tc2VnbWVudC1idXR0b24+XG4gICAgPC9pb24tc2VnbWVudD5cbiAgPC9pb24tdG9vbGJhcj5cbjwvaW9uLWhlYWRlcj5cblxuPGlvbi1jb250ZW50IGZ1bGxzY3JlZW49XCJ0cnVlXCI+XG4gIDxpb24taGVhZGVyIGNvbGxhcHNlPVwiY29uZGVuc2VcIj5cbiAgICA8aW9uLXRvb2xiYXI+XG4gICAgICA8aW9uLXRpdGxlIHNpemU9XCJsYXJnZVwiPlNjaGVkdWxlPC9pb24tdGl0bGU+XG4gICAgPC9pb24tdG9vbGJhcj5cbiAgICA8aW9uLXRvb2xiYXI+XG4gICAgICA8aW9uLXNlYXJjaGJhciBbKG5nTW9kZWwpXT1cInF1ZXJ5VGV4dFwiIChpb25JbnB1dCk9XCJ1cGRhdGVTY2hlZHVsZSgpXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIj48L2lvbi1zZWFyY2hiYXI+XG4gICAgPC9pb24tdG9vbGJhcj5cbiAgPC9pb24taGVhZGVyPlxuXG4gIDxpb24tbGlzdCAjc2NoZWR1bGVMaXN0IFtoaWRkZW5dPVwic2hvd25TZXNzaW9ucyA9PT0gMFwiPlxuICAgIDxpb24taXRlbS1ncm91cCAqbmdGb3I9XCJsZXQgZ3JvdXAgb2YgZ3JvdXBzXCIgW2hpZGRlbl09XCJncm91cC5oaWRlXCI+XG4gICAgICA8aW9uLWl0ZW0tZGl2aWRlciBzdGlja3k+XG4gICAgICAgIDxpb24tbGFiZWw+XG4gICAgICAgICAge3tncm91cC50aW1lfX1cbiAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICA8L2lvbi1pdGVtLWRpdmlkZXI+XG5cbiAgICAgIDxpb24taXRlbS1zbGlkaW5nICpuZ0Zvcj1cImxldCBzZXNzaW9uIG9mIGdyb3VwLnNlc3Npb25zXCIgI3NsaWRpbmdJdGVtIFthdHRyLnRyYWNrXT1cInNlc3Npb24udHJhY2tzWzBdIHwgbG93ZXJjYXNlXCJcbiAgICAgICAgW2hpZGRlbl09XCJzZXNzaW9uLmhpZGVcIj5cbiAgICAgICAgPGlvbi1pdGVtIHJvdXRlckxpbms9XCIvYXBwL3RhYnMvc2NoZWR1bGUvc2Vzc2lvbi97e3Nlc3Npb24uaWR9fVwiPlxuICAgICAgICAgIDxpb24tbGFiZWw+XG4gICAgICAgICAgICA8aDM+e3tzZXNzaW9uLm5hbWV9fTwvaDM+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAge3tzZXNzaW9uLnRpbWVTdGFydH19ICZtZGFzaDsge3tzZXNzaW9uLnRpbWVFbmR9fToge3tzZXNzaW9uLmxvY2F0aW9ufX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgPGlvbi1pdGVtLW9wdGlvbnM+XG4gICAgICAgICAgPGlvbi1pdGVtLW9wdGlvbiBjb2xvcj1cImZhdm9yaXRlXCIgKGNsaWNrKT1cImFkZEZhdm9yaXRlKHNsaWRpbmdJdGVtLCBzZXNzaW9uKVwiICpuZ0lmPVwic2VnbWVudCA9PT0gJ2FsbCdcIj5cbiAgICAgICAgICAgIEZhdm9yaXRlXG4gICAgICAgICAgPC9pb24taXRlbS1vcHRpb24+XG4gICAgICAgICAgPGlvbi1pdGVtLW9wdGlvbiBjb2xvcj1cImRhbmdlclwiIChjbGljayk9XCJyZW1vdmVGYXZvcml0ZShzbGlkaW5nSXRlbSwgc2Vzc2lvbiwgJ1JlbW92ZSBGYXZvcml0ZScpXCJcbiAgICAgICAgICAgICpuZ0lmPVwic2VnbWVudCA9PT0gJ2Zhdm9yaXRlcydcIj5cbiAgICAgICAgICAgIFJlbW92ZVxuICAgICAgICAgIDwvaW9uLWl0ZW0tb3B0aW9uPlxuICAgICAgICA8L2lvbi1pdGVtLW9wdGlvbnM+XG4gICAgICA8L2lvbi1pdGVtLXNsaWRpbmc+XG4gICAgPC9pb24taXRlbS1ncm91cD5cbiAgPC9pb24tbGlzdD5cblxuICA8aW9uLWxpc3QtaGVhZGVyIFtoaWRkZW5dPVwic2hvd25TZXNzaW9ucyA+IDBcIj5cbiAgICBObyBTZXNzaW9ucyBGb3VuZFxuICA8L2lvbi1saXN0LWhlYWRlcj5cblxuICA8aW9uLWZhYiBzbG90PVwiZml4ZWRcIiB2ZXJ0aWNhbD1cImJvdHRvbVwiIGhvcml6b250YWw9XCJlbmRcIiAjZmFiPlxuICAgIDxpb24tZmFiLWJ1dHRvbj5cbiAgICAgIDxpb24taWNvbiBuYW1lPVwic2hhcmUtc29jaWFsXCI+PC9pb24taWNvbj5cbiAgICA8L2lvbi1mYWItYnV0dG9uPlxuICAgIDxpb24tZmFiLWxpc3Qgc2lkZT1cInRvcFwiPlxuICAgICAgPGlvbi1mYWItYnV0dG9uIGNvbG9yPVwidmltZW9cIiAoY2xpY2spPVwib3BlblNvY2lhbCgnVmltZW8nLCBmYWIpXCI+XG4gICAgICAgIDxpb24taWNvbiBuYW1lPVwibG9nby12aW1lb1wiPjwvaW9uLWljb24+XG4gICAgICA8L2lvbi1mYWItYnV0dG9uPlxuICAgICAgPGlvbi1mYWItYnV0dG9uIGNvbG9yPVwiaW5zdGFncmFtXCIgKGNsaWNrKT1cIm9wZW5Tb2NpYWwoJ0luc3RhZ3JhbScsIGZhYilcIj5cbiAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJsb2dvLWluc3RhZ3JhbVwiPjwvaW9uLWljb24+XG4gICAgICA8L2lvbi1mYWItYnV0dG9uPlxuICAgICAgPGlvbi1mYWItYnV0dG9uIGNvbG9yPVwidHdpdHRlclwiIChjbGljayk9XCJvcGVuU29jaWFsKCdUd2l0dGVyJywgZmFiKVwiPlxuICAgICAgICA8aW9uLWljb24gbmFtZT1cImxvZ28tdHdpdHRlclwiPjwvaW9uLWljb24+XG4gICAgICA8L2lvbi1mYWItYnV0dG9uPlxuICAgICAgPGlvbi1mYWItYnV0dG9uIGNvbG9yPVwiZmFjZWJvb2tcIiAoY2xpY2spPVwib3BlblNvY2lhbCgnRmFjZWJvb2snLCBmYWIpXCI+XG4gICAgICAgIDxpb24taWNvbiBuYW1lPVwibG9nby1mYWNlYm9va1wiPjwvaW9uLWljb24+XG4gICAgICA8L2lvbi1mYWItYnV0dG9uPlxuICAgIDwvaW9uLWZhYi1saXN0PlxuICA8L2lvbi1mYWI+XG48L2lvbi1jb250ZW50PlxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgU2Vzc2lvbkRldGFpbFBhZ2UgfSBmcm9tICcuL3Nlc3Npb24tZGV0YWlsJztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICBjb21wb25lbnQ6IFNlc3Npb25EZXRhaWxQYWdlXG4gIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIFNlc3Npb25EZXRhaWxQYWdlUm91dGluZ01vZHVsZSB7IH1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBTZXNzaW9uRGV0YWlsUGFnZSB9IGZyb20gJy4vc2Vzc2lvbi1kZXRhaWwnO1xuaW1wb3J0IHsgU2Vzc2lvbkRldGFpbFBhZ2VSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9zZXNzaW9uLWRldGFpbC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBJb25pY01vZHVsZSxcbiAgICBTZXNzaW9uRGV0YWlsUGFnZVJvdXRpbmdNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgU2Vzc2lvbkRldGFpbFBhZ2UsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2Vzc2lvbkRldGFpbE1vZHVsZSB7IH1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb25mZXJlbmNlRGF0YSB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9jb25mZXJlbmNlLWRhdGEnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVXNlckRhdGEgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvdXNlci1kYXRhJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1zZXNzaW9uLWRldGFpbCcsXG4gIHN0eWxlVXJsczogWycuL3Nlc3Npb24tZGV0YWlsLnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdzZXNzaW9uLWRldGFpbC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTZXNzaW9uRGV0YWlsUGFnZSB7XG4gIHNlc3Npb246IGFueTtcbiAgaXNGYXZvcml0ZSA9IGZhbHNlO1xuICBkZWZhdWx0SHJlZiA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZGF0YVByb3ZpZGVyOiBDb25mZXJlbmNlRGF0YSxcbiAgICBwcml2YXRlIHVzZXJQcm92aWRlcjogVXNlckRhdGEsXG4gICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgKSB7IH1cblxuICBpb25WaWV3V2lsbEVudGVyKCkge1xuICAgIHRoaXMuZGF0YVByb3ZpZGVyLmxvYWQoKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgaWYgKGRhdGEgJiYgZGF0YS5zY2hlZHVsZSAmJiBkYXRhLnNjaGVkdWxlWzBdICYmIGRhdGEuc2NoZWR1bGVbMF0uZ3JvdXBzKSB7XG4gICAgICAgIGNvbnN0IHNlc3Npb25JZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdzZXNzaW9uSWQnKTtcbiAgICAgICAgZm9yIChjb25zdCBncm91cCBvZiBkYXRhLnNjaGVkdWxlWzBdLmdyb3Vwcykge1xuICAgICAgICAgIGlmIChncm91cCAmJiBncm91cC5zZXNzaW9ucykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBzZXNzaW9uIG9mIGdyb3VwLnNlc3Npb25zKSB7XG4gICAgICAgICAgICAgIGlmIChzZXNzaW9uICYmIHNlc3Npb24uaWQgPT09IHNlc3Npb25JZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vzc2lvbiA9IHNlc3Npb247XG5cbiAgICAgICAgICAgICAgICB0aGlzLmlzRmF2b3JpdGUgPSB0aGlzLnVzZXJQcm92aWRlci5oYXNGYXZvcml0ZShcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2Vzc2lvbi5uYW1lXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpb25WaWV3RGlkRW50ZXIoKSB7XG4gICAgdGhpcy5kZWZhdWx0SHJlZiA9IGAvYXBwL3RhYnMvc2NoZWR1bGVgO1xuICB9XG5cbiAgc2Vzc2lvbkNsaWNrKGl0ZW06IHN0cmluZykge1xuICAgIGNvbnNvbGUubG9nKCdDbGlja2VkJywgaXRlbSk7XG4gIH1cblxuICB0b2dnbGVGYXZvcml0ZSgpIHtcbiAgICBpZiAodGhpcy51c2VyUHJvdmlkZXIuaGFzRmF2b3JpdGUodGhpcy5zZXNzaW9uLm5hbWUpKSB7XG4gICAgICB0aGlzLnVzZXJQcm92aWRlci5yZW1vdmVGYXZvcml0ZSh0aGlzLnNlc3Npb24ubmFtZSk7XG4gICAgICB0aGlzLmlzRmF2b3JpdGUgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51c2VyUHJvdmlkZXIuYWRkRmF2b3JpdGUodGhpcy5zZXNzaW9uLm5hbWUpO1xuICAgICAgdGhpcy5pc0Zhdm9yaXRlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBzaGFyZVNlc3Npb24oKSB7XG4gICAgY29uc29sZS5sb2coJ0NsaWNrZWQgc2hhcmUgc2Vzc2lvbicpO1xuICB9XG59XG4iLCI8aW9uLWhlYWRlcj5cbiAgPGlvbi10b29sYmFyPlxuICAgIDxpb24tYnV0dG9ucyBzbG90PVwic3RhcnRcIj5cbiAgICAgIDxpb24tYmFjay1idXR0b24gW2RlZmF1bHRIcmVmXT1cImRlZmF1bHRIcmVmXCI+PC9pb24tYmFjay1idXR0b24+XG4gICAgPC9pb24tYnV0dG9ucz5cbiAgICA8aW9uLWJ1dHRvbnMgc2xvdD1cImVuZFwiPlxuICAgICAgPGlvbi1idXR0b24gKGNsaWNrKT1cInRvZ2dsZUZhdm9yaXRlKClcIj5cbiAgICAgICAgPGlvbi1pY29uICpuZ0lmPVwiIWlzRmF2b3JpdGVcIiBzbG90PVwiaWNvbi1vbmx5XCIgbmFtZT1cInN0YXItb3V0bGluZVwiPjwvaW9uLWljb24+XG4gICAgICAgIDxpb24taWNvbiAqbmdJZj1cImlzRmF2b3JpdGVcIiBzbG90PVwiaWNvbi1vbmx5XCIgbmFtZT1cInN0YXJcIj48L2lvbi1pY29uPlxuICAgICAgPC9pb24tYnV0dG9uPlxuICAgICAgPGlvbi1idXR0b24gKGNsaWNrKT1cInNoYXJlU2Vzc2lvbigpXCI+XG4gICAgICAgIDxpb24taWNvbiBzbG90PVwiaWNvbi1vbmx5XCIgbmFtZT1cInNoYXJlXCI+PC9pb24taWNvbj5cbiAgICAgIDwvaW9uLWJ1dHRvbj5cbiAgICA8L2lvbi1idXR0b25zPlxuICA8L2lvbi10b29sYmFyPlxuPC9pb24taGVhZGVyPlxuXG48aW9uLWNvbnRlbnQ+XG4gIDxkaXYgKm5nSWY9XCJzZXNzaW9uXCIgY2xhc3M9XCJpb24tcGFkZGluZ1wiPlxuICAgIDxoMT57e3Nlc3Npb24ubmFtZX19PC9oMT5cbiAgICA8c3BhbiAqbmdGb3I9XCJsZXQgdHJhY2sgb2Ygc2Vzc2lvbj8udHJhY2tzXCIgW2NsYXNzXT1cIidzZXNzaW9uLXRyYWNrLScrdHJhY2sudG9Mb3dlckNhc2UoKVwiPnt7dHJhY2t9fTwvc3Bhbj5cbiAgICA8cD57e3Nlc3Npb24uZGVzY3JpcHRpb259fTwvcD5cbiAgICA8aW9uLXRleHQgY29sb3I9XCJtZWRpdW1cIj5cbiAgICAgIHt7c2Vzc2lvbi50aW1lU3RhcnR9fSAmbmRhc2g7IHt7c2Vzc2lvbi50aW1lRW5kfX1cbiAgICAgIDxiciAvPiB7e3Nlc3Npb24ubG9jYXRpb259fVxuICAgIDwvaW9uLXRleHQ+XG4gIDwvZGl2PlxuXG4gIDxpb24tbGlzdD5cbiAgICA8aW9uLWl0ZW0gKGNsaWNrKT1cInNlc3Npb25DbGljaygnd2F0Y2gnKVwiIGJ1dHRvbj5cbiAgICAgIDxpb24tbGFiZWwgY29sb3I9XCJwcmltYXJ5XCI+V2F0Y2g8L2lvbi1sYWJlbD5cbiAgICA8L2lvbi1pdGVtPlxuICAgIDxpb24taXRlbSAoY2xpY2spPVwic2Vzc2lvbkNsaWNrKCdhZGQgdG8gY2FsZW5kYXInKVwiIGJ1dHRvbj5cbiAgICAgIDxpb24tbGFiZWwgY29sb3I9XCJwcmltYXJ5XCI+QWRkIHRvIENhbGVuZGFyPC9pb24tbGFiZWw+XG4gICAgPC9pb24taXRlbT5cbiAgICA8aW9uLWl0ZW0gKGNsaWNrKT1cInNlc3Npb25DbGljaygnbWFyayBhcyB1bndhdGNoZWQnKVwiIGJ1dHRvbj5cbiAgICAgIDxpb24tbGFiZWwgY29sb3I9XCJwcmltYXJ5XCI+TWFyayBhcyBVbndhdGNoZWQ8L2lvbi1sYWJlbD5cbiAgICA8L2lvbi1pdGVtPlxuICAgIDxpb24taXRlbSAoY2xpY2spPVwic2Vzc2lvbkNsaWNrKCdkb3dubG9hZCB2aWRlbycpXCIgYnV0dG9uPlxuICAgICAgPGlvbi1sYWJlbCBjb2xvcj1cInByaW1hcnlcIj5Eb3dubG9hZCBWaWRlbzwvaW9uLWxhYmVsPlxuICAgICAgPGlvbi1pY29uIHNsb3Q9XCJlbmRcIiBjb2xvcj1cInByaW1hcnlcIiBzaXplPVwic21hbGxcIiBuYW1lPVwiY2xvdWQtZG93bmxvYWRcIj48L2lvbi1pY29uPlxuICAgIDwvaW9uLWl0ZW0+XG4gICAgPGlvbi1pdGVtIChjbGljayk9XCJzZXNzaW9uQ2xpY2soJ2xlYXZlIGZlZWRiYWNrJylcIiBidXR0b24+XG4gICAgICA8aW9uLWxhYmVsIGNvbG9yPVwicHJpbWFyeVwiPkxlYXZlIEZlZWRiYWNrPC9pb24tbGFiZWw+XG4gICAgPC9pb24taXRlbT5cbiAgPC9pb24tbGlzdD5cbjwvaW9uLWNvbnRlbnQ+XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBTcGVha2VyRGV0YWlsUGFnZSB9IGZyb20gJy4vc3BlYWtlci1kZXRhaWwnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIGNvbXBvbmVudDogU3BlYWtlckRldGFpbFBhZ2VcbiAgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgU3BlYWtlckRldGFpbFBhZ2VSb3V0aW5nTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFNwZWFrZXJEZXRhaWxQYWdlIH0gZnJvbSAnLi9zcGVha2VyLWRldGFpbCc7XG5pbXBvcnQgeyBTcGVha2VyRGV0YWlsUGFnZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL3NwZWFrZXItZGV0YWlsLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIElvbmljTW9kdWxlLFxuICAgIFNwZWFrZXJEZXRhaWxQYWdlUm91dGluZ01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTcGVha2VyRGV0YWlsUGFnZSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTcGVha2VyRGV0YWlsTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDb25mZXJlbmNlRGF0YSB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9jb25mZXJlbmNlLWRhdGEnO1xuaW1wb3J0IHsgQWN0aW9uU2hlZXRDb250cm9sbGVyIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgSW5BcHBCcm93c2VyIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2luLWFwcC1icm93c2VyL25neCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2Utc3BlYWtlci1kZXRhaWwnLFxuICB0ZW1wbGF0ZVVybDogJ3NwZWFrZXItZGV0YWlsLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zcGVha2VyLWRldGFpbC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNwZWFrZXJEZXRhaWxQYWdlIHtcbiAgc3BlYWtlcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZGF0YVByb3ZpZGVyOiBDb25mZXJlbmNlRGF0YSxcbiAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwdWJsaWMgYWN0aW9uU2hlZXRDdHJsOiBBY3Rpb25TaGVldENvbnRyb2xsZXIsXG4gICAgcHVibGljIGNvbmZEYXRhOiBDb25mZXJlbmNlRGF0YSxcbiAgICBwdWJsaWMgaW5BcHBCcm93c2VyOiBJbkFwcEJyb3dzZXIsXG4gICkge31cblxuICBpb25WaWV3V2lsbEVudGVyKCkge1xuICAgIHRoaXMuZGF0YVByb3ZpZGVyLmxvYWQoKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgY29uc3Qgc3BlYWtlcklkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ3NwZWFrZXJJZCcpO1xuICAgICAgaWYgKGRhdGEgJiYgZGF0YS5zcGVha2Vycykge1xuICAgICAgICBmb3IgKGNvbnN0IHNwZWFrZXIgb2YgZGF0YS5zcGVha2Vycykge1xuICAgICAgICAgIGlmIChzcGVha2VyICYmIHNwZWFrZXIuaWQgPT09IHNwZWFrZXJJZCkge1xuICAgICAgICAgICAgdGhpcy5zcGVha2VyID0gc3BlYWtlcjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb3BlbkV4dGVybmFsVXJsKHVybDogc3RyaW5nKSB7XG4gICAgdGhpcy5pbkFwcEJyb3dzZXIuY3JlYXRlKFxuICAgICAgdXJsLFxuICAgICAgJ19ibGFuaydcbiAgICApO1xuICB9XG5cbiAgYXN5bmMgb3BlblNwZWFrZXJTaGFyZShzcGVha2VyOiBhbnkpIHtcbiAgICBjb25zdCBhY3Rpb25TaGVldCA9IGF3YWl0IHRoaXMuYWN0aW9uU2hlZXRDdHJsLmNyZWF0ZSh7XG4gICAgICBoZWFkZXI6ICdTaGFyZSAnICsgc3BlYWtlci5uYW1lLFxuICAgICAgYnV0dG9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ0NvcHkgTGluaycsXG4gICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICdDb3B5IGxpbmsgY2xpY2tlZCBvbiBodHRwczovL3R3aXR0ZXIuY29tLycgKyBzcGVha2VyLnR3aXR0ZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICh3aW5kb3cgYXMgYW55KS5jb3Jkb3ZhICYmXG4gICAgICAgICAgICAgICh3aW5kb3cgYXMgYW55KS5jb3Jkb3ZhLnBsdWdpbnMuY2xpcGJvYXJkXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgKHdpbmRvdyBhcyBhbnkpLmNvcmRvdmEucGx1Z2lucy5jbGlwYm9hcmQuY29weShcbiAgICAgICAgICAgICAgICAnaHR0cHM6Ly90d2l0dGVyLmNvbS8nICsgc3BlYWtlci50d2l0dGVyXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1NoYXJlIHZpYSAuLi4nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnQ2FuY2VsJyxcbiAgICAgICAgICByb2xlOiAnY2FuY2VsJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSk7XG5cbiAgICBhd2FpdCBhY3Rpb25TaGVldC5wcmVzZW50KCk7XG4gIH1cblxuICBhc3luYyBvcGVuQ29udGFjdChzcGVha2VyOiBhbnkpIHtcbiAgICBjb25zdCBtb2RlID0gJ2lvcyc7IC8vIHRoaXMuY29uZmlnLmdldCgnbW9kZScpO1xuXG4gICAgY29uc3QgYWN0aW9uU2hlZXQgPSBhd2FpdCB0aGlzLmFjdGlvblNoZWV0Q3RybC5jcmVhdGUoe1xuICAgICAgaGVhZGVyOiAnQ29udGFjdCAnICsgc3BlYWtlci5uYW1lLFxuICAgICAgYnV0dG9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogYEVtYWlsICggJHtzcGVha2VyLmVtYWlsfSApYCxcbiAgICAgICAgICBpY29uOiBtb2RlICE9PSAnaW9zJyA/ICdtYWlsJyA6IG51bGwsXG4gICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93Lm9wZW4oJ21haWx0bzonICsgc3BlYWtlci5lbWFpbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogYENhbGwgKCAke3NwZWFrZXIucGhvbmV9IClgLFxuICAgICAgICAgIGljb246IG1vZGUgIT09ICdpb3MnID8gJ2NhbGwnIDogbnVsbCxcbiAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cub3BlbigndGVsOicgKyBzcGVha2VyLnBob25lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnQ2FuY2VsJyxcbiAgICAgICAgICByb2xlOiAnY2FuY2VsJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSk7XG5cbiAgICBhd2FpdCBhY3Rpb25TaGVldC5wcmVzZW50KCk7XG4gIH1cbn1cbiIsIjxpb24tY29udGVudCBjbGFzcz1cInNwZWFrZXItZGV0YWlsXCI+XG4gIDxpb24taGVhZGVyIGNsYXNzPVwiaW9uLW5vLWJvcmRlclwiPlxuICAgIDxpb24tdG9vbGJhcj5cbiAgICAgIDxpb24tYnV0dG9ucyBzbG90PVwic3RhcnRcIj5cbiAgICAgICAgPGlvbi1iYWNrLWJ1dHRvbiBkZWZhdWx0SHJlZj1cIi9hcHAvdGFicy9zcGVha2Vyc1wiPjwvaW9uLWJhY2stYnV0dG9uPlxuICAgICAgPC9pb24tYnV0dG9ucz5cbiAgICAgIDxpb24tYnV0dG9ucyAqbmdJZj1cInNwZWFrZXJcIiBzbG90PVwiZW5kXCI+XG4gICAgICAgIDxpb24tYnV0dG9uIChjbGljayk9XCJvcGVuQ29udGFjdChzcGVha2VyKVwiPlxuICAgICAgICAgIDxpb24taWNvbiBzbG90PVwiaWNvbi1vbmx5XCIgaW9zPVwiY2FsbC1vdXRsaW5lXCIgbWQ9XCJjYWxsLXNoYXJwXCI+PC9pb24taWNvbj5cbiAgICAgICAgPC9pb24tYnV0dG9uPlxuICAgICAgICA8aW9uLWJ1dHRvbiAoY2xpY2spPVwib3BlblNwZWFrZXJTaGFyZShzcGVha2VyKVwiPlxuICAgICAgICAgIDxpb24taWNvbiBzbG90PVwiaWNvbi1vbmx5XCIgaW9zPVwic2hhcmUtb3V0bGluZVwiIG1kPVwic2hhcmUtc2hhcnBcIj48L2lvbi1pY29uPlxuICAgICAgICA8L2lvbi1idXR0b24+XG4gICAgICA8L2lvbi1idXR0b25zPlxuICAgIDwvaW9uLXRvb2xiYXI+XG4gIDwvaW9uLWhlYWRlcj5cblxuICA8ZGl2IGNsYXNzPVwic3BlYWtlci1iYWNrZ3JvdW5kXCI+XG4gICAgPGltZyBbc3JjXT1cInNwZWFrZXI/LnByb2ZpbGVQaWNcIiBbYWx0XT1cInNwZWFrZXI/Lm5hbWVcIj5cbiAgICA8aDI+e3tzcGVha2VyPy5uYW1lfX08L2gyPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiaW9uLXBhZGRpbmcgc3BlYWtlci1kZXRhaWxcIj5cbiAgICA8cD57e3NwZWFrZXI/LmFib3V0fX0gU2F5IGhlbGxvIG9uIHNvY2lhbCBtZWRpYSE8L3A+XG5cbiAgICA8aHI+XG5cbiAgICA8aW9uLWNoaXAgY29sb3I9XCJ0d2l0dGVyXCIgYnV0dG9uIChjbGljayk9XCJvcGVuRXh0ZXJuYWxVcmwoJ2h0dHBzOi8vdHdpdHRlci5jb20vJyArIHNwZWFrZXIudHdpdHRlcilcIj5cbiAgICAgIDxpb24taWNvbiBuYW1lPVwibG9nby10d2l0dGVyXCI+PC9pb24taWNvbj5cbiAgICAgIDxpb24tbGFiZWw+VHdpdHRlcjwvaW9uLWxhYmVsPlxuICAgIDwvaW9uLWNoaXA+XG5cbiAgICA8aW9uLWNoaXAgY29sb3I9XCJkYXJrXCIgYnV0dG9uIChjbGljayk9XCJvcGVuRXh0ZXJuYWxVcmwoJ2h0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljJylcIj5cbiAgICAgIDxpb24taWNvbiBuYW1lPVwibG9nby1naXRodWJcIj48L2lvbi1pY29uPlxuICAgICAgPGlvbi1sYWJlbD5HaXRIdWI8L2lvbi1sYWJlbD5cbiAgICA8L2lvbi1jaGlwPlxuXG4gICAgPGlvbi1jaGlwIGNvbG9yPVwiaW5zdGFncmFtXCIgYnV0dG9uIChjbGljayk9XCJvcGVuRXh0ZXJuYWxVcmwoJ2h0dHBzOi8vaW5zdGFncmFtLmNvbS9pb25pY2ZyYW1ld29yaycpXCI+XG4gICAgICA8aW9uLWljb24gbmFtZT1cImxvZ28taW5zdGFncmFtXCI+PC9pb24taWNvbj5cbiAgICAgIDxpb24tbGFiZWw+SW5zdGFncmFtPC9pb24tbGFiZWw+XG4gICAgPC9pb24tY2hpcD5cbiAgPC9kaXY+XG48L2lvbi1jb250ZW50PlxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgU3BlYWtlckxpc3RQYWdlIH0gZnJvbSAnLi9zcGVha2VyLWxpc3QnO1xuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICBjb21wb25lbnQ6IFNwZWFrZXJMaXN0UGFnZVxuICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBTcGVha2VyTGlzdFBhZ2VSb3V0aW5nTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5pbXBvcnQgeyBTcGVha2VyTGlzdFBhZ2UgfSBmcm9tICcuL3NwZWFrZXItbGlzdCc7XG5pbXBvcnQgeyBTcGVha2VyTGlzdFBhZ2VSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9zcGVha2VyLWxpc3Qtcm91dGluZy5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIElvbmljTW9kdWxlLFxuICAgIFNwZWFrZXJMaXN0UGFnZVJvdXRpbmdNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbU3BlYWtlckxpc3RQYWdlXSxcbn0pXG5leHBvcnQgY2xhc3MgU3BlYWtlckxpc3RNb2R1bGUge31cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmVyZW5jZURhdGEgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvY29uZmVyZW5jZS1kYXRhJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1zcGVha2VyLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJ3NwZWFrZXItbGlzdC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3BlYWtlci1saXN0LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU3BlYWtlckxpc3RQYWdlIHtcbiAgc3BlYWtlcnM6IGFueVtdID0gW107XG5cbiAgY29uc3RydWN0b3IocHVibGljIGNvbmZEYXRhOiBDb25mZXJlbmNlRGF0YSkge31cblxuICBpb25WaWV3RGlkRW50ZXIoKSB7XG4gICAgdGhpcy5jb25mRGF0YS5nZXRTcGVha2VycygpLnN1YnNjcmliZSgoc3BlYWtlcnM6IGFueVtdKSA9PiB7XG4gICAgICB0aGlzLnNwZWFrZXJzID0gc3BlYWtlcnM7XG4gICAgfSk7XG4gIH1cbn1cbiIsIjxpb24taGVhZGVyPlxuICA8aW9uLXRvb2xiYXI+XG4gICAgPGlvbi1idXR0b25zIHNsb3Q9XCJzdGFydFwiPlxuICAgICAgPGlvbi1tZW51LWJ1dHRvbj48L2lvbi1tZW51LWJ1dHRvbj5cbiAgICA8L2lvbi1idXR0b25zPlxuICAgIDxpb24tdGl0bGU+U3BlYWtlcnM8L2lvbi10aXRsZT5cbiAgPC9pb24tdG9vbGJhcj5cbjwvaW9uLWhlYWRlcj5cblxuPGlvbi1jb250ZW50IGZ1bGxzY3JlZW49XCJ0cnVlXCI+XG4gIDxpb24taGVhZGVyIGNvbGxhcHNlPVwiY29uZGVuc2VcIj5cbiAgICA8aW9uLXRvb2xiYXI+XG4gICAgICA8aW9uLXRpdGxlIHNpemU9XCJsYXJnZVwiPlNwZWFrZXJzPC9pb24tdGl0bGU+XG4gICAgPC9pb24tdG9vbGJhcj5cbiAgPC9pb24taGVhZGVyPlxuXG4gIDxpb24tZ3JpZCBmaXhlZD5cbiAgICA8aW9uLXJvdz5cbiAgICAgIDxpb24tY29sIHNpemU9XCIxMlwiIHNpemUtbWQ9XCI2XCIgKm5nRm9yPVwibGV0IHNwZWFrZXIgb2Ygc3BlYWtlcnNcIj5cbiAgICAgICAgPGlvbi1jYXJkIGNsYXNzPVwic3BlYWtlci1jYXJkXCI+XG4gICAgICAgICAgPGlvbi1jYXJkLWhlYWRlcj5cbiAgICAgICAgICAgIDxpb24taXRlbSBkZXRhaWw9XCJmYWxzZVwiIGxpbmVzPVwibm9uZVwiIGNsYXNzPVwic3BlYWtlci1pdGVtXCIgcm91dGVyTGluaz1cIi9hcHAvdGFicy9zcGVha2Vycy9zcGVha2VyLWRldGFpbHMve3tzcGVha2VyLmlkfX1cIj5cbiAgICAgICAgICAgICAgPGlvbi1hdmF0YXIgc2xvdD1cInN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgPGltZyBbc3JjXT1cInNwZWFrZXIucHJvZmlsZVBpY1wiIFthbHRdPVwic3BlYWtlci5uYW1lICsgJyBwcm9maWxlIHBpY3R1cmUnXCI+XG4gICAgICAgICAgICAgIDwvaW9uLWF2YXRhcj5cbiAgICAgICAgICAgICAgPGlvbi1sYWJlbD5cbiAgICAgICAgICAgICAgICA8aDI+e3tzcGVha2VyLm5hbWV9fTwvaDI+XG4gICAgICAgICAgICAgICAgPHA+e3tzcGVha2VyLnRpdGxlfX08L3A+XG4gICAgICAgICAgICAgIDwvaW9uLWxhYmVsPlxuICAgICAgICAgICAgPC9pb24taXRlbT5cbiAgICAgICAgICA8L2lvbi1jYXJkLWhlYWRlcj5cblxuICAgICAgICAgIDxpb24tY2FyZC1jb250ZW50PlxuICAgICAgICAgICAgPGlvbi1saXN0IGxpbmVzPVwibm9uZVwiPlxuICAgICAgICAgICAgICA8aW9uLWl0ZW0gKm5nRm9yPVwibGV0IHNlc3Npb24gb2Ygc3BlYWtlci5zZXNzaW9uc1wiIGRldGFpbD1cImZhbHNlXCIgcm91dGVyTGluaz1cIi9hcHAvdGFicy9zcGVha2Vycy9zZXNzaW9uL3t7c2Vzc2lvbi5pZH19XCI+XG4gICAgICAgICAgICAgICAgPGlvbi1sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxoMz57e3Nlc3Npb24ubmFtZX19PC9oMz5cbiAgICAgICAgICAgICAgICA8L2lvbi1sYWJlbD5cbiAgICAgICAgICAgICAgPC9pb24taXRlbT5cblxuICAgICAgICAgICAgICA8aW9uLWl0ZW0gZGV0YWlsPVwiZmFsc2VcIiByb3V0ZXJMaW5rPVwiL2FwcC90YWJzL3NwZWFrZXJzL3NwZWFrZXItZGV0YWlscy97e3NwZWFrZXIuaWR9fVwiPlxuICAgICAgICAgICAgICAgIDxpb24tbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aDM+QWJvdXQge3tzcGVha2VyLm5hbWV9fTwvaDM+XG4gICAgICAgICAgICAgICAgPC9pb24tbGFiZWw+XG4gICAgICAgICAgICAgIDwvaW9uLWl0ZW0+XG4gICAgICAgICAgICA8L2lvbi1saXN0PlxuICAgICAgICAgIDwvaW9uLWNhcmQtY29udGVudD5cbiAgICAgICAgPC9pb24tY2FyZD5cbiAgICAgIDwvaW9uLWNvbD5cbiAgICA8L2lvbi1yb3c+XG4gIDwvaW9uLWdyaWQ+XG48L2lvbi1jb250ZW50PlxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFRhYnNQYWdlIH0gZnJvbSAnLi90YWJzLXBhZ2UnO1xuaW1wb3J0IHsgU2NoZWR1bGVQYWdlIH0gZnJvbSAnLi4vc2NoZWR1bGUvc2NoZWR1bGUnO1xuXG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJ3RhYnMnLFxuICAgIGNvbXBvbmVudDogVGFic1BhZ2UsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ3NjaGVkdWxlJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgICAgIGNvbXBvbmVudDogU2NoZWR1bGVQYWdlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogJ3Nlc3Npb24vOnNlc3Npb25JZCcsXG4gICAgICAgICAgICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi4vc2Vzc2lvbi1kZXRhaWwvc2Vzc2lvbi1kZXRhaWwubW9kdWxlJykudGhlbihtID0+IG0uU2Vzc2lvbkRldGFpbE1vZHVsZSlcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdzcGVha2VycycsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogJycsXG4gICAgICAgICAgICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi4vc3BlYWtlci1saXN0L3NwZWFrZXItbGlzdC5tb2R1bGUnKS50aGVuKG0gPT4gbS5TcGVha2VyTGlzdE1vZHVsZSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6ICdzZXNzaW9uLzpzZXNzaW9uSWQnLFxuICAgICAgICAgICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4uL3Nlc3Npb24tZGV0YWlsL3Nlc3Npb24tZGV0YWlsLm1vZHVsZScpLnRoZW4obSA9PiBtLlNlc3Npb25EZXRhaWxNb2R1bGUpXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiAnc3BlYWtlci1kZXRhaWxzLzpzcGVha2VySWQnLFxuICAgICAgICAgICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4uL3NwZWFrZXItZGV0YWlsL3NwZWFrZXItZGV0YWlsLm1vZHVsZScpLnRoZW4obSA9PiBtLlNwZWFrZXJEZXRhaWxNb2R1bGUpXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnbWFwJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgICAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuLi9tYXAvbWFwLm1vZHVsZScpLnRoZW4obSA9PiBtLk1hcE1vZHVsZSlcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICdhYm91dCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogJycsXG4gICAgICAgICAgICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi4vYWJvdXQvYWJvdXQubW9kdWxlJykudGhlbihtID0+IG0uQWJvdXRNb2R1bGUpXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgcmVkaXJlY3RUbzogJy9hcHAvdGFicy9zY2hlZHVsZScsXG4gICAgICAgIHBhdGhNYXRjaDogJ2Z1bGwnXG4gICAgICB9XG4gICAgXVxuICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJzUGFnZVJvdXRpbmdNb2R1bGUgeyB9XG5cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5cbmltcG9ydCB7IFRhYnNQYWdlIH0gZnJvbSAnLi90YWJzLXBhZ2UnO1xuaW1wb3J0IHsgVGFic1BhZ2VSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi90YWJzLXBhZ2Utcm91dGluZy5tb2R1bGUnO1xuXG5pbXBvcnQgeyBBYm91dE1vZHVsZSB9IGZyb20gJy4uL2Fib3V0L2Fib3V0Lm1vZHVsZSc7XG5pbXBvcnQgeyBNYXBNb2R1bGUgfSBmcm9tICcuLi9tYXAvbWFwLm1vZHVsZSc7XG5pbXBvcnQgeyBTY2hlZHVsZU1vZHVsZSB9IGZyb20gJy4uL3NjaGVkdWxlL3NjaGVkdWxlLm1vZHVsZSc7XG5pbXBvcnQgeyBTZXNzaW9uRGV0YWlsTW9kdWxlIH0gZnJvbSAnLi4vc2Vzc2lvbi1kZXRhaWwvc2Vzc2lvbi1kZXRhaWwubW9kdWxlJztcbmltcG9ydCB7IFNwZWFrZXJEZXRhaWxNb2R1bGUgfSBmcm9tICcuLi9zcGVha2VyLWRldGFpbC9zcGVha2VyLWRldGFpbC5tb2R1bGUnO1xuaW1wb3J0IHsgU3BlYWtlckxpc3RNb2R1bGUgfSBmcm9tICcuLi9zcGVha2VyLWxpc3Qvc3BlYWtlci1saXN0Lm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBBYm91dE1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSW9uaWNNb2R1bGUsXG4gICAgTWFwTW9kdWxlLFxuICAgIFNjaGVkdWxlTW9kdWxlLFxuICAgIFNlc3Npb25EZXRhaWxNb2R1bGUsXG4gICAgU3BlYWtlckRldGFpbE1vZHVsZSxcbiAgICBTcGVha2VyTGlzdE1vZHVsZSxcbiAgICBUYWJzUGFnZVJvdXRpbmdNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVGFic1BhZ2UsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVGFic01vZHVsZSB7IH1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGVVcmw6ICd0YWJzLXBhZ2UuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVGFic1BhZ2Uge31cbiIsIjxpb24tdGFicz5cblxuICA8aW9uLXRhYi1iYXIgc2xvdD1cImJvdHRvbVwiPlxuICAgIDxpb24tdGFiLWJ1dHRvbiB0YWI9XCJzY2hlZHVsZVwiPlxuICAgICAgPGlvbi1pY29uIG5hbWU9XCJjYWxlbmRhclwiPjwvaW9uLWljb24+XG4gICAgICA8aW9uLWxhYmVsPlNjaGVkdWxlPC9pb24tbGFiZWw+XG4gICAgPC9pb24tdGFiLWJ1dHRvbj5cblxuICAgIDxpb24tdGFiLWJ1dHRvbiB0YWI9XCJzcGVha2Vyc1wiPlxuICAgICAgPGlvbi1pY29uIG5hbWU9XCJwZW9wbGVcIj48L2lvbi1pY29uPlxuICAgICAgPGlvbi1sYWJlbD5TcGVha2VyczwvaW9uLWxhYmVsPlxuICAgIDwvaW9uLXRhYi1idXR0b24+XG5cbiAgICA8aW9uLXRhYi1idXR0b24gdGFiPVwibWFwXCI+XG4gICAgICA8aW9uLWljb24gbmFtZT1cImxvY2F0aW9uXCI+PC9pb24taWNvbj5cbiAgICAgIDxpb24tbGFiZWw+TWFwPC9pb24tbGFiZWw+XG4gICAgPC9pb24tdGFiLWJ1dHRvbj5cblxuICAgIDxpb24tdGFiLWJ1dHRvbiB0YWI9XCJhYm91dFwiPlxuICAgICAgPGlvbi1pY29uIG5hbWU9XCJpbmZvcm1hdGlvbi1jaXJjbGVcIj48L2lvbi1pY29uPlxuICAgICAgPGlvbi1sYWJlbD5BYm91dDwvaW9uLWxhYmVsPlxuICAgIDwvaW9uLXRhYi1idXR0b24+XG4gIDwvaW9uLXRhYi1iYXI+XG5cbjwvaW9uLXRhYnM+XG4iLCJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgVXNlckRhdGEgfSBmcm9tICcuL3VzZXItZGF0YSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvbmZlcmVuY2VEYXRhIHtcbiAgZGF0YTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LCBwdWJsaWMgdXNlcjogVXNlckRhdGEpIHt9XG5cbiAgbG9hZCgpOiBhbnkge1xuICAgIGlmICh0aGlzLmRhdGEpIHtcbiAgICAgIHJldHVybiBvZih0aGlzLmRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAgIC5nZXQoJ2Fzc2V0cy9kYXRhL2RhdGEuanNvbicpXG4gICAgICAgIC5waXBlKG1hcCh0aGlzLnByb2Nlc3NEYXRhLCB0aGlzKSk7XG4gICAgfVxuICB9XG5cbiAgcHJvY2Vzc0RhdGEoZGF0YTogYW55KSB7XG4gICAgLy8ganVzdCBzb21lIGdvb2QgJ29sIEpTIGZ1biB3aXRoIG9iamVjdHMgYW5kIGFycmF5c1xuICAgIC8vIGJ1aWxkIHVwIHRoZSBkYXRhIGJ5IGxpbmtpbmcgc3BlYWtlcnMgdG8gc2Vzc2lvbnNcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuXG4gICAgLy8gbG9vcCB0aHJvdWdoIGVhY2ggZGF5IGluIHRoZSBzY2hlZHVsZVxuICAgIHRoaXMuZGF0YS5zY2hlZHVsZS5mb3JFYWNoKChkYXk6IGFueSkgPT4ge1xuICAgICAgLy8gbG9vcCB0aHJvdWdoIGVhY2ggdGltZWxpbmUgZ3JvdXAgaW4gdGhlIGRheVxuICAgICAgZGF5Lmdyb3Vwcy5mb3JFYWNoKChncm91cDogYW55KSA9PiB7XG4gICAgICAgIC8vIGxvb3AgdGhyb3VnaCBlYWNoIHNlc3Npb24gaW4gdGhlIHRpbWVsaW5lIGdyb3VwXG4gICAgICAgIGdyb3VwLnNlc3Npb25zLmZvckVhY2goKHNlc3Npb246IGFueSkgPT4ge1xuICAgICAgICAgIHNlc3Npb24uc3BlYWtlcnMgPSBbXTtcbiAgICAgICAgICBpZiAoc2Vzc2lvbi5zcGVha2VyTmFtZXMpIHtcbiAgICAgICAgICAgIHNlc3Npb24uc3BlYWtlck5hbWVzLmZvckVhY2goKHNwZWFrZXJOYW1lOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3BlYWtlciA9IHRoaXMuZGF0YS5zcGVha2Vycy5maW5kKFxuICAgICAgICAgICAgICAgIChzOiBhbnkpID0+IHMubmFtZSA9PT0gc3BlYWtlck5hbWVcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgaWYgKHNwZWFrZXIpIHtcbiAgICAgICAgICAgICAgICBzZXNzaW9uLnNwZWFrZXJzLnB1c2goc3BlYWtlcik7XG4gICAgICAgICAgICAgICAgc3BlYWtlci5zZXNzaW9ucyA9IHNwZWFrZXIuc2Vzc2lvbnMgfHwgW107XG4gICAgICAgICAgICAgICAgc3BlYWtlci5zZXNzaW9ucy5wdXNoKHNlc3Npb24pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG5cbiAgZ2V0VGltZWxpbmUoXG4gICAgZGF5SW5kZXg6IG51bWJlcixcbiAgICBxdWVyeVRleHQgPSAnJyxcbiAgICBleGNsdWRlVHJhY2tzOiBhbnlbXSA9IFtdLFxuICAgIHNlZ21lbnQgPSAnYWxsJ1xuICApIHtcbiAgICByZXR1cm4gdGhpcy5sb2FkKCkucGlwZShcbiAgICAgIG1hcCgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IGRheSA9IGRhdGEuc2NoZWR1bGVbZGF5SW5kZXhdO1xuICAgICAgICBkYXkuc2hvd25TZXNzaW9ucyA9IDA7XG5cbiAgICAgICAgcXVlcnlUZXh0ID0gcXVlcnlUZXh0LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvLHxcXC58LS9nLCAnICcpO1xuICAgICAgICBjb25zdCBxdWVyeVdvcmRzID0gcXVlcnlUZXh0LnNwbGl0KCcgJykuZmlsdGVyKHcgPT4gISF3LnRyaW0oKS5sZW5ndGgpO1xuXG4gICAgICAgIGRheS5ncm91cHMuZm9yRWFjaCgoZ3JvdXA6IGFueSkgPT4ge1xuICAgICAgICAgIGdyb3VwLmhpZGUgPSB0cnVlO1xuXG4gICAgICAgICAgZ3JvdXAuc2Vzc2lvbnMuZm9yRWFjaCgoc2Vzc2lvbjogYW55KSA9PiB7XG4gICAgICAgICAgICAvLyBjaGVjayBpZiB0aGlzIHNlc3Npb24gc2hvdWxkIHNob3cgb3Igbm90XG4gICAgICAgICAgICB0aGlzLmZpbHRlclNlc3Npb24oc2Vzc2lvbiwgcXVlcnlXb3JkcywgZXhjbHVkZVRyYWNrcywgc2VnbWVudCk7XG5cbiAgICAgICAgICAgIGlmICghc2Vzc2lvbi5oaWRlKSB7XG4gICAgICAgICAgICAgIC8vIGlmIHRoaXMgc2Vzc2lvbiBpcyBub3QgaGlkZGVuIHRoZW4gdGhpcyBncm91cCBzaG91bGQgc2hvd1xuICAgICAgICAgICAgICBncm91cC5oaWRlID0gZmFsc2U7XG4gICAgICAgICAgICAgIGRheS5zaG93blNlc3Npb25zKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBkYXk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBmaWx0ZXJTZXNzaW9uKFxuICAgIHNlc3Npb246IGFueSxcbiAgICBxdWVyeVdvcmRzOiBzdHJpbmdbXSxcbiAgICBleGNsdWRlVHJhY2tzOiBhbnlbXSxcbiAgICBzZWdtZW50OiBzdHJpbmdcbiAgKSB7XG4gICAgbGV0IG1hdGNoZXNRdWVyeVRleHQgPSBmYWxzZTtcbiAgICBpZiAocXVlcnlXb3Jkcy5sZW5ndGgpIHtcbiAgICAgIC8vIG9mIGFueSBxdWVyeSB3b3JkIGlzIGluIHRoZSBzZXNzaW9uIG5hbWUgdGhhbiBpdCBwYXNzZXMgdGhlIHF1ZXJ5IHRlc3RcbiAgICAgIHF1ZXJ5V29yZHMuZm9yRWFjaCgocXVlcnlXb3JkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKHNlc3Npb24ubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YocXVlcnlXb3JkKSA+IC0xKSB7XG4gICAgICAgICAgbWF0Y2hlc1F1ZXJ5VGV4dCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpZiB0aGVyZSBhcmUgbm8gcXVlcnkgd29yZHMgdGhlbiB0aGlzIHNlc3Npb24gcGFzc2VzIHRoZSBxdWVyeSB0ZXN0XG4gICAgICBtYXRjaGVzUXVlcnlUZXh0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBpZiBhbnkgb2YgdGhlIHNlc3Npb25zIHRyYWNrcyBhcmUgbm90IGluIHRoZVxuICAgIC8vIGV4Y2x1ZGUgdHJhY2tzIHRoZW4gdGhpcyBzZXNzaW9uIHBhc3NlcyB0aGUgdHJhY2sgdGVzdFxuICAgIGxldCBtYXRjaGVzVHJhY2tzID0gZmFsc2U7XG4gICAgc2Vzc2lvbi50cmFja3MuZm9yRWFjaCgodHJhY2tOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChleGNsdWRlVHJhY2tzLmluZGV4T2YodHJhY2tOYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgbWF0Y2hlc1RyYWNrcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBpZiB0aGUgc2VnbWVudCBpcyAnZmF2b3JpdGVzJywgYnV0IHNlc3Npb24gaXMgbm90IGEgdXNlciBmYXZvcml0ZVxuICAgIC8vIHRoZW4gdGhpcyBzZXNzaW9uIGRvZXMgbm90IHBhc3MgdGhlIHNlZ21lbnQgdGVzdFxuICAgIGxldCBtYXRjaGVzU2VnbWVudCA9IGZhbHNlO1xuICAgIGlmIChzZWdtZW50ID09PSAnZmF2b3JpdGVzJykge1xuICAgICAgaWYgKHRoaXMudXNlci5oYXNGYXZvcml0ZShzZXNzaW9uLm5hbWUpKSB7XG4gICAgICAgIG1hdGNoZXNTZWdtZW50ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbWF0Y2hlc1NlZ21lbnQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIGFsbCB0ZXN0cyBtdXN0IGJlIHRydWUgaWYgaXQgc2hvdWxkIG5vdCBiZSBoaWRkZW5cbiAgICBzZXNzaW9uLmhpZGUgPSAhKG1hdGNoZXNRdWVyeVRleHQgJiYgbWF0Y2hlc1RyYWNrcyAmJiBtYXRjaGVzU2VnbWVudCk7XG4gIH1cblxuICBnZXRTcGVha2VycygpIHtcbiAgICByZXR1cm4gdGhpcy5sb2FkKCkucGlwZShcbiAgICAgIG1hcCgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiBkYXRhLnNwZWFrZXJzLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgICAgICAgY29uc3QgYU5hbWUgPSBhLm5hbWUuc3BsaXQoJyAnKS5wb3AoKTtcbiAgICAgICAgICBjb25zdCBiTmFtZSA9IGIubmFtZS5zcGxpdCgnICcpLnBvcCgpO1xuICAgICAgICAgIHJldHVybiBhTmFtZS5sb2NhbGVDb21wYXJlKGJOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRUcmFja3MoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9hZCgpLnBpcGUoXG4gICAgICBtYXAoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gZGF0YS50cmFja3Muc29ydCgpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0TWFwKCkge1xuICAgIHJldHVybiB0aGlzLmxvYWQoKS5waXBlKFxuICAgICAgbWFwKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIGRhdGEubWFwO1xuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgZGFya1N0eWxlID0gW1xuICB7XG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJjb2xvclwiOiBcIiMyNDJmM2VcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXG4gICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJjb2xvclwiOiBcIiM3NDY4NTVcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5zdHJva2VcIixcbiAgICBcInN0eWxlcnNcIjogW1xuICAgICAge1xuICAgICAgICBcImNvbG9yXCI6IFwiIzI0MmYzZVwiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlLmxvY2FsaXR5XCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcbiAgICBcInN0eWxlcnNcIjogW1xuICAgICAge1xuICAgICAgICBcImNvbG9yXCI6IFwiI2Q1OTU2M1wiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaVwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXG4gICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJjb2xvclwiOiBcIiNkNTk1NjNcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2kucGFya1wiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiY29sb3JcIjogXCIjMjYzYzNmXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pLnBhcmtcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxuICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiY29sb3JcIjogXCIjNmI5YTc2XCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiY29sb3JcIjogXCIjMzg0MTRlXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5zdHJva2VcIixcbiAgICBcInN0eWxlcnNcIjogW1xuICAgICAge1xuICAgICAgICBcImNvbG9yXCI6IFwiIzIxMmEzN1wiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxuICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiY29sb3JcIjogXCIjOWNhNWIzXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5XCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJjb2xvclwiOiBcIiM3NDY4NTVcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXlcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuc3Ryb2tlXCIsXG4gICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJjb2xvclwiOiBcIiMxZjI4MzVcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXlcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxuICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiY29sb3JcIjogXCIjZjNkMTljXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdFwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiY29sb3JcIjogXCIjMmYzOTQ4XCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdC5zdGF0aW9uXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcbiAgICBcInN0eWxlcnNcIjogW1xuICAgICAge1xuICAgICAgICBcImNvbG9yXCI6IFwiI2Q1OTU2M1wiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJjb2xvclwiOiBcIiMxNzI2M2NcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXG4gICAgXCJzdHlsZXJzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJjb2xvclwiOiBcIiM1MTVjNmRcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5zdHJva2VcIixcbiAgICBcInN0eWxlcnNcIjogW1xuICAgICAge1xuICAgICAgICBcImNvbG9yXCI6IFwiIzE3MjYzY1wiXG4gICAgICB9XG4gICAgXVxuICB9XG5dIl0sIm5hbWVzIjpbIlBvcG92ZXJDb250cm9sbGVyIiwiUG9wb3ZlclBhZ2UiLCJjb25zdHJ1Y3RvciIsInBvcG92ZXJDdHJsIiwic3VwcG9ydCIsImRpc21pc3MiLCJjbG9zZSIsInVybCIsIndpbmRvdyIsIm9wZW4iLCJpMCIsIsm1ybVkaXJlY3RpdmVJbmplY3QiLCJpMSIsInNlbGVjdG9ycyIsImRlY2xzIiwidmFycyIsImNvbnN0cyIsInRlbXBsYXRlIiwiUG9wb3ZlclBhZ2VfVGVtcGxhdGUiLCJyZiIsImN0eCIsIsm1ybVlbGVtZW50U3RhcnQiLCLJtcm1bGlzdGVuZXIiLCJQb3BvdmVyUGFnZV9UZW1wbGF0ZV9pb25faXRlbV9jbGlja18xX2xpc3RlbmVyIiwiybXJtXRleHQiLCLJtcm1ZWxlbWVudEVuZCIsIlBvcG92ZXJQYWdlX1RlbXBsYXRlX2lvbl9pdGVtX2NsaWNrXzRfbGlzdGVuZXIiLCJQb3BvdmVyUGFnZV9UZW1wbGF0ZV9pb25faXRlbV9jbGlja183X2xpc3RlbmVyIiwiUG9wb3ZlclBhZ2VfVGVtcGxhdGVfaW9uX2l0ZW1fY2xpY2tfMTBfbGlzdGVuZXIiLCJQb3BvdmVyUGFnZV9UZW1wbGF0ZV9pb25faXRlbV9jbGlja18xM19saXN0ZW5lciIsIlJvdXRlck1vZHVsZSIsIkFib3V0UGFnZSIsInJvdXRlcyIsInBhdGgiLCJjb21wb25lbnQiLCJBYm91dFBhZ2VSb3V0aW5nTW9kdWxlIiwiZm9yQ2hpbGQiLCJpbXBvcnRzIiwiZXhwb3J0cyIsIkNvbW1vbk1vZHVsZSIsIkZvcm1zTW9kdWxlIiwiSW9uaWNNb2R1bGUiLCJBYm91dE1vZHVsZSIsImJvb3RzdHJhcCIsImRlY2xhcmF0aW9ucyIsIkFib3V0UGFnZV9uZ190ZW1wbGF0ZV8zOV9UZW1wbGF0ZV9pb25fZGF0ZXRpbWVfbmdNb2RlbENoYW5nZV8wX2xpc3RlbmVyIiwiJGV2ZW50IiwiybXJtXJlc3RvcmVWaWV3IiwiX3IyIiwiY3R4X3IxIiwiybXJtW5leHRDb250ZXh0IiwiybXJtXJlc2V0VmlldyIsImNvbmZlcmVuY2VEYXRlIiwiybXJtXByb3BlcnR5IiwiY3R4X3IwIiwibG9jYXRpb24iLCJzZWxlY3RPcHRpb25zIiwiaGVhZGVyIiwicHJlc2VudFBvcG92ZXIiLCJldmVudCIsIl90aGlzIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJwb3BvdmVyIiwiY3JlYXRlIiwicHJlc2VudCIsIkFib3V0UGFnZV9UZW1wbGF0ZSIsIsm1ybVlbGVtZW50IiwiQWJvdXRQYWdlX1RlbXBsYXRlX2lvbl9idXR0b25fY2xpY2tfNl9saXN0ZW5lciIsIkFib3V0UGFnZV9UZW1wbGF0ZV9pb25fc2VsZWN0X25nTW9kZWxDaGFuZ2VfMjNfbGlzdGVuZXIiLCLJtcm1dGVtcGxhdGUiLCJBYm91dFBhZ2VfbmdfdGVtcGxhdGVfMzlfVGVtcGxhdGUiLCLJtcm1YWR2YW5jZSIsIsm1ybVwdXJlRnVuY3Rpb24wIiwiX2MwIiwiybXJtXRleHRJbnRlcnBvbGF0ZTEiLCLJtcm1cGlwZUJpbmQyIiwiybXJtXRleHRJbnRlcnBvbGF0ZSIsIk1hcFBhZ2UiLCJNYXBQYWdlUm91dGluZ01vZHVsZSIsIk1hcE1vZHVsZSIsIkVsZW1lbnRSZWYiLCJDb25mZXJlbmNlRGF0YSIsIlBsYXRmb3JtIiwiRE9DVU1FTlQiLCJkYXJrU3R5bGUiLCJkb2MiLCJjb25mRGF0YSIsInBsYXRmb3JtIiwibmdBZnRlclZpZXdJbml0IiwiYXBwRWwiLCJxdWVyeVNlbGVjdG9yIiwiaXNEYXJrIiwic3R5bGUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImdvb2dsZU1hcHMiLCJnZXRHb29nbGVNYXBzIiwibWFwIiwiZ2V0TWFwIiwic3Vic2NyaWJlIiwibWFwRGF0YSIsIm1hcEVsZSIsIm1hcEVsZW1lbnQiLCJuYXRpdmVFbGVtZW50IiwiTWFwIiwiY2VudGVyIiwiZmluZCIsImQiLCJ6b29tIiwic3R5bGVzIiwiZm9yRWFjaCIsIm1hcmtlckRhdGEiLCJpbmZvV2luZG93IiwiSW5mb1dpbmRvdyIsImNvbnRlbnQiLCJuYW1lIiwibWFya2VyIiwiTWFya2VyIiwicG9zaXRpb24iLCJ0aXRsZSIsImFkZExpc3RlbmVyIiwiYWRkTGlzdGVuZXJPbmNlIiwiYWRkIiwib2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwibXV0YXRpb24iLCJhdHRyaWJ1dGVOYW1lIiwiZWwiLCJ0YXJnZXQiLCJzZXRPcHRpb25zIiwib2JzZXJ2ZSIsImF0dHJpYnV0ZXMiLCJpMiIsInZpZXdRdWVyeSIsIk1hcFBhZ2VfUXVlcnkiLCJhcGlLZXkiLCJ3aW4iLCJnb29nbGVNb2R1bGUiLCJnb29nbGUiLCJtYXBzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJhc3luYyIsImRlZmVyIiwiYm9keSIsImFwcGVuZENoaWxkIiwib25sb2FkIiwiZ29vZ2xlTW9kdWxlMiIsIkNvbmZpZyIsIk1vZGFsQ29udHJvbGxlciIsIk5hdlBhcmFtcyIsIlNjaGVkdWxlRmlsdGVyUGFnZV9pb25fYnV0dG9uXzNfVGVtcGxhdGVfaW9uX2J1dHRvbl9jbGlja18wX2xpc3RlbmVyIiwiX3I1IiwiY3R4X3I0IiwiU2NoZWR1bGVGaWx0ZXJQYWdlX2lvbl9idXR0b25fNF9UZW1wbGF0ZV9pb25fYnV0dG9uX2NsaWNrXzBfbGlzdGVuZXIiLCJfcjciLCJjdHhfcjYiLCJzZWxlY3RBbGwiLCJ0cmFja19yOCIsImljb24iLCJTY2hlZHVsZUZpbHRlclBhZ2VfaW9uX2l0ZW1fMTRfaW9uX2ljb25fMl9UZW1wbGF0ZSIsIlNjaGVkdWxlRmlsdGVyUGFnZV9pb25faXRlbV8xNF9UZW1wbGF0ZV9pb25fY2hlY2tib3hfbmdNb2RlbENoYW5nZV8zX2xpc3RlbmVyIiwicmVzdG9yZWRDdHgiLCJfcjEyIiwiJGltcGxpY2l0IiwiaXNDaGVja2VkIiwiybXJtWF0dHJpYnV0ZSIsIsm1ybVwaXBlQmluZDEiLCJjdHhfcjIiLCJpb3MiLCJTY2hlZHVsZUZpbHRlclBhZ2VfaW9uX2Zvb3Rlcl8xNV9UZW1wbGF0ZV9pb25fYnV0dG9uX2NsaWNrXzNfbGlzdGVuZXIiLCJfcjE0IiwiY3R4X3IxMyIsIlNjaGVkdWxlRmlsdGVyUGFnZV9pb25fZm9vdGVyXzE1X1RlbXBsYXRlX2lvbl9idXR0b25fY2xpY2tfNl9saXN0ZW5lciIsImN0eF9yMTUiLCJTY2hlZHVsZUZpbHRlclBhZ2UiLCJjb25maWciLCJtb2RhbEN0cmwiLCJuYXZQYXJhbXMiLCJ0cmFja3MiLCJpb25WaWV3V2lsbEVudGVyIiwiZ2V0IiwiZXhjbHVkZWRUcmFja05hbWVzIiwiZ2V0VHJhY2tzIiwidHJhY2siLCJwdXNoIiwiaW5kZXhPZiIsImNoZWNrIiwiYXBwbHlGaWx0ZXJzIiwiZmlsdGVyIiwiYyIsImRhdGEiLCJTY2hlZHVsZUZpbHRlclBhZ2VfVGVtcGxhdGUiLCJTY2hlZHVsZUZpbHRlclBhZ2VfaW9uX2J1dHRvbl8zX1RlbXBsYXRlIiwiU2NoZWR1bGVGaWx0ZXJQYWdlX2lvbl9idXR0b25fNF9UZW1wbGF0ZSIsIlNjaGVkdWxlRmlsdGVyUGFnZV9UZW1wbGF0ZV9pb25fYnV0dG9uX2NsaWNrXzhfbGlzdGVuZXIiLCJTY2hlZHVsZUZpbHRlclBhZ2VfaW9uX2l0ZW1fMTRfVGVtcGxhdGUiLCJTY2hlZHVsZUZpbHRlclBhZ2VfaW9uX2Zvb3Rlcl8xNV9UZW1wbGF0ZSIsIlNjaGVkdWxlUGFnZSIsIlNjaGVkdWxlUGFnZVJvdXRpbmdNb2R1bGUiLCJTY2hlZHVsZU1vZHVsZSIsIlJvdXRlciIsIkFsZXJ0Q29udHJvbGxlciIsIklvbkxpc3QiLCJJb25Sb3V0ZXJPdXRsZXQiLCJMb2FkaW5nQ29udHJvbGxlciIsIlRvYXN0Q29udHJvbGxlciIsIlVzZXJEYXRhIiwiU2NoZWR1bGVQYWdlX2lvbl9zZWdtZW50XzNfVGVtcGxhdGVfaW9uX3NlZ21lbnRfbmdNb2RlbENoYW5nZV8wX2xpc3RlbmVyIiwiX3IxMSIsImN0eF9yMTAiLCJzZWdtZW50IiwiU2NoZWR1bGVQYWdlX2lvbl9zZWdtZW50XzNfVGVtcGxhdGVfaW9uX3NlZ21lbnRfaW9uQ2hhbmdlXzBfbGlzdGVuZXIiLCJjdHhfcjEyIiwidXBkYXRlU2NoZWR1bGUiLCJTY2hlZHVsZVBhZ2VfaW9uX3NlYXJjaGJhcl81X1RlbXBsYXRlX2lvbl9zZWFyY2hiYXJfbmdNb2RlbENoYW5nZV8wX2xpc3RlbmVyIiwicXVlcnlUZXh0IiwiU2NoZWR1bGVQYWdlX2lvbl9zZWFyY2hiYXJfNV9UZW1wbGF0ZV9pb25fc2VhcmNoYmFyX2lvbklucHV0XzBfbGlzdGVuZXIiLCJTY2hlZHVsZVBhZ2VfaW9uX3NlYXJjaGJhcl81X1RlbXBsYXRlX2lvbl9zZWFyY2hiYXJfaW9uQ2FuY2VsXzBfbGlzdGVuZXIiLCJjdHhfcjE2Iiwic2hvd1NlYXJjaGJhciIsImN0eF9yMyIsIlNjaGVkdWxlUGFnZV9pb25fYnV0dG9uXzdfVGVtcGxhdGVfaW9uX2J1dHRvbl9jbGlja18wX2xpc3RlbmVyIiwiX3IxOCIsImN0eF9yMTciLCJTY2hlZHVsZVBhZ2VfaW9uX2J1dHRvbl84X1RlbXBsYXRlX2lvbl9idXR0b25fY2xpY2tfMF9saXN0ZW5lciIsIl9yMjIiLCJjdHhfcjIxIiwicHJlc2VudEZpbHRlciIsIlNjaGVkdWxlUGFnZV9pb25fYnV0dG9uXzhfc3Bhbl8xX1RlbXBsYXRlIiwiU2NoZWR1bGVQYWdlX2lvbl9idXR0b25fOF9zcGFuXzJfVGVtcGxhdGUiLCJjdHhfcjUiLCJTY2hlZHVsZVBhZ2VfaW9uX3Rvb2xiYXJfOV9UZW1wbGF0ZV9pb25fc2VnbWVudF9uZ01vZGVsQ2hhbmdlXzFfbGlzdGVuZXIiLCJfcjI0IiwiY3R4X3IyMyIsIlNjaGVkdWxlUGFnZV9pb25fdG9vbGJhcl85X1RlbXBsYXRlX2lvbl9zZWdtZW50X2lvbkNoYW5nZV8xX2xpc3RlbmVyIiwiY3R4X3IyNSIsIlNjaGVkdWxlUGFnZV9pb25faXRlbV9ncm91cF8xOV9pb25faXRlbV9zbGlkaW5nXzRfaW9uX2l0ZW1fb3B0aW9uXzEwX1RlbXBsYXRlX2lvbl9pdGVtX29wdGlvbl9jbGlja18wX2xpc3RlbmVyIiwiX3IzMyIsInNlc3Npb25fcjI4IiwiX3IyOSIsIsm1ybVyZWZlcmVuY2UiLCJjdHhfcjMyIiwiYWRkRmF2b3JpdGUiLCJTY2hlZHVsZVBhZ2VfaW9uX2l0ZW1fZ3JvdXBfMTlfaW9uX2l0ZW1fc2xpZGluZ180X2lvbl9pdGVtX29wdGlvbl8xMV9UZW1wbGF0ZV9pb25faXRlbV9vcHRpb25fY2xpY2tfMF9saXN0ZW5lciIsIl9yMzYiLCJjdHhfcjM1IiwicmVtb3ZlRmF2b3JpdGUiLCJTY2hlZHVsZVBhZ2VfaW9uX2l0ZW1fZ3JvdXBfMTlfaW9uX2l0ZW1fc2xpZGluZ180X2lvbl9pdGVtX29wdGlvbl8xMF9UZW1wbGF0ZSIsIlNjaGVkdWxlUGFnZV9pb25faXRlbV9ncm91cF8xOV9pb25faXRlbV9zbGlkaW5nXzRfaW9uX2l0ZW1fb3B0aW9uXzExX1RlbXBsYXRlIiwiaGlkZSIsIsm1ybVwcm9wZXJ0eUludGVycG9sYXRlMSIsImlkIiwiybXJtXRleHRJbnRlcnBvbGF0ZTMiLCJ0aW1lU3RhcnQiLCJ0aW1lRW5kIiwiY3R4X3IyNyIsIlNjaGVkdWxlUGFnZV9pb25faXRlbV9ncm91cF8xOV9pb25faXRlbV9zbGlkaW5nXzRfVGVtcGxhdGUiLCJncm91cF9yMjYiLCJ0aW1lIiwic2Vzc2lvbnMiLCJhbGVydEN0cmwiLCJsb2FkaW5nQ3RybCIsInJvdXRlciIsInJvdXRlck91dGxldCIsInRvYXN0Q3RybCIsInVzZXIiLCJkYXlJbmRleCIsImV4Y2x1ZGVUcmFja3MiLCJzaG93blNlc3Npb25zIiwiZ3JvdXBzIiwibmdPbkluaXQiLCJzY2hlZHVsZUxpc3QiLCJjbG9zZVNsaWRpbmdJdGVtcyIsImdldFRpbWVsaW5lIiwibW9kYWwiLCJwcmVzZW50aW5nRWxlbWVudCIsIm5hdGl2ZUVsIiwiY29tcG9uZW50UHJvcHMiLCJleGNsdWRlZFRyYWNrcyIsIm9uV2lsbERpc21pc3MiLCJzbGlkaW5nSXRlbSIsInNlc3Npb25EYXRhIiwiX3RoaXMyIiwiaGFzRmF2b3JpdGUiLCJ0b2FzdCIsImR1cmF0aW9uIiwiYnV0dG9ucyIsInRleHQiLCJyb2xlIiwiX3RoaXMzIiwiYWxlcnQiLCJtZXNzYWdlIiwiaGFuZGxlciIsIm9wZW5Tb2NpYWwiLCJuZXR3b3JrIiwiZmFiIiwiX3RoaXM0IiwibG9hZGluZyIsIk1hdGgiLCJyYW5kb20iLCJpMyIsImk0IiwiU2NoZWR1bGVQYWdlX1F1ZXJ5IiwiU2NoZWR1bGVQYWdlX2lvbl9idXR0b25zXzJfVGVtcGxhdGUiLCJTY2hlZHVsZVBhZ2VfaW9uX3NlZ21lbnRfM19UZW1wbGF0ZSIsIlNjaGVkdWxlUGFnZV9pb25fdGl0bGVfNF9UZW1wbGF0ZSIsIlNjaGVkdWxlUGFnZV9pb25fc2VhcmNoYmFyXzVfVGVtcGxhdGUiLCJTY2hlZHVsZVBhZ2VfaW9uX2J1dHRvbl83X1RlbXBsYXRlIiwiU2NoZWR1bGVQYWdlX2lvbl9idXR0b25fOF9UZW1wbGF0ZSIsIlNjaGVkdWxlUGFnZV9pb25fdG9vbGJhcl85X1RlbXBsYXRlIiwiU2NoZWR1bGVQYWdlX1RlbXBsYXRlX2lvbl9zZWFyY2hiYXJfbmdNb2RlbENoYW5nZV8xNl9saXN0ZW5lciIsIlNjaGVkdWxlUGFnZV9UZW1wbGF0ZV9pb25fc2VhcmNoYmFyX2lvbklucHV0XzE2X2xpc3RlbmVyIiwiU2NoZWR1bGVQYWdlX2lvbl9pdGVtX2dyb3VwXzE5X1RlbXBsYXRlIiwiU2NoZWR1bGVQYWdlX1RlbXBsYXRlX2lvbl9mYWJfYnV0dG9uX2NsaWNrXzI3X2xpc3RlbmVyIiwiX3IzOCIsIl9yOSIsIlNjaGVkdWxlUGFnZV9UZW1wbGF0ZV9pb25fZmFiX2J1dHRvbl9jbGlja18yOV9saXN0ZW5lciIsIlNjaGVkdWxlUGFnZV9UZW1wbGF0ZV9pb25fZmFiX2J1dHRvbl9jbGlja18zMV9saXN0ZW5lciIsIlNjaGVkdWxlUGFnZV9UZW1wbGF0ZV9pb25fZmFiX2J1dHRvbl9jbGlja18zM19saXN0ZW5lciIsIlNlc3Npb25EZXRhaWxQYWdlIiwiU2Vzc2lvbkRldGFpbFBhZ2VSb3V0aW5nTW9kdWxlIiwiU2Vzc2lvbkRldGFpbE1vZHVsZSIsIkFjdGl2YXRlZFJvdXRlIiwiybXJtWNsYXNzTWFwIiwidHJhY2tfcjQiLCJ0b0xvd2VyQ2FzZSIsIlNlc3Npb25EZXRhaWxQYWdlX2Rpdl8xMV9zcGFuXzNfVGVtcGxhdGUiLCJzZXNzaW9uIiwiZGVzY3JpcHRpb24iLCLJtcm1dGV4dEludGVycG9sYXRlMiIsImRhdGFQcm92aWRlciIsInVzZXJQcm92aWRlciIsInJvdXRlIiwiaXNGYXZvcml0ZSIsImRlZmF1bHRIcmVmIiwibG9hZCIsInNjaGVkdWxlIiwic2Vzc2lvbklkIiwic25hcHNob3QiLCJwYXJhbU1hcCIsImdyb3VwIiwiaW9uVmlld0RpZEVudGVyIiwic2Vzc2lvbkNsaWNrIiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJ0b2dnbGVGYXZvcml0ZSIsInNoYXJlU2Vzc2lvbiIsIlNlc3Npb25EZXRhaWxQYWdlX1RlbXBsYXRlIiwiU2Vzc2lvbkRldGFpbFBhZ2VfVGVtcGxhdGVfaW9uX2J1dHRvbl9jbGlja181X2xpc3RlbmVyIiwiU2Vzc2lvbkRldGFpbFBhZ2VfaW9uX2ljb25fNl9UZW1wbGF0ZSIsIlNlc3Npb25EZXRhaWxQYWdlX2lvbl9pY29uXzdfVGVtcGxhdGUiLCJTZXNzaW9uRGV0YWlsUGFnZV9UZW1wbGF0ZV9pb25fYnV0dG9uX2NsaWNrXzhfbGlzdGVuZXIiLCJTZXNzaW9uRGV0YWlsUGFnZV9kaXZfMTFfVGVtcGxhdGUiLCJTZXNzaW9uRGV0YWlsUGFnZV9UZW1wbGF0ZV9pb25faXRlbV9jbGlja18xM19saXN0ZW5lciIsIlNlc3Npb25EZXRhaWxQYWdlX1RlbXBsYXRlX2lvbl9pdGVtX2NsaWNrXzE2X2xpc3RlbmVyIiwiU2Vzc2lvbkRldGFpbFBhZ2VfVGVtcGxhdGVfaW9uX2l0ZW1fY2xpY2tfMTlfbGlzdGVuZXIiLCJTZXNzaW9uRGV0YWlsUGFnZV9UZW1wbGF0ZV9pb25faXRlbV9jbGlja18yMl9saXN0ZW5lciIsIlNlc3Npb25EZXRhaWxQYWdlX1RlbXBsYXRlX2lvbl9pdGVtX2NsaWNrXzI2X2xpc3RlbmVyIiwiU3BlYWtlckRldGFpbFBhZ2UiLCJTcGVha2VyRGV0YWlsUGFnZVJvdXRpbmdNb2R1bGUiLCJTcGVha2VyRGV0YWlsTW9kdWxlIiwiQWN0aW9uU2hlZXRDb250cm9sbGVyIiwiSW5BcHBCcm93c2VyIiwiU3BlYWtlckRldGFpbFBhZ2VfaW9uX2J1dHRvbnNfNV9UZW1wbGF0ZV9pb25fYnV0dG9uX2NsaWNrXzFfbGlzdGVuZXIiLCJvcGVuQ29udGFjdCIsInNwZWFrZXIiLCJTcGVha2VyRGV0YWlsUGFnZV9pb25fYnV0dG9uc181X1RlbXBsYXRlX2lvbl9idXR0b25fY2xpY2tfM19saXN0ZW5lciIsIm9wZW5TcGVha2VyU2hhcmUiLCJhY3Rpb25TaGVldEN0cmwiLCJpbkFwcEJyb3dzZXIiLCJzcGVha2VySWQiLCJzcGVha2VycyIsIm9wZW5FeHRlcm5hbFVybCIsImFjdGlvblNoZWV0IiwidHdpdHRlciIsImNvcmRvdmEiLCJwbHVnaW5zIiwiY2xpcGJvYXJkIiwiY29weSIsIm1vZGUiLCJlbWFpbCIsInBob25lIiwiU3BlYWtlckRldGFpbFBhZ2VfVGVtcGxhdGUiLCJTcGVha2VyRGV0YWlsUGFnZV9pb25fYnV0dG9uc181X1RlbXBsYXRlIiwiU3BlYWtlckRldGFpbFBhZ2VfVGVtcGxhdGVfaW9uX2NoaXBfY2xpY2tfMTRfbGlzdGVuZXIiLCJTcGVha2VyRGV0YWlsUGFnZV9UZW1wbGF0ZV9pb25fY2hpcF9jbGlja18xOF9saXN0ZW5lciIsIlNwZWFrZXJEZXRhaWxQYWdlX1RlbXBsYXRlX2lvbl9jaGlwX2NsaWNrXzIyX2xpc3RlbmVyIiwicHJvZmlsZVBpYyIsIsm1ybVzYW5pdGl6ZVVybCIsImFib3V0IiwiU3BlYWtlckxpc3RQYWdlIiwiU3BlYWtlckxpc3RQYWdlUm91dGluZ01vZHVsZSIsIlNwZWFrZXJMaXN0TW9kdWxlIiwic2Vzc2lvbl9yMyIsIlNwZWFrZXJMaXN0UGFnZV9pb25fY29sXzEzX2lvbl9pdGVtXzEzX1RlbXBsYXRlIiwic3BlYWtlcl9yMSIsImdldFNwZWFrZXJzIiwiU3BlYWtlckxpc3RQYWdlX1RlbXBsYXRlIiwiU3BlYWtlckxpc3RQYWdlX2lvbl9jb2xfMTNfVGVtcGxhdGUiLCJUYWJzUGFnZSIsImNoaWxkcmVuIiwibG9hZENoaWxkcmVuIiwidGhlbiIsIm0iLCJyZWRpcmVjdFRvIiwicGF0aE1hdGNoIiwiVGFic1BhZ2VSb3V0aW5nTW9kdWxlIiwiVGFic01vZHVsZSIsIlRhYnNQYWdlX1RlbXBsYXRlIiwiSHR0cENsaWVudCIsIm9mIiwiaHR0cCIsInBpcGUiLCJwcm9jZXNzRGF0YSIsImRheSIsInNwZWFrZXJOYW1lcyIsInNwZWFrZXJOYW1lIiwicyIsInJlcGxhY2UiLCJxdWVyeVdvcmRzIiwic3BsaXQiLCJ3IiwidHJpbSIsImxlbmd0aCIsImZpbHRlclNlc3Npb24iLCJtYXRjaGVzUXVlcnlUZXh0IiwicXVlcnlXb3JkIiwibWF0Y2hlc1RyYWNrcyIsInRyYWNrTmFtZSIsIm1hdGNoZXNTZWdtZW50Iiwic29ydCIsImEiLCJiIiwiYU5hbWUiLCJwb3AiLCJiTmFtZSIsImxvY2FsZUNvbXBhcmUiLCLJtcm1aW5qZWN0IiwiZmFjdG9yeSIsIsm1ZmFjIiwicHJvdmlkZWRJbiJdLCJzb3VyY2VSb290Ijoid2VicGFjazovLy8iLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbXX0=