import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Product } from './models/product';
import CartProduct from './models/cart-product';


describe('AppComponent', () => {
  let store: MockStore;
  let product = new Product(1, 'bag', 'dummybag', 100 ,'bag.png')
  let cartProduct = new CartProduct(product, 5, true)

  beforeEach(async () => {
    const initialState:Array<any> = [cartProduct];
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        provideMockStore({initialState: {products: initialState }}),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    store = TestBed.inject(MockStore);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    expect(app).toBeTruthy();
  });

  it(`should have as title 'treat-anyone-ecommerce'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    expect(app.title).toEqual('treat-anyone-ecommerce');
  });
});
