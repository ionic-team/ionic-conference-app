import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PermissionsModalComponent } from './permissions-modal.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [PermissionsModalComponent],
  exports: [PermissionsModalComponent]
})
export class PermissionsModalComponentModule {}
