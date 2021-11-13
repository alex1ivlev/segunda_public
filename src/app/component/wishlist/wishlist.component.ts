import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.sass'],
})
export class WishlistComponent implements OnInit{

  public newItem: string = "";
  public wishes: string[] = [];


  constructor() { }

  ngOnInit(): void { }

  addToList() {
    this.wishes.push(this.newItem)
  }

}
