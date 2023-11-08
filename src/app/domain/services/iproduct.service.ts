import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';

export abstract class IProductService {
  abstract getAllProducts(): Observable<ProductModel[]>;
  abstract getProductById(id: number | string): Observable<ProductModel>;
}
