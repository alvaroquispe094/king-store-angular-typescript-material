import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { PATH } from '../paths';
import { environment } from 'src/environments/environment';
import { ProductMapper } from '../mappers/product.mapper';
import { ICategoryService } from '../../domain/services/icategory.service';
import { CategoryModel } from '../../domain/models/category.model';
import { CategoryEntity } from '../entities/category.entity';

@Injectable({
  providedIn: 'root',
})
export class CategoryService implements ICategoryService {
  API_BASE = environment.url;
  productMapper = new ProductMapper();

  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<CategoryModel[]> {
    console.log('Url: ' + this.API_BASE + PATH.calalog.products);

    return this.http
      .get<CategoryEntity[]>(this.API_BASE + PATH.calalog.categories)
      .pipe(map(list => list.map(item => CategoryEntity.toDomain(item))));
  }
}
