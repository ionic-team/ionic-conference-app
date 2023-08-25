import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaCardComponent } from './agenda-card.component';
import { AgendaAvatarsComponentModule } from '../agenda-avatars/agenda-avatars.module';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, AgendaAvatarsComponentModule],
  declarations: [AgendaCardComponent],
  exports: [AgendaCardComponent]
})
export class AgendaCardComponentModule {}
