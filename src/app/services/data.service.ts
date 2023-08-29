import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) {}

    getSpeakers() {
      const speakersRef = collection(this.firestore, 'speakers');
      return collectionData(speakersRef);
    }

    getExhibitors() {
      const exhibitorsRef = collection(this.firestore, 'exhibitors');
      return collectionData(exhibitorsRef);
    }

    getSupPlatform() {
      const supPlatformRef = collection(this.firestore, 'suppliers_platform');
      return collectionData(supPlatformRef);
    }

    addScan(scan: String){
      const scanRef = collection(this.firestore, 'scanner');
      return addDoc(scanRef, scan);
    }

    
}
