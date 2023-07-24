import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExhibitorListPage } from './exhibitor-list';
const routes: Routes = [
  {
    path: '',
    component: ExhibitorListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExhibitorListPageRoutingModule {}
