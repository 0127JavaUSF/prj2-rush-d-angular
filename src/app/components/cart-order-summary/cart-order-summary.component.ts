import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-order-summary',
  templateUrl: './cart-order-summary.component.html',
  styleUrls: ['./cart-order-summary.component.css']
})
export class CartOrderSummaryComponent implements OnInit {

  cartTotal:number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

}
