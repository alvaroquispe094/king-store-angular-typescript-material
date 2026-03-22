import { Routes } from '@angular/router';
import { LandingComponent } from '../presentation/landing/landing.component';
import { CartComponent } from '../presentation/landing/cart/cart.component';
import { CatalogComponent } from '../presentation/landing/catalog/catalog.component';
import { HomeComponent } from '../presentation/landing/home/home.component';
import { SigninComponent } from '../presentation/landing/signin/signin.component';
import { SignupComponent } from '../presentation/landing/signup/signup.component';
import { ROUTES } from '../shared/common';

export const LANDING_ROUTES: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      { path: ROUTES.landing.home, component: HomeComponent },
      { path: ROUTES.landing.cart, component: CartComponent },
      { path: ROUTES.landing.catalog, component: CatalogComponent },
      { path: ROUTES.landing.sign_in, component: SigninComponent },
      { path: ROUTES.landing.sign_up, component: SignupComponent },
      { path: '', redirectTo: ROUTES.landing.home, pathMatch: 'full' },
    ],
  },
];
