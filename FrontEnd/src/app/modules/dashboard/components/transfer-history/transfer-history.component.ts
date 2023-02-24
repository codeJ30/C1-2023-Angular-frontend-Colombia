import { Component, OnInit } from '@angular/core';
import { ITransfer } from '../../../main/interfaces/transfer.interface';
import { HistoryService } from '../../../main/services/transferHistory/history.service';

@Component({
  selector: 'sofka-transfer-history',
  templateUrl: './transfer-history.component.html',
  styleUrls: ['./transfer-history.component.scss']
})
export class TransferHistoryComponent implements OnInit{

  historyTransfer: ITransfer[];
  accountId: string;


  constructor(private readonly transferHistoryService: HistoryService){
    
     this.historyTransfer = [];
     this.accountId = "";
  }

  ngOnInit(): void {
    this.accountId = localStorage.getItem('idCuenta') ?? '';
    this.transferHistoryService.getAllTransfer(this.accountId).subscribe({
       next: data => {
        this.historyTransfer = data;
        console.log(data)
       },
       error: err => {
        console.log(err)
       },
       complete: () => {

       }
    })
  }

}
