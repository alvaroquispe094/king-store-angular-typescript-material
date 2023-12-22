import { Observable } from 'rxjs';
import { UseCase } from '../base/use-case';
import { CategoryModel } from '../models/category.model';
import { ICategoryService } from '../services/icategory.service';

export class GetCategoriesUseCase implements UseCase<void, CategoryModel[]> {
  constructor(private categoryService: ICategoryService) {}

  execute(): Observable<CategoryModel[]> {
    return this.categoryService.getAllCategories();
  }
}
