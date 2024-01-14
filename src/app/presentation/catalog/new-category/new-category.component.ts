import { Component, OnInit } from '@angular/core';
import { CategoryModel, FORM_CATEGORY } from '../../../domain/models/category.model';
import { FormBuilder, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackBarService, VALIDATIONS } from '../../../shared/common';
import { GetCategoryByIdUseCase } from '../../../domain/usecases/get-category-by-id.usecase';
import { Subject, takeUntil } from 'rxjs';
import { CreateCategoryUseCase } from '../../../domain/usecases/create-category.usecase';
import { UpdateCategoryUseCase } from '../../../domain/usecases/update-category.usecase';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss'],
})
export class NewCategoryComponent implements OnInit {
  private destroy$: Subject<void> = new Subject<void>();
  public categoryForm!: UntypedFormGroup;

  isLoading: boolean;
  category?: CategoryModel;
  edit: boolean;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackBarService: SnackBarService,
    private getCategoryByIdUseCase: GetCategoryByIdUseCase,
    private updateCategoryUseCase: UpdateCategoryUseCase,
    private createCategoryUseCase: CreateCategoryUseCase
  ) {
    this.edit = false;
    this.isLoading = false;
  }

  ngOnInit() {
    this.categoryForm = this.fb.group(FORM_CATEGORY);
    this.findDataEdit();
  }

  findDataEdit() {
    console.info('inside method fin data edit');
    const params = this.activatedRoute.snapshot['params'];
    if (params['id']) {
      this.edit = true;
      this.getCategoryByIdUseCase
        .execute(params['id'])
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: res => {
            this.category = res;
            console.info('data: ' + res.name);
            this.categoryForm.patchValue(this.category); // update form using domain data fetch
          },
          error: error => console.error(error),
          complete: () => console.info('get category complete'),
        });
    }
  }

  updateCategory() {
    this.setLoading(true);

    this.updateCategoryUseCase
      .execute({ category: this.categoryForm.value, id: this.categoryForm.value.id })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.snackBarService.info('Updated cotegory!');
        },
        error: err => {
          console.error(err);
          this.setLoading(false);
        },
        complete: () => {
          console.info('complete update category');
          this.setLoading(false);
          this.router.navigate(['/pages/catalog/categories'], { relativeTo: this.activatedRoute });
        },
      });
  }

  createCategory() {
    this.setLoading(true);

    this.createCategoryUseCase
      .execute(this.categoryForm.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.snackBarService.success('Created category!');
        },
        error: err => {
          console.error(err);
          this.setLoading(false);
        },
        complete: () => {
          console.info('complete create category');
          this.setLoading(false);
          this.router.navigate(['/pages/catalog/categories'], { relativeTo: this.activatedRoute });
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
    return this.categoryForm.controls;
  }
}
