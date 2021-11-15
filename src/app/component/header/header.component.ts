import { Component, OnInit } from '@angular/core';
import {CartService} from "../../service/cart.service";
import {User} from "../../user.interface";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  public totalItem : number = 0;
  public searchValue !: string ;
  user: User | null = null;
  constructor(private cartService: CartService, private authService: AuthService) {

    this.authService.getUser().subscribe((user: User | null) => this.user = user);
  }

  logout(){
    this.authService.logout();
  }
  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe( res =>{
        this.totalItem = res.length
      } )
  }

  search(event: any) {
    this.searchValue = (event.target as HTMLInputElement).value;
    console.log(this.searchValue);
    this.cartService.search.next(this.searchValue)
  }
}
