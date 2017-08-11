import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { AssetListComponent }   from './assets/asset-list/asset-list.component';
import { AssetDetailComponent}  from "./assets/asset-detail/asset-detail.component"
import { LoginComponent }       from './login/login.component';
import { RegisterComponent }    from './register/register.component';
import { AuthGuard }            from './_guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login',            component: LoginComponent },
  { path: 'logout',           component: LoginComponent },
  { path: 'register',         component: RegisterComponent },
  { path: 'dashboard',        component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'asset-list',       component: AssetListComponent, canActivate: [AuthGuard] },
  { path: 'asset-detail/:id', component: AssetDetailComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
