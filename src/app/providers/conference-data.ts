import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserData } from './user-data';
import { Track, Session, PartOfDay, Map } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ConferenceData {
  tracksCollection: AngularFirestoreCollection<Track> ;
  trackDoc: AngularFirestoreDocument<Track> ;
  tracks: Observable<Track[]> ;
  track: Observable<Track> ;

  sessionsCollection: AngularFirestoreCollection<Session[]>;
  sessions: Observable<Session[]> ;
  session: Observable<Session> ;

  partsOfDayCollection: AngularFirestoreCollection<PartOfDay[]>;
  partsOfDay: Observable<PartOfDay[]>;

  mapsCollection: AngularFirestoreCollection<any[]>;
  maps: Observable<any[]>;

  data: any;

  constructor(
    public http: HttpClient,
    public userProvider: UserData,
    private afs: AngularFirestore) {
    this.tracksCollection = this.afs.collection(
      'tracks', ref => ref.orderBy('name', 'asc'));
    this.partsOfDayCollection = this.afs.collection(
      'partsOfDay', ref => ref.orderBy('indexKey', 'asc'));
    this.mapsCollection = this.afs.collection(
      'maps', ref => ref.orderBy('name', 'asc'));
  }

  getPartsOfDay(): Observable<PartOfDay[]> {
    this.partsOfDay = this.partsOfDayCollection.snapshotChanges()
    .pipe(map(response => {
      return response.map(action => {
        const data = action.payload.doc.data() as PartOfDay;
        return data;
      });
    }));
    return this.partsOfDay ;
  }

  getSessionInPeriod(start, end): Observable<Session[]> {
    this.sessionsCollection = this.afs.collection(
      'sessions', ref => ref.where('date', '>=', start)
                            .where('date', '<=', end)
                            .orderBy('date', 'asc'));
    this.sessions = this.sessionsCollection.snapshotChanges()
    .pipe(map(response => {
      return response.map(action => {
        const data = action.payload.doc.data() as Session;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
    return this.sessions ;
  }

  filterSession(session: any, options: any) {
    let matchesQueryText = false;
    if (options.queryText.length > 0) {
      // of any query word is in the session name than it passes the query test
      if (session.name.toLowerCase().indexOf(options.queryText) > -1) {
        matchesQueryText = true;
      }
    } else {
      // if there are no query words then this session passes the query test
      matchesQueryText = true;
    }

    // if any of the sessions tracks are not in the
    // exclude tracks then this session passes the track test
    let matchesTracks = false;
    session.tracks.forEach((trackName: string) => {
      if (options.excludeTracks.indexOf(trackName) === -1) {
        matchesTracks = true;
      }
    });

    // if the segement is 'favorites', but session is not a user favorite
    // then this session does not pass the segment test
    let matchesSegment = false;
    if (options.segment === 'favorites') {
      this.userProvider.getUser().then(user => {
        matchesSegment = (user.favorites.findIndex(f => f.name === session.name) > -1);
        // all tests must be true if it should not be hidden
        session.hide = !(matchesQueryText && matchesTracks && matchesSegment);
      });
    } else {
      // doesn't matter about favorites.
      session.hide = !(matchesQueryText && matchesTracks);
    }
    return session;
  }

  getTracks(): Observable<Track[]> {
    this.tracks = this.tracksCollection.snapshotChanges()
      .pipe(map(response => {
        return response.map(action => {
          const data = action.payload.doc.data() as Track;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
    return this.tracks ;
  }

  getMap() {
    this.maps = this.mapsCollection.snapshotChanges()
    .pipe(map(response => {
      return response.map(action => {
        const data = action.payload.doc.data() as any;
        return data;
      });
    }));
    return this.maps ;
  }
}
