import styles from './BurgerMenu.module.css'
import Line from "../line/Line";
import {JSX} from "react";

export default function BurgerMenu() {


    const lines: JSX.Element[] = [];

    function repeatLines(): JSX.Element[] {
        for (let i = 0; i < 3; i++) {
            lines.push(<Line key={i}/>);
        }
        return lines
    }

    return (
        <>
            <button className={styles.burgerMenu}>
                {repeatLines()}
            </button>
        </>
    )

}
