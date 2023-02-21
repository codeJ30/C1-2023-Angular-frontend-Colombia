import { Component } from '@angular/core';
import { AuthService } from '../../auth/services/auth/auth.service';
import { UsersService } from '../../main/services/users/users.service';
import { Router } from '@angular/router';
import {IUserAccountInterface} from '../../auth/interfaces/userAccount.interface'
import Swal from 'sweetalert2';
  
@Component({
  selector: 'sofka-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  userAccounts: IUserAccountInterface[];

  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
    private readonly router: Router
    ){

      this.userAccounts = new Array <IUserAccountInterface>();
    }

    ngOnInit():void {
       const savedData = localStorage.getItem('id')as string;
       console.log(localStorage.getItem('TOKEEENNNN'))

       this.userService.getAccountUser(savedData).subscribe({
        next: data => {
          console.log(data);
          this.userAccounts = data;
        },
        error: err => console.log(err),
        complete: () => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Login Sussesfull',
            showConfirmButton: false,
            timer: 1500,
          });
          this.router.navigate(['/dashboard']);
        }
       });
    }

    redirect(){
      this.router.navigate(['user']);
    }

  logout(): void{
     this.authService.SignOut();
  }
}
