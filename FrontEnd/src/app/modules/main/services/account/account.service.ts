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
}
