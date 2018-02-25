import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'; // import for login auth service
import { Observable } from 'rxjs/Observable'; // import for login auth service

@Injectable()
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth
  ) { }
  // Logic for reaching db and checking for valid user
  login( email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(userData => resolve(userData),
    err => reject(err))
    });
  }

}
