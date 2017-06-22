import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

import { ConferenceApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { PopoverPage } from '../pages/about-popover/about-popover';
import { ScheduleFilterPage } from '../pages/schedule-filter/schedule-filter';
import { SchedulePage } from '../pages/schedule/schedule';
import { SessionDetailPage } from '../pages/session-detail/session-detail';
import { SignupPage } from '../pages/signup/signup';
import { SpeakerDetailPage } from '../pages/speaker-detail/speaker-detail';
import { SpeakerListPage } from '../pages/speaker-list/speaker-list';
import { SupportPage } from '../pages/support/support';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';


@NgModule({
  declarations: [
    AboutPage,
    AccountPage,
    ConferenceApp,
    LoginPage,
    MapPage,
    PopoverPage,
    ScheduleFilterPage,
    SchedulePage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    SupportPage,
    TabsPage,
    TutorialPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(ConferenceApp, {}, {
      links: [
        { component: AboutPage, name: 'About', segment: 'about' },
        { component: AccountPage, name: 'AccountPage', segment: 'account' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: MapPage, name: 'Map', segment: 'map' },
        { component: ScheduleFilterPage, name: 'ScheduleFilter', segment: 'scheduleFilter' },
        { component: SchedulePage, name: 'Schedule', segment: 'schedule' },
        { component: SessionDetailPage, name: 'SessionDetail', segment: 'sessionDetail/:name' },
        { component: SignupPage, name: 'SignupPage', segment: 'signup' },
        { component: SpeakerDetailPage, name: 'SpeakerDetail', segment: 'speakerDetail/:name' },
        { component: SpeakerListPage, name: 'SpeakerList', segment: 'speakerList' },
        { component: SupportPage, name: 'SupportPage', segment: 'support' },
        { component: TabsPage, name: 'TabsPage', segment: 'tabs' },
        { component: TutorialPage, name: 'Tutorial', segment: 'tutorial' }
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AboutPage,
    AccountPage,
    ConferenceApp,
    LoginPage,
    MapPage,
    PopoverPage,
    ScheduleFilterPage,
    SchedulePage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    SupportPage,
    TabsPage,
    TutorialPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConferenceData,
    UserData,
    InAppBrowser,
    SplashScreen
  ]
})
export class AppModule { }
