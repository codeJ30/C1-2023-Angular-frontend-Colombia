import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users/users.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment.prod';
import {Location} from '@angular/common';


@Component({
  selector: 'sofka-fotgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss']
})
export class ForgotPassComponent {

    
routeforgot: string [];
  frmFormularyForgotPass: FormGroup;
  constructor(private readonly usersService: UsersService,
    private _location: Location,
    private router: Router
  ){
    this.routeforgot = ['forgot'] ;
    this.frmFormularyForgotPass = new FormGroup ({
    email: new FormControl("", [Validators.required, Validators.pattern(environment.regexEmail)]),
    password: new FormControl("", [Validators.required,Validators.minLength(6),Validators.pattern(environment.regexPassword)]),
  })
}
sendData(): void{
  this.usersService.createUser(this.frmFormularyForgotPass.getRawValue()).subscribe({
    next: (data) => {
      this._location.back;
      console.log(data)
    },
    error: err => console.error(err),
    complete: () =>  this.router.navigate([''])
  })
}
}
