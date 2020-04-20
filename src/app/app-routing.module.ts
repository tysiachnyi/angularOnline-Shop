import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from "./shared/components/main-layout/main-layout.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {ProductPageComponent} from "./main-page/product-page/product-page.component";


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: MainPageComponent},
      {path: 'product/:id', component: ProductPageComponent}
      ]
    }
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
