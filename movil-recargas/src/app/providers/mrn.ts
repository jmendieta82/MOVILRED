import {ElementRef, Injectable, ViewChild} from "@angular/core";
import {ApiService} from "./api";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import * as moment from 'moment';
import {isUndefined} from "lodash";
import {Router} from "@angular/router";
import {AlertController, LoadingController, ModalController, ToastController} from "@ionic/angular";
import {SoatVigenteComponent} from "../soat-vigente/soat-vigente.component";
import {SoatVencidoComponent} from "../soat-vencido/soat-vencido.component";
import {Storage} from "@ionic/storage-angular";
import {InfoFacturaPagadaComponent} from "../info-factura-pagada/info-factura-pagada.component";
import {ResultadoVentaRecargaComponent} from "../resultado-venta-recarga/resultado-venta-recarga.component";
import Print from "../providers/print-plugin";
@Injectable()
export class Mrn {
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
    USER_PRACTI = "113935"
    PWD_PRACTI = "1379"
    APP_VERSION = '2.1.46'
    formNodo: FormGroup;
    formUsuario: FormGroup;
    formProducto: FormGroup;
    formProveedor: FormGroup;
    formFuncionalidad: FormGroup;
    formComision: FormGroup;
    formEquipo: FormGroup;
    formEquipoNodo: FormGroup;
    formCodificarProducto: FormGroup;
    formServicioCategoria: FormGroup;
    formEmpresa: FormGroup;
    formProveedorEmpresa: FormGroup;
    formCreditos: FormGroup;
    formBolsas: FormGroup;
    formTransaccion: FormGroup;
    formZona: FormGroup;
    formZonaBarrio: FormGroup;
    formPagos: FormGroup;
    formRecoveryPwd: FormGroup;
    formVentasRecargas: FormGroup;
    formVentasRecaudo: FormGroup;
    formVentasCertificados: FormGroup;
    formVentasApuestas: FormGroup;
    formVentasSoat: FormGroup;
    formVentasPines: FormGroup;
    formVentasRecargasDirectv: FormGroup;
    loginForm:FormGroup;
    nodoSeleccionado;
    red:[];
    tiposId = [
        {label: 'Cedula ciudadanía', value: '1'},
        {label: 'Cedula extranjería', value: '2'},
        {label: 'Nit', value: '3'},
        {label: 'Tarjeta identidad', value: '4'},
        {label: 'Pasaporte', value: '5'},
        {label: 'Tarjeta seguro social', value: '6'},
        {label: 'Soc. extranjera sin nit en Colombia', value: '7'},
        {label: 'Fideicomiso', value: '8'},
        {label: 'Registro civil', value: '9'},
        {label: 'Adulto sin identificación', value: '10'},
        {label: 'Menor sin identificación', value: '11'},
        {label: 'Tarjeta profesional', value: '12'},
    ]
    comisiones = [];
    nodosDirectos = [];
    productos = [];
    catServicios = [];
    empresas = [];
    empresaSeleccionada;
    productosByProveedor = [];
    proveedorSeleccionado;
    productoCodificadoSeleccionado: any;
    Micredito;
    bolsasDinero;
    misBoslsasDinero;
    solicitudesSaldo = [];
    misSolicitudesSaldo = [];
    municipios = [];
    loading = false;
    loadingText = '';
    municipiosFiltrados = [];
    mensaje = '';
    verFormTransaccionTercero = false;
    verSubirArchivo = false;
    transaccionSeleccionada;
    facturasMora = [];
    lista_comisiones_venta=[];
    categoriaSeleccionada;
    productosByProveedorSinTiempoAlAire;
    RECARGASWS: RecargasWS;
    SALDOWS: SaldoWS;
    bad_login: string = '';
    tokenMessage: any;
    abonos = [];
    entidad_recaudo = [
        {label: 'Bancolombia', value: 'Bancolombia'},
        {label: 'Banco de Occidente', value: 'Banco de Occidente'},
        {label: 'Banco agrario', value: 'Banco agrario'},
        {label: 'Nequi', value: 'Nequi'},
        {label: 'Efecty', value: 'Efecty'},
    ]
    verFormEditNodo = false;
    verUltimasTransacciones = false;
    ventas_by_nodo = [];
    pagoSeleccionado;
    verFormEditNodoTercero = false;
    activeState: boolean[] = [false, false];
    messageSell:[];
    USUARIO_MSV = '00087482'
    PWD_MVS = 'h73P71Zi'
    datos_soat = [];
    listaFiltradaProductos= [];
    listaFiltradaVentas = [];
    obj_venta;
    teclado_show = true;
    ventas_by_fecha = [];
    tipo_reporte: string;
    total_consulta_ventas = 0;
    total_consulta_ganancias = 0;
    total_sol_contado = 0;
    total_sol_credito = 0;
    total_sol_credito_pend = 0;
    pagos_by_fecha =[];
    cartera = [];
    totalFacturasAPagar = 0;
    facturasSeleccionadas =[]
    convenios = []
    convenio_seleccionado:any;
    factura_consultada: any;
    factura_pagada: any;
    trans_resultado_venta: any;


    constructor(public api: ApiService, private fb: FormBuilder,private router:Router,
                public modalController: ModalController,public toastController: ToastController,
                public loadingController: LoadingController
                 ,private storage: Storage
              ) {
    }

