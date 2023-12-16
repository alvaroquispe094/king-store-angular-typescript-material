import { Component, OnInit } from '@angular/core';
import { GetProductsUseCase } from '../../../domain/usecases/get-products.usecase';
import { ProductModel } from '../../../domain/models/product.model';
import { Subject, takeUntil } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

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
    'stock',
    //'createdAt',
    //'image',
    'categoryName',
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
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: res => (this.products = res),
        error: error => console.error(error),
        complete: () => console.info('complete'),
      });
  }

  myCallbackFunction = (id: number): void => {
    //callback code here
    this.router.navigate;
    console.log('Id product: ' + id);
    this.router.navigate(['/pages/catalog/edit_product', id], { relativeTo: this.activatedRoute });
  };
}
