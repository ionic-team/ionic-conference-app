import { Component, ViewChild, ElementRef } from '@angular/core';

import { ConferenceData } from '../../providers/conference-data';

import { Platform } from 'ionic-angular';

import { GoogleMap, GoogleMapsLatLng, GoogleMapsMarkerOptions } from 'ionic-native';

declare var google: any;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('mapCanvas') mapElement: ElementRef;
  public map: GoogleMap;

  constructor(public confData: ConferenceData, public platform: Platform) {
  }

  ionViewDidLoad() {
    if (this.platform.is('cordova') === true) {
      let mapEle = this.mapElement.nativeElement;
      this.confData.getMap().subscribe(mapData => {
        this.map = new GoogleMap('map_canvas');
        mapEle.classList.add('show-map');

        GoogleMap.isAvailable().then(() => {
          mapData.find(data => {
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
    } else {
      this.confData.getMap().subscribe(mapData => {
        let mapEle = this.mapElement.nativeElement;

        let map = new google.maps.Map(mapEle, {
          center: mapData.find(d => d.center),
          zoom: 16
        });

        mapData.forEach(markerData => {
          let infoWindow = new google.maps.InfoWindow({
            content: `<h5>${markerData.name}</h5>`
          });

          let marker = new google.maps.Marker({
            position: markerData,
            map: map,
            title: markerData.name
          });

          marker.addListener('click', () => {
            infoWindow.open(map, marker);
          });
        });

        google.maps.event.addListenerOnce(map, 'idle', () => {
          mapEle.classList.add('show-map');
        });

      });
    }
  }
}
