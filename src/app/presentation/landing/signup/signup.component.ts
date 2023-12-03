import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public signupForm: FormGroup = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    gender: new FormControl(''),
    birthDate: new FormControl(''),
    phone: new FormControl(''),
  });

  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      gender: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    });
  }

  signup() {
    console.log('Signup..');
  }

  // Custom messages for inputs
  getErrorFirstnameMessage() {
    if (this.signupForm.get('firstname')?.errors?.['required']) {
      return '*You must enter a value';
    }

    return '';
  }
  getErrorLastnameMessage() {
    if (this.signupForm.get('lastname')?.errors?.['required']) {
      return '*You must enter a value';
    }

    return '';
  }
  getErrorEmailMessage() {
    if (this.signupForm.get('email')?.errors?.['required']) {
      return '*You must enter a value';
    }
    if (this.signupForm.get('email')?.errors?.['email']) {
      return '*Not a valid email';
    }

    return '';
  }
  getErrorPasswordMessage() {
    if (this.signupForm.get('password')?.errors?.['required']) {
      return '*You must enter a value';
    }
    if (this.signupForm.get('password')?.errors?.['minlength']) {
      return '*password should not be less than 5 words';
    }

    return '';
  }
  getErrorGenderMessage() {
    if (this.signupForm.get('gender')?.errors?.['required']) {
      return '*You must enter a value';
    }

    return '';
  }
  getErrorBirthDateMessage() {
    if (this.signupForm.get('birthDate')?.errors?.['required']) {
      return '*You must enter a value';
    }

    return '';
  }
  getErrorPhoneMessage() {
    if (this.signupForm.get('phone')?.errors?.['required']) {
      return '*You must enter a value';
    }

    return '';
  }

  // Accessing form control using getters
  get firstname() {
    return this.signupForm.get('firstname');
  }
  get lastname() {
    return this.signupForm.get('lastname');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get password() {
    return this.signupForm.get('password');
  }
  get gender() {
    return this.signupForm.get('gender');
  }
  get birthDate() {
    return this.signupForm.get('birthDate');
  }
  get phone() {
    return this.signupForm.get('phone');
  }
}
