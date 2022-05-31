import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./reducers/productsSlice";
import { categoryApi } from "../api/categoryApi";
import { productsApi } from "../api/productsApi";
import basketSlice from "./reducers/basketSlice";
import orderSlice from "./reducers/orderSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    basket: basketSlice.reducer,
    order: orderSlice.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      categoryApi.middleware,
      productsApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
