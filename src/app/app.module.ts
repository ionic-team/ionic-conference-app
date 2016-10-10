import { NgModule } from '@angular/core';

import { IonicApp, IonicModule, DeepLinkConfig } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { ConferenceApp } from './app.component';

import { AboutPage, PopoverPage } from '../pages/about/about';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { SchedulePage } from '../pages/schedule/schedule';
import { ScheduleFilterPage } from '../pages/schedule-filter/schedule-filter';
import { SessionDetailPage } from '../pages/session-detail/session-detail';
import { SignupPage } from '../pages/signup/signup';
import { SpeakerDetailPage } from '../pages/speaker-detail/speaker-detail';
import { SpeakerListPage } from '../pages/speaker-list/speaker-list';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { Support } from '../pages/support/support';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';

export const deepLinkConfig: DeepLinkConfig = {
  links: [
    { component: TabsPage, name: 'tabs', segment: 'tabs'},
    { component: SchedulePage, name: 'schedule', segment: 'schedule' },
    { component: MapPage, name: 'map', segment: 'map' },
    { component: SpeakerListPage, name: 'speakerList', segment: 'speaker-list' },
    { component: AboutPage, name: 'about', segment: 'about' },
    { component: ScheduleFilterPage, name: 'schedule-filter', segment: 'schedule-filter' },
    { component: SessionDetailPage, name: 'session-detail', segment: 'session-detail' },
    { component: SpeakerDetailPage, name: 'speaker-detail', segment: 'speaker-detail' },
    { component: Support, name: 'support', segment: 'support' },
    { component: SignupPage, name: 'signup', segment: 'signup' },
    { component: TutorialPage, name: 'tutorial', segment: 'tutorial' }
  ]
};


@NgModule({
  declarations: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    TutorialPage,
    Support
  ],
  imports: [
    IonicModule.forRoot(ConferenceApp, null, deepLinkConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    TutorialPage,
    Support
  ],
  providers: [ConferenceData, UserData, Storage]
})
export class AppModule { }
