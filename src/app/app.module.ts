import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './component/header/header.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ProductlistModule} from "./component/product-list/productlist.module";
import {AuthModule} from "./component/auth/auth.module";
import {CartModule} from "./component/cart/cart.module";
import {ActionReducerMap, Store, StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import { Reducer } from "./component/store/Reducer/Reducer";
import { Effects} from "./component/store/Effects/Effects"
import {environment} from "../environments/environment";
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { WishlistlistComponent } from './component/wishlist/wishlist-list/wishlistlist.component'
import { WishlistitemComponent} from './component/wishlist/wishlist-item/wishlistitem.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WishlistComponent,
    WishlistlistComponent,
    WishlistitemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    ProductlistModule,
    AuthModule,
    CartModule,
    StoreModule.forRoot({shop: Reducer} as ActionReducerMap<any, any>),
    EffectsModule.forRoot([Effects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
