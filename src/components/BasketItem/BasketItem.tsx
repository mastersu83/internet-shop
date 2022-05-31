import React, { FC } from "react";
import remove from "../../assets/img/delete.svg";
import classes from "./BasketItem.module.scss";
import { ProductInBasketType } from "../../types/productInBasketType";
import { useAppDispatch } from "../../hooks/appHooks";
import {
  countMinus,
  countPlus,
  removeProd,
} from "../../redux/reducers/basketSlice";

type PropsType = {
  prod: ProductInBasketType;
};

const BasketItem: FC<PropsType> = ({ prod }) => {
  const dispatch = useAppDispatch();
  const { description, prices, images, id, countProdInBasket } = prod;

  const counterPlus = () => {
    dispatch(countPlus(id));
  };
  const counterMinus = () => {
    if (countProdInBasket > 1) {
      dispatch(countMinus(id));
    }
  };

  const onRemoveProd = () => {
    dispatch(removeProd(id));
  };

  return (
    <div className={classes.basket__item}>
      <img
        src={"https://test2.sionic.ru" + images.image_url}
        alt=""
        className={classes.basket__itemImg}
      />
      <span className={classes.basket__itemTitle}>{description}</span>
      <div className={classes.basket__countBox}>
        <span onClick={counterMinus} className={classes.basket__countButtons}>
          -
        </span>
        <span className={classes.basket__count}>{countProdInBasket}</span>
        <span onClick={counterPlus} className={classes.basket__countButtons}>
          +
        </span>
      </div>
      <span className={classes.basket__itemPrice}>{prices.price} ₽</span>
      <img
        onClick={onRemoveProd}
        src={remove}
        alt="Delete"
        className={classes.basket__itemDelete}
      />
    </div>
  );
};

export default BasketItem;
