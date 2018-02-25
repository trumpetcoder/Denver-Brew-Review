import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../../services/reviews.service';

import { Reviews } from '../../models/Reviews';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: Reviews [];

  constructor(private reviewsService: ReviewsService) { }

  ngOnInit() {
    this.reviewsService.getReviews().subscribe(reviews => console.log(reviews));
  }

}
