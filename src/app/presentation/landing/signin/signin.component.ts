import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { SignInModel } from 'src/app/domain/models/sign-in.model';
import { SignInUseCase } from 'src/app/domain/usecases/sign-in.usecase';
import { SnackBarService } from 'src/app/shared/common';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  private destroy$: Subject<void> = new Subject<void>();
  public loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  login?: SignInModel;
  message = 'Sign in Done!';

  constructor(
    public fb: FormBuilder,
    private signInUseCase: SignInUseCase,
    protected router: Router,
    private activatedRoute: ActivatedRoute,
    private snackBarService: SnackBarService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  signIn() {
    console.log('login..');
    this.signInUseCase
      .execute(this.loginForm.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: res => {
          (this.login = res), this.openSnackBar('info');
          this.router.navigate(['/pages/dashboard'], { relativeTo: this.activatedRoute });
        },
        error: error => console.error(error),
        complete: () => console.info('complete login'),
      });
  }

  openSnackBar(type: string) {
    this.snackBarService.open(this.message, type);
  }

  // Custom messages for inputs
  getErrorEmailMessage() {
    if (this.loginForm.get('email')?.errors?.['required']) {
      return '*You must enter a value';
    }
    if (this.loginForm.get('email')?.errors?.['email']) {
      return '*Not a valid email';
    }

    return '';
  }

  getErrorPasswordMessage() {
    if (this.loginForm.get('password')?.errors?.['required']) {
      return '*You must enter a value';
    }
    if (this.loginForm.get('password')?.errors?.['minlength']) {
      return '*password should not be less than 5 words';
    }

    return '';
  }

  // Accessing form control using getters
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
