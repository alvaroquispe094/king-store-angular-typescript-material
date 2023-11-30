import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { LandingPageComponent } from '../../shared/layouts';
import { HomeComponent } from './home/home.component';
import { IProductService } from 'src/app/domain/services/iproduct.service';
import { ProductService } from 'src/app/data/services/product.service';
import { CarrouselComponent } from '../../shared/components';

@NgModule({
  declarations: [LandingComponent, HomeComponent],
  imports: [CommonModule, LandingRoutingModule, LandingPageComponent, CarrouselComponent],
  providers: [{ provide: IProductService, useClass: ProductService }],
})
export class LandingModule {}
