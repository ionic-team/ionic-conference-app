import { NgModule } from '@angular/core';
import { SessionDetailPage } from './session-detail';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
	declarations: [
		SessionDetailPage
	],
	imports: [
		IonicPageModule.forChild(SessionDetailPage)
	],
	entryComponents: [
		SessionDetailPage
	]
})
export class SessionDetailModule {}
