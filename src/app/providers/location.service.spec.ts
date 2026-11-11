import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';

import conferenceData from '../../assets/data/data.json';

import { ConferenceService } from './conference.service';
import { LocationService } from './location.service';

const DATA_URL = 'assets/data/data.json';

const fallbackLocation = {
  id: 1,
  name: 'Monona Terrace Convention Center',
  lat: 43.071584,
  lng: -89.38012,
  center: true,
};

describe('LocationService', () => {
  let service: LocationService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection(), provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(LocationService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTesting.verify();
    vi.restoreAllMocks();
  });

  it('should have no locations before they are loaded', async () => {
    expect(await firstValueFrom(service.getLocations())).toEqual([]);
    expect(await firstValueFrom(service.getCenterLocation())).toBeUndefined();
  });

  it('should load the map locations and number them', async () => {
    const loaded = firstValueFrom(service.loadLocations());
    httpTesting.expectOne(DATA_URL).flush(structuredClone(conferenceData));

    const locations = await loaded;

    expect(locations.map(({ id, name }) => ({ id, name }))).toEqual([
      { id: 1, name: 'Monona Terrace Convention Center' },
      { id: 2, name: 'Ionic HQ' },
      { id: 3, name: 'Afterparty - Brocach Irish Pub' },
    ]);
    expect(await firstValueFrom(service.getLocations())).toEqual(locations);
  });

  it('should reuse the conference data ConferenceService already loaded', async () => {
    const conference = TestBed.inject(ConferenceService);
    const conferenceLoaded = firstValueFrom(conference.load());
    httpTesting.expectOne(DATA_URL).flush(structuredClone(conferenceData));
    await conferenceLoaded;

    // httpTesting.verify() in afterEach fails if this makes a second request.
    const locations = await firstValueFrom(service.loadLocations());

    expect(locations.map(({ name }) => name)).toEqual([
      'Monona Terrace Convention Center',
      'Ionic HQ',
      'Afterparty - Brocach Irish Pub',
    ]);
  });

  it('should return the location marked as the center', async () => {
    const loaded = firstValueFrom(service.loadLocations());
    httpTesting.expectOne(DATA_URL).flush(structuredClone(conferenceData));
    await loaded;

    expect(await firstValueFrom(service.getCenterLocation())).toEqual(fallbackLocation);
  });

  it('should fall back to the convention center when the data cannot be loaded', async () => {
    vi.spyOn(console, 'error').mockImplementation(() => undefined);
    const loaded = firstValueFrom(service.loadLocations());
    httpTesting.expectOne(DATA_URL).flush('Not found', { status: 404, statusText: 'Not Found' });

    expect(await loaded).toEqual([fallbackLocation]);
    expect(await firstValueFrom(service.getLocations())).toEqual([fallbackLocation]);
    expect(console.error).toHaveBeenCalled();
  });

  it('should fall back to the convention center when the data has no map', async () => {
    vi.spyOn(console, 'error').mockImplementation(() => undefined);
    const loaded = firstValueFrom(service.loadLocations());
    httpTesting.expectOne(DATA_URL).flush({ schedule: [] });

    expect(await loaded).toEqual([fallbackLocation]);
    expect(await firstValueFrom(service.getCenterLocation())).toEqual(fallbackLocation);
  });
});
