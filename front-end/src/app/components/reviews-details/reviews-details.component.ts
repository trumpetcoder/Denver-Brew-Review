import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../../services/reviews.service'; // Importing for editing
import { Router, ActivatedRoute, Params } from '@angular/router'; // Importing Router
import { FlashMessagesService } from 'angular2-flash-messages'; // Importing Flash Messages  
import { Reviews } from '../../models/Reviews'; // Importing reviews model

@Component({
  selector: 'app-reviews-details',
  templateUrl: './reviews-details.component.html',
  styleUrls: ['./reviews-details.component.css']
})
export class ReviewsDetailsComponent implements OnInit {
  id: string;
  review: Reviews; // bringing in interface line 5

  constructor(
    //Adding dependencies
    private reviewsService: ReviewsService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    // Getting id from url
    this.id = this.route.snapshot.params['id'];
    // Get review
    this.reviewsService.getReview(this.id).subscribe(reviews => {
      this.review = reviews;
      console.log(this.review);
    });
  }

}
