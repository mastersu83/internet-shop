import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductInBasketType } from "../../types/productInBasketType";
import { ProductsInOrder } from "../../types/productInOrderType";

type initialStateType = {
  orders: ProductsInOrder[];
};

const initialState: initialStateType = {
  orders: [],
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrder(
      state: initialStateType,
      action: PayloadAction<{
        productsInBasket: ProductInBasketType[];
        totalSum: number;
        totalCount: number;
      }>
    ) {
      let date = new Date().toLocaleString("ru", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
      state.orders.push({
        countProdInOrder: action.payload.totalCount,
        sumOrder: action.payload.totalSum,
        order: action.payload.productsInBasket,
        orderDate: String(date),
        id: Math.floor(Math.random() * (100000 - 10000)) + 10000,
        orderNumber: String(
          Math.floor(Math.random() * (1000 - 100)) +
            100 +
            "-" +
            Math.floor(Math.random() * (1000 - 100)) +
            100
        ),
      });
    },
  },
});

export const { setOrder } = ordersSlice.actions;

export default ordersSlice;
