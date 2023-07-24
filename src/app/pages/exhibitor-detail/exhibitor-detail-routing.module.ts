import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExhibitorDetailPage } from './exhibitor-detail';

const routes: Routes = [
  {
    path: '',
    component: ExhibitorDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExhibitorDetailPageRoutingModule { }
