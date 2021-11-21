import { Component, OnInit} from '@angular/core';
import {WishlistQuery} from "./store/wishlist.query";
import {Observable} from "rxjs";
import {Item} from "../../item.interface";
import {WishlistStore} from "./store/wishlist.store";
import {CartStore} from "../cart/store/cart.store";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.sass'],
})
export class WishlistComponent implements OnInit{

  public wishes$: Observable<Item[]> = this.wishlistQuery.selectAll();


  constructor( private wishlistQuery: WishlistQuery, private wishlistStore: WishlistStore, private cartStore: CartStore) { }

  ngOnInit(): void {
  }

  removeItem(item: Item) {
    this.wishlistStore.remove(item.id);
    console.log(item);
  }
  moveItemToCart (item: Item) {
    this.cartStore.add(item);
    this.wishlistStore.remove(item.id);
  }
}
