import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserComponent } from './pages/user/user.component';
import { DepositComponent } from './pages/deposit/deposit.component';
import { TransferComponent } from './pages/transfer/transfer.component';
import { AccountComponent } from './pages/account/account.component';
import { ForgotPassComponent } from './pages/forgot-pass/forgot-pass.component';
import { ObtenerDepositComponent } from './pages/obtener-deposit/obtener-deposit.component';

import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  AngularFireAuthGuard
} from '@angular/fire/compat/auth-guard'

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToUser = () => redirectLoggedInTo([''])
const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    canActivate: [AngularFireAuthGuard],
    data:{authGuardPipe: redirectLoggedInToUser}
  },

  {
  path: 'account',
  component: AccountComponent,
  canActivate: [AngularFireAuthGuard],
  data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {path: 'register',
    component: RegisterComponent
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
