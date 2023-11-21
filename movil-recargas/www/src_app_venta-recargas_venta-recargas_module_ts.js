"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_venta-recargas_venta-recargas_module_ts"],{

/***/ 61669:
/*!*****************************************************************!*\
  !*** ./src/app/venta-recargas/venta-recargas-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VentaRecargasPageRoutingModule": function() { return /* binding */ VentaRecargasPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _venta_recargas_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./venta-recargas.page */ 31435);






var routes = [{
  path: '',
  component: _venta_recargas_page__WEBPACK_IMPORTED_MODULE_2__.VentaRecargasPage
}];

var VentaRecargasPageRoutingModule = /*#__PURE__*/(0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function VentaRecargasPageRoutingModule() {
  (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, VentaRecargasPageRoutingModule);
});

VentaRecargasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], VentaRecargasPageRoutingModule);


/***/ }),

/***/ 41151:
/*!*********************************************************!*\
  !*** ./src/app/venta-recargas/venta-recargas.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VentaRecargasPageModule": function() { return /* binding */ VentaRecargasPageModule; }
/* harmony export */ });
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _venta_recargas_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./venta-recargas-routing.module */ 61669);
/* harmony import */ var _venta_recargas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./venta-recargas.page */ 31435);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-mask */ 84409);










var maskConfig = {
  validation: false
};

var VentaRecargasPageModule = /*#__PURE__*/(0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function VentaRecargasPageModule() {
  (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, VentaRecargasPageModule);
});

VentaRecargasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _venta_recargas_routing_module__WEBPACK_IMPORTED_MODULE_2__.VentaRecargasPageRoutingModule, ngx_mask__WEBPACK_IMPORTED_MODULE_9__.NgxMaskModule.forRoot(maskConfig)],
  declarations: [_venta_recargas_page__WEBPACK_IMPORTED_MODULE_3__.VentaRecargasPage]
})], VentaRecargasPageModule);


/***/ }),

/***/ 31435:
/*!*******************************************************!*\
  !*** ./src/app/venta-recargas/venta-recargas.page.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VentaRecargasPage": function() { return /* binding */ VentaRecargasPage; }
/* harmony export */ });
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _venta_recargas_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./venta-recargas.page.html?ngResource */ 15890);
/* harmony import */ var _venta_recargas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./venta-recargas.page.scss?ngResource */ 20276);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _providers_mrn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/mrn */ 60023);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _productos_productos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../productos/productos.component */ 53982);
/* harmony import */ var _resumen_venta_resumen_venta_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../resumen-venta/resumen-venta.component */ 443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);



function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }











