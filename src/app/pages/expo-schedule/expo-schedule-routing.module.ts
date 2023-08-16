import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExpoSchedulePage } from './expo-schedule';

const routes: Routes = [
  {
    path: '',
    component: ExpoSchedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpoSchedulePageRoutingModule { }
