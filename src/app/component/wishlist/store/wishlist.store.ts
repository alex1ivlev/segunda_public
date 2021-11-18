import {EntityState, EntityStore, StoreConfig} from "@datorama/akita";
import {Item} from "../../../item.interface";
import {Injectable} from "@angular/core";


export interface WishlistState extends EntityState<Item, string> {
  wishList: [];
  wishItem: Item;
}
export function createInitialState(): WishlistState {
  return {
    wishList: [],
    wishItem: {}
  }
}

@Injectable({
  providedIn: 'root'
})

@StoreConfig({ name: 'wishlist'})
export class WishlistStore extends EntityStore<WishlistState>{
  constructor() {
    super(createInitialState());
  }
}
