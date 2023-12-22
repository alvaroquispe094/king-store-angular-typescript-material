export interface ProductEntity {
  id: number | string;
  name: string;
  description: string;
  price: number;
  stock: string;
  image: string;
  categoryId: number;
  category: string;
  active: boolean;
}
