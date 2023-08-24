import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaAvatarsComponent } from './agenda-avatars.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [AgendaAvatarsComponent],
  exports: [AgendaAvatarsComponent]
})
export class AgendaAvatarsComponentModule {}
