import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { UserService } from '../user.service';
import { Product } from '../product';
import { User } from '../user';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartList: Product[] = [];
  currentUser: User = {user_id: -1, user: '', password: ''};
  price: number = 0;

  constructor(private orderService: OrderService, private userService: UserService) {}

  ngOnInit() {
    this.fetchData();
    this.currentUser = this.userService.getCurrentUser();
  }

  fetchData() {
    this.cartList = this.orderService.getCart();
  }

  remove(id: number) {
    this.orderService.removeFromCart(id);
  }

  submit() {
    this.orderService.addOrder({order_id: this.orderService.getNextId(), products: this.cartList, 
      user_id: this.currentUser.user_id, price: this.price, date: Date.now().toLocaleString()});
  }
}
