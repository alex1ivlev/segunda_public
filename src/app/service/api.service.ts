import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { tap} from "rxjs/operators";
import {Item} from '../item.interface';
import { ProductStore } from '../component/product/store/product.store';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  store: ProductStore;

  constructor(private http: HttpClient, store: ProductStore) {
    this.http = http;
    this.store = store;
  }

  getProduct(): Observable<Item[]> {
    return this.http.get<Item[]>("https://fakestoreapi.com/products")
      .pipe(
        tap(products => {
          this.store.loadProducts( products, true);
        }))
      }

}

