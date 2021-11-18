import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Item} from "../../../item.interface";
import {WishlistQuery } from "../store/wishlist.query"
import {WishlistState, WishlistStore} from "../store/wishlist.store";

@Component({
  selector: 'app-wishlistlist',
  templateUrl: './wishlistlist.component.html',
  styleUrls: ['./wishlistlist.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WishlistlistComponent implements OnInit {

  @Input() public wishes$:  Observable<Item[]> = this.wishlistQuery.selectAll();
  //@Input() public item$: Observable<WishlistState> = this.wishlistQuery.selectEntity();


  constructor( private wishlistStore: WishlistStore, private wishlistQuery: WishlistQuery) {
  }

  ngOnInit(): void {
    this.wishes$ = this.wishlistQuery.selectAll();
    console.log(" Wishes from inside the list: " + this.wishes$);
  }

  removeItem(item: any){
    this.wishlistStore.remove(item.id);
  }

}
