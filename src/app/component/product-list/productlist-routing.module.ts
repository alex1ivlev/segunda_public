import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Productlistcomponent} from "./productlistcomponent";

const routes: Routes = [
  { path: '', component: Productlistcomponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [

  ],
  exports: [RouterModule]
})
export class ProductlistRoutingModule { }
