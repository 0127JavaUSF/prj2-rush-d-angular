import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  viewProducts(){
    this.router.navigate(['products']);
  }
}
