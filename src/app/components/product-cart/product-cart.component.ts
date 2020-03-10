import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {

  constructor() { }

  quantity: number = 0;

  addQty(){
    if (this.quantity <= 4){
      this.quantity += 1;
    }
  }

  subQty(){
    if (this.quantity < 1){
      this.quantity = 0;
    } else{
      this.quantity -= 1;
    }
  }

  ngOnInit(): void {
  }

}
