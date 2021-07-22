import { ComponentFixture, TestBed } from '@angular/core/testing';
import CartProduct from 'src/app/models/cart-product';
import { Product } from '../../models/product';
import { OrderSummaryComponent } from './order-summary.component';
import {By} from '@angular/platform-browser'
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('OrderSummaryComponent', () => {
  let component: OrderSummaryComponent;
  let fixture: ComponentFixture<OrderSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSummaryComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSummaryComponent);
    component = fixture.componentInstance;
    let product = new Product(1, 'bag', 'dummybag', 100 ,'bag.png')
    let cartProduct = new CartProduct(product, 5, true)
    let cartProductNotIncluded = new CartProduct(product, 5, false)
    component.products = [cartProduct, cartProductNotIncluded]
    spyOn(component.onCheckoutClick, 'emit');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should computer total price', () => {
    const {debugElement} = fixture;

    const total = debugElement.query(By.css('.result'))
    
    expect(total.nativeElement.textContent).toBe(" PHP500.00 ");
  });

  it('should trigger event when place order is click', () => {
      let product = new Product(1, 'bag', 'dummybag', 100 ,'bag.png')
      let cartProduct = new CartProduct(product, 5, true)
      component.products = [cartProduct]
      const {debugElement} = fixture;

      const placeOrder = debugElement.query(By.css('.button-place-order'))
      placeOrder.triggerEventHandler('click', "")
      expect(component.onCheckoutClick.emit).toHaveBeenCalled()
  })
});
