import React, { FC } from "react";
import classes from "./Button.module.scss";

type PropsType = {
  handleClick: (index: number) => void;
  index: number;
  text: string;
};

const Button: FC<PropsType> = ({ handleClick, index, text }) => {
  return (
    <button onClick={() => handleClick(index)} className={classes.btn}>
      {text}
    </button>
  );
};

export default Button;
