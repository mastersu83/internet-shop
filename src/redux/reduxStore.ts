import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./reducers/productsSlice";
import { categoryApi } from "../api/categoryApi";

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoryApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
