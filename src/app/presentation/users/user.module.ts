import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { NewUserComponent } from './new-user/new-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { ProfileComponent } from './profile/profile.component';
import { SnackBarService } from '../../shared/common';
import { SnackbarComponent } from '../../shared/components';
import { SmartTableComponent } from '../../shared/components/smart-table/smart-table.component';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [UserComponent, NewUserComponent, UserListComponent, ProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SnackbarComponent,
    RouterModule,
    SmartTableComponent,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatFormFieldModule,
  ],
  providers: [{ provide: SnackBarService, useClass: SnackBarService }],
})
export class UserModule {}
