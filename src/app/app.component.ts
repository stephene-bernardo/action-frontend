import { Component } from '@angular/core';
import {Observable, pipe} from 'rxjs';
import { Store, select} from '@ngrx/store';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'treat-anyone-ecommerce';
  products$: Observable<number>
  
  constructor(private store: Store<{products: any}>) {
    this.products$ = store.pipe(select('products'),
      scan((acc, products) => {
        let quantity = 0;
        for(let item of products){
          quantity = quantity + item.quantity;
        }
        return quantity
        }, 0)
    )
  }
}
