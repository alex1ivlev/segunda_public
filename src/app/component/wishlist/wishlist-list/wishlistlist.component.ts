import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from "../../../item.interface";
import {WishlistStore} from "../store/wishlist.store";

@Component({
  selector: 'app-wishlistlist',
  templateUrl: './wishlistlist.component.html',
  styleUrls: ['./wishlistlist.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WishlistlistComponent implements OnInit {

  @Input() public wishes: Item[] = [];
  @Output() deleteItem = new EventEmitter<Item>();
  @Output() moveToCart = new EventEmitter<Item>();

  constructor() {
  }

  ngOnInit(): void {
  }

  removeItem(item: Item) {
    this.deleteItem.emit(item);
  }

  addItemToCart(item: Item) {
    this.moveToCart.emit(item);
  }
}
