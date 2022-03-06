import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VentaRecargasPage } from './venta-recargas.page';

const routes: Routes = [
  {
    path: '',
    component: VentaRecargasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentaRecargasPageRoutingModule {}
