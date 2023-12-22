import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';

export abstract class IProductService {
  abstract getAllProducts(): Observable<ProductModel[]>;
  abstract getProductById(id: number | string): Observable<ProductModel>;
  abstract createProduct(product: ProductModel): Observable<ProductModel>;
  abstract updateProduct(product: ProductModel, id: number): Observable<ProductModel>;
}
