import React from "react";
import s from "./style.module.css";

export const AboutMe = () => {
  const presentation =
    "Hello, my name is Fred and I am a junior developer passionate about the web. I live in France and specialize in frontend development, striving to create innovative and high-performance solutions. The languages I mainly use are JavaScript, TypeScript, HTML, and CSS. I also have backend skills, primarily using Java. In addition to coding, I am passionate about sports, with a particular interest in soccer, football, and basketball. I also enjoy reading and music. My goal is to continually improve my skills and share my knowledge with the community";
  const title = "About me";
  return (
    <>
      <div className={s.firstcontainer}>
        <div className={s.container}>
          <h1 class="text-h1 text-custom-white font-pt underline">
            {`${title}`}{" "}
          </h1>
          <p class="text-custom-withe font-pt">{`${presentation}`}</p>
        </div>
      </div>
    </>
  );
};
