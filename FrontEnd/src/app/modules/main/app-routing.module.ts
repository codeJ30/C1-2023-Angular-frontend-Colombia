import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserComponent } from './pages/user/user.component';
import { DepositComponent } from './pages/deposit/deposit.component';
import { TransferComponent } from './pages/transfer/transfer.component';
import { AccountComponent } from './pages/account/account.component';
import { ForgotPassComponent } from './pages/forgot-pass/forgot-pass.component';

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
  component: AccountComponent
  },
  {path: 'register',
    component: RegisterComponent 
  },
  {
   path: 'user',
   component: UserComponent,
   //canActivate: [AngularFireAuthGuard],
   //data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: 'deposit',
    component: DepositComponent
  },
  {
    path: 'transfer',
    component: TransferComponent
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
