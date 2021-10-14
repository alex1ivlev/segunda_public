import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../service/api.service";
import {CartService} from "../../service/cart.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  public productList : any

  constructor(private api: ApiService, private cartService: CartService) { }

  ngOnInit(): void {
    this.api.getProduct()
      .subscribe( res =>{
        this.productList = res;

        this.productList.forEach((a : any) => {
          Object.assign(a, {quantity: 1});
        })
      })
  }
  addToCart(item : any){
    this.cartService.addToCart(item)
  }
}
