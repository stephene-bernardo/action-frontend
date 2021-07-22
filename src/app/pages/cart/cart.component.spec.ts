import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import CartProduct from 'src/app/models/cart-product';
import { Product } from '../../models/product';
import { CartComponent } from './cart.component';
import {By} from '@angular/platform-browser'

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let product = new Product(1, 'bag', 'dummybag', 100 ,'bag.png')
  let cartProduct = new CartProduct(product, 5, true)
  let cartProductNotIncluded = new CartProduct(product, 5, false)
  const initialState:Array<any> = [cartProduct, cartProductNotIncluded];
  let store: MockStore;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      providers: [
        provideMockStore({initialState: {products: initialState }}),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle check event', ()=> {
    const storeSpy = spyOn(store, 'dispatch').and.callThrough();
    const {debugElement} = fixture;

    const orderSummary = debugElement.query(By.css('app-cart-item'))
    orderSummary.triggerEventHandler('onCheck', cartProduct)
    expect(storeSpy).toHaveBeenCalledTimes(1)
  })

  it('should handle check event', ()=> {
    const storeSpy = spyOn(store, 'dispatch').and.callThrough();
    const {debugElement} = fixture;

    const orderSummary = debugElement.query(By.css('app-cart-item'))
    orderSummary.triggerEventHandler('onQuantityChange', cartProduct)
    expect(storeSpy).toHaveBeenCalledTimes(1)
  })
});
