/**
 * Las tuplas nos sirven para hacer un array fuertemente tipado especificando el tipo de dato de cada elemento del array así como la cantidad de elementos.
 */
const prices: (number | string)[] = [1, 3, 2, 2, 2, 'asd']
prices.push(1)
prices.push('4')
//METODO PARA ESTABLECER SOLO 2 DATOS EN EL ARRAY Y ESTRICTAMENTE EN EL ORDEN QUE SE PIDE STRIN Y NUMBER (TUPLES)
let user: [string, number, boolean];
// user = ['anderbytes', 15]
// user = ['1', 2]

//ERRORES
// user = []
// user = ['ander']
// user = ['ander', 'lopez']
// user = ['ander', 12, 13]
user = ['ander', 22, true]

const [username, age] = user;
console.log(username)
console.log(age)
