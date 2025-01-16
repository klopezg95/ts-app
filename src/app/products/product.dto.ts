import { Product } from "./product.model";

export interface createProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

type example = Pick<Product, 'color' | 'description'>

export interface UpdateProductDto extends Partial<createProductDto> { }

type example2 = Required<Product>

export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>> {
  readonly tags: ReadonlyArray<string>
}

type example3 = Readonly<Product>

