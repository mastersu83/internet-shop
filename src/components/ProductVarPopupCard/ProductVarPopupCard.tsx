import React, { FC, useState } from "react";
import classes from "../Card/Card.module.scss";
import classesPopup from "./ProductVarPopupCard.module.scss";
import Button from "../Button/Button";
import { ProductType } from "../../types/productType";
import SliderImages from "../SliderImages/SliderImages";

type PropsType = {
  product: ProductType;
  handlePopup: (index: number) => void;
  openVarPopup: boolean;
  index: number;
};

const ProductVarPopupCard: FC<PropsType> = ({
  product,
  openVarPopup,
  handlePopup,
  index,
}) => {
  const [activePrice, setActivePrice] = useState<number>();
  const { description, images, prices, name } = product;

  const addProductInBasket = () => {
    console.log("hello");
  };

  return (
    <div className={classes.card__item}>
      <h2>{name}</h2>
      <SliderImages images={images} />
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
      <Button
        text="Добавить в корзину"
        index={index}
        handleClick={addProductInBasket}
      />
    </div>
  );
};

export default ProductVarPopupCard;
