import { Routes } from '@angular/router';

import { SpeakerListPage } from './speaker-list';

export const routes: Routes = [
  {
    path: '',
    component: SpeakerListPage
  },
  {
    path: 'session/:sessionId',
    loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
  },
  {
    path: 'speaker-details/:speakerId',
    loadChildren: () => import('../speaker-detail/speaker-detail.module').then(m => m.SpeakerDetailModule)
  }
];
