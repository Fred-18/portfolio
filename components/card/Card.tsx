import styles from './Card.module.css';
import {CardItem} from "../../Type/type";

export default function Card({cardTitle, cardImages}: CardItem) {

    return (
        <>
            <article className={styles.Card__container}>
                <img src={cardImages} className={styles.Card__images} alt={cardTitle}/>
                <div className={styles.card__title__container}>
                    <h3 className={styles.card__title}>{cardTitle}</h3>
                </div>
            </article>
        </>
    )
}