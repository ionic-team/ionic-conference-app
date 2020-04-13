import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { SpeakerDetailPage } from './speaker-detail';
import { routes } from './speaker-detail-routes';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SpeakerDetailPage,
  ]
})
export class SpeakerDetailModule { }
