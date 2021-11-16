import {Component, OnInit} from '@angular/core';
import {CartService} from "../../service/cart.service";
import {User} from "../../user.interface";
import {AuthService} from "../../service/auth.service";
import {select, Store} from "@ngrx/store";
import {Item} from "../../item.interface";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  public totalItem: number = 0;
  public searchValue !: string;

  user: User | null = null;

  constructor(private store: Store<any>, private authService: AuthService) {

    this.authService.getUser().subscribe((user: User | null) => this.user = user);

    store.pipe(select('shop')).subscribe((state) => {
      this.totalItem = state.cart.length;
    })
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit(): void {

  }

  search(event: any) {
    this.searchValue = (event.target as HTMLInputElement).value;
    console.log(this.searchValue);
  }
}
