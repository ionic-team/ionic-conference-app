import { NgModule } from '@angular/core';
import { MapPage } from './map';
import { DeepLinkModule } from 'ionic-angular';

@NgModule({
	declarations: [
		MapPage
	],
	imports: [
		DeepLinkModule.forChild(MapPage)
	],
	entryComponents: [
		MapPage
	]
})
export class MapPageModule {}
