import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicAngularModule } from '@ionic/angular';

import { SpeakerListPage } from './speaker-list';
import { SpeakerListPageRoutingModule } from './speaker-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicAngularModule,
    SpeakerListPageRoutingModule
  ],
  declarations: [SpeakerListPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SpeakerListModule {}
