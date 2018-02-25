import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditReviewsComponent } from './components/edit-reviews/edit-reviews.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppRoutingModule } from './/app-routing.module';
import { ReviewsDetailsComponent } from './components/reviews-details/reviews-details.component';
import { AddReviewsComponent } from './components/add-reviews/add-reviews.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ReviewsService } from './services/reviews.service';
import { AuthService } from './services/auth.service';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    EditReviewsComponent,
    LoginComponent,
    RegisterComponent,
    ReviewsDetailsComponent,
    AddReviewsComponent,
    ReviewsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase,'denverbrewreview'),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [ReviewsService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
