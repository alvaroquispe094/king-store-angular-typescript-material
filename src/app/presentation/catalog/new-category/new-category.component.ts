import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { CategoryModel, FORM_CATEGORY } from '../../../domain/models/category.model';
import { FormBuilder, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackBarService, VALIDATIONS } from '../../../shared/common';
import { GetCategoryByIdUseCase } from '../../../domain/usecases/get-category-by-id.usecase';
import { finalize } from 'rxjs';
import { CreateCategoryUseCase } from '../../../domain/usecases/create-category.usecase';
import { UpdateCategoryUseCase } from '../../../domain/usecases/update-category.usecase';

@Component({
  selector: 'app-new-category',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss'],
})
export class NewCategoryComponent implements OnInit {
  public categoryForm!: UntypedFormGroup;

  readonly isLoading = signal(false);
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
  }

  ngOnInit() {
    this.categoryForm = this.fb.group(FORM_CATEGORY);
    this.findDataEdit();
  }

  findDataEdit() {
    const params = this.activatedRoute.snapshot['params'];
    if (params['id']) {
      this.edit = true;
      this.getCategoryByIdUseCase.execute(params['id']).subscribe({
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
    this.isLoading.set(true);

    this.updateCategoryUseCase
      .execute({ category: this.categoryForm.value, id: this.categoryForm.value.id })
      .pipe(finalize(() => this.isLoading.set(false)))
      .subscribe({
        next: () => {
          this.snackBarService.info('Updated cotegory!');
        },
        error: err => {
          console.error(err);
        },
        complete: () => {
          console.info('complete update category');
          this.router.navigate(['/pages/catalog/categories'], { relativeTo: this.activatedRoute });
        },
      });
  }

  createCategory() {
    this.isLoading.set(true);

    this.createCategoryUseCase
      .execute(this.categoryForm.value)
      .pipe(finalize(() => this.isLoading.set(false)))
      .subscribe({
        next: () => {
          this.snackBarService.success('Created category!');
        },
        error: err => {
          console.error(err);
        },
        complete: () => {
          console.info('complete create category');
          this.router.navigate(['/pages/catalog/categories'], { relativeTo: this.activatedRoute });
        },
      });
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
