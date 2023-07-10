import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VentaRecargasPageRoutingModule } from './venta-recargas-routing.module';
import { VentaRecargasPage } from './venta-recargas.page';
import {IConfig, NgxMaskModule} from "ngx-mask";
const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VentaRecargasPageRoutingModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
  declarations: [VentaRecargasPage]
})
export class VentaRecargasPageModule {}
