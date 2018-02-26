import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../../services/reviews.service';

import { Reviews } from '../../models/Reviews'; 

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: Reviews[];  

  constructor(private reviewsService: ReviewsService) { }
  // on init retrieve the reviews from the db
  ngOnInit() {
    this.reviewsService.getReviews().subscribe(reviews => this.reviews = reviews);
  }

}
