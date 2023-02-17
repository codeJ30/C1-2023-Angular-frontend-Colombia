import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

import * as auth from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router,
    private afAuth: AngularFireAuth,
    

    ) {}

   

  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      this.router.navigate(['user']);
    });
  }
  // Auth logic to run auth providers
  private AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.router.navigate(['user']);
        console.log(result);
        localStorage.setItem('user', JSON.stringify(result.user));
        //this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['']);
    });
  }
}
