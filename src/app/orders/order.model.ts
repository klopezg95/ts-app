import { Product } from "../products/product.model"
import { User } from "../users/user.model"
import { Basemodel } from "../base.model";

export interface Order extends Basemodel {

  products: Product[],
  user: User
}
