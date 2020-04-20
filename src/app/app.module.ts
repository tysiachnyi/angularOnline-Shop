import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductPageComponent } from './main-page/product-page/product-page.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginPageComponent } from './login-page/login-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthGuard} from './shared/services/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MainPageComponent,
    ProductPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
