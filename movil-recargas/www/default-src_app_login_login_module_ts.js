"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_login_login_module_ts"],{

/***/ 10970:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": function() { return /* binding */ FooterComponent; }
/* harmony export */ });
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component.html?ngResource */ 82811);
/* harmony import */ var _footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.component.scss?ngResource */ 88113);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _providers_mrn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/mrn */ 60023);
/* harmony import */ var _providers_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/api */ 57011);









var FooterComponent = /*#__PURE__*/(0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function FooterComponent(mrn, api) {
  (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, FooterComponent);

  this.mrn = mrn;
  this.api = api;
});

FooterComponent.ctorParameters = function () {
  return [{
    type: _providers_mrn__WEBPACK_IMPORTED_MODULE_4__.Mrn
  }, {
    type: _providers_api__WEBPACK_IMPORTED_MODULE_5__.ApiService
  }];
};

FooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-footer',
  template: _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], FooterComponent);


/***/ }),

/***/ 45393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": function() { return /* binding */ LoginPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page */ 66825);






var routes = [{
  path: '',
  component: _login_page__WEBPACK_IMPORTED_MODULE_2__.LoginPage
}];

var LoginPageRoutingModule = /*#__PURE__*/(0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LoginPageRoutingModule() {
  (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoginPageRoutingModule);
});

LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], LoginPageRoutingModule);


/***/ }),

/***/ 80107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": function() { return /* binding */ LoginPageModule; }
/* harmony export */ });
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-routing.module */ 45393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ 66825);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.component */ 10970);











var LoginPageModule = /*#__PURE__*/(0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LoginPageModule() {
  (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoginPageModule);
});

LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_2__.LoginPageRoutingModule],
  exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent],
  declarations: [_login_page__WEBPACK_IMPORTED_MODULE_3__.LoginPage, _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent]
})], LoginPageModule);


/***/ }),

/***/ 66825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": function() { return /* binding */ LoginPage; }
/* harmony export */ });
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.html?ngResource */ 41729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 87047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _providers_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/api */ 57011);
/* harmony import */ var _providers_mrn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/mrn */ 60023);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage-angular */ 80190);



function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }












var LoginPage = /*#__PURE__*/function () {
  function LoginPage(router, api, fb, storage, mrn, alertController, loadingController, platform) {
    var _this = this;

    (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LoginPage);

    this.router = router;
    this.api = api;
    this.fb = fb;
    this.storage = storage;
    this.mrn = mrn;
    this.alertController = alertController;
    this.loadingController = loadingController;
    this.platform = platform;
    this.platform.keyboardDidShow.subscribe(function (ev) {
      var keyboardHeight = ev.keyboardHeight;

      if (ev['keyboardHeight']) {
        _this.mrn.teclado_show = false;
      } // Do something with the keyboard height such as translating an input above the keyboard.

    });
    this.platform.keyboardDidHide.subscribe(function () {});
  }

  (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LoginPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this2 = this;

        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this.mrn.loginForm.reset();
              _context.next = 3;
              return this.storage.create();

            case 3:
              this.storage.get('usuario').then(function (val) {
                if (val != undefined) {
                  _this2.mrn.login_actions(JSON.parse(val));
                } else {
                  _this2.router.navigate(['login']);
                }
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "login",
    value: function login() {
      var _this3 = this;

      if (this.mrn.loginForm.valid) {
        this.mrn.loginForm.patchValue({
          username: this.mrn.loginForm.value['username'].toLowerCase(),
          password: this.mrn.loginForm.value['password'].toLowerCase()
        });
        this.mrn.presentLoading();
        this.mrn.bad_login = '';
        this.mrn.loadingText = 'Verificando usuario';
        this.api.login('api-token-auth', this.mrn.loginForm.value).subscribe(function (data) {
          if (data != undefined) {
            _this3.mrn.login_actions(data);
          } else {
            _this3.mrn.mensajes('El usuario o la contraseña son incorrectos.');
          }

          _this3.loadingController.dismiss();
        });
      }
    }
  }, {
    key: "notLogged",
    value: function notLogged() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this4 = this;

        var alert;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'MRN Colombia',
                message: 'Sus credenciales de acceso son incorrectas.',
                buttons: [{
                  text: 'Aceptar',
                  handler: function handler() {
                    _this4.api.usuario = '';

                    _this4.router.navigate(['/login']);
                  }
                }]
              });

            case 2:
              alert = _context2.sent;
              _context2.next = 5;
              return alert.present();

            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
    }
  }]);

  return LoginPage;
}();

