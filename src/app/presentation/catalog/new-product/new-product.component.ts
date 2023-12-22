import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GetProductByIdUseCase } from '../../../domain/usecases/get-product-by-id.usecase';
import { Subject, takeUntil } from 'rxjs';
import { ProductModel } from '../../../domain/models/product.model';
import { GetCategoriesUseCase } from '../../../domain/usecases/get-categories.usecase';
import { CategoryModel } from '../../../domain/models/category.model';
import { UpdateProductUseCase } from '../../../domain/usecases/update-product.usecase';
import { SnackBarService } from '../../../shared/common';
import { CreateProductUseCase } from '../../../domain/usecases/create-product.usecase';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
})
export class NewProductComponent implements OnInit {
  private destroy$: Subject<void> = new Subject<void>();
  public productForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    stock: new FormControl(''),
    image: new FormControl(''),
    categoryId: new FormControl(''),
    active: new FormControl(''),
  });
  isLoading = false;

  product: ProductModel = {
    id: '',
    name: '',
    description: '',
    price: 0,
    stock: '',
    image: '',
    categoryId: 0,
    category: '',
    active: true,
  };

  categories?: CategoryModel[];
  edit: boolean;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackBarService: SnackBarService,
    private getProductByIdUseCase: GetProductByIdUseCase,
    private getCategoriesUseCase: GetCategoriesUseCase,
    private updateProductUseCase: UpdateProductUseCase,
    private createProductUseCase: CreateProductUseCase
  ) {
    this.edit = false;
  }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    console.log('id from param:' + params['id']);

    this.getCategories();

    if (params['id']) {
      this.edit = true;
      this.getProductByIdUseCase
        .execute(params['id'])
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: res => {
            this.product = res;
            this.validateForm();
          },
          error: error => console.error(error),
          complete: () => console.info('complete'),
        });
    }
  }

  getCategories() {
    this.getCategoriesUseCase
      .execute()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: res => {
          this.categories = res;
        },
        error: err => {
          console.error(err);
        },
        complete: () => {
          console.info('complete get categories');
        },
      });
  }

  updateProduct() {
    console.log('update..');
    this.setLoading(true);

    this.updateProductUseCase
      .execute({ product: this.productForm.value, id: this.productForm.value.id })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.openSnackBar('Updated product!', 'info');
        },
        error: err => {
          console.error(err);
          this.setLoading(false);
        },
        complete: () => {
          console.info('complete update product');
          this.setLoading(false);
          this.router.navigate(['/pages/catalog/products'], { relativeTo: this.activatedRoute });
        },
      });
  }

  saveProduct() {
    console.log('save..');
    this.setLoading(true);

    this.createProductUseCase
      .execute(this.productForm.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.openSnackBar('Created product!', 'info');
        },
        error: err => {
          console.error(err);
          this.setLoading(false);
        },
        complete: () => {
          console.info('complete create product');
          this.setLoading(false);
          this.router.navigate(['/pages/catalog/products'], { relativeTo: this.activatedRoute });
        },
      });
  }

  openSnackBar(message: string, type: string) {
    this.snackBarService.open(message, type);
  }

  setLoading(value: boolean) {
    this.isLoading = value;
  }

  validateForm() {
    this.productForm = this.fb.group({
      id: this.product.id,
      name: [this.product.name, [Validators.required]],
      description: [this.product.description, [Validators.required, Validators.min(1)]],
      price: [this.product.price, [Validators.required, Validators.min(1)]],
      stock: [this.product.stock, [Validators.min(1)]],
      image: [this.product.image, [Validators.required]],
      categoryId: [
        this.categories?.filter(x => x.name === this.product.category)[0].id,
        [Validators.required, Validators.min(1)],
      ],
      active: this.product.active,
    });
  }
}
