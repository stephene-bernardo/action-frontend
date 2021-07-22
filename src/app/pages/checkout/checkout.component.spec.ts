import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { CheckoutComponent } from './checkout.component';
import { RouterTestingModule } from '@angular/router/testing';
import CartProduct from 'src/app/models/cart-product';
import { Product } from '../../models/product';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import {By} from '@angular/platform-browser'

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;
  let mockRouter: any= {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async () => {
    let product = new Product(1, 'bag', 'dummybag', 100 ,'bag.png')
    let cartProduct = new CartProduct(product, 5, true)
    let cartProductNotIncluded = new CartProduct(product, 5, false)
    const products:Array<any> = [cartProduct, cartProductNotIncluded];
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ CheckoutComponent ],
      providers: [
        provideMockStore({initialState: { products: products }}),
        {provide:  Router, useValue: mockRouter}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate when order is placed', () => {
    const {debugElement} = fixture;

    const orderSummary = debugElement.query(By.css('app-order-summary'))
    orderSummary.triggerEventHandler('onCheckoutClick', "")
    
    expect(mockRouter.navigate).toHaveBeenCalledWith([''])
  })
});
