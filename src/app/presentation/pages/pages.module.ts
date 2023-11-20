import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { AdminPageComponent } from '../../shared/layouts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTreeModule } from '@angular/material/tree';
import { PanelComponent } from './panel/panel.component';
import { NavigationComponent, HeaderComponent } from '../../shared/components';

@NgModule({
  declarations: [PagesComponent, DashboardComponent, PanelComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    AdminPageComponent,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTreeModule,
    NavigationComponent,
    HeaderComponent,
  ],
})
export class PagesModule {}
