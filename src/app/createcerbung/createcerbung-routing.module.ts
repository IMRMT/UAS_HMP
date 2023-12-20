import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatecerbungPage } from './createcerbung.page';

const routes: Routes = [
  {
    path: '',
    component: CreatecerbungPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatecerbungPageRoutingModule {}
