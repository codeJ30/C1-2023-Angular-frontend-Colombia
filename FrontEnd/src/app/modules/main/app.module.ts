import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './pages/app/app.component';
import { UserComponent } from './pages/user/user.component';
import { AccountComponent } from '../dashboard/components/account/account.component';
import { TransferComponent } from '../dashboard/components/transfer/transfer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { IdPipePipe } from './pipes/id-pipe.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { DepositHistoryComponent } from '../dashboard/components/deposit-history/deposit-history.component';
import { TransferHistoryComponent } from '../dashboard/components/transfer-history/transfer-history.component';




@NgModule({

  imports: [
    BrowserModule, 
    AppRoutingModule, 
    SharedModule, 
    HttpClientModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CommonModule,
  ],

  declarations: [
    AppComponent, 
    UserComponent,
    DepositHistoryComponent,
    TransferHistoryComponent

    ],

  providers: [],
  
  bootstrap: [AppComponent],
})
export class AppModule {

  RegisterComponent: any
}
