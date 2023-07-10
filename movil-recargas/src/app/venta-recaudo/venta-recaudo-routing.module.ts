import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VentaRecaudoPage } from './venta-recaudo.page';

const routes: Routes = [
  {
    path: '',
    component: VentaRecaudoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentaRecaudoPageRoutingModule {}
