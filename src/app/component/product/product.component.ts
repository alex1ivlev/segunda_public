import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../item.interface";
import {Store, select} from "@ngrx/store";
import {GetItems, LoadItems} from "../store/productActions/productActions";
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {
  products: Item[] = [];

  constructor(private store: Store<any>) {
    store.pipe(select('product')).subscribe((state) => (this.products = state.items));
  }

  searchValue: string = " ";

  ngOnInit(): void {
    this.store.dispatch(new GetItems());
  }
}

