import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {GetAllProductsAction, GetSelectedProductsAction, SearchProductsAction} from "../../../ngrx/products.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products-navbar',
  templateUrl: './products-navbar.component.html',
  styleUrls: ['./products-navbar.component.css']
})
export class ProductsNavbarComponent implements OnInit {

  constructor(private store: Store<any>, private router: Router) { }

  ngOnInit(): void {
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
