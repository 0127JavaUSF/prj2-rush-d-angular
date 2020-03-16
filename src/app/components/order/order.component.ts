import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { OrderService } from "src/app/services/order/order.service";
import { Order } from "../../classes/order/order";
import { Observable } from "rxjs";
import { CartService } from 'src/app/services/cart.service';
import { SessionService } from 'src/app/service/session.service';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.css"]
})

export class OrderComponent implements OnInit {
  orders: Observable<Order[]>;

  constructor(private router: Router, private orderService: OrderService, 
    private cart: CartService, private session: SessionService, private login: LoginServiceService ) {}

  ngOnInit(): void {
    console.log(this.cart.custId);
    this.reloadData();

    this.login.performSessionDetect()
  .subscribe(genericResponse => {
    console.log(genericResponse);
    console.log(typeof(genericResponse))
    if (genericResponse.response == 'User has active session') {
      console.log('Authorized cookie found');
      this.session.setActive(true);
    }
  }, error => console.log(error));
  }

  reloadData() {
    this.orders = this.orderService.getCustOrders(this.cart.custId);
  }

  viewOrderSum(id: number) {
    this.router.navigate(["order-summary", id]);
  }

  
}
