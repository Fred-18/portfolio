import styles from './Hero.module.css'
import Image from "next/image";
import BurgerMenu from "../burgerMenu/BurgerMenu";

export default function Hero() {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.secondeContainer}>
                    <BurgerMenu/>
                    <h1>HI THERE!</h1>
                    <h2>I&#39;m Fred Nobre , a full-Stack developper<br/> based in<br/> France.</h2>
                </div>
                <figure className={styles.imageWrapper}>
                    <Image className={styles.turtel} src={"/assets/turtelWithbackground.svg"} alt={"fred turtel"}
                           fill/>
                </figure>
            </section>
        </>
    )
}