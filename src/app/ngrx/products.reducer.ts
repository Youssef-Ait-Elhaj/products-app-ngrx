import {Product} from "../models/product.model";
import {ProductActionTypes, ProductsActions} from "./products.actions";
import {Action} from "@ngrx/store";

export enum ProductsStateEnum {
  LOADING='Loading',
  LOADED='Loaded',
  ERROR='Error',
  INITIAL='Initial',
  NEW='New',
  EDIT='Edit'
}

export interface ProductsState {
  products: Product[],
  errorMessage: string,
  dataState: ProductsStateEnum
}

let initState: ProductsState = {
  products: [],
  errorMessage: '',
  dataState: ProductsStateEnum.INITIAL
}

export function productsReducer(state: ProductsState = initState, action: Action): ProductsState {
  switch (action.type) {
    // Get all products
    case ProductActionTypes.GET_ALL_PRODUCTS:
      return {...state, dataState:ProductsStateEnum.LOADING}
    case ProductActionTypes.GET_ALL_PRODUCTS_SUCCESS:
      return {...state, dataState: ProductsStateEnum.LOADED, products: (<ProductsActions>action).payload}
    case ProductActionTypes.GET_ALL_PRODUCTS_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload}

    // Get selected products
    case ProductActionTypes.GET_SELECTED_PRODUCTS:
      return {...state, dataState:ProductsStateEnum.LOADING}
    case ProductActionTypes.GET_SELECTED_PRODUCTS_SUCCESS:
      return {...state, dataState: ProductsStateEnum.LOADED, products: (<ProductsActions>action).payload}
    case ProductActionTypes.GET_SELECTED_PRODUCTS_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload}

    // Search products
    case ProductActionTypes.SEARCH_PRODUCTS:
      return {...state, dataState:ProductsStateEnum.LOADING}
    case ProductActionTypes.SEARCH_PRODUCTS_SUCCESS:
      return {...state, dataState: ProductsStateEnum.LOADED, products: (<ProductsActions>action).payload}
    case ProductActionTypes.SEARCH_PRODUCTS_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload}

    // Select product
    case ProductActionTypes.SELECT_PRODUCT:
      return {...state, dataState:ProductsStateEnum.LOADING}
    case ProductActionTypes.SELECT_PRODUCT_SUCCESS:
      let product: Product = (<ProductsActions>action).payload;
      let listProducts = [...state.products];
      let data: Product[] = listProducts.map(p => p.id == product.id?product:p);
      return {...state, dataState: ProductsStateEnum.LOADED, products:data}
    case ProductActionTypes.SELECT_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload}

    // Delete product
    case ProductActionTypes.DELETE_PRODUCT:
      return {...state, dataState:ProductsStateEnum.LOADING}
    case ProductActionTypes.DELETE_PRODUCT_SUCCESS:
      let p: Product = (<ProductsActions>action).payload;
      let index = state.products.indexOf(p);
      let productsList = [...state.products];
      productsList.splice(index, 1);
      return {...state, dataState: ProductsStateEnum.LOADED, products:productsList}
    case ProductActionTypes.DELETE_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload}

    case ProductActionTypes.NEW_PRODUCT:
      return {...state, dataState:ProductsStateEnum.LOADING }
    case ProductActionTypes.NEW_PRODUCT_SUCCESS:
      return {...state, dataState: ProductsStateEnum.NEW}
    case ProductActionTypes.NEW_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload}

    case ProductActionTypes.SAVE_PRODUCT:
      return {...state, dataState:ProductsStateEnum.LOADING }
    case ProductActionTypes.SAVE_PRODUCT_SUCCESS:
      let prods: Product[] = [...state.products];
      prods.push((<ProductsActions>action).payload);
      return {...state, dataState: ProductsStateEnum.LOADED, products: prods}
    case ProductActionTypes.SAVE_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload}
    default: return {...state}
  }
}
