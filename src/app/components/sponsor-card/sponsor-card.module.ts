import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SponsorCardComponent } from './sponsor-card.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [SponsorCardComponent],
  exports: [SponsorCardComponent]
})
export class SponsorCardComponentModule {}
