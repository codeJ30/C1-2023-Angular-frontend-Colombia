import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { IndexComponent } from './pages/index/index.component';

//const redirectUnauthorizedToLogin = () => redirectUnauthorizedToLogin(['/login']);
//const redirectLoggedInToDashboard = () => redirectLoggedInTo(['/login'])
const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: 'login',component: LoginComponent,
      },
      { path: 'register', component: RegisterComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
