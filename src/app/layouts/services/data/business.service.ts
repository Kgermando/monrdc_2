import { Injectable } from '@angular/core';

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BusinessData } from '../businessData';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  private businessCollection: AngularFirestoreCollection<BusinessData>;
  private businessData: Observable<BusinessData[]>;
  private businessDoc: AngularFirestoreDocument<BusinessData>;
  private business: Observable<BusinessData>;
  public selectedBusiness: BusinessData = {id: null};

  constructor(private afs: AngularFirestore) {
    this.businessCollection = afs.collection<BusinessData>('business-list');
    this.businessData = this.businessCollection.valueChanges();
   }

   getAllPostsDocNo() {
    try {
      return this.afs.collection('business-list').get();
    } catch (error) {
      return error;
    }
  }

  getAllbusiness() {
    return this.businessData = this.businessCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as BusinessData;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  getBusiness(doc: string) {
    try {
      return this.afs.collection('business-list').doc(doc).valueChanges();
    } catch (error) {
      return error;
    }
  }

  searchPost(critere: string) {
    try {
      // tslint:disable-next-line:prefer-const
      let results = [];
      this.afs.collection('business-list', ref =>
        ref.where('socite', '>=', critere)
          .where('socite', '<=', critere)).get().subscribe(data => {
            data.docs.forEach(doc => {
              this.getBusiness(doc.id).subscribe(post => {
                results.push({ doc: doc.id, post });
              });
            });
          });
      return results;
    } catch (error) {
      return error;
    }
  }


  getOneBusiness(idBusiness: string) {
    this.businessDoc = this.afs.doc<BusinessData>(`business-list/${idBusiness}`);
    return this.business = this.businessDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as BusinessData;
        data.id = action.payload.id;
        return data;
      }
    }));
  }


  addBusiness(business: BusinessData): void {
    this.businessCollection.add(business);
  }


  updateBusiness(business: BusinessData): void {
    const idBusiness = business.id;
    this.businessDoc = this.afs.doc<BusinessData>(`business-list/${idBusiness}`);
    this.businessDoc.update(business);
  }


  deleteBusiness(idBusiness: string): void {
    this.businessDoc = this.afs.doc<BusinessData>(`business-list/${idBusiness}`);
    this.businessDoc.delete();
  }
}
