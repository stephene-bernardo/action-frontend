import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import { Store } from '@ngrx/store';
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'treat-anyone-ecommerce';
  products$: Observable<any>

  
  constructor(private store: Store<{products: any}>) {
    this.products$ = store.select('products');
  }

  getCartCount(): Observable<any> {

    this.products$.pipe(count(i => {
      // console.log(i.length)
      return i.length;
    })).subscribe(c => {
      console.log("hi",c)
      return c
    })
    return this.products$.pipe(count(i => {
      console.log(i.length)
      return i.length;
    }))
  }
}
