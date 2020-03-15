import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderItem } from '../../classes/order/orderItem';
import { OrderService } from 'src/app/services/order/order.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {


  orderItems : Observable<OrderItem[]>;
  id: number;

  constructor(private router: Router, private route: ActivatedRoute, private orderService: OrderService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.orderService.getOrderItems(this.id)
      .subscribe( data => {
        console.log(data)
        this.orderItems = data;
      }, error => console.log(error));
  }

  viewOrders(){
    this.router.navigate(['history']);
  }
}
