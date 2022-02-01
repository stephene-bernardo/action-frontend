import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product'
import { Store } from '@ngrx/store';
import {addProduct } from '../../actions/products.action'
import CartProduct from '../../models/cart-product';
import { ProductApiService } from 'src/app/services/product-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  products: Observable<Product[]>;

  constructor(private store:Store<{products: Array<any>}>, private productApi: ProductApiService) { 
    this.products = productApi.getProducts();
  }

  handleCartClick(selectedProduct: any){
    // let cartProduct = new CartProduct(selectedProduct, 1, false)
    // this.store.dispatch(addProduct(cartProduct))
  }
}
