import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {Observable} from 'rxjs';
import { scan } from 'rxjs/operators';
import {updateProduct} from '../../actions/products.action'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products$: Observable<any>
  productCount$: Observable<number>
  totalPrice$: Observable<number>
  selectedItems:Array<any> = []
  products: Array<any> = []

  constructor(private store: Store<{products: any}>) { 
    this.products$ = store.select('products');
    // this.products$.subscribe((values)=>{
    //   for(let item of values){
    //     this.products.push({...item, isChecked: false})

    //     this.products = this.products.sort((a,b) => a-b)
    //   }
    // })
    this.productCount$ = store.pipe(
      select('products'),
      scan((acc, products) => {
        let quantity = 0;
        for(let item of products){
          if(item.isPlaceOrder){
            quantity = quantity + item.quantity;
          }

        }
        return quantity}, 0)
      )

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

  handleCheck(value:any){
    this.store.dispatch(updateProduct(value))    
  }

  handleQuantityChange(value: any){
    this.store.dispatch(updateProduct(value))
  }

}
