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


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatBadgeModule,
    StoreModule.forRoot({products: productsReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
