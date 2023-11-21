(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _providers_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./providers/auth.guard */ 84507);
/* harmony import */ var _providers_non_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./providers/non-auth.guard */ 42681);







var routes = [{
  path: 'inicio',
  loadChildren: function loadChildren() {
    return Promise.all(/*! import() */[__webpack_require__.e("default-src_app_login_login_module_ts"), __webpack_require__.e("src_app_inicio_inicio_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./inicio/inicio.module */ 53185)).then(function (m) {
      return m.InicioPageModule;
    });
  },
  canActivate: [_providers_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
}, {
  path: 'cartera',
  loadChildren: function loadChildren() {
    return __webpack_require__.e(/*! import() */ "src_app_cartera_cartera_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./cartera/cartera.module */ 11907)).then(function (m) {
      return m.CarteraPageModule;
    });
  }
}, {
  path: 'reportes',
  loadChildren: function loadChildren() {
    return __webpack_require__.e(/*! import() */ "src_app_reportes_reportes_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./reportes/reportes.module */ 41598)).then(function (m) {
      return m.ReportesPageModule;
    });
  }
},
/*{
  path: 'mora',
  loadChildren: () => import('./mora/mora.module').then( m => m.MoraPageModule)
},*/
{
  path: 'saldo',
  loadChildren: function loadChildren() {
    return __webpack_require__.e(/*! import() */ "src_app_saldo_saldo_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./saldo/saldo.module */ 19103)).then(function (m) {
      return m.SaldoPageModule;
    });
  }
}, {
  path: 'empresas',
  loadChildren: function loadChildren() {
    return __webpack_require__.e(/*! import() */ "src_app_empresas_empresas_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./empresas/empresas.module */ 89507)).then(function (m) {
      return m.EmpresasPageModule;
    });
  }
}, {
  path: 'venta-pines',
  loadChildren: function loadChildren() {
    return __webpack_require__.e(/*! import() */ "src_app_venta-pines_venta-pines_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./venta-pines/venta-pines.module */ 35317)).then(function (m) {
      return m.VentaPinesPageModule;
    });
  }
}, {
  path: 'venta-recargas',
  loadChildren: function loadChildren() {
    return __webpack_require__.e(/*! import() */ "src_app_venta-recargas_venta-recargas_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./venta-recargas/venta-recargas.module */ 41151)).then(function (m) {
      return m.VentaRecargasPageModule;
    });
  }
}, {
  path: 'venta-certificados',
  loadChildren: function loadChildren() {
    return __webpack_require__.e(/*! import() */ "src_app_venta-certificados_venta-certificados_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./venta-certificados/venta-certificados.module */ 50350)).then(function (m) {
      return m.VentaCertificadosPageModule;
    });
  }
},
/*{
  path: 'venta-soat',
  loadChildren: () => import('./venta-soat/venta-soat.module').then( m => m.VentaSoatPageModule)
},*/
{
  path: 'venta-apuestas',
  loadChildren: function loadChildren() {
    return __webpack_require__.e(/*! import() */ "src_app_venta-apuestas_venta-apuestas_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./venta-apuestas/venta-apuestas.module */ 78919)).then(function (m) {
      return m.VentaApuestasPageModule;
    });
  }
}, {
  path: 'mi-distribuidor',
  loadChildren: function loadChildren() {
    return __webpack_require__.e(/*! import() */ "src_app_mi-distribuidor_mi-distribuidor_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mi-distribuidor/mi-distribuidor.module */ 31833)).then(function (m) {
      return m.MiDistribuidorPageModule;
    });
  }
}, {
  path: 'perfil',
  loadChildren: function loadChildren() {
    return __webpack_require__.e(/*! import() */ "src_app_perfil_perfil_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./perfil/perfil.module */ 91320)).then(function (m) {
      return m.PerfilPageModule;
    });
  }
}, {
  path: 'venta-recaudo',
  loadChildren: function loadChildren() {
    return __webpack_require__.e(/*! import() */ "src_app_venta-recaudo_venta-recaudo_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./venta-recaudo/venta-recaudo.module */ 38776)).then(function (m) {
      return m.VentaRecaudoPageModule;
    });
  }
}, {
  path: 'cambio-red',
  loadChildren: function loadChildren() {
    return __webpack_require__.e(/*! import() */ "src_app_cambio-red_cambio-red_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./cambio-red/cambio-red.module */ 70574)).then(function (m) {
      return m.CambioRedPageModule;
    });
  }
}, {
  path: 'login',
  loadChildren: function loadChildren() {
    return __webpack_require__.e(/*! import() */ "default-src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 80107)).then(function (m) {
      return m.LoginPageModule;
    });
  },
  canActivate: [_providers_non_auth_guard__WEBPACK_IMPORTED_MODULE_3__.NonAuthGuard]
}, {
  path: '**',
  redirectTo: '/login'
}];

var AppRoutingModule = /*#__PURE__*/(0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppRoutingModule() {
  (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppRoutingModule);
});

AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_6__.PreloadAllModules
  })],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
})], AppRoutingModule);


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _providers_mrn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./providers/mrn */ 60023);
/* harmony import */ var _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/push-notifications */ 71704);
/* harmony import */ var _providers_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./providers/api */ 57011);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _providers_network_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./providers/network.service */ 31005);












var AppComponent = /*#__PURE__*/function () {
  function AppComponent(mrn, api, router, networkService) {
    (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AppComponent);

    this.mrn = mrn;
    this.api = api;
    this.router = router;
    this.networkService = networkService;
    this.appPages = [{
      title: 'Ventas',
      url: '/inicio',
      icon: 'fas fa-store'
    }, {
      title: 'Solicitudes de Saldo',
      url: '/saldo',
      icon: 'fas fa-hand-holding-usd'
    }, {
      title: 'Salir',
      url: '/login',
      icon: 'fas fa-times'
    }];
    this.mrn.crearControles();
  }

  (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AppComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      this.networkService.getNetworkType(); // Request permission to use push notifications
      // iOS will prompt user and return if they granted permission or not
      // Android will just grant without prompting

      _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_5__.PushNotifications.requestPermissions().then(function (result) {
        if (result.receive === 'granted') {
          // Register with Apple / Google to receive push via APNS/FCM
          _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_5__.PushNotifications.register();
        } else {// Show some error
        }
      });
      _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_5__.PushNotifications.addListener('registration', function (token) {
        _this.mrn.tokenMessage = token.value;
      });
      _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_5__.PushNotifications.addListener('registrationError', function (error) {
        console.log('Error on registration: ' + JSON.stringify(error)); //alert('Error on registration: ' + JSON.stringify(error));
      });
      _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_5__.PushNotifications.addListener('pushNotificationReceived', function (notification) {
        if (notification.body) {
          _this.mrn.mensajes(notification.body);
        }

        switch (notification.data.accion) {
          case 'SS':
            {
              _this.mrn.getSolicitudesSaldo();

              _this.mrn.getMisBolsasDinero();

              _this.mrn.getSolicitudesSaldo();

              break;
            }

          case 'ACTND':
            {
              _this.mrn.getNodoById(_this.api.nodoActual);

              break;
            }

          case 'ASS':
            {
              _this.mrn.getMisSolicitudesSaldo();

              _this.mrn.getMisBolsasDinero();

              _this.mrn.getMiCredito();

              break;
            }

          case 'CPROV':
            {
              _this.mrn.getMisSolicitudesSaldo();

              _this.mrn.getMisBolsasDinero();

              _this.mrn.getMiCredito();

              break;
            }

          case 'AJS':
            {
              _this.mrn.getMisBolsasDinero();

              break;
            }

          case 'VEN':
            {
              _this.mrn.SALDOWS = {
                usuario: _this.mrn.USUARIO_MSV,
                password: _this.mrn.PWD_MVS,
                canal_transaccion: 2,
                bolsa: 'M'
              };

              _this.mrn.getMisBolsasDinero();

              break;
            }

          case 'TRF':
            {
              //transacciones fallidas
              break;
            }

          case 'APSCR':
            {
              _this.mrn.getMisBolsasDinero();

              _this.mrn.getMiCredito();

              _this.mrn.getMisSolicitudesSaldo();

              _this.mrn.getNodoById(_this.api.nodoActual);

              break;
            }

          case 'ACMC':
            {
              _this.mrn.getMiCredito();

              break;
            }

          case 'SSRCH':
            {
              _this.mrn.getMisSolicitudesSaldo();

              break;
            }

          case 'USM':
            {
              //usuario en mora
              _this.mrn.getFacturasMora(_this.api.nodoActual, false);

              _this.router.navigate(['/mora']);

              break;
            }

          case 'ACTCOM':
            {
              _this.mrn.getCatServicio();

              _this.mrn.getComisiones(_this.api.nodoActual);

              break;
            }

          default:
            {
              //statements;
              break;
            }
        }
      });
      _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_5__.PushNotifications.addListener('pushNotificationActionPerformed', function (notification) {
        console.log('Push action performed: ' + JSON.stringify(notification));
      });
    }
  }]);

  return AppComponent;
}();

AppComponent.ctorParameters = function () {
  return [{
    type: _providers_mrn__WEBPACK_IMPORTED_MODULE_4__.Mrn
  }, {
    type: _providers_api__WEBPACK_IMPORTED_MODULE_6__.ApiService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
  }, {
    type: _providers_network_service__WEBPACK_IMPORTED_MODULE_7__.NetworkService
  }];
};

AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], AppComponent);


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _providers_mrn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./providers/mrn */ 60023);
/* harmony import */ var _providers_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./providers/api */ 57011);
/* harmony import */ var _providers_non_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./providers/non-auth.guard */ 42681);
/* harmony import */ var _providers_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./providers/auth.guard */ 84507);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _productos_productos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./productos/productos.component */ 53982);
/* harmony import */ var _soat_vigente_soat_vigente_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./soat-vigente/soat-vigente.component */ 42890);
/* harmony import */ var _soat_vencido_soat_vencido_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./soat-vencido/soat-vencido.component */ 37408);
/* harmony import */ var _solicitud_saldo_solicitud_saldo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./solicitud-saldo/solicitud-saldo.component */ 23670);
/* harmony import */ var _pagar_factura_pagar_factura_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pagar-factura/pagar-factura.component */ 76486);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ngx-mask */ 84409);
/* harmony import */ var _ultimas_ventas_ultimas_ventas_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ultimas-ventas/ultimas-ventas.component */ 91944);
/* harmony import */ var _resumen_venta_resumen_venta_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./resumen-venta/resumen-venta.component */ 443);
/* harmony import */ var _reportes_detalle_reportes_detalle_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./reportes-detalle/reportes-detalle.component */ 18206);
/* harmony import */ var _reporte_ventas_reporte_ventas_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./reporte-ventas/reporte-ventas.component */ 41139);
/* harmony import */ var _reporte_solicitudes_reporte_solicitudes_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./reporte-solicitudes/reporte-solicitudes.component */ 27517);
/* harmony import */ var _reporte_pagos_reporte_pagos_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./reporte-pagos/reporte-pagos.component */ 85174);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 6018);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @ionic/storage-angular */ 47566);
/* harmony import */ var _awesome_cordova_plugins_device_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @awesome-cordova-plugins/device/ngx */ 8801);
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic-native/network/ngx */ 99118);
/* harmony import */ var _convenios_convenios_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./convenios/convenios.component */ 2706);
/* harmony import */ var _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @awesome-cordova-plugins/barcode-scanner/ngx */ 62703);
/* harmony import */ var _info_recaudos_info_recaudos_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./info-recaudos/info-recaudos.component */ 97911);
/* harmony import */ var _ver_soporte_pago_ver_soporte_pago_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ver-soporte-pago/ver-soporte-pago.component */ 28994);
/* harmony import */ var _providers_network_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./providers/network.service */ 31005);
/* harmony import */ var _info_factura_pagada_info_factura_pagada_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./info-factura-pagada/info-factura-pagada.component */ 98551);
/* harmony import */ var _resultado_venta_recarga_resultado_venta_recarga_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./resultado-venta-recarga/resultado-venta-recarga.component */ 97657);







































var maskConfig = {
  validation: false
};

var AppModule = /*#__PURE__*/(0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppModule() {
  (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppModule);
});

AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_29__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_30__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _productos_productos_component__WEBPACK_IMPORTED_MODULE_8__.ProductosComponent, _soat_vigente_soat_vigente_component__WEBPACK_IMPORTED_MODULE_9__.SoatVigenteComponent, _soat_vencido_soat_vencido_component__WEBPACK_IMPORTED_MODULE_10__.SoatVencidoComponent, _solicitud_saldo_solicitud_saldo_component__WEBPACK_IMPORTED_MODULE_11__.SolicitudSaldoComponent, _pagar_factura_pagar_factura_component__WEBPACK_IMPORTED_MODULE_12__.PagarFacturaComponent, _reportes_detalle_reportes_detalle_component__WEBPACK_IMPORTED_MODULE_15__.ReportesDetalleComponent, _reporte_ventas_reporte_ventas_component__WEBPACK_IMPORTED_MODULE_16__.ReporteVentasComponent, _reporte_solicitudes_reporte_solicitudes_component__WEBPACK_IMPORTED_MODULE_17__.ReporteSolicitudesComponent, _ultimas_ventas_ultimas_ventas_component__WEBPACK_IMPORTED_MODULE_13__.UltimasVentasComponent, _resumen_venta_resumen_venta_component__WEBPACK_IMPORTED_MODULE_14__.ResumenVentaComponent, _reporte_pagos_reporte_pagos_component__WEBPACK_IMPORTED_MODULE_18__.ReportePagosComponent, _convenios_convenios_component__WEBPACK_IMPORTED_MODULE_22__.ConveniosComponent, _info_recaudos_info_recaudos_component__WEBPACK_IMPORTED_MODULE_24__.InfoRecaudosComponent, _ver_soporte_pago_ver_soporte_pago_component__WEBPACK_IMPORTED_MODULE_25__.VerSoportePagoComponent, _info_factura_pagada_info_factura_pagada_component__WEBPACK_IMPORTED_MODULE_27__.InfoFacturaPagadaComponent, _resultado_venta_recarga_resultado_venta_recarga_component__WEBPACK_IMPORTED_MODULE_28__.ResultadoVentaRecargaComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_32__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_33__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_33__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_34__.HttpClientModule, _angular_common__WEBPACK_IMPORTED_MODULE_35__.CommonModule, ngx_mask__WEBPACK_IMPORTED_MODULE_36__.NgxMaskModule.forRoot(maskConfig), _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_37__.IonicStorageModule.forRoot()],
  providers: [{
    provide: _angular_router__WEBPACK_IMPORTED_MODULE_38__.RouteReuseStrategy,
    useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_32__.IonicRouteStrategy
  }, _providers_auth_guard__WEBPACK_IMPORTED_MODULE_7__.AuthGuard, _providers_non_auth_guard__WEBPACK_IMPORTED_MODULE_6__.NonAuthGuard, _providers_api__WEBPACK_IMPORTED_MODULE_5__.ApiService, _providers_mrn__WEBPACK_IMPORTED_MODULE_4__.Mrn, _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_19__.Camera, _awesome_cordova_plugins_device_ngx__WEBPACK_IMPORTED_MODULE_20__.Device, _providers_network_service__WEBPACK_IMPORTED_MODULE_26__.NetworkService, _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_21__.Network, _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_23__.BarcodeScanner],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
  exports: []
})], AppModule);


/***/ }),

/***/ 2706:
/*!**************************************************!*\
  !*** ./src/app/convenios/convenios.component.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConveniosComponent": function() { return /* binding */ ConveniosComponent; }
/* harmony export */ });
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _convenios_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./convenios.component.html?ngResource */ 74248);
/* harmony import */ var _convenios_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./convenios.component.scss?ngResource */ 96720);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _providers_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/api */ 57011);
/* harmony import */ var _providers_mrn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/mrn */ 60023);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);











var ConveniosComponent = /*#__PURE__*/function () {
  function ConveniosComponent(modalController, mrn, api, router) {
    (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ConveniosComponent);

    this.modalController = modalController;
    this.mrn = mrn;
    this.api = api;
    this.router = router;
  }

  (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ConveniosComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "dismissModal",
    value: function dismissModal() {
      this.modalController.dismiss({
        'dismissed': true
      });
    }
  }, {
    key: "seleccionarConvenio",
    value: function seleccionarConvenio(convenio) {
      this.mrn.convenio_seleccionado = convenio;
      this.modalController.dismiss();
    }
  }]);

  return ConveniosComponent;
}();

ConveniosComponent.ctorParameters = function () {
  return [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
  }, {
    type: _providers_mrn__WEBPACK_IMPORTED_MODULE_5__.Mrn
  }, {
    type: _providers_api__WEBPACK_IMPORTED_MODULE_4__.ApiService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }];
};

ConveniosComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-convenios',
  template: _convenios_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_convenios_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], ConveniosComponent);


/***/ }),

/***/ 98551:
/*!**********************************************************************!*\
  !*** ./src/app/info-factura-pagada/info-factura-pagada.component.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoFacturaPagadaComponent": function() { return /* binding */ InfoFacturaPagadaComponent; }
/* harmony export */ });
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _info_factura_pagada_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info-factura-pagada.component.html?ngResource */ 46284);
/* harmony import */ var _info_factura_pagada_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info-factura-pagada.component.scss?ngResource */ 10021);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _providers_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/api */ 57011);
/* harmony import */ var _providers_mrn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/mrn */ 60023);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);











var InfoFacturaPagadaComponent = /*#__PURE__*/function () {
  function InfoFacturaPagadaComponent(api, mrn, modalController, router) {
    (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InfoFacturaPagadaComponent);

    this.api = api;
    this.mrn = mrn;
    this.modalController = modalController;
    this.router = router;
  }

  (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(InfoFacturaPagadaComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "dismissModal",
    value: function dismissModal() {
      this.modalController.dismiss({
        'dismissed': true
      });
      this.mrn.factura_pagada = '';
      this.mrn.factura_consultada = '';
      this.router.navigate(['/inicio']);
    }
  }]);

  return InfoFacturaPagadaComponent;
}();

InfoFacturaPagadaComponent.ctorParameters = function () {
  return [{
    type: _providers_api__WEBPACK_IMPORTED_MODULE_4__.ApiService
  }, {
    type: _providers_mrn__WEBPACK_IMPORTED_MODULE_5__.Mrn
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }];
};

InfoFacturaPagadaComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-info-factura-pagada',
  template: _info_factura_pagada_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_info_factura_pagada_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], InfoFacturaPagadaComponent);


/***/ }),

/***/ 97911:
/*!**********************************************************!*\
  !*** ./src/app/info-recaudos/info-recaudos.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoRecaudosComponent": function() { return /* binding */ InfoRecaudosComponent; }
/* harmony export */ });
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _info_recaudos_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info-recaudos.component.html?ngResource */ 64591);
/* harmony import */ var _info_recaudos_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info-recaudos.component.scss?ngResource */ 19113);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);









var InfoRecaudosComponent = /*#__PURE__*/function () {
  function InfoRecaudosComponent(modalController, router) {
    (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InfoRecaudosComponent);

    this.modalController = modalController;
    this.router = router;
  }

  (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(InfoRecaudosComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "dismissModal",
    value: function dismissModal() {
      this.modalController.dismiss({
        'dismissed': true
      });
      this.router.navigate(['venta-recaudo']);
    }
  }]);

  return InfoRecaudosComponent;
}();

InfoRecaudosComponent.ctorParameters = function () {
  return [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }];
};

InfoRecaudosComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-info-recaudos',
  template: _info_recaudos_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_info_recaudos_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], InfoRecaudosComponent);


/***/ }),

/***/ 76486:
/*!**********************************************************!*\
  !*** ./src/app/pagar-factura/pagar-factura.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagarFacturaComponent": function() { return /* binding */ PagarFacturaComponent; }
/* harmony export */ });
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _pagar_factura_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagar-factura.component.html?ngResource */ 35257);
/* harmony import */ var _pagar_factura_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagar-factura.component.scss?ngResource */ 72865);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _providers_mrn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/mrn */ 60023);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 6018);











var PagarFacturaComponent = /*#__PURE__*/function () {
  function PagarFacturaComponent(modalController, mrn, router, camera) {
    (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PagarFacturaComponent);

    this.modalController = modalController;
    this.mrn = mrn;
    this.router = router;
    this.camera = camera;
    this.options = {
      quality: 30,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  }

  (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(PagarFacturaComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "dismissModal",
    value: function dismissModal() {
      this.modalController.dismiss({
        'dismissed': true
      });
    }
  }, {
    key: "tomar_foto",
    value: function tomar_foto() {
      var _this = this;

      this.camera.getPicture(this.options).then(function (imageData) {
        var base64Image = 'data:image/jpeg;base64,' + imageData;
        _this.foto = base64Image;

        _this.mrn.formPagos.patchValue({
          soporte: _this.foto
        });
      }, function (err) {});
    }
  }]);

  return PagarFacturaComponent;
}();

PagarFacturaComponent.ctorParameters = function () {
  return [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
  }, {
    type: _providers_mrn__WEBPACK_IMPORTED_MODULE_4__.Mrn
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__.Camera
  }];
};

PagarFacturaComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-pagar-factura',
  template: _pagar_factura_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_pagar_factura_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], PagarFacturaComponent);


/***/ }),

/***/ 53982:
/*!**************************************************!*\
  !*** ./src/app/productos/productos.component.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductosComponent": function() { return /* binding */ ProductosComponent; }
/* harmony export */ });
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _productos_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productos.component.html?ngResource */ 25987);
/* harmony import */ var _productos_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./productos.component.scss?ngResource */ 45093);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _providers_mrn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/mrn */ 60023);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);










