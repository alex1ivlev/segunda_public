import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Item} from '../item.interface';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getProduct() {
    return this.http.get<Item[]>("https://fakestoreapi.com/products")
      .pipe(map((res: Item[]) => {
        return res;
      }))
  }
}
