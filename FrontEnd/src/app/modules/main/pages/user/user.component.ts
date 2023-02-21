import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { IUsers } from '../../interfaces/users.interface';
import { AuthService } from '../../../auth/services/auth/auth.service';

@Component({
  selector: 'sofka-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: IUsers[];

  constructor(private readonly usersService: UsersService,
    private readonly authService : AuthService) {
    this.users = new Array<IUsers>();
  }

  logOut():void {
    this.authService.SignOut();  
  }


  ngOnInit(): void {
   this.usersService.getAll().subscribe({
    next: data =>{
      this.users=data.map((value) => {
        value.password = value.password.split("").map(() => "*").join("");
        return value
      }),
      console.log(data)
    },
    error: (error) => console.error(error),
    complete: () => console.log('complete')
  })
  }
}
