import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../../../environments/environment.prod';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users/users.service';
import {Location} from '@angular/common';
import { Token } from '@angular/compiler';

@Component({
  selector: 'sofka-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  
routeRegister: string [];
routeUser: string[];

frmFormularyLogin: FormGroup;
frmFormularyRegister: FormGroup

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
    
    this.frmFormularyRegister = new FormGroup({
      userName : new FormControl("", [Validators.required ,Validators.minLength(6), Validators.maxLength(80)]),
      password: new FormControl("", [Validators.required , Validators.minLength(8), Validators.pattern(new RegExp (environment.regexPassword))]),
  })
  }

  auth(): void {
      this.authService.GoogleAuth();
  }

  sendDataFormulary(): void {
    console.log('endDataFormulary' , this.frmFormularyLogin)
    console.log(this.frmFormularyLogin.getRawValue())
  }
  goToRegister(){
    this.router.navigate(['register']);
  }
  onSubmit() {
     
    this.usersService.createUser(this.frmFormularyRegister.getRawValue()).subscribe({
      next: (data) => {
        console.log('TOKENNNNNNNNNN: ', data.access_token)
        localStorage.setItem('token',data.access_token );
      },
      error: err => console.error(err),
      complete: () => {
        this.router.navigate(['user']);
      }
    })
    console.log(this.frmFormularyLogin.value);  
  }
}
