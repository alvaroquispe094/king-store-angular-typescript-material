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
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MatOptionModule,
} from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AuthService } from '../../data/services/auth.service';
import { IAuthService } from '../../domain/services/iauth.service';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

const MY_DATE_FORMAT = {
  parse: {
    dateInput: 'DD/MM/YYYY', // this is how your date will be parsed from Input
  },
  display: {
    dateInput: 'DD/MM/YYYY', // this is how your date will get displayed on the Input
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

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
  providers: [
    { provide: IProductService, useClass: ProductService },
    { provide: IAuthService, useClass: AuthService },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMAT },
  ],
})
export class LandingModule {}
