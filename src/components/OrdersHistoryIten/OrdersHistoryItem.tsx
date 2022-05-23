import React from "react";
import classes from "./OrdersHistoryItem.module.scss";

const OrdersHistoryItem = () => {
  return (
    <>
      <div className={classes.historyOrder__item}>
        <div className={classes.historyOrder__dateBlock}>
          <div className={classes.historyOrder__date}>15.02.2022</div>
          <div
            className={`${classes.historyOrder__more} ${classes.historyOrder__titleText}`}
          >
            Подробнее
          </div>
        </div>
        <div className={classes.historyOrder__statusBlock}>
          <div className={classes.historyOrder__titleText}>
            <p>Статус заказа</p>
            <span>Оплачен/Завершён</span>
          </div>
          <div
            className={`${classes.historyOrder__number} ${classes.historyOrder__titleText}`}
          >
            <p>Номер заказа</p> <span>#152-645</span>
          </div>
        </div>
        <div className={classes.historyOrder__detailsBlock}>
          <div
            className={`${classes.historyOrder__countProd} ${classes.historyOrder__titleText}`}
          >
            <p>Колво товаров</p>
            <span>12 шт.</span>
          </div>
          <div
            className={`${classes.historyOrder__sum} ${classes.historyOrder__titleText}`}
          >
            <p>Стоимость заказа</p> <span>18500₽</span>
          </div>
          <div
            className={`${classes.historyOrder__delivery} ${classes.historyOrder__titleText}`}
          >
            <p>Адрес доставки ул.</p> <span> Коммунистич...д.1, стр.1</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrdersHistoryItem;
