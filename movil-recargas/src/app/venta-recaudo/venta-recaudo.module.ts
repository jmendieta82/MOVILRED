import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VentaRecaudoPageRoutingModule } from './venta-recaudo-routing.module';

import { VentaRecaudoPage } from './venta-recaudo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VentaRecaudoPageRoutingModule
  ],
  declarations: [VentaRecaudoPage]
})
export class VentaRecaudoPageModule {}
