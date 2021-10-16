import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './admin/home/home.component';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { AccountComponent } from './admin/account/account.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AsideComponent } from './admin/component/aside/aside.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    AccountComponent,
    AddProductComponent,
    AsideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
