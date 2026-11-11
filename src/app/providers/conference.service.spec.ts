import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';

import conferenceData from '../../assets/data/data.json';
import type { ConferenceData, ScheduleDay } from '../interfaces/conference.interfaces';

import { ConferenceService } from './conference.service';
import { UserService } from './user.service';

const DATA_URL = 'assets/data/data.json';

// The names of the sessions a timeline shows, in order.
const shownNames = (day: ScheduleDay) =>
  day.groups.flatMap((group) => group.sessions.filter((session) => !session.hide).map((session) => session.name));

// The time slots a timeline shows.
const shownGroups = (day: ScheduleDay) => day.groups.filter((group) => !group.hide).map((group) => group.time);

describe('ConferenceService', () => {
  let service: ConferenceService;
  let httpTesting: HttpTestingController;
  let user: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection(), provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(ConferenceService);
    httpTesting = TestBed.inject(HttpTestingController);
    user = TestBed.inject(UserService);
  });

  afterEach(() => {
    httpTesting.verify();
  });

  // Runs a request and answers it with a fresh copy of the real conference data, since the
  // service links speakers and sessions into the objects it receives.
  const respond = async <T>(request: Promise<T>): Promise<T> => {
    httpTesting.expectOne(DATA_URL).flush(structuredClone(conferenceData) as ConferenceData);
    return request;
  };

  const timeline = (queryText?: string, excludeTracks?: string[], segment?: string) =>
    respond(firstValueFrom(service.getTimeline(0, queryText, excludeTracks, segment)));

  describe('load', () => {
    it('should fetch the conference data once and reuse it', async () => {
      const data = await respond(firstValueFrom(service.load()));

      expect(data.schedule.length).toBe(1);
      expect(data.speakers.length).toBe(13);
      expect(await firstValueFrom(service.load())).toBe(data);
      httpTesting.expectNone(DATA_URL);
    });

    it('should link each session to its speakers and each speaker to their sessions', async () => {
      const data = await respond(firstValueFrom(service.load()));
      const sessions = data.schedule[0].groups.flatMap((group) => group.sessions);
      const migrating = sessions.find((session) => session.name === 'Migrating to Ionic');
      const rachel = data.speakers.find((speaker) => speaker.name === 'Rachel Rabbit');

      expect(migrating?.speakers?.map((speaker) => speaker.name)).toEqual(['Eva Eagle', 'Lionel Lion']);
      expect(rachel?.sessions?.map((session) => session.name)).toEqual([
        'Ionic Tooling',
        "What's New in Angular",
        'Navigation in Ionic',
        'Mobile States',
      ]);
      expect(rachel?.sessions?.[0]).toBe(sessions.find((session) => session.name === 'Ionic Tooling'));
    });

    it('should give sessions without speakers an empty speaker list', async () => {
      const data = await respond(firstValueFrom(service.load()));
      const breakfast = data.schedule[0].groups[0].sessions[0];

      expect(breakfast.name).toBe('Breakfast');
      expect(breakfast.speakers).toEqual([]);
    });

    it('should skip speaker names that are not in the speaker list', () => {
      const data: ConferenceData = {
        schedule: [
          {
            date: '2047-05-17',
            groups: [
              {
                time: '9:00 am',
                sessions: [
                  {
                    id: '1',
                    name: 'Keynote',
                    location: 'Hall 1',
                    timeStart: '9:00 am',
                    timeEnd: '10:00 am',
                    tracks: ['Ionic'],
                    speakerNames: ['Nobody', 'Ada'],
                  },
                ],
              },
            ],
          },
        ],
        speakers: [{ id: '1', name: 'Ada' } as ConferenceData['speakers'][number]],
        tracks: [],
        map: [],
      };

      service.processData(data);

      const keynote = data.schedule[0].groups[0].sessions[0];
      expect(keynote.speakers?.map((speaker) => speaker.name)).toEqual(['Ada']);
      expect(data.speakers[0].sessions).toEqual([keynote]);
    });
  });

  describe('getTimeline', () => {
    it('should show every session when nothing is filtered', async () => {
      const day = await timeline();

      expect(day.shownSessions).toBe(20);
      expect(shownGroups(day)).toEqual(day.groups.map((group) => group.time));
    });

    it('should sort the sessions in each time slot by start time', async () => {
      const day = await timeline();
      const group = day.groups.find((g) => g.time === '9:15 am');

      expect(group?.sessions.map((session) => session.timeStart)).toEqual(['9:15 am', '9:30 am', '9:45 am']);
      expect(group?.sessions.map((session) => session.name)).toEqual([
        'University of Ionic',
        'Getting Started with Ionic',
        'Ionic Tooling',
      ]);
    });

    it('should show only the sessions whose name contains the search text, ignoring case', async () => {
      const day = await timeline('ANGULAR');

      expect(shownNames(day)).toEqual(["What's New in Angular", 'Bulding with Ionic and Angular']);
      expect(day.shownSessions).toBe(2);
      expect(shownGroups(day)).toEqual(['10:00 am', '3:00 pm']);
    });

    it('should show sessions matching any word of the search text', async () => {
      const day = await timeline('lunch, breakfast');

      expect(shownNames(day)).toEqual(['Breakfast', 'Lunch']);
    });

    it.each([
      ['dashes', 'ux-lunch'],
      ['dots', 'ux.lunch'],
      ['commas', 'ux,lunch'],
      ['extra spaces', '  ux   lunch '],
    ])('should split the search text on %s', async (_, queryText) => {
      const day = await timeline(queryText);

      expect(shownNames(day)).toEqual(['Lunch', 'UX in Ionic']);
    });

    it('should show nothing when no session matches the search text', async () => {
      const day = await timeline('xyzzy');

      expect(day.shownSessions).toBe(0);
      expect(shownGroups(day)).toEqual([]);
    });

    it('should hide the sessions of excluded tracks', async () => {
      const day = await timeline('', ['Food', 'Angular']);
      const names = shownNames(day);

      expect(day.shownSessions).toBe(16);
      expect(names).not.toContain('Breakfast');
      expect(names).not.toContain('Lunch');
      expect(names).not.toContain("What's New in Angular");
      expect(shownGroups(day)).not.toContain('8:00 am');
      expect(shownGroups(day)).not.toContain('12:00 pm');
    });

    it('should keep a session with several tracks unless all of them are excluded', () => {
      const session = {
        id: '1',
        name: 'Ionic and Angular',
        location: 'Hall 1',
        timeStart: '9:00 am',
        timeEnd: '10:00 am',
        tracks: ['Ionic', 'Angular'],
        speakerNames: [],
      };

      service.filterSession(session, [], ['Angular'], 'all');
      expect(session).toHaveProperty('hide', false);

      service.filterSession(session, [], ['Angular', 'Ionic'], 'all');
      expect(session).toHaveProperty('hide', true);
    });

    it('should show only favorites in the favorites segment', async () => {
      user.addFavorite('Lunch');
      user.addFavorite('Ionic Tooling');

      const day = await timeline('', [], 'favorites');

      expect(shownNames(day)).toEqual(['Ionic Tooling', 'Lunch']);
      expect(day.shownSessions).toBe(2);
    });

    it('should show nothing in the favorites segment when there are no favorites', async () => {
      const day = await timeline('', [], 'favorites');

      expect(day.shownSessions).toBe(0);
    });

    it('should apply the search text, excluded tracks and segment together', async () => {
      user.addFavorite('Ionic Tooling');
      user.addFavorite("What's New in Angular");
      user.addFavorite('Lunch');

      const day = await timeline('ionic angular', ['Tooling'], 'favorites');

      expect(shownNames(day)).toEqual(["What's New in Angular"]);
    });

    it('should show sessions again once a filter is cleared', async () => {
      await timeline('angular', ['Ionic']);

      const day = await firstValueFrom(service.getTimeline(0));

      expect(day.shownSessions).toBe(20);
    });
  });

  describe('getSpeakers, getTracks and getMap', () => {
    it('should return the speakers in the order of the data', async () => {
      const speakers = await respond(firstValueFrom(service.getSpeakers()));

      expect(speakers.map((speaker) => speaker.name)).toEqual(conferenceData.speakers.map((s) => s.name));
    });

    it('should return the tracks', async () => {
      const tracks = await respond(firstValueFrom(service.getTracks()));

      expect(tracks).toContainEqual({ name: 'Angular', icon: 'logo-angular' });
      expect(tracks.length).toBe(10);
    });

    it('should return the map locations', async () => {
      const locations = await respond(firstValueFrom(service.getMap()));

      expect(locations.map((location) => location.name)).toEqual([
        'Monona Terrace Convention Center',
        'Ionic HQ',
        'Afterparty - Brocach Irish Pub',
      ]);
    });
  });
});
