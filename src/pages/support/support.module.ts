import { NgModule } from '@angular/core';
import { SupportPage } from './support';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
	declarations: [
		SupportPage
	],
	imports: [
		IonicPageModule.forChild(SupportPage)
	],
	entryComponents: [
		SupportPage
	]
})
export class SupportPageModule { }
