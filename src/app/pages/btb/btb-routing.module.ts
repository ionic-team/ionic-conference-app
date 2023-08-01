import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BtbPage } from './btb';
const routes: Routes = [
  {
    path: '',
    component: BtbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BtbPageRoutingModule {}
