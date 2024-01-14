import { Observable } from 'rxjs';
import { CategoryModel } from '../models/category.model';

export abstract class ICategoryService {
  abstract getAllCategories(): Observable<CategoryModel[]>;
  abstract getCategoryById(id: number | string): Observable<CategoryModel>;
  abstract createCategory(category: CategoryModel): Observable<CategoryModel>;
  abstract updateCategory(Category: CategoryModel, id: number): Observable<CategoryModel>;
}
