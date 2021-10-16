import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './admin/account/account.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { HomeComponent } from './admin/home/home.component';
import { ProductListComponent } from './admin/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin/products', component: ProductListComponent },
  { path: 'admin/account', component: AccountComponent },
  { path: 'admin/add-product', component: AddProductComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
