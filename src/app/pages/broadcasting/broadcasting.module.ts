import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { BroadcastingPage } from './broadcasting';
import { BroadcastingPageRoutingModule } from './broadcasting-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    BroadcastingPageRoutingModule
  ],
  declarations: [BroadcastingPage],
})
export class BroadcastingPageModule {}
