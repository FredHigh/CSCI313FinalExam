import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { OrderService } from '../order.service';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  currentUser: User = {user_id: -1, user: '', password: ''};

  constructor(private productService: ProductService, private orderService: OrderService, private userService: UserService) {}

  ngOnInit() {
    this.fetchData();
    this.currentUser = this.userService.getCurrentUser();
  }

  fetchData() {
    this.productService.getProducts().subscribe((data) => {
      this.productList = data;
      console.log(data);
      console.log(this.productList[0]);
      console.log(this.productList[0].rating.count)
    });
  }

  cartAdd(product: Product) {
    this.orderService.addToCart(product);
  }
}
