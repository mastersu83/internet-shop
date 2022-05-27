import { ProductVariationPropertiesType } from "../types/productVariationPropertiesType";
import { ProductVariationPropertyValuesType } from "../types/productVariationPropertyValuesType";
import { ProductVariationPropertyListValuesType } from "../types/productVariationPropertyListValuesType";
import { ProductInBasketType } from "../types/productInBasketType";

export const getPropertyValues = (
  productVariationProperties: ProductVariationPropertiesType[],
  item: ProductVariationPropertyValuesType,
  productVariationPropertiesListValues: ProductVariationPropertyListValuesType[]
) => {
  let value: string | number | null = "";
  let pvp = productVariationProperties.find(
    (pvp) => pvp.id === item.product_variation_property_id
  );
  if (pvp!.type === 0) {
    value = item.value_string;
  }
  if (pvp!.type === 1) {
    value = item.value_int;
  }
  if (pvp!.type === 2) {
    value = item.value_float;
  }
  if (pvp!.type === 3) {
    let pvpLv = productVariationPropertiesListValues.find(
      (pvpLv) => pvpLv.id === item.product_variation_property_list_value_id
    );
    value = pvpLv!.title;
  }
  return value;
};

export const countTotalSum = (products: ProductInBasketType[]) => {
  let totalSum = products
    .map((prod) => prod.prices.price * prod.countProdInBasket)
    .reduce((a, b) => a + b, 0);
  let totalCount = products
    .map((prod) => prod.countProdInBasket)
    .reduce((a, b) => a + b, 0);
  return { totalSum, totalCount };
};
