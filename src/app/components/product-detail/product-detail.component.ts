import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/classes/product/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  id: number;

  constructor(private router: Router, private route: ActivatedRoute, private productService: ProductService) { }

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
  
  ngOnInit() {
    this.product = new Product();

    this.id = this.route.snapshot.params['id'];

    this.productService.getProduct(this.id)
      .subscribe( data => {
        console.log(data)
        this.product = data;
      }, error => console.log(error));
  }

  viewProducts(){
    this.router.navigate(['products']);
  }

}
