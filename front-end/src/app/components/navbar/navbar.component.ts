import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'; // importing created authService
import { Router } from '@angular/router'; 
import { FlashMessagesService } from 'angular2-flash-messages';
import { Reviews } from '../../models/Reviews';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn?: boolean; //logic for logged in
  loggedInUser: string;
  showRegister: boolean;

  constructor( //dependencies
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if(auth) {
        this.isLoggedIn = true; // boolean for loggd in 
        this.loggedInUser = auth.email; // setting up to grab email
      } else {
        this.isLoggedIn = false;
      }
    });
  }

}