var ProductosComponent = /*#__PURE__*/function () {
  function ProductosComponent(modalController, mrn, router) {
    (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProductosComponent);

    this.modalController = modalController;
    this.mrn = mrn;
    this.router = router;
  }

  (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ProductosComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "dismissModal",
    value: function dismissModal() {
      this.modalController.dismiss({
        'dismissed': true
      });
    }
  }, {
    key: "seleccionarProducto",
    value: function seleccionarProducto(producto) {
      this.mrn.productoCodificadoSeleccionado = producto;

      switch (this.mrn.categoriaSeleccionada.nom_categoria) {
        case 'Pines':
          {
            this.mrn.formVentasPines.patchValue({
              valor: producto.producto.valor_producto
            });
            break;
          }

        case 'Recargas y Paquetes':
          {
            if (this.mrn.empresaSeleccionada.nom_empresa == 'Directv') {
              this.mrn.formVentasRecargasDirectv.patchValue({
                valor: producto.producto.valor_producto
              });
            } else {
              this.mrn.formVentasRecargas.patchValue({
                valor: producto.producto.valor_producto
              });
            }

            break;
          }

        case 'Certificados':
          {
            this.mrn.formVentasCertificados.patchValue({
              oficina: producto.codigo_producto
            });
            break;
          }

        case 'SOAT':
          {
            this.router.navigate(['venta-soat']);
            break;
          }

        case 'Apuestas':
          {
            this.router.navigate(['venta-apuestas']);
            break;
          }

        default:
          {
            break;
          }
      }

      this.dismissModal();
    }
  }, {
    key: "buscar",
    value: function buscar(valorBusqueda) {
      if (valorBusqueda) {
        var lista1 = this.mrn.productosByProveedorSinTiempoAlAire.filter(function (item) {
          return item.producto.nom_producto.toUpperCase().includes(valorBusqueda.toUpperCase());
        });
        var lista2 = this.mrn.productosByProveedorSinTiempoAlAire.filter(function (item) {
          return item.producto.valor_producto.toString().includes(valorBusqueda);
        });
        this.mrn.listaFiltradaProductos = lista1.concat(lista2);
      } else {
        this.mrn.listaFiltradaProductos = this.mrn.productosByProveedorSinTiempoAlAire;
      }
    }
  }]);

  return ProductosComponent;
}();

ProductosComponent.ctorParameters = function () {
  return [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
  }, {
    type: _providers_mrn__WEBPACK_IMPORTED_MODULE_4__.Mrn
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
  }];
};

ProductosComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-productos',
  template: _productos_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_productos_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], ProductosComponent);


/***/ }),

/***/ 57011:
/*!**********************************!*\
  !*** ./src/app/providers/api.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": function() { return /* binding */ ApiService; }
/* harmony export */ });
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/ */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage-angular */ 80190);
/* harmony import */ var _awesome_cordova_plugins_device_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/device/ngx */ 8801);



function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }











var ApiService = /*#__PURE__*/function () {
  function ApiService(http, router, alertController, storage, device, toastController) {
    (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ApiService);

    this.http = http;
    this.router = router;
    this.alertController = alertController;
    this.storage = storage;
    this.device = device;
    this.toastController = toastController; //readonly baseURL = 'http://127.0.0.1:8000';

    this.baseURL = 'https://api-produccion-recargas-mrn.click';
    this.conceptoURL = 'https://150.136.18.204'; //produccion;
    //readonly conceptoURL = 'https://129.159.64.15' // pruebas;

    this.load = false;
    this.API_Key_Concepto_produccion = '$2b$10$5hBiWZcdxXo6sQjy5equ1eUl/axKYblXTJ0Y0UG4lmiDtbRd846P2'; //API_Key_Concepto_pruebas = ' $2b$10$8CT.SGdhz1oQbF4ZZ7cFp.Zv2yk.UBKaSlQ/Po3LV68OGC5Jr.Z1e'

    this.URL_methods = '';
    this.tipo_datos = '';
    this.tipo_red = '';
    this.nodoActual = '';
    this.model = '';
    this.manufacturer = '';
    this.platform = '';
    this.uuid = '';
    this.conectado = false;
    this.model = this.device.model;
    this.manufacturer = this.device.manufacturer;
    this.platform = this.device.platform;
    this.uuid = this.device.uuid;
  }

  (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ApiService, [{
    key: "login",
    value: function login(finisher, data) {
      var url = '';

      if (!this.conectado) {
        url = this.conceptoURL;
        this.headersLogin = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('URL', this.baseURL + '/' + finisher).set('UUID', this.uuid).set('Brand-Device', this.manufacturer).set('Model-Device', this.model).set('Type-Device', this.platform).set('Sponsor-Authorization', this.API_Key_Concepto_produccion); //headers de conexion
      } else {
        url = "".concat(this.baseURL + '/' + finisher);
        this.headersLogin = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json');
      }

      this.optionsLogin = {
        headers: this.headersLogin
      };
      var credencials = JSON.stringify(data);
      return this.http.post(url, credencials, this.optionsLogin).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError()));
    } //GET

  }, {
    key: "get",
    value: function get(finisher) {
      this.load = true;
      var url = "".concat(this.baseURL + '/' + finisher);
      this.crear_header(this.usuario['token'], url);
      return this.http.get(this.URL_methods, this.optionsAll).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError()));
    } //POST

  }, {
    key: "add",
    value: function add(finisher, data) {
      this.load = true;
      var dJson = JSON.stringify(data);
      var url = "".concat(this.baseURL + '/' + finisher + '/');
      this.crear_header(this.usuario['token'], url);
      return this.http.post(this.URL_methods, dJson, this.optionsAll).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError()));
    }
  }, {
    key: "post_soap",
    value: function post_soap(finisher, data) {
      this.load = true;
      var url = "".concat(this.baseURL + '/' + finisher);
      this.crear_header(this.usuario['token'], url);
      return this.http.post(this.URL_methods, data, this.optionsAll).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError()));
    } // GET BY ID
    //PUT

  }, {
    key: "update",
    value: function update(finisher, id, data) {
      this.load = true;
      var dJson = JSON.stringify(data);
      var url = "".concat(this.baseURL + '/' + finisher + '/' + id + '/');
      this.crear_header(this.usuario['token'], url);
      return this.http.patch(this.URL_methods, dJson, this.optionsAll).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError()));
    } //DELETE

  }, {
    key: "crear_header",
    value: function crear_header(token, url) {
      if (!this.conectado) {
        this.tipo_datos = 'patrocinados';
        this.URL_methods = this.conceptoURL;
        this.headersAll = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Token ' + token).set('URL', url).set('UUID', this.uuid).set('Brand-Device', this.manufacturer).set('Model-Device', this.model).set('Type-Device', this.platform).set('Sponsor-Authorization', this.API_Key_Concepto_produccion);
      } else {
        this.tipo_datos = 'postpago';
        this.URL_methods = url;
        this.headersAll = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', 'Token ' + token);
      }

      this.optionsAll = {
        headers: this.headersAll
      };
    }
  }, {
    key: "logOut",
    value: function logOut() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this = this;

        var alert;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'MRN Colombia',
                message: 'Desea salir de la aplicación?',
                buttons: [{
                  text: 'Cancelar',
                  role: 'cancel',
                  cssClass: 'secondary',
                  id: 'cancel-button',
                  handler: function handler(blah) {}
                }, {
                  text: 'Aceptar',
                  id: 'confirm-button',
                  handler: function handler() {
                    _this.usuario = '';

                    _this.router.navigate(['/login']);

                    _this.storage.remove('usuario');
                  }
                }]
              });

            case 2:
              alert = _context.sent;
              _context.next = 5;
              return alert.present();

            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "mensaje",
    value: function mensaje(_mensaje) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var toast;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.toastController.create({
                message: _mensaje,
                duration: 2000
              });

            case 2:
              toast = _context2.sent;
              toast.present();

            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "getIPAddress",
    value: function getIPAddress() {
      return this.http.get("https://geolocation-db.com/json/");
    }
  }, {
    key: "handleError",
    value: function handleError(result) {
      return function (error) {
        return (0,rxjs___WEBPACK_IMPORTED_MODULE_6__.of)(result);
      };
    }
  }]);

  return ApiService;
}();

ApiService.ctorParameters = function () {
  return [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
  }, {
    type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_9__.Storage
  }, {
    type: _awesome_cordova_plugins_device_ngx__WEBPACK_IMPORTED_MODULE_2__.Device
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController
  }];
};

ApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Injectable)()], ApiService);


/***/ }),

/***/ 84507:
/*!*****************************************!*\
  !*** ./src/app/providers/auth.guard.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": function() { return /* binding */ AuthGuard; }
/* harmony export */ });
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ 57011);







var AuthGuard = /*#__PURE__*/function () {
  function AuthGuard(router, api) {
    (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AuthGuard);

    this.router = router;
    this.api = api;
  }

  (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AuthGuard, [{
    key: "canActivate",
    value: function canActivate(next, state) {
      if (this.api.usuario) {
        return true;
      } else {
        this.router.navigate(['/login']);
      }
    }
  }, {
    key: "canActivateChild",
    value: function canActivateChild(next, state) {
      if (this.api.usuario) {
        return true;
      } else {
        this.router.navigate(['/login']);
      }
    }
  }]);

  return AuthGuard;
}();

AuthGuard.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
  }, {
    type: _api__WEBPACK_IMPORTED_MODULE_2__.ApiService
  }];
};

AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()], AuthGuard);


/***/ }),

/***/ 60023:
/*!**********************************!*\
  !*** ./src/app/providers/mrn.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mrn": function() { return /* binding */ Mrn; }
/* harmony export */ });
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ 95106);
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ 57011);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ 92938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/storage-angular */ 80190);
/* harmony import */ var _resultado_venta_recarga_resultado_venta_recarga_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../resultado-venta-recarga/resultado-venta-recarga.component */ 97657);
/* harmony import */ var _providers_print_plugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/print-plugin */ 51651);




function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }













