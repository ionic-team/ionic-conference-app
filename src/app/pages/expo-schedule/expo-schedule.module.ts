import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ExpoSchedulePage } from './expo-schedule';
// import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';
import { ExpoSchedulePageRoutingModule } from './expo-schedule-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ExpoSchedulePageRoutingModule
    ],
    declarations: [
        ExpoSchedulePage
        // ScheduleFilterPage
    ]
})
export class ExpoScheduleModule { }
