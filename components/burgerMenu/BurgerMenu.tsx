"use client"
import styles from './BurgerMenu.module.css'
import Line from "../line/Line";
import {JSX, useState} from "react";

export default function BurgerMenu() {

const[isMenuOpen,setIsMenuOpen]=useState(false);

 function isToggelMenu(){
     setIsMenuOpen(prev=>!prev)
 }
    function repeatLines(): JSX.Element[] {
        const lines: JSX.Element[] = [];
        for (let i = 0; i < 3; i++) {
            lines.push(<Line key={i}/>);
        }
        return lines
    }

    return (<>
        <button onClick={()=>isToggelMenu()} className={styles.mobileNavToggle} aria-controls={"primary-navigation"} aria-expanded={"false"}>
            {isMenuOpen?<span className={styles.closeIcon}>X</span>:repeatLines()}
        </button>
    </>)

}
