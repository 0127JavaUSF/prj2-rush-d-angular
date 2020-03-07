import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products/products.component';
import { SummaryComponent } from './components/summary/summary.component';
import { SummarylistComponent } from './components/summarylist/summarylist.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SummaryComponent,
    SummarylistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
