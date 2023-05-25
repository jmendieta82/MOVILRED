import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambioRedPage } from './cambio-red.page';

const routes: Routes = [
  {
    path: '',
    component: CambioRedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambioRedPageRoutingModule {}
