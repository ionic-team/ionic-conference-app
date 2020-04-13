import { Routes } from '@angular/router';

import { SchedulePage } from './schedule';

export const routes: Routes = [
  {
    path: '',
    component: SchedulePage
  },
  {
    path: 'session/:sessionId',
    loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
  }
];
