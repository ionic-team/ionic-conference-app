import { NgModule } from '@angular/core';
import { TabsPage } from './tabs';
import { DeepLinkModule } from 'ionic-angular';

@NgModule({
	declarations: [
		TabsPage
	],
	imports: [
		DeepLinkModule.forChild(TabsPage)
	],
	entryComponents: [
		TabsPage
	]
})
export class TabsPageModule { }
