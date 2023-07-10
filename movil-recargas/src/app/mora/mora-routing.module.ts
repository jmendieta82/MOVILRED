import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoraPage } from './mora.page';

const routes: Routes = [
  {
    path: '',
    component: MoraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoraPageRoutingModule {}
