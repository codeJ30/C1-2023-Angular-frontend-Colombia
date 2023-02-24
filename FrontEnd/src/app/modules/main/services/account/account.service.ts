import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IAccountInterface } from '../../interfaces/account.interface';

@Injectable({
  providedIn: 'root'
})

export class AccountService {

  constructor(private readonly httpClient: HttpClient) { }

  getAll(id: string):Observable<IAccountInterface[]>{
    return this.httpClient.get<IAccountInterface[]>('http://localhost:3000/account/getAccount/' + id)
  }
// {
  
//     "customerId": "7ae1261f-3d15-45d8-9271-f89e17a06e8f",
//     "accountType": "18a639a4-38fd-4feb-b5f4-cb000a158d77",
//     "balance": 100
// }

  createAccount(customerId: string , accountId: string ):Observable<IAccountInterface>{
    const body = {
      customerId: customerId,
      accountType: accountId,
      balance: 0
    }
    return this.httpClient.post<IAccountInterface>('http://localhost:3000/account/new' , body)
 }
}
