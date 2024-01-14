import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CategoryModel } from '../../../domain/models/category.model';
import { Router, ActivatedRoute } from '@angular/router';
import { GetCategoriesUseCase } from '../../../domain/usecases/get-categories.usecase';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  private destroy$: Subject<void> = new Subject<void>();
  categories!: CategoryModel[];
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
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: res => (this.categories = res),
        error: error => console.error(error),
        complete: () => console.info('complete'),
      });
  }

  myCallbackFunction = (id: number): void => {
    //callback code here
    this.router.navigate;
    console.log('Id category: ' + id);
    this.router.navigate(['/pages/catalog/edit_category', id], { relativeTo: this.activatedRoute });
  };
}
