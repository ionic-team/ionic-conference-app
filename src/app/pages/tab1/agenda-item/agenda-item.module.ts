import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaItemPageRoutingModule } from './agenda-item-routing.module';
import { AgendaAvatarsComponentModule } from '../../../components/agenda-avatars/agenda-avatars.module';

import { AgendaItemPage } from './agenda-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaItemPageRoutingModule,
    AgendaAvatarsComponentModule
  ],
  declarations: [AgendaItemPage]
})
export class AgendaItemPageModule {}
