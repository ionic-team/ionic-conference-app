import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BroadcastingPage } from './broadcasting';
const routes: Routes = [
  {
    path: '',
    component: BroadcastingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BroadcastingPageRoutingModule {}
