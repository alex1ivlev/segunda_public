import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartRoutingModule} from './cart-routing.module';
import {CartComponent} from './cart.component';
import {CartService} from "../../service/cart.service";


@NgModule({
  declarations: [CartComponent],
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
