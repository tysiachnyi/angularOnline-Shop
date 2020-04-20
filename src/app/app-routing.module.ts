import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {MainPageComponent} from './main-page/main-page.component';
import {ProductPageComponent} from './main-page/product-page/product-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {AuthGuard} from './shared/services/auth.guard';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: 'login', component: LoginPageComponent},
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: MainPageComponent, canActivate: [AuthGuard]},
      {path: 'product/:id', component: ProductPageComponent, canActivate: [AuthGuard]}
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
