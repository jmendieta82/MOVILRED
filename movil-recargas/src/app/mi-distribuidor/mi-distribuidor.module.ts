import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiDistribuidorPageRoutingModule } from './mi-distribuidor-routing.module';

import { MiDistribuidorPage } from './mi-distribuidor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiDistribuidorPageRoutingModule
  ],
  declarations: [MiDistribuidorPage]
})
export class MiDistribuidorPageModule {}
