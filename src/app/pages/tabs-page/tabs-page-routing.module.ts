import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs-page';

import { AboutPage } from '../about/about';
import { MapPage } from '../map/map';
import { SchedulePage } from '../schedule/schedule';
import { SessionDetailPage } from '../session-detail/session-detail';
import { SpeakerDetailPage } from '../speaker-detail/speaker-detail';
import { SpeakerListPage } from '../speaker-list/speaker-list';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'schedule',
        children: [
          {
            path: '',
            component: SchedulePage,
          },
          {
            path: 'session/:sessionId',
            component: SessionDetailPage,
          }
        ]
      },
      {
        path: 'speakers',
        children: [
          {
            path: '',
            component: SpeakerListPage,
          },
          {
            path: 'session/:sessionId',
            component: SessionDetailPage,
          },
          {
            path: 'speaker-details/:speakerId',
            component: SpeakerDetailPage,
          }
        ]
      },
      {
        path: 'map',
        children: [
          {
            path: '',
            component: MapPage,
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            component: AboutPage,
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
