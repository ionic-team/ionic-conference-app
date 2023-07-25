import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { ExhibitorListPage } from './exhibitor-list';
import { ExhibitorListPageRoutingModule } from './exhibitor-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ExhibitorListPageRoutingModule
  ],
  declarations: [ExhibitorListPage],
})
export class ExhibitorListPageModule {}
