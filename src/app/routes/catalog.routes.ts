import { Routes } from '@angular/router';
import { CategoryListComponent } from '../presentation/catalog/category-list/category-list.component';
import { CatalogComponent } from '../presentation/catalog/catalog.component';
import { NewCategoryComponent } from '../presentation/catalog/new-category/new-category.component';
import { NewProductComponent } from '../presentation/catalog/new-product/new-product.component';
import { ProductListComponent } from '../presentation/catalog/product-list/product-list.component';
import { ROUTES } from '../shared/common';

export const CATALOG_ROUTES: Routes = [
  {
    path: '',
    component: CatalogComponent,
    children: [
      { path: ROUTES.pages.catalog.products, component: ProductListComponent },
      { path: ROUTES.pages.catalog.new_product, component: NewProductComponent },
      { path: `${ROUTES.pages.catalog.edit_product}/:id`, component: NewProductComponent },
      { path: ROUTES.pages.catalog.categories, component: CategoryListComponent },
      { path: ROUTES.pages.catalog.new_category, component: NewCategoryComponent },
      { path: `${ROUTES.pages.catalog.edit_category}/:id`, component: NewCategoryComponent },
      { path: '', redirectTo: ROUTES.pages.catalog.products, pathMatch: 'full' },
    ],
  },
];
