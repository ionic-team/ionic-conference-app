import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ExpoSchedulePage } from './expo-schedule';
// import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';
import { ExpoSchedulePageRoutingModule } from './expo-schedule-routing.module';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ExpoSchedulePageRoutingModule
    ],
    providers: [InAppBrowser],
    declarations: [
        ExpoSchedulePage
        // ScheduleFilterPage
    ]
})
export class ExpoScheduleModule { }
