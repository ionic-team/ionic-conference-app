import { NgModule } from '@angular/core';
import { SpeakerDetailPage } from './speaker-detail';
import { DeepLinkModule } from 'ionic-angular';

@NgModule({
	declarations: [
		SpeakerDetailPage
	],
	imports: [
		DeepLinkModule.forChild(SpeakerDetailPage)
	],
	entryComponents: [
		SpeakerDetailPage
	]
})
export class SpeakerDetailModule {}