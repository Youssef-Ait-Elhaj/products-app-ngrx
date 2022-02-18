import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {
  GetAllProductsAction,
  GetSelectedProductsAction,
  ProductActionTypes,
  SearchProductsAction
} from "../../../ngrx/products.actions";
import {Router} from "@angular/router";
import {ProductsState, ProductsStateEnum} from "../../../ngrx/products.reducer";

@Component({
  selector: 'app-products-navbar',
  templateUrl: './products-navbar.component.html',
  styleUrls: ['./products-navbar.component.css']
})
export class ProductsNavbarComponent implements OnInit {

  state: ProductsState | null = null;
  readonly ProductActionTypes = ProductActionTypes;

  constructor(private store: Store<any>, private router: Router) { }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.state = state.catalogState;
    });
  }

  onGetAllProducts() {
    this.store.dispatch(new GetAllProductsAction({}));
  }

  onGetSelectedProducts() {
    this.store.dispatch(new GetSelectedProductsAction({}));
  }

  onSearch(value: any) {
    this.store.dispatch(new SearchProductsAction(value.keyword));
  }

  onNewProduct() {
    this.router.navigateByUrl("/newProduct");
  }
}
