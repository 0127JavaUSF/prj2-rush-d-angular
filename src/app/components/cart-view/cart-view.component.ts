import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { OrderItem } from 'src/app/classes/orderItem';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {

  cart: OrderItem[] = this.cartService.cart;
  subtotal:number;
  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
    this.changeSubTotal();

  }

  addQty(orderItem: OrderItem){
 
    this.cartService.quantModifyCartView(orderItem, 1);
    this.changeSubTotal();

  }

  subQty(orderItem: OrderItem){
 
    this.cartService.quantModifyCartView(orderItem, -1);
    this.changeSubTotal();

  }

  removeItem(orderItem: OrderItem){
    this.cartService.removeItemInCart(orderItem);
    this.router.navigate(['cart']);
  }

  private changeSubTotal(){
    this.subtotal = this.cartService.getSubTotal();
  }
  



  viewProducts(){
    this.router.navigate(['products']);
  }
}
