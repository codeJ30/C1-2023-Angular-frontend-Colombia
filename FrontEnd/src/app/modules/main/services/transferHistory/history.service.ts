import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITransfer } from '../../interfaces/transfer.interface';
import { IDepositInterface } from '../../interfaces/deposit-interface';

 

@Injectable({
  providedIn: 'root'
})
export class HistoryService{

  constructor(private readonly httpClient: HttpClient) {}
  
  getAllDeposit(id: string): Observable<IDepositInterface[]>{
    const body = {
      dimension: 0,
      range : 10
  };
    return this.httpClient.post<IDepositInterface[]>(
      'http://localhost:3000/deposit/getHistory/' + id , body);
  }

  getAllTransfer(id: string): Observable<ITransfer[]>{
  const body = {
    actualPage:1,
    range : 10
};
  return this.httpClient.post<ITransfer[]>(
  'http://localhost:3000/transfer/getAllHistory/' + id, body);
}

}
