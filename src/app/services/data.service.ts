import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) {}

    getSpeakers() {
      const speakersRef = collection(this.firestore, 'speakers');
      return collectionData(speakersRef);
    }
}
