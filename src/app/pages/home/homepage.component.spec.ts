// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { HomepageComponent } from './homepage.component';
// import {By} from '@angular/platform-browser'
// import { ProductApiService } from 'src/app/services/product-api.service';
// import {Product} from '../../models/product'
// import { Store } from '@ngrx/store';

// describe('HomepageComponent', () => {
//   let component: HomepageComponent;
//   let fixture: ComponentFixture<HomepageComponent>;
//   let product = new Product(1, 'bag', 'medium bag', 23, 'bag.png');
//   let storeMock:any;

//   beforeEach(async () => {
//     storeMock = {
//       dispatch: jasmine.createSpy('dispatch')
//     };
//     const initialState:Array<any> = [];
//     await TestBed.configureTestingModule({
//       declarations: [ HomepageComponent ],
//       providers: [
//         {
//           provide: ProductApiService,
//           useValue: jasmine.createSpyObj('ProductApiService', ['getProducts'])
//         },
//         { provide: Store, useValue: storeMock }
//       ]
//     })
//     .compileComponents();
//     let mockProductApiService = TestBed.get(ProductApiService);
//     mockProductApiService.getProducts.and.returnValue([product]);
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(HomepageComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should render product card', ()=>{
//     const {debugElement} = fixture;

//     const productCard = debugElement.query(By.css('app-product-card'))

//     expect(productCard).toBeTruthy();
//     let actualProduct = productCard.properties.product
//     expect(actualProduct.id).toBe(1)
//     expect(actualProduct.name).toBe('bag')
//     expect(actualProduct.description).toBe('medium bag')
//     expect(actualProduct.price).toBe(23)
//     expect(actualProduct.image).toBe('bag.png')
//   })

//   it('should update products when productCard is click', () => {
//     const {debugElement} = fixture;

//     const productCard = debugElement.query(By.css('app-product-card'))
//     productCard.triggerEventHandler('onCartClick', product)

//     expect(storeMock.dispatch).toHaveBeenCalledTimes(1)
//   })
// });
