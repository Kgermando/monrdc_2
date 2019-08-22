import { Injectable } from '@angular/core';

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

import { map } from 'rxjs/operators';
import { Business } from '../business';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  private businessCollection: AngularFirestoreCollection<Business>;
  private business: Observable<Business[]>;
  private businessDoc: AngularFirestoreDocument<Business>;
  private Business: Observable<Business>;
  // public selectedBusiness: Business = {id: null};

  constructor(private afs: AngularFirestore) {
    this.businessCollection = afs.collection<Business>('business-list');
    this.business = this.businessCollection.valueChanges();
   }

  getAllbusiness() {
    return this.business = this.businessCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Business;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  getOneBusiness(idBusiness: string) {
    this.businessDoc = this.afs.doc<Business>(`business-list/${idBusiness}`);
    return this.Business = this.businessDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as Business;
        data.id = action.payload.id;
        return data;
      }
    }));
  }


  addBusiness(business: Business): void {
    this.businessCollection.add(business);
  }


  updateBusiness(business: Business): void {
    const idBusiness = business.id;
    this.businessDoc = this.afs.doc<Business>(`business-list/${idBusiness}`);
    this.businessDoc.update(business);
  }


  deleteBusiness(idBusiness: string): void {
    this.businessDoc = this.afs.doc<Business>(`business-list/${idBusiness}`);
    this.businessDoc.delete();
  }
}
