import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExhibitorDetailPage } from './exhibitor-detail';
import {  ExhibitorDetailPageRoutingModule } from './exhibitor-detail-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ExhibitorDetailPageRoutingModule
  ],
  declarations: [
    ExhibitorDetailPage,
  ]
})
export class  ExhibitorDetailModule { }
