import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  orderList: Order[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.orderService.getOrders().subscribe((data) => {
      this.orderList = data;
    });
  }
}
