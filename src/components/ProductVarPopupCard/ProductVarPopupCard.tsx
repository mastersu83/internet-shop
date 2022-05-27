import React, { FC, useEffect, useState } from "react";
import classes from "../Card/Card.module.scss";
import classesPopup from "./ProductVarPopupCard.module.scss";
import Button from "../Button/Button";
import { ProductType } from "../../types/productType";
import SliderImages from "../SliderImages/SliderImages";
import { ProductVariationPropertiesType } from "../../types/productVariationPropertiesType";
import { useAppDispatch, useAppSelector } from "../../hooks/appHooks";
import { getProductVariationPropertiesValues } from "../../api/productsApi";
import { getPropertyValues } from "../../helpers/helpers";
import { ProductInBasketType } from "../../types/productInBasketType";
import { ProductVariationsType } from "../../types/productVariationsType";

type PropsType = {
  product: ProductType;
  handlePopup: (index: number) => void;
  openVarPopup: boolean;
  index: number;
  productVariationProperties: ProductVariationPropertiesType[];
  getImgIndex: (flag: boolean) => void;
  addProductInBasket: (obj: ProductInBasketType) => void;
  currentImg: number;
};

const ProductVarPopupCard: FC<PropsType> = ({
  product,
  openVarPopup,
  index,
  productVariationProperties,
  getImgIndex,
  addProductInBasket,
  currentImg,
}) => {
  const dispatch = useAppDispatch();
  const {
    productVariationPropertyValues,
    productVariationPropertiesListValues,
  } = useAppSelector((state) => state.products);
  const { description, images, prices, name, id, category_id } = product;
  const [activePrice, setActivePrice] = useState<ProductVariationsType>(
    product.prices[0]
  );

  const onAddProductInBasket = () => {
    addProductInBasket({
      countProdInBasket: 1,
      description,
      images: images[currentImg],
      prices: activePrice,
      name,
      id: "" + id + images[currentImg].id + activePrice.id,
      category_id,
    });
  };

  const handleProductVariationProperties = (price: ProductVariationsType) => {
    setActivePrice(price);
    dispatch(getProductVariationPropertiesValues(price.id));
  };

  useEffect(() => {
    setActivePrice(product.prices[0]);
  }, [product]);

  return (
    <div className={classes.card__item}>
      <h2>{name}</h2>
      <SliderImages
        images={images}
        openVarPopup={openVarPopup}
        getImgIndex={getImgIndex}
      />
      <span className={classes.card__title}>{description}</span>
      <div className={classesPopup.priceBlock}>
        {prices.map((price) => (
          <div
            onClick={() => handleProductVariationProperties(price)}
            key={price.id}
            className={classesPopup.priceItem}
          >
            <span
              key={price.id}
              className={`${classesPopup.price} ${
                activePrice && activePrice.id === price.id
                  ? classesPopup.active
                  : ""
              }`}
            >
              {price.price}₽
            </span>
            <div className={classesPopup.varProperties__title}>
              {price.stock} шт.
            </div>
          </div>
        ))}
      </div>
      <div className={classesPopup.varProperties}>
        <div className={classesPopup.varProperties__key}>
          {productVariationProperties.map((item) => (
            <span className={classesPopup.varProperties__title} key={item.id}>
              {item.name} :
            </span>
          ))}
        </div>
        <div className={classesPopup.varProperties__value}>
          {productVariationProperties.length &&
            productVariationPropertiesListValues.length &&
            productVariationPropertyValues.map((item) => (
              <span className={classesPopup.varProperties__title} key={item.id}>
                {getPropertyValues(
                  productVariationProperties,
                  item,
                  productVariationPropertiesListValues
                )}
              </span>
            ))}
        </div>
      </div>

      <Button
        text="Добавить в корзину"
        index={index}
        handleClick={onAddProductInBasket}
      />
    </div>
  );
};

export default ProductVarPopupCard;
