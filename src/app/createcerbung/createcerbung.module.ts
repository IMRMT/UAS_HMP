import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatecerbungPageRoutingModule } from './createcerbung-routing.module';

import { CreatecerbungPage } from './createcerbung.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatecerbungPageRoutingModule
  ],
  declarations: [CreatecerbungPage]
})
export class CreatecerbungPageModule {}
