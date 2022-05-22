import React, { useEffect } from "react";
import classes from "./Cards.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/appHooks";
import {
  getAllProducts,
  getAllProductsImages,
  getAllProductsVariations,
} from "../../api/productsApi";
import { ProductType } from "../../types/productType";
import Card from "../Card/Card";

const Cards = () => {
  const dispatch = useAppDispatch();
  const {
    products,
    allProductsIsSuccess,
    allProductsId,
    categoryId,
    propertiesIsSuccess,
    imagesIsSuccess,
  } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProducts(categoryId));
  }, []);

  useEffect(() => {
    if (allProductsIsSuccess) {
      dispatch(getAllProductsImages(allProductsId));
      dispatch(getAllProductsVariations(allProductsId));
    }
  }, [allProductsIsSuccess]);

  return (
    <div className={classes.card__items}>
      {allProductsIsSuccess &&
        propertiesIsSuccess &&
        imagesIsSuccess &&
        products.map((prod: ProductType) => <Card key={prod.id} {...prod} />)}
      hello
    </div>
  );
};

export default Cards;
