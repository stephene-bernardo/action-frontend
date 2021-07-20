import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomepageComponent } from './components/homepage/homepage.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { StoreModule } from '@ngrx/store';
import {productsReducer} from './reducer/products.reducer';
import { CartComponent } from './components/cart/cart.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { BillingInformationComponent } from './components/billing-information/billing-information.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';


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
