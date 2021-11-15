import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

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
    let newList = this.wishes.slice(0);
    newList.push(this.newItem);
    this.wishes = newList;
  }

  editItem() {
    //with onPush ON it doest let to directly mutate:
    this.wishes[0] = " New Value from parent!!";

    //use case that lets Edit button mutate the item with onPush
    //let changedItem = this.wishes.slice(0);
    //changedItem[0] = " New Value from parent!!";
    //this.wishes = changedItem;
  }
}
