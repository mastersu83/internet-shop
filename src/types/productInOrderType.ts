import { ProductInBasketType } from "./productInBasketType";

export type InputValueType = {
  date: string;
  time: string;
  address: string;
  name: string;
  phone: string;
};

export type ProductsInOrder = {
  id: number;
  countProdInOrder: number;
  sumOrder: number;
  order: ProductInBasketType[];
  orderDate: string;
  orderNumber: string;
  date: string;
  time: string;
  address: string;
  name: string;
  phone: string;
};
