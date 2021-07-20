import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomepageComponent } from './homepage/homepage.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { ProductCardComponent } from './product-card/product-card.component';
import { StoreModule } from '@ngrx/store';
import {productsReducer} from './reducer/products.reducer';
import { CartComponent } from './cart/cart.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { CartItemComponent } from './cart-item/cart-item.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CheckoutComponent } from './checkout/checkout.component';
import { BillingInformationComponent } from './billing-information/billing-information.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProductCardComponent,
    CartComponent,
    CartItemComponent,
    CheckoutComponent,
    BillingInformationComponent,
    OrderSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    StoreModule.forRoot({products: productsReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
