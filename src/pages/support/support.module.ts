import { NgModule } from '@angular/core';
import { SupportPage } from './support';
import { DeepLinkModule } from 'ionic-angular';

@NgModule({
	declarations: [
		SupportPage
	],
	imports: [
		DeepLinkModule.forChild(SupportPage)
	],
	entryComponents: [
		SupportPage
	]
})
export class SupportPageModule { }
