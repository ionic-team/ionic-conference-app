import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { AboutPage } from './about';
import { PopoverPage } from '../about-popover/about-popover';
import { routes } from './about-routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AboutPage, PopoverPage],
  entryComponents: [PopoverPage],
  bootstrap: [AboutPage],
})
export class AboutModule {}
