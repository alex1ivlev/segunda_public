import {Injectable} from '@angular/core';
import {Item} from '../../../item.interface'
import {EntityStore, StoreConfig, EntityState} from '@datorama/akita';


export interface ProductState extends EntityState<Item, string> {

  productsLoaded: boolean;
}

export function createInitialState(): ProductState {
  return {
    productsLoaded: false
  };
}

@Injectable({
  providedIn: 'root'
})

@StoreConfig({name: 'products'})
export class ProductStore extends EntityStore<ProductState> {

  constructor() {
    super(createInitialState());
  }

  loadProducts(products: Item[], productsLoaded: boolean) {
    this.set(products);
    this.update(state => ({
      ...state,
      productsLoaded
    }));
  }
}
