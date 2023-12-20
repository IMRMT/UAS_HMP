import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CerbungdetailPage } from './cerbungdetail.page';

const routes: Routes = [
  {
    path: '',
    component: CerbungdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CerbungdetailPageRoutingModule {}
