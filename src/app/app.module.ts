import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomepageComponent } from './pages/home/homepage.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { StoreModule } from '@ngrx/store';
import {productsReducer} from './reducer/products.reducer';
import { CartComponent } from './pages/cart/cart.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { BillingInformationComponent } from './components/billing-information/billing-information.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';


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
    MatDividerModule,
    MatTooltipModule,
    StoreModule.forRoot({products: productsReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
