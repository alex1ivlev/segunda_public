import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../service/api.service";
import {CartService} from "../../service/cart.service";
import {Item} from "../../item.interface";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  public productList: Item[] = []
  searchValue: string = " ";

  constructor(private api: ApiService, private cartService: CartService) {
  }

  ngOnInit(): void {
    this.api.getProduct()
      .subscribe(res => {
        this.productList = res;

        this.productList.forEach((a: Item) => {
          Object.assign(a, {quantity: 1});
        })

        this.cartService.search.subscribe((val: string) => {
          this.searchValue = val;
        })
      })
  }

  addToCart(item: any) {
    this.cartService.addToCart(item)
  }
}