var Mrn = /*#__PURE__*/function () {
  function Mrn(api, fb, router, modalController, toastController, loadingController, storage) {
    (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Mrn);

    this.api = api;
    this.fb = fb;
    this.router = router;
    this.modalController = modalController;
    this.toastController = toastController;
    this.loadingController = loadingController;
    this.storage = storage;
    /* Diccionario de variables :
         ACTND =(message action) Actualizacion de nodo,
         CPROV =(message action) Cambio de proveedor,
         ASS = (message action) Autorizacion saldo
         SS = (message action) Solicitud de saldo
         AJS = Ajuste de saldo
         SSCR = Solicitud saldo credito
         SSC = Solicitud saldo contado
         VEN = Venta
         UPV = Utilidad por venta
         CA = Comision Anticipada
         CV = Comision por venta
         PN = Persona natural
         PJ = Persona Juridica
         APSCR = Aprobacion de pago solicitud credito
         ACMC = Actualizacion monto credito
         SSRCH= Solicitud rechazada
         USM= Usuario en mora
         CJG= Canje de ganancia
         ACTCOM= Actualizacion de comisiones
    */

    this.USER_PRACTI = "113935";
    this.PWD_PRACTI = "1379";
    this.APP_VERSION = '2.1.46';
    this.tiposId = [{
      label: 'Cedula ciudadanía',
      value: '1'
    }, {
      label: 'Cedula extranjería',
      value: '2'
    }, {
      label: 'Nit',
      value: '3'
    }, {
      label: 'Tarjeta identidad',
      value: '4'
    }, {
      label: 'Pasaporte',
      value: '5'
    }, {
      label: 'Tarjeta seguro social',
      value: '6'
    }, {
      label: 'Soc. extranjera sin nit en Colombia',
      value: '7'
    }, {
      label: 'Fideicomiso',
      value: '8'
    }, {
      label: 'Registro civil',
      value: '9'
    }, {
      label: 'Adulto sin identificación',
      value: '10'
    }, {
      label: 'Menor sin identificación',
      value: '11'
    }, {
      label: 'Tarjeta profesional',
      value: '12'
    }];
    this.comisiones = [];
    this.nodosDirectos = [];
    this.productos = [];
    this.catServicios = [];
    this.empresas = [];
    this.productosByProveedor = [];
    this.solicitudesSaldo = [];
    this.misSolicitudesSaldo = [];
    this.municipios = [];
    this.loading = false;
    this.loadingText = '';
    this.municipiosFiltrados = [];
    this.mensaje = '';
    this.verFormTransaccionTercero = false;
    this.verSubirArchivo = false;
    this.facturasMora = [];
    this.lista_comisiones_venta = [];
    this.bad_login = '';
    this.abonos = [];
    this.entidad_recaudo = [{
      label: 'Bancolombia',
      value: 'Bancolombia'
    }, {
      label: 'Banco de Occidente',
      value: 'Banco de Occidente'
    }, {
      label: 'Banco agrario',
      value: 'Banco agrario'
    }, {
      label: 'Nequi',
      value: 'Nequi'
    }, {
      label: 'Efecty',
      value: 'Efecty'
    }];
    this.verFormEditNodo = false;
    this.verUltimasTransacciones = false;
    this.ventas_by_nodo = [];
    this.verFormEditNodoTercero = false;
    this.activeState = [false, false];
    this.USUARIO_MSV = '00087482';
    this.PWD_MVS = 'h73P71Zi';
    this.datos_soat = [];
    this.listaFiltradaProductos = [];
    this.listaFiltradaVentas = [];
    this.teclado_show = true;
    this.ventas_by_fecha = [];
    this.total_consulta_ventas = 0;
    this.total_consulta_ganancias = 0;
    this.total_sol_contado = 0;
    this.total_sol_credito = 0;
    this.total_sol_credito_pend = 0;
    this.pagos_by_fecha = [];
    this.cartera = [];
    this.totalFacturasAPagar = 0;
    this.facturasSeleccionadas = [];
    this.convenios = [];
  }

  (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Mrn, [{
    key: "crearControles",
    value: function crearControles() {
      this.formNodo = this.fb.group({
        id: [''],
        barrio_id: [''],
        razonSocial: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        tipo_persona: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        identificacion_nodo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        tipo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        nodoPadre: [''],
        red: [''],
        comisiones: [''],
        telefono: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        direccion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        direcciones: [''],
        ref_comercial: [''],
        representanteLegal: [''],
        tipoComision: [''],
        comisionAnticipada: [''],
        aprobacion_credito_automatico: [''],
        solicitudes_de_credito_dia: ['3'],
        activo: [''],
        label: [''],
        icon: ['']
      });
      this.formUsuario = this.fb.group({
        id: [''],
        nodo_id: [''],
        identificacion: [''],
        direccion: [''],
        cargo: [''],
        telefono: [''],
        activo: [''],
        email: [''],
        first_name: [''],
        username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        password: [''],
        password2: [''],
        verify_username: [''],
        verify_identificacion: ['']
      });
      this.formFuncionalidad = this.fb.group({
        id: [''],
        funcionalidad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        funcionPadre: ['']
      });
      this.formComision = this.fb.group({
        id: [''],
        nodo_id: [''],
        proveedorEmpresa_id: [''],
        activo: [''],
        micomision: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        comisionComercio: [''],
        utilidad_comercio: [''],
        utilidad_distribuidor: [''],
        comisionDistribuidor: ['']
      });
      this.formProducto = this.fb.group({
        id: [''],
        empresa_id: [''],
        nom_producto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        valor_producto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        descuento_promosional: [''],
        tipo_producto: [''],
        activo: ['']
      });
      this.formEquipo = this.fb.group({
        id: [''],
        marca: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        serial: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        activo: [''],
        asignado: [''],
        nodo_id: ['']
      });
      this.formEquipoNodo = this.fb.group({
        id: [''],
        nodo_id: [''],
        equipo_id: [''],
        fechaAsignacion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        fechaDevolucion: [''],
        ordenEntrega: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        ordenDevolucion: [''],
        observacionAsignacion: [''],
        observacionDevolucion: ['']
      });
      this.formServicioCategoria = this.fb.group({
        id: [''],
        nombre: ['']
      });
      this.formEmpresa = this.fb.group({
        id: [''],
        catServicio_id: [''],
        nom_empresa: [''],
        imagen: [''],
        activo: ['']
      });
      this.formProveedor = this.fb.group({
        id: [''],
        nombre_prov: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        direccion_prov: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        email_prov: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        telefono_prov: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        activo: ['']
      });
      this.formCodificarProducto = this.fb.group({
        id: [''],
        producto_id: [''],
        proveedor_id: [''],
        codigo_producto: [''],
        activo: ['']
      });
      this.formProveedorEmpresa = this.fb.group({
        id: [''],
        proveedor_id: [''],
        empresa_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        comisionBase: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        activo: ['']
      });
      this.formCreditos = this.fb.group({
        id: [''],
        nodo_id: [''],
        montoAutorizado: [''],
        plazoMaximo: [''],
        montoUtilizado: [''],
        montoDisponible: [''],
        activo: ['']
      });
      this.formBolsas = this.fb.group({
        id: [''],
        nodo_id: [''],
        saldo_disponible: [''],
        utilidad: [''],
        activo: ['']
      });
      this.formTransaccion = this.fb.group({
        id: [''],
        usuario_id: [''],
        nodo_id: [''],
        producto_venta_id: [''],
        tipoServicio: [''],
        tipo_transaccion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        valor: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.min(20000)]],
        soporte: [''],
        numeroAprobacion: [''],
        numeroDestino: [''],
        medioSolicitud: [''],
        medioVenta: [''],
        ultimoSaldo: [''],
        ultimaComision: [''],
        estado: [''],
        estadoPago: [''],
        resultado: [''],
        fecha_aprobacion: [''],
        fecha_pago: [''],
        dias_mora: [''],
        observacion: [''],
        saldo_pendiente_pago: ['']
      });
      this.formZona = this.fb.group({
        id: [''],
        nodo_id: [''],
        nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        activo: ['']
      });
      this.formZonaBarrio = this.fb.group({
        id: [''],
        zona_id: [''],
        barrio_id: [''],
        activo: ['']
      });
      this.formPagos = this.fb.group({
        id: [''],
        transaccion_id: [''],
        abono: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        saldo: [''],
        numero_recibo: [''],
        soporte: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        facturas: [''],
        pagador: [''],
        usuario_id: [''],
        entidad: ['']
      });
      this.formRecoveryPwd = this.fb.group({
        identificacion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]
      });
      this.formVentasRecargas = this.fb.group({
        telefono: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.max(9999999999), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.min(999999999)]],
        tarjeta: [''],
        cedula: [''],
        valor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        matricula: [''],
        email: [''],
        oficina: ['']
      });
      this.formVentasRecargasDirectv = this.fb.group({
        telefono: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        tarjeta: [''],
        cedula: [''],
        valor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        matricula: [''],
        email: [''],
        oficina: ['']
      });
      this.formVentasPines = this.fb.group({
        telefono: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        valor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]
      });
      this.formVentasCertificados = this.fb.group({
        telefono: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        valor: [''],
        matricula: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        oficina: [''],
        direccion: [''],
        noDocumento: [''],
        producto: ['']
      });
      this.formVentasApuestas = this.fb.group({
        celular: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        documento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        valor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]
      });
      this.formVentasSoat = this.fb.group({
        venta_ganancias: [''],
        nodo: [''],
        usuario_mrn: [''],
        producto_venta: [''],
        documento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        producto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        valor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        celular: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        clave: [''],
        usuario: [''],
        nombres: [''],
        apellidos: [''],
        direccion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        municipio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        departamento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        tipo_documento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        email_soat: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        tipo_persona: [''],
        tarifa: [''],
        ValorPrima: [''],
        valor_contribucion: [''],
        valor_runt: [''],
        porcentaje_descuento_electrica: [''],
        id_marca: [''],
        cc: [''],
        chasis: [''],
        cilindraje: [''],
        toneladas: [''],
        motor: [''],
        marca: [''],
        lineaVehiculo: [''],
        placa: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        ocupantes: [''],
        tipo_servicio: [''],
        vin: [''],
        clase_vehiculo_id: [''],
        codVehMinTrans: [''],
        vehiculo: [''],
        linea_vehiculo: [''],
        departamentoMatricula: [''],
        aaaa_modelo: [''],
        tipo_carroceria: [''],
        inicio_vigencia: [''],
        finVigencia: [''],
        tipo_regimen: [''],
        valor_descuento_intermediario: [''],
        responsable_rut: [''],
        valor_descuento_electricos: [''],
        dtoLey2161: [''],
        bolsa_ganancia: [''],
        transaccion_externa: [''],
        canal_transaccion: [''],
        medioVenta: ['']
      });
      this.formVentasRecaudo = this.fb.group({
        convenio: [''],
        telefono: [''],
        referencia: [''],
        valor: ['']
      });
      this.loginForm = this.fb.group({
        id: [''],
        username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
        loggedIn: ['']
      });
    }
  }, {
    key: "llenarformUsuario",
    value: function llenarformUsuario(usuario) {
      this.formUsuario.patchValue({
        id: usuario.id,
        nodo_id: usuario.nodo.id,
        identificacion: usuario.identificacion,
        direccion: usuario.direccion,
        cargo: usuario.cargo,
        telefono: usuario.telefono,
        activo: usuario.activo,
        email: usuario.email,
        first_name: usuario.first_name,
        last_name: usuario.last_name,
        username: usuario.username,
        password: usuario.password,
        password2: ''
      });
    }
  }, {
    key: "jsonToString",
    value: function jsonToString(json) {
      return JSON.stringify(json);
    }
  }, {
    key: "stringToJson",
    value: function stringToJson(array) {
      return array ? JSON.parse(array) : [];
    }
  }, {
    key: "getNodosDirectos",
    value: function getNodosDirectos() {
      var _this = this;

      this.nodosDirectos = [];
      this.api.get('nodo/?nodoPadre=' + this.api.nodoActual['id']).subscribe(function (data) {
        if (data.length) {
          _this.nodosDirectos = data;
        } else {
          _this.nodosDirectos = [];
        }
      });
    }
  }, {
    key: "addDireccion",
    value: function addDireccion(direccion, direcciones) {
      var dir = this.stringToJson(direcciones);
      dir.push(direccion);
      return this.jsonToString(dir);
    }
  }, {
    key: "updatePwdUsuario",
    value: function updatePwdUsuario(usuario) {
      var _this2 = this;

      this.api.update('updatepwd', usuario.id, usuario).subscribe(function (data) {
        if (data) {
          _this2.api.usuario = data;

          _this2.llenarformUsuario(data);

          _this2.mensajeSistema('Su contraseña ha cambiado correctamente');
        }
      });
    }
  }, {
    key: "mensajeSistema",
    value: function mensajeSistema(mensaje) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var toast;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.toastController.create({
                message: mensaje,
                duration: 2000
              });

            case 2:
              toast = _context.sent;
              toast.present();

            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "updateUsuario",
    value: function updateUsuario(usuario) {
      var _this3 = this;

      this.api.update('usuario', usuario.id, usuario).subscribe(function (data) {
        if (data) {
          _this3.storage.get('usuario').then(function (val) {
            if (val != undefined) {
              _this3.storage.set('usuario', JSON.stringify(data));
            }
          });

          _this3.api.usuario = data;

          _this3.llenarformUsuario(data);

          _this3.mensajeSistema('Datos actualizados correctamente');
        }
      });
    }
  }, {
    key: "registrarPuntoDeAcceso",
    value: function registrarPuntoDeAcceso(usuario) {
      var _this4 = this;

      this.api.update('usuario', usuario.id, usuario).subscribe(function (data) {
        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_5__.isUndefined)(data)) {
          _this4.api.usuario = data;
        }
      });
    }
  }, {
    key: "getComisiones",
    value: function getComisiones(nodo) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this5 = this;

        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              this.comisiones = [];
              this.lista_comisiones_venta = [];
              _context2.next = 4;
              return this.presentLoading();

            case 4:
              this.api.get('comision_app_list/?nodo=' + nodo.id).subscribe(function (data) {
                if (!(0,lodash__WEBPACK_IMPORTED_MODULE_5__.isUndefined)(data)) {
                  _this5.comisiones = data;

                  if (nodo.tipoComision == 'CA') {
                    var comiAux = _this5.comisiones.filter(function (item) {
                      return item.nom_empresa == 'Recargas y Paquetes';
                    });

                    _this5.lista_comisiones_venta = _this5.crearArbolComisiones(comiAux.filter(function (item) {
                      return item.nom_empresa.toUpperCase() != 'Directv'.toUpperCase();
                    }));
                    _this5.categoriaSeleccionada = _this5.lista_comisiones_venta[0];

                    _this5.togleVentas(1, true);
                  } else {
                    _this5.lista_comisiones_venta = _this5.crearArbolComisiones(_this5.comisiones.filter(function (item) {
                      return item.logo_empresa;
                    }));
                    _this5.categoriaSeleccionada = '';

                    _this5.togleVentas(0, true);
                  }
                } else {
                  _this5.comisiones = [];
                  _this5.lista_comisiones_venta = [];
                }

                _this5.loadingController.dismiss();
              });

            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "getCatServicio",
    value: function getCatServicio() {
      var _this6 = this;

      this.loadingText = 'Cargando categorias de servicio registradas';
      this.api.get('categoriadeservicio/').subscribe(function (data) {
        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_5__.isUndefined)(data)) {
          _this6.catServicios = data;
        } else {
          _this6.catServicios = [];
        }
      });
    }
  }, {
    key: "getProductosProveedor",
    value: function getProductosProveedor(proveedor_id, empresa_id) {
      var _this7 = this;

      this.loading = true;
      this.productosByProveedorSinTiempoAlAire = [];
      this.productosByProveedor = [];
      this.listaFiltradaProductos = [];
      this.api.get('productos_codificados_movil/?proveedor=' + proveedor_id + '&empresa=' + empresa_id).subscribe(function (data) {
        if (data.length) {
          _this7.productosByProveedor = data;
          _this7.productosByProveedorSinTiempoAlAire = data.filter(function (item) {
            return item.producto.nom_producto != 'Tiempo al aire';
          });
          _this7.listaFiltradaProductos = _this7.productosByProveedorSinTiempoAlAire;
        }

        _this7.loading = false;
      });
    }
  }, {
    key: "getMiCredito",
    value: function getMiCredito() {
      var _this8 = this;

      this.api.get('creditos/?nodo=' + this.api.nodoActual['id']).subscribe(function (data) {
        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_5__.isUndefined)(data)) {
          _this8.Micredito = data[0];
        } else {
          _this8.Micredito = '';
        }
      });
    }
  }, {
    key: "updateNodo",
    value: function updateNodo(nodo) {
      var _this9 = this;

      nodo.direccion = this.addDireccion(nodo.direccion, nodo.direcciones);
      this.api.update('nodo', nodo.id, nodo).subscribe(function (data) {
        _this9.nodoSeleccionado = nodo;
        _this9.verFormEditNodo = false;
        _this9.verFormEditNodoTercero = false;

        _this9.getNodosDirectos();

        _this9.api.get('usuario/?nodo=' + nodo.id).subscribe(function (data) {
          _this9.enviar_mensaje(data[0]['id'], 'Se han modificado algunos datos, para más información comuniquese con su distribuidor.', 'ACTND');
        });
      });
    }
  }, {
    key: "getBolsasDinero",
    value: function getBolsasDinero(nodo) {
      var _this10 = this;

      this.presentLoading();
      this.api.get('bolsa_dinero/?nodo=' + nodo.id).subscribe(function (data) {
        if (data.length) {
          _this10.bolsasDinero = data[0];
        } else {
          _this10.bolsasDinero = [];
        }

        _this10.loadingController.dismiss();
      });
    }
  }, {
    key: "getMisBolsasDinero",
    value: function getMisBolsasDinero() {
      var _this11 = this;

      this.api.get('bolsa_dinero_app/?nodo=' + this.api.nodoActual['id']).subscribe(function (data) {
        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_5__.isUndefined)(data)) {
          if (data.length) {
            _this11.misBoslsasDinero = data[0];
          } else {
            _this11.misBoslsasDinero = [];
          }
        } else {
          _this11.misBoslsasDinero = [];
        }
      });
    }
  }, {
    key: "getSolicitudesSaldo",
    value: function getSolicitudesSaldo() {
      var _this12 = this;

      this.loading = true;
      this.api.get('solicitudes_saldo/?idPadre=' + this.api.nodoActual['id']).subscribe(function (data) {
        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_5__.isUndefined)(data)) {
          if (data.length) {
            _this12.solicitudesSaldo = data;

            _this12.getMisBolsasDinero();
          } else {
            _this12.solicitudesSaldo = [];
            _this12.loading = false;
          }
        }
      });
    }
  }, {
    key: "getMisSolicitudesSaldo",
    value: function getMisSolicitudesSaldo() {
      var _this13 = this;

      this.loading = true;
      this.api.get('mis_solicitudes_saldo_movil/?nodo=' + this.api.nodoActual['id']).subscribe(function (data) {
        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_5__.isUndefined)(data)) {
          if (data.length) {
            _this13.misSolicitudesSaldo = data;

            _this13.getMisBolsasDinero();
          } else {
            _this13.misSolicitudesSaldo = [];
          }
        }

        _this13.loading = false;
      });
    }
  }, {
    key: "addTransaccionTercero",
    value: function addTransaccionTercero() {
      var _this14 = this;

      this.presentLoading();
      this.api.add('transaccion', this.formTransaccion.value).subscribe(function (data) {
        _this14.transaccionSeleccionada = data;

        _this14.getSolicitudesSaldo();

        _this14.formTransaccion.reset();

        _this14.verSubirArchivo = data.tipo_transaccion == 'SSC' ? true : false;
        _this14.verFormTransaccionTercero = false;

        _this14.loadingController.dismiss();
      });
    }
  }, {
    key: "getMunicipios",
    value: function getMunicipios() {
      var _this15 = this;

      this.api.get('municipio/').subscribe(function (data) {
        if (data.length) {
          _this15.municipios = data;
          _this15.municipiosFiltrados = data;
        } else {
          _this15.municipios = [];
        }
      });
    }
  }, {
    key: "getFacturasMora",
    value: function getFacturasMora(nodo, showAuthorization) {
      var _this16 = this;

      this.facturasMora = [];
      this.api.get('facturas_mora/?nodo=' + nodo.id).subscribe(function (data) {
        if (data.length) {
          _this16.facturasMora = data;
        } else {
          if (nodo.mora) {
            nodo.mora = false;

            _this16.updateNodo(nodo);
          }
        }
      });
    }
  }, {
    key: "getCartera",
    value: function getCartera(nodo) {
      var _this17 = this;

      this.cartera = [];
      this.api.get('caretra/?nodo=' + nodo.id).subscribe(function (data) {
        if (data != undefined) {
          if (data.length) {
            _this17.cartera = data;
          }
        }
      });
    }
  }, {
    key: "crearArbolComisiones",
    value: function crearArbolComisiones(data) {
      var lista = [];

      var _iterator = (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data),
          _step;

      try {
        var _loop = function _loop() {
          var item = _step.value;

          if (!lista.length) {
            lista.push({
              id: item.id,
              nom_categoria: item.nom_categoria,
              empresas: []
            });
          } else {
            if (!lista.filter(function (l) {
              return l.nom_categoria == item.nom_categoria;
            }).length) {
              lista.push({
                id: item.id,
                nom_categoria: item.nom_categoria,
                empresas: []
              });
            }
          }
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      data.forEach(function (item) {
        var categoria = lista.find(function (l) {
          return l.nom_categoria === item.nom_categoria;
        });

        if (categoria) {
          categoria.empresas.push(item);
        }
      });
      return lista;
    }
  }, {
    key: "enviar_mensaje",
    value: function enviar_mensaje(usuario_id, mensaje, accion) {
      var obj = new Object();
      obj['usuario_id'] = usuario_id; //Usuario receptor del mensaje

      obj['mensaje'] = mensaje;
      obj['icono'] = 'assets/layout/images/logo-mirage@2x.png';
      obj['accion'] = accion;
      this.api.post_soap('enviar_mensaje', obj).subscribe(function (data) {});
    }
  }, {
    key: "getNodoById",
    value: function getNodoById(nodo) {
      var _this18 = this;

      this.api.get('nodo/?id=' + nodo.id).subscribe(function (data) {
        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_5__.isUndefined)(data)) {
          if (data.length) {
            _this18.api.nodoActual = data[0];
            _this18.nodoSeleccionado = data[0];

            _this18.storage.get('usuario').then(function (val) {
              if (val != undefined) {
                var usuario_aux = JSON.parse(val);
                usuario_aux.nodo = _this18.api.nodoActual;

                _this18.storage.set('usuario', JSON.stringify(usuario_aux));
              }
            });

            _this18.router.navigate(['inicio']);
            /*if(!this.api.nodoActual['mora']){
              this.router.navigate(['inicio'])
            }else {
              this.getFacturasMora(this.api.nodoActual,false)
              this.router.navigate(['/mora'])
            }*/

          }
        }
      });
    }
  }, {
    key: "venderRecargaVer2",
    value: function venderRecargaVer2(venta_ganancias) {
      var bolsa = venta_ganancias ? this.misBoslsasDinero.utilidad : this.misBoslsasDinero.saldo_disponible;

      if (this.obj_venta.valor <= bolsa) {
        var producto;

        if (this.productoCodificadoSeleccionado) {
          producto = null;
          producto = this.productoCodificadoSeleccionado;
        } else {
          producto = null;
          producto = this.productosByProveedor.filter(function (item) {
            return item.producto.nom_producto == 'Tiempo al aire';
          })[0];
        }

        var mensaje = parseInt(this.obj_venta.valor) >= 40000 ? 'Esta a punto de realizar una venta de un valor alto, ' + 'recuerde que usted puede ser victima de ESTAFA. ' + 'Si ud confia en este cliente y cree que este no es su caso puede ' + 'continuar vendiendo recarga de: $' + this.obj_venta.valor + ' al numero ' + this.obj_venta.telefono : 'Desea realizar la recarga de: $' + this.obj_venta.valor + ' al numero ' + this.obj_venta.telefono + (venta_ganancias ? ' desde sus ganancias' : '') + ' ?';
        this.RECARGASWS = {
          nodo: this.api.nodoActual['id'],
          usuario_mrn: this.api.usuario['id'],
          producto_venta: producto.id,
          producto: producto.codigo_producto,
          valor: parseInt(this.obj_venta.valor),

          /*usuario: '00053026',
          password: '4Tqa300M',*/
          celular: this.obj_venta.telefono,
          usuario: this.USUARIO_MSV,
          password: this.PWD_MVS,
          canal_transaccion: 2,
          transaccion_externa: 0,
          documento: '1088310088',
          oficina: '',
          matricula: '',
          email: '',
          recargas_multiproducto: 1,
          token: '',
          nombre: '',
          cod_municipio: '',
          cant_sorteos: 0,
          cant_cartones: 0,
          bolsa_ganancia: '',
          venta_ganancias: venta_ganancias,
          medioVenta: 'Movil',
          tipo_datos: this.api.tipo_datos,
          tipo_red: this.api.tipo_red,
          app_ver: this.APP_VERSION
        };
        this.recargas_ver2_ms(this.RECARGASWS);
      } else {
        alert('Su saldo es insufuciente para realizar esta recarga, por favor solicite saldo.');
      }
    }
  }, {
    key: "recargas_ms",
    value: function recargas_ms(datos) {
      var _this19 = this;

      this.api.post_soap('recargas_ms', datos).subscribe(function (data) {
        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_5__.isUndefined)(data)) {
          var respuesta = data;

          _this19.getMisBolsasDinero();

          if (respuesta == '001') {
            alert('Transaccion exitosa!');
          } else {
            alert(respuesta);
          }

          _this19.activeState = [true, false];

          _this19.formVentasRecargas.reset();

          _this19.formVentasRecargasDirectv.reset();

          _this19.formVentasPines.reset();

          _this19.formVentasCertificados.reset();

          _this19.empresaSeleccionada = '';
          _this19.categoriaSeleccionada = '';
          _this19.productoCodificadoSeleccionado = '';
          _this19.messageSell = [];

          _this19.loadingController.dismiss();

          _this19.obj_venta = '';

          _this19.getLastVentasByNodo();

          _this19.router.navigate(['inicio']);
        } else {
          alert('No se ha podido realizar la transacción, por favor intente mas tarde.');

          _this19.loadingController.dismiss();
        }

        _this19.modalController.dismiss({
          'dismissed': true
        });
      });
    }
  }, {
    key: "recargas_ver2_ms",
    value: function recargas_ver2_ms(datos) {
      var _this20 = this;

      this.api.post_soap('recargas_ver2_ms', datos).subscribe(function (data) {
        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_5__.isUndefined)(data)) {
          var respuesta = JSON.parse(data);

          if (respuesta.codigo == '001') {
            _this20.trans_resultado_venta = respuesta.data;

            _this20.present_resumen_ventas();

            _this20.activeState = [true, false];

            _this20.formVentasRecargas.reset();

            _this20.formVentasRecargasDirectv.reset();

            _this20.formVentasPines.reset();

            _this20.formVentasCertificados.reset();

            _this20.empresaSeleccionada = '';
            _this20.categoriaSeleccionada = '';
            _this20.productoCodificadoSeleccionado = '';
            _this20.messageSell = [];

            _this20.loadingController.dismiss();

            _this20.obj_venta = '';

            _this20.getMisBolsasDinero(); //this.getLastVentasByNodo()


            _this20.router.navigate(['inicio']);
          } else {
            alert(respuesta.mensaje);
          }
        } else {
          alert('No se ha podido realizar la transacción, por favor intente mas tarde.');
        }

        _this20.loadingController.dismiss();

        _this20.modalController.dismiss({
          'dismissed': true
        });
      });
    }
  }, {
    key: "present_resumen_ventas",
    value: function present_resumen_ventas() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var modal;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.modalController.create({
                component: _resultado_venta_recarga_resultado_venta_recarga_component__WEBPACK_IMPORTED_MODULE_6__.ResultadoVentaRecargaComponent
              });

            case 2:
              modal = _context3.sent;
              _context3.next = 5;
              return modal.present();

            case 5:
              return _context3.abrupt("return", _context3.sent);

            case 6:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "recargas_certificado_ms",
    value: function recargas_certificado_ms(datos) {
      var _this21 = this;

      this.api.post_soap('recargas_certificado_ms', datos).subscribe(function (data) {
        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_5__.isUndefined)(data)) {
          var respuesta = JSON.parse(data);

          _this21.getMisBolsasDinero();

          if (respuesta.codigo == '001') {
            alert('Transaccion exitosa!');
          } else {
            alert(respuesta.descripcion);
          }

          _this21.activeState = [true, false];

          _this21.formVentasRecargas.reset();

          _this21.formVentasRecargasDirectv.reset();

          _this21.formVentasPines.reset();

          _this21.formVentasCertificados.reset();

          _this21.empresaSeleccionada = '';
          _this21.categoriaSeleccionada = '';
          _this21.productoCodificadoSeleccionado = '';
          _this21.messageSell = [];

          _this21.loadingController.dismiss();

          _this21.obj_venta = '';

          _this21.getLastVentasByNodo();

          _this21.router.navigate(['inicio']);
        } else {
          alert('La transaccion fallo debido a un error interno, comuniquese con MRN Colombia.');

          _this21.loadingController.dismiss();
        }

        _this21.modalController.dismiss({
          'dismissed': true
        });
      });
    }
  }, {
    key: "consultarCertificado",
    value: function consultarCertificado() {
      if (confirm('Desea realizar la consulta de el predio N°: ' + this.formVentasCertificados.value['matricula'] + ' ?')) {
        var consulta_certificado = {
          oficina: this.formVentasCertificados.value['oficina'],
          matricula: this.formVentasCertificados.value['matricula'],
          usuario: this.USUARIO_MSV,
          password: this.PWD_MVS
        };
        this.consulta_certificado_ms(consulta_certificado);
      }
    }
  }, {
    key: "consulta_certificado_ms",
    value: function consulta_certificado_ms(datos) {
      var _this22 = this;

      this.loading = true;
      this.api.post_soap('consulta_certificado_ms', datos).subscribe(function (data) {
        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_5__.isUndefined)(data)) {
          _this22.formVentasCertificados.patchValue({
            direccion: data,
            valor: _this22.productoCodificadoSeleccionado.producto.valor_producto
          });
        }

        _this22.loading = false;
      });
    }
  }, {
    key: "venderCertificado",
    value: function venderCertificado(venta_ganancias) {
      var _this23 = this;

      //let valor_venta = this.formVentasCertificados.value['valor']
      var oficina = this.formVentasCertificados.value['oficina'];
      var matricula = this.formVentasCertificados.value['matricula'];
      var telefono = this.formVentasCertificados.value['telefono'];
      var noDocumento = this.formVentasCertificados.value['noDocumento'];
      var email = this.formVentasCertificados.value['email'];
      var bolsa = venta_ganancias ? this.misBoslsasDinero.utilidad : this.misBoslsasDinero.saldo_disponible;
      var producto;

      if (this.empresaSeleccionada.nom_empresa == 'RUNT') {
        producto = this.productosByProveedorSinTiempoAlAire.filter(function (item) {
          return item.codigo_producto == 1382;
        })[0];
      } else {
        producto = this.productosByProveedorSinTiempoAlAire.filter(function (item) {
          return item.codigo_producto == _this23.formVentasCertificados.value['oficina'];
        })[0];
      }

      var valor_venta = producto.producto.valor_producto;

      if (valor_venta <= bolsa) {
        if (confirm('Desea realizar la venta del certificado con matricula N°: ' + matricula + ' por valor de: ' + (this.empresaSeleccionada.nom_empresa == 'RUNT') ? this.formVentasCertificados.value['valor'] : 0)) {
          this.RECARGASWS = {
            nodo: this.api.nodoActual['id'],
            usuario_mrn: this.api.usuario['id'],
            producto_venta: producto.id,
            producto: this.empresaSeleccionada.nom_empresa == 'RUNT' ? producto.codigo_producto : 1290,
            valor: valor_venta,
            celular: telefono,
            usuario: this.USUARIO_MSV,
            password: this.PWD_MVS,
            canal_transaccion: 2,
            transaccion_externa: 0,
            documento: noDocumento,
            oficina: oficina,
            matricula: matricula,
            email: email,
            recargas_multiproducto: 1,
            token: '',
            nombre: '',
            cod_municipio: '',
            cant_sorteos: 0,
            cant_cartones: 0,
            bolsa_ganancia: '',
            venta_ganancias: venta_ganancias,
            medioVenta: 'Movil'
          };
          this.recargas_certificado_ms(this.RECARGASWS);
        }
      } else {
        this.mensajes('Su saldo es insufuciente para realizar esta recarga, por favor solicite saldo.');
      }
    }
  }, {
    key: "venderApuestas",
    value: function venderApuestas(venta_ganancias) {
      var valor_venta = this.formVentasApuestas.value['valor'];
      var telefono = this.formVentasApuestas.value['celular'];
      var noDocumento = this.formVentasApuestas.value['documento'];
      var bolsa = venta_ganancias ? this.misBoslsasDinero.utilidad : this.misBoslsasDinero.saldo_disponible;

      if (valor_venta <= bolsa) {
        var producto = this.productosByProveedorSinTiempoAlAire[0];

        if (confirm('Desea realizar la recarga de apuesta al numero N°: ' + telefono + ' ' + 'por valor de: ' + valor_venta + ' ?')) {
          this.RECARGASWS = {
            nodo: this.api.nodoActual['id'],
            usuario_mrn: this.api.usuario['id'],
            producto_venta: producto.id,
            producto: producto.codigo_producto,
            valor: parseInt(valor_venta),
            celular: telefono,
            usuario: this.USUARIO_MSV,
            password: this.PWD_MVS,
            canal_transaccion: 2,
            transaccion_externa: 0,
            documento: noDocumento,
            oficina: '',
            matricula: '',
            email: '',
            recargas_multiproducto: 1,
            token: '',
            nombre: '',
            cod_municipio: '',
            cant_sorteos: 0,
            cant_cartones: 0,
            bolsa_ganancia: '',
            venta_ganancias: venta_ganancias,
            medioVenta: 'Movil'
          };
          this.recargas_ver2_ms(this.RECARGASWS);
        }
      } else {
        alert('Su saldo es insufuciente para realizar esta recarga, por favor solicite saldo.');
      }
    }
  }, {
    key: "venderPines",
    value: function venderPines(venta_ganancias) {
      var valor_venta = this.formVentasPines.value['valor'];
      var num_celular = this.formVentasPines.value['telefono'];
      var email = this.formVentasPines.value['email'];
      var bolsa = venta_ganancias ? this.misBoslsasDinero.utilidad : this.misBoslsasDinero.saldo_disponible;

      if (valor_venta <= bolsa) {
        if (confirm('Desea vender ' + this.productoCodificadoSeleccionado.producto.nom_producto + ' ?')) {
          this.RECARGASWS = {
            nodo: this.api.nodoActual['id'],
            usuario_mrn: this.api.usuario['id'],
            producto_venta: this.productoCodificadoSeleccionado.id,
            producto: this.productoCodificadoSeleccionado.codigo_producto,
            valor: parseInt(valor_venta),
            celular: num_celular,
            usuario: this.USUARIO_MSV,
            password: this.PWD_MVS,
            canal_transaccion: 2,
            transaccion_externa: 0,
            documento: '',
            oficina: '',
            matricula: '',
            email: email,
            recargas_multiproducto: 1,
            token: '',
            nombre: '',
            cod_municipio: '',
            cant_sorteos: 0,
            cant_cartones: 0,
            bolsa_ganancia: '',
            venta_ganancias: venta_ganancias,
            medioVenta: 'Movil'
          };
          this.recargas_ms(this.RECARGASWS);
        }
      } else {
        this.mensajes('Su saldo es insufuciente para realizar esta venta, por favor solicite saldo.');
      }
    }
  }, {
    key: "formatear_direccion",
    value: function formatear_direccion(dir) {
      return dir.replace(/[^a-zA-Z0-9]/g, ' ');
    }
  }, {
    key: "venderSoat",
    value: function venderSoat(venta_ganancias) {
      var _this24 = this;

      var valor_venta = this.formVentasPines.value['valor'];
      var num_celular = this.formVentasPines.value['telefono'];
      var email = this.formVentasPines.value['email'];

      if (valor_venta <= this.misBoslsasDinero.saldo_disponible) {
        if (confirm('Desea vender ' + this.productoCodificadoSeleccionado.producto.nom_producto + ' ?')) {
          this.formVentasSoat.patchValue({
            direccion: this.formatear_direccion(this.formVentasSoat.value['direccion'])
          });
          this.api.post_soap('recargar_soat_ms', this.formVentasSoat.value).subscribe(function (data) {
            if (!(0,lodash__WEBPACK_IMPORTED_MODULE_5__.isUndefined)(data)) {
              if (data == '001') {
                _this24.mensajes('El Soat se vendio exitosamente');

                _this24.activeState = [true, false];

                _this24.formVentasSoat.reset();

                _this24.formVentasPines.reset();

                _this24.formVentasCertificados.reset();

                _this24.empresaSeleccionada = '';
                _this24.categoriaSeleccionada = '';
                _this24.productoCodificadoSeleccionado = '';
                _this24.messageSell = [];
              } else {
                _this24.mensajes(data);
              }
            }
          });
        }
      } else {
        this.mensajes('Su saldo es insufuciente para realizar esta venta, por favor solicite saldo.');
      }
    }
  }, {
    key: "getLastVentasByNodo",
    value: function getLastVentasByNodo(state) {
      var _this25 = this;

      this.presentLoading();
      this.ventas_by_nodo = [];
      this.api.get('ultimas_ventas_app/?nodo=' + this.api.nodoActual['id']).subscribe(function (data) {
        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_5__.isUndefined)(data)) {
          if (data.length) {
            _this25.verUltimasTransacciones = true;
            _this25.ventas_by_nodo = data;
            _this25.listaFiltradaVentas = data;
          }
        }

        _this25.loadingController.dismiss();
      });
    }
  }, {
    key: "togleVentas",
    value: function togleVentas(index, state) {
      this.activeState[index] = state;
    }
  }, {
    key: "get_ventas_by_celular",
    value: function get_ventas_by_celular(value) {
      var _this26 = this;

      this.loading = true;
      this.ventas_by_nodo = [];
      this.api.get('ventas_by_celular/?celular=' + value + '&nodo=' + this.api.nodoActual['id']).subscribe(function (data) {
        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_5__.isUndefined)(data)) {
          if (data.length) {
            _this26.ventas_by_nodo = data;
          } else {
            _this26.ventas_by_nodo = [];
          }
        }

        _this26.loading = false;
      });
    }
  }, {
    key: "mensajes",
    value: function mensajes(mensaje) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var toast;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.toastController.create({
                message: mensaje,
                duration: 2000,
                position: 'bottom'
              });

            case 2:
              toast = _context4.sent;
              toast.present();

            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
    }
  }, {
    key: "get_ventas_by_fecha",
    value: function get_ventas_by_fecha(fi, ff) {
      var _this27 = this;

      this.loading = true;
      this.total_consulta_ventas = 0;
      this.total_consulta_ganancias = 0;
      this.ventas_by_fecha = [];
      this.api.get('ventas_by_fecha/?fechaInicial=' + fi + '&fechaFinal=' + ff + '&nodo=' + this.api.nodoActual['id']).subscribe(function (data) {
        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_5__.isUndefined)(data)) {
          if (data.length) {
            _this27.ventas_by_fecha = _this27.crearArbolVentas(data);

            var _iterator2 = (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var venta = _step2.value;
                if (venta.codigo_resultado == '001' || venta.codigo_resultado == '00') _this27.total_consulta_ventas += venta.valor;
                if (venta.codigo_resultado == '001' || venta.codigo_resultado == '00') _this27.total_consulta_ganancias += parseInt(venta.ganancia);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          } else {
            _this27.ventas_by_fecha = [];

            _this27.mensajes('No se han encontrado registros para esta fecha');
          }
        }

        _this27.loading = false;
      });
    }
  }, {
    key: "get_solicitudes_by_fecha",
    value: function get_solicitudes_by_fecha(fechai, fechaf) {
      var _this28 = this;

      this.loading = true;
      this.total_consulta_ventas = 0;
      this.misSolicitudesSaldo = [];
      this.total_sol_contado = 0;
      this.total_sol_credito = 0;
      this.total_sol_credito_pend = 0;
      this.api.get('solicitudes_by_fecha/?fechai=' + fechai + '&fechaf=' + fechaf + '&nodo=' + this.api.nodoActual['id']).subscribe(function (data) {
        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_5__.isUndefined)(data)) {
          if (data.length) {
            _this28.misSolicitudesSaldo = _this28.crearArbolSolicitudesSaldo(data);

            var _iterator3 = (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_this28.misSolicitudesSaldo),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var transaccion = _step3.value;

                var _iterator4 = (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(transaccion.items),
                    _step4;

                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var solicitud = _step4.value;

                    if (transaccion.label == 'SSC') {
                      _this28.total_sol_contado += solicitud.valor;
                    } else {
                      if (solicitud.estado == 'Pagado' && solicitud.estadoPago == 'Pago aceptado') {
                        _this28.total_sol_credito += solicitud.valor;
                      }

                      if (solicitud.estado == 'Aprobado' && solicitud.estadoPago == 'Pendiente') {
                        _this28.total_sol_credito_pend += solicitud.valor;
                      }
                    }
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          } else {
            _this28.mensajes('No se han encontrado registros para esta fecha');

            _this28.misSolicitudesSaldo = [];
          }
        }

        _this28.loading = false;
      });
    }
  }, {
    key: "get_pagos_by_fecha",
    value: function get_pagos_by_fecha(fecha, fecha2) {
      var _this29 = this;

      this.loading = true;
      this.pagos_by_fecha = [];
      this.api.get('pagos_by_fecha/?fecha=' + fecha + '&fecha2=' + fecha2 + '&nodo=' + this.api.nodoActual['id']).subscribe(function (data) {
        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_5__.isUndefined)(data)) {
          if (data.length) {
            _this29.pagos_by_fecha = _this29.crearArbolPagos(data);
          } else {
            _this29.mensajes('No se han encontrado registros para esta fecha');

            _this29.pagos_by_fecha = [];
          }
        }

        _this29.loading = false;
      });
    }
  }, {
    key: "crearArbolPagos",
    value: function crearArbolPagos(data) {
      var lista = [];

      var _iterator5 = (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data),
          _step5;

      try {
        var _loop2 = function _loop2() {
          var item = _step5.value;

          if (!lista.length) {
            lista.push({
              transaccion: item.transaccion,
              items: []
            });
          } else {
            if (!lista.filter(function (l) {
              return l.transaccion.id == item.transaccion.id;
            }).length) {
              lista.push({
                transaccion: item.transaccion,
                items: []
              });
            }
          }
        };

        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          _loop2();
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      var _iterator6 = (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data),
          _step6;

      try {
        var _loop3 = function _loop3() {
          var item = _step6.value;
          lista.filter(function (l) {
            return l.transaccion.id == item.transaccion.id;
          })[0]['items'].push(item);
        };

        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          _loop3();
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      return lista;
    }
  }, {
    key: "crearArbolVentas",
    value: function crearArbolVentas(data) {
      var lista = [];

      var _iterator7 = (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data),
          _step7;

      try {
        var _loop4 = function _loop4() {
          var item = _step7.value;

          if (!lista.length) {
            lista.push({
              data: item,
              label: item.producto_venta.producto.empresa.nom_empresa,
              items: []
            });
          } else {
            if (!lista.filter(function (l) {
              return l.label == item.producto_venta.producto.empresa.nom_empresa;
            }).length) {
              lista.push({
                data: item,
                label: item.producto_venta.producto.empresa.nom_empresa,
                items: []
              });
            }
          }
        };

        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          _loop4();
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      var _iterator8 = (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data),
          _step8;

      try {
        var _loop5 = function _loop5() {
          var item = _step8.value;
          lista.filter(function (l) {
            return l.label == item.producto_venta.producto.empresa.nom_empresa;
          })[0]['items'].push({
            label: item.producto_venta.producto.empresa.nom_empresa,
            info: item
          });
        };

        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          _loop5();
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }

      return lista;
    }
  }, {
    key: "crearArbolSolicitudesSaldo",
    value: function crearArbolSolicitudesSaldo(data) {
      var lista = [];

      var _iterator9 = (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data),
          _step9;

      try {
        var _loop6 = function _loop6() {
          var item = _step9.value;

          if (!lista.length) {
            lista.push({
              label: item.tipo_transaccion,
              items: []
            });
          } else {
            if (!lista.filter(function (l) {
              return l.label == item.tipo_transaccion;
            }).length) {
              lista.push({
                label: item.tipo_transaccion,
                items: []
              });
            }
          }
        };

        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          _loop6();
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }

      var _iterator10 = (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data),
          _step10;

      try {
        var _loop7 = function _loop7() {
          var item = _step10.value;
          lista.filter(function (l) {
            return l.label == item.tipo_transaccion;
          })[0]['items'].push(item);
        };

        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          _loop7();
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }

      return lista;
    }
  }, {
    key: "calcular_totales",
    value: function calcular_totales(items) {
      var total = 0;

      var _iterator11 = (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(items),
          _step11;

      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var item = _step11.value;

          if (item.info.codigo_resultado == '001' || item.info.codigo_resultado == '00') {
            total += item.info.valor;
          }
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }

      return total;
    }
  }, {
    key: "calcular_totales_ganancias",
    value: function calcular_totales_ganancias(items) {
      var total = 0;

      var _iterator12 = (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(items),
          _step12;

      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var item = _step12.value;

          if (item.info.codigo_resultado == '001' || item.info.codigo_resultado == '00') {
            total += parseInt(item.info.ganancia);
          }
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }

      return total;
    }
  }, {
    key: "presentLoading",
    value: function presentLoading() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var loading;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.loadingController.create({
                spinner: 'lines-sharp',
                message: 'Un momento por favor...' //duration: 60000

              });

            case 2:
              loading = _context5.sent;
              _context5.next = 5;
              return loading.present();

            case 5:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
    }
  }, {
    key: "presentLoadingVentas",
    value: function presentLoadingVentas() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var loading;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return this.loadingController.create({
                spinner: 'lines-sharp',
                message: 'Esperando respuesta del proveedor...' //duration: 60000

              });

            case 2:
              loading = _context6.sent;
              _context6.next = 5;
              return loading.present();

            case 5:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
    }
  }, {
    key: "pagarFacturasPendientesRed",
    value: function pagarFacturasPendientesRed(facturas) {
      var _this30 = this;

      if (this.formPagos.value['abono'] > this.totalFacturasAPagar) {
        this.formTransaccion.patchValue({
          nodo_id: this.api.nodoActual['id'],
          usuario_id: this.api.usuario['id'],
          tipo: 'Solicitud de saldo',
          tipoServicio: this.api.nodoActual['comisionAnticipada'] ? 'CA' : 'CV',
          estado: 'Pendiente',
          ultimoSaldo: 0,
          dias_mora: 0,
          fecha_aprobacion: null,
          fecha_pago: null,
          valor: this.formPagos.value['abono'] - this.totalFacturasAPagar,
          tipo_transaccion: 'SSC',
          medioSolicitud: 'Telefono',
          soporte: this.formPagos.value['soporte'],
          saldo_pendiente_pago: 0
        });
        this.addTransaccionTercero();
        this.formPagos.patchValue({
          facturas: JSON.stringify(facturas),
          abono: this.totalFacturasAPagar,
          pagador: this.api.nodoActual['id'],
          usuario_id: this.api.usuario['id']
        });
      } else {
        this.formPagos.patchValue({
          facturas: JSON.stringify(facturas),
          pagador: this.api.nodoActual['id'],
          usuario_id: this.api.usuario['id']
        });
      }

      this.presentLoading();
      this.api.post_soap('pagar_facturas_revision', this.formPagos.value).subscribe(function (data) {
        if (data != undefined) {
          _this30.formPagos.reset();

          _this30.facturasSeleccionadas = [];
          _this30.totalFacturasAPagar = 0;

          _this30.modalController.dismiss();

          _this30.getFacturasMora(_this30.api.nodoActual, false);

          _this30.getCartera(_this30.api.nodoActual);

          if (_this30.api.nodoActual['mora']) {
            _this30.router.navigate(['/cartera']);
          }
        }

        _this30.loadingController.dismiss();
      });
    }
    /*****************************************************PARCTISISTEMAS**********************************************/

  }, {
    key: "get_convenios_practisistemas",
    value: function get_convenios_practisistemas(parametro_busqueda) {
      var _this31 = this;

      //this.presentLoading()
      if (parametro_busqueda.length >= 3) {
        var parametros = {
          "idcomercio": this.USER_PRACTI,
          "claveventa": this.PWD_PRACTI,
          "tipoConsulta": "convenios_consulta",
          "data": {
            "tipo": "0",
            "key": parametro_busqueda
          },
          "idTrx": "1",
          "end_point": "preConsulta"
        };
        this.api.post_soap('consulta_convenios_practi', parametros).subscribe(function (datos) {
          _this31.convenios = [];
          var object = JSON.parse(datos['data']['convenios']);

          for (var property in object) {
            _this31.convenios.push(object[property]);
          } //this.loadingController.dismiss()

        });
      } else {
        this.convenios = [];
      }
    }
  }, {
    key: "consultar_referencia",
    value: function consultar_referencia(ref) {
      var _this32 = this;

      var parametros = {};
      var referencia = ref ? ref : this.formVentasRecaudo.value['referencia'];

      if (referencia) {
        this.presentLoading();

        if (referencia.toString().length < 12 && this.convenio_seleccionado) {
          parametros = {
            "idcomercio": this.USER_PRACTI,
            "claveventa": this.PWD_PRACTI,
            "tipoConsulta": "consultaValorConvRef",
            "data": {
              "idConv": this.convenio_seleccionado.id,
              "extConvenio": referencia
            },
            "idTrx": "1",
            "end_point": "preConsulta"
          };
        } else {
          this.convenio_seleccionado = undefined;
          parametros = {
            "idcomercio": this.USER_PRACTI,
            "claveventa": this.PWD_PRACTI,
            "tipoConsulta": "verifyBillEan",
            "data": {
              "eanbill": referencia
            },
            "idTrx": "1",
            "end_point": "preConsulta"
          };
        }

        this.api.post_soap('consulta_referencia_practi', parametros).subscribe(function (datos) {
          var respuesta = JSON.parse(datos);

          if (respuesta['data']['data']['reply'] == 'ok' && respuesta['codigo'] == '00') {
            _this32.factura_consultada = respuesta['data']['data']; // console.log( this.factura_consultada)
          } else {
            alert(respuesta['data']['data']['nombre'] ? respuesta['data']['data']['nombre'] : respuesta['data']['data']['reply']);
            _this32.convenio_seleccionado = '';

            _this32.formVentasRecaudo.reset();

            _this32.factura_consultada = '';
          }

          _this32.loadingController.dismiss();
        });
      } else {
        alert('Por favor digite una referencia o escanee el codigo de barras.');
      }
    }
  }, {
    key: "pagar_factura",
    value: function pagar_factura(venta_ganancias) {
      var _this33 = this;

      var producto = this.productosByProveedorSinTiempoAlAire[0];
      var tipo_convenio = '';

      if (this.convenio_seleccionado) {
        tipo_convenio = this.convenio_seleccionado.tipo == '0' ? '667' : '721';
      } else {
        tipo_convenio = this.factura_consultada.tipo == '0' ? '667' : '721';
      }

      var parametros = {
        "idcomercio": this.USER_PRACTI,
        "claveventa": this.PWD_PRACTI,
        "celular": this.formVentasRecaudo.value['telefono'],
        "operador": "fc",
        "valor": this.formVentasRecaudo.value['valor'],
        "jsonAdicional": {
          "idPre": this.factura_consultada.idPre
        },
        "idtrans": "1",
        "end_point": "pracRec",
        "venta_ganancias": venta_ganancias,
        "nodo": this.api.nodoActual['id'],
        "usuario_mrn": this.api.usuario['id'],
        "producto_venta": tipo_convenio,
        "referencia": this.factura_consultada.referencia,
        "medioVenta": 'Movil',
        "tipo_datos": this.api.tipo_datos,
        "tipo_red": this.api.tipo_red,
        "app_ver": this.APP_VERSION
      };
      this.api.post_soap('pago_factura_practi', parametros).subscribe(function (datos) {
        var respuesta = JSON.parse(datos);

        if (respuesta.codigo == '00') {
          _this33.trans_resultado_venta = respuesta.data;
          _this33.factura_pagada = datos;

          _this33.present_resumen_ventas();

          _this33.getMisBolsasDinero();
        } else {
          alert(respuesta.mensaje);
        }

        _this33.loadingController.dismiss();

        _this33.modalController.dismiss({
          'dismissed': true
        });
      });
    }
    /********************************************************************************************************************/

  }, {
    key: "cancelartVenta",
    value: function cancelartVenta() {
      this.router.navigate(['/inicio']);
    }
  }, {
    key: "login_actions",
    value: function login_actions(usuario) {
      this.teclado_show = true;
      this.api.usuario = usuario;

      if (this.loginForm.value['loggedIn']) {
        this.storage.set('usuario', JSON.stringify(usuario));
      }

      this.api.nodoActual = usuario['nodo'];
      this.api.usuario['puntoAcceso'] = this.tokenMessage;

      if (this.api.nodoActual['tipo'] == 'Comercio') {
        this.getComisiones(this.api.nodoActual);
        this.getMisBolsasDinero();
        this.router.navigate(['inicio']);
      } else {
        this.mensajes('El usuario que esta intentando ingresar es de tipo distribuidor, ' + 'en MRN Colombia tenemos otra aplicacion especializada para usted.');
      }

      this.registrarPuntoDeAcceso(this.api.usuario);
    }
  }, {
    key: "separadorDeMiles",
    value: function separadorDeMiles(numero) {
      if (numero) {
        // Convierto el número a string.
        var str = numero.toString(); // Aquí almacenaremos los resultados.

        var resultado = ""; // Recorremos el string con for "str.length" veces.

        for (var i = 0; i < str.length; i++) {
          // Cada número, lo concatenamos a "resultado".
          resultado += str[i]; // y luego de concatenar el número, verifico si el iterador es un múltiplo de 3.
          // ponemos "i < str.length - 1" para evitar que el punto se agregue al final del string.

          if ((str.length - i - 1) % 3 === 0 && i < str.length - 1) {
            resultado += ".";
          }
        }

        return resultado;
      } else {
        return 0;
      }
    }
  }, {
    key: "imprimir_soporte",
    value: function imprimir_soporte(venta) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var nom_prod, nom_empresa, fecha, recibo, _yield$Print$print, value;

        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              nom_prod = venta.nom_producto ? venta.nom_producto : venta.producto_venta.producto.nom_producto;
              nom_empresa = venta.nombre_empresa ? venta.nombre_empresa : venta.producto_venta.producto.empresa.nom_empresa;
              fecha = moment__WEBPACK_IMPORTED_MODULE_4__(venta.hour_at).format("DD/MM/YYYY hh:mm:ss");
              recibo = "\n::::::::::MRN RECARGAS::::::::::\n:::COMPROBANTE DE TRANSACCION:::\n:::::::TRANSACCION EXITOSA::::::\n\nTRANSACCION ID: ".concat(venta.id, "\n\nFECHA:").concat(fecha, "\nVALOR: $").concat(this.separadorDeMiles(venta.valor), "\nEMPRESA: ").concat(nom_empresa, "\nCONVENIO:\n").concat(venta.convenio_pago ? venta.convenio_pago : 'n/a', "\nPRODUCTO: ").concat(venta.convenio_pago ? 'n/a' : nom_prod, "\nREFERENCIA: ").concat(venta.referencia_pago ? venta.referencia_pago : 'n/a', "\nCODIGO DE APROBACION: ").concat(venta.numeroAprobacion ? venta.numeroAprobacion : 'n/a', "\nCEL: ").concat(venta.numeroDestino, "\nEMAIL: ").concat(venta.email ? venta.email : 'n/a', "\n::::::GRACIAS POR SU COMPRA:::::\n\n");
              _context7.next = 6;
              return _providers_print_plugin__WEBPACK_IMPORTED_MODULE_7__["default"].print({
                value: recibo
              });

            case 6:
              _yield$Print$print = _context7.sent;
              value = _yield$Print$print.value;

            case 8:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
    }
  }]);

  return Mrn;
}();

