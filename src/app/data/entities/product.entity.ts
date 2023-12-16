import { CategoryEntity } from './category.entity';

export interface ProductEntity {
  id: number | string;
  name: string;
  description: string;
  price: number;
  stock: string;
  image: string;
  category: CategoryEntity;
  active: boolean;
}
