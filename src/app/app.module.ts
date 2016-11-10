import { NgModule } from '@angular/core';

import { IonicApp, IonicModule, DeepLinkConfig } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { ConferenceApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { PopoverPage } from '../pages/about-popover/about-popover';
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
import { SupportPage } from '../pages/support/support';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';

export const deepLinkConfig: DeepLinkConfig = {
  links: [
    { component: MapPage, name: 'map', segment: 'map' },
    { component: SpeakerListPage, name: 'speaker-list', segment: 'speaker-list' },
    { component: AboutPage, name: 'about', segment: 'about' },
    { component: SupportPage, name: 'support', segment: 'support' },
    { component: SignupPage, name: 'signup', segment: 'signup' },
    { component: LoginPage, name: 'login', segment: 'login' },
    { component: AccountPage, name: 'account', segment: 'account' },
    { component: TutorialPage, name: 'tutorial', segment: 'tutorial' },
    { component: SessionDetailPage, name: 'session-detail', segment: 'session-detail/:session' },
    { component: SpeakerDetailPage, name: 'speaker-detail', segment: 'speaker-detail/:name' }
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
    SupportPage
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
    SupportPage
  ],
  providers: [ConferenceData, UserData, Storage]
})
export class AppModule { }
