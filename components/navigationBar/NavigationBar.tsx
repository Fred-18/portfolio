"use client"
import styles from "./Navigation.module.css"
import BurgerMenu from "../burgerMenu/BurgerMenu";
import React, {useState} from "react";

export default function NavigationBar() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const updateNavbarState = () => {
        setMenuIsOpen(prev => !prev)
    }

    return <>
        <nav>
            <div className={styles.bm}><BurgerMenu isOpen={menuIsOpen} onToggleAction={updateNavbarState}/></div>
            <div className={styles.smallHeader}>
                <img className={styles.turtel} src={"./assets/turtelWithbackground.svg"}/>
                <a className={styles.linkHome} href={"home"}><span>Fred Nobre</span></a>
            </div>
            <ul className={`${styles.primaryNavigation} ${menuIsOpen ? styles.open : ''}`}>
                <li><a className={styles.link} href={"aboutMe"}><span>About me</span></a></li>
                <li><a className={styles.link} href={"projects"}><span>Projects</span></a></li>
                <li><a className={styles.link} href={"Contact"}><span>Contact</span></a></li>
                <li><a className={styles.link} href={"skills"}><span>Skills</span></a></li>
                <li><a className={styles.link} href={"tools"}><span>Tools</span></a></li>
                <li><a className={styles.link} href={"certificates"}><span>Certificates</span></a></li>
            </ul>
        </nav>
    </>;
};
