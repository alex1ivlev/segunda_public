import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from "../../../item.interface";
import {WishlistQuery} from "../store/wishlist.query";

@Component({
  selector: 'app-wishlistitem',
  templateUrl: './wishlistitem.component.html',
  styleUrls: ['./wishlistitem.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WishlistitemComponent implements OnInit {

  @Input() public item: Item = {};
  @Output() deleteItem = new EventEmitter<Item>();
  @Output() moveToCart = new EventEmitter<Item>();


  constructor() { }

  ngOnInit(): void {
  }

  removeItem(){
    this.deleteItem.emit(this.item);
  }

  addToCart(){
  this.deleteItem.emit(this.item);
  this.moveToCart.emit(this.item);
  }
}
