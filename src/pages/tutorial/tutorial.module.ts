import { NgModule } from '@angular/core';
import { TutorialPage } from './tutorial';
import { DeepLinkModule } from 'ionic-angular';

@NgModule({
	declarations: [
		TutorialPage
	],
	imports: [
		DeepLinkModule.forChild(TutorialPage)
	],
	entryComponents: [
		TutorialPage
	]
})
export class TutorialPageModule {}
