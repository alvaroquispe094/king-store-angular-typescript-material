import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IProductService } from '../domain/services/iproduct.service';
import { GetProductsUseCase } from '../domain/usecases/get-products.usecase';
import { GetProductByIdUseCase } from '../domain/usecases/get-product-by-id.usecase';
import { ProductService } from './services/product.service';
import { IAuthService } from '../domain/services/iauth.service';
import { SignInUseCase } from '../domain/usecases/sign-in.usecase';
import { AuthService } from './services/auth.service';
import { SignUpUseCase } from '../domain/usecases/sign-up.usecase';

// get all products
const getProductUseCaseFactory = (userRepo: IProductService) => new GetProductsUseCase(userRepo);
export const getProductsUseCaseProvider = {
  provide: GetProductsUseCase,
  useFactory: getProductUseCaseFactory,
  deps: [IProductService],
};
// get product by id
const getProductByIdUseCaseFactory = (userRepo: IProductService) =>
  new GetProductByIdUseCase(userRepo);
export const getProductByIdUseCaseProvider = {
  provide: GetProductByIdUseCase,
  useFactory: getProductByIdUseCaseFactory,
  deps: [IProductService],
};

// sign in
const signInUseCaseFactory = (userRepo: IAuthService) => new SignInUseCase(userRepo);
export const signInUseCaseProvider = {
  provide: SignInUseCase,
  useFactory: signInUseCaseFactory,
  deps: [IAuthService],
};

// sign up
const signUpUseCaseFactory = (userRepo: IAuthService) => new SignUpUseCase(userRepo);
export const signUpUseCaseProvider = {
  provide: SignUpUseCase,
  useFactory: signUpUseCaseFactory,
  deps: [IAuthService],
};

@NgModule({
  providers: [
    getProductsUseCaseProvider,
    getProductByIdUseCaseProvider,
    signInUseCaseProvider,
    signUpUseCaseProvider,
    { provide: IProductService, useClass: ProductService },
    { provide: IAuthService, useClass: AuthService },
  ],
  imports: [CommonModule, HttpClientModule],
})
export class DataModule {}
