import { Component } from '@angular/core';
import { IDeposit } from '../../interfaces/deposit.interface';
import { AuthService } from '../../services/auth/auth.service';
import { ObtenerDepositService } from '../../services/getDeposit/obtener-deposit.service';

@Component({
  selector: 'sofka-obtener-deposit',
  templateUrl: './obtener-deposit.component.html',
  styleUrls: ['./obtener-deposit.component.scss']
})
export class ObtenerDepositComponent {
  users: IDeposit[];

  constructor(private readonly obtenerDepositService: ObtenerDepositService,
    private readonly authService : AuthService) {
    this.users = new Array<IDeposit>();
  }

  logOut():void {
    this.authService.SignOut();  
  }


  ngOnInit(): void {
   this.obtenerDepositService.getAll().subscribe({
    next: (data: any[]) =>{
      console.log(data)
      this.users=data.map((value) => {
        //value.password = value.password.split("").map(() => "*").join("");
        return value
      })
     
    },
    error: (error:any) => console.error(error),
    complete: () => console.log('complete')
  })
  }

}
