import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import { SmartTableComponent } from '../../shared/components/smart-table/smart-table.component';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { SnackbarComponent } from '../../shared/components';
import { SnackBarService } from '../../shared/common';

@NgModule({
  declarations: [CatalogComponent, NewProductComponent, ProductListComponent],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    RouterModule,
    SmartTableComponent,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatFormFieldModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatCheckboxModule,
    MatOptionModule,
    MatSelectModule,
    SnackbarComponent,
  ],
  providers: [{ provide: SnackBarService, useClass: SnackBarService }],
})
export class CatalogModule {}
