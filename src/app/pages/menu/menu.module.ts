import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicAngularModule } from '@ionic/angular';

import { Menu } from './menu';

@NgModule({
  imports: [
    CommonModule,
    IonicAngularModule.forRoot(),
  ],
  declarations: [
    Menu,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class MenuModule { }
