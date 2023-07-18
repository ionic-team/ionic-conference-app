"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_schedule_schedule_module_ts"],{

/***/ 50679:
/*!**********************************************************!*\
  !*** ./src/app/pages/schedule-filter/schedule-filter.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScheduleFilterPage: () => (/* binding */ ScheduleFilterPage)
/* harmony export */ });
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../providers/conference-data */ 27440);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 64210);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 28849);







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
  styles: ["\n\n\n\n.md[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  letter-spacing: 0;\n  text-transform: capitalize;\n}\n\n.md[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%] {\n  --checkbox-background-checked: transparent;\n  --border-color: transparent;\n  --border-color-checked: transparent;\n  --checkmark-color: var(--ion-color-primary);\n}\n\n.md[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  background: inherit;\n}\n\n\n\n\n\n.ios[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.ios[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2NoZWR1bGUtZmlsdGVyL3NjaGVkdWxlLWZpbHRlci5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vQmxlc3NpbmclMjBLdW5ha2EvRGVza3RvcC9taW5pbmdfZXhwby9taW5pbmctZXhwby9zcmMvYXBwL3BhZ2VzL3NjaGVkdWxlLWZpbHRlci9zY2hlZHVsZS1maWx0ZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFBQTtBQUlBO0VBQ0UsaUJBQUE7RUFFQSwwQkFBQTtBQ0RGOztBRElBO0VBQ0UsMENBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsMkNBQUE7QUNERjs7QURJQTtFQUNFLG1CQUFBO0FDREY7O0FES0E7O0VBQUE7QUFJQTtFQUNFLGdCQUFBO0FDSEY7O0FETUE7RUFDRSwrQkFBQTtBQ0hGIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogTWF0ZXJpYWwgRGVzaWduXHJcbiAqL1xyXG5cclxuLm1kIGlvbi10b29sYmFyIGlvbi1idXR0b24ge1xyXG4gIGxldHRlci1zcGFjaW5nOiAwO1xyXG5cclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuLm1kIGlvbi1jaGVja2JveCB7XHJcbiAgLS1jaGVja2JveC1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xyXG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcclxuICAtLWNoZWNrbWFyay1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG4ubWQgaW9uLWxpc3Qge1xyXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcblxyXG4vKlxyXG4gKiBpT1NcclxuICovXHJcblxyXG4uaW9zIGlvbi1saXN0LWhlYWRlciB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmlvcyBpb24tY2hlY2tib3gge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuIiwiLypcbiAqIE1hdGVyaWFsIERlc2lnblxuICovXG4ubWQgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbiB7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLm1kIGlvbi1jaGVja2JveCB7XG4gIC0tY2hlY2tib3gtYmFja2dyb3VuZC1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiB0cmFuc3BhcmVudDtcbiAgLS1jaGVja21hcmstY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLm1kIGlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLypcbiAqIGlPU1xuICovXG4uaW9zIGlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5pb3MgaW9uLWNoZWNrYm94IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 38798:
/*!***********************************************************!*\
  !*** ./src/app/pages/schedule/schedule-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SchedulePageRoutingModule: () => (/* binding */ SchedulePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule */ 51832);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




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

/***/ 83436:
/*!***************************************************!*\
  !*** ./src/app/pages/schedule/schedule.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScheduleModule: () => (/* binding */ ScheduleModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 64210);
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule */ 51832);
/* harmony import */ var _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../schedule-filter/schedule-filter */ 50679);
/* harmony import */ var _schedule_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schedule-routing.module */ 38798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);







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

/***/ 51832:
/*!********************************************!*\
  !*** ./src/app/pages/schedule/schedule.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SchedulePage: () => (/* binding */ SchedulePage)
/* harmony export */ });
/* harmony import */ var C_Users_Blessing_Kunaka_Desktop_mining_expo_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../schedule-filter/schedule-filter */ 50679);
/* harmony import */ var _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/conference-data */ 27440);
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/user-data */ 8176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 64210);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 28849);













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
    return (0,C_Users_Blessing_Kunaka_Desktop_mining_expo_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    return (0,C_Users_Blessing_Kunaka_Desktop_mining_expo_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    return (0,C_Users_Blessing_Kunaka_Desktop_mining_expo_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    return (0,C_Users_Blessing_Kunaka_Desktop_mining_expo_mining_expo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
  styles: ["ion-fab-button[_ngcontent-%COMP%] {\n  --background: var(--ion-color-step-150, #ffffff);\n  --background-hover: var(--ion-color-step-200, #f2f2f2);\n  --background-focused: var(--ion-color-step-250, #d9d9d9);\n  --color: var(--ion-color-primary, #3880ff);\n}\n\n\n\n\n\n\n.ios[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%] {\n  --background-activated: var(--ion-color-step-250, #d9d9d9);\n}\n\nion-item-sliding[track=ionic][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  border-left: 2px solid var(--ion-color-primary);\n}\n\nion-item-sliding[track=angular][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  border-left: 2px solid #ac282b;\n}\n\nion-item-sliding[track=communication][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  border-left: 2px solid #8e8d93;\n}\n\nion-item-sliding[track=tooling][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  border-left: 2px solid #fe4c52;\n}\n\nion-item-sliding[track=services][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  border-left: 2px solid #fd8b2d;\n}\n\nion-item-sliding[track=design][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  border-left: 2px solid #fed035;\n}\n\nion-item-sliding[track=workshop][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  border-left: 2px solid #69bb7b;\n}\n\nion-item-sliding[track=food][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  border-left: 2px solid #3bc7c4;\n}\n\nion-item-sliding[track=documentation][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  border-left: 2px solid #b16be3;\n}\n\nion-item-sliding[track=navigation][_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  border-left: 2px solid #6600cc;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2NoZWR1bGUvc2NoZWR1bGUuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uL0JsZXNzaW5nJTIwS3VuYWthL0Rlc2t0b3AvbWluaW5nX2V4cG8vbWluaW5nLWV4cG8vc3JjL2FwcC9wYWdlcy9zY2hlZHVsZS9zY2hlZHVsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0RBQUE7RUFDQSxzREFBQTtFQUNBLHdEQUFBO0VBQ0EsMENBQUE7QUNDRjs7QURFQTs7O0VBQUE7QUFJQTtFQUNFLDBEQUFBO0FDQ0Y7O0FEZ0JFO0VBQ0Usa0JBQUE7RUFFQSwrQ0FBQTtBQ2RKOztBRFdFO0VBQ0Usa0JBQUE7RUFFQSw4QkFBQTtBQ1RKOztBRE1FO0VBQ0Usa0JBQUE7RUFFQSw4QkFBQTtBQ0pKOztBRENFO0VBQ0Usa0JBQUE7RUFFQSw4QkFBQTtBQ0NKOztBREpFO0VBQ0Usa0JBQUE7RUFFQSw4QkFBQTtBQ01KOztBRFRFO0VBQ0Usa0JBQUE7RUFFQSw4QkFBQTtBQ1dKOztBRGRFO0VBQ0Usa0JBQUE7RUFFQSw4QkFBQTtBQ2dCSjs7QURuQkU7RUFDRSxrQkFBQTtFQUVBLDhCQUFBO0FDcUJKOztBRHhCRTtFQUNFLGtCQUFBO0VBRUEsOEJBQUE7QUMwQko7O0FEN0JFO0VBQ0Usa0JBQUE7RUFFQSw4QkFBQTtBQytCSiIsInNvdXJjZXNDb250ZW50IjpbImlvbi1mYWItYnV0dG9uIHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2ZmZmZmZik7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB2YXIoLS1pb24tY29sb3Itc3RlcC0yMDAsICNmMmYyZjIpO1xyXG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB2YXIoLS1pb24tY29sb3Itc3RlcC0yNTAsICNkOWQ5ZDkpO1xyXG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKTtcclxufVxyXG5cclxuLypcclxuICogTWF0ZXJpYWwgRGVzaWduIHVzZXMgdGhlIHJpcHBsZSBmb3IgYWN0aXZhdGVkXHJcbiAqIHNvIG9ubHkgc3R5bGUgdGhlIGlPUyBhY3RpdmF0ZWQgYmFja2dyb3VuZFxyXG4gKi9cclxuLmlvcyBpb24tZmFiLWJ1dHRvbiB7XHJcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwLCAjZDlkOWQ5KTtcclxufVxyXG5cclxuJGNhdGVnb3JpZXM6IChcclxuICBpb25pYzogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpLFxyXG4gIGFuZ3VsYXI6ICNhYzI4MmIsXHJcbiAgY29tbXVuaWNhdGlvbjogIzhlOGQ5MyxcclxuICB0b29saW5nOiAjZmU0YzUyLFxyXG4gIHNlcnZpY2VzOiAjZmQ4YjJkLFxyXG4gIGRlc2lnbjogI2ZlZDAzNSxcclxuICB3b3Jrc2hvcDogIzY5YmI3YixcclxuICBmb29kOiAjM2JjN2M0LFxyXG4gIGRvY3VtZW50YXRpb246ICNiMTZiZTMsXHJcbiAgbmF2aWdhdGlvbjogIzY2MDBjY1xyXG4pO1xyXG5cclxuQGVhY2ggJHRyYWNrLCAkdmFsdWUgaW4gbWFwLXJlbW92ZSgkY2F0ZWdvcmllcykge1xyXG4gIGlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9JyN7JHRyYWNrfSddIGlvbi1sYWJlbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcblxyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAkdmFsdWU7XHJcbiAgfVxyXG59XHJcbiIsImlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNmZmZmZmYpO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHZhcigtLWlvbi1jb2xvci1zdGVwLTIwMCwgI2YyZjJmMik7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB2YXIoLS1pb24tY29sb3Itc3RlcC0yNTAsICNkOWQ5ZDkpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZik7XG59XG5cbi8qXG4gKiBNYXRlcmlhbCBEZXNpZ24gdXNlcyB0aGUgcmlwcGxlIGZvciBhY3RpdmF0ZWRcbiAqIHNvIG9ubHkgc3R5bGUgdGhlIGlPUyBhY3RpdmF0ZWQgYmFja2dyb3VuZFxuICovXG4uaW9zIGlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwLCAjZDlkOWQ5KTtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZ1t0cmFjaz1pb25pY10gaW9uLWxhYmVsIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZ1t0cmFjaz1hbmd1bGFyXSBpb24tbGFiZWwge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2FjMjgyYjtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZ1t0cmFjaz1jb21tdW5pY2F0aW9uXSBpb24tbGFiZWwge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzhlOGQ5Mztcbn1cblxuaW9uLWl0ZW0tc2xpZGluZ1t0cmFjaz10b29saW5nXSBpb24tbGFiZWwge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2ZlNGM1Mjtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZ1t0cmFjaz1zZXJ2aWNlc10gaW9uLWxhYmVsIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNmZDhiMmQ7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9ZGVzaWduXSBpb24tbGFiZWwge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2ZlZDAzNTtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZ1t0cmFjaz13b3Jrc2hvcF0gaW9uLWxhYmVsIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM2OWJiN2I7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9Zm9vZF0gaW9uLWxhYmVsIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMzYmM3YzQ7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9ZG9jdW1lbnRhdGlvbl0gaW9uLWxhYmVsIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNiMTZiZTM7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9bmF2aWdhdGlvbl0gaW9uLWxhYmVsIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM2NjAwY2M7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 27440:
/*!**********************************************!*\
  !*** ./src/app/providers/conference-data.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConferenceData: () => (/* binding */ ConferenceData)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 84980);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 79736);
/* harmony import */ var _user_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-data */ 8176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 54860);







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


/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_schedule_schedule_module_ts.js.map