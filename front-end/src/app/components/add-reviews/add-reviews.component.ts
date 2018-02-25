import { Component, OnInit } from '@angular/core';

import { Reviews } from '../../models/Reviews';

@Component({
  selector: 'app-add-reviews',
  templateUrl: './add-reviews.component.html',
  styleUrls: ['./add-reviews.component.css']
})
export class AddReviewsComponent implements OnInit {
  reviews: Reviews = {
    breweryName: '',
    breweryReview: '',
    email: ''
  }

  constructor() { }

  ngOnInit() {
  }

}
