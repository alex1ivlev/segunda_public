import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Item} from "../item.interface";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList : any = []
  public productList = new BehaviorSubject<Item[]>([]);
  public search = new BehaviorSubject<string>("")

  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }
  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addToCart(product : Item){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
  }
  removeCartItem(product : Item) {
    this.cartItemList.map((a : any, index: any) => {
      if(product.id === a.id){
        this.cartItemList.splice(index, 1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAll() {
     this.cartItemList = []
      this.productList.next(this.cartItemList);
  }
}
