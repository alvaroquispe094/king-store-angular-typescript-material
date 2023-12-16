import { CategoryModel } from '../../domain/models/category.model';

export class CategoryEntity {
  readonly id: number;
  readonly name: string;
  readonly active: boolean;

  constructor(id: number, name: string, active: boolean) {
    this.id = id;
    this.name = name;
    this.active = active;
  }

  static toDomain(response: CategoryEntity): CategoryModel {
    return {
      id: response.id,
      name: response.name,
      active: response.active,
    };
  }

  static fromDomain(categoryModel: CategoryModel): CategoryEntity {
    return new CategoryEntity(categoryModel.id, categoryModel.name, categoryModel.active);
  }
}
