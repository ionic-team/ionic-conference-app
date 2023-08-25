import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwagModalPage } from './swag-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SwagModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwagModalPageRoutingModule {}
