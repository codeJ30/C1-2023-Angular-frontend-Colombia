import { Component } from '@angular/core';
import { AuthService } from '../../auth/services/auth/auth.service';

@Component({
  selector: 'sofka-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {


  constructor(private readonly authService: AuthService){}

  logout(): void{
     this.authService.SignOut();
  }
}
