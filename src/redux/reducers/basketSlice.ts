import { ProductInBasketType } from "../../types/productInBasketType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
  productsInBasket: ProductInBasketType[];
  ifProductAddedInBasket: string;
  totalSum: number;
  totalCount: number;
};

const initialState: InitialStateType = {
  productsInBasket: [],
  ifProductAddedInBasket: "",
  totalSum: 0,
  totalCount: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setProductInBasket(
      state: InitialStateType,
      action: PayloadAction<ProductInBasketType>
    ) {
      if (!state.productsInBasket.length) {
        state.productsInBasket.push(action.payload);
      } else {
        if (
          state.productsInBasket.some((prod) => prod.id === action.payload.id)
        ) {
          state.ifProductAddedInBasket = "Товар уже добавлен в корзину";
        } else {
          state.productsInBasket.push(action.payload);
          state.ifProductAddedInBasket = "";
        }
      }
    },
    countPlus(state: InitialStateType, action: PayloadAction<string>) {
      state.productsInBasket = state.productsInBasket.map((prod) =>
        prod.id === action.payload
          ? { ...prod, countProdInBasket: prod.countProdInBasket + 1 }
          : prod
      );
    },
    countMinus(state: InitialStateType, action: PayloadAction<string>) {
      state.productsInBasket = state.productsInBasket.map((prod) =>
        prod.id === action.payload
          ? { ...prod, countProdInBasket: prod.countProdInBasket - 1 }
          : prod
      );
    },
    removeProd(state: InitialStateType, action: PayloadAction<string>) {
      state.productsInBasket = state.productsInBasket.filter(
        (prod) => prod.id !== action.payload
      );
    },
    setTotalSum(
      state: InitialStateType,
      action: PayloadAction<{ totalSum: number; totalCount: number }>
    ) {
      state.totalSum = action.payload.totalSum;
      state.totalCount = action.payload.totalCount;
    },
    clearBasket(state: InitialStateType) {
      state.productsInBasket = [];
    },
  },
});

export const {
  setProductInBasket,
  countPlus,
  countMinus,
  removeProd,
  setTotalSum,
  clearBasket,
} = basketSlice.actions;

export default basketSlice;
