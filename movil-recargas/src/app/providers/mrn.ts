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
    public nombreArchivo = '';
    USER_PRACTI = "113935"
    PWD_PRACTI = "1379"
    // USER_PRACTI = '1425'
    // PWD_PRACTI = '1234'
    APP_VERSION = '2.1.45'
    verFormNodo = false;
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
    tipoAliado = [
        {label: 'Distribuidor', value: 'Distribuidor'},
        {label: 'Comercio', value: 'Comercio'},
    ]
    filtroSaldos = [
        {label: 'Pendiente', value: 'rgba(139, 111, 0, 0.38);color:black'},
        {label: 'Aprobado', value: 'rgba(39, 139, 0, 0.38);color:white'},
        {label: 'Rechazado', value: 'rgba(139,0,0,0.38);color:white'},
    ]
    cargos = [
        {label: 'Administrador(a)', value: 'Administrador'},
        {label: 'Supervisor(a)', value: 'Supervisor'},
        {label: 'Auxiliar', value: 'Auxiliar'},
        {label: 'Asesor(a)', value: 'Asesor'},
        {label: 'Cobrador(a)', value: 'Cobrador'},
    ]
    tipoServicioTransaccion = [
        {label: 'Comision por venta', value: 'CV'},
        {label: 'Comision anticipada', value: 'CA'},
    ]
    tipoPersona = [
        {label: 'Persona natural', value: 'PN'},
        {label: 'Persona juridica', value: 'PJ'},
    ]
    formaPago = [
        {label: 'Contado', value: 'SSC'},
        {label: 'Credito', value: 'SSCR'},
    ]
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
    rechazo_opt = [
        {label: 'Comprobante ilegible', value: 'Comprobante ilegible'},
        {label: 'Comprobante duplicado', value: 'Comprobante duplicado'},
        {label: 'Comprobante alterado', value: 'Comprobante alterado'},
        {label: 'Cliente en mora', value: 'Cliente en mora'},
        {label: 'Cupo de credito insuficiente', value: 'Cupo de credito insuficiente'},
    ]
    estadosTransaccion = [
        {label: 'Pendiente', value: 'Pendiente'},
        {label: 'Aprobado', value: 'Aprobado'},
        {label: 'Rechazado', value: 'Rechazado'},
    ]
    medio_de_solicitud = [
        {label: 'Telefono', value: 'Telefono'},
        {label: 'Whatsapp', value: 'Whatsapp'},
        {label: 'Otro', value: 'Otro'},
    ]
    direcciones = []
    nodosHijo = []
    verFormDireccion = false;
    usuarioByNodo;
    usuariosByNodo = [];
    verFormUsuario = false;
    funcionalidades=[];
    verFuncionalidades = false;
    usuarioSeleccionado;
    permisos = [];
    funcSeleccionada;
    comisiones = [];
    categoriasArbol:[];
    nodosDirectos = [];
    misComisiones = [];
    distribuidor;
    distribuidorAdmin;
    catEmpresaSeleccionada: any;
    verFormCatEmpresa = false;
    verProductosEmpresa = false;
    verFormProducto = false;
    productos = [];
    productoSeleccionado;
    equiposByNodo = [];
    verAsignacionDeEquipo = false;
    equipos = [];
    equipoSeleccionado;
    verFormComision = false;
    comisionSeleccionada;
    proveedores = [];
    categoriasByProveedor = [];
    catServicios = [];
    empresas = [];
    verFormCatServ = false;
    catServicioSeleccionada;
    empresaSeleccionada;
    verFormEmpresa = false;
    verFormProveedor = false;
    productosByProveedor = [];
    verFormCodificarProducto = false;
    proveedorSeleccionado;
    empresasAll = [];
    productosCodificar = [];
    verFormProdCodificados = false;
    productoCodificadoSeleccionado: any;
    verCEComisionBase = false;
    comisionBase: any;
    comisionesBase = [];
    verComisionesBase = false;
    comisionesNoFilter = [];
    creditos = [];
    creditoByNodo;
    Micredito;
    verFormCredito = false;
    montoDisponible = 0;
    bolsasDinero;
    misBoslsasDinero;
    solicitudesSaldo = [];
    verFormTransaccion = false;
    misSolicitudesSaldo = [];
    municipios = [];
    barrios = [];
    zonas = [];
    detalleZonas = [];
    verFormZona = false;
    zonaSeleccionada;
    verFormDetalleZona = false;
    BarriosSeleccionados = [];
    loading = false;
    loadingText = '';
    municipiosFiltrados = [];
    equiposLibres = [];
    historialEquipo = [];
    activeIndex1: number = 0;
    verLiberarEquipo = false;
    mensaje = '';
    verFormTransaccionTercero = false;
    nodosDirectosAll = [];
    verSubirArchivo = false;
    transaccionSeleccionada;
    verSoporte = false;
    verDetalletransaccion = false;
    equiposLibresByNodo = [];
    verAprobarSolicitud = false;
    verAprobarSolicitudCredito = false;
    facturasMora = [];
    facturasPendientes= [];
    lista_comisiones_venta=[];
    verVentaProductos = false;
    categoriaServicio_id;
    categoriaSeleccionada;
    verFinalizarVenta = false;
    productosByProveedorSinTiempoAlAire;
    referencias_comerciales;
    RECARGASWS: RecargasWS;
    SALDOWS: SaldoWS;
    saldo_movilservicios = 0;
    bad_login: string = '';
    historial_solicitudes_saldo = [];
    verResumenVentas = false;
    verRechazoSolicitud = false;
    verFormReferencia = false;
    REF_COMERCIAL = {
        nom_empresa: '',
        repr_legal: '',
        telefono: '',
        correo: ''
    }
    tokenMessage: any;
    msgs = [];
    username_available = '';
    identificacion_available;
    abonos = [];
    verFormPagos = false;
    tipo_pago = [
        {label: 'Transferencia', value: 'Transferencia'},
    ]
    entidad_recaudo = [
        {label: 'Bancolombia', value: 'Bancolombia'},
        {label: 'Banco de Occidente', value: 'Banco de Occidente'},
        {label: 'Banco agrario', value: 'Banco agrario'},
        {label: 'Nequi', value: 'Nequi'},
        {label: 'Efecty', value: 'Efecty'},
    ]
    totalAbonos = 0;
    verFormEditNodo = false;
    menuSaldo: [];
    menuSS: [];
    miMenuSS: [];
    menuAliados: [];
    verAjusteSaldo = false;
    verUltimasTransacciones = false;
    ventas_by_nodo = [];
    urlQR;
    profileQR;
    elementType;
    errorCorrectionLevel;
    valueQR;
    verQR = false;
    datos_vehiculo = [];
    datos_adicionales_vehiculo = [];
    propietario_vehiculo = [];
    transacciones_fallidas = [];
    ver_rec_pwd = false;
    msj_recovery='';
    usuario_pwd_recovery;
    verFormUsuarioPP = false;
    recibo_ok = '';
    verCanjeGanancia = false;
    barriosFiltrados;
    ver_subir_soporte_pago_fac_mora = false;
    verSoportePagoFacM = false;
    pagoSeleccionado;
    verFormEditNodoTercero = false;
    ciudad;
    barrio;
    verFormPaquetesRecargas = false;
    activeState: boolean[] = [false, false];
    messageSell:[];
    USUARIO_MSV = '00087482'
    PWD_MVS = 'h73P71Zi'
    datos_soat = [];
    listaFiltradaProductos= [];
    listaFiltradaVentas = [];
    VALOR_CERTIFICADOS = 22000;
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
    convenios_filtrados: any[];
    convenios = []
    convenio_seleccionado:any;
    factura_consultada: any;
    factura_pagada: any;
    trans_resultado_venta: any;
    lista_comisiones_empresas = [];


    constructor(public api: ApiService, private fb: FormBuilder,private router:Router,
                public modalController: ModalController,public alertController: AlertController
                ,public toastController: ToastController,public loadingController: LoadingController
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

    llenarFormNodo(nodo: any) {
        this.ciudad = this.municipios.filter(item=>item.codigo_municipio == nodo.barrio.municipio)[0]['codigo_municipio']
        this.api.get('barrio/?municipio=' + this.ciudad)
            .subscribe(
                data => {
                    if (data.length) {
                        this.barrios = data
                        this.formNodo.patchValue(nodo)
                        this.formNodo.patchValue({
                            barrio_id:nodo.barrio.id,
                            direccion:this.stringToJson(nodo.direccion)[this.stringToJson(nodo.direccion).length-1],
                            direcciones:nodo.direccion
                        })
                    } else {
                        this.barrios = [];
                    }
                }
            )
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

    llenarformEquipoNodo(equipo: any) {
        this.formEquipoNodo.patchValue({
            id: equipo.id,
            nodo_id: equipo.nodo.id,
            equipo_id: equipo.equipo.id,
            fechaAsignacion: equipo.fechaAsignacion,
            fechaDevolucion: equipo.fechaDevolucion,
            ordenEntrega: equipo.ordenEntrega,
            ordenDevolucion: equipo.ordenDevolucion,
            observacionAsignacion: equipo.observacionAsignacion,
            observacionDevolucion: equipo.observacionDevolucion,
        })
    }

    llenarFormZonaBarrios(data) {
        this.formZonaBarrio.patchValue({
            id: data.id,
            zona_id: data.zona.id,
            barrio_id: data.barrio.id,
            activo: data.activo
        })
    }

    llenarFormZona(data) {
        this.formZona.patchValue({
            id: data.id,
            nodo_id: data.nodo.id,
            nombre: data.nombre,
            activo: data.activo,
        })
    }

    llenarFormTransaccion(data) {
        this.formTransaccion.patchValue({
            id: data.id,
            usuario_id: data.usuario.id,
            nodo_id: data.nodo.id,
            producto_venta_id: data.producto_venta ? data.producto_venta.id : null,
            tipoServicio: data.tipoServicio,
            tipo_transaccion: data.tipo_transaccion,
            valor: data.valor,
            soporte: data.soporte,
            numeroAprobacion: data.numeroAprobacion,
            numeroDestino: data.numeroDestino,
            medioSolicitud: data.medioSolicitud,
            medioVenta: data.medioVenta,
            ultimoSaldo: data.ultimoSaldo,
            ultimaComision: data.ultimaComision,
            estado: data.estado,
            estadoPago: data.estadoPago,
            resultado: data.resultado,
            fecha_aprobacion: data.fecha_aprobacion,
            fecha_pago: data.fecha_pago,
            dias_mora: data.dias_mora,
            observacion: data.observacion,
        })
    }

    llenarFormCreditos(data) {
        this.formCreditos.patchValue({
            id: data.id,
            nodo_id: data.nodo.id,
            montoAutorizado: data.montoAutorizado,
            plazoMaximo: data.plazoMaximo,
            montoUtilizado: data.montoUtilizado,
            montoDisponible: data.montoDisponible,
            activo: data.activo,
        })
    }

    llenarFormEmpresa() {
        //this.empresaSeleccionada = this.empresas.filter(item => item.id == this.formProducto.value['empresa_id'])[0]
        this.formEmpresa.patchValue({
            id: this.empresaSeleccionada.id,
            catServicio_id: this.empresaSeleccionada.catServicio.id,
            nom_empresa: this.empresaSeleccionada.nom_empresa,
            imagen: this.empresaSeleccionada.imagen,
            activo: this.empresaSeleccionada.activo,
        })
    }

    llenarFormProveedorEmpresa(comision) {
        this.formProveedorEmpresa.patchValue({
            id: comision.id,
            proveedor_id: comision.proveedor.id,
            empresa_id: comision.empresa.id,
            comisionBase: comision.comisionBase,
            comisionAnticipada: comision.comisionAnticipada,
            activo: comision.activo,
        })
    }

    llenarFormProveedor(proveedor) {
        this.formProveedor.patchValue({
            id: proveedor.id,
            nombre_prov: proveedor.nombre_prov,
            direccion_prov: proveedor.direccion_prov,
            email_prov: proveedor.email_prov,
            telefono_prov: proveedor.telefono_prov,
            activo: proveedor.activo,
        })
    }

    llenarFormCodificarProducto(data) {
        this.formCodificarProducto.patchValue({
            id: data.id,
            producto_id: data.producto_id,
            proveedor_id: data.proveedor_id,
            comisionBase: data.comisionBase,
            codigo_producto: data.codigo_producto,
            descuento_promosional: data.descuento_promosional,
            activo: data.activo,
        })
    }

    llenarFormServicioCategoria() {
        this.catServicioSeleccionada = this.catServicios.filter(item => item.id == this.formProducto.value['tipo_producto'])[0]
        this.formServicioCategoria.patchValue({
            id: this.catServicioSeleccionada.id,
            nombre: this.catServicioSeleccionada.nombre,
        })

    }

    llenarFormComision(comision: any) {

        this.formComision.patchValue({
            id: comision.id,
            nodo_id: comision.nodo?comision.nodo.id:comision.nodo_id,
            proveedorEmpresa_id: comision.proveedorEmpresa?comision.proveedorEmpresa.id:comision.proveedorEmpresa_id,
            micomision: comision.micomision,
            comisionComercio: comision.comisionComercio,
            comisionDistribuidor: comision.comisionDistribuidor,
            utilidad_comercio: comision.utilidad_comercio,
            utilidad_distribuidor: comision.utilidad_distribuidor,
            activo: comision.activo,
        })

    }

    llenarFormCatEmpresa(data) {
        this.formNodo.patchValue({
            id: data.id,
            codigo: data.codigo,
            nombre: data.nombre,
            idPadre: data.idPadre,
            valor: data.valor,
            tipo: data.tipo,
            activo: data.activo,
        })
    }

    llenarFormProducto(data) {
        this.formProducto.patchValue({
            id: data.id,
            empresa_id: data.empresa.id,
            nom_producto: data.nom_producto,
            valor_producto: data.valor_producto,
            tiempo_al_aire: data.tiempo_al_aire,
            tipo_producto:data.tipo_producto,
            descuento_promosional: data.descuento_promosional,
            activo: data.activo,
        });
    }

    llenarFormEquipo(data) {
        this.formEquipo.patchValue({
            id: data.id,
            marca: data.marca,
            serial: data.serial,
            activo: data.activo,
            asignado: data.asignado,
            nodo_id: data.nodo.id,
        })
    }

    jsonToString(json: any) {
        return JSON.stringify(json);
    }

    stringToJson(array: any) {
        return array ? JSON.parse(array) : [];
    }

    addString(red, cadena) {
        let array = JSON.parse(red)
        array.push(cadena)
        return JSON.stringify(array);
    }

    addNodo() {
        this.api.add('nodo', this.formNodo.value)
            .subscribe
            (
                data => {
                    if (!isUndefined(data)) {
                        this.formUsuario.patchValue({
                            username: this.formUsuario.value['username'].toLowerCase(),
                            identificacion : data.identificacion_nodo,
                            first_name:data.representanteLegal,
                            telefono:data.telefono,
                            direccion:data.direccion,
                            email:data.email,
                            nodo_id: data.id,
                            activo: 1,
                            password: data.identificacion_nodo,
                            cargo: 'Administrador'
                        })
                        this.formBolsas.patchValue({
                            nodo_id: data.id,
                            saldo_disponible: 0,
                            utilidad: 0,
                            activo: true,
                        })
                        this.formCreditos.patchValue({
                            nodo_id: data.id,
                            montoAutorizado: 0,
                            plazoMaximo: 0,
                            montoUtilizado: 0,
                            montoDisponible: 0,
                            activo: data.activo,
                        })
                        let obj = new Object({
                            nodo_hijo: data.id,
                            nodo_padre:this.api.nodoActual['id'],
                            tipo_actualizacion:'uno',
                        });
                        this.api.post_soap('tabla_comisiones', obj).subscribe()
                        this.addCreditos();
                        this.addBolsaDinero()
                        this.addUsuario();
                        this.identificacion_available = ''
                    } else {
                        this.identificacion_available = ''
                    }
                });
    }

    updateDireccionNodo() {
        this.api.update('nodo', this.nodoSeleccionado.id, this.nodoSeleccionado)
            .subscribe
            (
                data => {
                    this.nodoSeleccionado = data
                    this.formNodo.reset();
                    this.REF_COMERCIAL = {
                        nom_empresa: '',
                        repr_legal: '',
                        telefono: '',
                        correo: ''
                    }
                    this.verFormDireccion = false
                    this.verFormReferencia = false
                });
    }

    addUsuario() {
        this.formUsuario.patchValue({
            username: this.formUsuario.value['username'].toLowerCase()
        })
        this.api.add('usuario', this.formUsuario.value)
            .subscribe
            (
                data => {
                    if (data) {
                        this.getNodosHijo(this.api.nodoActual);
                        this.getUsuarioByNodo(this.api.nodoActual)
                        this.formNodo.reset();
                        this.formUsuario.reset();
                        this.verFormNodo = false;
                        this.verFormUsuario = false;
                        this.verFormUsuarioPP = false;
                    }
                });
    }

    getNodosHijo(nodo: any) {
        this.nodosHijo = []
        this.red = []
        this.api.get('red/?nodo=' + (nodo ? '-' + nodo.id + '-' : ''))
            .subscribe(
                data => {
                    if (data.length) {
                        this.nodosHijo = data;
                        this.red = this.crearArbol(data, nodo)
                    } else {
                        this.nodosHijo = []
                    }
                }
            )
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

    getNodosTodosDirectos() {
        this.nodosDirectos = []
        let parametro = {'usuario_id':this.api.nodoActual['id']}
        this.api.post_soap('mis_aliados', parametro)
            .subscribe(
                data => {
                    if (!isUndefined(data)) {
                        if (data.length) {
                            this.nodosDirectosAll = data;
                        } else {
                            this.nodosDirectosAll = []
                        }
                    }

                }
            )
    }

    getPermisos() {
        this.permisos = [];
        this.api.get('permisos/?usuario=' + this.usuarioSeleccionado.id)
            .subscribe(
                data => {
                    if (data.length) {
                        this.permisos = data;
                    }
                }
            )
    }

    getFuncionalidades() {
        this.funcionalidades = [];
        this.api.get('funcionalidad/')
            .subscribe(
                data => {
                    if (data.length) {
                        this.funcionalidades = this.crearArbolFuncionalidades(data);
                    }
                }
            )
    }

    crearArbolFuncionalidades(data) {
        let parents = data.filter(value => value.funcionPadre == null)
        let children = data.filter(value => value.funcionPadre != null)
        let translator = (parents, children) => {
            parents.forEach((parent) => {
                    children.forEach((current, index) => {
                            if (parseInt(current.funcionPadre) === parent.id) {
                                let temp = JSON.parse(JSON.stringify(children))
                                temp.splice(index, 1)
                                translator([current], temp)
                                typeof parent.children !== 'undefined' ? parent.children.push(current) : parent.children = [current]
                            }
                        }
                    )
                }
            )
        }
        translator(parents, children)
        return parents
    }

    crearArbol(data, padre) {
        let parents = data.filter(value => value.nodoPadre == padre.id)
        let children = data.filter(value => value.nodoPadre !== 'undefined' && value.nodoPadre != null)
        let translator = (parents, children) => {
            parents.forEach((parent) => {
                    children.forEach((current, index) => {
                            if (current.nodoPadre === parent.id) {
                                let temp = JSON.parse(JSON.stringify(children))
                                temp.splice(index, 1)
                                translator([current], temp)
                                typeof parent.children !== 'undefined' ? parent.children.push(current) : parent.children = [current]
                            }
                        }
                    )
                }
            )
        }
        translator(parents, children)
        return parents
    }

    addDireccion(direccion, direcciones) {
        let dir = this.stringToJson(direcciones)
        dir.push(direccion)
        return this.jsonToString(dir)
    }

    addReferencia(referencia, referencias) {
        let ref = this.stringToJson(referencias)
        ref.push(referencia)
        return this.jsonToString(ref)
    }

    messages(message) {
        let mensaje = '';
        if (message[0]['message'][0] == 'Unable to log in with provided credentials.') {
            mensaje = 'El usuario o la contraseña son incorrectas, por favor revise sus datos y vuelva a intentarlo.';
        }
        if (message[0]['message'][0] == 'user with this identificacion already exists.') {
            mensaje = 'Este número de documento ya se encuentra registrado en el sistema';
        } else {
            mensaje = message
        }

        /*this.confirmationService.confirm({
            message: mensaje,
            accept: () => {
                //Actual logic to perform a confirmation
            }
        });*/
    }

    getUsuarioByNodo(nodo?) {
        this.usuarioByNodo = '';
        let nodoSel = this.nodoSeleccionado ? this.nodoSeleccionado : nodo;
        this.api.get('usuario/?nodo=' + nodoSel.id)
            .subscribe(
                data => {
                    if (data.length) {
                        if (!nodo) {
                            this.usuarioByNodo = data[0];
                        } else {
                            this.usuariosByNodo = data;
                        }
                    }
                }
            )
    }

    addPermiso(event: Event) {
        /*this.confirmationService.confirm({
            target: event.target,
            message: 'Se agregara esta Funcionalidad a la lista de permisos de ' + this.usuarioSeleccionado.first_name + ' ' + this.usuarioSeleccionado.last_name,
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                let obj = new Object();
                obj['usuario_id'] = this.usuarioSeleccionado.id
                obj['funcionalidad_id'] = this.funcSeleccionada.id
                obj['permiso'] = true
                this.api.add('permisos', obj)
                    .subscribe(
                        data => {
                            if (data) {
                                this.getPermisos();
                            }
                        }
                    )
            },
            reject: () => {
                //reject action
            }
        });*/
    }

    deletePermiso(permiso: any) {
       /* this.confirmationService.confirm({
            target: event.target,
            message: 'Se negara el uso de este modulo al usuario ' + this.usuarioSeleccionado.first_name + ' ' + this.usuarioSeleccionado.last_name + '.',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.api.delete('permisos', permiso.id)
                    .subscribe(
                        data => {
                            this.getPermisos()
                        }
                    )
            },
            reject: () => {
                //reject action
            }
        });*/

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
    updatePwdUsuarioRec(usuario: any) {
        this.api.update('updatepwd', usuario.id, usuario)
            .subscribe(
                data => {
                    if (data) {
                        this.msj_recovery = '';
                        this.formRecoveryPwd.reset();
                        this.ver_rec_pwd = false;
                    }
                }
            )
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

    getMisComisionesByCategoria(nodo, proveedor_id?) {
        this.misComisiones = [];
        this.api.get('miscomisionesbycategoria/?nodo=' + nodo.id + '&activo=' + true + '&idPadre=' + proveedor_id)
            .subscribe(
                data => {
                    if (data.length) {
                        this.misComisiones = data;
                    } else {
                        this.misComisiones = [];
                    }
                }
            )
    }

    getProductos(empresa?) {
        let emp = empresa ? empresa : this.empresaSeleccionada.id
        this.api.get('producto/?empresa=' + emp)
            .subscribe(
                data => {
                    if (data.length) {
                        this.productos = data
                    } else {
                        this.productos = []
                    }
                }
            )
    }

    getProductosCodificar(empresa_id) {
        this.api.get('producto/?empresa=' + empresa_id)
            .subscribe(
                data => {
                    if (data.length) {
                        this.productosCodificar = data
                    } else {
                        this.productosCodificar = []
                    }
                }
            )
    }

    getEmpresasNoFilter() {
        this.loading = true;
        this.loadingText = 'Cargando empresas registradas'
        this.empresas = [];
        this.api.get('empresa/')
            .subscribe(
                data => {
                    if (data.length) {
                        this.empresasAll = data
                    } else {
                        this.empresasAll = []
                    }
                    this.loading = false;
                }
            )
    }

    getEmpresas() {
        this.empresas = [];
        this.api.get('empresa/')
            .subscribe(
                data => {
                    if (data.length) {
                        this.empresas = data
                    } else {
                        this.empresas = []
                    }
                }
            )
    }

  /*  getCategoriasArbol(expanded?) {
        this.categoriasArbol = [];
        this.api.get('categoria/')
            .subscribe(
                data => {
                    if (data.length) {
                        this.categoriasArbol = this.crearArbolCategorias(data)
                        if (expanded) {
                            this.categoriasArbol.forEach(node => {
                                if (node['id'] == this.catEmpresaSeleccionada.idPadre) {
                                    this.expandRecursive(node, true);
                                }
                            });
                        }
                    } else {
                        this.categoriasArbol = [];
                    }
                }
            )
    }*/

    crearArbolCategorias(data) {
        let parents = data.filter(value => value.idPadre == 0)
        let children = data.filter(value => value.idPadre != null)
        let translator = (parents, children) => {
            parents.forEach((parent) => {
                    children.forEach((current, index) => {
                            if (parseInt(current.idPadre) === parent.id) {
                                let temp = JSON.parse(JSON.stringify(children))
                                temp.splice(index, 1)
                                translator([current], temp)
                                typeof parent.children !== 'undefined' ? parent.children.push(current) : parent.children = [current]
                            }
                        }
                    )
                }
            )
        }
        translator(parents, children)
        return parents
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

  async getComisionesImages(id_categoria,nodo_id) {
    this.lista_comisiones_empresas= [];
    await this.presentLoading()
    this.api.get('comision_images_list/?nodo=' + nodo_id+'&id_categoria='+id_categoria)
      .subscribe(
        data => {
          if (!isUndefined(data)) {
            console.log(data)
            this.lista_comisiones_empresas = data
          } else {
            this.lista_comisiones_empresas = [];
          }
          this.loadingController.dismiss()
        }
      )
  }
  /*async getComisiones(nodo) {
    this.comisiones = [];
    this.lista_comisiones_venta = [];
    await this.presentLoading()
    this.api.get('comision_list/?nodo=' + nodo.id)
      .subscribe(
        data => {
          if (!isUndefined(data)) {
            this.comisiones = data
            if(nodo.tipoComision == 'CA'){
              let comiAux = this.comisiones.filter(item=>item.proveedorEmpresa.empresa.catServicio.nombre=='Recargas y Paquetes')
              this.lista_comisiones_venta = this.crearArbolComisiones(comiAux.filter(item=>item.proveedorEmpresa.empresa.nom_empresa.toUpperCase()!='Directv'.toUpperCase()))
              this.categoriaSeleccionada =  this.lista_comisiones_venta[0]
              this.togleVentas(1,true)
            }else {
              this.lista_comisiones_venta = this.crearArbolComisiones(this.comisiones.filter(item=>item.proveedorEmpresa.empresa.imagen))
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
  }*/

    getMisComisiones(nodo?) {
      this.misComisiones = [];
      this.api.get('comision/?nodo=' + nodo.id)
        .subscribe(
          data => {
            if (data.length) {
              this.misComisiones = data.filter(item => item.proveedorEmpresa.activo == true);
              this.comisionesNoFilter = data;
            } else {
              this.misComisiones = [];
            }
          }
        )
    }

    addMisComisiones() {
        this.api.add('comision', this.formComision.value)
            .subscribe(
                data => {
                    if (data) {
                        this.getMisComisiones(this.api.nodoActual);
                        this.formComision.reset();
                    }
                }
            )
    }

    addComisiones(nodo?) {
        let nodoAux;
        if (nodo) {
            nodoAux = nodo;
        } else {
            nodoAux = this.nodoSeleccionado
        }
        this.api.add('comision', this.formComision.value)
            .subscribe(
                data => {
                    if (data) {
                        this.getComisiones(nodoAux);
                        this.formComision.reset();
                    }
                }
            )
    }

    getNodoPadre() {

        this.api.get('nodo/?id=' + this.api.nodoActual['nodoPadre'])
            .subscribe(
                data => {
                    if (data.length) {
                        this.distribuidor = data[0];
                        this.getAdminNodoPadre();
                    }

                }
            )
    }

    getAdminNodoPadre() {
        this.api.get('usuario/?nodo=' + this.distribuidor.id + '&cargo=Administrador')
            .subscribe(
                data => {
                    if (data.length) {
                        this.distribuidorAdmin = data[0];
                    }
                }
            )
    }

    addProducto() {
        this.api.add('producto', this.formProducto.value)
            .subscribe(
                data => {
                    if (data) {
                        this.llenarFormProducto(data)
                        this.getProductos();
                        this.verFormProducto = false;
                        this.formProducto.reset();
                        this.formProducto.patchValue({
                            tipo_producto: this.categoriaServicio_id
                        })
                    }
                }
            )
    }

    /* addProducto() {
         let empresa = this.catEmpresaSeleccionada;
         let productos = empresa.productos ? this.stringToJson(empresa.productos) : [];
         if(this.productoSeleccionado){
             let index = productos.indexOf(productos.filter(item=>item.codigoProveedor == this.productoSeleccionado.codigoProveedor)[0])
             productos[index]['codigoProveedor'] = this.formProducto.value['codigoProveedor']
             productos[index]['nombre'] = this.formProducto.value['nombre']
             productos[index]['empresa'] = this.formProducto.value['empresa']
             productos[index]['valor'] = this.formProducto.value['valor']
             productos[index]['comision'] = this.formProducto.value['comision']
             empresa.productos = JSON.stringify(productos);
             this.updateCategoria(empresa);
         }else{
             this.formProducto.patchValue({
                 empresa: this.catEmpresaSeleccionada.id,
                 activo: true
             })
             if(!productos.filter(item => item.codigoProveedor == this.formProducto.value['codigoProveedor'])[0]){
                 productos.push(this.formProducto.value)
                 empresa.productos = JSON.stringify(productos);
                 this.updateCategoria(empresa);
             }else {
                 this.confirmationService.confirm({
                     message: 'El producto que intenta agregar ya esta registrado.',
                     accept: () => {
                         //Actual logic to perform a confirmation
                     }
                 });
             }
         }
     }*/

    updateCategoria() {
        this.api.update('producto', this.formProducto.value['id'], this.formProducto.value)
            .subscribe(
                data => {
                    this.getProductos();
                    this.verFormProducto = false;
                }
            )
    }

    getProductosEmpresa(productos: any) {
        if (productos) {
            return JSON.parse(productos)
        } else {
            return [];
        }
    }

    /*expandRecursive(node: TreeNode, isExpand: boolean) {
        node.expanded = isExpand;
        if (node.children) {
            node.children.forEach(childNode => {
                this.expandRecursive(childNode, isExpand);
            });
        }
    }*/

    crearTablaComisiones() {
        let obj = new Object();
        obj['nodo_hijo'] = ''
        obj['nodo_padre'] = this.api.nodoActual['id']
        obj['tipo_actualizacion'] = 'varios'
        this.api.post_soap('tabla_comisiones', obj)
            .subscribe(data => {

            })
    }

    updateComision() {
        this.api.update('comision', this.formComision.value['id'], this.formComision.value)
            .subscribe(
                data => {
                    if (this.nodoSeleccionado) {
                        this.getComisiones(this.nodoSeleccionado)
                    }
                    this.formComision.reset();
                    this.verFormComision = false;
                }
            )
    }

    updateMiComision() {
        this.api.update('comision', this.formComision.value['id'], this.formComision.value)
            .subscribe(data => {
                    this.getMisComisiones(this.api.nodoActual)
                    this.crearTablaComisiones()
                    this.formComision.reset();
                    this.verFormComision = false;
                }
            )
    }

    getEquiposByNodo() {
        this.api.get('nodoequipo/?nodo=' + this.nodoSeleccionado.id)
            .subscribe(
                data => {
                    if (data.length) {
                        this.equiposByNodo = data;
                    } else {
                        this.equiposByNodo = [];
                    }
                }
            )
    }

    getEquiposLibresByNodo() {
        this.api.get('nodoequipo/?nodo=' + this.nodoSeleccionado.id)
            .subscribe(
                data => {
                    if (data.length) {
                        this.equiposLibresByNodo = data.filter(item => item.equipo.asignado && item.ordenDevolucion == '');
                    } else {
                        this.equiposLibresByNodo = [];
                    }
                }
            )
    }

    getHistorialAsignacionEquipos(equipo) {
        this.api.get('nodoequipo/?equipo=' + equipo.id)
            .subscribe(
                data => {
                    if (data.length) {
                        this.historialEquipo = data;
                        this.activeIndex1 = 3
                    } else {
                        this.historialEquipo = [];
                        this.equipoSeleccionado = '';
                    }
                }
            )
    }

    getEquipos() {
        this.loading = true;
        this.loadingText = 'Cargando equipos registrados'
        this.api.get('equipo/?nodo=' + this.api.nodoActual['id'])
            .subscribe(
                data => {
                    if (data.length) {
                        this.equipos = data;
                        this.equiposLibres = data.filter(item => item.asignado == false);
                    } else {
                        this.equipos = [];
                        this.equiposLibres = [];
                    }
                    this.loading = false;
                }
            )
    }

    updateEquipoNodo() {
        this.api.update('nodoequipo', this.formEquipoNodo.value['id'], this.formEquipoNodo.value)
            .subscribe(
                data => {
                    this.getEquiposByNodo()
                    this.formEquipoNodo.reset()
                    this.verAsignacionDeEquipo = false
                }
            )
    }

    liberarEquipoNodo() {
        this.api.update('nodoequipo', this.formEquipoNodo.value['id'], this.formEquipoNodo.value)
            .subscribe(
                data => {
                    this.getHistorialAsignacionEquipos(this.equipoSeleccionado)
                    data.equipo.asignado = false;
                    this.llenarFormEquipo(data.equipo)
                    this.updateEquipo();
                    this.formEquipoNodo.reset()
                    this.verLiberarEquipo = false
                }
            )
    }

    addEquipoNodo() {
        this.api.add('nodoequipo', this.formEquipoNodo.value)
            .subscribe(
                data => {
                    this.getEquiposLibresByNodo()
                    data.equipo.asignado = true;
                    this.llenarFormEquipo(data.equipo)
                    this.updateEquipo();
                    this.formEquipoNodo.reset()
                    this.verAsignacionDeEquipo = false
                }
            )
    }

    updateEquipo() {
        this.api.update('equipo', this.formEquipo.value['id'], this.formEquipo.value)
            .subscribe(
                data => {
                    this.getEquipos()
                    this.formEquipo.reset();
                }
            )
    }

/*    addEquipo() {
        this.api.add('equipo', this.formEquipo.value)
            .subscribe(
                data => {
                    this.getEquipos()
                    this.addNotificacion('equipo', 'Se ha creado un nuevo equipo')
                    this.formEquipo.reset();
                }
            )
    }*/

   /* getNotificaciones() {
        this.realDB.getNotificaciones().subscribe(data => {
            if (data.length) {
                if (data[data.length - 1]['usuario_id'] != this.api.usuario['id']) {
                    this.confirmationService.confirm({
                        message: data[data.length - 1]['accion'],
                        accept: () => {
                            //Actual logic to perform a confirmation
                        }
                    });
                }
            }
        });
    }*/

/*    addNotificacion(url, accion) {
        let notificacion = new Object()

        notificacion['accion'] = 'Solicitar saldo'
        notificacion['mensaje'] =
            notificacion['emisor']
        notificacion['receptor']

        notificacion['url'] = url;
        notificacion['usuario'] = this.api.usuario['username'];
        notificacion['usuario_id'] = this.api.usuario['id'];
        notificacion['nodoPadre'] = this.api.nodoActual['nodoPadre'];
        notificacion['accion'] = accion;
        this.realDB.addNotificacion(notificacion);
    }*/

    getProveedores() {
        this.loading = true;
        this.loadingText = 'Cargando proveedores registrados'
        this.api.get('proveedor/')
            .subscribe(
                data => {
                    if (data.length) {
                        this.proveedores = data;
                    } else {
                        this.proveedores = [];
                    }
                    this.loading = false;
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

    updateServCategoria() {
        this.api.update('categoriadeservicio', this.formServicioCategoria.value['id'], this.formServicioCategoria.value)
            .subscribe(
                data => {
                    this.getCatServicio()
                    this.formServicioCategoria.reset();
                    this.verFormCatServ = false;
                }
            )
    }

    addServCategoria() {
        this.api.add('categoriadeservicio', this.formServicioCategoria.value)
            .subscribe(
                data => {
                    this.getCatServicio()
                    //this.getEmpresas(data.id)
                    this.formServicioCategoria.reset();
                    this.verFormCatServ = false;
                }
            )
    }

    updateEmpresa() {
        this.api.update('empresa', this.formEmpresa.value['id'], this.formEmpresa.value)
            .subscribe(
                data => {
                    this.getEmpresas()
                    this.formEmpresa.reset();
                    this.verFormEmpresa = false;
                }
            )
    }

    addEmpresa() {
        this.api.add('empresa', this.formEmpresa.value)
            .subscribe(
                data => {
                    this.getEmpresas()
                    this.formEmpresa.reset();
                    this.verFormEmpresa = false;
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

    updateProveedor() {
        this.proveedores = [];
        this.api.update('proveedor', this.formProveedor.value['id'], this.formProveedor.value)
            .subscribe(
                data => {
                    this.getProveedores();
                    this.formProveedor.reset();
                    this.proveedorSeleccionado = data;
                    this.verFormProveedor = false;
                }
            )
    }

    addProveedor() {
        this.proveedores = [];
        this.api.add('proveedor', this.formProveedor.value)
            .subscribe(
                data => {
                    this.getProveedores();
                    this.formProveedor.reset();
                    this.verFormProveedor = false;
                }
            )
    }

    updateCodificarProducto() {
        this.api.update('proveedor_producto', this.formCodificarProducto.value['id'], this.formCodificarProducto.value)
            .subscribe(
                data => {
                    this.getProductosProveedor(data.proveedor.id, data.producto.empresa.id);
                    this.formCodificarProducto.reset();
                    this.verFormProdCodificados = false;
                    this.verCEComisionBase = false;
                }
            )
    }

    addCodificarProducto() {
        this.api.add('proveedor_producto', this.formCodificarProducto.value)
            .subscribe(
                data => {
                    this.getProductosProveedor(data.proveedor.id, data.producto.empresa.id);
                    this.formCodificarProducto.reset();
                    this.verFormCodificarProducto = false;
                }
            )
    }

    getComisionesBaseByProveedor(proveedor_id?) {
        this.comisionBase = ''
        this.api.get('proveedor_emrpesa/')
            .subscribe(
                data => {
                    if (data.length) {
                        this.comisionesBase = data.filter(item => item.proveedor.id == proveedor_id);
                    } else {
                        this.comisionesBase = [];
                    }
                }
            )
    }

    cambiarEstadoComision(comision: any) {
        this.api.get('proveedor_emrpesa/')
            .subscribe(
                data => {
                    if (data.length) {
                        let comisiones = data.filter(item => item.empresa.id == comision.empresa.id);
                        for (let com of comisiones) {
                            com.activo = !com.activo;
                            this.cambiarEstadoComisionBase(com, comision.proveedor.id)
                        }
                    }
                }
            )
    }


    getComisionBase(empresa_id, proveedor_id) {
        this.api.get('proveedor_emrpesa/')
            .subscribe(
                data => {
                    if (data.length) {
                        this.comisionBase = data.filter(item => (item.proveedor.id == proveedor_id &&
                            item.empresa.id == empresa_id))[0];
                    } else {
                        this.comisionBase = '';
                    }
                }
            )
    }

    addEmpresaProveedor() {
        this.api.add('proveedor_emrpesa', this.formProveedorEmpresa.value).subscribe(
            data => {
                this.getComisionesBaseByProveedor(data.proveedor.id);
                this.formComision.patchValue({
                    nodo_id: this.api.nodoActual['id'],
                    proveedorEmpresa_id: data.id,
                    activo: true,
                    micomision: data.comisionBase,
                    comisionComercio: 0,
                    comisionDistribuidor: 0,
                    utilidad_comercio: 0,
                    utilidad_distribuidor:0
                });
                this.addMisComisiones()
                this.verCEComisionBase = false;
            }
        )
    }

    updateEmpresaProveedor() {
        this.api.update('proveedor_emrpesa', this.formProveedorEmpresa.value['id'], this.formProveedorEmpresa.value)
            .subscribe(
                data => {
                    this.getComisionesBaseByProveedor(data.proveedor.id)
                    this.verCEComisionBase = false;
                }
            )
    }

    cambiarEstadoComisionBase(comision, proveedorActual_id) {
        this.api.update('proveedor_emrpesa', comision.id, comision)
            .subscribe(
                data => {
                    this.getComisionesBaseByProveedor(proveedorActual_id)
                    /*this.api.get('usuario/?nodo=' +comision.nodo.id)
                        .subscribe(
                            usuario => {
                                this.enviar_mensaje(usuario[0].id, ('actualizando datos...'), 'ACTCOM');
                            });*/
                }
            )
    }

    getCreditos() {
        this.api.get('creditos/')
            .subscribe(
                data => {
                    if (data.length) {
                        this.creditos = data;
                    }
                });
    }

    getCreditoByNodo(nodo) {
        this.api.get('creditos/?nodo=' + nodo.id)
            .subscribe(
                data => {
                    if (data.length) {
                        this.creditoByNodo = data[0];
                    } else {
                        this.creditoByNodo = '';
                    }
                });
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

    addCreditos() {
        this.api.add('creditos', this.formCreditos.value)
            .subscribe(
                data => {
                    this.getCreditoByNodo(data.nodo);
                    this.formCreditos.reset();
                    this.verFormCredito = false;
                });
    }

    updateCreditos() {

        this.api.update('creditos', this.formCreditos.value['id'], this.formCreditos.value)
            .subscribe(
                data => {
                    this.getCreditoByNodo(data.nodo);
                    this.formCreditos.reset();
                    this.verFormCredito = false;
                    this.api.get('usuario/?nodo=' +data.nodo.id)
                        .subscribe(
                            usuario => {
                                this.enviar_mensaje(usuario[0].id, ('El valor de su credito ha sido actualizado.'), 'ACMC');
                            });
                });
    }

    getMontoUtilizado(credito) {
        this.montoDisponible = Math.round((credito.montoDisponible * 100) / credito.montoAutorizado);
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

    addBolsaDinero() {
        this.api.add('bolsa_dinero', this.formBolsas.value)
            .subscribe(
                data => {
                    this.getBolsasDinero(data.nodo);
                    this.getNodosTodosDirectos()
                    this.formBolsas.reset();
                }
            )
    }

    updateBolsaDinero() {
        this.api.update('bolsa_dinero', this.formBolsas.value['id'], this.formBolsas.value)
            .subscribe(
                data => {
                    this.getMisBolsasDinero();
                    this.formBolsas.reset();
                }
            )
    }

    getTransacciones() {
        this.api.get('mistransacciones/?idPadre=' + this.api.nodoActual['id'])
            .subscribe(
                data => {
                    if (data.length) {
                        this.misSolicitudesSaldo = data.filter(item => item.nodo.id == this.api.nodoActual['id']);
                        this.solicitudesSaldo = data.filter(item => item.nodo.id != this.api.nodoActual['id']);
                        this.getMisBolsasDinero();
                    } else {
                        this.solicitudesSaldo = [];
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

    getHistorialMisSolicitudesSaldo(fInicial, fFinal) {
        if(fInicial && fFinal){
         this.historial_solicitudes_saldo = []
        this.api.get('historial_mis_solicitudes_saldo/?idPadre=' + this.api.nodoActual['id'] + '&fInicial=' + fInicial + '&fFinal=' + fFinal)
            .subscribe(
                data => {
                    if (!isUndefined(data)) {
                        if (data.length) {
                            this.historial_solicitudes_saldo = data
                            this.getMisBolsasDinero();
                        } else {
                            this.historial_solicitudes_saldo = [];
                        }
                    }
                }
            )
        }else{
            /*this.confirmationService.confirm({
            message: 'Para realizar la consulta debe seleccionar la fecha inicial y la fecha final.',
            rejectVisible:false,
        });*/
        }
    }

    getHistorialOtrasSolicitudesSaldo(fInicial, fFinal) {
        if(fInicial && fFinal){
         this.historial_solicitudes_saldo = []
        this.api.get('historial_otras_solicitudes_saldo/?idPadre=' + this.api.nodoActual['id'] + '&fInicial=' + fInicial + '&fFinal=' + fFinal)
            .subscribe(
                data => {
                    if (!isUndefined(data)) {
                        if (data.length) {
                            this.historial_solicitudes_saldo = data
                            this.getMisBolsasDinero();
                        } else {
                            this.historial_solicitudes_saldo = [];
                        }
                    }
                }
            )
        }else{
            /*this.confirmationService.confirm({
                message: 'Para realizar la consulta debe seleccionar la fecha inicial y la fecha final.',
                rejectVisible:false,
            });*/
        }
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

    addTransaccion() {
      this.presentLoading()
        this.api.add('transaccion', this.formTransaccion.value)
            .subscribe(
                data => {
                  if(data!=undefined){
                    if (this.api.nodoActual['aprobacion_credito_automatico'] && data.tipo_transaccion == 'SSCR') {
                      this.autorizar_transaccion_credito(data)
                    }
                    this.transaccionSeleccionada = data;
                    this.getMisSolicitudesSaldo();
                    this.formTransaccion.reset();
                    this.verSubirArchivo = data.tipo_transaccion == 'SSC' ? true : false;
                    this.modalController.dismiss({
                      'dismissed': true
                    });
                    this.api.get('usuario/?nodo=' +data.nodo.nodoPadre)
                      .subscribe(
                        usuario => {
                          this.enviar_mensaje(usuario[0].id, (data.nodo.razonSocial + ' ha realizado una solicitud de saldo por valor: $' + data.valor), 'SS');
                        });
                  }else {
                    this.mensajes('Algo salio mal, por favor intente mas tarde.')
                  }
                  this.loadingController.dismiss()
                }
            )
    }

    addCanjeGanancia() {
        this.api.add('transaccion', this.formTransaccion.value)
            .subscribe(
                data => {
                    this.misBoslsasDinero.saldo_disponible += data.valor;
                    this.misBoslsasDinero.utilidad -= data.valor;
                    this.formBolsas.patchValue({
                        nodo_id:this.misBoslsasDinero.nodo.id
                    })
                    this.formBolsas.patchValue(this.misBoslsasDinero)
                    this.updateBolsaDinero()
                    this.verCanjeGanancia = false;
                    this.formTransaccion.reset();
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

    numerosLetras(valor: number) {
        var numeroALetras = (function () {
            // Código basado en el comentario de @sapienman
            // Código basado en https://gist.github.com/alfchee/e563340276f89b22042a
            function Unidades(num) {

                switch (num) {
                    case 1:
                        return 'UN';
                    case 2:
                        return 'DOS';
                    case 3:
                        return 'TRES';
                    case 4:
                        return 'CUATRO';
                    case 5:
                        return 'CINCO';
                    case 6:
                        return 'SEIS';
                    case 7:
                        return 'SIETE';
                    case 8:
                        return 'OCHO';
                    case 9:
                        return 'NUEVE';
                }

                return '';
            } //Unidades()

            function Decenas(num) {

                let decena = Math.floor(num / 10);
                let unidad = num - (decena * 10);

                switch (decena) {
                    case 1:
                        switch (unidad) {
                            case 0:
                                return 'DIEZ';
                            case 1:
                                return 'ONCE';
                            case 2:
                                return 'DOCE';
                            case 3:
                                return 'TRECE';
                            case 4:
                                return 'CATORCE';
                            case 5:
                                return 'QUINCE';
                            default:
                                return 'DIECI' + Unidades(unidad);
                        }
                    case 2:
                        switch (unidad) {
                            case 0:
                                return 'VEINTE';
                            default:
                                return 'VEINTI' + Unidades(unidad);
                        }
                    case 3:
                        return DecenasY('TREINTA', unidad);
                    case 4:
                        return DecenasY('CUARENTA', unidad);
                    case 5:
                        return DecenasY('CINCUENTA', unidad);
                    case 6:
                        return DecenasY('SESENTA', unidad);
                    case 7:
                        return DecenasY('SETENTA', unidad);
                    case 8:
                        return DecenasY('OCHENTA', unidad);
                    case 9:
                        return DecenasY('NOVENTA', unidad);
                    case 0:
                        return Unidades(unidad);
                }
            } //Unidades()

            function DecenasY(strSin, numUnidades) {
                if (numUnidades > 0)
                    return strSin + ' Y ' + Unidades(numUnidades)

                return strSin;
            } //DecenasY()

            function Centenas(num) {
                let centenas = Math.floor(num / 100);
                let decenas = num - (centenas * 100);

                switch (centenas) {
                    case 1:
                        if (decenas > 0)
                            return 'CIENTO ' + Decenas(decenas);
                        return 'CIEN';
                    case 2:
                        return 'DOSCIENTOS ' + Decenas(decenas);
                    case 3:
                        return 'TRESCIENTOS ' + Decenas(decenas);
                    case 4:
                        return 'CUATROCIENTOS ' + Decenas(decenas);
                    case 5:
                        return 'QUINIENTOS ' + Decenas(decenas);
                    case 6:
                        return 'SEISCIENTOS ' + Decenas(decenas);
                    case 7:
                        return 'SETECIENTOS ' + Decenas(decenas);
                    case 8:
                        return 'OCHOCIENTOS ' + Decenas(decenas);
                    case 9:
                        return 'NOVECIENTOS ' + Decenas(decenas);
                }

                return Decenas(decenas);
            } //Centenas()

            function Seccion(num, divisor, strSingular, strPlural) {
                let cientos = Math.floor(num / divisor)
                let resto = num - (cientos * divisor)

                let letras = '';

                if (cientos > 0)
                    if (cientos > 1)
                        letras = Centenas(cientos) + ' ' + strPlural;
                    else
                        letras = strSingular;

                if (resto > 0)
                    letras += '';

                return letras;
            } //Seccion()

            function Miles(num) {
                let divisor = 1000;
                let cientos = Math.floor(num / divisor)
                let resto = num - (cientos * divisor)

                let strMiles = Seccion(num, divisor, 'UN MIL', 'MIL');
                let strCentenas = Centenas(resto);

                if (strMiles == '')
                    return strCentenas;

                return strMiles + ' ' + strCentenas;
            } //Miles()

            function Millones(num) {
                let divisor = 1000000;
                let cientos = Math.floor(num / divisor)
                let resto = num - (cientos * divisor)

                let strMillones = Seccion(num, divisor, 'UN MILLON', 'MILLONES');
                let strMiles = Miles(resto);

                if (strMillones == '')
                    return strMiles;

                return strMillones + ' ' + strMiles;
            } //Millones()

            return function NumeroALetras(num, currency) {
                currency = currency || {};
                let data = {
                    numero: num,
                    enteros: Math.floor(num),
                    centavos: (((Math.round(num * 100)) - (Math.floor(num) * 100))),
                    letrasMonedaPlural: currency.plural || 'PESOS', //'PESOS', 'Dólares', 'Bolívares', 'etcs'
                    letrasMonedaSingular: currency.singular || 'PESO', //'PESO', 'Dólar', 'Bolivar', 'etc'

                };

                if (data.enteros == 0)
                    return 'CERO ' + data.letrasMonedaPlural + ' ';
                if (data.enteros == 1)
                    return Millones(data.enteros) + ' ' + data.letrasMonedaSingular + ' ';
                else
                    return Millones(data.enteros) + ' ' + data.letrasMonedaPlural + ' ';
            };

        })();
        return numeroALetras(valor, '')

    }

    updateTransaccion(send_message?) {
        this.api.update('transaccion', this.formTransaccion.value['id'], this.formTransaccion.value)
            .subscribe(
                data => {
                    /*this.confirmationService.confirm({
                        message: 'La solicitud numero ' + data.id + ' por un monto de $' + data.valor + ' ha sido actualizada exitosamente.',
                        rejectVisible: false,
                        accept: () => {
                        }
                    });*/
                    this.getSolicitudesSaldo();
                    this.getMisSolicitudesSaldo();
                    this.getFacturasMora(data.nodo, false)
                    this.verSubirArchivo = false;
                    this.verAprobarSolicitud = false;
                    this.verRechazoSolicitud = false;
                    this.formTransaccion.reset();
                    if(send_message){
                        this.api.get('usuario/?nodo=' + data.nodo.id)
                            .subscribe(
                                usuario => {
                                    this.enviar_mensaje(usuario[0]['id'], ('La solicitud N° '+data.id+' fue rechazada: '+data.observacion), 'SSRCH');
                                }
                            )
                    }

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

    updateMunicipios() {
        //TODO pendiente implementar update municipios
    }

    addMunicipios() {
        //TODO pendiente implementar add municipios
    }

    getBarrios(codigo_municipio) {
        this.api.get('barrio/?municipio=' + codigo_municipio)
            .subscribe(
                data => {
                    if (data.length) {
                        this.barrios = data
                        this.barriosFiltrados = data
                    } else {
                        this.barrios = [];
                    }
                }
            )
    }

    updateBarrios() {
        //TODO pendiente implementar update barrios
    }

    addBarrios() {
        //TODO pendiente implementar add barrios
    }

    getZonas(nodo) {
        this.api.get('zona/?nodo=' + nodo.id)
            .subscribe(
                data => {
                    if (data.length) {
                        this.zonas = data
                    } else {
                        this.zonas = [];
                    }
                }
            )
    }

    updateZonas() {
        this.api.update('zona', this.formZona.value['id'], this.formZona.value)
            .subscribe(
                data => {
                    this.getZonas(data.nodo)
                    this.formZona.reset();
                }
            )
    }

    addZonas() {
        this.api.add('zona', this.formZona.value)
            .subscribe(
                data => {
                    this.getZonas(data.nodo)
                    this.formZona.reset();
                    this.verFormZona = false
                }
            )
    }

    getZonasBarrios(zona) {
        this.api.get('zona_barrio/?zona=' + zona.id)
            .subscribe(
                data => {
                    if (data.length) {
                        this.detalleZonas = data

                    } else {
                        this.detalleZonas = [];
                    }
                }
            )
    }

    updateZonasBarrios() {
        this.api.update('zona_barrio', this.formZonaBarrio.value['id'], this.formZonaBarrio.value)
            .subscribe(
                data => {
                    this.getZonasBarrios(data.zona.id)
                    this.formZonaBarrio.reset();
                }
            )
    }

    addZonasBarrios() {
        this.api.add('zona_barrio', this.formZonaBarrio.value)
            .subscribe(
                data => {
                    this.getZonasBarrios(data.zona)
                    this.formZonaBarrio.reset();
                    this.verFormDetalleZona = false;
                }
            )
    }

    borrarDetalleZona(detalle: any) {
       /* this.confirmationService.confirm({
            message: 'Desea quitar este barrio o vereda de ' + detalle.zona.nombre + ' ?',
            accept: () => {
                this.api.delete('zona_barrio', detalle.id)
                    .subscribe(
                        data => {
                            this.getZonasBarrios(detalle.zona)
                        }
                    )
            }
        });*/
    }

    liberarEquipo(equipo: any) {
        this.api.get('nodoequipo/?equipo=' + equipo.id + '&activo=' + true)
            .subscribe(
                data => {
                    if (data.length) {
                        this.equiposByNodo = data;
                    } else {
                        this.equiposByNodo = [];
                    }
                }
            )
    }

    mensajeInformacion(mensaje, severity) {
        //severity : info,success,warn,error
        //this.messageService.add({severity: severity, summary: 'MRN Colombia', detail: mensaje});
    }

  /*  public subirArchivo(event) {
        let datosFormulario = new FormData()
        const file: File = event.files[0];
        this.nombreArchivo = this.transaccionSeleccionada.tipoServicio + '_' + this.transaccionSeleccionada.id
        let ruta = this.transaccionSeleccionada.nodo.representanteLegal + '_' + this.transaccionSeleccionada.nodo.id + '/solicitud_de_saldo'
        this.firebaseStorage.tareaCloudStorage(ruta, this.nombreArchivo, file, file.type).then(
            data => {
                if (data.state == 'success') {
                    this.mensajeInformacion('El archivo se envio a MRN Colombia exitosamente.', 'success')
                    this.getUrl();
                }
            }
        )
    }

    getUrl() {
        let ruta = this.transaccionSeleccionada.nodo.representanteLegal + '_' + this.transaccionSeleccionada.nodo.id + '/solicitud_de_saldo'
        this.firebaseStorage.referenciaCloudStorage(ruta + '/' + this.nombreArchivo).getDownloadURL().subscribe(
            URL => {
                this.llenarFormTransaccion(this.transaccionSeleccionada)
                this.formTransaccion.patchValue({
                    soporte: URL
                })
                this.updateTransaccion()
            }
        );
    }*/

    calcular_fecha_pago(dias) {
        return moment().add(dias, 'd').format('YYYY-MM-DD')
    }

    getHoy() {
        return moment().format('DD-MM-YYYY');
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

    getFacturasPendientes(nodo, showAuthorization?) {
        this.facturasPendientes = [];
        this.api.get('facturas_pendientes/?nodo=' + nodo.id)
            .subscribe(
                data => {
                    if (data.length) {
                        this.facturasPendientes = data;
                    } else {
                        if (showAuthorization) {
                            /*this.confirmationService.confirm({
                                message: 'Desea aprobar esta solicitud?',
                                accept: () => {
                                    this.facturasMora = [];
                                    this.autorizar_transaccion_credito(this.transaccionSeleccionada)
                                }
                            });*/
                        }
                    }

                }
            )
    }

    crearArbolComisiones(data) {
        let lista = [];
        console.log(data)
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
        console.log(lista)
        return lista
    }

    get_abonos_factura(transaccion) {
      this.abonos = [];
      this.totalAbonos = 0
      this.presentLoading();
        this.api.get('pago_transaccion/?transaccion=' + transaccion.id)
            .subscribe(
                data => {
                    if (!isUndefined(data)) {
                        if (data.length) {
                            this.abonos = data;
                            this.totalAbonos = 0;
                            for (let pago of this.abonos) {
                                this.totalAbonos += pago.abono
                            }
                            if (transaccion.valor == this.totalAbonos && transaccion.estadoPago == 'Pendiente') {
                                transaccion.estadoPago = 'Pago en revision'
                                transaccion.resultado = 'Pago en revision'
                                this.llenarFormTransaccion(transaccion);
                                this.updateTransaccion();
                            }
                            this.loadingController.dismiss()
                        }
                    } else {
                        this.abonos = []
                        this.loadingController.dismiss()
                    }
                }
            )
    }

    abonar_factura(pago) {
      this.loading = true
        this.api.add('pago_transaccion', pago)
            .subscribe(
                data => {
                    this.get_abonos_factura(data.transaccion)
                    this.formPagos.reset();
                    this.getFacturasMora(data.transaccion.nodo)
                    this.getFacturasPendientes(data.transaccion.nodo)
                    this.getNodosTodosDirectos();
                    this.modalController.dismiss({
                      'dismissed': true
                    });
                    this.loading = false
                }
            )
    }

    autorizar_transaccion_contado(nodo_id_actual, transaccion_id, num_aprobacion) {
        let obj = new Object();
        obj['nodo_id_actual'] = nodo_id_actual
        obj['transaccion_id'] = transaccion_id
        obj['tipo_transaccion'] = 'SSC'
        obj['num_aprobacion'] = num_aprobacion
        this.api.post_soap('autorizar_transaccion', obj)
            .subscribe(
                data => {
                    /*this.confirmationService.confirm({
                        message: data,
                        rejectVisible: false,
                        accept: () => {
                            this.getSolicitudesSaldo()
                            this.getMisBolsasDinero()
                            this.verAprobarSolicitud = false;
                            this.transaccionSeleccionada = '';
                        }
                    });*/
                }
            );
    }

    autorizar_transaccion_credito(transaccion) {
        let obj = new Object();
        if (this.api.nodoActual['aprobacion_credito_automatico'] && transaccion.tipo_transaccion == 'SSCR') {
            obj['nodo_id_actual'] = this.api.nodoActual['nodoPadre']
        } else {
            obj['nodo_id_actual'] = this.api.nodoActual['id']
        }
        obj['transaccion_id'] = transaccion.id
        obj['tipo_transaccion'] = 'SSCR'
        obj['num_aprobacion'] = 0
        this.api.post_soap('autorizar_transaccion', obj)
            .subscribe(
                data => {
                    //this.messageService.add({severity: 'info', summary: 'MRN Colombia', detail: data, sticky: true});
                    this.getSolicitudesSaldo()
                    this.getMisBolsasDinero()
                    this.verAprobarSolicitudCredito = false;
                    this.transaccionSeleccionada = '';
                }
            );
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

    addVenta(producto_venta, valor, numeroDestino, respuesta_proveedor) {
        let obj = new Object();
        obj['nodo'] = this.api.nodoActual['id']
        obj['producto_venta'] = producto_venta
        obj['valor'] = valor
        obj['numeroDestino'] = numeroDestino
        obj['respuesta_proveedor'] = respuesta_proveedor

        this.api.post_soap('registrar_venta', this.formTransaccion.value)
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
              if(!this.api.nodoActual['mora']){
                this.router.navigate(['inicio'])
              }else {
                this.getFacturasMora(this.api.nodoActual,false)
                this.router.navigate(['/mora'])
              }
            }
          }
        }
      )
  }

    crearMenuSaldos(transaccion) {
        /*if (transaccion.tipo_transaccion == 'SSC') {
            this.menuSaldo = [{
                label: 'Solicitud N°.' + transaccion.id,
                items: [
                    {
                        label: 'Autorizar solicitud',
                        icon: 'fas fa-check-circle',
                        visible: (transaccion.estado == 'Pendiente' && transaccion.soporte) ? true : false,
                        command: () => {
                            this.transaccionSeleccionada = transaccion;
                            this.verAprobarSolicitud = true;
                        }
                    },
                    {
                        label: 'Rechazar solicitud',
                        visible: (transaccion.estado == 'Pendiente') ? true : false,
                        icon: 'fas fa-times-circle',
                        command: () => {
                            this.transaccionSeleccionada = transaccion;
                            this.verRechazoSolicitud = true
                        }
                    },
                    {
                        label: 'Subir soporte',
                        visible: (!transaccion.soporte) ? true : false,
                        icon: 'fas fa-cloud-upload-alt',
                        command: () => {
                            this.transaccionSeleccionada = transaccion;
                            this.verSubirArchivo = true
                        }
                    },
                    {
                        label: 'Ver soporte',
                        visible: (transaccion.soporte) ? true : false,
                        icon: 'fas fa-file-pdf',
                        command: () => {
                            this.transaccionSeleccionada = '';
                            this.transaccionSeleccionada = transaccion;
                            this.verSoporte = true;
                        }
                    },
                    {separator: true,},
                    {
                        label: 'Ver detalle',
                        icon: 'fas fa-info-circle',
                        command: () => {
                            this.transaccionSeleccionada = transaccion;
                            this.verDetalletransaccion = true
                        },
                    },
                    {
                        label: 'Contactar usuario',
                        icon: 'fab fa-whatsapp',
                        command: () => {
                            this.sendWpMessage(transaccion.usuario.telefono);
                        }
                    }

                ]
            },
            ];
        } else {
            this.menuSaldo = [{
                label: 'Solicitud N°.' + transaccion.id,
                items: [
                    {
                        label: 'Autorizar solicitud',
                        icon: 'fas fa-check-circle',
                        visible: (transaccion.estado == 'Pendiente') ? true : false,
                        command: () => {
                            this.getFacturasMora(transaccion.nodo, true);
                            this.transaccionSeleccionada = transaccion
                        }
                    },
                    {
                        label: 'Rechazar solicitud',
                        visible: (transaccion.estado == 'Pendiente') ? true : false,
                        icon: 'fas fa-times-circle',
                        command: () => {
                            this.transaccionSeleccionada = transaccion;
                            this.verRechazoSolicitud = true
                        }
                    },
                    {separator: true,},
                    {
                        label: 'Ver detalle',
                        icon: 'fas fa-info-circle',
                        command: () => {
                            this.transaccionSeleccionada = transaccion;
                            this.verDetalletransaccion = true
                        }
                    },
                    {
                        label: 'Contactar usuario',
                        icon: 'fab fa-whatsapp',
                        command: () => {
                            this.sendWpMessage(transaccion.usuario.telefono);
                        }
                    }

                ]
            },
            ];
        }*/
    }

    sendWpMessage(numero) {
        if (numero) {
            window.open('https://api.whatsapp.com/send?phone=+57' + numero, 'blank');
        } else {
           /* this.confirmationService.confirm({
                message: 'Debe registrar un número telefonico de celular válido',
                rejectVisible: false,
            });*/
        }
    }

    tiempoTranscurrido(fecha) {
        let entryHour = moment(fecha);
        let exitHour = moment();
        let duracion = moment.duration(exitHour.diff(entryHour));
        let horas = Math.floor(duracion.asHours())
        let minutos = Math.floor(duracion.asMinutes() % 60)
        return (horas ? (horas + ' horas y ') : ('')) + minutos + ' minutos.'
    }

    venderRecarga(venta_ganancias) {

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
        let mensaje = (parseInt(this.obj_venta.valor) >= 40000)?('Esta a punto de realizar una venta de un valor alto, recuerde que usted puede ser victima de ESTAFA. ' +
            'Si ud confia en este cliente y cree que este no es su caso puede continuar vendiendo recarga de: $' + this.obj_venta.valor + ' al numero ' + this.obj_venta.telefono):
          'Desea realizar la recarga de: $' + this.obj_venta.valor + ' al numero ' + this.obj_venta.telefono + (venta_ganancias?' desde sus ganancias':'')+ ' ?'
        this.RECARGASWS = {
          nodo: this.api.nodoActual['id'],
          usuario_mrn: this.api.usuario['id'],
          producto_venta: producto.id,
          producto: producto.codigo_producto,
          valor: parseInt(this.obj_venta.valor),
          celular: this.obj_venta.telefono,
          usuario: this.USUARIO_MSV,
          password: this.PWD_MVS,
          canal_transaccion: 2,
          transaccion_externa: 0,
          documento: '',
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
          medioVenta:'Movil'
        }
        this.recargas_ms(this.RECARGASWS)
      }else{
        alert('Su saldo es insufuciente para realizar esta recarga, por favor solicite saldo.')
      }
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
          // producto: 16080,
          valor: parseInt(this.obj_venta.valor),
          /*usuario: '00053026',
          password: '4Tqa300M',*/
          celular: this.obj_venta.telefono,
          usuario: this.USUARIO_MSV,
          password: this.PWD_MVS,
          canal_transaccion: 2,
          transaccion_externa: 0,
          documento: '1088310088',
          //documento: '',
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

    consulta_certificado_runt_ms(datos: Consulta_Certificado_runt_MS) {
    this.loading = true
    this.api.post_soap('consulta_certificado_runt_ms', datos)
      .subscribe(
        data => {
          console.log(data)
          /*if (!isUndefined(data)) {
            this.formVentasCertificados.patchValue({
              direccion:data,
              valor:this.VALOR_CERTIFICADOS
            });
          }*/
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

    consulta_placasoat_ms(venta_ganancias) {
      this.loading = true
      let obj = new Object();
      let producto = this.productosByProveedor.filter(item => item.producto.nom_producto = 'Recarga soat')[0]
      obj['placa'] = this.formVentasSoat.value['placa']
      obj['documento'] = this.formVentasSoat.value['documento']
      obj['producto'] = producto.codigo_producto
      obj['usuario'] = this.USUARIO_MSV
      obj['password'] = this.PWD_MVS
      obj['tipo_documento'] = this.formVentasSoat.value['tipo_documento']

      this.api.post_soap('consulta_placa_soat_ms', obj)
        .subscribe(
          data => {

            if (!isUndefined(data)) {
              if(data[0]=='001'){
                console.log(JSON.parse(data[1]))
                this.datos_soat = JSON.parse(data[1])
                this.formVentasSoat.patchValue({
                  venta_ganancias:venta_ganancias,
                  nodo: this.api.nodoActual['id'],
                  usuario_mrn: this.api.usuario['id'],
                  producto_venta: producto.id,
                  producto:producto.codigo_producto,
                  valor:this.datos_soat['tarifa']['total'],
                  tarifa:this.datos_soat['tarifa']['idTarifa'],
                  ValorPrima:this.datos_soat['tarifa']['prima'],
                  valor_contribucion:this.datos_soat['tarifa']['contribucion'],
                  valor_runt:this.datos_soat['tarifa']['runt'],
                  porcentaje_descuento_electrica:this.datos_soat['tarifa']['porcentajeDescuentoElectricos'],
                  valor_descuento_intermediario :this.datos_soat['tarifa']['descuentoIntermediario'],
                  valor_descuento_electricos:this.datos_soat['tarifa']['porcentajeDescuentoElectricos'],
                  dtoLey2161:this.datos_soat['tarifa']['dtoLey2161'],
                  celular:this.formVentasSoat.value['celular'],
                  usuario:this.USUARIO_MSV,
                  clave:this.PWD_MVS,
                  tipo_documento:this.formVentasSoat.value['tipo_documento'],
                  email_soat:this.formVentasSoat.value['email_soat'],
                  id_marca:this.datos_soat['vehiculo']['idMarca'],
                  cc:this.datos_soat['vehiculo']['chasis'],
                  chasis:this.datos_soat['vehiculo']['chasis'],
                  cilindraje:this.datos_soat['vehiculo']['cilindraje'],
                  toneladas:this.datos_soat['vehiculo']['capacidadCarga'],
                  motor:this.datos_soat['vehiculo']['motor'],
                  marca:this.datos_soat['vehiculo']['marca'],
                  lineaVehiculo:this.datos_soat['vehiculo']['lineaVehiculo'],
                  placa:this.formVentasSoat.value['placa'],
                  ocupantes:this.datos_soat['vehiculo']['pasajeros'],
                  tipo_servicio:this.datos_soat['vehiculo']['idServicio'],
                  vin:this.datos_soat['vehiculo']['vin'],
                  clase_vehiculo_id:this.datos_soat['vehiculo']['idClaseVehiculo'],
                  codVehMinTrans:this.datos_soat['vehiculo']['idClaseVehiculoMinisterio'],
                  vehiculo:this.datos_soat['vehiculo']['claseVehiculoMinisterio'],
                  linea_vehiculo:this.datos_soat['vehiculo']['idLineaVehiculo'],
                  departamentoMatricula:this.datos_soat['vehiculo']['departamentoMatricula'],
                  aaaa_modelo:this.datos_soat['vehiculo']['modelo'],
                  tipo_carroceria:this.datos_soat['vehiculo']['tipoCarroceria'],
                  inicio_vigencia:this.datos_soat['inicioVigencia'],
                  finVigencia:this.datos_soat['finVigencia'],
                  bolsa_ganancia:0,
                  transaccion_externa:0,
                  canal_transaccion:2,
                })
                if(this.datos_soat['tomador']){
                  this.formVentasSoat.patchValue({
                    venta_ganancias:venta_ganancias,
                    nodo: this.api.nodoActual['id'],
                    usuario_mrn: this.api.usuario['id'],
                    producto_venta: producto.id,
                    producto:producto.codigo_producto,
                    valor:this.datos_soat['tarifa']['total'],
                    celular:this.formVentasSoat.value['celular'],
                    usuario:this.USUARIO_MSV,
                    clave:this.PWD_MVS,
                    nombres:this.datos_soat['tomador']?this.datos_soat['tomador']['nombres']:'',
                    apellidos:this.datos_soat['tomador']?this.datos_soat['tomador']['apellidos']:'',
                    direccion:this.datos_soat['tomador']?this.formatear_direccion(this.datos_soat['tomador']['direccion']):'',
                    municipio:this.datos_soat['tomador']?this.datos_soat['tomador']['idMunicipio']:'',
                    departamento:this.datos_soat['tomador']?this.datos_soat['tomador']['idDepartamento']:'',
                    tipo_regimen:this.datos_soat['tomador']?this.datos_soat['tomador']['idResponsabilidadIVA']:'',
                    responsable_rut:this.datos_soat['tomador']?this.datos_soat['tomador']['idResponsabilidadRUT']:'',
                    tipo_documento:this.formVentasSoat.value['tipo_documento'],
                    email_soat:this.formVentasSoat.value['email_soat'],
                    tipo_persona:this.datos_soat['tomador']?((this.datos_soat['tomador']['idTipoDocumento']!=3)?0:this.datos_soat['tomador']['idTipoDocumento']):'',
                    tarifa:this.datos_soat['tarifa']['idTarifa'],
                    ValorPrima:this.datos_soat['tarifa']['prima'],
                    valor_contribucion:this.datos_soat['tarifa']['contribucion'],
                    valor_runt:this.datos_soat['tarifa']['runt'],
                    porcentaje_descuento_electrica:this.datos_soat['tarifa']['porcentajeDescuentoElectricos'],
                    id_marca:this.datos_soat['vehiculo']['idMarca'],
                    cc:this.datos_soat['vehiculo']['chasis'],
                    chasis:this.datos_soat['vehiculo']['chasis'],
                    cilindraje:this.datos_soat['vehiculo']['cilindraje'].toString(),
                    toneladas:this.datos_soat['vehiculo']['capacidadCarga'],
                    motor:this.datos_soat['vehiculo']['motor'],
                    marca:this.datos_soat['vehiculo']['marca'],
                    lineaVehiculo:this.datos_soat['vehiculo']['lineaVehiculo'],
                    placa:this.formVentasSoat.value['placa'],
                    ocupantes:this.datos_soat['vehiculo']['pasajeros'],
                    tipo_servicio:this.datos_soat['vehiculo']['idServicio'],
                    vin:this.datos_soat['vehiculo']['vin'],
                    clase_vehiculo_id:this.datos_soat['vehiculo']['idClaseVehiculo'],
                    codVehMinTrans:this.datos_soat['vehiculo']['idClaseVehiculoMinisterio'],
                    vehiculo:this.datos_soat['vehiculo']['claseVehiculoMinisterio'],
                    linea_vehiculo:this.datos_soat['vehiculo']['idLineaVehiculo'],
                    departamentoMatricula:this.datos_soat['vehiculo']['departamentoMatricula'],
                    aaaa_modelo:this.datos_soat['vehiculo']['modelo'],
                    tipo_carroceria:this.datos_soat['vehiculo']['tipoCarroceria'],
                    inicio_vigencia:this.datos_soat['inicioVigencia'],
                    finVigencia:this.datos_soat['finVigencia'],
                    valor_descuento_intermediario :this.datos_soat['tarifa']['descuentoIntermediario'],
                    valor_descuento_electricos:this.datos_soat['tarifa']['porcentajeDescuentoElectricos'],
                    dtoLey2161:this.datos_soat['tarifa']['dtoLey2161'],
                    bolsa_ganancia:0,
                    transaccion_externa:0,
                    canal_transaccion:2,
                    medioVenta:'Web',
                  })
                }
                //this.present_modal_Soat_vencido()
              }else {
                alert(data[1])
              }
            }
            this.loading = false
          }
        )
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

    descarga_soat_ms() {
    this.loading = true
    let obj = new Object();
    obj['placa'] = this.formVentasSoat.value['placa']
    obj['documento'] = this.formVentasSoat.value['documento']
    obj['usuario'] = this.USUARIO_MSV
    obj['password'] = this.PWD_MVS
    this.api.post_soap('descarga_soat_ms', obj)
      .subscribe(
        data => {
          if (!isUndefined(data)) {
            if(data[0]=='001'){
            }else {
              alert(data[1])
            }
          }
          this.loading = false
        }
      )
  }

    async present_modal_Soat_vigente() {
      const modal = await this.modalController.create({
        component: SoatVigenteComponent,
      });
      return await modal.present();
    }

    async present_modal_Soat_vencido() {
      const modal = await this.modalController.create({
        component: SoatVencidoComponent,
      });
      return await modal.present();
    }
    verificar_user_data(identificacion, username) {
        if (identificacion) {
            let obj = new Object();
            obj['identificacion'] = identificacion;
            obj['username'] = username;
            this.api.post_soap('verificar_user_data', obj)
                .subscribe(
                    data => {
                        this.identificacion_available = data;
                    }
                )
        }
        if (username) {
            let obj = new Object();
            obj['username'] = username;
            obj['identificacion'] = identificacion;
            this.api.post_soap('verificar_user_data', obj)
                .subscribe(
                    data => {
                        this.username_available = data;
                    }
                )
        }
    }
    verificar_soporte_pago(numero) {
        let obj = {numero_recibo : numero}
        this.api.post_soap('verificar_soporte_pago', obj)
            .subscribe(
                data => {
                        this.mensajes(data)
                    });
    }
    ajustarSaldo(valor, motivo_ajuste) {
        let obj = new Object();
        obj['nodo_ejecutor'] = this.api.nodoActual['id']
        obj['usuario_ejecutor'] = this.api.usuario['id']
        obj['nodo_afectado'] = this.nodoSeleccionado.id
        obj['valor_ajuste'] = valor
        obj['motivo'] = motivo_ajuste
        this.api.post_soap('ajustar_saldo', obj)
            .subscribe(data => {
                this.getMisBolsasDinero();
               /* this.confirmationService.confirm({
                    message: data,
                    rejectVisible: false,
                    accept: () => {
                        this.api.get('usuario/?nodo=' + this.nodoSeleccionado.id)
                            .subscribe(data => {
                                this.enviar_mensaje(data[0].id, 'Se ha realizado un ajuste a tu saldo, para mas informacion comunicate con tu distribuidor.', 'AJS')
                            })
                    }
                });*/
            })
    }
    getVentasByNodo() {
        this.api.get('transaccion/?tipo_transaccion=VEN&nodo='+this.api.nodoActual['id'])
            .subscribe(data => {
                if(!isUndefined(data)){
                    if(data.length){
                        this.verUltimasTransacciones = true;
                        this.ventas_by_nodo = data;
                        this.listaFiltradaVentas = data;
                    }
                }
            })
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
    getType(value) {
        //Devuelve el tipo de una variable dada
        return typeof value

    }
    validar_usuario() {
        this.api.post_soap('validar_usuario',this.formRecoveryPwd.value)
            .subscribe(data => {
               if(data.id){

                   this.usuario_pwd_recovery = data;
                   this.msj_recovery = '';
               }else{
                   this.msj_recovery = 'Verifique sus credenciales';
               }
            })
    }
  setBarrio(barrio) {
        this.formNodo.patchValue({
            barrio_id:barrio.id
        })
    }
  buscarCiudad(event: any) {
        let palabra = event.query?event.query:event
        if(palabra){
            this.municipiosFiltrados = this.municipios.filter(item=>item.nombre_mpio.toUpperCase().includes(palabra.toUpperCase()))
        }else {
            this.municipiosFiltrados = this.municipios;
        }
    }
  buscarBarrios(event: any) {
        let palabra = event.query?event.query:event
        if(palabra){
            this.barriosFiltrados = this.barrios.filter(item=>item.barrio_vereda.toUpperCase().includes(palabra.toUpperCase()))
        }else {
            this.barriosFiltrados = this.barrios;
        }
    }
  togleVentas(index: number,state:boolean) {
        this.activeState[index] = state;
    }
  verificar_dias_sin_saldo(nodo: any) {
        let hoy = moment()
        return hoy.diff(moment(nodo.created_at),'days')
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
  set_valor_sol_min(value) {
      if(value<20000){
        this.formTransaccion.patchValue({
          valor:20000
        })
      }
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
  getDiasVencimiento(fecha_pago: any) {

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
  async present_resumen_pago() {
    const modal = await this.modalController.create({
      component: InfoFacturaPagadaComponent,
    });
    return await modal.present();
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
