import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { Store, select } from '@ngrx/store';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  products$: Observable<any>
  totalPrice$: Observable<any>

  constructor(private store: Store<{products: any}>) {
    this.products$ = store.select('products');

    this.totalPrice$ = store.pipe(
      select('products'),
      scan((acc, products) => {
        let quantity = 0;
        for(let item of products){
          if(item.isPlaceOrder){
            quantity = quantity + (item.quantity * item.price);
          }
        }
        return quantity}, 0)
      )
  }

  ngOnInit(): void {
  }

}
