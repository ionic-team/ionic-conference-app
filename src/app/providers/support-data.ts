import { Injectable } from '@angular/core';
import { Events } from '@ionic/angular';
import { AngularFirestore,
         AngularFirestoreCollection,
         AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Support } from '../models';
import { FunctionlData } from './function-data';
import { UserData } from './user-data';

@Injectable({
  providedIn: 'root'
})
export class SupportData {
  supportsCollection: AngularFirestoreCollection<Support> ;
  supportDoc: AngularFirestoreDocument<Support> ;
  supports: Observable<Support[]> ;
  support: Observable<Support> ;

  constructor(private afs: AngularFirestore,
              private functionData: FunctionlData,
              private userData: UserData,
              public events: Events) {
    this.supportsCollection = this.afs.collection(
      'supports', ref => ref.orderBy('date', 'asc'));
  }

  getSupports(): Observable<Support[]> {
    this.supports = this.supportsCollection.snapshotChanges()
      .pipe(map(response => {
        return response.map(action => {
          const data = action.payload.doc.data() as Support;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
    return this.supports;
  }

  addSupport(message: string) {
    const date = this.functionData.getDataFormat(null);
    this.userData.getUserId()
      .then(id => {
        const support: Support = {
          date: date,
          userId: id,
          support: message
        };
        this.supportsCollection.add(support);
      });
  }
}
