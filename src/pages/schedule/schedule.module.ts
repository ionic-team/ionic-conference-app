import { NgModule } from '@angular/core';
import { SchedulePage } from './schedule';
import { DeepLinkModule } from 'ionic-angular';

@NgModule({
	declarations: [
		SchedulePage
	],
	imports: [
		DeepLinkModule.forChild(SchedulePage)
	],
	entryComponents: [
		SchedulePage
	]
})
export class SchedulePageModule {}
