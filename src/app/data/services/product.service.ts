import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { IProductService } from '../../domain/services/iproduct.service';
import { ProductModel } from '../../domain/models/product.model';
import { ProductEntity } from '../entities/product.entity';
import { ProductMapper } from '../mappers/product.mapper';

@Injectable({
  providedIn: 'root',
})
export class ProductService implements IProductService {
  productMapper = new ProductMapper();

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<ProductModel[]> {
    return this.http
      .get<ProductEntity[]>('https://example.com/books')
      .pipe(map(list => list.map(item => this.productMapper.mapFrom(item))));
  }

  getProductById(id: number): Observable<ProductModel> {
    return this.http
      .get<ProductEntity>(`https://example.com/books/${id}`)
      .pipe(map(this.productMapper.mapFrom));
  }
}
