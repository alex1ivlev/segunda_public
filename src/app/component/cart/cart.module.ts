import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartRoutingModule} from './cart-routing.module';
import {CartComponent} from './cart.component';
import {CartService} from "../../service/cart.service";
import { CartlistComponent } from './cartlist/cartlist.component';


@NgModule({
  declarations: [CartComponent, CartlistComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
  ],
  providers: [
    CartService
  ]
})
export class CartModule {
}
