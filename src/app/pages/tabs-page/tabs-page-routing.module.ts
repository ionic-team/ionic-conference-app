import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { SchedulePage } from '../schedule/schedule';
import { Tab1Page } from '../tab1/tab1.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'agenda',
        children: [
          {
            path: '',
            component: Tab1Page,
          },
          {
            path: 'agenda',
            loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },

      {
        path: 'speakers',
        children: [
          {
            path: '',
            loadChildren: () => import('../speaker-list/speaker-list.module').then(m => m.SpeakersPageModule)
          },
          {
            path: 'session/:sessionId',
            loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
          },
          {
            path: 'speaker-details/:speakerId',
            loadChildren: () => import('../speaker-detail/speaker-detail.module').then(m => m.SpeakerDetailModule)
          }
        ]
      },
      {
        path: 'exhibitor-list',
        children: [
          {
            path: '',
            loadChildren: () => import('../exhibitor-list/exhibitor-list.module').then(m => m.ExhibitorListPageModule)
          },
          {
            path: 'session/:sessionId',
            loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
          },
          {
            path: 'exhibitor-detail/:exhibitorId',
            loadChildren: () => import('../exhibitor-detail/exhibitor-detail.module').then(m => m.ExhibitorDetailModule)
          }
        ]
      },
      {
        path: 'exposchedule',
        children: [
          {
            path: '',
            loadChildren: () => import('../expo-schedule/expo-schedule.module').then(m => m.ExpoScheduleModule)
          }
        ]
      },
      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: () => import('../map/map.module').then(m => m.MapModule)
          }
        ]
      },
      {
        path: 'broadcasting',
        children: [
          {
            path: '',
            loadChildren: () => import('../broadcasting/broadcasting.module').then(m => m.BroadcastingPageModule)
          }
        ]
      },
      {
        path: 'supplier',
        children: [
          {
            path: '',
            loadChildren: () => import('../supplierplatform/supplier.module').then(m => m.SupplierPageModule)
          }
        ]
      },
      {
        path: 'btb',
        children: [
          {
            path: '',
            loadChildren: () => import('../btb/btb.module').then(m => m.BtbPageModule)
          }
        ]
      },
      {
        path: 'scanner',
        children: [
          {
            path: '',
            loadChildren: () => import('../scanner/scanner.module').then(m => m.ScannerModule)
          }
        ]
      },
      {
        path: 'register',
        children: [
          {
            path: '',
            loadChildren: () => import('../register/register.module').then(m => m.RegisterModule)
          }
        ]
      },

      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: () => import('../about/about.module').then(m => m.AboutModule)
          }
        ]
      },

      {
        path: '',
        redirectTo: '/app/tabs/schedule',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

