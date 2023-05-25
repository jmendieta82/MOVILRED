import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {Mrn} from "./providers/mrn";
import {ApiService} from "./providers/api";
import {NonAuthGuard} from "./providers/non-auth.guard";
import {AuthGuard} from "./providers/auth.guard";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {ProductosComponent} from "./productos/productos.component";
import {SoatVigenteComponent} from "./soat-vigente/soat-vigente.component";
import {SoatVencidoComponent} from "./soat-vencido/soat-vencido.component";
import {SolicitudSaldoComponent} from "./solicitud-saldo/solicitud-saldo.component";
import {PagarFacturaComponent} from "./pagar-factura/pagar-factura.component";
import {IConfig, NgxMaskModule} from "ngx-mask";
import {UltimasVentasComponent} from "./ultimas-ventas/ultimas-ventas.component";
import {ResumenVentaComponent} from "./resumen-venta/resumen-venta.component";
import {ReportesDetalleComponent} from "./reportes-detalle/reportes-detalle.component";
import {ReporteVentasComponent} from "./reporte-ventas/reporte-ventas.component";
import {ReporteSolicitudesComponent} from "./reporte-solicitudes/reporte-solicitudes.component";
import {ReportePagosComponent} from "./reporte-pagos/reporte-pagos.component";
import { Camera} from '@ionic-native/camera/ngx';
import {IonicStorageModule} from "@ionic/storage-angular";
import {Device} from "@awesome-cordova-plugins/device/ngx";
import {Network} from "@ionic-native/network/ngx";
import { ConveniosComponent } from './convenios/convenios.component';
import {BarcodeScanner} from "@awesome-cordova-plugins/barcode-scanner/ngx";
import {InfoRecaudosComponent} from "./info-recaudos/info-recaudos.component";
import {VerSoportePagoComponent} from "./ver-soporte-pago/ver-soporte-pago.component";
import {NetworkService} from "./providers/network.service";
import {InfoFacturaPagadaComponent} from "./info-factura-pagada/info-factura-pagada.component";
import {ResultadoVentaRecargaComponent} from "./resultado-venta-recarga/resultado-venta-recarga.component";
const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [AppComponent, ProductosComponent, SoatVigenteComponent,
    SoatVencidoComponent, SolicitudSaldoComponent, PagarFacturaComponent, ReportesDetalleComponent, ReporteVentasComponent,
    ReporteSolicitudesComponent, UltimasVentasComponent, ResumenVentaComponent,
    ReportePagosComponent, ConveniosComponent, InfoRecaudosComponent, VerSoportePagoComponent,
    InfoFacturaPagadaComponent,ResultadoVentaRecargaComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    NgxMaskModule.forRoot(maskConfig),
    IonicStorageModule.forRoot()
  ],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    AuthGuard, NonAuthGuard, ApiService, Mrn, Camera, Device, NetworkService, Network, BarcodeScanner],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
