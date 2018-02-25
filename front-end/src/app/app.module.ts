import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditReviewsComponent } from './components/edit-reviews/edit-reviews.component';
import { ReviewDetailsComponent } from './components/review-details/review-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppRoutingModule } from './/app-routing.module';
import { ReviewsDetailsComponent } from './components/reviews-details/reviews-details.component';
import { AddReviewsComponent } from './components/add-reviews/add-reviews.component';
import { ReviewsComponent } from './components/reviews/reviews.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    EditReviewsComponent,
    ReviewDetailsComponent,
    LoginComponent,
    RegisterComponent,
    ReviewsDetailsComponent,
    AddReviewsComponent,
    ReviewsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
