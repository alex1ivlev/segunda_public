import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './component/header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FilterPipe} from './filter.pipe';
import {ProductModule} from "./component/product/product.module";
import {AuthModule} from "./component/auth/auth.module";
import {CartModule} from "./component/cart/cart.module";
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
    NgbModule,
    HttpClientModule,
    MatFormFieldModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatFormFieldModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatFormFieldModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    FormsModule,
    ProductModule,
    AuthModule,
    CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
