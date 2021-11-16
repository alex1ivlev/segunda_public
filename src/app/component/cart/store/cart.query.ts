import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import {CartState, CartStore} from "./cart.store";


@Injectable({
  providedIn: 'root'
})
export class CartQuery extends QueryEntity<CartState> {

  selectCart$ = this.select(state => {
    return state.productsLoaded;
  });

  constructor(protected store: CartStore) {
    super(store);
  }
}
