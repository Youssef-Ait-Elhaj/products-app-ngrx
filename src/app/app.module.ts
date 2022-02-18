import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { ProductsComponent } from './components/products/products.component';
import { ProductsNavbarComponent } from './components/products/products-navbar/products-navbar.component';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {productsReducer} from "./ngrx/products.reducer";
import {ProductsEffects} from "./ngrx/products.effects";
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductItemComponent } from './components/products/products-list/product-item/product-item.component';
import { NewProductComponent } from './components/products/new-product/new-product.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EditProductComponent } from './components/products/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsNavbarComponent,
    ProductsListComponent,
    ProductItemComponent,
    NewProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({catalogState: productsReducer}),
    EffectsModule.forRoot([ProductsEffects]),
    StoreDevtoolsModule.instrument(),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
