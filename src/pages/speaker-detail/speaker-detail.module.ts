import { NgModule } from '@angular/core';
import { SpeakerDetailPage } from './speaker-detail';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
	declarations: [
		SpeakerDetailPage
	],
	imports: [
		IonicPageModule.forChild(SpeakerDetailPage)
	],
	entryComponents: [
		SpeakerDetailPage
	]
})
export class SpeakerDetailModule {}