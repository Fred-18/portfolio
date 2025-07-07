import styles from './BurgerMenu.module.css'
import Line from "../line/Line";

export default function BurgerMenu() {
    return (
        <>
            <button className={styles.burgerMenu}>
                <Line/>
                <Line/>
                <Line/>
            </button>
        </>
    )
}