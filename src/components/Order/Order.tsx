import React from "react";
import classes from "./Order.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/appHooks";
import { setOrder } from "../../redux/reducers/orderSlice";
import { clearBasket } from "../../redux/reducers/basketSlice";
import { useForm } from "react-hook-form";
import { InputValueType } from "../../types/productInOrderType";

const Order = () => {
  const dispatch = useAppDispatch();
  const { productsInBasket, totalCount, totalSum } = useAppSelector(
    (state) => state.basket
  );

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<InputValueType>({
    defaultValues: {
      date: "",
      time: "",
      address: "",
      name: "",
      phone: "",
    },
  });

  const order = (inputValue: InputValueType) => {
    productsInBasket.length &&
      dispatch(
        setOrder({ productsInBasket, totalCount, totalSum, inputValue })
      );
    dispatch(clearBasket());
    reset({ date: "", time: "", address: "", name: "", phone: "" });
  };

  return (
    <div className={classes.order}>
      <span className={classes.order__title}> Доставка </span>
      <div className={classes.order__container}>
        <div className={classes.order__delivery}>
          <form className={classes.order__form}>
            <span className={classes.form__label}>Когда доставить?</span>
            <div className={classes.form__dateBox}>
              <div className={classes.form__date}>
                <input
                  className={`${classes.form__date} ${classes.input}`}
                  {...register("date", {
                    required: "Введите дату",
                  })}
                  type="date"
                />
                <span>{errors.date?.message}</span>
              </div>

              <div className={classes.form__date}>
                <input
                  className={`${classes.form__date} ${classes.input}`}
                  {...register("time", {
                    required: "Введите время",
                  })}
                  type="time"
                />
                <span>{errors.time?.message}</span>
              </div>
            </div>

            <span className={classes.form__label}>Куда доставить?</span>
            <div className={classes.form__date}>
              <input
                className={`${classes.form__date} ${classes.input}`}
                {...register("address", {
                  required: "Введите адрес",
                })}
              />
              <span>{errors.address?.message}</span>
            </div>

            <span className={classes.form__label}>Имя</span>
            <div className={classes.form__date}>
              <input
                className={`${classes.form__date} ${classes.input}`}
                {...register("name", {
                  required: "Введите имя",
                })}
              />
              <span>{errors.name?.message}</span>
            </div>
            <span className={classes.form__label}>Телефон</span>
            <div className={classes.form__date}>
              <input
                className={`${classes.form__date} ${classes.input}`}
                {...register("phone", {
                  required: "Введите номер телефона",
                })}
              />
              <span>{errors.phone?.message}</span>
            </div>
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
      <button onClick={handleSubmit(order)} className={classes.order__btn}>
        Сделать заказ
      </button>
    </div>
  );
};

export default Order;
