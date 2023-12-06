import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { PATH } from '../paths';
import { environment } from 'src/environments/environment';
import { IProductService } from '../../domain/services/iproduct.service';
import { ProductModel } from '../../domain/models/product.model';
import { ProductEntity } from '../entities/product.entity';
import { ProductMapper } from '../mappers/product.mapper';

@Injectable({
  providedIn: 'root',
})
export class ProductService implements IProductService {
  API_BASE = environment.url;
  productMapper = new ProductMapper();

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<ProductModel[]> {
    console.log('Url: ' + this.API_BASE + PATH.calalog.products);

    return this.http
      .get<ProductEntity[]>(this.API_BASE + PATH.calalog.products)
      .pipe(map(list => list.map(item => this.productMapper.mapFrom(item))));
  }

  getProductById(id: number): Observable<ProductModel> {
    return this.http
      .get<ProductEntity>(this.API_BASE + PATH.calalog.products + `/${id}`)
      .pipe(map(this.productMapper.mapFrom));
  }
}
