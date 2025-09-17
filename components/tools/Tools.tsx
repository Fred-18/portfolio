import Card from "../card/Card";
import styles from './Tools.module.css';
import {toolsContent} from "@/content/toolsContent";

export default function Tools() {

    return (
        <>
            <h2 className={styles.Tools__title}>{toolsContent.Tools.title}</h2>
            <div className={styles.Tools__container}>
                <Card/>
            </div>
        </>
    )
}