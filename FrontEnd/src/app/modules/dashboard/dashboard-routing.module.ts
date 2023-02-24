import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransferHistoryComponent } from './components/transfer-history/transfer-history.component';
import { AccountComponent } from './components/account/account.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { ObtenerDepositComponent } from './components/obtener-deposit/obtener-deposit.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { DepositHistoryComponent } from './components/deposit-history/deposit-history.component';
import {
  AngularFireAuthGuard,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth/login']);
const redirecLoggedInToDashboard= () => redirectLoggedInTo(['dashboard']);

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },

  {
    path: 'deposit',
    component: ObtenerDepositComponent,
   
  },
  {
    path:'depositHistory',
    component:DepositHistoryComponent,
    
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [redirecLoggedInToDashboard],
    data: AngularFireAuthGuard, 
    
  },

  {
    path: 'transfer',
    component: TransferComponent,
  },

  {
    path: 'transferHistory',
    component: TransferHistoryComponent,
  },

  {
    path: 'deposit/newDeposit',
    component: DepositComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}

