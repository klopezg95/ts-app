export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer",
}

export type User = {
  username: string,
  role: ROLES,
}

const anderUser: User = {
  username: 'anderbytes',
  role: ROLES.SELLER
}

//-------------------------- OTRO EJEMPLO DE UN ENUM ---------------------------
enum Estaciones {
  primavera = "Primavera",
  verano = "Verano",
  otonio = "Otoño",
  invierno = "Invierno",
}

const favEstacion = (est: Estaciones): string => {
  return `Mi estación fav es: ${est}`;
};
//console.log(favEstacion("verano")); //❌ no se puede mandar un string suelto
console.log(favEstacion(Estaciones.verano)); //✅tenemos que ser mas especificos
