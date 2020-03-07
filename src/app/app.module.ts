import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products/products.component';
import { SummaryComponent } from './components/summary/summary.component';
import { SummarylistComponent } from './components/summarylist/summarylist.component';
import { CartViewComponent } from './components/cart-view/cart-view.component';
import { CartOrderSummaryComponent } from './components/cart-order-summary/cart-order-summary.component';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { HeaderComponent } from './components/header/header.component';

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
    SummaryComponent,
    SummarylistComponent,
    CartViewComponent,
    CartOrderSummaryComponent,
    ProductCartComponent,
    HeaderComponent,
    LoginComponent,
    SignUpComponent,
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
