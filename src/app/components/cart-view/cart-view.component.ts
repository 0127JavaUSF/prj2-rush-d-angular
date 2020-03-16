import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { OrderItem } from 'src/app/classes/orderItem';
import { SessionService } from 'src/app/service/session.service';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {

  cart: OrderItem[] = this.cartService.cart;
  subtotal:number;
  cartEmpty: boolean;

  constructor(private router: Router, private cartService: CartService, private session: SessionService, private login: LoginServiceService) { }

  ngOnInit(): void {
    this.changeSubTotal();
    
    //delete this, for testing only
    console.log("The active user id is: " + this.cartService.custId);

    this.login.performSessionDetect()
  .subscribe(genericResponse => {
    console.log(genericResponse);
    console.log(typeof(genericResponse))
    if (genericResponse.response == 'User has active session') {
      console.log('Authorized cookie found');
      this.session.setActive(true);
    }
  }, error => console.log(error));

  this.checkCart();

  }

  checkCart(){
    if(this.cart.length == 0){
      this.cartEmpty = true;
    }
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


    if(orderItem.qty < 2){
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

  submitOrder(){

    this.cartService.prepOrderJson();
    this.cartService.performOrderSubmission().subscribe(orderJson => {
      console.log(orderJson);
    }, error =>
    console.log(error));

    this.cartService.cart = new Array<OrderItem>();
    this.router.navigate(['products']);
    

  }
}
