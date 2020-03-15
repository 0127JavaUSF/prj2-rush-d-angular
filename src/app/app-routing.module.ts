import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CateringComponent } from './components/catering/catering.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartViewComponent } from './components/cart-view/cart-view.component';
import { SummaryComponent } from './components/summary/summary.component';
import { HistoryViewComponent } from './components/history-view/history-view.component';
import { ProductsViewComponent } from './components/products-view/products-view.component';
import { HomeComponent } from './components/home/home.component';
import { CreditsComponent } from './components/credits/credits/credits.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'catering', component: CateringComponent },
  { path: 'history', component:  HistoryViewComponent},
  { path: 'products', component:  ProductsViewComponent},
  { path: 'product-details/:id', component: ProductDetailComponent },
  { path: 'cart', component:  CartViewComponent},
  { path: 'order-summary/:id', component: SummaryComponent },
  { path: 'credits', component: CreditsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }