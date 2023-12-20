import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CerbungdetailPageRoutingModule } from './cerbungdetail-routing.module';

import { CerbungdetailPage } from './cerbungdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CerbungdetailPageRoutingModule
  ],
  declarations: [CerbungdetailPage]
})
export class CerbungdetailPageModule {}
