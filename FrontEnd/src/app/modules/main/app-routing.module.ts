import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './pages/user/user.component';
import { AppComponent } from './pages/app/app.component';

const routes: Routes = [
  {path: '', redirectTo: 'auth/login', pathMatch: 'full'},

  {
    path: 'dashboard',
    loadChildren: () =>
      import('../dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
