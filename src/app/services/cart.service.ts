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
    console.log("Given product id of: " + product.productId);
    //updates quantity if product already exists in cart

    let productFoundInCart = 0;

    //check if in cart
    this.cart.forEach( (orderItem) => {
      if (orderItem.product.productId == product.productId) {
        productFoundInCart = 1;
        console.log('PRODUCT FOUND!');
      } else{
        console.log('product not yet found in cart');
      }
    });


    //add quantity or add new if not existing
    if (productFoundInCart == 1){
      //add quantity
      this.cart.forEach( (orderItem) => {//seemingly redundant code to handle empty cart situation
        if (orderItem.product.productId == product.productId) {//this will work since no 2 products have same id
          orderItem.qty += quantity;
        }
      });
    } else{
      const newOrderItem = new OrderItem();
      newOrderItem.product = product;
      newOrderItem.qty = quantity ;
      this.cart.push(newOrderItem);
      console.log("new item added");
    }

  }


  cartLog(){
    this.cart.forEach( (orderItem) => {
      console.log('The order item for product: ' + orderItem.product.productId + ' \n ' + orderItem.product.productDescription 
      + "\nqty: " + orderItem.qty);
     });
  }


}