Mrn.ctorParameters = function () {
  return [{
    type: _api__WEBPACK_IMPORTED_MODULE_3__.ApiService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController
  }, {
    type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_12__.Storage
  }];
};

Mrn = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Injectable)()], Mrn);


/***/ }),

/***/ 31005:
/*!**********************************************!*\
  !*** ./src/app/providers/network.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkService": function() { return /* binding */ NetworkService; }
/* harmony export */ });
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/network/ngx */ 99118);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 36312);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 29361);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _mrn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mrn */ 60023);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api */ 57011);



function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

 // Importar los Módulos Necesarios










var NetworkService = /*#__PURE__*/function () {
  function NetworkService(network, platform, http, toastController, mrn, api) {
    var _this = this;

    (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NetworkService);

    this.network = network;
    this.platform = platform;
    this.http = http;
    this.toastController = toastController;
    this.mrn = mrn;
    this.api = api;
    this.online = null;
    this.hasConnection = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(false);
    this.network_type = '';

    if (this.platform.is('cordova')) {
      // on Device
      this.network.onConnect().subscribe(function () {
        _this.getNetworkType();

        _this.testNetworkConnection();

        setTimeout(function () {
          _this.presentToast('!La conexión ha cambiado a ' + _this.network_type);

          _this.mrn.login_actions(_this.api.usuario);
        }, 4000);
      });
      this.network.onDisconnect().subscribe(function () {
        _this.getNetworkType();

        console.log('network was disconnected :-('); //this.hasConnection.next(false);
      });
    } else {
      // on Browser
      this.online = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(navigator.onLine), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.fromEvent)(window, 'online').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mapTo)(true)), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.fromEvent)(window, 'offline').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mapTo)(false)));
      this.online.subscribe(function (isOnline) {
        if (isOnline) {
          _this.hasConnection.next(true);

          _this.getNetworkType();

          _this.testNetworkConnection();

          setTimeout(function () {
            console.log('empezando la carga', _this.api.conectado);

            _this.presentToast('!La conexión ha cambiado a ' + _this.network_type);

            _this.mrn.login_actions(_this.api.usuario);
          }, 4000);
        } else {
          _this.getNetworkType();

          _this.hasConnection.next(false);
        }
      });
    }

    this.testNetworkConnection();
  }

  (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(NetworkService, [{
    key: "presentToast",
    value: function presentToast(mensaje) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var toast;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.toastController.create({
                message: mensaje,
                duration: 2000,
                position: 'top'
              });

            case 2:
              toast = _context.sent;
              _context.next = 5;
              return toast.present();

            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "getNetworkType",
    value: function getNetworkType() {
      this.api.tipo_red = this.network.type;
      this.network_type = this.network.type;
      console.log(this.api.tipo_red);
    }
  }, {
    key: "getNetworkStatus",
    value: function getNetworkStatus() {
      return this.hasConnection.asObservable();
    }
  }, {
    key: "getNetworkTestRequest",
    value: function getNetworkTestRequest() {
      return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
    }
  }, {
    key: "testNetworkConnection",
    value: function testNetworkConnection() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this2 = this;

        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              this.getNetworkTestRequest().subscribe(function (success) {
                // colocar las cabeceras normales
                console.log('Request to Google Test  success', success);

                _this2.hasConnection.next(true);

                _this2.api.conectado = true;
              }, function (error) {
                // colocar cabeceras de concepto movil
                console.log('Request to Google Test fails', error);
                _this2.api.conectado = false;

                _this2.hasConnection.next(false);
              });
              _context2.next = 10;
              break;

            case 4:
              _context2.prev = 4;
              _context2.t0 = _context2["catch"](0);
              console.log('err testNetworkConnection', _context2.t0);
              this.hasConnection.next(false);
              this.api.conectado = false;
              return _context2.abrupt("return");

            case 10:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[0, 4]]);
      }));
    }
  }]);

  return NetworkService;
}();

