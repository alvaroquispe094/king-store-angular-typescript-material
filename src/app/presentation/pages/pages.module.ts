import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { AdminLayoutComponent } from '../../shared/layouts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { PanelComponent } from './panel/panel.component';
import { CatalogRoutingModule } from '../catalog/catalog-routing.module';

@NgModule({
  declarations: [PagesComponent, DashboardComponent, PanelComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CatalogRoutingModule,
    AdminLayoutComponent,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
  ],
})
export class PagesModule {}
