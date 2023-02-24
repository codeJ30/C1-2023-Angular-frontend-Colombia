import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { IDepositInterface } from '../../../main/interfaces/deposit-interface';
import { HistoryService } from '../../../main/services/transferHistory/history.service';

@Component({
  selector: 'sofka-deposit-history',
  templateUrl: './deposit-history.component.html',
  styleUrls: ['./deposit-history.component.scss']
})
export class DepositHistoryComponent implements OnInit{

  depositHistory: IDepositInterface[];
  
  idUser: string;

  constructor(private readonly historyService: HistoryService){
   
   this.depositHistory= [];
   this.idUser = ''; 
   }
  
  ngOnInit(): void {
   
    this.idUser = localStorage.getItem('idCuenta')?? '';
    this.historyService.getAllDeposit(this.idUser).subscribe({
        next: data => {
          console.log('DATAAA', data)
          this.depositHistory=data;
          console.log(this.depositHistory)
        },
        error: err => {
          console.log(err)
        },
        complete:() => {
          console.log('DATAAAAA!!!' ,this.depositHistory[0])
        }
    });
  }

}
