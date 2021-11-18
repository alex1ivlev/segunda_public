import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from "../../service/api.service";
import {CartService} from "../../service/cart.service";
import {Item} from "../../item.interface";
import {Observable, Subscription} from "rxjs";
import {ProductQuery} from "./store/product.query";
import {switchMap, filter} from "rxjs/operators";
import {CartStore} from "../cart/store/cart.store";
import {WishlistStore} from "../wishlist/store/wishlist.store";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit, OnDestroy {
  loading: boolean = false;
  listProductsSub?: Subscription;
  searchValue: string = " ";
  products$: Observable<Item[]> = this.productQuery.selectAll();

  constructor(private api: ApiService, private cartStore: CartStore, private productQuery: ProductQuery, private wishlistStore: WishlistStore ) {
  }

  ngOnInit() {
    this.listProductsSub = this.productQuery.selectProductsLoaded$.pipe(
      filter(productsLoaded => !productsLoaded),
      switchMap(()=> {
          return this.api.getProduct();
      })
    ).subscribe(result => {});
  }

  addToCart(item: any) {
    this.cartStore.add(item);
  }

  addToWishlist(item: Item) {
  this.wishlistStore.add(item)
  }
  ngOnDestroy() {
    if (this.listProductsSub) {
      this.listProductsSub.unsubscribe();
    }
  }
}
