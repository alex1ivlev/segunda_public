
import { Component, OnInit} from '@angular/core';
import {Item} from "../../item.interface";
import {Observable} from "rxjs";
import {CartQuery} from "./store/cart.query";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})

export class CartComponent implements OnInit{

  public products: Observable<Item[]> = this.cartQuery.selectAll();


  constructor(private cartQuery: CartQuery) { }

  ngOnInit(): void { }

}
