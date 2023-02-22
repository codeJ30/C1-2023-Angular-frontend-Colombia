import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISignIn } from 'src/app/modules/auth/interfaces/signIn.interface';
import { IUserAccountInterface } from 'src/app/modules/auth/interfaces/userAccount.interface';
import { INewUser } from '../../interfaces/new-user.interface';
import { IUsers } from '../../interfaces/users.interface';
import { UserModel } from '../../models/new-user.model';



@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private readonly httpClient: HttpClient) {}

    createUser(user: UserModel):Observable<INewUser> {
      return this.httpClient.post<INewUser>('http://localhost:3000/security/singUp', user);

    }

    getAll():Observable<IUsers[]>{
      return this.httpClient.get<IUsers[]>('http://localhost:3000/user')
    }

    getAccountUser(userAccount: string){
      return this.httpClient.get<IUserAccountInterface[]>('http://localhost:3000/account/getAccount')
    }

    signIn(email: string , password:string):Observable<ISignIn>{
      const body= {
        email: email,
        password:password}
      return this.httpClient.post<ISignIn>('http://localhost:3000/security/signIn',body)   
    } 

  }


