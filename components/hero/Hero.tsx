import styles from './Hero.module.css'
import { portfolioContent } from "@/content/portfolioContent";

export default function Hero() {
    return (
        <>
            <header className={styles.container}>
                <figure className={styles.imageWrapper}>
                    <div className={styles.secondeContainer}>
                        <h1>{portfolioContent.Hero.title}</h1>
{
                        <h2>{portfolioContent.Hero.subtitle}</h2>
}
                    </div>
                    <div className={styles.turtleContainer}>
                      { <img className={styles.turtel}
                               src={portfolioContent.Hero.images}
                               alt={"fred turtle"}/>}
                    </div>
                </figure>
            </header>
        </>
    )
}
/*todo Régler le souci du responsive avec le composant hero
*  Je dois savoir si je mets la tortue dans le composant ou non, et dans quels des cas je la ferais disparaitre*/