import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { ROUTES } from '../../shared/common';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: ROUTES.landing.home,
        component: HomeComponent,
      },
      {
        path: ROUTES.landing.cart,
        component: CartComponent,
      },
      {
        path: ROUTES.landing.catalog,
        component: CatalogComponent,
      },
      {
        path: ROUTES.landing.sign_in,
        component: SigninComponent,
      },
      {
        path: ROUTES.landing.sign_up,
        component: SignupComponent,
      },
      {
        path: '',
        redirectTo: ROUTES.landing.home,
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {}
