import { Observable } from 'rxjs';
import { UseCase } from '../base/use-case';
import { CategoryModel } from '../models/category.model';
import { ICategoryService } from '../services/icategory.service';

export class CreateCategoryUseCase implements UseCase<CategoryModel, CategoryModel> {
  constructor(private categoryService: ICategoryService) {}

  execute(category: CategoryModel): Observable<CategoryModel> {
    return this.categoryService.createCategory(category);
  }
}
