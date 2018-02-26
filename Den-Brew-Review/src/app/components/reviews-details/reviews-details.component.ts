import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../../services/reviews.service'; // importing ReviewsService
import { Router, ActivatedRoute, Params } from '@angular/router'; // Import to fetch params 
import { FlashMessagesService } from 'angular2-flash-messages'; // imort flash messages for use
import { Reviews } from '../../models/Reviews'; // Importing Reviews Model


@Component({
  selector: 'app-reviews-details',
  templateUrl: './reviews-details.component.html',
  styleUrls: ['./reviews-details.component.css']
})
export class ReviewsDetailsComponent implements OnInit {
  // component properties with reviews set to Reviews model
  id: string;
  review: Reviews;

  constructor(
    // added dependencies
    private reviewsService: ReviewsService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    // Grabbing id from url using firestore snapshot
    this.id = this.route.snapshot.params['id'];
    // Get review 
    this.reviewsService.getReview(this.id).subscribe(reviews => {
      this.review = reviews;
      console.log(this.review); // checking to see if we are retrieving particular review
    })
  }

}
