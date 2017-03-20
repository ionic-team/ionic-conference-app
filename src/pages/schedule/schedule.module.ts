import { NgModule } from '@angular/core';
import { SchedulePage } from './schedule';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
	declarations: [
		SchedulePage
	],
	imports: [
		IonicPageModule.forChild(SchedulePage)
	],
	entryComponents: [
		SchedulePage
	]
})
export class SchedulePageModule {}
