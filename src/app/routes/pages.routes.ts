import { Routes } from '@angular/router';
import { DashboardComponent } from '../presentation/pages/dashboard/dashboard.component';
import { PagesComponent } from '../presentation/pages/pages.component';
import { ROUTES } from '../shared/common';

export const PAGES_ROUTES: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: ROUTES.pages.dashboard, component: DashboardComponent },
      {
        path: ROUTES.pages.catalog.root,
        loadChildren: () => import('./catalog.routes').then(m => m.CATALOG_ROUTES),
      },
      {
        path: ROUTES.pages.users.root,
        loadChildren: () => import('./users.routes').then(m => m.USER_ROUTES),
      },
      { path: '', redirectTo: ROUTES.pages.dashboard, pathMatch: 'full' },
    ],
  },
];
