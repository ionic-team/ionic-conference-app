import { Routes } from '@angular/router';
import { TabsPage } from './tabs-page';

export const TABS_ROUTES: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'schedule',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('../schedule/schedule').then(m => m.SchedulePage),
          },
          {
            path: 'session/:sessionId',
            loadComponent: () =>
              import('../session-detail/session-detail').then(
                m => m.SessionDetailPage
              ),
          },
        ],
      },
      {
        path: 'speakers',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('../speaker-list/speaker-list').then(
                m => m.SpeakerListPage
              ),
          },
          {
            path: 'session/:sessionId',
            loadComponent: () =>
              import('../session-detail/session-detail').then(
                m => m.SessionDetailPage
              ),
          },
          {
            path: 'speaker-details/:speakerId',
            loadComponent: () =>
              import('../speaker-detail/speaker-detail').then(
                m => m.SpeakerDetailPage
              ),
          },
        ],
      },
      {
        path: 'map',
        loadComponent: () => import('../map/map').then(m => m.MapPage),
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('../about/about').then(m => m.AboutPage),
          },
        ],
      },
      {
        path: '',
        redirectTo: '/app/tabs/schedule',
        pathMatch: 'full',
      },
    ],
  },
];
