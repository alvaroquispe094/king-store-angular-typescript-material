import { CommonModule } from '@angular/common';
import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UserModel } from '../../../domain/models/user.model';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { GetUsersUseCase } from '../../../domain/usecases/get-users-by-role.usecase';
import { SmartTableComponent } from '../../../shared/components/smart-table/smart-table.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, RouterLink, SmartTableComponent],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  readonly users = signal<UserModel[]>([]);

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
          .pipe(takeUntilDestroyed(this.destroyRef))
          .subscribe({
            next: res => this.users.set(res),
            error: error => console.error(error),
            complete: () => console.info('complete'),
          });
      }
    });
  }

  navigateToEditUser = (row: Record<string, unknown>): void => {
    const id = Number(row['id']);
    if (Number.isNaN(id)) {
      return;
    }

    this.router.navigate(['/pages/user/edit_user', id], { relativeTo: this.activatedRoute });
  };
}
