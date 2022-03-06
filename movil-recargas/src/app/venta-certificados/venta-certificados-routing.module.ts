import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VentaCertificadosPage } from './venta-certificados.page';

const routes: Routes = [
  {
    path: '',
    component: VentaCertificadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentaCertificadosPageRoutingModule {}
