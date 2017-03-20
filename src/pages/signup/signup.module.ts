import { NgModule } from '@angular/core';
import { SignupPage } from './signup';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
	declarations: [
		SignupPage
	],
	imports: [
		IonicPageModule.forChild(SignupPage)
	],
	entryComponents: [
		SignupPage
	]
})
export class SignupPageModule {}
