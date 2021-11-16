import { Component, OnInit } from '@angular/core';
import {CartQuery} from "./store/cart.query"
import {Item} from "../../item.interface";
import {Observable} from "rxjs";
import {CartStore} from "./store/cart.store";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

   products$: Observable<Item[]> = this.cartQuery.selectAll();

  constructor(private cartStore : CartStore, private cartQuery: CartQuery) {
  }

  ngOnInit(): void {
    this.products$ = this.cartQuery.selectAll();
  }

  removeItem(item : any){
  this.cartStore.remove(item.id);
  }

  emptyCart(){
    this.cartStore.set([]);
  }
}
