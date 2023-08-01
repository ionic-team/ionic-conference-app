import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { BtbPage } from './btb';
import { BtbPageRoutingModule } from './btb-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    BtbPageRoutingModule
  ],
  declarations: [BtbPage],
})
export class BtbPageModule {}
