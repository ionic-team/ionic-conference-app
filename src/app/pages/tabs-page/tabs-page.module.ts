import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';
import { SchedulePage } from '../schedule/schedule';
import { FormsModule } from '@angular/forms';
import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';

@NgModule({
  imports: [FormsModule, CommonModule, IonicModule, TabsPageRoutingModule],
  declarations: [TabsPage, SchedulePage, ScheduleFilterPage],
  entryComponents: [ScheduleFilterPage]
})
export class TabsModule {}
