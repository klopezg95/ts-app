/**
  Partial & Required en TS
  Estos dos tipos de datos nos sirven para declarar que todos los campos de una interfaz son opcionales u obligatorios.
 */

import { faker } from '@faker-js/faker';
import { Product } from './product.model'
import { createProductDto, UpdateProductDto, FindProductDto } from './product.dto'

export const products: Product[] = [];

export const addProduct = (data: createProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  }
  products.push(newProduct)
  return newProduct;
}
export const updateProduct = (id: Product['id'], changes: UpdateProductDto): Product => {
  const index = products.findIndex(item => item.id === id)
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes
  }
  return products[index]

}
// export const deleteProduct = (id: string) => {
//   products.filter(product => product.id !== id)
//   //code
// }

export const findProducts = (dto: FindProductDto): Product[] => {
  // dto.color = 'blue',
  // dto.isNew = true
  // dto.tags = [];
  // dto.tags?.pop()
  // dto.tags?.push()
  return products
}

