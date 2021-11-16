import { Component, OnInit } from '@angular/core';
import {CartService} from "../../service/cart.service";
import {Store} from "@ngrx/store";
import {Item} from "../../item.interface";
import {RemoveFromCart} from "../store/Actions/Actions";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  public cart: Item[] =[];

  constructor(private store: Store<{cart: []}>) {}
    inCart: boolean = false;


  removeFromCart(item: Item){
    this.store.dispatch( new RemoveFromCart(item));
    this.inCart = false;
  }


    ngOnInit(): void {}

}
