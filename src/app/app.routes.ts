import { Routes } from '@angular/router';
import { authGuard } from './shared/guards/Auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./routes/landing.routes').then(m => m.LANDING_ROUTES),
  },
  {
    path: 'pages',
    canActivate: [authGuard],
    loadChildren: () => import('./routes/pages.routes').then(m => m.PAGES_ROUTES),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
