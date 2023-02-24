import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor(private httpClient: HttpClient) {}

  
  async getAllTransfer(body: any) : Promise<any> {
     this.httpClient.post('http://localhost:3000/transfer/createTransfer', body).subscribe((data : any) => {
      console.log('DATAAAAAA' , data)
     })
  }
}
