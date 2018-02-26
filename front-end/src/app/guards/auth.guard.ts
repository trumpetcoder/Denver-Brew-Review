import { Injectable} from '@angular/core'; //Imports needed for auth guards on routes
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth
  ) {}
  // Logic for authGuard. checks to see if user is logged in and if not redirects
  canActivate(): Observable<boolean> {
    return this.afAuth.authState.map(auth => {
      if(!auth) {
        this.router.navigate(['/login']);
        return false;
      } else {
        return true;
      }
    });
  }
}