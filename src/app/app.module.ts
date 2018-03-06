import { BrowserModule, } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { IonicAngularModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ConferenceData } from './providers/conference-data';
import { UserData } from './providers/user-data';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    IonicAngularModule.forRoot(),
    IonicStorageModule.forRoot()
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    ConferenceData,
    InAppBrowser,
    SplashScreen,
    UserData
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
