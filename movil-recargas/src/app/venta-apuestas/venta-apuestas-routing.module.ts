import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VentaApuestasPage } from './venta-apuestas.page';

const routes: Routes = [
  {
    path: '',
    component: VentaApuestasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentaApuestasPageRoutingModule {}
