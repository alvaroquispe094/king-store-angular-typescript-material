import { Observable } from 'rxjs';
import { UseCase } from '../base/use-case';
import { ProductModel } from '../models/product.model';
import { IProductService } from '../services/iproduct.service';

export class GetProductsUseCase implements UseCase<void, ProductModel[]> {
  constructor(private productService: IProductService) {}

  execute(): Observable<ProductModel[]> {
    return this.productService.getAllProducts();
  }
}
