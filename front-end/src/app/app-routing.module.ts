import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddReviewsComponent } from './components/add-reviews/add-reviews.component';
import { EditReviewsComponent } from './components/edit-reviews/edit-reviews.component';
import { ReviewsDetailsComponent } from './components/reviews-details/reviews-details.component';
import { ReviewsComponent } from './components/reviews/reviews.component';


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'reviews/add', component: AddReviewsComponent},
  {path: 'reviews/edit/:id', component: EditReviewsComponent},
  {path: 'reviews/:id', component: ReviewsDetailsComponent},
  {path: 'reviews', component: ReviewsComponent},
];


@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
