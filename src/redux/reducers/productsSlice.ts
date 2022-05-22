import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../types/productType";
import { ProductImageType } from "../../types/productImageType";
import { ProductVariationsType } from "../../types/productVariationsType";
import {
  getAllProducts,
  getAllProductsImages,
  getAllProductsVariations,
} from "../../api/productsApi";

type InitialStateType = {
  products: ProductType[];
  allProductsId: number[];
  allProductsIsSuccess: boolean;
  imagesIsSuccess: boolean;
  propertiesIsSuccess: boolean;
  categoryId: number;
};

const initialState: InitialStateType = {
  products: [],
  allProductsId: [],
  allProductsIsSuccess: false,
  imagesIsSuccess: false,
  propertiesIsSuccess: false,
  categoryId: 21,
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    setCategoryId(state: InitialStateType, action: PayloadAction<number>) {
      state.categoryId = action.payload;
      state.allProductsIsSuccess = false;
      state.imagesIsSuccess = false;
      state.propertiesIsSuccess = false;
    },
  },
  extraReducers: {
    [getAllProducts.pending.type]: (state: InitialStateType) => {
      state.allProductsIsSuccess = false;
    },
    [getAllProducts.fulfilled.type]: (
      state: InitialStateType,
      action: PayloadAction<ProductType[]>
    ) => {
      state.products = action.payload;
      state.allProductsId = action.payload.map((prod) => prod.id);
      state.allProductsIsSuccess = true;
    },
    [getAllProductsImages.pending.type]: (state: InitialStateType) => {
      state.imagesIsSuccess = false;
    },
    [getAllProductsImages.fulfilled.type]: (
      state: InitialStateType,
      action: PayloadAction<ProductImageType[]>
    ) => {
      state.products = state.products.map((prod) => ({
        ...prod,
        images: action.payload.filter((img) => img.product_id === prod.id),
      }));
      state.imagesIsSuccess = true;
    },
    [getAllProductsVariations.pending.type]: (state: InitialStateType) => {
      state.propertiesIsSuccess = false;
    },
    [getAllProductsVariations.fulfilled.type]: (
      state: InitialStateType,
      action: PayloadAction<ProductVariationsType[]>
    ) => {
      state.products = state.products.map((prod) => ({
        ...prod,
        prices: action.payload.filter((img) => img.product_id === prod.id),
      }));
      state.propertiesIsSuccess = true;
    },
  },
});

export const { setCategoryId } = productsSlice.actions;

export default productsSlice;
