import { Injectable } from '@angular/core';
import { AngularFirestore,
         AngularFirestoreCollection,
         AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Speaker } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SpeakerData {
  speakersCollection: AngularFirestoreCollection<Speaker> ;
  speakerDoc: AngularFirestoreDocument<Speaker> ;
  speakers: Observable<Speaker[]> ;
  speaker: Observable<Speaker> ;

  constructor(private afs: AngularFirestore) {
    this.speakersCollection = this.afs.collection(
      'speakers', ref => ref.orderBy('name', 'asc'));
    }

  getSpeakers(): Observable<Speaker[]> {
    this.speakers = this.speakersCollection.snapshotChanges()
      .pipe(map(response => {
        return response.map(action => {
          const data = action.payload.doc.data() as Speaker;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
    return this.speakers ;
  }

  getSpeaker(name: string): Speaker {
    let speaker;
    this.getSpeakers().subscribe(
      (data: Speaker[]) => {
        speaker = data.find(spk => spk.name === name);
      });
    return speaker;
  }

  addNewSpeaker(speaker: Speaker) {
    this.speakersCollection.add(speaker) ;
  }

  updateSpeaker(speaker: Speaker) {
    this.speakerDoc = this.afs.doc(`speakers/${speaker.id}`);
    delete(speaker.id);
    this.speakerDoc.update(speaker);
  }

  getSpeakerName(id: string) {
    this.speakerDoc = this.afs.doc(`speakers/${id}`);
    const name = this.speakerDoc.snapshotChanges.name;
    return name;
  }
}
