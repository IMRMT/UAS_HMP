import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotifdetailPageRoutingModule } from './notifdetail-routing.module';

import { NotifdetailPage } from './notifdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotifdetailPageRoutingModule
  ],
  declarations: [NotifdetailPage]
})
export class NotifdetailPageModule {}
