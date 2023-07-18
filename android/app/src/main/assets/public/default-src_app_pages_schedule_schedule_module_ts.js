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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1zcmNfYXBwX3BhZ2VzX3NjaGVkdWxlX3NjaGVkdWxlX21vZHVsZV90cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDb0U7QUFFSDs7Ozs7Ozs7O0lDQTNESSw0REFBQSxvQkFBNEM7SUFBcEJBLHdEQUFBLG1CQUFBRyxxRUFBQTtNQUFBSCwyREFBQSxDQUFBSyxHQUFBO01BQUEsTUFBQUMsTUFBQSxHQUFBTiwyREFBQTtNQUFBLE9BQVNBLHlEQUFBLENBQUFNLE1BQUEsQ0FBQUcsT0FBQSxFQUFTO0lBQUEsRUFBQztJQUFDVCxvREFBQSxhQUFNO0lBQUFBLDBEQUFBLEVBQWE7Ozs7OztJQUMvREEsNERBQUEsb0JBQW9EO0lBQTNCQSx3REFBQSxtQkFBQVkscUVBQUE7TUFBQVosMkRBQUEsQ0FBQWEsR0FBQTtNQUFBLE1BQUFDLE1BQUEsR0FBQWQsMkRBQUE7TUFBQSxPQUFTQSx5REFBQSxDQUFBYyxNQUFBLENBQUFDLFNBQUEsQ0FBVSxLQUFLLENBQUM7SUFBQSxFQUFDO0lBQUNmLG9EQUFBLFlBQUs7SUFBQUEsMERBQUEsRUFBYTs7Ozs7SUFrQnRFQSx1REFBQSxtQkFBaUY7Ozs7SUFBOUNBLHdEQUFBLFNBQUFrQixRQUFBLENBQUFDLElBQUEsQ0FBbUI7Ozs7OztJQUR4RG5CLDREQUFBLGVBQTZFOztJQUMzRUEsd0RBQUEsSUFBQXFCLGtEQUFBLHNCQUFpRjtJQUdqRnJCLDREQUFBLHVCQUEyRTtJQUE3REEsd0RBQUEsMkJBQUFzQiw4RUFBQUMsTUFBQTtNQUFBLE1BQUFDLFdBQUEsR0FBQXhCLDJEQUFBLENBQUF5QixJQUFBO01BQUEsTUFBQVAsUUFBQSxHQUFBTSxXQUFBLENBQUFFLFNBQUE7TUFBQSxPQUFhMUIseURBQUEsQ0FBQWtCLFFBQUEsQ0FBQVMsU0FBQSxHQUFBSixNQUFBLENBQXVCO0lBQUEsRUFBUDtJQUN6Q3ZCLG9EQUFBLEdBQ0Y7SUFBQUEsMERBQUEsRUFBZTs7Ozs7SUFOc0JBLHlEQUFBLFVBQUFBLHlEQUFBLE9BQUFrQixRQUFBLENBQUFZLElBQUEsRUFBcUM7SUFDL0Q5Qix1REFBQSxHQUFTO0lBQVRBLHdEQUFBLFNBQUFnQyxNQUFBLENBQUFDLEdBQUEsQ0FBUztJQUdOakMsdURBQUEsR0FBNkI7SUFBN0JBLHdEQUFBLFlBQUFrQixRQUFBLENBQUFTLFNBQUEsQ0FBNkI7SUFBQzNCLHlEQUFBLGVBQUFrQixRQUFBLENBQUFZLElBQUEsQ0FBOEI7SUFDeEU5Qix1REFBQSxHQUNGO0lBREVBLGdFQUFBLE1BQUFrQixRQUFBLENBQUFZLElBQUEsTUFDRjs7Ozs7O0lBTU45Qiw0REFBQSxvQkFBMkM7SUFHekJBLHdEQUFBLG1CQUFBbUMsc0VBQUE7TUFBQW5DLDJEQUFBLENBQUFvQyxJQUFBO01BQUEsTUFBQUMsT0FBQSxHQUFBckMsMkRBQUE7TUFBQSxPQUFTQSx5REFBQSxDQUFBcUMsT0FBQSxDQUFBdEIsU0FBQSxDQUFVLEtBQUssQ0FBQztJQUFBLEVBQUM7SUFBQ2Ysb0RBQUEsbUJBQVk7SUFBQUEsMERBQUEsRUFBYTtJQUVsRUEsNERBQUEscUJBQXdCO0lBQ1ZBLHdEQUFBLG1CQUFBc0Msc0VBQUE7TUFBQXRDLDJEQUFBLENBQUFvQyxJQUFBO01BQUEsTUFBQUcsT0FBQSxHQUFBdkMsMkRBQUE7TUFBQSxPQUFTQSx5REFBQSxDQUFBdUMsT0FBQSxDQUFBeEIsU0FBQSxDQUFVLElBQUksQ0FBQztJQUFBLEVBQUM7SUFBQ2Ysb0RBQUEsaUJBQVU7SUFBQUEsMERBQUEsRUFBYTs7O0FEakNuRSxNQUthd0Msa0JBQWtCO0VBSzdCQyxZQUNTQyxRQUF3QixFQUN2QkMsTUFBYyxFQUNmQyxTQUEwQixFQUMxQkMsU0FBb0I7SUFIcEIsS0FBQUgsUUFBUSxHQUFSQSxRQUFRO0lBQ1AsS0FBQUMsTUFBTSxHQUFOQSxNQUFNO0lBQ1AsS0FBQUMsU0FBUyxHQUFUQSxTQUFTO0lBQ1QsS0FBQUMsU0FBUyxHQUFUQSxTQUFTO0lBTmxCLEtBQUFDLE1BQU0sR0FBdUQsRUFBRTtFQU8zRDtFQUVKQyxnQkFBZ0JBLENBQUE7SUFDZCxJQUFJLENBQUNkLEdBQUcsR0FBRyxJQUFJLENBQUNVLE1BQU0sQ0FBQ0ssR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUs7SUFFNUM7SUFDQSxNQUFNQyxrQkFBa0IsR0FBRyxJQUFJLENBQUNKLFNBQVMsQ0FBQ0csR0FBRyxDQUFDLGdCQUFnQixDQUFDO0lBRS9ELElBQUksQ0FBQ04sUUFBUSxDQUFDUSxTQUFTLEVBQUUsQ0FBQ0MsU0FBUyxDQUFFTCxNQUFhLElBQUk7TUFDcERBLE1BQU0sQ0FBQ00sT0FBTyxDQUFDQyxLQUFLLElBQUc7UUFDckIsSUFBSSxDQUFDUCxNQUFNLENBQUNRLElBQUksQ0FBQztVQUNmeEIsSUFBSSxFQUFFdUIsS0FBSyxDQUFDdkIsSUFBSTtVQUNoQlgsSUFBSSxFQUFFa0MsS0FBSyxDQUFDbEMsSUFBSTtVQUNoQlEsU0FBUyxFQUFHc0Isa0JBQWtCLENBQUNNLE9BQU8sQ0FBQ0YsS0FBSyxDQUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUN6RCxDQUFDO01BQ0osQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0VBQ0o7RUFFQWYsU0FBU0EsQ0FBQ3lDLEtBQWM7SUFDdEI7SUFDQSxJQUFJLENBQUNWLE1BQU0sQ0FBQ00sT0FBTyxDQUFDQyxLQUFLLElBQUc7TUFDMUJBLEtBQUssQ0FBQzFCLFNBQVMsR0FBRzZCLEtBQUs7SUFDekIsQ0FBQyxDQUFDO0VBQ0o7RUFFQUMsWUFBWUEsQ0FBQTtJQUNWO0lBQ0EsTUFBTVIsa0JBQWtCLEdBQUcsSUFBSSxDQUFDSCxNQUFNLENBQUNZLE1BQU0sQ0FBQ0MsQ0FBQyxJQUFJLENBQUNBLENBQUMsQ0FBQ2hDLFNBQVMsQ0FBQyxDQUFDaUMsR0FBRyxDQUFDRCxDQUFDLElBQUlBLENBQUMsQ0FBQzdCLElBQUksQ0FBQztJQUNqRixJQUFJLENBQUNyQixPQUFPLENBQUN3QyxrQkFBa0IsQ0FBQztFQUNsQztFQUVBeEMsT0FBT0EsQ0FBQ29ELElBQVU7SUFDaEI7SUFDQTtJQUNBLElBQUksQ0FBQ2pCLFNBQVMsQ0FBQ25DLE9BQU8sQ0FBQ29ELElBQUksQ0FBQztFQUM5Qjs7QUE5Q1dyQixrQkFBa0I7bUJBQWxCQSxrQkFBa0IsRUFBQXhDLCtEQUFBLENBQUErRCxzRUFBQSxHQUFBL0QsK0RBQUEsQ0FBQWdFLGtEQUFBLEdBQUFoRSwrREFBQSxDQUFBZ0UsMkRBQUEsR0FBQWhFLCtEQUFBLENBQUFnRSxxREFBQTtBQUFBO0FBQWxCeEIsa0JBQWtCO1FBQWxCQSxrQkFBa0I7RUFBQXlCLFNBQUE7RUFBQUMsS0FBQTtFQUFBQyxJQUFBO0VBQUFDLE1BQUE7RUFBQUMsUUFBQSxXQUFBQyw0QkFBQUMsRUFBQSxFQUFBQyxHQUFBO0lBQUEsSUFBQUQsRUFBQTtNQ1gvQnZFLDREQUFBLG9CQUErQjtNQUd6QkEsd0RBQUEsSUFBQXlFLHdDQUFBLHdCQUErRDtNQUMvRHpFLHdEQUFBLElBQUEwRSx3Q0FBQSx3QkFBc0U7TUFDeEUxRSwwREFBQSxFQUFjO01BRWRBLDREQUFBLGdCQUFXO01BQ1RBLG9EQUFBLHdCQUNGO01BQUFBLDBEQUFBLEVBQVk7TUFFWkEsNERBQUEscUJBQXdCO01BQ1ZBLHdEQUFBLG1CQUFBMkUsd0RBQUE7UUFBQSxPQUFTSCxHQUFBLENBQUFmLFlBQUEsRUFBYztNQUFBLEVBQUM7TUFBUXpELG9EQUFBLFdBQUk7TUFBQUEsMERBQUEsRUFBYTtNQUtuRUEsNERBQUEsbUJBQWE7TUFFUUEsb0RBQUEsY0FBTTtNQUFBQSwwREFBQSxFQUFrQjtNQUV6Q0Esd0RBQUEsS0FBQTRFLHVDQUFBLHNCQU9XO01BQ2I1RSwwREFBQSxFQUFXO01BSWJBLHdEQUFBLEtBQUE2RSx5Q0FBQSx3QkFTYTs7O01BdkNNN0UsdURBQUEsR0FBUztNQUFUQSx3REFBQSxTQUFBd0UsR0FBQSxDQUFBdkMsR0FBQSxDQUFTO01BQ1RqQyx1REFBQSxHQUFVO01BQVZBLHdEQUFBLFVBQUF3RSxHQUFBLENBQUF2QyxHQUFBLENBQVU7TUFjakJqQyx1REFBQSxHQUFnQztNQUFoQ0Esd0RBQUEsVUFBQXdFLEdBQUEsQ0FBQXZDLEdBQUEsb0JBQWdDO01BR1pqQyx1REFBQSxHQUFTO01BQVRBLHdEQUFBLFlBQUF3RSxHQUFBLENBQUExQixNQUFBLENBQVM7TUFZVDlDLHVEQUFBLEdBQVM7TUFBVEEsd0RBQUEsU0FBQXdFLEdBQUEsQ0FBQXZDLEdBQUEsQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ2M7QUFFYjs7O0FBRTFDLE1BQU0rQyxNQUFNLEdBQVcsQ0FDckI7RUFDRUMsSUFBSSxFQUFFLEVBQUU7RUFDUkMsU0FBUyxFQUFFSCxtREFBWUE7Q0FDeEIsQ0FDRjtBQUVELE1BSWFJLHlCQUF5QjtBQUF6QkEseUJBQXlCO21CQUF6QkEseUJBQXlCO0FBQUE7QUFBekJBLHlCQUF5QjtRQUF6QkE7QUFBeUI7QUFBekJBLHlCQUF5QjtZQUgxQkwseURBQVksQ0FBQ00sUUFBUSxDQUFDSixNQUFNLENBQUMsRUFDN0JGLHlEQUFZO0FBQUE7QUFFYzs7c0hBQXpCSyx5QkFBeUI7SUFBQUUsT0FBQSxHQUFBdEIseURBQUE7SUFBQXVCLE9BQUEsR0FGMUJSLHlEQUFZO0VBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYnVCO0FBQ0Y7QUFDQTtBQUVIO0FBQzhCO0FBQ0Y7O0FBRXRFLE1BWWFZLGNBQWM7QUFBZEEsY0FBYzttQkFBZEEsY0FBYztBQUFBO0FBQWRBLGNBQWM7UUFBZEE7QUFBYztBQUFkQSxjQUFjO1lBVm5CSCx5REFBWSxFQUNaQyx1REFBVyxFQUNYQyx1REFBVyxFQUNYTiwrRUFBeUI7QUFBQTtBQU9OOztzSEFBZE8sY0FBYztJQUFBQyxZQUFBLEdBSm5CWixtREFBWSxFQUNadkMsZ0ZBQWtCO0lBQUE2QyxPQUFBLEdBUGxCRSx5REFBWSxFQUNaQyx1REFBVyxFQUNYQyx1REFBVyxFQUNYTiwrRUFBeUI7RUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiUTtBQUMrRjtBQUVoRTtBQUNQO0FBQ1o7Ozs7Ozs7Ozs7O0lDSmpEbkYsNERBQUEsc0JBQWlEO0lBQy9DQSx1REFBQSxzQkFBbUM7SUFDckNBLDBEQUFBLEVBQWM7Ozs7OztJQUNkQSw0REFBQSxzQkFBOEU7SUFBckRBLHdEQUFBLDJCQUFBbUcseUVBQUE1RSxNQUFBO01BQUF2QiwyREFBQSxDQUFBb0csSUFBQTtNQUFBLE1BQUFDLE9BQUEsR0FBQXJHLDJEQUFBO01BQUEsT0FBQUEseURBQUEsQ0FBQXFHLE9BQUEsQ0FBQUMsT0FBQSxHQUFBL0UsTUFBQTtJQUFBLEVBQXFCLHVCQUFBZ0YscUVBQUE7TUFBQXZHLDJEQUFBLENBQUFvRyxJQUFBO01BQUEsTUFBQUksT0FBQSxHQUFBeEcsMkRBQUE7TUFBQSxPQUFjQSx5REFBQSxDQUFBd0csT0FBQSxDQUFBQyxjQUFBLEVBQWdCO0lBQUEsRUFBOUI7SUFDNUN6Ryw0REFBQSw2QkFBZ0M7SUFDOUJBLG9EQUFBLFlBQ0Y7SUFBQUEsMERBQUEsRUFBcUI7SUFDckJBLDREQUFBLDZCQUFzQztJQUNwQ0Esb0RBQUEsa0JBQ0Y7SUFBQUEsMERBQUEsRUFBcUI7Ozs7SUFORUEsd0RBQUEsWUFBQTBHLE1BQUEsQ0FBQUosT0FBQSxDQUFxQjs7Ozs7SUFROUN0Ryw0REFBQSxnQkFBMEM7SUFBQUEsb0RBQUEsZUFBUTtJQUFBQSwwREFBQSxFQUFZOzs7Ozs7SUFDOURBLDREQUFBLHdCQUE4SztJQUEvR0Esd0RBQUEsMkJBQUEyRyw2RUFBQXBGLE1BQUE7TUFBQXZCLDJEQUFBLENBQUFvQyxJQUFBO01BQUEsTUFBQUMsT0FBQSxHQUFBckMsMkRBQUE7TUFBQSxPQUFBQSx5REFBQSxDQUFBcUMsT0FBQSxDQUFBdUUsU0FBQSxHQUFBckYsTUFBQTtJQUFBLEVBQXVCLHNCQUFBc0Ysd0VBQUE7TUFBQTdHLDJEQUFBLENBQUFvQyxJQUFBO01BQUEsTUFBQUcsT0FBQSxHQUFBdkMsMkRBQUE7TUFBQSxPQUFhQSx5REFBQSxDQUFBdUMsT0FBQSxDQUFBa0UsY0FBQSxFQUFnQjtJQUFBLEVBQTdCLHVCQUFBSyx5RUFBQTtNQUFBOUcsMkRBQUEsQ0FBQW9DLElBQUE7TUFBQSxNQUFBMkUsT0FBQSxHQUFBL0csMkRBQUE7TUFBQSxPQUFBQSx5REFBQSxDQUFBK0csT0FBQSxDQUFBQyxhQUFBLEdBQTRELEtBQUs7SUFBQSxFQUFqRTtJQUF3RmhILDBEQUFBLEVBQWdCOzs7O0lBQS9IQSx3REFBQSxZQUFBaUgsTUFBQSxDQUFBTCxTQUFBLENBQXVCOzs7Ozs7SUFFcEY1Ryw0REFBQSxxQkFBMEU7SUFBL0JBLHdEQUFBLG1CQUFBa0gsK0RBQUE7TUFBQWxILDJEQUFBLENBQUFtSCxJQUFBO01BQUEsTUFBQUMsT0FBQSxHQUFBcEgsMkRBQUE7TUFBQSxPQUFBQSx5REFBQSxDQUFBb0gsT0FBQSxDQUFBSixhQUFBLEdBQXlCLElBQUk7SUFBQSxFQUFDO0lBQ3ZFaEgsdURBQUEsbUJBQW9EO0lBQ3REQSwwREFBQSxFQUFhOzs7OztJQUVYQSw0REFBQSxXQUFrQjtJQUFBQSxvREFBQSxhQUFNO0lBQUFBLDBEQUFBLEVBQU87Ozs7O0lBQy9CQSw0REFBQSxXQUFtQjtJQUNqQkEsdURBQUEsbUJBQXFEO0lBQ3ZEQSwwREFBQSxFQUFPOzs7Ozs7SUFKVEEsNERBQUEscUJBQTZEO0lBQTFCQSx3REFBQSxtQkFBQXFILCtEQUFBO01BQUFySCwyREFBQSxDQUFBc0gsSUFBQTtNQUFBLE1BQUFDLE9BQUEsR0FBQXZILDJEQUFBO01BQUEsT0FBU0EseURBQUEsQ0FBQXVILE9BQUEsQ0FBQUMsYUFBQSxFQUFlO0lBQUEsRUFBQztJQUMxRHhILHdEQUFBLElBQUF5SCx5Q0FBQSxrQkFBK0I7SUFDL0J6SCx3REFBQSxJQUFBMEgseUNBQUEsa0JBRU87SUFDVDFILDBEQUFBLEVBQWE7Ozs7SUFKSkEsdURBQUEsR0FBUztJQUFUQSx3REFBQSxTQUFBMkgsTUFBQSxDQUFBMUYsR0FBQSxDQUFTO0lBQ1RqQyx1REFBQSxHQUFVO0lBQVZBLHdEQUFBLFVBQUEySCxNQUFBLENBQUExRixHQUFBLENBQVU7Ozs7OztJQU12QmpDLDREQUFBLGtCQUEwQjtJQUNYQSx3REFBQSwyQkFBQTRILHlFQUFBckcsTUFBQTtNQUFBdkIsMkRBQUEsQ0FBQTZILElBQUE7TUFBQSxNQUFBQyxPQUFBLEdBQUE5SCwyREFBQTtNQUFBLE9BQUFBLHlEQUFBLENBQUE4SCxPQUFBLENBQUF4QixPQUFBLEdBQUEvRSxNQUFBO0lBQUEsRUFBcUIsdUJBQUF3RyxxRUFBQTtNQUFBL0gsMkRBQUEsQ0FBQTZILElBQUE7TUFBQSxNQUFBRyxPQUFBLEdBQUFoSSwyREFBQTtNQUFBLE9BQWNBLHlEQUFBLENBQUFnSSxPQUFBLENBQUF2QixjQUFBLEVBQWdCO0lBQUEsRUFBOUI7SUFDaEN6Ryw0REFBQSw2QkFBZ0M7SUFDOUJBLG9EQUFBLFlBQ0Y7SUFBQUEsMERBQUEsRUFBcUI7SUFDckJBLDREQUFBLDZCQUFzQztJQUNwQ0Esb0RBQUEsa0JBQ0Y7SUFBQUEsMERBQUEsRUFBcUI7Ozs7SUFOVkEsdURBQUEsR0FBcUI7SUFBckJBLHdEQUFBLFlBQUFjLE1BQUEsQ0FBQXdGLE9BQUEsQ0FBcUI7Ozs7OztJQXdDNUJ0Ryw0REFBQSwwQkFBd0c7SUFBdEVBLHdEQUFBLG1CQUFBaUksK0dBQUE7TUFBQWpJLDJEQUFBLENBQUFrSSxJQUFBO01BQUEsTUFBQUMsV0FBQSxHQUFBbkksMkRBQUEsR0FBQTBCLFNBQUE7TUFBQSxNQUFBMEcsSUFBQSxHQUFBcEkseURBQUE7TUFBQSxNQUFBc0ksT0FBQSxHQUFBdEksMkRBQUE7TUFBQSxPQUFTQSx5REFBQSxDQUFBc0ksT0FBQSxDQUFBQyxXQUFBLENBQUFILElBQUEsRUFBQUQsV0FBQSxDQUFpQztJQUFBLEVBQUM7SUFDM0VuSSxvREFBQSxpQkFDRjtJQUFBQSwwREFBQSxFQUFrQjs7Ozs7O0lBQ2xCQSw0REFBQSwwQkFDa0M7SUFERkEsd0RBQUEsbUJBQUF3SSwrR0FBQTtNQUFBeEksMkRBQUEsQ0FBQXlJLElBQUE7TUFBQSxNQUFBTixXQUFBLEdBQUFuSSwyREFBQSxHQUFBMEIsU0FBQTtNQUFBLE1BQUEwRyxJQUFBLEdBQUFwSSx5REFBQTtNQUFBLE1BQUEwSSxPQUFBLEdBQUExSSwyREFBQTtNQUFBLE9BQVNBLHlEQUFBLENBQUEwSSxPQUFBLENBQUFDLGNBQUEsQ0FBQVAsSUFBQSxFQUFBRCxXQUFBLEVBQXFDLGlCQUFpQixDQUFDO0lBQUEsRUFBQztJQUUvRm5JLG9EQUFBLGVBQ0Y7SUFBQUEsMERBQUEsRUFBa0I7Ozs7O0lBakJ0QkEsNERBQUEsK0JBQzBCOztJQUN4QkEsNERBQUEsbUJBQWlFO0lBRXpEQSxvREFBQSxHQUFnQjtJQUFBQSwwREFBQSxFQUFLO0lBQ3pCQSw0REFBQSxRQUFHO0lBQ0RBLG9EQUFBLEdBQ0Y7SUFBQUEsMERBQUEsRUFBSTtJQUdSQSw0REFBQSx1QkFBa0I7SUFDaEJBLHdEQUFBLEtBQUE0SSw2RUFBQSw4QkFFa0I7SUFDbEI1SSx3REFBQSxLQUFBNkksNkVBQUEsOEJBR2tCO0lBQ3BCN0ksMERBQUEsRUFBbUI7Ozs7O0lBakJuQkEsd0RBQUEsV0FBQW1JLFdBQUEsQ0FBQVcsSUFBQSxDQUF1QjtJQUQ2QzlJLHlEQUFBLFVBQUFBLHlEQUFBLE9BQUFtSSxXQUFBLENBQUFyRixNQUFBLEtBQTRDO0lBRXRHOUMsdURBQUEsR0FBc0Q7SUFBdERBLG9FQUFBLDhDQUFBbUksV0FBQSxDQUFBYSxFQUFBLEtBQXNEO0lBRXhEaEosdURBQUEsR0FBZ0I7SUFBaEJBLCtEQUFBLENBQUFtSSxXQUFBLENBQUFyRyxJQUFBLENBQWdCO0lBRWxCOUIsdURBQUEsR0FDRjtJQURFQSxnRUFBQSxNQUFBbUksV0FBQSxDQUFBZ0IsU0FBQSxjQUFBaEIsV0FBQSxDQUFBaUIsT0FBQSxRQUFBakIsV0FBQSxDQUFBa0IsUUFBQSxNQUNGO0lBSTZFckosdURBQUEsR0FBdUI7SUFBdkJBLHdEQUFBLFNBQUFzSixPQUFBLENBQUFoRCxPQUFBLFdBQXVCO0lBSW5HdEcsdURBQUEsR0FBNkI7SUFBN0JBLHdEQUFBLFNBQUFzSixPQUFBLENBQUFoRCxPQUFBLGlCQUE2Qjs7Ozs7SUF0QnRDdEcsNERBQUEseUJBQW1FO0lBRzdEQSxvREFBQSxHQUNGO0lBQUFBLDBEQUFBLEVBQVk7SUFHZEEsd0RBQUEsSUFBQXVKLDBEQUFBLGlDQW1CbUI7SUFDckJ2SiwwREFBQSxFQUFpQjs7OztJQTNCNEJBLHdEQUFBLFdBQUF3SixTQUFBLENBQUFWLElBQUEsQ0FBcUI7SUFHNUQ5SSx1REFBQSxHQUNGO0lBREVBLGdFQUFBLE1BQUF3SixTQUFBLENBQUFDLElBQUEsTUFDRjtJQUdvQ3pKLHVEQUFBLEdBQWlCO0lBQWpCQSx3REFBQSxZQUFBd0osU0FBQSxDQUFBRSxRQUFBLENBQWlCOzs7QURqRDdELE1BS2EzRSxZQUFZO0VBY3ZCdEMsWUFDU2tILFNBQTBCLEVBQzFCakgsUUFBd0IsRUFDeEJrSCxXQUE4QixFQUM5QmhILFNBQTBCLEVBQzFCaUgsTUFBYyxFQUNkQyxZQUE2QixFQUM3QkMsU0FBMEIsRUFDMUJDLElBQWMsRUFDZHJILE1BQWM7SUFSZCxLQUFBZ0gsU0FBUyxHQUFUQSxTQUFTO0lBQ1QsS0FBQWpILFFBQVEsR0FBUkEsUUFBUTtJQUNSLEtBQUFrSCxXQUFXLEdBQVhBLFdBQVc7SUFDWCxLQUFBaEgsU0FBUyxHQUFUQSxTQUFTO0lBQ1QsS0FBQWlILE1BQU0sR0FBTkEsTUFBTTtJQUNOLEtBQUFDLFlBQVksR0FBWkEsWUFBWTtJQUNaLEtBQUFDLFNBQVMsR0FBVEEsU0FBUztJQUNULEtBQUFDLElBQUksR0FBSkEsSUFBSTtJQUNKLEtBQUFySCxNQUFNLEdBQU5BLE1BQU07SUFsQmYsS0FBQXNILFFBQVEsR0FBRyxDQUFDO0lBQ1osS0FBQXJELFNBQVMsR0FBRyxFQUFFO0lBQ2QsS0FBQU4sT0FBTyxHQUFHLEtBQUs7SUFDZixLQUFBNEQsYUFBYSxHQUFRLEVBQUU7SUFDdkIsS0FBQUMsYUFBYSxHQUFRLEVBQUU7SUFDdkIsS0FBQUMsTUFBTSxHQUFRLEVBQUU7RUFjWjtFQUVKQyxRQUFRQSxDQUFBO0lBQ04sSUFBSSxDQUFDNUQsY0FBYyxFQUFFO0lBRXJCLElBQUksQ0FBQ3hFLEdBQUcsR0FBRyxJQUFJLENBQUNVLE1BQU0sQ0FBQ0ssR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUs7RUFDOUM7RUFFQXlELGNBQWNBLENBQUE7SUFDWjtJQUNBLElBQUksSUFBSSxDQUFDNkQsWUFBWSxFQUFFO01BQ3JCLElBQUksQ0FBQ0EsWUFBWSxDQUFDQyxpQkFBaUIsRUFBRTs7SUFHdkMsSUFBSSxDQUFDN0gsUUFBUSxDQUFDOEgsV0FBVyxDQUFDLElBQUksQ0FBQ1AsUUFBUSxFQUFFLElBQUksQ0FBQ3JELFNBQVMsRUFBRSxJQUFJLENBQUNzRCxhQUFhLEVBQUUsSUFBSSxDQUFDNUQsT0FBTyxDQUFDLENBQUNuRCxTQUFTLENBQUVVLElBQVMsSUFBSTtNQUNqSCxJQUFJLENBQUNzRyxhQUFhLEdBQUd0RyxJQUFJLENBQUNzRyxhQUFhO01BQ3ZDLElBQUksQ0FBQ0MsTUFBTSxHQUFHdkcsSUFBSSxDQUFDdUcsTUFBTTtJQUMzQixDQUFDLENBQUM7RUFDSjtFQUVNNUMsYUFBYUEsQ0FBQTtJQUFBLElBQUFpRCxLQUFBO0lBQUEsT0FBQUMsOEpBQUE7TUFDakIsTUFBTUMsS0FBSyxTQUFTRixLQUFJLENBQUM3SCxTQUFTLENBQUNnSSxNQUFNLENBQUM7UUFDeEMxRixTQUFTLEVBQUUxQyxnRkFBa0I7UUFDN0JxSSxpQkFBaUIsRUFBRUosS0FBSSxDQUFDWCxZQUFZLENBQUNnQixRQUFRO1FBQzdDQyxjQUFjLEVBQUU7VUFBRUMsY0FBYyxFQUFFUCxLQUFJLENBQUNQO1FBQWE7T0FDckQsQ0FBQztNQUNGLE1BQU1TLEtBQUssQ0FBQ00sT0FBTyxFQUFFO01BRXJCLE1BQU07UUFBRXBIO01BQUksQ0FBRSxTQUFTOEcsS0FBSyxDQUFDTyxhQUFhLEVBQUU7TUFDNUMsSUFBSXJILElBQUksRUFBRTtRQUNSNEcsS0FBSSxDQUFDUCxhQUFhLEdBQUdyRyxJQUFJO1FBQ3pCNEcsS0FBSSxDQUFDaEUsY0FBYyxFQUFFOztJQUN0QjtFQUNIO0VBRU04QixXQUFXQSxDQUFDNEMsV0FBc0MsRUFBRUMsV0FBZ0I7SUFBQSxJQUFBQyxNQUFBO0lBQUEsT0FBQVgsOEpBQUE7TUFDeEUsSUFBSVcsTUFBSSxDQUFDckIsSUFBSSxDQUFDc0IsV0FBVyxDQUFDRixXQUFXLENBQUN0SixJQUFJLENBQUMsRUFBRTtRQUMzQztRQUNBdUosTUFBSSxDQUFDMUMsY0FBYyxDQUFDd0MsV0FBVyxFQUFFQyxXQUFXLEVBQUUsd0JBQXdCLENBQUM7T0FDeEUsTUFBTTtRQUNMO1FBQ0FDLE1BQUksQ0FBQ3JCLElBQUksQ0FBQ3pCLFdBQVcsQ0FBQzZDLFdBQVcsQ0FBQ3RKLElBQUksQ0FBQztRQUV2QztRQUNBcUosV0FBVyxDQUFDSSxLQUFLLEVBQUU7UUFFbkI7UUFDQSxNQUFNQyxLQUFLLFNBQVNILE1BQUksQ0FBQ3RCLFNBQVMsQ0FBQ2EsTUFBTSxDQUFDO1VBQ3hDYSxNQUFNLEVBQUUsR0FBR0wsV0FBVyxDQUFDdEosSUFBSSx3Q0FBd0M7VUFDbkU0SixRQUFRLEVBQUUsSUFBSTtVQUNkQyxPQUFPLEVBQUUsQ0FBQztZQUNSQyxJQUFJLEVBQUUsT0FBTztZQUNiQyxJQUFJLEVBQUU7V0FDUDtTQUNGLENBQUM7UUFFRjtRQUNBLE1BQU1MLEtBQUssQ0FBQ1AsT0FBTyxFQUFFOztJQUN0QjtFQUVIO0VBRU10QyxjQUFjQSxDQUFDd0MsV0FBc0MsRUFBRUMsV0FBZ0IsRUFBRVUsS0FBYTtJQUFBLElBQUFDLE1BQUE7SUFBQSxPQUFBckIsOEpBQUE7TUFDMUYsTUFBTXNCLEtBQUssU0FBU0QsTUFBSSxDQUFDcEMsU0FBUyxDQUFDaUIsTUFBTSxDQUFDO1FBQ3hDYSxNQUFNLEVBQUVLLEtBQUs7UUFDYkcsT0FBTyxFQUFFLDREQUE0RDtRQUNyRU4sT0FBTyxFQUFFLENBQ1A7VUFDRUMsSUFBSSxFQUFFLFFBQVE7VUFDZE0sT0FBTyxFQUFFQSxDQUFBLEtBQUs7WUFDWjtZQUNBO1lBQ0FmLFdBQVcsQ0FBQ0ksS0FBSyxFQUFFO1VBQ3JCO1NBQ0QsRUFDRDtVQUNFSyxJQUFJLEVBQUUsUUFBUTtVQUNkTSxPQUFPLEVBQUVBLENBQUEsS0FBSztZQUNaO1lBQ0FILE1BQUksQ0FBQy9CLElBQUksQ0FBQ3JCLGNBQWMsQ0FBQ3lDLFdBQVcsQ0FBQ3RKLElBQUksQ0FBQztZQUMxQ2lLLE1BQUksQ0FBQ3RGLGNBQWMsRUFBRTtZQUVyQjtZQUNBMEUsV0FBVyxDQUFDSSxLQUFLLEVBQUU7VUFDckI7U0FDRDtPQUVKLENBQUM7TUFDRjtNQUNBLE1BQU1TLEtBQUssQ0FBQ2YsT0FBTyxFQUFFO0lBQUM7RUFDeEI7RUFFTWtCLFVBQVVBLENBQUNDLE9BQWUsRUFBRUMsR0FBc0I7SUFBQSxJQUFBQyxNQUFBO0lBQUEsT0FBQTVCLDhKQUFBO01BQ3RELE1BQU02QixPQUFPLFNBQVNELE1BQUksQ0FBQzFDLFdBQVcsQ0FBQ2dCLE1BQU0sQ0FBQztRQUM1Q3FCLE9BQU8sRUFBRSxjQUFjRyxPQUFPLEVBQUU7UUFDaENWLFFBQVEsRUFBR2MsSUFBSSxDQUFDQyxNQUFNLEVBQUUsR0FBRyxJQUFJLEdBQUk7T0FDcEMsQ0FBQztNQUNGLE1BQU1GLE9BQU8sQ0FBQ3RCLE9BQU8sRUFBRTtNQUN2QixNQUFNc0IsT0FBTyxDQUFDckIsYUFBYSxFQUFFO01BQzdCbUIsR0FBRyxDQUFDZCxLQUFLLEVBQUU7SUFBQztFQUNkOztBQTVIV3hHLFlBQVk7bUJBQVpBLFlBQVksRUFBQS9FLCtEQUFBLENBQUErRCwyREFBQSxHQUFBL0QsK0RBQUEsQ0FBQWdFLHNFQUFBLEdBQUFoRSwrREFBQSxDQUFBK0QsNkRBQUEsR0FBQS9ELCtEQUFBLENBQUErRCwyREFBQSxHQUFBL0QsK0RBQUEsQ0FBQTBNLG1EQUFBLEdBQUExTSwrREFBQSxDQUFBK0QsMkRBQUEsR0FBQS9ELCtEQUFBLENBQUErRCwyREFBQSxHQUFBL0QsK0RBQUEsQ0FBQTJNLDBEQUFBLEdBQUEzTSwrREFBQSxDQUFBK0Qsa0RBQUE7QUFBQTtBQUFaZ0IsWUFBWTtRQUFaQSxZQUFZO0VBQUFkLFNBQUE7RUFBQTJJLFNBQUEsV0FBQUMsbUJBQUF0SSxFQUFBLEVBQUFDLEdBQUE7SUFBQSxJQUFBRCxFQUFBOzs7Ozs7Ozs7Ozs7OztNQ2J6QnZFLDREQUFBLG9CQUErQjtNQUUzQkEsd0RBQUEsSUFBQThNLG1DQUFBLHlCQUVjO01BQ2Q5TSx3REFBQSxJQUFBK00sbUNBQUEseUJBT2M7TUFDZC9NLHdEQUFBLElBQUFnTixpQ0FBQSx1QkFBOEQ7TUFDOURoTix3REFBQSxJQUFBaU4scUNBQUEsMkJBQThMO01BQzlMak4sNERBQUEscUJBQXdCO01BQ3RCQSx3REFBQSxJQUFBa04sa0NBQUEsd0JBRWE7TUFDYmxOLHdEQUFBLElBQUFtTixrQ0FBQSx3QkFLYTtNQUNmbk4sMERBQUEsRUFBYztNQUVoQkEsd0RBQUEsSUFBQW9OLG1DQUFBLHlCQVNjO01BQ2hCcE4sMERBQUEsRUFBYTtNQUViQSw0REFBQSxzQkFBK0I7TUFHREEsb0RBQUEsZ0JBQVE7TUFBQUEsMERBQUEsRUFBWTtNQUU5Q0EsNERBQUEsbUJBQWE7TUFDSUEsd0RBQUEsMkJBQUFxTiw4REFBQTlMLE1BQUE7UUFBQSxPQUFBaUQsR0FBQSxDQUFBb0MsU0FBQSxHQUFBckYsTUFBQTtNQUFBLEVBQXVCLHNCQUFBK0wseURBQUE7UUFBQSxPQUFhOUksR0FBQSxDQUFBaUMsY0FBQSxFQUFnQjtNQUFBLEVBQTdCO01BQW9EekcsMERBQUEsRUFBZ0I7TUFJOUdBLDREQUFBLHdCQUF1RDtNQUNyREEsd0RBQUEsS0FBQXVOLHVDQUFBLDZCQTJCaUI7TUFDbkJ2TiwwREFBQSxFQUFXO01BRVhBLDREQUFBLDJCQUE4QztNQUM1Q0Esb0RBQUEsMkJBQ0Y7TUFBQUEsMERBQUEsRUFBa0I7TUFFbEJBLDREQUFBLHVCQUE4RDtNQUUxREEsdURBQUEsb0JBQXlDO01BQzNDQSwwREFBQSxFQUFpQjtNQUNqQkEsNERBQUEsd0JBQXlCO01BQ09BLHdEQUFBLG1CQUFBd04sdURBQUE7UUFBQXhOLDJEQUFBLENBQUF5TixJQUFBO1FBQUEsTUFBQUMsR0FBQSxHQUFBMU4seURBQUE7UUFBQSxPQUFTQSx5REFBQSxDQUFBd0UsR0FBQSxDQUFBMkgsVUFBQSxDQUFXLE9BQU8sRUFBQXVCLEdBQUEsQ0FBTTtNQUFBLEVBQUM7TUFDOUQxTix1REFBQSxvQkFBdUM7TUFDekNBLDBEQUFBLEVBQWlCO01BQ2pCQSw0REFBQSwwQkFBeUU7TUFBdkNBLHdEQUFBLG1CQUFBMk4sdURBQUE7UUFBQTNOLDJEQUFBLENBQUF5TixJQUFBO1FBQUEsTUFBQUMsR0FBQSxHQUFBMU4seURBQUE7UUFBQSxPQUFTQSx5REFBQSxDQUFBd0UsR0FBQSxDQUFBMkgsVUFBQSxDQUFXLFdBQVcsRUFBQXVCLEdBQUEsQ0FBTTtNQUFBLEVBQUM7TUFDdEUxTix1REFBQSxvQkFBMkM7TUFDN0NBLDBEQUFBLEVBQWlCO01BQ2pCQSw0REFBQSwwQkFBcUU7TUFBckNBLHdEQUFBLG1CQUFBNE4sdURBQUE7UUFBQTVOLDJEQUFBLENBQUF5TixJQUFBO1FBQUEsTUFBQUMsR0FBQSxHQUFBMU4seURBQUE7UUFBQSxPQUFTQSx5REFBQSxDQUFBd0UsR0FBQSxDQUFBMkgsVUFBQSxDQUFXLFNBQVMsRUFBQXVCLEdBQUEsQ0FBTTtNQUFBLEVBQUM7TUFDbEUxTix1REFBQSxvQkFBeUM7TUFDM0NBLDBEQUFBLEVBQWlCO01BQ2pCQSw0REFBQSwwQkFBdUU7TUFBdENBLHdEQUFBLG1CQUFBNk4sdURBQUE7UUFBQTdOLDJEQUFBLENBQUF5TixJQUFBO1FBQUEsTUFBQUMsR0FBQSxHQUFBMU4seURBQUE7UUFBQSxPQUFTQSx5REFBQSxDQUFBd0UsR0FBQSxDQUFBMkgsVUFBQSxDQUFXLFVBQVUsRUFBQXVCLEdBQUEsQ0FBTTtNQUFBLEVBQUM7TUFDcEUxTix1REFBQSxvQkFBMEM7TUFDNUNBLDBEQUFBLEVBQWlCOzs7TUFsR0xBLHVEQUFBLEdBQW9CO01BQXBCQSx3REFBQSxVQUFBd0UsR0FBQSxDQUFBd0MsYUFBQSxDQUFvQjtNQUdwQmhILHVEQUFBLEdBQVM7TUFBVEEsd0RBQUEsU0FBQXdFLEdBQUEsQ0FBQXZDLEdBQUEsQ0FBUztNQVFYakMsdURBQUEsR0FBNEI7TUFBNUJBLHdEQUFBLFVBQUF3RSxHQUFBLENBQUF2QyxHQUFBLEtBQUF1QyxHQUFBLENBQUF3QyxhQUFBLENBQTRCO01BQ3hCaEgsdURBQUEsR0FBbUI7TUFBbkJBLHdEQUFBLFNBQUF3RSxHQUFBLENBQUF3QyxhQUFBLENBQW1CO01BRXBCaEgsdURBQUEsR0FBNEI7TUFBNUJBLHdEQUFBLFVBQUF3RSxHQUFBLENBQUF2QyxHQUFBLEtBQUF1QyxHQUFBLENBQUF3QyxhQUFBLENBQTRCO01BRzVCaEgsdURBQUEsR0FBb0I7TUFBcEJBLHdEQUFBLFVBQUF3RSxHQUFBLENBQUF3QyxhQUFBLENBQW9CO01BUXZCaEgsdURBQUEsR0FBVTtNQUFWQSx3REFBQSxVQUFBd0UsR0FBQSxDQUFBdkMsR0FBQSxDQUFVO01Ba0JMakMsdURBQUEsR0FBdUI7TUFBdkJBLHdEQUFBLFlBQUF3RSxHQUFBLENBQUFvQyxTQUFBLENBQXVCO01BSWxCNUcsdURBQUEsR0FBOEI7TUFBOUJBLHdEQUFBLFdBQUF3RSxHQUFBLENBQUEyRixhQUFBLE9BQThCO01BQ2xCbkssdURBQUEsR0FBUztNQUFUQSx3REFBQSxZQUFBd0UsR0FBQSxDQUFBNEYsTUFBQSxDQUFTO01BOEI1QnBLLHVEQUFBLEdBQTRCO01BQTVCQSx3REFBQSxXQUFBd0UsR0FBQSxDQUFBMkYsYUFBQSxLQUE0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hGRztBQUV4QjtBQUNXO0FBRUU7Ozs7QUFFdkMsTUFHYXBLLGNBQWM7RUFHekIwQyxZQUFtQnVMLElBQWdCLEVBQVNoRSxJQUFjO0lBQXZDLEtBQUFnRSxJQUFJLEdBQUpBLElBQUk7SUFBcUIsS0FBQWhFLElBQUksR0FBSkEsSUFBSTtFQUFhO0VBRTdEaUUsSUFBSUEsQ0FBQTtJQUNGLElBQUksSUFBSSxDQUFDcEssSUFBSSxFQUFFO01BQ2IsT0FBT2tLLHdDQUFFLENBQUMsSUFBSSxDQUFDbEssSUFBSSxDQUFDO0tBQ3JCLE1BQU07TUFDTCxPQUFPLElBQUksQ0FBQ21LLElBQUksQ0FDYmhMLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUM1QmtMLElBQUksQ0FBQ3RLLG1EQUFHLENBQUMsSUFBSSxDQUFDdUssV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDOztFQUV4QztFQUVBQSxXQUFXQSxDQUFDdEssSUFBUztJQUNuQjtJQUNBO0lBQ0EsSUFBSSxDQUFDQSxJQUFJLEdBQUdBLElBQUk7SUFFaEI7SUFDQSxJQUFJLENBQUNBLElBQUksQ0FBQ3VLLFFBQVEsQ0FBQ2hMLE9BQU8sQ0FBRWlMLEdBQVEsSUFBSTtNQUN0QztNQUNBQSxHQUFHLENBQUNqRSxNQUFNLENBQUNoSCxPQUFPLENBQUVrTCxLQUFVLElBQUk7UUFDaEM7UUFDQUEsS0FBSyxDQUFDNUUsUUFBUSxDQUFDdEcsT0FBTyxDQUFFbUwsT0FBWSxJQUFJO1VBQ3RDQSxPQUFPLENBQUNDLFFBQVEsR0FBRyxFQUFFO1VBQ3JCLElBQUlELE9BQU8sQ0FBQ0UsWUFBWSxFQUFFO1lBQ3hCRixPQUFPLENBQUNFLFlBQVksQ0FBQ3JMLE9BQU8sQ0FBRXNMLFdBQWdCLElBQUk7Y0FDaEQsTUFBTUMsT0FBTyxHQUFHLElBQUksQ0FBQzlLLElBQUksQ0FBQzJLLFFBQVEsQ0FBQ0ksSUFBSSxDQUNwQ0MsQ0FBTSxJQUFLQSxDQUFDLENBQUMvTSxJQUFJLEtBQUs0TSxXQUFXLENBQ25DO2NBQ0QsSUFBSUMsT0FBTyxFQUFFO2dCQUNYSixPQUFPLENBQUNDLFFBQVEsQ0FBQ2xMLElBQUksQ0FBQ3FMLE9BQU8sQ0FBQztnQkFDOUJBLE9BQU8sQ0FBQ2pGLFFBQVEsR0FBR2lGLE9BQU8sQ0FBQ2pGLFFBQVEsSUFBSSxFQUFFO2dCQUN6Q2lGLE9BQU8sQ0FBQ2pGLFFBQVEsQ0FBQ3BHLElBQUksQ0FBQ2lMLE9BQU8sQ0FBQzs7WUFFbEMsQ0FBQyxDQUFDOztRQUVOLENBQUMsQ0FBQztNQUNKLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztJQUVGLE9BQU8sSUFBSSxDQUFDMUssSUFBSTtFQUNsQjtFQUVBMkcsV0FBV0EsQ0FDVFAsUUFBZ0IsRUFDaEJyRCxTQUFTLEdBQUcsRUFBRSxFQUNkc0QsYUFBQSxHQUF1QixFQUFFLEVBQ3pCNUQsT0FBTyxHQUFHLEtBQUs7SUFFZixPQUFPLElBQUksQ0FBQzJILElBQUksRUFBRSxDQUFDQyxJQUFJLENBQ3JCdEssbURBQUcsQ0FBRUMsSUFBUyxJQUFJO01BQ2hCLE1BQU13SyxHQUFHLEdBQUd4SyxJQUFJLENBQUN1SyxRQUFRLENBQUNuRSxRQUFRLENBQUM7TUFDbkNvRSxHQUFHLENBQUNsRSxhQUFhLEdBQUcsQ0FBQztNQUVyQnZELFNBQVMsR0FBR0EsU0FBUyxDQUFDa0ksV0FBVyxFQUFFLENBQUNDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDO01BQzNELE1BQU1DLFVBQVUsR0FBR3BJLFNBQVMsQ0FBQ3FJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ3ZMLE1BQU0sQ0FBQ3dMLENBQUMsSUFBSSxDQUFDLENBQUNBLENBQUMsQ0FBQ0MsSUFBSSxFQUFFLENBQUNDLE1BQU0sQ0FBQztNQUV0RWYsR0FBRyxDQUFDakUsTUFBTSxDQUFDaEgsT0FBTyxDQUFFa0wsS0FBVSxJQUFJO1FBQ2hDQSxLQUFLLENBQUN4RixJQUFJLEdBQUcsSUFBSTtRQUVqQndGLEtBQUssQ0FBQzVFLFFBQVEsQ0FBQ3RHLE9BQU8sQ0FBRW1MLE9BQVksSUFBSTtVQUN0QztVQUNBLElBQUksQ0FBQ2MsYUFBYSxDQUFDZCxPQUFPLEVBQUVTLFVBQVUsRUFBRTlFLGFBQWEsRUFBRTVELE9BQU8sQ0FBQztVQUUvRCxJQUFJLENBQUNpSSxPQUFPLENBQUN6RixJQUFJLEVBQUU7WUFDakI7WUFDQXdGLEtBQUssQ0FBQ3hGLElBQUksR0FBRyxLQUFLO1lBQ2xCdUYsR0FBRyxDQUFDbEUsYUFBYSxFQUFFOztRQUV2QixDQUFDLENBQUM7TUFDSixDQUFDLENBQUM7TUFFRixPQUFPa0UsR0FBRztJQUNaLENBQUMsQ0FBQyxDQUNIO0VBQ0g7RUFFQWdCLGFBQWFBLENBQ1hkLE9BQVksRUFDWlMsVUFBb0IsRUFDcEI5RSxhQUFvQixFQUNwQjVELE9BQWU7SUFFZixJQUFJZ0osZ0JBQWdCLEdBQUcsS0FBSztJQUM1QixJQUFJTixVQUFVLENBQUNJLE1BQU0sRUFBRTtNQUNyQjtNQUNBSixVQUFVLENBQUM1TCxPQUFPLENBQUVtTSxTQUFpQixJQUFJO1FBQ3ZDLElBQUloQixPQUFPLENBQUN6TSxJQUFJLENBQUNnTixXQUFXLEVBQUUsQ0FBQ3ZMLE9BQU8sQ0FBQ2dNLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1VBQ3RERCxnQkFBZ0IsR0FBRyxJQUFJOztNQUUzQixDQUFDLENBQUM7S0FDSCxNQUFNO01BQ0w7TUFDQUEsZ0JBQWdCLEdBQUcsSUFBSTs7SUFHekI7SUFDQTtJQUNBLElBQUlFLGFBQWEsR0FBRyxLQUFLO0lBQ3pCakIsT0FBTyxDQUFDekwsTUFBTSxDQUFDTSxPQUFPLENBQUVxTSxTQUFpQixJQUFJO01BQzNDLElBQUl2RixhQUFhLENBQUMzRyxPQUFPLENBQUNrTSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtRQUMzQ0QsYUFBYSxHQUFHLElBQUk7O0lBRXhCLENBQUMsQ0FBQztJQUVGO0lBQ0E7SUFDQSxJQUFJRSxjQUFjLEdBQUcsS0FBSztJQUMxQixJQUFJcEosT0FBTyxLQUFLLFdBQVcsRUFBRTtNQUMzQixJQUFJLElBQUksQ0FBQzBELElBQUksQ0FBQ3NCLFdBQVcsQ0FBQ2lELE9BQU8sQ0FBQ3pNLElBQUksQ0FBQyxFQUFFO1FBQ3ZDNE4sY0FBYyxHQUFHLElBQUk7O0tBRXhCLE1BQU07TUFDTEEsY0FBYyxHQUFHLElBQUk7O0lBR3ZCO0lBQ0FuQixPQUFPLENBQUN6RixJQUFJLEdBQUcsRUFBRXdHLGdCQUFnQixJQUFJRSxhQUFhLElBQUlFLGNBQWMsQ0FBQztFQUN2RTtFQUVBQyxXQUFXQSxDQUFBO0lBQ1QsT0FBTyxJQUFJLENBQUMxQixJQUFJLEVBQUUsQ0FBQ0MsSUFBSSxDQUNyQnRLLG1EQUFHLENBQUVDLElBQVMsSUFBSTtNQUNoQixPQUFPQSxJQUFJLENBQUMySyxRQUFRLENBQUNvQixJQUFJLENBQUMsQ0FBQ0MsQ0FBTSxFQUFFQyxDQUFNLEtBQUk7UUFDM0MsTUFBTUMsS0FBSyxHQUFHRixDQUFDLENBQUMvTixJQUFJLENBQUNtTixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUNlLEdBQUcsRUFBRTtRQUNyQyxNQUFNQyxLQUFLLEdBQUdILENBQUMsQ0FBQ2hPLElBQUksQ0FBQ21OLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ2UsR0FBRyxFQUFFO1FBQ3JDLE9BQU9ELEtBQUssQ0FBQ0csYUFBYSxDQUFDRCxLQUFLLENBQUM7TUFDbkMsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQ0g7RUFDSDtFQUVBL00sU0FBU0EsQ0FBQTtJQUNQLE9BQU8sSUFBSSxDQUFDK0ssSUFBSSxFQUFFLENBQUNDLElBQUksQ0FDckJ0SyxtREFBRyxDQUFFQyxJQUFTLElBQUk7TUFDaEIsT0FBT0EsSUFBSSxDQUFDZixNQUFNLENBQUM4TSxJQUFJLEVBQUU7SUFDM0IsQ0FBQyxDQUFDLENBQ0g7RUFDSDtFQUVBTyxNQUFNQSxDQUFBO0lBQ0osT0FBTyxJQUFJLENBQUNsQyxJQUFJLEVBQUUsQ0FBQ0MsSUFBSSxDQUNyQnRLLG1EQUFHLENBQUVDLElBQVMsSUFBSTtNQUNoQixPQUFPQSxJQUFJLENBQUNELEdBQUc7SUFDakIsQ0FBQyxDQUFDLENBQ0g7RUFDSDs7QUFySlc3RCxjQUFjO21CQUFkQSxjQUFjLEVBQUFDLHNEQUFBLENBQUErRCw0REFBQSxHQUFBL0Qsc0RBQUEsQ0FBQWdFLGdEQUFBO0FBQUE7QUFBZGpFLGNBQWM7U0FBZEEsY0FBYztFQUFBc1EsT0FBQSxFQUFkdFEsY0FBYyxDQUFBdVEsSUFBQTtFQUFBQyxVQUFBLEVBRmI7QUFBTSIsInNvdXJjZXMiOlsiLi9zcmMvYXBwL3BhZ2VzL3NjaGVkdWxlLWZpbHRlci9zY2hlZHVsZS1maWx0ZXIudHMiLCIuL3NyYy9hcHAvcGFnZXMvc2NoZWR1bGUtZmlsdGVyL3NjaGVkdWxlLWZpbHRlci5odG1sIiwiLi9zcmMvYXBwL3BhZ2VzL3NjaGVkdWxlL3NjaGVkdWxlLXJvdXRpbmcubW9kdWxlLnRzIiwiLi9zcmMvYXBwL3BhZ2VzL3NjaGVkdWxlL3NjaGVkdWxlLm1vZHVsZS50cyIsIi4vc3JjL2FwcC9wYWdlcy9zY2hlZHVsZS9zY2hlZHVsZS50cyIsIi4vc3JjL2FwcC9wYWdlcy9zY2hlZHVsZS9zY2hlZHVsZS5odG1sIiwiLi9zcmMvYXBwL3Byb3ZpZGVycy9jb25mZXJlbmNlLWRhdGEudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbmZpZywgTW9kYWxDb250cm9sbGVyLCBOYXZQYXJhbXMgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XHJcblxyXG5pbXBvcnQgeyBDb25mZXJlbmNlRGF0YSB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9jb25mZXJlbmNlLWRhdGEnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGFnZS1zY2hlZHVsZS1maWx0ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnc2NoZWR1bGUtZmlsdGVyLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NjaGVkdWxlLWZpbHRlci5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTY2hlZHVsZUZpbHRlclBhZ2Uge1xyXG4gIGlvczogYm9vbGVhbjtcclxuXHJcbiAgdHJhY2tzOiB7bmFtZTogc3RyaW5nLCBpY29uOiBzdHJpbmcsIGlzQ2hlY2tlZDogYm9vbGVhbn1bXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBjb25mRGF0YTogQ29uZmVyZW5jZURhdGEsXHJcbiAgICBwcml2YXRlIGNvbmZpZzogQ29uZmlnLFxyXG4gICAgcHVibGljIG1vZGFsQ3RybDogTW9kYWxDb250cm9sbGVyLFxyXG4gICAgcHVibGljIG5hdlBhcmFtczogTmF2UGFyYW1zXHJcbiAgKSB7IH1cclxuXHJcbiAgaW9uVmlld1dpbGxFbnRlcigpIHtcclxuICAgIHRoaXMuaW9zID0gdGhpcy5jb25maWcuZ2V0KCdtb2RlJykgPT09IGBpb3NgO1xyXG5cclxuICAgIC8vIHBhc3NlZCBpbiBhcnJheSBvZiB0cmFjayBuYW1lcyB0aGF0IHNob3VsZCBiZSBleGNsdWRlZCAodW5jaGVja2VkKVxyXG4gICAgY29uc3QgZXhjbHVkZWRUcmFja05hbWVzID0gdGhpcy5uYXZQYXJhbXMuZ2V0KCdleGNsdWRlZFRyYWNrcycpO1xyXG5cclxuICAgIHRoaXMuY29uZkRhdGEuZ2V0VHJhY2tzKCkuc3Vic2NyaWJlKCh0cmFja3M6IGFueVtdKSA9PiB7XHJcbiAgICAgIHRyYWNrcy5mb3JFYWNoKHRyYWNrID0+IHtcclxuICAgICAgICB0aGlzLnRyYWNrcy5wdXNoKHtcclxuICAgICAgICAgIG5hbWU6IHRyYWNrLm5hbWUsXHJcbiAgICAgICAgICBpY29uOiB0cmFjay5pY29uLFxyXG4gICAgICAgICAgaXNDaGVja2VkOiAoZXhjbHVkZWRUcmFja05hbWVzLmluZGV4T2YodHJhY2submFtZSkgPT09IC0xKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0QWxsKGNoZWNrOiBib29sZWFuKSB7XHJcbiAgICAvLyBzZXQgYWxsIHRvIGNoZWNrZWQgb3IgdW5jaGVja2VkXHJcbiAgICB0aGlzLnRyYWNrcy5mb3JFYWNoKHRyYWNrID0+IHtcclxuICAgICAgdHJhY2suaXNDaGVja2VkID0gY2hlY2s7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFwcGx5RmlsdGVycygpIHtcclxuICAgIC8vIFBhc3MgYmFjayBhIG5ldyBhcnJheSBvZiB0cmFjayBuYW1lcyB0byBleGNsdWRlXHJcbiAgICBjb25zdCBleGNsdWRlZFRyYWNrTmFtZXMgPSB0aGlzLnRyYWNrcy5maWx0ZXIoYyA9PiAhYy5pc0NoZWNrZWQpLm1hcChjID0+IGMubmFtZSk7XHJcbiAgICB0aGlzLmRpc21pc3MoZXhjbHVkZWRUcmFja05hbWVzKTtcclxuICB9XHJcblxyXG4gIGRpc21pc3MoZGF0YT86IGFueSkge1xyXG4gICAgLy8gdXNpbmcgdGhlIGluamVjdGVkIE1vZGFsQ29udHJvbGxlciB0aGlzIHBhZ2VcclxuICAgIC8vIGNhbiBcImRpc21pc3NcIiBpdHNlbGYgYW5kIHBhc3MgYmFjayBkYXRhXHJcbiAgICB0aGlzLm1vZGFsQ3RybC5kaXNtaXNzKGRhdGEpO1xyXG4gIH1cclxufVxyXG4iLCI8aW9uLWhlYWRlciB0cmFuc2x1Y2VudD1cInRydWVcIj5cclxuICA8aW9uLXRvb2xiYXI+XHJcbiAgICA8aW9uLWJ1dHRvbnMgc2xvdD1cInN0YXJ0XCI+XHJcbiAgICAgIDxpb24tYnV0dG9uICpuZ0lmPVwiaW9zXCIgKGNsaWNrKT1cImRpc21pc3MoKVwiPkNhbmNlbDwvaW9uLWJ1dHRvbj5cclxuICAgICAgPGlvbi1idXR0b24gKm5nSWY9XCIhaW9zXCIgKGNsaWNrKT1cInNlbGVjdEFsbChmYWxzZSlcIj5SZXNldDwvaW9uLWJ1dHRvbj5cclxuICAgIDwvaW9uLWJ1dHRvbnM+XHJcblxyXG4gICAgPGlvbi10aXRsZT5cclxuICAgICAgRmlsdGVyIFNlc3Npb25zXHJcbiAgICA8L2lvbi10aXRsZT5cclxuXHJcbiAgICA8aW9uLWJ1dHRvbnMgc2xvdD1cImVuZFwiPlxyXG4gICAgICA8aW9uLWJ1dHRvbiAoY2xpY2spPVwiYXBwbHlGaWx0ZXJzKClcIiBzdHJvbmc+RG9uZTwvaW9uLWJ1dHRvbj5cclxuICAgIDwvaW9uLWJ1dHRvbnM+XHJcbiAgPC9pb24tdG9vbGJhcj5cclxuPC9pb24taGVhZGVyPlxyXG5cclxuPGlvbi1jb250ZW50PlxyXG4gIDxpb24tbGlzdCBbbGluZXNdPVwiaW9zID8gJ2luc2V0JyA6ICdmdWxsJ1wiPlxyXG4gICAgPGlvbi1saXN0LWhlYWRlcj5UcmFja3M8L2lvbi1saXN0LWhlYWRlcj5cclxuXHJcbiAgICA8aW9uLWl0ZW0gKm5nRm9yPVwibGV0IHRyYWNrIG9mIHRyYWNrc1wiIFthdHRyLnRyYWNrXT1cInRyYWNrLm5hbWUgfCBsb3dlcmNhc2VcIj5cclxuICAgICAgPGlvbi1pY29uICpuZ0lmPVwiaW9zXCIgc2xvdD1cInN0YXJ0XCIgW25hbWVdPVwidHJhY2suaWNvblwiIGNvbG9yPVwibWVkaXVtXCI+PC9pb24taWNvbj5cclxuXHJcbiAgICAgIDwhLS0gVE9ETyhGVy0zODkxKTogcmVtb3ZlIGFyaWEtbGFiZWwgb25jZSBidWcgaXMgcmVzb2x2ZWQgLS0+XHJcbiAgICAgIDxpb24tY2hlY2tib3ggWyhuZ01vZGVsKV09XCJ0cmFjay5pc0NoZWNrZWRcIiBbYXR0ci5hcmlhLWxhYmVsXT1cInRyYWNrLm5hbWVcIj5cclxuICAgICAgICB7e3RyYWNrLm5hbWV9fVxyXG4gICAgICA8L2lvbi1jaGVja2JveD5cclxuICAgIDwvaW9uLWl0ZW0+XHJcbiAgPC9pb24tbGlzdD5cclxuXHJcbjwvaW9uLWNvbnRlbnQ+XHJcblxyXG48aW9uLWZvb3RlciB0cmFuc2x1Y2VudD1cInRydWVcIiAqbmdJZj1cImlvc1wiPlxyXG4gIDxpb24tdG9vbGJhcj5cclxuICAgIDxpb24tYnV0dG9ucyBzbG90PVwic3RhcnRcIj5cclxuICAgICAgPGlvbi1idXR0b24gKGNsaWNrKT1cInNlbGVjdEFsbChmYWxzZSlcIj5EZXNlbGVjdCBBbGw8L2lvbi1idXR0b24+XHJcbiAgICA8L2lvbi1idXR0b25zPlxyXG4gICAgPGlvbi1idXR0b25zIHNsb3Q9XCJlbmRcIj5cclxuICAgICAgPGlvbi1idXR0b24gKGNsaWNrKT1cInNlbGVjdEFsbCh0cnVlKVwiPlNlbGVjdCBBbGw8L2lvbi1idXR0b24+XHJcbiAgICA8L2lvbi1idXR0b25zPlxyXG4gIDwvaW9uLXRvb2xiYXI+XHJcbjwvaW9uLWZvb3Rlcj5cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgU2NoZWR1bGVQYWdlIH0gZnJvbSAnLi9zY2hlZHVsZSc7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAnJyxcclxuICAgIGNvbXBvbmVudDogU2NoZWR1bGVQYWdlXHJcbiAgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxyXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTY2hlZHVsZVBhZ2VSb3V0aW5nTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XHJcblxyXG5pbXBvcnQgeyBTY2hlZHVsZVBhZ2UgfSBmcm9tICcuL3NjaGVkdWxlJztcclxuaW1wb3J0IHsgU2NoZWR1bGVGaWx0ZXJQYWdlIH0gZnJvbSAnLi4vc2NoZWR1bGUtZmlsdGVyL3NjaGVkdWxlLWZpbHRlcic7XHJcbmltcG9ydCB7IFNjaGVkdWxlUGFnZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL3NjaGVkdWxlLXJvdXRpbmcubW9kdWxlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIElvbmljTW9kdWxlLFxyXG4gICAgICAgIFNjaGVkdWxlUGFnZVJvdXRpbmdNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBTY2hlZHVsZVBhZ2UsXHJcbiAgICAgICAgU2NoZWR1bGVGaWx0ZXJQYWdlXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTY2hlZHVsZU1vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBbGVydENvbnRyb2xsZXIsIElvbkxpc3QsIElvblJvdXRlck91dGxldCwgTG9hZGluZ0NvbnRyb2xsZXIsIE1vZGFsQ29udHJvbGxlciwgVG9hc3RDb250cm9sbGVyLCBDb25maWcgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XHJcblxyXG5pbXBvcnQgeyBTY2hlZHVsZUZpbHRlclBhZ2UgfSBmcm9tICcuLi9zY2hlZHVsZS1maWx0ZXIvc2NoZWR1bGUtZmlsdGVyJztcclxuaW1wb3J0IHsgQ29uZmVyZW5jZURhdGEgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvY29uZmVyZW5jZS1kYXRhJztcclxuaW1wb3J0IHsgVXNlckRhdGEgfSBmcm9tICcuLi8uLi9wcm92aWRlcnMvdXNlci1kYXRhJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGFnZS1zY2hlZHVsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICdzY2hlZHVsZS5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zY2hlZHVsZS5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTY2hlZHVsZVBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8vIEdldHMgYSByZWZlcmVuY2UgdG8gdGhlIGxpc3QgZWxlbWVudFxyXG4gIEBWaWV3Q2hpbGQoJ3NjaGVkdWxlTGlzdCcsIHsgc3RhdGljOiB0cnVlIH0pIHNjaGVkdWxlTGlzdDogSW9uTGlzdDtcclxuXHJcbiAgaW9zOiBib29sZWFuO1xyXG4gIGRheUluZGV4ID0gMDtcclxuICBxdWVyeVRleHQgPSAnJztcclxuICBzZWdtZW50ID0gJ2FsbCc7XHJcbiAgZXhjbHVkZVRyYWNrczogYW55ID0gW107XHJcbiAgc2hvd25TZXNzaW9uczogYW55ID0gW107XHJcbiAgZ3JvdXBzOiBhbnkgPSBbXTtcclxuICBjb25mRGF0ZTogc3RyaW5nO1xyXG4gIHNob3dTZWFyY2hiYXI6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGFsZXJ0Q3RybDogQWxlcnRDb250cm9sbGVyLFxyXG4gICAgcHVibGljIGNvbmZEYXRhOiBDb25mZXJlbmNlRGF0YSxcclxuICAgIHB1YmxpYyBsb2FkaW5nQ3RybDogTG9hZGluZ0NvbnRyb2xsZXIsXHJcbiAgICBwdWJsaWMgbW9kYWxDdHJsOiBNb2RhbENvbnRyb2xsZXIsXHJcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwdWJsaWMgcm91dGVyT3V0bGV0OiBJb25Sb3V0ZXJPdXRsZXQsXHJcbiAgICBwdWJsaWMgdG9hc3RDdHJsOiBUb2FzdENvbnRyb2xsZXIsXHJcbiAgICBwdWJsaWMgdXNlcjogVXNlckRhdGEsXHJcbiAgICBwdWJsaWMgY29uZmlnOiBDb25maWdcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMudXBkYXRlU2NoZWR1bGUoKTtcclxuXHJcbiAgICB0aGlzLmlvcyA9IHRoaXMuY29uZmlnLmdldCgnbW9kZScpID09PSAnaW9zJztcclxuICB9XHJcblxyXG4gIHVwZGF0ZVNjaGVkdWxlKCkge1xyXG4gICAgLy8gQ2xvc2UgYW55IG9wZW4gc2xpZGluZyBpdGVtcyB3aGVuIHRoZSBzY2hlZHVsZSB1cGRhdGVzXHJcbiAgICBpZiAodGhpcy5zY2hlZHVsZUxpc3QpIHtcclxuICAgICAgdGhpcy5zY2hlZHVsZUxpc3QuY2xvc2VTbGlkaW5nSXRlbXMoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNvbmZEYXRhLmdldFRpbWVsaW5lKHRoaXMuZGF5SW5kZXgsIHRoaXMucXVlcnlUZXh0LCB0aGlzLmV4Y2x1ZGVUcmFja3MsIHRoaXMuc2VnbWVudCkuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5zaG93blNlc3Npb25zID0gZGF0YS5zaG93blNlc3Npb25zO1xyXG4gICAgICB0aGlzLmdyb3VwcyA9IGRhdGEuZ3JvdXBzO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBwcmVzZW50RmlsdGVyKCkge1xyXG4gICAgY29uc3QgbW9kYWwgPSBhd2FpdCB0aGlzLm1vZGFsQ3RybC5jcmVhdGUoe1xyXG4gICAgICBjb21wb25lbnQ6IFNjaGVkdWxlRmlsdGVyUGFnZSxcclxuICAgICAgcHJlc2VudGluZ0VsZW1lbnQ6IHRoaXMucm91dGVyT3V0bGV0Lm5hdGl2ZUVsLFxyXG4gICAgICBjb21wb25lbnRQcm9wczogeyBleGNsdWRlZFRyYWNrczogdGhpcy5leGNsdWRlVHJhY2tzIH1cclxuICAgIH0pO1xyXG4gICAgYXdhaXQgbW9kYWwucHJlc2VudCgpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgbW9kYWwub25XaWxsRGlzbWlzcygpO1xyXG4gICAgaWYgKGRhdGEpIHtcclxuICAgICAgdGhpcy5leGNsdWRlVHJhY2tzID0gZGF0YTtcclxuICAgICAgdGhpcy51cGRhdGVTY2hlZHVsZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgYWRkRmF2b3JpdGUoc2xpZGluZ0l0ZW06IEhUTUxJb25JdGVtU2xpZGluZ0VsZW1lbnQsIHNlc3Npb25EYXRhOiBhbnkpIHtcclxuICAgIGlmICh0aGlzLnVzZXIuaGFzRmF2b3JpdGUoc2Vzc2lvbkRhdGEubmFtZSkpIHtcclxuICAgICAgLy8gUHJvbXB0IHRvIHJlbW92ZSBmYXZvcml0ZVxyXG4gICAgICB0aGlzLnJlbW92ZUZhdm9yaXRlKHNsaWRpbmdJdGVtLCBzZXNzaW9uRGF0YSwgJ0Zhdm9yaXRlIGFscmVhZHkgYWRkZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIEFkZCBhcyBhIGZhdm9yaXRlXHJcbiAgICAgIHRoaXMudXNlci5hZGRGYXZvcml0ZShzZXNzaW9uRGF0YS5uYW1lKTtcclxuXHJcbiAgICAgIC8vIENsb3NlIHRoZSBvcGVuIGl0ZW1cclxuICAgICAgc2xpZGluZ0l0ZW0uY2xvc2UoKTtcclxuXHJcbiAgICAgIC8vIENyZWF0ZSBhIHRvYXN0XHJcbiAgICAgIGNvbnN0IHRvYXN0ID0gYXdhaXQgdGhpcy50b2FzdEN0cmwuY3JlYXRlKHtcclxuICAgICAgICBoZWFkZXI6IGAke3Nlc3Npb25EYXRhLm5hbWV9IHdhcyBzdWNjZXNzZnVsbHkgYWRkZWQgYXMgYSBmYXZvcml0ZS5gLFxyXG4gICAgICAgIGR1cmF0aW9uOiAzMDAwLFxyXG4gICAgICAgIGJ1dHRvbnM6IFt7XHJcbiAgICAgICAgICB0ZXh0OiAnQ2xvc2UnLFxyXG4gICAgICAgICAgcm9sZTogJ2NhbmNlbCdcclxuICAgICAgICB9XVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIFByZXNlbnQgdGhlIHRvYXN0IGF0IHRoZSBib3R0b20gb2YgdGhlIHBhZ2VcclxuICAgICAgYXdhaXQgdG9hc3QucHJlc2VudCgpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGFzeW5jIHJlbW92ZUZhdm9yaXRlKHNsaWRpbmdJdGVtOiBIVE1MSW9uSXRlbVNsaWRpbmdFbGVtZW50LCBzZXNzaW9uRGF0YTogYW55LCB0aXRsZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBhbGVydCA9IGF3YWl0IHRoaXMuYWxlcnRDdHJsLmNyZWF0ZSh7XHJcbiAgICAgIGhlYWRlcjogdGl0bGUsXHJcbiAgICAgIG1lc3NhZ2U6ICdXb3VsZCB5b3UgbGlrZSB0byByZW1vdmUgdGhpcyBzZXNzaW9uIGZyb20geW91ciBmYXZvcml0ZXM/JyxcclxuICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdDYW5jZWwnLFxyXG4gICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyB0aGV5IGNsaWNrZWQgdGhlIGNhbmNlbCBidXR0b24sIGRvIG5vdCByZW1vdmUgdGhlIHNlc3Npb25cclxuICAgICAgICAgICAgLy8gY2xvc2UgdGhlIHNsaWRpbmcgaXRlbSBhbmQgaGlkZSB0aGUgb3B0aW9uIGJ1dHRvbnNcclxuICAgICAgICAgICAgc2xpZGluZ0l0ZW0uY2xvc2UoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdSZW1vdmUnLFxyXG4gICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyB0aGV5IHdhbnQgdG8gcmVtb3ZlIHRoaXMgc2Vzc2lvbiBmcm9tIHRoZWlyIGZhdm9yaXRlc1xyXG4gICAgICAgICAgICB0aGlzLnVzZXIucmVtb3ZlRmF2b3JpdGUoc2Vzc2lvbkRhdGEubmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2NoZWR1bGUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNsb3NlIHRoZSBzbGlkaW5nIGl0ZW0gYW5kIGhpZGUgdGhlIG9wdGlvbiBidXR0b25zXHJcbiAgICAgICAgICAgIHNsaWRpbmdJdGVtLmNsb3NlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9KTtcclxuICAgIC8vIG5vdyBwcmVzZW50IHRoZSBhbGVydCBvbiB0b3Agb2YgYWxsIG90aGVyIGNvbnRlbnRcclxuICAgIGF3YWl0IGFsZXJ0LnByZXNlbnQoKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIG9wZW5Tb2NpYWwobmV0d29yazogc3RyaW5nLCBmYWI6IEhUTUxJb25GYWJFbGVtZW50KSB7XHJcbiAgICBjb25zdCBsb2FkaW5nID0gYXdhaXQgdGhpcy5sb2FkaW5nQ3RybC5jcmVhdGUoe1xyXG4gICAgICBtZXNzYWdlOiBgUG9zdGluZyB0byAke25ldHdvcmt9YCxcclxuICAgICAgZHVyYXRpb246IChNYXRoLnJhbmRvbSgpICogMTAwMCkgKyA1MDBcclxuICAgIH0pO1xyXG4gICAgYXdhaXQgbG9hZGluZy5wcmVzZW50KCk7XHJcbiAgICBhd2FpdCBsb2FkaW5nLm9uV2lsbERpc21pc3MoKTtcclxuICAgIGZhYi5jbG9zZSgpO1xyXG4gIH1cclxufVxyXG4iLCI8aW9uLWhlYWRlciB0cmFuc2x1Y2VudD1cInRydWVcIj5cclxuICA8aW9uLXRvb2xiYXI+XHJcbiAgICA8aW9uLWJ1dHRvbnMgKm5nSWY9XCIhc2hvd1NlYXJjaGJhclwiIHNsb3Q9XCJzdGFydFwiPlxyXG4gICAgICA8aW9uLW1lbnUtYnV0dG9uPjwvaW9uLW1lbnUtYnV0dG9uPlxyXG4gICAgPC9pb24tYnV0dG9ucz5cclxuICAgIDxpb24tc2VnbWVudCAqbmdJZj1cImlvc1wiIFsobmdNb2RlbCldPVwic2VnbWVudFwiIChpb25DaGFuZ2UpPVwidXBkYXRlU2NoZWR1bGUoKVwiPlxyXG4gICAgICA8aW9uLXNlZ21lbnQtYnV0dG9uIHZhbHVlPVwiYWxsXCI+XHJcbiAgICAgICAgQWxsXHJcbiAgICAgIDwvaW9uLXNlZ21lbnQtYnV0dG9uPlxyXG4gICAgICA8aW9uLXNlZ21lbnQtYnV0dG9uIHZhbHVlPVwiZmF2b3JpdGVzXCI+XHJcbiAgICAgICAgRmF2b3JpdGVzXHJcbiAgICAgIDwvaW9uLXNlZ21lbnQtYnV0dG9uPlxyXG4gICAgPC9pb24tc2VnbWVudD5cclxuICAgIDxpb24tdGl0bGUgKm5nSWY9XCIhaW9zICYmICFzaG93U2VhcmNoYmFyXCI+U2NoZWR1bGU8L2lvbi10aXRsZT5cclxuICAgIDxpb24tc2VhcmNoYmFyICpuZ0lmPVwic2hvd1NlYXJjaGJhclwiIHNob3dDYW5jZWxCdXR0b249XCJhbHdheXNcIiBbKG5nTW9kZWwpXT1cInF1ZXJ5VGV4dFwiIChpb25JbnB1dCk9XCJ1cGRhdGVTY2hlZHVsZSgpXCIgKGlvbkNhbmNlbCk9XCJzaG93U2VhcmNoYmFyID0gZmFsc2VcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiPjwvaW9uLXNlYXJjaGJhcj5cclxuICAgIDxpb24tYnV0dG9ucyBzbG90PVwiZW5kXCI+XHJcbiAgICAgIDxpb24tYnV0dG9uICpuZ0lmPVwiIWlvcyAmJiAhc2hvd1NlYXJjaGJhclwiIChjbGljayk9XCJzaG93U2VhcmNoYmFyID0gdHJ1ZVwiPlxyXG4gICAgICAgIDxpb24taWNvbiBzbG90PVwiaWNvbi1vbmx5XCIgbmFtZT1cInNlYXJjaFwiPjwvaW9uLWljb24+XHJcbiAgICAgIDwvaW9uLWJ1dHRvbj5cclxuICAgICAgPGlvbi1idXR0b24gKm5nSWY9XCIhc2hvd1NlYXJjaGJhclwiIChjbGljayk9XCJwcmVzZW50RmlsdGVyKClcIj5cclxuICAgICAgICA8c3BhbiAqbmdJZj1cImlvc1wiPkZpbHRlcjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiAqbmdJZj1cIiFpb3NcIj5cclxuICAgICAgICAgIDxpb24taWNvbiBzbG90PVwiaWNvbi1vbmx5XCIgbmFtZT1cIm9wdGlvbnNcIj48L2lvbi1pY29uPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9pb24tYnV0dG9uPlxyXG4gICAgPC9pb24tYnV0dG9ucz5cclxuICA8L2lvbi10b29sYmFyPlxyXG4gIDxpb24tdG9vbGJhciAqbmdJZj1cIiFpb3NcIj5cclxuICAgIDxpb24tc2VnbWVudCBbKG5nTW9kZWwpXT1cInNlZ21lbnRcIiAoaW9uQ2hhbmdlKT1cInVwZGF0ZVNjaGVkdWxlKClcIj5cclxuICAgICAgPGlvbi1zZWdtZW50LWJ1dHRvbiB2YWx1ZT1cImFsbFwiPlxyXG4gICAgICAgIEFsbFxyXG4gICAgICA8L2lvbi1zZWdtZW50LWJ1dHRvbj5cclxuICAgICAgPGlvbi1zZWdtZW50LWJ1dHRvbiB2YWx1ZT1cImZhdm9yaXRlc1wiPlxyXG4gICAgICAgIEZhdm9yaXRlc1xyXG4gICAgICA8L2lvbi1zZWdtZW50LWJ1dHRvbj5cclxuICAgIDwvaW9uLXNlZ21lbnQ+XHJcbiAgPC9pb24tdG9vbGJhcj5cclxuPC9pb24taGVhZGVyPlxyXG5cclxuPGlvbi1jb250ZW50IGZ1bGxzY3JlZW49XCJ0cnVlXCI+XHJcbiAgPGlvbi1oZWFkZXIgY29sbGFwc2U9XCJjb25kZW5zZVwiPlxyXG4gICAgPGlvbi10b29sYmFyPlxyXG4gICAgICA8aW9uLXRpdGxlIHNpemU9XCJsYXJnZVwiPlNjaGVkdWxlPC9pb24tdGl0bGU+XHJcbiAgICA8L2lvbi10b29sYmFyPlxyXG4gICAgPGlvbi10b29sYmFyPlxyXG4gICAgICA8aW9uLXNlYXJjaGJhciBbKG5nTW9kZWwpXT1cInF1ZXJ5VGV4dFwiIChpb25JbnB1dCk9XCJ1cGRhdGVTY2hlZHVsZSgpXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIj48L2lvbi1zZWFyY2hiYXI+XHJcbiAgICA8L2lvbi10b29sYmFyPlxyXG4gIDwvaW9uLWhlYWRlcj5cclxuXHJcbiAgPGlvbi1saXN0ICNzY2hlZHVsZUxpc3QgW2hpZGRlbl09XCJzaG93blNlc3Npb25zID09PSAwXCI+XHJcbiAgICA8aW9uLWl0ZW0tZ3JvdXAgKm5nRm9yPVwibGV0IGdyb3VwIG9mIGdyb3Vwc1wiIFtoaWRkZW5dPVwiZ3JvdXAuaGlkZVwiPlxyXG4gICAgICA8aW9uLWl0ZW0tZGl2aWRlciBzdGlja3k+XHJcbiAgICAgICAgPGlvbi1sYWJlbD5cclxuICAgICAgICAgIHt7Z3JvdXAudGltZX19XHJcbiAgICAgICAgPC9pb24tbGFiZWw+XHJcbiAgICAgIDwvaW9uLWl0ZW0tZGl2aWRlcj5cclxuXHJcbiAgICAgIDxpb24taXRlbS1zbGlkaW5nICpuZ0Zvcj1cImxldCBzZXNzaW9uIG9mIGdyb3VwLnNlc3Npb25zXCIgI3NsaWRpbmdJdGVtIFthdHRyLnRyYWNrXT1cInNlc3Npb24udHJhY2tzWzBdIHwgbG93ZXJjYXNlXCJcclxuICAgICAgICBbaGlkZGVuXT1cInNlc3Npb24uaGlkZVwiPlxyXG4gICAgICAgIDxpb24taXRlbSByb3V0ZXJMaW5rPVwiL2FwcC90YWJzL3NjaGVkdWxlL3Nlc3Npb24ve3tzZXNzaW9uLmlkfX1cIj5cclxuICAgICAgICAgIDxpb24tbGFiZWw+XHJcbiAgICAgICAgICAgIDxoMz57e3Nlc3Npb24ubmFtZX19PC9oMz5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAge3tzZXNzaW9uLnRpbWVTdGFydH19ICZtZGFzaDsge3tzZXNzaW9uLnRpbWVFbmR9fToge3tzZXNzaW9uLmxvY2F0aW9ufX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9pb24tbGFiZWw+XHJcbiAgICAgICAgPC9pb24taXRlbT5cclxuICAgICAgICA8aW9uLWl0ZW0tb3B0aW9ucz5cclxuICAgICAgICAgIDxpb24taXRlbS1vcHRpb24gY29sb3I9XCJmYXZvcml0ZVwiIChjbGljayk9XCJhZGRGYXZvcml0ZShzbGlkaW5nSXRlbSwgc2Vzc2lvbilcIiAqbmdJZj1cInNlZ21lbnQgPT09ICdhbGwnXCI+XHJcbiAgICAgICAgICAgIEZhdm9yaXRlXHJcbiAgICAgICAgICA8L2lvbi1pdGVtLW9wdGlvbj5cclxuICAgICAgICAgIDxpb24taXRlbS1vcHRpb24gY29sb3I9XCJkYW5nZXJcIiAoY2xpY2spPVwicmVtb3ZlRmF2b3JpdGUoc2xpZGluZ0l0ZW0sIHNlc3Npb24sICdSZW1vdmUgRmF2b3JpdGUnKVwiXHJcbiAgICAgICAgICAgICpuZ0lmPVwic2VnbWVudCA9PT0gJ2Zhdm9yaXRlcydcIj5cclxuICAgICAgICAgICAgUmVtb3ZlXHJcbiAgICAgICAgICA8L2lvbi1pdGVtLW9wdGlvbj5cclxuICAgICAgICA8L2lvbi1pdGVtLW9wdGlvbnM+XHJcbiAgICAgIDwvaW9uLWl0ZW0tc2xpZGluZz5cclxuICAgIDwvaW9uLWl0ZW0tZ3JvdXA+XHJcbiAgPC9pb24tbGlzdD5cclxuXHJcbiAgPGlvbi1saXN0LWhlYWRlciBbaGlkZGVuXT1cInNob3duU2Vzc2lvbnMgPiAwXCI+XHJcbiAgICBObyBTZXNzaW9ucyBGb3VuZFxyXG4gIDwvaW9uLWxpc3QtaGVhZGVyPlxyXG5cclxuICA8aW9uLWZhYiBzbG90PVwiZml4ZWRcIiB2ZXJ0aWNhbD1cImJvdHRvbVwiIGhvcml6b250YWw9XCJlbmRcIiAjZmFiPlxyXG4gICAgPGlvbi1mYWItYnV0dG9uPlxyXG4gICAgICA8aW9uLWljb24gbmFtZT1cInNoYXJlLXNvY2lhbFwiPjwvaW9uLWljb24+XHJcbiAgICA8L2lvbi1mYWItYnV0dG9uPlxyXG4gICAgPGlvbi1mYWItbGlzdCBzaWRlPVwidG9wXCI+XHJcbiAgICAgIDxpb24tZmFiLWJ1dHRvbiBjb2xvcj1cInZpbWVvXCIgKGNsaWNrKT1cIm9wZW5Tb2NpYWwoJ1ZpbWVvJywgZmFiKVwiPlxyXG4gICAgICAgIDxpb24taWNvbiBuYW1lPVwibG9nby12aW1lb1wiPjwvaW9uLWljb24+XHJcbiAgICAgIDwvaW9uLWZhYi1idXR0b24+XHJcbiAgICAgIDxpb24tZmFiLWJ1dHRvbiBjb2xvcj1cImluc3RhZ3JhbVwiIChjbGljayk9XCJvcGVuU29jaWFsKCdJbnN0YWdyYW0nLCBmYWIpXCI+XHJcbiAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJsb2dvLWluc3RhZ3JhbVwiPjwvaW9uLWljb24+XHJcbiAgICAgIDwvaW9uLWZhYi1idXR0b24+XHJcbiAgICAgIDxpb24tZmFiLWJ1dHRvbiBjb2xvcj1cInR3aXR0ZXJcIiAoY2xpY2spPVwib3BlblNvY2lhbCgnVHdpdHRlcicsIGZhYilcIj5cclxuICAgICAgICA8aW9uLWljb24gbmFtZT1cImxvZ28tdHdpdHRlclwiPjwvaW9uLWljb24+XHJcbiAgICAgIDwvaW9uLWZhYi1idXR0b24+XHJcbiAgICAgIDxpb24tZmFiLWJ1dHRvbiBjb2xvcj1cImZhY2Vib29rXCIgKGNsaWNrKT1cIm9wZW5Tb2NpYWwoJ0ZhY2Vib29rJywgZmFiKVwiPlxyXG4gICAgICAgIDxpb24taWNvbiBuYW1lPVwibG9nby1mYWNlYm9va1wiPjwvaW9uLWljb24+XHJcbiAgICAgIDwvaW9uLWZhYi1idXR0b24+XHJcbiAgICA8L2lvbi1mYWItbGlzdD5cclxuICA8L2lvbi1mYWI+XHJcbjwvaW9uLWNvbnRlbnQ+XHJcbiIsImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgVXNlckRhdGEgfSBmcm9tICcuL3VzZXItZGF0YSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb25mZXJlbmNlRGF0YSB7XHJcbiAgZGF0YTogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cENsaWVudCwgcHVibGljIHVzZXI6IFVzZXJEYXRhKSB7fVxyXG5cclxuICBsb2FkKCk6IGFueSB7XHJcbiAgICBpZiAodGhpcy5kYXRhKSB7XHJcbiAgICAgIHJldHVybiBvZih0aGlzLmRhdGEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgIC5nZXQoJ2Fzc2V0cy9kYXRhL2RhdGEuanNvbicpXHJcbiAgICAgICAgLnBpcGUobWFwKHRoaXMucHJvY2Vzc0RhdGEsIHRoaXMpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb2Nlc3NEYXRhKGRhdGE6IGFueSkge1xyXG4gICAgLy8ganVzdCBzb21lIGdvb2QgJ29sIEpTIGZ1biB3aXRoIG9iamVjdHMgYW5kIGFycmF5c1xyXG4gICAgLy8gYnVpbGQgdXAgdGhlIGRhdGEgYnkgbGlua2luZyBzcGVha2VycyB0byBzZXNzaW9uc1xyXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcclxuXHJcbiAgICAvLyBsb29wIHRocm91Z2ggZWFjaCBkYXkgaW4gdGhlIHNjaGVkdWxlXHJcbiAgICB0aGlzLmRhdGEuc2NoZWR1bGUuZm9yRWFjaCgoZGF5OiBhbnkpID0+IHtcclxuICAgICAgLy8gbG9vcCB0aHJvdWdoIGVhY2ggdGltZWxpbmUgZ3JvdXAgaW4gdGhlIGRheVxyXG4gICAgICBkYXkuZ3JvdXBzLmZvckVhY2goKGdyb3VwOiBhbnkpID0+IHtcclxuICAgICAgICAvLyBsb29wIHRocm91Z2ggZWFjaCBzZXNzaW9uIGluIHRoZSB0aW1lbGluZSBncm91cFxyXG4gICAgICAgIGdyb3VwLnNlc3Npb25zLmZvckVhY2goKHNlc3Npb246IGFueSkgPT4ge1xyXG4gICAgICAgICAgc2Vzc2lvbi5zcGVha2VycyA9IFtdO1xyXG4gICAgICAgICAgaWYgKHNlc3Npb24uc3BlYWtlck5hbWVzKSB7XHJcbiAgICAgICAgICAgIHNlc3Npb24uc3BlYWtlck5hbWVzLmZvckVhY2goKHNwZWFrZXJOYW1lOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBzcGVha2VyID0gdGhpcy5kYXRhLnNwZWFrZXJzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAoczogYW55KSA9PiBzLm5hbWUgPT09IHNwZWFrZXJOYW1lXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBpZiAoc3BlYWtlcikge1xyXG4gICAgICAgICAgICAgICAgc2Vzc2lvbi5zcGVha2Vycy5wdXNoKHNwZWFrZXIpO1xyXG4gICAgICAgICAgICAgICAgc3BlYWtlci5zZXNzaW9ucyA9IHNwZWFrZXIuc2Vzc2lvbnMgfHwgW107XHJcbiAgICAgICAgICAgICAgICBzcGVha2VyLnNlc3Npb25zLnB1c2goc2Vzc2lvbik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGltZWxpbmUoXHJcbiAgICBkYXlJbmRleDogbnVtYmVyLFxyXG4gICAgcXVlcnlUZXh0ID0gJycsXHJcbiAgICBleGNsdWRlVHJhY2tzOiBhbnlbXSA9IFtdLFxyXG4gICAgc2VnbWVudCA9ICdhbGwnXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gdGhpcy5sb2FkKCkucGlwZShcclxuICAgICAgbWFwKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICBjb25zdCBkYXkgPSBkYXRhLnNjaGVkdWxlW2RheUluZGV4XTtcclxuICAgICAgICBkYXkuc2hvd25TZXNzaW9ucyA9IDA7XHJcblxyXG4gICAgICAgIHF1ZXJ5VGV4dCA9IHF1ZXJ5VGV4dC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyx8XFwufC0vZywgJyAnKTtcclxuICAgICAgICBjb25zdCBxdWVyeVdvcmRzID0gcXVlcnlUZXh0LnNwbGl0KCcgJykuZmlsdGVyKHcgPT4gISF3LnRyaW0oKS5sZW5ndGgpO1xyXG5cclxuICAgICAgICBkYXkuZ3JvdXBzLmZvckVhY2goKGdyb3VwOiBhbnkpID0+IHtcclxuICAgICAgICAgIGdyb3VwLmhpZGUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgIGdyb3VwLnNlc3Npb25zLmZvckVhY2goKHNlc3Npb246IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjaGVjayBpZiB0aGlzIHNlc3Npb24gc2hvdWxkIHNob3cgb3Igbm90XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyU2Vzc2lvbihzZXNzaW9uLCBxdWVyeVdvcmRzLCBleGNsdWRlVHJhY2tzLCBzZWdtZW50KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghc2Vzc2lvbi5oaWRlKSB7XHJcbiAgICAgICAgICAgICAgLy8gaWYgdGhpcyBzZXNzaW9uIGlzIG5vdCBoaWRkZW4gdGhlbiB0aGlzIGdyb3VwIHNob3VsZCBzaG93XHJcbiAgICAgICAgICAgICAgZ3JvdXAuaGlkZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIGRheS5zaG93blNlc3Npb25zKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZGF5O1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGZpbHRlclNlc3Npb24oXHJcbiAgICBzZXNzaW9uOiBhbnksXHJcbiAgICBxdWVyeVdvcmRzOiBzdHJpbmdbXSxcclxuICAgIGV4Y2x1ZGVUcmFja3M6IGFueVtdLFxyXG4gICAgc2VnbWVudDogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICBsZXQgbWF0Y2hlc1F1ZXJ5VGV4dCA9IGZhbHNlO1xyXG4gICAgaWYgKHF1ZXJ5V29yZHMubGVuZ3RoKSB7XHJcbiAgICAgIC8vIG9mIGFueSBxdWVyeSB3b3JkIGlzIGluIHRoZSBzZXNzaW9uIG5hbWUgdGhhbiBpdCBwYXNzZXMgdGhlIHF1ZXJ5IHRlc3RcclxuICAgICAgcXVlcnlXb3Jkcy5mb3JFYWNoKChxdWVyeVdvcmQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGlmIChzZXNzaW9uLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHF1ZXJ5V29yZCkgPiAtMSkge1xyXG4gICAgICAgICAgbWF0Y2hlc1F1ZXJ5VGV4dCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGlmIHRoZXJlIGFyZSBubyBxdWVyeSB3b3JkcyB0aGVuIHRoaXMgc2Vzc2lvbiBwYXNzZXMgdGhlIHF1ZXJ5IHRlc3RcclxuICAgICAgbWF0Y2hlc1F1ZXJ5VGV4dCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgYW55IG9mIHRoZSBzZXNzaW9ucyB0cmFja3MgYXJlIG5vdCBpbiB0aGVcclxuICAgIC8vIGV4Y2x1ZGUgdHJhY2tzIHRoZW4gdGhpcyBzZXNzaW9uIHBhc3NlcyB0aGUgdHJhY2sgdGVzdFxyXG4gICAgbGV0IG1hdGNoZXNUcmFja3MgPSBmYWxzZTtcclxuICAgIHNlc3Npb24udHJhY2tzLmZvckVhY2goKHRyYWNrTmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgIGlmIChleGNsdWRlVHJhY2tzLmluZGV4T2YodHJhY2tOYW1lKSA9PT0gLTEpIHtcclxuICAgICAgICBtYXRjaGVzVHJhY2tzID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gaWYgdGhlIHNlZ21lbnQgaXMgJ2Zhdm9yaXRlcycsIGJ1dCBzZXNzaW9uIGlzIG5vdCBhIHVzZXIgZmF2b3JpdGVcclxuICAgIC8vIHRoZW4gdGhpcyBzZXNzaW9uIGRvZXMgbm90IHBhc3MgdGhlIHNlZ21lbnQgdGVzdFxyXG4gICAgbGV0IG1hdGNoZXNTZWdtZW50ID0gZmFsc2U7XHJcbiAgICBpZiAoc2VnbWVudCA9PT0gJ2Zhdm9yaXRlcycpIHtcclxuICAgICAgaWYgKHRoaXMudXNlci5oYXNGYXZvcml0ZShzZXNzaW9uLm5hbWUpKSB7XHJcbiAgICAgICAgbWF0Y2hlc1NlZ21lbnQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtYXRjaGVzU2VnbWVudCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYWxsIHRlc3RzIG11c3QgYmUgdHJ1ZSBpZiBpdCBzaG91bGQgbm90IGJlIGhpZGRlblxyXG4gICAgc2Vzc2lvbi5oaWRlID0gIShtYXRjaGVzUXVlcnlUZXh0ICYmIG1hdGNoZXNUcmFja3MgJiYgbWF0Y2hlc1NlZ21lbnQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3BlYWtlcnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5sb2FkKCkucGlwZShcclxuICAgICAgbWFwKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4gZGF0YS5zcGVha2Vycy5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgYU5hbWUgPSBhLm5hbWUuc3BsaXQoJyAnKS5wb3AoKTtcclxuICAgICAgICAgIGNvbnN0IGJOYW1lID0gYi5uYW1lLnNwbGl0KCcgJykucG9wKCk7XHJcbiAgICAgICAgICByZXR1cm4gYU5hbWUubG9jYWxlQ29tcGFyZShiTmFtZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0VHJhY2tzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubG9hZCgpLnBpcGUoXHJcbiAgICAgIG1hcCgoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGEudHJhY2tzLnNvcnQoKTtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXRNYXAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5sb2FkKCkucGlwZShcclxuICAgICAgbWFwKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4gZGF0YS5tYXA7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiQ29uZmlnIiwiTW9kYWxDb250cm9sbGVyIiwiTmF2UGFyYW1zIiwiQ29uZmVyZW5jZURhdGEiLCJpMCIsIsm1ybVlbGVtZW50U3RhcnQiLCLJtcm1bGlzdGVuZXIiLCJTY2hlZHVsZUZpbHRlclBhZ2VfaW9uX2J1dHRvbl8zX1RlbXBsYXRlX2lvbl9idXR0b25fY2xpY2tfMF9saXN0ZW5lciIsIsm1ybVyZXN0b3JlVmlldyIsIl9yNSIsImN0eF9yNCIsIsm1ybVuZXh0Q29udGV4dCIsIsm1ybVyZXNldFZpZXciLCJkaXNtaXNzIiwiybXJtXRleHQiLCLJtcm1ZWxlbWVudEVuZCIsIlNjaGVkdWxlRmlsdGVyUGFnZV9pb25fYnV0dG9uXzRfVGVtcGxhdGVfaW9uX2J1dHRvbl9jbGlja18wX2xpc3RlbmVyIiwiX3I3IiwiY3R4X3I2Iiwic2VsZWN0QWxsIiwiybXJtWVsZW1lbnQiLCLJtcm1cHJvcGVydHkiLCJ0cmFja19yOCIsImljb24iLCLJtcm1dGVtcGxhdGUiLCJTY2hlZHVsZUZpbHRlclBhZ2VfaW9uX2l0ZW1fMTRfaW9uX2ljb25fMl9UZW1wbGF0ZSIsIlNjaGVkdWxlRmlsdGVyUGFnZV9pb25faXRlbV8xNF9UZW1wbGF0ZV9pb25fY2hlY2tib3hfbmdNb2RlbENoYW5nZV8zX2xpc3RlbmVyIiwiJGV2ZW50IiwicmVzdG9yZWRDdHgiLCJfcjEyIiwiJGltcGxpY2l0IiwiaXNDaGVja2VkIiwiybXJtWF0dHJpYnV0ZSIsIsm1ybVwaXBlQmluZDEiLCJuYW1lIiwiybXJtWFkdmFuY2UiLCJjdHhfcjIiLCJpb3MiLCLJtcm1dGV4dEludGVycG9sYXRlMSIsIlNjaGVkdWxlRmlsdGVyUGFnZV9pb25fZm9vdGVyXzE1X1RlbXBsYXRlX2lvbl9idXR0b25fY2xpY2tfM19saXN0ZW5lciIsIl9yMTQiLCJjdHhfcjEzIiwiU2NoZWR1bGVGaWx0ZXJQYWdlX2lvbl9mb290ZXJfMTVfVGVtcGxhdGVfaW9uX2J1dHRvbl9jbGlja182X2xpc3RlbmVyIiwiY3R4X3IxNSIsIlNjaGVkdWxlRmlsdGVyUGFnZSIsImNvbnN0cnVjdG9yIiwiY29uZkRhdGEiLCJjb25maWciLCJtb2RhbEN0cmwiLCJuYXZQYXJhbXMiLCJ0cmFja3MiLCJpb25WaWV3V2lsbEVudGVyIiwiZ2V0IiwiZXhjbHVkZWRUcmFja05hbWVzIiwiZ2V0VHJhY2tzIiwic3Vic2NyaWJlIiwiZm9yRWFjaCIsInRyYWNrIiwicHVzaCIsImluZGV4T2YiLCJjaGVjayIsImFwcGx5RmlsdGVycyIsImZpbHRlciIsImMiLCJtYXAiLCJkYXRhIiwiybXJtWRpcmVjdGl2ZUluamVjdCIsImkxIiwiaTIiLCJzZWxlY3RvcnMiLCJkZWNscyIsInZhcnMiLCJjb25zdHMiLCJ0ZW1wbGF0ZSIsIlNjaGVkdWxlRmlsdGVyUGFnZV9UZW1wbGF0ZSIsInJmIiwiY3R4IiwiU2NoZWR1bGVGaWx0ZXJQYWdlX2lvbl9idXR0b25fM19UZW1wbGF0ZSIsIlNjaGVkdWxlRmlsdGVyUGFnZV9pb25fYnV0dG9uXzRfVGVtcGxhdGUiLCJTY2hlZHVsZUZpbHRlclBhZ2VfVGVtcGxhdGVfaW9uX2J1dHRvbl9jbGlja184X2xpc3RlbmVyIiwiU2NoZWR1bGVGaWx0ZXJQYWdlX2lvbl9pdGVtXzE0X1RlbXBsYXRlIiwiU2NoZWR1bGVGaWx0ZXJQYWdlX2lvbl9mb290ZXJfMTVfVGVtcGxhdGUiLCJSb3V0ZXJNb2R1bGUiLCJTY2hlZHVsZVBhZ2UiLCJyb3V0ZXMiLCJwYXRoIiwiY29tcG9uZW50IiwiU2NoZWR1bGVQYWdlUm91dGluZ01vZHVsZSIsImZvckNoaWxkIiwiaW1wb3J0cyIsImV4cG9ydHMiLCJDb21tb25Nb2R1bGUiLCJGb3Jtc01vZHVsZSIsIklvbmljTW9kdWxlIiwiU2NoZWR1bGVNb2R1bGUiLCJkZWNsYXJhdGlvbnMiLCJSb3V0ZXIiLCJBbGVydENvbnRyb2xsZXIiLCJJb25MaXN0IiwiSW9uUm91dGVyT3V0bGV0IiwiTG9hZGluZ0NvbnRyb2xsZXIiLCJUb2FzdENvbnRyb2xsZXIiLCJVc2VyRGF0YSIsIlNjaGVkdWxlUGFnZV9pb25fc2VnbWVudF8zX1RlbXBsYXRlX2lvbl9zZWdtZW50X25nTW9kZWxDaGFuZ2VfMF9saXN0ZW5lciIsIl9yMTEiLCJjdHhfcjEwIiwic2VnbWVudCIsIlNjaGVkdWxlUGFnZV9pb25fc2VnbWVudF8zX1RlbXBsYXRlX2lvbl9zZWdtZW50X2lvbkNoYW5nZV8wX2xpc3RlbmVyIiwiY3R4X3IxMiIsInVwZGF0ZVNjaGVkdWxlIiwiY3R4X3IxIiwiU2NoZWR1bGVQYWdlX2lvbl9zZWFyY2hiYXJfNV9UZW1wbGF0ZV9pb25fc2VhcmNoYmFyX25nTW9kZWxDaGFuZ2VfMF9saXN0ZW5lciIsInF1ZXJ5VGV4dCIsIlNjaGVkdWxlUGFnZV9pb25fc2VhcmNoYmFyXzVfVGVtcGxhdGVfaW9uX3NlYXJjaGJhcl9pb25JbnB1dF8wX2xpc3RlbmVyIiwiU2NoZWR1bGVQYWdlX2lvbl9zZWFyY2hiYXJfNV9UZW1wbGF0ZV9pb25fc2VhcmNoYmFyX2lvbkNhbmNlbF8wX2xpc3RlbmVyIiwiY3R4X3IxNiIsInNob3dTZWFyY2hiYXIiLCJjdHhfcjMiLCJTY2hlZHVsZVBhZ2VfaW9uX2J1dHRvbl83X1RlbXBsYXRlX2lvbl9idXR0b25fY2xpY2tfMF9saXN0ZW5lciIsIl9yMTgiLCJjdHhfcjE3IiwiU2NoZWR1bGVQYWdlX2lvbl9idXR0b25fOF9UZW1wbGF0ZV9pb25fYnV0dG9uX2NsaWNrXzBfbGlzdGVuZXIiLCJfcjIyIiwiY3R4X3IyMSIsInByZXNlbnRGaWx0ZXIiLCJTY2hlZHVsZVBhZ2VfaW9uX2J1dHRvbl84X3NwYW5fMV9UZW1wbGF0ZSIsIlNjaGVkdWxlUGFnZV9pb25fYnV0dG9uXzhfc3Bhbl8yX1RlbXBsYXRlIiwiY3R4X3I1IiwiU2NoZWR1bGVQYWdlX2lvbl90b29sYmFyXzlfVGVtcGxhdGVfaW9uX3NlZ21lbnRfbmdNb2RlbENoYW5nZV8xX2xpc3RlbmVyIiwiX3IyNCIsImN0eF9yMjMiLCJTY2hlZHVsZVBhZ2VfaW9uX3Rvb2xiYXJfOV9UZW1wbGF0ZV9pb25fc2VnbWVudF9pb25DaGFuZ2VfMV9saXN0ZW5lciIsImN0eF9yMjUiLCJTY2hlZHVsZVBhZ2VfaW9uX2l0ZW1fZ3JvdXBfMTlfaW9uX2l0ZW1fc2xpZGluZ180X2lvbl9pdGVtX29wdGlvbl8xMF9UZW1wbGF0ZV9pb25faXRlbV9vcHRpb25fY2xpY2tfMF9saXN0ZW5lciIsIl9yMzMiLCJzZXNzaW9uX3IyOCIsIl9yMjkiLCLJtcm1cmVmZXJlbmNlIiwiY3R4X3IzMiIsImFkZEZhdm9yaXRlIiwiU2NoZWR1bGVQYWdlX2lvbl9pdGVtX2dyb3VwXzE5X2lvbl9pdGVtX3NsaWRpbmdfNF9pb25faXRlbV9vcHRpb25fMTFfVGVtcGxhdGVfaW9uX2l0ZW1fb3B0aW9uX2NsaWNrXzBfbGlzdGVuZXIiLCJfcjM2IiwiY3R4X3IzNSIsInJlbW92ZUZhdm9yaXRlIiwiU2NoZWR1bGVQYWdlX2lvbl9pdGVtX2dyb3VwXzE5X2lvbl9pdGVtX3NsaWRpbmdfNF9pb25faXRlbV9vcHRpb25fMTBfVGVtcGxhdGUiLCJTY2hlZHVsZVBhZ2VfaW9uX2l0ZW1fZ3JvdXBfMTlfaW9uX2l0ZW1fc2xpZGluZ180X2lvbl9pdGVtX29wdGlvbl8xMV9UZW1wbGF0ZSIsImhpZGUiLCLJtcm1cHJvcGVydHlJbnRlcnBvbGF0ZTEiLCJpZCIsIsm1ybV0ZXh0SW50ZXJwb2xhdGUiLCLJtcm1dGV4dEludGVycG9sYXRlMyIsInRpbWVTdGFydCIsInRpbWVFbmQiLCJsb2NhdGlvbiIsImN0eF9yMjciLCJTY2hlZHVsZVBhZ2VfaW9uX2l0ZW1fZ3JvdXBfMTlfaW9uX2l0ZW1fc2xpZGluZ180X1RlbXBsYXRlIiwiZ3JvdXBfcjI2IiwidGltZSIsInNlc3Npb25zIiwiYWxlcnRDdHJsIiwibG9hZGluZ0N0cmwiLCJyb3V0ZXIiLCJyb3V0ZXJPdXRsZXQiLCJ0b2FzdEN0cmwiLCJ1c2VyIiwiZGF5SW5kZXgiLCJleGNsdWRlVHJhY2tzIiwic2hvd25TZXNzaW9ucyIsImdyb3VwcyIsIm5nT25Jbml0Iiwic2NoZWR1bGVMaXN0IiwiY2xvc2VTbGlkaW5nSXRlbXMiLCJnZXRUaW1lbGluZSIsIl90aGlzIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJtb2RhbCIsImNyZWF0ZSIsInByZXNlbnRpbmdFbGVtZW50IiwibmF0aXZlRWwiLCJjb21wb25lbnRQcm9wcyIsImV4Y2x1ZGVkVHJhY2tzIiwicHJlc2VudCIsIm9uV2lsbERpc21pc3MiLCJzbGlkaW5nSXRlbSIsInNlc3Npb25EYXRhIiwiX3RoaXMyIiwiaGFzRmF2b3JpdGUiLCJjbG9zZSIsInRvYXN0IiwiaGVhZGVyIiwiZHVyYXRpb24iLCJidXR0b25zIiwidGV4dCIsInJvbGUiLCJ0aXRsZSIsIl90aGlzMyIsImFsZXJ0IiwibWVzc2FnZSIsImhhbmRsZXIiLCJvcGVuU29jaWFsIiwibmV0d29yayIsImZhYiIsIl90aGlzNCIsImxvYWRpbmciLCJNYXRoIiwicmFuZG9tIiwiaTMiLCJpNCIsInZpZXdRdWVyeSIsIlNjaGVkdWxlUGFnZV9RdWVyeSIsIlNjaGVkdWxlUGFnZV9pb25fYnV0dG9uc18yX1RlbXBsYXRlIiwiU2NoZWR1bGVQYWdlX2lvbl9zZWdtZW50XzNfVGVtcGxhdGUiLCJTY2hlZHVsZVBhZ2VfaW9uX3RpdGxlXzRfVGVtcGxhdGUiLCJTY2hlZHVsZVBhZ2VfaW9uX3NlYXJjaGJhcl81X1RlbXBsYXRlIiwiU2NoZWR1bGVQYWdlX2lvbl9idXR0b25fN19UZW1wbGF0ZSIsIlNjaGVkdWxlUGFnZV9pb25fYnV0dG9uXzhfVGVtcGxhdGUiLCJTY2hlZHVsZVBhZ2VfaW9uX3Rvb2xiYXJfOV9UZW1wbGF0ZSIsIlNjaGVkdWxlUGFnZV9UZW1wbGF0ZV9pb25fc2VhcmNoYmFyX25nTW9kZWxDaGFuZ2VfMTZfbGlzdGVuZXIiLCJTY2hlZHVsZVBhZ2VfVGVtcGxhdGVfaW9uX3NlYXJjaGJhcl9pb25JbnB1dF8xNl9saXN0ZW5lciIsIlNjaGVkdWxlUGFnZV9pb25faXRlbV9ncm91cF8xOV9UZW1wbGF0ZSIsIlNjaGVkdWxlUGFnZV9UZW1wbGF0ZV9pb25fZmFiX2J1dHRvbl9jbGlja18yN19saXN0ZW5lciIsIl9yMzgiLCJfcjkiLCJTY2hlZHVsZVBhZ2VfVGVtcGxhdGVfaW9uX2ZhYl9idXR0b25fY2xpY2tfMjlfbGlzdGVuZXIiLCJTY2hlZHVsZVBhZ2VfVGVtcGxhdGVfaW9uX2ZhYl9idXR0b25fY2xpY2tfMzFfbGlzdGVuZXIiLCJTY2hlZHVsZVBhZ2VfVGVtcGxhdGVfaW9uX2ZhYl9idXR0b25fY2xpY2tfMzNfbGlzdGVuZXIiLCJIdHRwQ2xpZW50Iiwib2YiLCJodHRwIiwibG9hZCIsInBpcGUiLCJwcm9jZXNzRGF0YSIsInNjaGVkdWxlIiwiZGF5IiwiZ3JvdXAiLCJzZXNzaW9uIiwic3BlYWtlcnMiLCJzcGVha2VyTmFtZXMiLCJzcGVha2VyTmFtZSIsInNwZWFrZXIiLCJmaW5kIiwicyIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsInF1ZXJ5V29yZHMiLCJzcGxpdCIsInciLCJ0cmltIiwibGVuZ3RoIiwiZmlsdGVyU2Vzc2lvbiIsIm1hdGNoZXNRdWVyeVRleHQiLCJxdWVyeVdvcmQiLCJtYXRjaGVzVHJhY2tzIiwidHJhY2tOYW1lIiwibWF0Y2hlc1NlZ21lbnQiLCJnZXRTcGVha2VycyIsInNvcnQiLCJhIiwiYiIsImFOYW1lIiwicG9wIiwiYk5hbWUiLCJsb2NhbGVDb21wYXJlIiwiZ2V0TWFwIiwiybXJtWluamVjdCIsImZhY3RvcnkiLCLJtWZhYyIsInByb3ZpZGVkSW4iXSwic291cmNlUm9vdCI6IndlYnBhY2s6Ly8vIiwieF9nb29nbGVfaWdub3JlTGlzdCI6W119