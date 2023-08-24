import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpeakerViewComponent } from './speaker-view.component';
import { SpeakerCardComponentModule } from '../speaker-card/speaker-card.module';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, SpeakerCardComponentModule],
  declarations: [SpeakerViewComponent],
  exports: [SpeakerViewComponent]
})
export class SpeakerViewComponentModule {}
