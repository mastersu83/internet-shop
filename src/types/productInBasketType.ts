import { ProductImageType } from "./productImageType";
import { ProductVariationsType } from "./productVariationsType";

export type ProductInBasketType = {
  countProdInBasket: number;
  id: string;
  name: string;
  category_id: number;
  description: string;
  images: ProductImageType;
  prices: ProductVariationsType;
};