NetworkService.ctorParameters = function () {
  return [{
    type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__.Network
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController
  }, {
    type: _mrn__WEBPACK_IMPORTED_MODULE_3__.Mrn
  }, {
    type: _api__WEBPACK_IMPORTED_MODULE_4__.ApiService
  }];
};

NetworkService = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Injectable)({
  providedIn: 'root'
})], NetworkService);


/***/ }),

/***/ 42681:
/*!*********************************************!*\
  !*** ./src/app/providers/non-auth.guard.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NonAuthGuard": function() { return /* binding */ NonAuthGuard; }
/* harmony export */ });
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ 57011);







var NonAuthGuard = /*#__PURE__*/function () {
  function NonAuthGuard(router, api) {
    (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NonAuthGuard);

    this.router = router;
    this.api = api;
  }

  (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(NonAuthGuard, [{
    key: "canActivate",
    value: function canActivate(next, state) {
      // return true;
      if (!this.api.usuario) {
        return true;
      } else {
        return false; // this.router.navigate(['/home'])
      }
    }
  }, {
    key: "canActivateChild",
    value: function canActivateChild(next, state) {
      if (!this.api.usuario) {
        return true;
      } else {
        return false; // this.router.navigate(['/home'])
      }
    }
  }, {
    key: "canLoad",
    value: function canLoad(route, segments) {
      if (!this.api.usuario) {
        return true;
      } else {
        return false; // this.router.navigate(['/home'])
      }
    }
  }]);

  return NonAuthGuard;
}();

NonAuthGuard.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
  }, {
    type: _api__WEBPACK_IMPORTED_MODULE_2__.ApiService
  }];
};

NonAuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: 'root'
})], NonAuthGuard);


/***/ }),

/***/ 51651:
/*!*******************************************!*\
  !*** ./src/app/providers/print-plugin.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 26549);

var Print = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Print');
/* harmony default export */ __webpack_exports__["default"] = (Print);

/***/ }),

/***/ 85174:
/*!**********************************************************!*\
  !*** ./src/app/reporte-pagos/reporte-pagos.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportePagosComponent": function() { return /* binding */ ReportePagosComponent; }
/* harmony export */ });
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _reporte_pagos_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reporte-pagos.component.html?ngResource */ 43747);
/* harmony import */ var _reporte_pagos_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reporte-pagos.component.scss?ngResource */ 18077);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _providers_mrn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/mrn */ 60023);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _providers_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/api */ 57011);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ver_soporte_pago_ver_soporte_pago_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ver-soporte-pago/ver-soporte-pago.component */ 28994);



function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }












var ReportePagosComponent = /*#__PURE__*/function () {
  function ReportePagosComponent(mrn, router, api, modalController, popoverController) {
    (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ReportePagosComponent);

    this.mrn = mrn;
    this.router = router;
    this.api = api;
    this.modalController = modalController;
    this.popoverController = popoverController;
  }

  (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ReportePagosComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.mrn.misSolicitudesSaldo = [];
    }
  }, {
    key: "dismissModal",
    value: function dismissModal() {
      this.modalController.dismiss({
        'dismissed': true
      });
    }
  }, {
    key: "formatDate",
    value: function formatDate(value) {
      return moment__WEBPACK_IMPORTED_MODULE_6__(value).format('YYYY-MM-DD');
    }
  }, {
    key: "consultar",
    value: function consultar(fecha, fecha2) {
      this.fecha_consulta = this.formatDate(fecha);
      this.fecha_consulta2 = this.formatDate(fecha2);
      this.popoverController.dismiss();
      this.mrn.get_pagos_by_fecha(this.fecha_consulta, this.fecha_consulta2);
    }
  }, {
    key: "presentModal",
    value: function presentModal(pago) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var modal;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this.mrn.pagoSeleccionado = pago;
              _context.next = 3;
              return this.modalController.create({
                component: _ver_soporte_pago_ver_soporte_pago_component__WEBPACK_IMPORTED_MODULE_7__.VerSoportePagoComponent
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
  }]);

  return ReportePagosComponent;
}();

ReportePagosComponent.ctorParameters = function () {
  return [{
    type: _providers_mrn__WEBPACK_IMPORTED_MODULE_4__.Mrn
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
  }, {
    type: _providers_api__WEBPACK_IMPORTED_MODULE_5__.ApiService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.PopoverController
  }];
};

ReportePagosComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-reporte-pagos',
  template: _reporte_pagos_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_reporte_pagos_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], ReportePagosComponent);


/***/ }),

/***/ 27517:
/*!**********************************************************************!*\
  !*** ./src/app/reporte-solicitudes/reporte-solicitudes.component.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReporteSolicitudesComponent": function() { return /* binding */ ReporteSolicitudesComponent; }
/* harmony export */ });
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _reporte_solicitudes_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reporte-solicitudes.component.html?ngResource */ 18213);
/* harmony import */ var _reporte_solicitudes_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reporte-solicitudes.component.scss?ngResource */ 15539);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _providers_mrn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/mrn */ 60023);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _providers_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/api */ 57011);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);












var ReporteSolicitudesComponent = /*#__PURE__*/function () {
  function ReporteSolicitudesComponent(mrn, router, api, modalController, popoverController) {
    (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ReporteSolicitudesComponent);

    this.mrn = mrn;
    this.router = router;
    this.api = api;
    this.modalController = modalController;
    this.popoverController = popoverController;
  }

  (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ReporteSolicitudesComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.mrn.misSolicitudesSaldo = [];
    }
  }, {
    key: "dismissModal",
    value: function dismissModal() {
      this.modalController.dismiss({
        'dismissed': true
      });
    }
  }, {
    key: "formatDate",
    value: function formatDate(value) {
      return moment__WEBPACK_IMPORTED_MODULE_6__(value).format('YYYY-MM-DD');
    }
  }]);

  return ReporteSolicitudesComponent;
}();

ReporteSolicitudesComponent.ctorParameters = function () {
  return [{
    type: _providers_mrn__WEBPACK_IMPORTED_MODULE_4__.Mrn
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: _providers_api__WEBPACK_IMPORTED_MODULE_5__.ApiService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.PopoverController
  }];
};

ReporteSolicitudesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-reporte-solicitudes',
  template: _reporte_solicitudes_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_reporte_solicitudes_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], ReporteSolicitudesComponent);


/***/ }),

/***/ 41139:
/*!************************************************************!*\
  !*** ./src/app/reporte-ventas/reporte-ventas.component.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReporteVentasComponent": function() { return /* binding */ ReporteVentasComponent; }
/* harmony export */ });
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _reporte_ventas_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reporte-ventas.component.html?ngResource */ 19273);
/* harmony import */ var _reporte_ventas_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reporte-ventas.component.scss?ngResource */ 63716);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _providers_mrn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/mrn */ 60023);
/* harmony import */ var _providers_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/api */ 57011);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);










var ReporteVentasComponent = /*#__PURE__*/function () {
  function ReporteVentasComponent(mrn, api, modalController) {
    (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ReporteVentasComponent);

    this.mrn = mrn;
    this.api = api;
    this.modalController = modalController;
  }

  (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ReporteVentasComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.fechai = null;
      this.fechaf = null;
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.mrn.ventas_by_fecha = [];
      this.mrn.total_consulta_ventas = 0;
    }
  }, {
    key: "dismissModal",
    value: function dismissModal() {
      this.modalController.dismiss({
        'dismissed': true
      });
    }
  }, {
    key: "getIcon",
    value: function getIcon(resultado) {
      if (resultado == '00' || resultado == '001') {
        return ['checkmark-circle', '#0E9434'];
      } else {
        return ['close-circle', '#C71A1A'];
      }
    }
  }]);

  return ReporteVentasComponent;
}();

ReporteVentasComponent.ctorParameters = function () {
  return [{
    type: _providers_mrn__WEBPACK_IMPORTED_MODULE_4__.Mrn
  }, {
    type: _providers_api__WEBPACK_IMPORTED_MODULE_5__.ApiService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
  }];
};

ReporteVentasComponent.propDecorators = {
  ventaFechaCanvas: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
    args: ['ventaFechaCanvas', {
      static: true
    }]
  }]
};
ReporteVentasComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-reporte-ventas',
  template: _reporte_ventas_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_reporte_ventas_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], ReporteVentasComponent);


/***/ }),

/***/ 18206:
/*!****************************************************************!*\
  !*** ./src/app/reportes-detalle/reportes-detalle.component.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportesDetalleComponent": function() { return /* binding */ ReportesDetalleComponent; }
/* harmony export */ });
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ 95106);
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _reportes_detalle_component_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reportes-detalle.component.html?ngResource */ 38657);
/* harmony import */ var _reportes_detalle_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reportes-detalle.component.scss?ngResource */ 14456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _providers_mrn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/mrn */ 60023);
/* harmony import */ var _providers_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/api */ 57011);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);











var ReportesDetalleComponent = /*#__PURE__*/function () {
  function ReportesDetalleComponent(mrn, api, modalController) {
    (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ReportesDetalleComponent);

    this.mrn = mrn;
    this.api = api;
    this.modalController = modalController;
    this.convencion = [];
  }

  (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(ReportesDetalleComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "seleccionarCategoria",
    value: function seleccionarCategoria($event) {
      if (this.doughnutChart) {
        this.doughnutChart.destroy();
      }

      var comisiones = this.mrn.lista_comisiones_venta.filter(function (item) {
        return item.nom_categoria === event['detail'].value;
      });
      this.convencion = [];

      var _iterator = (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(comisiones),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var comision = _step.value;

          var _iterator2 = (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(comision.empresas),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var empresa = _step2.value;

              if (empresa.micomision > 0 && empresa.logo_empresa) {
                this.convencion.push(empresa);
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "generarNumero",
    value: function generarNumero(numero) {
      return (Math.random() * numero).toFixed(0);
    }
  }, {
    key: "dismissModal",
    value: function dismissModal() {
      this.modalController.dismiss({
        'dismissed': true
      });
    }
  }]);

  return ReportesDetalleComponent;
}();

ReportesDetalleComponent.ctorParameters = function () {
  return [{
    type: _providers_mrn__WEBPACK_IMPORTED_MODULE_5__.Mrn
  }, {
    type: _providers_api__WEBPACK_IMPORTED_MODULE_6__.ApiService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
  }];
};

ReportesDetalleComponent.propDecorators = {
  doughnutCanvas: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
    args: ['doughnutCanvas', {
      static: true
    }]
  }],
  ventaFechaCanvas: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
    args: ['ventaFechaCanvas', {
      static: true
    }]
  }]
};
ReportesDetalleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-reportes-detalle',
  template: _reportes_detalle_component_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_reportes_detalle_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], ReportesDetalleComponent);


/***/ }),

/***/ 97657:
/*!******************************************************************************!*\
  !*** ./src/app/resultado-venta-recarga/resultado-venta-recarga.component.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultadoVentaRecargaComponent": function() { return /* binding */ ResultadoVentaRecargaComponent; }
/* harmony export */ });
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _resultado_venta_recarga_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resultado-venta-recarga.component.html?ngResource */ 2605);
/* harmony import */ var _resultado_venta_recarga_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resultado-venta-recarga.component.scss?ngResource */ 62949);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _providers_mrn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/mrn */ 60023);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _providers_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/api */ 57011);











var ResultadoVentaRecargaComponent = /*#__PURE__*/function () {
  function ResultadoVentaRecargaComponent(modalController, mrn, router, api) {
    (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ResultadoVentaRecargaComponent);

    this.modalController = modalController;
    this.mrn = mrn;
    this.router = router;
    this.api = api;
  }

  (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ResultadoVentaRecargaComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "dismissModal",
    value: function dismissModal() {
      this.modalController.dismiss({
        'dismissed': true
      });
      this.router.navigate(['/inicio']);
    }
  }, {
    key: "getColorIcon",
    value: function getColorIcon(codigo) {
      if (this.mrn.trans_resultado_venta.codigo_resultado == '00' || this.mrn.trans_resultado_venta.codigo_resultado == '001') {
        return ['darkgreen', 'checkmark-circle'];
      } else {
        return ['darkred', 'close-circle'];
      }
    }
  }]);

  return ResultadoVentaRecargaComponent;
}();

ResultadoVentaRecargaComponent.ctorParameters = function () {
  return [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
  }, {
    type: _providers_mrn__WEBPACK_IMPORTED_MODULE_4__.Mrn
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: _providers_api__WEBPACK_IMPORTED_MODULE_5__.ApiService
  }];
};

ResultadoVentaRecargaComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-resultado-venta-recarga',
  template: _resultado_venta_recarga_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_resultado_venta_recarga_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], ResultadoVentaRecargaComponent);


/***/ }),

/***/ 443:
/*!**********************************************************!*\
  !*** ./src/app/resumen-venta/resumen-venta.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResumenVentaComponent": function() { return /* binding */ ResumenVentaComponent; }
/* harmony export */ });
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _resumen_venta_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resumen-venta.component.html?ngResource */ 31898);
/* harmony import */ var _resumen_venta_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resumen-venta.component.scss?ngResource */ 22997);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _providers_mrn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/mrn */ 60023);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);









var ResumenVentaComponent = /*#__PURE__*/function () {
  function ResumenVentaComponent(mrn, modalController, loadingController) {
    (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ResumenVentaComponent);

    this.mrn = mrn;
    this.modalController = modalController;
    this.loadingController = loadingController;
  }

  (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ResumenVentaComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "vender",
    value: function vender(b) {
      switch (this.mrn.empresaSeleccionada.nom_categoria) {
        case 'Pines':
          {
            this.mrn.presentLoading();
            this.mrn.venderPines(b);
            break;
          }

        case 'Recargas y Paquetes':
          {
            this.mrn.presentLoadingVentas();
            this.mrn.venderRecargaVer2(b);
            break;
          }

        case 'Certificados':
          {
            this.mrn.presentLoadingVentas();
            this.mrn.venderCertificado(b);
            break;
          }

        case 'Apuestas':
          {
            this.mrn.presentLoadingVentas();
            this.mrn.venderApuestas(b);
            break;
          }

        case 'Soat':
          {
            this.mrn.presentLoadingVentas();
            this.mrn.venderSoat(b);
            break;
          }

        case 'Recaudos':
          {
            this.mrn.presentLoadingVentas();
            this.mrn.pagar_factura(b);
            break;
          }

        default:
          {
            break;
          }
      }
    }
  }]);

  return ResumenVentaComponent;
}();

ResumenVentaComponent.ctorParameters = function () {
  return [{
    type: _providers_mrn__WEBPACK_IMPORTED_MODULE_4__.Mrn
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController
  }];
};

ResumenVentaComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-resumen-venta',
  template: _resumen_venta_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_resumen_venta_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], ResumenVentaComponent);


/***/ }),

/***/ 37408:
/*!********************************************************!*\
  !*** ./src/app/soat-vencido/soat-vencido.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SoatVencidoComponent": function() { return /* binding */ SoatVencidoComponent; }
/* harmony export */ });
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _soat_vencido_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./soat-vencido.component.html?ngResource */ 77974);
/* harmony import */ var _soat_vencido_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./soat-vencido.component.scss?ngResource */ 152);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _providers_mrn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/mrn */ 60023);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);










var SoatVencidoComponent = /*#__PURE__*/function () {
  function SoatVencidoComponent(modalController, mrn, router) {
    (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SoatVencidoComponent);

    this.modalController = modalController;
    this.mrn = mrn;
    this.router = router;
  }

  (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SoatVencidoComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "dismissModal",
    value: function dismissModal() {
      this.modalController.dismiss({
        'dismissed': true
      });
    }
  }]);

  return SoatVencidoComponent;
}();

SoatVencidoComponent.ctorParameters = function () {
  return [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
  }, {
    type: _providers_mrn__WEBPACK_IMPORTED_MODULE_4__.Mrn
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
  }];
};

SoatVencidoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-soat-vencido',
  template: _soat_vencido_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_soat_vencido_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], SoatVencidoComponent);


/***/ }),

/***/ 42890:
/*!********************************************************!*\
  !*** ./src/app/soat-vigente/soat-vigente.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SoatVigenteComponent": function() { return /* binding */ SoatVigenteComponent; }
/* harmony export */ });
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _soat_vigente_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./soat-vigente.component.html?ngResource */ 71983);
/* harmony import */ var _soat_vigente_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./soat-vigente.component.scss?ngResource */ 27815);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _providers_mrn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/mrn */ 60023);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);










var SoatVigenteComponent = /*#__PURE__*/function () {
  function SoatVigenteComponent(modalController, mrn, router) {
    (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SoatVigenteComponent);

    this.modalController = modalController;
    this.mrn = mrn;
    this.router = router;
  }

  (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SoatVigenteComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "dismissModal",
    value: function dismissModal() {
      this.modalController.dismiss({
        'dismissed': true
      });
    }
  }]);

  return SoatVigenteComponent;
}();

SoatVigenteComponent.ctorParameters = function () {
  return [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
  }, {
    type: _providers_mrn__WEBPACK_IMPORTED_MODULE_4__.Mrn
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
  }];
};

SoatVigenteComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-soat-vigente',
  template: _soat_vigente_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_soat_vigente_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], SoatVigenteComponent);


/***/ }),

/***/ 23670:
/*!**************************************************************!*\
  !*** ./src/app/solicitud-saldo/solicitud-saldo.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolicitudSaldoComponent": function() { return /* binding */ SolicitudSaldoComponent; }
/* harmony export */ });
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _solicitud_saldo_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./solicitud-saldo.component.html?ngResource */ 36635);
/* harmony import */ var _solicitud_saldo_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./solicitud-saldo.component.scss?ngResource */ 80697);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _providers_mrn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/mrn */ 60023);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _providers_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/api */ 57011);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 6018);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);



function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }












