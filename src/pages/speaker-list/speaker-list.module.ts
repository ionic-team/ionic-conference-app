import { NgModule } from '@angular/core';
import { SpeakerListPage } from './speaker-list';
import { DeepLinkModule } from 'ionic-angular';

@NgModule({
	declarations: [
		SpeakerListPage
	],
	imports: [
		DeepLinkModule.forChild(SpeakerListPage)
	],
	entryComponents: [
		SpeakerListPage
	]
})
export class SpeakerListModule {}