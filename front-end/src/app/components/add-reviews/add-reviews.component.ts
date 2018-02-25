import { Component, OnInit, ViewChild } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages'; //Bringing in FlashMessageService
import { ReviewsService } from '../../services/reviews.service'; //Bringing in Reviews Service
import { Router } from '@angular/router';

import { Reviews } from '../../models/Reviews';

@Component({
  selector: 'app-add-reviews',
  templateUrl: './add-reviews.component.html',
  styleUrls: ['./add-reviews.component.css']
})
export class AddReviewsComponent implements OnInit {
  // Review  
  reviews: Reviews = {
    breweryName: '',
    breweryReview: '',
    email: ''
  }

  @ViewChild('reviewsForm') form: any;

  constructor(
    private flashMessage: FlashMessagesService, // flashmessage service
    private reviewsService: ReviewsService, // reviews service
    private router: Router, // router  
    
  ) { }

  ngOnInit() {
  }

  onSubmit({value, valid}: {value: Reviews, valid: boolean}) {
    // console.log(value, valid); //Testing for Form validation thorugh console
    if(!valid) {
      //show error lasts 4 seconds using flashmessage 
      this.flashMessage.show('Form is not filled out correctly', {
        cssClass: 'alert-danger', timeout: 4000
      });
    } else {
      // Add new review
      this.reviewsService.newReviews(value);
      // Show flash message
      this.flashMessage.show('New review added', {
        cssClass: 'alert-success', timeout: 4000
      });
      // Redirect to Reviews
      this.router.navigate(['/']); // redirect to dashboard
    }
  }

}
