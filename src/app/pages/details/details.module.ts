import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsPage } from './details';
import { DetailsPageRoutingModule } from './details-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    DetailsPageRoutingModule
  ],
  declarations: [
    DetailsPage,
  ]
})
export class  DetailsModule { }
