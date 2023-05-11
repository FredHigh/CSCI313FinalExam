import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  cartArray: Product[] = [];

  constructor() { }

  addToCart(product: Product) {
    this.cartArray.push(product);
  }

  getCart() {
    return this.cartArray;
  }

  removeFromCart(id: number) {
    let index = this.cartArray.findIndex(c => c.product_id === id);
    this.cartArray.splice(index, 1);
  }
}
