import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-wishlistlist',
  templateUrl: './wishlistlist.component.html',
  styleUrls: ['./wishlistlist.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WishlistlistComponent implements OnInit {

  @Input() public wishes: string[];

  constructor() {
    this.wishes = [];
  }

  removeItem(index: number){
    this.wishes.splice(index, 1)
  }
  ngOnInit(): void {

  }


}
