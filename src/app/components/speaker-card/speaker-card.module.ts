import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpeakerCardComponent } from './speaker-card.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [SpeakerCardComponent],
  exports: [SpeakerCardComponent]
})
export class SpeakerCardComponentModule {}
