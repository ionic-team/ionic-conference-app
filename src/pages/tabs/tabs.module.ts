import { NgModule } from '@angular/core';
import { TabsPage } from './tabs';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
	declarations: [
		TabsPage
	],
	imports: [
		IonicPageModule.forChild(TabsPage)
	],
	entryComponents: [
		TabsPage
	]
})
export class TabsPageModule { }
