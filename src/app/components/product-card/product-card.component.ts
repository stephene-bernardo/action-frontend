import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: any;
  @Output() onCartClick = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  shortenDescription(): string {
    if(this.product.getDescription().length > 80){
      return this.product.getDescription().substring(0, 80).concat('...')
    }
    return this.product.getDescription()
  }

  shortenTitle(): string{
    if(this.product.getName().length > 50){
      return this.product.getName().substring(0, 50).concat('...')
    }
    return this.product.getName()
  }

  handleClickEvent(){
    this.onCartClick.emit(this.product)
  }
}
