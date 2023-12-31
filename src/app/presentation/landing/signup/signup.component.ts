import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup } from '@angular/forms';
import { SignUpUseCase } from '../../../domain/usecases/sign-up.usecase';
import { SnackBarService, VALIDATIONS } from '../../../shared/common';
import { Subject, takeUntil } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { FORM_SIGN_UP } from '../../../domain/models/sign-up.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  private destroy$: Subject<void> = new Subject<void>();
  isLoading = false;

  public signupForm!: UntypedFormGroup;

  constructor(
    public fb: FormBuilder,
    protected router: Router,
    private activatedRoute: ActivatedRoute,
    private signUpUseCase: SignUpUseCase,
    private snackBarService: SnackBarService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group(FORM_SIGN_UP);
  }

  signup() {
    console.log('Signup..');
    this.setLoading(true);
    this.signUpUseCase
      .execute(this.signupForm.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.snackBarService.success('Sign up Done!');
          this.router.navigate(['/sign_in'], { relativeTo: this.activatedRoute });
        },
        error: err => {
          console.error(err);
          this.setLoading(false);
          this.snackBarService.error('Error sign up');
        },
        complete: () => {
          this.setLoading(false);
          console.info('complete register');
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

    return '';
  }

  // Accessing form control
  get fg() {
    return this.signupForm.controls;
  }
}
