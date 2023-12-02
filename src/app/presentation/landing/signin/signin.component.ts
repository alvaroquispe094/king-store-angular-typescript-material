import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(5)]);
  loginForm!: FormGroup;

  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    console.log('login..');
  }

  login() {
    console.log('login..');
  }

  getErrorEmailMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorPasswordMessage() {
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }

    return this.password.hasError('minLength') ? 'password should not be less than 2 words' : '';
  }

  // Accessing form control using getters
  /*get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }*/
}
