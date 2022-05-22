import React, { useState } from "react";
import classes from "./Category.module.scss";
import { useGetAllCategoriesQuery } from "../../api/categoryApi";
import { CategoryType } from "../../types/categoryType";
import { useAppDispatch, useAppSelector } from "../../hooks/appHooks";
import { setCategoryId } from "../../redux/reducers/productsSlice";
import { getAllProducts } from "../../api/productsApi";

const Category = () => {
  const dispatch = useAppDispatch();
  const { categoryId } = useAppSelector((state) => state.products);
  const { data: categories, isSuccess: categoriesIsSuccess } =
    useGetAllCategoriesQuery({});

  const handleCategory = (categoryId: number) => {
    dispatch(setCategoryId(categoryId));
    dispatch(getAllProducts(categoryId));
  };

  return (
    <div className={classes.category}>
      <span className={classes.category__title}>
        Категории товаров
        <span className={classes.category__setup}>Настройки</span>
      </span>
      <div className={classes.category__tabs}>
        {categoriesIsSuccess &&
          categories.map((cat: CategoryType) => (
            <button
              onClick={() => handleCategory(cat.id)}
              key={cat.id}
              className={`${classes.category__tab} ${
                categoryId === cat.id ? classes.active : ""
              }`}
            >
              {cat.name}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Category;
