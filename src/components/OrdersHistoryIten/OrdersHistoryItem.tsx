import React, { FC, useState } from "react";
import classes from "../OrdersHistory/OrdersHistory.module.scss";
import { ProductsInOrder } from "../../types/productInOrderType";
import Popup from "../Popup/Popup";
import OrderPopupItem from "../OrderPopupItem/OrderPopupItem";

type PropsType = {
  orderProd: ProductsInOrder;
  index: number;
};

const OrdersHistoryItem: FC<PropsType> = ({ orderProd, index }) => {
  const { orderDate, orderNumber, sumOrder, countProdInOrder } = orderProd;

  const [openOrderPopup, setOpenOrderPopup] = useState<boolean>(false);
  const [orderInPopup, setOrderInPopup] = useState<number>(0);

  const handlePopup = (index: number) => {
    setOpenOrderPopup(!openOrderPopup);
    setOrderInPopup(index);
  };

  return (
    <>
      <div className={classes.historyOrder__item}>
        <div
          onClick={() => handlePopup(index)}
          className={`${classes.historyOrder__more} ${classes.historyOrder__titleText}`}
        >
          Подробнее
        </div>
        <div className={classes.historyOrder__dateBlock}>
          <div className={classes.historyOrder__date}>
            <span>Время доставки заказа:</span> {orderDate}
          </div>
          <div className={classes.historyOrder__date}>
            <span>Дата заказа:</span> {orderDate}
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
            <p>Номер заказа</p> <span>#{orderNumber}</span>
          </div>
        </div>
        <div className={classes.historyOrder__detailsBlock}>
          <div
            className={`${classes.historyOrder__countProd} ${classes.historyOrder__titleText}`}
          >
            <p>Колво товаров</p>
            <span>{countProdInOrder} шт.</span>
          </div>
          <div
            className={`${classes.historyOrder__sum} ${classes.historyOrder__titleText}`}
          >
            <p>Стоимость заказа</p> <span>{sumOrder}₽</span>
          </div>
          <div
            className={`${classes.historyOrder__delivery} ${classes.historyOrder__titleText}`}
          >
            <p>Адрес доставки ул.</p> <span> Коммунистич...д.1, стр.1</span>
          </div>
        </div>
        <Popup
          openVarPopup={openOrderPopup}
          handlePopup={handlePopup}
          index={orderInPopup}
        >
          <OrderPopupItem orderProd={orderProd} />
        </Popup>
      </div>
    </>
  );
};

export default OrdersHistoryItem;
