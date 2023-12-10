import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import { SmartTableComponent } from '../../shared/components/smart-table/smart-table.component';

@NgModule({
  declarations: [CatalogComponent, NewProductComponent, ProductListComponent],
  imports: [CommonModule, CatalogRoutingModule, RouterModule, SmartTableComponent],
})
export class CatalogModule {}
