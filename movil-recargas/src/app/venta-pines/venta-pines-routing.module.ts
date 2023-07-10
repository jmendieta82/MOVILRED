import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VentaPinesPage } from './venta-pines.page';

const routes: Routes = [
  {
    path: '',
    component: VentaPinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentaPinesPageRoutingModule {}
