import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CartService} from "../../service/cart.service";
import {User} from "../../user.interface";
import {AuthService} from "../../service/auth.service";
import {CartQuery} from "../cart/store/cart.query";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  public totalItem$ : Observable<number>
  public searchValue !: string ;
  user: User | null = null;

  constructor(private cartService: CartService, private authService: AuthService, public cartQuery: CartQuery) {
    this.authService.getUser().subscribe((user: User | null) => this.user = user);
    this.totalItem$ = this.cartQuery.selectAll().pipe(
      map((items) => items.length)
    );
  }

  logout(){
    this.authService.logout();
  }
  ngOnInit(): void {
    this.cartQuery.getCount()
  }

  search(event: any) {
    this.searchValue = (event.target as HTMLInputElement).value;
    console.log(this.searchValue);
    this.cartService.search.next(this.searchValue)
  }
}
