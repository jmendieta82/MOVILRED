import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambioRedPageRoutingModule } from './cambio-red-routing.module';

import { CambioRedPage } from './cambio-red.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambioRedPageRoutingModule
  ],
  declarations: [CambioRedPage]
})
export class CambioRedPageModule {}
