import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SummaryComponent } from './components/summary/summary.component';
import { SummarylistComponent } from './components/summarylist/summarylist.component';
import { CartViewComponent } from './components/cart-view/cart-view.component';

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
import { CreditsComponent } from './components/credits/credits/credits.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    SummarylistComponent,
    CartViewComponent,
    HeaderComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    CateringComponent,
    ProductDetailComponent,
    ProductsViewComponent,
    HistoryViewComponent,
    OrderComponent,
    FooterComponent,
    CreditsComponent

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
