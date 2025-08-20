
import {
  AfterViewInit,
  Component,
  DOCUMENT,
  DestroyRef,
  ElementRef,
  ViewChild,
  inject
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import * as L from 'leaflet';
import { firstValueFrom } from 'rxjs';
import { Location } from '../../interfaces/conference.interfaces';
import { LocationService } from '../../providers/location.service';

@Component({
  selector: 'page-map',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Map</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div #mapCanvas class="map-canvas"></div>
    </ion-content>
  `,
  styleUrls: ['./map.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonContent,
  ],
  standalone: true,
})
export class MapPage implements AfterViewInit {
  private doc = inject(DOCUMENT);
  private locationService = inject(LocationService);
  private destroyRef = inject(DestroyRef);
  private map: L.Map | null = null;
  private markers: L.Marker[] = [];

  @ViewChild('mapCanvas', { static: true }) mapElement!: ElementRef;

  ngAfterViewInit() {
    this.locationService.loadLocations()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.initializeMap();
      });

    // Subscribe to location changes
    this.locationService.getLocations()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        if (this.map) {
          this.initializeMap();
        }
      });

    // Clean up map on destroy
    this.destroyRef.onDestroy(() => {
      if (this.map) {
        this.map.remove();
      }
    });
  }

  private async initializeMap() {
    const mapEle = this.mapElement.nativeElement;

    // Remove existing map if it exists
    if (this.map) {
      this.map.remove();
      this.markers.forEach(marker => marker.remove());
      this.markers = [];
    }

    try {
      // Get center location
      const centerLocation = await firstValueFrom(this.locationService.getCenterLocation());
      if (!centerLocation) {
        return;
      }

      // Initialize map
      this.map = L.map(mapEle, {
        center: [centerLocation.lat, centerLocation.lng],
        zoom: 16,
        preferCanvas: true
      });

      // Configure default marker icon with shadow
      L.Marker.prototype.options.icon = L.icon({
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        shadowSize: [41, 41],
        shadowAnchor: [12, 41]
      });

      // Add tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(this.map);

      // Add markers for all locations
      const locations = await firstValueFrom(this.locationService.getLocations());
      if (this.map && locations) {
        locations.forEach((location: Location) => {
          const marker = L.marker([location.lat, location.lng])
            .addTo(this.map as L.Map)
            .bindPopup(`${location.name}`, {
              className: 'location-popup'
            });
          this.markers.push(marker);
        });
      }

      mapEle.classList.add('show-map');

      // Force a resize after a short delay to ensure proper rendering
      setTimeout(() => {
        this.map?.invalidateSize();
      }, 100);
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  }
}
