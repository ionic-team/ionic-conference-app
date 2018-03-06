import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicAngularModule } from '@ionic/angular';

import { AboutPage } from './about';
import { PopoverPage } from '../about-popover/about-popover';
import { AboutPageRoutingModule } from './about-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicAngularModule,
    AboutPageRoutingModule
  ],
  declarations: [AboutPage, PopoverPage],
  entryComponents: [PopoverPage],
  bootstrap: [AboutPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutModule {}
