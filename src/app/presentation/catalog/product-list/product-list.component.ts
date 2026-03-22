import { CommonModule } from '@angular/common';
import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { GetProductsUseCase } from '../../../domain/usecases/get-products.usecase';
import { ProductModel } from '../../../domain/models/product.model';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { SmartTableComponent } from '../../../shared/components/smart-table/smart-table.component';

@Component({
    selector: 'app-product-list',
    imports: [CommonModule, RouterLink, SmartTableComponent],
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  readonly products = signal<ProductModel[]>([]);
  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'price',
    'stock',
    //'createdAt',
    //'image',
    'category',
    'active',
  ];

  constructor(
    private getProductsUseCase: GetProductsUseCase,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getProductos();
  }

  getProductos() {
    this.getProductsUseCase
      .execute()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: res => this.products.set(res),
        error: error => console.error(error),
        complete: () => console.info('complete'),
      });
  }

  myCallbackFunction = (row: Record<string, unknown>): void => {
    const id = Number(row['id']);
    if (Number.isNaN(id)) {
      return;
    }

    this.router.navigate(['/pages/catalog/edit_product', id], { relativeTo: this.activatedRoute });
  };
}
