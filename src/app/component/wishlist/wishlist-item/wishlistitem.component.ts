import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-wishlistitem',
  templateUrl: './wishlistitem.component.html',
  styleUrls: ['./wishlistitem.component.sass']
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

}
