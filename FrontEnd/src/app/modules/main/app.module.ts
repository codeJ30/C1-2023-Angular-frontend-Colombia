import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './pages/app/app.component';
import { IndexComponent } from './pages/index/index.component';
import { RegisterComponent } from './pages/register/register.component';
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


@NgModule({
  declarations: [
    AppComponent, 
    IndexComponent, 
    RegisterComponent, 
    UserComponent, 
    DepositComponent, 
    AccountComponent, 
    TransferComponent, 
    ForgotPassComponent, 
    IdPipePipe,
     ],

  imports: [
    BrowserModule, 
    AppRoutingModule, 
    SharedModule, 
    FormsModule , 
    HttpClientModule,
    ReactiveFormsModule,
    
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,],

  providers: [],
  
  bootstrap: [AppComponent],
})
export class AppModule {

  RegisterComponent: any
}
