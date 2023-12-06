import { Component, OnInit } from '@angular/core';
import { GetProductsUseCase } from '../../../domain/usecases/get-products.usecase';
import { Subject, takeUntil } from 'rxjs';
import { ProductModel } from '../../../domain/models/product.model';
import { CART_OPTIONS } from '../../../shared/common';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  private destroy$: Subject<void> = new Subject<void>();
  _options = CART_OPTIONS;

  products?: ProductModel[];

  constructor(private getProductsUseCase: GetProductsUseCase) {}

  ngOnInit() {
    this.getProductos();
  }

  getProductos() {
    this.getProductsUseCase
      .execute()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: res => (this.products = res),
        error: error => console.error(error),
        complete: () => console.info('complete'),
      });
  }
}
