import styles from "./Navigation.module.css"

export default function NavigationBar() {

    return (<nav>
        <ul id={"primary-navigation"} className={styles.primaryNavigation}>
            <li className={"active"}><a className={styles.link} href={"home"}><span>Home</span></a></li>
            <li><a className={styles.link} href={"aboutMe"}><span>About me</span></a></li>
            <li><a className={styles.link} href={"projects"}><span>Projects</span></a></li>
            <li><a className={styles.link} href={"Contact"}><span>Contact</span></a></li>
            <li><a className={styles.link} href={"skills"}><span>Skills</span></a></li>
            <li><a className={styles.link} href={"tools"}><span>Tools</span></a></li>
            <li><a className={styles.link} href={"certificates"}><span>Certificates</span></a></li>
        </ul>
    </nav>)
}