import { Injectable } from '@angular/core';
import { Product } from '../classes/product/product';
import { OrderItem } from '../classes/orderItem';
import { Router } from '@angular/router';
import { OrderJson, OrderItemJson, OrderItemProductJson, CustomerJson } from '../classes/orderJson/orderJson';
import { stringify } from 'querystring';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient: HttpClient) { }

  // qty: number;

  cart: Array<OrderItem> = new Array<OrderItem>();
  subtotal: number;
  custId: number;

  orderJson: OrderJson = new OrderJson();

  baseurl = 'http://localhost:9009';
  orderApi = 'rush/orders';


  performOrderSubmission(): Observable<OrderJson>{
    return this.httpClient.post<OrderJson>(`${this.baseurl}/${this.orderApi}`, this.orderJson, {withCredentials: true});
  }

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
      + "\nqty: " + orderItem.qty + "\n The cart is detecting " + this.cart.length + "order items...");
     });
  }

  //modifies the quantity while in view cart, adds or subtracts 1
  quantModifyCartView(orderItem:OrderItem, addOrSub1: number){
      //find the order item in cart
      this.cart.forEach( (orderItemInCart) => {
        if (orderItemInCart.product.productId == orderItem.product.productId) {//this will work since no 2 products have same id
          orderItemInCart.qty += addOrSub1;
        }
      });
  }

  public getSubTotal(): number {
    let subtotal = 0;
    this.cart.forEach(orderItem => {
      subtotal += orderItem.product.productPrice * orderItem.qty; 
    });
    return subtotal;
  }

  removeItemInCart(orderItem: OrderItem) {

    this.cart = this.cart.filter(orderItemInCart => 
      orderItemInCart.product.productId !== orderItem.product.productId); 
      
  }


  prepOrderJson(){

    //initalize whats needed in the OrderJson
    
    this.orderJson.orderItems = new Array<OrderItemJson>();
    this.orderJson.customer = new CustomerJson();
    this.orderJson.customer.custId = this.custId;
    this.orderJson.orderTotal = this.getSubTotal() + this.getSubTotal() * .07;
    
    this.cart.forEach(orderItem => {
       const orderItemJson: OrderItemJson = new OrderItemJson();
       orderItemJson.product = new OrderItemProductJson();

       orderItemJson.quantity = orderItem.qty;
       orderItemJson.itemPrice = orderItem.product.productPrice * orderItem.qty;

       orderItemJson.product.productId = orderItem.product.productId;
       this.orderJson.orderItems.push(orderItemJson);
    });


    console.log(this.orderJson);
  }
}
