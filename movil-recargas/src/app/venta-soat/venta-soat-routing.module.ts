import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VentaSoatPage } from './venta-soat.page';

const routes: Routes = [
  {
    path: '',
    component: VentaSoatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentaSoatPageRoutingModule {}
