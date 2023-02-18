import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IUsers } from '../../interfaces/users.interface';

@Injectable({
  providedIn: 'root'
})
export class ObtenerDepositService {

  constructor(private readonly httpClient: HttpClient) { }  

  getAll():Observable<IUsers[]>{
    return this.httpClient.get<IUsers[]>('http://localhost:3000/deposit/')
  }

 
}
