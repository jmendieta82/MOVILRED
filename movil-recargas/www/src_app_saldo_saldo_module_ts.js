"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_saldo_saldo_module_ts"],{

/***/ 81749:
/*!***********************************************!*\
  !*** ./src/app/saldo/saldo-routing.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaldoPageRoutingModule": function() { return /* binding */ SaldoPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _saldo_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saldo.page */ 56526);






var routes = [{
  path: '',
  component: _saldo_page__WEBPACK_IMPORTED_MODULE_2__.SaldoPage
}];

var SaldoPageRoutingModule = /*#__PURE__*/(0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function SaldoPageRoutingModule() {
  (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SaldoPageRoutingModule);
});

SaldoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], SaldoPageRoutingModule);


/***/ }),

/***/ 19103:
/*!***************************************!*\
  !*** ./src/app/saldo/saldo.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaldoPageModule": function() { return /* binding */ SaldoPageModule; }
/* harmony export */ });
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _saldo_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saldo-routing.module */ 81749);
/* harmony import */ var _saldo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saldo.page */ 56526);










var SaldoPageModule = /*#__PURE__*/(0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function SaldoPageModule() {
  (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SaldoPageModule);
});

SaldoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _saldo_routing_module__WEBPACK_IMPORTED_MODULE_2__.SaldoPageRoutingModule],
  declarations: [_saldo_page__WEBPACK_IMPORTED_MODULE_3__.SaldoPage]
})], SaldoPageModule);


/***/ }),

/***/ 56526:
/*!*************************************!*\
  !*** ./src/app/saldo/saldo.page.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaldoPage": function() { return /* binding */ SaldoPage; }
/* harmony export */ });
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _saldo_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saldo.page.html?ngResource */ 70280);
/* harmony import */ var _saldo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saldo.page.scss?ngResource */ 78370);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _providers_mrn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/mrn */ 60023);
/* harmony import */ var _providers_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/api */ 57011);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _solicitud_saldo_solicitud_saldo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../solicitud-saldo/solicitud-saldo.component */ 23670);



function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }











var SaldoPage = /*#__PURE__*/function () {
  function SaldoPage(router, activatedRoute, mrn, api, modalController) {
    (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SaldoPage);

    this.router = router;
    this.activatedRoute = activatedRoute;
    this.mrn = mrn;
    this.api = api;
    this.modalController = modalController;
    this.segmento = 'solicitud';
  }

  (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SaldoPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.mrn.getMiCredito(); //this.mrn.getMisSolicitudesSaldo();
    }
  }, {
    key: "presentModal",
    value: function presentModal() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var modal;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.modalController.create({
                component: _solicitud_saldo_solicitud_saldo_component__WEBPACK_IMPORTED_MODULE_6__.SolicitudSaldoComponent
              });

            case 2:
              modal = _context.sent;
              _context.next = 5;
              return modal.present();

            case 5:
              return _context.abrupt("return", _context.sent);

            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "actualizarSolicitudes",
    value: function actualizarSolicitudes(event) {
      this.mrn.getMiCredito(); //this.mrn.getMisSolicitudesSaldo();

      setTimeout(function () {
        event.target.complete();
      }, 2000);
    }
  }, {
    key: "segmentChanged",
    value: function segmentChanged(ev) {
      this.segmento = ev.detail.value;
    }
  }, {
    key: "getIcon",
    value: function getIcon(transaccion) {
      if (transaccion.estado == 'Rechazado') {
        return ['close-circle', '#C71A1A'];
      } else {
        return ['checkmark-circle', '#0E9434'];
      }
    }
  }]);

  return SaldoPage;
}();

SaldoPage.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
  }, {
    type: _providers_mrn__WEBPACK_IMPORTED_MODULE_4__.Mrn
  }, {
    type: _providers_api__WEBPACK_IMPORTED_MODULE_5__.ApiService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
  }];
};

SaldoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-saldo',
  template: _saldo_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_saldo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], SaldoPage);


/***/ }),

/***/ 78370:
/*!**************************************************!*\
  !*** ./src/app/saldo/saldo.page.scss?ngResource ***!
  \**************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWxkby5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 70280:
/*!**************************************************!*\
  !*** ./src/app/saldo/saldo.page.html?ngResource ***!
  \**************************************************/
