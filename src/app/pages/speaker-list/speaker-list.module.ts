import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpeakerListPageRoutingModule } from './speaker-list-routing.module';

import { SpeakerListPage } from './speaker-list';
import { SpeakerCardComponentModule } from '../../components/speaker-card/speaker-card.module';
import { SpeakerViewComponentModule } from '../../components/speaker-view/speaker-view.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpeakerListPageRoutingModule,
    SpeakerCardComponentModule,
    SpeakerViewComponentModule
  ],
  declarations: [SpeakerListPage]
})
export class SpeakersPageModule {}

