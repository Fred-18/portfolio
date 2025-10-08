 import {BigCardItem} from "../../Type/type";
import styles from "../bigCard/BigCard.module.css"

export default function BigCard({title,techno,link,description}: BigCardItem){

    return(
        <>
            <section className={styles.bigCardContainer}>
                <h3 className={styles.bigCard__title}>{title}</h3>
                <h6 className={styles.bigCard__descriptionTitle}>Description :</h6>
                <p className={styles.bigCard__description}> {description}</p>
                <h6 className={styles.bigCard__toolsTitle}>Tools :</h6>
                <span className={styles.bigCard__techno}> {techno}</span><br/>
                <h6 className={styles.bigCard__linksTitle}>Lien du Project :</h6>
                <a className={styles.bigCard__link} href={link} target="_blank"> {link}</a>
            </section>
        </>
    )
}