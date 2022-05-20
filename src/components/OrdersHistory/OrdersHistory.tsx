import React from "react";
import classes from "./OrdersHistory.module.scss";
import OrdersHistoryItem from "../OrdersHistoryIten/OrdersHistoryItem";

const OrdersHistory = () => {
  return (
    <>
      <span className={classes.historyOrder__title}> История заказов</span>

      <div className={classes.historyOrder}>
        <div className={classes.historyOrder__items}>
          <OrdersHistoryItem />
        </div>
      </div>
    </>
  );
};

export default OrdersHistory;
