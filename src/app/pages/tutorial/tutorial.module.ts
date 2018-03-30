import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TutorialPage } from './tutorial';
import { TutorialPageRoutingModule } from './tutorial-routing.module';

@NgModule({
  imports: [CommonModule, IonicModule, TutorialPageRoutingModule],
  declarations: [TutorialPage],
  entryComponents: [TutorialPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TutorialModule {}
