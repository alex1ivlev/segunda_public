import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from "./component/auth/register/register.component";
import {WishlistComponent} from "./component/wishlist/wishlist.component";
import {AboutComponent} from "./component/header/about/about.component";


const routes: Routes = [
  {path:'', redirectTo: 'products', pathMatch: 'full'},
  {
    path:'products',
    loadChildren: () => import('./component/product/product.module').then(m => m.ProductModule)
  },
  {
    path:'cart',
    loadChildren: () => import('./component/cart/cart.module').then(m => m.CartModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./component/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path:'wishlist', component: WishlistComponent
  },
  {
    path: 'about', component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
