import { Injectable } from '@angular/core';
import { Product } from '../classes/product/product';
import { OrderItem } from '../classes/orderItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  qty: number;

  cart: Array<OrderItem> = new Array<OrderItem>();

  constructor() { }

  addOrderItem(product: Product, quantity: number){
    const orderItem = new OrderItem();
    orderItem.product = product;
    orderItem.qty = quantity ;
    this.cart.push(orderItem);
    console.log('The cart so far:' + this.cart);
  }
}
