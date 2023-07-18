"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["polyfills"],{

/***/ 55321:
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js */ 76657);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_0__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */
// BROWSER POLYFILLS
// ---------------------------------------------------------------------------------
// IE9, IE10 and IE11 requires all of the following polyfills.
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for the Reflect API. */
// import 'core-js/es6/reflect';
// Evergreen browsers require these.
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.
// Required to support Web Animations `@angular/platform-browser/animations`.
// Zone JS is required by Angular itself.
 // Included with Angular CLI.
// APPLICATION IMPORTS
// ------------------------------------------------------------------------
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.
/**
 * Need to import at least one locale-data with intl.
 */
// import 'intl/locale-data/jsonp/en';

/***/ }),

/***/ 76657:
/*!***********************************************!*\
  !*** ./node_modules/zone.js/fesm2015/zone.js ***!
  \***********************************************/
/***/ (() => {



/**
 * @license Angular v<unknown>
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */
(function (global) {
  const performance = global['performance'];
  function mark(name) {
    performance && performance['mark'] && performance['mark'](name);
  }
  function performanceMeasure(name, label) {
    performance && performance['measure'] && performance['measure'](name, label);
  }
  mark('Zone');
  // Initialize before it's accessed below.
  // __Zone_symbol_prefix global can be used to override the default zone
  // symbol prefix with a custom one if needed.
  const symbolPrefix = global['__Zone_symbol_prefix'] || '__zone_symbol__';
  function __symbol__(name) {
    return symbolPrefix + name;
  }
  const checkDuplicate = global[__symbol__('forceDuplicateZoneCheck')] === true;
  if (global['Zone']) {
    // if global['Zone'] already exists (maybe zone.js was already loaded or
    // some other lib also registered a global object named Zone), we may need
    // to throw an error, but sometimes user may not want this error.
    // For example,
    // we have two web pages, page1 includes zone.js, page2 doesn't.
    // and the 1st time user load page1 and page2, everything work fine,
    // but when user load page2 again, error occurs because global['Zone'] already exists.
    // so we add a flag to let user choose whether to throw this error or not.
    // By default, if existing Zone is from zone.js, we will not throw the error.
    if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
      throw new Error('Zone already loaded.');
    } else {
      return global['Zone'];
    }
  }
  class Zone {
    static assertZonePatched() {
      if (global['Promise'] !== patches['ZoneAwarePromise']) {
        throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' + 'has been overwritten.\n' + 'Most likely cause is that a Promise polyfill has been loaded ' + 'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' + 'If you must load one, do so before loading zone.js.)');
      }
    }
    static get root() {
      let zone = Zone.current;
      while (zone.parent) {
        zone = zone.parent;
      }
      return zone;
    }
    static get current() {
      return _currentZoneFrame.zone;
    }
    static get currentTask() {
      return _currentTask;
    }
    // tslint:disable-next-line:require-internal-with-underscore
    static __load_patch(name, fn, ignoreDuplicate = false) {
      if (patches.hasOwnProperty(name)) {
        // `checkDuplicate` option is defined from global variable
        // so it works for all modules.
        // `ignoreDuplicate` can work for the specified module
        if (!ignoreDuplicate && checkDuplicate) {
          throw Error('Already loaded patch: ' + name);
        }
      } else if (!global['__Zone_disable_' + name]) {
        const perfName = 'Zone:' + name;
        mark(perfName);
        patches[name] = fn(global, Zone, _api);
        performanceMeasure(perfName, perfName);
      }
    }
    get parent() {
      return this._parent;
    }
    get name() {
      return this._name;
    }
    constructor(parent, zoneSpec) {
      this._parent = parent;
      this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
      this._properties = zoneSpec && zoneSpec.properties || {};
      this._zoneDelegate = new _ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
    }
    get(key) {
      const zone = this.getZoneWith(key);
      if (zone) return zone._properties[key];
    }
    getZoneWith(key) {
      let current = this;
      while (current) {
        if (current._properties.hasOwnProperty(key)) {
          return current;
        }
        current = current._parent;
      }
      return null;
    }
    fork(zoneSpec) {
      if (!zoneSpec) throw new Error('ZoneSpec required!');
      return this._zoneDelegate.fork(this, zoneSpec);
    }
    wrap(callback, source) {
      if (typeof callback !== 'function') {
        throw new Error('Expecting function got: ' + callback);
      }
      const _callback = this._zoneDelegate.intercept(this, callback, source);
      const zone = this;
      return function () {
        return zone.runGuarded(_callback, this, arguments, source);
      };
    }
    run(callback, applyThis, applyArgs, source) {
      _currentZoneFrame = {
        parent: _currentZoneFrame,
        zone: this
      };
      try {
        return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
      } finally {
        _currentZoneFrame = _currentZoneFrame.parent;
      }
    }
    runGuarded(callback, applyThis = null, applyArgs, source) {
      _currentZoneFrame = {
        parent: _currentZoneFrame,
        zone: this
      };
      try {
        try {
          return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
        } catch (error) {
          if (this._zoneDelegate.handleError(this, error)) {
            throw error;
          }
        }
      } finally {
        _currentZoneFrame = _currentZoneFrame.parent;
      }
    }
    runTask(task, applyThis, applyArgs) {
      if (task.zone != this) {
        throw new Error('A task can only be run in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
      }
      // https://github.com/angular/zone.js/issues/778, sometimes eventTask
      // will run in notScheduled(canceled) state, we should not try to
      // run such kind of task but just return
      if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
        return;
      }
      const reEntryGuard = task.state != running;
      reEntryGuard && task._transitionTo(running, scheduled);
      task.runCount++;
      const previousTask = _currentTask;
      _currentTask = task;
      _currentZoneFrame = {
        parent: _currentZoneFrame,
        zone: this
      };
      try {
        if (task.type == macroTask && task.data && !task.data.isPeriodic) {
          task.cancelFn = undefined;
        }
        try {
          return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
        } catch (error) {
          if (this._zoneDelegate.handleError(this, error)) {
            throw error;
          }
        }
      } finally {
        // if the task's state is notScheduled or unknown, then it has already been cancelled
        // we should not reset the state to scheduled
        if (task.state !== notScheduled && task.state !== unknown) {
          if (task.type == eventTask || task.data && task.data.isPeriodic) {
            reEntryGuard && task._transitionTo(scheduled, running);
          } else {
            task.runCount = 0;
            this._updateTaskCount(task, -1);
            reEntryGuard && task._transitionTo(notScheduled, running, notScheduled);
          }
        }
        _currentZoneFrame = _currentZoneFrame.parent;
        _currentTask = previousTask;
      }
    }
    scheduleTask(task) {
      if (task.zone && task.zone !== this) {
        // check if the task was rescheduled, the newZone
        // should not be the children of the original zone
        let newZone = this;
        while (newZone) {
          if (newZone === task.zone) {
            throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${task.zone.name}`);
          }
          newZone = newZone.parent;
        }
      }
      task._transitionTo(scheduling, notScheduled);
      const zoneDelegates = [];
      task._zoneDelegates = zoneDelegates;
      task._zone = this;
      try {
        task = this._zoneDelegate.scheduleTask(this, task);
      } catch (err) {
        // should set task's state to unknown when scheduleTask throw error
        // because the err may from reschedule, so the fromState maybe notScheduled
        task._transitionTo(unknown, scheduling, notScheduled);
        // TODO: @JiaLiPassion, should we check the result from handleError?
        this._zoneDelegate.handleError(this, err);
        throw err;
      }
      if (task._zoneDelegates === zoneDelegates) {
        // we have to check because internally the delegate can reschedule the task.
        this._updateTaskCount(task, 1);
      }
      if (task.state == scheduling) {
        task._transitionTo(scheduled, scheduling);
      }
      return task;
    }
    scheduleMicroTask(source, callback, data, customSchedule) {
      return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
    }
    scheduleMacroTask(source, callback, data, customSchedule, customCancel) {
      return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
    }
    scheduleEventTask(source, callback, data, customSchedule, customCancel) {
      return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
    }
    cancelTask(task) {
      if (task.zone != this) throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
      if (task.state !== scheduled && task.state !== running) {
        return;
      }
      task._transitionTo(canceling, scheduled, running);
      try {
        this._zoneDelegate.cancelTask(this, task);
      } catch (err) {
        // if error occurs when cancelTask, transit the state to unknown
        task._transitionTo(unknown, canceling);
        this._zoneDelegate.handleError(this, err);
        throw err;
      }
      this._updateTaskCount(task, -1);
      task._transitionTo(notScheduled, canceling);
      task.runCount = 0;
      return task;
    }
    _updateTaskCount(task, count) {
      const zoneDelegates = task._zoneDelegates;
      if (count == -1) {
        task._zoneDelegates = null;
      }
      for (let i = 0; i < zoneDelegates.length; i++) {
        zoneDelegates[i]._updateTaskCount(task.type, count);
      }
    }
  }
  // tslint:disable-next-line:require-internal-with-underscore
  Zone.__symbol__ = __symbol__;
  const DELEGATE_ZS = {
    name: '',
    onHasTask: (delegate, _, target, hasTaskState) => delegate.hasTask(target, hasTaskState),
    onScheduleTask: (delegate, _, target, task) => delegate.scheduleTask(target, task),
    onInvokeTask: (delegate, _, target, task, applyThis, applyArgs) => delegate.invokeTask(target, task, applyThis, applyArgs),
    onCancelTask: (delegate, _, target, task) => delegate.cancelTask(target, task)
  };
  class _ZoneDelegate {
    constructor(zone, parentDelegate, zoneSpec) {
      this._taskCounts = {
        'microTask': 0,
        'macroTask': 0,
        'eventTask': 0
      };
      this.zone = zone;
      this._parentDelegate = parentDelegate;
      this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
      this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
      this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate._forkCurrZone);
      this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
      this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
      this._interceptCurrZone = zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate._interceptCurrZone);
      this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
      this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
      this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate._invokeCurrZone);
      this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
      this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
      this._handleErrorCurrZone = zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate._handleErrorCurrZone);
      this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
      this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
      this._scheduleTaskCurrZone = zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate._scheduleTaskCurrZone);
      this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
      this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
      this._invokeTaskCurrZone = zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate._invokeTaskCurrZone);
      this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
      this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
      this._cancelTaskCurrZone = zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate._cancelTaskCurrZone);
      this._hasTaskZS = null;
      this._hasTaskDlgt = null;
      this._hasTaskDlgtOwner = null;
      this._hasTaskCurrZone = null;
      const zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
      const parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
      if (zoneSpecHasTask || parentHasTask) {
        // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
        // a case all task related interceptors must go through this ZD. We can't short circuit it.
        this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
        this._hasTaskDlgt = parentDelegate;
        this._hasTaskDlgtOwner = this;
        this._hasTaskCurrZone = zone;
        if (!zoneSpec.onScheduleTask) {
          this._scheduleTaskZS = DELEGATE_ZS;
          this._scheduleTaskDlgt = parentDelegate;
          this._scheduleTaskCurrZone = this.zone;
        }
        if (!zoneSpec.onInvokeTask) {
          this._invokeTaskZS = DELEGATE_ZS;
          this._invokeTaskDlgt = parentDelegate;
          this._invokeTaskCurrZone = this.zone;
        }
        if (!zoneSpec.onCancelTask) {
          this._cancelTaskZS = DELEGATE_ZS;
          this._cancelTaskDlgt = parentDelegate;
          this._cancelTaskCurrZone = this.zone;
        }
      }
    }
    fork(targetZone, zoneSpec) {
      return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) : new Zone(targetZone, zoneSpec);
    }
    intercept(targetZone, callback, source) {
      return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) : callback;
    }
    invoke(targetZone, callback, applyThis, applyArgs, source) {
      return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) : callback.apply(applyThis, applyArgs);
    }
    handleError(targetZone, error) {
      return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) : true;
    }
    scheduleTask(targetZone, task) {
      let returnTask = task;
      if (this._scheduleTaskZS) {
        if (this._hasTaskZS) {
          returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
        }
        // clang-format off
        returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
        // clang-format on
        if (!returnTask) returnTask = task;
      } else {
        if (task.scheduleFn) {
          task.scheduleFn(task);
        } else if (task.type == microTask) {
          scheduleMicroTask(task);
        } else {
          throw new Error('Task is missing scheduleFn.');
        }
      }
      return returnTask;
    }
    invokeTask(targetZone, task, applyThis, applyArgs) {
      return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) : task.callback.apply(applyThis, applyArgs);
    }
    cancelTask(targetZone, task) {
      let value;
      if (this._cancelTaskZS) {
        value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
      } else {
        if (!task.cancelFn) {
          throw Error('Task is not cancelable');
        }
        value = task.cancelFn(task);
      }
      return value;
    }
    hasTask(targetZone, isEmpty) {
      // hasTask should not throw error so other ZoneDelegate
      // can still trigger hasTask callback
      try {
        this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
      } catch (err) {
        this.handleError(targetZone, err);
      }
    }
    // tslint:disable-next-line:require-internal-with-underscore
    _updateTaskCount(type, count) {
      const counts = this._taskCounts;
      const prev = counts[type];
      const next = counts[type] = prev + count;
      if (next < 0) {
        throw new Error('More tasks executed then were scheduled.');
      }
      if (prev == 0 || next == 0) {
        const isEmpty = {
          microTask: counts['microTask'] > 0,
          macroTask: counts['macroTask'] > 0,
          eventTask: counts['eventTask'] > 0,
          change: type
        };
        this.hasTask(this.zone, isEmpty);
      }
    }
  }
  class ZoneTask {
    constructor(type, source, callback, options, scheduleFn, cancelFn) {
      // tslint:disable-next-line:require-internal-with-underscore
      this._zone = null;
      this.runCount = 0;
      // tslint:disable-next-line:require-internal-with-underscore
      this._zoneDelegates = null;
      // tslint:disable-next-line:require-internal-with-underscore
      this._state = 'notScheduled';
      this.type = type;
      this.source = source;
      this.data = options;
      this.scheduleFn = scheduleFn;
      this.cancelFn = cancelFn;
      if (!callback) {
        throw new Error('callback is not defined');
      }
      this.callback = callback;
      const self = this;
      // TODO: @JiaLiPassion options should have interface
      if (type === eventTask && options && options.useG) {
        this.invoke = ZoneTask.invokeTask;
      } else {
        this.invoke = function () {
          return ZoneTask.invokeTask.call(global, self, this, arguments);
        };
      }
    }
    static invokeTask(task, target, args) {
      if (!task) {
        task = this;
      }
      _numberOfNestedTaskFrames++;
      try {
        task.runCount++;
        return task.zone.runTask(task, target, args);
      } finally {
        if (_numberOfNestedTaskFrames == 1) {
          drainMicroTaskQueue();
        }
        _numberOfNestedTaskFrames--;
      }
    }
    get zone() {
      return this._zone;
    }
    get state() {
      return this._state;
    }
    cancelScheduleRequest() {
      this._transitionTo(notScheduled, scheduling);
    }
    // tslint:disable-next-line:require-internal-with-underscore
    _transitionTo(toState, fromState1, fromState2) {
      if (this._state === fromState1 || this._state === fromState2) {
        this._state = toState;
        if (toState == notScheduled) {
          this._zoneDelegates = null;
        }
      } else {
        throw new Error(`${this.type} '${this.source}': can not transition to '${toState}', expecting state '${fromState1}'${fromState2 ? ' or \'' + fromState2 + '\'' : ''}, was '${this._state}'.`);
      }
    }
    toString() {
      if (this.data && typeof this.data.handleId !== 'undefined') {
        return this.data.handleId.toString();
      } else {
        return Object.prototype.toString.call(this);
      }
    }
    // add toJSON method to prevent cyclic error when
    // call JSON.stringify(zoneTask)
    toJSON() {
      return {
        type: this.type,
        state: this.state,
        source: this.source,
        zone: this.zone.name,
        runCount: this.runCount
      };
    }
  }
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  ///  MICROTASK QUEUE
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  const symbolSetTimeout = __symbol__('setTimeout');
  const symbolPromise = __symbol__('Promise');
  const symbolThen = __symbol__('then');
  let _microTaskQueue = [];
  let _isDrainingMicrotaskQueue = false;
  let nativeMicroTaskQueuePromise;
  function nativeScheduleMicroTask(func) {
    if (!nativeMicroTaskQueuePromise) {
      if (global[symbolPromise]) {
        nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
      }
    }
    if (nativeMicroTaskQueuePromise) {
      let nativeThen = nativeMicroTaskQueuePromise[symbolThen];
      if (!nativeThen) {
        // native Promise is not patchable, we need to use `then` directly
        // issue 1078
        nativeThen = nativeMicroTaskQueuePromise['then'];
      }
      nativeThen.call(nativeMicroTaskQueuePromise, func);
    } else {
      global[symbolSetTimeout](func, 0);
    }
  }
  function scheduleMicroTask(task) {
    // if we are not running in any task, and there has not been anything scheduled
    // we must bootstrap the initial task creation by manually scheduling the drain
    if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
      // We are not running in Task, so we need to kickstart the microtask queue.
      nativeScheduleMicroTask(drainMicroTaskQueue);
    }
    task && _microTaskQueue.push(task);
  }
  function drainMicroTaskQueue() {
    if (!_isDrainingMicrotaskQueue) {
      _isDrainingMicrotaskQueue = true;
      while (_microTaskQueue.length) {
        const queue = _microTaskQueue;
        _microTaskQueue = [];
        for (let i = 0; i < queue.length; i++) {
          const task = queue[i];
          try {
            task.zone.runTask(task, null, null);
          } catch (error) {
            _api.onUnhandledError(error);
          }
        }
      }
      _api.microtaskDrainDone();
      _isDrainingMicrotaskQueue = false;
    }
  }
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  ///  BOOTSTRAP
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  const NO_ZONE = {
    name: 'NO ZONE'
  };
  const notScheduled = 'notScheduled',
    scheduling = 'scheduling',
    scheduled = 'scheduled',
    running = 'running',
    canceling = 'canceling',
    unknown = 'unknown';
  const microTask = 'microTask',
    macroTask = 'macroTask',
    eventTask = 'eventTask';
  const patches = {};
  const _api = {
    symbol: __symbol__,
    currentZoneFrame: () => _currentZoneFrame,
    onUnhandledError: noop,
    microtaskDrainDone: noop,
    scheduleMicroTask: scheduleMicroTask,
    showUncaughtError: () => !Zone[__symbol__('ignoreConsoleErrorUncaughtError')],
    patchEventTarget: () => [],
    patchOnProperties: noop,
    patchMethod: () => noop,
    bindArguments: () => [],
    patchThen: () => noop,
    patchMacroTask: () => noop,
    patchEventPrototype: () => noop,
    isIEOrEdge: () => false,
    getGlobalObjects: () => undefined,
    ObjectDefineProperty: () => noop,
    ObjectGetOwnPropertyDescriptor: () => undefined,
    ObjectCreate: () => undefined,
    ArraySlice: () => [],
    patchClass: () => noop,
    wrapWithCurrentZone: () => noop,
    filterProperties: () => [],
    attachOriginToPatched: () => noop,
    _redefineProperty: () => noop,
    patchCallbacks: () => noop,
    nativeScheduleMicroTask: nativeScheduleMicroTask
  };
  let _currentZoneFrame = {
    parent: null,
    zone: new Zone(null, null)
  };
  let _currentTask = null;
  let _numberOfNestedTaskFrames = 0;
  function noop() {}
  performanceMeasure('Zone', 'Zone');
  return global['Zone'] = Zone;
})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

/**
 * Suppress closure compiler errors about unknown 'Zone' variable
 * @fileoverview
 * @suppress {undefinedVars,globalThis,missingRequire}
 */
/// <reference types="node"/>
// issue #989, to reduce bundle size, use short name
/** Object.getOwnPropertyDescriptor */
const ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
/** Object.defineProperty */
const ObjectDefineProperty = Object.defineProperty;
/** Object.getPrototypeOf */
const ObjectGetPrototypeOf = Object.getPrototypeOf;
/** Object.create */
const ObjectCreate = Object.create;
/** Array.prototype.slice */
const ArraySlice = Array.prototype.slice;
/** addEventListener string const */
const ADD_EVENT_LISTENER_STR = 'addEventListener';
/** removeEventListener string const */
const REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
/** zoneSymbol addEventListener */
const ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
/** zoneSymbol removeEventListener */
const ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
/** true string const */
const TRUE_STR = 'true';
/** false string const */
const FALSE_STR = 'false';
/** Zone symbol prefix string const. */
const ZONE_SYMBOL_PREFIX = Zone.__symbol__('');
function wrapWithCurrentZone(callback, source) {
  return Zone.current.wrap(callback, source);
}
function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
  return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}
const zoneSymbol = Zone.__symbol__;
const isWindowExists = typeof window !== 'undefined';
const internalWindow = isWindowExists ? window : undefined;
const _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;
const REMOVE_ATTRIBUTE = 'removeAttribute';
function bindArguments(args, source) {
  for (let i = args.length - 1; i >= 0; i--) {
    if (typeof args[i] === 'function') {
      args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
    }
  }
  return args;
}
function patchPrototype(prototype, fnNames) {
  const source = prototype.constructor['name'];
  for (let i = 0; i < fnNames.length; i++) {
    const name = fnNames[i];
    const delegate = prototype[name];
    if (delegate) {
      const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name);
      if (!isPropertyWritable(prototypeDesc)) {
        continue;
      }
      prototype[name] = (delegate => {
        const patched = function () {
          return delegate.apply(this, bindArguments(arguments, source + '.' + name));
        };
        attachOriginToPatched(patched, delegate);
        return patched;
      })(delegate);
    }
  }
}
function isPropertyWritable(propertyDesc) {
  if (!propertyDesc) {
    return true;
  }
  if (propertyDesc.writable === false) {
    return false;
  }
  return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
}
const isWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
const isNode = !('nw' in _global) && typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]';
const isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
// we are in electron of nw, so we are both browser and nodejs
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
const isMix = typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]' && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
const zoneSymbolEventNames$1 = {};
const wrapFn = function (event) {
  // https://github.com/angular/zone.js/issues/911, in IE, sometimes
  // event will be undefined, so we need to use window.event
  event = event || _global.event;
  if (!event) {
    return;
  }
  let eventNameSymbol = zoneSymbolEventNames$1[event.type];
  if (!eventNameSymbol) {
    eventNameSymbol = zoneSymbolEventNames$1[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
  }
  const target = this || event.target || _global;
  const listener = target[eventNameSymbol];
  let result;
  if (isBrowser && target === internalWindow && event.type === 'error') {
    // window.onerror have different signature
    // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
    // and onerror callback will prevent default when callback return true
    const errorEvent = event;
    result = listener && listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);
    if (result === true) {
      event.preventDefault();
    }
  } else {
    result = listener && listener.apply(this, arguments);
    if (result != undefined && !result) {
      event.preventDefault();
    }
  }
  return result;
};
function patchProperty(obj, prop, prototype) {
  let desc = ObjectGetOwnPropertyDescriptor(obj, prop);
  if (!desc && prototype) {
    // when patch window object, use prototype to check prop exist or not
    const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
    if (prototypeDesc) {
      desc = {
        enumerable: true,
        configurable: true
      };
    }
  }
  // if the descriptor not exists or is not configurable
  // just return
  if (!desc || !desc.configurable) {
    return;
  }
  const onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');
  if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
    return;
  }
  // A property descriptor cannot have getter/setter and be writable
  // deleting the writable and value properties avoids this error:
  //
  // TypeError: property descriptors must not specify a value or be writable when a
  // getter or setter has been specified
  delete desc.writable;
  delete desc.value;
  const originalDescGet = desc.get;
  const originalDescSet = desc.set;
  // slice(2) cuz 'onclick' -> 'click', etc
  const eventName = prop.slice(2);
  let eventNameSymbol = zoneSymbolEventNames$1[eventName];
  if (!eventNameSymbol) {
    eventNameSymbol = zoneSymbolEventNames$1[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
  }
  desc.set = function (newValue) {
    // in some of windows's onproperty callback, this is undefined
    // so we need to check it
    let target = this;
    if (!target && obj === _global) {
      target = _global;
    }
    if (!target) {
      return;
    }
    const previousValue = target[eventNameSymbol];
    if (typeof previousValue === 'function') {
      target.removeEventListener(eventName, wrapFn);
    }
    // issue #978, when onload handler was added before loading zone.js
    // we should remove it with originalDescSet
    originalDescSet && originalDescSet.call(target, null);
    target[eventNameSymbol] = newValue;
    if (typeof newValue === 'function') {
      target.addEventListener(eventName, wrapFn, false);
    }
  };
  // The getter would return undefined for unassigned properties but the default value of an
  // unassigned property is null
  desc.get = function () {
    // in some of windows's onproperty callback, this is undefined
    // so we need to check it
    let target = this;
    if (!target && obj === _global) {
      target = _global;
    }
    if (!target) {
      return null;
    }
    const listener = target[eventNameSymbol];
    if (listener) {
      return listener;
    } else if (originalDescGet) {
      // result will be null when use inline event attribute,
      // such as <button onclick="func();">OK</button>
      // because the onclick function is internal raw uncompiled handler
      // the onclick will be evaluated when first time event was triggered or
      // the property is accessed, https://github.com/angular/zone.js/issues/525
      // so we should use original native get to retrieve the handler
      let value = originalDescGet.call(this);
      if (value) {
        desc.set.call(this, value);
        if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
          target.removeAttribute(prop);
        }
        return value;
      }
    }
    return null;
  };
  ObjectDefineProperty(obj, prop, desc);
  obj[onPropPatchedSymbol] = true;
}
function patchOnProperties(obj, properties, prototype) {
  if (properties) {
    for (let i = 0; i < properties.length; i++) {
      patchProperty(obj, 'on' + properties[i], prototype);
    }
  } else {
    const onProperties = [];
    for (const prop in obj) {
      if (prop.slice(0, 2) == 'on') {
        onProperties.push(prop);
      }
    }
    for (let j = 0; j < onProperties.length; j++) {
      patchProperty(obj, onProperties[j], prototype);
    }
  }
}
const originalInstanceKey = zoneSymbol('originalInstance');
// wrap some native API on `window`
function patchClass(className) {
  const OriginalClass = _global[className];
  if (!OriginalClass) return;
  // keep original class in global
  _global[zoneSymbol(className)] = OriginalClass;
  _global[className] = function () {
    const a = bindArguments(arguments, className);
    switch (a.length) {
      case 0:
        this[originalInstanceKey] = new OriginalClass();
        break;
      case 1:
        this[originalInstanceKey] = new OriginalClass(a[0]);
        break;
      case 2:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
        break;
      case 3:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
        break;
      case 4:
        this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
        break;
      default:
        throw new Error('Arg list too long.');
    }
  };
  // attach original delegate to patched function
  attachOriginToPatched(_global[className], OriginalClass);
  const instance = new OriginalClass(function () {});
  let prop;
  for (prop in instance) {
    // https://bugs.webkit.org/show_bug.cgi?id=44721
    if (className === 'XMLHttpRequest' && prop === 'responseBlob') continue;
    (function (prop) {
      if (typeof instance[prop] === 'function') {
        _global[className].prototype[prop] = function () {
          return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
        };
      } else {
        ObjectDefineProperty(_global[className].prototype, prop, {
          set: function (fn) {
            if (typeof fn === 'function') {
              this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
              // keep callback in wrapped function so we can
              // use it in Function.prototype.toString to return
              // the native one.
              attachOriginToPatched(this[originalInstanceKey][prop], fn);
            } else {
              this[originalInstanceKey][prop] = fn;
            }
          },
          get: function () {
            return this[originalInstanceKey][prop];
          }
        });
      }
    })(prop);
  }
  for (prop in OriginalClass) {
    if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
      _global[className][prop] = OriginalClass[prop];
    }
  }
}
function patchMethod(target, name, patchFn) {
  let proto = target;
  while (proto && !proto.hasOwnProperty(name)) {
    proto = ObjectGetPrototypeOf(proto);
  }
  if (!proto && target[name]) {
    // somehow we did not find it, but we can see it. This happens on IE for Window properties.
    proto = target;
  }
  const delegateName = zoneSymbol(name);
  let delegate = null;
  if (proto && (!(delegate = proto[delegateName]) || !proto.hasOwnProperty(delegateName))) {
    delegate = proto[delegateName] = proto[name];
    // check whether proto[name] is writable
    // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
    const desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
    if (isPropertyWritable(desc)) {
      const patchDelegate = patchFn(delegate, delegateName, name);
      proto[name] = function () {
        return patchDelegate(this, arguments);
      };
      attachOriginToPatched(proto[name], delegate);
    }
  }
  return delegate;
}
// TODO: @JiaLiPassion, support cancel task later if necessary
function patchMacroTask(obj, funcName, metaCreator) {
  let setNative = null;
  function scheduleTask(task) {
    const data = task.data;
    data.args[data.cbIdx] = function () {
      task.invoke.apply(this, arguments);
    };
    setNative.apply(data.target, data.args);
    return task;
  }
  setNative = patchMethod(obj, funcName, delegate => function (self, args) {
    const meta = metaCreator(self, args);
    if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
      return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
    } else {
      // cause an error by calling it directly.
      return delegate.apply(self, args);
    }
  });
}
function attachOriginToPatched(patched, original) {
  patched[zoneSymbol('OriginalDelegate')] = original;
}
let isDetectedIEOrEdge = false;
let ieOrEdge = false;
function isIE() {
  try {
    const ua = internalWindow.navigator.userAgent;
    if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
      return true;
    }
  } catch (error) {}
  return false;
}
function isIEOrEdge() {
  if (isDetectedIEOrEdge) {
    return ieOrEdge;
  }
  isDetectedIEOrEdge = true;
  try {
    const ua = internalWindow.navigator.userAgent;
    if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
      ieOrEdge = true;
    }
  } catch (error) {}
  return ieOrEdge;
}
Zone.__load_patch('ZoneAwarePromise', (global, Zone, api) => {
  const ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  const ObjectDefineProperty = Object.defineProperty;
  function readableObjectToString(obj) {
    if (obj && obj.toString === Object.prototype.toString) {
      const className = obj.constructor && obj.constructor.name;
      return (className ? className : '') + ': ' + JSON.stringify(obj);
    }
    return obj ? obj.toString() : Object.prototype.toString.call(obj);
  }
  const __symbol__ = api.symbol;
  const _uncaughtPromiseErrors = [];
  const isDisableWrappingUncaughtPromiseRejection = global[__symbol__('DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION')] === true;
  const symbolPromise = __symbol__('Promise');
  const symbolThen = __symbol__('then');
  const creationTrace = '__creationTrace__';
  api.onUnhandledError = e => {
    if (api.showUncaughtError()) {
      const rejection = e && e.rejection;
      if (rejection) {
        console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
      } else {
        console.error(e);
      }
    }
  };
  api.microtaskDrainDone = () => {
    while (_uncaughtPromiseErrors.length) {
      const uncaughtPromiseError = _uncaughtPromiseErrors.shift();
      try {
        uncaughtPromiseError.zone.runGuarded(() => {
          if (uncaughtPromiseError.throwOriginal) {
            throw uncaughtPromiseError.rejection;
          }
          throw uncaughtPromiseError;
        });
      } catch (error) {
        handleUnhandledRejection(error);
      }
    }
  };
  const UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
  function handleUnhandledRejection(e) {
    api.onUnhandledError(e);
    try {
      const handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
      if (typeof handler === 'function') {
        handler.call(this, e);
      }
    } catch (err) {}
  }
  function isThenable(value) {
    return value && value.then;
  }
  function forwardResolution(value) {
    return value;
  }
  function forwardRejection(rejection) {
    return ZoneAwarePromise.reject(rejection);
  }
  const symbolState = __symbol__('state');
  const symbolValue = __symbol__('value');
  const symbolFinally = __symbol__('finally');
  const symbolParentPromiseValue = __symbol__('parentPromiseValue');
  const symbolParentPromiseState = __symbol__('parentPromiseState');
  const source = 'Promise.then';
  const UNRESOLVED = null;
  const RESOLVED = true;
  const REJECTED = false;
  const REJECTED_NO_CATCH = 0;
  function makeResolver(promise, state) {
    return v => {
      try {
        resolvePromise(promise, state, v);
      } catch (err) {
        resolvePromise(promise, false, err);
      }
      // Do not return value or you will break the Promise spec.
    };
  }

  const once = function () {
    let wasCalled = false;
    return function wrapper(wrappedFunction) {
      return function () {
        if (wasCalled) {
          return;
        }
        wasCalled = true;
        wrappedFunction.apply(null, arguments);
      };
    };
  };
  const TYPE_ERROR = 'Promise resolved with itself';
  const CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
  // Promise Resolution
  function resolvePromise(promise, state, value) {
    const onceWrapper = once();
    if (promise === value) {
      throw new TypeError(TYPE_ERROR);
    }
    if (promise[symbolState] === UNRESOLVED) {
      // should only get value.then once based on promise spec.
      let then = null;
      try {
        if (typeof value === 'object' || typeof value === 'function') {
          then = value && value.then;
        }
      } catch (err) {
        onceWrapper(() => {
          resolvePromise(promise, false, err);
        })();
        return promise;
      }
      // if (value instanceof ZoneAwarePromise) {
      if (state !== REJECTED && value instanceof ZoneAwarePromise && value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) && value[symbolState] !== UNRESOLVED) {
        clearRejectedNoCatch(value);
        resolvePromise(promise, value[symbolState], value[symbolValue]);
      } else if (state !== REJECTED && typeof then === 'function') {
        try {
          then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
        } catch (err) {
          onceWrapper(() => {
            resolvePromise(promise, false, err);
          })();
        }
      } else {
        promise[symbolState] = state;
        const queue = promise[symbolValue];
        promise[symbolValue] = value;
        if (promise[symbolFinally] === symbolFinally) {
          // the promise is generated by Promise.prototype.finally
          if (state === RESOLVED) {
            // the state is resolved, should ignore the value
            // and use parent promise value
            promise[symbolState] = promise[symbolParentPromiseState];
            promise[symbolValue] = promise[symbolParentPromiseValue];
          }
        }
        // record task information in value when error occurs, so we can
        // do some additional work such as render longStackTrace
        if (state === REJECTED && value instanceof Error) {
          // check if longStackTraceZone is here
          const trace = Zone.currentTask && Zone.currentTask.data && Zone.currentTask.data[creationTrace];
          if (trace) {
            // only keep the long stack trace into error when in longStackTraceZone
            ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, {
              configurable: true,
              enumerable: false,
              writable: true,
              value: trace
            });
          }
        }
        for (let i = 0; i < queue.length;) {
          scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
        }
        if (queue.length == 0 && state == REJECTED) {
          promise[symbolState] = REJECTED_NO_CATCH;
          let uncaughtPromiseError = value;
          try {
            // Here we throws a new Error to print more readable error log
            // and if the value is not an error, zone.js builds an `Error`
            // Object here to attach the stack information.
            throw new Error('Uncaught (in promise): ' + readableObjectToString(value) + (value && value.stack ? '\n' + value.stack : ''));
          } catch (err) {
            uncaughtPromiseError = err;
          }
          if (isDisableWrappingUncaughtPromiseRejection) {
            // If disable wrapping uncaught promise reject
            // use the value instead of wrapping it.
            uncaughtPromiseError.throwOriginal = true;
          }
          uncaughtPromiseError.rejection = value;
          uncaughtPromiseError.promise = promise;
          uncaughtPromiseError.zone = Zone.current;
          uncaughtPromiseError.task = Zone.currentTask;
          _uncaughtPromiseErrors.push(uncaughtPromiseError);
          api.scheduleMicroTask(); // to make sure that it is running
        }
      }
    }
    // Resolving an already resolved promise is a noop.
    return promise;
  }
  const REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
  function clearRejectedNoCatch(promise) {
    if (promise[symbolState] === REJECTED_NO_CATCH) {
      // if the promise is rejected no catch status
      // and queue.length > 0, means there is a error handler
      // here to handle the rejected promise, we should trigger
      // windows.rejectionhandled eventHandler or nodejs rejectionHandled
      // eventHandler
      try {
        const handler = Zone[REJECTION_HANDLED_HANDLER];
        if (handler && typeof handler === 'function') {
          handler.call(this, {
            rejection: promise[symbolValue],
            promise: promise
          });
        }
      } catch (err) {}
      promise[symbolState] = REJECTED;
      for (let i = 0; i < _uncaughtPromiseErrors.length; i++) {
        if (promise === _uncaughtPromiseErrors[i].promise) {
          _uncaughtPromiseErrors.splice(i, 1);
        }
      }
    }
  }
  function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
    clearRejectedNoCatch(promise);
    const promiseState = promise[symbolState];
    const delegate = promiseState ? typeof onFulfilled === 'function' ? onFulfilled : forwardResolution : typeof onRejected === 'function' ? onRejected : forwardRejection;
    zone.scheduleMicroTask(source, () => {
      try {
        const parentPromiseValue = promise[symbolValue];
        const isFinallyPromise = !!chainPromise && symbolFinally === chainPromise[symbolFinally];
        if (isFinallyPromise) {
          // if the promise is generated from finally call, keep parent promise's state and value
          chainPromise[symbolParentPromiseValue] = parentPromiseValue;
          chainPromise[symbolParentPromiseState] = promiseState;
        }
        // should not pass value to finally callback
        const value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
        resolvePromise(chainPromise, true, value);
      } catch (error) {
        // if error occurs, should always return this error
        resolvePromise(chainPromise, false, error);
      }
    }, chainPromise);
  }
  const ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
  const noop = function () {};
  const AggregateError = global.AggregateError;
  class ZoneAwarePromise {
    static toString() {
      return ZONE_AWARE_PROMISE_TO_STRING;
    }
    static resolve(value) {
      return resolvePromise(new this(null), RESOLVED, value);
    }
    static reject(error) {
      return resolvePromise(new this(null), REJECTED, error);
    }
    static any(values) {
      if (!values || typeof values[Symbol.iterator] !== 'function') {
        return Promise.reject(new AggregateError([], 'All promises were rejected'));
      }
      const promises = [];
      let count = 0;
      try {
        for (let v of values) {
          count++;
          promises.push(ZoneAwarePromise.resolve(v));
        }
      } catch (err) {
        return Promise.reject(new AggregateError([], 'All promises were rejected'));
      }
      if (count === 0) {
        return Promise.reject(new AggregateError([], 'All promises were rejected'));
      }
      let finished = false;
      const errors = [];
      return new ZoneAwarePromise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
          promises[i].then(v => {
            if (finished) {
              return;
            }
            finished = true;
            resolve(v);
          }, err => {
            errors.push(err);
            count--;
            if (count === 0) {
              finished = true;
              reject(new AggregateError(errors, 'All promises were rejected'));
            }
          });
        }
      });
    }
    static race(values) {
      let resolve;
      let reject;
      let promise = new this((res, rej) => {
        resolve = res;
        reject = rej;
      });
      function onResolve(value) {
        resolve(value);
      }
      function onReject(error) {
        reject(error);
      }
      for (let value of values) {
        if (!isThenable(value)) {
          value = this.resolve(value);
        }
        value.then(onResolve, onReject);
      }
      return promise;
    }
    static all(values) {
      return ZoneAwarePromise.allWithCallback(values);
    }
    static allSettled(values) {
      const P = this && this.prototype instanceof ZoneAwarePromise ? this : ZoneAwarePromise;
      return P.allWithCallback(values, {
        thenCallback: value => ({
          status: 'fulfilled',
          value
        }),
        errorCallback: err => ({
          status: 'rejected',
          reason: err
        })
      });
    }
    static allWithCallback(values, callback) {
      let resolve;
      let reject;
      let promise = new this((res, rej) => {
        resolve = res;
        reject = rej;
      });
      // Start at 2 to prevent prematurely resolving if .then is called immediately.
      let unresolvedCount = 2;
      let valueIndex = 0;
      const resolvedValues = [];
      for (let value of values) {
        if (!isThenable(value)) {
          value = this.resolve(value);
        }
        const curValueIndex = valueIndex;
        try {
          value.then(value => {
            resolvedValues[curValueIndex] = callback ? callback.thenCallback(value) : value;
            unresolvedCount--;
            if (unresolvedCount === 0) {
              resolve(resolvedValues);
            }
          }, err => {
            if (!callback) {
              reject(err);
            } else {
              resolvedValues[curValueIndex] = callback.errorCallback(err);
              unresolvedCount--;
              if (unresolvedCount === 0) {
                resolve(resolvedValues);
              }
            }
          });
        } catch (thenErr) {
          reject(thenErr);
        }
        unresolvedCount++;
        valueIndex++;
      }
      // Make the unresolvedCount zero-based again.
      unresolvedCount -= 2;
      if (unresolvedCount === 0) {
        resolve(resolvedValues);
      }
      return promise;
    }
    constructor(executor) {
      const promise = this;
      if (!(promise instanceof ZoneAwarePromise)) {
        throw new Error('Must be an instanceof Promise.');
      }
      promise[symbolState] = UNRESOLVED;
      promise[symbolValue] = []; // queue;
      try {
        const onceWrapper = once();
        executor && executor(onceWrapper(makeResolver(promise, RESOLVED)), onceWrapper(makeResolver(promise, REJECTED)));
      } catch (error) {
        resolvePromise(promise, false, error);
      }
    }
    get [Symbol.toStringTag]() {
      return 'Promise';
    }
    get [Symbol.species]() {
      return ZoneAwarePromise;
    }
    then(onFulfilled, onRejected) {
      var _this$constructor;
      // We must read `Symbol.species` safely because `this` may be anything. For instance, `this`
      // may be an object without a prototype (created through `Object.create(null)`); thus
      // `this.constructor` will be undefined. One of the use cases is SystemJS creating
      // prototype-less objects (modules) via `Object.create(null)`. The SystemJS creates an empty
      // object and copies promise properties into that object (within the `getOrCreateLoad`
      // function). The zone.js then checks if the resolved value has the `then` method and invokes
      // it with the `value` context. Otherwise, this will throw an error: `TypeError: Cannot read
      // properties of undefined (reading 'Symbol(Symbol.species)')`.
      let C = (_this$constructor = this.constructor) === null || _this$constructor === void 0 ? void 0 : _this$constructor[Symbol.species];
      if (!C || typeof C !== 'function') {
        C = this.constructor || ZoneAwarePromise;
      }
      const chainPromise = new C(noop);
      const zone = Zone.current;
      if (this[symbolState] == UNRESOLVED) {
        this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
      } else {
        scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
      }
      return chainPromise;
    }
    catch(onRejected) {
      return this.then(null, onRejected);
    }
    finally(onFinally) {
      var _this$constructor2;
      // See comment on the call to `then` about why thee `Symbol.species` is safely accessed.
      let C = (_this$constructor2 = this.constructor) === null || _this$constructor2 === void 0 ? void 0 : _this$constructor2[Symbol.species];
      if (!C || typeof C !== 'function') {
        C = ZoneAwarePromise;
      }
      const chainPromise = new C(noop);
      chainPromise[symbolFinally] = symbolFinally;
      const zone = Zone.current;
      if (this[symbolState] == UNRESOLVED) {
        this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
      } else {
        scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
      }
      return chainPromise;
    }
  }
  // Protect against aggressive optimizers dropping seemingly unused properties.
  // E.g. Closure Compiler in advanced mode.
  ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
  ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
  ZoneAwarePromise['race'] = ZoneAwarePromise.race;
  ZoneAwarePromise['all'] = ZoneAwarePromise.all;
  const NativePromise = global[symbolPromise] = global['Promise'];
  global['Promise'] = ZoneAwarePromise;
  const symbolThenPatched = __symbol__('thenPatched');
  function patchThen(Ctor) {
    const proto = Ctor.prototype;
    const prop = ObjectGetOwnPropertyDescriptor(proto, 'then');
    if (prop && (prop.writable === false || !prop.configurable)) {
      // check Ctor.prototype.then propertyDescriptor is writable or not
      // in meteor env, writable is false, we should ignore such case
      return;
    }
    const originalThen = proto.then;
    // Keep a reference to the original method.
    proto[symbolThen] = originalThen;
    Ctor.prototype.then = function (onResolve, onReject) {
      const wrapped = new ZoneAwarePromise((resolve, reject) => {
        originalThen.call(this, resolve, reject);
      });
      return wrapped.then(onResolve, onReject);
    };
    Ctor[symbolThenPatched] = true;
  }
  api.patchThen = patchThen;
  function zoneify(fn) {
    return function (self, args) {
      let resultPromise = fn.apply(self, args);
      if (resultPromise instanceof ZoneAwarePromise) {
        return resultPromise;
      }
      let ctor = resultPromise.constructor;
      if (!ctor[symbolThenPatched]) {
        patchThen(ctor);
      }
      return resultPromise;
    };
  }
  if (NativePromise) {
    patchThen(NativePromise);
    patchMethod(global, 'fetch', delegate => zoneify(delegate));
  }
  // This is not part of public API, but it is useful for tests, so we expose it.
  Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
  return ZoneAwarePromise;
});

// override Function.prototype.toString to make zone.js patched function
// look like native function
Zone.__load_patch('toString', global => {
  // patch Func.prototype.toString to let them look like native
  const originalFunctionToString = Function.prototype.toString;
  const ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
  const PROMISE_SYMBOL = zoneSymbol('Promise');
  const ERROR_SYMBOL = zoneSymbol('Error');
  const newFunctionToString = function toString() {
    if (typeof this === 'function') {
      const originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
      if (originalDelegate) {
        if (typeof originalDelegate === 'function') {
          return originalFunctionToString.call(originalDelegate);
        } else {
          return Object.prototype.toString.call(originalDelegate);
        }
      }
      if (this === Promise) {
        const nativePromise = global[PROMISE_SYMBOL];
        if (nativePromise) {
          return originalFunctionToString.call(nativePromise);
        }
      }
      if (this === Error) {
        const nativeError = global[ERROR_SYMBOL];
        if (nativeError) {
          return originalFunctionToString.call(nativeError);
        }
      }
    }
    return originalFunctionToString.call(this);
  };
  newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
  Function.prototype.toString = newFunctionToString;
  // patch Object.prototype.toString to let them look like native
  const originalObjectToString = Object.prototype.toString;
  const PROMISE_OBJECT_TO_STRING = '[object Promise]';
  Object.prototype.toString = function () {
    if (typeof Promise === 'function' && this instanceof Promise) {
      return PROMISE_OBJECT_TO_STRING;
    }
    return originalObjectToString.call(this);
  };
});

/**
 * @fileoverview
 * @suppress {missingRequire}
 */
let passiveSupported = false;
if (typeof window !== 'undefined') {
  try {
    const options = Object.defineProperty({}, 'passive', {
      get: function () {
        passiveSupported = true;
      }
    });
    // Note: We pass the `options` object as the event handler too. This is not compatible with the
    // signature of `addEventListener` or `removeEventListener` but enables us to remove the handler
    // without an actual handler.
    window.addEventListener('test', options, options);
    window.removeEventListener('test', options, options);
  } catch (err) {
    passiveSupported = false;
  }
}
// an identifier to tell ZoneTask do not create a new invoke closure
const OPTIMIZED_ZONE_EVENT_TASK_DATA = {
  useG: true
};
const zoneSymbolEventNames = {};
const globalSources = {};
const EVENT_NAME_SYMBOL_REGX = new RegExp('^' + ZONE_SYMBOL_PREFIX + '(\\w+)(true|false)$');
const IMMEDIATE_PROPAGATION_SYMBOL = zoneSymbol('propagationStopped');
function prepareEventNames(eventName, eventNameToString) {
  const falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
  const trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
  const symbol = ZONE_SYMBOL_PREFIX + falseEventName;
  const symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
  zoneSymbolEventNames[eventName] = {};
  zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
  zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
}
function patchEventTarget(_global, api, apis, patchOptions) {
  const ADD_EVENT_LISTENER = patchOptions && patchOptions.add || ADD_EVENT_LISTENER_STR;
  const REMOVE_EVENT_LISTENER = patchOptions && patchOptions.rm || REMOVE_EVENT_LISTENER_STR;
  const LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.listeners || 'eventListeners';
  const REMOVE_ALL_LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.rmAll || 'removeAllListeners';
  const zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
  const ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
  const PREPEND_EVENT_LISTENER = 'prependListener';
  const PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
  const invokeTask = function (task, target, event) {
    // for better performance, check isRemoved which is set
    // by removeEventListener
    if (task.isRemoved) {
      return;
    }
    const delegate = task.callback;
    if (typeof delegate === 'object' && delegate.handleEvent) {
      // create the bind version of handleEvent when invoke
      task.callback = event => delegate.handleEvent(event);
      task.originalDelegate = delegate;
    }
    // invoke static task.invoke
    // need to try/catch error here, otherwise, the error in one event listener
    // will break the executions of the other event listeners. Also error will
    // not remove the event listener when `once` options is true.
    let error;
    try {
      task.invoke(task, target, [event]);
    } catch (err) {
      error = err;
    }
    const options = task.options;
    if (options && typeof options === 'object' && options.once) {
      // if options.once is true, after invoke once remove listener here
      // only browser need to do this, nodejs eventEmitter will cal removeListener
      // inside EventEmitter.once
      const delegate = task.originalDelegate ? task.originalDelegate : task.callback;
      target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate, options);
    }
    return error;
  };
  function globalCallback(context, event, isCapture) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;
    if (!event) {
      return;
    }
    // event.target is needed for Samsung TV and SourceBuffer
    // || global is needed https://github.com/angular/zone.js/issues/190
    const target = context || event.target || _global;
    const tasks = target[zoneSymbolEventNames[event.type][isCapture ? TRUE_STR : FALSE_STR]];
    if (tasks) {
      const errors = [];
      // invoke all tasks which attached to current target with given event.type and capture = false
      // for performance concern, if task.length === 1, just invoke
      if (tasks.length === 1) {
        const err = invokeTask(tasks[0], target, event);
        err && errors.push(err);
      } else {
        // https://github.com/angular/zone.js/issues/836
        // copy the tasks array before invoke, to avoid
        // the callback will remove itself or other listener
        const copyTasks = tasks.slice();
        for (let i = 0; i < copyTasks.length; i++) {
          if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
            break;
          }
          const err = invokeTask(copyTasks[i], target, event);
          err && errors.push(err);
        }
      }
      // Since there is only one error, we don't need to schedule microTask
      // to throw the error.
      if (errors.length === 1) {
        throw errors[0];
      } else {
        for (let i = 0; i < errors.length; i++) {
          const err = errors[i];
          api.nativeScheduleMicroTask(() => {
            throw err;
          });
        }
      }
    }
  }
  // global shared zoneAwareCallback to handle all event callback with capture = false
  const globalZoneAwareCallback = function (event) {
    return globalCallback(this, event, false);
  };
  // global shared zoneAwareCallback to handle all event callback with capture = true
  const globalZoneAwareCaptureCallback = function (event) {
    return globalCallback(this, event, true);
  };
  function patchEventTargetMethods(obj, patchOptions) {
    if (!obj) {
      return false;
    }
    let useGlobalCallback = true;
    if (patchOptions && patchOptions.useG !== undefined) {
      useGlobalCallback = patchOptions.useG;
    }
    const validateHandler = patchOptions && patchOptions.vh;
    let checkDuplicate = true;
    if (patchOptions && patchOptions.chkDup !== undefined) {
      checkDuplicate = patchOptions.chkDup;
    }
    let returnTarget = false;
    if (patchOptions && patchOptions.rt !== undefined) {
      returnTarget = patchOptions.rt;
    }
    let proto = obj;
    while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
      proto = ObjectGetPrototypeOf(proto);
    }
    if (!proto && obj[ADD_EVENT_LISTENER]) {
      // somehow we did not find it, but we can see it. This happens on IE for Window properties.
      proto = obj;
    }
    if (!proto) {
      return false;
    }
    if (proto[zoneSymbolAddEventListener]) {
      return false;
    }
    const eventNameToString = patchOptions && patchOptions.eventNameToString;
    // a shared global taskData to pass data for scheduleEventTask
    // so we do not need to create a new object just for pass some data
    const taskData = {};
    const nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
    const nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] = proto[REMOVE_EVENT_LISTENER];
    const nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] = proto[LISTENERS_EVENT_LISTENER];
    const nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] = proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
    let nativePrependEventListener;
    if (patchOptions && patchOptions.prepend) {
      nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] = proto[patchOptions.prepend];
    }
    /**
     * This util function will build an option object with passive option
     * to handle all possible input from the user.
     */
    function buildEventListenerOptions(options, passive) {
      if (!passiveSupported && typeof options === 'object' && options) {
        // doesn't support passive but user want to pass an object as options.
        // this will not work on some old browser, so we just pass a boolean
        // as useCapture parameter
        return !!options.capture;
      }
      if (!passiveSupported || !passive) {
        return options;
      }
      if (typeof options === 'boolean') {
        return {
          capture: options,
          passive: true
        };
      }
      if (!options) {
        return {
          passive: true
        };
      }
      if (typeof options === 'object' && options.passive !== false) {
        return {
          ...options,
          passive: true
        };
      }
      return options;
    }
    const customScheduleGlobal = function (task) {
      // if there is already a task for the eventName + capture,
      // just return, because we use the shared globalZoneAwareCallback here.
      if (taskData.isExisting) {
        return;
      }
      return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
    };
    const customCancelGlobal = function (task) {
      // if task is not marked as isRemoved, this call is directly
      // from Zone.prototype.cancelTask, we should remove the task
      // from tasksList of target first
      if (!task.isRemoved) {
        const symbolEventNames = zoneSymbolEventNames[task.eventName];
        let symbolEventName;
        if (symbolEventNames) {
          symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
        }
        const existingTasks = symbolEventName && task.target[symbolEventName];
        if (existingTasks) {
          for (let i = 0; i < existingTasks.length; i++) {
            const existingTask = existingTasks[i];
            if (existingTask === task) {
              existingTasks.splice(i, 1);
              // set isRemoved to data for faster invokeTask check
              task.isRemoved = true;
              if (existingTasks.length === 0) {
                // all tasks for the eventName + capture have gone,
                // remove globalZoneAwareCallback and remove the task cache from target
                task.allRemoved = true;
                task.target[symbolEventName] = null;
              }
              break;
            }
          }
        }
      }
      // if all tasks for the eventName + capture have gone,
      // we will really remove the global event callback,
      // if not, return
      if (!task.allRemoved) {
        return;
      }
      return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
    };
    const customScheduleNonGlobal = function (task) {
      return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
    };
    const customSchedulePrepend = function (task) {
      return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
    };
    const customCancelNonGlobal = function (task) {
      return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
    };
    const customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
    const customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
    const compareTaskCallbackVsDelegate = function (task, delegate) {
      const typeOfDelegate = typeof delegate;
      return typeOfDelegate === 'function' && task.callback === delegate || typeOfDelegate === 'object' && task.originalDelegate === delegate;
    };
    const compare = patchOptions && patchOptions.diff ? patchOptions.diff : compareTaskCallbackVsDelegate;
    const unpatchedEvents = Zone[zoneSymbol('UNPATCHED_EVENTS')];
    const passiveEvents = _global[zoneSymbol('PASSIVE_EVENTS')];
    const makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget = false, prepend = false) {
      return function () {
        const target = this || _global;
        let eventName = arguments[0];
        if (patchOptions && patchOptions.transferEventName) {
          eventName = patchOptions.transferEventName(eventName);
        }
        let delegate = arguments[1];
        if (!delegate) {
          return nativeListener.apply(this, arguments);
        }
        if (isNode && eventName === 'uncaughtException') {
          // don't patch uncaughtException of nodejs to prevent endless loop
          return nativeListener.apply(this, arguments);
        }
        // don't create the bind delegate function for handleEvent
        // case here to improve addEventListener performance
        // we will create the bind delegate when invoke
        let isHandleEvent = false;
        if (typeof delegate !== 'function') {
          if (!delegate.handleEvent) {
            return nativeListener.apply(this, arguments);
          }
          isHandleEvent = true;
        }
        if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
          return;
        }
        const passive = passiveSupported && !!passiveEvents && passiveEvents.indexOf(eventName) !== -1;
        const options = buildEventListenerOptions(arguments[2], passive);
        if (unpatchedEvents) {
          // check unpatched list
          for (let i = 0; i < unpatchedEvents.length; i++) {
            if (eventName === unpatchedEvents[i]) {
              if (passive) {
                return nativeListener.call(target, eventName, delegate, options);
              } else {
                return nativeListener.apply(this, arguments);
              }
            }
          }
        }
        const capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
        const once = options && typeof options === 'object' ? options.once : false;
        const zone = Zone.current;
        let symbolEventNames = zoneSymbolEventNames[eventName];
        if (!symbolEventNames) {
          prepareEventNames(eventName, eventNameToString);
          symbolEventNames = zoneSymbolEventNames[eventName];
        }
        const symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
        let existingTasks = target[symbolEventName];
        let isExisting = false;
        if (existingTasks) {
          // already have task registered
          isExisting = true;
          if (checkDuplicate) {
            for (let i = 0; i < existingTasks.length; i++) {
              if (compare(existingTasks[i], delegate)) {
                // same callback, same capture, same event name, just return
                return;
              }
            }
          }
        } else {
          existingTasks = target[symbolEventName] = [];
        }
        let source;
        const constructorName = target.constructor['name'];
        const targetSource = globalSources[constructorName];
        if (targetSource) {
          source = targetSource[eventName];
        }
        if (!source) {
          source = constructorName + addSource + (eventNameToString ? eventNameToString(eventName) : eventName);
        }
        // do not create a new object as task.data to pass those things
        // just use the global shared one
        taskData.options = options;
        if (once) {
          // if addEventListener with once options, we don't pass it to
          // native addEventListener, instead we keep the once setting
          // and handle ourselves.
          taskData.options.once = false;
        }
        taskData.target = target;
        taskData.capture = capture;
        taskData.eventName = eventName;
        taskData.isExisting = isExisting;
        const data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined;
        // keep taskData into data to allow onScheduleEventTask to access the task information
        if (data) {
          data.taskData = taskData;
        }
        const task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
        // should clear taskData.target to avoid memory leak
        // issue, https://github.com/angular/angular/issues/20442
        taskData.target = null;
        // need to clear up taskData because it is a global object
        if (data) {
          data.taskData = null;
        }
        // have to save those information to task in case
        // application may call task.zone.cancelTask() directly
        if (once) {
          options.once = true;
        }
        if (!(!passiveSupported && typeof task.options === 'boolean')) {
          // if not support passive, and we pass an option object
          // to addEventListener, we should save the options to task
          task.options = options;
        }
        task.target = target;
        task.capture = capture;
        task.eventName = eventName;
        if (isHandleEvent) {
          // save original delegate for compare to check duplicate
          task.originalDelegate = delegate;
        }
        if (!prepend) {
          existingTasks.push(task);
        } else {
          existingTasks.unshift(task);
        }
        if (returnTarget) {
          return target;
        }
      };
    };
    proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
    if (nativePrependEventListener) {
      proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
    }
    proto[REMOVE_EVENT_LISTENER] = function () {
      const target = this || _global;
      let eventName = arguments[0];
      if (patchOptions && patchOptions.transferEventName) {
        eventName = patchOptions.transferEventName(eventName);
      }
      const options = arguments[2];
      const capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
      const delegate = arguments[1];
      if (!delegate) {
        return nativeRemoveEventListener.apply(this, arguments);
      }
      if (validateHandler && !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
        return;
      }
      const symbolEventNames = zoneSymbolEventNames[eventName];
      let symbolEventName;
      if (symbolEventNames) {
        symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
      }
      const existingTasks = symbolEventName && target[symbolEventName];
      if (existingTasks) {
        for (let i = 0; i < existingTasks.length; i++) {
          const existingTask = existingTasks[i];
          if (compare(existingTask, delegate)) {
            existingTasks.splice(i, 1);
            // set isRemoved to data for faster invokeTask check
            existingTask.isRemoved = true;
            if (existingTasks.length === 0) {
              // all tasks for the eventName + capture have gone,
              // remove globalZoneAwareCallback and remove the task cache from target
              existingTask.allRemoved = true;
              target[symbolEventName] = null;
              // in the target, we have an event listener which is added by on_property
              // such as target.onclick = function() {}, so we need to clear this internal
              // property too if all delegates all removed
              if (typeof eventName === 'string') {
                const onPropertySymbol = ZONE_SYMBOL_PREFIX + 'ON_PROPERTY' + eventName;
                target[onPropertySymbol] = null;
              }
            }
            existingTask.zone.cancelTask(existingTask);
            if (returnTarget) {
              return target;
            }
            return;
          }
        }
      }
      // issue 930, didn't find the event name or callback
      // from zone kept existingTasks, the callback maybe
      // added outside of zone, we need to call native removeEventListener
      // to try to remove it.
      return nativeRemoveEventListener.apply(this, arguments);
    };
    proto[LISTENERS_EVENT_LISTENER] = function () {
      const target = this || _global;
      let eventName = arguments[0];
      if (patchOptions && patchOptions.transferEventName) {
        eventName = patchOptions.transferEventName(eventName);
      }
      const listeners = [];
      const tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
      for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
        listeners.push(delegate);
      }
      return listeners;
    };
    proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
      const target = this || _global;
      let eventName = arguments[0];
      if (!eventName) {
        const keys = Object.keys(target);
        for (let i = 0; i < keys.length; i++) {
          const prop = keys[i];
          const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
          let evtName = match && match[1];
          // in nodejs EventEmitter, removeListener event is
          // used for monitoring the removeListener call,
          // so just keep removeListener eventListener until
          // all other eventListeners are removed
          if (evtName && evtName !== 'removeListener') {
            this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
          }
        }
        // remove removeListener listener finally
        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
      } else {
        if (patchOptions && patchOptions.transferEventName) {
          eventName = patchOptions.transferEventName(eventName);
        }
        const symbolEventNames = zoneSymbolEventNames[eventName];
        if (symbolEventNames) {
          const symbolEventName = symbolEventNames[FALSE_STR];
          const symbolCaptureEventName = symbolEventNames[TRUE_STR];
          const tasks = target[symbolEventName];
          const captureTasks = target[symbolCaptureEventName];
          if (tasks) {
            const removeTasks = tasks.slice();
            for (let i = 0; i < removeTasks.length; i++) {
              const task = removeTasks[i];
              let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
              this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
            }
          }
          if (captureTasks) {
            const removeTasks = captureTasks.slice();
            for (let i = 0; i < removeTasks.length; i++) {
              const task = removeTasks[i];
              let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
              this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
            }
          }
        }
      }
      if (returnTarget) {
        return this;
      }
    };
    // for native toString patch
    attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
    attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
    if (nativeRemoveAllListeners) {
      attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
    }
    if (nativeListeners) {
      attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
    }
    return true;
  }
  let results = [];
  for (let i = 0; i < apis.length; i++) {
    results[i] = patchEventTargetMethods(apis[i], patchOptions);
  }
  return results;
}
function findEventTasks(target, eventName) {
  if (!eventName) {
    const foundTasks = [];
    for (let prop in target) {
      const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
      let evtName = match && match[1];
      if (evtName && (!eventName || evtName === eventName)) {
        const tasks = target[prop];
        if (tasks) {
          for (let i = 0; i < tasks.length; i++) {
            foundTasks.push(tasks[i]);
          }
        }
      }
    }
    return foundTasks;
  }
  let symbolEventName = zoneSymbolEventNames[eventName];
  if (!symbolEventName) {
    prepareEventNames(eventName);
    symbolEventName = zoneSymbolEventNames[eventName];
  }
  const captureFalseTasks = target[symbolEventName[FALSE_STR]];
  const captureTrueTasks = target[symbolEventName[TRUE_STR]];
  if (!captureFalseTasks) {
    return captureTrueTasks ? captureTrueTasks.slice() : [];
  } else {
    return captureTrueTasks ? captureFalseTasks.concat(captureTrueTasks) : captureFalseTasks.slice();
  }
}
function patchEventPrototype(global, api) {
  const Event = global['Event'];
  if (Event && Event.prototype) {
    api.patchMethod(Event.prototype, 'stopImmediatePropagation', delegate => function (self, args) {
      self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
      // we need to call the native stopImmediatePropagation
      // in case in some hybrid application, some part of
      // application will be controlled by zone, some are not
      delegate && delegate.apply(self, args);
    });
  }
}
function patchCallbacks(api, target, targetName, method, callbacks) {
  const symbol = Zone.__symbol__(method);
  if (target[symbol]) {
    return;
  }
  const nativeDelegate = target[symbol] = target[method];
  target[method] = function (name, opts, options) {
    if (opts && opts.prototype) {
      callbacks.forEach(function (callback) {
        const source = `${targetName}.${method}::` + callback;
        const prototype = opts.prototype;
        // Note: the `patchCallbacks` is used for patching the `document.registerElement` and
        // `customElements.define`. We explicitly wrap the patching code into try-catch since
        // callbacks may be already patched by other web components frameworks (e.g. LWC), and they
        // make those properties non-writable. This means that patching callback will throw an error
        // `cannot assign to read-only property`. See this code as an example:
        // https://github.com/salesforce/lwc/blob/master/packages/@lwc/engine-core/src/framework/base-bridge-element.ts#L180-L186
        // We don't want to stop the application rendering if we couldn't patch some
        // callback, e.g. `attributeChangedCallback`.
        try {
          if (prototype.hasOwnProperty(callback)) {
            const descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);
            if (descriptor && descriptor.value) {
              descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);
              api._redefineProperty(opts.prototype, callback, descriptor);
            } else if (prototype[callback]) {
              prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
            }
          } else if (prototype[callback]) {
            prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
          }
        } catch (_unused) {
          // Note: we leave the catch block empty since there's no way to handle the error related
          // to non-writable property.
        }
      });
    }
    return nativeDelegate.call(target, name, opts, options);
  };
  api.attachOriginToPatched(target[method], nativeDelegate);
}

/**
 * @fileoverview
 * @suppress {globalThis}
 */
function filterProperties(target, onProperties, ignoreProperties) {
  if (!ignoreProperties || ignoreProperties.length === 0) {
    return onProperties;
  }
  const tip = ignoreProperties.filter(ip => ip.target === target);
  if (!tip || tip.length === 0) {
    return onProperties;
  }
  const targetIgnoreProperties = tip[0].ignoreProperties;
  return onProperties.filter(op => targetIgnoreProperties.indexOf(op) === -1);
}
function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
  // check whether target is available, sometimes target will be undefined
  // because different browser or some 3rd party plugin.
  if (!target) {
    return;
  }
  const filteredProperties = filterProperties(target, onProperties, ignoreProperties);
  patchOnProperties(target, filteredProperties, prototype);
}
/**
 * Get all event name properties which the event name startsWith `on`
 * from the target object itself, inherited properties are not considered.
 */
function getOnEventNames(target) {
  return Object.getOwnPropertyNames(target).filter(name => name.startsWith('on') && name.length > 2).map(name => name.substring(2));
}
function propertyDescriptorPatch(api, _global) {
  if (isNode && !isMix) {
    return;
  }
  if (Zone[api.symbol('patchEvents')]) {
    // events are already been patched by legacy patch.
    return;
  }
  const ignoreProperties = _global['__Zone_ignore_on_properties'];
  // for browsers that we can patch the descriptor:  Chrome & Firefox
  let patchTargets = [];
  if (isBrowser) {
    const internalWindow = window;
    patchTargets = patchTargets.concat(['Document', 'SVGElement', 'Element', 'HTMLElement', 'HTMLBodyElement', 'HTMLMediaElement', 'HTMLFrameSetElement', 'HTMLFrameElement', 'HTMLIFrameElement', 'HTMLMarqueeElement', 'Worker']);
    const ignoreErrorProperties = isIE() ? [{
      target: internalWindow,
      ignoreProperties: ['error']
    }] : [];
    // in IE/Edge, onProp not exist in window object, but in WindowPrototype
    // so we need to pass WindowPrototype to check onProp exist or not
    patchFilteredProperties(internalWindow, getOnEventNames(internalWindow), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow));
  }
  patchTargets = patchTargets.concat(['XMLHttpRequest', 'XMLHttpRequestEventTarget', 'IDBIndex', 'IDBRequest', 'IDBOpenDBRequest', 'IDBDatabase', 'IDBTransaction', 'IDBCursor', 'WebSocket']);
  for (let i = 0; i < patchTargets.length; i++) {
    const target = _global[patchTargets[i]];
    target && target.prototype && patchFilteredProperties(target.prototype, getOnEventNames(target.prototype), ignoreProperties);
  }
}
Zone.__load_patch('util', (global, Zone, api) => {
  // Collect native event names by looking at properties
  // on the global namespace, e.g. 'onclick'.
  const eventNames = getOnEventNames(global);
  api.patchOnProperties = patchOnProperties;
  api.patchMethod = patchMethod;
  api.bindArguments = bindArguments;
  api.patchMacroTask = patchMacroTask;
  // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
  // define which events will not be patched by `Zone.js`.
  // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
  // the name consistent with angular repo.
  // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
  // backwards compatibility.
  const SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
  const SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');
  if (global[SYMBOL_UNPATCHED_EVENTS]) {
    global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
  }
  if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
    Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
  }
  api.patchEventPrototype = patchEventPrototype;
  api.patchEventTarget = patchEventTarget;
  api.isIEOrEdge = isIEOrEdge;
  api.ObjectDefineProperty = ObjectDefineProperty;
  api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
  api.ObjectCreate = ObjectCreate;
  api.ArraySlice = ArraySlice;
  api.patchClass = patchClass;
  api.wrapWithCurrentZone = wrapWithCurrentZone;
  api.filterProperties = filterProperties;
  api.attachOriginToPatched = attachOriginToPatched;
  api._redefineProperty = Object.defineProperty;
  api.patchCallbacks = patchCallbacks;
  api.getGlobalObjects = () => ({
    globalSources,
    zoneSymbolEventNames,
    eventNames,
    isBrowser,
    isMix,
    isNode,
    TRUE_STR,
    FALSE_STR,
    ZONE_SYMBOL_PREFIX,
    ADD_EVENT_LISTENER_STR,
    REMOVE_EVENT_LISTENER_STR
  });
});

/**
 * @fileoverview
 * @suppress {missingRequire}
 */
function patchQueueMicrotask(global, api) {
  api.patchMethod(global, 'queueMicrotask', delegate => {
    return function (self, args) {
      Zone.current.scheduleMicroTask('queueMicrotask', args[0]);
    };
  });
}

/**
 * @fileoverview
 * @suppress {missingRequire}
 */
const taskSymbol = zoneSymbol('zoneTask');
function patchTimer(window, setName, cancelName, nameSuffix) {
  let setNative = null;
  let clearNative = null;
  setName += nameSuffix;
  cancelName += nameSuffix;
  const tasksByHandleId = {};
  function scheduleTask(task) {
    const data = task.data;
    data.args[0] = function () {
      return task.invoke.apply(this, arguments);
    };
    data.handleId = setNative.apply(window, data.args);
    return task;
  }
  function clearTask(task) {
    return clearNative.call(window, task.data.handleId);
  }
  setNative = patchMethod(window, setName, delegate => function (self, args) {
    if (typeof args[0] === 'function') {
      const options = {
        isPeriodic: nameSuffix === 'Interval',
        delay: nameSuffix === 'Timeout' || nameSuffix === 'Interval' ? args[1] || 0 : undefined,
        args: args
      };
      const callback = args[0];
      args[0] = function timer() {
        try {
          return callback.apply(this, arguments);
        } finally {
          // issue-934, task will be cancelled
          // even it is a periodic task such as
          // setInterval
          // https://github.com/angular/angular/issues/40387
          // Cleanup tasksByHandleId should be handled before scheduleTask
          // Since some zoneSpec may intercept and doesn't trigger
          // scheduleFn(scheduleTask) provided here.
          if (!options.isPeriodic) {
            if (typeof options.handleId === 'number') {
              // in non-nodejs env, we remove timerId
              // from local cache
              delete tasksByHandleId[options.handleId];
            } else if (options.handleId) {
              // Node returns complex objects as handleIds
              // we remove task reference from timer object
              options.handleId[taskSymbol] = null;
            }
          }
        }
      };
      const task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
      if (!task) {
        return task;
      }
      // Node.js must additionally support the ref and unref functions.
      const handle = task.data.handleId;
      if (typeof handle === 'number') {
        // for non nodejs env, we save handleId: task
        // mapping in local cache for clearTimeout
        tasksByHandleId[handle] = task;
      } else if (handle) {
        // for nodejs env, we save task
        // reference in timerId Object for clearTimeout
        handle[taskSymbol] = task;
      }
      // check whether handle is null, because some polyfill or browser
      // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
      if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' && typeof handle.unref === 'function') {
        task.ref = handle.ref.bind(handle);
        task.unref = handle.unref.bind(handle);
      }
      if (typeof handle === 'number' || handle) {
        return handle;
      }
      return task;
    } else {
      // cause an error by calling it directly.
      return delegate.apply(window, args);
    }
  });
  clearNative = patchMethod(window, cancelName, delegate => function (self, args) {
    const id = args[0];
    let task;
    if (typeof id === 'number') {
      // non nodejs env.
      task = tasksByHandleId[id];
    } else {
      // nodejs env.
      task = id && id[taskSymbol];
      // other environments.
      if (!task) {
        task = id;
      }
    }
    if (task && typeof task.type === 'string') {
      if (task.state !== 'notScheduled' && (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
        if (typeof id === 'number') {
          delete tasksByHandleId[id];
        } else if (id) {
          id[taskSymbol] = null;
        }
        // Do not cancel already canceled functions
        task.zone.cancelTask(task);
      }
    } else {
      // cause an error by calling it directly.
      delegate.apply(window, args);
    }
  });
}
function patchCustomElements(_global, api) {
  const {
    isBrowser,
    isMix
  } = api.getGlobalObjects();
  if (!isBrowser && !isMix || !_global['customElements'] || !('customElements' in _global)) {
    return;
  }
  const callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
  api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
}
function eventTargetPatch(_global, api) {
  if (Zone[api.symbol('patchEventTarget')]) {
    // EventTarget is already patched.
    return;
  }
  const {
    eventNames,
    zoneSymbolEventNames,
    TRUE_STR,
    FALSE_STR,
    ZONE_SYMBOL_PREFIX
  } = api.getGlobalObjects();
  //  predefine all __zone_symbol__ + eventName + true/false string
  for (let i = 0; i < eventNames.length; i++) {
    const eventName = eventNames[i];
    const falseEventName = eventName + FALSE_STR;
    const trueEventName = eventName + TRUE_STR;
    const symbol = ZONE_SYMBOL_PREFIX + falseEventName;
    const symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
    zoneSymbolEventNames[eventName] = {};
    zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
    zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
  }
  const EVENT_TARGET = _global['EventTarget'];
  if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
    return;
  }
  api.patchEventTarget(_global, api, [EVENT_TARGET && EVENT_TARGET.prototype]);
  return true;
}
function patchEvent(global, api) {
  api.patchEventPrototype(global, api);
}

/**
 * @fileoverview
 * @suppress {missingRequire}
 */
Zone.__load_patch('legacy', global => {
  const legacyPatch = global[Zone.__symbol__('legacyPatch')];
  if (legacyPatch) {
    legacyPatch();
  }
});
Zone.__load_patch('timers', global => {
  const set = 'set';
  const clear = 'clear';
  patchTimer(global, set, clear, 'Timeout');
  patchTimer(global, set, clear, 'Interval');
  patchTimer(global, set, clear, 'Immediate');
});
Zone.__load_patch('requestAnimationFrame', global => {
  patchTimer(global, 'request', 'cancel', 'AnimationFrame');
  patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
  patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
});
Zone.__load_patch('blocking', (global, Zone) => {
  const blockingMethods = ['alert', 'prompt', 'confirm'];
  for (let i = 0; i < blockingMethods.length; i++) {
    const name = blockingMethods[i];
    patchMethod(global, name, (delegate, symbol, name) => {
      return function (s, args) {
        return Zone.current.run(delegate, global, args, name);
      };
    });
  }
});
Zone.__load_patch('EventTarget', (global, Zone, api) => {
  patchEvent(global, api);
  eventTargetPatch(global, api);
  // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
  const XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
  if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
    api.patchEventTarget(global, api, [XMLHttpRequestEventTarget.prototype]);
  }
});
Zone.__load_patch('MutationObserver', (global, Zone, api) => {
  patchClass('MutationObserver');
  patchClass('WebKitMutationObserver');
});
Zone.__load_patch('IntersectionObserver', (global, Zone, api) => {
  patchClass('IntersectionObserver');
});
Zone.__load_patch('FileReader', (global, Zone, api) => {
  patchClass('FileReader');
});
Zone.__load_patch('on_property', (global, Zone, api) => {
  propertyDescriptorPatch(api, global);
});
Zone.__load_patch('customElements', (global, Zone, api) => {
  patchCustomElements(global, api);
});
Zone.__load_patch('XHR', (global, Zone) => {
  // Treat XMLHttpRequest as a macrotask.
  patchXHR(global);
  const XHR_TASK = zoneSymbol('xhrTask');
  const XHR_SYNC = zoneSymbol('xhrSync');
  const XHR_LISTENER = zoneSymbol('xhrListener');
  const XHR_SCHEDULED = zoneSymbol('xhrScheduled');
  const XHR_URL = zoneSymbol('xhrURL');
  const XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');
  function patchXHR(window) {
    const XMLHttpRequest = window['XMLHttpRequest'];
    if (!XMLHttpRequest) {
      // XMLHttpRequest is not available in service worker
      return;
    }
    const XMLHttpRequestPrototype = XMLHttpRequest.prototype;
    function findPendingTask(target) {
      return target[XHR_TASK];
    }
    let oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
    let oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
    if (!oriAddListener) {
      const XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];
      if (XMLHttpRequestEventTarget) {
        const XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
        oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
      }
    }
    const READY_STATE_CHANGE = 'readystatechange';
    const SCHEDULED = 'scheduled';
    function scheduleTask(task) {
      const data = task.data;
      const target = data.target;
      target[XHR_SCHEDULED] = false;
      target[XHR_ERROR_BEFORE_SCHEDULED] = false;
      // remove existing event listener
      const listener = target[XHR_LISTENER];
      if (!oriAddListener) {
        oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
      }
      if (listener) {
        oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
      }
      const newListener = target[XHR_LISTENER] = () => {
        if (target.readyState === target.DONE) {
          // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
          // readyState=4 multiple times, so we need to check task state here
          if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
            // check whether the xhr has registered onload listener
            // if that is the case, the task should invoke after all
            // onload listeners finish.
            // Also if the request failed without response (status = 0), the load event handler
            // will not be triggered, in that case, we should also invoke the placeholder callback
            // to close the XMLHttpRequest::send macroTask.
            // https://github.com/angular/angular/issues/38795
            const loadTasks = target[Zone.__symbol__('loadfalse')];
            if (target.status !== 0 && loadTasks && loadTasks.length > 0) {
              const oriInvoke = task.invoke;
              task.invoke = function () {
                // need to load the tasks again, because in other
                // load listener, they may remove themselves
                const loadTasks = target[Zone.__symbol__('loadfalse')];
                for (let i = 0; i < loadTasks.length; i++) {
                  if (loadTasks[i] === task) {
                    loadTasks.splice(i, 1);
                  }
                }
                if (!data.aborted && task.state === SCHEDULED) {
                  oriInvoke.call(task);
                }
              };
              loadTasks.push(task);
            } else {
              task.invoke();
            }
          } else if (!data.aborted && target[XHR_SCHEDULED] === false) {
            // error occurs when xhr.send()
            target[XHR_ERROR_BEFORE_SCHEDULED] = true;
          }
        }
      };
      oriAddListener.call(target, READY_STATE_CHANGE, newListener);
      const storedTask = target[XHR_TASK];
      if (!storedTask) {
        target[XHR_TASK] = task;
      }
      sendNative.apply(target, data.args);
      target[XHR_SCHEDULED] = true;
      return task;
    }
    function placeholderCallback() {}
    function clearTask(task) {
      const data = task.data;
      // Note - ideally, we would call data.target.removeEventListener here, but it's too late
      // to prevent it from firing. So instead, we store info for the event listener.
      data.aborted = true;
      return abortNative.apply(data.target, data.args);
    }
    const openNative = patchMethod(XMLHttpRequestPrototype, 'open', () => function (self, args) {
      self[XHR_SYNC] = args[2] == false;
      self[XHR_URL] = args[1];
      return openNative.apply(self, args);
    });
    const XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
    const fetchTaskAborting = zoneSymbol('fetchTaskAborting');
    const fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
    const sendNative = patchMethod(XMLHttpRequestPrototype, 'send', () => function (self, args) {
      if (Zone.current[fetchTaskScheduling] === true) {
        // a fetch is scheduling, so we are using xhr to polyfill fetch
        // and because we already schedule macroTask for fetch, we should
        // not schedule a macroTask for xhr again
        return sendNative.apply(self, args);
      }
      if (self[XHR_SYNC]) {
        // if the XHR is sync there is no task to schedule, just execute the code.
        return sendNative.apply(self, args);
      } else {
        const options = {
          target: self,
          url: self[XHR_URL],
          isPeriodic: false,
          args: args,
          aborted: false
        };
        const task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
        if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted && task.state === SCHEDULED) {
          // xhr request throw error when send
          // we should invoke task instead of leaving a scheduled
          // pending macroTask
          task.invoke();
        }
      }
    });
    const abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', () => function (self, args) {
      const task = findPendingTask(self);
      if (task && typeof task.type == 'string') {
        // If the XHR has already completed, do nothing.
        // If the XHR has already been aborted, do nothing.
        // Fix #569, call abort multiple times before done will cause
        // macroTask task count be negative number
        if (task.cancelFn == null || task.data && task.data.aborted) {
          return;
        }
        task.zone.cancelTask(task);
      } else if (Zone.current[fetchTaskAborting] === true) {
        // the abort is called from fetch polyfill, we need to call native abort of XHR.
        return abortNative.apply(self, args);
      }
      // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
      // task
      // to cancel. Do nothing.
    });
  }
});

Zone.__load_patch('geolocation', global => {
  /// GEO_LOCATION
  if (global['navigator'] && global['navigator'].geolocation) {
    patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
  }
});
Zone.__load_patch('PromiseRejectionEvent', (global, Zone) => {
  // handle unhandled promise rejection
  function findPromiseRejectionHandler(evtName) {
    return function (e) {
      const eventTasks = findEventTasks(global, evtName);
      eventTasks.forEach(eventTask => {
        // windows has added unhandledrejection event listener
        // trigger the event listener
        const PromiseRejectionEvent = global['PromiseRejectionEvent'];
        if (PromiseRejectionEvent) {
          const evt = new PromiseRejectionEvent(evtName, {
            promise: e.promise,
            reason: e.rejection
          });
          eventTask.invoke(evt);
        }
      });
    };
  }
  if (global['PromiseRejectionEvent']) {
    Zone[zoneSymbol('unhandledPromiseRejectionHandler')] = findPromiseRejectionHandler('unhandledrejection');
    Zone[zoneSymbol('rejectionHandledHandler')] = findPromiseRejectionHandler('rejectionhandled');
  }
});
Zone.__load_patch('queueMicrotask', (global, Zone, api) => {
  patchQueueMicrotask(global, api);
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(55321));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUUxQixDQUFDLENBQUMwQixPQUFPO1lBQUU0QyxNQUFNLEVBQUV0RSxDQUFDLENBQUNDO1VBQVUsQ0FBQyxDQUFDO1VBQzNGNU8sU0FBUyxDQUFDVCxNQUFNLENBQUNpaEIsR0FBRyxDQUFDO1FBQ3pCO01BQ0osQ0FBQyxDQUFDO0lBQ04sQ0FBQztFQUNMO0VBQ0EsSUFBSWprQixNQUFNLENBQUMsdUJBQXVCLENBQUMsRUFBRTtJQUNqQ1UsSUFBSSxDQUFDNk0sVUFBVSxDQUFDLGtDQUFrQyxDQUFDLENBQUMsR0FDaER1VywyQkFBMkIsQ0FBQyxvQkFBb0IsQ0FBQztJQUNyRHBqQixJQUFJLENBQUM2TSxVQUFVLENBQUMseUJBQXlCLENBQUMsQ0FBQyxHQUN2Q3VXLDJCQUEyQixDQUFDLGtCQUFrQixDQUFDO0VBQ3ZEO0FBQ0osQ0FBQyxDQUFDO0FBQ0ZwakIsSUFBSSxDQUFDVSxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQ3BCLE1BQU0sRUFBRVUsSUFBSSxFQUFFbVIsR0FBRyxLQUFLO0VBQ3ZEd08sbUJBQW1CLENBQUNyZ0IsTUFBTSxFQUFFNlIsR0FBRyxDQUFDO0FBQ3BDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsiLi9zcmMvcG9seWZpbGxzLnRzIiwiLi9ub2RlX21vZHVsZXMvem9uZS5qcy9mZXNtMjAxNS96b25lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBUaGlzIGZpbGUgaW5jbHVkZXMgcG9seWZpbGxzIG5lZWRlZCBieSBBbmd1bGFyIGFuZCBpcyBsb2FkZWQgYmVmb3JlIHRoZSBhcHAuXHJcbiAqIFlvdSBjYW4gYWRkIHlvdXIgb3duIGV4dHJhIHBvbHlmaWxscyB0byB0aGlzIGZpbGUuXHJcbiAqXHJcbiAqIFRoaXMgZmlsZSBpcyBkaXZpZGVkIGludG8gMiBzZWN0aW9uczpcclxuICogICAxLiBCcm93c2VyIHBvbHlmaWxscy4gVGhlc2UgYXJlIGFwcGxpZWQgYmVmb3JlIGxvYWRpbmcgWm9uZUpTIGFuZCBhcmUgc29ydGVkIGJ5IGJyb3dzZXJzLlxyXG4gKiAgIDIuIEFwcGxpY2F0aW9uIGltcG9ydHMuIEZpbGVzIGltcG9ydGVkIGFmdGVyIFpvbmVKUyB0aGF0IHNob3VsZCBiZSBsb2FkZWQgYmVmb3JlIHlvdXIgbWFpblxyXG4gKiAgICAgIGZpbGUuXHJcbiAqXHJcbiAqIFRoZSBjdXJyZW50IHNldHVwIGlzIGZvciBzby1jYWxsZWQgXCJldmVyZ3JlZW5cIiBicm93c2VyczsgdGhlIGxhc3QgdmVyc2lvbnMgb2YgYnJvd3NlcnMgdGhhdFxyXG4gKiBhdXRvbWF0aWNhbGx5IHVwZGF0ZSB0aGVtc2VsdmVzLiBUaGlzIGluY2x1ZGVzIFNhZmFyaSA+PSAxMCwgQ2hyb21lID49IDU1IChpbmNsdWRpbmcgT3BlcmEpLFxyXG4gKiBFZGdlID49IDEzIG9uIHRoZSBkZXNrdG9wLCBhbmQgaU9TIDEwIGFuZCBDaHJvbWUgb24gbW9iaWxlLlxyXG4gKlxyXG4gKiBMZWFybiBtb3JlIGluIGh0dHBzOi8vYW5ndWxhci5pby9ndWlkZS9icm93c2VyLXN1cHBvcnRcclxuICovXHJcblxyXG4vLyBCUk9XU0VSIFBPTFlGSUxMU1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8vIElFOSwgSUUxMCBhbmQgSUUxMSByZXF1aXJlcyBhbGwgb2YgdGhlIGZvbGxvd2luZyBwb2x5ZmlsbHMuXHJcbi8vIGltcG9ydCAnY29yZS1qcy9lczYvc3ltYm9sJztcclxuLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9vYmplY3QnO1xyXG4vLyBpbXBvcnQgJ2NvcmUtanMvZXM2L2Z1bmN0aW9uJztcclxuLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9wYXJzZS1pbnQnO1xyXG4vLyBpbXBvcnQgJ2NvcmUtanMvZXM2L3BhcnNlLWZsb2F0JztcclxuLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9udW1iZXInO1xyXG4vLyBpbXBvcnQgJ2NvcmUtanMvZXM2L21hdGgnO1xyXG4vLyBpbXBvcnQgJ2NvcmUtanMvZXM2L3N0cmluZyc7XHJcbi8vIGltcG9ydCAnY29yZS1qcy9lczYvZGF0ZSc7XHJcbi8vIGltcG9ydCAnY29yZS1qcy9lczYvYXJyYXknO1xyXG4vLyBpbXBvcnQgJ2NvcmUtanMvZXM2L3JlZ2V4cCc7XHJcbi8vIGltcG9ydCAnY29yZS1qcy9lczYvbWFwJztcclxuLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi93ZWFrLW1hcCc7XHJcbi8vIGltcG9ydCAnY29yZS1qcy9lczYvc2V0JztcclxuXHJcbi8qKiBJRTEwIGFuZCBJRTExIHJlcXVpcmVzIHRoZSBmb2xsb3dpbmcgZm9yIHRoZSBSZWZsZWN0IEFQSS4gKi9cclxuLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9yZWZsZWN0JztcclxuXHJcbi8vIEV2ZXJncmVlbiBicm93c2VycyByZXF1aXJlIHRoZXNlLlxyXG4vLyBVc2VkIGZvciByZWZsZWN0LW1ldGFkYXRhIGluIEpJVC4gSWYgeW91IHVzZSBBT1QgKGFuZCBvbmx5IEFuZ3VsYXIgZGVjb3JhdG9ycyksIHlvdSBjYW4gcmVtb3ZlLlxyXG5cclxuXHJcbi8vIFJlcXVpcmVkIHRvIHN1cHBvcnQgV2ViIEFuaW1hdGlvbnMgYEBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9uc2AuXHJcblxyXG4vLyBab25lIEpTIGlzIHJlcXVpcmVkIGJ5IEFuZ3VsYXIgaXRzZWxmLlxyXG5pbXBvcnQgJ3pvbmUuanMnOyAvLyBJbmNsdWRlZCB3aXRoIEFuZ3VsYXIgQ0xJLlxyXG5cclxuLy8gQVBQTElDQVRJT04gSU1QT1JUU1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8qKlxyXG4gKiBEYXRlLCBjdXJyZW5jeSwgZGVjaW1hbCBhbmQgcGVyY2VudCBwaXBlcy5cclxuICogTmVlZGVkIGZvcjogQWxsIGJ1dCBDaHJvbWUsIEZpcmVmb3gsIEVkZ2UsIElFMTEgYW5kIFNhZmFyaSAxMFxyXG4gKi9cclxuLy8gaW1wb3J0ICdpbnRsJzsgIC8vIFJ1biBgbnBtIGluc3RhbGwgLS1zYXZlIGludGxgLlxyXG4vKipcclxuICogTmVlZCB0byBpbXBvcnQgYXQgbGVhc3Qgb25lIGxvY2FsZS1kYXRhIHdpdGggaW50bC5cclxuICovXHJcbi8vIGltcG9ydCAnaW50bC9sb2NhbGUtZGF0YS9qc29ucC9lbic7XHJcbiIsIid1c2Ugc3RyaWN0Jztcbi8qKlxuICogQGxpY2Vuc2UgQW5ndWxhciB2PHVua25vd24+XG4gKiAoYykgMjAxMC0yMDIyIEdvb2dsZSBMTEMuIGh0dHBzOi8vYW5ndWxhci5pby9cbiAqIExpY2Vuc2U6IE1JVFxuICovXG4oKGZ1bmN0aW9uIChnbG9iYWwpIHtcbiAgICBjb25zdCBwZXJmb3JtYW5jZSA9IGdsb2JhbFsncGVyZm9ybWFuY2UnXTtcbiAgICBmdW5jdGlvbiBtYXJrKG5hbWUpIHtcbiAgICAgICAgcGVyZm9ybWFuY2UgJiYgcGVyZm9ybWFuY2VbJ21hcmsnXSAmJiBwZXJmb3JtYW5jZVsnbWFyayddKG5hbWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwZXJmb3JtYW5jZU1lYXN1cmUobmFtZSwgbGFiZWwpIHtcbiAgICAgICAgcGVyZm9ybWFuY2UgJiYgcGVyZm9ybWFuY2VbJ21lYXN1cmUnXSAmJiBwZXJmb3JtYW5jZVsnbWVhc3VyZSddKG5hbWUsIGxhYmVsKTtcbiAgICB9XG4gICAgbWFyaygnWm9uZScpO1xuICAgIC8vIEluaXRpYWxpemUgYmVmb3JlIGl0J3MgYWNjZXNzZWQgYmVsb3cuXG4gICAgLy8gX19ab25lX3N5bWJvbF9wcmVmaXggZ2xvYmFsIGNhbiBiZSB1c2VkIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IHpvbmVcbiAgICAvLyBzeW1ib2wgcHJlZml4IHdpdGggYSBjdXN0b20gb25lIGlmIG5lZWRlZC5cbiAgICBjb25zdCBzeW1ib2xQcmVmaXggPSBnbG9iYWxbJ19fWm9uZV9zeW1ib2xfcHJlZml4J10gfHwgJ19fem9uZV9zeW1ib2xfXyc7XG4gICAgZnVuY3Rpb24gX19zeW1ib2xfXyhuYW1lKSB7XG4gICAgICAgIHJldHVybiBzeW1ib2xQcmVmaXggKyBuYW1lO1xuICAgIH1cbiAgICBjb25zdCBjaGVja0R1cGxpY2F0ZSA9IGdsb2JhbFtfX3N5bWJvbF9fKCdmb3JjZUR1cGxpY2F0ZVpvbmVDaGVjaycpXSA9PT0gdHJ1ZTtcbiAgICBpZiAoZ2xvYmFsWydab25lJ10pIHtcbiAgICAgICAgLy8gaWYgZ2xvYmFsWydab25lJ10gYWxyZWFkeSBleGlzdHMgKG1heWJlIHpvbmUuanMgd2FzIGFscmVhZHkgbG9hZGVkIG9yXG4gICAgICAgIC8vIHNvbWUgb3RoZXIgbGliIGFsc28gcmVnaXN0ZXJlZCBhIGdsb2JhbCBvYmplY3QgbmFtZWQgWm9uZSksIHdlIG1heSBuZWVkXG4gICAgICAgIC8vIHRvIHRocm93IGFuIGVycm9yLCBidXQgc29tZXRpbWVzIHVzZXIgbWF5IG5vdCB3YW50IHRoaXMgZXJyb3IuXG4gICAgICAgIC8vIEZvciBleGFtcGxlLFxuICAgICAgICAvLyB3ZSBoYXZlIHR3byB3ZWIgcGFnZXMsIHBhZ2UxIGluY2x1ZGVzIHpvbmUuanMsIHBhZ2UyIGRvZXNuJ3QuXG4gICAgICAgIC8vIGFuZCB0aGUgMXN0IHRpbWUgdXNlciBsb2FkIHBhZ2UxIGFuZCBwYWdlMiwgZXZlcnl0aGluZyB3b3JrIGZpbmUsXG4gICAgICAgIC8vIGJ1dCB3aGVuIHVzZXIgbG9hZCBwYWdlMiBhZ2FpbiwgZXJyb3Igb2NjdXJzIGJlY2F1c2UgZ2xvYmFsWydab25lJ10gYWxyZWFkeSBleGlzdHMuXG4gICAgICAgIC8vIHNvIHdlIGFkZCBhIGZsYWcgdG8gbGV0IHVzZXIgY2hvb3NlIHdoZXRoZXIgdG8gdGhyb3cgdGhpcyBlcnJvciBvciBub3QuXG4gICAgICAgIC8vIEJ5IGRlZmF1bHQsIGlmIGV4aXN0aW5nIFpvbmUgaXMgZnJvbSB6b25lLmpzLCB3ZSB3aWxsIG5vdCB0aHJvdyB0aGUgZXJyb3IuXG4gICAgICAgIGlmIChjaGVja0R1cGxpY2F0ZSB8fCB0eXBlb2YgZ2xvYmFsWydab25lJ10uX19zeW1ib2xfXyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdab25lIGFscmVhZHkgbG9hZGVkLicpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGdsb2JhbFsnWm9uZSddO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNsYXNzIFpvbmUge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cmVxdWlyZS1pbnRlcm5hbC13aXRoLXVuZGVyc2NvcmVcbiAgICAgICAgc3RhdGljIHsgdGhpcy5fX3N5bWJvbF9fID0gX19zeW1ib2xfXzsgfVxuICAgICAgICBzdGF0aWMgYXNzZXJ0Wm9uZVBhdGNoZWQoKSB7XG4gICAgICAgICAgICBpZiAoZ2xvYmFsWydQcm9taXNlJ10gIT09IHBhdGNoZXNbJ1pvbmVBd2FyZVByb21pc2UnXSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWm9uZS5qcyBoYXMgZGV0ZWN0ZWQgdGhhdCBab25lQXdhcmVQcm9taXNlIGAod2luZG93fGdsb2JhbCkuUHJvbWlzZWAgJyArXG4gICAgICAgICAgICAgICAgICAgICdoYXMgYmVlbiBvdmVyd3JpdHRlbi5cXG4nICtcbiAgICAgICAgICAgICAgICAgICAgJ01vc3QgbGlrZWx5IGNhdXNlIGlzIHRoYXQgYSBQcm9taXNlIHBvbHlmaWxsIGhhcyBiZWVuIGxvYWRlZCAnICtcbiAgICAgICAgICAgICAgICAgICAgJ2FmdGVyIFpvbmUuanMgKFBvbHlmaWxsaW5nIFByb21pc2UgYXBpIGlzIG5vdCBuZWNlc3Nhcnkgd2hlbiB6b25lLmpzIGlzIGxvYWRlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICdJZiB5b3UgbXVzdCBsb2FkIG9uZSwgZG8gc28gYmVmb3JlIGxvYWRpbmcgem9uZS5qcy4pJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGljIGdldCByb290KCkge1xuICAgICAgICAgICAgbGV0IHpvbmUgPSBab25lLmN1cnJlbnQ7XG4gICAgICAgICAgICB3aGlsZSAoem9uZS5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICB6b25lID0gem9uZS5wYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gem9uZTtcbiAgICAgICAgfVxuICAgICAgICBzdGF0aWMgZ2V0IGN1cnJlbnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2N1cnJlbnRab25lRnJhbWUuem9uZTtcbiAgICAgICAgfVxuICAgICAgICBzdGF0aWMgZ2V0IGN1cnJlbnRUYXNrKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jdXJyZW50VGFzaztcbiAgICAgICAgfVxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cmVxdWlyZS1pbnRlcm5hbC13aXRoLXVuZGVyc2NvcmVcbiAgICAgICAgc3RhdGljIF9fbG9hZF9wYXRjaChuYW1lLCBmbiwgaWdub3JlRHVwbGljYXRlID0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmIChwYXRjaGVzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgLy8gYGNoZWNrRHVwbGljYXRlYCBvcHRpb24gaXMgZGVmaW5lZCBmcm9tIGdsb2JhbCB2YXJpYWJsZVxuICAgICAgICAgICAgICAgIC8vIHNvIGl0IHdvcmtzIGZvciBhbGwgbW9kdWxlcy5cbiAgICAgICAgICAgICAgICAvLyBgaWdub3JlRHVwbGljYXRlYCBjYW4gd29yayBmb3IgdGhlIHNwZWNpZmllZCBtb2R1bGVcbiAgICAgICAgICAgICAgICBpZiAoIWlnbm9yZUR1cGxpY2F0ZSAmJiBjaGVja0R1cGxpY2F0ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcignQWxyZWFkeSBsb2FkZWQgcGF0Y2g6ICcgKyBuYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghZ2xvYmFsWydfX1pvbmVfZGlzYWJsZV8nICsgbmFtZV0pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwZXJmTmFtZSA9ICdab25lOicgKyBuYW1lO1xuICAgICAgICAgICAgICAgIG1hcmsocGVyZk5hbWUpO1xuICAgICAgICAgICAgICAgIHBhdGNoZXNbbmFtZV0gPSBmbihnbG9iYWwsIFpvbmUsIF9hcGkpO1xuICAgICAgICAgICAgICAgIHBlcmZvcm1hbmNlTWVhc3VyZShwZXJmTmFtZSwgcGVyZk5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdldCBwYXJlbnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIGdldCBuYW1lKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3RydWN0b3IocGFyZW50LCB6b25lU3BlYykge1xuICAgICAgICAgICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuICAgICAgICAgICAgdGhpcy5fbmFtZSA9IHpvbmVTcGVjID8gem9uZVNwZWMubmFtZSB8fCAndW5uYW1lZCcgOiAnPHJvb3Q+JztcbiAgICAgICAgICAgIHRoaXMuX3Byb3BlcnRpZXMgPSB6b25lU3BlYyAmJiB6b25lU3BlYy5wcm9wZXJ0aWVzIHx8IHt9O1xuICAgICAgICAgICAgdGhpcy5fem9uZURlbGVnYXRlID1cbiAgICAgICAgICAgICAgICBuZXcgX1pvbmVEZWxlZ2F0ZSh0aGlzLCB0aGlzLl9wYXJlbnQgJiYgdGhpcy5fcGFyZW50Ll96b25lRGVsZWdhdGUsIHpvbmVTcGVjKTtcbiAgICAgICAgfVxuICAgICAgICBnZXQoa2V5KSB7XG4gICAgICAgICAgICBjb25zdCB6b25lID0gdGhpcy5nZXRab25lV2l0aChrZXkpO1xuICAgICAgICAgICAgaWYgKHpvbmUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHpvbmUuX3Byb3BlcnRpZXNba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBnZXRab25lV2l0aChrZXkpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50ID0gdGhpcztcbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQuX3Byb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQuX3BhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGZvcmsoem9uZVNwZWMpIHtcbiAgICAgICAgICAgIGlmICghem9uZVNwZWMpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdab25lU3BlYyByZXF1aXJlZCEnKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl96b25lRGVsZWdhdGUuZm9yayh0aGlzLCB6b25lU3BlYyk7XG4gICAgICAgIH1cbiAgICAgICAgd3JhcChjYWxsYmFjaywgc291cmNlKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RpbmcgZnVuY3Rpb24gZ290OiAnICsgY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgX2NhbGxiYWNrID0gdGhpcy5fem9uZURlbGVnYXRlLmludGVyY2VwdCh0aGlzLCBjYWxsYmFjaywgc291cmNlKTtcbiAgICAgICAgICAgIGNvbnN0IHpvbmUgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gem9uZS5ydW5HdWFyZGVkKF9jYWxsYmFjaywgdGhpcywgYXJndW1lbnRzLCBzb3VyY2UpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBydW4oY2FsbGJhY2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzLCBzb3VyY2UpIHtcbiAgICAgICAgICAgIF9jdXJyZW50Wm9uZUZyYW1lID0geyBwYXJlbnQ6IF9jdXJyZW50Wm9uZUZyYW1lLCB6b25lOiB0aGlzIH07XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl96b25lRGVsZWdhdGUuaW52b2tlKHRoaXMsIGNhbGxiYWNrLCBhcHBseVRoaXMsIGFwcGx5QXJncywgc291cmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIF9jdXJyZW50Wm9uZUZyYW1lID0gX2N1cnJlbnRab25lRnJhbWUucGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJ1bkd1YXJkZWQoY2FsbGJhY2ssIGFwcGx5VGhpcyA9IG51bGwsIGFwcGx5QXJncywgc291cmNlKSB7XG4gICAgICAgICAgICBfY3VycmVudFpvbmVGcmFtZSA9IHsgcGFyZW50OiBfY3VycmVudFpvbmVGcmFtZSwgem9uZTogdGhpcyB9O1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fem9uZURlbGVnYXRlLmludm9rZSh0aGlzLCBjYWxsYmFjaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MsIHNvdXJjZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fem9uZURlbGVnYXRlLmhhbmRsZUVycm9yKHRoaXMsIGVycm9yKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBfY3VycmVudFpvbmVGcmFtZSA9IF9jdXJyZW50Wm9uZUZyYW1lLnBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBydW5UYXNrKHRhc2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzKSB7XG4gICAgICAgICAgICBpZiAodGFzay56b25lICE9IHRoaXMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgdGFzayBjYW4gb25seSBiZSBydW4gaW4gdGhlIHpvbmUgb2YgY3JlYXRpb24hIChDcmVhdGlvbjogJyArXG4gICAgICAgICAgICAgICAgICAgICh0YXNrLnpvbmUgfHwgTk9fWk9ORSkubmFtZSArICc7IEV4ZWN1dGlvbjogJyArIHRoaXMubmFtZSArICcpJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci96b25lLmpzL2lzc3Vlcy83NzgsIHNvbWV0aW1lcyBldmVudFRhc2tcbiAgICAgICAgICAgIC8vIHdpbGwgcnVuIGluIG5vdFNjaGVkdWxlZChjYW5jZWxlZCkgc3RhdGUsIHdlIHNob3VsZCBub3QgdHJ5IHRvXG4gICAgICAgICAgICAvLyBydW4gc3VjaCBraW5kIG9mIHRhc2sgYnV0IGp1c3QgcmV0dXJuXG4gICAgICAgICAgICBpZiAodGFzay5zdGF0ZSA9PT0gbm90U2NoZWR1bGVkICYmICh0YXNrLnR5cGUgPT09IGV2ZW50VGFzayB8fCB0YXNrLnR5cGUgPT09IG1hY3JvVGFzaykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZUVudHJ5R3VhcmQgPSB0YXNrLnN0YXRlICE9IHJ1bm5pbmc7XG4gICAgICAgICAgICByZUVudHJ5R3VhcmQgJiYgdGFzay5fdHJhbnNpdGlvblRvKHJ1bm5pbmcsIHNjaGVkdWxlZCk7XG4gICAgICAgICAgICB0YXNrLnJ1bkNvdW50Kys7XG4gICAgICAgICAgICBjb25zdCBwcmV2aW91c1Rhc2sgPSBfY3VycmVudFRhc2s7XG4gICAgICAgICAgICBfY3VycmVudFRhc2sgPSB0YXNrO1xuICAgICAgICAgICAgX2N1cnJlbnRab25lRnJhbWUgPSB7IHBhcmVudDogX2N1cnJlbnRab25lRnJhbWUsIHpvbmU6IHRoaXMgfTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2sudHlwZSA9PSBtYWNyb1Rhc2sgJiYgdGFzay5kYXRhICYmICF0YXNrLmRhdGEuaXNQZXJpb2RpYykge1xuICAgICAgICAgICAgICAgICAgICB0YXNrLmNhbmNlbEZuID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fem9uZURlbGVnYXRlLmludm9rZVRhc2sodGhpcywgdGFzaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3pvbmVEZWxlZ2F0ZS5oYW5kbGVFcnJvcih0aGlzLCBlcnJvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHRhc2sncyBzdGF0ZSBpcyBub3RTY2hlZHVsZWQgb3IgdW5rbm93biwgdGhlbiBpdCBoYXMgYWxyZWFkeSBiZWVuIGNhbmNlbGxlZFxuICAgICAgICAgICAgICAgIC8vIHdlIHNob3VsZCBub3QgcmVzZXQgdGhlIHN0YXRlIHRvIHNjaGVkdWxlZFxuICAgICAgICAgICAgICAgIGlmICh0YXNrLnN0YXRlICE9PSBub3RTY2hlZHVsZWQgJiYgdGFzay5zdGF0ZSAhPT0gdW5rbm93bikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFzay50eXBlID09IGV2ZW50VGFzayB8fCAodGFzay5kYXRhICYmIHRhc2suZGF0YS5pc1BlcmlvZGljKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVFbnRyeUd1YXJkICYmIHRhc2suX3RyYW5zaXRpb25UbyhzY2hlZHVsZWQsIHJ1bm5pbmcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5ydW5Db3VudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVUYXNrQ291bnQodGFzaywgLTEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVFbnRyeUd1YXJkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5fdHJhbnNpdGlvblRvKG5vdFNjaGVkdWxlZCwgcnVubmluZywgbm90U2NoZWR1bGVkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfY3VycmVudFpvbmVGcmFtZSA9IF9jdXJyZW50Wm9uZUZyYW1lLnBhcmVudDtcbiAgICAgICAgICAgICAgICBfY3VycmVudFRhc2sgPSBwcmV2aW91c1Rhc2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2NoZWR1bGVUYXNrKHRhc2spIHtcbiAgICAgICAgICAgIGlmICh0YXNrLnpvbmUgJiYgdGFzay56b25lICE9PSB0aGlzKSB7XG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIHRhc2sgd2FzIHJlc2NoZWR1bGVkLCB0aGUgbmV3Wm9uZVxuICAgICAgICAgICAgICAgIC8vIHNob3VsZCBub3QgYmUgdGhlIGNoaWxkcmVuIG9mIHRoZSBvcmlnaW5hbCB6b25lXG4gICAgICAgICAgICAgICAgbGV0IG5ld1pvbmUgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHdoaWxlIChuZXdab25lKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdab25lID09PSB0YXNrLnpvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKGBjYW4gbm90IHJlc2NoZWR1bGUgdGFzayB0byAke3RoaXMubmFtZX0gd2hpY2ggaXMgZGVzY2VuZGFudHMgb2YgdGhlIG9yaWdpbmFsIHpvbmUgJHt0YXNrLnpvbmUubmFtZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBuZXdab25lID0gbmV3Wm9uZS5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFzay5fdHJhbnNpdGlvblRvKHNjaGVkdWxpbmcsIG5vdFNjaGVkdWxlZCk7XG4gICAgICAgICAgICBjb25zdCB6b25lRGVsZWdhdGVzID0gW107XG4gICAgICAgICAgICB0YXNrLl96b25lRGVsZWdhdGVzID0gem9uZURlbGVnYXRlcztcbiAgICAgICAgICAgIHRhc2suX3pvbmUgPSB0aGlzO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0YXNrID0gdGhpcy5fem9uZURlbGVnYXRlLnNjaGVkdWxlVGFzayh0aGlzLCB0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAvLyBzaG91bGQgc2V0IHRhc2sncyBzdGF0ZSB0byB1bmtub3duIHdoZW4gc2NoZWR1bGVUYXNrIHRocm93IGVycm9yXG4gICAgICAgICAgICAgICAgLy8gYmVjYXVzZSB0aGUgZXJyIG1heSBmcm9tIHJlc2NoZWR1bGUsIHNvIHRoZSBmcm9tU3RhdGUgbWF5YmUgbm90U2NoZWR1bGVkXG4gICAgICAgICAgICAgICAgdGFzay5fdHJhbnNpdGlvblRvKHVua25vd24sIHNjaGVkdWxpbmcsIG5vdFNjaGVkdWxlZCk7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogQEppYUxpUGFzc2lvbiwgc2hvdWxkIHdlIGNoZWNrIHRoZSByZXN1bHQgZnJvbSBoYW5kbGVFcnJvcj9cbiAgICAgICAgICAgICAgICB0aGlzLl96b25lRGVsZWdhdGUuaGFuZGxlRXJyb3IodGhpcywgZXJyKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGFzay5fem9uZURlbGVnYXRlcyA9PT0gem9uZURlbGVnYXRlcykge1xuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gY2hlY2sgYmVjYXVzZSBpbnRlcm5hbGx5IHRoZSBkZWxlZ2F0ZSBjYW4gcmVzY2hlZHVsZSB0aGUgdGFzay5cbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVUYXNrQ291bnQodGFzaywgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGFzay5zdGF0ZSA9PSBzY2hlZHVsaW5nKSB7XG4gICAgICAgICAgICAgICAgdGFzay5fdHJhbnNpdGlvblRvKHNjaGVkdWxlZCwgc2NoZWR1bGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgfVxuICAgICAgICBzY2hlZHVsZU1pY3JvVGFzayhzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NoZWR1bGVUYXNrKG5ldyBab25lVGFzayhtaWNyb1Rhc2ssIHNvdXJjZSwgY2FsbGJhY2ssIGRhdGEsIGN1c3RvbVNjaGVkdWxlLCB1bmRlZmluZWQpKTtcbiAgICAgICAgfVxuICAgICAgICBzY2hlZHVsZU1hY3JvVGFzayhzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSwgY3VzdG9tQ2FuY2VsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY2hlZHVsZVRhc2sobmV3IFpvbmVUYXNrKG1hY3JvVGFzaywgc291cmNlLCBjYWxsYmFjaywgZGF0YSwgY3VzdG9tU2NoZWR1bGUsIGN1c3RvbUNhbmNlbCkpO1xuICAgICAgICB9XG4gICAgICAgIHNjaGVkdWxlRXZlbnRUYXNrKHNvdXJjZSwgY2FsbGJhY2ssIGRhdGEsIGN1c3RvbVNjaGVkdWxlLCBjdXN0b21DYW5jZWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjaGVkdWxlVGFzayhuZXcgWm9uZVRhc2soZXZlbnRUYXNrLCBzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSwgY3VzdG9tQ2FuY2VsKSk7XG4gICAgICAgIH1cbiAgICAgICAgY2FuY2VsVGFzayh0YXNrKSB7XG4gICAgICAgICAgICBpZiAodGFzay56b25lICE9IHRoaXMpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIHRhc2sgY2FuIG9ubHkgYmUgY2FuY2VsbGVkIGluIHRoZSB6b25lIG9mIGNyZWF0aW9uISAoQ3JlYXRpb246ICcgK1xuICAgICAgICAgICAgICAgICAgICAodGFzay56b25lIHx8IE5PX1pPTkUpLm5hbWUgKyAnOyBFeGVjdXRpb246ICcgKyB0aGlzLm5hbWUgKyAnKScpO1xuICAgICAgICAgICAgaWYgKHRhc2suc3RhdGUgIT09IHNjaGVkdWxlZCAmJiB0YXNrLnN0YXRlICE9PSBydW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFzay5fdHJhbnNpdGlvblRvKGNhbmNlbGluZywgc2NoZWR1bGVkLCBydW5uaW5nKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fem9uZURlbGVnYXRlLmNhbmNlbFRhc2sodGhpcywgdGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgZXJyb3Igb2NjdXJzIHdoZW4gY2FuY2VsVGFzaywgdHJhbnNpdCB0aGUgc3RhdGUgdG8gdW5rbm93blxuICAgICAgICAgICAgICAgIHRhc2suX3RyYW5zaXRpb25Ubyh1bmtub3duLCBjYW5jZWxpbmcpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3pvbmVEZWxlZ2F0ZS5oYW5kbGVFcnJvcih0aGlzLCBlcnIpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVRhc2tDb3VudCh0YXNrLCAtMSk7XG4gICAgICAgICAgICB0YXNrLl90cmFuc2l0aW9uVG8obm90U2NoZWR1bGVkLCBjYW5jZWxpbmcpO1xuICAgICAgICAgICAgdGFzay5ydW5Db3VudCA9IDA7XG4gICAgICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgfVxuICAgICAgICBfdXBkYXRlVGFza0NvdW50KHRhc2ssIGNvdW50KSB7XG4gICAgICAgICAgICBjb25zdCB6b25lRGVsZWdhdGVzID0gdGFzay5fem9uZURlbGVnYXRlcztcbiAgICAgICAgICAgIGlmIChjb3VudCA9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRhc2suX3pvbmVEZWxlZ2F0ZXMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB6b25lRGVsZWdhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgem9uZURlbGVnYXRlc1tpXS5fdXBkYXRlVGFza0NvdW50KHRhc2sudHlwZSwgY291bnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IERFTEVHQVRFX1pTID0ge1xuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgb25IYXNUYXNrOiAoZGVsZWdhdGUsIF8sIHRhcmdldCwgaGFzVGFza1N0YXRlKSA9PiBkZWxlZ2F0ZS5oYXNUYXNrKHRhcmdldCwgaGFzVGFza1N0YXRlKSxcbiAgICAgICAgb25TY2hlZHVsZVRhc2s6IChkZWxlZ2F0ZSwgXywgdGFyZ2V0LCB0YXNrKSA9PiBkZWxlZ2F0ZS5zY2hlZHVsZVRhc2sodGFyZ2V0LCB0YXNrKSxcbiAgICAgICAgb25JbnZva2VUYXNrOiAoZGVsZWdhdGUsIF8sIHRhcmdldCwgdGFzaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MpID0+IGRlbGVnYXRlLmludm9rZVRhc2sodGFyZ2V0LCB0YXNrLCBhcHBseVRoaXMsIGFwcGx5QXJncyksXG4gICAgICAgIG9uQ2FuY2VsVGFzazogKGRlbGVnYXRlLCBfLCB0YXJnZXQsIHRhc2spID0+IGRlbGVnYXRlLmNhbmNlbFRhc2sodGFyZ2V0LCB0YXNrKVxuICAgIH07XG4gICAgY2xhc3MgX1pvbmVEZWxlZ2F0ZSB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHpvbmUsIHBhcmVudERlbGVnYXRlLCB6b25lU3BlYykge1xuICAgICAgICAgICAgdGhpcy5fdGFza0NvdW50cyA9IHsgJ21pY3JvVGFzayc6IDAsICdtYWNyb1Rhc2snOiAwLCAnZXZlbnRUYXNrJzogMCB9O1xuICAgICAgICAgICAgdGhpcy56b25lID0gem9uZTtcbiAgICAgICAgICAgIHRoaXMuX3BhcmVudERlbGVnYXRlID0gcGFyZW50RGVsZWdhdGU7XG4gICAgICAgICAgICB0aGlzLl9mb3JrWlMgPSB6b25lU3BlYyAmJiAoem9uZVNwZWMgJiYgem9uZVNwZWMub25Gb3JrID8gem9uZVNwZWMgOiBwYXJlbnREZWxlZ2F0ZS5fZm9ya1pTKTtcbiAgICAgICAgICAgIHRoaXMuX2ZvcmtEbGd0ID0gem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uRm9yayA/IHBhcmVudERlbGVnYXRlIDogcGFyZW50RGVsZWdhdGUuX2ZvcmtEbGd0KTtcbiAgICAgICAgICAgIHRoaXMuX2ZvcmtDdXJyWm9uZSA9XG4gICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uRm9yayA/IHRoaXMuem9uZSA6IHBhcmVudERlbGVnYXRlLl9mb3JrQ3VyclpvbmUpO1xuICAgICAgICAgICAgdGhpcy5faW50ZXJjZXB0WlMgPVxuICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkludGVyY2VwdCA/IHpvbmVTcGVjIDogcGFyZW50RGVsZWdhdGUuX2ludGVyY2VwdFpTKTtcbiAgICAgICAgICAgIHRoaXMuX2ludGVyY2VwdERsZ3QgPVxuICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkludGVyY2VwdCA/IHBhcmVudERlbGVnYXRlIDogcGFyZW50RGVsZWdhdGUuX2ludGVyY2VwdERsZ3QpO1xuICAgICAgICAgICAgdGhpcy5faW50ZXJjZXB0Q3VyclpvbmUgPVxuICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkludGVyY2VwdCA/IHRoaXMuem9uZSA6IHBhcmVudERlbGVnYXRlLl9pbnRlcmNlcHRDdXJyWm9uZSk7XG4gICAgICAgICAgICB0aGlzLl9pbnZva2VaUyA9IHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkludm9rZSA/IHpvbmVTcGVjIDogcGFyZW50RGVsZWdhdGUuX2ludm9rZVpTKTtcbiAgICAgICAgICAgIHRoaXMuX2ludm9rZURsZ3QgPVxuICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkludm9rZSA/IHBhcmVudERlbGVnYXRlIDogcGFyZW50RGVsZWdhdGUuX2ludm9rZURsZ3QpO1xuICAgICAgICAgICAgdGhpcy5faW52b2tlQ3VyclpvbmUgPVxuICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkludm9rZSA/IHRoaXMuem9uZSA6IHBhcmVudERlbGVnYXRlLl9pbnZva2VDdXJyWm9uZSk7XG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVFcnJvclpTID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25IYW5kbGVFcnJvciA/IHpvbmVTcGVjIDogcGFyZW50RGVsZWdhdGUuX2hhbmRsZUVycm9yWlMpO1xuICAgICAgICAgICAgdGhpcy5faGFuZGxlRXJyb3JEbGd0ID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25IYW5kbGVFcnJvciA/IHBhcmVudERlbGVnYXRlIDogcGFyZW50RGVsZWdhdGUuX2hhbmRsZUVycm9yRGxndCk7XG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVFcnJvckN1cnJab25lID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25IYW5kbGVFcnJvciA/IHRoaXMuem9uZSA6IHBhcmVudERlbGVnYXRlLl9oYW5kbGVFcnJvckN1cnJab25lKTtcbiAgICAgICAgICAgIHRoaXMuX3NjaGVkdWxlVGFza1pTID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25TY2hlZHVsZVRhc2sgPyB6b25lU3BlYyA6IHBhcmVudERlbGVnYXRlLl9zY2hlZHVsZVRhc2taUyk7XG4gICAgICAgICAgICB0aGlzLl9zY2hlZHVsZVRhc2tEbGd0ID0gem9uZVNwZWMgJiZcbiAgICAgICAgICAgICAgICAoem9uZVNwZWMub25TY2hlZHVsZVRhc2sgPyBwYXJlbnREZWxlZ2F0ZSA6IHBhcmVudERlbGVnYXRlLl9zY2hlZHVsZVRhc2tEbGd0KTtcbiAgICAgICAgICAgIHRoaXMuX3NjaGVkdWxlVGFza0N1cnJab25lID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25TY2hlZHVsZVRhc2sgPyB0aGlzLnpvbmUgOiBwYXJlbnREZWxlZ2F0ZS5fc2NoZWR1bGVUYXNrQ3VyclpvbmUpO1xuICAgICAgICAgICAgdGhpcy5faW52b2tlVGFza1pTID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25JbnZva2VUYXNrID8gem9uZVNwZWMgOiBwYXJlbnREZWxlZ2F0ZS5faW52b2tlVGFza1pTKTtcbiAgICAgICAgICAgIHRoaXMuX2ludm9rZVRhc2tEbGd0ID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25JbnZva2VUYXNrID8gcGFyZW50RGVsZWdhdGUgOiBwYXJlbnREZWxlZ2F0ZS5faW52b2tlVGFza0RsZ3QpO1xuICAgICAgICAgICAgdGhpcy5faW52b2tlVGFza0N1cnJab25lID1cbiAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25JbnZva2VUYXNrID8gdGhpcy56b25lIDogcGFyZW50RGVsZWdhdGUuX2ludm9rZVRhc2tDdXJyWm9uZSk7XG4gICAgICAgICAgICB0aGlzLl9jYW5jZWxUYXNrWlMgPVxuICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkNhbmNlbFRhc2sgPyB6b25lU3BlYyA6IHBhcmVudERlbGVnYXRlLl9jYW5jZWxUYXNrWlMpO1xuICAgICAgICAgICAgdGhpcy5fY2FuY2VsVGFza0RsZ3QgPVxuICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkNhbmNlbFRhc2sgPyBwYXJlbnREZWxlZ2F0ZSA6IHBhcmVudERlbGVnYXRlLl9jYW5jZWxUYXNrRGxndCk7XG4gICAgICAgICAgICB0aGlzLl9jYW5jZWxUYXNrQ3VyclpvbmUgPVxuICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkNhbmNlbFRhc2sgPyB0aGlzLnpvbmUgOiBwYXJlbnREZWxlZ2F0ZS5fY2FuY2VsVGFza0N1cnJab25lKTtcbiAgICAgICAgICAgIHRoaXMuX2hhc1Rhc2taUyA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9oYXNUYXNrRGxndCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9oYXNUYXNrRGxndE93bmVyID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX2hhc1Rhc2tDdXJyWm9uZSA9IG51bGw7XG4gICAgICAgICAgICBjb25zdCB6b25lU3BlY0hhc1Rhc2sgPSB6b25lU3BlYyAmJiB6b25lU3BlYy5vbkhhc1Rhc2s7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRIYXNUYXNrID0gcGFyZW50RGVsZWdhdGUgJiYgcGFyZW50RGVsZWdhdGUuX2hhc1Rhc2taUztcbiAgICAgICAgICAgIGlmICh6b25lU3BlY0hhc1Rhc2sgfHwgcGFyZW50SGFzVGFzaykge1xuICAgICAgICAgICAgICAgIC8vIElmIHdlIG5lZWQgdG8gcmVwb3J0IGhhc1Rhc2ssIHRoYW4gdGhpcyBaUyBuZWVkcyB0byBkbyByZWYgY291bnRpbmcgb24gdGFza3MuIEluIHN1Y2hcbiAgICAgICAgICAgICAgICAvLyBhIGNhc2UgYWxsIHRhc2sgcmVsYXRlZCBpbnRlcmNlcHRvcnMgbXVzdCBnbyB0aHJvdWdoIHRoaXMgWkQuIFdlIGNhbid0IHNob3J0IGNpcmN1aXQgaXQuXG4gICAgICAgICAgICAgICAgdGhpcy5faGFzVGFza1pTID0gem9uZVNwZWNIYXNUYXNrID8gem9uZVNwZWMgOiBERUxFR0FURV9aUztcbiAgICAgICAgICAgICAgICB0aGlzLl9oYXNUYXNrRGxndCA9IHBhcmVudERlbGVnYXRlO1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhc1Rhc2tEbGd0T3duZXIgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhc1Rhc2tDdXJyWm9uZSA9IHpvbmU7XG4gICAgICAgICAgICAgICAgaWYgKCF6b25lU3BlYy5vblNjaGVkdWxlVGFzaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY2hlZHVsZVRhc2taUyA9IERFTEVHQVRFX1pTO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY2hlZHVsZVRhc2tEbGd0ID0gcGFyZW50RGVsZWdhdGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NjaGVkdWxlVGFza0N1cnJab25lID0gdGhpcy56b25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXpvbmVTcGVjLm9uSW52b2tlVGFzaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbnZva2VUYXNrWlMgPSBERUxFR0FURV9aUztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW52b2tlVGFza0RsZ3QgPSBwYXJlbnREZWxlZ2F0ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW52b2tlVGFza0N1cnJab25lID0gdGhpcy56b25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXpvbmVTcGVjLm9uQ2FuY2VsVGFzaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYW5jZWxUYXNrWlMgPSBERUxFR0FURV9aUztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FuY2VsVGFza0RsZ3QgPSBwYXJlbnREZWxlZ2F0ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FuY2VsVGFza0N1cnJab25lID0gdGhpcy56b25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3JrKHRhcmdldFpvbmUsIHpvbmVTcGVjKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZm9ya1pTID8gdGhpcy5fZm9ya1pTLm9uRm9yayh0aGlzLl9mb3JrRGxndCwgdGhpcy56b25lLCB0YXJnZXRab25lLCB6b25lU3BlYykgOlxuICAgICAgICAgICAgICAgIG5ldyBab25lKHRhcmdldFpvbmUsIHpvbmVTcGVjKTtcbiAgICAgICAgfVxuICAgICAgICBpbnRlcmNlcHQodGFyZ2V0Wm9uZSwgY2FsbGJhY2ssIHNvdXJjZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ludGVyY2VwdFpTID9cbiAgICAgICAgICAgICAgICB0aGlzLl9pbnRlcmNlcHRaUy5vbkludGVyY2VwdCh0aGlzLl9pbnRlcmNlcHREbGd0LCB0aGlzLl9pbnRlcmNlcHRDdXJyWm9uZSwgdGFyZ2V0Wm9uZSwgY2FsbGJhY2ssIHNvdXJjZSkgOlxuICAgICAgICAgICAgICAgIGNhbGxiYWNrO1xuICAgICAgICB9XG4gICAgICAgIGludm9rZSh0YXJnZXRab25lLCBjYWxsYmFjaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MsIHNvdXJjZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZVpTID8gdGhpcy5faW52b2tlWlMub25JbnZva2UodGhpcy5faW52b2tlRGxndCwgdGhpcy5faW52b2tlQ3VyclpvbmUsIHRhcmdldFpvbmUsIGNhbGxiYWNrLCBhcHBseVRoaXMsIGFwcGx5QXJncywgc291cmNlKSA6XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkoYXBwbHlUaGlzLCBhcHBseUFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGhhbmRsZUVycm9yKHRhcmdldFpvbmUsIGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlRXJyb3JaUyA/XG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlRXJyb3JaUy5vbkhhbmRsZUVycm9yKHRoaXMuX2hhbmRsZUVycm9yRGxndCwgdGhpcy5faGFuZGxlRXJyb3JDdXJyWm9uZSwgdGFyZ2V0Wm9uZSwgZXJyb3IpIDpcbiAgICAgICAgICAgICAgICB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHNjaGVkdWxlVGFzayh0YXJnZXRab25lLCB0YXNrKSB7XG4gICAgICAgICAgICBsZXQgcmV0dXJuVGFzayA9IHRhc2s7XG4gICAgICAgICAgICBpZiAodGhpcy5fc2NoZWR1bGVUYXNrWlMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faGFzVGFza1pTKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblRhc2suX3pvbmVEZWxlZ2F0ZXMucHVzaCh0aGlzLl9oYXNUYXNrRGxndE93bmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gY2xhbmctZm9ybWF0IG9mZlxuICAgICAgICAgICAgICAgIHJldHVyblRhc2sgPSB0aGlzLl9zY2hlZHVsZVRhc2taUy5vblNjaGVkdWxlVGFzayh0aGlzLl9zY2hlZHVsZVRhc2tEbGd0LCB0aGlzLl9zY2hlZHVsZVRhc2tDdXJyWm9uZSwgdGFyZ2V0Wm9uZSwgdGFzayk7XG4gICAgICAgICAgICAgICAgLy8gY2xhbmctZm9ybWF0IG9uXG4gICAgICAgICAgICAgICAgaWYgKCFyZXR1cm5UYXNrKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm5UYXNrID0gdGFzaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLnNjaGVkdWxlRm4pIHtcbiAgICAgICAgICAgICAgICAgICAgdGFzay5zY2hlZHVsZUZuKHRhc2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0YXNrLnR5cGUgPT0gbWljcm9UYXNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjaGVkdWxlTWljcm9UYXNrKHRhc2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUYXNrIGlzIG1pc3Npbmcgc2NoZWR1bGVGbi4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmV0dXJuVGFzaztcbiAgICAgICAgfVxuICAgICAgICBpbnZva2VUYXNrKHRhcmdldFpvbmUsIHRhc2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlVGFza1pTID8gdGhpcy5faW52b2tlVGFza1pTLm9uSW52b2tlVGFzayh0aGlzLl9pbnZva2VUYXNrRGxndCwgdGhpcy5faW52b2tlVGFza0N1cnJab25lLCB0YXJnZXRab25lLCB0YXNrLCBhcHBseVRoaXMsIGFwcGx5QXJncykgOlxuICAgICAgICAgICAgICAgIHRhc2suY2FsbGJhY2suYXBwbHkoYXBwbHlUaGlzLCBhcHBseUFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGNhbmNlbFRhc2sodGFyZ2V0Wm9uZSwgdGFzaykge1xuICAgICAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2NhbmNlbFRhc2taUykge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5fY2FuY2VsVGFza1pTLm9uQ2FuY2VsVGFzayh0aGlzLl9jYW5jZWxUYXNrRGxndCwgdGhpcy5fY2FuY2VsVGFza0N1cnJab25lLCB0YXJnZXRab25lLCB0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghdGFzay5jYW5jZWxGbikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcignVGFzayBpcyBub3QgY2FuY2VsYWJsZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRhc2suY2FuY2VsRm4odGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaGFzVGFzayh0YXJnZXRab25lLCBpc0VtcHR5KSB7XG4gICAgICAgICAgICAvLyBoYXNUYXNrIHNob3VsZCBub3QgdGhyb3cgZXJyb3Igc28gb3RoZXIgWm9uZURlbGVnYXRlXG4gICAgICAgICAgICAvLyBjYW4gc3RpbGwgdHJpZ2dlciBoYXNUYXNrIGNhbGxiYWNrXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhc1Rhc2taUyAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYXNUYXNrWlMub25IYXNUYXNrKHRoaXMuX2hhc1Rhc2tEbGd0LCB0aGlzLl9oYXNUYXNrQ3VyclpvbmUsIHRhcmdldFpvbmUsIGlzRW1wdHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IodGFyZ2V0Wm9uZSwgZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cmVxdWlyZS1pbnRlcm5hbC13aXRoLXVuZGVyc2NvcmVcbiAgICAgICAgX3VwZGF0ZVRhc2tDb3VudCh0eXBlLCBjb3VudCkge1xuICAgICAgICAgICAgY29uc3QgY291bnRzID0gdGhpcy5fdGFza0NvdW50cztcbiAgICAgICAgICAgIGNvbnN0IHByZXYgPSBjb3VudHNbdHlwZV07XG4gICAgICAgICAgICBjb25zdCBuZXh0ID0gY291bnRzW3R5cGVdID0gcHJldiArIGNvdW50O1xuICAgICAgICAgICAgaWYgKG5leHQgPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNb3JlIHRhc2tzIGV4ZWN1dGVkIHRoZW4gd2VyZSBzY2hlZHVsZWQuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJldiA9PSAwIHx8IG5leHQgPT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzRW1wdHkgPSB7XG4gICAgICAgICAgICAgICAgICAgIG1pY3JvVGFzazogY291bnRzWydtaWNyb1Rhc2snXSA+IDAsXG4gICAgICAgICAgICAgICAgICAgIG1hY3JvVGFzazogY291bnRzWydtYWNyb1Rhc2snXSA+IDAsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50VGFzazogY291bnRzWydldmVudFRhc2snXSA+IDAsXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZTogdHlwZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5oYXNUYXNrKHRoaXMuem9uZSwgaXNFbXB0eSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2xhc3MgWm9uZVRhc2sge1xuICAgICAgICBjb25zdHJ1Y3Rvcih0eXBlLCBzb3VyY2UsIGNhbGxiYWNrLCBvcHRpb25zLCBzY2hlZHVsZUZuLCBjYW5jZWxGbikge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnJlcXVpcmUtaW50ZXJuYWwtd2l0aC11bmRlcnNjb3JlXG4gICAgICAgICAgICB0aGlzLl96b25lID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMucnVuQ291bnQgPSAwO1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnJlcXVpcmUtaW50ZXJuYWwtd2l0aC11bmRlcnNjb3JlXG4gICAgICAgICAgICB0aGlzLl96b25lRGVsZWdhdGVzID0gbnVsbDtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpyZXF1aXJlLWludGVybmFsLXdpdGgtdW5kZXJzY29yZVxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSAnbm90U2NoZWR1bGVkJztcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IG9wdGlvbnM7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlRm4gPSBzY2hlZHVsZUZuO1xuICAgICAgICAgICAgdGhpcy5jYW5jZWxGbiA9IGNhbmNlbEZuO1xuICAgICAgICAgICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY2FsbGJhY2sgaXMgbm90IGRlZmluZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgLy8gVE9ETzogQEppYUxpUGFzc2lvbiBvcHRpb25zIHNob3VsZCBoYXZlIGludGVyZmFjZVxuICAgICAgICAgICAgaWYgKHR5cGUgPT09IGV2ZW50VGFzayAmJiBvcHRpb25zICYmIG9wdGlvbnMudXNlRykge1xuICAgICAgICAgICAgICAgIHRoaXMuaW52b2tlID0gWm9uZVRhc2suaW52b2tlVGFzaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaW52b2tlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWm9uZVRhc2suaW52b2tlVGFzay5jYWxsKGdsb2JhbCwgc2VsZiwgdGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN0YXRpYyBpbnZva2VUYXNrKHRhc2ssIHRhcmdldCwgYXJncykge1xuICAgICAgICAgICAgaWYgKCF0YXNrKSB7XG4gICAgICAgICAgICAgICAgdGFzayA9IHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfbnVtYmVyT2ZOZXN0ZWRUYXNrRnJhbWVzKys7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRhc2sucnVuQ291bnQrKztcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFzay56b25lLnJ1blRhc2sodGFzaywgdGFyZ2V0LCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGlmIChfbnVtYmVyT2ZOZXN0ZWRUYXNrRnJhbWVzID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgZHJhaW5NaWNyb1Rhc2tRdWV1ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfbnVtYmVyT2ZOZXN0ZWRUYXNrRnJhbWVzLS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IHpvbmUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fem9uZTtcbiAgICAgICAgfVxuICAgICAgICBnZXQgc3RhdGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gICAgICAgIH1cbiAgICAgICAgY2FuY2VsU2NoZWR1bGVSZXF1ZXN0KCkge1xuICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvblRvKG5vdFNjaGVkdWxlZCwgc2NoZWR1bGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnJlcXVpcmUtaW50ZXJuYWwtd2l0aC11bmRlcnNjb3JlXG4gICAgICAgIF90cmFuc2l0aW9uVG8odG9TdGF0ZSwgZnJvbVN0YXRlMSwgZnJvbVN0YXRlMikge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSBmcm9tU3RhdGUxIHx8IHRoaXMuX3N0YXRlID09PSBmcm9tU3RhdGUyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSB0b1N0YXRlO1xuICAgICAgICAgICAgICAgIGlmICh0b1N0YXRlID09IG5vdFNjaGVkdWxlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl96b25lRGVsZWdhdGVzID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dGhpcy50eXBlfSAnJHt0aGlzLnNvdXJjZX0nOiBjYW4gbm90IHRyYW5zaXRpb24gdG8gJyR7dG9TdGF0ZX0nLCBleHBlY3Rpbmcgc3RhdGUgJyR7ZnJvbVN0YXRlMX0nJHtmcm9tU3RhdGUyID8gJyBvciBcXCcnICsgZnJvbVN0YXRlMiArICdcXCcnIDogJyd9LCB3YXMgJyR7dGhpcy5fc3RhdGV9Jy5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0b1N0cmluZygpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEgJiYgdHlwZW9mIHRoaXMuZGF0YS5oYW5kbGVJZCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmhhbmRsZUlkLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGFkZCB0b0pTT04gbWV0aG9kIHRvIHByZXZlbnQgY3ljbGljIGVycm9yIHdoZW5cbiAgICAgICAgLy8gY2FsbCBKU09OLnN0cmluZ2lmeSh6b25lVGFzaylcbiAgICAgICAgdG9KU09OKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICAgICAgICAgICAgc3RhdGU6IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICAgICAgc291cmNlOiB0aGlzLnNvdXJjZSxcbiAgICAgICAgICAgICAgICB6b25lOiB0aGlzLnpvbmUubmFtZSxcbiAgICAgICAgICAgICAgICBydW5Db3VudDogdGhpcy5ydW5Db3VudFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLy8gIE1JQ1JPVEFTSyBRVUVVRVxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIGNvbnN0IHN5bWJvbFNldFRpbWVvdXQgPSBfX3N5bWJvbF9fKCdzZXRUaW1lb3V0Jyk7XG4gICAgY29uc3Qgc3ltYm9sUHJvbWlzZSA9IF9fc3ltYm9sX18oJ1Byb21pc2UnKTtcbiAgICBjb25zdCBzeW1ib2xUaGVuID0gX19zeW1ib2xfXygndGhlbicpO1xuICAgIGxldCBfbWljcm9UYXNrUXVldWUgPSBbXTtcbiAgICBsZXQgX2lzRHJhaW5pbmdNaWNyb3Rhc2tRdWV1ZSA9IGZhbHNlO1xuICAgIGxldCBuYXRpdmVNaWNyb1Rhc2tRdWV1ZVByb21pc2U7XG4gICAgZnVuY3Rpb24gbmF0aXZlU2NoZWR1bGVNaWNyb1Rhc2soZnVuYykge1xuICAgICAgICBpZiAoIW5hdGl2ZU1pY3JvVGFza1F1ZXVlUHJvbWlzZSkge1xuICAgICAgICAgICAgaWYgKGdsb2JhbFtzeW1ib2xQcm9taXNlXSkge1xuICAgICAgICAgICAgICAgIG5hdGl2ZU1pY3JvVGFza1F1ZXVlUHJvbWlzZSA9IGdsb2JhbFtzeW1ib2xQcm9taXNlXS5yZXNvbHZlKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChuYXRpdmVNaWNyb1Rhc2tRdWV1ZVByb21pc2UpIHtcbiAgICAgICAgICAgIGxldCBuYXRpdmVUaGVuID0gbmF0aXZlTWljcm9UYXNrUXVldWVQcm9taXNlW3N5bWJvbFRoZW5dO1xuICAgICAgICAgICAgaWYgKCFuYXRpdmVUaGVuKSB7XG4gICAgICAgICAgICAgICAgLy8gbmF0aXZlIFByb21pc2UgaXMgbm90IHBhdGNoYWJsZSwgd2UgbmVlZCB0byB1c2UgYHRoZW5gIGRpcmVjdGx5XG4gICAgICAgICAgICAgICAgLy8gaXNzdWUgMTA3OFxuICAgICAgICAgICAgICAgIG5hdGl2ZVRoZW4gPSBuYXRpdmVNaWNyb1Rhc2tRdWV1ZVByb21pc2VbJ3RoZW4nXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5hdGl2ZVRoZW4uY2FsbChuYXRpdmVNaWNyb1Rhc2tRdWV1ZVByb21pc2UsIGZ1bmMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZ2xvYmFsW3N5bWJvbFNldFRpbWVvdXRdKGZ1bmMsIDApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNjaGVkdWxlTWljcm9UYXNrKHRhc2spIHtcbiAgICAgICAgLy8gaWYgd2UgYXJlIG5vdCBydW5uaW5nIGluIGFueSB0YXNrLCBhbmQgdGhlcmUgaGFzIG5vdCBiZWVuIGFueXRoaW5nIHNjaGVkdWxlZFxuICAgICAgICAvLyB3ZSBtdXN0IGJvb3RzdHJhcCB0aGUgaW5pdGlhbCB0YXNrIGNyZWF0aW9uIGJ5IG1hbnVhbGx5IHNjaGVkdWxpbmcgdGhlIGRyYWluXG4gICAgICAgIGlmIChfbnVtYmVyT2ZOZXN0ZWRUYXNrRnJhbWVzID09PSAwICYmIF9taWNyb1Rhc2tRdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIFdlIGFyZSBub3QgcnVubmluZyBpbiBUYXNrLCBzbyB3ZSBuZWVkIHRvIGtpY2tzdGFydCB0aGUgbWljcm90YXNrIHF1ZXVlLlxuICAgICAgICAgICAgbmF0aXZlU2NoZWR1bGVNaWNyb1Rhc2soZHJhaW5NaWNyb1Rhc2tRdWV1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGFzayAmJiBfbWljcm9UYXNrUXVldWUucHVzaCh0YXNrKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZHJhaW5NaWNyb1Rhc2tRdWV1ZSgpIHtcbiAgICAgICAgaWYgKCFfaXNEcmFpbmluZ01pY3JvdGFza1F1ZXVlKSB7XG4gICAgICAgICAgICBfaXNEcmFpbmluZ01pY3JvdGFza1F1ZXVlID0gdHJ1ZTtcbiAgICAgICAgICAgIHdoaWxlIChfbWljcm9UYXNrUXVldWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcXVldWUgPSBfbWljcm9UYXNrUXVldWU7XG4gICAgICAgICAgICAgICAgX21pY3JvVGFza1F1ZXVlID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrID0gcXVldWVbaV07XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLnpvbmUucnVuVGFzayh0YXNrLCBudWxsLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hcGkub25VbmhhbmRsZWRFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfYXBpLm1pY3JvdGFza0RyYWluRG9uZSgpO1xuICAgICAgICAgICAgX2lzRHJhaW5pbmdNaWNyb3Rhc2tRdWV1ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vLyAgQk9PVFNUUkFQXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgY29uc3QgTk9fWk9ORSA9IHsgbmFtZTogJ05PIFpPTkUnIH07XG4gICAgY29uc3Qgbm90U2NoZWR1bGVkID0gJ25vdFNjaGVkdWxlZCcsIHNjaGVkdWxpbmcgPSAnc2NoZWR1bGluZycsIHNjaGVkdWxlZCA9ICdzY2hlZHVsZWQnLCBydW5uaW5nID0gJ3J1bm5pbmcnLCBjYW5jZWxpbmcgPSAnY2FuY2VsaW5nJywgdW5rbm93biA9ICd1bmtub3duJztcbiAgICBjb25zdCBtaWNyb1Rhc2sgPSAnbWljcm9UYXNrJywgbWFjcm9UYXNrID0gJ21hY3JvVGFzaycsIGV2ZW50VGFzayA9ICdldmVudFRhc2snO1xuICAgIGNvbnN0IHBhdGNoZXMgPSB7fTtcbiAgICBjb25zdCBfYXBpID0ge1xuICAgICAgICBzeW1ib2w6IF9fc3ltYm9sX18sXG4gICAgICAgIGN1cnJlbnRab25lRnJhbWU6ICgpID0+IF9jdXJyZW50Wm9uZUZyYW1lLFxuICAgICAgICBvblVuaGFuZGxlZEVycm9yOiBub29wLFxuICAgICAgICBtaWNyb3Rhc2tEcmFpbkRvbmU6IG5vb3AsXG4gICAgICAgIHNjaGVkdWxlTWljcm9UYXNrOiBzY2hlZHVsZU1pY3JvVGFzayxcbiAgICAgICAgc2hvd1VuY2F1Z2h0RXJyb3I6ICgpID0+ICFab25lW19fc3ltYm9sX18oJ2lnbm9yZUNvbnNvbGVFcnJvclVuY2F1Z2h0RXJyb3InKV0sXG4gICAgICAgIHBhdGNoRXZlbnRUYXJnZXQ6ICgpID0+IFtdLFxuICAgICAgICBwYXRjaE9uUHJvcGVydGllczogbm9vcCxcbiAgICAgICAgcGF0Y2hNZXRob2Q6ICgpID0+IG5vb3AsXG4gICAgICAgIGJpbmRBcmd1bWVudHM6ICgpID0+IFtdLFxuICAgICAgICBwYXRjaFRoZW46ICgpID0+IG5vb3AsXG4gICAgICAgIHBhdGNoTWFjcm9UYXNrOiAoKSA9PiBub29wLFxuICAgICAgICBwYXRjaEV2ZW50UHJvdG90eXBlOiAoKSA9PiBub29wLFxuICAgICAgICBpc0lFT3JFZGdlOiAoKSA9PiBmYWxzZSxcbiAgICAgICAgZ2V0R2xvYmFsT2JqZWN0czogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBPYmplY3REZWZpbmVQcm9wZXJ0eTogKCkgPT4gbm9vcCxcbiAgICAgICAgT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAoKSA9PiB1bmRlZmluZWQsXG4gICAgICAgIE9iamVjdENyZWF0ZTogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICBBcnJheVNsaWNlOiAoKSA9PiBbXSxcbiAgICAgICAgcGF0Y2hDbGFzczogKCkgPT4gbm9vcCxcbiAgICAgICAgd3JhcFdpdGhDdXJyZW50Wm9uZTogKCkgPT4gbm9vcCxcbiAgICAgICAgZmlsdGVyUHJvcGVydGllczogKCkgPT4gW10sXG4gICAgICAgIGF0dGFjaE9yaWdpblRvUGF0Y2hlZDogKCkgPT4gbm9vcCxcbiAgICAgICAgX3JlZGVmaW5lUHJvcGVydHk6ICgpID0+IG5vb3AsXG4gICAgICAgIHBhdGNoQ2FsbGJhY2tzOiAoKSA9PiBub29wLFxuICAgICAgICBuYXRpdmVTY2hlZHVsZU1pY3JvVGFzazogbmF0aXZlU2NoZWR1bGVNaWNyb1Rhc2tcbiAgICB9O1xuICAgIGxldCBfY3VycmVudFpvbmVGcmFtZSA9IHsgcGFyZW50OiBudWxsLCB6b25lOiBuZXcgWm9uZShudWxsLCBudWxsKSB9O1xuICAgIGxldCBfY3VycmVudFRhc2sgPSBudWxsO1xuICAgIGxldCBfbnVtYmVyT2ZOZXN0ZWRUYXNrRnJhbWVzID0gMDtcbiAgICBmdW5jdGlvbiBub29wKCkgeyB9XG4gICAgcGVyZm9ybWFuY2VNZWFzdXJlKCdab25lJywgJ1pvbmUnKTtcbiAgICByZXR1cm4gZ2xvYmFsWydab25lJ10gPSBab25lO1xufSkpKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdyB8fCB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZiB8fCBnbG9iYWwpO1xuXG4vKipcbiAqIFN1cHByZXNzIGNsb3N1cmUgY29tcGlsZXIgZXJyb3JzIGFib3V0IHVua25vd24gJ1pvbmUnIHZhcmlhYmxlXG4gKiBAZmlsZW92ZXJ2aWV3XG4gKiBAc3VwcHJlc3Mge3VuZGVmaW5lZFZhcnMsZ2xvYmFsVGhpcyxtaXNzaW5nUmVxdWlyZX1cbiAqL1xuLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJub2RlXCIvPlxuLy8gaXNzdWUgIzk4OSwgdG8gcmVkdWNlIGJ1bmRsZSBzaXplLCB1c2Ugc2hvcnQgbmFtZVxuLyoqIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgKi9cbmNvbnN0IE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4vKiogT2JqZWN0LmRlZmluZVByb3BlcnR5ICovXG5jb25zdCBPYmplY3REZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbi8qKiBPYmplY3QuZ2V0UHJvdG90eXBlT2YgKi9cbmNvbnN0IE9iamVjdEdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuLyoqIE9iamVjdC5jcmVhdGUgKi9cbmNvbnN0IE9iamVjdENyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG4vKiogQXJyYXkucHJvdG90eXBlLnNsaWNlICovXG5jb25zdCBBcnJheVNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuLyoqIGFkZEV2ZW50TGlzdGVuZXIgc3RyaW5nIGNvbnN0ICovXG5jb25zdCBBRERfRVZFTlRfTElTVEVORVJfU1RSID0gJ2FkZEV2ZW50TGlzdGVuZXInO1xuLyoqIHJlbW92ZUV2ZW50TGlzdGVuZXIgc3RyaW5nIGNvbnN0ICovXG5jb25zdCBSRU1PVkVfRVZFTlRfTElTVEVORVJfU1RSID0gJ3JlbW92ZUV2ZW50TGlzdGVuZXInO1xuLyoqIHpvbmVTeW1ib2wgYWRkRXZlbnRMaXN0ZW5lciAqL1xuY29uc3QgWk9ORV9TWU1CT0xfQUREX0VWRU5UX0xJU1RFTkVSID0gWm9uZS5fX3N5bWJvbF9fKEFERF9FVkVOVF9MSVNURU5FUl9TVFIpO1xuLyoqIHpvbmVTeW1ib2wgcmVtb3ZlRXZlbnRMaXN0ZW5lciAqL1xuY29uc3QgWk9ORV9TWU1CT0xfUkVNT1ZFX0VWRU5UX0xJU1RFTkVSID0gWm9uZS5fX3N5bWJvbF9fKFJFTU9WRV9FVkVOVF9MSVNURU5FUl9TVFIpO1xuLyoqIHRydWUgc3RyaW5nIGNvbnN0ICovXG5jb25zdCBUUlVFX1NUUiA9ICd0cnVlJztcbi8qKiBmYWxzZSBzdHJpbmcgY29uc3QgKi9cbmNvbnN0IEZBTFNFX1NUUiA9ICdmYWxzZSc7XG4vKiogWm9uZSBzeW1ib2wgcHJlZml4IHN0cmluZyBjb25zdC4gKi9cbmNvbnN0IFpPTkVfU1lNQk9MX1BSRUZJWCA9IFpvbmUuX19zeW1ib2xfXygnJyk7XG5mdW5jdGlvbiB3cmFwV2l0aEN1cnJlbnRab25lKGNhbGxiYWNrLCBzb3VyY2UpIHtcbiAgICByZXR1cm4gWm9uZS5jdXJyZW50LndyYXAoY2FsbGJhY2ssIHNvdXJjZSk7XG59XG5mdW5jdGlvbiBzY2hlZHVsZU1hY3JvVGFza1dpdGhDdXJyZW50Wm9uZShzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSwgY3VzdG9tQ2FuY2VsKSB7XG4gICAgcmV0dXJuIFpvbmUuY3VycmVudC5zY2hlZHVsZU1hY3JvVGFzayhzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSwgY3VzdG9tQ2FuY2VsKTtcbn1cbmNvbnN0IHpvbmVTeW1ib2wgPSBab25lLl9fc3ltYm9sX187XG5jb25zdCBpc1dpbmRvd0V4aXN0cyA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xuY29uc3QgaW50ZXJuYWxXaW5kb3cgPSBpc1dpbmRvd0V4aXN0cyA/IHdpbmRvdyA6IHVuZGVmaW5lZDtcbmNvbnN0IF9nbG9iYWwgPSBpc1dpbmRvd0V4aXN0cyAmJiBpbnRlcm5hbFdpbmRvdyB8fCB0eXBlb2Ygc2VsZiA9PT0gJ29iamVjdCcgJiYgc2VsZiB8fCBnbG9iYWw7XG5jb25zdCBSRU1PVkVfQVRUUklCVVRFID0gJ3JlbW92ZUF0dHJpYnV0ZSc7XG5mdW5jdGlvbiBiaW5kQXJndW1lbnRzKGFyZ3MsIHNvdXJjZSkge1xuICAgIGZvciAobGV0IGkgPSBhcmdzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYXJnc1tpXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgYXJnc1tpXSA9IHdyYXBXaXRoQ3VycmVudFpvbmUoYXJnc1tpXSwgc291cmNlICsgJ18nICsgaSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFyZ3M7XG59XG5mdW5jdGlvbiBwYXRjaFByb3RvdHlwZShwcm90b3R5cGUsIGZuTmFtZXMpIHtcbiAgICBjb25zdCBzb3VyY2UgPSBwcm90b3R5cGUuY29uc3RydWN0b3JbJ25hbWUnXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZuTmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGZuTmFtZXNbaV07XG4gICAgICAgIGNvbnN0IGRlbGVnYXRlID0gcHJvdG90eXBlW25hbWVdO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3RvdHlwZURlc2MgPSBPYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG90eXBlLCBuYW1lKTtcbiAgICAgICAgICAgIGlmICghaXNQcm9wZXJ0eVdyaXRhYmxlKHByb3RvdHlwZURlc2MpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm90b3R5cGVbbmFtZV0gPSAoKGRlbGVnYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGF0Y2hlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlLmFwcGx5KHRoaXMsIGJpbmRBcmd1bWVudHMoYXJndW1lbnRzLCBzb3VyY2UgKyAnLicgKyBuYW1lKSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBhdHRhY2hPcmlnaW5Ub1BhdGNoZWQocGF0Y2hlZCwgZGVsZWdhdGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXRjaGVkO1xuICAgICAgICAgICAgfSkoZGVsZWdhdGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gaXNQcm9wZXJ0eVdyaXRhYmxlKHByb3BlcnR5RGVzYykge1xuICAgIGlmICghcHJvcGVydHlEZXNjKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAocHJvcGVydHlEZXNjLndyaXRhYmxlID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiAhKHR5cGVvZiBwcm9wZXJ0eURlc2MuZ2V0ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBwcm9wZXJ0eURlc2Muc2V0ID09PSAndW5kZWZpbmVkJyk7XG59XG5jb25zdCBpc1dlYldvcmtlciA9ICh0eXBlb2YgV29ya2VyR2xvYmFsU2NvcGUgIT09ICd1bmRlZmluZWQnICYmIHNlbGYgaW5zdGFuY2VvZiBXb3JrZXJHbG9iYWxTY29wZSk7XG4vLyBNYWtlIHN1cmUgdG8gYWNjZXNzIGBwcm9jZXNzYCB0aHJvdWdoIGBfZ2xvYmFsYCBzbyB0aGF0IFdlYlBhY2sgZG9lcyBub3QgYWNjaWRlbnRhbGx5IGJyb3dzZXJpZnlcbi8vIHRoaXMgY29kZS5cbmNvbnN0IGlzTm9kZSA9ICghKCdudycgaW4gX2dsb2JhbCkgJiYgdHlwZW9mIF9nbG9iYWwucHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB7fS50b1N0cmluZy5jYWxsKF9nbG9iYWwucHJvY2VzcykgPT09ICdbb2JqZWN0IHByb2Nlc3NdJyk7XG5jb25zdCBpc0Jyb3dzZXIgPSAhaXNOb2RlICYmICFpc1dlYldvcmtlciAmJiAhIShpc1dpbmRvd0V4aXN0cyAmJiBpbnRlcm5hbFdpbmRvd1snSFRNTEVsZW1lbnQnXSk7XG4vLyB3ZSBhcmUgaW4gZWxlY3Ryb24gb2YgbncsIHNvIHdlIGFyZSBib3RoIGJyb3dzZXIgYW5kIG5vZGVqc1xuLy8gTWFrZSBzdXJlIHRvIGFjY2VzcyBgcHJvY2Vzc2AgdGhyb3VnaCBgX2dsb2JhbGAgc28gdGhhdCBXZWJQYWNrIGRvZXMgbm90IGFjY2lkZW50YWxseSBicm93c2VyaWZ5XG4vLyB0aGlzIGNvZGUuXG5jb25zdCBpc01peCA9IHR5cGVvZiBfZ2xvYmFsLnByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmXG4gICAge30udG9TdHJpbmcuY2FsbChfZ2xvYmFsLnByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXScgJiYgIWlzV2ViV29ya2VyICYmXG4gICAgISEoaXNXaW5kb3dFeGlzdHMgJiYgaW50ZXJuYWxXaW5kb3dbJ0hUTUxFbGVtZW50J10pO1xuY29uc3Qgem9uZVN5bWJvbEV2ZW50TmFtZXMkMSA9IHt9O1xuY29uc3Qgd3JhcEZuID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvem9uZS5qcy9pc3N1ZXMvOTExLCBpbiBJRSwgc29tZXRpbWVzXG4gICAgLy8gZXZlbnQgd2lsbCBiZSB1bmRlZmluZWQsIHNvIHdlIG5lZWQgdG8gdXNlIHdpbmRvdy5ldmVudFxuICAgIGV2ZW50ID0gZXZlbnQgfHwgX2dsb2JhbC5ldmVudDtcbiAgICBpZiAoIWV2ZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGV2ZW50TmFtZVN5bWJvbCA9IHpvbmVTeW1ib2xFdmVudE5hbWVzJDFbZXZlbnQudHlwZV07XG4gICAgaWYgKCFldmVudE5hbWVTeW1ib2wpIHtcbiAgICAgICAgZXZlbnROYW1lU3ltYm9sID0gem9uZVN5bWJvbEV2ZW50TmFtZXMkMVtldmVudC50eXBlXSA9IHpvbmVTeW1ib2woJ09OX1BST1BFUlRZJyArIGV2ZW50LnR5cGUpO1xuICAgIH1cbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzIHx8IGV2ZW50LnRhcmdldCB8fCBfZ2xvYmFsO1xuICAgIGNvbnN0IGxpc3RlbmVyID0gdGFyZ2V0W2V2ZW50TmFtZVN5bWJvbF07XG4gICAgbGV0IHJlc3VsdDtcbiAgICBpZiAoaXNCcm93c2VyICYmIHRhcmdldCA9PT0gaW50ZXJuYWxXaW5kb3cgJiYgZXZlbnQudHlwZSA9PT0gJ2Vycm9yJykge1xuICAgICAgICAvLyB3aW5kb3cub25lcnJvciBoYXZlIGRpZmZlcmVudCBzaWduYXR1cmVcbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0dsb2JhbEV2ZW50SGFuZGxlcnMvb25lcnJvciN3aW5kb3cub25lcnJvclxuICAgICAgICAvLyBhbmQgb25lcnJvciBjYWxsYmFjayB3aWxsIHByZXZlbnQgZGVmYXVsdCB3aGVuIGNhbGxiYWNrIHJldHVybiB0cnVlXG4gICAgICAgIGNvbnN0IGVycm9yRXZlbnQgPSBldmVudDtcbiAgICAgICAgcmVzdWx0ID0gbGlzdGVuZXIgJiZcbiAgICAgICAgICAgIGxpc3RlbmVyLmNhbGwodGhpcywgZXJyb3JFdmVudC5tZXNzYWdlLCBlcnJvckV2ZW50LmZpbGVuYW1lLCBlcnJvckV2ZW50LmxpbmVubywgZXJyb3JFdmVudC5jb2xubywgZXJyb3JFdmVudC5lcnJvcik7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IGxpc3RlbmVyICYmIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIGlmIChyZXN1bHQgIT0gdW5kZWZpbmVkICYmICFyZXN1bHQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5mdW5jdGlvbiBwYXRjaFByb3BlcnR5KG9iaiwgcHJvcCwgcHJvdG90eXBlKSB7XG4gICAgbGV0IGRlc2MgPSBPYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBwcm9wKTtcbiAgICBpZiAoIWRlc2MgJiYgcHJvdG90eXBlKSB7XG4gICAgICAgIC8vIHdoZW4gcGF0Y2ggd2luZG93IG9iamVjdCwgdXNlIHByb3RvdHlwZSB0byBjaGVjayBwcm9wIGV4aXN0IG9yIG5vdFxuICAgICAgICBjb25zdCBwcm90b3R5cGVEZXNjID0gT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvdHlwZSwgcHJvcCk7XG4gICAgICAgIGlmIChwcm90b3R5cGVEZXNjKSB7XG4gICAgICAgICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBpZiB0aGUgZGVzY3JpcHRvciBub3QgZXhpc3RzIG9yIGlzIG5vdCBjb25maWd1cmFibGVcbiAgICAvLyBqdXN0IHJldHVyblxuICAgIGlmICghZGVzYyB8fCAhZGVzYy5jb25maWd1cmFibGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBvblByb3BQYXRjaGVkU3ltYm9sID0gem9uZVN5bWJvbCgnb24nICsgcHJvcCArICdwYXRjaGVkJyk7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShvblByb3BQYXRjaGVkU3ltYm9sKSAmJiBvYmpbb25Qcm9wUGF0Y2hlZFN5bWJvbF0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBBIHByb3BlcnR5IGRlc2NyaXB0b3IgY2Fubm90IGhhdmUgZ2V0dGVyL3NldHRlciBhbmQgYmUgd3JpdGFibGVcbiAgICAvLyBkZWxldGluZyB0aGUgd3JpdGFibGUgYW5kIHZhbHVlIHByb3BlcnRpZXMgYXZvaWRzIHRoaXMgZXJyb3I6XG4gICAgLy9cbiAgICAvLyBUeXBlRXJyb3I6IHByb3BlcnR5IGRlc2NyaXB0b3JzIG11c3Qgbm90IHNwZWNpZnkgYSB2YWx1ZSBvciBiZSB3cml0YWJsZSB3aGVuIGFcbiAgICAvLyBnZXR0ZXIgb3Igc2V0dGVyIGhhcyBiZWVuIHNwZWNpZmllZFxuICAgIGRlbGV0ZSBkZXNjLndyaXRhYmxlO1xuICAgIGRlbGV0ZSBkZXNjLnZhbHVlO1xuICAgIGNvbnN0IG9yaWdpbmFsRGVzY0dldCA9IGRlc2MuZ2V0O1xuICAgIGNvbnN0IG9yaWdpbmFsRGVzY1NldCA9IGRlc2Muc2V0O1xuICAgIC8vIHNsaWNlKDIpIGN1eiAnb25jbGljaycgLT4gJ2NsaWNrJywgZXRjXG4gICAgY29uc3QgZXZlbnROYW1lID0gcHJvcC5zbGljZSgyKTtcbiAgICBsZXQgZXZlbnROYW1lU3ltYm9sID0gem9uZVN5bWJvbEV2ZW50TmFtZXMkMVtldmVudE5hbWVdO1xuICAgIGlmICghZXZlbnROYW1lU3ltYm9sKSB7XG4gICAgICAgIGV2ZW50TmFtZVN5bWJvbCA9IHpvbmVTeW1ib2xFdmVudE5hbWVzJDFbZXZlbnROYW1lXSA9IHpvbmVTeW1ib2woJ09OX1BST1BFUlRZJyArIGV2ZW50TmFtZSk7XG4gICAgfVxuICAgIGRlc2Muc2V0ID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgIC8vIGluIHNvbWUgb2Ygd2luZG93cydzIG9ucHJvcGVydHkgY2FsbGJhY2ssIHRoaXMgaXMgdW5kZWZpbmVkXG4gICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gY2hlY2sgaXRcbiAgICAgICAgbGV0IHRhcmdldCA9IHRoaXM7XG4gICAgICAgIGlmICghdGFyZ2V0ICYmIG9iaiA9PT0gX2dsb2JhbCkge1xuICAgICAgICAgICAgdGFyZ2V0ID0gX2dsb2JhbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWUgPSB0YXJnZXRbZXZlbnROYW1lU3ltYm9sXTtcbiAgICAgICAgaWYgKHR5cGVvZiBwcmV2aW91c1ZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHdyYXBGbik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaXNzdWUgIzk3OCwgd2hlbiBvbmxvYWQgaGFuZGxlciB3YXMgYWRkZWQgYmVmb3JlIGxvYWRpbmcgem9uZS5qc1xuICAgICAgICAvLyB3ZSBzaG91bGQgcmVtb3ZlIGl0IHdpdGggb3JpZ2luYWxEZXNjU2V0XG4gICAgICAgIG9yaWdpbmFsRGVzY1NldCAmJiBvcmlnaW5hbERlc2NTZXQuY2FsbCh0YXJnZXQsIG51bGwpO1xuICAgICAgICB0YXJnZXRbZXZlbnROYW1lU3ltYm9sXSA9IG5ld1ZhbHVlO1xuICAgICAgICBpZiAodHlwZW9mIG5ld1ZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHdyYXBGbiwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBUaGUgZ2V0dGVyIHdvdWxkIHJldHVybiB1bmRlZmluZWQgZm9yIHVuYXNzaWduZWQgcHJvcGVydGllcyBidXQgdGhlIGRlZmF1bHQgdmFsdWUgb2YgYW5cbiAgICAvLyB1bmFzc2lnbmVkIHByb3BlcnR5IGlzIG51bGxcbiAgICBkZXNjLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gaW4gc29tZSBvZiB3aW5kb3dzJ3Mgb25wcm9wZXJ0eSBjYWxsYmFjaywgdGhpcyBpcyB1bmRlZmluZWRcbiAgICAgICAgLy8gc28gd2UgbmVlZCB0byBjaGVjayBpdFxuICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcztcbiAgICAgICAgaWYgKCF0YXJnZXQgJiYgb2JqID09PSBfZ2xvYmFsKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSBfZ2xvYmFsO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsaXN0ZW5lciA9IHRhcmdldFtldmVudE5hbWVTeW1ib2xdO1xuICAgICAgICBpZiAobGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChvcmlnaW5hbERlc2NHZXQpIHtcbiAgICAgICAgICAgIC8vIHJlc3VsdCB3aWxsIGJlIG51bGwgd2hlbiB1c2UgaW5saW5lIGV2ZW50IGF0dHJpYnV0ZSxcbiAgICAgICAgICAgIC8vIHN1Y2ggYXMgPGJ1dHRvbiBvbmNsaWNrPVwiZnVuYygpO1wiPk9LPC9idXR0b24+XG4gICAgICAgICAgICAvLyBiZWNhdXNlIHRoZSBvbmNsaWNrIGZ1bmN0aW9uIGlzIGludGVybmFsIHJhdyB1bmNvbXBpbGVkIGhhbmRsZXJcbiAgICAgICAgICAgIC8vIHRoZSBvbmNsaWNrIHdpbGwgYmUgZXZhbHVhdGVkIHdoZW4gZmlyc3QgdGltZSBldmVudCB3YXMgdHJpZ2dlcmVkIG9yXG4gICAgICAgICAgICAvLyB0aGUgcHJvcGVydHkgaXMgYWNjZXNzZWQsIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3pvbmUuanMvaXNzdWVzLzUyNVxuICAgICAgICAgICAgLy8gc28gd2Ugc2hvdWxkIHVzZSBvcmlnaW5hbCBuYXRpdmUgZ2V0IHRvIHJldHJpZXZlIHRoZSBoYW5kbGVyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBvcmlnaW5hbERlc2NHZXQuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGRlc2Muc2V0LmNhbGwodGhpcywgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0W1JFTU9WRV9BVFRSSUJVVEVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5yZW1vdmVBdHRyaWJ1dGUocHJvcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIE9iamVjdERlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgZGVzYyk7XG4gICAgb2JqW29uUHJvcFBhdGNoZWRTeW1ib2xdID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIHBhdGNoT25Qcm9wZXJ0aWVzKG9iaiwgcHJvcGVydGllcywgcHJvdG90eXBlKSB7XG4gICAgaWYgKHByb3BlcnRpZXMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwYXRjaFByb3BlcnR5KG9iaiwgJ29uJyArIHByb3BlcnRpZXNbaV0sIHByb3RvdHlwZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IG9uUHJvcGVydGllcyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IHByb3AgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAocHJvcC5zbGljZSgwLCAyKSA9PSAnb24nKSB7XG4gICAgICAgICAgICAgICAgb25Qcm9wZXJ0aWVzLnB1c2gocHJvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBvblByb3BlcnRpZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIHBhdGNoUHJvcGVydHkob2JqLCBvblByb3BlcnRpZXNbal0sIHByb3RvdHlwZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5jb25zdCBvcmlnaW5hbEluc3RhbmNlS2V5ID0gem9uZVN5bWJvbCgnb3JpZ2luYWxJbnN0YW5jZScpO1xuLy8gd3JhcCBzb21lIG5hdGl2ZSBBUEkgb24gYHdpbmRvd2BcbmZ1bmN0aW9uIHBhdGNoQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgT3JpZ2luYWxDbGFzcyA9IF9nbG9iYWxbY2xhc3NOYW1lXTtcbiAgICBpZiAoIU9yaWdpbmFsQ2xhc3MpXG4gICAgICAgIHJldHVybjtcbiAgICAvLyBrZWVwIG9yaWdpbmFsIGNsYXNzIGluIGdsb2JhbFxuICAgIF9nbG9iYWxbem9uZVN5bWJvbChjbGFzc05hbWUpXSA9IE9yaWdpbmFsQ2xhc3M7XG4gICAgX2dsb2JhbFtjbGFzc05hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBhID0gYmluZEFyZ3VtZW50cyhhcmd1bWVudHMsIGNsYXNzTmFtZSk7XG4gICAgICAgIHN3aXRjaCAoYS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldID0gbmV3IE9yaWdpbmFsQ2xhc3MoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldID0gbmV3IE9yaWdpbmFsQ2xhc3MoYVswXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XSA9IG5ldyBPcmlnaW5hbENsYXNzKGFbMF0sIGFbMV0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV0gPSBuZXcgT3JpZ2luYWxDbGFzcyhhWzBdLCBhWzFdLCBhWzJdKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldID0gbmV3IE9yaWdpbmFsQ2xhc3MoYVswXSwgYVsxXSwgYVsyXSwgYVszXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQXJnIGxpc3QgdG9vIGxvbmcuJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIGF0dGFjaCBvcmlnaW5hbCBkZWxlZ2F0ZSB0byBwYXRjaGVkIGZ1bmN0aW9uXG4gICAgYXR0YWNoT3JpZ2luVG9QYXRjaGVkKF9nbG9iYWxbY2xhc3NOYW1lXSwgT3JpZ2luYWxDbGFzcyk7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgT3JpZ2luYWxDbGFzcyhmdW5jdGlvbiAoKSB7IH0pO1xuICAgIGxldCBwcm9wO1xuICAgIGZvciAocHJvcCBpbiBpbnN0YW5jZSkge1xuICAgICAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NDQ3MjFcbiAgICAgICAgaWYgKGNsYXNzTmFtZSA9PT0gJ1hNTEh0dHBSZXF1ZXN0JyAmJiBwcm9wID09PSAncmVzcG9uc2VCbG9iJylcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAoZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaW5zdGFuY2VbcHJvcF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBfZ2xvYmFsW2NsYXNzTmFtZV0ucHJvdG90eXBlW3Byb3BdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XVtwcm9wXS5hcHBseSh0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBPYmplY3REZWZpbmVQcm9wZXJ0eShfZ2xvYmFsW2NsYXNzTmFtZV0ucHJvdG90eXBlLCBwcm9wLCB7XG4gICAgICAgICAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XVtwcm9wXSA9IHdyYXBXaXRoQ3VycmVudFpvbmUoZm4sIGNsYXNzTmFtZSArICcuJyArIHByb3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGtlZXAgY2FsbGJhY2sgaW4gd3JhcHBlZCBmdW5jdGlvbiBzbyB3ZSBjYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB1c2UgaXQgaW4gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nIHRvIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBuYXRpdmUgb25lLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFjaE9yaWdpblRvUGF0Y2hlZCh0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldW3Byb3BdLCBmbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldW3Byb3BdID0gZm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV1bcHJvcF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfShwcm9wKSk7XG4gICAgfVxuICAgIGZvciAocHJvcCBpbiBPcmlnaW5hbENsYXNzKSB7XG4gICAgICAgIGlmIChwcm9wICE9PSAncHJvdG90eXBlJyAmJiBPcmlnaW5hbENsYXNzLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgICAgICBfZ2xvYmFsW2NsYXNzTmFtZV1bcHJvcF0gPSBPcmlnaW5hbENsYXNzW3Byb3BdO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gcGF0Y2hNZXRob2QodGFyZ2V0LCBuYW1lLCBwYXRjaEZuKSB7XG4gICAgbGV0IHByb3RvID0gdGFyZ2V0O1xuICAgIHdoaWxlIChwcm90byAmJiAhcHJvdG8uaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgcHJvdG8gPSBPYmplY3RHZXRQcm90b3R5cGVPZihwcm90byk7XG4gICAgfVxuICAgIGlmICghcHJvdG8gJiYgdGFyZ2V0W25hbWVdKSB7XG4gICAgICAgIC8vIHNvbWVob3cgd2UgZGlkIG5vdCBmaW5kIGl0LCBidXQgd2UgY2FuIHNlZSBpdC4gVGhpcyBoYXBwZW5zIG9uIElFIGZvciBXaW5kb3cgcHJvcGVydGllcy5cbiAgICAgICAgcHJvdG8gPSB0YXJnZXQ7XG4gICAgfVxuICAgIGNvbnN0IGRlbGVnYXRlTmFtZSA9IHpvbmVTeW1ib2wobmFtZSk7XG4gICAgbGV0IGRlbGVnYXRlID0gbnVsbDtcbiAgICBpZiAocHJvdG8gJiYgKCEoZGVsZWdhdGUgPSBwcm90b1tkZWxlZ2F0ZU5hbWVdKSB8fCAhcHJvdG8uaGFzT3duUHJvcGVydHkoZGVsZWdhdGVOYW1lKSkpIHtcbiAgICAgICAgZGVsZWdhdGUgPSBwcm90b1tkZWxlZ2F0ZU5hbWVdID0gcHJvdG9bbmFtZV07XG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgcHJvdG9bbmFtZV0gaXMgd3JpdGFibGVcbiAgICAgICAgLy8gc29tZSBwcm9wZXJ0eSBpcyByZWFkb25seSBpbiBzYWZhcmksIHN1Y2ggYXMgSHRtbENhbnZhc0VsZW1lbnQucHJvdG90eXBlLnRvQmxvYlxuICAgICAgICBjb25zdCBkZXNjID0gcHJvdG8gJiYgT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvLCBuYW1lKTtcbiAgICAgICAgaWYgKGlzUHJvcGVydHlXcml0YWJsZShkZXNjKSkge1xuICAgICAgICAgICAgY29uc3QgcGF0Y2hEZWxlZ2F0ZSA9IHBhdGNoRm4oZGVsZWdhdGUsIGRlbGVnYXRlTmFtZSwgbmFtZSk7XG4gICAgICAgICAgICBwcm90b1tuYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGF0Y2hEZWxlZ2F0ZSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGF0dGFjaE9yaWdpblRvUGF0Y2hlZChwcm90b1tuYW1lXSwgZGVsZWdhdGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZWxlZ2F0ZTtcbn1cbi8vIFRPRE86IEBKaWFMaVBhc3Npb24sIHN1cHBvcnQgY2FuY2VsIHRhc2sgbGF0ZXIgaWYgbmVjZXNzYXJ5XG5mdW5jdGlvbiBwYXRjaE1hY3JvVGFzayhvYmosIGZ1bmNOYW1lLCBtZXRhQ3JlYXRvcikge1xuICAgIGxldCBzZXROYXRpdmUgPSBudWxsO1xuICAgIGZ1bmN0aW9uIHNjaGVkdWxlVGFzayh0YXNrKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0YXNrLmRhdGE7XG4gICAgICAgIGRhdGEuYXJnc1tkYXRhLmNiSWR4XSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRhc2suaW52b2tlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgICAgIHNldE5hdGl2ZS5hcHBseShkYXRhLnRhcmdldCwgZGF0YS5hcmdzKTtcbiAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgfVxuICAgIHNldE5hdGl2ZSA9IHBhdGNoTWV0aG9kKG9iaiwgZnVuY05hbWUsIChkZWxlZ2F0ZSkgPT4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgY29uc3QgbWV0YSA9IG1ldGFDcmVhdG9yKHNlbGYsIGFyZ3MpO1xuICAgICAgICBpZiAobWV0YS5jYklkeCA+PSAwICYmIHR5cGVvZiBhcmdzW21ldGEuY2JJZHhdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NoZWR1bGVNYWNyb1Rhc2tXaXRoQ3VycmVudFpvbmUobWV0YS5uYW1lLCBhcmdzW21ldGEuY2JJZHhdLCBtZXRhLCBzY2hlZHVsZVRhc2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gY2F1c2UgYW4gZXJyb3IgYnkgY2FsbGluZyBpdCBkaXJlY3RseS5cbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gYXR0YWNoT3JpZ2luVG9QYXRjaGVkKHBhdGNoZWQsIG9yaWdpbmFsKSB7XG4gICAgcGF0Y2hlZFt6b25lU3ltYm9sKCdPcmlnaW5hbERlbGVnYXRlJyldID0gb3JpZ2luYWw7XG59XG5sZXQgaXNEZXRlY3RlZElFT3JFZGdlID0gZmFsc2U7XG5sZXQgaWVPckVkZ2UgPSBmYWxzZTtcbmZ1bmN0aW9uIGlzSUUoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdWEgPSBpbnRlcm5hbFdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xuICAgICAgICBpZiAodWEuaW5kZXhPZignTVNJRSAnKSAhPT0gLTEgfHwgdWEuaW5kZXhPZignVHJpZGVudC8nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc0lFT3JFZGdlKCkge1xuICAgIGlmIChpc0RldGVjdGVkSUVPckVkZ2UpIHtcbiAgICAgICAgcmV0dXJuIGllT3JFZGdlO1xuICAgIH1cbiAgICBpc0RldGVjdGVkSUVPckVkZ2UgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHVhID0gaW50ZXJuYWxXaW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICAgICAgaWYgKHVhLmluZGV4T2YoJ01TSUUgJykgIT09IC0xIHx8IHVhLmluZGV4T2YoJ1RyaWRlbnQvJykgIT09IC0xIHx8IHVhLmluZGV4T2YoJ0VkZ2UvJykgIT09IC0xKSB7XG4gICAgICAgICAgICBpZU9yRWRnZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgfVxuICAgIHJldHVybiBpZU9yRWRnZTtcbn1cblxuWm9uZS5fX2xvYWRfcGF0Y2goJ1pvbmVBd2FyZVByb21pc2UnLCAoZ2xvYmFsLCBab25lLCBhcGkpID0+IHtcbiAgICBjb25zdCBPYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAgIGNvbnN0IE9iamVjdERlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuICAgIGZ1bmN0aW9uIHJlYWRhYmxlT2JqZWN0VG9TdHJpbmcob2JqKSB7XG4gICAgICAgIGlmIChvYmogJiYgb2JqLnRvU3RyaW5nID09PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBvYmouY29uc3RydWN0b3IgJiYgb2JqLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgICAgICByZXR1cm4gKGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICcnKSArICc6ICcgKyBKU09OLnN0cmluZ2lmeShvYmopO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmogPyBvYmoudG9TdHJpbmcoKSA6IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopO1xuICAgIH1cbiAgICBjb25zdCBfX3N5bWJvbF9fID0gYXBpLnN5bWJvbDtcbiAgICBjb25zdCBfdW5jYXVnaHRQcm9taXNlRXJyb3JzID0gW107XG4gICAgY29uc3QgaXNEaXNhYmxlV3JhcHBpbmdVbmNhdWdodFByb21pc2VSZWplY3Rpb24gPSBnbG9iYWxbX19zeW1ib2xfXygnRElTQUJMRV9XUkFQUElOR19VTkNBVUdIVF9QUk9NSVNFX1JFSkVDVElPTicpXSA9PT0gdHJ1ZTtcbiAgICBjb25zdCBzeW1ib2xQcm9taXNlID0gX19zeW1ib2xfXygnUHJvbWlzZScpO1xuICAgIGNvbnN0IHN5bWJvbFRoZW4gPSBfX3N5bWJvbF9fKCd0aGVuJyk7XG4gICAgY29uc3QgY3JlYXRpb25UcmFjZSA9ICdfX2NyZWF0aW9uVHJhY2VfXyc7XG4gICAgYXBpLm9uVW5oYW5kbGVkRXJyb3IgPSAoZSkgPT4ge1xuICAgICAgICBpZiAoYXBpLnNob3dVbmNhdWdodEVycm9yKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlamVjdGlvbiA9IGUgJiYgZS5yZWplY3Rpb247XG4gICAgICAgICAgICBpZiAocmVqZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIFByb21pc2UgcmVqZWN0aW9uOicsIHJlamVjdGlvbiBpbnN0YW5jZW9mIEVycm9yID8gcmVqZWN0aW9uLm1lc3NhZ2UgOiByZWplY3Rpb24sICc7IFpvbmU6JywgZS56b25lLm5hbWUsICc7IFRhc2s6JywgZS50YXNrICYmIGUudGFzay5zb3VyY2UsICc7IFZhbHVlOicsIHJlamVjdGlvbiwgcmVqZWN0aW9uIGluc3RhbmNlb2YgRXJyb3IgPyByZWplY3Rpb24uc3RhY2sgOiB1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgYXBpLm1pY3JvdGFza0RyYWluRG9uZSA9ICgpID0+IHtcbiAgICAgICAgd2hpbGUgKF91bmNhdWdodFByb21pc2VFcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCB1bmNhdWdodFByb21pc2VFcnJvciA9IF91bmNhdWdodFByb21pc2VFcnJvcnMuc2hpZnQoKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdW5jYXVnaHRQcm9taXNlRXJyb3Iuem9uZS5ydW5HdWFyZGVkKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVuY2F1Z2h0UHJvbWlzZUVycm9yLnRocm93T3JpZ2luYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHVuY2F1Z2h0UHJvbWlzZUVycm9yLnJlamVjdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyB1bmNhdWdodFByb21pc2VFcnJvcjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGhhbmRsZVVuaGFuZGxlZFJlamVjdGlvbihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IFVOSEFORExFRF9QUk9NSVNFX1JFSkVDVElPTl9IQU5ETEVSX1NZTUJPTCA9IF9fc3ltYm9sX18oJ3VuaGFuZGxlZFByb21pc2VSZWplY3Rpb25IYW5kbGVyJyk7XG4gICAgZnVuY3Rpb24gaGFuZGxlVW5oYW5kbGVkUmVqZWN0aW9uKGUpIHtcbiAgICAgICAgYXBpLm9uVW5oYW5kbGVkRXJyb3IoZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBoYW5kbGVyID0gWm9uZVtVTkhBTkRMRURfUFJPTUlTRV9SRUpFQ1RJT05fSEFORExFUl9TWU1CT0xdO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBpc1RoZW5hYmxlKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS50aGVuO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmb3J3YXJkUmVzb2x1dGlvbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZvcndhcmRSZWplY3Rpb24ocmVqZWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBab25lQXdhcmVQcm9taXNlLnJlamVjdChyZWplY3Rpb24pO1xuICAgIH1cbiAgICBjb25zdCBzeW1ib2xTdGF0ZSA9IF9fc3ltYm9sX18oJ3N0YXRlJyk7XG4gICAgY29uc3Qgc3ltYm9sVmFsdWUgPSBfX3N5bWJvbF9fKCd2YWx1ZScpO1xuICAgIGNvbnN0IHN5bWJvbEZpbmFsbHkgPSBfX3N5bWJvbF9fKCdmaW5hbGx5Jyk7XG4gICAgY29uc3Qgc3ltYm9sUGFyZW50UHJvbWlzZVZhbHVlID0gX19zeW1ib2xfXygncGFyZW50UHJvbWlzZVZhbHVlJyk7XG4gICAgY29uc3Qgc3ltYm9sUGFyZW50UHJvbWlzZVN0YXRlID0gX19zeW1ib2xfXygncGFyZW50UHJvbWlzZVN0YXRlJyk7XG4gICAgY29uc3Qgc291cmNlID0gJ1Byb21pc2UudGhlbic7XG4gICAgY29uc3QgVU5SRVNPTFZFRCA9IG51bGw7XG4gICAgY29uc3QgUkVTT0xWRUQgPSB0cnVlO1xuICAgIGNvbnN0IFJFSkVDVEVEID0gZmFsc2U7XG4gICAgY29uc3QgUkVKRUNURURfTk9fQ0FUQ0ggPSAwO1xuICAgIGZ1bmN0aW9uIG1ha2VSZXNvbHZlcihwcm9taXNlLCBzdGF0ZSkge1xuICAgICAgICByZXR1cm4gKHYpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZVByb21pc2UocHJvbWlzZSwgc3RhdGUsIHYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHJlc29sdmVQcm9taXNlKHByb21pc2UsIGZhbHNlLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRG8gbm90IHJldHVybiB2YWx1ZSBvciB5b3Ugd2lsbCBicmVhayB0aGUgUHJvbWlzZSBzcGVjLlxuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBvbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgd2FzQ2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiB3cmFwcGVyKHdyYXBwZWRGdW5jdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAod2FzQ2FsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2FzQ2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB3cmFwcGVkRnVuY3Rpb24uYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBjb25zdCBUWVBFX0VSUk9SID0gJ1Byb21pc2UgcmVzb2x2ZWQgd2l0aCBpdHNlbGYnO1xuICAgIGNvbnN0IENVUlJFTlRfVEFTS19UUkFDRV9TWU1CT0wgPSBfX3N5bWJvbF9fKCdjdXJyZW50VGFza1RyYWNlJyk7XG4gICAgLy8gUHJvbWlzZSBSZXNvbHV0aW9uXG4gICAgZnVuY3Rpb24gcmVzb2x2ZVByb21pc2UocHJvbWlzZSwgc3RhdGUsIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG9uY2VXcmFwcGVyID0gb25jZSgpO1xuICAgICAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoVFlQRV9FUlJPUik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb21pc2Vbc3ltYm9sU3RhdGVdID09PSBVTlJFU09MVkVEKSB7XG4gICAgICAgICAgICAvLyBzaG91bGQgb25seSBnZXQgdmFsdWUudGhlbiBvbmNlIGJhc2VkIG9uIHByb21pc2Ugc3BlYy5cbiAgICAgICAgICAgIGxldCB0aGVuID0gbnVsbDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoZW4gPSB2YWx1ZSAmJiB2YWx1ZS50aGVuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBvbmNlV3JhcHBlcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVQcm9taXNlKHByb21pc2UsIGZhbHNlLCBlcnIpO1xuICAgICAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiAodmFsdWUgaW5zdGFuY2VvZiBab25lQXdhcmVQcm9taXNlKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUgIT09IFJFSkVDVEVEICYmIHZhbHVlIGluc3RhbmNlb2YgWm9uZUF3YXJlUHJvbWlzZSAmJlxuICAgICAgICAgICAgICAgIHZhbHVlLmhhc093blByb3BlcnR5KHN5bWJvbFN0YXRlKSAmJiB2YWx1ZS5oYXNPd25Qcm9wZXJ0eShzeW1ib2xWYWx1ZSkgJiZcbiAgICAgICAgICAgICAgICB2YWx1ZVtzeW1ib2xTdGF0ZV0gIT09IFVOUkVTT0xWRUQpIHtcbiAgICAgICAgICAgICAgICBjbGVhclJlamVjdGVkTm9DYXRjaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZVByb21pc2UocHJvbWlzZSwgdmFsdWVbc3ltYm9sU3RhdGVdLCB2YWx1ZVtzeW1ib2xWYWx1ZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc3RhdGUgIT09IFJFSkVDVEVEICYmIHR5cGVvZiB0aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBvbmNlV3JhcHBlcihtYWtlUmVzb2x2ZXIocHJvbWlzZSwgc3RhdGUpKSwgb25jZVdyYXBwZXIobWFrZVJlc29sdmVyKHByb21pc2UsIGZhbHNlKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uY2VXcmFwcGVyKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmVQcm9taXNlKHByb21pc2UsIGZhbHNlLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb21pc2Vbc3ltYm9sU3RhdGVdID0gc3RhdGU7XG4gICAgICAgICAgICAgICAgY29uc3QgcXVldWUgPSBwcm9taXNlW3N5bWJvbFZhbHVlXTtcbiAgICAgICAgICAgICAgICBwcm9taXNlW3N5bWJvbFZhbHVlXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChwcm9taXNlW3N5bWJvbEZpbmFsbHldID09PSBzeW1ib2xGaW5hbGx5KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBwcm9taXNlIGlzIGdlbmVyYXRlZCBieSBQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gUkVTT0xWRUQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBzdGF0ZSBpcyByZXNvbHZlZCwgc2hvdWxkIGlnbm9yZSB0aGUgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuZCB1c2UgcGFyZW50IHByb21pc2UgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2Vbc3ltYm9sU3RhdGVdID0gcHJvbWlzZVtzeW1ib2xQYXJlbnRQcm9taXNlU3RhdGVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZVtzeW1ib2xWYWx1ZV0gPSBwcm9taXNlW3N5bWJvbFBhcmVudFByb21pc2VWYWx1ZV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gcmVjb3JkIHRhc2sgaW5mb3JtYXRpb24gaW4gdmFsdWUgd2hlbiBlcnJvciBvY2N1cnMsIHNvIHdlIGNhblxuICAgICAgICAgICAgICAgIC8vIGRvIHNvbWUgYWRkaXRpb25hbCB3b3JrIHN1Y2ggYXMgcmVuZGVyIGxvbmdTdGFja1RyYWNlXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlID09PSBSRUpFQ1RFRCAmJiB2YWx1ZSBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGxvbmdTdGFja1RyYWNlWm9uZSBpcyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYWNlID0gWm9uZS5jdXJyZW50VGFzayAmJiBab25lLmN1cnJlbnRUYXNrLmRhdGEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIFpvbmUuY3VycmVudFRhc2suZGF0YVtjcmVhdGlvblRyYWNlXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyYWNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IGtlZXAgdGhlIGxvbmcgc3RhY2sgdHJhY2UgaW50byBlcnJvciB3aGVuIGluIGxvbmdTdGFja1RyYWNlWm9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0RGVmaW5lUHJvcGVydHkodmFsdWUsIENVUlJFTlRfVEFTS19UUkFDRV9TWU1CT0wsIHsgY29uZmlndXJhYmxlOiB0cnVlLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIHZhbHVlOiB0cmFjZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDspIHtcbiAgICAgICAgICAgICAgICAgICAgc2NoZWR1bGVSZXNvbHZlT3JSZWplY3QocHJvbWlzZSwgcXVldWVbaSsrXSwgcXVldWVbaSsrXSwgcXVldWVbaSsrXSwgcXVldWVbaSsrXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChxdWV1ZS5sZW5ndGggPT0gMCAmJiBzdGF0ZSA9PSBSRUpFQ1RFRCkge1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlW3N5bWJvbFN0YXRlXSA9IFJFSkVDVEVEX05PX0NBVENIO1xuICAgICAgICAgICAgICAgICAgICBsZXQgdW5jYXVnaHRQcm9taXNlRXJyb3IgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhlcmUgd2UgdGhyb3dzIGEgbmV3IEVycm9yIHRvIHByaW50IG1vcmUgcmVhZGFibGUgZXJyb3IgbG9nXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQgaWYgdGhlIHZhbHVlIGlzIG5vdCBhbiBlcnJvciwgem9uZS5qcyBidWlsZHMgYW4gYEVycm9yYFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT2JqZWN0IGhlcmUgdG8gYXR0YWNoIHRoZSBzdGFjayBpbmZvcm1hdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5jYXVnaHQgKGluIHByb21pc2UpOiAnICsgcmVhZGFibGVPYmplY3RUb1N0cmluZyh2YWx1ZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2YWx1ZSAmJiB2YWx1ZS5zdGFjayA/ICdcXG4nICsgdmFsdWUuc3RhY2sgOiAnJykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuY2F1Z2h0UHJvbWlzZUVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0Rpc2FibGVXcmFwcGluZ1VuY2F1Z2h0UHJvbWlzZVJlamVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgZGlzYWJsZSB3cmFwcGluZyB1bmNhdWdodCBwcm9taXNlIHJlamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdXNlIHRoZSB2YWx1ZSBpbnN0ZWFkIG9mIHdyYXBwaW5nIGl0LlxuICAgICAgICAgICAgICAgICAgICAgICAgdW5jYXVnaHRQcm9taXNlRXJyb3IudGhyb3dPcmlnaW5hbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdW5jYXVnaHRQcm9taXNlRXJyb3IucmVqZWN0aW9uID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHVuY2F1Z2h0UHJvbWlzZUVycm9yLnByb21pc2UgPSBwcm9taXNlO1xuICAgICAgICAgICAgICAgICAgICB1bmNhdWdodFByb21pc2VFcnJvci56b25lID0gWm9uZS5jdXJyZW50O1xuICAgICAgICAgICAgICAgICAgICB1bmNhdWdodFByb21pc2VFcnJvci50YXNrID0gWm9uZS5jdXJyZW50VGFzaztcbiAgICAgICAgICAgICAgICAgICAgX3VuY2F1Z2h0UHJvbWlzZUVycm9ycy5wdXNoKHVuY2F1Z2h0UHJvbWlzZUVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgYXBpLnNjaGVkdWxlTWljcm9UYXNrKCk7IC8vIHRvIG1ha2Ugc3VyZSB0aGF0IGl0IGlzIHJ1bm5pbmdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVzb2x2aW5nIGFuIGFscmVhZHkgcmVzb2x2ZWQgcHJvbWlzZSBpcyBhIG5vb3AuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICBjb25zdCBSRUpFQ1RJT05fSEFORExFRF9IQU5ETEVSID0gX19zeW1ib2xfXygncmVqZWN0aW9uSGFuZGxlZEhhbmRsZXInKTtcbiAgICBmdW5jdGlvbiBjbGVhclJlamVjdGVkTm9DYXRjaChwcm9taXNlKSB7XG4gICAgICAgIGlmIChwcm9taXNlW3N5bWJvbFN0YXRlXSA9PT0gUkVKRUNURURfTk9fQ0FUQ0gpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkIG5vIGNhdGNoIHN0YXR1c1xuICAgICAgICAgICAgLy8gYW5kIHF1ZXVlLmxlbmd0aCA+IDAsIG1lYW5zIHRoZXJlIGlzIGEgZXJyb3IgaGFuZGxlclxuICAgICAgICAgICAgLy8gaGVyZSB0byBoYW5kbGUgdGhlIHJlamVjdGVkIHByb21pc2UsIHdlIHNob3VsZCB0cmlnZ2VyXG4gICAgICAgICAgICAvLyB3aW5kb3dzLnJlamVjdGlvbmhhbmRsZWQgZXZlbnRIYW5kbGVyIG9yIG5vZGVqcyByZWplY3Rpb25IYW5kbGVkXG4gICAgICAgICAgICAvLyBldmVudEhhbmRsZXJcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaGFuZGxlciA9IFpvbmVbUkVKRUNUSU9OX0hBTkRMRURfSEFORExFUl07XG4gICAgICAgICAgICAgICAgaWYgKGhhbmRsZXIgJiYgdHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIHsgcmVqZWN0aW9uOiBwcm9taXNlW3N5bWJvbFZhbHVlXSwgcHJvbWlzZTogcHJvbWlzZSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9taXNlW3N5bWJvbFN0YXRlXSA9IFJFSkVDVEVEO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfdW5jYXVnaHRQcm9taXNlRXJyb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb21pc2UgPT09IF91bmNhdWdodFByb21pc2VFcnJvcnNbaV0ucHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICBfdW5jYXVnaHRQcm9taXNlRXJyb3JzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc2NoZWR1bGVSZXNvbHZlT3JSZWplY3QocHJvbWlzZSwgem9uZSwgY2hhaW5Qcm9taXNlLCBvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgICBjbGVhclJlamVjdGVkTm9DYXRjaChwcm9taXNlKTtcbiAgICAgICAgY29uc3QgcHJvbWlzZVN0YXRlID0gcHJvbWlzZVtzeW1ib2xTdGF0ZV07XG4gICAgICAgIGNvbnN0IGRlbGVnYXRlID0gcHJvbWlzZVN0YXRlID9cbiAgICAgICAgICAgICh0eXBlb2Ygb25GdWxmaWxsZWQgPT09ICdmdW5jdGlvbicpID8gb25GdWxmaWxsZWQgOiBmb3J3YXJkUmVzb2x1dGlvbiA6XG4gICAgICAgICAgICAodHlwZW9mIG9uUmVqZWN0ZWQgPT09ICdmdW5jdGlvbicpID8gb25SZWplY3RlZCA6XG4gICAgICAgICAgICAgICAgZm9yd2FyZFJlamVjdGlvbjtcbiAgICAgICAgem9uZS5zY2hlZHVsZU1pY3JvVGFzayhzb3VyY2UsICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50UHJvbWlzZVZhbHVlID0gcHJvbWlzZVtzeW1ib2xWYWx1ZV07XG4gICAgICAgICAgICAgICAgY29uc3QgaXNGaW5hbGx5UHJvbWlzZSA9ICEhY2hhaW5Qcm9taXNlICYmIHN5bWJvbEZpbmFsbHkgPT09IGNoYWluUHJvbWlzZVtzeW1ib2xGaW5hbGx5XTtcbiAgICAgICAgICAgICAgICBpZiAoaXNGaW5hbGx5UHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcHJvbWlzZSBpcyBnZW5lcmF0ZWQgZnJvbSBmaW5hbGx5IGNhbGwsIGtlZXAgcGFyZW50IHByb21pc2UncyBzdGF0ZSBhbmQgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgY2hhaW5Qcm9taXNlW3N5bWJvbFBhcmVudFByb21pc2VWYWx1ZV0gPSBwYXJlbnRQcm9taXNlVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGNoYWluUHJvbWlzZVtzeW1ib2xQYXJlbnRQcm9taXNlU3RhdGVdID0gcHJvbWlzZVN0YXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBzaG91bGQgbm90IHBhc3MgdmFsdWUgdG8gZmluYWxseSBjYWxsYmFja1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gem9uZS5ydW4oZGVsZWdhdGUsIHVuZGVmaW5lZCwgaXNGaW5hbGx5UHJvbWlzZSAmJiBkZWxlZ2F0ZSAhPT0gZm9yd2FyZFJlamVjdGlvbiAmJiBkZWxlZ2F0ZSAhPT0gZm9yd2FyZFJlc29sdXRpb24gP1xuICAgICAgICAgICAgICAgICAgICBbXSA6XG4gICAgICAgICAgICAgICAgICAgIFtwYXJlbnRQcm9taXNlVmFsdWVdKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlUHJvbWlzZShjaGFpblByb21pc2UsIHRydWUsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIC8vIGlmIGVycm9yIG9jY3Vycywgc2hvdWxkIGFsd2F5cyByZXR1cm4gdGhpcyBlcnJvclxuICAgICAgICAgICAgICAgIHJlc29sdmVQcm9taXNlKGNoYWluUHJvbWlzZSwgZmFsc2UsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgY2hhaW5Qcm9taXNlKTtcbiAgICB9XG4gICAgY29uc3QgWk9ORV9BV0FSRV9QUk9NSVNFX1RPX1NUUklORyA9ICdmdW5jdGlvbiBab25lQXdhcmVQcm9taXNlKCkgeyBbbmF0aXZlIGNvZGVdIH0nO1xuICAgIGNvbnN0IG5vb3AgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgY29uc3QgQWdncmVnYXRlRXJyb3IgPSBnbG9iYWwuQWdncmVnYXRlRXJyb3I7XG4gICAgY2xhc3MgWm9uZUF3YXJlUHJvbWlzZSB7XG4gICAgICAgIHN0YXRpYyB0b1N0cmluZygpIHtcbiAgICAgICAgICAgIHJldHVybiBaT05FX0FXQVJFX1BST01JU0VfVE9fU1RSSU5HO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRpYyByZXNvbHZlKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2UobmV3IHRoaXMobnVsbCksIFJFU09MVkVELCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGljIHJlamVjdChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlKG5ldyB0aGlzKG51bGwpLCBSRUpFQ1RFRCwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRpYyBhbnkodmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAoIXZhbHVlcyB8fCB0eXBlb2YgdmFsdWVzW1N5bWJvbC5pdGVyYXRvcl0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEFnZ3JlZ2F0ZUVycm9yKFtdLCAnQWxsIHByb21pc2VzIHdlcmUgcmVqZWN0ZWQnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xuICAgICAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdiBvZiB2YWx1ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChab25lQXdhcmVQcm9taXNlLnJlc29sdmUodikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEFnZ3JlZ2F0ZUVycm9yKFtdLCAnQWxsIHByb21pc2VzIHdlcmUgcmVqZWN0ZWQnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEFnZ3JlZ2F0ZUVycm9yKFtdLCAnQWxsIHByb21pc2VzIHdlcmUgcmVqZWN0ZWQnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZmluaXNoZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnN0IGVycm9ycyA9IFtdO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBab25lQXdhcmVQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb21pc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VzW2ldLnRoZW4odiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmluaXNoZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5pc2hlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHYpO1xuICAgICAgICAgICAgICAgICAgICB9LCBlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLnB1c2goZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5pc2hlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBBZ2dyZWdhdGVFcnJvcihlcnJvcnMsICdBbGwgcHJvbWlzZXMgd2VyZSByZWplY3RlZCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgO1xuICAgICAgICBzdGF0aWMgcmFjZSh2YWx1ZXMpIHtcbiAgICAgICAgICAgIGxldCByZXNvbHZlO1xuICAgICAgICAgICAgbGV0IHJlamVjdDtcbiAgICAgICAgICAgIGxldCBwcm9taXNlID0gbmV3IHRoaXMoKHJlcywgcmVqKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSA9IHJlcztcbiAgICAgICAgICAgICAgICByZWplY3QgPSByZWo7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uUmVzb2x2ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gb25SZWplY3QoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1RoZW5hYmxlKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMucmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhbHVlLnRoZW4ob25SZXNvbHZlLCBvblJlamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgICAgfVxuICAgICAgICBzdGF0aWMgYWxsKHZhbHVlcykge1xuICAgICAgICAgICAgcmV0dXJuIFpvbmVBd2FyZVByb21pc2UuYWxsV2l0aENhbGxiYWNrKHZhbHVlcyk7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGljIGFsbFNldHRsZWQodmFsdWVzKSB7XG4gICAgICAgICAgICBjb25zdCBQID0gdGhpcyAmJiB0aGlzLnByb3RvdHlwZSBpbnN0YW5jZW9mIFpvbmVBd2FyZVByb21pc2UgPyB0aGlzIDogWm9uZUF3YXJlUHJvbWlzZTtcbiAgICAgICAgICAgIHJldHVybiBQLmFsbFdpdGhDYWxsYmFjayh2YWx1ZXMsIHtcbiAgICAgICAgICAgICAgICB0aGVuQ2FsbGJhY2s6ICh2YWx1ZSkgPT4gKHsgc3RhdHVzOiAnZnVsZmlsbGVkJywgdmFsdWUgfSksXG4gICAgICAgICAgICAgICAgZXJyb3JDYWxsYmFjazogKGVycikgPT4gKHsgc3RhdHVzOiAncmVqZWN0ZWQnLCByZWFzb246IGVyciB9KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGljIGFsbFdpdGhDYWxsYmFjayh2YWx1ZXMsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBsZXQgcmVzb2x2ZTtcbiAgICAgICAgICAgIGxldCByZWplY3Q7XG4gICAgICAgICAgICBsZXQgcHJvbWlzZSA9IG5ldyB0aGlzKChyZXMsIHJlaikgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUgPSByZXM7XG4gICAgICAgICAgICAgICAgcmVqZWN0ID0gcmVqO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBTdGFydCBhdCAyIHRvIHByZXZlbnQgcHJlbWF0dXJlbHkgcmVzb2x2aW5nIGlmIC50aGVuIGlzIGNhbGxlZCBpbW1lZGlhdGVseS5cbiAgICAgICAgICAgIGxldCB1bnJlc29sdmVkQ291bnQgPSAyO1xuICAgICAgICAgICAgbGV0IHZhbHVlSW5kZXggPSAwO1xuICAgICAgICAgICAgY29uc3QgcmVzb2x2ZWRWYWx1ZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IHZhbHVlIG9mIHZhbHVlcykge1xuICAgICAgICAgICAgICAgIGlmICghaXNUaGVuYWJsZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnJlc29sdmUodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBjdXJWYWx1ZUluZGV4ID0gdmFsdWVJbmRleDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS50aGVuKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRWYWx1ZXNbY3VyVmFsdWVJbmRleF0gPSBjYWxsYmFjayA/IGNhbGxiYWNrLnRoZW5DYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVucmVzb2x2ZWRDb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVucmVzb2x2ZWRDb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzb2x2ZWRWYWx1ZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlZFZhbHVlc1tjdXJWYWx1ZUluZGV4XSA9IGNhbGxiYWNrLmVycm9yQ2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnJlc29sdmVkQ291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodW5yZXNvbHZlZENvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzb2x2ZWRWYWx1ZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoICh0aGVuRXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCh0aGVuRXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdW5yZXNvbHZlZENvdW50Kys7XG4gICAgICAgICAgICAgICAgdmFsdWVJbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTWFrZSB0aGUgdW5yZXNvbHZlZENvdW50IHplcm8tYmFzZWQgYWdhaW4uXG4gICAgICAgICAgICB1bnJlc29sdmVkQ291bnQgLT0gMjtcbiAgICAgICAgICAgIGlmICh1bnJlc29sdmVkQ291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc29sdmVkVmFsdWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0cnVjdG9yKGV4ZWN1dG9yKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcztcbiAgICAgICAgICAgIGlmICghKHByb21pc2UgaW5zdGFuY2VvZiBab25lQXdhcmVQcm9taXNlKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTXVzdCBiZSBhbiBpbnN0YW5jZW9mIFByb21pc2UuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9taXNlW3N5bWJvbFN0YXRlXSA9IFVOUkVTT0xWRUQ7XG4gICAgICAgICAgICBwcm9taXNlW3N5bWJvbFZhbHVlXSA9IFtdOyAvLyBxdWV1ZTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb25jZVdyYXBwZXIgPSBvbmNlKCk7XG4gICAgICAgICAgICAgICAgZXhlY3V0b3IgJiZcbiAgICAgICAgICAgICAgICAgICAgZXhlY3V0b3Iob25jZVdyYXBwZXIobWFrZVJlc29sdmVyKHByb21pc2UsIFJFU09MVkVEKSksIG9uY2VXcmFwcGVyKG1ha2VSZXNvbHZlcihwcm9taXNlLCBSRUpFQ1RFRCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHJlc29sdmVQcm9taXNlKHByb21pc2UsIGZhbHNlLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgICAgICAgICAgcmV0dXJuICdQcm9taXNlJztcbiAgICAgICAgfVxuICAgICAgICBnZXQgW1N5bWJvbC5zcGVjaWVzXSgpIHtcbiAgICAgICAgICAgIHJldHVybiBab25lQXdhcmVQcm9taXNlO1xuICAgICAgICB9XG4gICAgICAgIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgICAgICAgIC8vIFdlIG11c3QgcmVhZCBgU3ltYm9sLnNwZWNpZXNgIHNhZmVseSBiZWNhdXNlIGB0aGlzYCBtYXkgYmUgYW55dGhpbmcuIEZvciBpbnN0YW5jZSwgYHRoaXNgXG4gICAgICAgICAgICAvLyBtYXkgYmUgYW4gb2JqZWN0IHdpdGhvdXQgYSBwcm90b3R5cGUgKGNyZWF0ZWQgdGhyb3VnaCBgT2JqZWN0LmNyZWF0ZShudWxsKWApOyB0aHVzXG4gICAgICAgICAgICAvLyBgdGhpcy5jb25zdHJ1Y3RvcmAgd2lsbCBiZSB1bmRlZmluZWQuIE9uZSBvZiB0aGUgdXNlIGNhc2VzIGlzIFN5c3RlbUpTIGNyZWF0aW5nXG4gICAgICAgICAgICAvLyBwcm90b3R5cGUtbGVzcyBvYmplY3RzIChtb2R1bGVzKSB2aWEgYE9iamVjdC5jcmVhdGUobnVsbClgLiBUaGUgU3lzdGVtSlMgY3JlYXRlcyBhbiBlbXB0eVxuICAgICAgICAgICAgLy8gb2JqZWN0IGFuZCBjb3BpZXMgcHJvbWlzZSBwcm9wZXJ0aWVzIGludG8gdGhhdCBvYmplY3QgKHdpdGhpbiB0aGUgYGdldE9yQ3JlYXRlTG9hZGBcbiAgICAgICAgICAgIC8vIGZ1bmN0aW9uKS4gVGhlIHpvbmUuanMgdGhlbiBjaGVja3MgaWYgdGhlIHJlc29sdmVkIHZhbHVlIGhhcyB0aGUgYHRoZW5gIG1ldGhvZCBhbmQgaW52b2tlc1xuICAgICAgICAgICAgLy8gaXQgd2l0aCB0aGUgYHZhbHVlYCBjb250ZXh0LiBPdGhlcndpc2UsIHRoaXMgd2lsbCB0aHJvdyBhbiBlcnJvcjogYFR5cGVFcnJvcjogQ2Fubm90IHJlYWRcbiAgICAgICAgICAgIC8vIHByb3BlcnRpZXMgb2YgdW5kZWZpbmVkIChyZWFkaW5nICdTeW1ib2woU3ltYm9sLnNwZWNpZXMpJylgLlxuICAgICAgICAgICAgbGV0IEMgPSB0aGlzLmNvbnN0cnVjdG9yPy5bU3ltYm9sLnNwZWNpZXNdO1xuICAgICAgICAgICAgaWYgKCFDIHx8IHR5cGVvZiBDICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgQyA9IHRoaXMuY29uc3RydWN0b3IgfHwgWm9uZUF3YXJlUHJvbWlzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNoYWluUHJvbWlzZSA9IG5ldyBDKG5vb3ApO1xuICAgICAgICAgICAgY29uc3Qgem9uZSA9IFpvbmUuY3VycmVudDtcbiAgICAgICAgICAgIGlmICh0aGlzW3N5bWJvbFN0YXRlXSA9PSBVTlJFU09MVkVEKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tzeW1ib2xWYWx1ZV0ucHVzaCh6b25lLCBjaGFpblByb21pc2UsIG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNjaGVkdWxlUmVzb2x2ZU9yUmVqZWN0KHRoaXMsIHpvbmUsIGNoYWluUHJvbWlzZSwgb25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNoYWluUHJvbWlzZTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaChvblJlamVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0ZWQpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkob25GaW5hbGx5KSB7XG4gICAgICAgICAgICAvLyBTZWUgY29tbWVudCBvbiB0aGUgY2FsbCB0byBgdGhlbmAgYWJvdXQgd2h5IHRoZWUgYFN5bWJvbC5zcGVjaWVzYCBpcyBzYWZlbHkgYWNjZXNzZWQuXG4gICAgICAgICAgICBsZXQgQyA9IHRoaXMuY29uc3RydWN0b3I/LltTeW1ib2wuc3BlY2llc107XG4gICAgICAgICAgICBpZiAoIUMgfHwgdHlwZW9mIEMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBDID0gWm9uZUF3YXJlUHJvbWlzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNoYWluUHJvbWlzZSA9IG5ldyBDKG5vb3ApO1xuICAgICAgICAgICAgY2hhaW5Qcm9taXNlW3N5bWJvbEZpbmFsbHldID0gc3ltYm9sRmluYWxseTtcbiAgICAgICAgICAgIGNvbnN0IHpvbmUgPSBab25lLmN1cnJlbnQ7XG4gICAgICAgICAgICBpZiAodGhpc1tzeW1ib2xTdGF0ZV0gPT0gVU5SRVNPTFZFRCkge1xuICAgICAgICAgICAgICAgIHRoaXNbc3ltYm9sVmFsdWVdLnB1c2goem9uZSwgY2hhaW5Qcm9taXNlLCBvbkZpbmFsbHksIG9uRmluYWxseSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzY2hlZHVsZVJlc29sdmVPclJlamVjdCh0aGlzLCB6b25lLCBjaGFpblByb21pc2UsIG9uRmluYWxseSwgb25GaW5hbGx5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjaGFpblByb21pc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gUHJvdGVjdCBhZ2FpbnN0IGFnZ3Jlc3NpdmUgb3B0aW1pemVycyBkcm9wcGluZyBzZWVtaW5nbHkgdW51c2VkIHByb3BlcnRpZXMuXG4gICAgLy8gRS5nLiBDbG9zdXJlIENvbXBpbGVyIGluIGFkdmFuY2VkIG1vZGUuXG4gICAgWm9uZUF3YXJlUHJvbWlzZVsncmVzb2x2ZSddID0gWm9uZUF3YXJlUHJvbWlzZS5yZXNvbHZlO1xuICAgIFpvbmVBd2FyZVByb21pc2VbJ3JlamVjdCddID0gWm9uZUF3YXJlUHJvbWlzZS5yZWplY3Q7XG4gICAgWm9uZUF3YXJlUHJvbWlzZVsncmFjZSddID0gWm9uZUF3YXJlUHJvbWlzZS5yYWNlO1xuICAgIFpvbmVBd2FyZVByb21pc2VbJ2FsbCddID0gWm9uZUF3YXJlUHJvbWlzZS5hbGw7XG4gICAgY29uc3QgTmF0aXZlUHJvbWlzZSA9IGdsb2JhbFtzeW1ib2xQcm9taXNlXSA9IGdsb2JhbFsnUHJvbWlzZSddO1xuICAgIGdsb2JhbFsnUHJvbWlzZSddID0gWm9uZUF3YXJlUHJvbWlzZTtcbiAgICBjb25zdCBzeW1ib2xUaGVuUGF0Y2hlZCA9IF9fc3ltYm9sX18oJ3RoZW5QYXRjaGVkJyk7XG4gICAgZnVuY3Rpb24gcGF0Y2hUaGVuKEN0b3IpIHtcbiAgICAgICAgY29uc3QgcHJvdG8gPSBDdG9yLnByb3RvdHlwZTtcbiAgICAgICAgY29uc3QgcHJvcCA9IE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90bywgJ3RoZW4nKTtcbiAgICAgICAgaWYgKHByb3AgJiYgKHByb3Aud3JpdGFibGUgPT09IGZhbHNlIHx8ICFwcm9wLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgICAgICAgIC8vIGNoZWNrIEN0b3IucHJvdG90eXBlLnRoZW4gcHJvcGVydHlEZXNjcmlwdG9yIGlzIHdyaXRhYmxlIG9yIG5vdFxuICAgICAgICAgICAgLy8gaW4gbWV0ZW9yIGVudiwgd3JpdGFibGUgaXMgZmFsc2UsIHdlIHNob3VsZCBpZ25vcmUgc3VjaCBjYXNlXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb3JpZ2luYWxUaGVuID0gcHJvdG8udGhlbjtcbiAgICAgICAgLy8gS2VlcCBhIHJlZmVyZW5jZSB0byB0aGUgb3JpZ2luYWwgbWV0aG9kLlxuICAgICAgICBwcm90b1tzeW1ib2xUaGVuXSA9IG9yaWdpbmFsVGhlbjtcbiAgICAgICAgQ3Rvci5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uIChvblJlc29sdmUsIG9uUmVqZWN0KSB7XG4gICAgICAgICAgICBjb25zdCB3cmFwcGVkID0gbmV3IFpvbmVBd2FyZVByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsVGhlbi5jYWxsKHRoaXMsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB3cmFwcGVkLnRoZW4ob25SZXNvbHZlLCBvblJlamVjdCk7XG4gICAgICAgIH07XG4gICAgICAgIEN0b3Jbc3ltYm9sVGhlblBhdGNoZWRdID0gdHJ1ZTtcbiAgICB9XG4gICAgYXBpLnBhdGNoVGhlbiA9IHBhdGNoVGhlbjtcbiAgICBmdW5jdGlvbiB6b25laWZ5KGZuKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoc2VsZiwgYXJncykge1xuICAgICAgICAgICAgbGV0IHJlc3VsdFByb21pc2UgPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHRQcm9taXNlIGluc3RhbmNlb2YgWm9uZUF3YXJlUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRQcm9taXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGN0b3IgPSByZXN1bHRQcm9taXNlLmNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgaWYgKCFjdG9yW3N5bWJvbFRoZW5QYXRjaGVkXSkge1xuICAgICAgICAgICAgICAgIHBhdGNoVGhlbihjdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHRQcm9taXNlO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAoTmF0aXZlUHJvbWlzZSkge1xuICAgICAgICBwYXRjaFRoZW4oTmF0aXZlUHJvbWlzZSk7XG4gICAgICAgIHBhdGNoTWV0aG9kKGdsb2JhbCwgJ2ZldGNoJywgZGVsZWdhdGUgPT4gem9uZWlmeShkZWxlZ2F0ZSkpO1xuICAgIH1cbiAgICAvLyBUaGlzIGlzIG5vdCBwYXJ0IG9mIHB1YmxpYyBBUEksIGJ1dCBpdCBpcyB1c2VmdWwgZm9yIHRlc3RzLCBzbyB3ZSBleHBvc2UgaXQuXG4gICAgUHJvbWlzZVtab25lLl9fc3ltYm9sX18oJ3VuY2F1Z2h0UHJvbWlzZUVycm9ycycpXSA9IF91bmNhdWdodFByb21pc2VFcnJvcnM7XG4gICAgcmV0dXJuIFpvbmVBd2FyZVByb21pc2U7XG59KTtcblxuLy8gb3ZlcnJpZGUgRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nIHRvIG1ha2Ugem9uZS5qcyBwYXRjaGVkIGZ1bmN0aW9uXG4vLyBsb29rIGxpa2UgbmF0aXZlIGZ1bmN0aW9uXG5ab25lLl9fbG9hZF9wYXRjaCgndG9TdHJpbmcnLCAoZ2xvYmFsKSA9PiB7XG4gICAgLy8gcGF0Y2ggRnVuYy5wcm90b3R5cGUudG9TdHJpbmcgdG8gbGV0IHRoZW0gbG9vayBsaWtlIG5hdGl2ZVxuICAgIGNvbnN0IG9yaWdpbmFsRnVuY3Rpb25Ub1N0cmluZyA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZztcbiAgICBjb25zdCBPUklHSU5BTF9ERUxFR0FURV9TWU1CT0wgPSB6b25lU3ltYm9sKCdPcmlnaW5hbERlbGVnYXRlJyk7XG4gICAgY29uc3QgUFJPTUlTRV9TWU1CT0wgPSB6b25lU3ltYm9sKCdQcm9taXNlJyk7XG4gICAgY29uc3QgRVJST1JfU1lNQk9MID0gem9uZVN5bWJvbCgnRXJyb3InKTtcbiAgICBjb25zdCBuZXdGdW5jdGlvblRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxEZWxlZ2F0ZSA9IHRoaXNbT1JJR0lOQUxfREVMRUdBVEVfU1lNQk9MXTtcbiAgICAgICAgICAgIGlmIChvcmlnaW5hbERlbGVnYXRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcmlnaW5hbERlbGVnYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbEZ1bmN0aW9uVG9TdHJpbmcuY2FsbChvcmlnaW5hbERlbGVnYXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob3JpZ2luYWxEZWxlZ2F0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMgPT09IFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuYXRpdmVQcm9taXNlID0gZ2xvYmFsW1BST01JU0VfU1lNQk9MXTtcbiAgICAgICAgICAgICAgICBpZiAobmF0aXZlUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxGdW5jdGlvblRvU3RyaW5nLmNhbGwobmF0aXZlUHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMgPT09IEVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmF0aXZlRXJyb3IgPSBnbG9iYWxbRVJST1JfU1lNQk9MXTtcbiAgICAgICAgICAgICAgICBpZiAobmF0aXZlRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsRnVuY3Rpb25Ub1N0cmluZy5jYWxsKG5hdGl2ZUVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsRnVuY3Rpb25Ub1N0cmluZy5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgbmV3RnVuY3Rpb25Ub1N0cmluZ1tPUklHSU5BTF9ERUxFR0FURV9TWU1CT0xdID0gb3JpZ2luYWxGdW5jdGlvblRvU3RyaW5nO1xuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IG5ld0Z1bmN0aW9uVG9TdHJpbmc7XG4gICAgLy8gcGF0Y2ggT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyB0byBsZXQgdGhlbSBsb29rIGxpa2UgbmF0aXZlXG4gICAgY29uc3Qgb3JpZ2luYWxPYmplY3RUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG4gICAgY29uc3QgUFJPTUlTRV9PQkpFQ1RfVE9fU1RSSU5HID0gJ1tvYmplY3QgUHJvbWlzZV0nO1xuICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgUHJvbWlzZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0aGlzIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgcmV0dXJuIFBST01JU0VfT0JKRUNUX1RPX1NUUklORztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxPYmplY3RUb1N0cmluZy5jYWxsKHRoaXMpO1xuICAgIH07XG59KTtcblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3XG4gKiBAc3VwcHJlc3Mge21pc3NpbmdSZXF1aXJlfVxuICovXG5sZXQgcGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlO1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBwYXNzaXZlU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIE5vdGU6IFdlIHBhc3MgdGhlIGBvcHRpb25zYCBvYmplY3QgYXMgdGhlIGV2ZW50IGhhbmRsZXIgdG9vLiBUaGlzIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggdGhlXG4gICAgICAgIC8vIHNpZ25hdHVyZSBvZiBgYWRkRXZlbnRMaXN0ZW5lcmAgb3IgYHJlbW92ZUV2ZW50TGlzdGVuZXJgIGJ1dCBlbmFibGVzIHVzIHRvIHJlbW92ZSB0aGUgaGFuZGxlclxuICAgICAgICAvLyB3aXRob3V0IGFuIGFjdHVhbCBoYW5kbGVyLlxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHBhc3NpdmVTdXBwb3J0ZWQgPSBmYWxzZTtcbiAgICB9XG59XG4vLyBhbiBpZGVudGlmaWVyIHRvIHRlbGwgWm9uZVRhc2sgZG8gbm90IGNyZWF0ZSBhIG5ldyBpbnZva2UgY2xvc3VyZVxuY29uc3QgT1BUSU1JWkVEX1pPTkVfRVZFTlRfVEFTS19EQVRBID0ge1xuICAgIHVzZUc6IHRydWVcbn07XG5jb25zdCB6b25lU3ltYm9sRXZlbnROYW1lcyA9IHt9O1xuY29uc3QgZ2xvYmFsU291cmNlcyA9IHt9O1xuY29uc3QgRVZFTlRfTkFNRV9TWU1CT0xfUkVHWCA9IG5ldyBSZWdFeHAoJ14nICsgWk9ORV9TWU1CT0xfUFJFRklYICsgJyhcXFxcdyspKHRydWV8ZmFsc2UpJCcpO1xuY29uc3QgSU1NRURJQVRFX1BST1BBR0FUSU9OX1NZTUJPTCA9IHpvbmVTeW1ib2woJ3Byb3BhZ2F0aW9uU3RvcHBlZCcpO1xuZnVuY3Rpb24gcHJlcGFyZUV2ZW50TmFtZXMoZXZlbnROYW1lLCBldmVudE5hbWVUb1N0cmluZykge1xuICAgIGNvbnN0IGZhbHNlRXZlbnROYW1lID0gKGV2ZW50TmFtZVRvU3RyaW5nID8gZXZlbnROYW1lVG9TdHJpbmcoZXZlbnROYW1lKSA6IGV2ZW50TmFtZSkgKyBGQUxTRV9TVFI7XG4gICAgY29uc3QgdHJ1ZUV2ZW50TmFtZSA9IChldmVudE5hbWVUb1N0cmluZyA/IGV2ZW50TmFtZVRvU3RyaW5nKGV2ZW50TmFtZSkgOiBldmVudE5hbWUpICsgVFJVRV9TVFI7XG4gICAgY29uc3Qgc3ltYm9sID0gWk9ORV9TWU1CT0xfUFJFRklYICsgZmFsc2VFdmVudE5hbWU7XG4gICAgY29uc3Qgc3ltYm9sQ2FwdHVyZSA9IFpPTkVfU1lNQk9MX1BSRUZJWCArIHRydWVFdmVudE5hbWU7XG4gICAgem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXSA9IHt9O1xuICAgIHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV1bRkFMU0VfU1RSXSA9IHN5bWJvbDtcbiAgICB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudE5hbWVdW1RSVUVfU1RSXSA9IHN5bWJvbENhcHR1cmU7XG59XG5mdW5jdGlvbiBwYXRjaEV2ZW50VGFyZ2V0KF9nbG9iYWwsIGFwaSwgYXBpcywgcGF0Y2hPcHRpb25zKSB7XG4gICAgY29uc3QgQUREX0VWRU5UX0xJU1RFTkVSID0gKHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMuYWRkKSB8fCBBRERfRVZFTlRfTElTVEVORVJfU1RSO1xuICAgIGNvbnN0IFJFTU9WRV9FVkVOVF9MSVNURU5FUiA9IChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLnJtKSB8fCBSRU1PVkVfRVZFTlRfTElTVEVORVJfU1RSO1xuICAgIGNvbnN0IExJU1RFTkVSU19FVkVOVF9MSVNURU5FUiA9IChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLmxpc3RlbmVycykgfHwgJ2V2ZW50TGlzdGVuZXJzJztcbiAgICBjb25zdCBSRU1PVkVfQUxMX0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUiA9IChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLnJtQWxsKSB8fCAncmVtb3ZlQWxsTGlzdGVuZXJzJztcbiAgICBjb25zdCB6b25lU3ltYm9sQWRkRXZlbnRMaXN0ZW5lciA9IHpvbmVTeW1ib2woQUREX0VWRU5UX0xJU1RFTkVSKTtcbiAgICBjb25zdCBBRERfRVZFTlRfTElTVEVORVJfU09VUkNFID0gJy4nICsgQUREX0VWRU5UX0xJU1RFTkVSICsgJzonO1xuICAgIGNvbnN0IFBSRVBFTkRfRVZFTlRfTElTVEVORVIgPSAncHJlcGVuZExpc3RlbmVyJztcbiAgICBjb25zdCBQUkVQRU5EX0VWRU5UX0xJU1RFTkVSX1NPVVJDRSA9ICcuJyArIFBSRVBFTkRfRVZFTlRfTElTVEVORVIgKyAnOic7XG4gICAgY29uc3QgaW52b2tlVGFzayA9IGZ1bmN0aW9uICh0YXNrLCB0YXJnZXQsIGV2ZW50KSB7XG4gICAgICAgIC8vIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2UsIGNoZWNrIGlzUmVtb3ZlZCB3aGljaCBpcyBzZXRcbiAgICAgICAgLy8gYnkgcmVtb3ZlRXZlbnRMaXN0ZW5lclxuICAgICAgICBpZiAodGFzay5pc1JlbW92ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWxlZ2F0ZSA9IHRhc2suY2FsbGJhY2s7XG4gICAgICAgIGlmICh0eXBlb2YgZGVsZWdhdGUgPT09ICdvYmplY3QnICYmIGRlbGVnYXRlLmhhbmRsZUV2ZW50KSB7XG4gICAgICAgICAgICAvLyBjcmVhdGUgdGhlIGJpbmQgdmVyc2lvbiBvZiBoYW5kbGVFdmVudCB3aGVuIGludm9rZVxuICAgICAgICAgICAgdGFzay5jYWxsYmFjayA9IChldmVudCkgPT4gZGVsZWdhdGUuaGFuZGxlRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgdGFzay5vcmlnaW5hbERlbGVnYXRlID0gZGVsZWdhdGU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaW52b2tlIHN0YXRpYyB0YXNrLmludm9rZVxuICAgICAgICAvLyBuZWVkIHRvIHRyeS9jYXRjaCBlcnJvciBoZXJlLCBvdGhlcndpc2UsIHRoZSBlcnJvciBpbiBvbmUgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgLy8gd2lsbCBicmVhayB0aGUgZXhlY3V0aW9ucyBvZiB0aGUgb3RoZXIgZXZlbnQgbGlzdGVuZXJzLiBBbHNvIGVycm9yIHdpbGxcbiAgICAgICAgLy8gbm90IHJlbW92ZSB0aGUgZXZlbnQgbGlzdGVuZXIgd2hlbiBgb25jZWAgb3B0aW9ucyBpcyB0cnVlLlxuICAgICAgICBsZXQgZXJyb3I7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0YXNrLmludm9rZSh0YXNrLCB0YXJnZXQsIFtldmVudF0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGVycm9yID0gZXJyO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0YXNrLm9wdGlvbnM7XG4gICAgICAgIGlmIChvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0JyAmJiBvcHRpb25zLm9uY2UpIHtcbiAgICAgICAgICAgIC8vIGlmIG9wdGlvbnMub25jZSBpcyB0cnVlLCBhZnRlciBpbnZva2Ugb25jZSByZW1vdmUgbGlzdGVuZXIgaGVyZVxuICAgICAgICAgICAgLy8gb25seSBicm93c2VyIG5lZWQgdG8gZG8gdGhpcywgbm9kZWpzIGV2ZW50RW1pdHRlciB3aWxsIGNhbCByZW1vdmVMaXN0ZW5lclxuICAgICAgICAgICAgLy8gaW5zaWRlIEV2ZW50RW1pdHRlci5vbmNlXG4gICAgICAgICAgICBjb25zdCBkZWxlZ2F0ZSA9IHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA/IHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA6IHRhc2suY2FsbGJhY2s7XG4gICAgICAgICAgICB0YXJnZXRbUkVNT1ZFX0VWRU5UX0xJU1RFTkVSXS5jYWxsKHRhcmdldCwgZXZlbnQudHlwZSwgZGVsZWdhdGUsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGdsb2JhbENhbGxiYWNrKGNvbnRleHQsIGV2ZW50LCBpc0NhcHR1cmUpIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvem9uZS5qcy9pc3N1ZXMvOTExLCBpbiBJRSwgc29tZXRpbWVzXG4gICAgICAgIC8vIGV2ZW50IHdpbGwgYmUgdW5kZWZpbmVkLCBzbyB3ZSBuZWVkIHRvIHVzZSB3aW5kb3cuZXZlbnRcbiAgICAgICAgZXZlbnQgPSBldmVudCB8fCBfZ2xvYmFsLmV2ZW50O1xuICAgICAgICBpZiAoIWV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gZXZlbnQudGFyZ2V0IGlzIG5lZWRlZCBmb3IgU2Ftc3VuZyBUViBhbmQgU291cmNlQnVmZmVyXG4gICAgICAgIC8vIHx8IGdsb2JhbCBpcyBuZWVkZWQgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvem9uZS5qcy9pc3N1ZXMvMTkwXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGNvbnRleHQgfHwgZXZlbnQudGFyZ2V0IHx8IF9nbG9iYWw7XG4gICAgICAgIGNvbnN0IHRhc2tzID0gdGFyZ2V0W3pvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50LnR5cGVdW2lzQ2FwdHVyZSA/IFRSVUVfU1RSIDogRkFMU0VfU1RSXV07XG4gICAgICAgIGlmICh0YXNrcykge1xuICAgICAgICAgICAgY29uc3QgZXJyb3JzID0gW107XG4gICAgICAgICAgICAvLyBpbnZva2UgYWxsIHRhc2tzIHdoaWNoIGF0dGFjaGVkIHRvIGN1cnJlbnQgdGFyZ2V0IHdpdGggZ2l2ZW4gZXZlbnQudHlwZSBhbmQgY2FwdHVyZSA9IGZhbHNlXG4gICAgICAgICAgICAvLyBmb3IgcGVyZm9ybWFuY2UgY29uY2VybiwgaWYgdGFzay5sZW5ndGggPT09IDEsIGp1c3QgaW52b2tlXG4gICAgICAgICAgICBpZiAodGFza3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gaW52b2tlVGFzayh0YXNrc1swXSwgdGFyZ2V0LCBldmVudCk7XG4gICAgICAgICAgICAgICAgZXJyICYmIGVycm9ycy5wdXNoKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci96b25lLmpzL2lzc3Vlcy84MzZcbiAgICAgICAgICAgICAgICAvLyBjb3B5IHRoZSB0YXNrcyBhcnJheSBiZWZvcmUgaW52b2tlLCB0byBhdm9pZFxuICAgICAgICAgICAgICAgIC8vIHRoZSBjYWxsYmFjayB3aWxsIHJlbW92ZSBpdHNlbGYgb3Igb3RoZXIgbGlzdGVuZXJcbiAgICAgICAgICAgICAgICBjb25zdCBjb3B5VGFza3MgPSB0YXNrcy5zbGljZSgpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29weVRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudCAmJiBldmVudFtJTU1FRElBVEVfUFJPUEFHQVRJT05fU1lNQk9MXSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyID0gaW52b2tlVGFzayhjb3B5VGFza3NbaV0sIHRhcmdldCwgZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICBlcnIgJiYgZXJyb3JzLnB1c2goZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTaW5jZSB0aGVyZSBpcyBvbmx5IG9uZSBlcnJvciwgd2UgZG9uJ3QgbmVlZCB0byBzY2hlZHVsZSBtaWNyb1Rhc2tcbiAgICAgICAgICAgIC8vIHRvIHRocm93IHRoZSBlcnJvci5cbiAgICAgICAgICAgIGlmIChlcnJvcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3JzWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlcnJvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyID0gZXJyb3JzW2ldO1xuICAgICAgICAgICAgICAgICAgICBhcGkubmF0aXZlU2NoZWR1bGVNaWNyb1Rhc2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gZ2xvYmFsIHNoYXJlZCB6b25lQXdhcmVDYWxsYmFjayB0byBoYW5kbGUgYWxsIGV2ZW50IGNhbGxiYWNrIHdpdGggY2FwdHVyZSA9IGZhbHNlXG4gICAgY29uc3QgZ2xvYmFsWm9uZUF3YXJlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIGdsb2JhbENhbGxiYWNrKHRoaXMsIGV2ZW50LCBmYWxzZSk7XG4gICAgfTtcbiAgICAvLyBnbG9iYWwgc2hhcmVkIHpvbmVBd2FyZUNhbGxiYWNrIHRvIGhhbmRsZSBhbGwgZXZlbnQgY2FsbGJhY2sgd2l0aCBjYXB0dXJlID0gdHJ1ZVxuICAgIGNvbnN0IGdsb2JhbFpvbmVBd2FyZUNhcHR1cmVDYWxsYmFjayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICByZXR1cm4gZ2xvYmFsQ2FsbGJhY2sodGhpcywgZXZlbnQsIHRydWUpO1xuICAgIH07XG4gICAgZnVuY3Rpb24gcGF0Y2hFdmVudFRhcmdldE1ldGhvZHMob2JqLCBwYXRjaE9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCFvYmopIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdXNlR2xvYmFsQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICBpZiAocGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy51c2VHICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHVzZUdsb2JhbENhbGxiYWNrID0gcGF0Y2hPcHRpb25zLnVzZUc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsaWRhdGVIYW5kbGVyID0gcGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy52aDtcbiAgICAgICAgbGV0IGNoZWNrRHVwbGljYXRlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMuY2hrRHVwICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNoZWNrRHVwbGljYXRlID0gcGF0Y2hPcHRpb25zLmNoa0R1cDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmV0dXJuVGFyZ2V0ID0gZmFsc2U7XG4gICAgICAgIGlmIChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLnJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVyblRhcmdldCA9IHBhdGNoT3B0aW9ucy5ydDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcHJvdG8gPSBvYmo7XG4gICAgICAgIHdoaWxlIChwcm90byAmJiAhcHJvdG8uaGFzT3duUHJvcGVydHkoQUREX0VWRU5UX0xJU1RFTkVSKSkge1xuICAgICAgICAgICAgcHJvdG8gPSBPYmplY3RHZXRQcm90b3R5cGVPZihwcm90byk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwcm90byAmJiBvYmpbQUREX0VWRU5UX0xJU1RFTkVSXSkge1xuICAgICAgICAgICAgLy8gc29tZWhvdyB3ZSBkaWQgbm90IGZpbmQgaXQsIGJ1dCB3ZSBjYW4gc2VlIGl0LiBUaGlzIGhhcHBlbnMgb24gSUUgZm9yIFdpbmRvdyBwcm9wZXJ0aWVzLlxuICAgICAgICAgICAgcHJvdG8gPSBvYmo7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwcm90bykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm90b1t6b25lU3ltYm9sQWRkRXZlbnRMaXN0ZW5lcl0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBldmVudE5hbWVUb1N0cmluZyA9IHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMuZXZlbnROYW1lVG9TdHJpbmc7XG4gICAgICAgIC8vIGEgc2hhcmVkIGdsb2JhbCB0YXNrRGF0YSB0byBwYXNzIGRhdGEgZm9yIHNjaGVkdWxlRXZlbnRUYXNrXG4gICAgICAgIC8vIHNvIHdlIGRvIG5vdCBuZWVkIHRvIGNyZWF0ZSBhIG5ldyBvYmplY3QganVzdCBmb3IgcGFzcyBzb21lIGRhdGFcbiAgICAgICAgY29uc3QgdGFza0RhdGEgPSB7fTtcbiAgICAgICAgY29uc3QgbmF0aXZlQWRkRXZlbnRMaXN0ZW5lciA9IHByb3RvW3pvbmVTeW1ib2xBZGRFdmVudExpc3RlbmVyXSA9IHByb3RvW0FERF9FVkVOVF9MSVNURU5FUl07XG4gICAgICAgIGNvbnN0IG5hdGl2ZVJlbW92ZUV2ZW50TGlzdGVuZXIgPSBwcm90b1t6b25lU3ltYm9sKFJFTU9WRV9FVkVOVF9MSVNURU5FUildID1cbiAgICAgICAgICAgIHByb3RvW1JFTU9WRV9FVkVOVF9MSVNURU5FUl07XG4gICAgICAgIGNvbnN0IG5hdGl2ZUxpc3RlbmVycyA9IHByb3RvW3pvbmVTeW1ib2woTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSKV0gPVxuICAgICAgICAgICAgcHJvdG9bTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSXTtcbiAgICAgICAgY29uc3QgbmF0aXZlUmVtb3ZlQWxsTGlzdGVuZXJzID0gcHJvdG9bem9uZVN5bWJvbChSRU1PVkVfQUxMX0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUildID1cbiAgICAgICAgICAgIHByb3RvW1JFTU9WRV9BTExfTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSXTtcbiAgICAgICAgbGV0IG5hdGl2ZVByZXBlbmRFdmVudExpc3RlbmVyO1xuICAgICAgICBpZiAocGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy5wcmVwZW5kKSB7XG4gICAgICAgICAgICBuYXRpdmVQcmVwZW5kRXZlbnRMaXN0ZW5lciA9IHByb3RvW3pvbmVTeW1ib2wocGF0Y2hPcHRpb25zLnByZXBlbmQpXSA9XG4gICAgICAgICAgICAgICAgcHJvdG9bcGF0Y2hPcHRpb25zLnByZXBlbmRdO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIHV0aWwgZnVuY3Rpb24gd2lsbCBidWlsZCBhbiBvcHRpb24gb2JqZWN0IHdpdGggcGFzc2l2ZSBvcHRpb25cbiAgICAgICAgICogdG8gaGFuZGxlIGFsbCBwb3NzaWJsZSBpbnB1dCBmcm9tIHRoZSB1c2VyLlxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gYnVpbGRFdmVudExpc3RlbmVyT3B0aW9ucyhvcHRpb25zLCBwYXNzaXZlKSB7XG4gICAgICAgICAgICBpZiAoIXBhc3NpdmVTdXBwb3J0ZWQgJiYgdHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnICYmIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAvLyBkb2Vzbid0IHN1cHBvcnQgcGFzc2l2ZSBidXQgdXNlciB3YW50IHRvIHBhc3MgYW4gb2JqZWN0IGFzIG9wdGlvbnMuXG4gICAgICAgICAgICAgICAgLy8gdGhpcyB3aWxsIG5vdCB3b3JrIG9uIHNvbWUgb2xkIGJyb3dzZXIsIHNvIHdlIGp1c3QgcGFzcyBhIGJvb2xlYW5cbiAgICAgICAgICAgICAgICAvLyBhcyB1c2VDYXB0dXJlIHBhcmFtZXRlclxuICAgICAgICAgICAgICAgIHJldHVybiAhIW9wdGlvbnMuY2FwdHVyZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcGFzc2l2ZVN1cHBvcnRlZCB8fCAhcGFzc2l2ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBjYXB0dXJlOiBvcHRpb25zLCBwYXNzaXZlOiB0cnVlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBwYXNzaXZlOiB0cnVlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnICYmIG9wdGlvbnMucGFzc2l2ZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5vcHRpb25zLCBwYXNzaXZlOiB0cnVlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjdXN0b21TY2hlZHVsZUdsb2JhbCA9IGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGVyZSBpcyBhbHJlYWR5IGEgdGFzayBmb3IgdGhlIGV2ZW50TmFtZSArIGNhcHR1cmUsXG4gICAgICAgICAgICAvLyBqdXN0IHJldHVybiwgYmVjYXVzZSB3ZSB1c2UgdGhlIHNoYXJlZCBnbG9iYWxab25lQXdhcmVDYWxsYmFjayBoZXJlLlxuICAgICAgICAgICAgaWYgKHRhc2tEYXRhLmlzRXhpc3RpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmF0aXZlQWRkRXZlbnRMaXN0ZW5lci5jYWxsKHRhc2tEYXRhLnRhcmdldCwgdGFza0RhdGEuZXZlbnROYW1lLCB0YXNrRGF0YS5jYXB0dXJlID8gZ2xvYmFsWm9uZUF3YXJlQ2FwdHVyZUNhbGxiYWNrIDogZ2xvYmFsWm9uZUF3YXJlQ2FsbGJhY2ssIHRhc2tEYXRhLm9wdGlvbnMpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjdXN0b21DYW5jZWxHbG9iYWwgPSBmdW5jdGlvbiAodGFzaykge1xuICAgICAgICAgICAgLy8gaWYgdGFzayBpcyBub3QgbWFya2VkIGFzIGlzUmVtb3ZlZCwgdGhpcyBjYWxsIGlzIGRpcmVjdGx5XG4gICAgICAgICAgICAvLyBmcm9tIFpvbmUucHJvdG90eXBlLmNhbmNlbFRhc2ssIHdlIHNob3VsZCByZW1vdmUgdGhlIHRhc2tcbiAgICAgICAgICAgIC8vIGZyb20gdGFza3NMaXN0IG9mIHRhcmdldCBmaXJzdFxuICAgICAgICAgICAgaWYgKCF0YXNrLmlzUmVtb3ZlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbEV2ZW50TmFtZXMgPSB6b25lU3ltYm9sRXZlbnROYW1lc1t0YXNrLmV2ZW50TmFtZV07XG4gICAgICAgICAgICAgICAgbGV0IHN5bWJvbEV2ZW50TmFtZTtcbiAgICAgICAgICAgICAgICBpZiAoc3ltYm9sRXZlbnROYW1lcykge1xuICAgICAgICAgICAgICAgICAgICBzeW1ib2xFdmVudE5hbWUgPSBzeW1ib2xFdmVudE5hbWVzW3Rhc2suY2FwdHVyZSA/IFRSVUVfU1RSIDogRkFMU0VfU1RSXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdUYXNrcyA9IHN5bWJvbEV2ZW50TmFtZSAmJiB0YXNrLnRhcmdldFtzeW1ib2xFdmVudE5hbWVdO1xuICAgICAgICAgICAgICAgIGlmIChleGlzdGluZ1Rhc2tzKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXhpc3RpbmdUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdUYXNrID0gZXhpc3RpbmdUYXNrc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleGlzdGluZ1Rhc2sgPT09IHRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Rhc2tzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXQgaXNSZW1vdmVkIHRvIGRhdGEgZm9yIGZhc3RlciBpbnZva2VUYXNrIGNoZWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5pc1JlbW92ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleGlzdGluZ1Rhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhbGwgdGFza3MgZm9yIHRoZSBldmVudE5hbWUgKyBjYXB0dXJlIGhhdmUgZ29uZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGdsb2JhbFpvbmVBd2FyZUNhbGxiYWNrIGFuZCByZW1vdmUgdGhlIHRhc2sgY2FjaGUgZnJvbSB0YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5hbGxSZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay50YXJnZXRbc3ltYm9sRXZlbnROYW1lXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgYWxsIHRhc2tzIGZvciB0aGUgZXZlbnROYW1lICsgY2FwdHVyZSBoYXZlIGdvbmUsXG4gICAgICAgICAgICAvLyB3ZSB3aWxsIHJlYWxseSByZW1vdmUgdGhlIGdsb2JhbCBldmVudCBjYWxsYmFjayxcbiAgICAgICAgICAgIC8vIGlmIG5vdCwgcmV0dXJuXG4gICAgICAgICAgICBpZiAoIXRhc2suYWxsUmVtb3ZlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuYXRpdmVSZW1vdmVFdmVudExpc3RlbmVyLmNhbGwodGFzay50YXJnZXQsIHRhc2suZXZlbnROYW1lLCB0YXNrLmNhcHR1cmUgPyBnbG9iYWxab25lQXdhcmVDYXB0dXJlQ2FsbGJhY2sgOiBnbG9iYWxab25lQXdhcmVDYWxsYmFjaywgdGFzay5vcHRpb25zKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY3VzdG9tU2NoZWR1bGVOb25HbG9iYWwgPSBmdW5jdGlvbiAodGFzaykge1xuICAgICAgICAgICAgcmV0dXJuIG5hdGl2ZUFkZEV2ZW50TGlzdGVuZXIuY2FsbCh0YXNrRGF0YS50YXJnZXQsIHRhc2tEYXRhLmV2ZW50TmFtZSwgdGFzay5pbnZva2UsIHRhc2tEYXRhLm9wdGlvbnMpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjdXN0b21TY2hlZHVsZVByZXBlbmQgPSBmdW5jdGlvbiAodGFzaykge1xuICAgICAgICAgICAgcmV0dXJuIG5hdGl2ZVByZXBlbmRFdmVudExpc3RlbmVyLmNhbGwodGFza0RhdGEudGFyZ2V0LCB0YXNrRGF0YS5ldmVudE5hbWUsIHRhc2suaW52b2tlLCB0YXNrRGF0YS5vcHRpb25zKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY3VzdG9tQ2FuY2VsTm9uR2xvYmFsID0gZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgICAgIHJldHVybiBuYXRpdmVSZW1vdmVFdmVudExpc3RlbmVyLmNhbGwodGFzay50YXJnZXQsIHRhc2suZXZlbnROYW1lLCB0YXNrLmludm9rZSwgdGFzay5vcHRpb25zKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY3VzdG9tU2NoZWR1bGUgPSB1c2VHbG9iYWxDYWxsYmFjayA/IGN1c3RvbVNjaGVkdWxlR2xvYmFsIDogY3VzdG9tU2NoZWR1bGVOb25HbG9iYWw7XG4gICAgICAgIGNvbnN0IGN1c3RvbUNhbmNlbCA9IHVzZUdsb2JhbENhbGxiYWNrID8gY3VzdG9tQ2FuY2VsR2xvYmFsIDogY3VzdG9tQ2FuY2VsTm9uR2xvYmFsO1xuICAgICAgICBjb25zdCBjb21wYXJlVGFza0NhbGxiYWNrVnNEZWxlZ2F0ZSA9IGZ1bmN0aW9uICh0YXNrLCBkZWxlZ2F0ZSkge1xuICAgICAgICAgICAgY29uc3QgdHlwZU9mRGVsZWdhdGUgPSB0eXBlb2YgZGVsZWdhdGU7XG4gICAgICAgICAgICByZXR1cm4gKHR5cGVPZkRlbGVnYXRlID09PSAnZnVuY3Rpb24nICYmIHRhc2suY2FsbGJhY2sgPT09IGRlbGVnYXRlKSB8fFxuICAgICAgICAgICAgICAgICh0eXBlT2ZEZWxlZ2F0ZSA9PT0gJ29iamVjdCcgJiYgdGFzay5vcmlnaW5hbERlbGVnYXRlID09PSBkZWxlZ2F0ZSk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbXBhcmUgPSAocGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy5kaWZmKSA/IHBhdGNoT3B0aW9ucy5kaWZmIDogY29tcGFyZVRhc2tDYWxsYmFja1ZzRGVsZWdhdGU7XG4gICAgICAgIGNvbnN0IHVucGF0Y2hlZEV2ZW50cyA9IFpvbmVbem9uZVN5bWJvbCgnVU5QQVRDSEVEX0VWRU5UUycpXTtcbiAgICAgICAgY29uc3QgcGFzc2l2ZUV2ZW50cyA9IF9nbG9iYWxbem9uZVN5bWJvbCgnUEFTU0lWRV9FVkVOVFMnKV07XG4gICAgICAgIGNvbnN0IG1ha2VBZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIChuYXRpdmVMaXN0ZW5lciwgYWRkU291cmNlLCBjdXN0b21TY2hlZHVsZUZuLCBjdXN0b21DYW5jZWxGbiwgcmV0dXJuVGFyZ2V0ID0gZmFsc2UsIHByZXBlbmQgPSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSB0aGlzIHx8IF9nbG9iYWw7XG4gICAgICAgICAgICAgICAgbGV0IGV2ZW50TmFtZSA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgICAgICBpZiAocGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy50cmFuc2ZlckV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBldmVudE5hbWUgPSBwYXRjaE9wdGlvbnMudHJhbnNmZXJFdmVudE5hbWUoZXZlbnROYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGRlbGVnYXRlID0gYXJndW1lbnRzWzFdO1xuICAgICAgICAgICAgICAgIGlmICghZGVsZWdhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5hdGl2ZUxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpc05vZGUgJiYgZXZlbnROYW1lID09PSAndW5jYXVnaHRFeGNlcHRpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRvbid0IHBhdGNoIHVuY2F1Z2h0RXhjZXB0aW9uIG9mIG5vZGVqcyB0byBwcmV2ZW50IGVuZGxlc3MgbG9vcFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmF0aXZlTGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZG9uJ3QgY3JlYXRlIHRoZSBiaW5kIGRlbGVnYXRlIGZ1bmN0aW9uIGZvciBoYW5kbGVFdmVudFxuICAgICAgICAgICAgICAgIC8vIGNhc2UgaGVyZSB0byBpbXByb3ZlIGFkZEV2ZW50TGlzdGVuZXIgcGVyZm9ybWFuY2VcbiAgICAgICAgICAgICAgICAvLyB3ZSB3aWxsIGNyZWF0ZSB0aGUgYmluZCBkZWxlZ2F0ZSB3aGVuIGludm9rZVxuICAgICAgICAgICAgICAgIGxldCBpc0hhbmRsZUV2ZW50ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkZWxlZ2F0ZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWRlbGVnYXRlLmhhbmRsZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmF0aXZlTGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpc0hhbmRsZUV2ZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlSGFuZGxlciAmJiAhdmFsaWRhdGVIYW5kbGVyKG5hdGl2ZUxpc3RlbmVyLCBkZWxlZ2F0ZSwgdGFyZ2V0LCBhcmd1bWVudHMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcGFzc2l2ZSA9IHBhc3NpdmVTdXBwb3J0ZWQgJiYgISFwYXNzaXZlRXZlbnRzICYmIHBhc3NpdmVFdmVudHMuaW5kZXhPZihldmVudE5hbWUpICE9PSAtMTtcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0gYnVpbGRFdmVudExpc3RlbmVyT3B0aW9ucyhhcmd1bWVudHNbMl0sIHBhc3NpdmUpO1xuICAgICAgICAgICAgICAgIGlmICh1bnBhdGNoZWRFdmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgdW5wYXRjaGVkIGxpc3RcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1bnBhdGNoZWRFdmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudE5hbWUgPT09IHVucGF0Y2hlZEV2ZW50c1tpXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXNzaXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuYXRpdmVMaXN0ZW5lci5jYWxsKHRhcmdldCwgZXZlbnROYW1lLCBkZWxlZ2F0ZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmF0aXZlTGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgY2FwdHVyZSA9ICFvcHRpb25zID8gZmFsc2UgOiB0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Jvb2xlYW4nID8gdHJ1ZSA6IG9wdGlvbnMuY2FwdHVyZTtcbiAgICAgICAgICAgICAgICBjb25zdCBvbmNlID0gb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcgPyBvcHRpb25zLm9uY2UgOiBmYWxzZTtcbiAgICAgICAgICAgICAgICBjb25zdCB6b25lID0gWm9uZS5jdXJyZW50O1xuICAgICAgICAgICAgICAgIGxldCBzeW1ib2xFdmVudE5hbWVzID0gem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXTtcbiAgICAgICAgICAgICAgICBpZiAoIXN5bWJvbEV2ZW50TmFtZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlcGFyZUV2ZW50TmFtZXMoZXZlbnROYW1lLCBldmVudE5hbWVUb1N0cmluZyk7XG4gICAgICAgICAgICAgICAgICAgIHN5bWJvbEV2ZW50TmFtZXMgPSB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudE5hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xFdmVudE5hbWUgPSBzeW1ib2xFdmVudE5hbWVzW2NhcHR1cmUgPyBUUlVFX1NUUiA6IEZBTFNFX1NUUl07XG4gICAgICAgICAgICAgICAgbGV0IGV4aXN0aW5nVGFza3MgPSB0YXJnZXRbc3ltYm9sRXZlbnROYW1lXTtcbiAgICAgICAgICAgICAgICBsZXQgaXNFeGlzdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChleGlzdGluZ1Rhc2tzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGFscmVhZHkgaGF2ZSB0YXNrIHJlZ2lzdGVyZWRcbiAgICAgICAgICAgICAgICAgICAgaXNFeGlzdGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGVja0R1cGxpY2F0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBleGlzdGluZ1Rhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBhcmUoZXhpc3RpbmdUYXNrc1tpXSwgZGVsZWdhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNhbWUgY2FsbGJhY2ssIHNhbWUgY2FwdHVyZSwgc2FtZSBldmVudCBuYW1lLCBqdXN0IHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Rhc2tzID0gdGFyZ2V0W3N5bWJvbEV2ZW50TmFtZV0gPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IHNvdXJjZTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb25zdHJ1Y3Rvck5hbWUgPSB0YXJnZXQuY29uc3RydWN0b3JbJ25hbWUnXTtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRTb3VyY2UgPSBnbG9iYWxTb3VyY2VzW2NvbnN0cnVjdG9yTmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldFNvdXJjZSkge1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2UgPSB0YXJnZXRTb3VyY2VbZXZlbnROYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlID0gY29uc3RydWN0b3JOYW1lICsgYWRkU291cmNlICtcbiAgICAgICAgICAgICAgICAgICAgICAgIChldmVudE5hbWVUb1N0cmluZyA/IGV2ZW50TmFtZVRvU3RyaW5nKGV2ZW50TmFtZSkgOiBldmVudE5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBkbyBub3QgY3JlYXRlIGEgbmV3IG9iamVjdCBhcyB0YXNrLmRhdGEgdG8gcGFzcyB0aG9zZSB0aGluZ3NcbiAgICAgICAgICAgICAgICAvLyBqdXN0IHVzZSB0aGUgZ2xvYmFsIHNoYXJlZCBvbmVcbiAgICAgICAgICAgICAgICB0YXNrRGF0YS5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgICAgICAgICBpZiAob25jZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiBhZGRFdmVudExpc3RlbmVyIHdpdGggb25jZSBvcHRpb25zLCB3ZSBkb24ndCBwYXNzIGl0IHRvXG4gICAgICAgICAgICAgICAgICAgIC8vIG5hdGl2ZSBhZGRFdmVudExpc3RlbmVyLCBpbnN0ZWFkIHdlIGtlZXAgdGhlIG9uY2Ugc2V0dGluZ1xuICAgICAgICAgICAgICAgICAgICAvLyBhbmQgaGFuZGxlIG91cnNlbHZlcy5cbiAgICAgICAgICAgICAgICAgICAgdGFza0RhdGEub3B0aW9ucy5vbmNlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRhc2tEYXRhLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgICAgICAgICB0YXNrRGF0YS5jYXB0dXJlID0gY2FwdHVyZTtcbiAgICAgICAgICAgICAgICB0YXNrRGF0YS5ldmVudE5hbWUgPSBldmVudE5hbWU7XG4gICAgICAgICAgICAgICAgdGFza0RhdGEuaXNFeGlzdGluZyA9IGlzRXhpc3Rpbmc7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHVzZUdsb2JhbENhbGxiYWNrID8gT1BUSU1JWkVEX1pPTkVfRVZFTlRfVEFTS19EQVRBIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIC8vIGtlZXAgdGFza0RhdGEgaW50byBkYXRhIHRvIGFsbG93IG9uU2NoZWR1bGVFdmVudFRhc2sgdG8gYWNjZXNzIHRoZSB0YXNrIGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS50YXNrRGF0YSA9IHRhc2tEYXRhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrID0gem9uZS5zY2hlZHVsZUV2ZW50VGFzayhzb3VyY2UsIGRlbGVnYXRlLCBkYXRhLCBjdXN0b21TY2hlZHVsZUZuLCBjdXN0b21DYW5jZWxGbik7XG4gICAgICAgICAgICAgICAgLy8gc2hvdWxkIGNsZWFyIHRhc2tEYXRhLnRhcmdldCB0byBhdm9pZCBtZW1vcnkgbGVha1xuICAgICAgICAgICAgICAgIC8vIGlzc3VlLCBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8yMDQ0MlxuICAgICAgICAgICAgICAgIHRhc2tEYXRhLnRhcmdldCA9IG51bGw7XG4gICAgICAgICAgICAgICAgLy8gbmVlZCB0byBjbGVhciB1cCB0YXNrRGF0YSBiZWNhdXNlIGl0IGlzIGEgZ2xvYmFsIG9iamVjdFxuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEudGFza0RhdGEgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBoYXZlIHRvIHNhdmUgdGhvc2UgaW5mb3JtYXRpb24gdG8gdGFzayBpbiBjYXNlXG4gICAgICAgICAgICAgICAgLy8gYXBwbGljYXRpb24gbWF5IGNhbGwgdGFzay56b25lLmNhbmNlbFRhc2soKSBkaXJlY3RseVxuICAgICAgICAgICAgICAgIGlmIChvbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMub25jZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghKCFwYXNzaXZlU3VwcG9ydGVkICYmIHR5cGVvZiB0YXNrLm9wdGlvbnMgPT09ICdib29sZWFuJykpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgbm90IHN1cHBvcnQgcGFzc2l2ZSwgYW5kIHdlIHBhc3MgYW4gb3B0aW9uIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICAvLyB0byBhZGRFdmVudExpc3RlbmVyLCB3ZSBzaG91bGQgc2F2ZSB0aGUgb3B0aW9ucyB0byB0YXNrXG4gICAgICAgICAgICAgICAgICAgIHRhc2sub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRhc2sudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICAgICAgICAgIHRhc2suY2FwdHVyZSA9IGNhcHR1cmU7XG4gICAgICAgICAgICAgICAgdGFzay5ldmVudE5hbWUgPSBldmVudE5hbWU7XG4gICAgICAgICAgICAgICAgaWYgKGlzSGFuZGxlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2F2ZSBvcmlnaW5hbCBkZWxlZ2F0ZSBmb3IgY29tcGFyZSB0byBjaGVjayBkdXBsaWNhdGVcbiAgICAgICAgICAgICAgICAgICAgdGFzay5vcmlnaW5hbERlbGVnYXRlID0gZGVsZWdhdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghcHJlcGVuZCkge1xuICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Rhc2tzLnB1c2godGFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Rhc2tzLnVuc2hpZnQodGFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyZXR1cm5UYXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBwcm90b1tBRERfRVZFTlRfTElTVEVORVJdID0gbWFrZUFkZExpc3RlbmVyKG5hdGl2ZUFkZEV2ZW50TGlzdGVuZXIsIEFERF9FVkVOVF9MSVNURU5FUl9TT1VSQ0UsIGN1c3RvbVNjaGVkdWxlLCBjdXN0b21DYW5jZWwsIHJldHVyblRhcmdldCk7XG4gICAgICAgIGlmIChuYXRpdmVQcmVwZW5kRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgcHJvdG9bUFJFUEVORF9FVkVOVF9MSVNURU5FUl0gPSBtYWtlQWRkTGlzdGVuZXIobmF0aXZlUHJlcGVuZEV2ZW50TGlzdGVuZXIsIFBSRVBFTkRfRVZFTlRfTElTVEVORVJfU09VUkNFLCBjdXN0b21TY2hlZHVsZVByZXBlbmQsIGN1c3RvbUNhbmNlbCwgcmV0dXJuVGFyZ2V0LCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBwcm90b1tSRU1PVkVfRVZFTlRfTElTVEVORVJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcyB8fCBfZ2xvYmFsO1xuICAgICAgICAgICAgbGV0IGV2ZW50TmFtZSA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIGlmIChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLnRyYW5zZmVyRXZlbnROYW1lKSB7XG4gICAgICAgICAgICAgICAgZXZlbnROYW1lID0gcGF0Y2hPcHRpb25zLnRyYW5zZmVyRXZlbnROYW1lKGV2ZW50TmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0gYXJndW1lbnRzWzJdO1xuICAgICAgICAgICAgY29uc3QgY2FwdHVyZSA9ICFvcHRpb25zID8gZmFsc2UgOiB0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Jvb2xlYW4nID8gdHJ1ZSA6IG9wdGlvbnMuY2FwdHVyZTtcbiAgICAgICAgICAgIGNvbnN0IGRlbGVnYXRlID0gYXJndW1lbnRzWzFdO1xuICAgICAgICAgICAgaWYgKCFkZWxlZ2F0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuYXRpdmVSZW1vdmVFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsaWRhdGVIYW5kbGVyICYmXG4gICAgICAgICAgICAgICAgIXZhbGlkYXRlSGFuZGxlcihuYXRpdmVSZW1vdmVFdmVudExpc3RlbmVyLCBkZWxlZ2F0ZSwgdGFyZ2V0LCBhcmd1bWVudHMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc3ltYm9sRXZlbnROYW1lcyA9IHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV07XG4gICAgICAgICAgICBsZXQgc3ltYm9sRXZlbnROYW1lO1xuICAgICAgICAgICAgaWYgKHN5bWJvbEV2ZW50TmFtZXMpIHtcbiAgICAgICAgICAgICAgICBzeW1ib2xFdmVudE5hbWUgPSBzeW1ib2xFdmVudE5hbWVzW2NhcHR1cmUgPyBUUlVFX1NUUiA6IEZBTFNFX1NUUl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ1Rhc2tzID0gc3ltYm9sRXZlbnROYW1lICYmIHRhcmdldFtzeW1ib2xFdmVudE5hbWVdO1xuICAgICAgICAgICAgaWYgKGV4aXN0aW5nVGFza3MpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV4aXN0aW5nVGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdUYXNrID0gZXhpc3RpbmdUYXNrc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBhcmUoZXhpc3RpbmdUYXNrLCBkZWxlZ2F0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nVGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0IGlzUmVtb3ZlZCB0byBkYXRhIGZvciBmYXN0ZXIgaW52b2tlVGFzayBjaGVja1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdUYXNrLmlzUmVtb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdUYXNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhbGwgdGFza3MgZm9yIHRoZSBldmVudE5hbWUgKyBjYXB0dXJlIGhhdmUgZ29uZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgZ2xvYmFsWm9uZUF3YXJlQ2FsbGJhY2sgYW5kIHJlbW92ZSB0aGUgdGFzayBjYWNoZSBmcm9tIHRhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nVGFzay5hbGxSZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRbc3ltYm9sRXZlbnROYW1lXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW4gdGhlIHRhcmdldCwgd2UgaGF2ZSBhbiBldmVudCBsaXN0ZW5lciB3aGljaCBpcyBhZGRlZCBieSBvbl9wcm9wZXJ0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN1Y2ggYXMgdGFyZ2V0Lm9uY2xpY2sgPSBmdW5jdGlvbigpIHt9LCBzbyB3ZSBuZWVkIHRvIGNsZWFyIHRoaXMgaW50ZXJuYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwcm9wZXJ0eSB0b28gaWYgYWxsIGRlbGVnYXRlcyBhbGwgcmVtb3ZlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZXZlbnROYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvblByb3BlcnR5U3ltYm9sID0gWk9ORV9TWU1CT0xfUFJFRklYICsgJ09OX1BST1BFUlRZJyArIGV2ZW50TmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W29uUHJvcGVydHlTeW1ib2xdID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Rhc2suem9uZS5jYW5jZWxUYXNrKGV4aXN0aW5nVGFzayk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmV0dXJuVGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlzc3VlIDkzMCwgZGlkbid0IGZpbmQgdGhlIGV2ZW50IG5hbWUgb3IgY2FsbGJhY2tcbiAgICAgICAgICAgIC8vIGZyb20gem9uZSBrZXB0IGV4aXN0aW5nVGFza3MsIHRoZSBjYWxsYmFjayBtYXliZVxuICAgICAgICAgICAgLy8gYWRkZWQgb3V0c2lkZSBvZiB6b25lLCB3ZSBuZWVkIHRvIGNhbGwgbmF0aXZlIHJlbW92ZUV2ZW50TGlzdGVuZXJcbiAgICAgICAgICAgIC8vIHRvIHRyeSB0byByZW1vdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gbmF0aXZlUmVtb3ZlRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgICAgICBwcm90b1tMSVNURU5FUlNfRVZFTlRfTElTVEVORVJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcyB8fCBfZ2xvYmFsO1xuICAgICAgICAgICAgbGV0IGV2ZW50TmFtZSA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIGlmIChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLnRyYW5zZmVyRXZlbnROYW1lKSB7XG4gICAgICAgICAgICAgICAgZXZlbnROYW1lID0gcGF0Y2hPcHRpb25zLnRyYW5zZmVyRXZlbnROYW1lKGV2ZW50TmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tzID0gZmluZEV2ZW50VGFza3ModGFyZ2V0LCBldmVudE5hbWVUb1N0cmluZyA/IGV2ZW50TmFtZVRvU3RyaW5nKGV2ZW50TmFtZSkgOiBldmVudE5hbWUpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2sgPSB0YXNrc1tpXTtcbiAgICAgICAgICAgICAgICBsZXQgZGVsZWdhdGUgPSB0YXNrLm9yaWdpbmFsRGVsZWdhdGUgPyB0YXNrLm9yaWdpbmFsRGVsZWdhdGUgOiB0YXNrLmNhbGxiYWNrO1xuICAgICAgICAgICAgICAgIGxpc3RlbmVycy5wdXNoKGRlbGVnYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBsaXN0ZW5lcnM7XG4gICAgICAgIH07XG4gICAgICAgIHByb3RvW1JFTU9WRV9BTExfTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMgfHwgX2dsb2JhbDtcbiAgICAgICAgICAgIGxldCBldmVudE5hbWUgPSBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICBpZiAoIWV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0YXJnZXQpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wID0ga2V5c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBFVkVOVF9OQU1FX1NZTUJPTF9SRUdYLmV4ZWMocHJvcCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBldnROYW1lID0gbWF0Y2ggJiYgbWF0Y2hbMV07XG4gICAgICAgICAgICAgICAgICAgIC8vIGluIG5vZGVqcyBFdmVudEVtaXR0ZXIsIHJlbW92ZUxpc3RlbmVyIGV2ZW50IGlzXG4gICAgICAgICAgICAgICAgICAgIC8vIHVzZWQgZm9yIG1vbml0b3JpbmcgdGhlIHJlbW92ZUxpc3RlbmVyIGNhbGwsXG4gICAgICAgICAgICAgICAgICAgIC8vIHNvIGp1c3Qga2VlcCByZW1vdmVMaXN0ZW5lciBldmVudExpc3RlbmVyIHVudGlsXG4gICAgICAgICAgICAgICAgICAgIC8vIGFsbCBvdGhlciBldmVudExpc3RlbmVycyBhcmUgcmVtb3ZlZFxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZ0TmFtZSAmJiBldnROYW1lICE9PSAncmVtb3ZlTGlzdGVuZXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW1JFTU9WRV9BTExfTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSXS5jYWxsKHRoaXMsIGV2dE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSByZW1vdmVMaXN0ZW5lciBsaXN0ZW5lciBmaW5hbGx5XG4gICAgICAgICAgICAgICAgdGhpc1tSRU1PVkVfQUxMX0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUl0uY2FsbCh0aGlzLCAncmVtb3ZlTGlzdGVuZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLnRyYW5zZmVyRXZlbnROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50TmFtZSA9IHBhdGNoT3B0aW9ucy50cmFuc2ZlckV2ZW50TmFtZShldmVudE5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xFdmVudE5hbWVzID0gem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXTtcbiAgICAgICAgICAgICAgICBpZiAoc3ltYm9sRXZlbnROYW1lcykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW1ib2xFdmVudE5hbWUgPSBzeW1ib2xFdmVudE5hbWVzW0ZBTFNFX1NUUl07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJvbENhcHR1cmVFdmVudE5hbWUgPSBzeW1ib2xFdmVudE5hbWVzW1RSVUVfU1RSXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza3MgPSB0YXJnZXRbc3ltYm9sRXZlbnROYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FwdHVyZVRhc2tzID0gdGFyZ2V0W3N5bWJvbENhcHR1cmVFdmVudE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFza3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZVRhc2tzID0gdGFza3Muc2xpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVtb3ZlVGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrID0gcmVtb3ZlVGFza3NbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRlbGVnYXRlID0gdGFzay5vcmlnaW5hbERlbGVnYXRlID8gdGFzay5vcmlnaW5hbERlbGVnYXRlIDogdGFzay5jYWxsYmFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW1JFTU9WRV9FVkVOVF9MSVNURU5FUl0uY2FsbCh0aGlzLCBldmVudE5hbWUsIGRlbGVnYXRlLCB0YXNrLm9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXB0dXJlVGFza3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZVRhc2tzID0gY2FwdHVyZVRhc2tzLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlbW92ZVRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFzayA9IHJlbW92ZVRhc2tzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkZWxlZ2F0ZSA9IHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA/IHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA6IHRhc2suY2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tSRU1PVkVfRVZFTlRfTElTVEVORVJdLmNhbGwodGhpcywgZXZlbnROYW1lLCBkZWxlZ2F0ZSwgdGFzay5vcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXR1cm5UYXJnZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLy8gZm9yIG5hdGl2ZSB0b1N0cmluZyBwYXRjaFxuICAgICAgICBhdHRhY2hPcmlnaW5Ub1BhdGNoZWQocHJvdG9bQUREX0VWRU5UX0xJU1RFTkVSXSwgbmF0aXZlQWRkRXZlbnRMaXN0ZW5lcik7XG4gICAgICAgIGF0dGFjaE9yaWdpblRvUGF0Y2hlZChwcm90b1tSRU1PVkVfRVZFTlRfTElTVEVORVJdLCBuYXRpdmVSZW1vdmVFdmVudExpc3RlbmVyKTtcbiAgICAgICAgaWYgKG5hdGl2ZVJlbW92ZUFsbExpc3RlbmVycykge1xuICAgICAgICAgICAgYXR0YWNoT3JpZ2luVG9QYXRjaGVkKHByb3RvW1JFTU9WRV9BTExfTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSXSwgbmF0aXZlUmVtb3ZlQWxsTGlzdGVuZXJzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmF0aXZlTGlzdGVuZXJzKSB7XG4gICAgICAgICAgICBhdHRhY2hPcmlnaW5Ub1BhdGNoZWQocHJvdG9bTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSXSwgbmF0aXZlTGlzdGVuZXJzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgbGV0IHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFwaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0c1tpXSA9IHBhdGNoRXZlbnRUYXJnZXRNZXRob2RzKGFwaXNbaV0sIHBhdGNoT3B0aW9ucyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xufVxuZnVuY3Rpb24gZmluZEV2ZW50VGFza3ModGFyZ2V0LCBldmVudE5hbWUpIHtcbiAgICBpZiAoIWV2ZW50TmFtZSkge1xuICAgICAgICBjb25zdCBmb3VuZFRhc2tzID0gW107XG4gICAgICAgIGZvciAobGV0IHByb3AgaW4gdGFyZ2V0KSB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IEVWRU5UX05BTUVfU1lNQk9MX1JFR1guZXhlYyhwcm9wKTtcbiAgICAgICAgICAgIGxldCBldnROYW1lID0gbWF0Y2ggJiYgbWF0Y2hbMV07XG4gICAgICAgICAgICBpZiAoZXZ0TmFtZSAmJiAoIWV2ZW50TmFtZSB8fCBldnROYW1lID09PSBldmVudE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza3MgPSB0YXJnZXRbcHJvcF07XG4gICAgICAgICAgICAgICAgaWYgKHRhc2tzKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kVGFza3MucHVzaCh0YXNrc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvdW5kVGFza3M7XG4gICAgfVxuICAgIGxldCBzeW1ib2xFdmVudE5hbWUgPSB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudE5hbWVdO1xuICAgIGlmICghc3ltYm9sRXZlbnROYW1lKSB7XG4gICAgICAgIHByZXBhcmVFdmVudE5hbWVzKGV2ZW50TmFtZSk7XG4gICAgICAgIHN5bWJvbEV2ZW50TmFtZSA9IHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV07XG4gICAgfVxuICAgIGNvbnN0IGNhcHR1cmVGYWxzZVRhc2tzID0gdGFyZ2V0W3N5bWJvbEV2ZW50TmFtZVtGQUxTRV9TVFJdXTtcbiAgICBjb25zdCBjYXB0dXJlVHJ1ZVRhc2tzID0gdGFyZ2V0W3N5bWJvbEV2ZW50TmFtZVtUUlVFX1NUUl1dO1xuICAgIGlmICghY2FwdHVyZUZhbHNlVGFza3MpIHtcbiAgICAgICAgcmV0dXJuIGNhcHR1cmVUcnVlVGFza3MgPyBjYXB0dXJlVHJ1ZVRhc2tzLnNsaWNlKCkgOiBbXTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBjYXB0dXJlVHJ1ZVRhc2tzID8gY2FwdHVyZUZhbHNlVGFza3MuY29uY2F0KGNhcHR1cmVUcnVlVGFza3MpIDpcbiAgICAgICAgICAgIGNhcHR1cmVGYWxzZVRhc2tzLnNsaWNlKCk7XG4gICAgfVxufVxuZnVuY3Rpb24gcGF0Y2hFdmVudFByb3RvdHlwZShnbG9iYWwsIGFwaSkge1xuICAgIGNvbnN0IEV2ZW50ID0gZ2xvYmFsWydFdmVudCddO1xuICAgIGlmIChFdmVudCAmJiBFdmVudC5wcm90b3R5cGUpIHtcbiAgICAgICAgYXBpLnBhdGNoTWV0aG9kKEV2ZW50LnByb3RvdHlwZSwgJ3N0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbicsIChkZWxlZ2F0ZSkgPT4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgICAgIHNlbGZbSU1NRURJQVRFX1BST1BBR0FUSU9OX1NZTUJPTF0gPSB0cnVlO1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBjYWxsIHRoZSBuYXRpdmUgc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uXG4gICAgICAgICAgICAvLyBpbiBjYXNlIGluIHNvbWUgaHlicmlkIGFwcGxpY2F0aW9uLCBzb21lIHBhcnQgb2ZcbiAgICAgICAgICAgIC8vIGFwcGxpY2F0aW9uIHdpbGwgYmUgY29udHJvbGxlZCBieSB6b25lLCBzb21lIGFyZSBub3RcbiAgICAgICAgICAgIGRlbGVnYXRlICYmIGRlbGVnYXRlLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHBhdGNoQ2FsbGJhY2tzKGFwaSwgdGFyZ2V0LCB0YXJnZXROYW1lLCBtZXRob2QsIGNhbGxiYWNrcykge1xuICAgIGNvbnN0IHN5bWJvbCA9IFpvbmUuX19zeW1ib2xfXyhtZXRob2QpO1xuICAgIGlmICh0YXJnZXRbc3ltYm9sXSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG5hdGl2ZURlbGVnYXRlID0gdGFyZ2V0W3N5bWJvbF0gPSB0YXJnZXRbbWV0aG9kXTtcbiAgICB0YXJnZXRbbWV0aG9kXSA9IGZ1bmN0aW9uIChuYW1lLCBvcHRzLCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRzICYmIG9wdHMucHJvdG90eXBlKSB7XG4gICAgICAgICAgICBjYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2UgPSBgJHt0YXJnZXROYW1lfS4ke21ldGhvZH06OmAgKyBjYWxsYmFjaztcbiAgICAgICAgICAgICAgICBjb25zdCBwcm90b3R5cGUgPSBvcHRzLnByb3RvdHlwZTtcbiAgICAgICAgICAgICAgICAvLyBOb3RlOiB0aGUgYHBhdGNoQ2FsbGJhY2tzYCBpcyB1c2VkIGZvciBwYXRjaGluZyB0aGUgYGRvY3VtZW50LnJlZ2lzdGVyRWxlbWVudGAgYW5kXG4gICAgICAgICAgICAgICAgLy8gYGN1c3RvbUVsZW1lbnRzLmRlZmluZWAuIFdlIGV4cGxpY2l0bHkgd3JhcCB0aGUgcGF0Y2hpbmcgY29kZSBpbnRvIHRyeS1jYXRjaCBzaW5jZVxuICAgICAgICAgICAgICAgIC8vIGNhbGxiYWNrcyBtYXkgYmUgYWxyZWFkeSBwYXRjaGVkIGJ5IG90aGVyIHdlYiBjb21wb25lbnRzIGZyYW1ld29ya3MgKGUuZy4gTFdDKSwgYW5kIHRoZXlcbiAgICAgICAgICAgICAgICAvLyBtYWtlIHRob3NlIHByb3BlcnRpZXMgbm9uLXdyaXRhYmxlLiBUaGlzIG1lYW5zIHRoYXQgcGF0Y2hpbmcgY2FsbGJhY2sgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgICAgICAgICAgICAgIC8vIGBjYW5ub3QgYXNzaWduIHRvIHJlYWQtb25seSBwcm9wZXJ0eWAuIFNlZSB0aGlzIGNvZGUgYXMgYW4gZXhhbXBsZTpcbiAgICAgICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vc2FsZXNmb3JjZS9sd2MvYmxvYi9tYXN0ZXIvcGFja2FnZXMvQGx3Yy9lbmdpbmUtY29yZS9zcmMvZnJhbWV3b3JrL2Jhc2UtYnJpZGdlLWVsZW1lbnQudHMjTDE4MC1MMTg2XG4gICAgICAgICAgICAgICAgLy8gV2UgZG9uJ3Qgd2FudCB0byBzdG9wIHRoZSBhcHBsaWNhdGlvbiByZW5kZXJpbmcgaWYgd2UgY291bGRuJ3QgcGF0Y2ggc29tZVxuICAgICAgICAgICAgICAgIC8vIGNhbGxiYWNrLCBlLmcuIGBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tgLlxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm90b3R5cGUuaGFzT3duUHJvcGVydHkoY2FsbGJhY2spKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdG9yID0gYXBpLk9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90b3R5cGUsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLnZhbHVlID0gYXBpLndyYXBXaXRoQ3VycmVudFpvbmUoZGVzY3JpcHRvci52YWx1ZSwgc291cmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcGkuX3JlZGVmaW5lUHJvcGVydHkob3B0cy5wcm90b3R5cGUsIGNhbGxiYWNrLCBkZXNjcmlwdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb3RvdHlwZVtjYWxsYmFja10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm90b3R5cGVbY2FsbGJhY2tdID0gYXBpLndyYXBXaXRoQ3VycmVudFpvbmUocHJvdG90eXBlW2NhbGxiYWNrXSwgc291cmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm90b3R5cGVbY2FsbGJhY2tdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm90b3R5cGVbY2FsbGJhY2tdID0gYXBpLndyYXBXaXRoQ3VycmVudFpvbmUocHJvdG90eXBlW2NhbGxiYWNrXSwgc291cmNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE5vdGU6IHdlIGxlYXZlIHRoZSBjYXRjaCBibG9jayBlbXB0eSBzaW5jZSB0aGVyZSdzIG5vIHdheSB0byBoYW5kbGUgdGhlIGVycm9yIHJlbGF0ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gdG8gbm9uLXdyaXRhYmxlIHByb3BlcnR5LlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuYXRpdmVEZWxlZ2F0ZS5jYWxsKHRhcmdldCwgbmFtZSwgb3B0cywgb3B0aW9ucyk7XG4gICAgfTtcbiAgICBhcGkuYXR0YWNoT3JpZ2luVG9QYXRjaGVkKHRhcmdldFttZXRob2RdLCBuYXRpdmVEZWxlZ2F0ZSk7XG59XG5cbi8qKlxuICogQGZpbGVvdmVydmlld1xuICogQHN1cHByZXNzIHtnbG9iYWxUaGlzfVxuICovXG5mdW5jdGlvbiBmaWx0ZXJQcm9wZXJ0aWVzKHRhcmdldCwgb25Qcm9wZXJ0aWVzLCBpZ25vcmVQcm9wZXJ0aWVzKSB7XG4gICAgaWYgKCFpZ25vcmVQcm9wZXJ0aWVzIHx8IGlnbm9yZVByb3BlcnRpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBvblByb3BlcnRpZXM7XG4gICAgfVxuICAgIGNvbnN0IHRpcCA9IGlnbm9yZVByb3BlcnRpZXMuZmlsdGVyKGlwID0+IGlwLnRhcmdldCA9PT0gdGFyZ2V0KTtcbiAgICBpZiAoIXRpcCB8fCB0aXAubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBvblByb3BlcnRpZXM7XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldElnbm9yZVByb3BlcnRpZXMgPSB0aXBbMF0uaWdub3JlUHJvcGVydGllcztcbiAgICByZXR1cm4gb25Qcm9wZXJ0aWVzLmZpbHRlcihvcCA9PiB0YXJnZXRJZ25vcmVQcm9wZXJ0aWVzLmluZGV4T2Yob3ApID09PSAtMSk7XG59XG5mdW5jdGlvbiBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyh0YXJnZXQsIG9uUHJvcGVydGllcywgaWdub3JlUHJvcGVydGllcywgcHJvdG90eXBlKSB7XG4gICAgLy8gY2hlY2sgd2hldGhlciB0YXJnZXQgaXMgYXZhaWxhYmxlLCBzb21ldGltZXMgdGFyZ2V0IHdpbGwgYmUgdW5kZWZpbmVkXG4gICAgLy8gYmVjYXVzZSBkaWZmZXJlbnQgYnJvd3NlciBvciBzb21lIDNyZCBwYXJ0eSBwbHVnaW4uXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBmaWx0ZXJlZFByb3BlcnRpZXMgPSBmaWx0ZXJQcm9wZXJ0aWVzKHRhcmdldCwgb25Qcm9wZXJ0aWVzLCBpZ25vcmVQcm9wZXJ0aWVzKTtcbiAgICBwYXRjaE9uUHJvcGVydGllcyh0YXJnZXQsIGZpbHRlcmVkUHJvcGVydGllcywgcHJvdG90eXBlKTtcbn1cbi8qKlxuICogR2V0IGFsbCBldmVudCBuYW1lIHByb3BlcnRpZXMgd2hpY2ggdGhlIGV2ZW50IG5hbWUgc3RhcnRzV2l0aCBgb25gXG4gKiBmcm9tIHRoZSB0YXJnZXQgb2JqZWN0IGl0c2VsZiwgaW5oZXJpdGVkIHByb3BlcnRpZXMgYXJlIG5vdCBjb25zaWRlcmVkLlxuICovXG5mdW5jdGlvbiBnZXRPbkV2ZW50TmFtZXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldClcbiAgICAgICAgLmZpbHRlcihuYW1lID0+IG5hbWUuc3RhcnRzV2l0aCgnb24nKSAmJiBuYW1lLmxlbmd0aCA+IDIpXG4gICAgICAgIC5tYXAobmFtZSA9PiBuYW1lLnN1YnN0cmluZygyKSk7XG59XG5mdW5jdGlvbiBwcm9wZXJ0eURlc2NyaXB0b3JQYXRjaChhcGksIF9nbG9iYWwpIHtcbiAgICBpZiAoaXNOb2RlICYmICFpc01peCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChab25lW2FwaS5zeW1ib2woJ3BhdGNoRXZlbnRzJyldKSB7XG4gICAgICAgIC8vIGV2ZW50cyBhcmUgYWxyZWFkeSBiZWVuIHBhdGNoZWQgYnkgbGVnYWN5IHBhdGNoLlxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGlnbm9yZVByb3BlcnRpZXMgPSBfZ2xvYmFsWydfX1pvbmVfaWdub3JlX29uX3Byb3BlcnRpZXMnXTtcbiAgICAvLyBmb3IgYnJvd3NlcnMgdGhhdCB3ZSBjYW4gcGF0Y2ggdGhlIGRlc2NyaXB0b3I6ICBDaHJvbWUgJiBGaXJlZm94XG4gICAgbGV0IHBhdGNoVGFyZ2V0cyA9IFtdO1xuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgICAgY29uc3QgaW50ZXJuYWxXaW5kb3cgPSB3aW5kb3c7XG4gICAgICAgIHBhdGNoVGFyZ2V0cyA9IHBhdGNoVGFyZ2V0cy5jb25jYXQoW1xuICAgICAgICAgICAgJ0RvY3VtZW50JywgJ1NWR0VsZW1lbnQnLCAnRWxlbWVudCcsICdIVE1MRWxlbWVudCcsICdIVE1MQm9keUVsZW1lbnQnLCAnSFRNTE1lZGlhRWxlbWVudCcsXG4gICAgICAgICAgICAnSFRNTEZyYW1lU2V0RWxlbWVudCcsICdIVE1MRnJhbWVFbGVtZW50JywgJ0hUTUxJRnJhbWVFbGVtZW50JywgJ0hUTUxNYXJxdWVlRWxlbWVudCcsICdXb3JrZXInXG4gICAgICAgIF0pO1xuICAgICAgICBjb25zdCBpZ25vcmVFcnJvclByb3BlcnRpZXMgPSBpc0lFKCkgPyBbeyB0YXJnZXQ6IGludGVybmFsV2luZG93LCBpZ25vcmVQcm9wZXJ0aWVzOiBbJ2Vycm9yJ10gfV0gOiBbXTtcbiAgICAgICAgLy8gaW4gSUUvRWRnZSwgb25Qcm9wIG5vdCBleGlzdCBpbiB3aW5kb3cgb2JqZWN0LCBidXQgaW4gV2luZG93UHJvdG90eXBlXG4gICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gcGFzcyBXaW5kb3dQcm90b3R5cGUgdG8gY2hlY2sgb25Qcm9wIGV4aXN0IG9yIG5vdFxuICAgICAgICBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyhpbnRlcm5hbFdpbmRvdywgZ2V0T25FdmVudE5hbWVzKGludGVybmFsV2luZG93KSwgaWdub3JlUHJvcGVydGllcyA/IGlnbm9yZVByb3BlcnRpZXMuY29uY2F0KGlnbm9yZUVycm9yUHJvcGVydGllcykgOiBpZ25vcmVQcm9wZXJ0aWVzLCBPYmplY3RHZXRQcm90b3R5cGVPZihpbnRlcm5hbFdpbmRvdykpO1xuICAgIH1cbiAgICBwYXRjaFRhcmdldHMgPSBwYXRjaFRhcmdldHMuY29uY2F0KFtcbiAgICAgICAgJ1hNTEh0dHBSZXF1ZXN0JywgJ1hNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQnLCAnSURCSW5kZXgnLCAnSURCUmVxdWVzdCcsICdJREJPcGVuREJSZXF1ZXN0JyxcbiAgICAgICAgJ0lEQkRhdGFiYXNlJywgJ0lEQlRyYW5zYWN0aW9uJywgJ0lEQkN1cnNvcicsICdXZWJTb2NrZXQnXG4gICAgXSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRjaFRhcmdldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gX2dsb2JhbFtwYXRjaFRhcmdldHNbaV1dO1xuICAgICAgICB0YXJnZXQgJiYgdGFyZ2V0LnByb3RvdHlwZSAmJlxuICAgICAgICAgICAgcGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXModGFyZ2V0LnByb3RvdHlwZSwgZ2V0T25FdmVudE5hbWVzKHRhcmdldC5wcm90b3R5cGUpLCBpZ25vcmVQcm9wZXJ0aWVzKTtcbiAgICB9XG59XG5cblpvbmUuX19sb2FkX3BhdGNoKCd1dGlsJywgKGdsb2JhbCwgWm9uZSwgYXBpKSA9PiB7XG4gICAgLy8gQ29sbGVjdCBuYXRpdmUgZXZlbnQgbmFtZXMgYnkgbG9va2luZyBhdCBwcm9wZXJ0aWVzXG4gICAgLy8gb24gdGhlIGdsb2JhbCBuYW1lc3BhY2UsIGUuZy4gJ29uY2xpY2snLlxuICAgIGNvbnN0IGV2ZW50TmFtZXMgPSBnZXRPbkV2ZW50TmFtZXMoZ2xvYmFsKTtcbiAgICBhcGkucGF0Y2hPblByb3BlcnRpZXMgPSBwYXRjaE9uUHJvcGVydGllcztcbiAgICBhcGkucGF0Y2hNZXRob2QgPSBwYXRjaE1ldGhvZDtcbiAgICBhcGkuYmluZEFyZ3VtZW50cyA9IGJpbmRBcmd1bWVudHM7XG4gICAgYXBpLnBhdGNoTWFjcm9UYXNrID0gcGF0Y2hNYWNyb1Rhc2s7XG4gICAgLy8gSW4gZWFybGllciB2ZXJzaW9uIG9mIHpvbmUuanMgKDwwLjkuMCksIHdlIHVzZSBlbnYgbmFtZSBgX196b25lX3N5bWJvbF9fQkxBQ0tfTElTVEVEX0VWRU5UU2AgdG9cbiAgICAvLyBkZWZpbmUgd2hpY2ggZXZlbnRzIHdpbGwgbm90IGJlIHBhdGNoZWQgYnkgYFpvbmUuanNgLlxuICAgIC8vIEluIG5ld2VyIHZlcnNpb24gKD49MC45LjApLCB3ZSBjaGFuZ2UgdGhlIGVudiBuYW1lIHRvIGBfX3pvbmVfc3ltYm9sX19VTlBBVENIRURfRVZFTlRTYCB0byBrZWVwXG4gICAgLy8gdGhlIG5hbWUgY29uc2lzdGVudCB3aXRoIGFuZ3VsYXIgcmVwby5cbiAgICAvLyBUaGUgIGBfX3pvbmVfc3ltYm9sX19CTEFDS19MSVNURURfRVZFTlRTYCBpcyBkZXByZWNhdGVkLCBidXQgaXQgaXMgc3RpbGwgYmUgc3VwcG9ydGVkIGZvclxuICAgIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICAgIGNvbnN0IFNZTUJPTF9CTEFDS19MSVNURURfRVZFTlRTID0gWm9uZS5fX3N5bWJvbF9fKCdCTEFDS19MSVNURURfRVZFTlRTJyk7XG4gICAgY29uc3QgU1lNQk9MX1VOUEFUQ0hFRF9FVkVOVFMgPSBab25lLl9fc3ltYm9sX18oJ1VOUEFUQ0hFRF9FVkVOVFMnKTtcbiAgICBpZiAoZ2xvYmFsW1NZTUJPTF9VTlBBVENIRURfRVZFTlRTXSkge1xuICAgICAgICBnbG9iYWxbU1lNQk9MX0JMQUNLX0xJU1RFRF9FVkVOVFNdID0gZ2xvYmFsW1NZTUJPTF9VTlBBVENIRURfRVZFTlRTXTtcbiAgICB9XG4gICAgaWYgKGdsb2JhbFtTWU1CT0xfQkxBQ0tfTElTVEVEX0VWRU5UU10pIHtcbiAgICAgICAgWm9uZVtTWU1CT0xfQkxBQ0tfTElTVEVEX0VWRU5UU10gPSBab25lW1NZTUJPTF9VTlBBVENIRURfRVZFTlRTXSA9XG4gICAgICAgICAgICBnbG9iYWxbU1lNQk9MX0JMQUNLX0xJU1RFRF9FVkVOVFNdO1xuICAgIH1cbiAgICBhcGkucGF0Y2hFdmVudFByb3RvdHlwZSA9IHBhdGNoRXZlbnRQcm90b3R5cGU7XG4gICAgYXBpLnBhdGNoRXZlbnRUYXJnZXQgPSBwYXRjaEV2ZW50VGFyZ2V0O1xuICAgIGFwaS5pc0lFT3JFZGdlID0gaXNJRU9yRWRnZTtcbiAgICBhcGkuT2JqZWN0RGVmaW5lUHJvcGVydHkgPSBPYmplY3REZWZpbmVQcm9wZXJ0eTtcbiAgICBhcGkuT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAgIGFwaS5PYmplY3RDcmVhdGUgPSBPYmplY3RDcmVhdGU7XG4gICAgYXBpLkFycmF5U2xpY2UgPSBBcnJheVNsaWNlO1xuICAgIGFwaS5wYXRjaENsYXNzID0gcGF0Y2hDbGFzcztcbiAgICBhcGkud3JhcFdpdGhDdXJyZW50Wm9uZSA9IHdyYXBXaXRoQ3VycmVudFpvbmU7XG4gICAgYXBpLmZpbHRlclByb3BlcnRpZXMgPSBmaWx0ZXJQcm9wZXJ0aWVzO1xuICAgIGFwaS5hdHRhY2hPcmlnaW5Ub1BhdGNoZWQgPSBhdHRhY2hPcmlnaW5Ub1BhdGNoZWQ7XG4gICAgYXBpLl9yZWRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuICAgIGFwaS5wYXRjaENhbGxiYWNrcyA9IHBhdGNoQ2FsbGJhY2tzO1xuICAgIGFwaS5nZXRHbG9iYWxPYmplY3RzID0gKCkgPT4gKHtcbiAgICAgICAgZ2xvYmFsU291cmNlcyxcbiAgICAgICAgem9uZVN5bWJvbEV2ZW50TmFtZXMsXG4gICAgICAgIGV2ZW50TmFtZXMsXG4gICAgICAgIGlzQnJvd3NlcixcbiAgICAgICAgaXNNaXgsXG4gICAgICAgIGlzTm9kZSxcbiAgICAgICAgVFJVRV9TVFIsXG4gICAgICAgIEZBTFNFX1NUUixcbiAgICAgICAgWk9ORV9TWU1CT0xfUFJFRklYLFxuICAgICAgICBBRERfRVZFTlRfTElTVEVORVJfU1RSLFxuICAgICAgICBSRU1PVkVfRVZFTlRfTElTVEVORVJfU1RSXG4gICAgfSk7XG59KTtcblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3XG4gKiBAc3VwcHJlc3Mge21pc3NpbmdSZXF1aXJlfVxuICovXG5mdW5jdGlvbiBwYXRjaFF1ZXVlTWljcm90YXNrKGdsb2JhbCwgYXBpKSB7XG4gICAgYXBpLnBhdGNoTWV0aG9kKGdsb2JhbCwgJ3F1ZXVlTWljcm90YXNrJywgKGRlbGVnYXRlKSA9PiB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoc2VsZiwgYXJncykge1xuICAgICAgICAgICAgWm9uZS5jdXJyZW50LnNjaGVkdWxlTWljcm9UYXNrKCdxdWV1ZU1pY3JvdGFzaycsIGFyZ3NbMF0pO1xuICAgICAgICB9O1xuICAgIH0pO1xufVxuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXdcbiAqIEBzdXBwcmVzcyB7bWlzc2luZ1JlcXVpcmV9XG4gKi9cbmNvbnN0IHRhc2tTeW1ib2wgPSB6b25lU3ltYm9sKCd6b25lVGFzaycpO1xuZnVuY3Rpb24gcGF0Y2hUaW1lcih3aW5kb3csIHNldE5hbWUsIGNhbmNlbE5hbWUsIG5hbWVTdWZmaXgpIHtcbiAgICBsZXQgc2V0TmF0aXZlID0gbnVsbDtcbiAgICBsZXQgY2xlYXJOYXRpdmUgPSBudWxsO1xuICAgIHNldE5hbWUgKz0gbmFtZVN1ZmZpeDtcbiAgICBjYW5jZWxOYW1lICs9IG5hbWVTdWZmaXg7XG4gICAgY29uc3QgdGFza3NCeUhhbmRsZUlkID0ge307XG4gICAgZnVuY3Rpb24gc2NoZWR1bGVUYXNrKHRhc2spIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHRhc2suZGF0YTtcbiAgICAgICAgZGF0YS5hcmdzWzBdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRhc2suaW52b2tlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgICAgIGRhdGEuaGFuZGxlSWQgPSBzZXROYXRpdmUuYXBwbHkod2luZG93LCBkYXRhLmFyZ3MpO1xuICAgICAgICByZXR1cm4gdGFzaztcbiAgICB9XG4gICAgZnVuY3Rpb24gY2xlYXJUYXNrKHRhc2spIHtcbiAgICAgICAgcmV0dXJuIGNsZWFyTmF0aXZlLmNhbGwod2luZG93LCB0YXNrLmRhdGEuaGFuZGxlSWQpO1xuICAgIH1cbiAgICBzZXROYXRpdmUgPVxuICAgICAgICBwYXRjaE1ldGhvZCh3aW5kb3csIHNldE5hbWUsIChkZWxlZ2F0ZSkgPT4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGlzUGVyaW9kaWM6IG5hbWVTdWZmaXggPT09ICdJbnRlcnZhbCcsXG4gICAgICAgICAgICAgICAgICAgIGRlbGF5OiAobmFtZVN1ZmZpeCA9PT0gJ1RpbWVvdXQnIHx8IG5hbWVTdWZmaXggPT09ICdJbnRlcnZhbCcpID8gYXJnc1sxXSB8fCAwIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgYXJnczogYXJnc1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBhcmdzWzBdO1xuICAgICAgICAgICAgICAgIGFyZ3NbMF0gPSBmdW5jdGlvbiB0aW1lcigpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXNzdWUtOTM0LCB0YXNrIHdpbGwgYmUgY2FuY2VsbGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBldmVuIGl0IGlzIGEgcGVyaW9kaWMgdGFzayBzdWNoIGFzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXRJbnRlcnZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvNDAzODdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENsZWFudXAgdGFza3NCeUhhbmRsZUlkIHNob3VsZCBiZSBoYW5kbGVkIGJlZm9yZSBzY2hlZHVsZVRhc2tcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIHNvbWUgem9uZVNwZWMgbWF5IGludGVyY2VwdCBhbmQgZG9lc24ndCB0cmlnZ2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzY2hlZHVsZUZuKHNjaGVkdWxlVGFzaykgcHJvdmlkZWQgaGVyZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKG9wdGlvbnMuaXNQZXJpb2RpYykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuaGFuZGxlSWQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluIG5vbi1ub2RlanMgZW52LCB3ZSByZW1vdmUgdGltZXJJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmcm9tIGxvY2FsIGNhY2hlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlSWRbb3B0aW9ucy5oYW5kbGVJZF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbnMuaGFuZGxlSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm9kZSByZXR1cm5zIGNvbXBsZXggb2JqZWN0cyBhcyBoYW5kbGVJZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgcmVtb3ZlIHRhc2sgcmVmZXJlbmNlIGZyb20gdGltZXIgb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuaGFuZGxlSWRbdGFza1N5bWJvbF0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc3QgdGFzayA9IHNjaGVkdWxlTWFjcm9UYXNrV2l0aEN1cnJlbnRab25lKHNldE5hbWUsIGFyZ3NbMF0sIG9wdGlvbnMsIHNjaGVkdWxlVGFzaywgY2xlYXJUYXNrKTtcbiAgICAgICAgICAgICAgICBpZiAoIXRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE5vZGUuanMgbXVzdCBhZGRpdGlvbmFsbHkgc3VwcG9ydCB0aGUgcmVmIGFuZCB1bnJlZiBmdW5jdGlvbnMuXG4gICAgICAgICAgICAgICAgY29uc3QgaGFuZGxlID0gdGFzay5kYXRhLmhhbmRsZUlkO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaGFuZGxlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBmb3Igbm9uIG5vZGVqcyBlbnYsIHdlIHNhdmUgaGFuZGxlSWQ6IHRhc2tcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFwcGluZyBpbiBsb2NhbCBjYWNoZSBmb3IgY2xlYXJUaW1lb3V0XG4gICAgICAgICAgICAgICAgICAgIHRhc2tzQnlIYW5kbGVJZFtoYW5kbGVdID0gdGFzaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaGFuZGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZvciBub2RlanMgZW52LCB3ZSBzYXZlIHRhc2tcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVmZXJlbmNlIGluIHRpbWVySWQgT2JqZWN0IGZvciBjbGVhclRpbWVvdXRcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlW3Rhc2tTeW1ib2xdID0gdGFzaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgd2hldGhlciBoYW5kbGUgaXMgbnVsbCwgYmVjYXVzZSBzb21lIHBvbHlmaWxsIG9yIGJyb3dzZXJcbiAgICAgICAgICAgICAgICAvLyBtYXkgcmV0dXJuIHVuZGVmaW5lZCBmcm9tIHNldFRpbWVvdXQvc2V0SW50ZXJ2YWwvc2V0SW1tZWRpYXRlL3JlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgICAgICAgICAgICAgIGlmIChoYW5kbGUgJiYgaGFuZGxlLnJlZiAmJiBoYW5kbGUudW5yZWYgJiYgdHlwZW9mIGhhbmRsZS5yZWYgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGhhbmRsZS51bnJlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0YXNrLnJlZiA9IGhhbmRsZS5yZWYuYmluZChoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrLnVucmVmID0gaGFuZGxlLnVucmVmLmJpbmQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBoYW5kbGUgPT09ICdudW1iZXInIHx8IGhhbmRsZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGNhdXNlIGFuIGVycm9yIGJ5IGNhbGxpbmcgaXQgZGlyZWN0bHkuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlLmFwcGx5KHdpbmRvdywgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIGNsZWFyTmF0aXZlID1cbiAgICAgICAgcGF0Y2hNZXRob2Qod2luZG93LCBjYW5jZWxOYW1lLCAoZGVsZWdhdGUpID0+IGZ1bmN0aW9uIChzZWxmLCBhcmdzKSB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IGFyZ3NbMF07XG4gICAgICAgICAgICBsZXQgdGFzaztcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaWQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgLy8gbm9uIG5vZGVqcyBlbnYuXG4gICAgICAgICAgICAgICAgdGFzayA9IHRhc2tzQnlIYW5kbGVJZFtpZF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBub2RlanMgZW52LlxuICAgICAgICAgICAgICAgIHRhc2sgPSBpZCAmJiBpZFt0YXNrU3ltYm9sXTtcbiAgICAgICAgICAgICAgICAvLyBvdGhlciBlbnZpcm9ubWVudHMuXG4gICAgICAgICAgICAgICAgaWYgKCF0YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2sgPSBpZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGFzayAmJiB0eXBlb2YgdGFzay50eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLnN0YXRlICE9PSAnbm90U2NoZWR1bGVkJyAmJlxuICAgICAgICAgICAgICAgICAgICAodGFzay5jYW5jZWxGbiAmJiB0YXNrLmRhdGEuaXNQZXJpb2RpYyB8fCB0YXNrLnJ1bkNvdW50ID09PSAwKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGlkID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRhc2tzQnlIYW5kbGVJZFtpZF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkW3Rhc2tTeW1ib2xdID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBEbyBub3QgY2FuY2VsIGFscmVhZHkgY2FuY2VsZWQgZnVuY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgIHRhc2suem9uZS5jYW5jZWxUYXNrKHRhc2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGNhdXNlIGFuIGVycm9yIGJ5IGNhbGxpbmcgaXQgZGlyZWN0bHkuXG4gICAgICAgICAgICAgICAgZGVsZWdhdGUuYXBwbHkod2luZG93LCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG59XG5cbmZ1bmN0aW9uIHBhdGNoQ3VzdG9tRWxlbWVudHMoX2dsb2JhbCwgYXBpKSB7XG4gICAgY29uc3QgeyBpc0Jyb3dzZXIsIGlzTWl4IH0gPSBhcGkuZ2V0R2xvYmFsT2JqZWN0cygpO1xuICAgIGlmICgoIWlzQnJvd3NlciAmJiAhaXNNaXgpIHx8ICFfZ2xvYmFsWydjdXN0b21FbGVtZW50cyddIHx8ICEoJ2N1c3RvbUVsZW1lbnRzJyBpbiBfZ2xvYmFsKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNhbGxiYWNrcyA9IFsnY29ubmVjdGVkQ2FsbGJhY2snLCAnZGlzY29ubmVjdGVkQ2FsbGJhY2snLCAnYWRvcHRlZENhbGxiYWNrJywgJ2F0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayddO1xuICAgIGFwaS5wYXRjaENhbGxiYWNrcyhhcGksIF9nbG9iYWwuY3VzdG9tRWxlbWVudHMsICdjdXN0b21FbGVtZW50cycsICdkZWZpbmUnLCBjYWxsYmFja3MpO1xufVxuXG5mdW5jdGlvbiBldmVudFRhcmdldFBhdGNoKF9nbG9iYWwsIGFwaSkge1xuICAgIGlmIChab25lW2FwaS5zeW1ib2woJ3BhdGNoRXZlbnRUYXJnZXQnKV0pIHtcbiAgICAgICAgLy8gRXZlbnRUYXJnZXQgaXMgYWxyZWFkeSBwYXRjaGVkLlxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgZXZlbnROYW1lcywgem9uZVN5bWJvbEV2ZW50TmFtZXMsIFRSVUVfU1RSLCBGQUxTRV9TVFIsIFpPTkVfU1lNQk9MX1BSRUZJWCB9ID0gYXBpLmdldEdsb2JhbE9iamVjdHMoKTtcbiAgICAvLyAgcHJlZGVmaW5lIGFsbCBfX3pvbmVfc3ltYm9sX18gKyBldmVudE5hbWUgKyB0cnVlL2ZhbHNlIHN0cmluZ1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnROYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBldmVudE5hbWUgPSBldmVudE5hbWVzW2ldO1xuICAgICAgICBjb25zdCBmYWxzZUV2ZW50TmFtZSA9IGV2ZW50TmFtZSArIEZBTFNFX1NUUjtcbiAgICAgICAgY29uc3QgdHJ1ZUV2ZW50TmFtZSA9IGV2ZW50TmFtZSArIFRSVUVfU1RSO1xuICAgICAgICBjb25zdCBzeW1ib2wgPSBaT05FX1NZTUJPTF9QUkVGSVggKyBmYWxzZUV2ZW50TmFtZTtcbiAgICAgICAgY29uc3Qgc3ltYm9sQ2FwdHVyZSA9IFpPTkVfU1lNQk9MX1BSRUZJWCArIHRydWVFdmVudE5hbWU7XG4gICAgICAgIHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV0gPSB7fTtcbiAgICAgICAgem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXVtGQUxTRV9TVFJdID0gc3ltYm9sO1xuICAgICAgICB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudE5hbWVdW1RSVUVfU1RSXSA9IHN5bWJvbENhcHR1cmU7XG4gICAgfVxuICAgIGNvbnN0IEVWRU5UX1RBUkdFVCA9IF9nbG9iYWxbJ0V2ZW50VGFyZ2V0J107XG4gICAgaWYgKCFFVkVOVF9UQVJHRVQgfHwgIUVWRU5UX1RBUkdFVC5wcm90b3R5cGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhcGkucGF0Y2hFdmVudFRhcmdldChfZ2xvYmFsLCBhcGksIFtFVkVOVF9UQVJHRVQgJiYgRVZFTlRfVEFSR0VULnByb3RvdHlwZV0pO1xuICAgIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24gcGF0Y2hFdmVudChnbG9iYWwsIGFwaSkge1xuICAgIGFwaS5wYXRjaEV2ZW50UHJvdG90eXBlKGdsb2JhbCwgYXBpKTtcbn1cblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3XG4gKiBAc3VwcHJlc3Mge21pc3NpbmdSZXF1aXJlfVxuICovXG5ab25lLl9fbG9hZF9wYXRjaCgnbGVnYWN5JywgKGdsb2JhbCkgPT4ge1xuICAgIGNvbnN0IGxlZ2FjeVBhdGNoID0gZ2xvYmFsW1pvbmUuX19zeW1ib2xfXygnbGVnYWN5UGF0Y2gnKV07XG4gICAgaWYgKGxlZ2FjeVBhdGNoKSB7XG4gICAgICAgIGxlZ2FjeVBhdGNoKCk7XG4gICAgfVxufSk7XG5ab25lLl9fbG9hZF9wYXRjaCgndGltZXJzJywgKGdsb2JhbCkgPT4ge1xuICAgIGNvbnN0IHNldCA9ICdzZXQnO1xuICAgIGNvbnN0IGNsZWFyID0gJ2NsZWFyJztcbiAgICBwYXRjaFRpbWVyKGdsb2JhbCwgc2V0LCBjbGVhciwgJ1RpbWVvdXQnKTtcbiAgICBwYXRjaFRpbWVyKGdsb2JhbCwgc2V0LCBjbGVhciwgJ0ludGVydmFsJyk7XG4gICAgcGF0Y2hUaW1lcihnbG9iYWwsIHNldCwgY2xlYXIsICdJbW1lZGlhdGUnKTtcbn0pO1xuWm9uZS5fX2xvYWRfcGF0Y2goJ3JlcXVlc3RBbmltYXRpb25GcmFtZScsIChnbG9iYWwpID0+IHtcbiAgICBwYXRjaFRpbWVyKGdsb2JhbCwgJ3JlcXVlc3QnLCAnY2FuY2VsJywgJ0FuaW1hdGlvbkZyYW1lJyk7XG4gICAgcGF0Y2hUaW1lcihnbG9iYWwsICdtb3pSZXF1ZXN0JywgJ21vekNhbmNlbCcsICdBbmltYXRpb25GcmFtZScpO1xuICAgIHBhdGNoVGltZXIoZ2xvYmFsLCAnd2Via2l0UmVxdWVzdCcsICd3ZWJraXRDYW5jZWwnLCAnQW5pbWF0aW9uRnJhbWUnKTtcbn0pO1xuWm9uZS5fX2xvYWRfcGF0Y2goJ2Jsb2NraW5nJywgKGdsb2JhbCwgWm9uZSkgPT4ge1xuICAgIGNvbnN0IGJsb2NraW5nTWV0aG9kcyA9IFsnYWxlcnQnLCAncHJvbXB0JywgJ2NvbmZpcm0nXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJsb2NraW5nTWV0aG9kcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBuYW1lID0gYmxvY2tpbmdNZXRob2RzW2ldO1xuICAgICAgICBwYXRjaE1ldGhvZChnbG9iYWwsIG5hbWUsIChkZWxlZ2F0ZSwgc3ltYm9sLCBuYW1lKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHMsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWm9uZS5jdXJyZW50LnJ1bihkZWxlZ2F0ZSwgZ2xvYmFsLCBhcmdzLCBuYW1lKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuWm9uZS5fX2xvYWRfcGF0Y2goJ0V2ZW50VGFyZ2V0JywgKGdsb2JhbCwgWm9uZSwgYXBpKSA9PiB7XG4gICAgcGF0Y2hFdmVudChnbG9iYWwsIGFwaSk7XG4gICAgZXZlbnRUYXJnZXRQYXRjaChnbG9iYWwsIGFwaSk7XG4gICAgLy8gcGF0Y2ggWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCdzIGFkZEV2ZW50TGlzdGVuZXIvcmVtb3ZlRXZlbnRMaXN0ZW5lclxuICAgIGNvbnN0IFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQgPSBnbG9iYWxbJ1hNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQnXTtcbiAgICBpZiAoWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCAmJiBYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0LnByb3RvdHlwZSkge1xuICAgICAgICBhcGkucGF0Y2hFdmVudFRhcmdldChnbG9iYWwsIGFwaSwgW1hNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQucHJvdG90eXBlXSk7XG4gICAgfVxufSk7XG5ab25lLl9fbG9hZF9wYXRjaCgnTXV0YXRpb25PYnNlcnZlcicsIChnbG9iYWwsIFpvbmUsIGFwaSkgPT4ge1xuICAgIHBhdGNoQ2xhc3MoJ011dGF0aW9uT2JzZXJ2ZXInKTtcbiAgICBwYXRjaENsYXNzKCdXZWJLaXRNdXRhdGlvbk9ic2VydmVyJyk7XG59KTtcblpvbmUuX19sb2FkX3BhdGNoKCdJbnRlcnNlY3Rpb25PYnNlcnZlcicsIChnbG9iYWwsIFpvbmUsIGFwaSkgPT4ge1xuICAgIHBhdGNoQ2xhc3MoJ0ludGVyc2VjdGlvbk9ic2VydmVyJyk7XG59KTtcblpvbmUuX19sb2FkX3BhdGNoKCdGaWxlUmVhZGVyJywgKGdsb2JhbCwgWm9uZSwgYXBpKSA9PiB7XG4gICAgcGF0Y2hDbGFzcygnRmlsZVJlYWRlcicpO1xufSk7XG5ab25lLl9fbG9hZF9wYXRjaCgnb25fcHJvcGVydHknLCAoZ2xvYmFsLCBab25lLCBhcGkpID0+IHtcbiAgICBwcm9wZXJ0eURlc2NyaXB0b3JQYXRjaChhcGksIGdsb2JhbCk7XG59KTtcblpvbmUuX19sb2FkX3BhdGNoKCdjdXN0b21FbGVtZW50cycsIChnbG9iYWwsIFpvbmUsIGFwaSkgPT4ge1xuICAgIHBhdGNoQ3VzdG9tRWxlbWVudHMoZ2xvYmFsLCBhcGkpO1xufSk7XG5ab25lLl9fbG9hZF9wYXRjaCgnWEhSJywgKGdsb2JhbCwgWm9uZSkgPT4ge1xuICAgIC8vIFRyZWF0IFhNTEh0dHBSZXF1ZXN0IGFzIGEgbWFjcm90YXNrLlxuICAgIHBhdGNoWEhSKGdsb2JhbCk7XG4gICAgY29uc3QgWEhSX1RBU0sgPSB6b25lU3ltYm9sKCd4aHJUYXNrJyk7XG4gICAgY29uc3QgWEhSX1NZTkMgPSB6b25lU3ltYm9sKCd4aHJTeW5jJyk7XG4gICAgY29uc3QgWEhSX0xJU1RFTkVSID0gem9uZVN5bWJvbCgneGhyTGlzdGVuZXInKTtcbiAgICBjb25zdCBYSFJfU0NIRURVTEVEID0gem9uZVN5bWJvbCgneGhyU2NoZWR1bGVkJyk7XG4gICAgY29uc3QgWEhSX1VSTCA9IHpvbmVTeW1ib2woJ3hoclVSTCcpO1xuICAgIGNvbnN0IFhIUl9FUlJPUl9CRUZPUkVfU0NIRURVTEVEID0gem9uZVN5bWJvbCgneGhyRXJyb3JCZWZvcmVTY2hlZHVsZWQnKTtcbiAgICBmdW5jdGlvbiBwYXRjaFhIUih3aW5kb3cpIHtcbiAgICAgICAgY29uc3QgWE1MSHR0cFJlcXVlc3QgPSB3aW5kb3dbJ1hNTEh0dHBSZXF1ZXN0J107XG4gICAgICAgIGlmICghWE1MSHR0cFJlcXVlc3QpIHtcbiAgICAgICAgICAgIC8vIFhNTEh0dHBSZXF1ZXN0IGlzIG5vdCBhdmFpbGFibGUgaW4gc2VydmljZSB3b3JrZXJcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBYTUxIdHRwUmVxdWVzdFByb3RvdHlwZSA9IFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZTtcbiAgICAgICAgZnVuY3Rpb24gZmluZFBlbmRpbmdUYXNrKHRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtYSFJfVEFTS107XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG9yaUFkZExpc3RlbmVyID0gWE1MSHR0cFJlcXVlc3RQcm90b3R5cGVbWk9ORV9TWU1CT0xfQUREX0VWRU5UX0xJU1RFTkVSXTtcbiAgICAgICAgbGV0IG9yaVJlbW92ZUxpc3RlbmVyID0gWE1MSHR0cFJlcXVlc3RQcm90b3R5cGVbWk9ORV9TWU1CT0xfUkVNT1ZFX0VWRU5UX0xJU1RFTkVSXTtcbiAgICAgICAgaWYgKCFvcmlBZGRMaXN0ZW5lcikge1xuICAgICAgICAgICAgY29uc3QgWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCA9IHdpbmRvd1snWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCddO1xuICAgICAgICAgICAgaWYgKFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0UHJvdG90eXBlID0gWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldC5wcm90b3R5cGU7XG4gICAgICAgICAgICAgICAgb3JpQWRkTGlzdGVuZXIgPSBYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0UHJvdG90eXBlW1pPTkVfU1lNQk9MX0FERF9FVkVOVF9MSVNURU5FUl07XG4gICAgICAgICAgICAgICAgb3JpUmVtb3ZlTGlzdGVuZXIgPSBYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0UHJvdG90eXBlW1pPTkVfU1lNQk9MX1JFTU9WRV9FVkVOVF9MSVNURU5FUl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgUkVBRFlfU1RBVEVfQ0hBTkdFID0gJ3JlYWR5c3RhdGVjaGFuZ2UnO1xuICAgICAgICBjb25zdCBTQ0hFRFVMRUQgPSAnc2NoZWR1bGVkJztcbiAgICAgICAgZnVuY3Rpb24gc2NoZWR1bGVUYXNrKHRhc2spIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0YXNrLmRhdGE7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBkYXRhLnRhcmdldDtcbiAgICAgICAgICAgIHRhcmdldFtYSFJfU0NIRURVTEVEXSA9IGZhbHNlO1xuICAgICAgICAgICAgdGFyZ2V0W1hIUl9FUlJPUl9CRUZPUkVfU0NIRURVTEVEXSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gcmVtb3ZlIGV4aXN0aW5nIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgICAgICBjb25zdCBsaXN0ZW5lciA9IHRhcmdldFtYSFJfTElTVEVORVJdO1xuICAgICAgICAgICAgaWYgKCFvcmlBZGRMaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIG9yaUFkZExpc3RlbmVyID0gdGFyZ2V0W1pPTkVfU1lNQk9MX0FERF9FVkVOVF9MSVNURU5FUl07XG4gICAgICAgICAgICAgICAgb3JpUmVtb3ZlTGlzdGVuZXIgPSB0YXJnZXRbWk9ORV9TWU1CT0xfUkVNT1ZFX0VWRU5UX0xJU1RFTkVSXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIG9yaVJlbW92ZUxpc3RlbmVyLmNhbGwodGFyZ2V0LCBSRUFEWV9TVEFURV9DSEFOR0UsIGxpc3RlbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG5ld0xpc3RlbmVyID0gdGFyZ2V0W1hIUl9MSVNURU5FUl0gPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC5yZWFkeVN0YXRlID09PSB0YXJnZXQuRE9ORSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBzb21ldGltZXMgb24gc29tZSBicm93c2VycyBYTUxIdHRwUmVxdWVzdCB3aWxsIGZpcmUgb25yZWFkeXN0YXRlY2hhbmdlIHdpdGhcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVhZHlTdGF0ZT00IG11bHRpcGxlIHRpbWVzLCBzbyB3ZSBuZWVkIHRvIGNoZWNrIHRhc2sgc3RhdGUgaGVyZVxuICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEuYWJvcnRlZCAmJiB0YXJnZXRbWEhSX1NDSEVEVUxFRF0gJiYgdGFzay5zdGF0ZSA9PT0gU0NIRURVTEVEKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayB3aGV0aGVyIHRoZSB4aHIgaGFzIHJlZ2lzdGVyZWQgb25sb2FkIGxpc3RlbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGF0IGlzIHRoZSBjYXNlLCB0aGUgdGFzayBzaG91bGQgaW52b2tlIGFmdGVyIGFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25sb2FkIGxpc3RlbmVycyBmaW5pc2guXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBbHNvIGlmIHRoZSByZXF1ZXN0IGZhaWxlZCB3aXRob3V0IHJlc3BvbnNlIChzdGF0dXMgPSAwKSwgdGhlIGxvYWQgZXZlbnQgaGFuZGxlclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2lsbCBub3QgYmUgdHJpZ2dlcmVkLCBpbiB0aGF0IGNhc2UsIHdlIHNob3VsZCBhbHNvIGludm9rZSB0aGUgcGxhY2Vob2xkZXIgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGNsb3NlIHRoZSBYTUxIdHRwUmVxdWVzdDo6c2VuZCBtYWNyb1Rhc2suXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8zODc5NVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9hZFRhc2tzID0gdGFyZ2V0W1pvbmUuX19zeW1ib2xfXygnbG9hZGZhbHNlJyldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldC5zdGF0dXMgIT09IDAgJiYgbG9hZFRhc2tzICYmIGxvYWRUYXNrcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JpSW52b2tlID0gdGFzay5pbnZva2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5pbnZva2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gbG9hZCB0aGUgdGFza3MgYWdhaW4sIGJlY2F1c2UgaW4gb3RoZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbG9hZCBsaXN0ZW5lciwgdGhleSBtYXkgcmVtb3ZlIHRoZW1zZWx2ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9hZFRhc2tzID0gdGFyZ2V0W1pvbmUuX19zeW1ib2xfXygnbG9hZGZhbHNlJyldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvYWRUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvYWRUYXNrc1tpXSA9PT0gdGFzaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRUYXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkYXRhLmFib3J0ZWQgJiYgdGFzay5zdGF0ZSA9PT0gU0NIRURVTEVEKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlJbnZva2UuY2FsbCh0YXNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZFRhc2tzLnB1c2godGFzayk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrLmludm9rZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFkYXRhLmFib3J0ZWQgJiYgdGFyZ2V0W1hIUl9TQ0hFRFVMRURdID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXJyb3Igb2NjdXJzIHdoZW4geGhyLnNlbmQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W1hIUl9FUlJPUl9CRUZPUkVfU0NIRURVTEVEXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgb3JpQWRkTGlzdGVuZXIuY2FsbCh0YXJnZXQsIFJFQURZX1NUQVRFX0NIQU5HRSwgbmV3TGlzdGVuZXIpO1xuICAgICAgICAgICAgY29uc3Qgc3RvcmVkVGFzayA9IHRhcmdldFtYSFJfVEFTS107XG4gICAgICAgICAgICBpZiAoIXN0b3JlZFRhc2spIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbWEhSX1RBU0tdID0gdGFzaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbmROYXRpdmUuYXBwbHkodGFyZ2V0LCBkYXRhLmFyZ3MpO1xuICAgICAgICAgICAgdGFyZ2V0W1hIUl9TQ0hFRFVMRURdID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHBsYWNlaG9sZGVyQ2FsbGJhY2soKSB7IH1cbiAgICAgICAgZnVuY3Rpb24gY2xlYXJUYXNrKHRhc2spIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0YXNrLmRhdGE7XG4gICAgICAgICAgICAvLyBOb3RlIC0gaWRlYWxseSwgd2Ugd291bGQgY2FsbCBkYXRhLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyIGhlcmUsIGJ1dCBpdCdzIHRvbyBsYXRlXG4gICAgICAgICAgICAvLyB0byBwcmV2ZW50IGl0IGZyb20gZmlyaW5nLiBTbyBpbnN0ZWFkLCB3ZSBzdG9yZSBpbmZvIGZvciB0aGUgZXZlbnQgbGlzdGVuZXIuXG4gICAgICAgICAgICBkYXRhLmFib3J0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGFib3J0TmF0aXZlLmFwcGx5KGRhdGEudGFyZ2V0LCBkYXRhLmFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9wZW5OYXRpdmUgPSBwYXRjaE1ldGhvZChYTUxIdHRwUmVxdWVzdFByb3RvdHlwZSwgJ29wZW4nLCAoKSA9PiBmdW5jdGlvbiAoc2VsZiwgYXJncykge1xuICAgICAgICAgICAgc2VsZltYSFJfU1lOQ10gPSBhcmdzWzJdID09IGZhbHNlO1xuICAgICAgICAgICAgc2VsZltYSFJfVVJMXSA9IGFyZ3NbMV07XG4gICAgICAgICAgICByZXR1cm4gb3Blbk5hdGl2ZS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IFhNTEhUVFBSRVFVRVNUX1NPVVJDRSA9ICdYTUxIdHRwUmVxdWVzdC5zZW5kJztcbiAgICAgICAgY29uc3QgZmV0Y2hUYXNrQWJvcnRpbmcgPSB6b25lU3ltYm9sKCdmZXRjaFRhc2tBYm9ydGluZycpO1xuICAgICAgICBjb25zdCBmZXRjaFRhc2tTY2hlZHVsaW5nID0gem9uZVN5bWJvbCgnZmV0Y2hUYXNrU2NoZWR1bGluZycpO1xuICAgICAgICBjb25zdCBzZW5kTmF0aXZlID0gcGF0Y2hNZXRob2QoWE1MSHR0cFJlcXVlc3RQcm90b3R5cGUsICdzZW5kJywgKCkgPT4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgICAgIGlmIChab25lLmN1cnJlbnRbZmV0Y2hUYXNrU2NoZWR1bGluZ10gPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAvLyBhIGZldGNoIGlzIHNjaGVkdWxpbmcsIHNvIHdlIGFyZSB1c2luZyB4aHIgdG8gcG9seWZpbGwgZmV0Y2hcbiAgICAgICAgICAgICAgICAvLyBhbmQgYmVjYXVzZSB3ZSBhbHJlYWR5IHNjaGVkdWxlIG1hY3JvVGFzayBmb3IgZmV0Y2gsIHdlIHNob3VsZFxuICAgICAgICAgICAgICAgIC8vIG5vdCBzY2hlZHVsZSBhIG1hY3JvVGFzayBmb3IgeGhyIGFnYWluXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbmROYXRpdmUuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VsZltYSFJfU1lOQ10pIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgWEhSIGlzIHN5bmMgdGhlcmUgaXMgbm8gdGFzayB0byBzY2hlZHVsZSwganVzdCBleGVjdXRlIHRoZSBjb2RlLlxuICAgICAgICAgICAgICAgIHJldHVybiBzZW5kTmF0aXZlLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsgdGFyZ2V0OiBzZWxmLCB1cmw6IHNlbGZbWEhSX1VSTF0sIGlzUGVyaW9kaWM6IGZhbHNlLCBhcmdzOiBhcmdzLCBhYm9ydGVkOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBzY2hlZHVsZU1hY3JvVGFza1dpdGhDdXJyZW50Wm9uZShYTUxIVFRQUkVRVUVTVF9TT1VSQ0UsIHBsYWNlaG9sZGVyQ2FsbGJhY2ssIG9wdGlvbnMsIHNjaGVkdWxlVGFzaywgY2xlYXJUYXNrKTtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZiAmJiBzZWxmW1hIUl9FUlJPUl9CRUZPUkVfU0NIRURVTEVEXSA9PT0gdHJ1ZSAmJiAhb3B0aW9ucy5hYm9ydGVkICYmXG4gICAgICAgICAgICAgICAgICAgIHRhc2suc3RhdGUgPT09IFNDSEVEVUxFRCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB4aHIgcmVxdWVzdCB0aHJvdyBlcnJvciB3aGVuIHNlbmRcbiAgICAgICAgICAgICAgICAgICAgLy8gd2Ugc2hvdWxkIGludm9rZSB0YXNrIGluc3RlYWQgb2YgbGVhdmluZyBhIHNjaGVkdWxlZFxuICAgICAgICAgICAgICAgICAgICAvLyBwZW5kaW5nIG1hY3JvVGFza1xuICAgICAgICAgICAgICAgICAgICB0YXNrLmludm9rZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGFib3J0TmF0aXZlID0gcGF0Y2hNZXRob2QoWE1MSHR0cFJlcXVlc3RQcm90b3R5cGUsICdhYm9ydCcsICgpID0+IGZ1bmN0aW9uIChzZWxmLCBhcmdzKSB7XG4gICAgICAgICAgICBjb25zdCB0YXNrID0gZmluZFBlbmRpbmdUYXNrKHNlbGYpO1xuICAgICAgICAgICAgaWYgKHRhc2sgJiYgdHlwZW9mIHRhc2sudHlwZSA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBYSFIgaGFzIGFscmVhZHkgY29tcGxldGVkLCBkbyBub3RoaW5nLlxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBYSFIgaGFzIGFscmVhZHkgYmVlbiBhYm9ydGVkLCBkbyBub3RoaW5nLlxuICAgICAgICAgICAgICAgIC8vIEZpeCAjNTY5LCBjYWxsIGFib3J0IG11bHRpcGxlIHRpbWVzIGJlZm9yZSBkb25lIHdpbGwgY2F1c2VcbiAgICAgICAgICAgICAgICAvLyBtYWNyb1Rhc2sgdGFzayBjb3VudCBiZSBuZWdhdGl2ZSBudW1iZXJcbiAgICAgICAgICAgICAgICBpZiAodGFzay5jYW5jZWxGbiA9PSBudWxsIHx8ICh0YXNrLmRhdGEgJiYgdGFzay5kYXRhLmFib3J0ZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGFzay56b25lLmNhbmNlbFRhc2sodGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChab25lLmN1cnJlbnRbZmV0Y2hUYXNrQWJvcnRpbmddID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhlIGFib3J0IGlzIGNhbGxlZCBmcm9tIGZldGNoIHBvbHlmaWxsLCB3ZSBuZWVkIHRvIGNhbGwgbmF0aXZlIGFib3J0IG9mIFhIUi5cbiAgICAgICAgICAgICAgICByZXR1cm4gYWJvcnROYXRpdmUuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBPdGhlcndpc2UsIHdlIGFyZSB0cnlpbmcgdG8gYWJvcnQgYW4gWEhSIHdoaWNoIGhhcyBub3QgeWV0IGJlZW4gc2VudCwgc28gdGhlcmUgaXMgbm9cbiAgICAgICAgICAgIC8vIHRhc2tcbiAgICAgICAgICAgIC8vIHRvIGNhbmNlbC4gRG8gbm90aGluZy5cbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG5ab25lLl9fbG9hZF9wYXRjaCgnZ2VvbG9jYXRpb24nLCAoZ2xvYmFsKSA9PiB7XG4gICAgLy8vIEdFT19MT0NBVElPTlxuICAgIGlmIChnbG9iYWxbJ25hdmlnYXRvciddICYmIGdsb2JhbFsnbmF2aWdhdG9yJ10uZ2VvbG9jYXRpb24pIHtcbiAgICAgICAgcGF0Y2hQcm90b3R5cGUoZ2xvYmFsWyduYXZpZ2F0b3InXS5nZW9sb2NhdGlvbiwgWydnZXRDdXJyZW50UG9zaXRpb24nLCAnd2F0Y2hQb3NpdGlvbiddKTtcbiAgICB9XG59KTtcblpvbmUuX19sb2FkX3BhdGNoKCdQcm9taXNlUmVqZWN0aW9uRXZlbnQnLCAoZ2xvYmFsLCBab25lKSA9PiB7XG4gICAgLy8gaGFuZGxlIHVuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvblxuICAgIGZ1bmN0aW9uIGZpbmRQcm9taXNlUmVqZWN0aW9uSGFuZGxlcihldnROYW1lKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgY29uc3QgZXZlbnRUYXNrcyA9IGZpbmRFdmVudFRhc2tzKGdsb2JhbCwgZXZ0TmFtZSk7XG4gICAgICAgICAgICBldmVudFRhc2tzLmZvckVhY2goZXZlbnRUYXNrID0+IHtcbiAgICAgICAgICAgICAgICAvLyB3aW5kb3dzIGhhcyBhZGRlZCB1bmhhbmRsZWRyZWplY3Rpb24gZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgICAgICAgICAvLyB0cmlnZ2VyIHRoZSBldmVudCBsaXN0ZW5lclxuICAgICAgICAgICAgICAgIGNvbnN0IFByb21pc2VSZWplY3Rpb25FdmVudCA9IGdsb2JhbFsnUHJvbWlzZVJlamVjdGlvbkV2ZW50J107XG4gICAgICAgICAgICAgICAgaWYgKFByb21pc2VSZWplY3Rpb25FdmVudCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBldnQgPSBuZXcgUHJvbWlzZVJlamVjdGlvbkV2ZW50KGV2dE5hbWUsIHsgcHJvbWlzZTogZS5wcm9taXNlLCByZWFzb246IGUucmVqZWN0aW9uIH0pO1xuICAgICAgICAgICAgICAgICAgICBldmVudFRhc2suaW52b2tlKGV2dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmIChnbG9iYWxbJ1Byb21pc2VSZWplY3Rpb25FdmVudCddKSB7XG4gICAgICAgIFpvbmVbem9uZVN5bWJvbCgndW5oYW5kbGVkUHJvbWlzZVJlamVjdGlvbkhhbmRsZXInKV0gPVxuICAgICAgICAgICAgZmluZFByb21pc2VSZWplY3Rpb25IYW5kbGVyKCd1bmhhbmRsZWRyZWplY3Rpb24nKTtcbiAgICAgICAgWm9uZVt6b25lU3ltYm9sKCdyZWplY3Rpb25IYW5kbGVkSGFuZGxlcicpXSA9XG4gICAgICAgICAgICBmaW5kUHJvbWlzZVJlamVjdGlvbkhhbmRsZXIoJ3JlamVjdGlvbmhhbmRsZWQnKTtcbiAgICB9XG59KTtcblpvbmUuX19sb2FkX3BhdGNoKCdxdWV1ZU1pY3JvdGFzaycsIChnbG9iYWwsIFpvbmUsIGFwaSkgPT4ge1xuICAgIHBhdGNoUXVldWVNaWNyb3Rhc2soZ2xvYmFsLCBhcGkpO1xufSk7XG4iXSwibmFtZXMiOlsiZ2xvYmFsIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwibmFtZSIsInBlcmZvcm1hbmNlTWVhc3VyZSIsImxhYmVsIiwic3ltYm9sUHJlZml4IiwiX19zeW1ib2xfXyIsImNoZWNrRHVwbGljYXRlIiwiRXJyb3IiLCJab25lIiwiYXNzZXJ0Wm9uZVBhdGNoZWQiLCJwYXRjaGVzIiwicm9vdCIsInpvbmUiLCJjdXJyZW50IiwicGFyZW50IiwiX2N1cnJlbnRab25lRnJhbWUiLCJjdXJyZW50VGFzayIsIl9jdXJyZW50VGFzayIsIl9fbG9hZF9wYXRjaCIsImZuIiwiaWdub3JlRHVwbGljYXRlIiwiaGFzT3duUHJvcGVydHkiLCJwZXJmTmFtZSIsIl9hcGkiLCJfcGFyZW50IiwiX25hbWUiLCJjb25zdHJ1Y3RvciIsInpvbmVTcGVjIiwiX3Byb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwiX3pvbmVEZWxlZ2F0ZSIsIl9ab25lRGVsZWdhdGUiLCJnZXQiLCJrZXkiLCJnZXRab25lV2l0aCIsImZvcmsiLCJ3cmFwIiwiY2FsbGJhY2siLCJzb3VyY2UiLCJfY2FsbGJhY2siLCJpbnRlcmNlcHQiLCJydW5HdWFyZGVkIiwiYXJndW1lbnRzIiwicnVuIiwiYXBwbHlUaGlzIiwiYXBwbHlBcmdzIiwiaW52b2tlIiwiZXJyb3IiLCJoYW5kbGVFcnJvciIsInJ1blRhc2siLCJ0YXNrIiwiTk9fWk9ORSIsInN0YXRlIiwibm90U2NoZWR1bGVkIiwidHlwZSIsImV2ZW50VGFzayIsIm1hY3JvVGFzayIsInJlRW50cnlHdWFyZCIsInJ1bm5pbmciLCJfdHJhbnNpdGlvblRvIiwic2NoZWR1bGVkIiwicnVuQ291bnQiLCJwcmV2aW91c1Rhc2siLCJkYXRhIiwiaXNQZXJpb2RpYyIsImNhbmNlbEZuIiwidW5kZWZpbmVkIiwiaW52b2tlVGFzayIsInVua25vd24iLCJfdXBkYXRlVGFza0NvdW50Iiwic2NoZWR1bGVUYXNrIiwibmV3Wm9uZSIsInNjaGVkdWxpbmciLCJ6b25lRGVsZWdhdGVzIiwiX3pvbmVEZWxlZ2F0ZXMiLCJfem9uZSIsImVyciIsInNjaGVkdWxlTWljcm9UYXNrIiwiY3VzdG9tU2NoZWR1bGUiLCJab25lVGFzayIsIm1pY3JvVGFzayIsInNjaGVkdWxlTWFjcm9UYXNrIiwiY3VzdG9tQ2FuY2VsIiwic2NoZWR1bGVFdmVudFRhc2siLCJjYW5jZWxUYXNrIiwiY2FuY2VsaW5nIiwiY291bnQiLCJpIiwibGVuZ3RoIiwiREVMRUdBVEVfWlMiLCJvbkhhc1Rhc2siLCJkZWxlZ2F0ZSIsIl8iLCJ0YXJnZXQiLCJoYXNUYXNrU3RhdGUiLCJoYXNUYXNrIiwib25TY2hlZHVsZVRhc2siLCJvbkludm9rZVRhc2siLCJvbkNhbmNlbFRhc2siLCJwYXJlbnREZWxlZ2F0ZSIsIl90YXNrQ291bnRzIiwiX3BhcmVudERlbGVnYXRlIiwiX2ZvcmtaUyIsIm9uRm9yayIsIl9mb3JrRGxndCIsIl9mb3JrQ3VyclpvbmUiLCJfaW50ZXJjZXB0WlMiLCJvbkludGVyY2VwdCIsIl9pbnRlcmNlcHREbGd0IiwiX2ludGVyY2VwdEN1cnJab25lIiwiX2ludm9rZVpTIiwib25JbnZva2UiLCJfaW52b2tlRGxndCIsIl9pbnZva2VDdXJyWm9uZSIsIl9oYW5kbGVFcnJvclpTIiwib25IYW5kbGVFcnJvciIsIl9oYW5kbGVFcnJvckRsZ3QiLCJfaGFuZGxlRXJyb3JDdXJyWm9uZSIsIl9zY2hlZHVsZVRhc2taUyIsIl9zY2hlZHVsZVRhc2tEbGd0IiwiX3NjaGVkdWxlVGFza0N1cnJab25lIiwiX2ludm9rZVRhc2taUyIsIl9pbnZva2VUYXNrRGxndCIsIl9pbnZva2VUYXNrQ3VyclpvbmUiLCJfY2FuY2VsVGFza1pTIiwiX2NhbmNlbFRhc2tEbGd0IiwiX2NhbmNlbFRhc2tDdXJyWm9uZSIsIl9oYXNUYXNrWlMiLCJfaGFzVGFza0RsZ3QiLCJfaGFzVGFza0RsZ3RPd25lciIsIl9oYXNUYXNrQ3VyclpvbmUiLCJ6b25lU3BlY0hhc1Rhc2siLCJwYXJlbnRIYXNUYXNrIiwidGFyZ2V0Wm9uZSIsImFwcGx5IiwicmV0dXJuVGFzayIsInB1c2giLCJzY2hlZHVsZUZuIiwidmFsdWUiLCJpc0VtcHR5IiwiY291bnRzIiwicHJldiIsIm5leHQiLCJjaGFuZ2UiLCJvcHRpb25zIiwiX3N0YXRlIiwic2VsZiIsInVzZUciLCJjYWxsIiwiYXJncyIsIl9udW1iZXJPZk5lc3RlZFRhc2tGcmFtZXMiLCJkcmFpbk1pY3JvVGFza1F1ZXVlIiwiY2FuY2VsU2NoZWR1bGVSZXF1ZXN0IiwidG9TdGF0ZSIsImZyb21TdGF0ZTEiLCJmcm9tU3RhdGUyIiwidG9TdHJpbmciLCJoYW5kbGVJZCIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvSlNPTiIsInN5bWJvbFNldFRpbWVvdXQiLCJzeW1ib2xQcm9taXNlIiwic3ltYm9sVGhlbiIsIl9taWNyb1Rhc2tRdWV1ZSIsIl9pc0RyYWluaW5nTWljcm90YXNrUXVldWUiLCJuYXRpdmVNaWNyb1Rhc2tRdWV1ZVByb21pc2UiLCJuYXRpdmVTY2hlZHVsZU1pY3JvVGFzayIsImZ1bmMiLCJyZXNvbHZlIiwibmF0aXZlVGhlbiIsInF1ZXVlIiwib25VbmhhbmRsZWRFcnJvciIsIm1pY3JvdGFza0RyYWluRG9uZSIsInN5bWJvbCIsImN1cnJlbnRab25lRnJhbWUiLCJub29wIiwic2hvd1VuY2F1Z2h0RXJyb3IiLCJwYXRjaEV2ZW50VGFyZ2V0IiwicGF0Y2hPblByb3BlcnRpZXMiLCJwYXRjaE1ldGhvZCIsImJpbmRBcmd1bWVudHMiLCJwYXRjaFRoZW4iLCJwYXRjaE1hY3JvVGFzayIsInBhdGNoRXZlbnRQcm90b3R5cGUiLCJpc0lFT3JFZGdlIiwiZ2V0R2xvYmFsT2JqZWN0cyIsIk9iamVjdERlZmluZVByb3BlcnR5IiwiT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiT2JqZWN0Q3JlYXRlIiwiQXJyYXlTbGljZSIsInBhdGNoQ2xhc3MiLCJ3cmFwV2l0aEN1cnJlbnRab25lIiwiZmlsdGVyUHJvcGVydGllcyIsImF0dGFjaE9yaWdpblRvUGF0Y2hlZCIsIl9yZWRlZmluZVByb3BlcnR5IiwicGF0Y2hDYWxsYmFja3MiLCJ3aW5kb3ciLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJkZWZpbmVQcm9wZXJ0eSIsIk9iamVjdEdldFByb3RvdHlwZU9mIiwiZ2V0UHJvdG90eXBlT2YiLCJjcmVhdGUiLCJBcnJheSIsInNsaWNlIiwiQUREX0VWRU5UX0xJU1RFTkVSX1NUUiIsIlJFTU9WRV9FVkVOVF9MSVNURU5FUl9TVFIiLCJaT05FX1NZTUJPTF9BRERfRVZFTlRfTElTVEVORVIiLCJaT05FX1NZTUJPTF9SRU1PVkVfRVZFTlRfTElTVEVORVIiLCJUUlVFX1NUUiIsIkZBTFNFX1NUUiIsIlpPTkVfU1lNQk9MX1BSRUZJWCIsInNjaGVkdWxlTWFjcm9UYXNrV2l0aEN1cnJlbnRab25lIiwiem9uZVN5bWJvbCIsImlzV2luZG93RXhpc3RzIiwiaW50ZXJuYWxXaW5kb3ciLCJfZ2xvYmFsIiwiUkVNT1ZFX0FUVFJJQlVURSIsInBhdGNoUHJvdG90eXBlIiwiZm5OYW1lcyIsInByb3RvdHlwZURlc2MiLCJpc1Byb3BlcnR5V3JpdGFibGUiLCJwYXRjaGVkIiwicHJvcGVydHlEZXNjIiwid3JpdGFibGUiLCJzZXQiLCJpc1dlYldvcmtlciIsIldvcmtlckdsb2JhbFNjb3BlIiwiaXNOb2RlIiwicHJvY2VzcyIsImlzQnJvd3NlciIsImlzTWl4Iiwiem9uZVN5bWJvbEV2ZW50TmFtZXMkMSIsIndyYXBGbiIsImV2ZW50IiwiZXZlbnROYW1lU3ltYm9sIiwibGlzdGVuZXIiLCJyZXN1bHQiLCJlcnJvckV2ZW50IiwibWVzc2FnZSIsImZpbGVuYW1lIiwibGluZW5vIiwiY29sbm8iLCJwcmV2ZW50RGVmYXVsdCIsInBhdGNoUHJvcGVydHkiLCJvYmoiLCJwcm9wIiwiZGVzYyIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJvblByb3BQYXRjaGVkU3ltYm9sIiwib3JpZ2luYWxEZXNjR2V0Iiwib3JpZ2luYWxEZXNjU2V0IiwiZXZlbnROYW1lIiwibmV3VmFsdWUiLCJwcmV2aW91c1ZhbHVlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVBdHRyaWJ1dGUiLCJvblByb3BlcnRpZXMiLCJqIiwib3JpZ2luYWxJbnN0YW5jZUtleSIsImNsYXNzTmFtZSIsIk9yaWdpbmFsQ2xhc3MiLCJhIiwiaW5zdGFuY2UiLCJwYXRjaEZuIiwicHJvdG8iLCJkZWxlZ2F0ZU5hbWUiLCJwYXRjaERlbGVnYXRlIiwiZnVuY05hbWUiLCJtZXRhQ3JlYXRvciIsInNldE5hdGl2ZSIsImNiSWR4IiwibWV0YSIsIm9yaWdpbmFsIiwiaXNEZXRlY3RlZElFT3JFZGdlIiwiaWVPckVkZ2UiLCJpc0lFIiwidWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpbmRleE9mIiwiYXBpIiwicmVhZGFibGVPYmplY3RUb1N0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJfdW5jYXVnaHRQcm9taXNlRXJyb3JzIiwiaXNEaXNhYmxlV3JhcHBpbmdVbmNhdWdodFByb21pc2VSZWplY3Rpb24iLCJjcmVhdGlvblRyYWNlIiwiZSIsInJlamVjdGlvbiIsImNvbnNvbGUiLCJzdGFjayIsInVuY2F1Z2h0UHJvbWlzZUVycm9yIiwic2hpZnQiLCJ0aHJvd09yaWdpbmFsIiwiaGFuZGxlVW5oYW5kbGVkUmVqZWN0aW9uIiwiVU5IQU5ETEVEX1BST01JU0VfUkVKRUNUSU9OX0hBTkRMRVJfU1lNQk9MIiwiaGFuZGxlciIsImlzVGhlbmFibGUiLCJ0aGVuIiwiZm9yd2FyZFJlc29sdXRpb24iLCJmb3J3YXJkUmVqZWN0aW9uIiwiWm9uZUF3YXJlUHJvbWlzZSIsInJlamVjdCIsInN5bWJvbFN0YXRlIiwic3ltYm9sVmFsdWUiLCJzeW1ib2xGaW5hbGx5Iiwic3ltYm9sUGFyZW50UHJvbWlzZVZhbHVlIiwic3ltYm9sUGFyZW50UHJvbWlzZVN0YXRlIiwiVU5SRVNPTFZFRCIsIlJFU09MVkVEIiwiUkVKRUNURUQiLCJSRUpFQ1RFRF9OT19DQVRDSCIsIm1ha2VSZXNvbHZlciIsInByb21pc2UiLCJ2IiwicmVzb2x2ZVByb21pc2UiLCJvbmNlIiwid2FzQ2FsbGVkIiwid3JhcHBlciIsIndyYXBwZWRGdW5jdGlvbiIsIlRZUEVfRVJST1IiLCJDVVJSRU5UX1RBU0tfVFJBQ0VfU1lNQk9MIiwib25jZVdyYXBwZXIiLCJUeXBlRXJyb3IiLCJjbGVhclJlamVjdGVkTm9DYXRjaCIsInRyYWNlIiwic2NoZWR1bGVSZXNvbHZlT3JSZWplY3QiLCJSRUpFQ1RJT05fSEFORExFRF9IQU5ETEVSIiwic3BsaWNlIiwiY2hhaW5Qcm9taXNlIiwib25GdWxmaWxsZWQiLCJvblJlamVjdGVkIiwicHJvbWlzZVN0YXRlIiwicGFyZW50UHJvbWlzZVZhbHVlIiwiaXNGaW5hbGx5UHJvbWlzZSIsIlpPTkVfQVdBUkVfUFJPTUlTRV9UT19TVFJJTkciLCJBZ2dyZWdhdGVFcnJvciIsImFueSIsInZhbHVlcyIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiUHJvbWlzZSIsInByb21pc2VzIiwiZmluaXNoZWQiLCJlcnJvcnMiLCJyYWNlIiwicmVzIiwicmVqIiwib25SZXNvbHZlIiwib25SZWplY3QiLCJhbGwiLCJhbGxXaXRoQ2FsbGJhY2siLCJhbGxTZXR0bGVkIiwiUCIsInRoZW5DYWxsYmFjayIsInN0YXR1cyIsImVycm9yQ2FsbGJhY2siLCJyZWFzb24iLCJ1bnJlc29sdmVkQ291bnQiLCJ2YWx1ZUluZGV4IiwicmVzb2x2ZWRWYWx1ZXMiLCJjdXJWYWx1ZUluZGV4IiwidGhlbkVyciIsImV4ZWN1dG9yIiwidG9TdHJpbmdUYWciLCJzcGVjaWVzIiwiX3RoaXMkY29uc3RydWN0b3IiLCJDIiwiY2F0Y2giLCJmaW5hbGx5Iiwib25GaW5hbGx5IiwiX3RoaXMkY29uc3RydWN0b3IyIiwiTmF0aXZlUHJvbWlzZSIsInN5bWJvbFRoZW5QYXRjaGVkIiwiQ3RvciIsIm9yaWdpbmFsVGhlbiIsIndyYXBwZWQiLCJ6b25laWZ5IiwicmVzdWx0UHJvbWlzZSIsImN0b3IiLCJvcmlnaW5hbEZ1bmN0aW9uVG9TdHJpbmciLCJGdW5jdGlvbiIsIk9SSUdJTkFMX0RFTEVHQVRFX1NZTUJPTCIsIlBST01JU0VfU1lNQk9MIiwiRVJST1JfU1lNQk9MIiwibmV3RnVuY3Rpb25Ub1N0cmluZyIsIm9yaWdpbmFsRGVsZWdhdGUiLCJuYXRpdmVQcm9taXNlIiwibmF0aXZlRXJyb3IiLCJvcmlnaW5hbE9iamVjdFRvU3RyaW5nIiwiUFJPTUlTRV9PQkpFQ1RfVE9fU1RSSU5HIiwicGFzc2l2ZVN1cHBvcnRlZCIsIk9QVElNSVpFRF9aT05FX0VWRU5UX1RBU0tfREFUQSIsInpvbmVTeW1ib2xFdmVudE5hbWVzIiwiZ2xvYmFsU291cmNlcyIsIkVWRU5UX05BTUVfU1lNQk9MX1JFR1giLCJSZWdFeHAiLCJJTU1FRElBVEVfUFJPUEFHQVRJT05fU1lNQk9MIiwicHJlcGFyZUV2ZW50TmFtZXMiLCJldmVudE5hbWVUb1N0cmluZyIsImZhbHNlRXZlbnROYW1lIiwidHJ1ZUV2ZW50TmFtZSIsInN5bWJvbENhcHR1cmUiLCJhcGlzIiwicGF0Y2hPcHRpb25zIiwiQUREX0VWRU5UX0xJU1RFTkVSIiwiYWRkIiwiUkVNT1ZFX0VWRU5UX0xJU1RFTkVSIiwicm0iLCJMSVNURU5FUlNfRVZFTlRfTElTVEVORVIiLCJsaXN0ZW5lcnMiLCJSRU1PVkVfQUxMX0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUiIsInJtQWxsIiwiem9uZVN5bWJvbEFkZEV2ZW50TGlzdGVuZXIiLCJBRERfRVZFTlRfTElTVEVORVJfU09VUkNFIiwiUFJFUEVORF9FVkVOVF9MSVNURU5FUiIsIlBSRVBFTkRfRVZFTlRfTElTVEVORVJfU09VUkNFIiwiaXNSZW1vdmVkIiwiaGFuZGxlRXZlbnQiLCJnbG9iYWxDYWxsYmFjayIsImNvbnRleHQiLCJpc0NhcHR1cmUiLCJ0YXNrcyIsImNvcHlUYXNrcyIsImdsb2JhbFpvbmVBd2FyZUNhbGxiYWNrIiwiZ2xvYmFsWm9uZUF3YXJlQ2FwdHVyZUNhbGxiYWNrIiwicGF0Y2hFdmVudFRhcmdldE1ldGhvZHMiLCJ1c2VHbG9iYWxDYWxsYmFjayIsInZhbGlkYXRlSGFuZGxlciIsInZoIiwiY2hrRHVwIiwicmV0dXJuVGFyZ2V0IiwicnQiLCJ0YXNrRGF0YSIsIm5hdGl2ZUFkZEV2ZW50TGlzdGVuZXIiLCJuYXRpdmVSZW1vdmVFdmVudExpc3RlbmVyIiwibmF0aXZlTGlzdGVuZXJzIiwibmF0aXZlUmVtb3ZlQWxsTGlzdGVuZXJzIiwibmF0aXZlUHJlcGVuZEV2ZW50TGlzdGVuZXIiLCJwcmVwZW5kIiwiYnVpbGRFdmVudExpc3RlbmVyT3B0aW9ucyIsInBhc3NpdmUiLCJjYXB0dXJlIiwiY3VzdG9tU2NoZWR1bGVHbG9iYWwiLCJpc0V4aXN0aW5nIiwiY3VzdG9tQ2FuY2VsR2xvYmFsIiwic3ltYm9sRXZlbnROYW1lcyIsInN5bWJvbEV2ZW50TmFtZSIsImV4aXN0aW5nVGFza3MiLCJleGlzdGluZ1Rhc2siLCJhbGxSZW1vdmVkIiwiY3VzdG9tU2NoZWR1bGVOb25HbG9iYWwiLCJjdXN0b21TY2hlZHVsZVByZXBlbmQiLCJjdXN0b21DYW5jZWxOb25HbG9iYWwiLCJjb21wYXJlVGFza0NhbGxiYWNrVnNEZWxlZ2F0ZSIsInR5cGVPZkRlbGVnYXRlIiwiY29tcGFyZSIsImRpZmYiLCJ1bnBhdGNoZWRFdmVudHMiLCJwYXNzaXZlRXZlbnRzIiwibWFrZUFkZExpc3RlbmVyIiwibmF0aXZlTGlzdGVuZXIiLCJhZGRTb3VyY2UiLCJjdXN0b21TY2hlZHVsZUZuIiwiY3VzdG9tQ2FuY2VsRm4iLCJ0cmFuc2ZlckV2ZW50TmFtZSIsImlzSGFuZGxlRXZlbnQiLCJjb25zdHJ1Y3Rvck5hbWUiLCJ0YXJnZXRTb3VyY2UiLCJ1bnNoaWZ0Iiwib25Qcm9wZXJ0eVN5bWJvbCIsImZpbmRFdmVudFRhc2tzIiwia2V5cyIsIm1hdGNoIiwiZXhlYyIsImV2dE5hbWUiLCJzeW1ib2xDYXB0dXJlRXZlbnROYW1lIiwiY2FwdHVyZVRhc2tzIiwicmVtb3ZlVGFza3MiLCJyZXN1bHRzIiwiZm91bmRUYXNrcyIsImNhcHR1cmVGYWxzZVRhc2tzIiwiY2FwdHVyZVRydWVUYXNrcyIsImNvbmNhdCIsIkV2ZW50IiwidGFyZ2V0TmFtZSIsIm1ldGhvZCIsImNhbGxiYWNrcyIsIm5hdGl2ZURlbGVnYXRlIiwib3B0cyIsImZvckVhY2giLCJkZXNjcmlwdG9yIiwiX3VudXNlZCIsImlnbm9yZVByb3BlcnRpZXMiLCJ0aXAiLCJmaWx0ZXIiLCJpcCIsInRhcmdldElnbm9yZVByb3BlcnRpZXMiLCJvcCIsInBhdGNoRmlsdGVyZWRQcm9wZXJ0aWVzIiwiZmlsdGVyZWRQcm9wZXJ0aWVzIiwiZ2V0T25FdmVudE5hbWVzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsInN0YXJ0c1dpdGgiLCJtYXAiLCJzdWJzdHJpbmciLCJwcm9wZXJ0eURlc2NyaXB0b3JQYXRjaCIsInBhdGNoVGFyZ2V0cyIsImlnbm9yZUVycm9yUHJvcGVydGllcyIsImV2ZW50TmFtZXMiLCJTWU1CT0xfQkxBQ0tfTElTVEVEX0VWRU5UUyIsIlNZTUJPTF9VTlBBVENIRURfRVZFTlRTIiwicGF0Y2hRdWV1ZU1pY3JvdGFzayIsInRhc2tTeW1ib2wiLCJwYXRjaFRpbWVyIiwic2V0TmFtZSIsImNhbmNlbE5hbWUiLCJuYW1lU3VmZml4IiwiY2xlYXJOYXRpdmUiLCJ0YXNrc0J5SGFuZGxlSWQiLCJjbGVhclRhc2siLCJkZWxheSIsInRpbWVyIiwiaGFuZGxlIiwicmVmIiwidW5yZWYiLCJiaW5kIiwiaWQiLCJwYXRjaEN1c3RvbUVsZW1lbnRzIiwiY3VzdG9tRWxlbWVudHMiLCJldmVudFRhcmdldFBhdGNoIiwiRVZFTlRfVEFSR0VUIiwicGF0Y2hFdmVudCIsImxlZ2FjeVBhdGNoIiwiY2xlYXIiLCJibG9ja2luZ01ldGhvZHMiLCJzIiwiWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCIsInBhdGNoWEhSIiwiWEhSX1RBU0siLCJYSFJfU1lOQyIsIlhIUl9MSVNURU5FUiIsIlhIUl9TQ0hFRFVMRUQiLCJYSFJfVVJMIiwiWEhSX0VSUk9SX0JFRk9SRV9TQ0hFRFVMRUQiLCJYTUxIdHRwUmVxdWVzdCIsIlhNTEh0dHBSZXF1ZXN0UHJvdG90eXBlIiwiZmluZFBlbmRpbmdUYXNrIiwib3JpQWRkTGlzdGVuZXIiLCJvcmlSZW1vdmVMaXN0ZW5lciIsIlhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXRQcm90b3R5cGUiLCJSRUFEWV9TVEFURV9DSEFOR0UiLCJTQ0hFRFVMRUQiLCJuZXdMaXN0ZW5lciIsInJlYWR5U3RhdGUiLCJET05FIiwiYWJvcnRlZCIsImxvYWRUYXNrcyIsIm9yaUludm9rZSIsInN0b3JlZFRhc2siLCJzZW5kTmF0aXZlIiwicGxhY2Vob2xkZXJDYWxsYmFjayIsImFib3J0TmF0aXZlIiwib3Blbk5hdGl2ZSIsIlhNTEhUVFBSRVFVRVNUX1NPVVJDRSIsImZldGNoVGFza0Fib3J0aW5nIiwiZmV0Y2hUYXNrU2NoZWR1bGluZyIsInVybCIsImdlb2xvY2F0aW9uIiwiZmluZFByb21pc2VSZWplY3Rpb25IYW5kbGVyIiwiZXZlbnRUYXNrcyIsIlByb21pc2VSZWplY3Rpb25FdmVudCIsImV2dCJdLCJzb3VyY2VSb290Ijoid2VicGFjazovLy8iLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMV19