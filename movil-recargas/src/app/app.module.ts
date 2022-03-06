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

@NgModule({
  declarations: [AppComponent,ProductosComponent,SoatVigenteComponent,
    SoatVencidoComponent,SolicitudSaldoComponent,PagarFacturaComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },AuthGuard,NonAuthGuard,ApiService,Mrn],
  bootstrap: [AppComponent],
})
export class AppModule {}
