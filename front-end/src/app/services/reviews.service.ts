import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { Reviews } from '../models/Reviews';

@Injectable()
export class ReviewsService {
  reviewsCollection: AngularFirestoreCollection<Reviews>;
  reviewDoc: AngularFirestoreDocument<Reviews>;
  reviews: Observable<Reviews[]>;
  review: Observable<Reviews>;

  constructor(private afs: AngularFirestore) {
    this.reviewsCollection = this.afs.collection('reviews', ref => ref.orderBy('breweryName', 'asc'));
  }

  getReviews(): Observable<Reviews[]> {
    //Get Reviews with ID
    this.reviews = this.reviewsCollection.snapshotChanges().map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Reviews;
        data.id = action.payload.doc.id;
        return data;
      });
    });
    return this.reviews;
  }

}
