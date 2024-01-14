import { Observable } from 'rxjs';
import { UseCase } from '../base/use-case';
import { CategoryModel } from '../models/category.model';
import { ICategoryService } from '../services/icategory.service';

export class GetCategoryByIdUseCase implements UseCase<number, CategoryModel> {
  constructor(private categoryService: ICategoryService) {}

  execute(id: number): Observable<CategoryModel> {
    return this.categoryService.getCategoryById(id);
  }
}
