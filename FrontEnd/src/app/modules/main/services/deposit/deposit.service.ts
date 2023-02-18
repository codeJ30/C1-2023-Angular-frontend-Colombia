import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepositService {

  constructor(private httpClient: HttpClient) {}

  async getAllDeposit(body: any) : Promise<any> {
    this.httpClient.post('http://localhost:3000/deposit/newDeposit', body).subscribe((data : any) => {
     console.log('DATAAAAAA' , data)
    })
 }
}
