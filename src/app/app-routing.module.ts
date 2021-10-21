import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from "./component/product/product.component";
import {CartComponent} from "./component/cart/cart.component";
import {LoginComponent} from "./component/auth/login/login.component";
import {RegisterComponent} from "./component/auth/register/register.component";


const routes: Routes = [
  {path:'', redirectTo: 'products', pathMatch: 'full'},
  {path:'products', component: ProductComponent},
  {path:'cart', component:CartComponent },
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
