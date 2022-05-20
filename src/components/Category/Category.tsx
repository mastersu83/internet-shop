import React from "react";
import classes from "./Category.module.scss";

const Category = () => {
  return (
    <div className={classes.category}>
      <span className={classes.category__title}>
        Категории товаров
        <span className={classes.category__setup}>Настройки</span>
      </span>
      <div className={classes.category__tabs}>
        <button className={`${classes.category__tab} ${classes.active}`}>
          Name
        </button>
        {/*{categoryList &&*/}
        {/*  categoryList.map((cat) => (*/}
        {/*    <button*/}
        {/*      key={cat.id}*/}
        {/*      onClick={() => getCategoryId(cat.id)}*/}
        {/*      className={`${classes.category__tab} ${*/}
        {/*        active === cat.id ? classes.active : ""*/}
        {/*      }`}*/}
        {/*    >*/}
        {/*      {cat.name}*/}
        {/*    </button>*/}
        {/*  ))}*/}
        <button className={`${classes.category__tab} `}>Name</button>
        <button className={`${classes.category__tab} `}>Name</button>
        <button className={`${classes.category__tab} `}>Name</button>
        <button className={`${classes.category__tab} `}>Name</button>
        <button className={`${classes.category__tab} `}>Name</button>
      </div>
    </div>
  );
};

export default Category;
