import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  @Input()products: any
  totalPrice: number = 0

  constructor() { 
  }

  ngOnInit(): void {
    this.totalPrice = this.products.reduce((acc:number, product:any)=>{
      if(product.isPlaceOrder){
        return  acc + (product.quantity * product.price);
      }
      return acc
    }, 0)
  }

  handlePlaceOrder(): void {

  }

}
