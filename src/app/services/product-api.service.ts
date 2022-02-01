import { Injectable } from '@angular/core';
import {Product} from '../models/product'
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import ProductRequest from '../models/product-request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
   return  this.http.get<ProductRequest[]>('http://localhost:3000/products').pipe(map((productRequests)=>{
      let products = []
      for(let product of productRequests){
        products.push(new Product(product))
      }
      return products
    }));
  }
}
