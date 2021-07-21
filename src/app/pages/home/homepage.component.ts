import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product'
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {addProduct, updateProduct} from '../../actions/products.action'
import CartProduct from '../../models/cart-product';
import { ProductApiService } from 'src/app/services/product-api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  selectedCartProducts:Array<any> = []
  products: Array<Product> = []

  constructor(private store:Store<{products: Array<any>}>, private productApi:ProductApiService) { 
    this.products = productApi.getProducts();
  }

  ngOnInit(): void {
  }

  handleCartClick(selectedProduct: any){
    let cartProduct = new CartProduct(selectedProduct, 1, false)
    this.selectedCartProducts.push(cartProduct)
    this.store.dispatch(addProduct(cartProduct))
  }
}
