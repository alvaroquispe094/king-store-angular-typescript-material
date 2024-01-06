import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './shared/guards/Auth.guard';
import { ROUTES } from './shared/common';

const routes: Routes = [
  {
    path: ROUTES.landing.root,
    loadChildren: () => import('./presentation/landing/landing.module').then(m => m.LandingModule),
  },
  {
    path: ROUTES.pages.root,
    canActivate: [authGuard],
    loadChildren: () => import('./presentation/pages/pages.module').then(m => m.PagesModule),
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
