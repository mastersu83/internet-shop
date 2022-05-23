import React, { FC } from "react";
import classes from "./Card.module.scss";
import { ProductType } from "../../types/productType";
import Button from "../Button/Button";
import SliderImages from "../SliderImages/SliderImages";

type PropsType = {
  product: ProductType;
  handlePopup: (index: number) => void;
  index: number;
};

const Card: FC<PropsType> = ({ product, handlePopup, index }) => {
  const { description, images, prices } = product;

  return (
    <>
      <div className={classes.card__item}>
        <SliderImages images={images} />
        <span className={classes.card__title}>{description}</span>
        <div className={classes.card__priceBlock}>
          <div className={classes.card__priceItem}>
            <span className={`${classes.card__price} `}>
              от {prices[0].price}₽
            </span>
          </div>
        </div>
        <Button
          text="Выбрать параметры"
          index={index}
          handleClick={handlePopup}
        />
      </div>
    </>
  );
};

export default Card;
