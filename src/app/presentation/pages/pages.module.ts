import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { AdminPageComponent } from '../../shared/layouts';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [PagesComponent, DashboardComponent],
  imports: [CommonModule, PagesRoutingModule, AdminPageComponent],
})
export class PagesModule {}
