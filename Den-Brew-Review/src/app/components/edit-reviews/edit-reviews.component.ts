import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../../services/reviews.service'; // importing ReviewsService
import { Router, ActivatedRoute, Params } from '@angular/router'; // Import to fetch params 
import { FlashMessagesService } from 'angular2-flash-messages'; // import flash messages for use
import { Reviews } from '../../models/Reviews'; // Importing Reviews Model

@Component({
  selector: 'app-edit-reviews',
  templateUrl: './edit-reviews.component.html',
  styleUrls: ['./edit-reviews.component.css']
})
export class EditReviewsComponent implements OnInit {
  // properties to manipulate
  id: string;
  review: Reviews = {
    breweryName: '',
    breweryReview: '',
    email: ''
  }

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
    // Get review to be edited
    this.reviewsService.getReview(this.id).subscribe(reviews => this.review = reviews);
      
    }

  onSubmit({value, valid}: {value: Reviews, valid: boolean}) {
    if(!valid) {
      this.flashMessage.show('Please complete your edits', {
        cssClass: 'alert-danger', timeout: 4000
      });
    } else {
      value.id = this.id;
      //updating review logic
      this.reviewsService.updateReview(value);
      this.flashMessage.show('Review updated', {
        cssClass: 'alert-success', timeout: 4000
      });
      this.router.navigate(['/reviews/'+this.id]);
    }
  }
}


