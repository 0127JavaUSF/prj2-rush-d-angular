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
    
    if(orderItem.qty >= 5){
      
    }
    else{
      this.cartService.quantModifyCartView(orderItem, 1);
      this.changeSubTotal();
    }




  }

  subQty(orderItem: OrderItem){


    if(orderItem.qty <= 0){
    }
    else{
      this.cartService.quantModifyCartView(orderItem, -1);
      if (orderItem.qty == 0){
          this.removeItem(orderItem);
         
      }
      this.changeSubTotal();      
    }


  }

  removeItem(orderItem: OrderItem){
    this.cartService.removeItemInCart(orderItem);
    console.log("item removed");
    orderItem.qty = 0;
    this.changeSubTotal();     

  }

  private changeSubTotal(){
    this.subtotal = this.cartService.getSubTotal();
  }

  viewProducts(){
    this.router.navigate(['products']);
  }
}
