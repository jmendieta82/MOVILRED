import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VentaRecargasPageRoutingModule } from './venta-recargas-routing.module';

import { VentaRecargasPage } from './venta-recargas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VentaRecargasPageRoutingModule
  ],
  declarations: [VentaRecargasPage]
})
export class VentaRecargasPageModule {}
