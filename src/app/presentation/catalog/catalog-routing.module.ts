import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ROUTES } from '../../shared/common';
import { NewCategoryComponent } from './new-category/new-category.component';
import { CategoryListComponent } from './category-list/category-list.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogComponent,
    children: [
      {
        path: ROUTES.pages.catalog.products,
        component: ProductListComponent,
      },
      {
        path: ROUTES.pages.catalog.new_product,
        component: NewProductComponent,
      },
      {
        path: ROUTES.pages.catalog.edit_product + `/:id`,
        component: NewProductComponent,
      },
      {
        path: ROUTES.pages.catalog.categories,
        component: CategoryListComponent,
      },
      {
        path: ROUTES.pages.catalog.new_category,
        component: NewCategoryComponent,
      },
      {
        path: ROUTES.pages.catalog.edit_category + `/:id`,
        component: NewCategoryComponent,
      },
      {
        path: '',
        redirectTo: ROUTES.pages.catalog.products,
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogRoutingModule {}
