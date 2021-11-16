import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../item.interface";
import {Store, select} from "@ngrx/store";
import {GetItems} from "../store/Actions/Actions";

@Component({
  selector: 'app-product',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.sass']
})
export class Productlistcomponent implements OnInit {

  items: Item[] = [];

  constructor(private store: Store<any>) {
    store.pipe(select('shop')).subscribe((state) => (this.items = state.items));
  }

    ngOnInit(): void {
      this.store.dispatch(new GetItems());}
  }


