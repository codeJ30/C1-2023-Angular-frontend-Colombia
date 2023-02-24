import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ITranfersModel } from '../../../main/models/transfer.model';
import { HttpClient } from '@angular/common/http';
import { TransferService } from '../../../main/services/transfer/transfer.service';

@Component({
  selector: 'sofka-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent {


  constructor( private readonly serviceTransfer : TransferService){

  }

  form = new FormGroup({
    income: new FormControl('' ,Validators.required),
    outcome: new FormControl('',Validators.required),
    amount: new FormControl('',Validators.required),
    reason: new FormControl('',Validators.required),

  });
  

  async onSubmit(): Promise<void> {
    let input = {
      "outcome": this.form.value.outcome,
      "income": this.form.value.income,
      "amount": this.form.value.amount,
      "reason": this.form.value.reason
    }
    
   let data =  await this.serviceTransfer.getAllTransfer(input)
    console.log(input);  
  }

}
