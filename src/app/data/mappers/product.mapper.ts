import { ProductModel } from '../../domain/models/product.model';
import { Mapper } from '../../base/mapper';
import { ProductEntity } from '../entities/product.entity';

export class ProductMapper extends Mapper<ProductEntity, ProductModel> {
  mapFrom(param: ProductEntity): ProductModel {
    return {
      id: param.id,
      name: param.name,
      description: param.description,
      price: param.price,
      stock: param.stock,
      image: param.image,
      category: param.category,
      categoryId: param.categoryId,
      active: param.active,
    };
  }
  mapTo(param: ProductModel): ProductEntity {
    return {
      id: param.id,
      name: param.name,
      description: param.description,
      price: param.price,
      stock: param.stock,
      image: param.image,
      categoryId: param.categoryId,
      category: param.category,
      active: param.active,
    };
  }
}
