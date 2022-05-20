import React from "react";
import classes from "./Card.module.scss";

const Card = () => {
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
              src="https://lider-krovlia.ru/local/templates/aspro-stroy/images/noimage_detail.png"
              alt=""
              className={classes.card__img}
            />
          </div>
          <div className={`${classes.right} ${classes.arrow}`}>
            <span>{">"}</span>
          </div>
        </div>
        <span className={classes.card__title}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          aliquid, aspernatur commodi dolorum excepturi explicabo libero magnam
          molestiae mollitia neque nesciunt nihil porro quam quod rem sapiente
          tenetur unde, vel.
        </span>
        <div className={classes.card__priceBlock}>
          <div className={classes.card__priceItem}>
            <span className={`${classes.card__price} `}>от 350₽</span>
          </div>
        </div>

        <button className={classes.card__btn}>Выбрать параметры</button>
      </div>
    </>
  );
};

export default Card;
