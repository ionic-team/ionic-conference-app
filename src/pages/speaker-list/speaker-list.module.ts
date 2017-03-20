import { NgModule } from '@angular/core';
import { SpeakerListPage } from './speaker-list';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
	declarations: [
		SpeakerListPage
	],
	imports: [
		IonicPageModule.forChild(SpeakerListPage)
	],
	entryComponents: [
		SpeakerListPage
	]
})
export class SpeakerListModule {}