
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Productlistcomponent} from "./productlistcomponent";
import {ProductlistRoutingModule} from './productlist-routing.module'
import {FilterPipe} from "../../filter.pipe";
import {ProductComponent} from "./product/product.component";



@NgModule({
  declarations: [
    Productlistcomponent,
    FilterPipe,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductlistRoutingModule
  ],
  providers: [FilterPipe],

})
export class ProductlistModule { }
