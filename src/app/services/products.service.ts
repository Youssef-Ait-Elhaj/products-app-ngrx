import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Product} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    // const host = (Math.random() > 0.1) ? environment.host : environment.unreachable_host;
    const host = environment.host;
    return this.http.get<Product[]>(host + '/products');
  }

  getSelectedProducts(): Observable<Product[]> {
    const host = environment.host;
    return this.http.get<Product[]>(host + '/products?selected=true');
  }

  getAvailableProducts(): Observable<Product[]> {
    const host = environment.host;
    return this.http.get<Product[]>(host + '/products?available=true');
  }

  searchProducts(keyword: string): Observable<Product[]> {
    const host = environment.host;
    return this.http.get<Product[]>(host + '/products?name_like=' + keyword);
  }

  selectProduct(product: Product): Observable<Product> {
    const host = environment.host;
    product.selected = !product.selected;
    return this.http.put<Product>(host + '/products/' + product.id, product);
  }

  deleteProduct(productId: number): Observable<void> {
    let host = environment.host;
    return this.http.delete<void>(host + '/products/' + productId);
  }

  saveProduct(product: Product): Observable<Product> {
    const host = environment.host;
    return this.http.post<Product>(host + '/products/', product);
  }

  getProduct(id: number): Observable<Product> {
    const host = environment.host;
    return this.http.get<Product>(host + '/products/' + id);
  }

  // getProduct(product: Product): Observable<Product> {
  //   const host = environment.host;
  //   return this.http.get<Product>(host + '/products/' + product.id);
  // }

  updateProduct(product: Product): Observable<Product> {
    const host = environment.host;
    return this.http.put<Product>(host + '/products/' + product.id, product);
  }
}
