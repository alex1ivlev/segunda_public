import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../../item.interface";
import {AddToCart} from "../../store/Actions/Actions";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  constructor(private store: Store<{items: [], cart: []}>) { }
  inCart: boolean = false;

  addToCart(item: Item){
    this.store.dispatch( new AddToCart(item));
    this.inCart = true;
  }

  @Input() item: Item = {};
  ngOnInit(): void {
  }

}
