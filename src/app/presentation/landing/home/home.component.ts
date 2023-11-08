import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ProductModel } from 'src/app/domain/models/product.model';
import { GetProductsUseCase } from 'src/app/domain/usecases/get-products.usecase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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
