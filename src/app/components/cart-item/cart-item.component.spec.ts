import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import CartProduct from 'src/app/models/cart-product';
import { Product } from 'src/app/models/product';
import { CartItemComponent } from './cart-item.component';
import {By} from '@angular/platform-browser'
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CartItemComponent', () => {
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;
  let product = new Product(1, "bag", "biiiiiig bag", 1000, "bigbag.png")

  beforeEach(async () => {
    const initialState:Array<any> = [];
    await TestBed.configureTestingModule({
      declarations: [ CartItemComponent ], 
      providers: [
        provideMockStore({ initialState }),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemComponent);
    component = fixture.componentInstance;
    spyOn(component.onQuantityChange, 'emit');
    spyOn(component.onCheck, 'emit');
    component.product = new CartProduct(product, 1, true);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event when removeItem is called', ()=>{
    const {debugElement} = fixture;

    const removeButton = debugElement.query(By.css('.remove-button'))
    removeButton.triggerEventHandler('click', "")

    expect(component.onQuantityChange.emit).toHaveBeenCalled()
  })

  it('should not emit event when quantity is equals to 0  for removeItem', ()=>{
    component.product = new CartProduct(product, 0, true);
    fixture.detectChanges();
    const {debugElement} = fixture;

    const removeButton = debugElement.query(By.css('.remove-button'))
    removeButton.triggerEventHandler('click', "")

    expect(component.onQuantityChange.emit).toHaveBeenCalledTimes(0)
  })

  it('should emit event when addbutton is called', ()=>{
    const {debugElement} = fixture;

    const removeButton = debugElement.query(By.css('.add-button'))
    removeButton.triggerEventHandler('click', "")

    expect(component.onQuantityChange.emit).toHaveBeenCalled()
  })


  it('should emit event when handleQuantityChange is called', ()=>{
    const {debugElement} = fixture;

    const removeButton = debugElement.query(By.css('.change-input'))
    removeButton.triggerEventHandler('change', {target: {value: 5}})

    expect(component.onQuantityChange.emit).toHaveBeenCalled()
  })

  it('should not emit event when quantity is 0 for handleQuantityChange', ()=>{
    const {debugElement} = fixture;

    const removeButton = debugElement.query(By.css('.change-input'))
    removeButton.triggerEventHandler('change', {target: {value: 0}})

    expect(component.onQuantityChange.emit).toHaveBeenCalledTimes(0)
  })

  it('should emit event when handleChecked is called', ()=>{
    const {debugElement} = fixture;

    const checkedButton = debugElement.query(By.css('.save-order'))
    checkedButton.triggerEventHandler('change', {$event: {checked: true}})
    expect(component.onCheck.emit).toHaveBeenCalled()
  })
});
