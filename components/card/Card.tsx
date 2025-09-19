import styles from './Card.module.css';
import {CardItem} from "../../Type/type";

export default function Card({title, images}: CardItem) {

    return (
        <>
            <article className={styles.Card__container}>
                <img src={images} className={styles.Card__images} alt={title}/>
                <div className={styles.card__title__container}>
                    <h3 className={styles.card__title}>{title}</h3>
                </div>
            </article>
        </>
    )
}