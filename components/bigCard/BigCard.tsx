 import {BigCardItem} from "../../Type/type";
import styles from "../bigCard/BigCard.module.css"

export default function BigCard({title,techno,link,description}: BigCardItem){

    return(
        <>
            <section className={styles.bigCardContainer}>
            <h3 className={styles.bigCard__title}>{title}</h3>
            <p className={styles.bigCard__description}>Description : {description}</p>
            <span className={styles.bigCard__techno}>Tools : {techno}</span><br/>
            <a  className={styles.bigCard__link} href={link} target="_blank">{link}</a>
            </section>
        </>
    )
}