interface RecargasWS {
    nodo:number,
    usuario_mrn:number,
    producto_venta:number,
    producto:number,
    valor:number,
    celular:string,
    usuario:string,
    password:string,
    canal_transaccion:number,
    transaccion_externa:number,
    documento:string,
    oficina:string,
    matricula:string,
    email:string,
    recargas_multiproducto:number,
    token:string,
    nombre:string,
    cod_municipio:string,
    cant_sorteos:number,
    cant_cartones:number,
    bolsa_ganancia:string,
    venta_ganancias:boolean,
    medioVenta:string,
    tipo_datos?:string,
    tipo_red?:string,
    app_ver?:string,
}

interface SaldoWS {
    usuario:string,
    password:string,
    canal_transaccion:number,
    bolsa:string,
}

interface ProductosMS {
    usuario:string,
    password:string,
    canal_transaccion:number,
}

interface Consulta_Certificado_MS {
    oficina:string,
    placa?:string,
    matricula:string,
    usuario:string,
    password:string,
}

interface Consulta_Certificado_runt_MS {
  placa?:string,
  usuario:string,
  password:string,
}

interface Recargar_Recaudo_MS {
    producto:number,
    valor:number,
    celular:number,
    clave:string,
    usuario:string,
    canal_transaccion:number,
    convenio:number,
    echodata:string,
    referenceNumber:string,
    billerName:string,
    ean13BillerCode:string,
    gestorId:number,
    tipoCompra:string,
    transaccion_externa:string,
    bolsa_ganancia:string,
}

interface Recargar_GanaBingo_MS {
    producto:number,
    valor:number,
    celular:number,
    clave:string,
    usuario:string,
    canal_transaccion:number,
    cedula:number,
    correo:string,
    tripleta:string,
    idfecha_juego:string,
    registro:string,
    nombre:number,
    apellido:string,
    interlocutor_ganabingo:string,
    transaccion_externa:string,
    bolsa_ganancia:string,
}

interface Recargar_Soat_MS {
    producto:number,
    valor:number,
    celular:number,
    clave:string,
    usuario:string,
    canal_transaccion:number,
    inicio_vigencia:number,
    fin_vigencia:string,
    apellidos:string,
    nombres:string,
    tipo_persona:string,
    tipo_documento:number,
    documento:string,
    tipo_direccion:string,
    direccion:string,
    departamento:string,
    municipio:string,
    tipo_telefono:string,
    celular_soat:string,
    valor_total_poliza:string,
    codMarcaSise:string,
    codLineaSise:string,
    codVehMinTrans:string,
    aaaa_modelot:string,
    placat:string,
    motor:string,
    chasis:string,
    cod_destino:string,
    toneladas:string,
    ocupantespart:string,
    cc:string,
    clase_vehiculo:string,
    tarifat:string,
    txt_modelo:string,
    imp_pagado:string,
    vlr_runt:string,
    email_soatart:string,
    vinrt:string,
    tipo:string,
    transaccion_externa:string,
    bolsa_ganancia:string,
}

interface Consulta_PlacaSoat_MS {
    placa:number,
    documento:number,
    producto:string,
    usuario:string,
    password:string,
}

interface Consulta_TarifaSoat_MS {
    clase:string,
    placa:string,
    toneladas:string,
    modelo:string,
    ocupantes:number,
    cc:number,
    producto:number,
    usuario:string,
    password:string,
}

interface Descargar_ArchivoSoat_MS {
    placa:string,
    documento:string,
    usuario:string,
    password:string,
}

interface Recargar_Energia_MS {
    producto:number,
    valor:number,
    celular:string,
    clave:string,
    usuario:number,
    canal_transaccion:number,
    nro_contrato:number,
    plan:string,
    valor_aseo:number,
    valor_energia:number,
    transaccion_externa:number,
    referencia:string,
    bolsa_ganancia:string,
}

interface Recargar_Recaudo_EPMESSA_MS {
    producto:number
    valor:number
    celular:string
    clave:string
    usuario:string
    canal_transaccion:number
    nro_contrato:string
    plan:string
    nro_factura:string
    transaccion_externa:number
    referencia:string
    bolsa_ganancia:string
}

interface Recargar_Energia_Putumayo_MS {
    producto:number
    valor:number
    celular:string
    clave:string
    usuario:string
    canal_transaccion:number
    id_facturas:string
    nro_factura:string
    transaccion_externa:number
    referencia:string
    bolsa_ganancia:string
}

interface Recargar_Apuestas_Betplay_MS {
    producto:number
    valor:number
    celular:string
    usuario:string
    password:string
    canal_transaccion:number
    documento:string
    latitud:string
    longitud:string
    interlocutor_apuesta:string
    transaccion_externa:number
    referencia:string
    bolsa_ganancia:string
}

interface Recargar_Apuestas_Luckia_MS {
    producto:number
    valor:number
    celular:string
    usuario:string
    password:string
    canal_transaccion:number
    documento:string
    nombre:string
    apellido:string
    transaccion_externa:number
    referencia:string
    bolsa_ganancia:string
}

interface Recargar_RecaudoAval_MS {
    producto:number
    valor:number
    clave:string
    usuario:string
    canal_transaccion:number
    convenio:string
    billerName:string
    referencia:string
    codigobarras:string
    id_biller:string
    tipoCompra:string
    transaccion_externa:number
    bolsa_ganancia:string
}

interface Recargar_Recaudo_Colpatria_MS {
    producto:number
    valor:number
    clave:string
    usuario:string
    canal_transaccion:number
    hashEchoData:string
    hash:string
    referencia:string
    codigobarras:string
    billerName:string
    transaccion_externa:number
    bolsa_ganancia:string
}

interface INotificationPayload {
    body?: string;
    title?: string;
}

interface MessagePayload {
    notification: INotificationPayload,
    data?: { [key: string]: string }
}

interface Transaccion{
    id?:number,
    usuario_id:number,
    nodo_id:number,
    producto_venta_id:number,
    tipoServicio:string,
    tipo_transaccion:string,
    valor:number,
    soporte:string,
    numeroAprobacion:string,
    numeroDestino:string,
    medioSolicitud:string,
    medioVenta:string,
    ultimoSaldo:string,
    ultimaComision:string,
    estado:string,
    estadoPago:string,
    resultado:string,
    fecha_aprobacion:string,
    fecha_pago:string,
    dias_mora:string,
    observacion:string,
}
