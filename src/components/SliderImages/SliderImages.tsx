import React, { FC, useEffect, useState } from "react";
import classes from "./SliderImages.module.scss";
import { ProductImageType } from "../../types/productImageType";

type PropsType = {
  images: ProductImageType[];
  openVarPopup?: boolean;
};

const SliderImages: FC<PropsType> = ({ images, openVarPopup }) => {
  const [offset, setOffset] = useState(0);

  const moveLeft = () => {
    setOffset((currentOffset) => {
      return Math.min(currentOffset + 217, 0);
    });
  };
  const moveRight = () => {
    setOffset((currentOffset) => {
      return Math.max(currentOffset - 217, -217 * (images.length - 1));
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setOffset(0);
    }, 300);
  }, [openVarPopup]);

  return (
    <div className={classes.sliderContainer}>
      <div onClick={moveLeft} className={`${classes.left} ${classes.arrow}`}>
        <span>{"<"}</span>
      </div>

      <div
        style={{
          transform: `translateX(${offset}px)`,
          transition: "0.3s",
        }}
        className={classes.slider}
      >
        {images.map((img, index) => (
          <img
            key={img.id}
            src={
              images[index].image_url
                ? "https://test2.sionic.ru" + images[index].image_url
                : "https://lider-krovlia.ru/local/templates/aspro-stroy/images/noimage_detail.png"
            }
            alt=""
            className={classes.slider__img}
          />
        ))}
      </div>
      <div onClick={moveRight} className={`${classes.right} ${classes.arrow}`}>
        <span>{">"}</span>
      </div>
    </div>
  );
};

export default SliderImages;
