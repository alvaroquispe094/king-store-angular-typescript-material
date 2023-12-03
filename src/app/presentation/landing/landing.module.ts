import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { LandingPageComponent } from '../../shared/layouts';
import { HomeComponent } from './home/home.component';
import { IProductService } from 'src/app/domain/services/iproduct.service';
import { ProductService } from 'src/app/data/services/product.service';
import { BoxInfoComponent, CardComponent, CarrouselComponent } from '../../shared/components';
import { SigninComponent } from './signin/signin.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [LandingComponent, HomeComponent, SigninComponent, SignupComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    LandingPageComponent,
    CarrouselComponent,
    BoxInfoComponent,
    CardComponent,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule,
    MatOptionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [{ provide: IProductService, useClass: ProductService }],
})
export class LandingModule {}
