import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import CartProduct from '../../cart-product';
import { Store } from '@ngrx/store';
import { Product } from '../../product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
  
})
export class CartItemComponent implements OnInit {

  @Input()product:any
  
  @Output() onCheck = new EventEmitter<any>();

  @Output() onQuantityChange = new EventEmitter<any>();
  
  constructor(private store:Store<{products: Array<any>}>) { 
  }

  ngOnInit(): void {
  }

  addItem(){
    let product = new Product(this.product.id, this.product.name, this.product.description, this.product.price, this.product.image);
    let cartProduct = new CartProduct(product, this.product.quantity + 1, this.product.isPlaceOrder)
    this.onQuantityChange.emit(cartProduct)
  }

  
  removeItem(){
    if(0 < this.product.quantity){
      let product = new Product(this.product.id, this.product.name, this.product.description, this.product.price, this.product.image);
      let cartProduct = new CartProduct(product, this.product.quantity - 1, this.product.isPlaceOrder)
      this.onQuantityChange.emit(cartProduct)
    }
  }
  handleQuantityChange(e:any){
    let newQuantity:number = parseInt(e.target.value); 
    if(0 < newQuantity){
      let product = new Product(this.product.id, this.product.name, this.product.description, this.product.price, this.product.image);
      let cartProduct = new CartProduct(product, newQuantity, this.product.isPlaceOrder)
      this.onQuantityChange.emit(cartProduct)
    }
  }

  handleChecked(value:any){
    let product = new Product(this.product.id, this.product.name, this.product.description, this.product.price, this.product.image);
    let cartProduct = new CartProduct(product, this.product.quantity, value)
    this.onCheck.emit(cartProduct)
  }
}
