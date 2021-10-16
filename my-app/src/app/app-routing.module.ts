import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './admin/account/account.component';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { HomeComponent } from './admin/home/home.component';
import { ProductListComponent } from './admin/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin/products', component: ProductListComponent },
  { path: 'admin/account', component: AccountComponent },
  { path: 'admin/add-product', component: AddProductComponent },
  { path: 'admin/categories', component: CategoriesComponent },
   { path: 'admin/add-category', component: AddCategoryComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
