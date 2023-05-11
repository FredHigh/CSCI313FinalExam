import { Injectable } from '@angular/core';
import { Product } from './product';
import { Order } from './order';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  nextId: number = 0;
  cartArray: Product[] = [];
  totalPrice: number = 0;

  constructor(private http: HttpClient) { }

  getNextId() {
    return this.nextId++;
  }

  addToCart(product: Product) {
    this.cartArray.push(product);
  }

  priceTotal() {
    this.cartArray.forEach((product) => {

    });
  }

  getCart() {
    return this.cartArray;
  }

  removeFromCart(id: number) {
    let index = this.cartArray.findIndex(c => c.product_id === id);
    this.cartArray.splice(index, 1);
  }

  addOrder(newOrder: Order) {
    return this.http.post('https://shoppinginfo-4c4b6-default-rtdb.firebaseio.com/' + 'order.json', newOrder);
  }
}
