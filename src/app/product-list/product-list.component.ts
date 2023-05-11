import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.productService.getProducts().subscribe((data) => {
      this.productList = data;
      console.log(data);
      console.log(this.productList[0]);
      console.log(this.productList[0].rating.count)
    });
  }
}
