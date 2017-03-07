import { NgModule } from '@angular/core';
import { AboutPage } from './about';
import { DeepLinkModule } from 'ionic-angular';

@NgModule({
	declarations: [
		AboutPage
	],
	imports: [
		DeepLinkModule.forChild(AboutPage)
	],
	entryComponents: [
		AboutPage
	]
})
export class AboutPageModule {}
