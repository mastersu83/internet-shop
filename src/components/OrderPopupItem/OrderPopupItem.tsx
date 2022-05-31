import React, { FC } from "react";
import classesBasket from "../Basket/Basket.module.scss";
import classesBasketItem from "../BasketItem/BasketItem.module.scss";
import { ProductsInOrder } from "../../types/productInOrderType";
import group from "../../assets/img/Group.png";

type PropsType = {
  orderProd: ProductsInOrder;
};

const OrderPopupItem: FC<PropsType> = ({ orderProd }) => {
  const { sumOrder, order, countProdInOrder } = orderProd;

  console.log(orderProd);
  return (
    <div className={classesBasket.basket}>
      <div className={classesBasket.basket__container}>
        <div className={classesBasket.checkout}>
          <h3 className={classesBasket.checkout__title}>Товары</h3>
          <div className={classesBasket.checkout__priceWrapper}>
            <span className={classesBasket.checkout__price}>
              Стоимость корзины:
            </span>
            <span className={classesBasket.checkout__sum}>{sumOrder} ₽</span>
          </div>
          <div className={classesBasket.checkout__priceWrapper}>
            <span className={classesBasket.checkout__price}>
              Кол-во товаров:
            </span>
            <span className={classesBasket.checkout__sum}>
              {countProdInOrder}
            </span>
          </div>
          <img src={group} alt="" className={classesBasket.checkout__img} />
        </div>
        <div className={classesBasket.basket__items}>
          {order.length &&
            order.map((order) => (
              <div key={order.id} className={classesBasketItem.basket__item}>
                <img
                  src={"https://test2.sionic.ru" + order.images.image_url}
                  alt=""
                  className={classesBasketItem.basket__itemImg}
                />
                <span className={classesBasketItem.basket__itemTitle}>
                  {order.description}
                </span>
                <div className={classesBasketItem.basket__countBox}>
                  <span className={classesBasketItem.basket__count}>
                    {order.countProdInBasket}
                  </span>
                </div>
                <span className={classesBasketItem.basket__itemPrice}>
                  {order.prices.price} ₽
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OrderPopupItem;
