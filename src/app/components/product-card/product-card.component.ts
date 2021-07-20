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

  handleClickEvent(){
    this.onCartClick.emit(this.product)
  }
}
