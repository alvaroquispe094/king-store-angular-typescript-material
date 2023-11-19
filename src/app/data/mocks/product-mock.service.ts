import { Injectable } from '@angular/core';
import { of as observableOf, Observable, map } from 'rxjs';

import { IProductService } from '../../domain/services/iproduct.service';
import { ProductModel } from '../../domain/models/product.model';
import { ProductMapper } from '../mappers/product.mapper';

@Injectable({
  providedIn: 'root',
})
export class ProductMockService implements IProductService {
  productMapper = new ProductMapper();

  private products = [
    {
      id: 1,
      name: 'sdgdg',
      description: 'description test',
      price: 1,
      stock: '55',
      createdAt: new Date(),
      image: 'sdgsdg',
      activationStatus: true,
    },
    {
      id: 2,
      name: 'sdgdg',
      description: 'jjjjjjjjjjjjjjjjjjjjjj',
      price: 2,
      stock: '67',
      createdAt: new Date(),
      image: 'sdgsdg',
      activationStatus: false,
    },
    {
      id: 3,
      name: 'sdgdg',
      description: 'aaaaaaaaaaaaaa',
      price: 3,
      stock: 'dgssd',
      createdAt: new Date(),
      image: 'wehjeterery',
      activationStatus: false,
    },
    {
      id: 4,
      name: 'sdgdg',
      description: 'sdgsdg',
      price: 4,
      stock: '463',
      createdAt: new Date(),
      image: 'trurtrtrurtu',
      activationStatus: true,
    },
    {
      id: 4,
      name: 'sdgdg',
      description: 'sdgsdg',
      price: 4,
      stock: '463',
      createdAt: new Date(),
      image: 'trurtrtrurtu',
      activationStatus: true,
    },
    {
      id: 4,
      name: 'sdgdg',
      description: 'sdgsdg',
      price: 4,
      stock: '463',
      createdAt: new Date(),
      image: 'trurtrtrurtu',
      activationStatus: true,
    },
    {
      id: 4,
      name: 'sdgdg',
      description: 'sdgsdg',
      price: 4,
      stock: '463',
      createdAt: new Date(),
      image: 'trurtrtrurtu',
      activationStatus: true,
    },
    {
      id: 4,
      name: 'sdgdg',
      description: 'sdgsdg',
      price: 4,
      stock: '463',
      createdAt: new Date(),
      image: 'trurtrtrurtu',
      activationStatus: true,
    },
    {
      id: 4,
      name: 'sdgdg',
      description: 'sdgsdg',
      price: 4,
      stock: '463',
      createdAt: new Date(),
      image: 'trurtrtrurtu',
      activationStatus: true,
    },
    {
      id: 4,
      name: 'sdgdg',
      description: 'sdgsdg',
      price: 4,
      stock: '463',
      createdAt: new Date(),
      image: 'trurtrtrurtu',
      activationStatus: true,
    },
    {
      id: 4,
      name: 'sdgdg',
      description: 'sdgsdg',
      price: 4,
      stock: '463',
      createdAt: new Date(),
      image: 'trurtrtrurtu',
      activationStatus: true,
    },
    {
      id: 4,
      name: 'sdgdg',
      description: 'sdgsdg',
      price: 4,
      stock: '463',
      createdAt: new Date(),
      image: 'trurtrtrurtu',
      activationStatus: true,
    },
    {
      id: 4,
      name: 'sdgdg',
      description: 'sdgsdg',
      price: 4,
      stock: '463',
      createdAt: new Date(),
      image: 'trurtrtrurtu',
      activationStatus: true,
    },
    {
      id: 4,
      name: 'sdgdg',
      description: 'sdgsdg',
      price: 4,
      stock: '463',
      createdAt: new Date(),
      image: 'trurtrtrurtu',
      activationStatus: true,
    },
  ];

  getAllProducts(): Observable<ProductModel[]> {
    return observableOf(this.products).pipe(
      map(list => list.map(item => this.productMapper.mapFrom(item)))
    );
  }

  getProductById(id: number): Observable<ProductModel> {
    return observableOf(this.products[id]).pipe(map(this.productMapper.mapFrom));
  }
}
