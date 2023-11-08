import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { LandingPageComponent } from '../../shared/layouts';
import { HomeComponent } from './home/home.component';
import { IProductService } from 'src/app/domain/services/iproduct.service';
import { ProductMockService } from 'src/app/data/mocks/product-mock.service';

@NgModule({
  declarations: [LandingComponent, HomeComponent],
  imports: [CommonModule, LandingRoutingModule, LandingPageComponent],
  providers: [{ provide: IProductService, useClass: ProductMockService }],
})
export class LandingModule {}
