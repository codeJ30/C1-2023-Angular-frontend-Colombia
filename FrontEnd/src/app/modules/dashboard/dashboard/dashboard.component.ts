import { Component } from '@angular/core';
import { AuthService } from '../../auth/services/auth/auth.service';
import { UsersService } from '../../main/services/users/users.service';
import { Router } from '@angular/router';
import {IUserAccountInterface} from '../../auth/interfaces/userAccount.interface'
import Swal from 'sweetalert2';
import { IAccountInterface } from '../../main/interfaces/account.interface';
import { AccountService } from '../../main/services/account/account.service';
  
@Component({
  selector: 'sofka-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  userAccounts: IAccountInterface[];

  constructor(
    private readonly authService: AuthService,
    private readonly accountService: AccountService,
    private readonly router: Router
    ){

      this.userAccounts = new Array <IAccountInterface>();
    }

    ngOnInit():void {
       const savedData = localStorage.getItem('id')as string;
       console.log(localStorage.getItem('TOKEEENNNN'))

       this.accountService.getAll(savedData).subscribe({
        next: data => {
          console.log(data);
          this.userAccounts = data;
        },
        error: err => console.log(err),
      
       });
    }

    redirectTransfer(){
      return this.router.navigate(['transfer']);
    }

    redirectDeposit(){
      return this.router.navigate(['deposit/newDeposit']);
    }

  logout(): void{
     this.authService.SignOut();
  }
}
