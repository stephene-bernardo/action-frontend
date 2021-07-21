import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import CartProduct from 'src/app/models/cart-product';
import { Product } from 'src/app/models/product';
import { CartItemComponent } from './cart-item.component';

describe('CartItemComponent', () => {
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;

  beforeEach(async () => {
    const initialState:Array<any> = [];
    await TestBed.configureTestingModule({
      declarations: [ CartItemComponent ], 
      providers: [
        provideMockStore({ initialState }),
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemComponent);
    component = fixture.componentInstance;
    let product = new Product(1, "bag", "biiiiiig bag", 1000, "bigbag.png")
    component.product = new CartProduct(product, 1, true);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