/***/ (function(module) {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar class=\"background-image header_page\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"router.navigate(['inicio'])\"><i class=\"fas fa-times\" style=\"font-size: 1.0em\"></i></ion-button>\n    </ion-buttons>\n    <ion-title>Saldos</ion-title>\n    <ion-progress-bar color=\"secondary\" *ngIf=\"mrn.loading\" type=\"indeterminate\"></ion-progress-bar>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"actualizarSolicitudes($event)\">\n    <ion-refresher-content\n      pullingIcon=\"chevron-down-circle-outline\"\n      pullingText=\"Deslice para refrescar\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"Cargando...\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-segment color=\"medium\" value=\"solicitud\" (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button value=\"solicitud\">\n      <ion-label style=\"font-size: 0.8em\">\n        Solicitar\n      </ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"ultimas\" (click)=\"mrn.getMisSolicitudesSaldo()\">\n      <ion-label style=\"font-size: 0.8em\">\n        Ultimas\n      </ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  <div *ngIf=\"segmento == 'solicitud'\" style=\"margin-top: 25px\">\n    <ion-list *ngIf=\"mrn.Micredito\">\n      <ion-item>\n        <ion-label>\n          <h2>Mi cupo de crédito</h2>\n          <p style=\"font-size: 0.8em\">Disponible $ {{mrn.Micredito.montoDisponible|number}}</p>\n          <ion-progress-bar color=\"warning\" value=\"{{(mrn.Micredito.montoDisponible*1)/mrn.Micredito.montoAutorizado}}\"></ion-progress-bar>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n    <div style=\"margin: 20px 0 20px 0\">\n      <ion-button expand=\"full\" shape=\"round\" color=\"primary\" (click)=\"presentModal()\">Solicitar saldo</ion-button>\n    </div>\n  </div>\n  <div *ngIf=\"segmento == 'ultimas'\" >\n    <ion-accordion-group>\n      <ion-accordion *ngFor=\"let transaccion of mrn.misSolicitudesSaldo\" value=\"{{transaccion.id}}\">\n        <ion-item slot=\"header\">\n          <ion-label>\n            <h2 [style]=\"{'color':getIcon(transaccion)[1],'font-weight':'bold'}\"><ion-icon name=\"{{getIcon(transaccion)[0]}}\"></ion-icon>${{transaccion.valor|number}}</h2>\n            <p>{{transaccion.created_at|date:\"dd-MM-yyyy\"}} {{transaccion.hour_at|date:'shortTime'}} </p>\n            <p>Forma de pago: {{(transaccion.tipo_transaccion == 'SSC')?'Contado':'Credito'}}</p>\n          </ion-label>\n        </ion-item>\n        <div style=\"padding: 10px\" slot=\"content\">\n          <table class=\"table_transact\">\n            <tr>\n              <th>Transaccion id</th>\n              <td>{{transaccion.id}}</td>\n            </tr>\n            <tr>\n              <th>Fecha de aprobación</th>\n              <td>{{transaccion.created_at|date:\"dd-MM-yyyy\"}} {{transaccion.hour_at|date:'shortTime'}}</td>\n            </tr>\n            <tr>\n              <th>Tipo de comision</th>\n              <td>{{(transaccion.tipoServicio=='CV')?'Comision venta':'Comision anticipada'}}</td>\n            </tr>\n            <tr>\n              <th>Estado de solicitud</th>\n              <td style=\"color: {{transaccion.estado=='Rechazado'?'darkred':''}}\">{{transaccion.estado}}</td>\n            </tr>\n            <tr>\n              <th>Estado de pago</th>\n              <td>{{transaccion.estadoPago}}</td>\n            </tr>\n          </table>\n        </div>\n      </ion-accordion>\n    </ion-accordion-group>\n  </div>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar class=\"header_page\" *ngIf=\"mrn.misBoslsasDinero\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\" style=\"text-align: center\" [routerLink]=\"'/saldo'\">\n          <span style=\"font-size: 1.3em;font-weight: bold\">$ {{mrn.misBoslsasDinero.saldo_disponible|number}}</span>\n          <p style=\"font-size: 0.8em\">\n            <!--<i class=\"fas fa-dollar-sign\" style=\"margin-right: 2px\"></i>-->\n            Saldo disponible</p>\n        </ion-col>\n        <ion-col size=\"6\" style=\"text-align: center\">\n          <span style=\"font-size: 1.3em;font-weight: bold\">$ {{mrn.misBoslsasDinero.utilidad|number}}</span>\n          <p style=\"font-size: 0.8em\">\n            <!-- <i class=\"fas fa-wallet\"  style=\"margin-right: 2px\"></i>-->\n            Mis ganancias</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_saldo_saldo_module_ts.js.map