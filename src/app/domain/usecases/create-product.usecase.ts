import { Observable } from 'rxjs';
import { UseCase } from '../base/use-case';
import { ProductModel } from '../models/product.model';
import { IProductService } from '../services/iproduct.service';

export class CreateProductUseCase implements UseCase<ProductModel, ProductModel> {
  constructor(private productService: IProductService) {}

  execute(product: ProductModel): Observable<ProductModel> {
    return this.productService.createProduct(product);
  }
}
