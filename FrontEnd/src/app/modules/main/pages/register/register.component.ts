import { Component } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from '../../../../../environments/environment.prod';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import Swal from 'sweetalert2';

@Component({
  selector: 'sofka-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  routeUser: string[];
  routeForgot: string[];

  frmFormularyRegister: FormGroup;

  constructor(
    private readonly usersService: UsersService,
    private afAuth: AngularFireAuth,
    private _location: Location,
    private router: Router
  ) {
    this.routeUser = ['user'];
    this.routeForgot = ['forgot'];

    this.frmFormularyRegister = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      document: new FormControl('', [Validators.required]),
      documentType: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(environment.regexEmail),
      ]),
      phone: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(environment.regexPassword),
      ]),
    });
  }

  register(): void {
  
    const email = this.frmFormularyRegister.value.email;
    const pass = this.frmFormularyRegister.value.password;

    this.afAuth
      .createUserWithEmailAndPassword(email, pass)
      .then(user => {
        ('user logged in successfully');
        this.router.navigate(['/dashboard']);

        this.usersService
          .createUser(this.frmFormularyRegister.getRawValue())
          .subscribe({
            next: data =>   {
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Register Successfull',
                showConfirmButton: false,
                timer: 1500,
              }),
              this._location.back();
              console.log(data), this.router.navigate(['/login'])
            },

              //this._location.back();
              //console.log(data), this.router.navigate(['/login']);
            //},
            error: err =>    Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'Incorrect Data ',
              showConfirmButton: false,
              timer: 1500,
            }),
            complete: () => {
         
              this.router.navigate([]);
            },
          });
      })
      .catch(error => {
        console.log(error);
        this.loginError(error.code), 'Error';
      });
  }

  loginError(code: string) {
    switch (code) {
      case 'auth/email-already-in-use':
        return 'User exist';
      case 'auth/weak-password':
        return 'Weak Password';
      case 'auth/invalid-email':
        return 'Invalid Email';
      case 'auth/invalid-password':
        return 'Invalid Password';
      default:
        return 'Unknown Error';
    }
  }
}
