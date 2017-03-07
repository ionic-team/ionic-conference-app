import { NgModule } from '@angular/core';
import { PopoverPage } from './about-popover';
import { DeepLinkModule } from 'ionic-angular';

@NgModule({
	declarations: [
		PopoverPage
	],
	imports: [
		DeepLinkModule.forChild(PopoverPage)
	],
	entryComponents: [
		PopoverPage
	]
})
export class PopoverPageModule { }
