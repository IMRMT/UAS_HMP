import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotifdetailPage } from './notifdetail.page';

const routes: Routes = [
  {
    path: '',
    component: NotifdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotifdetailPageRoutingModule {}
