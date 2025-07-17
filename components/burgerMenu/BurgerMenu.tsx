import styles from './BurgerMenu.module.css'
import Line from "../line/Line";
import {JSX} from "react";

export default function BurgerMenu() {


    function repeatLines(): JSX.Element[] {
        const lines: JSX.Element[] = [];
        for (let i = 0; i < 3; i++) {
            lines.push(<Line key={i}/>);
        }
        return lines
    }

    return (<>
        <button className={styles.mobileNavToggle} aria-controls={"primary-navigation"} aria-expanded={"false"}>
            {repeatLines()}
        </button>
    </>)

}
