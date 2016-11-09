import { Component } from '@angular/core';

import { ConferenceData } from '../../providers/conference-data';

import { Platform } from 'ionic-angular';

import { GoogleMap, GoogleMapsLatLng, GoogleMapsMarkerOptions } from 'ionic-native';


@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  public map: GoogleMap;

  constructor(public confData: ConferenceData, public platform: Platform) {
    this.platform.ready().then(() => this.onPlatformReady());
  }

  onPlatformReady() {
    this.confData.getMap().subscribe(mapData => {
      this.map = new GoogleMap('map_canvas');

      GoogleMap.isAvailable().then(() => {
        mapData.find(data => {
          console.log(data);
          const position = new GoogleMapsLatLng(43.074395, -89.381056);

          this.map.animateCamera({
            target: position,
            zoom: 16
          }).then(() => {
            mapData.forEach(markerData => {
              const markerOptions: GoogleMapsMarkerOptions = {
                position: markerData,
                title: markerData.name
              };

              this.map.addMarker(markerOptions);
            });
          });
        });
      });
    });
  }
}
