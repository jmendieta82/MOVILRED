"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_cartera_cartera_module_ts"],{

/***/ 63487:
/*!***************************************************!*\
  !*** ./src/app/cartera/cartera-routing.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarteraPageRoutingModule": function() { return /* binding */ CarteraPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _cartera_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cartera.page */ 8311);






var routes = [{
  path: '',
  component: _cartera_page__WEBPACK_IMPORTED_MODULE_2__.CarteraPage
}];

var CarteraPageRoutingModule = /*#__PURE__*/(0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function CarteraPageRoutingModule() {
  (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CarteraPageRoutingModule);
});

CarteraPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], CarteraPageRoutingModule);


/***/ }),

/***/ 11907:
/*!*******************************************!*\
  !*** ./src/app/cartera/cartera.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarteraPageModule": function() { return /* binding */ CarteraPageModule; }
/* harmony export */ });
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _cartera_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cartera-routing.module */ 63487);
/* harmony import */ var _cartera_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cartera.page */ 8311);










var CarteraPageModule = /*#__PURE__*/(0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function CarteraPageModule() {
  (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CarteraPageModule);
});

CarteraPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _cartera_routing_module__WEBPACK_IMPORTED_MODULE_2__.CarteraPageRoutingModule],
  declarations: [_cartera_page__WEBPACK_IMPORTED_MODULE_3__.CarteraPage]
})], CarteraPageModule);


/***/ }),

/***/ 8311:
/*!*****************************************!*\
  !*** ./src/app/cartera/cartera.page.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarteraPage": function() { return /* binding */ CarteraPage; }
/* harmony export */ });
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ 95106);
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _cartera_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cartera.page.html?ngResource */ 75782);
/* harmony import */ var _cartera_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cartera.page.scss?ngResource */ 58739);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _providers_mrn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/mrn */ 60023);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _providers_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/api */ 57011);
/* harmony import */ var _pagar_factura_pagar_factura_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pagar-factura/pagar-factura.component */ 76486);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);




function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }











var CarteraPage = /*#__PURE__*/function () {
  function CarteraPage(mrn, router, api, modalController) {
    (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CarteraPage);

    this.mrn = mrn;
    this.router = router;
    this.api = api;
    this.modalController = modalController;
  }

  (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(CarteraPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.mrn.getFacturasMora(this.api.nodoActual, false);
      this.mrn.getCartera(this.api.nodoActual);
    }
  }, {
    key: "presentModal",
    value: function presentModal() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var modal;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this.mrn.formPagos.patchValue({
                abono: this.mrn.totalFacturasAPagar,
                soporte: ''
              });
              _context.next = 3;
              return this.modalController.create({
                component: _pagar_factura_pagar_factura_component__WEBPACK_IMPORTED_MODULE_7__.PagarFacturaComponent
              });

            case 3:
              modal = _context.sent;
              _context.next = 6;
              return modal.present();

            case 6:
              return _context.abrupt("return", _context.sent);

            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "seleccionarFactura",
    value: function seleccionarFactura(transaccion) {
      if (this.mrn.facturasSeleccionadas.filter(function (item) {
        return item.id == transaccion.id;
      }).length) {
        this.mrn.facturasSeleccionadas.splice(this.mrn.facturasSeleccionadas.indexOf(this.mrn.facturasSeleccionadas.filter(function (item) {
          return item.id == transaccion.id;
        })[0]), 1);
      } else {
        var factura = {
          'id': transaccion.id,
          'valor': transaccion.valor,
          'nodo_id': transaccion.nodo.id,
          'repr_legal': transaccion.nodo.representanteLegal,
          'nodo': transaccion.nodo,
          'saldo_pendiente_pago': transaccion.saldo_pendiente_pago
        };
        this.mrn.facturasSeleccionadas.push(factura);
      }

      this.calcularTotal();
    }
  }, {
    key: "calcularTotal",
    value: function calcularTotal() {
      this.mrn.totalFacturasAPagar = 0;

      var _iterator = (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.mrn.facturasSeleccionadas),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          this.mrn.totalFacturasAPagar += parseInt(item.saldo_pendiente_pago);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "doRefresh",
    value: function doRefresh(event) {
      this.mrn.getCartera(this.api.nodoActual);
      this.mrn.getMisBolsasDinero();
      this.mrn.getFacturasMora(this.api.nodoActual, false);
      setTimeout(function () {
        event.target.complete();
      }, 2000);
    }
  }]);

  return CarteraPage;
}();

CarteraPage.ctorParameters = function () {
  return [{
    type: _providers_mrn__WEBPACK_IMPORTED_MODULE_5__.Mrn
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
  }, {
    type: _providers_api__WEBPACK_IMPORTED_MODULE_6__.ApiService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController
  }];
};

CarteraPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-cartera',
  template: _cartera_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_cartera_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], CarteraPage);


/***/ }),

/***/ 58739:
/*!******************************************************!*\
  !*** ./src/app/cartera/cartera.page.scss?ngResource ***!
  \******************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0ZXJhLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 75782:
/*!******************************************************!*\
  !*** ./src/app/cartera/cartera.page.html?ngResource ***!
  \******************************************************/
/***/ (function(module) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"header_page\">\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"router.navigate(['inicio'])\"><i class=\"fas fa-times\" style=\"font-size: 1.0em\"></i></ion-button>\n    </ion-buttons>\n    <ion-title>Estado de cartera</ion-title>\n    <ion-progress-bar color=\"secondary\" *ngIf=\"mrn.loading\" type=\"indeterminate\"></ion-progress-bar>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-card *ngIf=\"!mrn.facturasSeleccionadas.length\">\n    <ion-card-content>\n      Seleccione una o más transacciones y presione el boton \"Pagar factura\"\n    </ion-card-content>\n  </ion-card>\n  <div>\n    <ion-list *ngIf=\" mrn.facturasMora.length\">\n      <ion-list-header lines=\"inset\">\n        <ion-label><h2 style=\"font-weight: bold\">En mora</h2></ion-label>\n      </ion-list-header>\n      <ion-item  *ngFor=\"let transaccion of mrn.facturasMora\">\n        <ion-label>\n          <h2>Transaccion {{transaccion.id}}</h2>\n          <h3><ion-badge color=\"danger\">En mora</ion-badge></h3>\n          <h3>Pagado: $ {{transaccion.valor - transaccion.saldo_pendiente_pago|number}}</h3>\n          <h3>Saldo:  $ {{transaccion.saldo_pendiente_pago|number}}</h3>\n          <p>Aprobado : {{transaccion.fecha_aprobacion|date:\"dd-MM-yyyy\"}} </p>\n          <p>Estado : {{transaccion.estadoPago}} </p>\n        </ion-label>\n        <ion-checkbox *ngIf=\"transaccion.saldo_pendiente_pago\" slot=\"end\" (ionChange)=\"seleccionarFactura(transaccion)\" ></ion-checkbox>\n      </ion-item>\n    </ion-list>\n    <ion-list *ngIf=\" mrn.cartera.length\" >\n      <ion-list-header lines=\"inset\">\n        <ion-label><h2 style=\"font-weight: bold\">Pendientes</h2></ion-label>\n      </ion-list-header>\n      <ion-item  *ngFor=\"let transaccion of mrn.cartera\">\n        <ion-label>\n          <h2>Transaccion {{transaccion.id}}</h2>\n          <h3>Pagado: $ {{transaccion.valor - transaccion.saldo_pendiente_pago|number}}</h3>\n          <h3>Saldo:  $ {{transaccion.saldo_pendiente_pago|number}}</h3>\n          <p>Vence : {{transaccion.fecha_pago|date:\"dd-MM-yyyy\"}} </p>\n          <p>Estado pago : {{transaccion.estadoPago}} </p>\n        </ion-label>\n        <ion-checkbox *ngIf=\"transaccion.saldo_pendiente_pago && transaccion.estadoPago == 'Pendiente'\" slot=\"end\" (ionChange)=\"seleccionarFactura(transaccion)\" ></ion-checkbox>\n      </ion-item>\n    </ion-list>\n    <div *ngIf=\"mrn.facturasSeleccionadas.length\" style=\"text-align: center;width: 100%;margin-top: 30px\">\n      <ion-button (click)=\"presentModal()\" shape=\"round\" size=\"small\" expand=\"block\">Pagar factura</ion-button>\n    </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar class=\"header_page\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\" style=\"text-align: center\">\n          <span style=\"font-size: 1.3em;font-weight: bold\">{{mrn.totalFacturasAPagar|number}}</span>\n          <p style=\"font-size: 0.8em\">\n            <i class=\"fas fa-dollar-sign\" style=\"margin-right: 2px\"></i>\n            Total a pagar</p>\n        </ion-col>\n        <ion-col size=\"6\" style=\"text-align: center\">\n          <span style=\"font-size: 1.3em;font-weight: bold\">{{mrn.facturasSeleccionadas.length|number}}</span>\n          <p style=\"font-size: 0.8em\">\n            <i class=\"fas fa-list\"  style=\"margin-right: 2px\"></i>\n            Seleccionadas</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_cartera_cartera_module_ts.js.map