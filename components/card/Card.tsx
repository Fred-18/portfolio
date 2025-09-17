import {cardContent} from "@/content/cardContent";
import styles from './Card.module.css';
export default function Card(){

    return (
        <>
            <div className={styles.Card__container}>
                <h2 className={styles.card__title}>{cardContent.Card.title[0]}</h2>
                <img className={styles.Card__images} src={cardContent.Card.images.src[0]}/>
            </div>
        </>
    )
}