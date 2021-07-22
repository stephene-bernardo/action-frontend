import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { Store, select } from '@ngrx/store';
import { scan } from 'rxjs/operators';
import {resetProducts} from '../../actions/products.action'
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  products$: Observable<any>

  constructor(private store: Store<{products: any}>, private router: Router) {
    this.products$ = store.select('products');
  }

  handlePlaceOrder(){
    this.store.dispatch(resetProducts())
    this.router.navigate([''])
  }
}
