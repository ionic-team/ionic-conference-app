import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { IonicServerModule } from '@ionic/angular';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
    IonicServerModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
