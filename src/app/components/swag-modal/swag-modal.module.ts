import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwagModalPageRoutingModule } from './swag-modal-routing.module';

import { SwagModalPage } from './swag-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwagModalPageRoutingModule
  ],
  declarations: [SwagModalPage]
})
export class SwagModalPageModule {}
