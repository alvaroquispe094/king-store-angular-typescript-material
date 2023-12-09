import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { NewUserComponent } from './new-user/new-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [NewUserComponent, UserListComponent, ProfileComponent],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
