import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {

  constructor() { }

  quantity: number = 0;

  addQty(prodQty: number){
    if (prodQty <= 4){
      prodQty += 1;
    }
  }

  subQty(prodQty: number){
    if (prodQty < 1){
      prodQty = 0;
    } else{
      prodQty -= 1;
    }
  }

  ngOnInit(): void {
  }

}
