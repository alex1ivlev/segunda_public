import {Injectable} from '@angular/core';
import {Item} from '../../../item.interface'
import { EntityStore, StoreConfig, EntityState} from '@datorama/akita';


export interface CartState extends EntityState<Item, string> {

  products: [];
}
export function createInitialState(): CartState {
  return {
    products: []
  };
}

@Injectable({
  providedIn: 'root'
})


@StoreConfig({name: 'cart'})
export class CartStore extends EntityStore<CartState> {

  constructor() {
    super(createInitialState());
  }

}
