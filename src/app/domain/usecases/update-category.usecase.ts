import { Observable } from 'rxjs';
import { UseCase } from '../base/use-case';
import { CategoryModel } from '../models/category.model';
import { ICategoryService } from '../services/icategory.service';

export class UpdateCategoryUseCase implements UseCase<unknown, CategoryModel> {
  constructor(private categoryService: ICategoryService) {}

  execute(params: { category: CategoryModel; id: number }): Observable<CategoryModel> {
    return this.categoryService.updateCategory(params.category, params.id);
  }
}
