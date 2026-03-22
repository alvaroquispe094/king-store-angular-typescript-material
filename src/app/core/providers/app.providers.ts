import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Provider } from '@angular/core';
import { AuthService } from '../../data/services/auth.service';
import { CategoryService } from '../../data/services/category.service';
import { ProductService } from '../../data/services/product.service';
import { UserService } from '../../data/services/user.service';
import { IAuthService } from '../../domain/services/iauth.service';
import { ICategoryService } from '../../domain/services/icategory.service';
import { IProductService } from '../../domain/services/iproduct.service';
import { IUserService } from '../../domain/services/iuser.service';
import { CreateCategoryUseCase } from '../../domain/usecases/create-category.usecase';
import { CreateProductUseCase } from '../../domain/usecases/create-product.usecase';
import { CreateUserUseCase } from '../../domain/usecases/create-user.usecase';
import { GetCategoriesUseCase } from '../../domain/usecases/get-categories.usecase';
import { GetCategoryByIdUseCase } from '../../domain/usecases/get-category-by-id.usecase';
import { GetProductByIdUseCase } from '../../domain/usecases/get-product-by-id.usecase';
import { GetProductsUseCase } from '../../domain/usecases/get-products.usecase';
import { GetUserByIdUseCase } from '../../domain/usecases/get-user-by-id.usecase';
import { GetUsersUseCase } from '../../domain/usecases/get-users-by-role.usecase';
import { SignInUseCase } from '../../domain/usecases/sign-in.usecase';
import { SignUpUseCase } from '../../domain/usecases/sign-up.usecase';
import { UpdateCategoryUseCase } from '../../domain/usecases/update-category.usecase';
import { UpdateProductUseCase } from '../../domain/usecases/update-product.usecase';
import { UpdateUserUseCase } from '../../domain/usecases/update-user.usecase';
import { JwtInterceptor } from '../../shared/common/JwtInterceptor';

export const APP_PROVIDERS: Provider[] = [
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  { provide: IProductService, useClass: ProductService },
  { provide: IAuthService, useClass: AuthService },
  { provide: ICategoryService, useClass: CategoryService },
  { provide: IUserService, useClass: UserService },
  {
    provide: GetProductsUseCase,
    useFactory: (productService: IProductService) => new GetProductsUseCase(productService),
    deps: [IProductService],
  },
  {
    provide: GetProductByIdUseCase,
    useFactory: (productService: IProductService) => new GetProductByIdUseCase(productService),
    deps: [IProductService],
  },
  {
    provide: CreateProductUseCase,
    useFactory: (productService: IProductService) => new CreateProductUseCase(productService),
    deps: [IProductService],
  },
  {
    provide: UpdateProductUseCase,
    useFactory: (productService: IProductService) => new UpdateProductUseCase(productService),
    deps: [IProductService],
  },
  {
    provide: SignInUseCase,
    useFactory: (authService: IAuthService) => new SignInUseCase(authService),
    deps: [IAuthService],
  },
  {
    provide: SignUpUseCase,
    useFactory: (authService: IAuthService) => new SignUpUseCase(authService),
    deps: [IAuthService],
  },
  {
    provide: GetCategoriesUseCase,
    useFactory: (categoryService: ICategoryService) => new GetCategoriesUseCase(categoryService),
    deps: [ICategoryService],
  },
  {
    provide: GetCategoryByIdUseCase,
    useFactory: (categoryService: ICategoryService) => new GetCategoryByIdUseCase(categoryService),
    deps: [ICategoryService],
  },
  {
    provide: CreateCategoryUseCase,
    useFactory: (categoryService: ICategoryService) => new CreateCategoryUseCase(categoryService),
    deps: [ICategoryService],
  },
  {
    provide: UpdateCategoryUseCase,
    useFactory: (categoryService: ICategoryService) => new UpdateCategoryUseCase(categoryService),
    deps: [ICategoryService],
  },
  {
    provide: GetUsersUseCase,
    useFactory: (userService: IUserService) => new GetUsersUseCase(userService),
    deps: [IUserService],
  },
  {
    provide: GetUserByIdUseCase,
    useFactory: (userService: IUserService) => new GetUserByIdUseCase(userService),
    deps: [IUserService],
  },
  {
    provide: CreateUserUseCase,
    useFactory: (userService: IUserService) => new CreateUserUseCase(userService),
    deps: [IUserService],
  },
  {
    provide: UpdateUserUseCase,
    useFactory: (userService: IUserService) => new UpdateUserUseCase(userService),
    deps: [IUserService],
  },
];
