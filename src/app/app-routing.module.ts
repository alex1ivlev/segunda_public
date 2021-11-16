import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path:'', redirectTo: 'product-list', pathMatch: 'full'},
  {
    path:'product-list',
    loadChildren: () => import('./component/product-list/productlist.module').then(m => m.ProductlistModule)
  },
  {
    path:'cart',
    loadChildren: () => import('./component/cart/cart.module').then(m => m.CartModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./component/auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
