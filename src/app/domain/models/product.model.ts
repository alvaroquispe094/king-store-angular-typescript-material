import { CategoryModel } from './category.model';

export interface ProductModel {
  id: number | string;
  name: string;
  description: string;
  price: number;
  stock: string;
  image: string;
  category: CategoryModel;
  categoryName: string;
  active: boolean;
}
