import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

import * as auth from 'firebase/auth';
import { window } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router,
    private afAuth: AngularFireAuth,
    ) {}

   

  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      this.router.navigate(['dashboard']);
    });
  }
  // Auth logic to run auth providers
  private AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.router.navigate(['dashboard']);
        console.log(result);
        localStorage.setItem('user', JSON.stringify(result.user));
        //this.SetUserData(result.user);
      })
      .catch((error) => {
        console.error(error)
      });
  }

  SingIn(email: string , password: string){
     return this.afAuth
     .signInWithEmailAndPassword(email,password).then((result) => {
      this.SetUserData(result.user);
      this.afAuth.authState.subscribe((user) => {
        if(user) {
          this.router.navigate(['/dashboard']);
        }
      });
     })
     .catch((error)=> {
      console.error(error)
     });
    }

  signUp(email: string , password: string) {
    return this.afAuth
    .createUserWithEmailAndPassword(email, password).then
    ((result) => {
      this.SetUserVerificationMail();
      this.SetUserData(result.user)
    })
    .catch((error)=> {
      
    })
  }

  SetUserVerificationMail() {
    throw new Error('Method not implemented.');
  }
  SetUserData(user: import("firebase/compat").default.User | null) {
    throw new Error('Method not implemented.');
  }

  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.clear(),
      this.router.navigate(['auth/login']);
    });
  } 
}


