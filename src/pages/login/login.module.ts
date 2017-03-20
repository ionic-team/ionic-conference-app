import { NgModule } from '@angular/core';
import { LoginPage } from './login';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
	declarations: [
		LoginPage
	],
	imports: [
		IonicPageModule.forChild(LoginPage)
	],
	entryComponents: [
		LoginPage
	]
})
export class LoginPageModule {}
