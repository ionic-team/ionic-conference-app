import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import type { Observable } from 'rxjs';
import { BehaviorSubject, catchError, map, of } from 'rxjs';

import type { Location } from '../interfaces/conference.interfaces';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private http = inject(HttpClient);

  private locationsSubject = new BehaviorSubject<Location[]>([]);
  public readonly locations$ = this.locationsSubject.asObservable();

  loadLocations(): Observable<Location[]> {
    return this.http.get<any>('assets/data/data.json').pipe(
      map((data) => {
        if (data.map && Array.isArray(data.map)) {
          // Add IDs to locations
          const locations = data.map.map((location: any, index: number) => ({
            ...location,
            id: index + 1,
          }));
          this.locationsSubject.next(locations);
          return locations;
        } else {
          throw new Error('Invalid data format: map array not found');
        }
      }),
      catchError((error) => {
        console.error('Error loading locations:', error);
        // Set default locations if data cannot be loaded
        const defaultLocations = [
          {
            id: 1,
            name: 'Monona Terrace Convention Center',
            lat: 43.071584,
            lng: -89.38012,
            center: true,
          },
        ];
        this.locationsSubject.next(defaultLocations);
        return of(defaultLocations);
      }),
    );
  }

  getLocations(): Observable<Location[]> {
    return this.locations$;
  }

  getCenterLocation(): Observable<Location | undefined> {
    return this.locations$.pipe(map((locations) => locations.find((location) => location.center)));
  }
}
