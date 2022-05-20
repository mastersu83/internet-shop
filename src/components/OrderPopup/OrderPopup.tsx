import React from "react";
import group from "../../assets/img/Group.png";
import classes from "../Basket/Basket.module.scss";
import orderClasses from "./OrderPopup.module.scss";
import OrderPopupItem from "../OrderPopupItem/OrderPopupItem";

const OrderPopup = () => {
  return (
    <div className={`${orderClasses.orderPopup__container}`}>
      <div
        className={`${classes.basket__container} ${orderClasses.orderPopup__body}`}
      >
        <div className={classes.checkout}>
          <h3 className={classes.checkout__title}>Товары</h3>
          <div className={classes.checkout__priceWrapper}>
            <span className={classes.checkout__price}>Стоимость заказа:</span>
            <span className={classes.checkout__sum}>18500 ₽</span>
          </div>
          <img src={group} alt="" className={classes.checkout__img} />
        </div>
        <div
          className={`${classes.basket__items} ${orderClasses.orderPopup__items}`}
        >
          <OrderPopupItem />
        </div>
        <div className={orderClasses.orderPopup__closeBtn}>+</div>
      </div>
    </div>
  );
};

export default OrderPopup;
