import { Component } from '@angular/core';

import { ConferenceData } from '../../providers/conference-data';


@Component({
  templateUrl: 'build/pages/map/map.html'
})
export class MapPage {
  constructor(public confData: ConferenceData) {}

  ionViewLoaded() {
    this.confData.getMap().then(mapData => {
      let mapEle = document.getElementById('map');

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
