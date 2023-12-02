import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  public loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  login() {
    console.log('login..');
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
