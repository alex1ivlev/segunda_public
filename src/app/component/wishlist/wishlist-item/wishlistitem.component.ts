import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from "../../../item.interface";

@Component({
  selector: 'app-wishlistitem',
  templateUrl: './wishlistitem.component.html',
  styleUrls: ['./wishlistitem.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WishlistitemComponent implements OnInit {

  @Input() public item: Item = {
    title: ""
  };

  @Input() public index: number = 0;
  @Output() newItemEvent = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
  }

  removeItem(value: number){
    this.newItemEvent.emit(value);
  }

}
