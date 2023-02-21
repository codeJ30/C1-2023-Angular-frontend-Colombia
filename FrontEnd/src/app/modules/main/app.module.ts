import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './pages/app/app.component';
import { UserComponent } from './pages/user/user.component';
import { DepositComponent } from './pages/deposit/deposit.component';
import { AccountComponent } from './pages/account/account.component';
import { TransferComponent } from './pages/transfer/transfer.component';
import { ForgotPassComponent } from './pages/forgot-pass/forgot-pass.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { IdPipePipe } from './pipes/id-pipe.pipe';
import { ObtenerDepositComponent } from './pages/obtener-deposit/obtener-deposit.component';
import { LoginComponent } from '../auth/pages/login/login.component';
import { DashboardComponent } from '../dashboard/dashboard/dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RegisterComponent } from './pages/register/register.component';


@NgModule({

  imports: [
    BrowserModule, 
    AppRoutingModule, 
    SharedModule, 
    FormsModule , 
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    
  ],

  declarations: [
    AppComponent, 
    RegisterComponent, 
    UserComponent, 
    DepositComponent, 
    AccountComponent, 
    TransferComponent, 
    ForgotPassComponent, 
    IdPipePipe, 
    ObtenerDepositComponent, 
    LoginComponent, 
    DashboardComponent],

  providers: [],
  
  bootstrap: [AppComponent],
})
export class AppModule {

  RegisterComponent: any
}
