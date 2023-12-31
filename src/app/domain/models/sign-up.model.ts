import { Validators } from '@angular/forms';

export interface SignUpModel {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  gender: string;
  birthDate: string;
  phone: string;
  role: string[];
}

// reactive form validation & initialization values
export const FORM_SIGN_UP = {
  firstname: ['', [Validators.required]],
  lastname: ['', [Validators.required]],
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(5)]],
  gender: ['', [Validators.required]],
  birthDate: ['', [Validators.required]],
  phone: ['', [Validators.required]],
};
