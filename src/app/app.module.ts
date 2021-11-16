import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './component/header/header.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FilterPipe} from './filter.pipe';
import {ProductModule} from "./component/product/product.module";
import {AuthModule} from "./component/auth/auth.module";
import {CartModule} from "./component/cart/cart.module";
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { WishlistlistComponent } from './component/wishlist/wishlist-list/wishlistlist.component'
import { WishlistitemComponent} from './component/wishlist/wishlist-item/wishlistitem.component';
import {environment} from "../environments/environment";
import {AkitaNgDevtools} from "@datorama/akita-ngdevtools";

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
    ProductModule,
    AuthModule,
    CartModule,
    environment.production ? [] : AkitaNgDevtools.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
