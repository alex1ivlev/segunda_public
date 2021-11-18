import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {CartQuery} from "../store/cart.query"
import {Item} from "../../../item.interface";
import {Observable} from "rxjs";
import {CartStore} from "../store/cart.store";

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartlistComponent implements OnInit {

  @Input() products$: Observable<Item[]> = this.cartQuery.selectAll();

  constructor(private cartStore : CartStore, private cartQuery: CartQuery) {

  }

  ngOnInit(): void {
    this.products$ = this.cartQuery.selectAll();
    console.log('cart arrived');
  }

  removeItem(item : any){
    this.cartStore.remove(item.id);
  }

  emptyCart(){
    this.cartStore.set([]);
  }
}
