import React, { FC } from "react";
import classes from "./Card.module.scss";
import { ProductType } from "../../types/productType";

const Card: FC<ProductType> = ({ description, images, prices }) => {
  return (
    <>
      <div className={classes.card__item}>
        <div className={classes.sliderContainer}>
          <div className={`${classes.left} ${classes.arrow}`}>
            <span>{"<"}</span>
          </div>

          <div
            style={{
              // transform: `translateX(${250}px)`,
              transition: "0.3s",
            }}
            className={classes.slider}
          >
            <img
              src={`https://test2.sionic.ru${images[0].image_url}`}
              alt=""
              className={classes.card__img}
            />
          </div>
          <div className={`${classes.right} ${classes.arrow}`}>
            <span>{">"}</span>
          </div>
        </div>
        <span className={classes.card__title}>{description}</span>
        <div className={classes.card__priceBlock}>
          <div className={classes.card__priceItem}>
            <span className={`${classes.card__price} `}>
              от {prices[0].price}₽
            </span>
          </div>
        </div>

        <button className={classes.card__btn}>Выбрать параметры</button>
      </div>
    </>
  );
};

export default Card;
