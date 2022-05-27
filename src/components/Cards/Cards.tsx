import React, { useEffect, useState } from "react";
import classes from "./Cards.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/appHooks";
import {
  getAllProducts,
  getAllProductsImages,
  getAllProductsVariations,
  getProductVariationPropertiesListValues,
  getProductVariationPropertiesValues,
  useGetAllProductsVariationsPropertiesQuery,
} from "../../api/productsApi";
import { ProductType } from "../../types/productType";
import Card from "../Card/Card";
import CardLoader from "../CardLoader/CardLoader";
import Popup from "../Popup/Popup";
import ProductVarPopupCard from "../ProductVarPopupCard/ProductVarPopupCard";
import { ProductInBasketType } from "../../types/productInBasketType";
import { setProductInBasket } from "../../redux/reducers/basketSlice";

const Cards = () => {
  const dispatch = useAppDispatch();
  const [openVarPopup, setOpenVarPopup] = useState<boolean>(false);
  const [productInPopup, setProductInPopup] = useState<number>(0);
  const [currentImg, setCurrentImg] = useState<number>(0);
  const { data: productVariationProperties } =
    useGetAllProductsVariationsPropertiesQuery({});

  const {
    products,
    allProductsIsSuccess,
    allProductsId,
    categoryId,
    propertiesIsSuccess,
    imagesIsSuccess,
  } = useAppSelector((state) => state.products);

  const getImgIndex = (flag: boolean) => {
    flag
      ? setCurrentImg((prevState) => Math.min(prevState + 1, 2))
      : setCurrentImg((prevState) => Math.max(prevState - 1, 0));
  };

  const handlePopup = (index: number) => {
    setOpenVarPopup(!openVarPopup);
    setProductInPopup(index);
    dispatch(getProductVariationPropertiesValues(products[index].prices[0].id));
    dispatch(getProductVariationPropertiesListValues());
  };

  const addProductInBasket = (obj: ProductInBasketType) => {
    dispatch(setProductInBasket(obj));
  };

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
            getImgIndex={getImgIndex}
            product={products[productInPopup]}
            addProductInBasket={addProductInBasket}
            currentImg={currentImg}
            handlePopup={handlePopup}
            openVarPopup={openVarPopup}
            index={productInPopup}
            productVariationProperties={productVariationProperties}
          />
        </Popup>
      )}
    </div>
  );
};

export default Cards;