var SolicitudSaldoComponent = /*#__PURE__*/function () {
  function SolicitudSaldoComponent(modalController, mrn, router, api, alertController, camera) {
    (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SolicitudSaldoComponent);

    this.modalController = modalController;
    this.mrn = mrn;
    this.router = router;
    this.api = api;
    this.alertController = alertController;
    this.camera = camera;
    this.options = {
      quality: 30,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
  }

  (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SolicitudSaldoComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "dismissModal",
    value: function dismissModal() {
      this.modalController.dismiss({
        'dismissed': true
      });
    }
  }, {
    key: "cambiarValor",
    value: function cambiarValor(valor) {
      this.mrn.formTransaccion.patchValue({
        valor: valor
      });
    }
  }, {
    key: "solicitarSaldo",
    value: function solicitarSaldo() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this = this;

        var alerta;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'MRN Colombia',
                message: '¿Desea realizar la solicitud de saldo ' + (this.mrn.formTransaccion.value['tipo_transaccion'] == 'SSCR' ? 'Credito' : 'Contado') + ' por un valor de $' + this.mrn.formTransaccion.value['valor'] + '?',
                buttons: [{
                  text: 'Cancelar',
                  role: 'cancel',
                  cssClass: 'secondary',
                  id: 'cancel-button',
                  handler: function handler(blah) {}
                }, {
                  text: 'Aceptar',
                  id: 'confirm-button',
                  handler: function handler() {
                    var obj = {
                      nodo: _this.api.nodoActual['id'],
                      usuario: _this.api.usuario['id'],
                      tipoServicio: _this.mrn.formTransaccion.value['tipoServicio'],
                      tipo_transaccion: _this.mrn.formTransaccion.value['tipo_transaccion'],
                      medioSolicitud: 'Movil',
                      valor: _this.mrn.formTransaccion.value['valor'],
                      saldo_pendiente_pago: _this.mrn.formTransaccion.value['valor'],
                      soporte: _this.mrn.formTransaccion.value['soporte'] ? _this.mrn.formTransaccion.value['soporte'] : 'Pendiente'
                    };

                    _this.mrn.presentLoading();

                    _this.api.post_soap('solicitar_saldo', obj).subscribe(function (data) {
                      var respuesta = JSON.parse(data);

                      if (respuesta.data) {
                        _this.mrn.transaccionSeleccionada = respuesta.data; //this.mrn.getMisSolicitudesSaldo();

                        _this.mrn.getMiCredito();

                        _this.mrn.getMisBolsasDinero();

                        _this.mrn.formTransaccion.reset();

                        _this.mrn.verSubirArchivo = data.tipo_transaccion == 'SSC' ? true : false;

                        _this.modalController.dismiss({
                          'dismissed': true
                        });
                      }

                      _this.mrn.loadingController.dismiss();

                      alert(respuesta.mensaje[0]);

                      if (respuesta.mensaje[1]) {
                        alert(respuesta.mensaje[1]);
                      }
                    });
                  }
                }]
              });

            case 2:
              alerta = _context.sent;
              _context.next = 5;
              return alerta.present();

            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "tomar_foto",
    value: function tomar_foto() {
      var _this2 = this;

      this.camera.getPicture(this.options).then(function (imageData) {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        var base64Image = 'data:image/jpeg;base64,' + imageData;
        _this2.foto = base64Image;

        _this2.mrn.formTransaccion.patchValue({
          soporte: _this2.foto
        });
      }, function (err) {// Handle error
      });
    }
  }, {
    key: "validarSoporte",
    value: function validarSoporte() {
      var soporte = this.mrn.formTransaccion.get('soporte');

      if (this.mrn.formTransaccion.value['tipo_transaccion'] == 'SSCR') {
        soporte.removeValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
      } else {
        soporte.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required);
      }

      soporte.updateValueAndValidity();
    }
  }]);

  return SolicitudSaldoComponent;
}();

SolicitudSaldoComponent.ctorParameters = function () {
  return [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
  }, {
    type: _providers_mrn__WEBPACK_IMPORTED_MODULE_4__.Mrn
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
  }, {
    type: _providers_api__WEBPACK_IMPORTED_MODULE_5__.ApiService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
  }, {
    type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__.Camera
  }];
};

SolicitudSaldoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-solicitud-saldo',
  template: _solicitud_saldo_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_solicitud_saldo_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], SolicitudSaldoComponent);


/***/ }),

/***/ 91944:
/*!************************************************************!*\
  !*** ./src/app/ultimas-ventas/ultimas-ventas.component.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UltimasVentasComponent": function() { return /* binding */ UltimasVentasComponent; }
/* harmony export */ });
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _ultimas_ventas_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ultimas-ventas.component.html?ngResource */ 45493);
/* harmony import */ var _ultimas_ventas_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ultimas-ventas.component.scss?ngResource */ 55957);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _providers_mrn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/mrn */ 60023);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);










var UltimasVentasComponent = /*#__PURE__*/function () {
  function UltimasVentasComponent(modalController, mrn, router) {
    (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UltimasVentasComponent);

    this.modalController = modalController;
    this.mrn = mrn;
    this.router = router;
  }

  (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(UltimasVentasComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "dismissModal",
    value: function dismissModal() {
      this.modalController.dismiss({
        'dismissed': true
      });
    }
  }, {
    key: "buscar",
    value: function buscar(valorBusqueda) {
      if (valorBusqueda) {
        this.mrn.listaFiltradaVentas = this.mrn.ventas_by_nodo.filter(function (item) {
          return item.numeroDestino.includes(valorBusqueda.toUpperCase());
        });
      } else {
        this.mrn.listaFiltradaVentas = this.mrn.ventas_by_nodo;
      }
    }
  }]);

  return UltimasVentasComponent;
}();

UltimasVentasComponent.ctorParameters = function () {
  return [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
  }, {
    type: _providers_mrn__WEBPACK_IMPORTED_MODULE_4__.Mrn
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
  }];
};

UltimasVentasComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-ultimas-ventas',
  template: _ultimas_ventas_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_ultimas_ventas_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], UltimasVentasComponent);


/***/ }),

/***/ 28994:
/*!****************************************************************!*\
  !*** ./src/app/ver-soporte-pago/ver-soporte-pago.component.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerSoportePagoComponent": function() { return /* binding */ VerSoportePagoComponent; }
/* harmony export */ });
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var _Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _ver_soporte_pago_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ver-soporte-pago.component.html?ngResource */ 90382);
/* harmony import */ var _ver_soporte_pago_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ver-soporte-pago.component.scss?ngResource */ 94474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _providers_mrn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/mrn */ 60023);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);










var VerSoportePagoComponent = /*#__PURE__*/function () {
  function VerSoportePagoComponent(modalController, mrn, router) {
    (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, VerSoportePagoComponent);

    this.modalController = modalController;
    this.mrn = mrn;
    this.router = router;
  }

  (0,_Volumes_Datos_MOVILRED_movil_recargas_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(VerSoportePagoComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "dismissModal",
    value: function dismissModal() {
      this.modalController.dismiss({
        'dismissed': true
      });
    }
  }]);

  return VerSoportePagoComponent;
}();

VerSoportePagoComponent.ctorParameters = function () {
  return [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
  }, {
    type: _providers_mrn__WEBPACK_IMPORTED_MODULE_4__.Mrn
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
  }];
};

VerSoportePagoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-ver-soporte-pago',
  template: _ver_soporte_pago_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_ver_soporte_pago_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], VerSoportePagoComponent);


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 68150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}

(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(function (err) {
  return console.log(err);
});

/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"default-node_modules_ionic_core_dist_esm_index-e6d1a8be_js",
		"default-node_modules_ionic_core_dist_esm_framework-delegate-c3305a28_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		17950,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"default-node_modules_ionic_core_dist_esm_index-e6d1a8be_js",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"default-node_modules_ionic_core_dist_esm_index-e6d1a8be_js",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"default-node_modules_ionic_core_dist_esm_index-e6d1a8be_js",
		"default-node_modules_ionic_core_dist_esm_framework-delegate-c3305a28_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"default-node_modules_ionic_core_dist_esm_framework-delegate-c3305a28_js",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"default-node_modules_ionic_core_dist_esm_framework-delegate-c3305a28_js",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"default-node_modules_ionic_core_dist_esm_index-e6d1a8be_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"default-node_modules_ionic_core_dist_esm_index-e6d1a8be_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"default-node_modules_ionic_core_dist_esm_index-e6d1a8be_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		78179,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		90668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"default-node_modules_ionic_core_dist_esm_framework-delegate-c3305a28_js",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"default-node_modules_ionic_core_dist_esm_theme-7670341c_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./af": 58685,
	"./af.js": 58685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 32614,
	"./ar-kw.js": 32614,
	"./ar-ly": 18630,
	"./ar-ly.js": 18630,
	"./ar-ma": 28674,
	"./ar-ma.js": 28674,
	"./ar-sa": 49032,
	"./ar-sa.js": 49032,
	"./ar-tn": 24730,
	"./ar-tn.js": 24730,
	"./ar.js": 254,
	"./az": 53052,
	"./az.js": 53052,
	"./be": 60150,
	"./be.js": 60150,
	"./bg": 63069,
	"./bg.js": 63069,
	"./bm": 13466,
	"./bm.js": 13466,
	"./bn": 18516,
	"./bn-bd": 90557,
	"./bn-bd.js": 90557,
	"./bn.js": 18516,
	"./bo": 26273,
	"./bo.js": 26273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 19815,
	"./bs.js": 19815,
	"./ca": 83331,
	"./ca.js": 83331,
	"./cs": 21320,
	"./cs.js": 21320,
	"./cv": 72219,
	"./cv.js": 72219,
	"./cy": 68266,
	"./cy.js": 68266,
	"./da": 66427,
	"./da.js": 66427,
	"./de": 67435,
	"./de-at": 52871,
	"./de-at.js": 52871,
	"./de-ch": 12994,
	"./de-ch.js": 12994,
	"./de.js": 67435,
	"./dv": 82357,
	"./dv.js": 82357,
	"./el": 95649,
	"./el.js": 95649,
	"./en-au": 59961,
	"./en-au.js": 59961,
	"./en-ca": 19878,
	"./en-ca.js": 19878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 70864,
	"./en-ie.js": 70864,
	"./en-il": 91579,
	"./en-il.js": 91579,
	"./en-in": 30940,
	"./en-in.js": 30940,
	"./en-nz": 16181,
	"./en-nz.js": 16181,
	"./en-sg": 44301,
	"./en-sg.js": 44301,
	"./eo": 85291,
	"./eo.js": 85291,
	"./es": 54529,
	"./es-do": 53764,
	"./es-do.js": 53764,
	"./es-mx": 12584,
	"./es-mx.js": 12584,
	"./es-us": 63425,
	"./es-us.js": 63425,
	"./es.js": 54529,
	"./et": 35203,
	"./et.js": 35203,
	"./eu": 70678,
	"./eu.js": 70678,
	"./fa": 83483,
	"./fa.js": 83483,
	"./fi": 96262,
	"./fi.js": 96262,
	"./fil": 52521,
	"./fil.js": 52521,
	"./fo": 34555,
	"./fo.js": 34555,
	"./fr": 63131,
	"./fr-ca": 88239,
	"./fr-ca.js": 88239,
	"./fr-ch": 21702,
	"./fr-ch.js": 21702,
	"./fr.js": 63131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 23821,
	"./ga.js": 23821,
	"./gd": 71753,
	"./gd.js": 71753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 92762,
	"./gom-deva.js": 92762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 82809,
	"./gu.js": 82809,
	"./he": 45402,
	"./he.js": 45402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 10410,
	"./hr.js": 10410,
	"./hu": 38288,
	"./hu.js": 38288,
	"./hy-am": 67928,
	"./hy-am.js": 67928,
	"./id": 71334,
	"./id.js": 71334,
	"./is": 86959,
	"./is.js": 86959,
	"./it": 34864,
	"./it-ch": 51124,
	"./it-ch.js": 51124,
	"./it.js": 34864,
	"./ja": 36141,
	"./ja.js": 36141,
	"./jv": 29187,
	"./jv.js": 29187,
	"./ka": 42136,
	"./ka.js": 42136,
	"./kk": 94332,
	"./kk.js": 94332,
	"./km": 18607,
	"./km.js": 18607,
	"./kn": 84305,
	"./kn.js": 84305,
	"./ko": 70234,
	"./ko.js": 70234,
	"./ku": 16003,
	"./ku.js": 16003,
	"./ky": 75061,
	"./ky.js": 75061,
	"./lb": 32786,
	"./lb.js": 32786,
	"./lo": 66183,
	"./lo.js": 66183,
	"./lt": 50029,
	"./lt.js": 50029,
	"./lv": 24169,
	"./lv.js": 24169,
	"./me": 68577,
	"./me.js": 68577,
	"./mi": 68177,
	"./mi.js": 68177,
	"./mk": 50337,
	"./mk.js": 50337,
	"./ml": 65260,
	"./ml.js": 65260,
	"./mn": 52325,
	"./mn.js": 52325,
	"./mr": 14695,
	"./mr.js": 14695,
	"./ms": 75334,
	"./ms-my": 37151,
	"./ms-my.js": 37151,
	"./ms.js": 75334,
	"./mt": 63570,
	"./mt.js": 63570,
	"./my": 97963,
	"./my.js": 97963,
	"./nb": 88028,
	"./nb.js": 88028,
	"./ne": 86638,
	"./ne.js": 86638,
	"./nl": 50302,
	"./nl-be": 66782,
	"./nl-be.js": 66782,
	"./nl.js": 50302,
	"./nn": 33501,
	"./nn.js": 33501,
	"./oc-lnc": 50563,
	"./oc-lnc.js": 50563,
	"./pa-in": 50869,
	"./pa-in.js": 50869,
	"./pl": 65302,
	"./pl.js": 65302,
	"./pt": 49687,
	"./pt-br": 74884,
	"./pt-br.js": 74884,
	"./pt.js": 49687,
	"./ro": 79107,
	"./ro.js": 79107,
	"./ru": 57008,
	"./ru.js": 57008,
	"./sd": 30355,
	"./sd.js": 30355,
	"./se": 83427,
	"./se.js": 83427,
	"./si": 11848,
	"./si.js": 11848,
	"./sk": 54590,
	"./sk.js": 54590,
	"./sl": 20184,
	"./sl.js": 20184,
	"./sq": 56361,
	"./sq.js": 56361,
	"./sr": 78965,
	"./sr-cyrl": 81287,
	"./sr-cyrl.js": 81287,
	"./sr.js": 78965,
	"./ss": 25456,
	"./ss.js": 25456,
	"./sv": 70451,
	"./sv.js": 70451,
	"./sw": 77558,
	"./sw.js": 77558,
	"./ta": 51356,
	"./ta.js": 51356,
	"./te": 73693,
	"./te.js": 73693,
	"./tet": 21243,
	"./tet.js": 21243,
	"./tg": 42500,
	"./tg.js": 42500,
	"./th": 55768,
	"./th.js": 55768,
	"./tk": 77761,
	"./tk.js": 77761,
	"./tl-ph": 35780,
	"./tl-ph.js": 35780,
	"./tlh": 29590,
	"./tlh.js": 29590,
	"./tr": 33807,
	"./tr.js": 33807,
	"./tzl": 93857,
	"./tzl.js": 93857,
	"./tzm": 60654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 60654,
	"./ug-cn": 30845,
	"./ug-cn.js": 30845,
	"./uk": 19232,
	"./uk.js": 19232,
	"./ur": 47052,
	"./ur.js": 47052,
	"./uz": 77967,
	"./uz-latn": 32233,
	"./uz-latn.js": 32233,
	"./uz.js": 77967,
	"./vi": 98615,
	"./vi.js": 98615,
	"./x-pseudo": 12320,
	"./x-pseudo.js": 12320,
	"./yo": 31313,
	"./yo.js": 31313,
	"./zh-cn": 64490,
	"./zh-cn.js": 64490,
	"./zh-hk": 55910,
	"./zh-hk.js": 55910,
	"./zh-mo": 98262,
	"./zh-mo.js": 98262,
	"./zh-tw": 44223,
	"./zh-tw.js": 44223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ }),

/***/ 79259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ (function(module) {

"use strict";
module.exports = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsMkRBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0RBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxnQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0JBQUE7QUFIRjs7QUFNQTtFQUNFLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7QUFIRjs7QUFNQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUFKRjs7QUFPQTtFQUNFLGlDQUFBO0FBSkYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG5cbiAgY29sb3I6ICM3NTc1NzU7XG5cbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzYxNmU3ZTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn0iXX0= */";

/***/ }),

/***/ 96720:
/*!***************************************************************!*\
  !*** ./src/app/convenios/convenios.component.scss?ngResource ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb252ZW5pb3MuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 10021:
/*!***********************************************************************************!*\
  !*** ./src/app/info-factura-pagada/info-factura-pagada.component.scss?ngResource ***!
  \***********************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmZvLWZhY3R1cmEtcGFnYWRhLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 19113:
/*!***********************************************************************!*\
  !*** ./src/app/info-recaudos/info-recaudos.component.scss?ngResource ***!
  \***********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmZvLXJlY2F1ZG9zLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 72865:
/*!***********************************************************************!*\
  !*** ./src/app/pagar-factura/pagar-factura.component.scss?ngResource ***!
  \***********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdhci1mYWN0dXJhLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 45093:
/*!***************************************************************!*\
  !*** ./src/app/productos/productos.component.scss?ngResource ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0b3MuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 18077:
/*!***********************************************************************!*\
  !*** ./src/app/reporte-pagos/reporte-pagos.component.scss?ngResource ***!
  \***********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnRlLXBhZ29zLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 15539:
/*!***********************************************************************************!*\
  !*** ./src/app/reporte-solicitudes/reporte-solicitudes.component.scss?ngResource ***!
  \***********************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnRlLXNvbGljaXR1ZGVzLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 63716:
/*!*************************************************************************!*\
  !*** ./src/app/reporte-ventas/reporte-ventas.component.scss?ngResource ***!
  \*************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnRlLXZlbnRhcy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 14456:
/*!*****************************************************************************!*\
  !*** ./src/app/reportes-detalle/reportes-detalle.component.scss?ngResource ***!
  \*****************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnRlcy1kZXRhbGxlLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 62949:
/*!*******************************************************************************************!*\
  !*** ./src/app/resultado-venta-recarga/resultado-venta-recarga.component.scss?ngResource ***!
  \*******************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXN1bHRhZG8tdmVudGEtcmVjYXJnYS5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 22997:
/*!***********************************************************************!*\
  !*** ./src/app/resumen-venta/resumen-venta.component.scss?ngResource ***!
  \***********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXN1bWVuLXZlbnRhLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 152:
/*!*********************************************************************!*\
  !*** ./src/app/soat-vencido/soat-vencido.component.scss?ngResource ***!
  \*********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb2F0LXZlbmNpZG8uY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 27815:
/*!*********************************************************************!*\
  !*** ./src/app/soat-vigente/soat-vigente.component.scss?ngResource ***!
  \*********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb2F0LXZpZ2VudGUuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 80697:
/*!***************************************************************************!*\
  !*** ./src/app/solicitud-saldo/solicitud-saldo.component.scss?ngResource ***!
  \***************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb2xpY2l0dWQtc2FsZG8uY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 55957:
/*!*************************************************************************!*\
  !*** ./src/app/ultimas-ventas/ultimas-ventas.component.scss?ngResource ***!
  \*************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1bHRpbWFzLXZlbnRhcy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 94474:
/*!*****************************************************************************!*\
  !*** ./src/app/ver-soporte-pago/ver-soporte-pago.component.scss?ngResource ***!
  \*****************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXItc29wb3J0ZS1wYWdvLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ (function(module) {

"use strict";
module.exports = "<ion-app>\n  <ion-split-pane contentId=\"main-content\" >\n    <ion-menu contentId=\"main-content\" type=\"overlay\" *ngIf=\"api.usuario\">\n      <ion-content >\n        <ion-list id=\"inbox-list\">\n          <ion-item >\n            <div style=\"text-align: center;width: 100%;padding: 10px 0 25px 0\">\n              <img style=\"width: 50%\" src=\"assets/nuevo_logo.png\" alt=\"mirage-layout\"/>\n            </div>\n          </ion-item>\n          <ion-menu-toggle auto-hide=\"false\">\n            <ion-item [routerLink]=\"'/perfil'\" routerDirection=\"root\">\n              <ion-avatar slot=\"end\" style=\"text-align: center;padding-top: 10px\">\n                <i style=\"font-size: 1.5em;color: lightgray\" class=\"fas fa-user-cog\"></i>\n              </ion-avatar>\n              <ion-label>\n                <h2>{{api.usuario['username']}}</h2>\n                <p style=\"font-size: 0.9em\">{{api.usuario['cargo']}}</p>\n              </ion-label>\n            </ion-item>\n            <ion-item  routerDirection=\"root\"\n                      [routerLink]=\"'/inicio'\" lines=\"none\" detail=\"false\">\n              <i style=\"color:lightgray\" slot=\"start\" class=\"fas fa-store\"></i>\n              <ion-label >\n                <h2>Ventas</h2>\n              </ion-label>\n            </ion-item>\n            <ion-item  routerDirection=\"root\"\n                      [routerLink]=\"'/saldo'\" lines=\"none\" detail=\"false\">\n              <i style=\"color:lightgray\" slot=\"start\" class=\"fas fa-hand-holding-usd\"></i>\n              <ion-label >\n                <h2>Solicitud de saldo</h2>\n              </ion-label>\n            </ion-item>\n            <ion-item  routerDirection=\"root\" (click)=\"this.mrn.totalFacturasAPagar = 0;this.mrn.getCartera(this.api.nodoActual)\"\n                      [routerLink]=\"'/cartera'\" lines=\"none\" detail=\"false\">\n              <i style=\"color:lightgray\" slot=\"start\" class=\"fas fa-file-invoice-dollar\"></i>\n              <ion-label >\n                <h2>Estado de cartera</h2>\n              </ion-label>\n            </ion-item>\n            <ion-item routerDirection=\"root\"\n                      [routerLink]=\"'/reportes'\" lines=\"none\" detail=\"false\">\n              <i style=\"color:lightgray\" slot=\"start\" class=\"fas fa-chart-bar\"></i>\n              <ion-label>\n                <h2>Consultas</h2>\n              </ion-label>\n            </ion-item>\n            <ion-item routerDirection=\"root\"\n                      [routerLink]=\"'/mi-distribuidor'\" lines=\"none\" detail=\"false\">\n              <i style=\"color:lightgray\" slot=\"start\" class=\"fas fa-users\"></i>\n              <ion-label>\n                <h2>Mi distribuidor</h2>\n              </ion-label>\n            </ion-item>\n            <ion-item routerDirection=\"root\" (click)=\"api.logOut()\" lines=\"none\" detail=\"false\">\n              <i style=\"color:lightgray\" slot=\"start\" class=\"fas fa-sign-out-alt\"></i>\n              <ion-label>\n                <h2>Salir</h2>\n              </ion-label>\n            </ion-item>\n            <div style=\"font-size: 0.6em;color: gray;text-align: center;margin-top: 10%\">\n              <p><i class=\"far fa-copyright\"></i> MRN Colombia 2023</p>\n              <p>www.mrncolombia.com</p>\n              <p>Ver: {{mrn.APP_VERSION}}</p>\n            </div>\n          </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n";

/***/ }),

