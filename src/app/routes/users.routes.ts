import { Routes } from '@angular/router';
import { NewUserComponent } from '../presentation/users/new-user/new-user.component';
import { UserComponent } from '../presentation/users/user.component';
import { UserListComponent } from '../presentation/users/user-list/user-list.component';
import { ROUTES } from '../shared/common';

export const USER_ROUTES: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: `${ROUTES.pages.users.users}/:type`, component: UserListComponent },
      { path: ROUTES.pages.users.new_user, component: NewUserComponent },
      { path: `${ROUTES.pages.users.edit_user}/:id`, component: NewUserComponent },
      { path: '', redirectTo: `${ROUTES.pages.users.users}/ROLE_CUSTOMER`, pathMatch: 'full' },
      { path: ROUTES.pages.users.users, redirectTo: `${ROUTES.pages.users.users}/ROLE_CUSTOMER`, pathMatch: 'full' },
    ],
  },
];
