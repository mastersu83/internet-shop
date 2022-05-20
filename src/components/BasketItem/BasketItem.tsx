import React from "react";
import remove from "../../assets/img/delete.svg";
import classes from "./BasketItem.module.scss";

const BasketItem = () => {
  return (
    <div className={classes.basket__item}>
      <img
        src="https://lider-krovlia.ru/local/templates/aspro-stroy/images/noimage_detail.png"
        alt=""
        className={classes.basket__itemImg}
      />
      <span className={classes.basket__itemTitle}>
        Длинное название товара в одну строчку п...
      </span>
      <div className={classes.basket__countBox}>
        <span className={classes.basket__countButtons}>-</span>
        <span className={classes.basket__count}>4</span>
        <span className={classes.basket__countButtons}>+</span>
      </div>
      <span className={classes.basket__itemPrice}>350 000 ₽</span>
      <img src={remove} alt="Delete" className={classes.basket__itemDelete} />
    </div>
  );
};

export default BasketItem;
