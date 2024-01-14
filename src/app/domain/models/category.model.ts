import { Validators } from '@angular/forms';

export interface CategoryModel {
  id: number;
  name: string;
  active: boolean;
}

// reactive form validation & initialization values
export const FORM_CATEGORY = {
  id: [''],
  name: ['', [Validators.required]],
  active: [false],
};
