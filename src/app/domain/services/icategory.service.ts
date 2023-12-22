import { Observable } from 'rxjs';
import { CategoryModel } from '../models/category.model';

export abstract class ICategoryService {
  abstract getAllCategories(): Observable<CategoryModel[]>;
}
