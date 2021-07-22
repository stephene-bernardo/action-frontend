import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Product } from 'src/app/models/product';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {By} from '@angular/platform-browser'
import { ProductCardComponent } from './product-card.component';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCardComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    spyOn(component.onCartClick, 'emit');

  });

  it('should create', () => {
    component.product = new Product(1, 'DummyName', 'dummyDescription', 1, 'dummy.png')
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('when add to cart should trigger event', ()=>{
    component.product = new Product(1, 'DummyName', 'dummyDescription', 1, 'dummy.png')
    fixture.detectChanges();
    const {debugElement} = fixture;

    const addCart = debugElement.query(By.css('.button-add-cart'))
    addCart.triggerEventHandler('click', "")

    expect(component.onCartClick.emit).toHaveBeenCalled()
  })

  it('when title exceeds to its maximum display lenght should shorten it', ()=>{
    component.product = new Product(1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt, felis id volutpat luctus, massa ante dignissim sapien, a aliquet est lacus sed turpis. Aliquam eleifend semper sem, et interdum velit imperdiet et. Etiam sollicitudin mollis accumsan. Aenean sollicitudin id augue facilisis lobortis. Curabitur non lacus sed tortor tempor vestibulum. Quisque porttitor arcu augue, ut.', 'dummyDescription', 1, 'dummy.png')
    fixture.detectChanges();
    const {debugElement} = fixture;

    const title = debugElement.query(By.css('.card-subtitle .title'))
    expect(title.nativeElement.textContent).toBe('Lorem ipsum dolor sit amet, consectetur adipiscing...')
  })

  it('when description exceeds to its maximum display lenght should shorten it', ()=>{
    component.product = new Product(1, 'bag',
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec dictum dolor. Fusce gravida sapien leo, id imperdiet dolor placerat sed. Vivamus vel rhoncus eros. Vivamus at lectus sit amet libero mollis elementum. Integer vehicula quam lacus, non sagittis arcu consequat in. Sed quis varius leo. Donec vulputate ac magna vel feugiat. In tincidunt augue at nisi maximus convallis. Suspendisse potenti. Mauris dignissim convallis augue, non imperdiet diam hendrerit eget. Morbi at mattis sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse.', 
                                    1, 'dummy.png')
    fixture.detectChanges();
    const {debugElement} = fixture;

    const title = debugElement.query(By.css('mat-card-content p'))
    expect(title.nativeElement.textContent).toBe('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec dictum dolor. Fu...')
  })
});
