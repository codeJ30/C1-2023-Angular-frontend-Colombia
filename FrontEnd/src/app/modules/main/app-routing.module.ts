import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from '../dashboard/dashboard/dashboard.component';
import { DepositComponent } from './pages/deposit/deposit.component';
import { TransferComponent } from './pages/transfer/transfer.component';
import { AccountComponent } from './pages/account/account.component';
import { ForgotPassComponent } from './pages/forgot-pass/forgot-pass.component';
import { ObtenerDepositComponent } from './pages/obtener-deposit/obtener-deposit.component';
import { LoginComponent } from '../auth/pages/login/login.component';
import { UserComponent } from './pages/user/user.component';
import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  AngularFireAuthGuard
} from '@angular/fire/compat/auth-guard'



const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToDashboard = () => redirectLoggedInTo(['dashboard'])
const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AngularFireAuthGuard],
    data:{authGuardPipe: redirectLoggedInToDashboard}
  },

  {
    path:'dashboard',
    component: DashboardComponent,
    //canActivate: [AngularFireAuthGuard],
    //data:{authGuardPipe:redirectUnauthorizedToLogin}
  },

  {
    path: '',
    component: LoginComponent,
    canActivate: [AngularFireAuthGuard],
    data:{authGuardPipe: redirectUnauthorizedToLogin}
  },

  {
  path: 'account',
  component: AccountComponent,
  canActivate: [AngularFireAuthGuard],
  data: {authGuardPipe: redirectUnauthorizedToLogin}
  },

  {path: 'register',
    component: RegisterComponent,
  },
  {
   path: 'user',
   component: UserComponent,
   canActivate: [AngularFireAuthGuard],
   data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: 'deposit',
    component: ObtenerDepositComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: 'transfer',
    component: TransferComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: 'deposit/newDeposit',
    component: DepositComponent ,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  },

  {
    path: 'forgot',
    component: ForgotPassComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