    crearControles() {
        this.formNodo = this.fb.group({
            id: [''],
            barrio_id: [''],
            razonSocial: ['', Validators.required],
            tipo_persona: ['', Validators.required],
            identificacion_nodo: ['',Validators.required],
            tipo: ['', Validators.required],
            nodoPadre: [''],
            red: [''],
            comisiones: [''],
            telefono: ['', Validators.required],
            email: ['', Validators.required],
            direccion: ['', Validators.required],
            direcciones: [''],
            ref_comercial: [''],
            representanteLegal: [''],
            tipoComision: [''],
            comisionAnticipada: [''],
            aprobacion_credito_automatico: [''],
            solicitudes_de_credito_dia: ['3'],
            activo: [''],
            label: [''],
            icon: [''],
        })
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
            username: ['', Validators.required],
            password: [''],
            password2: [''],
            verify_username: [''],
            verify_identificacion: [''],
        })
        this.formFuncionalidad = this.fb.group({
            id: [''],
            funcionalidad: ['', Validators.required],
            funcionPadre: [''],
        })
        this.formComision = this.fb.group({
            id: [''],
            nodo_id: ['',],
            proveedorEmpresa_id: [''],
            activo: [''],
            micomision: ['', Validators.required],
            comisionComercio: [''],
            utilidad_comercio: [''],
            utilidad_distribuidor: [''],
            comisionDistribuidor: [''],
        })
        this.formProducto = this.fb.group({
            id: [''],
            empresa_id: [''],
            nom_producto: ['', Validators.required],
            valor_producto: ['', Validators.required],
            descuento_promosional: [''],
            tipo_producto: [''],
            activo: [''],
        })
        this.formEquipo = this.fb.group({
            id: [''],
            marca: ['', Validators.required],
            serial: ['', Validators.required],
            activo: [''],
            asignado: [''],
            nodo_id: [''],
        })
        this.formEquipoNodo = this.fb.group({
            id: [''],
            nodo_id: [''],
            equipo_id: [''],
            fechaAsignacion: ['', Validators.required],
            fechaDevolucion: [''],
            ordenEntrega: ['', Validators.required],
            ordenDevolucion: [''],
            observacionAsignacion: [''],
            observacionDevolucion: [''],
        })
        this.formServicioCategoria = this.fb.group({
            id: [''],
            nombre: [''],
        })
        this.formEmpresa = this.fb.group({
            id: [''],
            catServicio_id: [''],
            nom_empresa: [''],
            imagen: [''],
            activo: [''],
        })
        this.formProveedor = this.fb.group({
            id: [''],
            nombre_prov: ['', Validators.required],
            direccion_prov: ['', Validators.required],
            email_prov: ['', Validators.required],
            telefono_prov: ['', Validators.required],
            activo: [''],
        })
        this.formCodificarProducto = this.fb.group({
            id: [''],
            producto_id: [''],
            proveedor_id: [''],
            codigo_producto: [''],
            activo: [''],
        })
        this.formProveedorEmpresa = this.fb.group({
            id: [''],
            proveedor_id: [''],
            empresa_id: ['', Validators.required],
            comisionBase: ['', Validators.required],
            activo: [''],
        })
        this.formCreditos = this.fb.group({
            id: [''],
            nodo_id: [''],
            montoAutorizado: [''],
            plazoMaximo: [''],
            montoUtilizado: [''],
            montoDisponible: [''],
            activo: [''],
        })
        this.formBolsas = this.fb.group({
            id: [''],
            nodo_id: [''],
            saldo_disponible: [''],
            utilidad: [''],
            activo: [''],
        })
        this.formTransaccion = this.fb.group({
            id: [''],
            usuario_id: [''],
            nodo_id: [''],
            producto_venta_id: [''],
            tipoServicio: [''],
            tipo_transaccion: ['', Validators.required],
            valor: ['', [Validators.required,Validators.min(20000)]],
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
            saldo_pendiente_pago: [''],

        })
        this.formZona = this.fb.group({
            id: [''],
            nodo_id: [''],
            nombre: ['', Validators.required],
            activo: ['']
        })
        this.formZonaBarrio = this.fb.group({
            id: [''],
            zona_id: [''],
            barrio_id: [''],
            activo: ['']
        })
        this.formPagos = this.fb.group({
            id: [''],
            transaccion_id: [''],
            abono: ['', Validators.required],
            saldo: [''],
            numero_recibo: [''],
            soporte: ['', Validators.required],
            facturas: [''],
            pagador : [''],
            usuario_id : [''],
            entidad: [''],
        })
        this.formRecoveryPwd = this.fb.group({
            identificacion: ['',Validators.required],
            username: ['',Validators.required],
        })
        this.formVentasRecargas = this.fb.group({
          telefono:['',[Validators.required,Validators.max(9999999999),Validators.min(999999999)]],
          tarjeta:['',],
          cedula: [''],
          valor: ['',Validators.required],
          matricula:[''],
          email:[''],
          oficina:[''],
        })
        this.formVentasRecargasDirectv = this.fb.group({
        telefono:['',Validators.required],
        tarjeta:['',],
        cedula: [''],
        valor: ['',Validators.required],
        matricula:[''],
        email:[''],
        oficina:[''],
      })
        this.formVentasPines = this.fb.group({
          telefono:[Validators.required],
          valor: ['',Validators.required],
          email:['',Validators.required],
        })
        this.formVentasCertificados = this.fb.group({
          telefono:['',Validators.required],
          valor: [''],
          matricula:['',Validators.required],
          email:['',Validators.required],
          oficina:[''],
          direccion:[''],
          noDocumento: [''],
          producto: [''],
        })
        this.formVentasApuestas = this.fb.group({
          celular:['',Validators.required],
          documento: ['',Validators.required],
          valor: ['',Validators.required],
        })
        this.formVentasSoat = this.fb.group({
        venta_ganancias:[''],
        nodo:[''],
        usuario_mrn:[''],
        producto_venta:[''],
        documento:['',Validators.required],
        producto:['',Validators.required],
        valor:['',Validators.required],
        celular:['',Validators.required],
        clave:[''],
        usuario:[''],
        nombres:[''],
        apellidos:[''],
        direccion:['',Validators.required],
        municipio:['',Validators.required],
        departamento:['',Validators.required],
        tipo_documento:['',Validators.required],
        email_soat:['',Validators.required],
        tipo_persona:[''],
        tarifa:[''],
        ValorPrima:[''],
        valor_contribucion:[''],
        valor_runt:[''],
        porcentaje_descuento_electrica:[''],
        id_marca:[''],
        cc:[''],
        chasis:[''],
        cilindraje:[''],
        toneladas:[''],
        motor:[''],
        marca:[''],
        lineaVehiculo:[''],
        placa:['',Validators.required],
        ocupantes:[''],
        tipo_servicio:[''],
        vin:[''],
        clase_vehiculo_id:[''],
        codVehMinTrans:[''],
        vehiculo:[''],
        linea_vehiculo:[''],
        departamentoMatricula:[''],
        aaaa_modelo:[''],
        tipo_carroceria:[''],
        inicio_vigencia:[''],
        finVigencia:[''],
        tipo_regimen:[''],
        valor_descuento_intermediario :[''],
        responsable_rut:[''],
        valor_descuento_electricos:[''],
        dtoLey2161:[''],
        bolsa_ganancia:[''],
        transaccion_externa:[''],
        canal_transaccion:[''],
        medioVenta:[''],
      })
        this.formVentasRecaudo = this.fb.group({
        convenio:[''],
        telefono:[''],
        referencia:[''],
        valor:[''],
      })
        this.loginForm = this.fb.group({
          id : [''],
          username : ['',Validators.required],
          password : ['',Validators.required],
          loggedIn : [''],
        });
    }

    llenarformUsuario(usuario: any) {
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
            password2: '',
        })
    }

    jsonToString(json: any) {
        return JSON.stringify(json);
    }

    stringToJson(array: any) {
        return array ? JSON.parse(array) : [];
    }


    getNodosDirectos() {
        this.nodosDirectos = []
        this.api.get('nodo/?nodoPadre=' + this.api.nodoActual['id'])
            .subscribe(
                data => {
                    if (data.length) {
                        this.nodosDirectos = data;
                    } else {
                        this.nodosDirectos = []
                    }
                }
            )
    }

    addDireccion(direccion, direcciones) {
        let dir = this.stringToJson(direcciones)
        dir.push(direccion)
        return this.jsonToString(dir)
    }

    updatePwdUsuario(usuario: any) {
        this.api.update('updatepwd', usuario.id, usuario)
            .subscribe(
                data => {
                    if (data) {
                      this.api.usuario = data
                      this.llenarformUsuario(data)
                      this.mensajeSistema('Su contraseña ha cambiado correctamente')
                    }
                }
            )
    }
    async mensajeSistema(mensaje) {
      const toast = await this.toastController.create({
        message: mensaje,
        duration: 2000
      });
      toast.present();
    }

    updateUsuario(usuario: any) {
        this.api.update('usuario', usuario.id, usuario)
            .subscribe(
                data => {
                    if (data) {
                      this.storage.get('usuario').then((val) => {
                        if(val!= undefined){
                          this.storage.set('usuario', JSON.stringify(data));
                        }
                      })
                      this.api.usuario = data
                      this.llenarformUsuario(data)
                      this.mensajeSistema('Datos actualizados correctamente')

                    }
                }
            )
    }

    registrarPuntoDeAcceso(usuario) {
        this.api.update('usuario', usuario.id, usuario)
            .subscribe(
                data => {
                    if (!isUndefined(data)) {
                        this.api.usuario = data;
                    }
                }
            )

    }

  async getComisiones(nodo) {
    this.comisiones = [];
    this.lista_comisiones_venta = [];
    await this.presentLoading()
    this.api.get('comision_app_list/?nodo=' + nodo.id)
      .subscribe(
        data => {
          if (!isUndefined(data)) {

            this.comisiones = data
            if(nodo.tipoComision == 'CA'){
              let comiAux = this.comisiones.filter(item=>item.nom_empresa=='Recargas y Paquetes')
              this.lista_comisiones_venta = this.crearArbolComisiones(comiAux.filter(item=>item.nom_empresa.toUpperCase()!='Directv'.toUpperCase()))
              this.categoriaSeleccionada =  this.lista_comisiones_venta[0]
              this.togleVentas(1,true)
            }else {
              this.lista_comisiones_venta = this.crearArbolComisiones(this.comisiones.filter(item=>item.logo_empresa))
              this.categoriaSeleccionada =''
              this.togleVentas(0,true)
            }
          } else {
            this.comisiones = [];
            this.lista_comisiones_venta = [];
          }
          this.loadingController.dismiss()
        }
      )
  }

    getCatServicio() {

        this.loadingText = 'Cargando categorias de servicio registradas'
        this.api.get('categoriadeservicio/')
            .subscribe(
                data => {
                    if (!isUndefined(data)) {
                        this.catServicios = data
                    } else {
                        this.catServicios = []
                    }

                }
            )
    }

    getProductosProveedor(proveedor_id, empresa_id) {
      this.loading = true
      this.productosByProveedorSinTiempoAlAire = []
      this.productosByProveedor = []
      this.listaFiltradaProductos = []
      this.api.get('productos_codificados_movil/?proveedor=' + proveedor_id+'&empresa='+empresa_id)
        .subscribe(
          data => {
            if (data.length) {
              this.productosByProveedor = data
              this.productosByProveedorSinTiempoAlAire = data.filter(item=>item.producto.nom_producto != 'Tiempo al aire')
              this.listaFiltradaProductos = this.productosByProveedorSinTiempoAlAire
            }
            this.loading = false;
          }
        )
    }

    getMiCredito() {

        this.api.get('creditos/?nodo=' + this.api.nodoActual['id'])
            .subscribe(
                data => {
                    if (!isUndefined(data)) {
                        this.Micredito = data[0];
                    } else {
                        this.Micredito = '';
                    }

                });
    }

    updateNodo(nodo: any) {
        nodo.direccion = this.addDireccion(nodo.direccion, nodo.direcciones);
        this.api.update('nodo', nodo.id, nodo)
            .subscribe(
                data => {
                    this.nodoSeleccionado = nodo;
                    this.verFormEditNodo = false;
                    this.verFormEditNodoTercero = false;
                    this.getNodosDirectos();
                    this.api.get('usuario/?nodo=' + nodo.id)
                        .subscribe(
                            data => {
                                this.enviar_mensaje(data[0]['id'], ('Se han modificado algunos datos, para más información comuniquese con su distribuidor.'), 'ACTND');
                            }
                        )
                }
            )
    }

    getBolsasDinero(nodo) {
      this.presentLoading()
        this.api.get('bolsa_dinero/?nodo=' + nodo.id)
            .subscribe(
                data => {
                    if (data.length) {
                        this.bolsasDinero = data[0];
                    } else {
                        this.bolsasDinero = [];
                    }
                    this.loadingController.dismiss()
                }
            )
    }

    getMisBolsasDinero() {
        this.api.get('bolsa_dinero_app/?nodo=' + this.api.nodoActual['id'])
            .subscribe(
                data => {
                    if (!isUndefined(data)) {
                        if (data.length) {
                            this.misBoslsasDinero = data[0];
                        } else {
                            this.misBoslsasDinero = [];
                        }
                    } else {
                        this.misBoslsasDinero = [];
                    }
                }
            )
    }

    getSolicitudesSaldo() {
        this.loading = true
        this.api.get('solicitudes_saldo/?idPadre=' + this.api.nodoActual['id'])
            .subscribe(
                data => {
                    if (!isUndefined(data)) {
                        if (data.length) {
                            this.solicitudesSaldo = data
                            this.getMisBolsasDinero();
                        } else {
                            this.solicitudesSaldo = [];
                            this.loading =false;
                        }

                    }
                }
            )
    }

    getMisSolicitudesSaldo() {
      this.loading = true;
        this.api.get('mis_solicitudes_saldo_movil/?nodo=' + this.api.nodoActual['id'])
            .subscribe(
                data => {
                    if (!isUndefined(data)) {
                        if (data.length) {
                            this.misSolicitudesSaldo = data
                            this.getMisBolsasDinero();
                        } else {
                            this.misSolicitudesSaldo = [];
                        }
                    }
                    this.loading = false;
                }
            )
    }

    addTransaccionTercero() {
      this.presentLoading()
        this.api.add('transaccion', this.formTransaccion.value)
            .subscribe(
                data => {
                    this.transaccionSeleccionada = data;
                    this.getSolicitudesSaldo();
                    this.formTransaccion.reset();
                    this.verSubirArchivo = data.tipo_transaccion == 'SSC' ? true : false;
                    this.verFormTransaccionTercero = false;
                    this.loadingController.dismiss()
                }
            )
    }

    getMunicipios() {
        this.api.get('municipio/')
            .subscribe(
                data => {
                    if (data.length) {
                        this.municipios = data
                        this.municipiosFiltrados = data
                    } else {
                        this.municipios = [];
                    }
                }
            )
    }

    getFacturasMora(nodo, showAuthorization?) {
        this.facturasMora = [];

        this.api.get('facturas_mora/?nodo=' + nodo.id)
            .subscribe(
                data => {
                    if (data.length) {
                        this.facturasMora = data;
                    } else {
                        if(nodo.mora){
                            nodo.mora = false
                            this.updateNodo(nodo)
                        }
                    }

                }
            )
    }

    getCartera(nodo) {
      this.cartera = [];
      this.api.get('caretra/?nodo=' + nodo.id)
        .subscribe(
          data => {
            if(data != undefined){
              if (data.length) {
                this.cartera = data;
              }
            }
          }
        )
    }

    crearArbolComisiones(data) {
        let lista = [];
        for (let item of data) {
            if (!lista.length) {
                lista.push({id:item.id,nom_categoria: item.nom_categoria, empresas: []})
            } else {
                if (!lista.filter(l => l.nom_categoria == item.nom_categoria).length) {
                    lista.push({id:item.id,nom_categoria: item.nom_categoria, empresas: []})
                }
            }
        }

        data.forEach(item => {
          const categoria = lista.find(l => l.nom_categoria === item.nom_categoria);
          if (categoria) {
            categoria.empresas.push(item);
          }
        });
        return lista
    }

    enviar_mensaje(usuario_id, mensaje, accion) {
        let obj = new Object();
        obj['usuario_id'] = usuario_id//Usuario receptor del mensaje
        obj['mensaje'] = mensaje
        obj['icono'] = 'assets/layout/images/logo-mirage@2x.png'
        obj['accion'] = accion

        this.api.post_soap('enviar_mensaje', obj)
            .subscribe(
                data => {

                }
            )
    }


    getNodoById(nodo) {
    this.api.get('nodo/?id=' + nodo.id)
      .subscribe(
        data => {
          if(!isUndefined(data)){
            if(data.length){
              this.api.nodoActual = data[0];
              this.nodoSeleccionado = data[0];
              this.storage.get('usuario').then((val) => {
                if(val!= undefined){
                  let usuario_aux = JSON.parse(val)
                  usuario_aux.nodo = this.api.nodoActual
                  this.storage.set('usuario', JSON.stringify(usuario_aux));
                }
              })
              this.router.navigate(['inicio'])
              /*if(!this.api.nodoActual['mora']){
                this.router.navigate(['inicio'])
              }else {
                this.getFacturasMora(this.api.nodoActual,false)
                this.router.navigate(['/mora'])
              }*/
            }
          }
        }
      )
  }

    venderRecargaVer2(venta_ganancias) {

      let bolsa = venta_ganancias?this.misBoslsasDinero.utilidad:this.misBoslsasDinero.saldo_disponible

      if(this.obj_venta.valor <= bolsa){
        let producto;
        if(this.productoCodificadoSeleccionado){
          producto = null;
          producto = this.productoCodificadoSeleccionado
        }else{
          producto = null;
          producto = this.productosByProveedor.filter(item => item.producto.nom_producto == 'Tiempo al aire')[0]
        }
        let mensaje = (parseInt(this.obj_venta.valor) >= 40000)?('Esta a punto de realizar una venta de un valor alto, ' +
            'recuerde que usted puede ser victima de ESTAFA. ' +
            'Si ud confia en este cliente y cree que este no es su caso puede ' +
            'continuar vendiendo recarga de: $' + this.obj_venta.valor + ' al numero ' + this.obj_venta.telefono):
          'Desea realizar la recarga de: $' + this.obj_venta.valor + ' al numero ' + this.obj_venta.telefono + (venta_ganancias?' desde sus ganancias':'')+ ' ?'
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
          venta_ganancias:venta_ganancias,
          medioVenta:'Movil',
          tipo_datos:this.api.tipo_datos,
          tipo_red:this.api.tipo_red,
          app_ver:this.APP_VERSION
        }
        this.recargas_ver2_ms(this.RECARGASWS)
      }else{
        alert('Su saldo es insufuciente para realizar esta recarga, por favor solicite saldo.')
      }
    }

    recargas_ms(datos: RecargasWS) {
      this.api.post_soap('recargas_ms', datos)
        .subscribe(
          data => {
            if (!isUndefined(data)) {
              let respuesta = data
              this.getMisBolsasDinero();
              if (respuesta == '001') {
                alert( 'Transaccion exitosa!')
              } else {
                alert( respuesta)
              }
              this.activeState = [true,false];
              this.formVentasRecargas.reset();
              this.formVentasRecargasDirectv.reset();
              this.formVentasPines.reset();
              this.formVentasCertificados.reset();
              this.empresaSeleccionada = '';
              this.categoriaSeleccionada = '';
              this.productoCodificadoSeleccionado = '';
              this.messageSell = [];
              this.loadingController.dismiss()
              this.obj_venta = '';
              this.getLastVentasByNodo()
              this.router.navigate(['inicio']);
            }else {
              alert( 'No se ha podido realizar la transacción, por favor intente mas tarde.')
              this.loadingController.dismiss()
            }
            this.modalController.dismiss({
              'dismissed': true
            });

          }
        )
    }

    recargas_ver2_ms(datos: RecargasWS) {
      this.api.post_soap('recargas_ver2_ms', datos)
        .subscribe(
          data => {
            if (!isUndefined(data)) {
              let respuesta = JSON.parse(data)
              if(respuesta.codigo == '001'){
                this.trans_resultado_venta = respuesta.data
                this.present_resumen_ventas()
                this.activeState = [true,false];
                this.formVentasRecargas.reset();
                this.formVentasRecargasDirectv.reset();
                this.formVentasPines.reset();
                this.formVentasCertificados.reset();
                this.empresaSeleccionada = '';
                this.categoriaSeleccionada = '';
                this.productoCodificadoSeleccionado = '';
                this.messageSell = [];
                this.loadingController.dismiss()
                this.obj_venta = '';
                this.getMisBolsasDinero();
                //this.getLastVentasByNodo()
                this.router.navigate(['inicio']);
              }else{
                alert(respuesta.mensaje)
              }
            }else {
              alert( 'No se ha podido realizar la transacción, por favor intente mas tarde.')
            }
            this.loadingController.dismiss()
            this.modalController.dismiss({
              'dismissed': true
            });

          }
        )
    }

  async present_resumen_ventas() {
    const modal = await this.modalController.create({
      component: ResultadoVentaRecargaComponent,
    });
    return await modal.present();
  }
    recargas_certificado_ms(datos: RecargasWS) {
    this.api.post_soap('recargas_certificado_ms', datos)
      .subscribe(
        data => {
          if (!isUndefined(data)) {
            let respuesta = JSON.parse(data)
            this.getMisBolsasDinero();
            if (respuesta.codigo == '001') {
              alert( 'Transaccion exitosa!')
            } else {
              alert( respuesta.descripcion)
            }
            this.activeState = [true,false];
            this.formVentasRecargas.reset();
            this.formVentasRecargasDirectv.reset();
            this.formVentasPines.reset();
            this.formVentasCertificados.reset();
            this.empresaSeleccionada = '';
            this.categoriaSeleccionada = '';
            this.productoCodificadoSeleccionado = '';
            this.messageSell = [];
            this.loadingController.dismiss()
            this.obj_venta = '';
            this.getLastVentasByNodo()
            this.router.navigate(['inicio']);
          }else {
            alert( 'La transaccion fallo debido a un error interno, comuniquese con MRN Colombia.')
            this.loadingController.dismiss()
          }
          this.modalController.dismiss({
            'dismissed': true
          });

        }
      )
  }

    consultarCertificado() {
        if(confirm('Desea realizar la consulta de el predio N°: ' + this.formVentasCertificados.value['matricula'] + ' ?')){
          let consulta_certificado: Consulta_Certificado_MS = {
            oficina: this.formVentasCertificados.value['oficina'],
            matricula: this.formVentasCertificados.value['matricula'],
            usuario: this.USUARIO_MSV,
            password: this.PWD_MVS,
          }
          this.consulta_certificado_ms(consulta_certificado)
        }
    }

    consulta_certificado_ms(datos: Consulta_Certificado_MS) {
      this.loading = true
      this.api.post_soap('consulta_certificado_ms', datos)
        .subscribe(
          data => {

            if (!isUndefined(data)) {
              this.formVentasCertificados.patchValue({
                direccion:data,
                valor:this.productoCodificadoSeleccionado.producto.valor_producto
              });
            }
            this.loading = false
          }
        )
    }

    venderCertificado(venta_ganancias) {
    //let valor_venta = this.formVentasCertificados.value['valor']
    let oficina = this.formVentasCertificados.value['oficina']
    let matricula =  this.formVentasCertificados.value['matricula']
    let telefono =  this.formVentasCertificados.value['telefono']
    let noDocumento =  this.formVentasCertificados.value['noDocumento']
    let email =  this.formVentasCertificados.value['email']
    let bolsa = venta_ganancias?this.misBoslsasDinero.utilidad:this.misBoslsasDinero.saldo_disponible
      let producto;
      if(this.empresaSeleccionada.nom_empresa == 'RUNT'){
        producto = this.productosByProveedorSinTiempoAlAire.filter(item=>item.codigo_producto == 1382)[0]
      }else {
        producto = this.productosByProveedorSinTiempoAlAire.filter(item=>item.codigo_producto == this.formVentasCertificados.value['oficina'])[0]
      }
      let valor_venta = producto.producto.valor_producto

    if(valor_venta <= bolsa){

      if(confirm('Desea realizar la venta del certificado con matricula N°: ' + matricula + ' por valor de: ' +
      (this.empresaSeleccionada.nom_empresa == 'RUNT')?this.formVentasCertificados.value['valor']:producto.producto.valor_producto + ' ?')){
        this.RECARGASWS = {
          nodo: this.api.nodoActual['id'],
          usuario_mrn: this.api.usuario['id'],
          producto_venta: producto.id,
          producto: (this.empresaSeleccionada.nom_empresa == 'RUNT')?producto.codigo_producto:1290,
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
          venta_ganancias:venta_ganancias,
          medioVenta:'Movil'
        }
        this.recargas_certificado_ms(this.RECARGASWS)
      }
    }else{
      this.mensajes('Su saldo es insufuciente para realizar esta recarga, por favor solicite saldo.')
    }
  }

    venderApuestas(venta_ganancias) {
    let valor_venta = this.formVentasApuestas.value['valor']
    let telefono =  this.formVentasApuestas.value['celular']
    let noDocumento =  this.formVentasApuestas.value['documento']
    let bolsa = venta_ganancias?this.misBoslsasDinero.utilidad:this.misBoslsasDinero.saldo_disponible
    if(valor_venta <= bolsa){
      let producto = this.productosByProveedorSinTiempoAlAire[0]
      if(confirm('Desea realizar la recarga de apuesta al numero N°: ' + telefono + ' ' +
        'por valor de: ' + valor_venta + ' ?')){
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
          recargas_multiproducto:1,
          token: '',
          nombre: '',
          cod_municipio: '',
          cant_sorteos: 0,
          cant_cartones: 0,
          bolsa_ganancia: '',
          venta_ganancias:venta_ganancias,
          medioVenta:'Movil'
        }
        this.recargas_ver2_ms(this.RECARGASWS)
      }
    }else{
      alert('Su saldo es insufuciente para realizar esta recarga, por favor solicite saldo.')
    }
  }

    venderPines(venta_ganancias) {
    let valor_venta = this.formVentasPines.value['valor']
    let num_celular = this.formVentasPines.value['telefono']
    let email = this.formVentasPines.value['email']
    let bolsa = venta_ganancias?this.misBoslsasDinero.utilidad:this.misBoslsasDinero.saldo_disponible
    if(valor_venta <= bolsa){
      if(confirm('Desea vender '+this.productoCodificadoSeleccionado.producto.nom_producto+' ?')){
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
          venta_ganancias:venta_ganancias,
          medioVenta:'Movil'
        }
        this.recargas_ms(this.RECARGASWS)
      }
    }else{
      this.mensajes('Su saldo es insufuciente para realizar esta venta, por favor solicite saldo.')
    }
  }

    formatear_direccion(dir){
      return dir.replace(/[^a-zA-Z0-9]/g, ' ');
    }

    venderSoat(venta_ganancias) {
    let valor_venta = this.formVentasPines.value['valor']
    let num_celular = this.formVentasPines.value['telefono']
    let email = this.formVentasPines.value['email']
    if(valor_venta <= this.misBoslsasDinero.saldo_disponible){
      if(confirm('Desea vender '+this.productoCodificadoSeleccionado.producto.nom_producto+' ?')){
        this.formVentasSoat.patchValue({
          direccion:this.formatear_direccion(this.formVentasSoat.value['direccion'])
        })
        this.api.post_soap('recargar_soat_ms', this.formVentasSoat.value)
          .subscribe(
            data => {
              if (!isUndefined(data)) {
                if (data == '001') {
                  this.mensajes('El Soat se vendio exitosamente')
                  this.activeState = [true,false];
                  this.formVentasSoat.reset();
                  this.formVentasPines.reset();
                  this.formVentasCertificados.reset();
                  this.empresaSeleccionada = '';
                  this.categoriaSeleccionada = '';
                  this.productoCodificadoSeleccionado = '';
                  this.messageSell = [];
                } else {
                  this.mensajes(data)
                }
              }

            }
          )
      }
    }else{
      this.mensajes('Su saldo es insufuciente para realizar esta venta, por favor solicite saldo.')
    }
  }

    getLastVentasByNodo(state?) {
      this.presentLoading()
        this.ventas_by_nodo = [];
        this.api.get('ultimas_ventas_app/?nodo='+this.api.nodoActual['id'])
            .subscribe(data => {
                if(!isUndefined(data)){
                    if(data.length){
                        this.verUltimasTransacciones = true;
                        this.ventas_by_nodo = data;
                      this.listaFiltradaVentas = data;
                    }
                }
                this.loadingController.dismiss()
            })
    }

  togleVentas(index: number,state:boolean) {
        this.activeState[index] = state;
    }

  get_ventas_by_celular(value: string) {
        this.loading = true
        this.ventas_by_nodo = [];
        this.api.get('ventas_by_celular/?celular='+value+'&nodo='+this.api.nodoActual['id'])
            .subscribe(
                data=>{
                    if(!isUndefined(data)){
                        if(data.length){
                            this.ventas_by_nodo = data;
                        }else {
                            this.ventas_by_nodo = [];
                        }
                    }
                    this.loading = false
                }
            )
    }
  async mensajes(mensaje) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
  get_ventas_by_fecha(fi: any,ff: any) {
    this.loading = true
    this.total_consulta_ventas = 0;
    this.total_consulta_ganancias = 0;
    this.ventas_by_fecha = [];
    this.api.get('ventas_by_fecha/?fechaInicial='+fi+'&fechaFinal='+ff+'&nodo='+this.api.nodoActual['id'])
      .subscribe(
        data=>{
          if(!isUndefined(data)){
            if(data.length){
              this.ventas_by_fecha = this.crearArbolVentas(data);
              for(let venta of data){
                if(venta.codigo_resultado == '001'||venta.codigo_resultado == '00')this.total_consulta_ventas += venta.valor
                if(venta.codigo_resultado == '001'||venta.codigo_resultado == '00')this.total_consulta_ganancias += parseInt(venta.ganancia)
              }
            }else {
              this.ventas_by_fecha = [];
              this.mensajes('No se han encontrado registros para esta fecha')
            }
          }
          this.loading = false
        }
      )
  }
  get_solicitudes_by_fecha(fechai,fechaf) {
    this.loading = true
    this.total_consulta_ventas = 0;
    this.misSolicitudesSaldo = [];
    this.total_sol_contado = 0;
    this.total_sol_credito = 0;
    this.total_sol_credito_pend = 0;
    this.api.get('solicitudes_by_fecha/?fechai='+fechai+'&fechaf='+fechaf+'&nodo='+this.api.nodoActual['id'])
      .subscribe(
        data=>{
          if(!isUndefined(data)){
            if(data.length){
              this.misSolicitudesSaldo = this.crearArbolSolicitudesSaldo(data);
              for(let transaccion of this.misSolicitudesSaldo){
                for(let solicitud of transaccion.items){
                  if(transaccion.label == 'SSC'){
                    this.total_sol_contado +=  solicitud.valor
                  }else {
                    if(solicitud.estado == 'Pagado' && solicitud.estadoPago == 'Pago aceptado'){
                      this.total_sol_credito +=  solicitud.valor
                    }
                    if(solicitud.estado == 'Aprobado' && solicitud.estadoPago == 'Pendiente'){
                      this.total_sol_credito_pend +=  solicitud.valor
                    }
                  }
                }
              }
            }else {
              this.mensajes('No se han encontrado registros para esta fecha')
              this.misSolicitudesSaldo = [];
            }
          }
          this.loading = false
        }
      )
  }
  get_pagos_by_fecha(fecha,fecha2) {
    this.loading = true
    this.pagos_by_fecha = [];
    this.api.get('pagos_by_fecha/?fecha='+ fecha+'&fecha2='+fecha2+'&nodo='+this.api.nodoActual['id'])
      .subscribe(
        data=>{
          if(!isUndefined(data)){
            if(data.length){
              this.pagos_by_fecha = this.crearArbolPagos(data);
            }else {
              this.mensajes('No se han encontrado registros para esta fecha')
              this.pagos_by_fecha = [];
            }
          }
          this.loading = false
        }
      )
  }
  crearArbolPagos(data) {
    let lista = [];
    for (let item of data) {
      if (!lista.length) {
        lista.push({transaccion: item.transaccion, items: []})
      } else {
        if (!lista.filter(l => l.transaccion.id == item.transaccion.id).length) {
          lista.push({transaccion: item.transaccion, items: []})
        }
      }
    }

    for (let item of data) {
      lista.filter(l => l.transaccion.id == item.transaccion.id)[0]['items']
        .push(item)
    }
    return lista
  }
  crearArbolVentas(data) {
    let lista = [];
    for (let item of data) {
      if (!lista.length) {
        lista.push({data: item, label: item.producto_venta.producto.empresa.nom_empresa, items: []})
      } else {
        if (!lista.filter(l => l.label == item.producto_venta.producto.empresa.nom_empresa).length) {
          lista.push({data: item, label: item.producto_venta.producto.empresa.nom_empresa, items: []})
        }
      }
    }

    for (let item of data) {
      lista.filter(l => l.label == item.producto_venta.producto.empresa.nom_empresa)[0]['items']
        .push({
          label: item.producto_venta.producto.empresa.nom_empresa,
          info: item
        })

    }

    return lista
  }
  crearArbolSolicitudesSaldo(data) {
    let lista = [];
    for (let item of data) {
      if (!lista.length) {
        lista.push({label: item.tipo_transaccion, items: []})
      } else {
        if (!lista.filter(l => l.label == item.tipo_transaccion).length) {
          lista.push({label: item.tipo_transaccion, items: []})
        }
      }
    }

    for (let item of data) {
      lista.filter(l => l.label == item.tipo_transaccion)[0]['items']
        .push(item)
    }
    return lista
  }
  calcular_totales(items) {
      let total = 0;
      for(let item of items) {
        if(item.info.codigo_resultado == '001'||item.info.codigo_resultado == '00'){
          total += item.info.valor
        }

      }
      return total
  }
  calcular_totales_ganancias(items) {
    let total = 0;
    for(let item of items) {
      if(item.info.codigo_resultado == '001'||item.info.codigo_resultado == '00'){
        total += parseInt(item.info.ganancia)
      }
    }
    return total
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      spinner:'lines-sharp',
      message: 'Un momento por favor...',
      //duration: 60000
    });
    await loading.present();
  }
  async presentLoadingVentas() {
    const loading = await this.loadingController.create({
      spinner:'lines-sharp',
      message: 'Esperando respuesta del proveedor...',
      //duration: 60000
    });
    await loading.present();
  }
  pagarFacturasPendientesRed(facturas) {

   if(this.formPagos.value['abono'] > this.totalFacturasAPagar){
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
        saldo_pendiente_pago: 0,
      });
      this.addTransaccionTercero();
      this.formPagos.patchValue({
        facturas : JSON.stringify(facturas),
        abono:this.totalFacturasAPagar,
        pagador:this.api.nodoActual['id'],
        usuario_id:this.api.usuario['id']
      })
    }else {
      this.formPagos.patchValue({
        facturas : JSON.stringify(facturas),
        pagador:this.api.nodoActual['id'],
        usuario_id:this.api.usuario['id']
      })
    }
   this.presentLoading()
   this.api.post_soap('pagar_facturas_revision',this.formPagos.value)
      .subscribe(
        data=>{
          if(data != undefined){
            this.formPagos.reset()
            this.facturasSeleccionadas = []
            this.totalFacturasAPagar = 0
            this.modalController.dismiss();
            this.getFacturasMora(this.api.nodoActual,false)
            this.getCartera(this.api.nodoActual)
            if(this.api.nodoActual['mora']){
              this.router.navigate(['/cartera'])
            }
          }
          this.loadingController.dismiss()
        }
     )
  }
  /*****************************************************PARCTISISTEMAS**********************************************/
  get_convenios_practisistemas(parametro_busqueda) {
    //this.presentLoading()
    if(parametro_busqueda.length >=3){
      let parametros = {
        "idcomercio": this.USER_PRACTI,
        "claveventa": this.PWD_PRACTI,
        "tipoConsulta":"convenios_consulta",
        "data" : {"tipo": "0","key": parametro_busqueda},
        "idTrx":"1",
        "end_point":"preConsulta"
      }
      this.api.post_soap('consulta_convenios_practi',parametros)
        .subscribe(
          datos =>{
            this.convenios = []
            let object = JSON.parse(datos['data']['convenios'])

            for (const property in object) {
              this.convenios.push(object[property])
            }
            //this.loadingController.dismiss()
          }
        )
    }else{
      this.convenios = []
    }
  }
  consultar_referencia(ref?){
    let parametros = {}
    let referencia = ref?ref:this.formVentasRecaudo.value['referencia']
    if(referencia){
      this.presentLoading()
      if (referencia.toString().length < 12 && this.convenio_seleccionado){
        parametros = {
          "idcomercio": this.USER_PRACTI,
          "claveventa": this.PWD_PRACTI,
          "tipoConsulta":"consultaValorConvRef",
          "data":{
            "idConv":this.convenio_seleccionado.id,
            "extConvenio":referencia
          },
          "idTrx":"1",
          "end_point":"preConsulta"
        }
      }else {
        this.convenio_seleccionado = undefined
        parametros = {
          "idcomercio": this.USER_PRACTI,
          "claveventa": this.PWD_PRACTI,
          "tipoConsulta":"verifyBillEan",
          "data":{
            "eanbill":referencia
          },
          "idTrx":"1",
          "end_point":"preConsulta"
        }
      }
      this.api.post_soap('consulta_referencia_practi',parametros)
        .subscribe(
          datos =>{
            let respuesta = JSON.parse(datos)
            if(respuesta['data']['data']['reply'] == 'ok' && respuesta['codigo']=='00'){
              this.factura_consultada = respuesta['data']['data']
              // console.log( this.factura_consultada)
            }else {
              alert(respuesta['data']['data']['nombre']?respuesta['data']['data']['nombre']:respuesta['data']['data']['reply'])
              this.convenio_seleccionado = '';
              this.formVentasRecaudo.reset();
              this.factura_consultada=''
            }
            this.loadingController.dismiss()
          }
        )
    }else {
      alert('Por favor digite una referencia o escanee el codigo de barras.')
    }
  }
  pagar_factura(venta_ganancias){
    let producto = this.productosByProveedorSinTiempoAlAire[0]
    let tipo_convenio = ''
    if(this.convenio_seleccionado){
      tipo_convenio =  this.convenio_seleccionado.tipo == '0'?'667':'721'
    }else {
      tipo_convenio =  this.factura_consultada.tipo == '0'?'667':'721'
    }
    let parametros = {
      "idcomercio": this.USER_PRACTI,
      "claveventa": this.PWD_PRACTI,
      "celular":this.formVentasRecaudo.value['telefono'],
      "operador":"fc",
      "valor":this.formVentasRecaudo.value['valor'],
      "jsonAdicional":{"idPre":this.factura_consultada.idPre},
      "idtrans":"1",
      "end_point":"pracRec",
      "venta_ganancias":venta_ganancias,
      "nodo":this.api.nodoActual['id'],
      "usuario_mrn":this.api.usuario['id'],
      "producto_venta":tipo_convenio,
      "referencia":this.factura_consultada.referencia,
      "medioVenta":'Movil',
      "tipo_datos":this.api.tipo_datos,
      "tipo_red":this.api.tipo_red,
      "app_ver":this.APP_VERSION

    }
    this.api.post_soap('pago_factura_practi',parametros)
      .subscribe(
        datos =>{
          let respuesta = JSON.parse(datos)
          if(respuesta.codigo == '00'){
            this.trans_resultado_venta = respuesta.data
            this.factura_pagada = datos
            this.present_resumen_ventas()
            this.getMisBolsasDinero()
          }else{
            alert(respuesta.mensaje)
          }
          this.loadingController.dismiss()
          this.modalController.dismiss({
            'dismissed': true
          });
        }
      )
  }
