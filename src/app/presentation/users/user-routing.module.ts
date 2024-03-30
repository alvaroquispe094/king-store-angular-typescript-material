import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { ROUTES } from '../../shared/common';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: ROUTES.pages.users.users + `/:type`,
        component: UserListComponent,
      },
      {
        path: ROUTES.pages.users.new_user,
        component: NewUserComponent,
      },
      {
        path: ROUTES.pages.users.edit_user + `/:id`,
        component: NewUserComponent,
      },
      {
        path: '',
        redirectTo: ROUTES.pages.users.users + `/customer`,
        pathMatch: 'full',
      },
      {
        path: ROUTES.pages.users.users,
        redirectTo: ROUTES.pages.users.users + `/customer`,
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
