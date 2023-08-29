import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, Timestamp } from '@angular/fire/firestore';

export interface Scan {
  id?: string;
  scan: string;
  dateTime: Date;
  action: String;
}

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


    getScans() {
      const scannerRef = collection(this.firestore, 'scanner');
      return collectionData(scannerRef);
    }

    addScan(scan: Scan){
      const scanRef = collection(this.firestore, 'scanner');
      return addDoc(scanRef, scan);
    }



}
