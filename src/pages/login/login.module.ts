import { NgModule } from '@angular/core';
import { LoginPage } from './login';
import { DeepLinkModule } from 'ionic-angular';

@NgModule({
	declarations: [
		LoginPage
	],
	imports: [
		DeepLinkModule.forChild(LoginPage)
	],
	entryComponents: [
		LoginPage
	]
})
export class LoginPageModule {}
