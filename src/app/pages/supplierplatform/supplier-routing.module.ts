import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SupplierPage } from './supplier';
const routes: Routes = [
  {
    path: '',
    component: SupplierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierPageRoutingModule {}
