import React, { ChangeEvent, useState } from "react";
import classes from "./Order.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/appHooks";
import { setOrder } from "../../redux/reducers/orderSlice";
import { clearBasket } from "../../redux/reducers/basketSlice";

const Order = () => {
  const dispatch = useAppDispatch();
  const { productsInBasket, totalCount, totalSum } = useAppSelector(
    (state) => state.basket
  );

  const [inputValue, setInputValue] = useState({
    date: "",
    time: "",
    address: "",
    name: "",
    phone: "",
  });

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const order = () => {
    productsInBasket.length &&
      dispatch(setOrder({ productsInBasket, totalCount, totalSum }));
    dispatch(clearBasket());
  };

  return (
    <div className={classes.order}>
      <span className={classes.order__title}> Доставка </span>
      <div className={classes.order__container}>
        <div className={classes.order__delivery}>
          <form className={classes.order__form}>
            <span className={classes.form__label}>Когда доставить?</span>
            <div className={classes.form__dateBox}>
              <input
                onChange={onChangeInput}
                name="date"
                type="date"
                className={`${classes.form__date} ${classes.input}`}
                placeholder="Выберите дату"
                value={inputValue.date}
              />
              <input
                onChange={onChangeInput}
                name="time"
                type="time"
                className={`${classes.form__date} ${classes.input}`}
                placeholder="Выберите время"
                value={inputValue.time}
              />
            </div>

            <span className={classes.form__label}>Куда доставить?</span>

            <input
              onChange={onChangeInput}
              name="address"
              type="text"
              className={`${classes.form__address} ${classes.input}`}
              placeholder="Введите адрес доставки"
              value={inputValue.address}
            />
            <span className={classes.form__label}>Имя</span>

            <input
              onChange={onChangeInput}
              name="name"
              type="text"
              className={`${classes.form__name} ${classes.input}`}
              placeholder="Введите имя"
              value={inputValue.name}
            />
            <span className={classes.form__label}>Телефон</span>

            <input
              onChange={onChangeInput}
              name="phone"
              type="text"
              className={`${classes.form__phone} ${classes.input}`}
              placeholder="Введите номер телефона"
              value={inputValue.phone}
            />
          </form>
        </div>
        <div className={classes.order__sum}>
          <span className={`${classes.order__sumProducts} ${classes.flex}`}>
            Стоимость товаров: <span>{totalSum} ₽</span>
          </span>
          <span className={`${classes.order__sumDelivery} ${classes.flex}`}>
            Стоимость доставки: <span>200 ₽</span>
          </span>
          <span className={`${classes.order__sumTotal} ${classes.flex}`}>
            Итого:{" "}
            <span>{totalSum + (productsInBasket.length ? 200 : 0)} ₽</span>
          </span>
        </div>
      </div>
      <button onClick={order} className={classes.order__btn}>
        Сделать заказ
      </button>
    </div>
  );
};

export default Order;
