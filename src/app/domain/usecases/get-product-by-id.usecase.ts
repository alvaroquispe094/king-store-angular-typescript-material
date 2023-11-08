import { Observable } from 'rxjs';
import { UseCase } from '../base/use-case';
import { ProductModel } from '../models/product.model';
import { IProductService } from '../services/iproduct.service';

export class GetProductByIdUseCase implements UseCase<number, ProductModel> {
  constructor(private productService: IProductService) {}

  execute(id: number): Observable<ProductModel> {
    return this.productService.getProductById(id);
  }
}
