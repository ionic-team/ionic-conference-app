import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  ConferenceData,
  Group,
  ScheduleDay,
  Session,
  Speaker,
} from '../interfaces/conference.interfaces';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class ConferenceService {
  http = inject(HttpClient);
  user = inject(UserService);
  data: ConferenceData | null = null;

  load() {
    if (this.data) {
      return of(this.data);
    } else {
      return this.http
        .get<ConferenceData>('assets/data/data.json')
        .pipe(map(this.processData, this));
    }
  }

  processData(data: ConferenceData): ConferenceData {
    // just some good 'ol JS fun with objects and arrays
    // build up the data by linking speakers to sessions
    this.data = data;

    // loop through each day in the schedule
    this.data.schedule.forEach((day: ScheduleDay) => {
      // loop through each timeline group in the day
      day.groups.forEach((group: Group) => {
        // loop through each session in the timeline group
        group.sessions.forEach((session: Session) => {
          session.speakers = [];
          if (session.speakerNames) {
            session.speakerNames.forEach((speakerName: string) => {
              const speaker = this.data.speakers.find(
                (s: Speaker) => s.name === speakerName
              );
              if (speaker) {
                session.speakers.push(speaker);
                speaker.sessions = speaker.sessions || [];
                speaker.sessions.push(session);
              }
            });
          }
        });
      });
    });

    return this.data;
  }

  getTimeline(
    dayIndex: number,
    queryText = '',
    excludeTracks: string[] = [],
    segment = 'all'
  ) {
    return this.load().pipe(
      map((data: ConferenceData) => {
        const day = data.schedule[dayIndex];
        day.shownSessions = 0;

        queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
        const queryWords = queryText
          .split(' ')
          .filter(w => !!w.trim().length);

        day.groups.forEach((group: Group) => {
          group.hide = true;

          // Sort sessions within each group by start time
          group.sessions.sort((a, b) => {
            const timeA = new Date('1970/01/01 ' + a.timeStart).getTime();
            const timeB = new Date('1970/01/01 ' + b.timeStart).getTime();
            return timeA - timeB;
          });

          group.sessions.forEach((session: Session) => {
            // check if this session should show or not
            this.filterSession(session, queryWords, excludeTracks, segment);

            if (!session.hide) {
              // if this session is not hidden then this group should show
              group.hide = false;
              day.shownSessions++;
            }
          });
        });

        return day;
      })
    );
  }

  filterSession(
    session: Session,
    queryWords: string[],
    excludeTracks: string[],
    segment: string
  ) {
    let matchesQueryText = false;
    if (queryWords.length) {
      // of any query word is in the session name than it passes the query test
      queryWords.forEach((queryWord: string) => {
        if (session.name.toLowerCase().indexOf(queryWord) > -1) {
          matchesQueryText = true;
        }
      });
    } else {
      // if there are no query words then this session passes the query test
      matchesQueryText = true;
    }

    // if any of the sessions tracks are not in the
    // exclude tracks then this session passes the track test
    let matchesTracks = false;
    session.tracks.forEach((trackName: string) => {
      if (excludeTracks.indexOf(trackName) === -1) {
        matchesTracks = true;
      }
    });

    // if the segment is 'favorites', but session is not a user favorite
    // then this session does not pass the segment test
    let matchesSegment = false;
    if (segment === 'favorites') {
      if (this.user.hasFavorite(session.name)) {
        matchesSegment = true;
      }
    } else {
      matchesSegment = true;
    }

    // all tests must be true if it should not be hidden
    session.hide = !(matchesQueryText && matchesTracks && matchesSegment);
  }

  getSpeakers() {
    return this.load().pipe(map((data: ConferenceData) => data.speakers));
  }

  getTracks() {
    return this.load().pipe(map((data: ConferenceData) => data.tracks));
  }

  getMap() {
    return this.load().pipe(map((data: ConferenceData) => data.map));
  }
}
