import {Product} from "../models/product.model";
import {ProductActionTypes, ProductsActions} from "./products.actions";
import {Action} from "@ngrx/store";

export enum ProductsStateEnum {
  LOADING='Loading',
  LOADED='Loaded',
  ERROR='Error',
  INITIAL='Initial',
  NEW='New',
  EDIT='Edit',
  UPDATED='Updated'
}

export interface ProductsState {
  products: Product[],
  errorMessage: string,
  dataState: ProductsStateEnum,
  currentProduct: Product | null,
  currentAction: ProductsActions |null
}

let initState: ProductsState = {
  products: [],
  errorMessage: '',
  dataState: ProductsStateEnum.INITIAL,
  currentProduct: null,
  currentAction: null
}

export function productsReducer(state: ProductsState = initState, action: Action): ProductsState {
  switch (action.type) {
    // Get all products
    case ProductActionTypes.GET_ALL_PRODUCTS:
      return {...state, dataState:ProductsStateEnum.LOADING, currentAction: <ProductsActions>action}
    case ProductActionTypes.GET_ALL_PRODUCTS_SUCCESS:
      return {...state, dataState: ProductsStateEnum.LOADED, products: (<ProductsActions>action).payload, currentAction: <ProductsActions>action}
    case ProductActionTypes.GET_ALL_PRODUCTS_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload, currentAction: <ProductsActions>action}

    // Get selected products
    case ProductActionTypes.GET_SELECTED_PRODUCTS:
      return {...state, dataState:ProductsStateEnum.LOADING}
    case ProductActionTypes.GET_SELECTED_PRODUCTS_SUCCESS:
      return {...state, dataState: ProductsStateEnum.LOADED, products: (<ProductsActions>action).payload, currentAction: <ProductsActions>action}
    case ProductActionTypes.GET_SELECTED_PRODUCTS_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload, currentAction: <ProductsActions>action}

    // Search products
    case ProductActionTypes.SEARCH_PRODUCTS:
      return {...state, dataState:ProductsStateEnum.LOADING}
    case ProductActionTypes.SEARCH_PRODUCTS_SUCCESS:
      return {...state, dataState: ProductsStateEnum.LOADED, products: (<ProductsActions>action).payload, currentAction: <ProductsActions>action}
    case ProductActionTypes.SEARCH_PRODUCTS_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload, currentAction: <ProductsActions>action}

    // Select product
    case ProductActionTypes.SELECT_PRODUCT:
      return {...state, dataState:ProductsStateEnum.LOADING, currentAction: <ProductsActions>action}
    case ProductActionTypes.SELECT_PRODUCT_SUCCESS:
      let product: Product = (<ProductsActions>action).payload;
      let listProducts = [...state.products];
      let data: Product[] = listProducts.map(p => p.id == product.id?product:p);
      return {...state, dataState: ProductsStateEnum.LOADED, products:data, currentAction: <ProductsActions>action}
    case ProductActionTypes.SELECT_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload, currentAction: <ProductsActions>action}

    // Delete product
    case ProductActionTypes.DELETE_PRODUCT:
      return {...state, dataState:ProductsStateEnum.LOADING, currentAction: <ProductsActions>action}
    case ProductActionTypes.DELETE_PRODUCT_SUCCESS:
      let p: Product = (<ProductsActions>action).payload;
      let index = state.products.indexOf(p);
      let productsList = [...state.products];
      productsList.splice(index, 1);
      return {...state, dataState: ProductsStateEnum.LOADED, products:productsList, currentAction: <ProductsActions>action}
    case ProductActionTypes.DELETE_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload, currentAction: <ProductsActions>action}

    case ProductActionTypes.NEW_PRODUCT:
      return {...state, dataState:ProductsStateEnum.LOADING , currentAction: <ProductsActions>action}
    case ProductActionTypes.NEW_PRODUCT_SUCCESS:
      return {...state, dataState: ProductsStateEnum.NEW, currentAction: <ProductsActions>action}
    case ProductActionTypes.NEW_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload, currentAction: <ProductsActions>action}

    case ProductActionTypes.SAVE_PRODUCT:
      return {...state, dataState:ProductsStateEnum.LOADING , currentAction: <ProductsActions>action}
    case ProductActionTypes.SAVE_PRODUCT_SUCCESS:
      let prods: Product[] = [...state.products];
      prods.push((<ProductsActions>action).payload);
      return {...state, dataState: ProductsStateEnum.LOADED, products: prods}
    case ProductActionTypes.SAVE_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload, currentAction: <ProductsActions>action}

    case ProductActionTypes.EDIT_PRODUCT:
      return {...state, dataState:ProductsStateEnum.LOADING , currentAction: <ProductsActions>action}
    case ProductActionTypes.EDIT_PRODUCT_SUCCESS:
      return {...state, dataState: ProductsStateEnum.LOADED, currentProduct: (<ProductsActions>action).payload, currentAction: <ProductsActions>action}
    case ProductActionTypes.EDIT_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload, currentAction: <ProductsActions>action}

    case ProductActionTypes.Update_PRODUCT:
      return {...state, dataState:ProductsStateEnum.LOADING , currentAction: <ProductsActions>action}
    case ProductActionTypes.Update_PRODUCT_SUCCESS:
      let updatedProduct: Product = (<ProductsActions>action).payload;
      let updatedProducts = state.products.map(p=>(p.id==updatedProduct.id)?updatedProduct:p);
      return {...state, dataState: ProductsStateEnum.UPDATED, products:updatedProducts, currentAction: <ProductsActions>action}
    case ProductActionTypes.Update_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload, currentAction: <ProductsActions>action}
    default: return {...state}
  }
}
