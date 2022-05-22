import { ProductImageType } from "./productImageType";
import { ProductVariationsType } from "./productVariationsType";

export type ProductType = {
  id: number;
  name: string;
  category_id: number;
  description: string;
  images: ProductImageType[];
  prices: ProductVariationsType[];
};
