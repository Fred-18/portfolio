import styles from "./Navigation.module.css"

export default function NavigationBar() {

    return (
        <nav className={styles.navigationBar}>
            <ul className={styles.nopuce}>
                <li>Home</li>
                <li>About me</li>
                <li>Project</li>
                <li>Contact</li>
                <li>Skills</li>
                <li>Tools</li>
                <li>Certificates</li>
            </ul>
        </nav>
    )
}