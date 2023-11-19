export interface ProductModel {
  id: number | string;
  name: string;
  description: string;
  price: number;
  stock: string;
  createdAt?: Date;
  image: string;
  activationStatus: boolean;
}
