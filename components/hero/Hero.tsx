import styles from './Hero.module.css'
import Image from "next/image";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import NavigationBar from "../navigationBar/NavigationBar";

export default function Hero() {
    return (
        <>
            <header className={styles.container}>
                <BurgerMenu/>
                <NavigationBar/>
                <figure className={styles.imageWrapper}>
                    <div>

                        <div className={styles.secondeContainer}>
                            <h1>HI THERE!</h1>
                            <h2>I&#39;m Fred Nobre , a full-Stack developper<br/> based in<br/> France.</h2>

                            <Image className={styles.turtel}
                                   src={"/assets/turtelWithbackground.svg"}
                                   alt={"fred turtel"}
                                   fill
                                   sizes="(max-width: 768px) 100vw, 50vw"/>

                        </div>
                    </div>
                </figure>
            </header>
        </>
    )
}