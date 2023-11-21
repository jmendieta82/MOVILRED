"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_perfil_perfil_module_ts"],{

/***/ 59810:
/*!*************************************************!*\
  !*** ./src/app/perfil/perfil-routing.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilPageRoutingModule": function() { return /* binding */ PerfilPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perfil.page */ 69557);






var routes = [{
  path: '',
  component: _perfil_page__WEBPACK_IMPORTED_MODULE_2__.PerfilPage
}];

var PerfilPageRoutingModule = /*#__PURE__*/(0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function PerfilPageRoutingModule() {
  (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PerfilPageRoutingModule);
});

PerfilPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], PerfilPageRoutingModule);


/***/ }),

/***/ 91320:
/*!*****************************************!*\
  !*** ./src/app/perfil/perfil.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilPageModule": function() { return /* binding */ PerfilPageModule; }
/* harmony export */ });
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perfil-routing.module */ 59810);
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfil.page */ 69557);










var PerfilPageModule = /*#__PURE__*/(0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function PerfilPageModule() {
  (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PerfilPageModule);
});

PerfilPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _perfil_routing_module__WEBPACK_IMPORTED_MODULE_2__.PerfilPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule],
  declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_3__.PerfilPage]
})], PerfilPageModule);


/***/ }),

/***/ 69557:
/*!***************************************!*\
  !*** ./src/app/perfil/perfil.page.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilPage": function() { return /* binding */ PerfilPage; }
/* harmony export */ });
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _perfil_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perfil.page.html?ngResource */ 75768);
/* harmony import */ var _perfil_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfil.page.scss?ngResource */ 75879);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _providers_mrn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/mrn */ 60023);
/* harmony import */ var _providers_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/api */ 57011);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);



function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }









var PerfilPage = /*#__PURE__*/function () {
  function PerfilPage(mrn, api, alertController) {
    (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PerfilPage);

    this.mrn = mrn;
    this.api = api;
    this.alertController = alertController;
    this.mrn.llenarformUsuario(api.usuario);
  }

  (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(PerfilPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "guardarUsuario",
    value: function guardarUsuario() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this = this;

        var alert;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!this.mrn.formUsuario.value['password2']) {
                _context.next = 8;
                break;
              }

              _context.next = 3;
              return this.alertController.create({
                header: 'Quiere cambair la contraseña al usuario ' + this.mrn.formUsuario.value['username'] + '?',
                buttons: [{
                  text: 'Si',
                  role: 'confirm',
                  handler: function handler() {
                    _this.mrn.formUsuario.patchValue({
                      password: _this.mrn.formUsuario.value['password2'].toLowerCase()
                    });

                    _this.mrn.updatePwdUsuario(_this.mrn.formUsuario.value);
                  }
                }, {
                  text: 'No',
                  role: 'cancel',
                  handler: function handler() {}
                }]
              });

            case 3:
              alert = _context.sent;
              _context.next = 6;
              return alert.present();

            case 6:
              _context.next = 9;
              break;

            case 8:
              this.mrn.updateUsuario(this.mrn.formUsuario.value);

            case 9:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }]);

  return PerfilPage;
}();

PerfilPage.ctorParameters = function () {
  return [{
    type: _providers_mrn__WEBPACK_IMPORTED_MODULE_4__.Mrn
  }, {
    type: _providers_api__WEBPACK_IMPORTED_MODULE_5__.ApiService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
  }];
};

PerfilPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-perfil',
  template: _perfil_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_perfil_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], PerfilPage);


/***/ }),

/***/ 75879:
/*!****************************************************!*\
  !*** ./src/app/perfil/perfil.page.scss?ngResource ***!
  \****************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJmaWwucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 75768:
/*!****************************************************!*\
  !*** ./src/app/perfil/perfil.page.html?ngResource ***!
  \****************************************************/
/***/ (function(module) {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar class=\"background-image header_page\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Perfil de usuario</ion-title>\n    <ion-progress-bar color=\"secondary\" *ngIf=\"mrn.loading\" type=\"indeterminate\"></ion-progress-bar>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form [formGroup]=\"mrn.formUsuario\">\n    <ion-item>\n      <ion-label position=\"floating\">Identificacion</ion-label>\n      <ion-input readonly formControlName=\"identificacion\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Direccion</ion-label>\n      <ion-input formControlName=\"direccion\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Cargo</ion-label>\n      <ion-input formControlName=\"cargo\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Telefono</ion-label>\n      <ion-input formControlName=\"telefono\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input formControlName=\"email\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Nombre y apellidos</ion-label>\n      <ion-input formControlName=\"first_name\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Nombre de usuario</ion-label>\n      <ion-input readonly formControlName=\"username\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Contraseña</ion-label>\n      <ion-input formControlName=\"password2\"></ion-input>\n    </ion-item>\n  </form>\n  <div style=\"text-align:center;margin-top: 20px\">\n    <ion-button color=\"primary\" (click)=\"guardarUsuario()\">Guardar</ion-button>\n    <ion-button color=\"secondary\" [routerLink]=\"'/inicio'\">Volver</ion-button>\n  </div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_perfil_perfil_module_ts.js.map