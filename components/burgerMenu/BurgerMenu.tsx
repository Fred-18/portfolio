"use client"
import styles from './BurgerMenu.module.css'
import Line from "../line/Line";
import {JSX} from "react";
import {BurgerMenuProps} from "../../Type/type";

export default function BurgerMenu({isOpen,onToggleAction}:BurgerMenuProps) {

    const isToggleMenu = () => {
        onToggleAction()
    }

    const repeatLines = () => {
        const lines: JSX.Element[] = [];
        for (let i = 0; i < 3; i++) {
            lines.push(<Line key={i}/>);
        }
        return lines
    };

    return (<>
        <button onClick={isToggleMenu} className={styles.mobileNavToggle} aria-controls={"primary-navigation"}
                aria-expanded={isOpen}>
            {isOpen ? <span className={styles.closeIcon}>X</span> : repeatLines()}
        </button>
    </>)
}
