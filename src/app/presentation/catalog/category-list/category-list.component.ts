import { CommonModule } from '@angular/common';
import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CategoryModel } from '../../../domain/models/category.model';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { GetCategoriesUseCase } from '../../../domain/usecases/get-categories.usecase';
import { SmartTableComponent } from '../../../shared/components/smart-table/smart-table.component';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, RouterLink, SmartTableComponent],
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  readonly categories = signal<CategoryModel[]>([]);
  displayedColumns: string[] = ['id', 'name', 'active'];

  constructor(
    private getCategoriesUseCase: GetCategoriesUseCase,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos() {
    this.getCategoriesUseCase
      .execute()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: res => this.categories.set(res),
        error: error => console.error(error),
        complete: () => console.info('complete'),
      });
  }

  myCallbackFunction = (row: Record<string, unknown>): void => {
    const id = Number(row['id']);
    if (Number.isNaN(id)) {
      return;
    }

    this.router.navigate(['/pages/catalog/edit_category', id], { relativeTo: this.activatedRoute });
  };
}
