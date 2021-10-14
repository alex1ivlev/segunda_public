import { Component, OnInit } from '@angular/core';
import {CartService} from "../../service/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  public products : any = [];

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.products  = res;
      })
  }

  removeItem(item : any){
  this.cartService.removeCartItem(item);
  }
  emptyCart(){
    this.cartService.removeAll();
  }
}
