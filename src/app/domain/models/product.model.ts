import { Validators } from '@angular/forms';

export interface ProductModel {
  id: number | string;
  name: string;
  description: string;
  price: number;
  stock: string;
  image: string;
  categoryId: number;
  category: string;
  active: boolean;
}

// reactive form validation & initialization values
export const FORM_PRODUCT = {
  id: [''],
  name: ['', [Validators.required]],
  description: ['', [Validators.required, Validators.min(1)]],
  price: ['', [Validators.required, Validators.min(1)]],
  stock: ['', [Validators.min(1)]],
  //image: ['', [Validators.required]],
  categoryId: ['', [Validators.required, Validators.min(1)]],
  active: [false],
};