var VentaRecargasPage = /*#__PURE__*/function () {
  function VentaRecargasPage(mrn, modalController, alertController, router) {
    (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, VentaRecargasPage);

    this.mrn = mrn;
    this.modalController = modalController;
    this.alertController = alertController;
    this.router = router;
    this.segmento = 'tiempo_al_aire';
  }

  (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(VentaRecargasPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
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
                component: _productos_productos_component__WEBPACK_IMPORTED_MODULE_5__.ProductosComponent
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
    key: "cambiarValor",
    value: function cambiarValor(valor) {
      this.mrn.productoCodificadoSeleccionado = '';

      if (this.mrn.empresaSeleccionada.nom_empresa == 'Directv') {
        this.mrn.formVentasRecargasDirectv.patchValue({
          valor: valor
        });
      } else {
        this.mrn.formVentasRecargas.patchValue({
          valor: valor
        });
      }
    }
  }, {
    key: "valorPersonalizado",
    value: function valorPersonalizado() {
      this.mrn.productoCodificadoSeleccionado = '';
    }
  }, {
    key: "present_resumen_ventas",
    value: function present_resumen_ventas(recarga) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var modal;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              this.mrn.obj_venta = '';
              this.mrn.obj_venta = recarga;
              _context2.next = 4;
              return this.modalController.create({
                component: _resumen_venta_resumen_venta_component__WEBPACK_IMPORTED_MODULE_6__.ResumenVentaComponent
              });

            case 4:
              modal = _context2.sent;
              _context2.next = 7;
              return modal.present();

            case 7:
              return _context2.abrupt("return", _context2.sent);

            case 8:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "segmentChanged",
    value: function segmentChanged(ev) {
      this.segmento = ev.detail.value;
    }
  }, {
    key: "limpiarFormTAire",
    value: function limpiarFormTAire() {
      this.mrn.productoCodificadoSeleccionado = '';
      this.mrn.formVentasRecargas.patchValue({
        valor: 0
      });
    }
  }, {
    key: "limpiarFormPaquetes",
    value: function limpiarFormPaquetes() {
      this.mrn.productoCodificadoSeleccionado = '';
      this.presentModal();
      this.mrn.formVentasRecargas.patchValue({
        valor: 0
      });
    }
  }, {
    key: "inseratar_num_tarjeta",
    value: function inseratar_num_tarjeta(value) {
      this.mrn.formVentasRecargasDirectv.patchValue({
        telefono: value
      });
    }
  }, {
    key: "verificar_celular",
    value: function verificar_celular(value) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var alert;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!(value.toString().length > 10)) {
                _context3.next = 7;
                break;
              }

              _context3.next = 3;
              return this.alertController.create({
                header: 'MRN Colombia',
                message: 'El numero de celular es incorrecto',
                buttons: ['Entendido']
              });

            case 3:
              alert = _context3.sent;
              _context3.next = 6;
              return alert.present();

            case 6:
              this.mrn.formVentasRecargas.patchValue({
                telefono: ''
              });

            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "limpiarTelefono",
    value: function limpiarTelefono() {
      this.mrn.formVentasRecargas.reset();
    }
  }]);

  return VentaRecargasPage;
}();

VentaRecargasPage.ctorParameters = function () {
  return [{
    type: _providers_mrn__WEBPACK_IMPORTED_MODULE_4__.Mrn
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
  }];
};

VentaRecargasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-venta-recargas',
  template: _venta_recargas_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_venta_recargas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], VentaRecargasPage);


/***/ }),

/***/ 20276:
/*!********************************************************************!*\
  !*** ./src/app/venta-recargas/venta-recargas.page.scss?ngResource ***!
  \********************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZW50YS1yZWNhcmdhcy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 15890:
/*!********************************************************************!*\
  !*** ./src/app/venta-recargas/venta-recargas.page.html?ngResource ***!
  \********************************************************************/
