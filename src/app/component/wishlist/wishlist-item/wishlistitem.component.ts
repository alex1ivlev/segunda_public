import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-wishlistitem',
  templateUrl: './wishlistitem.component.html',
  styleUrls: ['./wishlistitem.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WishlistitemComponent implements OnInit {

  @Input() public item: string = "";
  @Input() public index: number = 0;
  @Output() newItemEvent = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
  }

  removeItem(value: number){
    this.newItemEvent.emit(value);
  }

  changeItem() {
    this.item = "I'm value from a child component";
  }
}