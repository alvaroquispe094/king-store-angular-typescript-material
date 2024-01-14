import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { IProductService } from '../domain/services/iproduct.service';
import { GetProductsUseCase } from '../domain/usecases/get-products.usecase';
import { GetProductByIdUseCase } from '../domain/usecases/get-product-by-id.usecase';
import { ProductService } from './services/product.service';
import { IAuthService } from '../domain/services/iauth.service';
import { SignInUseCase } from '../domain/usecases/sign-in.usecase';
import { AuthService } from './services/auth.service';
import { SignUpUseCase } from '../domain/usecases/sign-up.usecase';
import { JwtInterceptor } from '../shared/common/JwtInterceptor';
import { ICategoryService } from '../domain/services/icategory.service';
import { GetCategoriesUseCase } from '../domain/usecases/get-categories.usecase';
import { CategoryService } from './services/category.service';
import { CreateProductUseCase } from '../domain/usecases/create-product.usecase';
import { UpdateProductUseCase } from '../domain/usecases/update-product.usecase';
import { GetCategoryByIdUseCase } from '../domain/usecases/get-category-by-id.usecase';
import { CreateCategoryUseCase } from '../domain/usecases/create-category.usecase';
import { UpdateCategoryUseCase } from '../domain/usecases/update-category.usecase';

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

// create product
const createProductUseCaseFactory = (userRepo: IProductService) =>
  new CreateProductUseCase(userRepo);
export const createProductUseCaseProvider = {
  provide: CreateProductUseCase,
  useFactory: createProductUseCaseFactory,
  deps: [IProductService],
};

// update product
const updateProductUseCaseFactory = (userRepo: IProductService) =>
  new UpdateProductUseCase(userRepo);
export const updateProductUseCaseProvider = {
  provide: UpdateProductUseCase,
  useFactory: updateProductUseCaseFactory,
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

// get all categories
const getCategoriesUseCaseFactory = (userRepo: ICategoryService) =>
  new GetCategoriesUseCase(userRepo);
export const getCategoriesUseCaseProvider = {
  provide: GetCategoriesUseCase,
  useFactory: getCategoriesUseCaseFactory,
  deps: [ICategoryService],
};

// get category by id
const getCategoryByIdUseCaseFactory = (userRepo: ICategoryService) =>
  new GetCategoryByIdUseCase(userRepo);
export const getCategoryByIdUseCaseProvider = {
  provide: GetCategoryByIdUseCase,
  useFactory: getCategoryByIdUseCaseFactory,
  deps: [ICategoryService],
};

// create category
const createCategoryUseCaseFactory = (userRepo: ICategoryService) =>
  new CreateCategoryUseCase(userRepo);
export const createCategoryUseCaseProvider = {
  provide: CreateCategoryUseCase,
  useFactory: createCategoryUseCaseFactory,
  deps: [ICategoryService],
};

// update category
const updateCategoryUseCaseFactory = (userRepo: ICategoryService) =>
  new UpdateCategoryUseCase(userRepo);
export const updateCategoryUseCaseProvider = {
  provide: UpdateCategoryUseCase,
  useFactory: updateCategoryUseCaseFactory,
  deps: [ICategoryService],
};

@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    getProductsUseCaseProvider,
    getProductByIdUseCaseProvider,
    createProductUseCaseProvider,
    updateProductUseCaseProvider,
    signInUseCaseProvider,
    signUpUseCaseProvider,
    getCategoriesUseCaseProvider,
    getCategoryByIdUseCaseProvider,
    createCategoryUseCaseProvider,
    updateCategoryUseCaseProvider,
    { provide: IProductService, useClass: ProductService },
    { provide: IAuthService, useClass: AuthService },
    { provide: ICategoryService, useClass: CategoryService },
  ],
  imports: [CommonModule, HttpClientModule],
})
export class DataModule {}
