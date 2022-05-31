import React from "react";
import classes from "./OrdersHistory.module.scss";
import OrdersHistoryItem from "../OrdersHistoryIten/OrdersHistoryItem";
import { useAppSelector } from "../../hooks/appHooks";

const OrdersHistory = () => {
  const { orders } = useAppSelector((state) => state.order);

  return (
    <>
      <span className={classes.historyOrder__title}> История заказов</span>

      <div className={classes.historyOrder}>
        <div className={classes.historyOrder__items}>
          {orders.length ? (
            orders.map((order, index: number) => (
              <OrdersHistoryItem
                key={order.id}
                orderProd={order}
                index={index}
              />
            ))
          ) : (
            <h3>Нет заказов</h3>
          )}
        </div>
      </div>
    </>
  );
};

export default OrdersHistory;
