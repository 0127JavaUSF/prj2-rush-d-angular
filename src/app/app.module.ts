import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products/products.component';
import { CartViewComponent } from './components/cart-view/cart-view.component';
import { CartOrderSummaryComponent } from './components/cart-order-summary/cart-order-summary.component';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartViewComponent,
    CartOrderSummaryComponent,
    ProductCartComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
