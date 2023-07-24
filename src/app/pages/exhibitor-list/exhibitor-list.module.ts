import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ExhibitorListPage } from './exhibitor-list';
import { ExhibitorListPageRoutingModule } from './exhibitor-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ExhibitorListPageRoutingModule
  ],
  declarations: [ExhibitorListPage],
})
export class ExhibitorListPageModule {}
