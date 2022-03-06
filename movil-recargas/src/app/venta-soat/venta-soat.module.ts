import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VentaSoatPageRoutingModule } from './venta-soat-routing.module';

import { VentaSoatPage } from './venta-soat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    VentaSoatPageRoutingModule
  ],
  declarations: [VentaSoatPage]
})
export class VentaSoatPageModule {}
