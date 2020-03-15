import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/classes/product/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent implements OnInit {

  products$: Observable<Product[]>;
  categoryName: String;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
    console.log(this.products$)
  }

  reloadData() {
    this.products$ = this.productService.getProductList();
  }

  setCategory(categoryName: string){
    this.categoryName = new String();
    this.categoryName = categoryName;
    this.products$ = this.productService.getCat(this.categoryName);
  }

  showDetails(id: number){
    this.router.navigate(['product-details', id]);
  }



}
