import { NgModule } from '@angular/core';
import { PopoverPage } from './about-popover';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
	declarations: [
		PopoverPage
	],
	imports: [
		IonicPageModule.forChild(PopoverPage)
	],
	entryComponents: [
		PopoverPage
	]
})
export class PopoverPageModule { }
