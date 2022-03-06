import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoraPageRoutingModule } from './mora-routing.module';

import { MoraPage } from './mora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoraPageRoutingModule
  ],
  declarations: [MoraPage]
})
export class MoraPageModule {}
