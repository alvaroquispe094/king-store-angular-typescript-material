import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../../domain/models/product.model';
import { Subject, takeUntil } from 'rxjs';
import { GetProductsUseCase } from '../../../domain/usecases/get-products.usecase';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  private destroy$: Subject<void> = new Subject<void>();
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
