import { faker } from '@faker-js/faker';
import { addProduct, products, findProducts, updateProduct } from './products/product.service'

for (let index = 0; index < 10; index++) {
  addProduct({

    description: faker.commerce.productDescription(),
    image: faker.image.avatar(),
    color: faker.color.cssSupportedFunction(),
    price: faker.finance.amount(),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    isNew: faker.datatype.boolean(),
    tags: ([faker.lorem.word(), faker.lorem.word(), faker.lorem.word()]),
    title: faker.commerce.productName(),
    stock: faker.number.int({ min: 10, max: 100 }),
    categoryId: faker.string.uuid(),

  })
}
console.log(products)
const product = products[0];
updateProduct(product.id, {
  title: 'new title',
  stock: 80
})

findProducts({
  stock: 10,
  color: 'red',
  createdAt: new Date(),
  isNew: true,
  tags: ['as']
})


