import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GetProductByIdUseCase } from '../../../domain/usecases/get-product-by-id.usecase';
import { Subject, takeUntil } from 'rxjs';
import { ProductModel } from '../../../domain/models/product.model';

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
    category: new FormControl(''),
    categoryName: new FormControl(''),
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
    category: { id: 0, name: '', active: true },
    categoryName: '',
    active: true,
  };
  selected = 'op2';

  op1 = 'op1';
  op2 = 'op2';

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private getProductByIdUseCase: GetProductByIdUseCase
  ) {}

  ngOnInit(): void {
    //this.validateForm();

    const params = this.activatedRoute.snapshot.params;
    console.log('id from param:' + params['id']);

    if (params['id']) {
      this.getProductByIdUseCase
        .execute(params['id'])
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: res => {
            this.product = res;
            //console.log('catogory id:' + this.product['category']['id']);
            this.validateForm();
          },
          error: error => console.error(error),
          complete: () => console.info('complete'),
        });
    }
  }

  validateForm() {
    this.productForm = this.fb.group({
      id: this.product.id,
      name: [this.product.name, [Validators.required]],
      description: [this.product.description, [Validators.required, Validators.min(1)]],
      price: [this.product.price, [Validators.required, Validators.min(1)]],
      stock: [this.product.stock, [Validators.min(1)]],
      image: [this.product.image, [Validators.required]],
      category: [this.product.category.id, [Validators.required, Validators.min(1)]],
      active: true,
    });

    //this.productForm.patchValue(this.product);
  }

  saveProduct() {
    console.log('save..');

    this.setLoading(true);
    /*this.signInUseCase
      .execute(this.loginForm.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: res => {
          this.storageService.saveUser(res);
          (this.login = res), this.openSnackBar('Sign in Done!', 'info');
          this.router.navigate(['/pages/dashboard'], { relativeTo: this.activatedRoute });
        },
        error: err => {
          console.error(err);
          this.setLoading(false);
          this.openSnackBar('Bad credentials', 'error');
        },
        complete: () => {
          this.setLoading(false);
          console.info('complete login');
        },
      });*/
  }

  setLoading(value: boolean) {
    this.isLoading = value;
  }
}
