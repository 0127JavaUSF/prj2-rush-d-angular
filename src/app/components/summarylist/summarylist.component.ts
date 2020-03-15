import { Component, OnInit } from '@angular/core';
import { OrderItem } from '../../classes/order/orderItem';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order/order.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-summarylist',
  templateUrl: './summarylist.component.html',
  styleUrls: ['./summarylist.component.css']
})
export class SummarylistComponent implements OnInit {

  orderItems : Observable<OrderItem[]>;
  id: number; 

  constructor(private route: ActivatedRoute, private orderService: OrderService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.orderService.getOrderItems(this.id)
      .subscribe( data => {
        console.log(data)
        this.orderItems = data;
      }, error => console.log(error));
  }


}
