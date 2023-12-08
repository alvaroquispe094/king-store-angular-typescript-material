import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './shared/guards/Auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./presentation/landing/landing.module').then(m => m.LandingModule),
  },
  {
    path: 'pages',
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
