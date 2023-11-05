import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { LandingPageComponent } from '../../shared/layouts';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [LandingComponent, HomeComponent],
  imports: [CommonModule, LandingRoutingModule, LandingPageComponent],
})
export class LandingModule {}