/***/ 74248:
/*!***************************************************************!*\
  !*** ./src/app/convenios/convenios.component.html?ngResource ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<ion-header translucent>\n  <ion-toolbar class=\"background-image header_page\">\n    <ion-title>{{mrn.empresaSeleccionada.nom_empresa}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\"><i class=\"fas fa-times\" style=\"font-size: 1.5em\"></i></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-progress-bar color=\"secondary\" *ngIf=\"mrn.loading\" type=\"indeterminate\"></ion-progress-bar>\n</ion-header>\n<ion-content fullscreen>\n  <ion-searchbar showCancelButton=\"focus\" animated placeholder=\"Buscar\" #value (ionInput)=\"mrn.get_convenios_practisistemas(value.value)\"></ion-searchbar>\n  <div *ngIf=\"value.value\">\n    <ion-card  *ngFor=\"let convenio of mrn.convenios \" (click)=\"seleccionarConvenio(convenio)\">\n      <ion-card-header>\n        <ion-card-title>{{convenio.nombre}}</ion-card-title>\n      </ion-card-header>\n    </ion-card>\n  </div>\n  <div *ngIf=\"!value.value\" style=\"text-align: center;color: gray;padding: 15px\">\n    <h2>\n      Digite el nombre del convenio a buscar.\n    </h2>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 46284:
/*!***********************************************************************************!*\
  !*** ./src/app/info-factura-pagada/info-factura-pagada.component.html?ngResource ***!
  \***********************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<ion-header translucent>\n  <ion-toolbar class=\"background-image header_page\">\n    <ion-title>Resunmen de pago</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content style=\"margin-top: 20px\">\n  <ion-list>\n    <ion-item>\n      <ion-label>\n        <h3>{{mrn.factura_consultada.nconvenio}}</h3>\n        <p>Nombre de convenio</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h3>{{mrn.factura_consultada.referencia}}</h3>\n        <p>Referencia de pago</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h3>{{mrn.factura_consultada.valorPago}}</h3>\n        <p>Valor de pago</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h3>{{mrn.factura_pagada.codigoauth}}</h3>\n        <p>Codigo autorizacion</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h3>{{mrn.factura_pagada.respuesta}}</h3>\n        <p>Respuesta</p>\n      </ion-label>\n    </ion-item>\n    <ion-button style=\"margin-top: 20px\" shape=\"round\" (click)=\"dismissModal()\"  expand=\"block\">Aceptar</ion-button>\n  </ion-list>\n</ion-content>\n";

/***/ }),

/***/ 64591:
/*!***********************************************************************!*\
  !*** ./src/app/info-recaudos/info-recaudos.component.html?ngResource ***!
  \***********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<ion-header translucent>\n  <ion-toolbar class=\"background-image header_page\">\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\"><span style=\"font-size: 0.9em\">Cerrar</span></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content style=\"width: 100%\">\n  <img style=\"width: 100%;height: 100%\" src=\"assets/mrn-recaudo-facturas-movil.jpg\">\n</ion-content>\n";

/***/ }),

/***/ 35257:
/*!***********************************************************************!*\
  !*** ./src/app/pagar-factura/pagar-factura.component.html?ngResource ***!
  \***********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<ion-header translucent>\n  <ion-toolbar class=\"background-image header_page\">\n    <ion-title>Pagos a factura</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\"><i class=\"fas fa-times\" style=\"font-size: 1.5em\"></i></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-progress-bar color=\"secondary\" *ngIf=\"mrn.loading\" type=\"indeterminate\"></ion-progress-bar>\n</ion-header>\n\n<ion-content fullscreen>\n  <div style=\"width:100%;text-align: center;padding: 2px\">\n    <img  width=\"100%\" [src]=\"foto\" alt=\"\">\n  </div>\n  <div *ngIf=\"!mrn.abonos.length\">\n    <form [formGroup]=\"mrn.formPagos\">\n      <ion-list>\n        <ion-item>\n          <ion-label position=\"stacked\">Total Abono</ion-label>\n          <input class=\"input_number\" mask=\"separator.0\" thousandSeparator=\",\" inputmode=\"decimal\" formControlName=\"abono\">\n        </ion-item>\n        <!--<ion-item>\n          <ion-label position=\"stacked\">Numero de comprobante</ion-label>\n          <ion-input  formControlName=\"numero_recibo\" #numero (input)=\"mrn.verificar_soporte_pago(numero.value)\"></ion-input>\n        </ion-item>-->\n        <ion-item>\n          <ion-label position=\"stacked\">Entidad de recaudo</ion-label>\n          <ion-select formControlName=\"entidad\">\n            <ion-select-option *ngFor=\"let entidad of mrn.entidad_recaudo\" value=\"{{entidad.value}}\">{{entidad.label}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n    </form>\n  </div>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Resumen de pago</ion-card-title>\n    </ion-card-header>\n  </ion-card>\n  <div *ngIf=\"mrn.facturasSeleccionadas.length\">\n    <ion-card *ngFor=\"let factura of mrn.facturasSeleccionadas\">\n      <ion-card-content>\n        <table class=\"table_transact\">\n          <tr>\n            <th>Transaccion</th>\n            <td>{{factura.id}}</td>\n          </tr>\n          <tr>\n            <th>Valor transaccion</th>\n            <td>$ {{factura.valor|number}}</td>\n          </tr>\n          <tr>\n            <th>Saldo pendiente</th>\n            <td>$ {{factura.saldo_pendiente_pago|number}}</td>\n          </tr>\n        </table>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <div *ngIf=\"foto\" style=\"padding: 10px\">\n    <img style=\"width: 100%\" src=\"{{foto}}\" alt=\"\">\n  </div>\n  <div style=\"text-align: center;width: 100%;margin-top: 30px\">\n    <ion-button shape=\"round\" (click)=\"tomar_foto()\"\n                expand=\"block\">{{foto?'Volver a tomar foto':'Subir foto comprobante'}}</ion-button>\n    <ion-button [disabled]=\"!mrn.formPagos.valid\" shape=\"round\"\n                (click)=\"mrn.pagarFacturasPendientesRed(mrn.facturasSeleccionadas)\"\n                expand=\"block\">Enviar pago</ion-button>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar class=\"header_page\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\" style=\"text-align: center\">\n          <span style=\"font-size: 1.3em;font-weight: bold\">{{mrn.totalFacturasAPagar|number}}</span>\n          <p style=\"font-size: 0.8em\">\n            <i class=\"fas fa-dollar-sign\" style=\"margin-right: 2px\"></i>\n            Total a pagar</p>\n        </ion-col>\n        <ion-col size=\"6\" style=\"text-align: center\">\n          <span style=\"font-size: 1.3em;font-weight: bold\">{{mrn.facturasSeleccionadas.length|number}}</span>\n          <p style=\"font-size: 0.8em\">\n            <i class=\"fas fa-list\"  style=\"margin-right: 2px\"></i>\n            Seleccionadas</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n";

/***/ }),

/***/ 25987:
/*!***************************************************************!*\
  !*** ./src/app/productos/productos.component.html?ngResource ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<ion-header translucent>\n  <ion-toolbar class=\"background-image header_page\">\n    <ion-title>{{mrn.empresaSeleccionada.nom_empresa}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\"><i class=\"fas fa-times\" style=\"font-size: 1.5em\"></i></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-progress-bar color=\"secondary\" *ngIf=\"mrn.loading\" type=\"indeterminate\"></ion-progress-bar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-searchbar showCancelButton=\"focus\" animated placeholder=\"Buscar\" #value (ionInput)=\"buscar(value.value)\"></ion-searchbar>\n <ion-card *ngFor=\"let producto of mrn.listaFiltradaProductos\" (click)=\"seleccionarProducto(producto)\">\n    <ion-card-header>\n      <ion-card-title *ngIf=\"producto.producto.valor_producto\">${{producto.producto.valor_producto|number}}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <h5>{{producto.producto.nom_producto}}</h5>\n      <p  *ngIf=\"producto.producto.descuento_promosional\" style=\"font-size: 0.8em;text-align: justify\">\n        <i class=\"fas fa-star\" style=\"color: orange; margin-right: 10px\"></i>\n        vendiendo este producto {{mrn.empresaSeleccionada.nom_empresa}} te regala $ {{producto.producto.descuento_promosional|number}}  de ganancia adicional.</p>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n";

/***/ }),

/***/ 43747:
/*!***********************************************************************!*\
  !*** ./src/app/reporte-pagos/reporte-pagos.component.html?ngResource ***!
  \***********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar class=\"header_page\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{mrn.tipo_reporte}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\"><i class=\"fas fa-times\" style=\"font-size: 1.5em\"></i></ion-button>\n    </ion-buttons>\n    <ion-progress-bar color=\"secondary\" *ngIf=\"mrn.loading\" type=\"indeterminate\"></ion-progress-bar>\n  </ion-toolbar>\n</ion-header>\n<ion-content style=\"padding: 10px\">\n  <ion-card>\n    <ion-card-content>\n      Por favor seleccione una fecha para realizar su consulta.\n      <ion-item>\n        <ion-input [value]=\"fecha_consulta\"></ion-input>\n        <ion-button fill=\"clear\" id=\"open-date-input-1\">\n          <ion-icon icon=\"calendar\"></ion-icon>\n        </ion-button>\n        <ion-popover trigger=\"open-date-input-1\" show-backdrop=\"false\">\n          <ng-template>\n            <ion-datetime #fecha (ionChange)=\"fecha_consulta = this.formatDate(fecha.value); popoverController.dismiss()\"\n                          presentation=\"date\"></ion-datetime>\n          </ng-template>\n        </ion-popover>\n      </ion-item>\n      <ion-item>\n        <ion-input [value]=\"fecha_consulta2\"></ion-input>\n        <ion-button fill=\"clear\" id=\"open-date-input-2\">\n          <ion-icon icon=\"calendar\"></ion-icon>\n        </ion-button>\n        <ion-popover trigger=\"open-date-input-2\" show-backdrop=\"false\">\n          <ng-template>\n            <ion-datetime #fecha2 presentation=\"date\" (ionChange)=\"consultar(fecha_consulta,fecha2)\"\n            ></ion-datetime>\n          </ng-template>\n        </ion-popover>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n  <ion-accordion-group >\n    <ion-accordion *ngFor=\"let transaccion of mrn.pagos_by_fecha\" value=\"{{transaccion.transaccion.id}}\">\n      <ion-item slot=\"header\">\n\n        <ion-label>\n          <h2>Transaccion N°.{{transaccion.transaccion.id}}</h2>\n          <p>$ {{transaccion.transaccion.valor|number}}</p>\n          <p>{{transaccion.transaccion.estadoPago}}</p>\n        </ion-label>\n      </ion-item>\n      <div style=\"padding: 10px\" slot=\"content\">\n        <ion-accordion-group>\n          <ion-accordion *ngFor=\"let pago of transaccion.items\" value=\"{{pago.id}}\">\n            <ion-item slot=\"header\">\n              <ion-label>\n                <h3>$ {{pago.abono|number}}</h3>\n                <p>Fecha: {{pago.created_at|date:\"dd-MM-yyyy\"}} </p>\n              </ion-label>\n            </ion-item>\n            <div style=\"padding: 10px\" slot=\"content\">\n              <table class=\"table_transact\">\n                <tr>\n                  <th>Pago id</th>\n                  <td>{{pago.id}}</td>\n                </tr>\n                <tr>\n                  <th>Fecha pago</th>\n                  <td>{{pago.created_at|date:\"dd-MM-yyyy\"}}</td>\n                </tr>\n                <tr>\n                  <th>Entidad recaudo</th>\n                  <td>{{pago.entidad}}</td>\n                </tr>\n                <tr>\n                  <th>N° Comprobante</th>\n                  <td>{{pago.numero_recibo}}</td>\n                </tr>\n                <tr>\n                  <th>Estado</th>\n                  <td>{{pago.estadoPago}}</td>\n                </tr>\n                <tr>\n                  <th>Comprobante</th>\n                  <td *ngIf=\"pago.soporte!=''&& pago.soporte!= 'Pendiente'\">\n                    <span style=\"color: #5e81ac;font-weight: bold\" (click)=\"presentModal(pago)\">Ver soporte</span></td>\n                  <td *ngIf=\"pago.soporte==''|| pago.soporte== 'Pendiente'\">\n                    <span style=\"color: #5e81ac;font-weight: bold\">Sin soporte</span></td>\n                </tr>\n              </table>\n            </div>\n          </ion-accordion>\n        </ion-accordion-group>\n      </div>\n    </ion-accordion>\n  </ion-accordion-group>\n  <ion-list *ngIf=\"mrn.misSolicitudesSaldo.length\">\n    <ion-item>\n      <ion-label slot=\"end\">\n        <h1  style=\"text-align: right\">$ {{mrn.total_sol_contado|number}}</h1>\n        <p>Total Solicitudes Contado</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label slot=\"end\">\n        <h1  style=\"text-align: right\">$ {{mrn.total_sol_credito|number}}</h1>\n        <p>Total solicitudes credito pagadas</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label slot=\"end\">\n        <h1 style=\"text-align: right\">$ {{mrn.total_sol_credito_pend|number}}</h1>\n        <p>Total solicitudes credito pago pendiente</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label slot=\"end\">\n        <h1 style=\"text-align: right\">$ {{mrn.total_sol_contado+mrn.total_sol_credito+mrn.total_sol_credito_pend|number}}</h1>\n        <p>Total solicitudes</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";

/***/ }),

/***/ 18213:
/*!***********************************************************************************!*\
  !*** ./src/app/reporte-solicitudes/reporte-solicitudes.component.html?ngResource ***!
  \***********************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar class=\"header_page\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{mrn.tipo_reporte}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\"><i class=\"fas fa-times\" style=\"font-size: 1.5em\"></i></ion-button>\n    </ion-buttons>\n    <ion-progress-bar color=\"secondary\" *ngIf=\"mrn.loading\" type=\"indeterminate\"></ion-progress-bar>\n  </ion-toolbar>\n</ion-header>\n<ion-content style=\"padding: 10px\">\n  <ion-card>\n    <ion-card-content>\n      Por favor seleccione una fecha para realizar su consulta.\n      <ion-item>\n        <ion-label>Desde: </ion-label>\n        <ion-input [(ngModel)]=\"fechai\" type=\"date\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Hasta: </ion-label>\n        <ion-input [(ngModel)]=\"fechaf\" type=\"date\"></ion-input>\n      </ion-item>\n      <div style=\"margin-top: 35px\" >\n        <ion-button shape=\"round\" expand=\"block\" [disabled]=\"!fechai&&!fechaf\"\n                    (click)=\"this.mrn.get_solicitudes_by_fecha(fechai,fechaf)\">Consultar</ion-button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <ion-accordion-group >\n    <ion-accordion *ngFor=\"let transaccion of mrn.misSolicitudesSaldo\" value=\"{{transaccion.label}}\">\n      <ion-item slot=\"header\">\n        <ion-label>\n          <h2>{{transaccion.label=='SSC'?'Transacción Contado':'Transacción Crédito'}}</h2>\n          <p>{{transaccion.items.length}} registros</p>\n        </ion-label>\n      </ion-item>\n      <div style=\"padding: 10px\" slot=\"content\">\n        <ion-accordion-group>\n          <ion-accordion *ngFor=\"let solicitud of transaccion.items\" value=\"{{solicitud.id}}\">\n            <ion-item slot=\"header\">\n              <ion-label>\n                <h3>$ {{solicitud.valor|number}}</h3>\n                <p>Fecha: {{solicitud.created_at|date:\"dd-MM-yyyy\"}} </p>\n                <p><ion-icon style=\"color: {{solicitud.estado == 'Rechazado'?'darkred':'darkgreen'}}\" name=\"radio-button-on-outline\"></ion-icon>{{solicitud.estado}} </p>\n              </ion-label>\n            </ion-item>\n            <div style=\"padding: 10px\" slot=\"content\">\n              <table class=\"table_transact\">\n                <tr>\n                  <th>solicitud id</th>\n                  <td>{{solicitud.id}}</td>\n                </tr>\n                <tr>\n                  <th>Fecha solicitud</th>\n                  <td>{{solicitud.created_at|date:\"dd-MM-yyyy\"}}</td>\n                </tr>\n                <tr>\n                  <th>Hora solicitud</th>\n                  <td>{{solicitud.hour_at|date:'shortTime'}}</td>\n                </tr>\n                <tr>\n                  <th>Usuario</th>\n                  <td>{{solicitud.usuario.first_name}}</td>\n                </tr>\n                <tr>\n                  <th>Forma de pago</th>\n                  <td>{{(solicitud.tipo_transaccion == 'SSC')?'Contado':'Credito'}}</td>\n                </tr>\n                <tr>\n                  <th>Tipo de comision</th>\n                  <td>{{(solicitud.tipoServicio=='CV')?'Comision venta':'Comision anticipada'}}</td>\n                </tr>\n                <tr>\n                  <th>Valor solicitado</th>\n                  <td>$ {{solicitud.valor|number}}</td>\n                </tr>\n                <tr>\n                  <th>Estado de solicitud</th>\n                  <td>{{solicitud.estado}}</td>\n                </tr>\n                <tr>\n                  <th>Estado de pago</th>\n                  <td>{{solicitud.estadoPago}}</td>\n                </tr>\n              </table>\n            </div>\n          </ion-accordion>\n        </ion-accordion-group>\n      </div>\n    </ion-accordion>\n  </ion-accordion-group>\n  <ion-card>\n    <ion-list *ngIf=\"mrn.misSolicitudesSaldo.length\">\n      <ion-item>\n        <ion-label slot=\"end\">\n          <h3  style=\"text-align: right\">$ {{mrn.total_sol_contado|number}}</h3>\n          <p>Total Solicitudes Contado</p>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label slot=\"end\">\n          <h3  style=\"text-align: right\">$ {{mrn.total_sol_credito|number}}</h3>\n          <p>Total solicitudes credito pagadas</p>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label slot=\"end\">\n          <h3 style=\"text-align: right\">$ {{mrn.total_sol_credito_pend|number}}</h3>\n          <p>Total solicitudes credito pago pendiente</p>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label slot=\"end\">\n          <h3 style=\"text-align: right\">$ {{mrn.total_sol_contado+mrn.total_sol_credito+mrn.total_sol_credito_pend|number}}</h3>\n          <p>Total solicitudes</p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n</ion-content>\n";

/***/ }),

/***/ 19273:
/*!*************************************************************************!*\
  !*** ./src/app/reporte-ventas/reporte-ventas.component.html?ngResource ***!
  \*************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar class=\"header_page\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{mrn.tipo_reporte}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\"><i class=\"fas fa-times\" style=\"font-size: 1.5em\"></i></ion-button>\n    </ion-buttons>\n    <ion-progress-bar color=\"secondary\" *ngIf=\"mrn.loading\" type=\"indeterminate\"></ion-progress-bar>\n  </ion-toolbar>\n</ion-header>\n<ion-content style=\"padding: 10px\">\n  <ion-card>\n    <ion-card-content>\n      Por favor seleccione una fecha para realizar su consulta.\n      <ion-item>\n        <ion-label>Desde: </ion-label>\n        <ion-input [(ngModel)]=\"fechai\" type=\"date\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Hasta: </ion-label>\n        <ion-input [(ngModel)]=\"fechaf\" type=\"date\"></ion-input>\n      </ion-item>\n      <div style=\"margin-top: 35px\" >\n        <ion-button shape=\"round\" expand=\"block\" [disabled]=\"!fechai&&!fechaf\"\n                    (click)=\"this.mrn.get_ventas_by_fecha(this.fechai,this.fechaf)\">Consultar</ion-button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <ion-accordion-group *ngIf=\"mrn.ventas_by_fecha.length\">\n    <ion-accordion *ngFor=\"let transaccion of mrn.ventas_by_fecha\" value=\"{{transaccion['data'].producto_venta.producto.id}}\">\n      <ion-item slot=\"header\">\n        <ion-avatar style=\"margin-right: 15px\">\n          <img src=\"{{transaccion.data.producto_venta.producto.empresa.imagen}}\" alt=\"\">\n        </ion-avatar>\n        <ion-label>\n          <h2>Ventas: ${{mrn.calcular_totales(transaccion.items)|number}}</h2>\n          <h2>Ganancias: ${{mrn.calcular_totales_ganancias(transaccion.items)|number}}</h2>\n          <p>{{transaccion.data.producto_venta.producto.empresa.nom_empresa}}</p>\n        </ion-label>\n      </ion-item>\n      <div style=\"padding: 10px\" slot=\"content\">\n        <ion-accordion-group>\n          <ion-accordion *ngFor=\"let venta of transaccion.items\" value=\"{{venta.info.id}}\">\n            <ion-item slot=\"header\">\n              <ion-label style=\"color:{{(venta.info.codigo_resultado=='001'||venta.info.codigo_resultado=='00')?'':'darkred'}}\">\n                <h3 style=\"color: {{getIcon(venta.info.codigo_resultado)[1]}}\">\n                  <ion-icon name=\"{{getIcon(venta.info.codigo_resultado)[0]}}\" style=\"color: {{getIcon(venta.info.codigo_resultado)[1]}}\"></ion-icon>\n                  {{venta.info.numeroDestino}}</h3>\n                <h5>Valor : ${{venta.info.valor|number}}</h5>\n                <h5>Ganancia : ${{venta.info.ganancia|number}}</h5>\n                <h5>Venta desde : ${{venta.info.venta_desde}}</h5>\n                <p>Fecha : {{venta.info.hour_at|date:'medium'}} </p>\n              </ion-label>\n            </ion-item>\n            <div style=\"padding: 10px\" slot=\"content\">\n              <table class=\"table_transact\">\n                <tr>\n                  <td colspan=\"2\" style=\"text-align: justify\">{{venta.info.producto_venta.producto.nom_producto}}</td>\n                </tr>\n                <tr>\n                  <th>Venta id</th>\n                  <td>{{venta.info.id}}</td>\n                </tr>\n                <tr>\n                  <th>Operador</th>\n                  <td>{{venta.info.producto_venta.producto.empresa.nom_empresa}}</td>\n                </tr>\n                <tr>\n                  <th>Convenio</th>\n                  <td>{{venta.info.convenio_pago}}</td>\n                </tr>\n                <tr>\n                  <th>Referencia</th>\n                  <td>{{venta.info.referencia_pago}}</td>\n                </tr>\n                <tr>\n                  <th>Venta desde</th>\n                  <td>{{venta.info.venta_desde}}</td>\n                </tr>\n                <tr>\n                  <th>Saldo anterior</th>\n                  <td>$ {{venta.info.ultimoSaldo|number}}</td>\n                </tr>\n                <tr>\n                  <th>Valor de la venta</th>\n                  <td>$ {{venta.info.valor|number}}</td>\n                </tr>\n                <tr>\n                  <th>Nuevo saldo</th>\n                  <td>$ {{venta.info.saldo_actual|number}}</td>\n                </tr>\n                <tr>\n                  <th>Ganancia</th>\n                  <td>$ {{venta.info.ganancia|number}}</td>\n                </tr>\n                <tr>\n                  <th>Codigo resultado</th>\n                  <td>{{venta.info.codigo_resultado}}</td>\n                </tr>\n                <tr>\n                  <td colspan=\"2\" style=\"text-align: justify;color: grey\">{{venta.info.resultado}}</td>\n                </tr>\n              </table>\n            </div>\n          </ion-accordion>\n        </ion-accordion-group>\n      </div>\n    </ion-accordion>\n  </ion-accordion-group>\n  <ion-item lines=\"inset\">\n    <ion-label slot=\"end\">\n      <h1>$ {{mrn.total_consulta_ganancias|number}}</h1>\n      <p>Total ganancias</p>\n    </ion-label>\n    <ion-label slot=\"start\">\n      <h1>$ {{mrn.total_consulta_ventas|number}}</h1>\n      <p>Total ventas</p>\n    </ion-label>\n  </ion-item>\n</ion-content>\n";

/***/ }),

