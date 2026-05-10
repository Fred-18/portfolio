import { aboutMeContent } from "../../src/content/aboutMeContent";
import styles from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <>
      <section className={styles.sectionAboutMe}>
        <div className={styles.sectionAboutMe__container}>
          <h2 id="aboutMe" className={styles.sectionAboutMe__title}>
            {aboutMeContent.AboutMe.title}
          </h2>
          <p className={styles.sectionAboutMe__description}>
            {aboutMeContent.AboutMe.aboutMeDescription}
          </p>
        </div>
      </section>
    </>
  );
}
