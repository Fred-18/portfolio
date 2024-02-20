import React from "react";
import s from "./style.module.css";
export const Header = () => {
  return (
    <>
      <div className={s.firstcontainer}>
        <div className={s.container}>
          <h1 className={s.firstTitle}>Nobre</h1>
          <h2 className={s.secondTitle}>Fred</h2>
          <h3 className={s.thridTitle}>Web Developer</h3>
        </div>
        <img className={s.img_fred} src="asset/fredportfolio.jpg" />
      </div>
    </>
  );
};
