import { NgModule } from '@angular/core';
import { TutorialPage } from './tutorial';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
	declarations: [
		TutorialPage
	],
	imports: [
		IonicPageModule.forChild(TutorialPage)
	],
	entryComponents: [
		TutorialPage
	]
})
export class TutorialPageModule {}
