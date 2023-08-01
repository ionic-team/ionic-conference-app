import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { SupplierPage } from './supplier';
import { SupplierPageRoutingModule } from './supplier-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    SupplierPageRoutingModule
  ],
  declarations: [SupplierPage],
})
export class SupplierPageModule {}
