import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DepositService } from '../../services/deposit/deposit.service';

@Component({
  selector: 'sofka-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent {

  constructor( private readonly depositService : DepositService){

  }

  form = new FormGroup({
    account: new FormControl('' ,Validators.required),
    amount: new FormControl('',Validators.required),
  });
  

  async onSubmit(): Promise<void> {
    let input = {
      
      "account": this.form.value.account,
      "amount": this.form.value.amount,
     
    }
    
   let data =  await this.depositService.getAllDeposit(input)
    console.log(data);  
  }

}
