import { NgModule } from '@angular/core';
import { AccountPage } from './account';
import { DeepLinkModule } from 'ionic-angular';

@NgModule({
	declarations: [
		AccountPage
	],
	imports: [
		DeepLinkModule.forChild(AccountPage)
	],
	entryComponents: [
		AccountPage
	]
})
export class AccountPageModule {}
