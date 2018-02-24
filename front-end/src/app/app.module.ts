import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditReviewsComponent } from './components/edit-reviews/edit-reviews.component';
import { ReviewDetailsComponent } from './components/review-details/review-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    EditReviewsComponent,
    ReviewDetailsComponent,
    LoginComponent,
    RegisterComponent,
    
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
