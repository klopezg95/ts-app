import { Category } from "../categories/category.model";
import { Basemodel } from "../base.model";
export type Sizes = 'S' | 'M' | 'L' | 'XL';

export interface Product extends Basemodel {

  title: string;
  image: string;
  description: string;
  stock: number;
  size?: Sizes;
  color: string;
  price: string;
  category: Category
  isNew: boolean;
  tags: string[];
}






