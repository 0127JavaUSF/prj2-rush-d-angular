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

  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
  }

  addQty(orderItem: OrderItem){
 
    this.cartService.quantModifyCartView(orderItem, 1);

  }

  subQty(orderItem: OrderItem){
 
    this.cartService.quantModifyCartView(orderItem, -1);
  }

  viewProducts(){
    this.router.navigate(['products']);
  }
}
