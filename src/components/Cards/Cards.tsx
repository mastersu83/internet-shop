import React, { useEffect, useState } from "react";
import classes from "./Cards.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/appHooks";
import {
  getAllProducts,
  getAllProductsImages,
  getAllProductsVariations,
} from "../../api/productsApi";
import { ProductType } from "../../types/productType";
import Card from "../Card/Card";
import CardLoader from "../CardLoader/CardLoader";
import Popup from "../Popup/Popup";
import ProductVarPopupCard from "../ProductVarPopupCard/ProductVarPopupCard";

const Cards = () => {
  const dispatch = useAppDispatch();
  const [openVarPopup, setOpenVarPopup] = useState<boolean>(false);
  const [productInPopup, setProductInPopup] = useState<number>(0);
  const {
    products,
    allProductsIsSuccess,
    allProductsId,
    categoryId,
    propertiesIsSuccess,
    imagesIsSuccess,
  } = useAppSelector((state) => state.products);

  const handlePopup = (index: number) => {
    setOpenVarPopup(!openVarPopup);
    setProductInPopup(index);
  };

  console.log(products);

  useEffect(() => {
    !products.length && dispatch(getAllProducts(categoryId));
  }, []);

  useEffect(() => {
    if (allProductsIsSuccess) {
      dispatch(getAllProductsImages(allProductsId));
      dispatch(getAllProductsVariations(allProductsId));
    }
  }, [allProductsIsSuccess]);

  return (
    <div className={classes.card__items}>
      {propertiesIsSuccess && imagesIsSuccess
        ? products.map((prod: ProductType, index: number) => (
            <Card
              key={prod.id}
              product={prod}
              handlePopup={handlePopup}
              index={index}
            />
          ))
        : Array(12)
            .fill(0)
            .map((_, index) => <CardLoader key={index} />)}
      {propertiesIsSuccess && imagesIsSuccess && (
        <Popup
          openVarPopup={openVarPopup}
          handlePopup={handlePopup}
          index={productInPopup}
        >
          <ProductVarPopupCard
            product={products[productInPopup]}
            handlePopup={handlePopup}
            openVarPopup={openVarPopup}
            index={productInPopup}
          />
        </Popup>
      )}
    </div>
  );
};

export default Cards;
