import { ProductImageType } from "../types/productImageType";
import { ProductVariationsType } from "../types/productVariationsType";
import { ProductType } from "../types/productType";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (categoryId: number, thunkAPI) => {
    const resp = await axios.get<ProductType[]>(
      `https://test2.sionic.ru/api/products?filter={%22category_id%22:[${categoryId}]}&range=[0,11]`
    );
    return resp.data;
  }
);
export const getAllProductsImages = createAsyncThunk(
  "products/getAllProductsImages",
  async (allProductsId: number[], thunkAPI) => {
    const resp = await axios.get<ProductImageType[]>(
      `https://test2.sionic.ru/api/ProductImages?filter={%22product_id%22:[${allProductsId}]}`
    );
    return resp.data;
  }
);
export const getAllProductsVariations = createAsyncThunk(
  "products/getAllProductsVariations",
  async (allProductsId: number[], thunkAPI) => {
    const resp = await axios.get<ProductVariationsType[]>(
      `https://test2.sionic.ru/api/ProductVariations?filter={%22product_id%22:[${allProductsId}]}&sort=[%22price%22,%22ASC%22]`
    );
    return resp.data;
  }
);
