import {cardContent} from "@/content/cardContent";
import styles from './Card.module.css';

export default function Card() {

    return (
        <>
            <div className={styles.Card__container}>
                <img className={styles.Card__images} src={cardContent.Card.images.src[0]}/>
                <div className={styles.card__title__container}>
                    <h3 className={styles.card__title}>{cardContent.Card.title[0]}</h3>
                </div>
            </div>
        </>
    )
}