import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GetProductByIdUseCase } from '../../../domain/usecases/get-product-by-id.usecase';
import { Subject, forkJoin, takeUntil } from 'rxjs';
import { FORM_PRODUCT, ProductModel } from '../../../domain/models/product.model';
import { GetCategoriesUseCase } from '../../../domain/usecases/get-categories.usecase';
import { CategoryModel } from '../../../domain/models/category.model';
import { UpdateProductUseCase } from '../../../domain/usecases/update-product.usecase';
import { VALIDATIONS, SnackBarService } from '../../../shared/common';
import { CreateProductUseCase } from '../../../domain/usecases/create-product.usecase';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
})
export class NewProductComponent implements OnInit {
  private destroy$: Subject<void> = new Subject<void>();
  public productForm!: UntypedFormGroup;

  isLoading;
  product?: ProductModel;
  categoryIdSelected = 0;
  edit: boolean;
  categories!: CategoryModel[];

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
    this.isLoading = false;
  }

  ngOnInit() {
    this.productForm = this.fb.group(FORM_PRODUCT);

    // Define multiple services that fetch data
    forkJoin({
      result1: this.getCategoriesUseCase.execute(),
    }).subscribe(({ result1 }) => {
      this.categories = result1;
      this.findDataEdit();
    });
  }

  findDataEdit() {
    const params = this.activatedRoute.snapshot['params'];
    if (params['id']) {
      this.edit = true;
      this.getProductByIdUseCase
        .execute(params['id'])
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: res => {
            this.product = res;
            console.info('data: ' + res.name);
            this.product.categoryId = this.categories.filter(x => x.name === res.category)[0]['id'];
            this.productForm.patchValue(this.product); // update form using domain data fetch
          },
          error: error => console.error(error),
          complete: () => console.info('get product complete'),
        });
    }
  }

  updateProduct() {
    this.setLoading(true);

    this.updateProductUseCase
      .execute({ product: this.productForm.value, id: this.productForm.value.id })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.snackBarService.info('Updated product!');
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

  createProduct() {
    this.setLoading(true);

    this.createProductUseCase
      .execute(this.productForm.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.snackBarService.success('Created product!');
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

  setLoading(value: boolean) {
    this.isLoading = value;
  }

  // Custom messages for inputs
  getErrorMessage(controlName: string) {
    if (this.fg[controlName]?.errors?.['required']) {
      return VALIDATIONS.required.text;
    }
    if (this.fg[controlName]?.errors?.['email']) {
      return VALIDATIONS.form_product.email;
    }
    if (this.fg[controlName]?.errors?.['minlength']) {
      return VALIDATIONS.form_product.min_length;
    }
    if (this.fg[controlName]?.errors?.['min']) {
      return VALIDATIONS.form_product.min;
    }

    return '';
  }

  // Accessing form control
  get fg() {
    return this.productForm.controls;
  }
}
