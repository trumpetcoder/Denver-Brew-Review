import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../../services/reviews.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Reviews } from '../../models/Reviews';


@Component({
  selector: 'app-reviews-details',
  templateUrl: './reviews-details.component.html',
  styleUrls: ['./reviews-details.component.css']
})
export class ReviewsDetailsComponent implements OnInit {
  id: string;
  reviews: Reviews;

  constructor(
    private clientService: ReviewsService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    
  }

}
