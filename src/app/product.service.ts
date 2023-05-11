import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>('https://shoppinginfo-4c4b6-default-rtdb.firebaseio.com/' + 'products.json')
    .pipe(map(responseData => {
      const productArray: Product[] = [];
      for(const key in responseData) {
        productArray.push(responseData[key]);
      }
      return productArray;
      })
    );
  }
}
