import { Injectable } from '@angular/core';
import { AngularFirestore,
         AngularFirestoreCollection,
         AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Session } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SessionData {
  sessionsCollection: AngularFirestoreCollection<Session> ;
  sessionDoc: AngularFirestoreDocument<Session> ;
  sessions: Observable<Session[]> ;
  session: Observable<Session> ;
  id: string;

  constructor(private afs: AngularFirestore) {
    this.sessionsCollection = this.afs.collection(
      'sessions', ref => ref.orderBy('date', 'asc'));
  }

  getSessions(): Observable<Session[]> {
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

  addNewSession(session: Session) {
    return this.sessionsCollection.add(session)
      .then(docRef => {
        const id = docRef.id;
        return id;
      });
  }

  updateSession(id: string, session: Session) {
    this.sessionDoc = this.afs.doc(`sessions/${id}`);
    this.sessionDoc.update(session);
  }

  deleteSession(session: Session) {
    this.sessionDoc = this.afs.doc(`sessions/${session.id}`);
    this.sessionDoc.delete();
  }

  getSession(id: string) {
    return this.sessionsCollection.doc(id).ref.get()
      .then(doc => {
        const res = doc.data() as Session ;
        return res;
      });
  }
}
