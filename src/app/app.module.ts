import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicApp, IonicModule } from 'ionic-angular';
// import { IonicStorageModule } from '@ionic/storage';

import { ConferenceApp } from './app.component';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';


@NgModule({
  declarations: [
    ConferenceApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(ConferenceApp, {}, {
      links: [
        { loadChildren: '../pages/session-detail/session-detail.module#SessionDetailModule', name: 'SessionDetailPage' },
        { loadChildren: '../pages/schedule-filter/schedule-filter.module#ScheduleFilterModule', name: 'ScheduleFilterPage' },
        { loadChildren: '../pages/speaker-list/speaker-list.module#SpeakerListModule', name: 'SpeakerListPage' },
        { loadChildren: '../pages/speaker-detail/speaker-detail.module#SpeakerDetailModule', name: 'SpeakerDetailPage' },
        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage' },
        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage' },
        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage' },
        { loadChildren: '../pages/account/account.module#AccountPageModule', name: 'AccountPage' },
        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage' },
        { loadChildren: '../pages/support/support.module#SupportPageModule', name: 'SupportPage' },
        { loadChildren: '../pages/schedule/schedule.module#SchedulePageModule', name: 'SchedulePage' },
        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage' },
        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage' },
        { loadChildren: '../pages/about-popover/about-popover.module#PopoverPageModule', name: 'PopoverPage'}
      ]
    })
		/*IonicStorageModule.forRoot()*/
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp
  ],
  providers: [ConferenceData, UserData]
})
export class AppModule { }
