import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { SessionDetailPage } from './session-detail';
import { routes } from './session-detail-routes';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SessionDetailPage,
  ]
})
export class SessionDetailModule { }
