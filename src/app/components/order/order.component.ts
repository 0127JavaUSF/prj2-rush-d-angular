import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { OrderService } from "src/app/services/order/order.service";
import { Order } from "../../classes/order/order";
import { Observable } from "rxjs";

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.css"]
})

export class OrderComponent implements OnInit {
  orders: Observable<Order[]>;

  constructor(private router: Router, private orderService: OrderService) {}
  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.orders = this.orderService.getCustOrders();
  }

  viewOrderSum(id: number) {
    this.router.navigate(["order-summary", id]);
  }
}
