import { Component, ElementRef, Inject, ViewChild, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';
import { Platform } from '@ionic/angular';
import { DOCUMENT} from '@angular/common';
import * as Leaflet from 'leaflet';
import { antPath } from 'leaflet-ant-path';

import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';


import { darkStyle } from './map-dark-style';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
  styleUrls: ['./map.scss']
})
export class MapPage implements OnInit, OnDestroy,  AfterViewInit {
  //@ViewChild('mapCanvas', { static: true }) mapElement: ElementRef;
  @ViewChild(IonModal) modal: IonModal;

  map: Leaflet.Map;
  message:string;
  name: string;

  constructor(
    @Inject(DOCUMENT) private doc: Document,
    public confData: ConferenceData,
    public platform: Platform) {}

  async ngAfterViewInit() {
    const appEl = this.doc.querySelector('ion-app');
    let isDark = false;
    let style = [];
    if (appEl.classList.contains('dark-theme')) {
      style = darkStyle;
    }


  }


  ngOnInit() {
    console.log('init: MapPage');
    // this.leafletMap();
  }

  showPopOver(): void{
    console.log('cliked!')
  }

  ionViewDidEnter(): void {
    // this.leafletMap();
    // this.leafletMap();

   }


  leafletMap() {

    this.map = Leaflet.map('mapCanvas').setView([3.860518, 11.515800], 15);
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'GIZ CM -- Angular LeafLet',
    }).addTo(this.map);

    Leaflet.marker([3.860518, 11.515800]).addTo(this.map).bindPopup('Le Musée National de Yaoundé').openPopup();
    Leaflet.marker([3.863922, 11.514487]).addTo(this.map).bindPopup('Centre administratif, Yaoundé').openPopup();

    antPath([[3.8639, 11.5144] , [3.861688, 11.516832] ,[3.8605, 11.5158]],
      { color: '#FF0000', weight: 5, opacity: 0.4 ,
        delay : 1000
    }).addTo(this.map);
  }

  /** Remove map when we have multiple map object */
  ngOnDestroy() {
    this.map.off();
    this.map.remove();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }





  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  // fix map id already loaded
  ionViewCanLeave(){
    this.map.off();
    // this.map.remove();
      //document.getElementById("mapId").outerHTML = "";

  }
}
