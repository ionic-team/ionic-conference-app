import { NgModule } from '@angular/core';
import { SignupPage } from './signup';
import { DeepLinkModule } from 'ionic-angular';

@NgModule({
	declarations: [
		SignupPage
	],
	imports: [
		DeepLinkModule.forChild(SignupPage)
	],
	entryComponents: [
		SignupPage
	]
})
export class SignupPageModule {}
