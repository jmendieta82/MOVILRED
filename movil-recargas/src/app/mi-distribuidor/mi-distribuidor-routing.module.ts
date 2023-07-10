import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiDistribuidorPage } from './mi-distribuidor.page';

const routes: Routes = [
  {
    path: '',
    component: MiDistribuidorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiDistribuidorPageRoutingModule {}
