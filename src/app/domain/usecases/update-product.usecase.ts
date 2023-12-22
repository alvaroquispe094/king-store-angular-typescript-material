import { Observable } from 'rxjs';
import { UseCase } from '../base/use-case';
import { ProductModel } from '../models/product.model';
import { IProductService } from '../services/iproduct.service';

export class UpdateProductUseCase implements UseCase<unknown, ProductModel> {
  constructor(private productService: IProductService) {}

  execute(params: { product: ProductModel; id: number }): Observable<ProductModel> {
    return this.productService.updateProduct(params.product, params.id);
  }
}
