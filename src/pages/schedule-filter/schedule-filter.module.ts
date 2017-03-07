import { NgModule } from '@angular/core';
import { ScheduleFilterPage } from './schedule-filter';
import { DeepLinkModule } from 'ionic-angular';

@NgModule({
	declarations: [
		ScheduleFilterPage
	],
	imports: [
		DeepLinkModule.forChild(ScheduleFilterPage)
	],
	entryComponents: [
		ScheduleFilterPage
	]
})
export class ScheduleFilterModule {}