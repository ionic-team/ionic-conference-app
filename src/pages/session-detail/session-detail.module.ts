import { NgModule } from '@angular/core';
import { SessionDetailPage } from './session-detail';
import { DeepLinkModule } from 'ionic-angular';

@NgModule({
	declarations: [
		SessionDetailPage
	],
	imports: [
		DeepLinkModule.forChild(SessionDetailPage)
	],
	entryComponents: [
		SessionDetailPage
	]
})
export class SessionDetailModule {}
