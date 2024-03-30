import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { UserModel } from '../../../domain/models/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { GetUsersUseCase } from '../../../domain/usecases/get-users-by-role.usecase';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  private destroy$: Subject<void> = new Subject<void>();
  users!: UserModel[];

  displayedColumns: string[] = [
    'firstname',
    'lastname',
    'email',
    'password',
    'gender',
    'birthDate',
    'phone',
    'role',
  ];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private getUsersByRolesUseCase: GetUsersUseCase
  ) {}

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.activatedRoute.paramMap.subscribe(params => {
      const type = params.get('type') ?? ''; // Provide a default value when params.get('type') is null
      if (type) {
        this.getUsersByRolesUseCase
          .execute(type)
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: res => (this.users = res),
            error: error => console.error(error),
            complete: () => console.info('complete'),
          });
      }
    });
  }

  navigateToEditUser = (id: number): void => {
    //callback code here
    this.router.navigate;
    console.log('Id user: ' + id);
    this.router.navigate(['/pages/users/edit_user', id], { relativeTo: this.activatedRoute });
  };
}
