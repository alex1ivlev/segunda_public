
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent} from "./product.component";
import {ProductRoutingModule} from './product-routing.module'
import {FilterPipe} from "../../filter.pipe";



@NgModule({
  declarations: [
    ProductComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  providers: [FilterPipe],

})
export class ProductModule { }
