import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  @Input()products: any
  totalPrice: number = 0

  
  @Output() onCheckoutClick = new EventEmitter<any>();

  constructor() { 
  }

  ngOnInit(): void {
    this.totalPrice = this.products.reduce((acc:number, product:any) => 
      product.isPlaceOrder? acc + (product.quantity * product.price) : acc, 0)
  }

  handlePlaceOrder(): void {
    this.onCheckoutClick.emit()
  }
}
