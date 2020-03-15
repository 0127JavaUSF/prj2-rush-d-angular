 import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
// import { ProductService } from 'src/app/services/product/product.service';
// import { Product } from '../../classes/product/product';
// import { Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

//   products: Observable<Product[]>;

//   constructor( private productService: ProductService, private router: Router) { }

  ngOnInit() {
//     this.reloadData();
//     console.log(this.products)
  }
  
//   reloadData() {
//     this.products = this.productService.getProductList();
//   }

//   showDetails(id: number){
//     this.router.navigate(['product-details', id]);
//   }

}
