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
  arrayTransfer: object[];
  accountId: string;


  constructor(private readonly transferHistoryService: HistoryService){
     this.arrayTransfer = [];
     this.historyTransfer = [];
     this.accountId = "";
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
