import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VentaPinesPageRoutingModule } from './venta-pines-routing.module';

import { VentaPinesPage } from './venta-pines.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VentaPinesPageRoutingModule
  ],
  declarations: [VentaPinesPage]
})
export class VentaPinesPageModule {}
