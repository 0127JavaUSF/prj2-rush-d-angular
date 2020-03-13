import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { SummaryComponent } from './components/summary/summary.component';
import { SummarylistComponent } from './components/summarylist/summarylist.component';
import { CartViewComponent } from './components/cart-view/cart-view.component';
import { CartOrderSummaryComponent } from './components/cart-order-summary/cart-order-summary.component';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { HeaderComponent } from './components/header/header.component';

import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './components/sign-up/sign-up.component';

import { HomeComponent } from './components/home/home.component';
import { CateringComponent } from './components/catering/catering.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsViewComponent } from './components/products-view/products-view.component';
import { HistoryViewComponent } from './components/history-view/history-view.component';
import { OrderComponent } from './components/order/order.component';
import { FooterComponent } from './components/footer/footer/footer.component';

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
    ProductDetailComponent,
    ProductsViewComponent,
    HistoryViewComponent,
    OrderComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
