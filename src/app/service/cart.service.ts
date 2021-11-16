import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Item} from "../item.interface";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public search = new BehaviorSubject<string>("")

  constructor() { }

}
