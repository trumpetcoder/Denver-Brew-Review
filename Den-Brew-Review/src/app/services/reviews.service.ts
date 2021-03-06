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
  // Logic for retrieving reviews from firestore
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
  // Logic for adding new reviews to backend
  newReviews(reviews: Reviews) {
    this.reviewsCollection.add(reviews);
  }
  // Logic for grabbing individual reviews using reviewsDoc
  getReview(id: string): Observable<Reviews> {
    this.reviewDoc = this.afs.doc<Reviews>(`reviews/${id}`);
    this.review = this.reviewDoc.snapshotChanges().map(action => { // throwing an error added back
        if(action.payload.exists === false) {
          return null;
        } else {
        const data = action.payload.data() as Reviews; // grabbing the review
        data.id = action.payload.id;
        return data;
        }
    });
    return this.review;
  }
  // Logic for updating Reviews Looking here for errors this is the problem!!!!!
  updateReview(reviews: Reviews) {
    this.reviewDoc = this.afs.doc(`reviews/${reviews.id}`); // needed object NOT array
    console.log(this.reviewDoc);
    this.reviewDoc.update(reviews);
  }

  deleteReview(reviews: Reviews) {
    this.reviewDoc = this.afs.doc(`reviews/${reviews.id}`); // needed object NOT array
    console.log(this.reviewDoc);
    this.reviewDoc.delete();
  }


}

// End