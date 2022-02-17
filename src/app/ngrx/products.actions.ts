import {Action} from "@ngrx/store";
import {Product} from "../models/product.model";

export enum ProductActionTypes {

  // Get all products
  GET_ALL_PRODUCTS = "[Products] Get all products",
  GET_ALL_PRODUCTS_SUCCESS = "[Products] Get all products success",
  GET_ALL_PRODUCTS_ERROR = "[Products] Get all products error",

  // Get selected products
  GET_SELECTED_PRODUCTS = "[Products] Get selected products",
  GET_SELECTED_PRODUCTS_SUCCESS = "[Products] Get selected products success",
  GET_SELECTED_PRODUCTS_ERROR = "[Products] Get selected products error",

  // Get search products
  SEARCH_PRODUCTS = "[Products] search products",
  SEARCH_PRODUCTS_SUCCESS = "[Products] search products success",
  SEARCH_PRODUCTS_ERROR = "[Products] search products error",

  // Select product
  SELECT_PRODUCT = "[Products] select product",
  SELECT_PRODUCT_SUCCESS = "[Products] select product success",
  SELECT_PRODUCT_ERROR = "[Products] select product error"
}

export class GetAllProductsAction implements Action {
  type: ProductActionTypes = ProductActionTypes.GET_ALL_PRODUCTS;
  constructor(public payload: any) {
  }
}

export class GetAllProductsActionSuccess implements Action {
  type: ProductActionTypes = ProductActionTypes.GET_ALL_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) {
  }
}

export class GetAllProductsActionError implements Action {
  type: ProductActionTypes = ProductActionTypes.GET_ALL_PRODUCTS_ERROR;
  constructor(public payload: string) {
  }
}

// get selected products actions
export class GetSelectedProductsAction implements Action {
  type: ProductActionTypes = ProductActionTypes.GET_SELECTED_PRODUCTS;
  constructor(public payload: any) {
  }
}

export class GetSelectedProductsActionSuccess implements Action {
  type: ProductActionTypes = ProductActionTypes.GET_SELECTED_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) {
  }
}

export class GetSelectedProductsActionError implements Action {
  type: ProductActionTypes = ProductActionTypes.GET_SELECTED_PRODUCTS_ERROR;
  constructor(public payload: string) {
  }
}

// search products actions
export class SearchProductsAction implements Action {
  type: ProductActionTypes = ProductActionTypes.SEARCH_PRODUCTS;
  constructor(public payload: string) {
  }
}

export class SearchProductsActionSuccess implements Action {
  type: ProductActionTypes = ProductActionTypes.SEARCH_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) {
  }
}

export class SearchProductsActionError implements Action {
  type: ProductActionTypes = ProductActionTypes.SEARCH_PRODUCTS_ERROR;
  constructor(public payload: string) {
  }
}

// select product actions
export class SelectProductAction implements Action {
  type: ProductActionTypes = ProductActionTypes.SELECT_PRODUCT;
  constructor(public payload: Product) {
  }
}

export class SelectProductActionSuccess implements Action {
  type: ProductActionTypes = ProductActionTypes.SELECT_PRODUCT_SUCCESS;
  constructor(public payload: Product) {
  }
}

export class SelectProductActionError implements Action {
  type: ProductActionTypes = ProductActionTypes.SELECT_PRODUCT_ERROR;
  constructor(public payload: string) {
  }
}

export type ProductsActions=
  GetAllProductsAction | GetAllProductsActionSuccess | GetAllProductsActionError
   | GetSelectedProductsAction | GetSelectedProductsActionSuccess | GetSelectedProductsActionError
   | SearchProductsAction | SearchProductsActionSuccess | SearchProductsActionError
   // | SelectProductAction | SelectProductActionSuccess | SelectProductActionError
;
