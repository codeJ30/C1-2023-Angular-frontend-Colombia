import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DepositService } from 'src/app/modules/main/services/deposit/deposit.service';
import { IDeposit } from '../../../main/interfaces/deposit.interface';

@Component({
  selector: 'sofka-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent {
  depositArray : IDeposit[];
  amount: string;
  account: string;

      
  constructor( private readonly depositService : DepositService){
    this.depositArray = new Array <IDeposit>();
    this.amount ='';
    this.account = '' 
  }

   onSubmit(){
    let input = {
      
      "account": this.account,
      "amount": this.amount,
    }
    
   let data = this.depositService.getAllDeposit(input)
    console.log(data);  
  }

}
