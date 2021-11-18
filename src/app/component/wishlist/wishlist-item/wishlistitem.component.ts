import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from "../../../item.interface";
import {Observable} from "rxjs";
import {WishlistQuery} from "../store/wishlist.query";
import {WishlistState} from "../store/wishlist.store";

@Component({
  selector: 'app-wishlistitem',
  templateUrl: './wishlistitem.component.html',
  styleUrls: ['./wishlistitem.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WishlistitemComponent implements OnInit {

  //@Input() public item: Observable<WishlistState> = this.wishlistQuery.selectEntity( (item1, index1) => );

  @Input() public index: number = 0;
  @Output() newItemEvent = new EventEmitter<number>();


  constructor(private wishlistQuery: WishlistQuery) { }

  ngOnInit(): void {
  }

  removeItem(value: number){
    this.newItemEvent.emit(value);
  }

  addToCart(item: Item) {

  }
}
