import React from "react";
import classes from "../BasketItem/BasketItem.module.scss";

const OrderPopupItem = () => {
  return (
    <div className={classes.basket__item}>
      <img
        src="https://lider-krovlia.ru/local/templates/aspro-stroy/images/noimage_detail.png"
        alt=""
        className={classes.basket__itemImg}
      />
      <span className={classes.basket__itemTitle}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </span>
      <div className={classes.basket__countBox}>
        <span className={classes.basket__count}>10</span>
      </div>
      <span className={classes.basket__itemPrice}>350 ₽</span>
    </div>
  );
};

export default OrderPopupItem;
