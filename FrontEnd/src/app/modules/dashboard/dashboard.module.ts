import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepositComponent } from './components/deposit/deposit.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AccountComponent } from './components/account/account.component';
import { ObtenerDepositComponent } from './components/obtener-deposit/obtener-deposit.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { IdPipePipe } from '../main/pipes/id-pipe.pipe';
import { SaludoComponent } from './components/saludo/saludo.component';



@NgModule({
  declarations: [
    DepositComponent,
    AccountComponent,
    DashboardComponent,
    ObtenerDepositComponent,
    TransferComponent,
    IdPipePipe,
    SaludoComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class DashboardModule { }
