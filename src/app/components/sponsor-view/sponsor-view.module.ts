import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SponsorViewComponent } from './sponsor-view.component';
import { SponsorCardComponentModule } from '../sponsor-card/sponsor-card.module';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, SponsorCardComponentModule],
  declarations: [SponsorViewComponent],
  exports: [SponsorViewComponent]
})
export class SponsorViewComponentModule {}