/********************************************************************************************************************/
  cancelartVenta() {
    this.router.navigate(['/inicio'])
  }
  login_actions(usuario){
    this.teclado_show = true;
    this.api.usuario = usuario;
    if(this.loginForm.value['loggedIn']){
      this.storage.set('usuario', JSON.stringify(usuario));
    }
    this.api.nodoActual = usuario['nodo'];
    this.api.usuario['puntoAcceso'] = this.tokenMessage
    if(this.api.nodoActual['tipo']=='Comercio'){
      this.getComisiones(this.api.nodoActual)
      this.getMisBolsasDinero();
      this.router.navigate(['inicio']);
    }else {
      this.mensajes('El usuario que esta intentando ingresar es de tipo distribuidor, ' +
        'en MRN Colombia tenemos otra aplicacion especializada para usted.')
    }
    this.registrarPuntoDeAcceso(this.api.usuario)
  }
  separadorDeMiles(numero) {
      if(numero){
        // Convierto el número a string.
        let str = numero.toString();
        // Aquí almacenaremos los resultados.
        let resultado = "";

        // Recorremos el string con for "str.length" veces.
        for (let i = 0; i < str.length; i++) {
          // Cada número, lo concatenamos a "resultado".
          resultado += str[i];

          // y luego de concatenar el número, verifico si el iterador es un múltiplo de 3.
          // ponemos "i < str.length - 1" para evitar que el punto se agregue al final del string.
          if ((str.length - i - 1) % 3 === 0 && i < str.length - 1) {
            resultado += ".";
          }
        }

        return resultado;
      }else {
        return 0
      }

  }
  async imprimir_soporte(venta) {
    let nom_prod = venta.nom_producto?venta.nom_producto:venta.producto_venta.producto.nom_producto
    let nom_empresa = venta.nombre_empresa?venta.nombre_empresa:venta.producto_venta.producto.empresa.nom_empresa
    let fecha = moment(venta.hour_at).format("DD/MM/YYYY hh:mm:ss")
    let recibo = `
::::::::::MRN RECARGAS::::::::::
:::COMPROBANTE DE TRANSACCION:::
:::::::TRANSACCION EXITOSA::::::

TRANSACCION ID: ${venta.id}

FECHA:${fecha}
VALOR: $${this.separadorDeMiles(venta.valor)}
EMPRESA: ${nom_empresa}
CONVENIO:
${venta.convenio_pago?venta.convenio_pago:'n/a'}
PRODUCTO: ${venta.convenio_pago?'n/a':nom_prod}
REFERENCIA: ${venta.referencia_pago?venta.referencia_pago:'n/a'}
CODIGO DE APROBACION: ${venta.numeroAprobacion?venta.numeroAprobacion:'n/a'}
CEL: ${venta.numeroDestino}
EMAIL: ${venta.email?venta.email:'n/a'}
::::::GRACIAS POR SU COMPRA:::::

`;

    let { value } = await Print.print({ value: recibo });
}

}
