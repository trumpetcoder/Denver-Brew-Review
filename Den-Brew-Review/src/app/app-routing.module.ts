import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
// Bringing in the components
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddReviewsComponent } from './components/add-reviews/add-reviews.component';
import { EditReviewsComponent } from './components/edit-reviews/edit-reviews.component';
import { ReviewsDetailsComponent } from './components/reviews-details/reviews-details.component';
import { ReviewsComponent } from './components/reviews/reviews.component';

import { AuthGuard } from './guards/auth.guard'; //import of authguard and added to routes

// Route buildout adn logic
const routes: Routes = [
  {path: '', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'reviews/add', component: AddReviewsComponent, canActivate:[AuthGuard]},
  {path: 'reviews/edit/:id', component: EditReviewsComponent, canActivate:[AuthGuard]},
  {path: 'reviews/:id', component: ReviewsDetailsComponent, canActivate:[AuthGuard]},
  {path: 'reviews', component: ReviewsComponent, canActivate:[AuthGuard]},
];


@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes) // links to routes above
  ],
  providers: [AuthGuard] // Auth guard provider use
})
export class AppRoutingModule { }