/***/ (function(module) {

module.exports = "<ion-header>\n  <ion-toolbar class=\"background-image header_page\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button (click)=\"limpiarTelefono()\"></ion-back-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"mrn.empresaSeleccionada\">{{mrn.empresaSeleccionada.nom_empresa}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div *ngIf=\"mrn.empresaSeleccionada.nom_empresa == 'Directv'\">\n    <form [formGroup]=\"mrn.formVentasRecargasDirectv\">\n      <ion-list lines=\"full\" class=\"ion-no-margin\">\n        <ion-item detail (click)=\"presentModal()\">\n          <ion-avatar slot=\"start\">\n            <img  src=\"{{mrn.empresaSeleccionada.imagen}}\" alt=\"\">\n          </ion-avatar>\n          <ion-label>\n            <h2>Paquete seleccionado</h2>\n            <p class=\"wrap\">{{mrn.productoCodificadoSeleccionado?mrn.productoCodificadoSeleccionado.producto.nom_producto:'Seleccione un paquete.'}}</p>\n          </ion-label>\n        </ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-button shape=\"round\" expand=\"full\"\n                          [disabled]=\"!mrn.formVentasRecargasDirectv.value['telefono']\"\n                          (click)=\"cambiarValor(10000)\" size=\"small\" >$ 10.000</ion-button>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-button shape=\"round\" expand=\"full\"  [disabled]=\"!mrn.formVentasRecargasDirectv.value['telefono']\"\n                          (click)=\"cambiarValor(15000)\" size=\"small\" >$ 15.000</ion-button>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-button shape=\"round\" expand=\"full\"  [disabled]=\"!mrn.formVentasRecargasDirectv.value['telefono']\"\n                          (click)=\"cambiarValor(20000)\" size=\"small\" >$ 20.000</ion-button>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-button shape=\"round\" expand=\"full\"  [disabled]=\"!mrn.formVentasRecargasDirectv.value['telefono']\"\n                          (click)=\"cambiarValor(25000)\" size=\"small\" >$ 25.000</ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <ion-item>\n          <ion-label position=\"stacked\">Numero de tarjeta</ion-label>\n          <ion-input style=\"font-size: 1.5em\" formControlName=\"telefono\" #numero (input)=\"inseratar_num_tarjeta(numero.value)\" type=\"number\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">Valor de la venta</ion-label>\n          <input style=\"font-size: 1.5em\" class=\"input_number\" mask=\"separator.0\" thousandSeparator=\",\" (input)=\"valorPersonalizado()\"\n                 inputmode=\"decimal\" formControlName=\"valor\">\n        </ion-item>\n      </ion-list>\n      <div style=\"margin-top: 35px\">\n        <ion-grid>\n          <ion-row style=\"font-size: 0.8em\">\n            <ion-col>\n              <ion-button shape=\"round\" expand=\"block\" [disabled]=\"!mrn.formVentasRecargasDirectv.valid \"\n                          (click)=\"present_resumen_ventas(mrn.formVentasRecargasDirectv.value)\">Vender</ion-button>\n\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </form>\n  </div>\n  <div *ngIf=\"mrn.empresaSeleccionada.nom_empresa != 'Directv'\">\n    <ion-segment value=\"tiempo_al_aire\" (ionChange)=\"segmentChanged($event)\">\n      <ion-segment-button value=\"tiempo_al_aire\" (click)=\"limpiarFormTAire()\">\n        <ion-label style=\"font-size: 0.8em\">\n          <i class=\"fas fa-mobile-alt\"></i>\n          Tiempo al aire\n        </ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"paquetes\" (click)=\"limpiarFormPaquetes()\">\n        <ion-label style=\"font-size: 0.8em\">\n          <i class=\"fas fa-cubes\"></i>\n          Paquetes\n        </ion-label>\n      </ion-segment-button>\n    </ion-segment>\n    <div class=\"lugar_recargas\">\n      {{segmento=='tiempo_al_aire'?'Tiempo al aire':'Paquetes'}}\n    </div>\n    <div *ngIf=\"segmento == 'tiempo_al_aire'\">\n      <form [formGroup]=\"mrn.formVentasRecargas\">\n        <ion-list lines=\"full\" class=\"ion-no-margin\">\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-button shape=\"round\" expand=\"full\"\n                            [disabled]=\"!mrn.formVentasRecargas.value['telefono']\"\n                            (click)=\"cambiarValor(1000)\" size=\"small\" >$ 1.000</ion-button>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-button shape=\"round\" expand=\"full\"  [disabled]=\"!mrn.formVentasRecargas.value['telefono']\"\n                            (click)=\"cambiarValor(2000)\" size=\"small\" >$ 2.000</ion-button>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-button shape=\"round\" expand=\"full\"  [disabled]=\"!mrn.formVentasRecargas.value['telefono']\"\n                            (click)=\"cambiarValor(5000)\" size=\"small\" >$ 5.000</ion-button>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-button shape=\"round\" expand=\"full\"  [disabled]=\"!mrn.formVentasRecargas.value['telefono']\"\n                            (click)=\"cambiarValor(10000)\" size=\"small\" >$ 10.000</ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          <ion-item>\n            <ion-label position=\"stacked\">Numero celular</ion-label>\n            <ion-input style=\"font-size: 1.5em\" formControlName=\"telefono\" type=\"number\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\">Valor de la venta</ion-label>\n            <input style=\"font-size: 1.5em\" class=\"input_number\" mask=\"separator.0\" thousandSeparator=\",\" (input)=\"valorPersonalizado()\"\n                   inputmode=\"decimal\" formControlName=\"valor\">\n          </ion-item>\n        </ion-list>\n        <div style=\"margin-top: 35px\">\n          <ion-grid>\n            <ion-row style=\"font-size: 0.8em\">\n              <ion-col>\n                <ion-button shape=\"round\" expand=\"block\" [disabled]=\"!mrn.formVentasRecargas.valid\"\n                            (click)=\"present_resumen_ventas(mrn.formVentasRecargas.value)\">Vender</ion-button>\n                <ion-button shape=\"round\" color=\"light\" expand=\"block\" (click)=\"mrn.cancelartVenta()\">Cancelar</ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </form>\n    </div>\n    <div *ngIf=\"segmento == 'paquetes'\">\n      <form [formGroup]=\"mrn.formVentasRecargas\">\n        <ion-list lines=\"full\" class=\"ion-no-margin\">\n          <ion-card>\n            <ion-card-header>\n              <ion-item detail (click)=\"presentModal()\">\n                <ion-avatar slot=\"start\">\n                  <img  src=\"{{mrn.empresaSeleccionada.logo_empresa}}\" alt=\"\">\n                </ion-avatar>\n                <ion-label>\n                  Paquetes {{mrn.empresaSeleccionada.nom_empresa}}\n                </ion-label>\n              </ion-item>\n            </ion-card-header>\n            <ion-card-content>\n              <p style=\"text-align: justify\">{{mrn.productoCodificadoSeleccionado?mrn.productoCodificadoSeleccionado.producto.nom_producto:'Seleccione un paquete.'}}</p>\n            </ion-card-content>\n          </ion-card>\n          <ion-item>\n            <ion-label position=\"stacked\">Numero celular</ion-label>\n            <ion-input style=\"font-size: 1.5em\" formControlName=\"telefono\" type=\"number\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-avatar slot=\"start\">\n              <i style=\"font-size: 2.4em;color: gray\" class=\"fas fa-dollar-sign\"></i>\n            </ion-avatar>\n            <ion-label>\n              <h1>{{mrn.productoCodificadoSeleccionado?(mrn.productoCodificadoSeleccionado.producto.valor_producto|number):(mrn.formVentasRecargas.value['valor']|number)}}</h1>\n              <h3>{{mrn.productoCodificadoSeleccionado?'Paquete en venta':'Tiempo al aire en venta'}}</h3>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n        <div style=\"margin-top: 35px\">\n          <ion-grid>\n            <ion-row style=\"font-size: 0.8em\">\n              <ion-col>\n                <ion-button shape=\"round\" expand=\"block\" [disabled]=\"!mrn.formVentasRecargas.valid \"\n                            (click)=\"present_resumen_ventas(mrn.formVentasRecargas.value)\">Vender</ion-button>\n                <ion-button shape=\"round\" color=\"light\" expand=\"block\" (click)=\"mrn.cancelartVenta()\">Cancelar</ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </form>\n    </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar class=\"header_page\" *ngIf=\"mrn.misBoslsasDinero\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\" style=\"text-align: center\">\n          <span style=\"font-size: 1.3em;font-weight: bold\">{{mrn.misBoslsasDinero.saldo_disponible|number}}</span>\n          <p style=\"font-size: 0.6em\">\n            <i class=\"fas fa-dollar-sign\" style=\"margin-right: 2px\"></i>\n            Saldo disponible</p>\n        </ion-col>\n        <ion-col size=\"6\" style=\"text-align: center\">\n          <span style=\"font-size: 1.3em;font-weight: bold\">{{mrn.misBoslsasDinero.utilidad|number}}</span>\n          <p style=\"font-size: 0.6em\">\n            <i class=\"fas fa-wallet\"  style=\"margin-right: 2px\"></i>\n            Mis ganancias</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_venta-recargas_venta-recargas_module_ts.js.map