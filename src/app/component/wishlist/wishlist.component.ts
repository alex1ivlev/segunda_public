import { Component, OnInit} from '@angular/core';
import {WishlistQuery} from "./store/wishlist.query";
import {Observable} from "rxjs";
import {Item} from "../../item.interface";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.sass'],
})
export class WishlistComponent implements OnInit{

  public wishes: Observable<Item[]> = this.wishlistQuery.selectAll();

  constructor( private wishlistQuery: WishlistQuery) { }

  ngOnInit(): void { }

}
