import styles from './Hero.module.css'
import {portfolioContent} from "@/content/portfolioContent";

export default function Hero() {
    return (
        <>
            <header className={styles.container}>
                <figure className={styles.imageWrapper}>
                    <h1 className={styles.title}>{portfolioContent.Hero.title}</h1>
                    <h2 className ={styles.subtitle}>{portfolioContent.Hero.subtitle}</h2>

                    <img className={styles.turtle}
                         src={portfolioContent.Hero.images}
                         alt={"fred turtle"}/>
                </figure>
            </header>
        </>
    )
}
