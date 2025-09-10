import {aboutMeContent} from "@/content/aboutMeContent";
import styles from './AboutMe.module.css';

export default function AboutMe() {

    return (
        <>
            <section className={styles.sectionAboutMe}>
                <div className={styles.section__title__p}>
                <h2 className={styles.section__title}>{aboutMeContent.AboutMe.title}</h2>
                <p className={styles.section__p}>{aboutMeContent.AboutMe.p}</p>
                </div>
                <img className={styles.sectionAboutMeImages} src={aboutMeContent.AboutMe.images}/>
            </section>
        </>
    )
}