import {Injectable} from "@angular/core";
import {ProductsService} from "../services/products.service";
import {act, Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {
  GetAllProductsAction,
  GetAllProductsActionError,
  GetAllProductsActionSuccess,
  GetSelectedProductsActionError,
  GetSelectedProductsActionSuccess,
  ProductActionTypes,
  ProductsActions,
  SearchProductsActionError,
  SearchProductsActionSuccess,
  SelectProductActionError,
  SelectProductActionSuccess
} from "./products.actions";

@Injectable()
export class ProductsEffects {
  constructor(private productsService: ProductsService, private effectActions: Actions) {
  }

  getAllProductsEffect: Observable<ProductsActions> = createEffect(() =>
    this.effectActions.pipe(
      ofType(ProductActionTypes.GET_ALL_PRODUCTS),
      mergeMap((action: ProductsActions) => {
        return this.productsService.getAllProducts()
          .pipe(
            map((products) => new GetAllProductsActionSuccess(products)),
            catchError((err) => of(new GetAllProductsActionError(err.message)))
          )
      })
    ));

  // Get selected products
  getSelectedProductsEffect: Observable<ProductsActions> = createEffect(() =>
    this.effectActions.pipe(
      ofType(ProductActionTypes.GET_SELECTED_PRODUCTS),
      mergeMap((action: ProductsActions) => {
        return this.productsService.getSelectedProducts()
          .pipe(
            map((products) => new GetSelectedProductsActionSuccess(products)),
            catchError((err) => of(new GetSelectedProductsActionError(err.message)))
          )
      })
    ));

  // Search products
  searchProductsEffect: Observable<ProductsActions> = createEffect(() =>
    this.effectActions.pipe(
      ofType(ProductActionTypes.SEARCH_PRODUCTS),
      mergeMap((action: ProductsActions) => {
        return this.productsService.searchProducts(action.payload)
          .pipe(
            map((products) => new SearchProductsActionSuccess(products)),
            catchError((err) => of(new SearchProductsActionError(err.message)))
          )
      })
    ));

  // Select product
  selectProductEffect: Observable<ProductsActions> = createEffect(() =>
    this.effectActions.pipe(
      ofType(ProductActionTypes.SELECT_PRODUCT),
      mergeMap((action: ProductsActions) => {
        return this.productsService.selectProduct(action.payload)
          .pipe(
            map((product) => new SelectProductActionSuccess(product)),
            catchError((err) => of(new SelectProductActionError(err.message)))
          )
      })
    ));
}
