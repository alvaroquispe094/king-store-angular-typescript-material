import { Component, OnInit } from '@angular/core';
import { GetProductsUseCase } from '../../../domain/usecases/get-products.usecase';
import { ProductModel } from '../../../domain/models/product.model';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  private destroy$: Subject<void> = new Subject<void>();
  products!: ProductModel[];
  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'price',
    //'stock',
    //'createdAt',
    //'image',
    //'activationStatus',
  ];

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
