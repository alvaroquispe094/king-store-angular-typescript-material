import { Observable } from 'rxjs';
import { UseCase } from '../base/use-case';
import { ProductModel } from '../models/product.model';
import { IProductService } from '../services/iproduct.service';

export class CreateProductUseCase implements UseCase<ProductModel, void> {
  constructor(private productService: IProductService) {}

  execute(product: ProductModel): Observable<void> {
    return this.productService.createProduct(product);
  }
}
