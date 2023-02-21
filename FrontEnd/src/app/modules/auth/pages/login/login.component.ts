import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../../../environments/environment.prod';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { UsersService } from '../../../main/services/users/users.service';
import {Location} from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'sofka-index',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  
routeRegister: string [];
routeUser: string[];

frmFormularyLogin: FormGroup;
frmFormularyForgotPass: FormGroup;

  constructor(private readonly authService: AuthService,
    private router: Router,private readonly usersService:UsersService,
    private _location: Location,
  
    ) {
    this.routeRegister = ['register']
    this.routeUser = ['user']
  
    this.frmFormularyLogin = new FormGroup({
        userName : new FormControl("", [Validators.required ,Validators.minLength(6), Validators.maxLength(80)]),
        password: new FormControl("", [Validators.required , Validators.minLength(8), Validators.pattern(new RegExp (environment.regexPassword))]),
    }),
    
  
  this.frmFormularyForgotPass = new FormGroup({
    userName : new FormControl("", [Validators.required ,Validators.minLength(6), Validators.maxLength(80)]),
    password: new FormControl("", [Validators.required , Validators.minLength(8), Validators.pattern(new RegExp (environment.regexPassword))]),
})}
    
  

  auth(): void {
      this.authService.GoogleAuth();
  }

  sendDataFormulary(): void {
    console.log('endDataFormulary' , this.frmFormularyLogin)
    console.log(this.frmFormularyLogin.getRawValue())
  }

  onSubmit() {
     
    this.usersService.signIn(this.frmFormularyLogin.get('userName')?.getRawValue(),this.frmFormularyLogin.get('password')?.getRawValue()).subscribe({
      next: (data) => {
        console.log (data.access_token)
        localStorage.setItem('token',data.access_token );
        this.router.navigate(['/dashboard']);
      },
      error: err => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Datos incorrectos ',
          showConfirmButton: false,
          timer: 1500,
        });
      },
      complete: () => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Inicio de ',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['/dashboard']);
      }
    }) 
  }
}
