import React from "react";
import s from "./style.module.css";
export const Header = () => {
  const firstName = "Fred";
  const lastname = "Nobre";
  const developer = "Web Developer";

  return (
    <>
      <div className={s.firstcontainer}>
        <div className={s.container}>
          <h1 className={s.firstTitle}>{`${firstName}`}</h1>
          <h2 className={s.secondTitle}>{`${lastname}`}</h2>
          <h3 className={s.thridTitle}>{`${developer}`}</h3>
        </div>
        <img className={s.img_fred} src="asset/fredportfolio.jpg" />
      </div>
    </>
  );
};
