import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { SignUpUseCase } from '../../../domain/usecases/sign-up.usecase';
import { SnackBarService, VALIDATIONS } from '../../../shared/common';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { FORM_USER } from '../../../domain/models/user.model';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  readonly isLoading = signal(false);

  public signupForm!: UntypedFormGroup;

  constructor(
    public fb: FormBuilder,
    protected router: Router,
    private activatedRoute: ActivatedRoute,
    private signUpUseCase: SignUpUseCase,
    private snackBarService: SnackBarService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group(FORM_USER);
  }

  signup() {
    this.isLoading.set(true);
    this.signUpUseCase
      .execute(this.signupForm.value)
      .pipe(finalize(() => this.isLoading.set(false)))
      .subscribe({
        next: () => {
          this.snackBarService.success('Sign up Done!');
          this.router.navigate(['/sign_in'], { relativeTo: this.activatedRoute });
        },
        error: err => {
          console.error(err);
          this.snackBarService.error('Error sign up');
        },
        complete: () => console.info('complete register'),
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

    return '';
  }

  // Accessing form control
  get fg() {
    return this.signupForm.controls;
  }
}
