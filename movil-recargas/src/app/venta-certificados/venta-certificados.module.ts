import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VentaCertificadosPageRoutingModule } from './venta-certificados-routing.module';

import { VentaCertificadosPage } from './venta-certificados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VentaCertificadosPageRoutingModule
  ],
  declarations: [VentaCertificadosPage]
})
export class VentaCertificadosPageModule {}
