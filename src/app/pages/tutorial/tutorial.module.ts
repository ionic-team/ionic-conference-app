import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { TutorialPage } from './tutorial';
import { routes } from './tutorial-routes';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TutorialPage],
  entryComponents: [TutorialPage],
})
export class TutorialModule {}