LoginPage.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: _providers_api__WEBPACK_IMPORTED_MODULE_4__.ApiService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
  }, {
    type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_9__.Storage
  }, {
    type: _providers_mrn__WEBPACK_IMPORTED_MODULE_5__.Mrn
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform
  }];
};

LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], LoginPage);


/***/ }),

/***/ 88113:
/*!*********************************************************!*\
  !*** ./src/app/footer/footer.component.scss?ngResource ***!
  \*********************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 87047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 82811:
/*!*********************************************************!*\
  !*** ./src/app/footer/footer.component.html?ngResource ***!
  \*********************************************************/
/***/ (function(module) {

module.exports = "<ion-footer>\n  <ion-toolbar class=\"header_page\" *ngIf=\"mrn.misBoslsasDinero\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\" style=\"text-align: center\" [routerLink]=\"'/saldo'\">\n          <span style=\"font-size: 1.3em;font-weight: bold\">$ {{mrn.misBoslsasDinero.saldo_disponible|number}}</span>\n          <p style=\"font-size: 0.6em\">\n            Saldo disponible</p>\n        </ion-col>\n        <ion-col size=\"6\" style=\"text-align: center\" (click)=\"mrn.getBolsasDinero(api.nodoActual)\">\n          <span style=\"font-size: 1.3em;font-weight: bold\">$ {{mrn.misBoslsasDinero.utilidad|number}}</span>\n          <p style=\"font-size: 0.6em\">\n            Mis ganancias</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n";

/***/ }),

/***/ 41729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ (function(module) {

module.exports = "<ion-content no-scroll padding class=\"background-image\">\n  <div class=\"logo\" *ngIf=\"mrn.teclado_show\">\n    <img style=\"margin-top: 25%;width: 100px\" src=\"assets/nuevo_logo.png\" alt=\"mirage-layout\"/>\n  </div>\n  <form [formGroup]=\"this.mrn.loginForm\" style=\"margin-top:{{!mrn.teclado_show?'15%':'50%'}};padding: 15px\">\n    <ion-item class=\"login_form\">\n      <ion-label position=\"stacked\">Nombre de usuario</ion-label>\n      <ion-input formControlName=\"username\"></ion-input>\n    </ion-item>\n    <ion-item class=\"login_form\">\n    <ion-label position=\"stacked\">Contraseña</ion-label>\n    <ion-input formControlName=\"password\" type=\"password\"></ion-input>\n  </ion-item>\n    <ion-item class=\"login_form\" lines=\"none\">\n      <ion-label style=\"font-size: 0.8em;color: gray\">Mantener mi sesion abierta</ion-label>\n      <ion-checkbox checked=\"false\" formControlName=\"loggedIn\" slot=\"end\" ></ion-checkbox>\n    </ion-item>\n    <div style=\"margin-top: 10%\">\n        <ion-button [disabled]=\"!mrn.loginForm.valid\" shape=\"round\" expand=\"full\" (click)=\"login()\">Ingresar</ion-button>\n      </div>\n  </form>\n  <!--<div  *ngIf=\"mrn.teclado_show\" style=\"font-size: 0.8em;text-align: center;margin-top: 10%\">\n    <p><i class=\"far fa-copyright\"></i> MRN Colombia 2023</p>\n    <p>www.mrncolombia.com</p>\n    <p>Ver: {{mrn.APP_VERSION}}</p>\n  </div>-->\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_login_login_module_ts.js.map