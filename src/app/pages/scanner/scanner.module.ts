import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ScannerPage } from './scanner';
import { ScannerPageRoutingModule } from './scanner-routing.module';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ScannerPageRoutingModule,
    QRCodeModule
  ],
  declarations: [
    ScannerPage,
    
  ]
})
export class ScannerModule { }
