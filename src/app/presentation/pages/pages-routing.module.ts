import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { ROUTES } from '../../shared/common';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: ROUTES.pages.dashboard,
        component: DashboardComponent,
      },
      {
        path: ROUTES.pages.catalog.root,
        loadChildren: () => import('../catalog/catalog.module').then(m => m.CatalogModule),
      },
      {
        path: ROUTES.pages.users.root,
        loadChildren: () => import('../users/user.module').then(m => m.UserModule),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
