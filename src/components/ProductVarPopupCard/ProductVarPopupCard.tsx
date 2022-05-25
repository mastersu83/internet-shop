import React, { FC, useState } from "react";
import classes from "../Card/Card.module.scss";
import classesPopup from "./ProductVarPopupCard.module.scss";
import Button from "../Button/Button";
import { ProductType } from "../../types/productType";
import SliderImages from "../SliderImages/SliderImages";
import { ProductVariationPropertiesType } from "../../types/productVariationPropertiesType";

type PropsType = {
  product: ProductType;
  handlePopup: (index: number) => void;
  openVarPopup: boolean;
  index: number;
  productVariationProperties: ProductVariationPropertiesType[];
};

const ProductVarPopupCard: FC<PropsType> = ({
  product,
  openVarPopup,
  handlePopup,
  index,
  productVariationProperties,
}) => {
  const { description, images, prices, name } = product;
  const [activePrice, setActivePrice] = useState<number>();

  const addProductInBasket = () => {
    console.log("hello");
  };

  return (
    <div className={classes.card__item}>
      <h2>{name}</h2>
      <SliderImages images={images} openVarPopup={openVarPopup} />
      <span className={classes.card__title}>{description}</span>
      <div className={classesPopup.priceBlock}>
        {prices.map((price) => (
          <div
            onClick={() => setActivePrice(price.id)}
            key={price.id}
            className={classesPopup.priceItem}
          >
            <span
              key={price.id}
              className={`${classesPopup.price} ${
                activePrice === price.id ? classesPopup.active : ""
              }`}
            >
              {price.price}₽
            </span>
          </div>
        ))}
      </div>
      <div className={classesPopup.varProperties}>
        {productVariationProperties.map((item) => (
          <span className={classesPopup.varProperties__title} key={item.id}>
            {item.name} : 120
          </span>
        ))}
      </div>

      <Button
        text="Добавить в корзину"
        index={index}
        handleClick={addProductInBasket}
      />
    </div>
  );
};

export default ProductVarPopupCard;
