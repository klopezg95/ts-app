export const createProduct = (
  id: string | number,
  stock?: number,   //parametros por optional con ?
  isNew?: boolean) => {

  return {
    id,
    stock: stock ?? 10, //parametros por defecto con ??
    isNew: isNew ?? true  //parametros por defecto con ??
  }
}


const p1 = createProduct(1, 12, true);
console.log(p1)

const p2 = createProduct(2);
console.log(p2)

const p3 = createProduct(2, 0, false);
console.log(p3)
