import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

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
