import { Component } from "@angular/core";
import { UserModel } from "../../models/new-user.model";
import { UsersService } from "../../services/users/users.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from '../../../../../environments/environment.prod';
import {Location} from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'sofka-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  routeUser: string[];
  routeForgot: string[];
/*
  fullName: string;
  document: string;
  documentType: string;
  email: string;
  phone: string;
  password: string;
*/
  frmFormularyRegister: FormGroup;
  
  constructor(private readonly usersService: UsersService,
    private _location: Location,
    private router: Router

    ){
    this.routeUser = ['user'];
    this.routeForgot= ['forgot'];

    this.frmFormularyRegister = new FormGroup ({
      fullName: new FormControl("",[Validators.required, Validators.minLength(6), Validators.maxLength(80)]),
      document: new FormControl("", [Validators.required, Validators.minLength(5),Validators.maxLength(15)]),
      documentType: new FormControl("",[Validators.required]),
      email: new FormControl("", [Validators.required, Validators.pattern(environment.regexEmail)]),
      phone: new FormControl("", [Validators.required, Validators.pattern(environment.regexPhone)]),
      password: new FormControl("", [Validators.required,Validators.minLength(6),Validators.pattern(environment.regexPassword)]),

    })
  }
  sendData(): void{
    this.usersService.createUser(this.frmFormularyRegister.getRawValue()).subscribe({
      next: (data) => {
        this._location.back();
        console.log(data)
      },
      error: err => console.error(err),
      complete: () =>  this.router.navigate([''])
    })
  }

}

