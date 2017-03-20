import { NgModule } from '@angular/core';
import { ScheduleFilterPage } from './schedule-filter';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
	declarations: [
		ScheduleFilterPage
	],
	imports: [
		IonicPageModule.forChild(ScheduleFilterPage)
	],
	entryComponents: [
		ScheduleFilterPage
	]
})
export class ScheduleFilterModule {}