/***/ 38657:
/*!*****************************************************************************!*\
  !*** ./src/app/reportes-detalle/reportes-detalle.component.html?ngResource ***!
  \*****************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar class=\"header_page\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{mrn.tipo_reporte}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\"><i class=\"fas fa-times\" style=\"font-size: 1.5em\"></i></ion-button>\n    </ion-buttons>\n    <ion-progress-bar color=\"secondary\" *ngIf=\"mrn.loading\" type=\"indeterminate\"></ion-progress-bar>\n  </ion-toolbar>\n</ion-header>\n<ion-content style=\"padding: 10px\">\n  <ion-card>\n    <ion-card-content>\n      Por favor seleccione una categoria para realizar su consulta.\n      <ion-item>\n        <ion-label>Categorias</ion-label>\n        <ion-select (ionChange)=\"seleccionarCategoria($event)\">\n          <ion-select-option *ngFor=\"let categoria of mrn.lista_comisiones_venta\"  value=\"{{categoria.nom_categoria}}\">\n            {{categoria.nom_categoria}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n    <ion-list *ngIf=\"api.nodoActual['tipoComision']=='CV'\">\n      <ion-item  *ngFor=\"let item of convencion\">\n        <ion-avatar style=\"margin-right: 15px\">\n          <img src=\"{{item.logo_empresa}}\" alt=\"\">\n        </ion-avatar>\n        <ion-label>\n          <h3>{{item.nom_empresa}}</h3>\n        </ion-label>\n        <ion-label slot=\"end\">\n          <h3>{{item.micomision <= 50?item.micomision + '%':'$'+item.micomision}}</h3>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  <ion-list *ngIf=\"api.nodoActual['tipoComision']=='CA'\">\n    <ion-item  *ngFor=\"let item of convencion\">\n      <ion-avatar style=\"margin-right: 15px\">\n        <img src=\"{{item.logo_empresa}}\" alt=\"\">\n      </ion-avatar>\n      <ion-label>\n        <h3>{{item.nom_empresa}}</h3>\n      </ion-label>\n      <ion-label slot=\"end\">\n        <h3>{{api.nodoActual['comisionAnticipada']}}%</h3>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";

/***/ }),

/***/ 2605:
/*!*******************************************************************************************!*\
  !*** ./src/app/resultado-venta-recarga/resultado-venta-recarga.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<ion-header translucent>\n  <ion-toolbar class=\"background-image header_page\">\n    <ion-title>Resultado de la venta</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\"><i class=\"fas fa-times\" style=\"font-size: 1.5em\"></i></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-progress-bar color=\"secondary\" *ngIf=\"mrn.loading\" type=\"indeterminate\"></ion-progress-bar>\n</ion-header>\n\n<ion-content fullscreen>\n  <div style=\"text-align: center;margin-top: 10px\">\n    <ion-icon  style=\"font-size: 2.4em;color: {{getColorIcon(mrn.trans_resultado_venta.codigo_resultado)[0]}}\"  name=\"{{getColorIcon(mrn.trans_resultado_venta.codigo_resultado)[1]}}\"></ion-icon>\n  </div>\n  <div style=\"text-align: center\">\n    <span style=\"font-size: 1.5em;font-weight: bold\">{{mrn.trans_resultado_venta.resultado}}</span>\n  </div>\n  <ion-list>\n    <ion-item>\n      <ion-label>\n        <h3>{{mrn.trans_resultado_venta.id}}</h3>\n        <p>Transacción N°</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h3>{{mrn.trans_resultado_venta.hour_at| date:'short'}}</h3>\n        <p>Fecha</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h3>{{mrn.trans_resultado_venta.numeroDestino}}</h3>\n        <p>Número celular</p>\n      </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"this.mrn.factura_consultada\">\n      <ion-label>\n        <h5>{{this.mrn.trans_resultado_venta.convenio_pago}}</h5>\n        <p>Convenio</p>\n      </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"!this.mrn.factura_consultada\">\n    <ion-label>\n      <h5>{{mrn.trans_resultado_venta.nom_producto}}</h5>\n      <p>Producto en venta</p>\n    </ion-label>\n  </ion-item>\n    <ion-item>\n      <ion-label>\n        <h3>{{mrn.trans_resultado_venta.nombre_empresa}}</h3>\n        <p>Empresa</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h3>$ {{mrn.trans_resultado_venta.valor|number}}</h3>\n        <p>Valor venta</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button style=\"margin-top: 30px\" shape=\"round\" expand=\"block\"\n                    (click)=\"mrn.trans_resultado_venta = '';dismissModal();\n              mrn.formVentasRecaudo.reset();mrn.convenio_seleccionado = '';\n              mrn.factura_consultada=''\">Aceptar\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"secondary\" *ngIf=\"api.nodoActual['imprime']\" style=\"margin-top: 30px\" shape=\"round\" expand=\"block\"\n                      (click)=\"mrn.imprimir_soporte(mrn.trans_resultado_venta);mrn.trans_resultado_venta = '';dismissModal();\n             mrn.formVentasRecaudo.reset();mrn.convenio_seleccionado = '';\n             mrn.factura_consultada=''\">Imprimir</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>\n";

/***/ }),

/***/ 31898:
/*!***********************************************************************!*\
  !*** ./src/app/resumen-venta/resumen-venta.component.html?ngResource ***!
  \***********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<ion-content>\n  <div style=\"text-align: center;margin: 25px 0 25px 0\">\n    <img style=\"width: 20%\"  src=\"{{mrn.empresaSeleccionada.logo_empresa}}\" alt=\"\">\n  </div>\n  <ion-list>\n    <ion-item *ngIf=\"mrn.obj_venta.referencia\">\n      <ion-label>\n        <h3>{{mrn.obj_venta.convenio}}</h3>\n        <p>Convenio</p>\n      </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"mrn.obj_venta.referencia\">\n      <ion-label>\n        <h3>{{mrn.obj_venta.referencia}}</h3>\n        <p>Referencia de pago</p>\n      </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"mrn.obj_venta.direccion\">\n      <ion-label>\n        <h3>{{mrn.obj_venta.direccion}}</h3>\n        <p>Direccion</p>\n      </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"mrn.obj_venta.documento\">\n      <ion-label>\n        <h3>{{mrn.obj_venta.documento}}</h3>\n        <p>Documento</p>\n      </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"mrn.obj_venta.celular\">\n      <ion-label>\n        <h1>{{mrn.obj_venta.placa?mrn.obj_venta.placa:mrn.obj_venta.celular}}</h1>\n        <p>Destino</p>\n      </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"mrn.obj_venta.telefono\">\n      <ion-label>\n        <h1>{{mrn.obj_venta.telefono}}</h1>\n        <p>{{mrn.empresaSeleccionada.nom_empresa == 'Directv'?'N°. de tarjeta':'N°. de celular'}}</p>\n      </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"mrn.obj_venta.email\">\n      <ion-label>\n        <h3>{{mrn.obj_venta.email}}</h3>\n        <p>Correo</p>\n      </ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"mrn.productoCodificadoSeleccionado\">\n      <ion-label>\n        <h3>{{mrn.productoCodificadoSeleccionado.producto.nom_producto}}</h3>\n        <p>Producto</p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label *ngIf=\"mrn.obj_venta.valor\">\n        <h1>${{mrn.obj_venta.valor|number}}</h1>\n        <p>Valor a pagar</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-grid>\n    <ion-row style=\"font-size: 0.8em\">\n      <ion-col>\n        <ion-button shape=\"round\" expand=\"block\"\n                    [disabled]=\"!(mrn.obj_venta.valor <= mrn.misBoslsasDinero.saldo_disponible)\"\n                    (click)=\"vender(false)\">Vender con saldo</ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"font-size: 0.8em\">\n      <ion-col>\n        <ion-button shape=\"round\" expand=\"block\"\n                    [disabled]=\"!(mrn.obj_venta.valor <= mrn.misBoslsasDinero.utilidad)\"\n                    (click)=\"vender(true)\">Vender con ganancias</ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"font-size: 0.8em\">\n      <ion-col>\n        <ion-button shape=\"round\" expand=\"block\" color=\"light\" (click)=\"modalController.dismiss()\">Cancelar</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ }),

/***/ 77974:
/*!*********************************************************************!*\
  !*** ./src/app/soat-vencido/soat-vencido.component.html?ngResource ***!
  \*********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<ion-header translucent>\n  <ion-toolbar class=\"background-image header_page\">\n    <ion-title>{{mrn.empresaSeleccionada.nom_empresa}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\"><i class=\"fas fa-times\" style=\"font-size: 1.5em\"></i></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-progress-bar color=\"secondary\" *ngIf=\"mrn.loading\" type=\"indeterminate\"></ion-progress-bar>\n</ion-header>\n\n<ion-content fullscreen>\n  <div style=\"text-align: center;margin: 25px 0 25px 0\">\n    <img style=\"width: 40%\"  src=\"{{mrn.empresaSeleccionada.imagen}}\" alt=\"\">\n  </div>\n  <ion-list>\n    <ion-list-header>\n      <ion-label>\n        <h2>Informacion del SOAT</h2>\n      </ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-label>\n        <h2>{{this.mrn.datos_soat['inicioVigencia']|date :'dd/MM/yyyy'}}</h2>\n        <h3>Inicio proxima vigencia</h3>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h2>{{this.mrn.datos_soat['finVigencia']|date :'dd/MM/yyyy'}}</h2>\n        <h3>Fin proxima vigencia</h3>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label slot=\"end\">\n        <h1>$ {{this.mrn.datos_soat['tarifa']['total']|number}}</h1>\n        <h3>Valor total</h3>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-list-header>\n      <ion-label>\n        <h2>Informacion del vehiculo</h2>\n      </ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-label>\n        <h2>{{this.mrn.datos_soat['vehiculo']['claseVehiculoMinisterio']}}</h2>\n        <h3>Tipo vehiculo</h3>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h2>{{this.mrn.formVentasSoat.value['placa']}}</h2>\n        <h3>Placa</h3>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h2>{{this.mrn.datos_soat['vehiculo']['marca']}}</h2>\n        <h3>Marca</h3>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h2>{{this.mrn.datos_soat['vehiculo']['cilindraje']|number}}</h2>\n        <h2>Cilindraje</h2>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h2>{{this.mrn.datos_soat['vehiculo']['lineaVehiculo']}}</h2>\n        <h3>Linea</h3>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-list *ngIf=\"this.mrn.datos_soat['tomador']\">\n    <ion-list-header>\n      <ion-label>\n        <h2>Informacion del propietario</h2>\n      </ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-label>\n        <h2>{{this.mrn.datos_soat['tomador']['nombres']}}</h2>\n        <h3>Nombres</h3>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h2>{{this.mrn.datos_soat['tomador']['apellidos']}}</h2>\n        <h3>Apellidos</h3>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <div style=\"margin-top: 35px\">\n    <ion-grid>\n      <ion-row>\n        <ion-col sise=\"6\">\n          <ion-button shape=\"round\" expand=\"block\" [disabled]=\"!mrn.formVentasSoat.valid ||\n               !(mrn.formVentasSoat.value['valor'] <= mrn.misBoslsasDinero.saldo_disponible)\"\n                      id=\"trigger-button\">Vender con saldo</ion-button>\n        </ion-col>\n        <ion-col sise=\"6\">\n          <ion-button shape=\"round\" expand=\"block\"\n                      [disabled]=\"!mrn.formVentasSoat.valid\n                || !(mrn.formVentasSoat.value['valor'] <= mrn.misBoslsasDinero.utilidad)\"\n          >Vender con ganacias</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 71983:
/*!*********************************************************************!*\
  !*** ./src/app/soat-vigente/soat-vigente.component.html?ngResource ***!
  \*********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<ion-header translucent>\n  <ion-toolbar class=\"background-image header_page\">\n    <ion-title>{{mrn.empresaSeleccionada.nom_empresa}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\"><i class=\"fas fa-times\" style=\"font-size: 1.5em\"></i></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-progress-bar color=\"secondary\" *ngIf=\"mrn.loading\" type=\"indeterminate\"></ion-progress-bar>\n</ion-header>\n\n<ion-content fullscreen>\n  <div style=\"text-align: center;margin: 25px 0 25px 0\">\n    <img style=\"width: 40%\"  src=\"{{mrn.empresaSeleccionada.imagen}}\" alt=\"\">\n  </div>\n  <ion-list>\n    <ion-list-header>\n      <ion-label>\n        <h2>{{this.mrn.datos_soat['vehiculo']['lineaVehiculo']}}</h2>\n        <h3>placa: {{mrn.formVentasSoat.value['placa']}}</h3>\n        <h3>Este vehiculo aun tiene el soat vigente.</h3>\n      </ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-label>\n        <h2>{{this.mrn.datos_soat['inicioVigencia']|date :'dd/MM/yyyy'}}</h2>\n        <h3>Inicio vigencia</h3>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h2>{{this.mrn.datos_soat['finVigencia']|date :'dd/MM/yyyy'}}</h2>\n        <h3>Fin vigencia</h3>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h2>$ {{this.mrn.datos_soat['tarifa']['total']|number}}</h2>\n        <h3>Valor total</h3>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h2>{{this.mrn.datos_soat['vehiculo']['marca']}}</h2>\n        <h3>Marca</h3>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <h3>{{this.mrn.datos_soat['vehiculo']['cilindraje']|number}}</h3>\n        <h2>Cilindraje</h2>\n      </ion-label>\n    </ion-item>\n    <!--<div style=\"padding-top: 25px\">\n      <ion-button expand=\"full\" (click)=\"mrn.descarga_soat_ms()\" size=\"small\">Descargar certificado SOAT</ion-button>\n    </div>-->\n  </ion-list>\n</ion-content>\n";

/***/ }),

/***/ 36635:
/*!***************************************************************************!*\
  !*** ./src/app/solicitud-saldo/solicitud-saldo.component.html?ngResource ***!
  \***************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<ion-header translucent>\n  <ion-toolbar class=\"background-image header_page\">\n    <ion-title>Solicitud de saldo</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\"><i class=\"fas fa-times\" style=\"font-size: 1.5em\"></i></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\n  <form [formGroup]=\"mrn.formTransaccion\">\n    <ion-list>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-button shape=\"round\" expand=\"full\"  (click)=\"cambiarValor(20000)\" size=\"small\" >20.000</ion-button>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-button shape=\"round\" expand=\"full\"  (click)=\"cambiarValor(30000)\" size=\"small\" >30.000</ion-button>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-button shape=\"round\" expand=\"full\"  (click)=\"cambiarValor(40000)\" size=\"small\" >40.000</ion-button>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-button shape=\"round\" expand=\"full\"  (click)=\"cambiarValor(50000)\" size=\"small\" >50.000</ion-button>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-button shape=\"round\" expand=\"full\"  (click)=\"cambiarValor(60000)\" size=\"small\" >60.000</ion-button>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-button shape=\"round\" expand=\"full\"  (click)=\"cambiarValor(70000)\" size=\"small\" >70.000</ion-button>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-button shape=\"round\" expand=\"full\"  (click)=\"cambiarValor(80000)\" size=\"small\" >80.000</ion-button>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-button shape=\"round\" expand=\"full\"  (click)=\"cambiarValor(100000)\" size=\"small\" >100.000</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-item>\n        <ion-label position=\"stacked\">Otro valor</ion-label>\n        <input class=\"input_number\" mask=\"separator.0\" thousandSeparator=\",\"\n               inputmode=\"decimal\" formControlName=\"valor\" >\n        <div *ngIf=\"mrn.formTransaccion.controls['valor'].invalid && (mrn.formTransaccion.controls['valor'].dirty || mrn.formTransaccion.controls['valor'].touched)\">\n          <p slot=\"end\" style=\"font-size: 0.8em;color: gray\" *ngIf=\"mrn.formTransaccion.controls['valor'].errors.min\">\n            Valor minimo de solicitud de saldo $20.000\n          </p>\n        </div>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">\n          Forma de pago\n        </ion-label>\n        <ion-select formControlName=\"tipo_transaccion\" (ionChange)=\"validarSoporte()\">\n          <ion-select-option value=\"SSC\">Contado</ion-select-option>\n          <ion-select-option value=\"SSCR\">Credito</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n  </form>\n  <div *ngIf=\"foto\" style=\"padding: 10px\">\n    <img style=\"width: 100%\" src=\"{{foto}}\" alt=\"\">\n  </div>\n  <div style=\"padding_top: 15px\">\n    <ion-button *ngIf=\"mrn.formTransaccion.value['tipo_transaccion'] == 'SSC'\"  shape=\"round\" (click)=\"tomar_foto()\"\n                expand=\"block\">{{foto?'Volver a tomar foto':'Subir foto comprobante'}}</ion-button>\n    <ion-button expand=\"full\"\n                shape=\"round\" color=\"primary\" [disabled]=\"!mrn.formTransaccion.valid\"\n                (click)=\"solicitarSaldo()\">Solicitar saldo</ion-button>\n  </div>\n</ion-content>\n<ion-toolbar class=\"header_page\" *ngIf=\"mrn.misBoslsasDinero\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\" style=\"text-align: center\">\n        <span style=\"font-size: 1.3em;font-weight: bold\">{{mrn.misBoslsasDinero.saldo_disponible|number}}</span>\n        <p style=\"font-size: 0.6em\">\n          <i class=\"fas fa-dollar-sign\" style=\"margin-right: 2px\"></i>\n          Saldo disponible</p>\n      </ion-col>\n      <ion-col size=\"6\" style=\"text-align: center\">\n        <span style=\"font-size: 1.3em;font-weight: bold\">{{mrn.misBoslsasDinero.utilidad|number}}</span>\n        <p style=\"font-size: 0.6em\">\n          <i class=\"fas fa-wallet\"  style=\"margin-right: 2px\"></i>\n          Mis ganancias</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-toolbar>\n";

/***/ }),

/***/ 45493:
/*!*************************************************************************!*\
  !*** ./src/app/ultimas-ventas/ultimas-ventas.component.html?ngResource ***!
  \*************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<ion-header translucent>\n  <ion-toolbar class=\"background-image header_page\">\n    <ion-title>Ultimas ventas</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\"><i class=\"fas fa-times\" style=\"font-size: 1.5em\"></i></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-progress-bar color=\"secondary\" *ngIf=\"mrn.loading\" type=\"indeterminate\"></ion-progress-bar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-searchbar showCancelButton=\"focus\" animated placeholder=\"Buscar\" #value (ionInput)=\"mrn.get_ventas_by_celular(value.value)\"></ion-searchbar>\n  <ion-card *ngFor=\"let venta of mrn.ventas_by_nodo\">\n    <ion-card-content>\n      <table class=\"table_transact\">\n        <tr>\n          <th>Venta id</th>\n          <td>{{venta.id}}</td>\n        </tr>\n        <tr>\n          <th>Fecha y hora</th>\n          <td>{{venta.created_at|date:\"dd-MM-yyyy\"}} {{venta.hour_at|date:'shortTime'}}</td>\n        </tr>\n        <tr>\n          <th>Telefono</th>\n          <td>{{venta.numeroDestino}}</td>\n        </tr>\n        <tr>\n          <th>Venta desde</th>\n          <td>{{venta.venta_desde}}</td>\n        </tr>\n        <tr>\n          <th>Operador</th>\n          <td>{{venta.producto_venta.producto.empresa.nom_empresa}}</td>\n        </tr>\n        <tr>\n          <th>Producto</th>\n        </tr>\n        <tr>\n          <td colspan=\"2\" style=\"text-align: justify\">{{venta.producto_venta.producto.nom_producto}}</td>\n        </tr>\n        <tr>\n          <th>Saldo anterior</th>\n          <td>$ {{venta.ultimoSaldo|number}}</td>\n        </tr>\n        <tr>\n          <th>Valor de la venta</th>\n          <td>{{venta.valor|number}}</td>\n        </tr>\n        <tr>\n          <th>Nuevo saldo</th>\n          <td>{{venta.saldo_actual|number}}</td>\n        </tr>\n      </table>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n";

/***/ }),

/***/ 90382:
/*!*****************************************************************************!*\
  !*** ./src/app/ver-soporte-pago/ver-soporte-pago.component.html?ngResource ***!
  \*****************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "<ion-header translucent>\n  <ion-toolbar class=\"background-image header_page\">\n    <ion-title>Soporte de pago</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\"><i class=\"fas fa-times\" style=\"font-size: 1.5em\"></i></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-progress-bar color=\"secondary\" *ngIf=\"mrn.loading\" type=\"indeterminate\"></ion-progress-bar>\n</ion-header>\n<ion-content>\n  <div style=\"padding: 15px\">\n    <img *ngIf=\"mrn.pagoSeleccionado\" style=\"width: 100%;height: 100%\" src=\"{{mrn.pagoSeleccionado.soporte}}\" alt=\"\">\n  </div>\n\n</ion-content>\n";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map