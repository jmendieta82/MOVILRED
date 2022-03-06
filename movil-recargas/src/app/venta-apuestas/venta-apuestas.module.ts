import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VentaApuestasPageRoutingModule } from './venta-apuestas-routing.module';

import { VentaApuestasPage } from './venta-apuestas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VentaApuestasPageRoutingModule
  ],
  declarations: [VentaApuestasPage]
})
export class VentaApuestasPageModule {}
