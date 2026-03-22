import { CommonModule } from '@angular/common';
import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { GetProductsUseCase } from '../../../domain/usecases/get-products.usecase';
import { ProductModel } from '../../../domain/models/product.model';
import { CART_OPTIONS } from '../../../shared/common';
import { ProductCardComponent, SidenavComponent } from '../../../shared/components';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, SidenavComponent, ProductCardComponent],
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  _options = CART_OPTIONS;

  readonly products = signal<ProductModel[]>([]);

  constructor(private getProductsUseCase: GetProductsUseCase) {}

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
}
