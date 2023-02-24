import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { IAccountInterface } from 'src/app/modules/main/interfaces/account.interface';
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service';
import { AccountService } from 'src/app/modules/main/services/account/account.service';
  
@Component({
  selector: 'sofka-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  userAccounts: IAccountInterface[];
  name: string;
  lastDeposit: number;
  lastTranfer: number;

  constructor(
    private readonly authService: AuthService,
    private readonly accountService: AccountService,
    private readonly router: Router
    ){

      this.userAccounts = new Array <IAccountInterface>();
      this.name = '';
      this.lastDeposit = 0;
      this.lastTranfer = 0;
    }

    ngOnInit():void {
       const savedData = localStorage.getItem('id')as string;
       
       this.accountService.getAll(savedData).subscribe({
        next: data => {
          console.log(data);
          this.userAccounts = data;
          this.name = data[0].customer.fullName
          this.lastDeposit = data[0].balance
        },
        error: err => console.log(err),
      
       });
    }
    
    verHistorial(id: string){
      localStorage.setItem('idCuenta', id);
      this.router.navigate(['dashboard/depositHistory']);
    }

    redirectTransfer(){
      return this.router.navigate(['dashboard/transfer']);
    }

    redirectDeposit(){
      return this.router.navigate(['dashboard/deposit/newDeposit']);
    }

    redirectDepositHistory(){
      return this.router.navigate(['dashboard/depositHistory'])
    }

  logout(): void{

     this.authService.SignOut();
  }

  createAccount(id: string){
    this.accountService.createAccount(localStorage.getItem('id') as string, id ).subscribe({
      next: (data) => {
        
      },
      error: err => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Error',
          showConfirmButton: false,
          timer: 1500,
        });
      },
      complete: () => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Account Create',
          showConfirmButton: false,
          timer: 1500,
        });
       window.location.reload();
      }
    })
  }
}
