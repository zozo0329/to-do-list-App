import React from "react";
import style from "./Plus.module.css";
import PlusIcon from "./plus.png";
const Plus = (props) => {
  return (
    <div className={style.container}>
      <img
        src={PlusIcon}
        alt="ICON"
        className={style.icon}
        onClick={props.onClick}
      />
    </div>
  );
};

export default Plus;
