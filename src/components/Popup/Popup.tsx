import React, { FC } from "react";
import orderClasses from "./Popup.module.scss";

type PropsType = {
  openVarPopup: boolean;
  handlePopup: (index: number) => void;
  children: React.ReactNode;
  index: number;
};

const Popup: FC<PropsType> = ({
  openVarPopup,
  handlePopup,
  children,
  index,
}) => {
  return (
    <div
      className={`${orderClasses.orderPopup__container} ${
        openVarPopup ? orderClasses.open : ""
      }`}
    >
      <div className={`${orderClasses.orderPopup__body}`}>
        {children}
        <div
          onClick={() => handlePopup(index)}
          className={orderClasses.orderPopup__closeBtn}
        >
          +
        </div>
      </div>
    </div>
  );
};

export default Popup;
