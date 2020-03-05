import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products/products.component';

import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './components/sign-up/sign-up.component';

import { HomeComponent } from './components/home/home/home.component';
import { CateringComponent } from './components/catering/catering/catering.component';
import { ProductDetailComponent } from './components/product-detail/product-detail/product-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    LoginComponent,
    SignUpComponent

    HomeComponent,
    CateringComponent,
    ProductDetailComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
