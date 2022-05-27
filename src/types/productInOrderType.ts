import { ProductInBasketType } from "./productInBasketType";

export type ProductsInOrder = {
  id: number;
  countProdInOrder: number;
  sumOrder: number;
  order: ProductInBasketType[];
  orderDate: string;
  orderNumber: string;
};
